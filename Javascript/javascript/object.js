// Object.assign----------------------------------

// const data1 =  {
//   Name: "Vibhor",
//   Age: 21,
//   Address: "Saharanpur",
  
// }

// const data2= {
//     phone: 971983100
// }

// const data3 = Object.assign(data1 , data2, {Grade : "A"} , {Phone: 574584589 });
// console.log(data3);
  

// function printUserName(user){
  // document.write(`Hello ${user.fname} ${user.lname}`);
// }
// printUserName({fname : "Vibhor" , lname : "Saini"});


function printUserName(user){
  const temp = {fname: "Gaurav"};

  user = Object.assign(temp , user);
  document.write(`Hello ${user.fname} ${user.lname}`);
}
printUserName({ lname : "Saini"});



// let arr  = [12,13,14,15,16];
// document.write(arr.map(test));

// function test(multiply){
//   return multiply*10;
// }

// arr.forEach(test);
// function test(multiply){
//   document.write("value is : " , multiply*10 , "<br>");
// }





