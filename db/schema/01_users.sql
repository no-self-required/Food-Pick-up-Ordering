-- Drop and recreate Users table (Example)

DROP TABLE IF EXISTS clients CASCADE;
CREATE TABLE clients (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  phone VARCHAR(32) NOT NULL,
  admin BOOLEAN NOT NULL
);

DROP TABLE IF EXISTS orders CASCADE;
CREATE TABLE orders (
  id SERIAL PRIMARY KEY NOT NULL,
  client_id INTEGER REFERENCES clients(id) ON DELETE CASCADE,
  menu_item_id INTEGER REFERENCES menu_items(id) ON DELETE CASCADE,
  order_time TIMESTAMP DEFAULT NOW() NOT NULL,
  prep_time TIMESTAMP NOT NULL,
  note TEXT,
  is_paid BOOLEAN NOT NULL DEFAULT FALSE,
  total_price INTEGER NOT NULL,
  order_status INTEGER NOT NULL
);

DROP TABLE IF EXISTS menu_items CASCADE;
CREATE TABLE menu_items (
  id SERIAL PRIMARY KEY NOT NULL,
  category_id INTEGER REFERENCES categories(id) ON DELETE CASCADE,
  name VARCHAR(255) NOT NULL,
  price INTEGER NOT NULL,
  image TEXT,
  description VARCHAR(500),
  option INTEGER
)

DROP TABLE IF EXISTS categories CASCADE;
CREATE TABLE categories (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL
)

/*ORDER STATUS
    1 pending
    2 preparing
    3 completed */
