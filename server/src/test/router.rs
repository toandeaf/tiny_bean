use crate::test::controller::TestControllerImpl;
use crate::test::{TestController, TestRouter};
use axum::routing::get;
use axum::Router;

pub struct TestRouterImpl;

impl TestRouter for TestRouterImpl {
    type TestController = TestControllerImpl;

    fn get_test_router() -> Router {
        Router::new().route("/", get(Self::TestController::get_test_message_response))
    }
}
