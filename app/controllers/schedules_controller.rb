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

  def send_text
    acc_sid = Rails.application.secrets.acc_sid
    auth_token = Rails.application.secrets.auth_token
    twillio_num = '+18189753697'
    @client = Twilio::REST::Client.new acc_sid, auth_token

    message = @client.account.messages.create(
      :body => params[:message],
      :to   => '+18189439150',
      :from => twillio_num
    )
    puts "Message sent"
  end

  private

  def schedule_params
    params.permit(:date, :message, :user_id)
  end
end
