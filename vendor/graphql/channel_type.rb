ChannelType = GraphQL::ObjectType.define do
  name "Channel"

  interfaces [NodeIdentification.interface]
  global_id_field :id

  field :tone, ToneType do
    resolve ->(channel, *){
      channel.tones.composite
    }
  end

  field :team, TeamType

  connection :users, UserType.connection_type do
    resolve ->(channel, *){
      channel.users
    }
  end

  connection :messages, MessageType.connection_type do
    resolve ->(channel, *){
      channel.messages
    }
  end

  connection :user_feedback, UserFeedbackType, connection do
    resolve ->(channel, *){
      channel.user_feedbacks
    }
  end

end
