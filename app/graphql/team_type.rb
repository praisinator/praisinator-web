TeamType = GraphQL::ObjectType.define do
  name "Team"

  interfaces [NodeIdentification.interface]
  global_id_field :id

  field :name, !types.String
  field :overall_feedback, !types.Int
  field :logo_url, !types.String

  field :feedback_count, !types.Int  do
    resolve ->(team, *){
      team.issued_feedbacks.count
    }
  end

  field :channel_count, !types.Int  do
    resolve ->(team, *){
      team.channels.count
    }
  end

  field :message_count, !types.Int  do
    resolve ->(team, *){
      team.messages.count
    }
  end

  field :tone, -> { ToneType } do
    resolve ->(team, *){
      team.tones.composite
    }
  end

  connection :channels, -> { ChannelType.connection_type } do
    resolve ->(team, *){
      team.channels
    }
  end

  connection :users, -> { UserType.connection_type } do
    resolve ->(team, *){
      team.users
    }
  end

  connection :messages, -> { MessageType.connection_type } do
    resolve ->(team, *){
      team.messages
    }
  end

  connection :user_feedback, -> { UserFeedbackType.connection_type } do
    resolve ->(team, *){
      team.user_feedbacks
    }
  end

end
