class AddColorToShapes < ActiveRecord::Migration[7.0]
  def change
    add_column :shapes, :color, :string
  end
end
