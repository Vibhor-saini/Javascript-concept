// For loop--------------------------------------------------------------

// let a = 5;
// document.write("For loop" + "<br>");
// for(let i = 1 ; i<= a ; i++){
//     document.write(i + "<br>");
// }
// document.write("<br>");
// document.write("<br>");
 


// while loop------------------------------------------------------------

// let i = 1;
// document.write("while loop" + "<br>");
// while (i<=10) {
//     document.write(i + "<br>"); 
//     i++;
//    document.write("\n");
// }

// document.write("<br>");
// document.write("<br>");


// Do  While Loop---------------------------------------------------------

// document.write("Do-while loop" + "<br>");
// let y = 20;

// do{
//     document.write("Vibhor Saini" + "<br>");
//     y++;
// }while(y <= 10);

// let x = 1;
// do{
//     document.write("x = " + x + "<br>");
//     x++;
// }while(x <= 5);


// For-of Loop-------------------------------------------------------------

//    let str = "VibhorSaini";
//    let length = 0;
//    for( let val of str){
//        document.write("val = " , val + "<br>");
//        length++;
//    }
//    document.write("String size is  = " , length +  "<br>");


// For-in loop -------------------------------------------------------------

let student = {
    Name: "Vibhor Saini",
    age: 20,
    cgpa: 7.5,
    isPass: true,
};

for(let i in student){
    document.write("Key = " + i + "<br>");
    console.log("key = " ,i , " value = " , student[i]);

}