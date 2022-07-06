const getData = async () => (await fetch('./allcountries.json')).json();

getData()
  .then(data => {
    // Filters voor de verschillende continenten
    let dataEurope = data.filter(element => element.region == "Europe")
    let dataAsia = data.filter(element => element.region == "Asia")
    let dataAntartica = data.filter(element => element.region == "Antarctic")
    let dataAmericas = data.filter(element => element.region == "Americas")
    let dataAfrica = data.filter(element => element.region == "Africa")
    let dataOceania = data.filter(element => element.region == "Oceania")

    // Alle kaarten die verschijnen voordat er een filter is geselecteerd
    for (let item of data) {
      let cardDiv = document.createElement("div");
      cardDiv.id = "infocards";
      cardDiv.setAttribute('style', 'white-space: pre-line;');
      cardDiv.textContent = `Official: ${item.name.official} \r\n \r\n`
      cardDiv.textContent += `Capital: ${item.capital} \r\n \r\n`;
      cardDiv.textContent += `Continent: ${item.region} \r\n \r\n`;
      cardDiv.textContent += `Subregion: ${item.subregion}`;
      document.getElementById('cards').appendChild(cardDiv);
    }

    for (let item of data) {
      let cardFront = document.createElement("div");
      cardFront.id = "frontcard";
      cardFront.textContent = item.name.common;
      document.getElementById('cardnames').appendChild(cardFront)
    }

    // Functie om alle kaarten weer te laten verschijnen en de gefilterde info te verwijderen
    document.getElementById('clear').addEventListener('click', function () {
      document.getElementById('cards').textContent = "";
      document.getElementById('cardnames').textContent = "";
      document.getElementById('amount').innerText = data.length;
      document.getElementById('continents').value = "none";
      for (let item of data) {
        let cardDiv = document.createElement("div");
        cardDiv.id = "infocards";
        cardDiv.setAttribute('style', 'white-space: pre-line;');
        cardDiv.textContent = `Official: ${item.name.official} \r\n \r\n`
        cardDiv.textContent += `Capital: ${item.capital} \r\n \r\n`;
        cardDiv.textContent += `Continent: ${item.region} \r\n \r\n`;
        cardDiv.textContent += `Subregion: ${item.subregion}`;
        document.getElementById('cards').appendChild(cardDiv);
      }

      for (let item of data) {
        let cardFront = document.createElement("div");
        cardFront.id = "frontcard";
        cardFront.textContent = item.name.common;
        document.getElementById('cardnames').appendChild(cardFront)
      }
    })

// Functie op button om de filters te activeren
    document.getElementById('generate').addEventListener('click', function () {

      let optionfilter = document.getElementById("continents");
   
      if (optionfilter.value === "Africa") {
        document.getElementById('amount').innerText = dataAfrica.length;
        document.getElementById('cards').textContent = "";
        document.getElementById('cardnames').textContent = "";
        for (let item of dataAfrica) {
          let cardDiv = document.createElement("div");
          cardDiv.id = "infocards";
          cardDiv.setAttribute('style', 'white-space: pre-line;');
          cardDiv.textContent = `Official: ${item.name.official} \r\n \r\n`
          cardDiv.textContent += `Capital: ${item.capital} \r\n \r\n`;
          cardDiv.textContent += `Continent: ${item.region} \r\n \r\n`;
          cardDiv.textContent += `Subregion: ${item.subregion}`;
          document.getElementById('cards').appendChild(cardDiv);
        }

        for (let item of dataAfrica) {
          let cardFront = document.createElement("div");
          cardFront.id = "frontcard";
          cardFront.textContent = item.name.common;
          document.getElementById('cardnames').appendChild(cardFront)
        }
      } else if (optionfilter.value === "Americas") {
        document.getElementById('amount').innerText = dataAmericas.length;
        document.getElementById('cards').textContent = "";
        document.getElementById('cardnames').textContent = "";
        for (let item of dataAmericas) {
          let cardDiv = document.createElement("div");
          cardDiv.id = "infocards";
          cardDiv.setAttribute('style', 'white-space: pre-line;');
          cardDiv.textContent = `Official: ${item.name.official} \r\n \r\n`
          cardDiv.textContent += `Capital: ${item.capital} \r\n \r\n`;
          cardDiv.textContent += `Continent: ${item.region} \r\n \r\n`;
          cardDiv.textContent += `Subregion: ${item.subregion}`;
          document.getElementById('cards').appendChild(cardDiv);
        }

        for (let item of dataAmericas) {
          let cardFront = document.createElement("div");
          cardFront.id = "frontcard";
          cardFront.textContent = item.name.common;
          document.getElementById('cardnames').appendChild(cardFront)
        }
      } else if (optionfilter.value === "Antartica") {
        document.getElementById('amount').innerText = dataAntartica.length;
        document.getElementById('cards').textContent = "";
        document.getElementById('cardnames').textContent = "";
        for (let item of dataAntartica) {
          let cardDiv = document.createElement("div");
          cardDiv.id = "infocards";
          cardDiv.setAttribute('style', 'white-space: pre-line;');
          cardDiv.textContent = `Official: ${item.name.official} \r\n \r\n`
          cardDiv.textContent += `Capital: ${item.capital} \r\n \r\n`;
          cardDiv.textContent += `Continent: ${item.region} \r\n \r\n`;
          cardDiv.textContent += `Subregion: ${item.subregion}`;
          document.getElementById('cards').appendChild(cardDiv);
        }

        for (let item of dataAntartica) {
          let cardFront = document.createElement("div");
          cardFront.id = "frontcard";
          cardFront.textContent = item.name.common;
          document.getElementById('cardnames').appendChild(cardFront);
        }
      } else if (optionfilter.value === "Asia") {
        document.getElementById('amount').innerText = dataAsia.length;
        document.getElementById('cards').textContent = "";
        document.getElementById('cardnames').textContent = "";
        for (let item of dataAsia) {
          let cardDiv = document.createElement("div");
          cardDiv.id = "infocards";
          cardDiv.setAttribute('style', 'white-space: pre-line;');
          cardDiv.textContent = `Official: ${item.name.official} \r\n \r\n`
          cardDiv.textContent += `Capital: ${item.capital} \r\n \r\n`;
          cardDiv.textContent += `Continent: ${item.region} \r\n \r\n`;
          cardDiv.textContent += `Subregion: ${item.subregion}`;
          document.getElementById('cards').appendChild(cardDiv);
        }

        for (let item of dataAsia) {
          let cardFront = document.createElement("div");
          cardFront.id = "frontcard";
          cardFront.textContent = item.name.common;
          document.getElementById('cardnames').appendChild(cardFront);
        }
      } else if (optionfilter.value === "Europe") {
        document.getElementById('amount').innerText = dataEurope.length;
        document.getElementById('cards').textContent = "";
        document.getElementById('cardnames').textContent = "";
        for (let item of dataEurope) {
          let cardDiv = document.createElement("div");
          cardDiv.id = "infocards";
          cardDiv.setAttribute('style', 'white-space: pre-line;');
          cardDiv.textContent = `Official: ${item.name.official} \r\n \r\n`
          cardDiv.textContent += `Capital: ${item.capital} \r\n \r\n`;
          cardDiv.textContent += `Continent: ${item.region} \r\n \r\n`;
          cardDiv.textContent += `Subregion: ${item.subregion}`;
          document.getElementById('cards').appendChild(cardDiv);
        }

        for (let item of dataEurope) {
          let cardFront = document.createElement("div");
          cardFront.id = "frontcard";
          cardFront.textContent = item.name.common;
          document.getElementById('cardnames').appendChild(cardFront);
        }
      } else if (optionfilter.value === "Oceania") {
        document.getElementById('amount').innerText = dataOceania.length;
        document.getElementById('cards').textContent = "";
        document.getElementById('cardnames').textContent = "";
        for (let item of dataOceania) {
          let cardDiv = document.createElement("div");
          cardDiv.id = "infocards";
          cardDiv.setAttribute('style', 'white-space: pre-line;');
          cardDiv.textContent = `Official: ${item.name.official} \r\n \r\n`
          cardDiv.textContent += `Capital: ${item.capital} \r\n \r\n`;
          cardDiv.textContent += `Continent: ${item.region} \r\n \r\n`;
          cardDiv.textContent += `Subregion: ${item.subregion}`;
          document.getElementById('cards').appendChild(cardDiv);
        }

        for (let item of dataOceania) {
          let cardFront = document.createElement("div");
          cardFront.id = "frontcard";
          cardFront.textContent = item.name.common;
          document.getElementById('cardnames').appendChild(cardFront);
        }
      }
    })
  });
