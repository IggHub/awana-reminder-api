require 'rails_helper'

RSpec.describe WorkersController do
  num_workers = 5
  let(:worker) {FactoryGirl.create(:worker)}
  let(:schedule) {FactoryGirl.create(:schedule)}
  before(:each) do
    FactoryGirl.create_list(:worker, num_workers)
  end

  describe "GET index" do
    it "returns http success" do
      get "/api/workers"
      expect(response).to have_http_status(200)
    end

    it "lists all workers correctly" do
      get "/api/workers"
      json = JSON.parse(response.body)
      expect(json.length).to eq(num_workers)
    end
  end

  describe "GET show" do
    it "returns http 200" do
      get "/api/workers/#{worker.id}"
      expect(response).to have_http_status(200)
    end

    it "shows the right worker" do
      get "/api/workers/#{worker.id}"
      json = JSON.parse(response.body)
      expect(json["name"]).to eq(worker.name)
    end
  end

  describe "POST create" do
    it "creates a new worker" do
      expect{
        post "/api/workers", params: {name: "Iggy123", phone: "9998887777", schedule_id: schedule.id}
      }.to change(Worker, :count).by(1)
    end
  end
  describe "DELETE destroy" do
    it "deletes a worker" do
      count1 = Worker.where(id: worker.id).size
      expect(count1).to eq(1)
      delete "/api/workers/#{worker.id}"
      count0 = Worker.where(id: worker.id).size
      expect(count0).to eq(0)
    end
  end
end
