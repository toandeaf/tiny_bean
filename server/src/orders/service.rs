use crate::generic::ServiceError;
use crate::orders::storage::create_order;
use crate::orders::{CreateOrderResponse, OrderService};

pub struct OrderServiceImpl {}

impl OrderService for OrderServiceImpl {
    async fn create_order() -> Result<CreateOrderResponse, ServiceError> {
        let res = create_order();

        match res {
            Some(response) => Ok(response),
            None => Err(ServiceError::DatabaseError(
                "Failed to create order".to_string(),
            )),
        }
    }
}
