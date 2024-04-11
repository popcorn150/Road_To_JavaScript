/* The .forEach() Method */
const fruits = ['mango', 'papaya', 'pineapple', 'apple'];

// Iterate over fruits below
fruits.forEach(eachFruits => {
    console.log(`I want to eat a ${eachFruits}`)
})

console.log('\n')

fruits.forEach(function (eachFruits) {
    console.log(`I want to eat a ${eachFruits}`)
})

/**.forEach() is used to execute the same code on every element in an array but does not change the array and returns undefined. */