source 'https://rubygems.org'

# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
# A simple and lightweight mix in library for Sass
gem 'bourbon'

# Use CoffeeScript for .coffee assets and views
gem 'coffee-rails'
# See https://github.com/sstephenson/execjs#readme for more supported runtimes
# gem 'therubyracer',  platforms: :ruby

gem 'devise'
# Build JSON APIs with ease. A simple DSL for declaring JSON structures that beats massaging giant hash structures
gem 'jbuilder'
# Use jquery as the JavaScript library
gem 'jquery-rails'
#Add Facebook authentication
gem 'omniauth-facebook'


gem 'rails', '4.2.0'
# Use sqlite3 as the database for Active Record

# Testing
gem 'rspec'
# Use SASS for stylesheets
gem 'bootstrap-sass', '~> 3.3.3'
gem 'sass-rails', '>= 3.2'
# bundle exec rake doc:rails generates the API under doc/api.
gem 'sdoc', '~> 0.4.0', group: :doc
# Turbolinks makes following links in your web application faster.
gem 'turbolinks'

# Use Uglifier as compressor for JavaScript assets
gem 'uglifier'

# Photo upload
gem 'uploadcare-rails', "~> 1.0"

gem 'neat'

#Add Koala- helper gem for Facebook graph
gem "koala", "~> 1.11.0rc"

# Use ActiveModel has_secure_password
gem 'bcrypt', '~> 3.1.7'


# Use unicorn as the app server
# gem 'unicorn'

# Use Capistrano for deployment
# gem 'capistrano-rails', group: :development

# Use debugger
# gem 'debugger', group: [:development, :test]
group :development, :test do

  gem 'sqlite3'

  # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem 'spring'

  gem 'rspec-rails', '~> 3.0'

  gem 'factory_girl_rails'

  gem 'shoulda-matchers'
end

group :production do
  # Heroku uses Postgres in production
  gem 'pg'

  # This gem will make Heroku serve your assets (CSS, JS, etc)
  gem 'rails_12factor'
end
