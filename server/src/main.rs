use axum::{
    http::StatusCode,
    routing::{get, post},
    serve, Json, Router,
};
use serde::{Deserialize, Serialize};
use tokio::net::TcpListener;
use tower_http::services::ServeDir;

#[tokio::main]
async fn main() {
    tracing_subscriber::fmt::init();

    let server = ServeDir::new("/home/jaketoan/dist");

    let router = Router::new()
        .nest_service("/", server)
        .route("/users", get(get_user))
        .route("/users", post(create_user));

    let listener = TcpListener::bind("0.0.0.0:3000")
        .await
        .expect("Failed to bind to port 3000");

    serve(listener, router).await.unwrap();
}

async fn root() -> &'static str {
    "Hello, World!"
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
