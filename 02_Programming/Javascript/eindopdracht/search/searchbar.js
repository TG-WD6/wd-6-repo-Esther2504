let inputValues = [];

let searchInput = document.querySelector("#searchbar__input");
let inputContainer = document.querySelector(".searchbar__input__container");
let suggestionBox = document.querySelector("#searchbar__suggestions")

function saveData(){

    let searchInput = document.querySelector("#searchbar__input").value;
    if (localStorage.getItem('data') == null) {
        localStorage.setItem('data', '[]');
    }

    let savedData = JSON.parse(localStorage.getItem('data'));
    savedData.push(searchInput);

    localStorage.setItem('data', JSON.stringify(savedData))
}

searchInput.addEventListener('keyup', () => {
    let savedData = JSON.parse(localStorage.getItem('data'));
let results = [];
let input = searchInput.value;
if (input.length) {
    results = savedData.filter((item) => {
return item.toLowerCase().includes(input.toLowerCase())
    })
}

renderResults(results)
})


function renderResults(results) {
    if (!results.length) {
        return inputContainer.classList.remove('show');
    }

    let content = results.map((item) => {
        return `<li>${item}</li>`
    }).join('')

    inputContainer.classList.add('show');
    suggestionBox.innerHTML = `<ul>${content}</ul>`
}
