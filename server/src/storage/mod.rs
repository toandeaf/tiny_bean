use diesel::r2d2::{ConnectionManager, Pool, PooledConnection};
use diesel::sqlite::SqliteConnection;
use lazy_static::lazy_static;

type DbPool = Pool<ConnectionManager<SqliteConnection>>;

lazy_static! {
    pub static ref POOL: DbPool = {
        let db_path = dotenvy::var("DATABASE_URL").expect("DATABASE_URL must be set.");
        let manager = ConnectionManager::<SqliteConnection>::new(db_path);
        Pool::builder()
            .build(manager)
            .expect("Failed to create pool.")
    };
}

pub fn get_connection() -> PooledConnection<ConnectionManager<SqliteConnection>> {
    POOL.get()
        .expect("Failed to get a connection from the pool.")
}
