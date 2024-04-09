/** Pass By Reference */
let spaceship = {
    'Fuel Type': 'Turbo Fuel',
    homePlanet: 'Earth'
};

let greenEnergy = (obj) => {
    obj["Fuel Type"] = "avocado oil";
};

let remotelyDisable = (obj) => {
    obj.disabled = true
}

let amIstupid = (obj) => {
    obj.stupid = false
}

greenEnergy(spaceship)
remotelyDisable(spaceship)
amIstupid(spaceship)

console.log(spaceship)