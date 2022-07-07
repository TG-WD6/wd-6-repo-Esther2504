document.getElementById ("icon").addEventListener ("click", searchFunction, false);

function searchFunction() {


// let searchData = document.getElementById("searchinput").value

// localStorage.setItem("test", searchData)

var input = document.getElementById("searchinput").value;
localStorage.setItem("search", input);
var storedValue = localStorage.getItem("search");



// let suggestBox = document.getElementById("suggestionsbox");

// suggestBox.innerText = storedValue;

// let icon = document.getElementById("icon")
// icon.addEventListener("click", name => {
//     text.textContent = name.target.value
//     })
}

