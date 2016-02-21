class CreateChannels < ActiveRecord::Migration
  def change
    create_table :channels, force: true do |t|
      t.belongs_to :team, index: true, foreign_key: { on_delete: :cascade }, null: false
      t.string :slack_id, index: { unique: true }, null: false

      t.timestamps null: false
    end
  end
end
