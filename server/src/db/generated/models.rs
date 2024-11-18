// Generated by diesel_ext

#![allow(unused)]
#![allow(clippy::all)]


use chrono::NaiveDateTime;
#[derive(Serialize, Deserialize, Queryable, Debug, Identifiable)]
#[diesel(primary_key(drink_id, extra_id))]
pub struct DrinkExtra {
    pub drink_id: i32,
    pub extra_id: i32,
}

#[derive(Serialize, Deserialize, Queryable, Debug, Identifiable)]
#[diesel(primary_key(drink_id, drink_status_id))]
pub struct DrinkStatusUpdate {
    pub drink_id: i32,
    pub drink_status_id: i32,
    pub updated_at: NaiveDateTime,
}

#[derive(Serialize, Deserialize, Queryable, Debug, Identifiable)]
pub struct DrinkStatuse {
    pub id: i32,
    pub value: String,
}

#[derive(Serialize, Deserialize, Queryable, Debug, Identifiable)]
pub struct DrinkType {
    pub id: i32,
    pub value: String,
}

#[derive(Serialize, Deserialize, Queryable, Debug, Identifiable)]
pub struct Drink {
    pub id: i32,
    pub drink_type_id: i32,
    pub number_of_shots: i32,
    pub milk_type_id: i32,
    pub size_id: i32,
    pub notes: Option<String>,
}

#[derive(Serialize, Deserialize, Queryable, Debug, Identifiable)]
pub struct Extra {
    pub id: i32,
    pub name: String,
}

#[derive(Serialize, Deserialize, Queryable, Debug, Identifiable)]
pub struct MilkType {
    pub id: i32,
    pub value: String,
}

#[derive(Serialize, Deserialize, Queryable, Debug, Identifiable)]
#[diesel(primary_key(order_id, drink_id))]
pub struct OrderDrink {
    pub order_id: i32,
    pub drink_id: i32,
}

#[derive(Serialize, Deserialize, Queryable, Debug, Identifiable)]
#[diesel(primary_key(order_id, order_status_id))]
pub struct OrderStatusUpdate {
    pub order_id: i32,
    pub order_status_id: i32,
    pub updated_at: NaiveDateTime,
}

#[derive(Serialize, Deserialize, Queryable, Debug)]
pub struct OrderStatuse {
    pub id: i32,
    pub value: String,
}

#[derive(Serialize, Deserialize, Queryable, Debug)]
pub struct Order {
    pub id: i32,
}

#[derive(Serialize, Deserialize, Queryable, Debug)]
pub struct Size {
    pub id: i32,
    pub value: String,
}

// Required to resolve imports.
include!("imports.rs");
