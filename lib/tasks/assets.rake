namespace :graphql do
  desc 'generate the graphql schema'
  task :generate_schema do
    puts 'Generating GraphQL Schema...'
    Schema.generate
  end

  desc 'remove the graphql schema'
  task :remove_schema do
    Schema.remove
  end
end

Rake::Task['assets:precompile'].enhance ['graphql:generate_schema']
Rake::Task['assets:clobber'].enhance ['graphql:remove_schema']
