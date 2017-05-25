class DropRostersTable < ActiveRecord::Migration[5.0]
  def change
    drop_table :rosters
  end
end
