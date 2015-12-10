class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :codename
      t.string :password
      t.string :real_name

      t.timestamps
    end
  end
end
