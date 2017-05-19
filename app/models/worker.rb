class Worker < ApplicationRecord
  has_many :schedules, through: :rosters
  has_many :rosters
  #validates_associated :schedule
  #scope :schedule_id, -> (schedule_id) {where schedule_id: schedule_id}
end
