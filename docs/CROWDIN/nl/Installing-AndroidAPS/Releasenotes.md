# Release notes

Volg de instructies in de handleiding voor het [bijwerken van de app naar een nieuwe versie](../Installing-AndroidAPS/Update-to-new-version.md). Daar vind je ook oplossingen voor veelvoorkomende problemen.

Vanaf versie 2.3 is er een nieuwe update procedure ingesteld. Zodra een nieuwe update beschikbaar is zie je de volgende melding:

![Informatie bijwerken](../images/AAPS_LoopDisable90days.png)

Dan heb je 60 dagen om bij te werken. Als je niet binnen deze 60 dagen bijwerkt, zal AAPS terugvallen naar LGS (Lage Glucose Stop - zie [veelgebruikte woordenlijst](../Getting-Started/Glossary.md)) zoals in [Doel 4](../Usage/Objectives.md).

Als je daarna nog eens 30 dagen wacht met bijwerken (dus 90 dagen vanaf de datum dat de nieuwe versie beschikbaar kwam) zal AAPS overschakelen naar Open Loop.

Deze harde beperkingen zijn uiteraard niet bedoeld om je te pesten, maar zijn er om veiligheidsredenen. Nieuwe versies van AndroidAPS bevatten niet alleen nieuwe handige functies, maar ook belangrijke veiligheidsupdates. Daarom is het noodzakelijk dat elke gebruiker zijn app bijwerkt zodra een nieuwe versie beschikbaar komt. Helaas zijn er nog steeds signalen dat sommige gebruikers een hele oude versie van hun app gebruiken, dus dit is een poging om de veiligheid voor individuele gebruikers en de hele doe-het-zelf loop-gemeenschap te verbeteren. 

## Versie 2.3

Release datum: 25-04-2019

### Belangrijkste nieuwe functies

* Belangrijke veiligheidsfix(!) voor Insight
* Historiek-venster werkt weer
* Bugfix voor delta-berekeningen
* Taal-updates
* GIT-check ingebouwd + waarschuwing voor gradle upgrade toegevoegd
* Meer automatische tests
* Potentiële crash in alarm Sound Service gerepareerd (met dank aan @lee-b !)
* Bugfix BG-Broadcast (functioneert nu onafhankelijk van SMS-toestemmingen)
* Versie Checker geïntroduceerd

## Versie 2.2.2

Release datum: 07-04-2019

### Belangrijkste nieuwe functies

* Tijdelijke fix voor probleem met Gevoeligheidsdetectie: Tijdelijk Streefdoel verhogen/verlagen is gedeactiveerd
* Nieuwe vertalingen
* Verbetreringen aan Insight stuurprogramma
* SMS plugin fix

## Versie 2.2

Release datum: 29-03-2019

### Belangrijkste nieuwe functies

