class TwilioSender
 def send_it(message, phone_num)
   acc_sid = Rails.application.secrets.acc_sid
   auth_token = Rails.application.secrets.auth_token
   twillio_num = '+18189753697'
   @client = Twilio::REST::Client.new acc_sid, auth_token

   message = @client.account.messages.create(
     :body => message,
     :to   => phone_num,
     :from => twillio_num
   )
 end
end
