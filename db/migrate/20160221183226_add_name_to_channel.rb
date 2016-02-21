class AddNameToChannel < ActiveRecord::Migration
  def change
    change_table :channels do |t|
      t.string :name
    end
  end
end
