class CreateDalliances < ActiveRecord::Migration
  def change
    create_table :dalliances do |t|
      t.string :name
      t.string :location
      t.integer :intensity

      t.timestamps null: false
    end
  end
end
