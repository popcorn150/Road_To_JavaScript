/**Arrays */

//reverseArray Function
function reverseArray(randomStuff) {
    let newArray = []
    for (let i = 0; i < randomStuff.length; i++) {
        newArray.push(randomStuff[i].split('').reverse().join(''))
    }
    console.log(newArray)
}
let randomStuffs = ['Apple', 'Banana']
reverseArray(randomStuffs)

//findLargest Function
function findLargest(...arrs) {
    return arrs.reduce((acc, curr) => {
        if (acc > curr) {
            return acc
        } else {
            return curr
        }
    })
}
console.log(findLargest(5, 7, 8, 2,))

//removeDuplicates Function
function removeDuplicates(duplicateArray) {
    let nonDuplicateArray = []
    for (let i = 0; i < duplicateArray.length; i++) {
        if (i == duplicateArray[i]) {
            return i
        }
        return nonDuplicateArray.push(duplicateArray[i])
    }
}
let duplicateArray = ['Man', 'Boy', 'Girl', 'Woman', 'apple', 'apple', 'Man', 'Man', 'Boy']
console.log(removeDuplicates(duplicateArray))