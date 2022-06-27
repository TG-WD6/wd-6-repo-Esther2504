### **Opdracht 1**

Zie de volgende code en geef aan of geef aan welk resultaat je verwacht:

```
.image {
  height: 400px * 2;
  width: auto;
}
```

_Ik verwacht als resultaat dat de height van de image 800px wordt._

### **Opdracht 2**

Zie de volgende code en geef aan of geef aan welk resultaat je verwacht:


```
.image {
  height: 400px + 100;
  width: auto;
}
```

_Ik verwacht als resultaat dat de height van de image 500px wordt._

### **Opdracht 3**

Zie de volgende code en geef aan of geef aan welk resultaat je verwacht:

```
.image {
  height: 400px - 300px;
  width: auto;
}
```

_Ik verwacht als resultaat dat de height van de image 100px wordt._

### **Opdracht 4**

Zie de volgende code en geef aan of geef aan welk resultaat je verwacht: 

```
.image {
  height: 200px + 100px - 400px;
  width: auto;
}
```

_Ik verwacht dat dit niet mogelijk is, aangezien uit de som een negatieve height komt. Door de som tussen haakjes te zetten en er een min-teken voor te zetten, komt het resultaat positief terug. In het voorbeeld hieronder is dat 100px (-(-100px))._

```
.image {
  height: -(200px + 100px - 400px);
  width: auto;
}
```

### **Opdracht 5**

Zie de volgende code en geef aan of geef aan welk resultaat je verwacht:

```
.image {
  height: 200px * 3;
  width: auto;
}
```

_Ik verwacht als resultaat dat de height van de image 600px wordt._

### **Opdracht 6**

Zie de volgende code en geef aan of geef aan welk resultaat je verwacht:

```
.image {
  height: 750px * 1px;
  width: auto;
}
```

_Ik verwacht als resultaat dat de height van de image 750px in square units wordt, wat in CSS voor een error zal zorgen. Om deze reden moet de code als volgt zijn:_

```
.image {
  height: 750px * 1;
  width: auto;
}
```

### **Opdracht 7**

Zie de volgende code en geef aan of geef aan welk resultaat je verwacht: 

```
.image {
  height: 30px / 5px;
  width: 24px/ 4;
}
```

_CSS ziet de '/' van de height in dit geval als separator en daarom zal het resultaat van de height niet veranderen: hij rekent de som niet uit. Om het juiste resultaat te krijgen is dit een oplossing:_

```
.image {
  height: 30px / 5;
  width: 24px/ 4;
}
```

_Het gaat dus wel goed als het tweede getal geen unit heeft. Het kan ook worden opgelost met haakjes rond de som._

### **Opdracht 8**

Zie de volgende code en geef aan of geef aan welk resultaat je verwacht:

```
.image {
  height: (30px / 5px);
  width: (24px/ 4);
}
```

_Ik verwacht als resultaat dat beide de height en width van de image 6px worden._