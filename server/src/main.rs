use axum::{
    http::StatusCode,
    routing::{get, post},
    serve, Json, Router,
};
use serde::{Deserialize, Serialize};
use std::path::Path;
use tokio::net::TcpListener;
use tower_http::services::{ServeDir, ServeFile};

const STATIC_DIR: &str = "/home/jaketoan/dist";

#[tokio::main]
async fn main() {
    let static_assets = ServeDir::new(STATIC_DIR)
        .append_index_html_on_directories(false);

    let index_file = ServeFile::new(Path::new(STATIC_DIR)
        .join("index.html"));

    let router = Router::new()
        .nest_service("/", index_file)
        .nest_service("/static", static_assets)
        .route("/users", get(get_user))
        .route("/users", post(create_user));

    let listener = TcpListener::bind("0.0.0.0:3000")
        .await
        .expect("Failed to bind to port 3000");

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
