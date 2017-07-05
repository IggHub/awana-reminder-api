class ScoresController < ApplicationController
  def index
    @scores = Score.all
    render json: @scores
  end

  def create
  end

  def update
  end

  def destroy
  end
end
