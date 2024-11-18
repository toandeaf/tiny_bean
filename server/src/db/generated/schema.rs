// @generated automatically by Diesel CLI.

diesel::table! {
    drink_extras (drink_id, extra_id) {
        drink_id -> Integer,
        extra_id -> Integer,
    }
}

diesel::table! {
    drink_status (id) {
        id -> Integer,
        value -> Text,
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
    drink_type (id) {
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
    milk_type (id) {
        id -> Integer,
        value -> Text,
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
diesel::joinable!(drink_status_updates -> drink_status (drink_status_id));
diesel::joinable!(drink_status_updates -> drinks (drink_id));
diesel::joinable!(drinks -> drink_type (drink_type_id));
diesel::joinable!(drinks -> milk_type (milk_type_id));
diesel::joinable!(drinks -> size (size_id));

diesel::allow_tables_to_appear_in_same_query!(
    drink_extras,
    drink_status,
    drink_status_updates,
    drink_type,
    drinks,
    extras,
    milk_type,
    size,
);
