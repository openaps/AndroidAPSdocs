# Release opmerkingen

## Versie 2.2

Release datum: 29-03-2019

### Belangrijkste nieuwe functies

* [Zomer/wintertijd correctie](../Usage/Timezone-traveling#time-adjustment-daylight-savings-time-dst)
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

### Opmerkingen

* Als je een niet-standaard `smbmaxminuten` gebruikt, moet je deze waarde opnieuw instellen

## Versie 2.0

Release datum: 03-11-2018

### Belangrijkste nieuwe functies

* oref1/SMB ondersteuning ([oref1 documentatie](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/oref1.html)). Lees de documentatie om te weten wat je van SMB moet verwachten, hoe het werkt, wat je ermee kunt bereiken en hoe je het kunt gebruiken, zodat het zal functioneren zoals het bedoeld is.
* Ondersteuning voor Accu-check Combo pomp ([installatie instructies](../Configuration/Accu-Chek-Combo-Pump.md))
* Setup wizard: gidst je door het proces heen om AndroidAPS in te stellen

### Instellingen die je moet aanpassen bij het overschakelen van AMA naar SMB

* Doel 8 moet zijn gestart om SMBs aan te kunnen zetten (SMB tab toont in het algemeen welke beperkingen gelden)
* maxIOB bevat nu *alle* IOB, niet alleen de toegevoegde basale insuline. Dat betekent dus, wanneer je jezelf een maaltijdbolus van 8E hebt gegeven en maxIOB is 7E, dat er geen SMBs worden afgegeven totdat IOB onder de 7E is gezakt.
* Wanneer je van AMA naar SMB wisselt, dan moet je jouw instelling voor min_5m_carbimpact in de Opname instellingen veranderen van 3 naar 8. Je moet deze instelling handmatig veranderen.
* Let op bij het bouwen van de AndroidAPS 2.0 apk: Configuration on demand wordt niet ondersteund door de huidige versie van de Android Gradle plugin! Als je een foutmelding krijgt die gaat over "on demand configuration" kun je het volgende doen:
  
  * Open het Preferences (Voorkeuren) venster door op File > Settings (Bestand > Instellingen) te klikken (op Mac, Android Studio > Voorkeuren).
  * In het linkerscherm, klik op Build, Execution, Deployment > Compiler.
  * Vink de Configure on demand checkbox uit.
  * Klik op Apply (Toepassen) of OK.

### Overview tab

* Top ribbon gives access to suspend/disable loop, view/adjust profile and to start/stop temporary targets (TTs). TTs use defaults set in preferences. The new Hypo TT option is a high temp TT to prevent the loop from too aggressively overcorrection rescue carbs.
* Treatment buttons: old treatment button still available, but hidden by default. Visibility of buttons can now be configured. New insulin button, new carbs button (including [eCarbs/extended carbs](../Usage/Extended-Carbs.md))
* Colored prediction lines: 
  * Orange: COB (colour is used generally to represent COB and carbs)
  * Dark blue: IOB (colour is used generally to represent IOB and insulin)
  * Light blue: zero-temp
  * Dark yellow: UAM
* Option to show a notes field in insulin/carbs/calculator/prime+fill dialogs, which are uploaded to NS
* Updated prime/fill dialog allows priming and creating careportal entries for site change and cartridge change

### Watch

* Separate build variant dropped, included in regular full build now. To use bolus controls from watch, enable this setting on the phone
* Wizard now only asks for carbs (and percentage if enabled in watch settings). Which parameters are included in the calculation can be configured in the settings on the phone
* confirmations and info dialogs now work on wear 2.0 as well
* Added eCarbs menu entry

### New plugins

* PocTech app as BG source
* Dexcom patched app as BG source
* oref1 sensitivity plugin

### Opmerkingen

* App now uses drawer to show all plugins; plugins selected as visible in config builder are shown as tabs on top (favourites)
* Overhaul for config builder and objectives tabs, adding descriptions
* New app icon
* Lots of improvements and bugfixes
* Nightscout-independant alerts if pump is unreachable for a longer time (e.g. depleted pump battery) and missed BG readings (see *Local alerts* in settings)
* Option to keep screen on
* Option to show notification as Android notification
* Advanced filtering (allowing to always enable SMB and 6h after meals) supported with patched Dexcom app or xDrip with G5 native mode as BG source.