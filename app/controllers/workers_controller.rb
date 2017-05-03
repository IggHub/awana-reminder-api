class WorkersController < ApplicationController
  def index
    @workers = Worker.all
    render json: @workers
  end

  def show
    @worker = Worker.find(params[:id])
    render json: @worker
  end
end
