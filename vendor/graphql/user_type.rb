UserFeedbackType = GraphQL::ObjectType.define do
  name "UserFeedback"

  interfaces [NodeIdentification.interface]
  global_id_field :id

  field :name, !types.String
  field :team, TeamType
  field :overall_feedback, !types.Integer

  field :tone, ToneType do
    resolve ->(user, *){
      user.tones.composite
    }
  end

  connection :channels, ChannelType.connection_type do
    resolve ->(user, *){
      user.channels
    }
  end

  connection :messages, MessageType.connection_type do
    resolve ->(user, *){
      user.messages
    }
  end

  connection :feedback, UserFeedbackType, connection do
    resolve ->(user, *){
      user.issued_feedbacks
    }
  end

end
