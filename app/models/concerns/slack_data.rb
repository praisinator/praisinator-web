module SlackData
  extend ActiveSupport::Concern

  def self.connection
    Faraday.new(url: 'https://slack.com/') do |conn|
      conn.response :json
      conn.adapter Faraday.default_adapter
    end
  end

  module ClassMethods
    def slack_data(refresh_in: 1.day, &block)
      define_method :slack_data do
        fresh = slack_data_updated_at && slack_data_updated_at > refresh_in.ago
        fresh && read_attribute(:slack_data) || begin
          self.slack_data_updated_at = Time.now
          self.slack_data            = instance_exec(SlackData.connection, &block)
          save unless new_record?
          read_attribute(:slack_data)
        end
      end
    end
  end

  def slack_data
    raise NotImplementedError
  end

end
