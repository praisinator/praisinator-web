class ApplicationController < ActionController::Base
  def nuke
    Rails.application.eager_load!
    ActiveRecord::Base.descendants.each do |descendant|
      descendant.delete_all unless descendant.table_name == 'schema_migrations'
    end
    render text: 'Nuked'
  end
end
