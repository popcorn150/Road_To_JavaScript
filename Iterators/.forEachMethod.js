/* The .forEach() Method */
const fruits = ['mango', 'papaya', 'pineapple', 'apple'];

// Iterate over fruits below
fruits.forEach(eachFruits => {
    console.log(`I want to eat a ${eachFruits}`)
})

console.log('\n')

fruits.forEach(function(eachFruits){
    console.log(`I want to eat a ${eachFruits}`)
})