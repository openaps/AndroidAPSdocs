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

* Inschakelen van [superbolus](../Getting-Started/Screenshots#section-a) in de boluswizard.

### Status lights

* Status lights give a visual warning for low reservoir and battery level as well as overdue site change. Extended version shows elapsed time / battery percentage.
    
    ![Status lights - detail](../images/StatusLights_V2_5.png)
    
    Settings for status lights must be made in Nightscout settings. Set the following variables:
    
    * Cannula age: CAGE_WARN and CAGE_URGENT (standard 48 and 72 hours)
    * Insulin age (reservoir): IAGE_WARN and IAGE_URGENT (standard 72 and 96 hours)
    * Sensor age: SAGE_WARN and SAGE_URGENT (standard 164 and 166 hours)
    * Battery age: BAGE_WARN and BAGE_URGENT (standard 240 and 360 hours)

* Treshold for warning reservoir level and critical reservoir level.

* Treshold for warning battery level and critical battery level.

## Behandelingen veiligheid

### Max allowed bolus [U]

Dit is de maximale hoeveelheid bolus insuline die AAPS mag leveren. Deze instelling is een veiligheidslimiet om te voorkomen dat er per ongeluk een enorme bolus wordt afgegeven door een misrekening of typfout van de gebruiker. Het wordt aangeraden om deze in te stellen op de maximale hoeveelheid bolus insuline die je ooit voor een maaltijd of correctie nodig zult hebben. Deze beperking wordt ook toegepast op de resultaten van de Bolus Calculator.

### Max allowed carbs [g]

Dit is de maximale hoeveelheid koolhydraten waarvoor de Boluscalculator insuline mag geven. Deze instelling is een veiligheidslimiet om te voorkomen dat er per ongeluk een enorme bolus wordt afgegeven door een misrekening of typfout van de gebruiker. Het wordt aangeraden om deze in te stellen op de maximale hoeveelheid koolhydraten die je ooit zult eten bij een maaltijd.

## Loop

Je kunt hier schakelen tussen open loop en closed loop. Open loop betekent dat er suggesties worden gedaan voor tijdelijke basaalstanden (Temporary Basal Rates, TBR) op basis van jouw gegevens. Deze suggesties laat je telefoon zien in de vorm van een melding, je moet vervolgens handmatig kiezen om ze te accepteren en handmatig in je pomp invoeren. Closed loop (gesloten loop) betekent dat TBR-suggesties automatisch naar je pomp worden verzonden zonder bevestiging of invoer van jou. In het Overzicht-scherm kun je in de linker bovenhoek zien of je in de open of closed loop zit. Wanneer je deze knop ingedrukt houd, dan kun je ook schakelen tussen open en closed loop.

## OpenAPS AMA

Dankzij de geavanceerde maaltijdhulp (Advanced Meal Assist, AMA) kan het systeem na een maaltijdbolus sneller een hogere tijdelijke basaalstand geven, zolang je wel je koolhydraten correct hebt ingevoerd. In de Configurator kun je dit inschakelen, en de bijbehorende veiligheidsinstellingen bekijken/aanpassen. Je moet minimaal [Doel 9](../Usage/Objectives#objective-9-enabling-additional-oref0-features-for-daytime-use-such-as-advanced-meal-assist-ama) hebben voltooid om deze functie te gebruiken. Onderstaande tekst gaat dieper in op de instellingen voor AMA, de andere opties (MA en SMB) worden elders in deze wiki omschreven op de pagina over "OpenAPS functies". Of je kunt meer lezen over de instellingen en [Autosens in de OpenAPS docs](http://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autosens.html).

### Max U/hr a Temp Basal can be set to

Deze instelling is een veiligheidslimiet om te voorkomen dat AAPS ooit een gevaarlijk hoge basaalstand kan instellen. Dit getal wordt weergegeven in eenheden per uur (E/uur). We raden je aan je verstand te gebruiken bij het invullen van deze waarde. Een goede aanbeveling is om de **hoogste basaalstand** in je profiel te nemen en die te **vermenigvuldigen met 4**. Als de hoogste basaalstand in je profiel bijvoorbeeld 0,5 E/uur is, dan moet je dat vermenigvuldigen met 4 om een waarde van 2 E/uur te krijgen.

### Maximum basal IOB OpenAPS can deliver [U]

Hoeveelheid extra basale insuline (in eenheden) tot waaraan OpenAPS de hoeveelheid insuline in jouw lichaam mag laten oplopen, bovenop je normale basale insuline. Zodra deze waarde is bereikt, zal AAPS stoppen met het geven van extra basale insuline totdat jouw basale Insulin On Board (IOB, insuline aan boord) naar binnen dit bereik is teruggelopen.

* This value does not consider bolus IOB, only basal.
* This value is calculated and monitored independently of your normal basal rate. It is only the additional basal insulin on top of that normal rate that is considered.
* This value is measured in insulin units (u).

Wanneer je begint met loopen, wordt tijdens een van de leerdoelen een tijd lang **Max Basal IOB beperkt naar 0**, zodat je gewend raakt aan het systeem. Dit zorgt ervoor dat AAPS helemaal geen extra basale insuline kan geven. Terwijl AAPS wel je basale insuline naar beneden kan bijstellen, of zelfs helemaal uitschakelen om een hypo te helpen voorkomen.

Dit is een belangrijke stap omdat:

* Have a period of time to safely get used to the AAPS system and monitor how it works.
* Take the opportunity to perfect your basal profile and Insulin Sensitivity Factor (ISF).
* See how AAPS limits your basal insulin to prevent hypoglycaemia.

Pas na een tijd mag je het systeem toestaan om extra basale insuline te geven door de Max Basal IOB waarde te verhogen. Als eerste start wordt aangeraden om de **hoogste basaalstand** in je profiel te nemen en die te **vermenigvuldigen met 3**. Als de hoogste basaalstand in je profiel bijvoorbeeld 0,5 E/uur is, dan moet je dat vermenigvuldigen met 3 om een waarde van 1,5 E/uur te krijgen.

* You can start conservatively with this value and increase it slowly over time. 
* These are guidelines only; everyone's body is different. You may find you need more or less than what is recommended here, but always start conservatively and adjust slowly.

*Opmerking: om veiligheidsredenen geldt er voor Max Basal IOB een 'harde limiet' (voor volwassenen is die 7E). Zie ook de pagina over "OpenAPS functies" elders in deze wiki.*

## Opname instellingen

Wanneer je AMA Autosens aan hebt staan, kun je jouw maximale maaltijd absorptie tijd invoeren. Als je vaak maaltijden met een hoog vet- of eiwitgehalte eet, moet je de opnametijd verhogen.

## Pomp instellingen

De opties hier zullen variëren afhankelijk van welke pomp je hebt geselecteerd in de 'Configurator'. Koppel en stel je pomp in volgens de instructies van jouw pomp:

* [DanaR Insulin Pump](../Configuration/DanaR-Insulin-Pump.md) 
* [DanaRS Insulin Pump](../Configuration/DanaRS-Insulin-Pump.md) 
* [Accu Chek Combo Pomp](../Configuration/Accu-Chek-Combo-Pump.md) 
* [Medtronic Pump](..//Configuration/MedtronicPump.md)

Als je AndroidAPS gebruikt in 'open loop' modus, zorg er dan voor dat je Virtuele Pomp hebt geselecteerd in de Configurator.

## NS Client

* Set your 'nightscout URL' here (https://yourwebsitename.herokuapp.com or https://yourwebsitename.azurewebsites.net), and the 'API secret' (a 12 character password recorded in your heroku or azure variables). This enables data to be read and written between both the nightscout website and AndroidAPS. Double check for typos here if you are stuck in Objective 1.
* **Make sure that the URL is WITHOUT /api/v1/ at the end.**
    
    ![NSClient URL](../images/NSClientURL.png)

* 'Log app start to nightscout' will record a note in your careportal entries every time the app is started. The app should not be needing to start more than once a day; more frequently than this suggests a problem.

* 'Alarm options' allows you to select which default nightscout alarms to use through the app. For the alarms to sound you need to set the Urgent High, High, Low and Urgent Low alarm values in your [heroku or azure variables](http://www.nightscout.info/wiki/welcome/website-features#customalarms). They will only work whilst you have a connection to nightscout and are intended for parent/carers, if you have the CGM source on your phone then use those alarms instead (e.g. xdrip+).
* 'Enable local broadcasts' will share your careportal data to other apps on the phone such as xdrip.
* 'Always use basal absolute values' must be activated if you want to use Autotune properly.
    
    **Do not activate this when using [Insight pump](https://androidaps.readthedocs.io/en/latest/EN/Configuration/Accu-Chek-Insight-Pump#settings-in-aaps)!** It would lead to false TBR settings in Insight pump.

## SMS Communicator

Deze instelling maakt externe controle van de app mogelijk door SMS instructies te sturen naar de telefoon die de patiënt bij zich heeft. Bijvoorbeeld het uitschakelen van de loop of het geven van een bolus. Hoe dit werkt, wordt beschreven in [SMS commando's](../Children/SMS-Commands.rst) maar het zal alleen worden weergegeven in de Instellingen als je deze optie hebt aangevinkt in de Configurator.

## Andere

* You can set defaults for your temp targets here for the different types of temp target (eating soon and activity). When you select a temp target and then choose, for example, "Eating Soon" from the drop down box, it will automatically populate the duration and value for you based on the figures you provided here. For more information on use of Temp Targets see [OpenAPS features](../Usage/Open-APS-features.md). 
* You can set default prime amounts - this will prime the pump the value specified and this insulin is counted as used from the reservoir but not counted in IOB calculations. See the instruction booklet in your cannula box for how many units should be primed depending on needle length and tubing length.
* You can change the display on the homescreen and watch for the values that are in range. Note that this is just how the graphs look and doesn't impact on your target or calculations.
* 'Shorten tab titles' allows you to see more tab titles on screen, for example the 'Open APS' tab becomes 'OAPS', 'Objectives' becomes 'Obj' etc.
* 'Local Alerts' lets you decide if you receive a warning and after how long for not receiving blood glucose values (stale data) or the pump being unreachable. If you frequently get pump unreachable alerts then enable BT Watchdog in the Advanced Settings.

## Data Keuzes

* 'Fabric Upload' will send crash reporting and feature usage data to the developers.