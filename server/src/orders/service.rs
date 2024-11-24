use crate::generic::{DrinkDTO, DrinkTypeDTO, MilkTypeDTO, ServiceError, SizeDTO};
use crate::orders::storage::create_order;
use crate::orders::{CreateOrderResponse, OrderService};

pub struct OrderServiceImpl {}

const TEST_ORDER: DrinkDTO = DrinkDTO {
    drink_type: DrinkTypeDTO::Americano,
    size: SizeDTO::Large,
    milk_type: MilkTypeDTO::None,
    extras: vec![],
    status: None,
    notes: None,
    number_of_shots: 2
};

impl OrderService for OrderServiceImpl {
    async fn create_order() -> Result<CreateOrderResponse, ServiceError> {
        let drinks: Vec<DrinkDTO> = vec![TEST_ORDER];
        let res = create_order(drinks);

        match res {
            Ok(response) => Ok(response),
            Err(_e) => Err(ServiceError::DatabaseError(
                "Failed to create order".to_string(),
            )),
        }
    }
}
