use crate::generic::status_code_from_error;
use crate::orders::service::OrderServiceImpl;
use crate::orders::{CreateOrderResponse, OrderController, OrderService};
use axum::http::StatusCode;
use axum::Json;

pub struct OrderControllerImpl;

impl OrderController for OrderControllerImpl {
    type OrderService = OrderServiceImpl;

    async fn create_order() -> (StatusCode, Json<CreateOrderResponse>) {
        let result = Self::OrderService::create_order().await;

        match result {
            Ok(message) => (StatusCode::CREATED, Json(message)),
            Err(err) => (
                status_code_from_error(&err),
                Json(CreateOrderResponse { order_id: 0 }),
            ),
        }
    }
}
