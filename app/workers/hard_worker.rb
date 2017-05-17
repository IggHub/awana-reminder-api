class HardWorker
  include Sidekiq::Worker

  def perform(*args)
    puts "#{args[0]} from #{args[1]}"
  end
end
