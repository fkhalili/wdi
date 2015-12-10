class AnimalsController < ApplicationController

  def index
    @farm = Farm.find(params[:farm_id])
    @animals = @farm.animals
  end

  def new
    @farm = Farm.find(params[:farm_id])
    @animal = Animal.new
  end

  def create
    @farm = Farm.find(params[:farm_id])
    @animal = Animal.create(animal_params)
    redirect_to farm_path(@farm)
  end

  def show
    @animal = Animal.find(params[:id])
  end

  def edit
    @animal = Animal.find(params[:id])
  end

  def update
    @animal = Animal.find(params[:id])
    @animal.update(animal_params)
    redirect_to animal_path(@animal)
  end

  def destroy
    @animal = Animal.find(params[:id])
    @animal.delete
    redirect_to @animal.farm
  end

  private
  def animal_params
    params
      .require(:animal)
      .permit(:name, :age, :sex, :breed)
      .merge({farm_id: params[:farm_id]})
  end

end
