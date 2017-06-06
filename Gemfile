source 'https://rubygems.org'

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?("/")
  "https://github.com/#{repo_name}.git"
end



gem 'rails', '~> 5.0.2'
gem 'pg'
gem 'puma', '~> 3.0'
gem 'redis', '~> 3.0'
gem 'sidekiq'
gem 'react_on_rails', '8.0.0'
gem 'sass-rails', '~> 5.0'
gem 'uglifier', '>= 2.7.2'
gem 'jquery-rails'
gem 'foreman'
gem 'twilio-ruby', '~> 4.11.1'

group :development, :test do
  # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem 'byebug', platform: :mri
  gem 'faker', '~> 1.7', '>= 1.7.3'
  gem 'rspec-rails', '~> 3.5'
  gem 'factory_girl_rails', '~> 4.8'
end

group :development do
  gem 'pry-rails'
  gem 'listen', '~> 3.0.5'
  # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
end

group :test do
  gem 'database_cleaner', '~> 1.6', '>= 1.6.1'
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]

gem 'mini_racer', platforms: :ruby
gem 'webpacker_lite'
