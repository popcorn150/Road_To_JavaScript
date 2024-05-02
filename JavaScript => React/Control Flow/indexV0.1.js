/**Control Flow */

//checkEvenOdd Function
function checkEvenOdd(number){
    return number % 2 === 0 ? 'Even' : 'Odd'
}
console.log(checkEvenOdd(4))

//checkVowel Function
function checkVowel(character){
    const vowels = ['a', 'e', 'i', 'o', 'u']
    return vowels.includes(character.toLowerCase()) ? 'Vowel' : 'Consonant'
}
console.log(checkVowel('Z'))

//checkLeapYear Function
function checkLeapYear(year){
    if((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)){
        return 'Leap year'
    }else{
        return 'Not a leap year'
    }
}
console.log(checkLeapYear(1800))

//checkPrime Function
function checkPrime(number){
    if(number <= 1) return 'Not a prime'
    for(let i = 2; i <= Math.sqrt(number); i++){
        if(number % i === 0){
            return 'Not a prime'
        }
    }
    return 'Prime'
}
console.log(checkPrime(1))

//findMax Function
function findMax(num1, num2, num3){
    return Math.max(num1, num2, num3)
}
console.log(findMax(5, 9, 4))

//checkPalindrome Function
function checkPalindrome(str){
    const reversedStr = str.split('').reverse().join('')
    return str === reversedStr ? 'Palindrome' : 'Not a Palindrome'
}
console.log(checkPalindrome('Palindrome'))