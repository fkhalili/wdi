1. Create the following tables in a new database. Each one should have a primary key!


###Employees
|name|age|salary|state|dept_id
|-----|------|------|------|
|Ted|37| 65000 | VA |1
|Sally|30| 55000 | VA |3
|Sam|27| 85000 |NY |2
|Yu|25| 55000 |CA |2
|Eddie|25| 35000 |NY |5
|Matt|22| 45000 |CA |1
|Yu|25| 40000 |CA |4
|George|31| 38000 |NY |5
|Bill|36| 25000 |CA |3


###Departments
|dept|dept_head
|-----|--------|
|operations|Tim Rankin
|Accounting|Jonathan Taylor Choi
|Marketing|Zachary Ty Fritz
|Engineering|Taran Noah Smith
|Sales|James Harden


###Now write queries to...
 - List all the employees by age
 - List all the employees by salary
  - Try listing all the employees by monthly salary...
 - Write a JOIN to bring by all the information about employees and their departments
 - Write a JOIN to bring back the name of the department where Ted works
 - Write a JOIN to bring back George's department name and department head
 - Wite a JOIN to bring back Eddie's department head