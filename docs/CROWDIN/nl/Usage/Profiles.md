# Profiel wissel

Bij het in gebruik nemen van AndroidAPS, moet je een profiel selecteren en ook een "Profiel wissel" doen met een duur van nul minuten (wordt verderop uitgelegd). Hierdoor begint AAPS met het bijhouden van jouw profiel geschiedenis. Elke keer wanneer je iets aan je profiel verandert dan zul je opnieuw een "Profiel wissel" moeten doen om deze wijzigingen te activeren. Wanneer je Nightscout profielen gebruikt en je jouw profiel hebt gewijzigd dan worden deze wijzigingen direct naar AAPS doorgestuurd, maar vergeet niet om een "Profiel wissel" te doen in NS of AAPS om de wijzigingen te activeren (zelfs al heb je wijzigingen doorgevoerd aan je actieve profiel).

Wanneer je een Profiel wissel doet, dan maakt AAPS een momentopname van jouw profiel, met een startdatum en een tijdsduur en gebruikt dit profiel binnen deze door jou gespecificeerde periode. Een tijdsduur van nul betekent 'oneindig lang'. Dan wordt dat profiel gebruikt totdat je een volgende Profiel wissel doet. Je hoeft overigens geen nul in te vullen, het vakje leeg laten kan ook.

Als je wel een tijdsduur invult bij de Profiel wissel, dan zal AAPS na afloop weer terugschakelen naar het profiel dat actief was vóórdat je de tijdelijke Profiel wissel deed.

Wanneer je lokale AAPS profielen gebruikt (Eenvoudig, Lokaal) dan moet je ook steeds een Profiel wissel uitvoeren nadat je iets aan jouw profiel hebt gewijzigd. Anders zullen je wijzigingen niet actief worden.

Bij een Profiel wissel zijn er nog 2 (optionele) keuzes die je kunt invullen:

* Percentage - hiermee verander je alle parameters met hetzelfde percentage. Als je het op 130% instelt (wat betekent dat je 30% meer insuline resistent bent), dan zullen je basaalstanden met 30 procent stijgen. Ook worden je KH ratio en ISF (insuline gevoeligheids factor) dienovereenkomstig verlaagd (in dit voorbeeld met een factor 1,3). De nieuwe waardes worden naar je pomp gestuurd en dat zijn vanaf dan je nieuwe basaalstanden. Het loop algoritme (open of closed loop) zal zijn aanpassingen doen bovenop het geselecteerde percentage profiel. Op deze manier kunnen vrouwelijke AAPS gebruikers bijvoorbeeld afzonderlijke percentages kiezen voor verschillende stadia van hun menstruatiecyclus.
* Tijd verschuiving - hiermee verschuif je alles in de tijd, met het aantal uren dat je hebt ingevoerd. Het ingevulde getal kan positief of negatief zijn. Handig als je bijvoorbeeld wisselende werktijden hebt, en je jouw profiel wilt laten meeschuiven met hoeveel eerder/later je slapen gaat of wakker wordt.

Deze werkwijze om snapshots van het profiel te maken zorgt ervoor dat gegevens uit het verleden heel nauwkeurig kunnen worden berekend en dat gegevens over eerdere profielwijzigingen correct worden bewaard.

<b>Profiel foutmeldingen oplossen</b>  


* De foutmelding 'Ongeldig profiel' of 'Basaalstanden niet ingesteld op hele uren' zal verschijnen als je een aantal basaalstanden of KH ratio-waardes niet op hele uren hebt laten beginnen. De DanaR en DanaRS-pompen staan geen veranderingen op het halve uur toe.
* Een melding 'Ongeldig profiel [datum+tijdstip]' Ga naar Behandelingen tab in AndoridAPS en selecteer Wisselen van profiel (kan even duren). Scroll naar de datum+tijdstip uit de foutmelding en kies 'Verwijder' voor die regel. Of ga naar je mlab database (Nightscout), zoek in de behandelingen naar profiel wissel en verwijder de datum en tijd die wordt genoemd in het foutbericht. ![mlab](https://files.gitter.im/MilosKozak/AndroidAPS/I5am/image.png)
* Een 'DIA 3hr te kort' foutmelding zal verschijnen als je de DIA (duur insuline activiteit) in jouw profiel op een te lage waarde hebt gezet. AndroidAPS hanteert een minimumwaarde. Lees meer (in het Engels) over het [Selecteren van de juiste DIA](http://www.diabettech.com/insulin/why-we-are-regularly-wrong-in-the-duration-of-insulin-action-dia-times-we-use-and-why-it-matters/), pas je profiel aan naar een correcte waarde en doe een Profiel wissel om deze wijziging te activeren.