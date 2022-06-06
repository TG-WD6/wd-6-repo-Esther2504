## **Opdrachten**

<br>

### **Opdracht 1**
Er zijn 14 verschillende pseudo-elementen. Beschrijf ze alle 14 kort en maak voor elk een voorbeeld

* ::after
_Met 'after' kun je content achter het geselecteerde element plaatsen. In het voorbeeld wordt 'after' gebruikt om tekst achter de <p> te zetten._

```
<head>
<style>
p::after {
    content: " Deze tekst komt achter 'Een random stuk tekst' te staan."
}
</style>
</head>
<body>
<p>Een random stuk tekst.</p>
</body>
```

* ::backdrop
_Met dit pseudo element plaats je content achter het geselecteerde content. Het bedekt de gehele viewport en gaat in werking zodra het element in fullscreen komt. In het voorbeeld wordt de achtergrondkleur van de video blauw zodra het in fullscreen mode zit._

```
<head>
<style>
video::backdrop {
    content: " ";
    background:blue;
}
</style>
</head>
<body>
<video></video>
</body>
```

* ::before 
_Dit werkt hetzelfde als 'after', alleen wordt de content hierbij voor het geselecteerde element geplaatst._
```
<head>
<style>
p::before {
    content: " Deze tekst komt voor 'Een random stuk tekst' te staan."
}
</style>
</head>
<body>
<p>Een random stuk tekst.</p>
</body>
```
* ::cue & ::cue-region
_De cue pseudo kan worden gebruikt om style captions en andere cues aan te passen bij media tracks met het WebVTT format. In het voorbeeld wordt de cue groen van kleur met een paarse achtergrond. Bij cue-region wordt een hele set cues aangepast._

```
* ::cue {
  color: green;
  background-color: purple;
}
```

* ::first-letter 
_Deze pseudo wordt gebruikt om de style van de eerste letter van een block-level element aan te passen. In het voorbeeld krijgt de eerste letter van de H1 heading een andere kleur, achtergrondkleur en font-size dan de rest van de heading tekst._

```
<head>
<style>
h1::first-letter {
    color: pink;
    background-color: green;
    font-size: 20px;
}
</style>
</head>
<body>
<h1>De eerste letter, een D, ziet er nu anders uit.</h1>
</body>
```

* ::first-line
_Deze pseudo wordt gebruikt om de style van de eerste regel van een block-level element aan te passen. In het voorbeeld krijgt de eerste regel van het p element een andere kleur, achtergrondkleur en font-size dan de rest van de heading tekst._

```
<head>
<style>
p::first-line {
    color: yellow;
    background-color: red;
    font-size: 13px;
}
</style>
</head>
<body>
<p>Deze regel heeft een andere styling dan de andere zinnen.
Deze regel is weer normaal gestyled.</p>
</body>
```

* ::file-selector-button
_Deze pseudo past de styling aan van de button van een 'input' element met de 'type="file"'. In het voorbeeld wordt de button om files up te loaden groen van kleur met een blauwe border._

```
<head>
<style>
input[type=file]::file-selector-button {
    border: 3px solid blue;
    background-color: green;
}
</style>
</head>
<body>
<input type="file">
</body>
```

* ::grammar-error 
_Met deze pseudo worden grammaticaal incorrecte teksten die door de browser zijn geconstateerd gehighlight. In het voorbeeld zal de fout dikgedrukt en rood van kleur worden._
```
<head>
<style>
::grammar-error {
  font: bold;
  color: red;
}
</style>
</head>
<body>
<p>Deze tekst bevatten een grammaticale fout.</p>
</body>
```

* ::marker
_Deze pseudo past de marker van een list item aan, dit is vaak een cijfer of bolletje. In het voorbeeld zullen de cijfers bruin worden en veranderen van grootte._

```
<head>
<style>
li::marker {
  color: brown;
  font-size: 10px;
}
</style>
</head>
<body>
<ol>
<li>Item 1</li>
<li>Item 2</li>
<li>Item 3</li>
</ol>
</body>
```

* ::part()
_Met deze pseudo kan je elementen met een part attribuut binnen een shadow tree aanpassen._
```
<head>
<style>
::part(test) {
  color: green;
}
</style>
</head>
<body>
<div part="test"></div>
</body>
```


* ::placeholder
_Met deze pseudo kan je de placeholder tekst bij een 'input' of 'textarea' aanpassen. In het voorbeeld wordt de kleur en font-size van de placeholder tekst aangepast._

```
<head>
<style>
input::placeholder {
  color: purple;
  font-size: 15px;
}
</style>
</head>
<body>
<input placeholder="De placeholder tekst">
</body>
```

* ::selection
_Met deze pseudo wordt de style van een door de gebruiker geselecteerd element. In het voorbeeld krijgt de tekst binnen een p tag een groene kleur zodra deze wordt geselecteerd door de gebruiker._

```
<head>
<style>
p::selection {
  color: green;
}
</style>
</head>
<body>
<p>Selecteer deze tekst en het wordt groen!</p>
</body>
```

* ::slotted()
_Deze pseudo past elementen aan die in HTML in een slot zijn geplaatst. In het voorbeeld wordt de tekst van de elementen die geslotted zijn in een p element rood van kleur._

```
<head>
<style>
::slotted(p) {
  color: red;
}
}
</style>
</head>
<body>
<p slot="test">Test</p>
</body>
```

* ::spelling-error 
_Met deze pseudo worden incorrect gespelde teksten die door de browser zijn geconstateerd gehighlight. In het voorbeeld zal de fout dikgedrukt en rood van kleur worden._
```
<head>
<style>
::spelling-error {
  font: bold;
  color: red;
}
</style>
</head>
<body>
<p>Deze tekst bevat een spelingsfaut.</p>
</body>
```

* ::target-text 
_Deze pseudo past tekst aan waarnaartoe is gescrold bij browsers die scroll-to-text fragmenten supporten. In het voorbeeld wordt deze tekst geel van kleur._
```
<head>
<style>
::target-text {
  color: yellow;
}
</style>
</head>
```

