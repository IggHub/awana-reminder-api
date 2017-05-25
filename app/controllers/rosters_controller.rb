class RostersController < ApplicationController
  def index
    @rosters = Roster.all
    render json: @rosters
  end

  def create
    @roster = Roster.new(roster_params)
    if @roster.save
      render json: @roster
    else
      render json: @roster, status: :unprocessable_entity
    end
  end

  private

  def roster_params
    params.permit(:schedule_id, :worker_id)
  end

end
