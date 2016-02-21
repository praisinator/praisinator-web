include services/*.mk

prod-server:
	bundle check || bundle install
	npm install
	rake assets:precompile
	RAILS_ENV=production rails s
