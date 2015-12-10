require 'pry'
require 'sinatra'
require 'httparty'

client_id = ENV["GITHUB_CLIENT_ID"]
client_secret = ENV["GITHUB_CLIENT_SECRET"]
callback = "http://127.0.0.1:4567/oauth_callback_route"

enable :sessions
set :session_secret, 'secret_lovers'



get "/" do 
	#build a url to pass into the view
	base_url = "https://github.com/login/oauth/authorize"
	#randomly generated string that changes everytime
	state = SecureRandom.urlsafe_base64
	#store state in our session
	session["state"] = state
	#send the state over to the ouath server, expecting it to come back
	#scope the request to user access
	#send over the client id
	query ={
		state: state,
		scope: "user",
		client_id: client_id,
	}
	#encode the query hash as a URI
	encoded_query = URI.encode_www_form(query)
	#build it as a query
	@url = base_url + "?" + encoded_query
	if session["access_token"]
		response = HTTParty.get("https://api.github.com/user?access_token="+session["access_token"],
		 headers: {"User-Agent" => "demo_app"})
		@image_url = response["avatar_url"]
	end
	render(:erb, :index)
end

get "/oauth_callback_route" do 
	#make sure that the oauth server sends back the same state value we sent over
		if session["state"] == params["state"]
			response = HTTParty.post("https://github.com/login/oauth/access_token",
				body: {
					client_id: client_id,
					client_secret: client_secret,
					code: params["code"],
					redirect_uri: "http://localhost:4567/oauth_callback_route"

					},
				headers: {
					"accept" => "application/json"
				}

				)
			session["access_token"] = response["access_token"]
		end
		redirect ("/")
end

get "/logout" do 
	session["access_token"] = nil
	redirect("/")
end