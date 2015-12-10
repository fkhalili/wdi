DROP TABLE cheeses;

CREATE TABLE cheeses (
  name varchar(255),
  color varchar(127),
  country_of_origin varchar(64),
  stink_level varchar
);

INSERT INTO cheeses (name, color, country_of_origin,stink_level) VALUES ('Roequefort', 'yellow', 'France', 5);

INSERT INTO cheeses (name, color, country_of_origin,stink_level) VALUES ('Epoisses', 'orange', 'France', 9);

INSERT INTO cheeses (name, color, country_of_origin,stink_level) VALUES ('Charolais', 'white', 'France', 5);

INSERT INTO cheeses (name, color, country_of_origin,stink_level) VALUES ('Durrus', 'yellow', 'Ireland', 2);

INSERT INTO cheeses (name, color, country_of_origin,stink_level) VALUES ('Hooligan', 'yellow', 'America', 3);

INSERT INTO cheeses (name, color, country_of_origin,stink_level) VALUES ('Teleme', 'white', 'America', 2);

INSERT INTO cheeses (name, color, country_of_origin,stink_level) VALUES ('Stichelton', 'white', 'England', 4);