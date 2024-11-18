use crate::db::generated::models::Order;
use crate::db::generated::schema::orders::dsl::orders;
use crate::orders::CreateOrderResponse;
use crate::storage::get_connection;
use diesel::dsl::insert_into;
use diesel::RunQueryDsl;

pub fn create_order() -> Option<CreateOrderResponse> {
    let mut conn = get_connection();

    let orders_result = insert_into(orders)
        .default_values()
        .get_result::<Order>(&mut conn);

    match orders_result {
        Ok(order) => {
            println!("Created order: {:?}", order);
            Some(CreateOrderResponse {
                message: "Order created".to_string(),
            })
        }
        Err(e) => {
            eprintln!("Failed to create order: {}", e);
            None
        }
    }
}
