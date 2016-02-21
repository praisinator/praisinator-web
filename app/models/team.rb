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

  def import
    ImportJob.perform_later self
  end

  def import_channels
    user_token, * = users.where.not(access_token: nil).pluck(:access_token)
    url           = '/api/channels.list?' + { token: user_token }.to_param
    new_channels  = SlackData.connection.get(url).body['channels'].select do |message|
      message['is_member']
    end.map do |historical_channel|
      self.channels.find do |channel|
        channel.slack_id == historical_channel['id']
      end || self.channels.new(
        slack_id:   historical_channel['id'],
        slack_data: historical_channel
      )
    end.select(&:new_record?)
    Channel.import(new_channels)
  end
end
