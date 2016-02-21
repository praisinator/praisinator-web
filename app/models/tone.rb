class Tone < ActiveRecord::Base
  belongs_to :message

  def self.composite
    new.tap do |composite|
      composite.emotional_anger,
        composite.emotional_disgust,
        composite.emotional_sadness,
        composite.emotional_fear =
        4.times.reduce([1.0]) { |a, i| a.append a[i] - rand(0.0..a[i]) }.last(4).shuffle

      composite.writing_analytical,
        composite.writing_confident,
        composite.writing_tentative =
        3.times.reduce([1.0]) { |a, i| a.append a[i] - rand(0.0..a[i]) }.last(3).shuffle

      composite.social_openness,
        composite.social_conscientiousness,
        composite.social_extraversion,
        composite.social_agreeableness =
        4.times.reduce([1.0]) { |a, i| a.append a[i] - rand(0.0..a[i]) }.last(4).shuffle

      composite.social_neuroticism = rand(0.0..1.0)
    end
  end

end
