class CreateFarms < ActiveRecord::Migration
  def change
    create_table :farms do |t|
      t.string :name
      t.string :location

      t.timestamps null: false
    end
  end
end
