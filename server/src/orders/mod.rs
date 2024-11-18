mod controller;
mod router;
mod service;
mod storage;

use crate::generic::ServiceError;
use axum::http::StatusCode;
use axum::{Json, Router};
pub use router::OrderRouterImpl;
use serde::Serialize;

#[derive(Serialize)]
pub struct CreateOrderResponse {
    pub message: String,
}

pub trait OrderRouter {
    type OrderController;
    fn get_order_router() -> Router;
}

pub trait OrderController {
    type OrderService;
    async fn create_order() -> (StatusCode, Json<CreateOrderResponse>);
}

pub trait OrderService {
    async fn create_order() -> Result<CreateOrderResponse, ServiceError>;
}
