# Profiel wissel

Bij het in gebruik nemen van AndroidAPS, moet je een profiel selecteren en ook een "Profiel wissel" doen met een duur van nul minuten (wordt verderop uitgelegd). Hierdoor begint AAPS met het bijhouden van jouw profiel geschiedenis. Elke keer wanneer je iets aan je profiel verandert dan zul je opnieuw een "Profiel wissel" moeten doen om deze wijzigingen te activeren. Wanneer je Nightscout profielen gebruikt en je jouw profiel hebt gewijzigd dan worden deze wijzigingen direct naar AAPS doorgestuurd, maar vergeet niet om een "Profiel wissel" te doen in NS of AAPS om de wijzigingen te activeren (zelfs al heb je wijzigingen doorgevoerd aan je actieve profiel).

Wanneer je een Profiel wissel doet, dan maakt AAPS een momentopname van jouw profiel, met een startdatum en een tijdsduur en gebruikt dit profiel binnen deze door jou gespecificeerde periode. Een tijdsduur van nul betekent 'oneindig lang'. Dan wordt dat profiel gebruikt totdat je een volgende Profiel wissel doet. Je hoeft overigens geen nul in te vullen, het vakje leeg laten kan ook.

Als je wel een tijdsduur invult bij de Profiel wissel, dan zal AAPS na afloop weer terugschakelen naar het profiel dat actief was vóórdat je de tijdelijke Profiel wissel deed.

Wanneer je lokale AAPS profielen gebruikt (Eenvoudig, Lokaal) dan moet je ook steeds een Profiel wissel uitvoeren nadat je iets aan jouw profiel hebt gewijzigd. Anders zullen je wijzigingen niet actief worden.

Bij een Profiel wissel zijn er nog 2 (optionele) keuzes die je kunt invullen:

* Percentage - hiermee verander je alle parameters met hetzelfde percentage. Als je het op 130% instelt (wat betekent dat je 30% meer insuline resistent bent), dan zullen je basaalstanden met 30 procent stijgen. Ook worden je KH ratio en ISF (insuline gevoeligheids factor) dienovereenkomstig verlaagd (in dit voorbeeld met een factor 1,3). De nieuwe waardes worden naar je pomp gestuurd en dat zijn vanaf dan je nieuwe basaalstanden. Het loop algoritme (open of closed loop) zal zijn aanpassingen doen bovenop het geselecteerde percentage profiel. Op deze manier kunnen vrouwelijke AAPS gebruikers bijvoorbeeld afzonderlijke percentages kiezen voor verschillende stadia van hun menstruatiecyclus.
* Tijd verschuiving - hiermee verschuif je alles in de tijd, met het aantal uren dat je hebt ingevoerd. Het ingevulde getal kan positief of negatief zijn. Handig als je bijvoorbeeld wisselende werktijden hebt, en je jouw profiel wilt laten meeschuiven met hoeveel eerder/later je slapen gaat of wakker wordt.

When using timeshift be aware of the directions:

* Timeshift +10 h: 12:00 -> 2:00
* Timeshift -10 h: 12:00 -> 22:00

![Profile switch timeshift directions](../images/ProfileSwitch_PlusMinus.png)

This mechanism of taking snapshots of the profile allows a much more precise calculations of the past and the possibility to track profile changes.

## Troubleshooting Profile Errors

* 'Invalid profile' or 'Basal Profile not aligned to hours' error message will appear if you have any basal rates or I:C rates not on the hour. The DanaR and DanaRS pumps do not support changes on the half hour.
* 'Received profile switch from NS but profile does not exist locally' or Go either to Treatments tab in AndoridAPS and select Profile Switch, 'remove' the date and time that was mentioned in the error message. Or go to your mlab collection, search in the treatments for profile switch and delete the date and time that was mentioned in the error message. ![mlab](https://files.gitter.im/MilosKozak/AndroidAPS/I5am/image.png)
* 'DIA 3hr too short' error message will appear if your duration of insulin action in your profile is listed at a value that AndroidAPS doesn't believe will be accurate. Read about [selecting the right DIA](http://www.diabettech.com/insulin/why-we-are-regularly-wrong-in-the-duration-of-insulin-action-dia-times-we-use-and-why-it-matters/), and edit it in your profile then do a Profile Switch to continue.