class User < ActiveRecord::Base
  belongs_to :team
  has_many :messages
  has_many :tones, through: :messages
end
