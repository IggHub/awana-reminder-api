class SchedulesController < ApplicationController
  def text_dat_message
    phones = params[:phones]
    message_datetime = Time.at(params[:message_datetime] / 1000)
    phones.each_with_index do |num, index|
      #HardWorker.perform_in(index * 3, params[:message], num)
      #HardWorker.perform_at(Time.now + (5 * index).seconds, params[:message], num)
      HardWorker.perform_at(message_datetime + (5 * index).seconds, params[:message], num)
    end

  end

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
    puts worker_params
    if @schedule.update_attributes(schedule_params)
      worker_params["worker_info"].each do |w|
        @worker = Worker.find(id)
        @worker.update_attributes!
      end
      render json: @schedule
    else
      render json: @schedule, status: :unprocessable_entity
    end
  end

  def destroy
    @workers = Schedule.find(params[:id]).workers
    @workers.each do |worker|
      worker.destroy
    end
    @schedule = Schedule.find(params[:id]).destroy
    head :no_content
  end

  private

  def schedule_params
    params.require(:schedule).permit(:date, :message, :user_id)
  end


  def worker_params
    params.permit(worker_info: [:name, :phone])
  end

end
