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
max = User.create(email: "max@lewagon.com", password: "123456")
User.create(email: "bruno@lewagon.com", password: "123456")
User.create(email: "helder@lewagon.com", password: "123456")
User.create(email: "pinar@lewagon.com", password: "123456")
User.create(email: "david@lewagon.com", password: "123456")

project1 = Project.new(
  name: "Project 1",
  description: "Power Metal",
  user_id: 1,
  has_mic: false,
  music_file: "Nightfall"
)
file = URI.open("https://ukclippingpath.com/wp-content/uploads/2021/10/Slight-Angling.jpg")
project1.photo.attach(io: file, filename: "nes.png", content_type: "image/png")
project1.save!

project2 = Project.new(
  name: "Project 2",
  description: "Thrash Metal",
  user_id: 2,
  has_mic: false,
  music_file: "She Wolf"
)
file = URI.open("https://ukclippingpath.com/wp-content/uploads/2021/10/Slight-Angling.jpg")
project2.photo.attach(io: file, filename: "nes.png", content_type: "image/png")
project2.save!

project3 = Project.new(
  name: "Project 3",
  description: "Progressive Metal",
  user_id: 3,
  has_mic: false,
  music_file: "Panic Attack"
)
file = URI.open("https://ukclippingpath.com/wp-content/uploads/2021/10/Slight-Angling.jpg")
project3.photo.attach(io: file, filename: "nes.png", content_type: "image/png")
project3.save!
