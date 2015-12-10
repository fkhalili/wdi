DROP TABLE IF EXISTS garages;
DROP TABLE IF EXISTS cars;

CREATE TABLE garages (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  max_size INTEGER,
  owner TEXT
);

CREATE TABLE cars (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  garage_id INTEGER,
  make TEXT,
  model TEXT,
  year INTEGER,
  FOREIGN KEY (garage_id) REFERENCES garages (id)
);

-- For reference!
INSERT INTO garages (max_size, owner) VALUES (500000, 'Jay Leno');


INSERT INTO cars (garage_id, make, model, YEAR) VALUES (1, 'Lamborghini', 'Countach', 1984);
INSERT INTO cars (garage_id, make, model, YEAR) VALUES (1, 'Citroen', 'SM', 1970);
INSERT INTO cars (garage_id, make, model, YEAR) VALUES (1, 'Mazda', 'Miata', 1990);
INSERT INTO cars (garage_id, make, model, YEAR) VALUES (1, 'Jaguar', 'E-type', 1963);















