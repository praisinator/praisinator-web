class Channel < ActiveRecord::Base
  include OverallFeedback
  include SlackData

  store_accessor :slack_data, :name

  belongs_to :team
  has_many :messages
  has_many :users, through: :messages
  has_many :tones, through: :messages
  has_many :issued_feedbacks, through: :users

  slack_data(refresh_in: 1.day) do |connection|
    params = {
      token: team.slack_bot_token,
      channel:  slack_id
    }
    connection.get('/api/channels.info?' + params.to_param).body['channel']
  end
end
