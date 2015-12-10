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
FOREIGN KEY (garage_id) REFERENCES garages(id)
);

-- FOR REFERENCE!
INSERT INTO garages (max_size, owner) VALUES (5000000, 'Jay Lenno');

INSERT INTO cars (garage_id, make, model, year) VALUES (2, 'Lambo', 'Countach', 1984);

INSERT INTO cars (garage_id, make, model, year) VALUES (2, 'Mazda', 'Miata', 1990);

INSERT INTO cars (garage_id, make, model, year) VALUES (2, 'Jaguar', 'E-type', 1963);