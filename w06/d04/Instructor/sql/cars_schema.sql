--make, model, year, color
-- DROP TABLE cars;

CREATE TABLE cars (
  id integer primary key autoincrement,
  make varchar NOT NULL,
  model varchar NOT NULL,
  color varchar NOT NULL,
  year integer NOT NULL
);