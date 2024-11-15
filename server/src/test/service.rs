use crate::generic::ServiceError;
use crate::test::{TestMessage, TestService};

pub struct TestServiceImpl;

impl TestService for TestServiceImpl {
    async fn get_test_message() -> Result<TestMessage, ServiceError> {
        Ok(TestMessage {
            message: "Hello, World!".to_string(),
        })
    }
}
