class SessionsController < ApplicationController

  def new
  end

  def create
    #logged in means a user_id is stored in a session
    user = User.find_by({email: params[:email]})
    
    if user && user.authenticate(params[:password])
      session[:user_id] = user.id
      redirect_to user_path(user)
    else
      redirect_to sessions_new_path
    end
  end


  def destroy
    session[:user_id] = nil
    redirect_to root_path
  end

end