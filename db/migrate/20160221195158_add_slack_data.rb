class AddSlackData < ActiveRecord::Migration
  def change
    %i{users teams channels}.each do |table_name|
      change_table table_name do |t|
        t.jsonb :slack_data
        t.timestamp :slack_data_updated_at
      end
    end
  end
end
