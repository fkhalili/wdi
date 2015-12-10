CREATE TABLE employees (
id INTEGER PRIMARY KEY AUTOINCREMENT,
name varchar,
age INTEGER,
salary INTEGER,
state varchar,
dept_id INTEGER    
);

CREATE TABLE departments (
id INTEGER PRIMARY KEY AUTOINCREMENT,
dept varchar,
dept_head varchar
);


INSERT INTO employees (name, age, salary, state, dept_id) VALUES ('Ted', 37, 65000, 'VA', 1);
INSERT INTO employees (name, age, salary, state, dept_id) VALUES ('Sally', 30, 55000, 'VA', 3);
INSERT INTO employees (name, age, salary, state, dept_id) VALUES ('Sam', 27, 85000, 'NY', 2);
INSERT INTO employees (name, age, salary, state, dept_id) VALUES ('Yu', 25, 55000, 'CA', 2);
INSERT INTO employees (name, age, salary, state, dept_id) VALUES ('Eddie', 25, 35000, 'NY', 5);
INSERT INTO employees (name, age, salary, state, dept_id) VALUES ('Matt', 22, 45000, 'CA', 1);
INSERT INTO employees (name, age, salary, state, dept_id) VALUES ('Yu', 25, 40000, 'CA', 4);
INSERT INTO employees (name, age, salary, state, dept_id) VALUES ('George', 31, 38000, 'NY', 5);
INSERT INTO employees (name, age, salary, state, dept_id) VALUES ('Bill', 36, 25000, 'CA', 3);



INSERT INTO departments (dept, dept_head) VALUES ('operations', 'Tim Rankin');
INSERT INTO departments (dept, dept_head) VALUES ('accounting', 'Jonathan Taylor Choi');
INSERT INTO departments (dept, dept_head) VALUES ('marketing', 'Zachary Ty Fritz');
INSERT INTO departments (dept, dept_head) VALUES ('engineering', 'Taran Noah Smith');
INSERT INTO departments (dept, dept_head) VALUES ('sales', 'James Harden');