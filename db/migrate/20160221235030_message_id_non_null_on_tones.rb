class MessageIdNonNullOnTones < ActiveRecord::Migration
  def change
    change_column_null :tones, :message_id, false
  end
end
