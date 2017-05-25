class SchedulesController < ApplicationController
  def index
    @schedules = Schedule.all
    render json: @schedules
  end

  def show
    @schedule = Schedule.find(params[:id])
    render json: @schedule
  end

  def create
    @schedule = Schedule.new(schedule_params)
    @worker = @schedule.workers.new(worker_params)
    @worker.save
    #@worker = @schedule.workers.new(worker_params)
    #@worker.save
    #roster = @schedule.rosters.build unless @schedule.rosters.present?
    #roster.build_worker unless roster.worker.present?
    # binding.pry
    if @schedule.save

      render json: @schedule
    else
      render json: @schedule, status: :unprocessable_entity
    end
  end

  def update
    @schedule = Schedule.find(params[:id])
    if @schedule.update_attributes(schedule_params)
      render json: @schedule
    else
      render json: @schedule, status: :unprocessable_entity
    end
  end

  def destroy
    @schedule = Schedule.find(params[:id]).destroy
    head :no_content
  end

  private

  def schedule_params
    params.require(:schedule).permit(:date, :message, :user_id)
  end

  def worker_params
    params.require(:worker_info).permit(:name, :phone)
  end
end
