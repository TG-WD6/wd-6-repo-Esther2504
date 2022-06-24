let people = [
    {
        name: "Matthew",
        age: "32"
    },
    {
        name: "Isabella",
        age: "21"
    },
    {
        name: "Joas",
        age: "23"
    },
    {
        name: "Amber",
        age: "41"
    },
    {
        name: "Jenny",
        age: "28"
    },
    {
        name: "Peter",
        age: "71"
    },
    {
        name: "Sarah",
        age: "53"
    },
    {
        name: "Thomas",
        age: "37"
    },
    {
        name: "Dylan",
        age: "26"
    },
    {
        name: "Kim",
        age: "39"
    },

]

// console.log(JSON.stringify(people)[0].age)

// people.forEach(person => {
//     console.log(person.name, person.age)
// }
// )

console.log(people)

console.log(Object.values(people)[1].age);

for (var j = 0; j < 10; j++) {
    for (var i = 0; i < 10 - 1; i++) {
        if (Object.values(people)[i].age > Object.values(people)[i + 1].age) {
            Object.values(people)[i].age, Object.values(people)[i + 1].age = Object.values(people)[i + 1].age, Object.values(people)[i].age; //
        }
    }
}
console.log(people)

var sorted = people.sort(function sortAge(a, b) {
    if (a.age < b.age) {
        return -1;
    }
    else if (a.age > b.age) {
        return 1;
    }
    return 0;
})
console.log(sorted);



// console.log(people.splice(1, 2, people[1], people[2]))

// people[age].sort()



console.log('-----------6.2-----------');

// Opdracht 6.2


class Contact {
    constructor(adres, nummer, contactpersoon) {
        this.adres = adres
        this.nummer = nummer
        this.contactpersoon = contactpersoon
    }
}
class Club {
    constructor(naam, type, ledenaantal, contact) {
        this.naam = naam
        this.type = type
        this.ledenaantal = ledenaantal
        this.contact = contact
    }

}

//

const contactajax = new Contact("Beukenlaan 34", "0632983973", "Jan Jansen")
const contactfeyenoord = new Contact("Jagersstraat 9", "0698399774", "Piet Pietersen")
const contactutrecht = new Contact("Rozenweg 92", "0638958903", "Lisa Loos")
const contactaz = new Contact("Penguinstraat 21", "0639759374", "Tom Tobasson")
const contacttwente = new Contact("Saladesingel 54", "0639840393", "Anna Appel")

const clubarray = [
    new Club("Ajax", "Voetbalclub", "110.000", contactajax),
    new Club("Feyenoord", "Voetbalclub", "80.000", contactfeyenoord),
    new Club("FC Utrecht", "Voetbalclub", "30.000", contactutrecht),
    new Club("AZ", "Voetbalclub", "40.000", contactaz),
    new Club("FC Twente", "Voetbalclub", "20.000", contacttwente)
]

console.log(clubarray)

const contact = new Contact("randomstraat 34", "0632983973", "Jan Jansen")

clubarray.forEach(club => {
    for (let i = 0; i < 1; i++) {
        console.log(`De naam van de club is ${club.naam}, het telefoonnummer ${contact.nummer} en het contactpersoon is ${contact.contactpersoon}`);
    }
});

const ajax = new Club("Ajax", "Voetbalclub", "80.000", contact)
const feyenoord = new Club("Feyenoord", "Voetbalclub", "80.000", contact)
feyenoord.contact.contactpersoon = "John Smith"
console.log(ajax.contact.contactpersoon)