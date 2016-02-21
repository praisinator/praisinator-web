ToneType = GraphQL::ObjectType.define do
  name "Tone"

  interfaces [NodeIdentification.interface]
  global_id_field :id

  field :message, MessageType
  field :user, UserType

  field :emotional_anger, !types.Float
  field :emotiona_disgust, !types.Float
  field :emotional_fear, !types.Float
  field :emotional_sadness, !types.Float
  field :writing_analytical, !types.Float
  field :writing_confident, !types.Float
  field :writing_tentative, !types.Float
  field :social_openness, !types.Float
  field :social_conscientiousness, !types.Float
  field :social_extraversion, !types.Float
  field :social_agreeableness, !types.Float
  field :social_neuroticism, !types.Float

end
