class ChangeValuesInShapes < ActiveRecord::Migration[7.0]
  def change
    change_column :shapes, :start_x, :string
    change_column :shapes, :start_y, :string
    change_column :shapes, :width, :string
    change_column :shapes, :height, :string
  end
end
