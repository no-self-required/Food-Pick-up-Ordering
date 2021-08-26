DROP TABLE IF EXISTS orders CASCADE;
CREATE TABLE orders (
  id SERIAL PRIMARY KEY NOT NULL,
  phone VARCHAR(255) NOT NULL,
  order_time TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  prep_time TIMESTAMP,
  total_price DECIMAL(5, 2) NOT NULL,
  order_status INTEGER NOT NULL
);

/*ORDER STATUS
    1 pending
    2 preparing
    3 completed */
