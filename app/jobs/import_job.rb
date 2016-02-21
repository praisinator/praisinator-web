class ImportJob < ActiveJob::Base

  def perform(team)
    team.import_channels
    team.channels.each do |channel|
      channel.import_messages
    end
  end

end
