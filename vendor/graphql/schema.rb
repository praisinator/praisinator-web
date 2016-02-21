Schema = GraphQL::Schema.new(query: QueryType)

module SchemaHelpers
  SCHEMA_DIR  = Rails.root.join('app/assets/javascripts/graphql/')
  SCHEMA_PATH = File.join(SCHEMA_DIR, 'schema.json')

  def explain
    Rails.cache.fetch checksum do
      Schema.execute GraphQL::Introspection::INTROSPECTION_QUERY
    end
  end

  def checksum
    files   = Dir["app/graph/**/*.rb"].reject { |f| File.directory?(f) }
    content = files.map { |f| File.read(f) }.join
    Digest::SHA256.hexdigest(content).to_s
  end

  def generate
    FileUtils.mkdir_p SCHEMA_DIR
    result = JSON.pretty_generate(Schema.explain)
    unless File.exists?(SCHEMA_PATH) && File.read(SCHEMA_PATH) == result
      File.write(SCHEMA_PATH, result)
    end
  end

  def remove
    FileUtils.rm SCHEMA_PATH if File.exist? SCHEMA_PATH
  end

end

Schema.extend SchemaHelpers
