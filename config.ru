# This file is used by Rack-based servers to start the application.

# require ::File.expand_path('../config/environment', __FILE__)
# run Rails.application
require 'json'
run ->(_){ [200, { "Content-Type" => "application/json"}, [JSON.dump(ENV.to_h)]]}
