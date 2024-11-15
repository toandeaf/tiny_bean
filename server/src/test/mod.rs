mod controller;
mod router;
mod service;

use crate::generic::ServiceError;
use axum::http::StatusCode;
use axum::{Json, Router};
pub use router::TestRouterImpl;
use serde::Serialize;

#[derive(Serialize)]
pub struct TestMessage {
    pub message: String,
}

pub trait TestRouter {
    type TestController;
    fn get_test_router() -> Router;
}

pub trait TestController {
    type TestService;
    async fn get_test_message_response() -> (StatusCode, Json<TestMessage>);
}

pub trait TestService {
    async fn get_test_message() -> Result<TestMessage, ServiceError>;
}
