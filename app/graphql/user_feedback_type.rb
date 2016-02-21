UserFeedbackType = GraphQL::ObjectType.define do
  name "UserFeedback"

  interfaces [NodeIdentification.interface]
  global_id_field :id

  field :positive, !types.Boolean
  field :issued_user, -> { UserType }

end
