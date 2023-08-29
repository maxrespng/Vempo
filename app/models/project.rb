class Project < ApplicationRecord
  belongs_to :user
  has_many :shapes
  has_one_attached :photo
end
