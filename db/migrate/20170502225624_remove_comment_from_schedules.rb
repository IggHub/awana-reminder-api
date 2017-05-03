class RemoveCommentFromSchedules < ActiveRecord::Migration[5.0]
  def change
    remove_column :schedules, :comment
  end
end
