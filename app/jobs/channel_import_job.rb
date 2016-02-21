class ChannelImportJob < ActiveJob::Base

  def perform(channel)
    channel.import_messages
  end

end
