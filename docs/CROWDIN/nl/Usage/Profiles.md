# Profiel wissel

Bij het in gebruik nemen van AndroidAPS, moet je een profiel selecteren en ook een "Profiel wissel" doen met een duur van nul minuten (wordt verderop uitgelegd). Hierdoor begint AAPS met het bijhouden van jouw profiel geschiedenis. Elke keer wanneer je iets aan je profiel verandert dan zul je opnieuw een "Profiel wissel" moeten doen om deze wijzigingen te activeren. Wanneer je Nightscout profielen gebruikt en je jouw profiel hebt gewijzigd dan worden deze wijzigingen direct naar AAPS doorgestuurd, maar vergeet niet om een "Profiel wissel" te doen in NS of AAPS om de wijzigingen te activeren (zelfs al heb je wijzigingen doorgevoerd aan je actieve profiel).

Wanneer je een Profiel wissel doet, dan maakt AAPS een momentopname van jouw profiel, met een startdatum en een tijdsduur en gebruikt dit profiel binnen deze door jou gespecificeerde periode. Een tijdsduur van nul betekent 'oneindig lang'. Dan wordt dat profiel gebruikt totdat je een volgende Profiel wissel doet. Je hoeft overigens geen nul in te vullen, het vakje leeg laten kan ook.

Om een Profiel wissel te doen, houd de de naam van jouw profiel ("Aktuell (Rad)" in de foto hieronder) lang ingedrukt en selecteer Profiel wissel.

![Profiel wissel](../images/ProfileSwitch_HowTo.png)

Als je wel een tijdsduur invult bij de Profiel wissel, dan zal AAPS na afloop weer terugschakelen naar het profiel dat actief was vóórdat je de tijdelijke Profiel wissel deed.

Wanneer je lokale AAPS profielen gebruikt (Eenvoudig, Lokaal) dan moet je ook steeds een Profiel wissel uitvoeren nadat je iets aan jouw profiel hebt gewijzigd. Anders zullen je wijzigingen niet actief worden.

Bij een Profiel wissel zijn er nog 2 (optionele) keuzes die je kunt invullen:

## Percentage

* Percentage - hiermee verander je alle parameters met hetzelfde percentage. 
* Als je het op 130% instelt (wat betekent dat je 30% meer insuline resistent bent), dan zullen je basaalstanden met 30 procent stijgen. Ook worden je KH ratio en ISF (insuline gevoeligheids factor) dienovereenkomstig verlaagd (in dit voorbeeld met een factor 1,3).
  
  ![Voorbeeld Profiel wissel percentage](../images/ProfileSwitchPercentage.png)

* De nieuwe waardes worden naar je pomp gestuurd en dat zijn vanaf dan je nieuwe basaalstanden.

* Het loop algoritme (open of closed loop) zal zijn aanpassingen doen bovenop het geselecteerde percentage profiel. Op deze manier kunnen vrouwelijke AAPS gebruikers bijvoorbeeld afzonderlijke percentages kiezen voor verschillende stadia van hun menstruatiecyclus.

## Tijd verschuiving

![Profiel wissel percentage en tijdverschuiving](../images/ProfileSwitchTimeShift2.png)

* Tijd verschuiving - hiermee verschuif je alles in de tijd, met het aantal uren dat je hebt ingevoerd. 
* Het ingevulde getal kan positief of negatief zijn. Handig als je bijvoorbeeld wisselende werktijden hebt, en je jouw profiel wilt laten meeschuiven met hoeveel eerder/later je slapen gaat of wakker wordt.
* Bedenk hierbij naar welk tijdstip (plus bijbehorende profiel instellingen) je toewilt. En bereken het aantal uren dat tussen dat moment en de huidige tijd in zit. Bijvoorbeeld: 
  * Huidige tijd: 12:00
  * **Positieve** tijd verschuiving 
    * 2:00 ** + 10 h**-> 12:00
    * De profiel instellingen van 2:00 uur worden gebruikt in plaats van de instellingen die normaal worden gebruikt om 12:00 vanwege de positieve tijdverschuiving.
  * **Negatieve** tijd verschuiving 
    * 22:00 ** - 10 h**-> 12:00
    * De profiel instellingen van 22:00 uur (10 uur 's avonds) worden gebruikt in plaats van de instellingen die normaal worden gebruikt om 12:00 vanwege de positieve tijdverschuiving.

![Profiel wissel tijdwissel instructies](../images/ProfileSwitch_PlusMinus2.png)

Deze werkwijze om snapshots van het profiel te maken zorgt ervoor dat gegevens uit het verleden heel nauwkeurig kunnen worden berekend en dat gegevens over eerdere profielwijzigingen correct worden bewaard.

## Profiel foutmeldingen oplossen

### 'Ongeldig profiel'/'basaal profiel niet ingesteld in hele uren '

![Basal niet ingesteld op hele uren](../images/BasalNotAlignedToHours2.png)

* Deze foutmeldingen verschijnen als je de basaalstanden of KH ratio's niet hebt ingesteld op hele uren. (De DanaR en DanaRS-pompen bijvoorbeeld, staan geen veranderingen op het halve uur toe.)
  
  ![Voorbeeld Profiel niet ingesteld op hele uren](../images/ProfileNotAlignedToHours.png)

* Onthoud de datum en tijd in het foutbericht (26/07/2019 5:45 in schermafdruk hierboven).

* Ga naar het tabblad Behandelingen
* Kies Profiel Wissel
* Scroll naar beneden totdat je bij datum en tijd van het foutbericht bent aangekomen.
* Kies Verwijder bij die regel
* Soms is er meer dan één foutieve Profiel wissel. In dit geval moet je ook de anderen verwijderen.
  
  ![Profiel wissel verwijderen](../images/PSRemove.png)

Een alternatieve manier is om de Profiel wissel direct in mLab te verwijderen zoals hieronder beschreven.

### 'Profiel Wissel ontvangen van NS maar profiel bestaat niet lokaal'

* Het gevraagde profiel is niet correct gesynchroniseerd met Nightscout.
* Volg de instructies hierboven om de Profiel wissel te verwijderen

Een alternatieve manier is om de Profiel wissel direct in mLab te verwijderen:

* Ga naar je mlab collectie
* Zoek in de treatments (behandelingen) naar de Profile switch (Profiel wissel)
* Delete (verwijder) de Profile switch (Profiel wissel) met de datum en tijd uit de foutmelding. ![mlab](../images/mLabDeletePS.png)

### "DIA 3u te kort"

* Een 'DIA 3u te kort' foutmelding zal verschijnen als je de DIA (duur insuline activiteit) in jouw profiel op een te lage waarde hebt gezet. AndroidAPS hanteert een minimumwaarde. 
* Lees meer (in het Engels) over het [Selecteren van de juiste DIA](http://www.diabettech.com/insulin/why-we-are-regularly-wrong-in-the-duration-of-insulin-action-dia-times-we-use-and-why-it-matters/), pas je profiel aan naar een correcte waarde en doe een [Profiel wissel](../Usage/Profiles) om deze wijziging te activeren.