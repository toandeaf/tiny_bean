mod api;
mod db;
mod generic;
mod test;

use crate::api::initialize_server;

#[tokio::main]
async fn main() {
    let enable_dev_mode = cfg!(feature = "dev");

    initialize_server(enable_dev_mode).await;
}
