// let x = [1 ,2 , 3 , "hello" , 6 , 7];

// let student = {
//     name: "vibhor",
//     calss: "5th",
//     section: 4,
// };
// document.getElementById("Demo").innerHTML = student.section;

// document.getElementById("Demo").innerHTML = x[2];
// document.getElementById("Demo").innerHTML = x;
// document.getElementById("Demo").innerHTML = x.length;
// document.getElementById("Demo").innerHTML = x.length;
// document.getElementById("Demo").innerHTML = typeof(x);
// document.getElementById("Demo").innerHTML = x[1]=66;
// document.getElementById("Demo").innerHTML = x[1];

//  for(let i = 1; i<=x.length; i++){
    // document.write(x[i-1]);
    // console.log(x[i]);
//  }

// for(let y of x){
//     console.log(y);
// }



// const a = [12,23,4,9,434];
// document.write(a[3]);

// document.write("<br>");

// Array push----------------------------------------

// const array = ['John', 'Jeroen'];
// array.push('Peter');
// document.write(array);

// Array pop----------------------------------------

// document.write("<br>");
// array.pop('Peter');
// document.write(array);

// Array shift----------------------------------------

// document.write();
// const array1 = [1, 2, 3];
// const firstElement = array1.shift();

// document.write("<br>");
// document.write(array1);

// document.write("<br>");
// document.write(firstElement);


// Array unshift----------------------------------------


// let array1 = [1, 2, 5 , 46 , 5 , 6];
// document.write(array1.unshift("vibhor"));

// document.write("<br>");
// document.write(array1);


// Array reverse--------------------------------------------

// document.write("<br>");
// document.write(array1.reverse());


// Array slice-----------------------------------------------

// document.write("<br>");
// document.write(array1.slice(2,-1));


// Array splice----------------------------------------------

// document.write("<br>");
// let array1 = [1,2,5,46,5,6];
// let array2 = ["Vibhor" , "sugandha" , "Kannu" , "Vibhor"];
// let array3 = "sugandha";

// Array concat-----------------------------------------------------

// document.write(array2.concat(array1));


// Array join() -------------------------------------------------------
// after joins out will in the form of string.
// document.write(array2.join(" - "));


// isArray() --------------------------------------------------------------
// document.write(Array.isArray(array1));
// document.write(Array.isArray(array3));



// indexOf() --------------------------------------------------------------
// document.write(array2.indexOf("Kannu" , 2));
// document.write(array2.indexOf("Vibhor"));
// document.write(array2.indexOf("Vibhor" , 2));
// document.write(Array.isArray(array3));


// lastIndexOf() --------------------------------------------------------------
// document.write(array2.indexOf("Kannu" , 2));
// document.write(array2.indexOf("Vibhor"));
// document.write(array2.lastIndexOf("Vibhor"));
// document.write(Array.isArray(array3));


// Include() --------------------------------------------------------------
// document.write(array2.includes("Vibhor"));


// Some() --------------------------------------------------------------
// let ages = [5,10,15,20,25];
// function Check(ages){
//     return ages >= 25;
// }
// document.write(ages.some(Check));



// Every() --------------------------------------------------------------
// let ages = [5,10,15,20,25];
// function Check(ages){
//     return ages >= 5;
// }
// document.write(ages.every(Check));

// array1.splice(2,0,50);
// document.write(array1);




// find() --------------------------------------------------------------
// let ages = [50,20,18,20,25];
// function Check(ages){
//     return ages >= 18;
// }
// document.write(ages.find(Check));


// findIndex() --------------------------------------------------------------
// let ages = [50,21,18,20,25];
// function Check(ages){
//     return ages == 20;
// }
// document.write(ages.findIndex(Check));



// filter() --------------------------------------------------------------
// let ages = [50,21,18,20, 17, 16,25];
// function Check(ages){
//     return ages >= 17;
// }
// document.write(ages.filter(Check));




// toString() and valueOf() and fill() --------------------------------------------------------------
// let ages = [50,21,18,20,17,27,35];
// let a = ages.toString();
// document.write(typeof(a));
// document.write(ages.valueOf());
// document.write(ages.fill(7));


// array1.splice(2,0,50);
// document.write(array1);


// Add element
// array1.splice(4,1,50);
// document.write(array1);

// delete element
// let a = array1.slice(3,-1);
// document.write(a);

// array1.splice(2,3);
// document.write(array1);

// Sort an array--------------------------------------------------

// let array1 = [1, 2, 55, 46, 5, 6]; 
// let ltr = "bhai";
// let str = "saini"; 
// let str2 = "Vibhor";
// let k = array1.sort((a, b) => a - b);
// document.getElementById("Demo").innerHTML= k;
// let m = `Vibhor ${ltr} Saini`;
// document.write(m);
// let array1 = [1, 2, 55, 46, 5, 6];
// let k = array1.sort((a, b) => a - b);
// document.getElementById("Demo").innerHTML = k;



// Array.from()---------------------------------------------------

// let name =  "vibhor";
// let x = Array.from(name);
// console.log(x);
// console.log(typeof x);

// let arr = [12, 34, 56, 78, 98, 5, 56, 55, 23];

// let a = arr.toString();
// console.log(a);
// console.log(typeof a);

// let v = Array.from(a);
// console.log(v);
// console.log(typeof v);