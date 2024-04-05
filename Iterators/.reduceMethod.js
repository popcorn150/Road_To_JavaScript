/* The .reduce() Method */
const newNumbers = [1, 3, 5, 7];

const newSum = newNumbers.reduce((accumulator, currentValue) => {
    console.log('The value of accumulator: ', accumulator);
    console.log('The value of currentValue: ', currentValue);
    return accumulator + currentValue
}, 10)

console.log(newSum)

/* Revision */
const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

// Something is missing in the method call below

console.log(words.some(word => {
    return word.length < 6;
}));

// Use filter to create a new array
const interestingWords = words.filter((word) => { return word.length > 5 });


// Make sure to uncomment the code below and fix the incorrect code before running it

console.log(interestingWords.every((word) => { return word.length > 5 }));


/**.reduce() iterates through an array and takes the values of the elements and returns a single value. */