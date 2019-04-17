DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS payments;

CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    name TEXT,
    phone VARCHAR,
    username TEXT,
    password VARCHAR
);

CREATE TABLE IF NOT EXISTS payments (
		id SERIAL PRIMARY KEY,
		userid INTEGER,
		payeeid INTEGER,
		amount FLOAT,
		date VARCHAR,
		completed BOOLEAN
);

psql -d DATABASE -u USERNAME osps -f tables.sql