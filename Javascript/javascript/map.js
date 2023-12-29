// // forEach method =---------------------------------------------------

var arr2 = ["Sanjay", "Aman", "Karan"];
//  arr.forEach(my);

//  function my (value){
//      document.write(value , " ");
//  }

// arr2.forEach((element) => {
//   document.write(element, " ");
// });

// // ----------------------------------------------------------------

// arr.forEach(function ( index , value){
//     document.write(value , ": = " , index , " <br>");
// });

// let arr = [10,20,30,40,50];

// arr.forEach((element)=>{
// document.write(element , " ");
// });

// Array Map()-------------------------------------------------------------------------

// let arr = [10, 20 ,30 , 40 , 50];
// document.write(arr.map(test));

// function test(arr) {
//     return arr * 10;
// }

// let arr = [23,45,67,89];
// arr.map((value)=>{
// console.log(value);
// });

// Array map-----------------------------------------------------------------------------

// let arr = [23,45,67,89];
// let a = arr.map((index , value , Array)=>{
//     console.log(index , value , Array);
//     return index + value;
// });
// console.log(a);

// Array filter -------------------------------------------------------------------------

// let arr = [12, 34, 56, 78, 98, 5, 56, 55, 23];
// let newnums = arr.filter((element)=>{
// return (element > 12);
// });
// console.log(newnums);


// with foreach loop---------------

// const newnum=[];
// arr.forEach((num)=>{
// if(num > 34){
//   newnum.push(num)
// }
// })

// document.write(newnum)


// Array Reduce -------------------------------------------------------------------------

let arr = [12, 34, 56, 78, 98, 5, 56, 55, 23];
let arr1 = arr.reduce((a,b)=>{
    return a + b;
})
console.log(arr1)
