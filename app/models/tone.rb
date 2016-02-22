class Tone < ActiveRecord::Base
  belongs_to :message

  before_create :normalize

  def self.composite
    t = arel_table
    select(
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

  def normalize
    select_greatest_emotion
    select_greatest_intent
    select_greatest_social
    self
  end

  private

  def select_greatest_intent
    cols = %w{writing_analytical writing_confident writing_tentative}
    attrs = attributes.slice(*cols)
    return attrs.keys.each { |attr| write_attribute attr, nil } if attrs.values.all?(&:zero?)
    *lesser, greatest = attrs.sort_by(&:last).to_h.keys
    lesser.each { |attr| write_attribute attr, 0.0 }
    write_attribute(greatest, 1.0)
  end

  def select_greatest_emotion
    cols = %w{emotional_anger emotional_disgust emotional_fear emotional_joy emotional_sadness}
    attrs = attributes.slice(*cols)
    return attrs.keys.each { |attr| write_attribute attr, nil } if attrs.values.all?(&:zero?)
    *lesser, greatest = attrs.sort_by(&:last).to_h.keys
    lesser.each { |attr| write_attribute attr, 0.0 }
    write_attribute(greatest, 1.0)
  end

  def select_greatest_social
    cols = %w{social_openness social_conscientiousness social_extraversion social_agreeableness}
    attrs = attributes.slice(*cols)
    return attrs.keys.each { |attr| write_attribute attr, nil } if attrs.values.all?(&:zero?)
    *lesser, greatest = attrs.sort_by(&:last).to_h.keys
    lesser.each { |attr| write_attribute attr, 0.0 }
    write_attribute(greatest, 1.0)
  end

end
