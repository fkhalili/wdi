class MakeTheAttendeesTable < ActiveRecord::Migration
  def change
  	create_table :attendees do |t|
  		t.string :first_name
  		t.string :last_name
  		t.integer :age
  		t.boolean :likes_beer
  	end
  end
end