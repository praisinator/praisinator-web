MessageType = GraphQL::ObjectType.define do
  name "Message"

  interfaces [NodeIdentification.interface]
  global_id_field :id

  field :content, !types.String

  field :tone, -> { ToneType }
  field :team, -> { TeamType }
  field :channel, -> { ChannelType }
  field :user, -> { UserType }

end
