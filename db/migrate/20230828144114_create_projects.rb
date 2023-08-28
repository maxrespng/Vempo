class CreateProjects < ActiveRecord::Migration[7.0]
  def change
    create_table :projects do |t|
      t.string :name
      t.string :description
      t.references :user, null: false, foreign_key: true
      t.boolean :has_mic
      t.string :music_file

      t.timestamps
    end
  end
end
