class CreateText < ActiveRecord::Migration[5.0]
  def change
    create_table :texts do |t|
      t.text :message
      t.integer :schedule_id
    end
  end
end
