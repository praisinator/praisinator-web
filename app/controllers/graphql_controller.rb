class GraphqlController < ApplicationController

  def query
    render json: Schema.execute(params[:query].to_s)
  end

end
