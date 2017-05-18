class ChangeDateFormatInSchedules < ActiveRecord::Migration[5.0]
  def up
    change_column :schedules, :date, :datetime
  end

  def down
    change_column :schedules, :date, :date
  end
end
