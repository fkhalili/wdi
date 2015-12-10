# Welcome to the Hotel California.ly

Maria is working on a hotel chain startup and needs you to help her keep
track of all of her hotels, guests, and bookings. Write a Sinatra app
that has the following models:

* `Hotel` which has a name, location, and an occupancy limit
* `Guest` which has a name, and an email
* `Reservation` which has a checkin date, and a checkout date

Maria needs to be able to keep track of who has what bookings so make
sure to use a
[many-to-many](http://guides.rubyonrails.org/association_basics.html#the-has-many-through-association)
relationship for the hotels and guests! Don't forget to use the folder
structure we've been using.

![structure](hotel_structure.png)

## User stories

Maria should be able to:

* Create a new hotel
  * Update a hotel's information
  * See an index of all of her hotels
  * Click on an individual hotel and see a list of all of that hotel's
    reservations and guests
* Create a new guest
  * Update a guest's information
  * See an index of all of the guests who have reservations at her hotels
    and their reservations
  * See an individual guest's reservations
* Create a new reservation
  * Update a reservation
  * Delete a reservation

### Bonus

* Use ruby's [date](http://ruby-doc.org/stdlib-2.2.2/libdoc/date/rdoc/Date.html) class and update your schema to use dates as well.
* If a hotel's occupancy limit is hit on a given date, make sure that
  the user is notified that the occupancy limit has been reached if they
  try to add a booking for that day
