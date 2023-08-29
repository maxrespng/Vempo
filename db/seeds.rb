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
