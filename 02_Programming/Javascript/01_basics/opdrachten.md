## **Java/script Opdrachten**

<br>

### **Opdracht 1.1**
_We onderzoeken het verschil tussen var, let en const. Gegeven zijn een aantal voorbeelden - schrijf eerst je verwachtingen op voordat je ze zelf nabootst. Kijk vervolgens wat er bij jou in de console gelogd wordt - is dat wat je verwachtte? Zo nee, deel het dan aan het einde van de dag met je groep._

a) Ik verwacht dat "Let Tekst Twee" in de console gelogd wordt.<br>
b) Ik verwacht dat beide teksten gelogd worden in de console.<br>
c) Ik verwacht dat alleen de eerste tekst gelogd wordt en dat er een foutmelding wordt gegeven omdat je de 'const' variabel niet kan veranderen.<br>
d) Ik verwacht dat de eerste tekst "Var Tekst" een foutmelding geeft omdat er geen variabel voor staat, en dat de tweede en derde tekst wel in de console worden gelogd.<br>

Resultaat:<br>
a) De console geeft een SyntaxError omdat 'letOefening' al geidentificeerd is. Mijn verwachting klopte dus niet.<br>
b) Ook hier geeft de console een SyntaxError, nu omdat 'letOefening' al gedeclareerd was. Mijn verwachting klopte dus niet.<br>
c) De console logged de eerste tekst en geeft een TypeError voor de tweede tekst. Mijn verwachting klopte dus.<br>
d) Alle drie de teksten worden gelogd in de console. Mijn verwachting klopte dus niet.<br>

### **Opdracht 1.2**
_Wat zie je in de console? Was dat wat je verwachtte?_<br>
Mijn verwachting: "This is a string, with the value: Number"<br>
Mijn verwachting klopte, dit is wat je ziet in de console.

_Vervang bij het voorbeeld “Number” door de volgenden:_
- true: Geeft 'boolean'  i.p.v. 'string' (mits er geen aanhalingstekens rond 'true' staan).  
- false: Geeft 'boolean'  i.p.v. 'string'.
- undefined: Geeft 'undefined'  i.p.v. 'string'.
- 22: Geeft 'number'  i.p.v. 'string'.
- 22n: Geeft 'begint'  i.p.v. 'string'. Ook logged de console de value '22' i.p.v. '22n'.
- Symbol(): Dit geeft een TypeError, het kan geen Symbol value toewijzen aan een string.
- null: Geeft 'object'  i.p.v. 'string'.
- {}: Geeft als datatype 'object' met als value [object Object].
- new Object(): Geeft hetzelfde resultaat als {}.
- function calculateSomething() {}: Geeft als resultaat: "This is a function, with the value: function calculateSomething() {}"

### **Opdracht 1.3**
1. _Wat komt hier uit?_
Hier komt '55' uit, omdat de tweede 5 door de aanhalingstekens als een string wordt gezien en daardoor als tekst naast de andere 5 wordt geplaatst.

2. _Wat komt er uit als je van beiden een number maakt?_
Dan komt er '10' uit, doordat het beide nummers zijn wordt de '+' gebruikt om ze op te tellen.

3. _Wat komt er uit als je de + vervangt door:_
- "==": Hier komt 'true' uit, de == kijkt of de values hetzelfde zijn.
- "===": Hier komt ook 'false' uit. De === kijkt of beide de datatypes en values hetzelfde zijn. Wanneer je de aanhalingstekens van de ene 5 weghaalt, komt hier 'true' uit.
- "!=": Hier komt 'false' uit, want de values zijn gelijk.
- "!==": Hier komt 'true' uit, want de datatypes zijn verschillend.

### **Opdracht 1.4**
_We gaan operators wat nader onderzoeken, en ermee experimenteren._

1. _Wat komt er uit het volgende?_
Uit allebei de consoles komt '2'. De '++' telt namelijk 1 op bij de value.

