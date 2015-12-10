class CreateAffairs < ActiveRecord::Migration
  def change
    create_table :affairs do |t|
      t.string :name
      t.string :description
      t.integer :user_id

      t.timestamps null: false
    end
  end
end
