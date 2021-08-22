DROP TABLE IF EXISTS menu_items CASCADE;
CREATE TABLE menu_items (
  id SERIAL PRIMARY KEY NOT NULL,
  category_id INTEGER REFERENCES categories(id) ON DELETE CASCADE,
  name VARCHAR(255) NOT NULL,
  price INTEGER NOT NULL,
  image TEXT,
  description VARCHAR(500),
  option INTEGER
);
