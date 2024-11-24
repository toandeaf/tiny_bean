use crate::generic::{DrinkDTO, ServiceError};
use crate::orders::storage::create_order;
use crate::orders::{CreateOrderResponse, OrderService};

pub struct OrderServiceImpl {}

impl OrderService for OrderServiceImpl {
    async fn create_order() -> Result<CreateOrderResponse, ServiceError> {
        let drinks: Vec<DrinkDTO> = vec![];
        let res = create_order(drinks);

        match res {
            Ok(response) => Ok(response),
            Err(_e) => Err(ServiceError::DatabaseError(
                "Failed to create order".to_string(),
            )),
        }
    }
}
