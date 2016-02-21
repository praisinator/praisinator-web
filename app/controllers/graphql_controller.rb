class GraphQLController < ApplicationController

  def query
    render json: Schema.execute(params[:query])
  end

end
