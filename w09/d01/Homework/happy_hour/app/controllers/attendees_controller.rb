class AttendeesController < ApplicationController


	def index
		@attendees = Attendee.all
	end


	def new
		@attendee = Attendee.new
	end

	def create

		Attendee.create(attendee_params)
		redirect_to "/attendees"
	end

	def show
		@attendee = Attendee.find(params["id"])
	end

	def edit
    	@attendee = Attendee.find(params["id"])
  	end

  	def update
  		data = Attendee.find(params["id"])
  		data.update(attendee_params)
  		redirect_to ("/attendees/"+params["id"])
  	end

  	def destroy
  		data = Attendee.find(params["id"])
  		data.destroy

  		redirect_to "/attendees"
  	end


	private

	def attendee_params 
		params.require(:attendee).permit(:first_name, :last_name, :age, :likes_beer)
	end

end