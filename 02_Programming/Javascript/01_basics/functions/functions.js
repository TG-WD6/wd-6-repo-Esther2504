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
