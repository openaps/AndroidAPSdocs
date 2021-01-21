# AAPS op Wear OS smartwatch

Je kunt de AndroidAPS app installeren op je **Wear OS based** smartwatch. Met de watch versie van AAPS kun je:

* **AAPS gegevens bekijken**: door een [specifieke watchface](#aaps-watchfaces) of standaard watchface te gebruiken d.m.v. watchface [complications](#complications)
* **AAPS aansturen**: stel een tijdelijk streefdoel in, bolus, etc. Je moet uiteraard wel jouw telefoon steeds in de buurt hebben, zowel voor het bekijken van gegevens als voor het aansturen. 

### Voor je een horloge aanschaft...

* Sommige functies zoals *complications* vereisen Wear OS versie 2.0 of recenter om te functioneren
* Google heeft *Android Wear 1.x* omgedoopt naar *Wear OS* vanaf versie 2.x. Indien een smartwatch met *Android Wear* wordt aangeduid, kan het goed zijn dat het de oudere 1.x versie heeft
* Als in een beschrijving van smartwatch alleen compatibiliteit met *Android* en *iOS* aangegeven wordt, betekent het **niet** dat deze draait op *Wear OS* - het kan net zo goed een ander soort fabrikant specifieke OS zijn **die niet compatibel is met AAPS wear!**.
* Controleer de [lijst van geteste telefoons en horloges](../Getting-Started/Phones.md) en [ vraag de community](../Where-To-Go-For-Help/Connect-with-other-users.md) om advies als je twijfelt of het horloge wordt ondersteund

### Wear OS-versie van AAPS bouwen

Om een Wear OS versie van AAPS te maken, heb je de build variant "fullRelease" nodig deze is te selecteren wanneer [de APK](../Installing-AndroidAPS/Building-APK.md) bouwt (met de versie "pumpRelease" kun je de pomp wel op afstand bedienen, maar je hebt geen "closed loop").

You can then update or install the watchface via the PlayStore on your watch.

### Instellen op de telefoon

Within AndroidAPS, in the ConfigBuilder you need to [enable Wear plugin](../Configuration/Config-Builder#wear).

## AAPS aansturen vanaf het horloge

AndroidAPS is designed to be *controlled* by Android Wear watches. Als je wilt bolussen etc. vanaf je horloge, dan moet je bij "Wear instellingen" de optie "Bedieningen via horloge" geactiveerd hebben.

The following functions can be triggered from the watch:

* een tijdelijk BG doel (TT) instellen
* de bolus calculator gebruiken (in [instellingen](../Configuration/Config-Builder#wear) op de telefoon is geconfigureerd welke variabelen in de berekening worden meegenomen)
* invoeren van vertraagde koolhydraten (eCarbs)
* dien een bolus (insuline + koolhydraten) toe
* watch instellingen
* status 
    * bekijk pomp status
    * bekijk loop status
    * profiel controleren en wijzigen, CPP (Circadiaans percentage profiel = tijdverschuiving + percentage)
    * weergeven van de TDD (Totale Dagelijkse Dosis = bolus + basale insuline per dag)

## AAPS wijzerplaaten

There are several watchfaces to choose from that include average delta, IOB, currently active temp basal rate and basal profiles + CGM readings graph.

Ensure notifications from AndroidAPS are not blocked on the watch. Confirmation of action (e.g. bolus, tempt target) comes via notification which you will need to swipe and tick.

To get faster to the AAPS menu, do a double tap on your BG. With a double tap onto the BG curve you can change the time scale..

## Beschikbare watchfaces

![Available watchfaces](../images/Watchface_Types.png)

### Nieuw watchface vanaf AndroidAPS 2.8

![Watchface Digital Style](../images/Watchface_DigitalStyle.png)

* Als je in het instellingen menu op het tandwiel-icoontje drukt bij het watchface keuzemenu, dan kun je de kleuren, lijnen, en cirkel zelf aanpassen.

## AAPSv2 wijzerplaat - Legend

![Legend AndroidAPSv2 watchface](../images/Watchface_Legend.png)

A - time since last loop run

B - CGM reading

C - minutes since last CGM reading

D - change compared to last CGM reading (in mmol or mg/dl)

E - average change CGM reading last 15 minutes

F - phone battery

G - basal rate (shown in U/h during standard rate and in % during TBR)

H - BGI (blood glucose interaction) -> the degree to which BG “should” be rising or falling based on insulin activity alone.

I - carbs (carbs on board | e-carbs in the future)

J - insulin on board (from bolus | from basal)

## Toegang tot het hoofdmenu van AAPS

To access main menu of AAPS you can use on of following options:

* dubbel tik op je BG-waarde
* selecteer het AAPS icoon in het applicatie menu van het horloge
* tik op de het AAPS deel van de wijzerplaat (indien geconfigureerd voor menu)

## Instellingen (in Android Wear horloge)

To access to the watchface settings, enter AAPS main menu, slide up and select "Settings".

Filled star is for enabled state (**On**), and hollow star icon indicates that setting is disabled (**Off**):

![Settings on/off](../images/Watchface_Settings_On_Off.png)

### AAPS-parameters

* **Trillen bij Bolus** (standaard `Aan`):
* **Eenheden voor acties ** (standaard `mg/dl`): als **On** eenheden voor acties `mg/dl` is, als **Off** eenheid `mmol/l`. Wordt gebruikt bij het instellen van een tijdelijs streefdoel vanaf het horloge.

### Watchface instellingen

* **Toon Datum** (standaard `Uit`): let wel: datum is niet beschikbaar op alle watchfaces
* **Toon IOB** (standaard `Aan`): De IOB waarde weergeven of niet (gedetailleerde instellingen voor de waarde staan in AAPS wear instellingen)
* **Toon COB** (standaard `Aan`): Toon wel of geen COB waarde
* **Toon Delta** (standaard `Aan`): Toon wel of geen BG variatie van de laatste 5 minuten
* **Toon AvgDelta** (standaard `Aan`): De gemiddelde BG variatie van de afgelopen 15 minuten wel of niet weergeven
* **Toon Telefoon Batterij** (standaard `Aan`): Telefoon batterij in %. Is rood beneden de 30%.
* **Rig Batterij tonen** (standaard `Uit`): Rig batterij is een samenvoeging van Telefoon batterij, pompbatterij en sensor accu (over het algemeen de laagste van de 3 waarden)
* **Toon Basaal hoeveelheid** (standaard `Aan`): Huidige basaalstand weergeven (in E/uur of in % bij TBR)
* **Toon Loop Status** (standaard `Aan`): laat aantal minuten zien sinds de laatst uitgevoerde loop (pijlen bij de waarde worden rood indien boven de 15').
* **Toon BG** (standaard `Aan`): Wel of geen laatste BG waarde weergeven
* **Toon richting pijl ** (standaard `Aan`): Wel of geen BG trend pijl weergeven
* **Toon historie** (standaard `Aan`): toon aantal minuten sinds de laatste uitlezing.
* **Donker** (standaard `Aan`): Je kunt overschakelen van zwarte naar witte achtergrond (behalve voor Cockpit en Steampunk wijzerplaaten)
* **Markeer basaal** (standaard `Uit`): verbeter de zichtbaarheid van basaalstanden en tijdelijke basaalstanden
* **Overeenkomst verdeler** (standaard `Uit`): Voor AAPS, AAPSv2 en AAPS(groot) wijzerplaten, toon contrast op de achtergrond voor verdeler (**Uit**) of match met de achtergrondkleur (**Aan**)
* **Grafiek Tijdschaal** (standaard `3 uur`): in het submenu kan je de maximale tijdschaal van de grafiek tussen 1 uur en 5 uur selecteren.

### Gebruikersinterface instellingen

* **Invoer uiterlijk**: met deze parameter kun je de positie van "+" en "- knoppen selecteren voor wanneer je opdrachten in AAPS (TT, Insuline, khd...) invoert

![Input design options](../images/Watchface_InputDesign.png)

### Specifieke watchface parameters

#### Steampunk watchface

* **Delta Korrelgrootte** (standaard `Medium`)

![Steampunk_gauge](../images/Watchface_Steampunk_Gauge.png)

#### Cirkel Watchface

* **Grote Getallen** (standaard `Uit`): Verhoog tekstgrootte om de zichtbaarheid te verbeteren
* **Geschiedenis Ring** (standaard `Uit`): Bekijk BG geschiedenis met grijze ringen binnen de groene uur ring
* **Lichte Geschiedenis Ring** (standaard `Aan`): Geschiedenis wordt meer discreet weergeven met een donkergrijs
* **Animaties ** (standaard `Aan`): Als dit is ingeschakeld, wordt ondersteund door het horloge en niet in de energiebesparing low-res modus dan zal de watchface cirkel worden geanimeerd

### Opdracht Instellingen

* **Wizard in Menu** (standaard `Aan`): Sta toe dat de wizard interface in het hoofdmenu gebruikt wordt voor het invoeren van koolhydraten en geef een bolus vanaf het horloge
* **Voorvullen in Menu** (standaard `Uit`): Voorvullen / Vullen vanaf horloge toestaan
* **Enkel doel** (standaard `Aan`):
    
    * `Aan`: je stelt een enkele waarde als TT in
    * `Uit`: Laag en hoog doel gelijktijdig als TT ingesteld

* **Wizard Percentage** (standaard `Uit`): Bolus correctie vanuit de wizard toestaan (waarde ingevoerd in percentage voor bevestiging melding)

## Complications

*Complication* is a term from traditional watchmaking, where it describes addition to the main watchface - as another small window or sub-dial (with date, day of the week, moon phase, etc.). Wear OS 2.0 brings that metaphor to allow custom data providers, like weather, notifications, fitness counters and more - to be added to any watchfaces that support complications.

AndroidAPS Wear OS app supports complications since build `2.6`, and allow any third party watchface that supports complications to be configured to display AAPS related data (BG with the trend, IOB, COB, etc.).

Complications also serve as **shortcut** to AAPS functions. By tapping them you can open AAPS related menus and dialogs (depending on complication type and configuration).

![Complications_On_Watchfaces](../images/Watchface_Complications_On_Watchfaces.png)

### Complicatie types

AAPS Wear OS app provides only raw data, according to predefined formats. It is up to third-party watchface to decide where and how to render complications, including its layout, border, color, and font. From many Wear OS complication types available, AAPS uses:

* `SHORT TEXT` - Bevat twee regels tekst, 7 tekens elk, soms aangeduid als waarde en label. Meestal weergegeven in een cirkel of kleine 'pill' - de één onder de ander, of naast elkaar. Het is een zeer ruimtebesparende complicatie. AAPS probeert onnodige tekens te verwijderen om deze complicatie in te passen: door het afronden van waarden, het verwijderen van voorafgaande en afsluitende nullen uit waarden, enz.
* `LONG TEXT` - Bevat twee regels tekst, elk ongeveer 20 tekens. Meestal weergegeven in een rechthoek of lange pill - de één onder de ander. Het wordt gebruikt voor extra details en voor de status uitgeschreven in tekst.
* `RANGED VALUE` - Wordt gebruikt voor waardes binnen een vooraf gedefinieerd bereik, zoals een percentage. Het bevat een pictogram, label en wordt meestal weergegeven in cirkelvorm.
* `LARGE IMAGE` - Aangepaste achtergrondafbeelding die kan worden gebruikt (indien ondersteund door watchface) als achtergrond.

### Complicaties instellen

To add complication to watchface, configure it by long press and clicking the gear icon below. Depending on how specific watchface configures them - either click on placeholders or enter the watchface setup menu for complications. AAPS complications are grouped under the AAPS menu entry.

When configuring complications on watchface, Wear OS will present and filter the list of complications that can be fit into selected complication place on watchface. If specific complications cannot be found on the list, it is probably due to its type that cannot be used for the given place.

### Complicaties van AAPS

AndroidAPS provides following complications:

![AAPS_Complications_List](../images/Watchface_Complications_List.png)

* **BR, CoB & IoB** (`SHORT TEXT`, opent *Menu*): Geeft *basale snelheid* op de eerste regel weer en *Carbs on Board* en *Insulin on Board* op de tweede regel.
* **Bloed Glucose** (`SHORT TEXT`, opent *Menu*): Geeft *Bloed Glucose* waarde en *trend* pijl op de eerste regel weer en *ouderdom vd meting* en *BG delta* op de tweede regel.
* **CoB & IoB** (`SHORT TEXT`, opent *Menu*): Geeft *Carbs on Board* op de eerste regel weer en *Insulin on Board* op de tweede regel.
* **CoB Gedetailleerd** (`SHORT TEXT`, opent *Wizard*): Geeft huidige actieve *Carbs on Board* op de eerste regel weer en geplande (toekomstige, eCarbs) Carbs op de tweede regel.
* **CoB Icon** (`SHORT TEXT`, opent *Wizard*): Geeft *Carbs on Board* waarde weer met een statisch pictogram.
* **Volledige status** (`LONG TEXT`, opent *Menu*): Laat de meeste gegevens tegelijkertijd zien: *Blood Glucose* waarde en *trend* pijl, *BG delta* en *ouderdom vd meting* op de eerste regel. Op de tweede regel *Carbs on Board*, *Insulin on Board* en *basaalstand*.
* **Volledige status (omgekeerd)** (`LONG TEXT`, opent *Menu*): Dezelfde gegevens als voor standaard *Volledige status*, maar de regels zijn omgedraaid. Kan worden gebruikt in watchfaces die een van de twee regels van `LONG TEXT` negeren.
* **IoB Gedetailleerd** (`SHORT TEXT`, opent *Bolus*): Toont totaal *Insulin on Board* op de eerste regel en splitst *IoB* voor *Bolus* en *Basaal* uit op de tweede regel.
* **IoB Icon** (`SHORT TEXT`, opent *Bolus*): Geeft *Insulin on Board* waarde weer met een statisch pictogram.
* **Uploader/Telefoon Batterij** (`RANGED VALUE`, opent *Status*): Geeft het batterij percentage van de AAPS telefoon (uploader) weer, zoals gerapporteerd door AAPS. Afgebeeld als percentagemeter met een batterijpictogram dat de waarde weergeeft. Het kan zijn dat het niet real-time wordt bijgewerkt, maar slechts wanneer andere belangrijke AAPS gegevens veranderen (meestal: elke ~ 5 minuten met nieuwe *Blood Glucose* meting).

Additionally, there are three complications of `LARGE IMAGE` kind: **Dark Wallpaper**, **Gray Wallpaper** and **Light Wallpaper**, displaying static AAPS wallpaper.

### Instellingen voor complicaties

* **Complicatie tik voor actie** (standaard `Standaard`): Bepaalt welk dialoogvenster wordt geopend wanneer de gebruiker op een complicatie tikt: 
    * *Standaard*: actie specifiek voor complicatie type *(zie lijst hierboven)*
    * *Menu*: AAPS hoofdmenu
    * *Wizard*: bolus wizard - bolus calculator
    * *Bolus*: directe bolus waarde ingeven
    * *eCarb*: dialoogvenster eCarbs
    * *Status*: status submenu
    * *Geen*: Er gebeurt niets als je op de AAPS complicatie tikt
* **Unicode in Complicaties** (standaard `Aan`): Wanneer `Aan`, zal de complicatie gebruik maken van Unicode-tekens voor symbolen zoals `Δ` Delta, `,` komma als scheidingsteken of `⎍` Basaal Ratio symbool. De weergave hiervan hangt af van het lettertype, en dat kan zeer horloge-specifiek zijn. Deze optie maakt het mogelijk om Unicode-symbolen `Uit` te schakelen indien nodig - als het lettertype gebruikt door aangepaste watchface deze symbolen niet ondersteunt - om weergavefouten te voorkomen.

## Prestaties en levensduur van de batterij

Wear OS watches are very power-constrained devices. The size of the watch case limits the capacity of the included battery. Even with recent advancements both on hardware and software side, Wear OS watches still require daily charging.

If an experienced battery span is shorter than a day (from dusk to dawn), here are some tips to troubleshoot the issues.

Main battery-demanding areas are:

* Actief beeldscherm met achtergrondverlichting aan (voor LED) of in volledige lichtsterktemodus (voor OLED)
* Weergave op het scherm
* Radiocommunicatie via Bluetooth

Since we cannot compromise on communication (we need up-to-date data) and want to have the most recent data rendered, most of the optimizations can be done in *display time* area:

* Meegeleverde watchfaces zijn meestal beter geoptimaliseerd dan aangepaste, gedownload van de playstore.
* Het is beter om watchfaces te gebruiken die de hoeveelheid weergegeven data beperken in inactieve/gedimde modus.
* Gebruik niet teveel andere Complicaties, zoals widges voor het weerbericht, of andere widgets die gebruik te maken van gegevens uit externe bronnen.
* Begin met een eenvoudige watchface. Voeg één complicatie per keer toe en observeer hoe ze van invloed zijn op de levensduur van de batterij.
* Probeer het **Dark** thema te gebruiken voor AAPS-watchfaces, en voor [**Overeenkomst verdeler**](#watchface-instellingen). Op OLED-apparaten zal de hoeveelheid pixels verminderen en de burnout beperken.
* Controleer wat op jouw horloge beter functioneert: meegeleverde AAPS watchfaces of andere watchfaces met AAPS Complicaties.
* Observer een paar dagen, waarop je verschillende activiteiten doet. De meeste horloges activeren het display wanneer je hem naar je gezicht beweegt, bij beweging en andere gebruik-gerelateerde zaken.
* Controleer de algemene systeeminstellingen die van invloed zijn op de prestaties: notificaties, achtergrondverlichting/uitschakelen na inactiviteit, als GPS wordt geactiveerd etc.
* Bekijk de [lijst van geteste telefoons en horloges](../Getting-Started/Phones.md) en [ vraag de community](../Where-To-Go-For-Help/Connect-with-other-users.md) om advies als je twijfelt of het horloge wordt ondersteund.
* **We kunnen niet garanderen dat de gegevens die worden weergegeven op het watchface of complicatie altijd up-to-date is**. Uiteindelijk is het aan Wear OS om te beslissen wanneer een watchface of een complicatie wordt bijgewerkt. Zelfs wanneer de AAPS app aanvragen worden bijgewerkt, dan kan het systeem besluiten om updates uit te stellen of te negeren uit batterijbesparing. Wanneer je twijfelt en het batterijniveau van je horloge is laag - doe altijd een dubbel-check met de AAPS-app op je telefoon.

## Probleemoplossing van de wear app:

* Onder Android Wear 2.0 zal AndroidAPS niet meer vanzelf op je horloge worden geïnstalleerd. Om AndroidAPS op je wear horloge te installeren moet je nu naar de playstore op het horloge gaan (let op dit is niet hetzelfde als de playstore op de telefoon). Onder de categorie 'apps geinstalleerd op je telefoon' vind je een item AndroidAPS waarmee de installatie op je telefoon kan worden uitgevoerd. Schakel ook 'Automatisch bijwerken' in. 
* Soms helpt het om de apps opnieuw te synchroniseren naar het horloge, omdat het een beetje langzaam kan zijn om dit zelf te doen: Android Wear > Tandwiel icoon > Horlogenaam > Synchroniseren apps.
* Schakel ADB-foutopsporing in onder Ontwikkelaars Opties (op het horloge), verbind het horloge via USB en start de Wear app eenmaal in Android Studio.
* Als gegevens van Complicaties niet ge-updatet worden - controleer eerst of de AAPS watchfaces überhaupt werken.

### Sony Smartwatch 3

* De Sony Smartwach 3 is een van de meest populaire horloges om te gebruiken met AAPS. 
* Helaas heeft Google de ondersteuning voor Wear OS 1,5 apparaten in 2020 beëindigd. Dit leidt tot problemen bij het gebruik van Sony SW3 met AndroidAPS.
* Een mogelijke workaround is te vinden op deze [probleemoplossings pagina](../Usage/SonySW3.rst).

## Bekijken van gegevens in Nightscout

If you are using another looping system and want to *view* your looping detail on an Android Wear watch, or want to watch your child's looping, then you can build/download just the NSClient APK. To do this follow the [build APK instructions](../Installing-AndroidAPS/Building-APK.md) selecting the build variant "NSClientRelease". There are several watchfaces to choose from that include average delta, IOB, currently active temp basal rate and basal profiles + CGM readings graph.

# Pebble

Pebble users can use the [Urchin watchface](https://github.com/mddub/urchin-cgm) to *view* looping data (if uploaded to Nightscout), but you will not be able to interact with AndroidAPS through the watch. You can choose fields to display such as IOB and currently active temp basal rate and predictions. If open looping you can use [IFTTT](https://ifttt.com/) to create an applet that says if Notification received from AndroidAPS then send either SMS or pushover notification.