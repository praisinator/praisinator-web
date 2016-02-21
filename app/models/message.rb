class Message < ActiveRecord::Base
  has_one :team, through: :channel
  has_one :tone
  belongs_to :channel
  belongs_to :user

  def self.analyze_tone(force: false)
    includes(:tone).find_each { |i| i.analyze_tone force: force }
  end

  after_create :analyze_tone

  def user_slack_id=(value)
    self.user = User.find_or_initialize_by(slack_id: value, team_id: channel.team_id)
  end

  def analyze_tone(force: false)
    ToneAnalyzerJob.perform_later(self) unless !force && tone.present?
  end
end
