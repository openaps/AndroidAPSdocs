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

* Inschakelen van [superbolus](../Getting-Started/Screenshots#sectie-a) in de boluswizard.

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

You can toggle between open and closed looping here.

**Open looping** means TBR suggestions are made based on your data and appear as a notification, but you must manually choose to accept them and manually enter them into your pump.

**Closed looping** means TBR suggestions are automatically sent to your pump without confirmation or input from you.

The homescreen will display in the top left corner whether you are open or closed looping, and pressing and holding this homescreen button will also allow you to toggle between the two.

### Minimal Request Rate

When using open loop you will receive notifications every time AAPS recommends to adjust basal rate. To reduce number of notifications you can either use a wider bg target range or increase percentage of the minimal request rate. This defines the relative change required to trigger a notification.

![Minimal request rate](../images/MinRequestChange.png)

Please note: In closed loop mode a single target instead of target range (i.e. 5,5 mmol instead of 5,0 - 7,0 mmol) is recommended.

## OpenAPS AMA

OpenAPS Advanced Meal Assist (AMA) allows the system to high-temp more quickly after a meal bolus IF you enter carbs reliably. Turn it on in the Config tab to view the safety settings here, you will need to have completed [Objective 9](../Usage/Objectives#objective-9-enabling-additional-oref0-features-for-daytime-use-such-as-advanced-meal-assist-ama) to use this feature. You can read more about the settings and [Autosens in the OpenAPS docs](http://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autosens.html).

### Max U/hr a Temp Basal can be set to

This setting exists as a safety limit to prevent AAPS from ever being capable of giving a dangerously high basal rate. The value is measured in units per hour (u/hr). We raden je aan je verstand te gebruiken bij het invullen van deze waarde. A good recommendation is to take the **highest basal rate** in your profile and **multiply it by 4**. For example, if the highest basal rate in your profile was 0.5u/hr you could multiply that by 4 to get a value of 2u/hr.

### Maximum basal IOB OpenAPS can deliver [U]

Amount of additional basal insulin (in units) allowed to accumulate in your body, on top of your normal basal profile. Once this value is reached, AAPS will stop giving additional basal insulin until your basal Insulin on Board (IOB) has decayed to within this range again.

* Deze waarde laat bolus IOB buiten beschouwing, alleen basale insuline wordt meegerekend.
* Het berekenen en sturen op deze waarde gebeurt onafhankelijk van jouw normale basale insuline. Alleen de extra basale insuline die werd afgegeven bovenop je normale basaalstand, wordt meenomen.
* Deze waarde wordt gemeten in eenheden (E).

When you begin looping, **it is advised to set Max Basal IOB to 0** for a period of time, while you are getting used to the system. This prevents AAPS from giving any additional basal insulin at all. During this time AAPS will still be able to limit or turn off your basal insulin to help prevent hypoglycaemia.

This is an important step in order to:

* Je de tijd krijgt om veilig gebruik te maken van het AAPS-systeem en rustig kunt observeren hoe het werkt.
* Je nu de kans hebt om jouw basaalprofiel en insuline gevoeligheidsfactor (ISF, Insulin Sensitivity Factor) perfect te maken.
* Je kunt zien hoe AAPS jouw basale insuline naar beneden bijstelt om hypo's te voorkomen.

When you feel comfortable, you can allow the system to start giving you additional basal insulin, by raising the Max Basal IOB value. The recommended guideline for this is to take the **highest basal rate** in your profile and **multiply it by 3**. For example, if the highest basal rate in your profile was 0.5u/hr you could multiply that by 3 to get a value of 1.5u.

* Je kunt voorzichtig beginnen met deze waarde en deze langzaam verhogen. 
* Dit zijn alleen richtlijnen; ieder mens is anders. Je kunt onderweg merken dat jij zelf minder of meer nodig hebt dan wat hier wordt aanbevolen, begin altijd voorzichtig en pas langzaam aan.

*Note: As a safety feature, Max Basal IOB is hard-limited to 7u.*

## Opname instellingen

If you have selected to use AMA Autosens then you will be able to enter your maximum meal absorption time and how frequently you want autosense to refresh. If you often eat high fat or protein meals you will need to increase your meal absorption time.

## Pomp instellingen

The options here will vary depending on which pump driver you have selected in 'Config Builder'. Pair and set your pump up according to the pump related instructions:

* [DanaR Insulinepomp](../Configuration/DanaR-Insulin-Pump.md) 
* [DanaRS Insulinepomp](../Configuration/DanaRS-Insulin-Pump.md) 
* [Accu Chek Combo Pomp](../Configuration/Accu-Chek-Combo-Pump.md) 
* [Accu Chek Insight Pump](../Configuration/Accu-Chek-Insight-Pump.md) 
* [Medtronic Pump](..//Configuration/MedtronicPump.md)

If using AndroidAPS to open loop then make sure you have selected Virtual Pump in config builder.

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

This setting allows remote control of the app by texting instructions to the patients phone which the app will follow such as suspending loop, or bolusing. Further information is described in [SMS Commands](../Children/SMS-Commands.rst) but it will only display in Preferences if you have selected this option in the Config Builder.

## Andere

* Je kunt bij Standaard tijdelijk basaal standaardwaarden instellen voor jouw tijdelijke streefdoelen (Eet binnenkort, Hypo en Activiteit). Als je bijvoorbeeld "Eet binnenkort" kiest uit de drop-down box op het Overzicht-scherm, dan zal automatisch de duur en streef-BG worden ingevuld die je hier hebt aangegeven. Voor meer informatie over het gebruik van tijdelijke streefdoelen (Temp Targets) zie de [OpenAPS functies](../Usage/Open-APS-features.md). 
* Je kunt standaardhoeveelheden instellen voor het vullen (van de canule, en van de slang). De hoeveelheden die je hier instelt zal de pomp wel afgeven, maar deze hoeveelheden worden niet meegeteld bij IOB berekeningen. Hoeveel eenheden nodig zijn staat in het instructieboekje in de doos met infuussets, dit verschilt per type infuusset en is afhankelijk van de lengte van de canule en de lengte van de slang.
* Je kunt het grafiekgebied voor weergave van jouw hoge en lage BG waardes (groen gekleurde gebied) op het Overzicht-scherm en op je smartwatch instellen. Let op: dit bepaalt alleen hoe jouw grafieken eruit zien, en heeft geen enkele link met de streefdoelen of andere berekeningen van het algoritme.
* 'Afgekorte tab titels' zorgt dat er meer tab titels op je scherm passen, bijvoorbeeld het 'Open APS'-tabblad wordt 'OAPS', 'Doelen' wordt 'Doel' etc.
* 'Lokaal gegenereerde waarschuwingen' laat je kiezen of je een waarschuwing ontvangt en na hoe lang voor als je geen bloedglucose waarden binnenkrijgt of de pomp onbereikbaar is. Als je vaak waarschuwingen over een onbereikbare pomp krijgt, schakel dan de BT Watchdog in in de geavanceerde pompinstellingen.   
      
    'Gebruik systeem notificaties voor waarschuwingen en notificaties': hiermee zullen ze als meldingen bovenin jouw Android-menubalk verschijnen.

## Data Keuzes

* 'Fabric Upload' zal crashrapporten en gebruiksgegevens naar de ontwikkelaars sturen.