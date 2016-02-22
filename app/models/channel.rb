class Channel < ActiveRecord::Base
  include OverallFeedback
  include SlackData

  store_accessor :slack_data, :name

  belongs_to :team
  has_many :messages
  has_many :users, through: :messages
  has_many :tones, through: :messages
  has_many :issued_feedbacks, through: :users

  after_create :import

  slack_data(refresh_in: 1.day) do |connection|
    params = {
      token:   team.slack_bot_token,
      channel: slack_id
    }
    connection.get('/api/channels.info?' + params.to_param).body['channel']
  end

  def import
    ChannelImportJob.perform_later self
  end

  def import_messages
    user_token, * = team.users.where.not(access_token: nil).pluck(:access_token)
    url           = '/api/channels.history?' + { token: user_token, channel: slack_id }.to_param
    new_messages  = SlackData.connection.get(url).body['messages'].select do |message|
      message['type'] == 'message'
    end.map do |historical_message|
      self.messages.to_a.find do |message|
        message.user.slack_id == historical_message['user'] &&
          message.timestamp == historical_message['ts'] &&
          message.content == historical_message['text']
      end || historical_message['user'] && self.messages.new(
        channel:   self,
        user:      team.users.find_or_create_by(slack_id: historical_message['user']),
        timestamp: historical_message['ts'],
        content:   historical_message['text']
      )
    end.compact
    Message.import new_messages
    self.messages.reload.analyze_tone
  end
end
