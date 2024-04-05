/* The .filter() Method */
const randomNumbers = [375, 200, 3.14, 7, 13, 852];

// Call .filter() on randomNumbers below
const smallNumbers = randomNumbers.filter(randomNumber => {
    return randomNumber < 250
})
console.log(smallNumbers)

const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];

// Call .filter() on favoriteWords below
const longFavoriteWords = favoriteWords.filter(favoriteWord => {
    return favoriteWord.length > 7
})
console.log(longFavoriteWords)

/**.filter() checks every element in an array to see if it meets certain criteria and returns a new array with the elements that return truthy for the criteria. */