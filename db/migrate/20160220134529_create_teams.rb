class CreateTeams < ActiveRecord::Migration
  def change
    create_table :teams, force: true do |t|
      t.string :slack_id, index: { unique: true }, null: false
      t.string :name
      t.string :slack_bot_id, null: false
      t.string :logo_url
      t.string :slack_bot_token, null: false
      t.boolean :active, default: true

      t.timestamps null: false
    end
  end
end
