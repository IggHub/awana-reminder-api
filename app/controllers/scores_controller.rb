class ScoresController < ApplicationController
  def index
    @scores = Score.all
    render json: @scores
  end

  def create
    puts 'Hello create!!'
    puts '\(^ o ^)/'
    params[:scores_array].each do |score|
      Score.create(point: score["point"], student_id: score["student_id"], week: score["week"], completed_at: Time.now)
    end

=begin
    if @score.save
      render json: @score
    else
      render json: @score, status: :unprocessable_entity
    end
=end
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

  def delete_by_week
    Score.destroy_all(:week => params[:week])
    head :no_content
  end

  private

  def score_params
    params.require(:score).permit(:completed_at, :point, :week, :student_id)
  end
end
