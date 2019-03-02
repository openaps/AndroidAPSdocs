# Instellingen

## Wachtwoord voor instelligen

Hiermee kunt je een wachtwoord instellen om onbedoelde of ongeoorloofde wijzigingen in je Instellingen te voorkomen. Nadat je hier een wachtwoord hebt ingevoerd, zul je steeds dat wachtwoord moeten invoeren om toegang te krijgen tot Instellingen. Om de wachtwoordoptie te verwijderen, verwijder dan de tekst uit dit veld.

## Leeftijd Patiënt

AndroidAPS stelt veiligheidslimieten in op basis van de leeftijd die je hier hebt geselecteerd. Als je tegen de beperkingen van zo'n zogenaamde 'harde limiet' (zoals max bolus) aanloopt, dan is het tijd om te kiezen voor de daaropvolgende categorie. Het is een slecht idee om hogere categorie te kiezen dan past bij jouw echte leeftijd/resistentie, omdat het kan leiden tot een overdosis als je de verkeerde waarde in het insulin-dialoogvenster intypt (bijv. als je de komma verkeerd zet).

## Algemeen

* Kies welke taal je wilt gebruiken. Als je taal niet beschikbaar is, of niet alle woorden worden vertaald, voel je dan vrij om suggesties te doen op [Crowdin](https://crowdin.com/project/androidaps) of vraag in de [gitter chatroom](https://gitter.im/MilosKozak/AndroidAPS).
* Quick Wizard settings allows you to add a quick button for a frequent snack or meal, enter your decided carb details and on the homescreen if you select the quick wizard button it will calculate and bolus for those carbs based on your current ratios (taking into account blood glucose value or insulin on board if set up).

## Careportal

'Entered by' is the text displayed in your nightscout careportal 'entered by' field. Set this to something meaningful to you, whether it is the app name, the person's name or the phone name (for example if you are using AndroidAPS as NS Client on a phone that is not the patient's phone you may wish to distinguish between phone owners here).

## Behandelingen veiligheid

### Max toegestane bolus [E]

Dit is de maximale hoeveelheid bolus insuline die AAPS mag leveren. Deze instelling is een veiligheidslimiet om te voorkomen dat er per ongeluk een enorme bolus wordt afgegeven door een misrekening of typfout van de gebruiker. Het wordt aangeraden om deze in te stellen op de maximale hoeveelheid bolus insuline die je ooit voor een maaltijd of correctie nodig zult hebben. Deze beperking wordt ook toegepast op de resultaten van de Bolus Calculator.

### Max toegestane koolhydraten [g]

Dit is de maximale hoeveelheid koolhydraten waarvoor de Bolus Calculator insuline mag geven. Deze instelling is een veiligheidslimiet om te voorkomen dat er per ongeluk een enorme bolus wordt afgegeven door een misrekening of typfout van de gebruiker. Het wordt aangeraden om deze in te stellen op de maximale hoeveelheid koolhydraten die je ooit zult eten bij een maaltijd.

## Loop

Je kunt hier schakelen tussen open loop en closed loop. Open loop betekent dat er suggesties worden gedaan voor tijdelijke basaalstanden (Temporary Basal Rates, TBR) op basis van jouw gegevens. Deze suggesties laat je telefoon zien in de vorm van een melding, je moet vervolgens handmatig kiezen om ze te accepteren en handmatig in je pomp invoeren. Closed loop (gesloten loop) betekent dat TBR-suggesties automatisch naar je pomp worden verzonden zonder bevestiging of invoer van jou. In het Overzicht-scherm kun je in de linker bovenhoek zien of je in de open of closed loop zit. Wanneer je deze knop ingedrukt houd, dan kun je ook schakelen tussen open en closed loop.

## OpenAPS AMA

