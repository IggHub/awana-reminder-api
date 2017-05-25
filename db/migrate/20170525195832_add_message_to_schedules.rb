class AddMessageToSchedules < ActiveRecord::Migration[5.0]
  def change
    add_column :schedules, :message, :text
  end
end
