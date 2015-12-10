# Active Record
### Objectives

You will be able to:

1. Explain what an ORM is 
2. Complete basic CRUD operations using ActiveRecord 


Read this: 
[activerecord](http://guides.rubyonrails.org/active_record_basics.html)

# About ActiveRecord:

ActiveRecord is an "ORM" or "Object Relational Mapper".  It allows us to map classes in our app to tables, and objects to rows.
For example, you can have an Article class that maps to an articles table and an individual Article that maps to a single row in that table. 

This allows us to perform operations on an object in the database using Ruby, instead of directly using SQL.  More importantly, it allows us to perform these operations in a database-agnostic way.  We can have a development database in SQLite3 and a production database in Postgres and run the same Ruby code for both.  It also is usually more efficient than hard-coding SQL statements.

# Todo Model

mkdir todo_activerecord
inside mkdir lib models db
touch lib/connection.rb models/cheese.rb  db/schema.sql



```
DROP TABLE if exists cheeses;

CREATE TABLE cheeses(
  id serial PRIMARY KEY,
 	name VARCHAR,
 	sharpness INTEGER, 
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

``createdb cheese.db``


Go ahead and run `psql cheese.db < db/schema.sql`.

Now that we have our schema set up, we need to add `activerecord` to our dependencies in our Gemfile.

Gemfile
```rb
source 'https://rubygems.org'

gem 'activerecord'
gem 'pg'
```

Then run `bundle install` to install it. If you have never run `bundle` before, you may have to run `gem install bundler` first.


``connection.rb`` will tell our app how to connect to our database.  Inside `connection.rb`, add the following:

```rb
require 'active_record'

ActiveRecord::Base.establish_connection({
  :adapter => "postgresql",
  :database => "cheese.db"
})

ActiveRecord::Base.logger = Logger.new(STDOUT)
```

First we require ActiveRecord.  Then we establish the connection to our database.  This method takes a Hash with 2 keys.

The adapter is postgresql (which is the type of our database).  The database itself is called "cheese.db".

The last line sets up our logger, which isn't required, but generally good to have.  ActiveRecord will log all the SQL statements it runs under the hood.  If our app is running slow, it's possible that too many database queries are being made.


the ``cheese.rb`` file:

This will be where we code the logic for the `Cheese` model.

Add the following to `cheese.rb`:

```rb
require_relative '../lib/connection'

class Cheese < ActiveRecord::Base
end
```

This is all that's needed to set up an ActiveRecord model.  All models inherit from `ActiveRecord::Base`.  We can add methods to this later, but this is all we will need for right now.

Make an app.rb file.
- require model

```rb
require_relative('models/cheese')
require 'pry'
binding.pry
```

Things to try:

# Make some cheeses -- Create

```rb
Cheese.create({
 name: "Cheddar",
 sharpness: 8
})

Cheese.create({
 name: "Gouda",
 sharpness: 5
})

Cheese.create({
  name: "Mozzarella",
  sharpness: 5
})

Cheese.create({
  name: "Goat",
  sharpness: 6
})

#See all the cheeses - Read/index

``all_cheeses = Cheese.all``

#find a particular cheese by ID -- Read/show

``cheddar = Cheese.find(1)``

#or if you want to find a cheese BY a particular attribute. pass it a hash. 

``gouda = Cheese.find_by({name: "Gouda"})``

# update a cheese -- Update

``gouda.name = "Gooda"``
``gouda.save``

or better yet....

``gouda.update({name: "Gooda", sharpness: 3})``

# delete a cheese -- Delete

``gouda.delete``

# delete all cheeses

``Cheese.delete_all``


```




