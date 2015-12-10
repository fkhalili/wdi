DROP TABLE IF EXISTS items;

CREATE TABLE items(
  id serial PRIMARY KEY,
  name VARCHAR(255),
  category VARCHAR
);