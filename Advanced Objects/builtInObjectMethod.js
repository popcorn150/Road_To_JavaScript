/** Built-in Object Methods */
const robot = {
    model: 'SAL-1000',
    mobile: true,
    sentient: false,
    armor: 'Steel-plated',
    energyLevel: 75
};

/** Object.keys collects the keys in an object and store them in an array */
const robotKeys = Object.keys(robot);

console.log(robotKeys);

/** Object.entries collects both the keys and values in an object and store them in an array */
const robotEntries = Object.entries(robot);

console.log(robotEntries);

/** Object.assign assigns a new object to the previous object */
const newRobot = Object.assign({
    laserBlaster: true,
    voiceRecognition: true
}, robot);

console.log(newRobot);