class AffairsController < ApplicationController


  def index
    #need to grab all of my affairs from DB
    #pass them into template for rendering
    @affairs = Affair.all
  end

  def new
    @affair = Affair.new

  end

  def edit
    @affair = Affair.find(params["id"])
  end

  def show
    # binding.pry
    @affair = Affair.find(params["id"])
  end

  def update
    update_me = Affair.find(params["id"])
    update_me.update(affair_params)

    redirect_to affair_path
  end

  def destroy
    affair_to_destroy = Affair.find(params["id"])
    affair_to_destroy.destroy

    redirect_to "https://www.ashleymadison.com"
  end

  def create
    # binding.pry
    # new_affair = Affair.create({name: params["affair"]["name"], location: params["affair"]["location"]})
    Affair.create(affair_params)
    redirect_to affairs_path
    # redirect_to "/affairs"
  end

  private

  def affair_params
    params.require(:affair).permit(:name, :location)
  end

end