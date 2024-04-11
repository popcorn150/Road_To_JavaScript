/* The  .findIndex() Method */
const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

const foundAnimal = animals.findIndex(animal => {
    return animal === 'elephant'
})

const startsWithS = animals.findIndex(animal => {
    return animal[0] === 's'
})
// console.log(`contains ${startsWithS}`)

/**.findIndex() returns the index of the first element of an array that satisfies a condition in the callback function. It returns -1 if none of the elements in the array satisfies the condition. */