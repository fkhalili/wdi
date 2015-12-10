CREATE TABLE cheese (
name varchar(255),
color varchar(255),
country_of_origin varchar(255),
stink_level integer
);

INSERT INTO cheese (name, color, country_of_origin, stink_level) VALUES ('Roquefort', 'yellow', 'french', 5);
INSERT INTO cheese (name, color, country_of_origin, stink_level) VALUES ('Epoisses', 'orange', 'french', 9);
INSERT INTO cheese (name, color, country_of_origin, stink_level) VALUES ('Charolais', 'white', 'french', 5);
INSERT INTO cheese (name, color, country_of_origin, stink_level) VALUES ('Maroilles', 'white', 'french', 10);
INSERT INTO cheese (name, color, country_of_origin, stink_level) VALUES ('Durrus', 'yellow', 'irish', 2);
INSERT INTO cheese (name, color, country_of_origin, stink_level) VALUES ('Hooligan', 'yellow', 'american', 3);
INSERT INTO cheese (name, color, country_of_origin, stink_level) VALUES ('Teleme', 'white', 'american', 2);
INSERT INTO cheese (name, color, country_of_origin, stink_level) VALUES ('Stichelton', 'white', 'english', 4);


SELECT * FROM cheese;
SELECT * FROM cheese WHERE country_of_origin='french';
SELECT * FROM cheese WHERE country_of_origin='english';
SELECT * FROM cheese WHERE stink_level=2;
SELECT * FROM cheese WHERE stink_level=10;
SELECT * FROM cheese WHERE stink_level=2 AND country_of_origin='french';
SELECT * FROM cheese WHERE stink_level=5 AND country_of_origin='french';
SELECT * FROM cheese WHERE stink_level=6 AND country_of_origin='irish';


UPDATE cheese SET stink_level=3 WHERE name='Roquefort';
UPDATE cheese SET color='muave' WHERE name='Teleme';
DELETE FROM cheese WHERE name='Hooligan';
UPDATE cheese SET stink_level=7 WHERE name='Stichelton';
DELETE FROM cheese WHERE name='Durrus';
UPDATE cheese SET stink_level=1 WHERE name='Teleme';
DELETE FROM cheese WHERE name='Epoisses';
UPDATE cheese SET name='Pepper Jack' WHERE name='Monetery Jack';
