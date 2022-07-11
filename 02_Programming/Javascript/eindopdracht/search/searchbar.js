let inputValues = [];


document.getElementById ("icon").addEventListener ("click", searchFunction, false);

function searchFunction() {

let input = document.getElementById("searchinput").value;
inputValues.push(input);
localStorage.setItem("suggestion",JSON.stringify(inputValues));
// console.log(localStorage.getItem("suggestion"));

}
// var storedValue = localStorage.getItem("search");

// document.getElementById("searchinput").addEventListener("change", suggestItems());

function suggestItems() {
    let input = document.getElementById("searchinput").value;
    inputValues.push(input);
    localStorage.setItem("suggestion",JSON.stringify(inputValues));
    let suggestBox = document.getElementById("suggestionsbox");

    for (i=0; i<inputValues.length; i++) {
        console.log(inputValues[i]);
        suggestBox.textContent += inputValues[i];
    
     }

}