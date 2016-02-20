class Channel < ActiveRecord::Base
  belongs_to :team
  has_many :messages
  has_many :users, through: :messages
end
