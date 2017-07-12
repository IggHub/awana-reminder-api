class ScoresController < ApplicationController
  def index
    @scores = Score.all
    render json: @scores
  end

  def create
  end

  def update
    @score = Score.find(params[:id])
    if @score.update_attributes(score_params)
      render json: @schedule
    else
      render json: @score, status: :unprocessable_entity
    end
  end

  def destroy
  end

  private

  def score_params
    params.require(:score).permit(:completed_at, :point)
  end
end
