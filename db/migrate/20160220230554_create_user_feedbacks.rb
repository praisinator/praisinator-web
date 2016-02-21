class CreateUserFeedbacks < ActiveRecord::Migration
  def change
    create_table :user_feedbacks, force: true do |t|
      t.belongs_to :issuing_user, null: false, index: true
      t.belongs_to :issued_user, null: false, index: true
      t.boolean :positive, null: false
      t.timestamps null: false
    end
    add_foreign_key :user_feedbacks, :users, column: :issuing_user_id, on_delete: :cascade
    add_foreign_key :user_feedbacks, :users, column: :issued_user_id, on_delete: :cascade
  end
end
