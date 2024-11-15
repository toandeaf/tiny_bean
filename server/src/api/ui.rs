use std::path::Path;
use tower_http::services::{ServeDir, ServeFile};

pub fn initialize_static_assets(static_dir_arg: &str) -> (ServeDir, ServeFile) {
    let static_assets = ServeDir::new(static_dir_arg);
    let index_file = ServeFile::new(Path::new(static_dir_arg).join("index.html"));

    (static_assets, index_file)
}
