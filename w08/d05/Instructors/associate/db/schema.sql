DROP TABLE districts;
DROP TABLE tributes;




CREATE TABLE districts (
  id serial primary key,
  name varchar,
  location varchar
);


CREATE TABLE tributes (
  id serial primary key,
  name varchar,
  district_id integer
);

CREATE TABLE weapons (
  id serial primary key,
  name varchar
);

-- join table
CREATE TABLE kills (
  id serial primary key,
  weapon_id integer,
  tribute_id integer
);