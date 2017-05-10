class Text < ApplicationRecord

  def send_sms
    acc_sid = Rails.application.secrets.acc_sid
    auth_token = Rails.application.secrets.auth_token
    @client = Twilio::REST::Client.new account_sid, auth_token

    message = @client.account.messages.create(
      :body => 'Hey Mr Nugget, you the bomb!',
      :to   => '+18189439150',
      :from => '+18189753697'
    )
  end

  def clean_number
    number = self.number.scan(/\d+/).join
    number[0] = "1" ? number[0] = '' : number
    number unless number.length != 0
  end

end
