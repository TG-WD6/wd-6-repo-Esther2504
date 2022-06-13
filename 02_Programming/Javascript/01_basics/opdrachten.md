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