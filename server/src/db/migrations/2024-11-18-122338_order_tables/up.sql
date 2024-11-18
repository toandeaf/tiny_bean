CREATE TABLE IF NOT EXISTS orders
(
    id            INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL
);

CREATE TABLE IF NOT EXISTS order_statuses
(
    id    INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
    value VARCHAR(50)                       NOT NULL
);

CREATE TABLE IF NOT EXISTS order_status_updates
(
    order_id        INTEGER   NOT NULL,
    order_status_id INTEGER   NOT NULL,
    updated_at      TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (order_id, order_status_id),
    FOREIGN KEY (order_id) REFERENCES orders (id),
    FOREIGN KEY (order_status_id) REFERENCES order_statuses (id)
);

CREATE TABLE IF NOT EXISTS order_drinks
(
    order_id  INTEGER NOT NULL,
    drink_id  INTEGER NOT NULL,
    PRIMARY KEY (order_id, drink_id),
    FOREIGN KEY (order_id) REFERENCES orders (id),
    FOREIGN KEY (drink_id) REFERENCES drinks (id)
);