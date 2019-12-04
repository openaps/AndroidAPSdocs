# Smartwatch instellingen

AndroidAPS is ontworpen om *te worden bediend* vanaf Android Wear horloges. Om te kunnen bolussen enz vanaf je horloge moet je bij "Wear instellingen" de optie "Bedieningen via horloge" geactiveerd hebben.

De volgende functies kunnen vanaf het horloge worden geactiveerd:

* een tijdelijk BG doel (TT) instellen
* een bolus toedienen
* invoeren van vertraagde koolhydraten (eCarbs)
* de bolus calculator gebruiken (in [instellingen](../Configuration/Config-Builder#wear) op de telefoon is geconfigureerd welke variabelen in de berekening worden meegenomen)
* de status van de loop en pomp controleren
* weergeven van de TDD (Totale Dagelijkse Dosis = bolus + basale insuline per dag)

Om dit te bereiken moet je de build variant "fullRelease" selecteren wanneer je [de APK bouwt](../Installing-AndroidAPS/Building-APK.md) (terwijl "pumpRelease" je in staat stelt om ook zonder loop de pomp te bedienen). Hierna kunt u binnen AndroidAPS vervolgens binnen de Configurator [Wear inschakelen](../Configuration/Config-Builder#wear).

Er zijn verschillende watchfaces om uit te kiezen die de gemiddelde delta, IOB, momenteel actieve tijdelijke basaal en basale profielen + een CGM grafiek kunnen weergeven.

![AndroidAPSv2-watchface](../images/AAPSv2_Watchface.png)

Zorg er voor dat meldingen van AndroidAPS niet geblokkeerd zijn op het horloge. Een actie (bijv. bolus, tijdelijk BG doel) moet door middel van een notificatie worden bevestigd. Pas na swipen en herbevestiging wordt deze uitgevoerd.

Voer een double-tap uit op je BG om sneller naar het AAPS-menu te gaan. Voer een double-tap uit op de BG grafiek om de tijdschaal ervan te wijzigen.

## Beschikbare watchfaces

![smartwatch instellingen](../images/watchfaces.jpg)

## Legenda AndroidAPSv2 watchface

![Legenda AndroidAPSv2 watchface](../images/AAPSv2_Watchface_legend.png)

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

## Instellingen (in Android Wear horloge)

Om in de watchface instellingen te komen, dubbeltik op je BG, swipe omhoog en selecteer "Instellingen".

![instellingen_aan_uit](../images/settings_on_off.jpg)

### AAPS-parameters

Trillen bij Bolus (standaard Aan):

Eenheden voor Acties (standaard mg/dl): als "Aan" dan zijn eenheden voor acties in mg/dl, als "Uit" dan is de eenheid mmol/l. Wordt gebruikt bij het instellen van een tijdelijs streefdoel vanaf het horloge.

### Watchface instellingen

* Toon datum (standaard Uit): let op, weergave van de datum is niet op alle watchfaces beschikbaar
* Toon IOB (standaard Aan): Laat de IOB waarde wel of niet zien (instelling voor gedetailleerde IOB waarde bevindt zich in de AAPS Wear parameters)
* Toon COB (standaard Aan): Laat de COB waarde wel of niet zien
* Toon Delta (standaard Aan): Laat de BG verandering van de afgelopen 5 minuten wel of niet zien
* Toon GemiddDelta (standaard Aan): Laat de gemiddelde BG verandering van de afgelopen 15 minuten wel of niet zien
* Toon Telefoon Batterij (standaard Aan): Laat de batterij van de Telefoon in % wel of niet zien. Is rood beneden de 30%.
* Toon Rig Batterij (standaard Uit): Rig batterij is een samenvoeging van telefoon batterij, pomp batterij en sensor batterij (meestal de laagste van de 3 waarden)
* Toon Basaal Stand (standaard Aan): Laat Actuele basaalstand in E/u (of in % als er een tijdelijk basaal actief is) al dan niet zien
* Toon Loop Status (standaard Aan): Hoeveel minuten zijn verstreken sinds de laatste berekeningscyclus van de loop. De pijlen rondom het getal worden rood wanneer er meer dan 15 minuten zijn verstreken.
* Toon BG (standaard Aan): Laat de meest recente BG waarde wel of niet zien
* Toon Richtings Pijl (standaard Aan): Laat pijl voor richting van BG waarde wel of niet zien 
* Toon Geleden (standaard Aan): Hoeveel minuten geleden sinds laatste CGM meting.
* Donker (standaard Aan): Om te schakelen van zwarte achtergrond naar witte achtergrond (behalve voor Cockpit en Steampunk watchface)
* Markeer Basaalstanden (standaard Uit): Om de zichtbaarheid van basaalstanden en tijdelijke basalen te verbeteren
* Grafiek Tijdsschaal (standaard 3 uur): Selecteer in het submenu de maximale tijdsschaal van de grafiek (tussen 1 uur en 5 uur)

### Gebruikersinterface instellingen

Invoerontwerp: met deze parameter kun je de positie van "+" en "-"-knoppen selecteren wanneer je opdrachten invoert voor AAPS (Tijdelijk streefdoel, insuline, koolhydraten...)

![Opties voor invoerontwerp](../images/InputDesign.jpg)

### Specifieke watchface parameters

#### Steampunk watchface

Delta Granulariteit (standaard Medium)

![Steampunk_meter](../images/steampunk_gauge.jpg)

#### Cirkel Watchface

Grote Nummers: Tekstgrootte vergroten om zichtbaarheid te verbeteren

Ring geschiedenis: Grafische weergaven van BG geschiedenis met grijze ringen binnen de groene ring van het horloge

Ring Geschiedenis Light: Discretere versie van Ring geschiedenis met een donkerdere grijstint

Animaties:

### Opdracht Instellingen

Wizard in het menu (standaard Aan): Staat de wizard-interface in het hoofdmenu toe om koolhydraten in te voeren en te bolussen vanaf het horloge

Ontlucht in het Menu (standaard Uit): Staat Ontlucht / Vul actie toe vanaf het horloge

Enkel Streefdoel (standaard Aan):

* Aan: je stelt een enkele waarde in als Tijdelijk streefdoel
* Uit: je stelt een Tijdelijk streefgebied in (lage + hoge grenswaarde)

Wizard Percentage (standaard Uit): Bolus correctie toestaan van wizard (waarde is opgegeven in percentage vóór bevestigingsnotificatie)

## Probleemoplossing van de wear app:

* Onder Android Wear 2.0 zal AndroidAPS niet meer vanzelf op je horloge worden geïnstalleerd. Om AndroidAPS op je wear horloge te installeren moet je nu naar de playstore op het horloge gaan (let op dit is niet hetzelfde als de playstore op de telefoon). Onder de categorie 'apps geinstalleerd op je telefoon' vind je een item AndroidAPS waarmee de installatie op je telefoon kan worden uitgevoerd. Schakel ook 'Automatisch bijwerken' in. 
* Soms helpt het om de apps opnieuw te synchroniseren naar het horloge, omdat het een beetje langzaam kan zijn om dit zelf te doen: Android Wear > Tandwiel icoon > Horlogenaam > Synchroniseren apps.
* Schakel ADB-foutopsporing in onder Ontwikkelaars Opties (op het horloge), verbind het horloge via USB en start de Wear app eenmaal in Android Studio.

## Bekijken van gegevens in Nightscout

Als je een ander looping systeem gebruikt en je wilt de loop details *bekijken* op een Android Wear horloge, of als je wilt kijken de loop van jouw kind bekijken, dan kunt je de NSClient APK downloaden en gebruiken. Om dit te doen volg de [APK build instructies](../Installing-AndroidAPS/Building-APK.md) waarbij je de build variant "NSClientRelease" selecteert. Er zijn verschillende watchfaces om uit te kiezen die de gemiddelde delta, IOB, momenteel actieve tijdelijke basaal en basale profielen + een CGM grafiek kunnen weergeven.

## Pebble

Pebble gebruikers kunnen de [Urchin watchface gebruiken](https://github.com/mddub/urchin-cgm) om de loopdata (indien geüpload naar Nightscout) *te bekijken*, maar je kunt niet via het horloge met AndroidAPS communiceren. U kunt verschillende velden kiezen om te tonen zoals IOB, en momenteel actief tijdelijk basaal en voorspellingen. Als u een open loop gebruikt kunt u [IFTTT](https://ifttt.com/) gebruiken om een applet te maken die zegt als Notificatie wordt ontvangen van AndroidAPS verzend dan een SMS of pushover notificatie.