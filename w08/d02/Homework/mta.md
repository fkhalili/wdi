 ## MTA - The NYC Subway System

## Background
There are 3 subway lines:
  - The **N** line has the following stops: *Times Square, 34th, 28th, 23rd, Union Square, and 8th*
  - The **L** line has the following stops: *8th, 6th, Union Square, 3rd, and 1st*
  - The **6** line has the following stops: *Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place*.
  - All 3 subway lines intersect at *Union Square*, but there are NO other intersection points.

## Features
1. A user can list the available lines.

  ```bash
  ruby mta.rb lines
  N
  L
  6
  ```

2. A user can see all of the stops for a line.
  ```bash
  ruby mta.rb stops L
  8th, 6th, union_square, 3rd, 1st
  ```

3. A user can calculate the total number of stops between two stations.
  ```bash
 ruby mta.rb calculate L union_square 6 33rd
 3
 ```

 ```bash
  ruby mta.rb calculate L union_square L 8th
  2
 ```

4. A user is notified if they don't provide the correct number of arguments.
  ```bash
  ruby mta.rb calculate sadasd
  You must provide the 4 arguments - STARTINGLINE STOP ENDINGLINE STOP
  ```

## Keep in Mind

- Spend some time planning how you will **model** your subway lines. Get some whiteboard markers and a partner and talk it out!
  - What data structure(s) will you use to represent the subway system?
- Break it down and follow your errors! Maybe try getting the program to work for a single train line before trying to tackle multiple lines.
- Reference the [Ruby documentation](http://ruby-doc.org/core-2.2.2/) for arrays and hashes. How can we grab the index number if we already know the value of an element inside an array?

## Structure

- Methods are a great way to make your code DRYer. You may find it easier to try and get the program working WITHOUT methods first, and then refactor it later with methods added. Please make sure that your final product uses methods!

## Bonus
- Add the following line without making major modifications to your code:
  - The **Q** line has the following stops: Times Square, Herald Square, Union Square, Canal St.

## Super Bonus
- Add the **F** line to your program.
  - The F line has the following stops: Rockefeller Center, 42nd St, Herald Square, 23rd St, 14th St, West 4th.
  - Herald Square should be your only transfer point!
