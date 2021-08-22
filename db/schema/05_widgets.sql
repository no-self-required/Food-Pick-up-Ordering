-- Drop and recreate Widgets table (Example)

DROP TABLE IF EXISTS widgets CASCADE;
DROP TABLE IF EXISTS category CASCADE;
DROP TABLE IF EXISTS menu CASCADE;

CREATE TABLE widgets (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id),
  name VARCHAR(255) NOT NULL
);
