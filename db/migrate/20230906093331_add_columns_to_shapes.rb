class AddColumnsToShapes < ActiveRecord::Migration[7.0]
  def change
    add_column :shapes, :triangle_x, :string
    add_column :shapes, :triangle_y, :string
  end
end
