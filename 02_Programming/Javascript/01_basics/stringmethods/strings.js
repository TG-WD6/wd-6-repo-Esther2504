// Opdracht 2.1
let someKittens = "De poes van de buurman heeft kittens gehad! Hij vraagt of wij nog kittens willen.";
let poesBuurman = someKittens.slice(0,43);
let kittensVraag = someKittens.slice(44,81);
console.log(poesBuurman);
console.log(kittensVraag);
console.log(someKittens.toUpperCase());
console.log(someKittens.charAt(29));
console.log(someKittens.charAt(35)); 

// Opdracht 2.2
let testString = "Dit is een test.";
console.log(testString.substring(3,1));
console.log(testString.slice(3,1));
console.log(testString.substring(3,-1));
console.log(testString.slice(3,-1)); 

// Opdracht 2.3
let someKittens = "Die nieuwe kittens zijn zo schattig!";
let anArray = someKittens.split(" ");
console.log(anArray); 