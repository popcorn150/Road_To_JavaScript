const city = 'New York City'

function logCitySkyline() {
    let skyscraper = 'Empire State Building'
    return 'The stars over the ' + skyscraper + ' in ' + city;
}
console.log(logCitySkyline())

// Global scope
const satellite = 'The Moon'
const galaxy = 'The Milky Way'
const stars = 'North Star'

function callMyNightSky() {
    let stars = 'Sirius' // Scope pollution (overrides the previous varaiable's value)
    return 'Night Sky: ' + satellite + ', ' + stars + ', and ' + galaxy;
}
console.log(callMyNightSky())
console.log(stars) // Calling the new variable's value

// Block scope
function logVisibleLightWaves() {
    const lightWaves = 'Moonlight'
    console.log(lightWaves)
}
logVisibleLightWaves()

// Practice good scoping
const logVisibleLightWavesII = () => {
    let lightWaves = 'Moonlight';
    let region = 'The Arctic';
    if (region === 'The Arctic') {
        let lightWaves = 'Northern Lights'
        console.log(lightWaves)
    }
    console.log(lightWaves);
};

logVisibleLightWavesII();