2. _Wat komt er uit als je de console.log() hierboven omdraait?_
Nu komt er '1' uit de eerste en '2' uit de tweede. De increment na de value geeft de originele value van de variabel, terwijl een increment voor de value de value na de increment terug geeft.

3. _Wat komt er uit het volgende?_
Uit de modulo komt 4, uit de division komt 2.4. De division deelt de nummbers simpelweg, terwijl de modulo de waarde die overblijft na het delen terugkeert.

4. _Wat komt er uit het volgende?_
Hier komt 'false' uit. Het uitroepteken controleert of de variabel true of false is.

5. _Wat komt er uit bovenstaand als je de waarde van someNumber verandert in:_
- 5: Hier komt 'false' uit.
- Boolean: Hier komt 'false' uit.
- false: Hier komt 'true' uit.
- “false”: Hier komt 'false' uit.
- true: Hier komt 'false' uit.
- “true”: Hier komt 'false' uit.
- null: Hier komt 'true' uit.
- undefined: Hier komt 'true' uit.

6. _Zoek op of experimenteer wat "+=" doet. Werkt deze ook met Strings? Weet je hoe je deze anders kan schrijven?_
De '+=' kun je values bij elkaar optellen. Het werkt dus als de '+', alleen hoef je hierbij niet de variabel te herhalen. Voorbeeld:

```
let someNumber = 6
someNumber += 4;
```
In de tweede regel staat op deze manier '6 + 4'. Hoe je het ook kan schrijven, waarbij de wel de variable moet herhalen:

```
let someNumber = 6
someNumber = someNumber + 4;
```

Het werkt ook bij strings, hier komt bijvoorbeeld "Hello Esther" uit:

```
let greeting = "Hello"
greeting += " Esther"

```

7. _Doe hetzelfde voor "-=", "*=", "/=", "%=" en "**="._
Dit werkt hetzelfde als de '+=', alleen worden de values hierbij afgetrokken (-=), vermenigvuldigd (*=), gedeeld (/=) en wordt de overgebleven waarde teruggekeerd (%=). De **== staat voor tot de macht.

<br>

### **Opdracht 2.1**
1. _Splits de String met een string method op in 2 aparte zinnen. Stop beiden in een aparte variabele._
```
let someKittens = "De poes van de buurman heeft kittens gehad! Hij vraagt of wij nog kittens willen.";
let poesBuurman = someKittens.slice(0,43);
let kittensVraag = someKittens.slice(44,81);
```

2. _Zo’n geweldig nieuws verdient upper case. Zet someKittens om naar hoofdletters._
```
console.log(someKittens.toUpperCase())
```

3. _Geef de eerste en laatste index van het woord “kittens” in de variabele someKittens._
4. _Gebruik charAt() op beiden. Welk teken krijg je terug?_
```
console.log(someKittens.charAt(29));
console.log(someKittens.charAt(35));
```
De tekens 'k' en 's'.

<br>

### **Opdracht 2.2**
_substring() en slice() lijken erg op elkaar. We onderzoeken de verschillen. Test dit met een eigen string, of gebruik het vorige voorbeeld. substring() en slice() kunnen 2 waardes meegegeven worden - een index waar de nieuwe waarde begint en een index waar deze moet eindigen._

1. _Wat doet substring() als het eerste getal hoger is dan het tweede getal?_
Substring geeft de tekens die tussen deze getallen staan terug, ondanks de volgorde van de getallen.

2. _Wat doet slice() als het eerste getal hoger is dan het tweede getal?_
Er wordt niets teruggegeven.

_Deze waardes hoeven niet per se positief te zijn - je kan ook negatieve getallen meegeven._

3. _Wat doet substring() bij negatieve waardes?_
Substring ziet negatieve waardes als '0', oftewel het eerste teken van de string.

4. _Wat doet slice() bij negatieve waardes?_
Slice telt bij een negatieve waarde terug vanaf het einde van de string.

<br>

### **Opdracht 2.3**
_Gebruik split() om alle woorden apart in een Array te zetten._

