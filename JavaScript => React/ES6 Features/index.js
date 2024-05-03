/**mergeArrays Function */
function mergeArrays(arr1, arr2){
    const combine = [...arr1, ...arr2]
    return combine

}
const arr1 = [1, 2, 3];
const arr2 = [3, 4, 2];

console.log(mergeArrays(arr1, arr2))