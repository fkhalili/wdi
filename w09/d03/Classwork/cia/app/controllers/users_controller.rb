class UsersController < ApplicationController
  def create
    u = User.create(
      codename: params[:codename],
      password: params[:password],
      real_name: params[:real_name]
    )

    redirect_to "/users/#{u.codename}"
  end

  def show
    render :password_check
    p = User.where(codename: params[:codename])
    @password = params[:password]

    if "hello" == @password.to_s
      if (@user = User.find_by(codename: params[:codename]))
        render :show
      else
        redirect_to '/users/new'
      end
    end
  end

end
