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





///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                              6-darsni masalalari                                                              //
//                                                                                                               //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//n1

// Array.prototype.degree = function() {
//     let newArr=[]
//     for (let i = 0; i < this.length; i++) {
//         newArr.push(this[i]*this[i])        
//     }
//     return newArr
// }
// let arr=[1,2,3,4,5]
// console.log(arr.degree());

//n2

// String.prototype.reverse = function(){
//     let nstr=""
//     for (let i = this.length-1; i >= 0; i--) {
//         nstr+=this[i]
//     }
//     return nstr
// }
// let str="maqsuda"
// console.log(str.reverse());

//n3

// function Person(name,age,color) {
//     this.name=name
//     this.age=age
//     this.color=color
// }

// Person.prototype.getColor=function() {
//     return this.color
// }

// let newObj=new Person("Rose",21,"violet")

// console.log(newObj.getColor());

//n4

// function Cars(brand,model,tezlik) {
//     this.brand=brand
//     this.model=model
//     this.tezlik=tezlik
// }
// Cars.prototype.getBrand=function() {
//    if (this.tezlik >= 250) {
//         return this.brand + " " + this.model + " juda tezkor mashina!"
//     } else {
//         return this.brand + " " + this.model + " xavfsiz tezlikda."
//     }
// }
// let bmw = new Cars("BMW", "M5", 300)
// let colabt = new Cars("Chevrolet", "Cobalt", 140)

// console.log(bmw.getBrand())
// console.log(colabt.getBrand())

//n5

// Array.prototype.myConcat = function(arr2) {
//     let newArr = []
//     for (let i = 0; i < this.length; i++) {
//         newArr.push(this[i])
//     }
//     if (arr2) {
//         for (let j = 0; j < arr2.length; j++) {
//             newArr.push(arr2[j])
//         }
//     }
//     return newArr
// }
// let arr = ["r", "o", "s"]
// let arr1 = ["i", "e"]
// console.log(arr.myConcat(arr1));

//n6

// Object.prototype.Keys=function(){
//     return Object.keys(this)
// }
// let men={
//     name: "rosie",
//     age : 21,
//     student : true
// }
// console.log(men.Keys());

//n7

// function Person(name,age,haircolor){
//     this.name=name
//     this.age=age
//     this.haircolor=haircolor
// }
// Person.prototype.eyecolor = "brown"

// let me= new Person("rosie",21,"red")
// delete me.age
// console.log(me.eyecolor);
// console.log(me);


//n8

// String.prototype.Substring=function(a){
//     if (this.length <= a){
//         return this
//     }else{
//         return this.substring(0,a)+"..."
//     }
// }
// let str="BMW (Bayerische Motoren Werke)"
// console.log(str.Substring(3));

//n9

// Array.prototype.Sum=function(){
//     let sum=0
//     for (let i = 0; i < this.length; i++) {
//         sum+=this[i]
//     }
//     return sum
// }
// let arr=[1,2,3,4,5,6,7,8,9]
// console.log(arr.Sum());

//n10

// function Laptop(brand,ram,cpu){
//     this.brand=brand
//     this.ram=ram
//     this.cpu=cpu
// }

// Laptop.prototype.getCpu=function() {
//  let cpuName = this.cpu.toLowerCase();
//     if (cpuName.includes("i7") || cpuName.includes("i9") || cpuName.includes("ryzen 7") || cpuName.includes("ryzen 9")) {
//         return this.brand + " noutbuki " + this.cpu + " bilan juda tezkor va kuchli mashina!"
//     } else {
//         return this.brand + " noutbuki " + this.cpu + " bilan kundalik ishlar uchun xavfsiz tezlikda."
//     }
// }
// let acer = new Laptop("Acer", "8GB", "Core i3")
// console.log(acer.getCpu());
