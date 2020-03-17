const trees = [
  {
    species: "Oak",
    height: 45,
    color: "green",
    age: 26,
    image:
      "https://www.thefactsite.com/wp-content/uploads/2018/11/oak-tree-facts.jpg"
  },
  {
    species: "Maple",
    height: 45,
    color: "red",
    age: 29,
    image:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.thetreecenter.com%2Famerican-red-maple%2F&psig=AOvVaw1VFS__ddePzUp5u7Rc6XLd&ust=1584552164333000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJjz_fmCougCFQAAAAAdAAAAABAD"
  },
  {
    species: "Cocobolo",
    height: 37,
    color: "green",
    age: 15,
    image:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fticotimes.net%2F2016%2F01%2F12%2Fillegal-logging-threatens-costa-ricas-valuable-species-and-vulnerable-national-parks&psig=AOvVaw3Ky-xoYXXU6e1sg_Aoq46p&ust=1584552199751000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPCmzIqDougCFQAAAAAdAAAAABAE"
  },
  {
    species: "Rosewood",
    height: 65,
    color: "green",
    age: 31,
    image:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.amazon.com%2FDalbergia-Sissoo-Seeds-Shisham-Rosewood%2Fdp%2FB00NDZ3KXS&psig=AOvVaw1XQuEYc1oN1zpJqd65o7_U&ust=1584552234303000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCICd4JuDougCFQAAAAAdAAAAABAF"
  }
]

trees.forEach(tree => {
  const card = document.createElement("div")
  const species = document.createElement("h2")
  const image = document.createElement("img")
  const stats = document.createElement("ul")
  const height = document.createElement("li")
  const color = document.createElement("li")
  const age = document.createElement("li")

  // Step 2 Modify the Elements
  species.innerText = tree.species
  image.src = tree.image
  height.innerText = `Height: ${tree.height} feet`
  color.innerText = `Color: ${tree.color}`
  age.innerText = `Age: ${tree.age} Years`

  //The order in which you list the children below matters.
  stats.append(height, color, age)
  //We use append when we want to do more than one. Or just one. So just use .append over .appendChild
  card.append(species, image, stats)
  document.body.append(card)
})

// Hard code it first.
// Step 1 Create Elements
const card = document.createElement("div")
const species = document.createElement("h2")
const image = document.createElement("img")
const stats = document.createElement("ul")
const height = document.createElement("li")
const color = document.createElement("li")
const age = document.createElement("li")

// Step 2 Modify the Elements
species.innerText = "Oak"
image.src =
  "https://www.thefactsite.com/wp-content/uploads/2018/11/oak-tree-facts.jpg"
height.innerText = "Height: 65 feet"
color.innerText = "Color: green"
age.innerText = "Age: 31 Years"

stats.append(height, color, age)
//We use append when we want to do more than one. Or just one. So just use .append over .appendChild
card.append(species, image, stats)
document.body.append(card)

console.log(stats)
