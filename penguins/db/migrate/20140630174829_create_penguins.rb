class CreatePenguins < ActiveRecord::Migration
  def change
    create_table :penguins do |t|

    	t.string :name

      t.timestamps
    end
  end
end
