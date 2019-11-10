# Accu-Chek Insight pomp

**Deze software is onderdeel van een doe-het-zelf oplossing en is geen kant-en-klaar product, maar vraagt JOU te lezen, leren en te begrijpen hoe het systeem werkt en hoe je het kunt gebruiken. Het neemt niet je gehele diabetes management van je over, maar stelt je wel in staat om je diabetes beter onder controle te krijgen en je kwaliteit van leven te verhogen, als je bereid bent de benodigde tijd erin te investeren. Haast je niet, maar geef jezelf de tijd om te leren. Jij alleen bent verantwoordelijk voor wat je ermee doet.**

* * *

## ***WAARSCHUWING:** Als je de Insight in het verleden al gebruikte met **SightRemote,** werk AndroidAPS dan bij naar de nieuwste AAPS versie en **verwijder SightRemote**!*

## Benodigde hardware en software

* A Roche Accu-Chek Insight pump (any firmware, they all work)
    
    Note: AAPS will write data always in **first basal rate profile in the pump**.

* An Android phone (Basically every Android version would work, but AndroidAPS itself requires at least Android 5 (Lollipop).)

* De AndroidAPS-app geïnstalleerd op jouw telefoon

## Pomp koppelen

* De Insight pomp mag aan één apparaat tegelijk gekoppeld zijn. Wanneer je de afstandsbediening (meter) eerder hebt gebruikt, moet je de meter verwijderen uit de lijst van gekoppelde apparaten in jouw pomp: Menu > Instellingen > Communicatie> Apparaat verwijderen > Meter
    
    ![Screenshot van Insight Verwijderen Meter](../images/Insight_RemoveMeter.png)

* In de [Configurator](../Configuration/Config-Builder) van AndroidAPS: selecteer Accu-Chek Insight in de pomp sectie
    
    ![Screenshot van Insight Config Builder](../images/Insight_ConfigBuilder.png)

* Tik op het tandwiel-icoon naast Insight om de instellingen te openen.

* In de instellingen: tik op de knop 'Insight koppelen' bovenaan het scherm. Als het goed is zie je nu een lijst van alle nabijgelegen bluetooth apparaten (links onder).
* Op de Insight pomp, ga naar Menu > Instellingen > Communicatie > Apparaat toevoegen. De pomp zal het volgende scherm (rechts onder) weergeven met het serienummer van de pomp.
    
    ![Screenshot van Insight Pairing 1](../images/Insight_Pairing1.png)

* Ga terug naar je telefoon, tik op het pomp serienummer in de lijst van bluetooth apparaten. Tik vervolgens op Koppelen om te bevestigen.
    
    ![Screenshot van Insight Pairing 2](../images/Insight_Pairing2.png)

* Zowel op je pomp als op je telefoon zal vervolgens een code verschijnen. Controleer of de codes op beide apparaten hetzelfde zijn en bevestig op zowel pomp als telefoon.
    
    ![Screenshot van Insight Pairing 3](../images/Insight_Pairing3.png)

* Succes! Geef jezelf een schouderklopje voor het succesvol koppelen van je pomp met AndroidAPS.
    
    ![Screenshot van Insight Pairing 4](../images/Insight_Pairing4.png)

* Om te controleren of alles goed is gegaan, ga je terug naar de Configurator in AndroidAPS en tik op het tandwiel-icoontje bij de Insight pomp om in de Insight-instellingen te komen. Tik vervolgens op Insight Pairing en je zult wat informatie te zien krijgen over de pomp:
    
    ![Screenshot van Insight Pairing Informatie](../images/Insight_PairingInformation.png)

Opmerking: Er zal geen permanente verbinding zijn tussen pomp en telefoon. A connection will only be established if necessary (i.e. setting temporary basal rate, giving bolus, reading pump history...). Anders zouden de batterij van telefoon en pomp te snel leeglopen.

## Instellingen in AAPS

You **must not use ‘Always use basal absolute values’** with Insight pump. In AAPS go to Preferences > Nightscout-Client > Advanced Settings and make sure ‘Always use basal absolute values’ is disabled. It would lead to false TBR settings in Insight pump. As a consequence you will not be able to use Autotune but there is no alternative to disable this when using Insight pump.

![Screenshot of Insight Settings](../images/Insight_pairing_V2_5.png)

