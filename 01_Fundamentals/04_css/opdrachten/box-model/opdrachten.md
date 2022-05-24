## **Opdrachten**

<br>

### **Opdracht 1**
Wat zijn de eigenschappen van block boxes en inline boxes?

_Block boxes nemen de gehele beschikbare breedte van de container in. Ze beginnen altijd op een nieuwe regel. Door padding, margin en border zit er automatisch ruimte tussen de box en omringende elementen. Een aantal properties hebben automatisch 'block' als display type, zoals de p en h1 tag._

_Inline boxes beginnen niet op een nieuwe regel. De verticale padding, margin en border duwen omringende elementen niet weg, maar de horizontale padding, margin en border duwen andere inline boxes wel weg._

<br>

### **Opdracht 3**
Wat gebeurt er als je een width en een height toevoegt aan de span tag ( `<span>` ) van vorige opdracht?

_Er gebeurt niks, de breedte en hoogte worden niet aangepast._

<br>

### **Opdracht 4**
Leg uit wat de volgende termen betekenen: content, padding, margin en border.

_Content: Het gebied waar je content, de inhoud, in staat._
_Padding: De padding is de ruimte tussen de border en de content. Zo kun je de content dichterbij of verder weg van de rand zetten._
_Margin: De margin is de ruimte tussen het element en de omringende elementen. Zo kun je de ruimte tussen elementen vergroten of verkleinen._
_Border: Dit is de rand van het element en zit tussen de margin en padding in._

<br>

### **Opdracht 5**
Als je ruimte wilt maken tussen de border en content, welke css property gebruik je dan? Maak een voorbeeld in je antwoord.

_Daar gebruik je de property padding voor. Bijvoorbeeld:_

```
<head>
<style>
div {
    padding: 30px;
}
</style>
</head>
<body>
<div>
<p>Content</p>
</div>
</body>
```

<br>
### **Opdracht 6**
Als je ruimte wilt maken tussen de border en buiten de box, welke css property gebruik je dan? Maak een voorbeeld in je antwoord.

_Daar gebruik je de property margin voor. Bijvoorbeeld:_

```
<head>
<style>
div {
    margin: 30px;
}
</style>
</head>
<body>
<h1>Andere box</h1>
<div>
<p>Content</p>
</div>
</body>
```

### **Opdracht 7**
Maak nu een blok met width: 100px, height: 100px, margin: 5px, padding 5px en border-width: 5px.
_Zie opdracht7.html_

1. Hoe breed is de box?
_120px, namelijk de width (100px), de padding (2 keer 5px) en de border (2 keer 5px)._

2. Hoe hoog is de box?
_120px, namelijk de height (100px), de padding (2 keer 5px) en de border (2 keer 5px)._

3. Wat merk je op met width en height?
_In het eerste geval had ik de width, margin, padding en border opgeteld en kwam op 115px uit. Na te inspecteren in de browser realiseerde ik dat je de padding en border twee keer moet meerekenen omdat ze aan de linker en rechter kant van de content zitten. Ook zag ik dat de margin niet meetelt voor de width en height van de box._

### **Opdracht 8**
Welke CSS property kun je gebruiken om ervoor te zorgen dat de waarde van width en height de totale breedte en hoogte is van het blok van de voorgaande opdracht?

_Dit kan door display:block te gebruiken._