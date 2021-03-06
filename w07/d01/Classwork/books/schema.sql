
CREATE TABLE books (
	id integer PRIMARY KEY AUTOINCREMENT,
	title varchar,
	year_published integer,
	genre varchar,
	author_id integer
);

CREATE TABLE authors (
id integer PRIMARY KEY AUTOINCREMENT,
first_name varchar,
last_name varchar,
hometown varchar
);

INSERT INTO authors (first_name, last_name, hometown) VALUES ('GOD.', 'Almighty', 'Brooklyn');
INSERT INTO authors (first_name, last_name, hometown) VALUES ('JRR', 'Tolkien', 'Earth');
INSERT INTO authors (first_name, last_name, hometown) VALUES ('JK', 'Rowling', 'Yates');
INSERT INTO authors (first_name, last_name, hometown) VALUES ('Douglas', 'Adams', 'Devonshire');
INSERT INTO authors (first_name, last_name, hometown) VALUES ('Jane', 'Austen', 'Queens');


INSERT INTO books (title, year_published, genre, author_id) VALUES ('The Bible', 'GOD', 0, 'Religion', 1);
INSERT INTO books (title, year_published, genre, author_id) VALUES ('LOTR', 1952, 'Fantasy', 2);
INSERT INTO books (title, year_published, genre, author_id) VALUES ('Harry Potter 1', 1997, 'Fiction', 3);
INSERT INTO books (title, year_published, genre, author_id) VALUES ('Harry Potter 2', 1998, 'Fiction', 3);
INSERT INTO books (title, year_published, genre, author_id) VALUES ('Harry Potter 3', 1999, 'Fiction', 3);
INSERT INTO books (title, year_published, genre, author_id) VALUES ('Harry Potter 4', 2000, 'Fiction', 3);
INSERT INTO books (title, year_published, genre, author_id) VALUES ('Hitchies', 1970, 'Sci-Fi', 4);
INSERT INTO books (title, year_published, genre, author_id) VALUES ('Pride and Prejiduce', 1813, 'Religion', 4);

SELECT * FROM books ORDER BY year_published;
SELECT * FROM books ORDER BY year_published DESC;



SELECT * FROM books INNER JOIN authors ON author_id = books.author_id;
SELECT hometown FROM books INNER JOIN authors ON books.author_id = authors.id;


