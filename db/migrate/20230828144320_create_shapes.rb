class CreateShapes < ActiveRecord::Migration[7.0]
  def change
    create_table :shapes do |t|
      t.string :name
      t.references :project, null: false, foreign_key: true
      t.integer :start_x
      t.integer :start_y
      t.integer :height
      t.integer :width

      t.timestamps
    end
  end
end
