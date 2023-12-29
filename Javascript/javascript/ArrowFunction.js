// Simple arrow functon------------------------------------------------------

// let arr = () => console.log("Hello");
// arr();


//arrow functon with single argument-----------------------------------------

// let welcome = name => name * name;  //implicide
// console.log(welcome(10));


//arrow functon with multiple argument----------------------------------------
// let message = (name , age) => {"My name is" + name + "and age is age " + age*age};
// console.log(message("Vibhor" , 20));

// console.log(typeof message);


// let hello = function(){
//     console.log("Hello");
// }

// hello();


// This ----------------------------------------------------------------------

// let a = {
//     Name: "Vbhor",
//     class: 7,
//     school: "NJIC",

//     welcomeMessage:function(){
//     document.write(`${this.Name} , welcome in my coding`);
//     console.log(this);
// }
// }

// a.welcomeMessage();
// a.Name="raju";
// a.welcomeMessage();
// console.log(this);

// let sum =()=> {
//     let x = "vibhor"
//     console.log(this.x);
// }
// sum();


let sum = (num1 , num2)=>{
return num1 + num2;
}
console.log(3,4);