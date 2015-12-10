class SecretsController < ApplicationController
  def show
    if session[:this_browser_has_entered_pass] == "yess they have!"
      puts session[:cheesecake]
      render :show
    else
      redirect_to '/enter'
    end
  end

  def login
    if params[:password] == 'cheese'
      session[:this_browser_has_entered_pass] = "yess they have!"
      session[:cheesecake] = 'ricotta based obviously'
      redirect_to '/secret'
    else
      redirect_to '/enter'
    end
  end

  def enter
    render :enter    
  end
end