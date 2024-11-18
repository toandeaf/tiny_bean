pub enum DrinkTypeDTO {
    Americano,
    Espresso,
    Cappuccino,
    Latte,
    IcedLatte,
    Matcha,
}

pub enum MilkTypeDTO {
    None,
    Whole,
    Skim,
    Oat,
    Almond,
}

pub enum SizeDTO {
    Small,
    Medium,
    Large,
}

pub enum ExtrasDTO {
    Caramel,
    Hazelnut,
    Mint,
    Vanilla,
    Cream,
    Chocolate,
    Decaf,
}

pub struct DrinkDTO {
    pub drink_type: DrinkTypeDTO,
    pub number_of_shots: u8,
    pub milk_type: MilkTypeDTO,
    pub size: SizeDTO,
    pub extras: Vec<ExtrasDTO>,
    pub notes: Option<String>,
    pub status: Option<DrinkStatusDTO>,
}

pub enum DrinkStatusDTO {
    Pending,
    InProgress,
    Completed,
    Cancelled,
}

pub enum OrderStatusDTO {
    Pending,
    InProgress,
    Completed,
    Cancelled,
}
