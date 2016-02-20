source 'https://rubygems.org'

# Read the ruby version from the .ruby-version file
version_file = File.expand_path '../.ruby-version', __FILE__
ruby File.read(version_file).strip.sub(/\-p[0-9]+$/, '')

# Core Components
gem 'rails', '4.2.5.1'
gem 'postgresql'
gem 'sidekiq'
gem 'puma'

# Asset Pipeline
gem 'sass-rails', '~> 5.0'
gem 'uglifier', '>= 1.3.0'
gem 'react-rails'

# API Stuff
gem 'jsonapionify', github: 'brandfolder/jsonapionify'
gem 'graphql'

# Tools
gem 'pry-rails'

group :production do
  gem 'rails_12factor'
end

group :development, :test do
  gem 'pry-byebug'
  gem 'rspec-rails'
  gem 'dotenv-rails'
end

group :development do
  gem 'web-console', '~> 2.0'
end
