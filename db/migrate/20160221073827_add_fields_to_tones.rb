class AddFieldsToTones < ActiveRecord::Migration
  def change
    change_table :tones do |t|
      t.float :emotional_joy
    end
  end
end
