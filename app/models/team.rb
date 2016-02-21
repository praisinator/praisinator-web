class Team < ActiveRecord::Base
  include OverallFeedback

  has_many :users
  has_many :channels
  has_many :messages, through: :channels
  has_many :tones, through: :messages
  has_many :issued_feedbacks, through: :users
end
