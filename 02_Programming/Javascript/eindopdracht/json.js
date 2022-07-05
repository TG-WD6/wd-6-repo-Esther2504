const getData = async () => (await fetch('./allcountries.json')).json();

getData()
  .then(data => {
    let data_europe = data.filter(element => element.region == "Europe")
    let data_asia = data.filter(element => element.region == "Asia")
    let data_antartica = data.filter(element => element.region == "Antarctic")
    let data_americas = data.filter(element => element.region == "Americas")
    let data_africa = data.filter(element => element.region == "Africa")
    let data_oceania = data.filter(element => element.region == "Oceania")

    for (let item of data) {
      let carddiv = document.createElement("div");
      carddiv.id = "infocards";
      carddiv.setAttribute('style', 'white-space: pre-line;');
      carddiv.textContent = `Official: ${item.name.official} \r\n`
      carddiv.textContent += `Capital: ${item.capital} \r\n`;
      carddiv.textContent += `Continent: ${item.region} \r\n`;
      carddiv.textContent += `Subregion: ${item.subregion}`;
      document.getElementById('cards').appendChild(carddiv);
    }

    for (let item of data) {
      let frontcard = document.createElement("div");
      frontcard.id = "frontcard";
      frontcard.textContent = item.name.common;
      document.getElementById('cardnames').appendChild(frontcard)
    }
    document.getElementById('clear').addEventListener('click', function () {
      document.getElementById('cards').textContent = "";
      document.getElementById('cardnames').textContent = "";
      document.getElementById('amount').innerText = data.length;
      document.getElementById('continents').value = "none";
      for (let item of data) {
        let carddiv = document.createElement("div");
        carddiv.id = "infocards";
        carddiv.setAttribute('style', 'white-space: pre-line;');
        carddiv.textContent = `Official: ${item.name.official} \r\n`
        carddiv.textContent += `Capital: ${item.capital} \r\n`;
        carddiv.textContent += `Continent: ${item.region} \r\n`;
        carddiv.textContent += `Subregion: ${item.subregion}`;
        document.getElementById('cards').appendChild(carddiv);
      }

      for (let item of data) {
        let frontcard = document.createElement("div");
        frontcard.id = "frontcard";
        frontcard.textContent = item.name.common;
        document.getElementById('cardnames').appendChild(frontcard)
      }
    })
    document.getElementById('generate').addEventListener('click', function () {

      let optionfilter = document.getElementById("continents");

      
      if (optionfilter.value === "Africa") {
        document.getElementById('amount').innerText = data_africa.length;
        document.getElementById('cards').textContent = "";
        document.getElementById('cardnames').textContent = "";
        for (let item of data_africa) {

          let carddiv = document.createElement("div");
          carddiv.id = "infocards";
          carddiv.setAttribute('style', 'white-space: pre-line;');
          carddiv.textContent = `Official: ${item.name.official} \r\n`
          carddiv.textContent += `Capital: ${item.capital} \r\n`;
          carddiv.textContent += `Continent: ${item.region} \r\n`;
          carddiv.textContent += `Subregion: ${item.subregion}`;
          document.getElementById('cards').appendChild(carddiv);


        }

        for (let item of data_africa) {

          let frontcard = document.createElement("div");
          frontcard.id = "frontcard";
          frontcard.textContent = item.name.common;
          document.getElementById('cardnames').appendChild(frontcard)
        }
      } else if (optionfilter.value === "Americas") {
        document.getElementById('amount').innerText = data_americas.length;
        document.getElementById('cards').textContent = "";
        document.getElementById('cardnames').textContent = "";
        for (let item of data_americas) {
          let carddiv = document.createElement("div");
          carddiv.id = "infocards";
          carddiv.setAttribute('style', 'white-space: pre-line;');
          carddiv.textContent = `Official: ${item.name.official} \r\n`
          carddiv.textContent += `Capital: ${item.capital} \r\n`;
          carddiv.textContent += `Continent: ${item.region} \r\n`;
          carddiv.textContent += `Subregion: ${item.subregion}`;
          document.getElementById('cards').appendChild(carddiv);
        }

        for (let item of data_americas) {
          let frontcard = document.createElement("div");
          frontcard.id = "frontcard";
          frontcard.textContent = item.name.common;
          document.getElementById('cardnames').appendChild(frontcard)
        }
      } else if (optionfilter.value === "Antartica") {
        document.getElementById('amount').innerText = data_antartica.length;
        document.getElementById('cards').textContent = "";
        document.getElementById('cardnames').textContent = "";
        for (let item of data_antartica) {
          let carddiv = document.createElement("div");
          carddiv.id = "infocards";
          carddiv.setAttribute('style', 'white-space: pre-line;');
          carddiv.textContent = `Official: ${item.name.official} \r\n`
          carddiv.textContent += `Capital: ${item.capital} \r\n`;
          carddiv.textContent += `Continent: ${item.region} \r\n`;
          carddiv.textContent += `Subregion: ${item.subregion}`;
          document.getElementById('cards').appendChild(carddiv);
        }

        for (let item of data_antartica) {
          let frontcard = document.createElement("div");
          frontcard.id = "frontcard";
          frontcard.textContent = item.name.common;
          document.getElementById('cardnames').appendChild(frontcard)
        }
      } else if (optionfilter.value === "Asia") {
        document.getElementById('amount').innerText = data_asia.length;
        document.getElementById('cards').textContent = "";
        document.getElementById('cardnames').textContent = "";
        for (let item of data_asia) {
          let carddiv = document.createElement("div");
          carddiv.id = "infocards";
          carddiv.setAttribute('style', 'white-space: pre-line;');
          carddiv.textContent = `Official: ${item.name.official} \r\n`
          carddiv.textContent += `Capital: ${item.capital} \r\n`;
          carddiv.textContent += `Continent: ${item.region} \r\n`;
          carddiv.textContent += `Subregion: ${item.subregion}`;
          document.getElementById('cards').appendChild(carddiv);
        }

        for (let item of data_asia) {
          let frontcard = document.createElement("div");
          frontcard.id = "frontcard";
          frontcard.textContent = item.name.common;
          document.getElementById('cardnames').appendChild(frontcard)
        }
      } else if (optionfilter.value === "Europe") {
        document.getElementById('amount').innerText = data_europe.length;
        document.getElementById('cards').textContent = "";
        document.getElementById('cardnames').textContent = "";
        for (let item of data_europe) {
          let carddiv = document.createElement("div");
          carddiv.id = "infocards";
          carddiv.setAttribute('style', 'white-space: pre-line;');
          carddiv.textContent = `Official: ${item.name.official} \r\n`
          carddiv.textContent += `Capital: ${item.capital} \r\n`;
          carddiv.textContent += `Continent: ${item.region} \r\n`;
          carddiv.textContent += `Subregion: ${item.subregion}`;
          document.getElementById('cards').appendChild(carddiv);
        }

        for (let item of data_europe) {
          let frontcard = document.createElement("div");
          frontcard.id = "frontcard";
          frontcard.textContent = item.name.common;
          document.getElementById('cardnames').appendChild(frontcard)
        }
      } else if (optionfilter.value === "Oceania") {
        document.getElementById('amount').innerText = data_oceania.length;
        document.getElementById('cards').textContent = "";
        document.getElementById('cardnames').textContent = "";
        for (let item of data_oceania) {
          let carddiv = document.createElement("div");
          carddiv.id = "infocards";
          carddiv.setAttribute('style', 'white-space: pre-line;');
          carddiv.textContent = `Official: ${item.name.official} \r\n`
          carddiv.textContent += `Capital: ${item.capital} \r\n`;
          carddiv.textContent += `Continent: ${item.region} \r\n`;
          carddiv.textContent += `Subregion: ${item.subregion}`;
          document.getElementById('cards').appendChild(carddiv);
        }

        for (let item of data_oceania) {
          let frontcard = document.createElement("div");
          frontcard.id = "frontcard";
          frontcard.textContent = item.name.common;
          document.getElementById('cardnames').appendChild(frontcard)
        }
      }
    })
  });
