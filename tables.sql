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
		payer TEXT,
		payee TEXT,
		amount INTEGER,
		date VARCHAR,
		completed BOOLEAN
);

-- psql -d osps -f tables.sql

-- CREATE TABLE IF NOT EXISTS payments (
-- 		id SERIAL PRIMARY KEY,
-- 		payerid INTEGER,
-- 		payeeid INTEGER,
-- 		amount FLOAT,
-- 		date VARCHAR,
-- 		completed BOOLEAN
-- );