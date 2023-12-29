// let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// let length = text.length;
// document.write(length);

// let text = "Apple, Banana, Kiwi";
// let part = text.slice(7, 13);
// document.write(part);

// let text = "Apple, Banana, Kiwi";
// let part = text.slice(7);
// document.write(part);

// let text = "Apple, Banana, Kiwi";
// let part = text.slice(-12);
// let part = text.slice(-12, -6);

// let str = "Apple, Banana, Kiwi";
// let part = str.substring(7, 13);
// document.write(part);

// ---------------------------String-----------------------------------------------------------------------------

// let str =  "Vibhor";
// document.write(str[1]);

// let x = BigInt(34343434343434343434);
// document.write(x);

// Template Litrerals--------------------

document.write();

let exp = "Example"; 
// let specialstring = `This is a template litral ${1+2+3}`;
let specialstring = `This is a template litral ${exp}`;
document.write(typeof(specialstring));
document.write("<br>");
document.write(specialstring);

document.write("<br>");

document.write(exp.length);
document.write();



let Name = "    vibhor   "
let myName = "012345";
document.write(Name.toLowerCase());


document.write("<br>");
document.write(Name.toUpperCase());


document.write("<br>");
document.write(Name.trim());

document.write("<br>");
document.write(myName.slice(1 , 5));

document.write("<br>");
document.write(myName.slice(0));

document.write("<br>");
let res = Name.concat(myName);
document.write(res);

document.write("<br>");
let x = "hello";
document.write(x.replace("H" ,"Y"));

document.write("<br>");
document.write(myName.charAt(1));

document.write("<br>");
if(myName.startsWith(9)){
    document.write("find 0");
}else{
    document.write("Not find 0");
}

// string trim-----------------------------------------------------------------


let str = " Vibhor ";
document.write(str.length);

document.write("<br>");
let x = str.trimStart(str);

document.write("<br>");

let y = x.length;  
document.write(y);
console.log(y);


// startwith and endwith----------------------------------------------------------------

let str = "vibhor ";
let len = str.length;
document.write(len);
 
document.write("<br>");

let y = str.trimStart();
document.write("<br>");
document.write(y.length);
document.write("<br>");
document.write(y);

document.write("<br>");

// let z = str.charAt(0);

if(str.startsWith("v") && str.endsWith(" ")){
    document.write("yes! word exist wich start with : v");
}else{
    document.write("NO! word exist wich start with : v");
}


let str = "vibhor saini is a good boy";
document.write(str);

document.write("<br>");

document.write(typeof(str));
document.write("<br>");

let c = str.split(" ");
document.write(c);

document.write("<br>");
document.write(typeof(c));

