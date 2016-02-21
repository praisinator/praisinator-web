require 'sidekiq/web'
Rails.application.routes.draw do
  root to: 'home#index'

  mount Sidekiq::Web => '/sidekiq'
  mount BotApi => "/api"

  post '/slash' => 'slash_commands#create'
  post '/graphql' => 'graphql#query'
  get '/nuke' => 'application#nuke'
  get '/*path'  => 'home#index'
end
