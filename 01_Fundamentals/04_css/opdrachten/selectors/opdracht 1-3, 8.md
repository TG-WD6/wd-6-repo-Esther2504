## **Opdrachten**

<br>

### **Opdracht 1**

Je kunt op 3 verschillende manieren CSS in je HTML inladen. Op welke 3 manieren kun je dat doen? Leg ook voor elke wijze uit wat het precies inhoud.

_De eerste mogelijkheid is inline CSS. Hierbij wordt CSS op één element toegepast met behulp van de attribuut 'style'. In het voorbeeld is te zien hoe inline CSS de tekstkleur van het h3 element paars maakt._
```
<h3 style="color:purple;">Paarse tekst</h3>
```

_De tweede mogelijkheid is internal CSS. Internal CSS wordt geplaatst in de head tag van de HTML met het element 'style'._
```
<head>
<style> 
h1 {
    color:green;
}
h2 {
    font-size:30px;
}
</style>
</head>
<body>

<h1>Groene heading</h1>
<h2>30px heading</h2>

</body>
```
_In het voorbeeld krijgen door de CSS in de style tag in de head tag alle h1 elementen een groene tekstkleur en alle h2 elementen een font-size van 30px._

_External CSS is de laatste mogelijkheid, dit gebruikt men door de volgende code in de head tag te zetten:_
```
<link rel="stylesheet" type="text/css" href="filename.css">
```

_Filename wordt hierbij vervangen door de naam van de CSS file. De link verwijst naar een externe bron, de rel laat de relatie tussen documenten weten en type maakt duidelijk wat voor content er in de gelinkte file staat. Tenslotte wordt de href gebruikt voor de locatie van de file die ingeladen moet worden._


<br>

### **Opdracht 2**

CSS pas je toe met een bepaalde syntax. Hoe ziet zo'n syntax eruit? Kun je ook uitleggen wat elk element uit de syntax betekent?

_CSS Syntax bestaat uit een selector en uit declarations. In het voorbeeld is 'div' de selector, dit is het HTML element waar je een style op wil toepassen. 'color:white' en 'background-color:black' zijn in het voorbeeld de declarations. De declarations bestaan uit een property ('color' en 'background-color') en uit de values daarvan ('white' en 'black'). De property laat weten welk onderdeel van het element je wil aanpassen (in het voorbeeld kleur en achtergrondkleur) en de value waarin je dit wil veranderen (wit en zwart)._

```
div {
    color:white;
    background-color:black;
}
```


<br>

### **Opdracht 3**

Er zijn verschillende selectors, bijvoorbeeld;

* type selectors
* class selectors
* ID selectors
* descendant selectors

Maak van de bovengenoemde selectors voorbeelden. Geef in je antwoord ook aan wat de voordelen zijn van elke selector.

_Een type selector:_
```
h1 {
  color: red;
}
```
_Een voordeel van de type selector is dat je alle elementen van het gegeven type tegelijk kan aanpassen._


_Een class selector:_
```
.tigers {
  font-size:18px;
}
```
_Een voordeel van de class selector is dat één class op meerdere elementen kan worden geplaatst. Zo kan je op verschillende plaatsen in de code dezelfde CSS toepassen zonder dit voor ieder element apart te beschrijven._


_Een ID selector:_
```
#lions {
  background-color: gray;
}
```
_Het voordeel van de ID selector is dat een ID op enkel één element kan worden toegepast. Op deze manier zul je niet onbedoeld dezelfde CSS toepassen op meerdere elementen._

_Een descendant selector:_
```
h1 p {
  color: red;
}
```
_Het voordeel van de descendant selector is dat je de CSS kan toepassen op een element die binnen een andere element zit. Als je bijvoorbeeld een style wil toepassen op alle p tags binnen een h1 element, kan je er op deze manier voor zorgen dat je de style niet wordt toegepast op p tags buiten het h1 element._

### **Opdracht 8**

Leg in eigen woorden uit wat met cascade en inheritance wordt bedoeld. Maak voorbeelden om je antwoord uit te leggen.

_Cascade gaat over de volgorde van CSS regels. De regel die het laatst in de CSS staat, wordt gebruikt. Bijvoorbeeld:_

```
div {
  background-color: green;
}
div {
  background-color: purple;
}
```

_In dit geval zal de achtergrondkleur van de div paars worden, omdat deze als laatst in de CSS staat. Higher specificity kan deze volgorde overschrijden, bijvoorbeeld door een class of id aan één van de divs toe te voegen. Daarnaast kan je met !important alles overschrijden._

_Inheritance houdt in dat soms het zetten van een CSS property op een parent element ervoor zorgt dat het ook van toepassing is op alle child elements van deze parent. Als je bijvoorbeeld de font kleur van de body verandert, zullen alle elementen binnen de body deze zelfde font kleur toepassen. In het voorbeeld zouden de tekstkleur van h1 en p allebei bruin zijn omdat hun parent element, body, deze value heeft._

```
<head>
<style>
body {
  color: brown;
}
</style>
</head>

<body>
<h1>Deze tekst is bruin</h1>
<p>Deze tekst is ook bruin</p>
</body>
```
