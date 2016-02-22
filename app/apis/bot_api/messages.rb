BotApi.define_resource :messages do

  scope { Message }
  collection { [] }
  instance { |scope, id| scope.find(id) }

  attribute :user_slack_id, types.String, 'The user id who sent the message.', read: false
  attribute :content, types.String, 'The content of the message.', read: false
  attribute :timestamp, types.Float, 'The timestamp of the message.', read: false

  relates_to_one :channel, resource: :channels
  relates_to_one :user, resource: :users

  update do |context|
    update_instance context
  end

  list only_associated: true

end
