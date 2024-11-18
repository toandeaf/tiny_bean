use crate::db::generated::models::{
    Drink, DrinkExtra, DrinkStatusUpdate, Order, OrderDrink, OrderStatusUpdate,
};
use crate::db::generated::schema::drink_extras::dsl::drink_extras;
use crate::db::generated::schema::drink_status_updates::dsl::drink_status_updates;
use crate::db::generated::schema::drinks::dsl::drinks;
use crate::db::generated::schema::order_drinks::dsl::order_drinks;
use crate::db::generated::schema::order_status_updates::dsl::order_status_updates;
use crate::db::generated::schema::orders::dsl::orders;
use crate::generic::{
    match_drink_status_to_value, match_drink_type_to_value, match_extra_to_value,
    match_milk_type_to_value, match_order_status_to_value, match_size_to_value, DrinkDTO,
    DrinkStatusDTO, ExtrasDTO, OrderStatusDTO,
};
use crate::orders::CreateOrderResponse;
use crate::storage::get_connection;
use diesel::dsl::insert_into;
use diesel::r2d2::ConnectionManager;
use diesel::result::Error;
use diesel::{Connection, QueryResult, RunQueryDsl, SqliteConnection};
use r2d2::PooledConnection;

pub fn create_order(new_drinks: Vec<DrinkDTO>) -> Result<CreateOrderResponse, Error> {
    let mut conn = get_connection();
    let mut drink_vec: Vec<i32> = Vec::with_capacity(new_drinks.len());

    conn.transaction(|trans_conn| {
        for (index, new_drink) in new_drinks.iter().enumerate() {
            let drink = persist_drink(trans_conn, new_drink)?;

            let drink_id = drink.id;
            drink_vec[index] = drink_id;
        }

        let order = persist_order(trans_conn, drink_vec)?;

        Ok(CreateOrderResponse { order_id: order.id })
    })
}

fn persist_order(
    conn: &mut PooledConnection<ConnectionManager<SqliteConnection>>,
    drink_ids: Vec<i32>,
) -> QueryResult<Order> {
    let order = insert_into(orders)
        .default_values()
        .get_result::<Order>(conn)?;

    let order_id = order.id;

    insert_into(order_drinks)
        .values(
            drink_ids
                .iter()
                .map(|drink_id| OrderDrink {
                    order_id,
                    drink_id: *drink_id,
                })
                .collect::<Vec<OrderDrink>>(),
        )
        .execute(conn)?;

    insert_into(order_status_updates)
        .values(&OrderStatusUpdate {
            order_id,
            order_status_id: match_order_status_to_value(&OrderStatusDTO::Pending),
            updated_at: chrono::Utc::now().naive_utc(),
        })
        .execute(conn)?;

    Ok(order)
}

fn persist_drink(
    conn: &mut PooledConnection<ConnectionManager<SqliteConnection>>,
    new_drink: &DrinkDTO,
) -> QueryResult<Drink> {
    // TODO add models for new inserts
    let drink_to_persist = Drink {
        id: 0,
        drink_type_id: match_drink_type_to_value(&new_drink.drink_type),
        number_of_shots: new_drink.number_of_shots as i32,
        milk_type_id: match_milk_type_to_value(&new_drink.milk_type),
        size_id: match_size_to_value(&new_drink.size),
        notes: new_drink.notes.clone(),
    };

    let drink = insert_into(drinks)
        .values(&drink_to_persist)
        .get_result::<Drink>(conn)?;

    let drink_id = drink.id;

    if !new_drink.extras.is_empty() {
        persist_drink_extras(conn, drink_id, &new_drink.extras)?;
    }

    persist_drink_status_update(conn, drink_id, DrinkStatusDTO::Pending)?;

    Ok(drink)
}

fn persist_drink_status_update(
    conn: &mut PooledConnection<ConnectionManager<SqliteConnection>>,
    drink_id: i32,
    drink_status: DrinkStatusDTO,
) -> QueryResult<usize> {
    insert_into(drink_status_updates)
        .values(&DrinkStatusUpdate {
            drink_id,
            drink_status_id: match_drink_status_to_value(&drink_status),
            updated_at: chrono::Utc::now().naive_utc(),
        })
        .execute(conn)
}

fn persist_drink_extras(
    conn: &mut PooledConnection<ConnectionManager<SqliteConnection>>,
    drink_id: i32,
    extras: &[ExtrasDTO],
) -> QueryResult<usize> {
    let drink_extras_val = extras
        .iter()
        .map(|extra| DrinkExtra {
            drink_id,
            extra_id: match_extra_to_value(extra),
        })
        .collect::<Vec<DrinkExtra>>();

    insert_into(drink_extras)
        .values(drink_extras_val)
        .execute(conn)
}
