let raceNumber = Math.floor(Math.random() * 1000);
let runnerRegisteredEarly = false
let runnerAge = 22

if (runnerAge > 18 && runnerRegisteredEarly) {
    raceNumber += 1000
}

if (runnerAge > 18 && runnerRegisteredEarly) {
    console.log(`${raceNumber} will race at 9:30 am.`)
} else if (runnerAge > 18 && !runnerRegisteredEarly) {
    console.log(`${raceNumber} will race at 11:00 am.`)
} else if (runnerAge < 18) {
    console.log(`${runnerAge} will race at 12:30 pm.`)
} else {
    console('See the registration desk.')
}