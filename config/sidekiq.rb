ENV['WEB_DB_POOL_SIZE'] ||= ENV['PUMA_THREADS'] || '10'

ENV['REDIS_URL'] ||= "redis://#{CFENV['praisinator-redis']['uri']}:#{CFENV['praisinator-redis']['port']}"

Sidekiq.configure_server do |config|
  # Configure Redis
  config.redis = { url: ENV['REDIS_URL'] }

  Rails.application.config.after_initialize do

    # Disconnect the DB
    ActiveRecord::Base.connection_pool.disconnect!

    # Initialize the DB
    ActiveSupport.on_load(:active_record) do
      config = Rails.application.config.database_configuration[Rails.env]
      config['reaping_frequency'] = (ENV['DATABASE_REAP_FREQ'] || 10).to_i # seconds
      config['pool'] = (ENV['WORKER_DB_POOL_SIZE'] || Sidekiq.options[:concurrency] + 5).to_i
      ActiveRecord::Base.establish_connection(config)
    end
  end
end

Sidekiq.configure_client do |config|
  # Configure Redis
  config.redis = { url: ENV['REDIS_URL'] }

  Rails.application.config.after_initialize do

    # Disconnect the DB
    ActiveRecord::Base.connection_pool.disconnect!

    # Initialize the DB
    ActiveSupport.on_load(:active_record) do
      config = Rails.application.config.database_configuration[Rails.env]
      config['reaping_frequency'] = (ENV['DATABASE_REAP_FREQ'] || 10).to_i # seconds
      config['pool'] = (ENV['WEB_DB_POOL_SIZE'] || request_thread_count).to_i
      ActiveRecord::Base.establish_connection(config)
    end
  end
end

Sidekiq.logger = Rails.logger
Sidekiq.default_worker_options = { 'backtrace' => true }
