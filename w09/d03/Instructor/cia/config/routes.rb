Rails.application.routes.draw do
  get '/users/new' => 'users#new'
  post '/users' => 'users#create'
  get '/users' => 'users#index'
  get '/users/:codename' => 'users#show'

  get '/login_form' => 'sessions#new'
  get '/login_action' => 'sessions#create'
end
