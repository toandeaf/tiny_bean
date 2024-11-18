use crate::generic::*;

pub fn match_order_status_to_value(order_status: &OrderStatusDTO) -> i32 {
    match order_status {
        OrderStatusDTO::Pending => 1,
        OrderStatusDTO::InProgress => 2,
        OrderStatusDTO::Completed => 3,
        OrderStatusDTO::Cancelled => 4,
    }
}

pub fn match_drink_status_to_value(drink_status: &DrinkStatusDTO) -> i32 {
    match drink_status {
        DrinkStatusDTO::Pending => 1,
        DrinkStatusDTO::InProgress => 2,
        DrinkStatusDTO::Completed => 3,
        DrinkStatusDTO::Cancelled => 4,
    }
}

pub fn match_extra_to_value(extra: &ExtrasDTO) -> i32 {
    match extra {
        ExtrasDTO::Caramel => 1,
        ExtrasDTO::Hazelnut => 2,
        ExtrasDTO::Mint => 3,
        ExtrasDTO::Vanilla => 4,
        ExtrasDTO::Cream => 5,
        ExtrasDTO::Chocolate => 6,
        ExtrasDTO::Decaf => 7,
    }
}

pub fn match_milk_type_to_value(milk_type: &MilkTypeDTO) -> i32 {
    match milk_type {
        MilkTypeDTO::None => 1,
        MilkTypeDTO::Whole => 2,
        MilkTypeDTO::Skim => 3,
        MilkTypeDTO::Oat => 4,
        MilkTypeDTO::Almond => 5,
    }
}

pub fn match_size_to_value(size: &SizeDTO) -> i32 {
    match size {
        SizeDTO::Small => 1,
        SizeDTO::Medium => 2,
        SizeDTO::Large => 3,
    }
}

pub fn match_drink_type_to_value(drink_type: &DrinkTypeDTO) -> i32 {
    match drink_type {
        DrinkTypeDTO::Americano => 1,
        DrinkTypeDTO::Espresso => 2,
        DrinkTypeDTO::Cappuccino => 3,
        DrinkTypeDTO::Latte => 4,
        DrinkTypeDTO::IcedLatte => 5,
        DrinkTypeDTO::Matcha => 6,
    }
}
