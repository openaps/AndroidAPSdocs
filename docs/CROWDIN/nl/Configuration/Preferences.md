# Instellingen

Open de instellingen door te klikken op de 3 stipjes in de rechterbovenhoek van het Overzicht scherm:

![Instellingen openen](../images/PreferencesOpen.png)

## Wachtwoord voor instelligen

Hiermee kunt je een wachtwoord instellen om onbedoelde of ongeoorloofde wijzigingen in je Instellingen te voorkomen. Nadat je hier een wachtwoord hebt ingevoerd, zul je steeds dat wachtwoord moeten invoeren om toegang te krijgen tot Instellingen. Om de wachtwoordoptie te verwijderen, verwijder dan de tekst uit dit veld.

## Leeftijd Patiënt

AndroidAPS stelt veiligheidslimieten in op basis van de leeftijd die je hier hebt geselecteerd. Als je tegen de beperkingen van zo'n zogenaamde 'harde limiet' (zoals max bolus) aanloopt, dan is het tijd om te kiezen voor de daaropvolgende categorie. Het is een slecht idee om hogere categorie te kiezen dan past bij jouw echte leeftijd/resistentie, omdat het kan leiden tot een overdosis als je de verkeerde waarde in het insuline-dialoogvenster intypt (bijv. als je de komma verkeerd zet). Als je wilt weten wat de precieze getallen zijn voor deze veiligheidslimieten, ga dan naar [deze pagina](../Usage/Open-APS-features.md) en scroll naar het algoritme dat jij gebruikt.

## Algemeen

