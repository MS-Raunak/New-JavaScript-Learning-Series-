/**
 * Array is the collection of data which is inserted linearly by following index number
 * In Js, array can store both homogeneous or hetrogeneous value r we can say any type of value
 * In js, we have single dimensional array and multi-demensional array
 */

//array Declaration
let arr = [10,20,30, "Fourty", "Fifty"];
//console.log(arr);// [ 10, 20, 30, 'Fourty', 'Fifty' ]

//Iterating array using for..of loop
// for(let ele of arr) {
//     console.log(ele);
// }

//Iterating array using simple for loop
// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     console.log(element);
// }

//inserting element without using fn
arr[0] = 200;
console.log(arr); //10 will be replaced by 20
