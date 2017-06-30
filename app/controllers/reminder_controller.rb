class ReminderController < ApplicationController
  layout "reminder"

  def index
    @scheduler_props = { currentUserId: current_user.id.to_s, schedules: Schedule.where(user_id: current_user.id.to_s) }
  end
end
