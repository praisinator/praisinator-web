class UserFeedback < ActiveRecord::Base
  belongs_to :issuing_user, class_name: 'User'
  belongs_to :issued_user, class_name: 'User'

  def negative=(bool)
    self.positive = !bool
  end

  def negative
    !positive
  end

  alias_method :negative?, :negative
end
