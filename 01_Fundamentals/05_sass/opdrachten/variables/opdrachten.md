## **Opdrachten**

<br>

### **Opdracht 4**
De ‘&’ is een ontzettend handige feature in SASS. Je gebruikt het bij het nesten. Het kan je veel tijd besparen bij het coderen. Kun jij uitzoeken wat je met de ‘&’ kunt en wat de voordelen ervan zijn? Laat met een voorbeeld zien dat je begrijpt wat het voordeel is van het gebruik van ‘&’ bij het nesten.

_Bij nesting met sass wordt de '&', de SASS Ampersand, gebruikt als parent selector. Hierdoor hoeft men de parent selector niet te herhalen. Een voorbeeld met pseudo elementen:_

```
.parent {
  &:hover {}
  &::before {}
  &::after {}
}
```

_Zonder de '&' had iedere parent apart beschreven moeten worden:_
```
.parent:hover {}
.parent::before {}
.parent::after {}
```

_Het voordeel is hierdoor dat men minder code hoeft te schrijven en de CSS overzichtelijker is._