class Message < ActiveRecord::Base
  has_one :tone
  belongs_to :channel
  belongs_to :user

  def user_slack_id=(value)
    self.user = User.find_or_initialize_by(slack_id: value)
  end
end
