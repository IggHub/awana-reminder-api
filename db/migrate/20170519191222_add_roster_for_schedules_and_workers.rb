class AddRosterForSchedulesAndWorkers < ActiveRecord::Migration[5.0]
  def change
    create_table :rosters do |t|
      t.integer :schedule_id
      t.integer :worker_id

      t.timestamps
    end
  end
end
