10.times do |student|
  Student.create!(
    firstname: "Morty dimension C-#{student}",
    lastname: "Smith",
    favoritefood: "Pickles",
    favoritecolor: "Green",
    favoritemovie: "The Fly")
end