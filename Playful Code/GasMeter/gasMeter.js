let gas_rate = Math.floor(Math.random() * 100)
// console.log(gas_rate)


// switch (gas_rate) {
//     case gas_rate >= 51:
//         console.log(`Your gas is at ${gas_rate}% which means it doesn't need filling at the moment.`)
//         break;
//     case gas_rate <= 50:
//         console.log(`Your gas is at ${gas_rate}% which means it does need filling as soon as possible!`)
//         break;
//     default:
//         console.log('Error reading Gas!')
//         break;
// }

if (gas_rate >= 51) {
    console.log(`Your gas is at ${gas_rate}% which means it doesn't need filling at the moment.`)
} else if (gas_rate <= 50) {
    console.log(`Your gas is at ${gas_rate}% which means it does need filling as soon as possible!`)
} else {
    console.log('Error reading Gas!')
}
