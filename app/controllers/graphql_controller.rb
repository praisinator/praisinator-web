class GraphqlController < ApplicationController

  def query
    def execute
      puts '-' * 100, GraphQLFormatter.new(params[:query]).to_s, '-' * 100
      result = RelaySchema.execute(params[:query], debug: true, variables: params[:variables])
      render json: result
    end
  end

end
