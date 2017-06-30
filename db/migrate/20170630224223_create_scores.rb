class CreateScores < ActiveRecord::Migration[5.0]
  def change
    create_table :scores do |t|
      t.decimal :point
      t.datetime :completed_at
      t.integer :student_id

      t.timestamps
    end
  end
end
