class Channel < ActiveRecord::Base
  include OverallFeedback

  belongs_to :team
  has_many :messages
  has_many :users, through: :messages
  has_many :tones, through: :messages
  has_many :issued_feedbacks, through: :users
end
