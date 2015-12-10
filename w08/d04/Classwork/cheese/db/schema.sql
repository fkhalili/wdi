DROP TABLE if exists cheeses;

CREATE TABLE cheeses(
  id serial PRIMARY KEY,
 	name VARCHAR,
 	sharpness INTEGER, 
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
