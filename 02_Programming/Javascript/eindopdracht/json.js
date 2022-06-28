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


const getData = async() => (await fetch('./countries.json')).json();

getData()
  .then(data => {
    for (let item of data) {
      toAppend.innerHTML += `

<div class="card">
<p>Country: ${item.country}</p>
<p>City: ${item.city}</p>
</div>

`;
    }
  });