```
let someKittens = "Die nieuwe kittens zijn zo schattig!";
let anArray = someKittens.split(" ");
console.log(anArray);
```

<br>

### **Opdracht 3.1**
1. _Wat is het verschil tussen == en ===?_
De == controleert alleen of de values overeenkomen, terwijl de === controleert of beide de datatypes en values hetzelfde zijn.

2. _Wat is het verschil tussen > en >=? En tussen < en <=?_
Het verschil is dat terwijl de > kijkt of de eerste value groter is dan de andere value, => kijkt of de value groter OF gelijk is aan de andere value. Bijvoorbeeld, met de > is een 8 niet groter dan 8:

```
let numberEight = 8;
if (numberEight > 8) {
    console.log("That's false!")
}
```
Maar een 8 is wel gelijk aan 8, waardoor het met een => wel waar is:
```
let numberEight = 8;
if (numberEight => 8) {
    console.log("That's true!")
}
```
Ditzelfde geldt voor < en <=, alleen wordt hier gekeken of de eerste value kleiner is dan de andere value.

3. _Schrijf de If conditie zo, dat je alleen “Result!” ziet als x==4 en y==8_
```
let x = 4;
let y = 8;
if (x == 4 && y==8) {
    console.log("Result!");
}
```

4. _Schrijf het nu zo dat je alleen “Result!” ziet als x==4 OF y==8_
```
let x = 4;
let y = 8;
if (x == 4 || y==8) {
    
} else {
console.log("Result!");
}
```

5. _Zet nu de console.log(“Results”) in een Else { } na de If. Kan je de conditie omdraaien zodat je alsnog “Results!” te zien krijgt?_
```
let x = 4;
let y = 8;
if (!(x == 4 || y==8)) {
    
} else {
console.log("Result!");
}
```

6. _Kan je het vorige antwoord ook geven zonder || te gebruiken?_
```
let x = 4;
let y = 8;
if (!(x == 4 && y==8)) {
    
} else {
console.log("Result!");
}
```

_Schrijf voor de volgende opdrachten 1 If/Else die 1 variabele waarde controleert, en zorg voor het volgende:_

7. _Log het in je console als de waarde groter dan 5 EN kleiner dan 10 is._
8. _Zo niet, log dan in je console als de waarde 11 of groter EN 20 of kleiner is._
9. _Zo niet, log dan in je console als de waarde 21 of 23 is._
10. _Zo niet, log dan in je console als de waarde kleiner dan 35 OF tussen de 40 en 45 is._
11. _Test of je bij alle uitkomsten kan komen. Verandert er iets als je alle If/Else omzet in aparte If blokken?_

```
let x = 34;

if ((x > 5) && (x < 10)) {
console.log("De waarde is tussen 5 en 10");
} else if ((x => 11) && (x <= 20)) {
console.log("De waarde is tussen 11 en 20");
} else if ((x == 21) || (x == 23)) {
console.log("De waarde is 21 of 23");
} else if ((x < 35) || ((x > 40) && (x < 45))) {
console.log("De waarde is onder 35 of tussen 40 en 45");
}
```

Bij het plaatsen van de if/else in aparte if blokken worden er verschillende uitkomsten gelogd. Als de waarde bijvoorbeeld '8' is, wordt niet alleen "De waarde is tussen 5 en 10" gelogd, maar ook "De waarde is onder 35 of tussen 40 en 45", omdat de waarde onder de 35 is en de condition 'if ((x > 5) && (x < 10))' niet ziet.

### **Opdracht 3.2**
1. _Schrijf een If/Else blok die een eigen variabele controleert:_

- Gelijk aan 3?
- Groter dan 4?
- Groter dan 11?
- Kleiner dan 3?

```
let x = 3;

if (x == 3) {
console.log("De waarde is 3");
} else if ((x > 4) && (x < 12)) {
console.log("De waarde is hoger dan 4");
} else if (x > 11) {
console.log("De waarde is hoger dan 11");
} else if (x < 3) {
console.log("De waarde is lager dan 3");
}
```

