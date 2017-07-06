class DrawerController < ApplicationController
  layout "drawer"

  def index
  end

  def reminder
    @reminder_props = { currentUserId: current_user.id.to_s, schedules: Schedule.where(user_id: current_user.id.to_s) }
  end

  def scorer
    @scorer_props = {currentUserId: current_user.id.to_s}
    @students = Student.all
  end

  def scheduler
  end
end
