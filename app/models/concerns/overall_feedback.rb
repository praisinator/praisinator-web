module OverallFeedback

  def overall_feedback
    issued_feedbacks.where(positive: true).count -
      issued_feedbacks.where(positive: false)
  end

end
