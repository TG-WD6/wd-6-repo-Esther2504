// Opdracht 5.1
let cijfers = [6, 2, 4, 1, 9, 10, 3, 8, 5, 7];
console.log(cijfers);

let fruit = ["Appel", "Aardbei", "Banaan", "Kiwi", "Mango"];
console.log(fruit);
console.log(fruit[0], fruit[1])

let random = cijfers[Math.floor(Math.random() * cijfers.length)];
console.log(fruit[random]);

console.log(fruit.length);

let remainder = fruit.length % cijfers.length;
let randommodulo = Math.floor(Math.random() * remainder);
console.log(fruit[randommodulo]);

fruit[0] = "Pear";
console.log(fruit);

fruit.splice(0, 2, "Aardbei", "Pear");
console.log(fruit);

console.log('----------------------');

// Opdracht 5.2
const dutchSports = ["Voetbal", "Hockey", "Schaatsen"];
console.log(dutchSports[0]);
console.log(dutchSports[1]);
console.log(dutchSports[2]);

for (const x in dutchSports) {
    console.log(x)
}

for (const x of dutchSports) {
    console.log(x)
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

for (i = 0; i < 21; i++) {
    if (i % 2 == 0) {
        console.log(i)
    }
}

// Met for...of
for (let i of numbers) {
    if (i % 2 == 0) {
        console.log(i)
    }
}

console.log('----------------------');

// Loops 1-10
for (let i = 0; i < 3; i++) {
    for (let j = 1; j < 11; j++) {
        console.log(j);
    }
}

console.log('----------------------');

// Opdracht 5.2 bullet 5
for (let i = 1; i < 4; i++) {
    for (let j = 1; j < 11; j++) {
        console.log(i * j)
    }
}

console.log('----------------------');

// Reeks van Fibonacci
let fibonacci = [0, 1];

for (let i = fibonacci.length; i <= 50; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2]; // i is het getal een en twee voor i opgeteld.
    console.log(fibonacci[i]);
}
console.log('----------------------');

// Bubble sort

let bubble = [2, 7, 5, 10, 4, 9, 3, 1, 8, 6];

for (var i = 0; i < bubble.length; i++) {
    for (var j = 0; j < bubble.length - 1; j++) {
        if (bubble[j] > bubble[j + 1]) { // Controleert of het getal na j kleiner is dan j
            [bubble[j], bubble[j + 1]] = [bubble[j + 1], bubble[j]]; // Wisselt getal j met het getal na j
        }
    }
}

// Dubbele loop zorgt ervoor dat de rij steeds opnieuw wordt afgegaan. De tweede loop heeft een -1 omdat je het 
// laatste nummer niet kan vergelijken met die daarna, dus hij stopt eerder

console.log(bubble);

console.log('----------------------');

// Opdracht 5.3
// Adds 3 items to array
const dutchSport = ["Voetbal", "Hockey", "Schaatsen"];
dutchSport.push("Zeilen", "Zwemmen");
dutchSport.unshift("Volleybal");

console.log(dutchSport);

// Puts ballsports in own var
const ballSports = dutchSport.slice(0, 3);
console.log(ballSports);

// Removes ballsports from dutchsports
dutchSport.splice(0, 3);
console.log(dutchSport);

// Puts items in abc order
dutchSport.sort();
ballSports.sort();
console.log(dutchSport);
console.log(ballSports);

// Logs individual items
ballSports.forEach(sport => console.log(sport))
dutchSport.forEach(sport => console.log(sport))

// Logs length of every item
const sportsLength = [dutchSport[0].length, dutchSport[1].length, dutchSport[2].length, ballSports[0].length, ballSports[1].length, ballSports[2].length]
console.log(sportsLength);


console.log('----------------------');

let petDog = {
    name: "Max",
    species: "Dog"
}

console.log(petDog);

let petCat = new Object();

petCat.name = "Ginger";
petCat.species = "Cat";

console.log(petCat);

function petFunction(name, species) {
    this.name = name
    this.species = species
}

let petRabbit = new petFunction("Flappie", "Rabbit");

console.log(petRabbit);

let petHorse = new function () {
    this.name = "Bob",
        this.species = "Horse"
}
console.log(petHorse);

class petSnake {
    constructor(name, species) {
        this.name = name;
        this.species = species;
        this.isAnAnimal()
    }

    isAnAnimal() {
        console.log(this.name + ' is a ' + this.species)
    }
}

const snake = new petSnake("Jafar", "snake")

console.log('----------------------');

let dogPet = Object.create(petDog, {
    name: {
        value: 'Max'
    },
    species: {
        value: 'Dog'
    }
}
)

console.log(dogPet)

let catPet = Object.create(petCat, {
    name: {
        value: 'Ginger'
    },
    species: {
        value: 'Cat'
    }
}
)

console.log(catPet)

let rabbitPet = Object.create(petRabbit, {
    name: {
        value: 'Flappie'
    },
    species: {
        value: 'Rabbit'
    }
}
)

console.log(rabbitPet)

let horsePet = Object.create(petHorse, {
    name: {
        value: 'Bob'
    },
    species: {
        value: 'Horse'
    }
}
)

console.log(horsePet)

let snakePet = Object.create(petSnake, {
    name: {
        value: 'Jafar'
    },
    species: {
        value: 'Snake'
    }
}
)

console.log(snakePet)
