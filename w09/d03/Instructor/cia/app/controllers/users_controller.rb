class UsersController < ApplicationController
  def index
    @users = User.all
  end

  def create
    u = User.create(
      codename: params[:codename],
      password: params[:password],
      real_name: params[:real_name]
    )

    redirect_to "/users/#{u.codename}"
  end

  def show
    if session[:logged_in]
      @user = User.find_by(codename: params[:codename])
      if @user
        render :show
      else
        redirect_to '/users/new'
      end
    else
      redirect_to '/login_form'
    end
  end
end
