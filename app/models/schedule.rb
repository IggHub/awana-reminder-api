class Schedule < ApplicationRecord
  belongs_to :user
  has_many :workers, dependent: :destroy
  has_many :texts, dependent: :destroy
end
