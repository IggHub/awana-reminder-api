class AddScheduleIdToWorkers < ActiveRecord::Migration[5.0]
  def change
    add_column :workers, :schedule_id, :integer
  end
end
