class MakeTheAffairsTable < ActiveRecord::Migration
  def change
  	create_table :affairs do |t|
  		t.string :name
  		t.string :location
  	end
  end
end
