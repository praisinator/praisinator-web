BotApi.define_resource :messages do

  scope { Message }
  collection { |scope| scope.all }
  instance { |scope, id| scope.find(id) }
  new_instance do |scope, context|
    scope.new **context.request_attributes
  end

  attribute :user_slack_id, types.String, 'The user id who sent the message.'
  attribute :content, types.String, 'The content of the message.'
  attribute :timestamp, types.Float, 'The timestamp of the message.'

  relates_to_one :channel, resource: :channels
  relates_to_one :user, resource: :users

  update do |context|
    update_instance context
  end

  list only_associated: true

end
