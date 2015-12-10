# Single Table Inheritance


## What is it?
STI basically like building a template table, and having multiple or an infinite amount of models that inherit the base template model.
The base template model inherits from ActiveRecord::Base. So all the models inherited from the base template, are now connected to ActiveRecord.

## Why is it useful?
When you need multiple tables for different models. Rather than duplicating code, over and over, you can take the DRY route and use an STI. Where you now have the ability to keep and manage all the data in only one single table.
Additionally STI gives you the ability to write specialized functions for a specific model.



----------
Car.create({color: "blue", make: "BMW"})
Bus.create({color: "yellow", make: "Ford"})

    VehicleTable
    _________________________
    Type  |   Color  | Make
    _________________________
    "Car" |  "Blue"  | "BMW"
    _________________________
    "Bus" | "Yellow" | "Ford"
-----------



All information is referenced to the following:
[Resources](http://eewang.github.io/blog/2013/03/12/how-and-when-to-use-single-table-inheritance-in-rails/)
