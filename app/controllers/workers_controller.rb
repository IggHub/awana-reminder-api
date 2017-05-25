class WorkersController < ApplicationController
  def index
    @workers = Worker.where(nil)
    @workers = Worker.where(schedule_id: params[:schedule_id]) if params[:schedule_id].present?
    render json: @workers
  end

  def show
    @worker = Worker.find(params[:id])
    render json: @worker
  end

  def create
    @worker = Worker.new(worker_params)
    if @worker.save
      render json: @worker
    else
      render json: @worker, status: :unprocessable_entity
    end
  end

  def update
    @worker = Worker.find(params[:id])
    if @worker.update_attributes(worker_params)
      render json: @worker
    else
      render json: @worker, status: :unprocessable_entity
    end
  end

  def destroy
    @worker = Worker.find(params[:id]).destroy
  end

  private

  def worker_params
    params.permit(:name, :phone)
  end
end
