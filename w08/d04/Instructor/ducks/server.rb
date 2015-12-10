require 'sinatra'

get('/hi') do
  "Hello World!"
end

get '/ducks' do 
  "here come the ducks!"
  @ducks = ["mickey", 'helen', "orenthal"]
  erb :index
end

get '/noducks' do

  redirect('/ducks')
end


get '/adam_morrison' do 
  "what happened to adam morrison?"
end

post '/ducks' do 
end

get '/ducks/new' do 
end

put '/ducks/:id' do 
end