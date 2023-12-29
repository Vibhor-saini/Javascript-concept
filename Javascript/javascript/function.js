// function product(a , b){
// return a * b;
// }

// let x = product(6 , 7);
// console.log(x);


// //   WAP to convert fahrenheit to celsius--------------------------------------------

// function toCelsius(fahrenheit){
//     return (5/9) * (fahrenheit-32);
// }

// let temp = toCelsius(77);
// console.log(temp);


// let text = "The temperature is " + toCelsius(77) + " Celsius";
// console.log(text);

// let fah;
// console.log(fah);



// function add(a,b){   
//     return x = a+b;
//  }
//  document.write("<br>");
//  document.write(add(4,6));



// argument function----------------------------------------------------------

function sum(){
    let sum = 0;
    for(let i in arguments){
        sum += arguments[i];
    }
    document.write(`sum is = ${sum}`);
}
sum(20,30,40);

