# Accu-Chek Insight pomp

**Deze software is onderdeel van een doe-het-zelf oplossing en is geen kant-en-klaar product, maar vraagt JOU te lezen, leren en te begrijpen hoe het systeem werkt en hoe je het kunt gebruiken. Het neemt niet je gehele diabetes management van je over, maar stelt je wel in staat om je diabetes beter onder controle te krijgen en je kwaliteit van leven te verhogen, als je bereid bent de benodigde tijd erin te investeren. Haast je niet, maar geef jezelf de tijd om te leren. Jij alleen bent verantwoordelijk voor wat je ermee doet.**

* * *

## ***WAARSCHUWING:** Als je de Insight al gebruikte met **SightRemote** in het verleden, gelieve **bij te werken naar versie 2.1.1** en **SightRemote te verwijderen**.*

## Benodigde hardware en software

* Een Roche Accu-Chek Insight pomp (firmware maakt niet uit, ze werken allemaal) <br />Opmerking: AAPS zal alleen het **eerste basaal-profiel van de pomp** gebruiken.
* Een Android telefoon
* De AndroidAPS-app (versie 2.1.1 of hoger) geïnstalleerd op jouw telefoon

## Pomp koppelen

* In [Config builder](../Configuration/Config-Builder) of the AndroidAPS app select Accu-Chek Insight in the pump section
    
    ![Screenshot of Config Builder Insight](../../images/Insight_ConfigBuilder.png)

* Tap the cog-wheel to open Insight settings.

* In settings, tap on the button 'Insight pairing' at the top of the screen. You should see a list of all nearby bluetooth devices (below left).
* On the Insight pump, go to Menu > Settings > Communication > Add Device. The pump will display the following screen (below right) showing the serial number of the pump.
    
    ![Screenshot of Insight Pairing 1](../../images/Insight_Pairing1.png)

* Going back to your phone, tap on the pump serial number in the list of bluetooth devices. Then tap on Pair to confirm.
    
    ![Screenshot of Insight Pairing 2](../../images/Insight_Pairing2.png)

* Both the pump and phone will then display a code. Check that the codes are the same on both devices and confirm on both the pump and the phone.
    
    ![Screenshot of Insight Pairing 3](../../images/Insight_Pairing3.png)

* Success! Pat yourself on the back for successfully pairing your pump with AndroidAPS.
    
    ![Screenshot of Insight Pairing 4](../../images/Insight_Pairing4.png)

* To check all is well, go back to Config builder in AndroidAPS and tap on the cog-wheel by the Insight Pump to get into Insight settings, then tap on Insight Pairing and you will see some information about the pump:
    
    ![Screenshot of Insight Pairing Information](../../images/Insight_PairingInformation.png)

Opmerking: Er zal geen permanente verbinding zijn tussen pomp en telefoon. Een verbinding zal alleen tot stand worden gebracht als dat nodig is (d.w.z. instellen van tijdelijke basaalstand, bolus geven, pomp geschiedenis uitlezen...). Anders zouden de batterij van telefoon en pomp te snel leeglopen.

## Instellingen in AAPS

![Screenshot of Insight Settings](../images/Insight_pairing.png)

In the Insight settings in AndroidAPS you can enable the following options:

* "Infuuswissel noteren": Dit zal automatisch een insuline ampul wissel noteren in AndroidAPS wanneer je het "vul canule" programma op de pomp gebruikt.  
    <font color="red">Opmerking: Een canule wissel reset ook Autosens</b></font>
* "Slangwissel noteren": Dit voegt een notitie toe aan de AndroidAPS database wanneer je het "infusieset vullen" programma op de pomp gebruikt.
* "Batterijwissel noteren": Dit voegt een notitie toe aan AndroidAPS wanneer je een nieuwe batterij in de pomp plaatst.
* "Werkingsmodus-wissel noteren": Hiermee voegt je een notitie toe in de AndroidAPS database wanneer je de pomp start, stopt of pauzeert.
* "Alarm noteren": Dit maakt een notitie in AndroidAPS wanneer de pomp een alarm geeft (behalve herinneringen, bolus en tijdelijke basaalstand annulering - deze worden niet geregistreerd).
* "TBR-emulatie inschakelen": De Insight pump kan alleen tijdelijke basaalstanden (TBRs) instellen tot maximaal 250%. Om deze beperking te omzeilen, zal TBR-emulatie ervoor zorgen dat de pomp een vertraagde bolus gebruikt als je een TBR van meer dan 250% nodig hebt.  
    <font color="red">Opmerking: gebruik slechts één vertraagde bolus tegelijkertijd omdat meerdere vertraagde bolussen tegelijkertijd, fouten kunnen veroorzaken.</font>
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
* "Enable/Disable TBR over notification": A standard Insight pump emits an alarm when a TBR is finished. This button lets you enable or disable this alarm without the need for configuration software.
    
    ![Screenshot of Insight Status](../../images/Insight_Status2.png)

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

For information on traveling accross time zones see section [Timezone traveling with pumps](../Usage/Timezone-traveling#insight).