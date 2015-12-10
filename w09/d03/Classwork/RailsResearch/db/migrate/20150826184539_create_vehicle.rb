class CreateVehicle < ActiveRecord::Migration
  def change
    create_table :vehicles do |t|
    	t.string :type
    	t.string :color
    	t.string :make
    end
  end
end
