use axum::{http::StatusCode, routing::get, serve, Json, Router};
use serde::{Deserialize, Serialize};
use std::env;
use std::path::Path;
use std::string::ToString;
use tokio::net::TcpListener;
use tower_http::services::{ServeDir, ServeFile};

#[tokio::main]
async fn main() {
    let args: Vec<String> = env::args().collect();
    let static_dir_arg = args
        .get(1)
        .expect("Please provide a static directory in the CLI arguments");

    let fallback_port: &String = &"3000".to_string();
    let port_arg = args.get(2).unwrap_or(fallback_port);

    let static_assets = ServeDir::new(static_dir_arg);

    let index_file = ServeFile::new(Path::new(static_dir_arg).join("index.html"));

    let router = Router::new()
        .nest_service("/", index_file)
        .nest_service("/static", static_assets)
        .route("/users", get(get_user).post(create_user))
        .fallback_service(ServeFile::new(Path::new(static_dir_arg).join("index.html")));

    let address = format!("0.0.0.0:{}", port_arg);

    let listener = TcpListener::bind(address)
        .await
        .expect("Failed to bind to port 3000");

    println!("Initializing server on port 3000");

    serve(listener, router).await.expect("Server failed");
}

async fn get_user() -> (StatusCode, Json<User>) {
    let user = User {
        id: 1337,
        username: "Jake Toan".to_string(),
    };

    (StatusCode::OK, Json(user))
}

async fn create_user(Json(payload): Json<CreateUser>) -> (StatusCode, Json<User>) {
    let user = User {
        id: 1337,
        username: payload.username,
    };

    (StatusCode::CREATED, Json(user))
}

#[derive(Deserialize)]
struct CreateUser {
    username: String,
}

#[derive(Serialize)]
struct User {
    id: u64,
    username: String,
}
