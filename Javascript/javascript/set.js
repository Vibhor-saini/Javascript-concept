// let arr = new Set([12,13,45,12,12,12]);
// console.log(arr);

// data = new Set();
// data.add("hello");
// data.add("Hi");
// data.add("vibhor");
// data.delete("Hi");

// data.add({name: "Himanshu"});
// console.log(data);


// Array to set-----------------------------------------------
// let arr =[12,13,45,12,12,12];
// arr = new Set([12,13,45,12,12,12]);
// console.log(arr);


let arr1 = [20, 50, 39, 6, 60, 50, 50, 50, 50];
let uniqueArr = new Set(arr1);
uniqueArr = [...uniqueArr];

uniqueArr.sort((a, b) => a - b);
console.log("Sorted Array:", uniqueArr);
const thirdLargest = uniqueArr[uniqueArr.length - 3];
console.log("Third Largest Element:", thirdLargest);







// we can not find element from set via index but in array we can.
// set is collection of unique value
// array is just collection of values.
// in js we can store hetrogeneous data(int , string etc.)
// In map there is key and value pair but in set there is not key and vaule pair.
// we can use set with array.
// 