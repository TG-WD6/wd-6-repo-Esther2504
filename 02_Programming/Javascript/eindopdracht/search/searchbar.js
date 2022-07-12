let inputValues = [];

function saveData(){
    let searchInput = document.querySelector("#searchbar__input").value;

    if (localStorage.getItem('data') == null) {
        localStorage.setItem('data', '[]');
    }

    let savedData = JSON.parse(localStorage.getItem('data'));
    savedData.push(searchInput);

    localStorage.setItem('data', JSON.stringify(savedData))

// localStorage.setItem("suggestion", searchInput);

// let sug = localStorage.getItem("suggestion")

// let sug2 = document.createElement("p");
// sug2.textContent = sug;
// document.body.appendChild(sug2)
}
/*
document.getElementById("searchbar__icon").addEventListener ("click", searchFunction, false);

function searchFunction() {

inputValues.push(searchInput);
localStorage.setItem("suggestion",JSON.stringify(inputValues)); */
// console.log(localStorage.getItem("suggestion"));


// var storedValue = localStorage.getItem("search");

// document.getElementById("searchinput").addEventListener("change", suggestItems());

/* function suggestItems() {
    inputValues.push(searchInput);
    localStorage.setItem("suggestion",JSON.stringify(inputValues));
    let suggestBox = document.getElementById("searchbar__suggestions");

    for (i=0; i<inputValues.length; i++) {
        console.log(inputValues[i]);
        suggestBox.textContent += inputValues[i];
    
     }

} */