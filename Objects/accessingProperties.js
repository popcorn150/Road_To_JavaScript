/** Accessing Properties */

/** Dot Notation */
let spaceship = {
    homePlanet: 'Earth',
    color: 'silver',
    'Fuel Type': 'Turbo Fuel',
    numCrew: 5,
    flightPath: ['Venus', 'Mars', 'Saturn']
};

let crewCount = spaceship.numCrew
let planetArray = spaceship.flightPath

/** Bracket Notation */
let spaceship2 = {
    'Fuel Type': 'Turbo Fuel',
    'Active Mission': true,
    homePlanet: 'Earth',
    numCrew: 5
};

let propName = 'Active Mission';
let isActive = spaceship2['Active Mission']
console.log(spaceship2['Active Mission'])