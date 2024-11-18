CREATE TABLE IF NOT EXISTS drink_types
(
    id    INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
    value VARCHAR(50)                       NOT NULL
);

CREATE TABLE IF NOT EXISTS milk_types
(
    id    INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
    value VARCHAR(50)                       NOT NULL
);

CREATE TABLE IF NOT EXISTS size
(
    id    INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
    value VARCHAR(50)                       NOT NULL
);

CREATE TABLE IF NOT EXISTS drinks
(
    id              INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
    drink_type_id   INTEGER                           NOT NULL,
    number_of_shots INTEGER                           NOT NULL,
    milk_type_id    INTEGER                           NOT NULL,
    size_id         INTEGER                           NOT NULL,
    notes           TEXT,
    FOREIGN KEY (drink_type_id) REFERENCES drink_types (id),
    FOREIGN KEY (milk_type_id) REFERENCES milk_types (id),
    FOREIGN KEY (size_id) REFERENCES size (id)
);

CREATE TABLE IF NOT EXISTS extras
(
    id   INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
    name VARCHAR(50)                       NOT NULL
);

CREATE TABLE IF NOT EXISTS drink_extras
(
    drink_id INTEGER NOT NULL,
    extra_id INTEGER NOT NULL,
    PRIMARY KEY (drink_id, extra_id),
    FOREIGN KEY (drink_id) REFERENCES drinks (id),
    FOREIGN KEY (extra_id) REFERENCES extras (id)
);

CREATE TABLE IF NOT EXISTS drink_statuses
(
    id    INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
    value VARCHAR(50)                       NOT NULL
);

CREATE TABLE IF NOT EXISTS drink_status_updates
(
    drink_id        INTEGER   NOT NULL,
    drink_status_id INTEGER   NOT NULL,
    updated_at      TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (drink_id, drink_status_id),
    FOREIGN KEY (drink_id) REFERENCES drinks (id),
    FOREIGN KEY (drink_status_id) REFERENCES drink_status (id)
);
