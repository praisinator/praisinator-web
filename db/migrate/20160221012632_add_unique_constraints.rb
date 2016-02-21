class AddUniqueConstraints < ActiveRecord::Migration
  def change
    add_index :teams, :slack_id, unique: true
    add_index :users, :slack_id, unique: true
    add_index :channels, :slack_id, unique: true
  end
end
