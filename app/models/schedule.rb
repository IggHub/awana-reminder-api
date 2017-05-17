class Schedule < ApplicationRecord
  belongs_to :user
  has_many :texts, dependent: :destroy
  has_many :workers, dependent: :destroy
  validates_length_of :workers, maximum: 3
end
