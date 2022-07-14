// await wacht tot de aanvraag compleet is

const getData = async () => (await fetch('./allcountries.json')).json();

getData()
  .then(data => {
    // Filters voor de verschillende continenten
    let dataEurope = data.filter(element => element.region == "Europe");
    let dataAsia = data.filter(element => element.region == "Asia");
    let dataAntartica = data.filter(element => element.region == "Antarctic");
    let dataAmericas = data.filter(element => element.region == "Americas");
    let dataAfrica = data.filter(element => element.region == "Africa");
    let dataOceania = data.filter(element => element.region == "Oceania");

    // Alle kaarten verschijnen voordat er een filter is geselecteerd
    for (let item of data) {
      let cardBack = document.createElement("div");
      cardBack.id = "cards__backside";
      cardBack.textContent = `Official: ${item.name.official} \r\n \r\n`
      cardBack.textContent += `Capital: ${item.capital} \r\n \r\n`;
      cardBack.textContent += `Continent: ${item.region} \r\n \r\n`;
      cardBack.textContent += `Subregion: ${item.subregion}`;
      document.getElementById('cards__back').appendChild(cardBack);
    }

    for (let item of data) {
      let cardFront = document.createElement("div");
      cardFront.id = "cards__frontside";
      cardFront.textContent = item.name.common;
      document.getElementById('cards__front').appendChild(cardFront)
    }

    // Functie om alle kaarten weer te laten verschijnen en de gefilterde info te verwijderen
    document.getElementById('filter__clear').addEventListener('click', function () {
      document.getElementById('cards__back').textContent = "";
      document.getElementById('cards__front').textContent = "";
      document.getElementById('filter__amount').innerText = data.length;
      document.getElementById('filter__options').value = "none";
      for (let item of data) {
        let cardBack = document.createElement("div");
        cardBack.id = "cards__backside";
        cardBack.textContent = `Official: ${item.name.official} \r\n \r\n`
        cardBack.textContent += `Capital: ${item.capital} \r\n \r\n`;
        cardBack.textContent += `Continent: ${item.region} \r\n \r\n`;
        cardBack.textContent += `Subregion: ${item.subregion}`;
        document.getElementById('cards__back').appendChild(cardBack);
      }

      for (let item of data) {
        let cardFront = document.createElement("div");
        cardFront.id = "cards__frontside";
        cardFront.textContent = item.name.common;
        document.getElementById('cards__front').appendChild(cardFront)
      }
    })

    // Functie op button om de filters te activeren
    document.getElementById('filter__generate').addEventListener('click', function () {

      let optionFilter = document.getElementById("filter__options");

      if (optionFilter.value === "Africa") {
        document.getElementById('filter__amount').innerText = dataAfrica.length;
        document.getElementById('cards__back').textContent = "";
        document.getElementById('cards__front').textContent = "";
        for (let item of dataAfrica) {
          let cardBack = document.createElement("div");
          cardBack.id = "cards__backside";
          cardBack.textContent = `Official: ${item.name.official} \r\n \r\n`
          cardBack.textContent += `Capital: ${item.capital} \r\n \r\n`;
          cardBack.textContent += `Continent: ${item.region} \r\n \r\n`;
          cardBack.textContent += `Subregion: ${item.subregion}`;
          document.getElementById('cards__back').appendChild(cardBack);
        }

        for (let item of dataAfrica) {
          let cardFront = document.createElement("div");
          cardFront.id = "cards__frontside";
          cardFront.textContent = item.name.common;
          document.getElementById('cards__front').appendChild(cardFront)
        }
      } else if (optionFilter.value === "Americas") {
        document.getElementById('filter__amount').innerText = dataAmericas.length;
        document.getElementById('cards__back').textContent = "";
        document.getElementById('cards__front').textContent = "";
        for (let item of dataAmericas) {
          let cardBack = document.createElement("div");
          cardBack.id = "cards__backside";
          cardBack.textContent = `Official: ${item.name.official} \r\n \r\n`
          cardBack.textContent += `Capital: ${item.capital} \r\n \r\n`;
          cardBack.textContent += `Continent: ${item.region} \r\n \r\n`;
          cardBack.textContent += `Subregion: ${item.subregion}`;
          document.getElementById('cards__back').appendChild(cardBack);
        }

        for (let item of dataAmericas) {
          let cardFront = document.createElement("div");
          cardFront.id = "cards__frontside";
          cardFront.textContent = item.name.common;
          document.getElementById('cards__front').appendChild(cardFront)
        }
      } else if (optionFilter.value === "Antartica") {
        document.getElementById('filter__amount').innerText = dataAntartica.length;
        document.getElementById('cards__back').textContent = "";
        document.getElementById('cards__front').textContent = "";
        for (let item of dataAntartica) {
          let cardBack = document.createElement("div");
          cardBack.id = "cards__backside";
          cardBack.textContent = `Official: ${item.name.official} \r\n \r\n`
          cardBack.textContent += `Capital: ${item.capital} \r\n \r\n`;
          cardBack.textContent += `Continent: ${item.region} \r\n \r\n`;
          cardBack.textContent += `Subregion: ${item.subregion}`;
          document.getElementById('cards__back').appendChild(cardBack);
        }

        for (let item of dataAntartica) {
          let cardFront = document.createElement("div");
          cardFront.id = "cards__frontside";
          cardFront.textContent = item.name.common;
          document.getElementById('cards__front').appendChild(cardFront);
        }
      } else if (optionFilter.value === "Asia") {
        document.getElementById('filter__amount').innerText = dataAsia.length;
        document.getElementById('cards__back').textContent = "";
        document.getElementById('cards__front').textContent = "";
        for (let item of dataAsia) {
          let cardBack = document.createElement("div");
          cardBack.id = "cards__backside";
          cardBack.textContent = `Official: ${item.name.official} \r\n \r\n`
          cardBack.textContent += `Capital: ${item.capital} \r\n \r\n`;
          cardBack.textContent += `Continent: ${item.region} \r\n \r\n`;
          cardBack.textContent += `Subregion: ${item.subregion}`;
          document.getElementById('cards__back').appendChild(cardBack);
        }

        for (let item of dataAsia) {
          let cardFront = document.createElement("div");
          cardFront.id = "cards__frontside";
          cardFront.textContent = item.name.common;
          document.getElementById('cards__front').appendChild(cardFront);
        }
      } else if (optionFilter.value === "Europe") {
        document.getElementById('filter__amount').innerText = dataEurope.length;
        document.getElementById('cards__back').textContent = "";
        document.getElementById('cards__front').textContent = "";
        for (let item of dataEurope) {
          let cardBack = document.createElement("div");
          cardBack.id = "cards__backside";
          cardBack.textContent = `Official: ${item.name.official} \r\n \r\n`
          cardBack.textContent += `Capital: ${item.capital} \r\n \r\n`;
          cardBack.textContent += `Continent: ${item.region} \r\n \r\n`;
          cardBack.textContent += `Subregion: ${item.subregion}`;
          document.getElementById('cards__back').appendChild(cardBack);
        }

        for (let item of dataEurope) {
          let cardFront = document.createElement("div");
          cardFront.id = "cards__frontside";
          cardFront.textContent = item.name.common;
          document.getElementById('cards__front').appendChild(cardFront);
        }
      } else if (optionFilter.value === "Oceania") {
        document.getElementById('filter__amount').innerText = dataOceania.length;
        document.getElementById('cards__back').textContent = "";
        document.getElementById('cards__front').textContent = "";
        for (let item of dataOceania) {
          let cardBack = document.createElement("div");
          cardBack.id = "cards__backside";
          cardBack.textContent = `Official: ${item.name.official} \r\n \r\n`
          cardBack.textContent += `Capital: ${item.capital} \r\n \r\n`;
          cardBack.textContent += `Continent: ${item.region} \r\n \r\n`;
          cardBack.textContent += `Subregion: ${item.subregion}`;
          document.getElementById('cards__back').appendChild(cardBack);
        }

        for (let item of dataOceania) {
          let cardFront = document.createElement("div");
          cardFront.id = "cards__frontside";
          cardFront.textContent = item.name.common;
          document.getElementById('cards__front').appendChild(cardFront);
        }
      }
    })
  });
