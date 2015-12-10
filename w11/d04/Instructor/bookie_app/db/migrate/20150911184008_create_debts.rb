class CreateDebts < ActiveRecord::Migration
  def change
    create_table :debts do |t|
      t.string :client
      t.integer :amount
      t.boolean :paid

      t.timestamps null: false
    end
  end
end
