FactoryGirl.define do
  factory :schedule do
    date        {Time.now + (1..10).to_a.sample.hours}
    message     {Faker::ChuckNorris.fact}
    user
  end
end
