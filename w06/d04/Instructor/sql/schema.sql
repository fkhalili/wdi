DROP TABLE monkeys;

CREATE TABLE monkeys (
  name varchar(255),
  age integer
);

--this is a comment


INSERT INTO monkeys (name, age) VALUES ('karen', 32);


SELECT * FROM monkeys;

SELECT name FROM monkeys;
SELECT age FROM monkeys;

INSERT INTO monkeys (name, age) VALUES ('Bart', 6);
INSERT INTO monkeys (name, age) VALUES ('Matt', 8);
INSERT INTO monkeys (name, age) VALUES ('Ryan', 13);
INSERT INTO monkeys (name, age) VALUES ('Angelina', 44);

SELECT * FROM monkeys WHERE name='Ryan';

INSERT INTO monkeys (name, age) VALUES ('Ryan', 32);

SELECT * FROM monkeys WHERE name='Ryan' AND age=13;

UPDATE monkeys SET name='Marcus' WHERE name='Matt';

DELETE FROM monkeys WHERE name='Angelina';






