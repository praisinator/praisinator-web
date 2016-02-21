class Message < ActiveRecord::Base
  has_one :team, through: :channel
  has_one :tone
  belongs_to :channel
  belongs_to :user

  after_create :process_tone

  def user_slack_id=(value)
    self.user = User.find_or_initialize_by(slack_id: value, team_id: channel.team_id)
  end

  private

  def process_tone
    ToneAnalyzerJob.perform_later(self)
  end
end
