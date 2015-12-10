CREATE TABLE employees (
	id integer PRIMARY KEY AUTOINCREMENT,
	name varchar,
	age integer,
	salary integer,
	state varchar,
	dept_id integer
);

CREATE TABLE departments (
	id integer PRIMARY KEY AUTOINCREMENT,
	dept varchar,
	dept_head varchar
);

INSERT INTO departments (dept, dept_head) VALUES ('operations', 'Tim Rankin');
INSERT INTO departments (dept, dept_head) VALUES ('accounting', 'Jonathon Taylor Choi');
INSERT INTO departments (dept, dept_head) VALUES ('marketing', 'Zachary Ty Fritz');
INSERT INTO departments (dept, dept_head) VALUES ('engineering', 'Taran Noah Smith');
INSERT INTO departments (dept, dept_head) VALUES ('sales', 'James Harden');

INSERT INTO employees (name, age, salary, state, dept_id) VALUES ('Ted', 37, 65000, 'VA', 1);
INSERT INTO employees (name, age, salary, state, dept_id) VALUES ('Sally', 30, 55000, 'VA', 3);
INSERT INTO employees (name, age, salary, state, dept_id) VALUES ('Sam', 27, 85000, 'NY', 2);
INSERT INTO employees (name, age, salary, state, dept_id) VALUES ('Yu', 25, 55000, 'CA', 2);
INSERT INTO employees (name, age, salary, state, dept_id) VALUES ('Eddie', 25, 35000, 'NY', 5);
INSERT INTO employees (name, age, salary, state, dept_id) VALUES ('Matt', 22, 45000, 'CA', 1);
INSERT INTO employees (name, age, salary, state, dept_id) VALUES ('Yu', 25, 40000, 'CA', 4);
INSERT INTO employees (name, age, salary, state, dept_id) VALUES ('George', 31, 38000, 'NY', 5);
INSERT INTO employees (name, age, salary, state, dept_id) VALUES ('Bill', 36, 25000, 'CA', 3);

SELECT * FROM employees ORDER BY age;
SELECT * FROM employees ORDER BY salary;
SELECT * FROM employees ORDER BY salary/12;
SELECT * FROM employees INNER JOIN departments ON departments.id = dept_id;
SELECT dept FROM employees INNER JOIN departments ON departments.id = dept_id WHERE name='Ted';
SELECT dept dept_head  FROM employees INNER JOIN departments ON departments.id = dept_id WHERE name='George';
SELECT dept, dept_head  FROM employees INNER JOIN departments ON departments.id = dept_id WHERE name='George';
SELECT dept_head  FROM employees INNER JOIN departments ON departments.id = dept_id WHERE name='Eddie';
