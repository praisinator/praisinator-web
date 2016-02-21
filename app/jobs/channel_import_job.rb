class ChannelImportJob < ActiveJob::Base

  def perform(channel)
    channel.import_messages
    channel.messages.each(&:process_tone)
  end

end
