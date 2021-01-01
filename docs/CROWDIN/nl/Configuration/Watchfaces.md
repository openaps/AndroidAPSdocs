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

Zorg ervoor dat zowel de telefoon als de wear versies van AAPS zijn ondertekend met dezelfde "key"!

To install the APK on Android Wear smartwatch, follow these steps:

1. Enable developer mode on the watch. Press button on watch and click `settings` then `system` then `about` and repeatedly click the `build number` at least 7 times until it confirms you are a developer.
2. Enable ADB on watch. Press button on watch and click `settings` then `developer options` then `adb debugging` and `debug over wifi`. Note down the IP address you get next to this, it will be in the form of an IP address followed by :5555.
3. On PC, note down the file location of `wear-full-release.apk` (will be in the same folder as `app-full-release.apk` which you installed on your phone).
4. On PC, get the command prompt (type `command` in the search box). 
5. In command prompt: `cd c:\Program Files (x86)\Android\android-sdk\platform-tools`.
6. In command prompt: `adb connect [enter the IP address from step 2 including the :5555]`.
7. In command prompt: `adb install -r [enter path from step 3]\wear-full-release.apk`.
8. That will install AAPS on the watch, and AAPS watchfaces will be available to select.

When using wear version of AAPS, always update it together with phone version of app - keep their versions in sync. To do this you'll need to follow the steps above again, although you won't need to reenable developer mode.

### Instellen op de telefoon

