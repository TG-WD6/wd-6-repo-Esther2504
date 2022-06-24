// Opdracht 3.1
let x = 5;
let y = 8;
if (x == 4 && y==8) {
    console.log("Result!");
}  

let x = 5;
let y = 8;
if (x == 4 || y==8) {
    console.log("Result!");
} else {

} 

let x = 4;
let y = 8;
if (!(x == 4 || y==8)) {

} else {
console.log("Result!");
}


let x = 4;
let y = 8;
if (!(x == 4 && y==8)) {
    
} else {
console.log("Result!");
} 

let x = 34;

if ((x > 5) && (x < 10)) {
console.log("De waarde is tussen 5 en 10");
} else if ((x => 11) && (x <= 20)) {
console.log("De waarde is tussen 11 en 20");
} else if ((x == 21) || (x == 23)) {
console.log("De waarde is 21 of 23");
} else if ((x < 35) || ((x > 40) && (x < 45))) {
console.log("De waarde is onder 35 of tussen 40 en 45");
}


let x = 9;

if ((x > 5) && (x < 10)) {
console.log("De waarde is tussen 5 en 10");
} 
if ((x => 11) && (x <= 20)) {
console.log("De waarde is tussen 11 en 20");
}
if ((x == 21) || (x == 23)) {
console.log("De waarde is 21 of 23");
}
if ((x < 35) || ((x > 40) && (x < 45))) {
console.log("De waarde is onder 35 of tussen 40 en 45");
} 

// Opdracht 3.2
let x = 3;

if (x == 3) {
console.log("De waarde is 3");
} else if ((x > 4) && (x < 12)) {
console.log("De waarde is hoger dan 4");
} else if (x > 11) {
console.log("De waarde is hoger dan 11");
} else if (x < 3) {
console.log("De waarde is lager dan 3");
} 

let x = 17;

if (x == 1) {
    console.log("Januari");
} else if (x == 2) {
    console.log("Februari");
} else if (x == 3) {
    console.log("Maart");
} else if (x == 4) {
    console.log("April");
} else if (x == 5) {
    console.log("Mei");
} else if (x == 6) {
    console.log("Juni");
} else if (x == 7) {
    console.log("Juli");
} else if (x == 8) {
    console.log("Augustus");
} else if (x == 9) {
    console.log("September");
} else if (x == 10) {
    console.log("Oktober");
} else if (x == 11) {
    console.log("November");
} else if (x == 12) {
    console.log("December");
} else {
    console.log("Geen geldige maand!");
} 

let x = 12;
switch (x) {
    case 1:
        console.log("Januari");
        break;
    case 2:
        console.log("Februari");
        break;
    case 3:
        console.log("Maart");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("Mei");
        break;
    case 6:
        console.log("Juni");
        break;
    case 7:
        console.log("Juli");
        break;
    case 8:
        console.log("Augustus");
        break;
    case 9:
        console.log("September");
        break;
    case 10:
        console.log("Oktober");
        break;
    case 11:
        console.log("November");
        break;
    case 12:
        console.log("December");
        break;
    default:
        console.log("Geen geldige maand!");
} 

let x = 3;
((x<=4) && (x>=0)) ? results = 2 : results = 5;
console.log(results); 