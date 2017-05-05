class Worker < ApplicationRecord
  belongs_to :schedule, optional: true
end
