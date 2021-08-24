DROP TABLE IF EXISTS orders CASCADE;
CREATE TABLE orders (
  id SERIAL PRIMARY KEY NOT NULL,
  client_id INTEGER REFERENCES clients(id) ON DELETE CASCADE,
  menu_item_id INTEGER REFERENCES menu_items(id) ON DELETE CASCADE,
  order_time TIMESTAMP DEFAULT NOW() NOT NULL,
  prep_time TIMESTAMP NOT NULL,
  note TEXT,
  is_paid BOOLEAN NOT NULL DEFAULT FALSE,
  total_price DECIMAL(5, 2) NOT NULL,
  order_status INTEGER NOT NULL
);

/*ORDER STATUS
    1 pending
    2 preparing
    3 completed */
