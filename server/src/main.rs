mod api;
mod generic;
mod test;

use crate::api::{initialize_api_router, initialize_listener, initialize_static_assets};
use axum::{serve, Router};
use std::env::args;

const DEFAULT_PORT: &str = "3000";

#[tokio::main]
async fn main() {
    #[cfg(not(feature = "dev"))]
    {
        initialize_server().await;
    }

    #[cfg(feature = "dev")]
    {
        initialize_dev_server().await;
    }
}

async fn initialize_server() {
    let (static_dir_arg, port_arg) = get_command_line_args();

    let (static_assets, index_file) = initialize_static_assets(&static_dir_arg);

    let api_router = initialize_api_router();
    let router = Router::new()
        .nest_service("/static", static_assets)
        .nest("/api", api_router)
        .fallback_service(index_file);

    let listener = initialize_listener(&port_arg).await;

    serve(listener, router).await.expect("Server failed");
}

async fn initialize_dev_server() {
    let api_router = initialize_api_router();

    let router = Router::new().nest("/api", api_router);
    let listener = initialize_listener(DEFAULT_PORT).await;

    serve(listener, router).await.expect("Server failed");
}

fn get_command_line_args() -> (String, String) {
    let args: Vec<String> = args().collect();
    let static_dir_arg = args
        .get(1)
        .expect("Please provide a static directory in the CLI arguments");
    let port_arg = args
        .get(2)
        .expect("Please provide a port in the CLI arguments");

    (static_dir_arg.to_string(), port_arg.to_string())
}