In the Insight settings in AndroidAPS you can enable the following options:

* "Log reservoir changes": This will automatically record an insulin cartridge change when you run the "fill cannula" program on the pump.
* "Slangwissel noteren": Dit voegt een notitie toe aan de AndroidAPS database wanneer je het "infusieset vullen" programma op de pomp gebruikt.
* "Log site change": This adds a note to the AndroidAPS database when you run the "cannula filling" program on the pump. **Note: A site change also resets Autosens.**
* "Log battery changes": This records a battery change when you put a new battery in the pump.
* "Log operating mode changes": This inserts a note in the AndroidAPS database whenever you start, stop or pause the pump.
* "Log alerts": This records a note in the AndroidAPS database whenever the pump issues an alert (except reminders, bolus and TBR cancellation - those are not recorded).
* "Enable TBR emulation": The Insight pump can only issue temporary basal rates (TBRs) up to 250%. To get round this restriction, TBR emulation will instruct the pump to deliver an extended bolus for the extra insulin if you request a TBR of more than 250%.
    
    **Note: Just use one extended bolus at a time as multiple extended boluses at the same time might cause errors.**

* "Recovery duration": This defines how long AndroidAPS will wait before trying again after a failed connection attempt. You can choose from 0 to 20 seconds. If you experience connection problems, choose a longer wait time.   
      
    Example for min. recovery duration = 5 and max. recovery duration = 20   
      
    no connection -> wait **5** sec.   
    retry -> no connection -> wait **6** sec.   
    retry -> no connection -> wait **7** sec.   
    retry -> no connection -> wait **8** sec.   
    ...   
    retry -> no connection -> wait **20** sec.   
    retry -> no connection -> wait **20** sec.   
    ...

* "Disconnect delay": This defines how long (in seconds) AndroidAPS will wait to disconnect from the pump after an operation is finished. Default value is 5 seconds.

For periods when pump was stopped AAPS will log a temp. basal rate with 0%.

In AndroidAPS, the Accu-Chek Insight tab shows the current status of the pump and has two buttons:

* "Vernieuw": Vernieuwt de pomp status
* "Activeer/deactiveer melding van TBR einde": Een Insight pomp is standaard ingesteld om een alarm af te geven wanneer een TBR (tijdelijke basaalstand) eindigt. Met deze knop kun je dit alarm activeren of deactiveren zonder dat je hiervoor speciale Accucheck configuratie-software nodig hebt.
    
    ![Screenshot van Insight Status](../images/Insight_Status2.png)

## Instellingen in de pomp

Configure alarms in the pump as follows:

* Menu > Instellingen > Apparaat-instellingen > Instellingen modus > Zacht > Signaal > Geluid Menu > Instellingen > Apparaatinstellingen > Instellingen modus > Zacht > Volume > 0 (verwijder alle balken)
* Menu > Modi > Signaalmodus > Zacht

This will silence all alarms from the pump, allowing AndroidAPS to decide if an alarm is relevant to you. If AndroidAPS does not acknowledge an alarm, its volume will increase (first beep, then vibration).

Insight pumps with newer firmware will vibrate briefly every time a bolus is delivered (for example, when AndroidAPS issues an SMB or TBR emulation delivers an extended bolus). Vibration cannot be disabled. Older pumps do not vibrate in these circumstances.

## Batterij vervangen

The Insight pump has a small internal battery to keep essential functions like the clock running while you are changing the removable battery. If changing the battery takes too long, this internal battery may run out of power, the clock will reset, and you will be asked to enter a new time and date after inserting a new battery. If this happens, all entries in AndroidAPS prior to the battery change will no longer be included in calculations as the correct time cannot be identified properly.

## Insight specifieke foutmeldingen

### Vertraagde bolus

Just use one extended bolus at a time as multiple extended boluses at the same time might cause errors.

### Time-out

Sometimes it might happen that the Insight pump does not answer during connection setup. In this case AAPS will display the following message: "Timeout during handshake - reset bluetooth".

![Insight Reset Bluetooth](../images/Insight_ResetBT.png)

In this case turn off bluetooth on pump AND smartphone for about 10 seconds and then turn it back on.

## Wisselen van tijdzone met de Insight

For information on traveling across time zones see section [Timezone traveling with pumps](../Usage/Timezone-traveling#insight).