Rails.application.routes.draw do
  root to: 'home#index'

  # api routes...
  mount BotApi => "/api"

  get '/*path' => 'home#index'
end
