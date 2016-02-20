BotApi.define_resource :users do

  id :slack_id
  scope { User }
  collection { |scope| scope.all }
  instance { |scope, slack| scope.find_by!(slack_id: slack) }
  new_instance do |scope, context|
    scope.new slack_id: context.request_id, **context.request_attributes
  end

  attribute :access_token, types.String, 'The access token for the user.'

  relates_to_one :team, resource: :teams
  relates_to_many :messages

end
