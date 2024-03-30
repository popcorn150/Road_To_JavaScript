/* Ordinary Loop */
let vacationSpotsOne = ['Iceland', 'Montreal', 'The Sea']
console.log(vacationSpotsOne[0])
console.log(vacationSpotsOne[1])
console.log(vacationSpotsOne[2])

for (let counter = 5; counter < 11; counter++) {
    console.log(counter)
}

/* Looping through an Array */
const vacationSpots = ['Bali', 'Paris', 'Tulum'];
for (let country = 0; country < vacationSpots.length; country++) {
    console.log(`I would love to visit ${vacationSpots[country]}`)
}

/* Looping in Reverse */
for (let secondCounter = 3; secondCounter >= 0; secondCounter--) {
    console.log(secondCounter)
}

/* Nested Loop */
const bobsFollowers = ['Mark', 'James', 'David', 'John']
const tinasFollowers = ['John', 'Roseline', 'David']
const mutualFollowers = []

for (let b = 0; b < bobsFollowers.length; b++) {
    for (let t = 0; t < tinasFollowers.length; t++) {
        if (bobsFollowers[b] === tinasFollowers[t]) {
            mutualFollowers.push(bobsFollowers[b])
            console.log(mutualFollowers)
        }
    }
}