class CreateAnimals < ActiveRecord::Migration
  def change
    create_table :animals do |t|
      t.string :name
      t.integer :age
      t.string :sex
      t.string :type
      t.string :breed
      t.references :farm, index: true, foreign_key: true
    end
  end
end
