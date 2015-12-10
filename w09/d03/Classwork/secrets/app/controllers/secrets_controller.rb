class SecretsController < ApplicationController
  
  def show
    @secret = "parpar"
  end

  def enter
  	@secret = "parpar"
    @password = params[:password]
    if @password == @secret
    	redirect_to secret_path
    end
  end
end