* [Zomer/wintertijd bugfix](../Usage/Timezone-traveling#time-adjustment-daylight-savings-time-dst)
* Wear Update voor smartwatches
* [SMS Commando's](../Usage/SMS-Commands.md) update
* Optie om terug te gaan in leerdoelen.
* Onderbreek loop als telefoon-opslagruimte vol is

## Versie 2.1

Release datum: 03-03-2019

### Belangrijkste nieuwe functies

* Accu-Chek [Insight](../Configuration/Accu-Chek-Insight-Pump.md) ondersteuning (door Tebbe Ubben en JamOrHam)
* Statusindicatoren op het Overzicht-scherm (Nico Schmitz)
* Zomer/wintertijd omschakeling (Roumen Georgiev)
* Correctie voor namen van Nightscout-profielen (Johannes Mockenhaupt)
* Correctie voor User Interface blokkering (Johannes Mockenhaupt)
* Ondersteuning voor bijgewerkte G5 app (Tebbe Ubben en Milos Kozak)
* G6, Poctech, Tomato, Eversense BG-bron ondersteuning (Tebbe Ubben en Milos Kozak)
* Correctie voor uitschakelen SMB Instellingen (Johannes Mockenhaupt)

### Opmerking

* Als je een niet-standaard `smbmaxminuten` gebruikt, moet je deze waarde opnieuw instellen

## Versie 2.0

Release datum: 03-11-2018

### Belangrijkste nieuwe functies

* oref1/SMB functie toegevoegd ([oref1 documentatie](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/oref1.html)). Lees de documentatie om te weten wat je van SMB moet verwachten, hoe het werkt, wat je ermee kunt bereiken en hoe je het kunt gebruiken, zodat het zal functioneren zoals het bedoeld is.
* Ondersteuning voor Accu-check Combo pomp ([installatie instructies](../Configuration/Accu-Chek-Combo-Pump.md))
* Setup wizard: gidst je door het proces heen om AndroidAPS in te stellen

### Instellingen die je moet aanpassen bij het overschakelen van AMA naar SMB

* Doel 8 moet zijn gestart om SMBs aan te kunnen zetten (SMB tab toont in het algemeen welke beperkingen gelden)
* maxIOB bevat nu *alle* IOB, niet alleen de toegevoegde basale insuline. Dat betekent dus, wanneer je jezelf een maaltijdbolus van 8E hebt gegeven en maxIOB is 7E, dat er geen SMBs worden afgegeven totdat IOB onder de 7E is gezakt.
* Wanneer je van AMA naar SMB wisselt, dan moet je jouw instelling voor min_5m_carbimpact in de Opname instellingen veranderen van 3 naar 8. Je moet dit handmatig doen wanneer je van AMA naar SMB wisselt.
* Let op bij het bouwen van de AndroidAPS 2.0 apk: Configuration on demand wordt niet ondersteund door de huidige versie van de Android Gradle plugin! Als je een foutmelding krijgt die gaat over "on demand configuration" kun je het volgende doen:
  
  * Open het Preferences (Voorkeuren) venster door op File > Settings (Bestand > Instellingen) te klikken (op Mac, Android Studio > Voorkeuren).
  * In het linkerscherm, klik op Build, Execution, Deployment > Compiler.
  * Vink de Configure on demand checkbox uit.
  * Klik op Apply (Toepassen) of OK.

### Tabblad Overzicht

* Via de knoppen bovenaan heb je makkelijk toegang tot het pauzeren/voortzetten van de loop, het bekijken/wisselen van profiel en het starten/stoppen van tijdelijke streefdoelen (TTs). Standaardinstellingen voor Tijdelijke Streefdoelen. De nieuwe Hypo Streefdoel optie is een hoog Tijdelijk Streefdoel dat voorkomt dat de loop te agressief corrigeert voor de hypo-koolhydraten.
* Behandeling knoppen: de oude behandeling knop is nog steeds beschikbaar maar standaard verborgen. Je kunt zelf aangeven welke knoppen zichtbaar zijn. Nieuwe insuline en koolhydraten knoppen (inclusief [eCarbs/uitgestelde koolhydraten](../Usage/Extended-Carbs.md))
* Lijnkleuren voorspellingen: 
  * Oranje: COB (kleur wordt meestal gebruikt om COB en koolhydraten weer te geven)
  * Donker blauw: IOB (kleur wordt meestal gebruikt om IOB en insuline weer te geven)
  * Lichtblauw: tijdelijk basaal van 0 (zero-temp)
  * Donkergeel: UAM
* Optie om een notitieveld te tonen in insuline/koolhydraten/calculator/ontlucht+vul dialoogvensters. Notities worden geüpload naar NS
* Bijgewerkt ontlucht/vul dialoogvenster maakt het mogelijk om te ontluchten/vullen via de telefoon, en infuuswissels en cartridgewissels te noteren in de Careportal

### Smartwatch

* Aparte build variant is komen te vervallen, nu opgenomen in de reguliere full build. Om de bolus bediening te gebruiken vanaf het horloge moet deze instelling op de telefoon worden ingeschakeld
* Wizard vraagt nu alleen maar naar koolhydraten (en percentage indien ingeschakeld in de horloge instellingen). Op de telefoon kan worden in de instellingen worden geconfigureerd welke parameters worden meegenomen in de berekening
* bevestigings- en en informatie-dialoogvensters werken nu ook in wear 2.0
* Nieuw eCarbs menu-item toegevoegd

### Nieuwe plugins

* PocTech app als BG-bron
* Dexcom patched app als BG-bron
* oref1 gevoeligheidsdetectie

### Overig

* App gebruikt nu een 'drawer' om alle plugins te tonen; geselecteerde plugins in de configurator worden weergegeven als tabs bovenaan het scherm (favorieten)
* Configurator en doelen tabbladen gewijzigd waarbij beschrijvingen zijn toegevoegd
* Nieuw app icoon
* Veel verbeteringen en bugfixes
* Nightscout-onafhankelijke waarschuwingen als de pomp langere tijd onbereikbaar is (bijv. lege pomp batterij) en bij gemiste BG lezingen (zie *Lokale waarschuwingen* in instellingen)
* Optie om het scherm aan te houden
* Optie om meldingen als Android melding te tonen
* Geavanceerde filtering (wat het mogelijk maakt om SMB altijd in te schakelen en 6 uur na maaltijden) ondersteund voor gepatchte Dexcom app of xDrip met G5 native mode als BG-bron.