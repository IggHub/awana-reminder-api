require 'rails_helper'

RSpec.describe SchedulesController do
  num_schedule = 3
  num_worker = 10
  let(:schedule) {FactoryGirl.create(:schedule)}
  worker_info = [{name: "Test1", phone: "(123-456-7890)"}]

  before (:each) do
    FactoryGirl.create_list(:schedule, num_schedule)
  end

  describe "GET index" do
    it "returns http status 200" do
      get '/api/schedules'
      json = JSON.parse(response.body)
      expect(response).to have_http_status(200)
      expect(json.length).to eq(num_schedule)
    end
  end

  describe "GET show" do
    it "returns http status 200" do
      get "/api/schedules/#{schedule.id}"
      json = JSON.parse(response.body)
      expect(response).to have_http_status(200)

    end

    it "shows the right schedule" do
      get "/api/schedules/#{schedule.id}"
      json = JSON.parse(response.body)
      expect(json["message"]).to eq(schedule.message)
    end
  end

=begin
  describe "POST create" do
    it "adds new schedule by 1" do
      FactoryGirl.create(:worker)
      expect {
        post "/api/schedules", schedule: {date: schedule.date, user_id: schedule.user_id, message: schedule.message}
      }.to change(Schedule, :count).by(1)
    end
  end
=end

  describe "DELETE destroy" do
    it "destroys a select schedule" do
      count1 = Schedule.where(id: schedule.id).size
      expect(count1).to eq(1)
      delete "/api/schedules/#{schedule.id}"
      count0 = Schedule.where(id: schedule.id).size
      expect(count0).to eq(0)
    end
  end

end
