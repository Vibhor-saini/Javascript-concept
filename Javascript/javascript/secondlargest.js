// let arr = [20, 50, 39, 60, 60, 39, 50, 39, 50];

// const findSecondLargest = (arr) => {
//     let max = arr[0];
//     let secondMax = arr[0];

//     arr.forEach(value => {
//         if (value > max) {
//             secondMax = max;
//             max = value;
//         } else if (value > secondMax && value < max) {
//             secondMax = value;
//         }
//     });

//     return { secondMax, count: arr.filter(value => value == secondMax).length };
// };

// const { secondMax, count } = findSecondLargest(arr);
// console.log(`Second Largest Element: ${secondMax}, Occurrences: ${count}`);


// let arr1 = [20, 50, 39, 6, 60, 50, 50, 50, 50];

// arr1.sort((a,b)=>a-b);
// console.log(arr1);
// console.log(arr1[arr1.length-3]);

let arr1 = [90, 50, 39, 6, 60, 50, 50, 50, 50];
// let uniqueArr = new Set[(arr1)];
// uniqueArr = [...uniqueArr];

let uniqueArr =  arr1.sort((a,b)=> a- b);
// let uniqueArr = arr1.sort(
//     function(a, b){
//     return a-b
// });
document.write("Sorted Array:", uniqueArr);
// const thirdLargest = uniqueArr[uniqueArr.length - 3];
// console.log("Third Largest Element:", thirdLargest);
