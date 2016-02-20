class CreateMessages < ActiveRecord::Migration
  def change
    create_table :messages do |t|
      t.belongs_to :channel, index: true, foreign_key: { on_delete: :cascade }, null: false
      t.belongs_to :user, index: true, foreign_key: { on_delete: :cascade }, null: false
      t.string :slack_id
      t.float :timestamp
      t.text :content

      t.timestamps null: false
    end
  end
end
