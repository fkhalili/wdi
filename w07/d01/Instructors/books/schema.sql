
PRAGMA foreign_key = ON;



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

INSERT INTO authors (first_name, last_name, hometown) VALUES ('God.', 'Almighty', 'Brooklyn');
INSERT INTO authors (first_name, last_name, hometown) VALUES ('JRR', 'Tolkien', 'Earth');
INSERT INTO authors (first_name, last_name, hometown) VALUES ('J.K.', 'Rowling', 'Yates');
INSERT INTO authors (first_name, last_name, hometown) VALUES ('Douglas', 'Adams', 'Devonshire');
INSERT INTO authors (first_name, last_name, hometown) VALUES ('Jane', 'Austen', 'Queens');

INSERT INTO books (title, year_published, genre, author_id) VALUES ('The Bible', 1996, 'Religion', 1);
INSERT INTO books (title, year_published, genre, author_id) VALUES ('LOTR', 1949, 'Fantasy', 2);
INSERT INTO books (title, year_published, genre, author_id) VALUES ('Harry Potter 1', 1997, 'Fiction', 3);
INSERT INTO books (title, year_published, genre, author_id) VALUES ('Harry Potter 2', 1998, 'Fiction', 3);
INSERT INTO books (title, year_published, genre, author_id) VALUES ('Harry Potter 3', 1999, 'Fiction', 3);
INSERT INTO books (title, year_published, genre, author_id) VALUES ('Harry Potter 4', 2000, 'Fiction', 3);
INSERT INTO books (title, year_published, genre, author_id) VALUES ('Hitch', 1970, 'Sci-fi', 4);
INSERT INTO books (title, year_published, genre, author_id) VALUES ('Pride and Prejudice', 1813, 'Fiction', 5);


--joins
--joins allow us to query data from multiple tables that reference each other

SELECT * FROM authors INNER JOIN books ON authors.id = books.author_id;

-- remember to break down the query into parts. What do we want? What are we joining to what? Are there any conditions?

SELECT * FROM authors INNER JOIN books on books.author_id = authors.id WHERE books.title = 'The Bible';

SELECT authors.first_name, authors.hometown, books.year_published FROM books INNER JOIN authors ON books.author_id = authors.id WHERE books.title = 'LOTR';














  