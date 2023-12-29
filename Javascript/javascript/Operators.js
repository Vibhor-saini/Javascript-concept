// wap to add , sub , divide and find rem obetween two numbers



// let a,b;

// function add(a,b){
// return a+b;
// }

// function Mul(a,b){
//     return a*b;
//     }

    
//     function Sub(a,b){
//         return a-b;
//         }

        
//         function Mod(a,b){
//             return a%b;
//             }
            

// let x = add( 10 , 20 );
// let y = Mul( 10 , 20 );
// let z = Sub( 10 , 20 );
// let c = Mod( 10 , 20 );
// console.log(x);
// console.log(y);
// console.log(z);
// console.log(c);


// let a = 10;
// let b = 20;

// a *= b;

// console.log(a); 

// let a = 20;

// if(a <= 20){
//     alert("Hello Vibhor");
// }else{
//     alert("Hello Divyanshi");
// }

// alert("hyy");
// let x = 19;

// if(x <= 20){
//   alert("Good morning");
// }else{
//   alert("Good evening");
// }


// Rest Operator-------------------------------------------------------------

// function sum(name,course , ...args){
// let sum = 0;
// for(let i in args){
//   sum+=args[i];
// }
// document.write(sum);
// document.write("<br>");
// document.write(name , course);
// }
// sum("vibhor saini" ," btech" , 2,56);



// Spread operator-----------------------------------------------------------

function sum(name, ...args){
  console.log(arguments);

  let sum = 0;
  for(let i in args){
    sum +=args[i];
  }
  document.write(name , sum);
}

let arr = [10,20,30,40,50]
let arr2 = [60,70];
let arr3 = [1 , ...arr , ...arr2 , 77];
sum(arr3);
// sum([...arr] , "vibhor");
 
// for in loop---------------------------------------------------------------

// arr = [10 , 20 , 30 , 40 ,50];
//  for( let i in arr){
//    console.log(i , arr[i]);
//  }

// for (let i of arr){
//   console.log(i);
// }


// for of loop-------------------------------------------------------------------
// let str = [10 , 20 , 30 , 40 ,50];
//    let length = 0;
//    for( let val of str){
//        document.write("val = " , val + "<br>");
//  length++;
  //  }
  //  document.write("String size is  = " , length +  "<br>");
