class CreateTones < ActiveRecord::Migration
  def change
    create_table :tones do |t|
      t.belongs_to :message, index: true, foreign_key: { on_delete: :cascade }, null: false
      t.float :emotional_anger
      t.float :emotiona_disgust
      t.float :emotional_fear
      t.float :emotional_sadness
      t.float :writing_analytical
      t.float :writing_confident
      t.float :writing_tentative
      t.float :social_openness
      t.float :social_conscientiousness
      t.float :social_extraversion
      t.float :social_agreeableness
      t.float :social_neuroticism

      t.timestamps null: false
    end
  end
end
