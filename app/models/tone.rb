class Tone < ActiveRecord::Base
  belongs_to :message

  def self.composite
    t = arel_table
    select(
      '-1 AS id',
      t[:emotional_anger].average.as('emotional_anger'),
      t[:emotional_disgust].average.as('emotional_disgust'),
      t[:emotional_sadness].average.as('emotional_sadness'),
      t[:emotional_fear].average.as('emotional_fear'),
      t[:emotional_joy].average.as('emotional_joy'),

      t[:writing_analytical].average.as('writing_analytical'),
      t[:writing_confident].average.as('writing_confident'),
      t[:writing_tentative].average.as('writing_tentative'),

      t[:social_openness].average.as('social_openness'),
      t[:social_conscientiousness].average.as('social_conscientiousness'),
      t[:social_extraversion].average.as('social_extraversion'),
      t[:social_agreeableness].average.as('social_agreeableness'),
      t[:social_neuroticism].average.as('social_neuroticism')
    ).to_a.first
  end

end
