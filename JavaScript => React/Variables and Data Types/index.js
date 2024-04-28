/**Person Function */
function person(name, age) {
    let introduction = `My name is ${name} and I am ${age} years old.`
    console.log(introduction)
}
person('David', 20)

/**isEven Function */
function isEven(num) {
    if (num % 2 === 0) {
        console.log(`${num} is an Even number`)
    } else {
        console.log(`${num} is not an Even number`)
    }
}
isEven(83)

/**printFruits Function */
function printFruits(fruits) {
    for (let i = 0; i < fruits.length; i++) {
        console.log(fruits[i])
    }
}
printFruits(['Apple', 'Banana', 'Orange'])

/**reverseString Function 1*/
function reverseString(str) {
    console.log(str.split('').reverse().join(''))
}
reverseString('David')

/**reverseString Function 2*/
function reverseString(str) {
    let newStr = ''
    for (let i = str.length - 1; i >= 0; i--) {
        newStr += str[i];
    }
    console.log(newStr)
}
reverseString('Hello')

/**getUserInfo Function*/
function getUserInfo(user) {
    console.log(
        `Name: ${user.name}\n Age; ${user.age}\n Email: ${user.email}`
    )
}
getUserInfo({
    name: 'David',
    age: 19,
    email: 'hungrymanchannel@gmail.com'
})

/**getLargestNumber Function*/
function getLargestNumber(arr) {
    const max = arr.reduce((a, b) => Math.max(a, b), -Infinity)
    console.log(`${max} is the highest number in the array.`)
}
let array = [100, 80, 150, 330]
getLargestNumber(array)

/**capitalizeWords Function*/
function capitalizeWords(capsChar) {
    const emptyArray = []
    for (let i = 0; i < capsChar.length; i++) {
        emptyArray.push(capsChar[i].toUpperCase())
        // emptyArray.push(capsChar.charAt(0).toUpperCase() + capsChar.slice(1))
    }
    console.log(emptyArray)
}
let strArray = ['apple', 'boy', 'airplane', 'luggages', 'guns']
capitalizeWords(strArray)

/**convertToFarhenheit Function*/
function convertToFarhenheit(temprature) {
    let C = temprature
    let F
    F = (C * 9 / 5) + 32
    console.log(`The tempreture is ${F}\º Farhenheit`)
}
let temprature = 50
convertToFarhenheit(temprature)

/**calculateAverageGrade Function*/
function calculateAverageGrade(grades) {
    let count = 0
    for (const element of grades) {
        count++
    }
    const sumOfAll = grades.reduce((accumulator, currentValue) => accumulator + currentValue)
    let averageGrade = sumOfAll / count
    console.log(`Student\'s average grade is ${averageGrade}`)
}
let studentGrades = [85, 92, 78, 95, 88]
calculateAverageGrade(studentGrades)

/**countVowels Function*/
function countVowels(numOfVowels) {
    let count = 0
    for (const element of numOfVowels) {
        count++
    }
    console.log(`The total number of vowels in the array is ${count}`)
}
let vowels = ['a', 'e', 'i', 'o', 'u']
countVowels(vowels)

/**countVowelsNConsonant in an array Function*/
// function countVowelsNConsonant(arr) {
//     let vowelCount = 0
//     let consonantCount = 0
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] == ['a', 'e', 'i', 'o', 'u']) {
//             vowelCount++
//         } else if (arr[i] != ['a', 'e', 'i', 'o', 'u']) {
//             consonantCount++
//         } else {
//             console.log('There are no such alphabeth in the array provided!')
//         }
//         console.log(vowelCount)
//     }
// }
// let alphabethArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
// countVowelsNConsonant(alphabethArray)

/**getAverageScore Function */
const studentScores = {
    'David': [18, 20, 50, 70, 100],
    'Rose': [32, 28, 49, 10, 48],
    'Emma': [10, 38, 30, 29, 34],
    'Sp': [39, 38, 32, 59, 80]
}

function getAverageScore(scores) {
    const averages = {}
    for (const student in scores) {
        const total = scores[student].reduce((acc, curr) => acc + curr, 0);
        averages[student] = total / scores[student].length;
    }
    console.log(averages)
}
getAverageScore()