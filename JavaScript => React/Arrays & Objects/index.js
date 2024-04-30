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