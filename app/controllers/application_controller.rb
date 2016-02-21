class ApplicationController < ActionController::Base

  def nuke
    Rails.application.eager_load!
    render text: ActiveRecord::Base.descendants.map(&:delete_all).reduce(:+)
  end
end
