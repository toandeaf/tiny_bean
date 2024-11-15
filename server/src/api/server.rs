use crate::test::TestRouter;
use crate::test::TestRouterImpl;
use axum::Router;
use tokio::net::TcpListener;

const IP_ADDRESS: &str = "0.0.0.0";

pub async fn initialize_listener(port: &str) -> TcpListener {
    let address = format!("{}:{}", IP_ADDRESS, port);

    TcpListener::bind(address)
        .await
        .expect("Failed to bind to port 3000")
}

pub fn initialize_api_router() -> Router {
    Router::new().nest("/test", TestRouterImpl::get_test_router())
}
