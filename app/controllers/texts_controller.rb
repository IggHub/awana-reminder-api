class TextsController < ApplicationController
  def index
    @texts = Text.where(nil)
    @texts = Text.where(schedule_id: params[:schedule_id]) if params[:schedule_id].present?
    render json: @texts
  end

  def create
    @text = Text.new(text_params)
    if @text.save
      render json: @text
    else
      render json: @text, status: :unprocessable_entity
    end
  end

  def destroy
    @text = Text.find(params[:id]).destroy
  end

  def send_text
    TwilioSender.new.send_it(params[:message], params[:phone])
  end

  private

  def text_params
    params.permit(:message, :schedule_id)
  end

end
