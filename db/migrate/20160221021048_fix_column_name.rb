class FixColumnName < ActiveRecord::Migration
  def change
    rename_column :tones, :emotiona_disgust, :emotional_disgust
  end
end
