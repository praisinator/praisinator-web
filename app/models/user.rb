class User < ActiveRecord::Base
  include OverallFeedback
  include SlackData

  store_accessor :slack_data, :name

  belongs_to :team
  has_many :messages
  has_many :tones, through: :messages
  has_many :channels, through: :messages
  has_many :issued_feedbacks, class_name: 'UserFeedback', as: :issued_user
  has_many :issuing_feedbacks, class_name: 'UserFeedback', as: :issuing_user

  slack_data(refresh_in: 1.day) do |connection|
    params = {
      token: team.slack_bot_token,
      user:  slack_id
    }
    connection.get('/api/users.info?' + params.to_param).body['user']
  end
end
