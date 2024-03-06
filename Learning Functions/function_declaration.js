function getReminder() {
    console.log('Water the plants.')
}

function greetInSpanish() {
    console.log('Buenas tardes.')
}

function sayThanks(customerName) {
    console.log(`Thank you for your purchase ${customerName}! We appreciate your business.`)
}
sayThanks('David')
sayThanks('Mary')
sayThanks('John')


// Default Parameters
function makeShoppingList(item1 = 'milk', item2 = 'bread', item3 = 'eggs') {
    console.log(`Remember to buy ${item1}`);
    console.log(`Remember to buy ${item2}`);
    console.log(`Remember to buy ${item3}`);
}
makeShoppingList()

// Return
function monitorCount(rows, columns){
    return rows * columns
}
const numOfMonitors = monitorCount(5, 4)
console.log(numOfMonitors)

// Helper functions
function costOfMonitors(rows, columns){
    return monitorCount(rows, columns) * 200
}
const totalCost = costOfMonitors(5, 4)
console.log(totalCost)

// Function expressions
const plantNeedsWater = day => day === 'Wednesday' ? true:false // concise body arrow functions
console.log(plantNeedsWater('Tuesday'))