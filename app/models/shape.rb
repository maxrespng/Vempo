class Shape < ApplicationRecord
  belongs_to :project
  has_one :behaviours
end
