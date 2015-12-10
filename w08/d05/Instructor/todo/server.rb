require 'sinatra'
require 'pry'

require_relative "models/item"

get '/' do
  # "hello it's working"
  redirect '/items'
end

get '/items' do
  @items_list = Item.all
  erb :index
end

get '/items/new' do
  erb :new
end

post '/items' do
  Item.create({name: params[:name], category: params[:category]})
  redirect '/items'
end

delete "/items/:id" do
  item = Item.find(params[:id])
  item.delete
  redirect '/items'
end


