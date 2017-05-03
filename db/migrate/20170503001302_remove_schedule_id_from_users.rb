class RemoveScheduleIdFromUsers < ActiveRecord::Migration[5.0]
  def change
    remove_column :users, :schedule_id
    add_column :schedules, :user_id, :integer
  end
end
