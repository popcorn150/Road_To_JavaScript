// /* Functions as Data */
// const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
//     for (let i = 1; i <= 1000000; i++) {
//         if ((2 + 2) != 4) {
//             console.log('Something has gone very wrong :( ');
//         }
//     }
// };
// const isTwoPlusTwo = checkThatTwoPlusTwoEqualsFourAMillionTimes
// isTwoPlusTwo()
// console.log(isTwoPlusTwo.name)

// /* Functions as Parameters */
// const addTwo = num => {
//     return num + 2;
// }

// const checkConsistentOutput = (func, val) => {
//     const checkA = val + 2
//     const checkB = func(val)
//     if (checkA === checkB) {
//         return func(val)
//     }
//     console.log('inconsistent results');
// }
// console.log(checkConsistentOutput(addTwo, 15))

const hungry = () => {
    return 'I want to eat!!'
}

const notHungry = () => {
    return 'I am not hungry!!'
}

for (let i = 0; i < 10; i++) {
    if (i < 10) {
        console.log(hungry())
    } else {
        console.log(notHungry())
    }
}