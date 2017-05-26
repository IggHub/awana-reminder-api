class SchedulesController < ApplicationController
  def text_dat_message
    #TwilioSender.new.send_it(params[:message], params[:phone])
    #testing worker
    HardWorker.perform_in(10.seconds, params[:message], params[:phone])
  end

  def index
    @schedules = Schedule.all
    render json: @schedules
  end

  def show
    @schedule = Schedule.find(params[:id])
    render json: @schedule
  end

                                ### note: ###
      ### when accepting array of workers, do something like: ###
      # @schedule.workers.each |worker|
      #   worker.new(worker_params)
      #   worker.save
      # end
      ### END ###

  def create
    @schedule = Schedule.new(schedule_params)

    if @schedule.save
      worker_params["worker_info"].each do |w|
        @schedule.workers.create!(w)
      end
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
    #binding.pry
    #params.require(:worker_info).permit(:name, :phone)
    params.permit(worker_info: [:name, :phone])
  end

#  def worker_params
#    params.require(:worker_info).map do |p|
#      ActionController::Parameters.new(p.to_hash).permit(:name, :phone)
#    end
#  end
#  def worker_params
#    params.require(:worker_info)
#    params.permit worker_info: [:name, :phone]
#  end
end
