class DrawerController < ApplicationController
  layout "drawer"

  def index
  end

  def reminder
    @reminder_props = { currentUserId: current_user.id.to_s, schedules: Schedule.where(user_id: current_user.id.to_s) }
  end

  def scorer
    @students = Student.all
  end
end
