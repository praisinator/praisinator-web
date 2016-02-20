class Message < ActiveRecord::Base
  has_one :tone
  belongs_to :channel
  belongs_to :user
end
