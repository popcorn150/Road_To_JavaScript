/**Arrays */

//reverseArray Function
function reverseArray(arr) {
    let reversedArray = []
    return arr.slice().reverse()

}
let array = ['Apple', 'Banana', 3, 7, 2]
console.log(reverseArray(array))

//findLargest Function
function findLargest(arr) {
    return Math.max(...arr)
}
const numbers = [5, 7, 8, 2,]
console.log(findLargest(numbers))

//removeDuplicates Function
function removeDuplicates(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index)
}
let duplicateArray = ['Man', 'Boy', 'Girl', 'Woman', 'apple', 'apple', 'Man', 'Man', 'Boy']
console.log(removeDuplicates(duplicateArray))

/**Objects */

//Person Object
let person = {
    name: 'Mike',
    age: 28,
    gender: 'Male'
}
function printPersonInfo(personInfo) {
    return `Name: ${personInfo.name}, Age: ${personInfo.age}, Gender: ${personInfo.gender}`
}
console.log(printPersonInfo(person))

//Count properties Object
function countProperties(obj) {
    return Object.keys(obj).length
}
const personObj = {
    firstName: 'Daniel',
    age: 40,
    gender: 'Male',
    color: 'Green',
    favoriteFood: 'Mashemello Brownine Cake'
}
console.log(countProperties(personObj))

//Merge Object
function mergeObjects(obj1, obj2){
    return {...obj1, ...obj2}
}
const obj1 = {a:1, b:2, c:3, d:4}
const obj2 = {a:5, f:6, g:7, c:10}

console.log(mergeObjects(obj1, obj2))