class Roster < ApplicationRecord
  belongs_to :schedule
  belongs_to :worker
end
