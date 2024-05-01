/**Control Flow */

//checkEvenOdd Function
function checkEvenOdd(num) {
    if (num % 2 == 0) {
        console.log('Even')
    } else {
        console.log('Odd')
    }
}
checkEvenOdd(10)

//checkVowel Function
const vowels = ['a', 'e', 'i', 'o', 'u']
function checkVowel(letter){
    if(vowels.includes(letter)){
        return 'Vowel'
    }else{
        return 'Consonant'
    }
}
console.log(checkVowel('o'))

//checkLeapYear Function
function checkLeapYear(year){
    if(year % 4 == 0){
        return 'Leap year'
    }else if(year <= 2000){
        return 'Leap year'
    }else{
        return 'Not a leap year'
    }
}
console.log(checkLeapYear(2024))

//checkPrime Function
function checkPrime(num){
    if(num % 1 == num || num % num == 1 ){
        return 'Prime'
    }else{
        return 'Not prime'
    }
}
console.log(checkPrime(2))

//findMax Function
function findMax(arr){
    const max = arr.reduce((a, b) => Math.max(a, b), -Infinity)
    return max
}
let numArray = [5, 7, 10]
console.log(findMax(numArray))

//checkPalindrome Function
function checkPalindrome(strg){
    if(strg === 'palindrome' || strg.split('').reverse().join('')){
        return strg
    }else{
        return 'Not a palindrome'
    }
}
console.log(checkPalindrome('Palindrome'))
