let searchInput = document.querySelector("#searchbar__input");
let inputContainer = document.querySelector("#searchbar__input__container");
let suggestionBox = document.querySelector("#searchbar__suggestions");

function saveData() {
    let searchInput = document.querySelector("#searchbar__input").value;

    // Als er niets in opgeslagen in de localstorage, wordt er een lege array opgeslagen
    if (localStorage.getItem('input') == 0) {
        localStorage.setItem('input', '[]');
    }

    // Met getItem wordt de oude data opgehaald van de webserver, JSON.parse zet de tekst om in leesbare data
    let savedData = JSON.parse(localStorage.getItem('input'));
    // De opgeslagen data wordt aan de nieuwe data toegevoegd
    savedData.push(searchInput);

    // De data wordt toegevoegd aan de local storage. JSON.stringify zet de data om in tekst zodat het naar een webserver kan worden gestuurd
    localStorage.setItem('input', JSON.stringify(savedData))
}

searchInput.addEventListener('keyup', () => {
    let savedData = JSON.parse(localStorage.getItem('input'));
    let results = [];
    let input = searchInput.value;

    if (input.length) {
        // de results array wordt gelijk gesteld aan de gefilterde localStorage data
        results = savedData.filter((item) => {
            // returnt array items die de input bevatten
            return item.toLowerCase().includes(input.toLowerCase())
        })
    }

    // Roept functie aan om de resultaten in op de pagina te laten zien
    renderResults(results)
})


function renderResults(results) {
    // Elke suggestie die matcht, wordt apart teruggegeven
    // .join voegt de array items aan elkaar zonder er een komma tussen te hebben
    let suggesties = results.map((item) => {
        return `${item} \r\n`
    }).join('')

    // De class 'show' wordt toegevoegd aan de inputcontainer zodat je de suggestiebox ziet zodra een suggestie matcht
    inputContainer.classList.add('show');
    suggestionBox.textContent = `${suggesties}`

    // Als er geen items zijn in de localstorage die matchen met de input, wordt de div met suggesties niet getoond
    if (results.length == 0) {
        return inputContainer.classList.remove('show');
    }
}
