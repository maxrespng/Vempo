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

url = "/Users/maximilianlana/code/maxrespng/Vempo/app/assets/images/test-template-project.png"
sound_url = "https://actions.google.com/sounds/v1/alarms/phone_alerts_and_rings.ogg"

project1 = Project.new(
  name: "Project 1",
  description: "Power Metal",
  has_mic: false,
)
project1.user = max
file = URI.open(url)
project1.photo.attach(io: file, filename: "nes.png", content_type: "image/png")
music_file = URI.open(sound_url)
project1.photo.attach(io: music_file, filename: "phone_alerts_and_rings", content_type: "video/mp4")
project1.save!

project2 = Project.new(
  name: "Project 2",
  description: "Thrash Metal",
  has_mic: false,
  music_file: "She Wolf"
)
project2.user = bruno
file = URI.open(url)
project2.photo.attach(io: file, filename: "computer.svg", content_type: "image/svg")
music_file = URI.open(sound_url)
project2.photo.attach(io: music_file, filename: "phone_alerts_and_rings", content_type: "video/mp4")
project2.save!

project3 = Project.new(
  name: "Project 3",
  description: "Progressive Metal",
  has_mic: false,
  music_file: "Panic Attack"
)
project3.user = helder
file = URI.open(url)
project3.photo.attach(io: file, filename: "nes.png", content_type: "image/png")
music_file = URI.open(sound_url)
project3.photo.attach(io: music_file, filename: "phone_alerts_and_rings", content_type: "video/mp4")
project3.save!

project4 = Project.new(
  name: "Project 4",
  description: "Progressive Metal",
  has_mic: false,
  music_file: "Panic Attack"
)
project4.user = helder
file = URI.open(url)
project4.photo.attach(io: file, filename: "nes.png", content_type: "image/png")
music_file = URI.open(sound_url)
project4.photo.attach(io: music_file, filename: "phone_alerts_and_rings", content_type: "video/mp4")
project4.save!

project5 = Project.new(
  name: "Project 5",
  description: "Progressive Metal",
  has_mic: false,
  music_file: "Panic Attack"
)
project5.user = helder
file = URI.open(url)
project5.photo.attach(io: file, filename: "nes.png", content_type: "image/png")
music_file = URI.open(sound_url)
project5.photo.attach(io: music_file, filename: "phone_alerts_and_rings", content_type: "video/mp4")
project5.save!

project6 = Project.new(
  name: "Project 6",
  description: "Progressive Metal",
  has_mic: false,
  music_file: "Panic Attack"
)
project6.user = helder
file = URI.open(url)
project6.photo.attach(io: file, filename: "nes.png", content_type: "image/png")
music_file = URI.open(sound_url)
project6.photo.attach(io: music_file, filename: "phone_alerts_and_rings", content_type: "video/mp4")
project6.save!

# DEMO_PROJECTS_BELOW:

# demo_project_1 = Project.new(
#   name: "Electronic",
#   description: "Power Metal",
#   has_mic: false,
#   music_file: "Nightfall"
# )
# project1.user = pinar
# file = URI.open("app/assets/images/Screenshot 2023-09-01 at 14.12.29.png")
# project1.photo.attach(io: file, filename: "template.png", content_type: "image/png")
# project1.save!

# demo_project_2 = Project.new(
#   name: "Rock",
#   description: "Power Metal",
#   has_mic: false,
#   music_file: "Nightfall"
# )
# project1.user = pinar
# file = URI.open("app/assets/images/Screenshot 2023-09-01 at 14.12.29.png")
# project1.photo.attach(io: file, filename: "template.png", content_type: "image/png")
# project1.save!

# demo_project_3 = Project.new(
#   name: "Techno",
#   description: "Power Metal",
#   has_mic: false,
#   music_file: "Nightfall"
# )
# project1.user = pinar
# file = URI.open("app/assets/images/Screenshot 2023-09-01 at 14.12.29.png")
# project1.photo.attach(io: file, filename: "template.png", content_type: "image/png")
# project1.save!

# demo_project_4 = Project.new(
#   name: "Bass",
#   description: "Power Metal",
#   has_mic: false,
#   music_file: "Nightfall"
# )
# project1.user = pinar
# file = URI.open("app/assets/images/Screenshot 2023-09-01 at 14.12.29.png")
# project1.photo.attach(io: file, filename: "template.png", content_type: "image/png")
# project1.save!

# demo_project_5 = Project.new(
#   name: "Classical",
#   description: "Power Metal",
#   has_mic: false,
#   music_file: "Nightfall"
# )
# project1.user = pinar
# file = URI.open("app/assets/images/Screenshot 2023-09-01 at 14.12.29.png")
# project1.photo.attach(io: file, filename: "template.png", content_type: "image/png")
# project1.save!

# demo_project_6 = Project.new(
#   name: "Reggae",
#   description: "Power Metal",
#   has_mic: false,
#   music_file: "Nightfall"
# )
# project1.user = pinar
# file = URI.open("app/assets/images/Screenshot 2023-09-01 at 14.12.29.png")
# project1.photo.attach(io: file, filename: "template.png", content_type: "image/png")
# project1.save!

puts "#{User.count} Users Created"

puts "#{Project.count} Projects Created"
