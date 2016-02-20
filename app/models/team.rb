class Team < ActiveRecord::Base
  has_many :users
  has_many :channels
  has_many :messages, through: :channels
  has_many :tones, through: :messages
end
