CREATE TABLE cars (
	id integer primary key autoincrement,--auto id maker
	make varchar NOT NULL,--not null makes sure there is an input(not for value, for columns)
	model varchar NOT NULL,
	color varchar NOT NULL,
	year integer NOT NULL
);