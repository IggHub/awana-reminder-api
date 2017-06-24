# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

### create schedule ###
user = User.create(name: 'iggy', phone: '(818)-943-9150', password: 'password', password_confirmation: 'password', username: 'iirianto', email: 'igor.irianto@gmail.com')

3.times do
  schedule = Schedule.create(date: Time.now + (1..10).to_a.sample, user_id: user.id, message: Faker::ChuckNorris.fact)
end
### end create schedule ###

### create workers and assign them to random schedules ###
10.times do
  Worker.create(name: Faker::Name.name, phone: Faker::PhoneNumber.cell_phone, schedule_id: (1..Schedule.all.length).to_a.sample)
end

### create rosters

# this was under Worker.create before Roster was added
# schedule_id: (1..Schedule.all.length).to_a.sample

#For each workers, create a roster
