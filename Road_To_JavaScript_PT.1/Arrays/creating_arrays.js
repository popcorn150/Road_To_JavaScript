const hobbies = ['watching anime', 'gaming', 'cooking']
console.log(hobbies)

// Accessing array elements
const famousSayings = ['Fortune favors the brave.', 'A joke is a very serious thing.', 'Where there is love there is life.']
let listItem = famousSayings[0]
console.log(famousSayings[2])

// Update Elements
let groceryList = ['bread', 'tomatoes', 'milk']
groceryList[1] = 'avocados'
console.log(groceryList)

// Arrays with let and const
let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha']

const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork']

condiments[0] = 'Mayo'
console.log(condiments)
condiments = ['Mayo']
console.log(condiments)
utensils[3] = 'Spoon'
console.log(utensils)

// The .push() Method
const chores = ['wash dishes', 'do laundry', 'take out trash'];
chores.push('sweep', 'clean')
console.log(chores)

// the .pop() Method
const chores2 = ['wash dishes', 'do laundry', 'take out trash', 'cook dinner', 'mop floor'];
chores2.pop()

// More Array Methods
const groceryList2 = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];
groceryList2.shift()

groceryList2.unshift('popcorn')
// console.log(groceryList2.slice(1, 4))

const pastaIndex = groceryList2.indexOf('pasta')
console.log(pastaIndex)
