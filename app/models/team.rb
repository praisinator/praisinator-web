class Team < ActiveRecord::Base
  include OverallFeedback
  include SlackData

  store_accessor :slack_data, :name

  has_many :users
  has_many :channels
  has_many :messages, through: :channels
  has_many :tones, through: :messages
  has_many :issued_feedbacks, through: :users

  slack_data(refresh_in: 1.day) do |connection|
    params = {
      token: slack_bot_token,
    }
    connection.get('/api/team.info?' + params.to_param).body['team']
  end
end