* Kies welke taal je wilt gebruiken. Als je taal niet beschikbaar is, of niet alle woorden worden vertaald, voel je dan vrij om suggesties te doen op [Crowdin](https://crowdin.com/project/androidaps) of vraag in de [gitter chatroom](https://gitter.im/MilosKozak/AndroidAPS).

## Overzicht

* Laat scherm aan is handig wanneer je een presentatie geeft. Het verbruikt wel veel energie, dus het is verstandig om je telefoon hierbij aan een lader te hebben.
* Bij Knoppen kun je kiezen welke knoppen zichtbaar zijn op jouw Overzicht-scherm. Je vind hier ook enkele keuzeopties voor het popup-scherm dat je ziet na het indrukken van zo'n knop.
* Via Vaste maaltijd instellingen kun je een knop toevoegen aan het Overzicht-scherm voor een snack of maaltijd die je vaker eet. Zie meer uitleg op de Configurator pagina, onder Algemeen > Vaste maaltijd instellingen.

### Geavanceerde instellingen

![Instellingen - Overzicht - Geavanceerde instellingen](../images/PreferencesOverviewAdvanced_V2_5.png)

* Met deze instelling laat je slechts een deel toedienen van de uitkomst van de boluswizard. Alleen het ingestelde percentage (moet tussen 10 en 100 liggen) van de berekende bolus wordt afgeleverd wanneer de bolus wizard wordt gebruikt. Het percentage zie je terug in de boluswizard.
    
    ![Boluswizard 80%](../images/BolusWizardPartDelivery.png)

* Option to enable [superbolus](../Getting-Started/Screenshots#section-h) in bolus wizard.

### Statusindicatoren

* Deze functie is nieuw in versie 2.1.1. Uitgebreide versie toont verstreken tijd / batterij percentage.
    
    ![Statusindicatoren - details](../images/StatusLights_V2_5.png)
    
    De statusindicatoren moeten worden ingesteld in de instellingen van jouw Nightscout-pagina. Ga naar jouw Nightscout en stel de volgende variabelen in zoals jij ze wilt hebben:
    
    * Canule ouderdom: CAGE_WARN en CAGE_URGENT (standaard 48 en 72 uur)
    * Insuline ouderdom (reservoir): IAGE_WARN en IAGE_URGENT (standaard 72 en 96 uur)
    * Sensor ouderdom: SAGE_WARN en SAGE_URGENT (standaard 164 en 166 uur)
    * Batterij ouderdom: BAGE_WARN en BAGE_URGENT (standaard 240 en 360 uur)

* Grenswaarde voor de waarschuwing van reservoir niveau en voor het alarm van reservoir niveau.

* Grenswaarde voor de waarschuwing van het batterijniveau en voor het alarm van het batterijniveau.

## Behandelingen veiligheid

### Max toegestane bolus [E]

Dit is de maximale hoeveelheid bolus insuline die AAPS mag leveren. Deze instelling is een veiligheidslimiet om te voorkomen dat er per ongeluk een enorme bolus wordt afgegeven door een misrekening of typfout van de gebruiker. Het wordt aangeraden om deze in te stellen op de maximale hoeveelheid bolus insuline die je ooit voor een maaltijd of correctie nodig zult hebben. Deze beperking wordt ook toegepast op de resultaten van de Bolus Calculator.

### Max toegestane koolhydraten [g]

Dit is de maximale hoeveelheid koolhydraten waarvoor de Boluscalculator insuline mag geven. Deze instelling is een veiligheidslimiet om te voorkomen dat er per ongeluk een enorme bolus wordt afgegeven door een misrekening of typfout van de gebruiker. Het wordt aangeraden om deze in te stellen op de maximale hoeveelheid koolhydraten die je ooit zult eten bij een maaltijd.

## Loop

Je kunt hier schakelen tussen open loop en closed loop.

**Open loop** betekent dat er suggesties worden gedaan voor tijdelijke basaalstanden (Temporary Basal Rates, TBR) op basis van jouw gegevens. Deze suggesties zie je op jouw telefoon in de vorm van een melding, je moet vervolgens handmatig kiezen om ze te accepteren en handmatig in je pomp invoeren.

**Closed loop (gesloten loop)** betekent dat TBR-suggesties automatisch naar je pomp worden verzonden zonder bevestiging of invoer van jou.

In het Overzicht-scherm kun je in de linker bovenhoek zien of je in de open of closed loop zit. Wanneer je deze knop ingedrukt houdt, dan kun je ook schakelen tussen open en closed loop.

### Minimale verzoek voor aanpassing

Bij het gebruik van open loop ontvangt je meldingen telkens wanneer AAPS een suggestie doet om de basaalstand aan te passen. Om het aantal meldingen te verminderen, kun je een breder bereik voor BG gebruiken of een hoger percentage van het minimale verzoek voor aanpassing. Hiermee stel je de minimale relatieve TBR aanpassing in waarbij AAPS een suggestie doet.

![Minimale verzoek voor aanpassing](../images/MinRequestChange.png)

Let op: in closed loop modus wordt het aangeradem om één enkel streefdoel te hebben in plaats van een doelbereik (bijv. 5,5 mmol/l en geen 5,0-7,0 mmol/l).

## OpenAPS AMA

Dankzij de geavanceerde maaltijdhulp (Advanced Meal Assist, AMA) kan het systeem na een maaltijdbolus sneller een hogere tijdelijke basaalstand geven, zolang je wel je koolhydraten correct hebt ingevoerd. In de Configurator kun je dit inschakelen, en de bijbehorende veiligheidsinstellingen bekijken/aanpassen. Je moet minimaal [Doel 9](../Usage/Objectives#objective-9-enabling-additional-oref0-features-for-daytime-use-such-as-advanced-meal-assist-ama) hebben voltooid om deze functie te gebruiken. Onderstaande tekst gaat dieper in op de instellingen voor AMA, de andere opties (MA en SMB) worden elders in deze wiki omschreven op de pagina over "OpenAPS functies". Of je kunt meer lezen over de instellingen en [Autosens in de OpenAPS docs](http://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autosens.html).

### Maximale E/uur dat OpenAPS kan toedienen

Deze instelling is een veiligheidslimiet om te voorkomen dat AAPS ooit een gevaarlijk hoge basaalstand kan instellen. Dit getal wordt weergegeven in eenheden per uur (E/uur). We raden je aan je verstand te gebruiken bij het invullen van deze waarde. Een goede aanbeveling is om de **hoogste basaalstand** in je profiel te nemen en die te **vermenigvuldigen met 4**. Als de hoogste basaalstand in je profiel bijvoorbeeld 0,5 E/uur is, dan moet je dat vermenigvuldigen met 4 om een waarde van 2 E/uur te krijgen.

### Max totaal IOB dat OpenAPS niet kan overschrijden [E]

Hoeveelheid extra basale insuline (in eenheden) tot waaraan OpenAPS de hoeveelheid insuline in jouw lichaam mag laten oplopen, bovenop je normale basale insuline. Zodra deze waarde is bereikt, zal AAPS stoppen met het geven van extra basale insuline totdat jouw basale Insulin On Board (IOB, insuline aan boord) naar binnen dit bereik is teruggelopen.

* Deze waarde laat bolus IOB buiten beschouwing, alleen basale insuline wordt meegerekend.
* Het berekenen en sturen op deze waarde gebeurt onafhankelijk van jouw normale basale insuline. Alleen de extra basale insuline die werd afgegeven bovenop je normale basaalstand, wordt meenomen.
* Deze waarde wordt gemeten in eenheden (E).

Wanneer je begint met loopen, wordt tijdens een van de leerdoelen een tijd lang **Max Basal IOB beperkt naar 0**, zodat je gewend raakt aan het systeem. Dit zorgt ervoor dat AAPS helemaal geen extra basale insuline kan geven. Terwijl AAPS wel je basale insuline naar beneden kan bijstellen, of zelfs helemaal uitschakelen om een hypo te helpen voorkomen.

Dit is een belangrijke stap omdat:

* Je de tijd krijgt om veilig gebruik te maken van het AAPS-systeem en rustig kunt observeren hoe het werkt.
* Je nu de kans hebt om jouw basaalprofiel en insuline gevoeligheidsfactor (ISF, Insulin Sensitivity Factor) perfect te maken.
* Je kunt zien hoe AAPS jouw basale insuline naar beneden bijstelt om hypo's te voorkomen.

Pas na een tijd mag je het systeem toestaan om extra basale insuline te geven door de Max Basal IOB waarde te verhogen. Als eerste start wordt aangeraden om de **hoogste basaalstand** in je profiel te nemen en die te **vermenigvuldigen met 3**. Als de hoogste basaalstand in je profiel bijvoorbeeld 0,5 E/uur is, dan moet je dat vermenigvuldigen met 3 om een waarde van 1,5 E/uur te krijgen.

* Je kunt voorzichtig beginnen met deze waarde en deze langzaam verhogen. 
* Dit zijn alleen richtlijnen; ieder mens is anders. Je kunt onderweg merken dat jij zelf minder of meer nodig hebt dan wat hier wordt aanbevolen, begin altijd voorzichtig en pas langzaam aan.

*Opmerking: om veiligheidsredenen geldt er voor Max Basal IOB een 'harde limiet' (voor volwassenen is die 7E). Zie ook de pagina over "OpenAPS functies" elders in deze wiki.*

## Opname instellingen

Wanneer je AMA Autosens aan hebt staan, kun je jouw maximale maaltijd absorptie tijd invoeren. Als je vaak maaltijden met een hoog vet- of eiwitgehalte eet, moet je de opnametijd verhogen.

## Pomp instellingen

De opties hier zullen variëren afhankelijk van welke pomp je hebt geselecteerd in de 'Configurator'. Koppel en stel je pomp in volgens de instructies van jouw pomp:

* [DanaR Insulinepomp](../Configuration/DanaR-Insulin-Pump.md) 
* [DanaRS Insulinepomp](../Configuration/DanaRS-Insulin-Pump.md) 
* [Accu Chek Combo Pomp](../Configuration/Accu-Chek-Combo-Pump.md) 
* [Accu-Chek Insight pomp](../Configuration/Accu-Chek-Insight-Pump.md) 
* [Medtronic Pomp](..//Configuration/MedtronicPump.md)

Als je AndroidAPS gebruikt in 'open loop' modus, zorg er dan voor dat je Virtuele Pomp hebt geselecteerd in de Configurator.

## NS Client

* Stel hier jouw 'nightscout URL' in (https://yourwebsitename.herokuapp.com of https://yourwebsitename.azurewebsites.net), en jouw 'API secret' (een wachtwoord van 12 tekens lang uit jouw heroku of azure variabelen). Hierdoor kunnen gegevens zowel worden uitgelezen als weggeschreven tussen de Nightscout website en AndroidAPS. Als je vastzit in Doel 1, controleer dan goed of je hier geen typfouten hebt gemaakt.
* **Zorg ervoor dat de URL is ingevuld ZONDER /api/v1/ aan het eind.**
    
    ![NSClient URL](../images/NSClientURL.png)

* 'Log app start naar Nightscout' zal elke keer dat de app is gestart, een notitie maken. De app zou niet vaker dan één keer per dag opnieuw moeten starten; gebeurt dit vaker dan wijst dat op een probleem. Vaak wordt dit veroorzaakt doordat de accubesparings-functie van jouw telefoon steeds de app afsluit. Los dit op door de accubesparings-instellingen van jouw telefoon aan te passen. Het kan ook zijn dat jouw telefoon te weinig (werk)geheugen beschikbaar heeft. Zorg dan dat je niet teveel zware apps draait of maak geheugenruimte vrij.

* 'Alarm opties' kun je selecteren om de standaard Nightscout alarmen te gebruiken. Om de alarmen voor Urgent High (urgent hoog), High (hoog), Low (laag) en Urgent Low (urgent laag) in te schakelen, zul je deze moeten toevoegen aan jouw [heroku of azure variabelen](http://www.nightscout.info/wiki/welcome/website-features#customalarms). Deze alarmen werken alleen zolang de telefoon verbinding heeft met Nightscout (internet moet dus aanstaan op de telefoon). Alarmen via Nightscout zijn bedoeld voor bijv. ouder/verzorgers die hun kind vanaf afstand volgen. Als de BG-bron op de telefoon van de patiënt zelf staat, gebruik dan liever die alarmen (bijv. xDrip+) want dan ben je niet afhankelijk van een internetverbinding.
* 'Activeer lokaal delen' onder de Geavanceerde Instellingen zal jouw careportal gegevens doorsturen naar andere apps op je telefoon, zoals xDrip+.
* 'Gebruik altijd absolute basale waarden' moet geactiveerd worden als je Autotune correct wilt gebruiken.
    
    ** Activeer dit niet bij het gebruik van een [Insight-pomp](https://androidaps.readthedocs.io/en/latest/EN/Configuration/Accu-Chek-Insight-Pump#instellingen-in-aaps)!** Dit geeft onjuiste TBR-instellingen in de Insight-pomp.

## SMS Communicator

Deze instelling maakt externe controle van de app mogelijk door SMS instructies te sturen naar de telefoon die de patiënt bij zich heeft. Bijvoorbeeld het uitschakelen van de loop of het geven van een bolus. Hoe dit werkt, wordt beschreven in [SMS commando's](../Children/SMS-Commands.rst) maar het zal alleen worden weergegeven in de Instellingen als je deze optie hebt aangevinkt in de Configurator.

## Andere

* Je kunt bij Standaard tijdelijk basaal standaardwaarden instellen voor jouw tijdelijke streefdoelen (Eet binnenkort, Hypo en Activiteit). Als je bijvoorbeeld "Eet binnenkort" kiest uit de drop-down box op het Overzicht-scherm, dan zal automatisch de duur en streef-BG worden ingevuld die je hier hebt aangegeven. Voor meer informatie over het gebruik van tijdelijke streefdoelen (Temp Targets) zie de [OpenAPS functies](../Usage/Open-APS-features.md). 
* Je kunt standaardhoeveelheden instellen voor het vullen (van de canule, en van de slang). De hoeveelheden die je hier instelt zal de pomp wel afgeven, maar deze hoeveelheden worden niet meegeteld bij IOB berekeningen. Hoeveel eenheden nodig zijn staat in het instructieboekje in de doos met infuussets, dit verschilt per type infuusset en is afhankelijk van de lengte van de canule en de lengte van de slang.
* Je kunt het grafiekgebied voor weergave van jouw hoge en lage BG waardes (groen gekleurde gebied) op het Overzicht-scherm en op je smartwatch instellen. Let op: dit bepaalt alleen hoe jouw grafieken eruit zien, en heeft geen enkele link met de streefdoelen of andere berekeningen van het algoritme.
* 'Afgekorte tab titels' zorgt dat er meer tab titels op je scherm passen, bijvoorbeeld het 'Open APS'-tabblad wordt 'OAPS', 'Doelen' wordt 'Doel' etc.
* 'Lokaal gegenereerde waarschuwingen' laat je kiezen of je een waarschuwing ontvangt en na hoe lang voor als je geen bloedglucose waarden binnenkrijgt of de pomp onbereikbaar is. Als je vaak waarschuwingen over een onbereikbare pomp krijgt, schakel dan de BT Watchdog in in de geavanceerde pompinstellingen.   
      
    'Gebruik systeem notificaties voor waarschuwingen en notificaties': hiermee zullen ze als meldingen bovenin jouw Android-menubalk verschijnen.

## Data Keuzes

* 'Fabric Upload' zal crashrapporten en gebruiksgegevens naar de ontwikkelaars sturen.