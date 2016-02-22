web: rake db:migrate && puma -C config/puma.rb
worker: sidekiq -c $SIDEKIQ_CONCURRENCY
