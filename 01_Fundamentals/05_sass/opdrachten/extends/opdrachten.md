## **Opdrachten**

<br>

### **Opdracht 1**
We hebben nu zowel mixins als extends gezien die beiden styling kunnen overnemen. Lees dit artikel en geef een uitleg wanneer we inheritance gebruiken en wanneer we mixins gebruiken.

_De extends worden gebruikt wanneer je de styling die aan een bepaald element is toegevoegd, ook wil toepassen op andere elementen._

```
.box1 {
background-color: green;
font-size: 50px;
}

.box2 {
@extend box1;
}
```

_In het voorbeeld wordt de extend gebruikt om box2 dezelfde styling te geven als box1. In het tweede voorbeeld, waar mixin wordt gebruikt, staat de opmaak in eerste instantie op geen enkel element totdat het op box1 en box2 wordt toegepast._

```
@mixin styling {
background-color: green;
font-size: 50px;
}

.box1 {
@include styling();
}

.box2 {
@include styling();
}
```

_Maar wat vooral een verschil is ten opzichte van extends, is dat je bij mixins een property per element kan aanpassen, bijvoorbeeld:_

```
@mixin styling($font-size) {
background-color: green;
font-size: $font-size;
}

.box1 {
@include styling(10px);
}

.box2 {
@include styling(20px);
}
```

_Nu hebben de boxen een zelfde kleur, maar andere tekstgrootte._