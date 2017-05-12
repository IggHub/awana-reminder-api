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
=begin
    @workers = Worker.where(schedule_id: params[:schedule_id])
    @workers.each do |worker|
      TwilioSender.new.send_it(params[:message], worker.phone)
    end
=end
    TwilioSender.new.send_it(params[:message], params[:phone])
    puts "Message sent!"
  end

  private

  def text_params
    params.permit(:message, :schedule_id)
  end

=begin
  def send_text
    @phone = Phone.new(phone_params)
    @phone.send_sms(@phone.clean_number)
    redirect_to :back
  end

  private
  def phone_params
    params.require(:phone).permit(:number)
  end
=end
end
