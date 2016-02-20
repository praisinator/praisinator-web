BotApi.define_resource :users do

  id :slack_id
  scope { User }
  collection { |scope| scope.all }
  instance { |scope, slack| scope.find_by!(slack_id: slack) }
  new_instance do |scope, context|
    scope.new slack_id: context.request_id, **context.request_attributes
  end

  attribute :name, types.String, 'The name of the Slack Team.'
  attribute :slack_bot_id, types.String, 'The id of the Slack bot.'
  attribute :slack_bot_token, types.String, 'The token of the Slack bot.'

  relates_to_one :team
  relates_to_many :messages

end
