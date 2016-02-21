Rails.application.routes.draw do
  mount BotApi => "/api"
  post '/slash', to: 'slash_commands#create'
end
