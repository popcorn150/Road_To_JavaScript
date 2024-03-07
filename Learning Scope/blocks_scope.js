const city = 'New York City'

function logCitySkyline(){
    let skyscraper = 'Empire State Building'
    return 'The stars over the ' + skyscraper + ' in ' + city;
}
console.log(logCitySkyline())

// Global scope
const satellite = 'The Moon'
const galaxy = 'The Milky Way'
const stars = 'North Star'

function callMyNightSky(){
    return 'Night Sky: ' + satellite + ', ' + stars + ', and ' + galaxy;
}
console.log(callMyNightSky())

// Block scope
function logVisibleLightWaves(){
    const lightWaves = 'Moonlight'
    console.log(lightWaves)
}
logVisibleLightWaves()
console.log(lightWaves)