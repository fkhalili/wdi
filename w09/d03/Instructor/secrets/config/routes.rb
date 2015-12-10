Rails.application.routes.draw do
  get '/secret' => 'secrets#show'
  get '/enter' => 'secrets#enter'
  get '/login' => 'secrets#login'
end
