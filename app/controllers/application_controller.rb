class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  def nuke
    Rails.application.eager_load!
    render text: ActiveRecord::Base.descendants.map(&:delete_all).reduce(:+)
  end
end
