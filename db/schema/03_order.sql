DROP TABLE IF EXISTS orders CASCADE;
CREATE TABLE orders (
  id SERIAL PRIMARY KEY NOT NULL,
  menu_item_id INTEGER REFERENCES menu_items(id) ON DELETE CASCADE,
  phone VARCHAR(255) NOT NULL,
  order_time TIMESTAMP DEFAULT NOW() NOT NULL,
  prep_time TIMESTAMP NOT NULL,
  total_price DECIMAL(5, 2) NOT NULL,
  order_status INTEGER NOT NULL
);

/*ORDER STATUS
    1 pending
    2 preparing
    3 completed */
