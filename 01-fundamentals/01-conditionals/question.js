// Write a function that takes in an array and swaps the positions of the first two elements in an array using destructuring, with default parameters to handle cases where input elements might be missing. The function should return a new array with the swapped elements.
// [11,23,1,2,3]//[23,11,1,2,3]
// [2,3]//[3,2]
// ["a","b","c","d"]//["b","a","c","d"]
// let a=["a","b","c","d"]
function swap(a=["a","b","c","d"]){
    let [c,b,...d]=a
    return (a)
}
console.log(swap(null))