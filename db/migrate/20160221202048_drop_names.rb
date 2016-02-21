class DropNames < ActiveRecord::Migration
  def change
    remove_column :users, :name
    remove_column :channels, :name
    remove_column :teams, :name
  end
end
