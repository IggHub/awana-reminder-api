class CreateStudents < ActiveRecord::Migration[5.0]
  def change
    create_table :students do |t|
      t.string :name
      t.integer :grade
      t.integer :user_id
      
      t.timestamps
    end
  end
end
