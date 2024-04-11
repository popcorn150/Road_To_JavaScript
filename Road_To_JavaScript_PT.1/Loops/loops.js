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

/* While Loop */
const cards = ['diamond', 'spade', 'heart', 'club'];
let currentCard
while (currentCard != 'spade') {
    currentCard = cards[Math.floor(Math.random() * 4)];
    console.log(currentCard)
}

/* Do While Loop */
const cupsOfSugarNeeded = 2
let cupsAdded = 0

do {
    cupsAdded++
} while (cupsAdded < cupsOfSugarNeeded);
console.log(cupsAdded)

/* The break Keyword */
const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];
for (let i = 0; i < rapperArray.length; i++) {
    if(rapperArray[i] === 'Notorious B.I.G.'){
        console.log(rapperArray[i])
        break
    }
    console.log(rapperArray[i])
}
console.log('And if you don\'t know, now you know.');