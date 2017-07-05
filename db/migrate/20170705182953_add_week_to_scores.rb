class AddWeekToScores < ActiveRecord::Migration[5.0]
  def up
    add_column :scores, :week, :integer
  end

  def down
    remove_column :scores, :week
  end
end
