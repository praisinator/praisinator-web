class CreateMessages < ActiveRecord::Migration
  def change
    create_table :messages, force: true do |t|
      t.belongs_to :channel, index: true, foreign_key: { on_delete: :cascade }, null: false
      t.belongs_to :user, index: true, foreign_key: { on_delete: :cascade }, null: false
      t.text :content, null: false
      t.float :timestamp
    end
  end
end
