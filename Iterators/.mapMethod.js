/* The .map() Method */
const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

// Create the secretMessage array below
const secretMessage = animals.map(animal => {
    return animal[0]
})

console.log(secretMessage.join(''));

const bigNumbers = [100, 200, 300, 400, 500];

// Create the smallNumbers array below
const smallNumbers = bigNumbers.map(bigNumber => {
    return bigNumber / 100
})

console.log(smallNumbers)

/**.map() executes the same code on every element in an array and returns a new array with the updated elements. */