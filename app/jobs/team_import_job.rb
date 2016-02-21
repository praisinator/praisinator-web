class TeamImportJob < ActiveJob::Base

  def perform(team)
    team.import_channels
    team.channels.each(&:import)
  end

end
