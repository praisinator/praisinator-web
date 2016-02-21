BotApi.define_resource :channels do

  id :slack_id
  scope { Channel }
  collection { |scope| scope.all }
  new_instance do |scope, context|
    scope.new slack_id: context.request_id, **context.request_attributes
  end
  instance { |scope, slack| scope.find_by!(slack_id: slack) }

  attribute :name, types.String, 'The name of the Slack Team.'

  relates_to_one :team, resource: :teams
  relates_to_many :messages do
    create do |context|
      update_instance context
    end
  end

  update do |context|
    update_instance context
  end

  list only_associated: true

end
