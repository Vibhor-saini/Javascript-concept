// WAP to check that number is palindrome/Armstrong or not----------------------------------------

// let n = 153;
// let c = n;
// let r;
// let sum = 0;

// while(n>0){
// r = n%10;
// // sum = (sum * 10) + r;
// sum = sum + r * r * r;
// n = Math.floor(n/10);
// }

// if(sum==c){
//     // document.write(c + " is Palindrome");
//     document.write(c + " is Armstrong");
// }else{
//     document.write(c + " is not Armstrong");
//     document.write(c + " is not Palindrome");
// }





// WAP to check that number is prime or not--------------------------------------------------

// let n = 7;
// let count = 0;
// for(let i=1; i<=n; i++){
// if(n%i==0){
//     count++;
// }
// }
// if(count==2){
//     document.write(n + " is Prime Number");
// }else{
//     document.write(n + " is not Prime Number");
// }




// WAP to find sum of first n number----------------------------------------------------------------------

// let x = 5;
// let sum = 0;
// for(let i = 1; i<=x ; i++){
// sum = sum + i;
// }
// document.write("Sum of first " + x + " numbers is = "  + sum);



// WAP to Print all even number from 0 to 100--------------------------------------------------------------
// let n = 100;
// for(let i = 0 ; i<=n ; i++){
// if(i%2==0){
//     document.write(i + "<br>");
// }
// }


// Game of guessing correct number---------------------------------------------------------------------------


let num = 25;
let guessnum = prompt("Guess any number");
// document.write(num);

while(num!=guessnum){
guessnum = prompt("Try again number");
}
    document.write("Congratulation you guessed right number!"); 
