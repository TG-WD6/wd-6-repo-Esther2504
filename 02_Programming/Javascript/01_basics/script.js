// a)
/* let letOefening = "Let Tekst";
let letOefening = "Let Tekst Twee!";
console.log(letOefening); */

// b)
/* let letOefening = "Let Tekst";
console.log(letOefening);

let letOefening = "Let Tekst Twee!";
console.log(letOefening); */

// c)
/* const constOefening = "Const Tekst";
console.log(constOefening);

constOefening = "Const Tekst Twee!";
console.log(constOefening); */

// d)
/* varOefening = "Var Tekst";
console.log(varOefening);

var varOefening = "Var Tekst Twee!";
console.log(varOefening);

var varOefening = "Var Tekst Drie!";
console.log(varOefening); */

// Opdracht 1.2
/* let typeQuestion = function calculateSomething() {};
console.log("This is a " + typeof typeQuestion + ", with the value: " + typeQuestion); */

// Opdracht 1.3
/* let someNumber = 5;
let anotherNumber = "5";
console.log(someNumber !== anotherNumber);
*/

// Opdracht 1.4
/* let increment = 1;
console.log(increment++);
console.log(++increment);

let modulo = 24 % 10;
console.log(modulo);

let division = 24 / 10;
console.log(division); 

let someNumber = undefined;
console.log(!someNumber);
*/

// Opdracht 2.1
/* let someKittens = "De poes van de buurman heeft kittens gehad! Hij vraagt of wij nog kittens willen.";
let poesBuurman = someKittens.slice(0,43);
let kittensVraag = someKittens.slice(44,81);
console.log(poesBuurman);
console.log(kittensVraag);
console.log(someKittens.toUpperCase());
console.log(someKittens.charAt(29));
console.log(someKittens.charAt(35)); */

// Opdracht 2.2
/* let testString = "Dit is een test.";
console.log(testString.substring(3,1));
console.log(testString.slice(3,1));
console.log(testString.substring(3,-1));
console.log(testString.slice(3,-1)); */

// Opdracht 2.3
/* let someKittens = "Die nieuwe kittens zijn zo schattig!";
let anArray = someKittens.split(" ");
console.log(anArray); */

// Opdracht 3.1
/* let x = 4;
let y = 8;
if (x == 4 && y==8) {
    console.log("Result!");
} */

/* let x = 4;
let y = 8;
if (x == 4 || y==8) {
    
} else {
console.log("Result!");
} */

/* let x = 4;
let y = 8;
if (!(x == 4 || y==8)) {
    
} else {
console.log("Result!");
}
*/

/* let x = 4;
let y = 8;
if (!(x == 4 && y==8)) {
    
} else {
console.log("Result!");
} */

// let x = 34;

// if ((x > 5) && (x < 10)) {
// console.log("De waarde is tussen 5 en 10");
// } else if ((x => 11) && (x <= 20)) {
// console.log("De waarde is tussen 11 en 20");
// } else if ((x == 21) || (x == 23)) {
// console.log("De waarde is 21 of 23");
// } else if ((x < 35) || ((x > 40) && (x < 45))) {
// console.log("De waarde is onder 35 of tussen 40 en 45");
// }

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