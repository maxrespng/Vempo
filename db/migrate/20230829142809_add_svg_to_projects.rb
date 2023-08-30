class AddSvgToProjects < ActiveRecord::Migration[7.0]
  def change
    add_column :projects, :svg, :text
  end
end
