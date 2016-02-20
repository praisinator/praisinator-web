BotApi.define_resource :messages do

  scope { Message }
  collection { |scope| scope.all }
  instance { |scope, id| scope.find(id) }
  new_instance do |scope, context|
    scope.new slack_id: context.request_id, **context.request_attributes
  end

  attribute :name, types.String, 'The name of the Slack Team.'
  attribute :user_slack_id, types.String, 'The user id who sent the message.'
  attribute :body, types.String, 'The message of the body.'
  attribute :timestamp, types.Float, 'The timestamp of the message.'

  relates_to_one :channel
  relates_to_one :user

  update do |context|
    update_instance context
  end

end
