// Today's forcast in kelvin
const kelvin = 0;

// Forcast in celsius
const celsius = kelvin - 273;

// Forcast in Newton
let newton = celsius * (33 / 100);

// Rounding down the newton temperature
newton = Math.floor(newton);

console.log(`The temperature is ${newton} degrees Newton.`);
