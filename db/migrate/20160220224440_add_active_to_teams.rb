class AddActiveToTeams < ActiveRecord::Migration
  def change
    change_table :teams do |t|
      t.boolean :active, default: true
    end
  end
end
