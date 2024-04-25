/**Person Function */
function person(name, age){
    let introduction = `My name is ${name} and I am ${age} years old.`
    console.log(introduction)
}
person('David', 20)

/**isEven Function */
function isEven(num){
    if (num % 2 === 0) {
        console.log(`${num} is an Even number`)
    }else{
        console.log(`${num} is not an Even number`)
    }
}
isEven(83)

/**printFruits Function */
function printFruits(fruits){
    for (let i = 0; i < fruits.length; i++) {
        console.log(fruits[i])
    }
}
printFruits(['Apple', 'Banana', 'Orange'])

/**reverseString Function 1*/
function reverseString(str){
    console.log(str.split('').reverse().join(''))
}
reverseString('David')

/**reverseString Function 2*/
function reverseString(str){
    let newStr = ''
    for (let i = str.length - 1; i >= 0; i--) {
        newStr += str[i];
    }
    console.log(newStr)
}
reverseString('Hello')
