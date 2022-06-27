## **Opdrachten**

<br>

### **Opdracht 1**
Bij CSS Grid wordt vaak gebruikgemaakt van een speciale lengte-eenheid: “fr”. Onderzoek wat deze doet en beschrijf het in je eigen woorden.

_Fr staat voor fractional unit. Het is handig om te gebruiken bij grids omdat de fr automatisch berekent hoeveel ruimte elke kolom in kan nemen op basis van de beschikbare ruimte. Als je 250px ruimte hebt voor 5 kolommen, zou je met pixels de code 50px 50px 50px 50px 50px gebruiken om die 5 overige kolommen gelijk te verdelen. Echter als de grote van de container zou veranderen, dan veranderen de kolommen niet mee en is de website niet responsive. Met 1fr 1fr 1fr 1fr 1fr is dit wel het geval. Wanneer er 250px beschikbaar is voor 5 kolommen, staat 1fr voor 50px. Als de grootte van 250px naar 50px zou veranderen, zal 1fr voor 10px staan. Als je 2fr gebruikt, zal een kolom de ruimte van 2 kolommen innemen, bij 250px dus 100px en bij 50px 20px. De andere kolommen worden daardoor verkleint._

<br>

### **Opdracht 6**
Wat is het verschil tussen justify/align/place-items en justify/align/place-content?

_Justify/align/place-content werkt alleen als de flex-wrap de value 'wrap' heeft en er meerdere lines in de container zijn. Het bepaalt de positie van de lines relatief van de andere lines. Justify/align/place-items heeft alleen invloed op een individuele line._


