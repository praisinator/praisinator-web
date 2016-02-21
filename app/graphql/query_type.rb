QueryType = GraphQL::ObjectType.define do
  name "Query"

  # Used by Relay to lookup objects by UUID:
  field :node, field: NodeIdentification.field

  # The relay loopback
  field :root, ->{ QueryType } do
    resolve ->(*){
      Object.new
    }
  end

  connection :teams, -> { TeamType.connection_type } do
    resolve ->(*){
      Team.all
    }
  end

end
