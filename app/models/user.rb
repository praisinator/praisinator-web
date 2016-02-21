class User < ActiveRecord::Base
  include OverallFeedback

  belongs_to :team
  has_many :messages
  has_many :tones, through: :messages
  has_many :channels, through: :messages
  has_many :issued_feedbacks, class_name: 'UserFeedback', as: :issued_user
  has_many :issuing_feedbacks, class_name: 'UserFeedback', as: :issuing_user
end
