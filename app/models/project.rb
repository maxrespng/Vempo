class Project < ApplicationRecord
  belongs_to :user
  has_many :shapes, dependent: :delete_all
  has_one_attached :photo
  has_one_attached :music_file

  before_save :save_svg
  # mount_uploader :music_file, MusicFileUploader

  def save_svg
    shapes_string = ""
    shapes.each do |shape|
      shapes_string += "<rect fill=\"red\" x=\"#{shape.start_x}\" y=\"#{shape.start_y}\" height=\"#{shape.height}\" width=\"#{shape.width}\""
    end
    self.svg = "<svg viewBox=\"0 0 300 500\">#{shapes_string}</svg>"
  end

  # def process_music_file(file)
  #   if file.present?
  #     self.music_file = file
  #     save!
  #   end
  # end

end
