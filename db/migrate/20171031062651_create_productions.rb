class CreateProductions < ActiveRecord::Migration[5.0]
  def change
    create_table :productions do |t|
	  t.string :name, :null=>false, :limit=>60, :default=>"UNKNOw"
	  t.string :pcode, :limit => 30, :default =>"PD8888"
      t.timestamps
    end
  end
end
