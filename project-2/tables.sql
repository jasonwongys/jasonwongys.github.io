CREATE TABLE IF NOT EXISTS items (
    id SERIAL PRIMARY KEY,
    name TEXT,
    price TEXT
);

CREATE TABLE IF NOT EXISTS cart (
	id SERIAL PRIMARY KEY,
	name TEXT,
	price TEXT,
	quantity INTEGER
);

CREATE TABLE IF NOT EXISTS item_cart (
	id SERIAL PRIMARY KEY,
	cart_id INTEGER,
	item_id INTEGER,
	total_cost TEXT,
	cart_quantity INTEGER
);