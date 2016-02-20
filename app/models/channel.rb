class Channel < ActiveRecord::Base
  include Tone::Toneable

  belongs_to :team
  has_many :messages
  has_many :users, through: :messages
end
