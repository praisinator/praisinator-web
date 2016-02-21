Rails.application.routes.draw do
  root to: 'home#index'
  # root to: 'application#index'
  mount BotApi => "/api"
  post '/slash' => 'slash_commands#create'
  post '/graphql' => 'graphql#query'
  # get '/*path'  => 'application#index'

end
