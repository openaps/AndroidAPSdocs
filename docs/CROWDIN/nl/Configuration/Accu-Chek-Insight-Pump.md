# Accu-Chek Insight pomp

**Deze software is onderdeel van een doe-het-zelf oplossing en is geen kant-en-klaar product, maar vraagt JOU te lezen, leren en te begrijpen hoe het systeem werkt en hoe je het kunt gebruiken. Het neemt niet je gehele diabetes management van je over, maar stelt je wel in staat om je diabetes beter onder controle te krijgen en je kwaliteit van leven te verhogen, als je bereid bent de benodigde tijd erin te investeren. Haast je niet, maar geef jezelf de tijd om te leren. Jij alleen bent verantwoordelijk voor wat je ermee doet.**

* * *

## ***WAARSCHUWING:** Als je de Insight in het verleden al gebruikte met **SightRemote,** werk AndroidAPS dan bij naar de nieuwste AAPS versie en **verwijder SightRemote**!*

## Benodigde hardware en software

* Een Roche Accu-Chek Combo pomp (elke firmware is geschikt).

Opmerking: AAPS zal informatie altijd opslaan in het **eerste basaal profiel in de pomp**.

* An Android phone (Basically every Android version would work with Insight, but check on the [Module](../Module/module.md#phone) page which Android version is required to run AndroidAPS.)
* De AndroidAPS-app geïnstalleerd op jouw telefoon

## Pomp koppelen

* De Insight pomp mag aan één apparaat tegelijk gekoppeld zijn. Wanneer je de afstandsbediening (meter) eerder hebt gebruikt, moet je de meter verwijderen uit de lijst van gekoppelde apparaten in jouw pomp: Menu > Instellingen > Communicatie> Apparaat verwijderen > Meter
    
    ![Screenshot van Insight Verwijderen Meter](../images/Insight_RemoveMeter.png)

* In de [Configurator](../Configuration/Config-Builder) van AndroidAPS: selecteer Accu-Chek Insight in de pomp sectie
    
    ![Screenshot van Config Builder Insight](../images/Insight_ConfigBuilder_AAPS3_0.jpg)

* Tik op het tandwiel-icoon naast Insight om de instellingen te openen.

* In de instellingen: tik op de knop 'Insight koppelen' bovenaan het scherm. Als het goed is zie je nu een lijst van alle nabijgelegen bluetooth apparaten (links onder).
* Op de Insight pomp, ga naar Menu > Instellingen > Communicatie > Apparaat toevoegen. De pomp zal het volgende scherm (rechts onder) weergeven met het serienummer van de pomp.
    
    ![Screenshot van Insight Pairing 1](../images/Insight_Pairing1.png)

* Ga terug naar je telefoon, tik op het pomp serienummer in de lijst van bluetooth apparaten. Tik vervolgens op Koppelen om te bevestigen.
    
    ![Screenshot van Insight Pairing 2](../images/Insight_Pairing2.png)

* Zowel op je pomp als op je telefoon zal vervolgens een code verschijnen. Controleer of de codes op beide apparaten hetzelfde zijn en bevestig op zowel pomp als telefoon.
    
    ![Screenshot van Insight Pairing 3](../images/Insight_Pairing3.png)

* Gelukt! Geef jezelf een schouderklopje voor het succesvol koppelen van je pomp met AndroidAPS.
    
    ![Screenshot van Insight Pairing 4](../images/Insight_Pairing4.png)

* Om te controleren of alles goed is, ga je terug naar de Configurator in AndroidAPS en tik op het tandwiel-icoontje bij de Insight pomp om in de Insight-instellingen te komen. Tik vervolgens op Insight Pairing en je zult wat informatie te zien krijgen over de pomp:
    
    ![Screenshot van Insight Pairing Informatie](../images/Insight_PairingInformation.png)

Opmerking: Er zal geen permanente verbinding zijn tussen pomp en telefoon. Een verbinding zal alleen tot stand worden gebracht als dat nodig is (d.w.z. instellen van tijdelijke basaalstand, bolus geven, pomp geschiedenis uitlezen...). Anders zouden de batterij van telefoon en pomp te snel leeglopen.

(settings-in-aaps)=

## Instellingen in AAPS

**Note : It is now possible (only with AAPS v2.7.0 and above) to use ‘Always use basal absolute values’ if you want to use Autotune with Insight pump, even if 'sync is enabled' with Nightscout.** (In AAPS go to [Preferences > NSClient > Advanced Settings](../Configuration/Preferences.md#advanced-settings-nsclient)).

![Screenshot of Insight Settings](../images/Insight_settings.png)

In the Insight settings in AndroidAPS you can enable the following options:

* "Infuuswissel noteren": Dit zal automatisch een insulinepatroon wissel noteren wanneer je de "cannule vullen" optie op de pomp gebruikt.

* "Slangwissel noteren": Dit voegt een notitie toe aan de AndroidAPS database wanneer je het "infusieset vullen" programma op de pomp gebruikt.

* "Infuuswissel noteren": Dit voegt een notitie toe aan de AndroidAPS database wanneer je het "cannule vullen" programma op de pomp gebruikt. **Opmerking: Bij een infuuswissel wordt ook automatisch Autosens gereset.**

* "Batterijwissel noteren": Dit voegt een notitie toe aan AndroidAPS wanneer je een nieuwe batterij in de pomp plaatst.

* "Werkingsmodus-wissel noteren": Hiermee voegt je een notitie toe in de AndroidAPS database wanneer je de pomp start, stopt of pauzeert.

* "Alarm noteren": Dit maakt een notitie in AndroidAPS wanneer de pomp een alarm geeft (behalve herinneringen, bolus en tijdelijke basaalstand annulering - deze worden niet geregistreerd).

* "TBR-emulatie inschakelen": De Insight pump kan alleen tijdelijke basaalstanden (TBRs) instellen tot maximaal 250%. Om deze beperking te omzeilen, zal TBR emulatie de pomp instructies geven om een vertraagde bolus te leveren voor de extra insuline als je een TBR van meer dan 250 procent vraagt.
    
    **Gebruik slechts één vertraagde bolus tegelijk, omdat meerdere uitgebreide bolussen tegelijkertijd fouten kunnen veroorzaken.**

* "Trillen uitschakelen bij handmatige bolus levering": Dit zorgt dat de Insight pomp niet trilt bij het toedienen van een handmatige bolus (of een vertraagde bolus). Deze instelling is alleen beschikbaar met de nieuwste versie van Insight firmware (3.x).

* "Trillen uitschakelen bij automatische bolus levering": Dit zorgt dat de Insight pomp niet trilt bij het toedienen van een automatische bolus (SMB of Tijdelijk basaal met TBR emulatie). Deze instelling is alleen beschikbaar met de nieuwste versie van Insight firmware (3.x).

* "Herstel duur": Dit definieert hoe lang AndroidAPS zal wachten na een mislukte verbindingspoging voordat hij het opnieuw probeert. Je kunt een getal kiezen van 0 tot 20 seconden. Als je verbindingsproblemen ondervindt, kies je een langere wachttijd.   
      
    Voorbeeld voor min. herstel duur = 5 en max. herstel duur = 20   
      
    geen verbinding -> wacht **5** sec.   
    probeer opnieuw -> geen verbinding -> wacht **6** sec.   
    probeer opnieuw -> geen verbinding -> wacht **7** sec.   
    probeer opnieuw -> geen verbinding -> wacht **8** sec.   
    ...   
    probeer opnieuw -> geen verbinding -> wacht **20** sec.   
    probeer opnieuw -> geen verbinding -> wacht **20** sec.   
    ...

* "Verbindingsvertraging ": Dit bepaalt hoe lang (in seconden) AndroidAPS zal wachten met het verbreken van de pompverbinding nadat een opdracht is uitgevoerd. Standaard waarde is 5 seconden.

For periods when pump was stopped AAPS will log a temp. basal rate with 0%.

In AndroidAPS, the Accu-Chek Insight tab shows the current status of the pump and has two buttons:

* "Vernieuw": Vernieuwt de pomp status
* "Activeer/deactiveer melding van TBR einde": Een Insight pomp is standaard ingesteld om een alarm af te geven wanneer een TBR (tijdelijke basaalstand) eindigt. Met deze knop kun je dit alarm activeren of deactiveren zonder dat je hiervoor speciale Accucheck configuratie-software nodig hebt.
    
    ![Screenshot van Insight Status](../images/Insight_Status2.png)

## Instellingen in de pomp

Configure alarms in the pump as follows:

* Menu > Instellingen > Apparaatinstellingen > Modus instellingen > Zacht > Signaal > Geluid
* Menu > Instellingen > Apparaatinstellingen > Instellingen modus > Zacht > Volume > 0 (verwijder alle balken)
* Menu > Modi > Signaalmodus > Zacht

This will silence all alarms from the pump, allowing AndroidAPS to decide if an alarm is relevant to you. If AndroidAPS does not acknowledge an alarm, its volume will increase (first beep, then vibration).

(vibration)=

### Trilalarmen

Depending on the firmware version of your pump, the Insight will vibrate briefly every time a bolus is delivered (for example, when AndroidAPS issues an SMB or TBR emulation delivers an extended bolus).

* Firmware 1.x: Geen trillingen.
* Firmware 2.x: Trillingen kunnen niet worden uitgeschakeld.
* Firmware-3.x: AndroidAPS trilt niet bij afgeven van bolus. (minimum [version 2.6.1.4](../Installing-AndroidAPS/Releasenotes.md#version-2-6-1-4))

Firmware version can be found in the menu.

## Batterij vervangen

Battery life for Insight when looping range from 10 to 14 days, max. 20 days. The user reporting this is using Energizer lithium batteries.

The Insight pump has a small internal battery to keep essential functions like the clock running while you are changing the removable battery. If changing the battery takes too long, this internal battery may run out of power, the clock will reset, and you will be asked to enter a new time and date after inserting a new battery. If this happens, all entries in AndroidAPS prior to the battery change will no longer be included in calculations as the correct time cannot be identified properly.

(insight-specific-errors)=

## Insight specifieke foutmeldingen

### Vertraagde bolus

Just use one extended bolus at a time as multiple extended boluses at the same time might cause errors.

### Time-out

Sometimes it might happen that the Insight pump does not answer during connection setup. In this case AAPS will display the following message: "Timeout during handshake - reset bluetooth".

![Insight Reset Bluetooth](../images/Insight_ResetBT.png)

In this case turn off bluetooth on pump AND smartphone for about 10 seconds and then turn it back on.

## Wisselen van tijdzone met de Insight

For information on traveling across time zones see section [Timezone traveling with pumps](../Usage/Timezone-traveling.md#insight).