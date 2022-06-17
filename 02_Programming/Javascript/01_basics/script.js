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
// let x = 5;
// let y = 8;
// if (x == 4 && y==8) {
//     console.log("Result!");
// }  

// let x = 5;
// let y = 8;
// if (x == 4 || y==8) {
//     console.log("Result!");
// } else {

// } 

//  let x = 4;
// let y = 8;
// if (!(x == 4 || y==8)) {

// } else {
// console.log("Result!");
// }


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

/*
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
} */

// Opdracht 3.2
/* let x = 3;

if (x == 3) {
console.log("De waarde is 3");
} else if ((x > 4) && (x < 12)) {
console.log("De waarde is hoger dan 4");
} else if (x > 11) {
console.log("De waarde is hoger dan 11");
} else if (x < 3) {
console.log("De waarde is lager dan 3");
} */

/* let x = 17;

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
} */

/* let x = 12;
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
} */

/* let x = 3;
((x<=4) && (x>=0)) ? results = 2 : results = 5;
console.log(results); */

// Opdracht 4.1
function clickButton() {
    console.log("Hello World!");
}

let inputElement = document.getElementById('input');

function logParameter(parameter) {
    console.log(parameter);
    let result = console.log(parameter * 2)
    return result;
}


// Opdracht 4.2
/* function logParameter(parameter) {
 console.log(parameter.value);
 let result = console.log(parameter * 2)
 return result;
} */

// Opdracht 4.3
function randomNumber(x) {
    console.log(Math.floor(Math.random() * x));
}

// Opdracht 4.4 
// function recName(parameter){ 
// if (parameter == "Madwhi" || parameter == "Nathan" || parameter == "Luisa" || parameter == "Esther") {
//     return console.log("Die naam ken ik")
// } else {
//     return console.log("Die naam ken ik niet")
// }
// }
// recName('Esther')


// Verandert tekst binnen div:
// let div = document.querySelector("p");

// function recName(parameter){ 
// if (parameter == "Madwhi" || parameter == "Nathan" || parameter == "Luisa" || parameter == "Esther") {
//     div.innerText = "Die naam ken ik";
//     return console.log("Die naam ken ik")
// } else {
//     div.innerText = "Die naam ken ik niet";
//     return console.log("Die naam ken ik niet")
// }
// }

// Met Arrow Functions

// let div = document.querySelector("p");

// recName = (parameter) => (parameter == "Madwhi" || parameter == "Nathan" || parameter == "Luisa" || parameter == "Esther") ?
//         div.innerText = "Die naam ken ik" : div.innerText = "Die naam ken ik niet"

// recName()

// Met tweede functie
function recName(parameter) {
    if (parameter == "Madwhi" || parameter == "Nathan" || parameter == "Luisa" || parameter == "Esther") {
        let bekend = "Die naam ken ik";
        return bekend;
    } else {
        let onbekend = "Die naam ken ik niet";
        return onbekend;
    }
}

let callfunction = recName('Esther');

function displayMessage() {
    let div = document.querySelector("p");
    div.innerText = callfunction;
}


// Opdracht 5.1
let cijfers = [6, 2, 4, 1, 9, 10, 3, 8, 5, 7];
console.log(cijfers);

let fruit = ["Appel", "Aardbei", "Banaan", "Kiwi", "Mango"];
console.log(fruit);
console.log(fruit[0], fruit[1])

let random = cijfers[Math.floor(Math.random() * cijfers.length)];
console.log(fruit[random]);

console.log(fruit.length);

let remainder = fruit.length % cijfers.length;
let randommodulo = Math.floor(Math.random() * remainder);
console.log(fruit[randommodulo]);

fruit[0] = "Pear";
console.log(fruit);

fruit.splice(0, 2, "Aardbei", "Pear");
console.log(fruit);

// Opdracht 5.2
const dutchSports = ["Voetbal", "Hockey", "Schaatsen"];
console.log(dutchSports[0]);
console.log(dutchSports[1]);
console.log(dutchSports[2]);

for (const x in dutchSports) {
    console.log(x)
}

for (const x of dutchSports) {
    console.log(x)
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

for (i = 0; i < 21; i++) {
    if (i % 2 == 0) {
        console.log(i)
    }
}

// Met for...of
for (let i of numbers) {
    if (i % 2 == 0) {
        console.log(i)
    }
}

// Loops 1-10
for (let i = 0; i < 3; i++) {
    for (let j = 1; j < 11; j++) {
        console.log(j);
    }
}

// Opdracht 5.2 bullet 5
for (let i = 1; i < 4; i++) {
    for (let j = 1; j < 11; j++) {
        console.log(i * j)
    }
}

// Reeks van Fibonacci - OPNIEUW MAKEN
let fibonacci = [0, 1];

for (let i = fibonacci.length; i < 50; i++) {
        fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1]; // i-1 en i-2 verwijzen naar de twee getallen voor i
        fibonacci.push(i);
}
console.log(fibonacci);


// Bubble sort - OPNIEUW MAKEN

let bubble = [2, 7, 5, 10, 4, 9, 3, 1, 8, 6];

for (var i = 0; i < bubble.length; i++) {
    for (var j = 0; j < bubble.length - i + 1; j++) {
        if (bubble[j - 1] > bubble[j]) {
            var sort = bubble[j - 1];
            bubble[j - 1] = bubble[j];
            bubble[j] = sort;
        }
    }
}

console.log(bubble);

// Opdracht 5.3
// Adds 3 items to array
const dutchSport = ["Voetbal", "Hockey", "Schaatsen"];
dutchSport.push("Zeilen", "Zwemmen");
dutchSport.unshift("Volleybal");

console.log(dutchSport);

// Puts ballsports in own var
const ballSports = dutchSport.slice(0,3);
console.log(ballSports);

// Removes ballsports from dutchsports
dutchSport.splice(0,3);
console.log(dutchSport);

// Puts items in abc order
dutchSport.sort();
ballSports.sort();
console.log(dutchSport);
console.log(ballSports);

// Logs individual items
ballSports.forEach(sport => console.log(sport))
dutchSport.forEach(sport => console.log(sport))

// Logs length of every item
const sportsLength = [dutchSport[0].length, dutchSport[1].length, dutchSport[2].length, ballSports[0].length, ballSports[1].length, ballSports[2].length]
console.log(sportsLength);

