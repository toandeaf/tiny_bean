// @generated automatically by Diesel CLI.

diesel::table! {
    drink_extras (drink_id, extra_id) {
        drink_id -> Integer,
        extra_id -> Integer,
    }
}

diesel::table! {
    drink_status_updates (drink_id, drink_status_id) {
        drink_id -> Integer,
        drink_status_id -> Integer,
        updated_at -> Timestamp,
    }
}

diesel::table! {
    drink_statuses (id) {
        id -> Integer,
        value -> Text,
    }
}

diesel::table! {
    drink_types (id) {
        id -> Integer,
        value -> Text,
    }
}

diesel::table! {
    drinks (id) {
        id -> Integer,
        drink_type_id -> Integer,
        number_of_shots -> Integer,
        milk_type_id -> Integer,
        size_id -> Integer,
        notes -> Nullable<Text>,
    }
}

diesel::table! {
    extras (id) {
        id -> Integer,
        name -> Text,
    }
}

diesel::table! {
    milk_types (id) {
        id -> Integer,
        value -> Text,
    }
}

diesel::table! {
    order_drinks (order_id, drink_id) {
        order_id -> Integer,
        drink_id -> Integer,
    }
}

diesel::table! {
    order_status_updates (order_id, order_status_id) {
        order_id -> Integer,
        order_status_id -> Integer,
        updated_at -> Timestamp,
    }
}

diesel::table! {
    order_statuses (id) {
        id -> Integer,
        value -> Text,
    }
}

diesel::table! {
    orders (id) {
        id -> Integer,
        order_status -> Text,
    }
}

diesel::table! {
    size (id) {
        id -> Integer,
        value -> Text,
    }
}

diesel::joinable!(drink_extras -> drinks (drink_id));
diesel::joinable!(drink_extras -> extras (extra_id));
diesel::joinable!(drink_status_updates -> drinks (drink_id));
diesel::joinable!(drinks -> drink_types (drink_type_id));
diesel::joinable!(drinks -> milk_types (milk_type_id));
diesel::joinable!(drinks -> size (size_id));
diesel::joinable!(order_drinks -> drinks (drink_id));
diesel::joinable!(order_drinks -> orders (order_id));
diesel::joinable!(order_status_updates -> orders (order_id));

diesel::allow_tables_to_appear_in_same_query!(
    drink_extras,
    drink_status_updates,
    drink_statuses,
    drink_types,
    drinks,
    extras,
    milk_types,
    order_drinks,
    order_status_updates,
    order_statuses,
    orders,
    size,
);
