class CreateChannels < ActiveRecord::Migration
  def change
    create_table :channels do |t|
      t.belongs_to :team, index: true, foreign_key: { on_delete: :cascade }, null: false
      t.string :slack_id

      t.timestamps null: false
    end
  end
end
