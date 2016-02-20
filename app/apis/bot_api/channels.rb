BotApi.define_resource :channels do

  key :slack_id
  scope { Channel }
  collection { |scope| scope.all }
  instance { |scope, slack| scope.find_or_intialize_by(slack_id: slack) }

  attribute :name, types.String, 'The name of the Slack Team.'
  attribute :slack_bot_id, types.String, 'The id of the Slack bot.'
  attribute :slack_bot_token, types.String, 'The token of the Slack bot.'

  relates_to_one :team
  relates_to_many :messages do
    create do |context|
      update_instance context
    end
  end

  update do |context|
    update_instance context
  end

end
