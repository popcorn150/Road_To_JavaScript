/** Nested Objects */
let spaceship = {
    passengers: null,
    telescope: {
        yearBuilt: 2018,
        model: "91031-XLT",
        focalLength: 2032
    },
    crew: {
        captain: {
            name: 'Sandra',
            degree: 'Computer Engineering',
            encourageTeam() { console.log('We got this!') },
            'favorite foods': ['cookies', 'cakes', 'candy', 'spinach']
        }
    },
    engine: {
        model: "Nimbus2000"
    },
    nanoelectronics: {
        computer: {
            terabytes: 100,
            monitors: "HD"
        },
        'back-up': {
            battery: "Lithium",
            terabytes: 50
        }
    }
};

let capFave = spaceship.crew.captain['favorite foods'][0]
spaceship.passengers = [{ name: 'Sandra Dog' }, { name: 'Captain Skeleton' }, { name: 'Boggie Man' }]
let firstPassenger = spaceship.passengers[2]

console.log(capFave)
console.log(firstPassenger)