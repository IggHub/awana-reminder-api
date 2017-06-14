class Schedule < ApplicationRecord
  belongs_to :user
  has_many :texts, dependent: :destroy
  has_many :workers
  #has_many :rosters, inverse_of: :schedule
  validates_length_of :workers, maximum: 3
  #accepts_nested_attributes_for :workers, allow_destroy: true
end

=begin
{ user_id: 1, rosters: [ { }]}
accepts_nested_attributes_for

class Member < ActiveRecord::Base
  has_many :avatar
  accepts_nested_attributes_for :avatar
end

params = { member: { name: 'Jack', avatars_attributes: [{ icon: 'smiling' }] } }
member = Member.create(params[:member])

http://api.rubyonrails.org/classes/ActiveRecord/NestedAttributes/ClassMethods.html

model member
model avatar

# POST localhost:3000/avatars
POST to localhost.../members'

=end
