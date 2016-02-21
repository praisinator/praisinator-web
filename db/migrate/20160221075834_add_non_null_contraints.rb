class AddNonNullContraints < ActiveRecord::Migration
  def change
    Team.delete_all
    User.delete_all
    Channel.delete_all
    Message.delete_all
    Tone.delete_all
    change_column_null(:teams, :slack_id, false)
    change_column_null(:users, :slack_id, false)
    change_column_null(:channels, :slack_id, false)
    change_column_null(:messages, :content, false)
  end
end
