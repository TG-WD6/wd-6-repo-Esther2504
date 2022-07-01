// fetch('./countries.json')
// .then(response => response.json())
// .then(data => {
//     data.forEach(countries => {
//     let country = (countries.country)
//     let city = (countries.city)
//     let newDiv = document.createElement("div");
// let city2 = document.createTextNode(country + city)
// newDiv.appendChild(city2);
// const currentDiv = document.getElementById("div1");
// document.body.insertBefore(newDiv, currentDiv);
//     }
//     )
// })


// let myDiv = document.createElement("p")
// let myDiv2 = document.createElement("p")
// myDiv.textContent = country;
// myDiv2.textContent = city;
// listElement.append(myDiv, myDiv2)

// const promise = fetch('./countries.json').then(response => response.json())
// promise.then()


const getData = async () => (await fetch('./allcountries.json')).json();

// var result = getData.filter((x)=>x.region === "Europe");
// console.log(result);

getData()
  .then(data => {
    let optionfilter = document.getElementById("continents").value;
    if (optionfilter === "none") {
      for (let item of data) {
        // item.region.filter(region => region === 'Europe');
        cards.innerHTML += `

<div class="card">
<p>Official: ${item.name.official}</p>
<p>Capital: ${item.capital}</p>
<p>Continent: ${item.region}</p>
<p>Subregion: ${item.subregion}</p>
</div>

`;
      }
      for (let item of data) {
        cardnames.innerHTML += `

<div class="frontcard">
<p>${item.name.common}</p>
</div>

`;
      }
    } else {

      // data = data.filter(item => item.continent === "Europe")
      // console.log(data)

      for (let item of data) {

        cards.innerHTML += `
  
  <div class="card">
  <p>Official: ${item.name.official}</p>
  <p>Capital: ${item.capital}</p>
  <p>Continent: ${item.region}</p>
  <p>Subregion: ${item.subregion}</p>
  </div>
  
  `;
      }
      for (let item of data) {
        cardnames.innerHTML += `
  
  <div class="frontcard">
  <p>${item.capital}</p>
  </div>
  
  `;
      }
    }
  });


