module Api
	class PenguinsController < ApplicationController

		def index
			penguins = Penguin.all
			render json: penguins
		end

		def create
			# penguin_params is a method that is defined at the bottom of this controller.
			penguin = Penguin.create(penguin_params)
			render json: penguin
		end

		def destroy
			penguin = Penguin.find(params[:id])
			penguin.destroy
			render json: penguin
		end

		def update
			penguin = Penguin.find(params[:id])
			penguin.update(penguin_params)
			render json: penguin
		end

		private

		# Below is an example of whitelisting your params. It is a good way of adding some extra security in Rails 4.
		def penguin_params
			params.require(:penguin).permit(:name)
		end

	end
end
