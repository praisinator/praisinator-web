class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.belongs_to :team, index: true, foreign_key: { on_delete: :cascade }, null: false
      t.string :slack_id
      t.string :access_token

      t.timestamps null: false
    end
  end
end
