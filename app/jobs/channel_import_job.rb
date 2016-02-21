class ChannelImportJob < ActiveJob::Base

  def perform(channel)
    channel.import_messages
    channel.messages.analyze_tone
  end

end