Dankzij de geavanceerde maaltijdhulp (Advanced Meal Assist, AMA) kan het systeem na een maaltijdbolus sneller een hogere tijdelijke basaalstand geven, zolang je wel je koolhydraten correct hebt ingevoerd. Op het tabblad Configurator kun je dit selecteren, en vervolgens hier de veiligheidsinstellingen zien. Je zult Doel 7 moeten hebben voltooid om deze functie te gebruiken. Onderstaande tekst gaat dieper in op de instellingen voor AMA, de andere opties (MA en SMB) worden elders in deze wiki omschreven op de pagina over "OpenAPS functies". Of je kunt meer lezen over de instellingen en [Autosens in de OpenAPS docs](http://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autosens.html).

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

## Absorptie instellingen

Wanneer je AMA Autosens aan hebt staan, kun je jouw maximale maaltijd absorptie tijd invoeren. Als je vaak maaltijden met een hoog vet- of eiwitgehalte eet, moet je de opnametijd verhogen.

## Pomp instellingen

De opties hier zullen variëren afhankelijk van welke pomp je hebt geselecteerd in de 'Configurator'. Koppel en stel je pomp in zoals beschreven staat in de [DanaR Insuline Pomp](../Configuration/DanaR-Insulin-Pump.md) of [DanaRS Insuline Pomp](../Configuration/DanaRS-Insulin-Pump.md) of [Accu Chek Combo Pomp](../Configuration/Accu-Chek-Combo-Pump.md) instructies. Als je AndroidAPS gebruikt in 'open loop' modus, zorg er dan voor dat je Virtuele Pomp hebt geselecteerd in de Configurator.

## NS Client

* Stel hier jouw 'nightscout URL' in (https://yourwebsitename.herokuapp.com of https://yourwebsitename.azurewebsites.net), en jouw 'API secret' (een wachtwoord van 12 tekens lang uit jouw heroku of azure variabelen). Hierdoor kunnen gegevens zowel worden gelezen als geschreven tussen de Nightscout website en AndroidAPS. Als je vastzit in Doel 1, controleer dan goed of je hier geen typfouten hebt gemaakt.
* 'Log app start naar Nightscout' zal elke keer dat de app is gestart, een notitie maken. De app zou niet vaker dan één keer per dag opnieuw moeten starten; gebeurt dit vaker dan wijst dat op een probleem. Vaak wordt dit veroorzaakt doordat de accubesparings-functie van jouw telefoon steeds de app afsluit. Los dit op door de accubesparings-instellingen van jouw telefoon aan te passen. 
* 'Activeer lokaal delen' onder de Geavanceerde Instellingen zal jouw careportal gegevens doorsturen naar andere apps op je telefoon, zoals xDrip+. 
* 'Alarm opties' kun je selecteren om de standaard Nightscout alarmen te gebruiken. Om de alarmen voor Urgent High (urgent hoog), High (hoog), Low (laag) en Urgent Low (urgent laag) in te schakelen, zul je deze moeten toevoegen aan jouw [heroku of azure variabelen](http://www.nightscout.info/wiki/welcome/website-features#customalarms). Deze alarmen werken alleen zolang de telefoon verbinding heeft met Nightscout (internet moet dus aanstaan op de telefoon). Alarmen via Nightscout zijn bedoeld voor bijv. ouder/verzorgers die hun kind vanaf afstand volgen. Als de BG-bron op de telefoon van de patiënt zelf staat, gebruik dan liever die alarmen (bijv. xDrip+) want dan ben je niet afhankelijk van een internetverbinding.

## SMS Communicator

Deze instelling maakt externe controle van de app mogelijk door SMS instructies te sturen naar de telefoon die de patiënt bij zich heeft. Bijvoorbeeld het uitschakelen van de loop of het geven van een bolus. Hoe dit werkt, wordt beschreven in [SMS commando's](../Usage/SMS-Commands.md) maar het zal alleen worden weergegeven in de Instellingen als je deze optie hebt aangevinkt in de Configurator.

## Overig

* Je kunt hier standaardwaarden instellen voor jouw tijdelijke streefdoelen (Eet binnenkort en Activiteit). Als je bijvoorbeeld "Eet binnenkort" kiest uit de drop-down box op het Overzicht-scherm, dan zal automatisch de duur en streef-BG worden ingevuld die je hier hebt aangegeven. Voor meer informatie over het gebruik van tijdelijke streefdoelen (Temp Targets) zie de [OpenAPS functies](../Usage/Open-APS-features.md). 
* Je kunt standaardhoeveelheden instellen voor het vullen (van de canule, en van de slang). De hoeveelheden die je hier instelt zal de pomp wel afgeven, maar deze hoeveelheden worden niet meegeteld bij IOB berekeningen. Hoeveel eenheden nodig zijn staat in het instructieboekje in de doos met infuussets, dit verschilt per type infuusset en is afhankelijk van de lengte van de canule en de lengte van de slang.
* Je kunt de visualisatie van jouw hoge en lage BG waardes op het Overzicht-scherm en op je smartwatch instellen. Let op: dit bepaalt alleen hoe jouw grafieken eruit zien, en heeft geen enkele link met de streefdoelen of andere berekeningen van het algoritme.
* 'Afgekorte tab titels' zorgt dat er meer tab titels op je scherm passen, bijvoorbeeld het 'Open APS'-tabblad wordt 'OAPS', 'Doelen' wordt 'Doel' etc.
* 'Lokaal gegenereerde waarschuwingen' laat je kiezen of je een waarschuwing ontvangt en na hoe lang voor als je geen bloedglucose waarden binnenkrijgt of de pomp onbereikbaar is. Als je vaak waarschuwingen over een onbereikbare pomp krijgt, schakel dan de BT Watchdog in in de geavanceerde pompinstellingen.

## Advanced Settings ``requires more work

* OpenAPS MA
* Always use short average delta instead of... Enabling this setting is useful when you are using data from unfiltered sources such as xDrip+, as opposed to filtered sources such as an official Dexcom Receiver. Filtered data appears to be smooth, whereas unfiltered data can appear to be jumpy. This unfiltered data could cause AndroidAPS to apply Temporary Basal Rate changes more frequently than are really needed, as the OpenAPS algorithm reacts to the jumpy data. With this setting enabled, the OpenAPS algorithm will use the Short Average Delta (the average change in blood glucose over the past 15 minutes) instead of the last blood glucose reading received. This effectively has a "smoothing" effect on the data and attempts to compensate for any jumpy readings. Users of Abbot Freestyle Libre sensors collecting their glucose data via devices such as LimiTTers may find this setting provides better results with AAPS.

For further tips regarding data smoothing when using xDrip+ as the data source, see [Smoothing Blood Glucose Data in xDrip+](../Usage/Smoothing-blood-glucose-data-in-xDrip.md).

* OpenAPS preferences.json - before changing any of these settings, please view the descriptions of the safety values used and why in the [OpenAPS docs](https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/preferences-and-safety-settings.html).
* 'Ignore profile switch events' will not send your current AndroidAPS profile to the pump. It is encouraged not to select this unless you are testing code, as for safety sending profile switch events to the pump's basal profile 1 means than should AndroidAPS stop working or loose connection with the pump then your pump will revert to the same profile as default rather than you having to manually enter it into the pump. For more information on profiles see [Profiles](/docs/Usage/Profiles).
* 'BT Watchdog' select this option if you keep loosing connection with your pump. When the pump looses connection it will toggle bluetooth off and on for you to improve the connection.

## Wear Settings

For more information on the wear watchface settings see [Watchfaces](../Configuration/Watchfaces.md).