Schakel in de AndroidAPS Configurator [de Wear plugin in](../Configuration/Config-Builder#wear).

## AAPS aansturen vanaf het horloge

AndroidAPS is ontworpen om *te worden bediend* vanaf Android Wear horloges. Als je wilt bolussen etc. vanaf je horloge, dan moet je bij "Wear instellingen" de optie "Bedieningen via horloge" geactiveerd hebben.

De volgende functies kunnen vanaf het horloge worden geactiveerd:

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

Er zijn verschillende watchfaces om uit te kiezen die de gemiddelde delta, IOB, momenteel actieve tijdelijke basaal en basale profielen + een CGM grafiek kunnen weergeven.

Zorg er voor dat meldingen van AndroidAPS niet geblokkeerd zijn op het horloge. Een actie (bijv. bolus, tijdelijk BG doel) moet door middel van een notificatie worden bevestigd. Pas na swipen en herbevestiging wordt deze uitgevoerd.

Voer een double-tap uit op je BG om sneller naar het AAPS-menu te gaan. Voer een double-tap uit op de BG grafiek om de tijdschaal ervan te wijzigen.

## Beschikbare watchfaces

![Beschikbare wijzerplaten](../images/Watchface_Types.png)

## AAPSv2 wijzerplaat - Legend

![Legenda AndroidAPSv2 watchface](../images/Watchface_Legend.png)

A - tijd sinds laatste uitvoering loop

B - CGM-uitlezing

C - minuten sinds laatste CGM-uitlezing

D - wijziging in vergelijking met de laatste CGM-uitlezing (in mmol of mg/dl)

Gemiddelde wijziging in de CGM-uitlezing in de laatste 15 minuten

F - telefoon batterij

G - basaal (getoond in E/uur tijdens standaard patroon en in % tijdens TBR)

H - BGI (bloed glucose interactie) -> de mate waarin BG zou moeten stijgen of dalen uitgaande van enkel de insuline activiteit.

I - koolhydraten (koolhydraten aan boord | e-carbs in de toekomst)

J - insuline aan boord (van bolus | van basaal)

## Toegang tot het hoofdmenu van AAPS

Om het AAPS hoofdmenu te openen kunt u gebruik maken van de volgende opties:

* dubbel tik op je BG-waarde
* selecteer het AAPS icoon in het applicatie menu van het horloge
* tik op de het AAPS deel van de wijzerplaat (indien geconfigureerd voor menu)

## Instellingen (in Android Wear horloge)

Om naar de wijzerplaat instellingen te gaan, ga naar het AAPS hoofdmenu swipe omhoog en selecteer "Instellingen".

Een gevulde ster geeft aan ingeschakeld (**Aan**), een lege ster geeft aan dat instelling is uitgeschakeld (**Uit**):

![Instellingen aan/uit](../images/Watchface_Settings_On_Off.png)

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

![Opties voor invoerontwerp](../images/Watchface_InputDesign.png)

### Specifieke watchface parameters

#### Steampunk watchface

* **Delta Korrelgrootte** (standaard `Medium`)

![Steampunk_meter](../images/Watchface_Steampunk_Gauge.png)

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

*Complication* is een term afkomstig van traditionele horloges, waarbij een toevoeging aan de wijzerplaat wordt beschreven als extra klein venster of een subwijzerplaat (met datum, dag van de week, maanfase, enz.). Wear OS 2.0 biedt deze optie om extra invoering mogelijk te maken voor meldingen zoals weer, notificaties, fitnesstellers etc. Deze zijn toe te voegen aan alle wijzerplaten die "Complication" ondersteunen.

De AndroidAPS Wear OS-app ondersteunt complicaties sinds build nummer `2.6`, dit maakt het mogelijk om alle watchfaces die complicaties ondersteunen, AAPS gerelateerde gegevens te laten weergeven (BG met trend, IOB, COB, enz.).

Complicaties kunnen ook dienen als **snelkoppeling** naar AAPS functies. Door te tikken op een complicatie kun je AAPS menu's en dialoogvensters openen (afhankelijk van type complicatie en configuratie).

![Complications_Op_Watchfaces](../images/Watchface_Complications_On_Watchfaces.png)

### Complicatie types

De AAPS Wear OS-app geeft alleen ruwe gegevens door, in een vooraf gedefinieerde standaard-opmaak. Het is aan het watchface om te bepalen waar en hoe deze complicaties worden weergegeven, denk daarbij aan de lay-out, de rand, kleur en het lettertype. Van de vele beschikbare Wear OS-complicatietypes, gebruikt AAPS:

* `SHORT TEXT` - Bevat twee regels tekst, 7 tekens elk, soms aangeduid als waarde en label. Meestal weergegeven in een cirkel of kleine 'pill' - de één onder de ander, of naast elkaar. Het is een zeer ruimtebesparende complicatie. AAPS probeert onnodige tekens te verwijderen om deze complicatie in te passen: door het afronden van waarden, het verwijderen van voorafgaande en afsluitende nullen uit waarden, enz.
* `LONG TEXT` - Bevat twee regels tekst, elk ongeveer 20 tekens. Meestal weergegeven in een rechthoek of lange pill - de één onder de ander. Het wordt gebruikt voor extra details en voor de status uitgeschreven in tekst.
* `RANGED VALUE` - Wordt gebruikt voor waardes binnen een vooraf gedefinieerd bereik, zoals een percentage. Het bevat een pictogram, label en wordt meestal weergegeven in cirkelvorm.
* `LARGE IMAGE` - Aangepaste achtergrondafbeelding die kan worden gebruikt (indien ondersteund door watchface) als achtergrond.

### Complicaties instellen

Om een complicatie toe te voegen aan een watchface, houd hem lang ingedrukt en klik op het tandwiel-icoon eronder. Afhankelijk van hoe het specifieke watchface werkt: ofwel klik op de betreffende plaats ofwel ga naar het complicaties setup menu. AAPS-complicaties zijn gegroepeerd onder het AAPS menu item.

Bij het instellen van complicaties op de watchface, zal Wear OS de lijst van complicaties die geschikt zijn voor de geselecteerde plaats op het watchface weergeven en filteren. Als je een bepaalde complicatie niet kunt vinden in de lijst, komt dat waarschijnlijk doordat die complicatie niet kan worden gebruikt voor de geselecteerde plaats.

### Complicaties van AAPS

AndroidAPS biedt de volgende complicaties:

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

Daarnaast zijn er drie complicaties van het `LARGE IMAGE` soort: **Donkere Achtergrond**, **Grijze Achtergrond** en **Lichte Achtergrond**, zij laten een statische AAPS achtergrond zien.

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

Wear OS horloges hebben vaak een zeer beperkte batterijduur. Het formaat van het horloge bepaalt de maximale grootte (en daarmee capaciteit) van de ingebouwde batterij. Zelfs met recente ontwikkelingen zowel op hardware als software gebied, zullen Wear OS horloges nog steeds dagelijks moeten worden opgeladen.

Als jouw batterij minder dan een dag (van dageraad tot schemering) meegaat, zijn hier enkele tips.

De belangrijkste batterijverslinders zijn:

* Actief beeldscherm met achtergrondverlichting aan (voor LED) of in volledige lichtsterktemodus (voor OLED)
* Weergave op het scherm
* Radiocommunicatie via Bluetooth

Omdat we geen compromissen kunnen sluiten op het gebied van communicatie (we hebben up-to-date data nodig) en willen de meest recente gegevens weergegeven worden, kunnen de meeste optimalisaties worden gedaan op *schermweergave tijd* gebied:

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

* The Sony Smartwach 3 is one of the most popular watches to be used with AAPS. 
* Unfortunately Google dropped support for wear OS 1.5 devices in fall 2020. This leads to problems when using Sony SW3 with AndroidAPS and above.
* A possible workaround can be found on this [troubleshooting page](../Usage/SonySW3.rst).

## Bekijken van gegevens in Nightscout

Als je een ander looping systeem gebruikt en je wilt de loop details *bekijken* op een Android Wear horloge, of als je wilt kijken naar de looping van uw kind, dan kunt u alleen de NSClient APK bouwen/downloaden. Om dit te doen volg de [APK build instructies](../Installing-AndroidAPS/Building-APK.md) waarbij je de build variant "NSClientRelease" selecteert. Er zijn verschillende watchfaces om uit te kiezen die de gemiddelde delta, IOB, momenteel actieve tijdelijke basaal en basale profielen + een CGM grafiek kunnen weergeven.

# Pebble

Pebble gebruikers kunnen de [Urchin watchface gebruiken](https://github.com/mddub/urchin-cgm) om de loopdata (indien geüpload naar Nightscout) *te bekijken*, maar je kunt niet via het horloge met AndroidAPS communiceren. Je kunt verschillende velden kiezen om te tonen zoals IOB, en momenteel actief tijdelijk basaal en voorspellingen. Als je een open loop gebruikt kun je [IFTTT](https://ifttt.com/) gebruiken om een applet te maken die zegt als Notificatie wordt ontvangen van AndroidAPS verzend dan een SMS of pushover notificatie.