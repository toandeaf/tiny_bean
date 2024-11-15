use crate::generic::status_code_from_error;
use crate::test::service::TestServiceImpl;
use crate::test::{TestController, TestMessage, TestService};
use axum::http::StatusCode;
use axum::Json;

pub struct TestControllerImpl;

impl TestController for TestControllerImpl {
    type TestService = TestServiceImpl;

    async fn get_test_message_response() -> (StatusCode, Json<TestMessage>) {
        let result = Self::TestService::get_test_message().await;

        match result {
            Ok(message) => (StatusCode::OK, Json(message)),
            Err(err) => (
                status_code_from_error(&err),
                Json(TestMessage {
                    message: err.to_string(),
                }),
            ),
        }
    }
}
