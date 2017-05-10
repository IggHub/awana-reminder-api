class TextsController < ApplicationController
  def index
    @phones = Hash.new
    Worker.all.map do |n|
        @phones[n.name] = n.phone
        @phones[n.id] = n.name
    end
    render json: @phones
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
