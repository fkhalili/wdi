class UsersController < ApplicationController

  def new
    @user = User.new
  end

  def create
    new_user = User.create(user_params)
    redirect_to root_path
  end

  def show

    #grab the affairs for the user accessing the route and pass them into a template
    actual_user = User.find(session[:user_id])
    if logged_in? && check_current_user?
      @current_user = User.find(session[:user_id])
      @affairs = @current_user.affairs
    else
      redirect_to user_path(actual_user)
    end

  end




  private

  def user_params
    params.require(:user).permit(:email, :password)
  end

end