class Api::V1::DalliancesController < ApplicationController

  def index
    @dalliances = Dalliance.all
    render json: @dalliances
  end

  def show
    @dalliance = Dalliance.find(params[:id])
    render json: @dalliance
  end

  def update
    @dalliance = Dalliance.find(params[:id])
    @dalliance.update(dalliance_params)
    render json: @dalliance
  end

  def destroy
    @dalliance = Dalliance.find(params[:id])
    render json: 'deleted'
  end

  private

  def dalliance_params
    params.require(:dalliance).permit(:name, :location, :intensity)
  end

end