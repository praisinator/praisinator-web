UserType = GraphQL::ObjectType.define do
  name "User"

  interfaces [NodeIdentification.interface]
  global_id_field :id

  field :name, !types.String
  field :overall_feedback, !types.Int
  field :team, -> { TeamType }

  field :tone, -> { ToneType } do
    resolve ->(user, *){
      user.tones.composite
    }
  end

  connection :channels, -> { ChannelType.connection_type } do
    resolve ->(user, *){
      user.channels
    }
  end

  connection :messages, -> { MessageType.connection_type } do
    resolve ->(user, *){
      user.messages
    }
  end

  connection :feedback, -> { UserFeedbackType.connection_type } do
    resolve ->(user, *){
      user.issued_feedbacks
    }
  end

end
