# Accu-Chek Insight Pumpe

**Die Software ist Teil der DIY-Lösung (Do It Yourself = Eigenbau) einer künstlichen Bauchspeicheldrüse und kein kommerzielles Produkt. Daher bist DU gefordert. DU musst lesen, lernen und verstehen, was das System macht und wie du es bedienst. Das System wird Dir nicht alle Schwierigkeiten Deiner Diabetestherapie abnehmen, aber wenn Du willens bist, die nötige Zeit zu investieren, dann kann es die Ergebnisse Deiner Therapie verbessern und die Lebensqualität erhöhen. Überstürze nichts. Nimm dir Zeit zum Lernen. Du bist ganz alleine dafür verantwortlich, was Du mit dem System machst.**

* * *

## ***WARNUNG:** Wenn Du bisher die Insight mit **SightRemote** genutzt hast, führe bitte ein **Update auf Version 2.1** durch und **deinstalliere SightRemote**.*

## Hardware- und Softwareanforderungen

* Eine Roche Accu-Chek Insight Insulinpumpe (alle Firmware-Version können genutzt werden) <br /> Hinweis: AAPS schreibt die Daten immer in das **erste Basalraten-Profil in der Pumpe**.
* Android-Handy
* AndroidAPS App (mindestens Version 2.1) muss auf Deinem Smartphone installiert sein.

## Einrichtung

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

Hinweis: Es besteht keine permanente Verbindung zwischen Pumpe und Smartphone. Eine Verbindung wird nur dann hergestellt, wenn es erforderlich ist (z.B. Setzen einer temporären Basalrate, Bolusabgabe, Auslesen der Pumpenhistorie...). Sonst würden die Akkus des Smartphones und die Batterien der Pumpe zu schnell leer.

## Einstellungen in AndroidAPS

![Screenshot of Insight Settings](../images/Insight_pairing.png)

In the Insight settings in AndroidAPS you can enable the following options:

* "Katheterwechsel protokollieren": Es wird automatisch ein Eintrag Katheterwechsel erfasst, wenn das Programm zum Füllen der Kanüle auf der Pumpe ausgeführt wird.  
    <font color="red">Hinweis: Ein Wechsel der Kanüle führt zu einem Reset von Autosens.</b></font>
* "Schlauchwechsel protokollieren": In der AndroidAPS Datenbank wird ein entsprechender Eintrag vermerkt, wenn das Programm "Schlauch befüllen" auf der Pumpe gestartet wird.
* "Batteriewechsel protokollieren": Es erfolgt ein Eintrag, wenn Du in der Pumpe die Batterie wechselst.
* "Wechsel des Betriebsmodus protokollieren": Es wird in der AndroidAPS Datenbank vermerkt, wenn Du die Pumpe startest, stoppst oder pausierst.
* "Alarme protokollieren": Wenn die Pumpe einen Alarm ausgibt, wird ein entsprechender Eintrag in der AndroidAPS Datenbank gemacht. Ausgenommen davon sind Erinnerung, Bolus- und TBR-Abbrüche. Diese werden nicht aufgezeichnet.
* "TBR-Emulation aktivieren": Mit der Insight Pumpe können temporäre Baslaraten (TBR) nur bis max. 250% abgegeben werden. Um diese Einschränkung zu umgehen, führt TBR Emulation dazu, dass die Pumpe einen verzögerten Bolus für das zusätzlich benötigte Insulin abgibt, wenn Du eine TBR von mehr als 250 % einstellst..  
    <font color="red">Hinweis: Bitte verwende nicht mehrere verzögerte Boli gleichzeitig, da dies zu Fehlern führen kann.</font>
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

* "Aktualisieren": Pumpenstatus aktualisieren
* "Enable/Disable TBR over notification": A standard Insight pump emits an alarm when a TBR is finished. This button lets you enable or disable this alarm without the need for configuration software.
    
    ![Screenshot of Insight Status](../../images/Insight_Status2.png)

## Einstellungen in der Pumpe

Configure alarms in the pump as follows:

* Menü > Einstellungen > Geräteeinstellungen > Modus Einstellungen > Stille > Signal > Soundmenü > Einstellungen > Geräteeinstellungen > Modus Einstellungen > Stille > Lautstärke > 0 (alle Balken entfernen)
* Menü > Modi > Signal-Modus > Stille

This will silence all alarms from the pump, allowing AndroidAPS to decide if an alarm is relevant to you. If AndroidAPS does not acknowledge an alarm, its volume will increase (first beep, then vibration).

Insight pumps with newer firmware will vibrate briefly every time a bolus is delivered (for example, when AndroidAPS issues an SMB or TBR emulation delivers an extended bolus). Vibration cannot be disabled. Older pumps do not vibrate in these circumstances.

## Batteriewechsel

The Insight pump has a small internal battery to keep essential functions like the clock running while you are changing the removable battery. If changing the battery takes too long, this internal battery may run out of power, the clock will reset, and you will be asked to enter a new time and date after inserting a new battery. If this happens, all entries in AndroidAPS prior to the battery change will no longer be included in calculations as the correct time cannot be identified properly.

## Insight spezifische Fehler

### Verzögerter Bolus

Just use one extended bolus at a time as multiple extended boluses at the same time might cause errors.

### Timeout

Sometimes it might happen that the Insight pump does not answer during connection setup. In this case AAPS will display the following message: "Timeout during handshake - reset bluetooth".

![Insight Reset Bluetooth](../images/Insight_ResetBT.png)

In this case turn off bluetooth on pump AND smartphone for about 10 seconds and then turn it back on.

## Mit der Insight Pumpe über Zeitzonen hinweg reisen

For information on traveling accross time zones see section [Timezone traveling with pumps](../Usage/Timezone-traveling#insight).