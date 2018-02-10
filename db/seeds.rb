10.times do |student|
  Student.create!(
    firstname: "Morty",
    lastname: "#{student}Smith",
    favoritefood: "Pickles",
    favoritecolor: "Green",
    favoritemovie: "The Fly")
end

p "created 10 Mortys"

Student.create!(
    firstname: "Jerry",
    lastname: "Smith",
    favoritefood: "Pickles",
    favoritecolor: "Green",
    favoritemovie: "Anatomy Park")

p "created 1 Jerry"

Student.create!(
    firstname: "Rick",
    lastname: "Smith",
    favoritefood: "Pickles",
    favoritecolor: "Green",
    favoritemovie: "Mad Max")


p "created 1 Rick"

