class Shape < ApplicationRecord
  belongs_to :project
  has_many :behaviours
end
