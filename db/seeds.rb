# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)


# 10.times do
#   Project.create(name: "test_file", description: "just testing", user_id: 1, has_mic: false)
# end

Shape.destroy_all
Project.destroy_all
User.destroy_all
puts "Database cleaned"

max = User.create!(email: "max@lewagon.com", password: "123456")
bruno = User.create!(email: "bruno@lewagon.com", password: "123456")
helder = User.create!(email: "helder@lewagon.com", password: "123456")
pinar = User.create!(email: "pinar@lewagon.com", password: "123456")
david = User.create!(email: "david@lewagon.com", password: "123456")

puts "5 Users Created"

project1 = Project.new(
  name: "Project 1",
  description: "Power Metal",
  has_mic: false,
  music_file: "Nightfall"
)
project1.user = max
file = URI.open("https://ukclippingpath.com/wp-content/uploads/2021/10/Slight-Angling.jpg")
project1.photo.attach(io: file, filename: "nes.png", content_type: "image/png")
project1.save!

project2 = Project.new(
  name: "Project 2",
  description: "Thrash Metal",
  has_mic: false,
  music_file: "She Wolf"
)
project2.user = bruno
file = URI.open("https://svgshare.com/i/U7z.svg")
project2.photo.attach(io: file, filename: "computer.svg", content_type: "image/svg")
project2.save!

project3 = Project.new(
  name: "Project 3",
  description: "Progressive Metal",
  has_mic: false,
  music_file: "Panic Attack"
)
project3.user = helder
file = URI.open("/Users/pinarboztepe/code/maxrespng/Vempo/app/assets/images/cybercat.jpg")
project3.photo.attach(io: file, filename: "nes.png", content_type: "image/png")
project3.save!

puts "3 Projects Created"
