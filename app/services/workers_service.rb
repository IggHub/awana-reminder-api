class WorkersService
  class << self

    def call(params=[])
      @worker = params[0].Worker.new(params[1])
      @worker.save
    end

  end
end