2. _Test je variabele met 2, 3, 4, 5 en 20. Gebeurt er iets onverwachts?_
In het eerste geval gaf de console bij getallen boven de 11 als resultaat "De waarde is hoger dan 4" i.p.v. "De waarde is hoger dan 11". Dit heb ik opgelost door bij het controleren over het resultaat hoger dan 4 is, ook te controleren of het resultaat lager dan 12 is.

3. _Schrijf een If/Else die een variabele op numerieke waarde controleert, en de passende maand in je console logt._
```
let x = 17;

if (x == 1) {
    console.log("Januari");
} else if (x == 2) {
    console.log("Februari");
} else if (x == 3) {
    console.log("Maart");
} else if (x == 4) {
    console.log("April");
} else if (x == 5) {
    console.log("Mei");
} else if (x == 6) {
    console.log("Juni");
} else if (x == 7) {
    console.log("Juli");
} else if (x == 8) {
    console.log("Augustus");
} else if (x == 9) {
    console.log("September");
} else if (x == 10) {
    console.log("Oktober");
} else if (x == 11) {
    console.log("November");
} else if (x == 12) {
    console.log("December");
} else {
    console.log("Geen geldige maand!");
}
```

4. _Bouw nu opdracht C met een Switch/case._
```
let x = 12;
switch (x) {
    case 1:
        console.log("Januari");
        break;
    case 2:
        console.log("Februari");
        break;
    case 3:
        console.log("Maart");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("Mei");
        break;
    case 6:
        console.log("Juni");
        break;
    case 7:
        console.log("Juli");
        break;
    case 8:
        console.log("Augustus");
        break;
    case 9:
        console.log("September");
        break;
    case 10:
        console.log("Oktober");
        break;
    case 11:
        console.log("November");
        break;
    case 12:
        console.log("December");
        break;
    default:
        console.log("Geen geldige maand!");
}
```

5. _Gegeven de volgende code. Herschrijf dit als een Ternary Operator._
```
let x = 3;
((x<=4) && (x>=0)) ? results = 2 : results = 5;
console.log(results);
```

### **Opdracht 4.2**
1. _Onderzoek de volgende DOM methodes en gebruik ze in een voorbeeld:_
- document.getElementsByClassName:
Dit werkt net als document.getElementsById, alleen i.p.v. met een id wordt een element op basis de classnaam geselecteerd.

```
<button class="button"></button>
<script>
let button = document.getElementsByClassName('button');
</script>
```

- document.getElementsByTagName
Hierbij wordt een element geselecteerd op basis van de tag naam.
```
<p>Een stuk tekst</p>
<script>
let text = document.getElementsByClassName('p');
</script>
```

- document.querySelector
Hierbij wordt enkel het eerste element geselecteerd met een bepaalde tag, id of class.
```
<button class="button"></button>
<script>
let button = document.querySelector('.button');
</script>
```

- document.querySelectorAll
Hierbij worden alle elementen met een overeenkomende tag, id of class geselecteerd.
```
<button class="blue"></button>
<div class="blue"></div>
<script>
let color = document.querySelectorAll('.blue');
</script>
```

- element.innerHTML
Hiermee kan je de content van een element selecteren en op deze wijze ook aanpassen.
```
<p class="text">Dit is tekst</p>

<script>
 document.getElementsByClassName('text').innerHTML = "De tekst verander ik hierin";
</script>
```

- element.innerText
Hiermee kan je de tekst content van een element selecteren.
```
<button class="button">Tekst binnen een button</button>

<script>
let text = document.getElementByClassName("button").innerText;
console.log(text);
</script>
```

2. _Bij opdracht 4.1c heb je een input als parameter meegegeven. Roep die functie nu aan met een oninput ipv onchange, en console.log() de parameter.value ipv de parameter. Zie je de verschillen als je nu wat intypt?_ 