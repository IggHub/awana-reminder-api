class TextsController < ApplicationController
  def index
    @phones = Hash.new
    Worker.all.map do |n|
        @phones[n.name] = n.phone
    end
    render json: @phones
  end

  def send_text
    acc_sid = Rails.application.secrets.acc_sid
    auth_token = Rails.application.secrets.auth_token
    twillio_num = '+18189753697'
    @client = Twilio::REST::Client.new acc_sid, auth_token

    message = @client.account.messages.create(
      :body => 'Hey from Iggy Rails, Iggy!',
      :to   => '+18189439150',
      :from => twillio_num
    )
    puts "Message sent"
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
