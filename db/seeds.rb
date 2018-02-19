5.times do |student|
  Student.create!(
    firstname: "Morty",
    lastname: "Smith c-#{student*42}",
    favoritefood: "Concentrated Dark Matter",
    favoritecolor: "blue",
    favoritemovie: "The Fly")
end

Student.create!(
    firstname: "Jerry",
    lastname: "Smith",
    favoritefood: "Pickles",
    favoritecolor: "pink",
    favoritemovie: "Anatomy Park")

Student.create!(
    firstname: "Rick",
    lastname: "Smith",
    favoritefood: "Szechuan Chicken McNugget Sauce",
    favoritecolor: "green",
    favoritemovie: "Inception")

Student.create!(
    firstname: "Beth",
    lastname: "Smith",
    favoritefood: "Yum Yums",
    favoritecolor: "red",
    favoritemovie: "Mad Max")

Student.create!(
    firstname: "Scary",
    lastname: "Terry",
    favoritefood: "Bobbish",
    favoritecolor: "yellow",
    favoritemovie: "Nightmare on Elm Street")