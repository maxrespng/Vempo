class AddScreenshotToProjects < ActiveRecord::Migration[7.0]
  def change
    add_column :projects, :screenshot, :text
  end
end
