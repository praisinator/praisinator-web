class Tone < ActiveRecord::Base
  belongs_to :message

  def self.random_slices(count)
    (count - 1).times.reduce([1.0]) do |a, i|
      max = i == 0 ? a[i] : a[1..i].reduce(:+)
      a.append a[0] - rand(0.0..max)
    end.tap do |array|
      array[0] -= array[1..-1].reduce(:+)
      array.shuffle!
    end
  end

  def self.composite
    new.tap do |composite|
      composite.emotional_anger,
        composite.emotional_disgust,
        composite.emotional_sadness,
        composite.emotional_fear =
        random_slices(4)

      composite.writing_analytical,
        composite.writing_confident,
        composite.writing_tentative =
        random_slices(3)

      composite.social_openness,
        composite.social_conscientiousness,
        composite.social_extraversion,
        composite.social_agreeableness =
        random_slices(4)

      composite.social_neuroticism = rand(0.0..1.0)
    end
  end

end
