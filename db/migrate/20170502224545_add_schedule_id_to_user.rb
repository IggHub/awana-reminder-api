class AddScheduleIdToUser < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :schedule_id, :integer
    add_column :workers, :schedule_id, :integer
  end
end
