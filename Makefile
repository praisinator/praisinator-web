include services/*.mk

prod-server:
	git pull
	bundle check || bundle install
	npm install
	rake assets:precompile
	RAILS_ENV=production rails s
