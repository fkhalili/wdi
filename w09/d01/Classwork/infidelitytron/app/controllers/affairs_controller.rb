class AffairsController < ApplicationController
	
	def index
		@affairs = Affair.all
	end

	def new
		@affair = Affair.new
	end


	def create 
		# new_affair = Affair.create({name: params["affair"]["name"], location: params["affair"]["location"]})
		Affair.create(affair_params)
		redirect_to "/affairs"
	end

	def affair_params
		params.require(:affair).permit(:name, :location)
	end

	def show
		@affair = Affairs.find(params["id"])
	end

	def destroy
		affair_to_destroy = Affair.find(params["id"])
		affair_to_destroy.destroy

		redirect_to "affairs/"+params["id"]
	end

end