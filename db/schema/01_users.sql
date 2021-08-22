-- Drop and recreate Users table (Example)

DROP TABLE IF EXISTS clients CASCADE;
CREATE TABLE clients (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  phone VARCHAR(32) NOT NULL
  -- admin BOOLEAN NOT NULL
);


