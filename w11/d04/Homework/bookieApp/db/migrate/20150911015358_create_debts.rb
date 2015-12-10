class CreateDebts < ActiveRecord::Migration
  def change
    create_table :debts do |t|
    	t.string :client_name
    	t.integer :amount
    	t.boolean :paid
    end
  end
end
