CREATE TABLE monkeys (
name varchar(255),
age integer

);

--create - insert(into)
INSERT INTO monkeys (name, age) VALUES ('karen', 32);
INSERT INTO monkeys (name, age) VALUES ('lucy', 40);
INSERT INTO monkeys (name, age) VALUES ('jess', 18);
INSERT INTO monkeys (name, age) VALUES ('ari', 30);
INSERT INTO monkeys (name, age) VALUES ('debbie', 22);
INSERT INTO monkeys (name, age) VALUES ('debbie', 32);

--read - select
SELECT * FROM monkeys;--all
SELECT name FROM monkeys;--name
SELECT age FROM monkeys;--age
SELECT * FROM monkeys WHERE name='debbie';--select all from where the value is true
SELECT * FROM monkeys WHERE name='debbie' AND age=22;--select all from where both values are true