class User < ActiveRecord::Base
  belongs_to :team
  has_many :messages
  has_many :tones, through: :messages
  has_many :channels, through: :messages
  has_many :issued_feedbacks, class_name: 'UserFeedback', as: :issued_user
  has_many :issuing_feedbacks, class_name: 'UserFeedback', as: :issuing_user

  def overall_feedback
    # Todo: Take this from feedback
    pos = rand(0..100)
    neg = rand(0..100)
    pos - neg
  end
end
