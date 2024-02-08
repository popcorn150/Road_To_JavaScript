// Today's forcast in kelvin
const kelvin = 0

// Forcast in celsius
const celsius = kelvin - 273

// Forcast in fahrenheit
let fahrenheit = celsius * (9/5) + 32

// Rounding down the fahrenheit temperature
fahrenheit = Math.floor(fahrenheit)

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)