BotApi.define_resource :teams do

  key :slack_id
  scope { Team }
  collection { |scope| scope.all }
  new_instance do |scope, context|
    scope.new slack_id: context.request_id, **context.request_attributes
  end
  instance { |scope, slack_id| scope.find_by!(slack_id: slack_id) }

  attribute :name, types.String, 'The name of the Slack Team.'
  attribute :slack_bot_id, types.String, 'The id of the Slack bot.'
  attribute :slack_bot_token, types.String, 'The token of the Slack bot.'

  relates_to_many :users do
    create do |context|
      update_instance context
    end
  end

  relates_to_many :channels do
    create do |context|
      update_instance context
    end
  end

  update do |context|
    update_instance context
  end

end
