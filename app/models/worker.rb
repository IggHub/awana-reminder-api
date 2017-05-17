class Worker < ApplicationRecord
  belongs_to :schedule, optional: true
  validates_associated :schedule
  scope :schedule_id, -> (schedule_id) {where schedule_id: schedule_id}
end
