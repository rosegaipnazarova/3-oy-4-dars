//1

//2

// function rotatArr(arr, n) {
//    let arr1=arr.splice(0,n)
//     arr.push(...arr1)
//     return arr
//     }
// console.log(rotateArr([1, 2, 3, 4, 5], 2)); 

//3

// function twoSum(arr, oraliq) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] + arr[j] === oraliq) {
//                 return [i, j]
//             }
//         }
//     }
// }
// console.log(twoSum([2, 7, 11, 15], 18)); 

//4

// function check(arr,n) {
//     let sum=0
//     for (let i = 0; i < arr.length; i++) {
//     sum+=arr[i]
//     }
//         if (sum===n) {
//             return true  
//         }   
//         else{
//             return false
//         }     
//     }
// console.log(check([1,2,4],6));

//5

// function findDifference(arr1, arr2) {
//     let narr = []
//     for (let i = 0; i < arr1.length; i++) {
//         let elem = arr1[i]
//         if (arr2.includes(elem) === false) {
//             narr.push(elem)
//         }
//     }
//     for (let i = 0; i < arr2.length; i++) {
//         let elem = arr2[i]
//         if (arr1.includes(elem) === false) {
//             narr.push(elem)
//         }
//     }
//     return narr
// }
// console.log(findDifference([1,2,3],[2,3,5])); 

//6

// function mostFrequentElement(arr) {
//     let elem=[]
//     let maxCount = 0
//     for (let i = 0; i < arr.length; i++) {
//         let count = 0
//         for (let j = 0; j < arr.length; j++) {
//             if (arr[i] === arr[j]) {
//                 count++
//             }
//         }
//         if (count > maxCount) {
//             maxCount = count;
//          elem = arr[i]
//         }
//     }
//     return elem
// }
// console.log(mostFrequentElement([1, 3, 1, 3, 2, 1])); 

//7

// function incrementDigits(str) {
//     let result = ""
//     for (let char of str) {
//         if (char >= '0' && char <= '9') {
//             let num = Number(char) + 1
//                 result += num
//         } else {
//             result += char
//         }
//     }
//     return result
// }
// console.log(incrementDigits("abc123"));

//8


//9


//10

// function getsum(arr) {
//   let sum = 0;
//   let newArray=arr.flat(Infinity)
//   for (let i = 0; i < newArray.length; i++) {
//     sum+=newArray[i]
//     }
//  return sum
// }
// console.log(getsum([1,3,6,4,[4,[5]],5])); 