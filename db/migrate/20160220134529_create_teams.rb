class CreateTeams < ActiveRecord::Migration
  def change
    create_table :teams do |t|
      t.string :slack_id
      t.string :name
      t.string :slack_bot_id
      t.string :logo_url
      t.string :slack_bot_token

      t.timestamps null: false
    end
  end
end
