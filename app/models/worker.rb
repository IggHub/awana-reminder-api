class Worker < ApplicationRecord
  belongs_to :schedule, optional: true
  scope :schedule_id, -> (schedule_id) {where schedule_id: schedule_id}
end
