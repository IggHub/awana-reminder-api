class RemoveScheduleIdFromWorkers < ActiveRecord::Migration[5.0]
  def change
    remove_column :workers, :schedule_id
  end
end
