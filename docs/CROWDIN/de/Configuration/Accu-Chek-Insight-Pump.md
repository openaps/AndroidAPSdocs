# Accu-Chek Insight Pumpe

**Die Software ist Teil der DIY-Lösung (Do It Yourself = Eigenbau) einer künstlichen Bauchspeicheldrüse und kein kommerzielles Produkt. Daher bist DU gefordert. DU musst lesen, lernen und verstehen, was das System macht und wie du es bedienst. Das System wird Dir nicht alle Schwierigkeiten Deiner Diabetestherapie abnehmen, aber wenn Du willens bist, die nötige Zeit zu investieren, dann kann es die Ergebnisse Deiner Therapie verbessern und die Lebensqualität erhöhen. Überstürze nichts. Nimm dir Zeit zum Lernen. Du bist ganz alleine dafür verantwortlich, was Du mit dem System machst.**

* * *

## ***WARNUNG:** Wenn Du bisher die Insight mit **SightRemote** genutzt hast, führe bitte ein **Update auf Version 2.1** durch und **deinstalliere SightRemote**.*

## Hardware- und Softwareanforderungen

* Eine Roche Accu-Chek Insight Insulinpumpe (alle Firmware-Version können genutzt werden) <br /> Hinweis: AAPS schreibt die Daten immer in das **erste Basalraten-Profil in der Pumpe**.
* Ein Android-Telefon (im Grunde funktionieren Android-Versionen, aber AndroidAPS selbst benötigt mindestens Android 5 (Lollipop)
* AndroidAPS App (mindestens Version 2.1) muss auf Deinem Smartphone installiert sein.

## Einrichtung

* The Insight pump should only be connected to one device at a time. If you have previously used the Insight remote control (meter), you must remove the meter from the paired devices list of your pump: Menu > Settings > Communication > Remove device
    
    ![Screenshot of Remove Meter Insight](../images/Insight_RemoveMeter.png)

* In [Config builder](../Configuration/Config-Builder) of the AndroidAPS app select Accu-Chek Insight in the pump section
    
    ![Screenshot of Config Builder Insight](../images/Insight_ConfigBuilder.png)

* Tap the cog-wheel to open Insight settings.

* In settings, tap on the button 'Insight pairing' at the top of the screen. You should see a list of all nearby bluetooth devices (below left).
* On the Insight pump, go to Menu > Settings > Communication > Add Device. The pump will display the following screen (below right) showing the serial number of the pump.
    
    ![Screenshot of Insight Pairing 1](../images/Insight_Pairing1.png)

* Going back to your phone, tap on the pump serial number in the list of bluetooth devices. Then tap on Pair to confirm.
    
    ![Screenshot of Insight Pairing 2](../images/Insight_Pairing2.png)

* Both the pump and phone will then display a code. Check that the codes are the same on both devices and confirm on both the pump and the phone.
    
    ![Screenshot of Insight Pairing 3](../images/Insight_Pairing3.png)

* Success! Pat yourself on the back for successfully pairing your pump with AndroidAPS.
    
    ![Screenshot of Insight Pairing 4](../images/Insight_Pairing4.png)

* To check all is well, go back to Config builder in AndroidAPS and tap on the cog-wheel by the Insight Pump to get into Insight settings, then tap on Insight Pairing and you will see some information about the pump:
    
    ![Screenshot of Insight Pairing Information](../images/Insight_PairingInformation.png)

Hinweis: Es besteht keine permanente Verbindung zwischen Pumpe und Smartphone. Eine Verbindung wird nur dann hergestellt, wenn es erforderlich ist (z.B. Setzen einer temporären Basalrate, Bolusabgabe, Auslesen der Pumpenhistorie...). Sonst würden die Akkus des Smartphones und die Batterien der Pumpe zu schnell leer.

## Einstellungen in AndroidAPS

![Screenshot of Insight Settings](../images/Insight_pairing.png)

In den Insight-Einstellungen in AndroidAPS kannst Du die folgenden Optionen aktivieren:

* "Katheterwechsel protokollieren": Es wird automatisch ein Eintrag Katheterwechsel erfasst, wenn das Programm zum Füllen der Kanüle auf der Pumpe ausgeführt wird.  
    <font color="red">Hinweis: Ein Wechsel der Kanüle führt zu einem Reset von Autosens.</b></font>
* "Schlauchwechsel protokollieren": In der AndroidAPS Datenbank wird ein entsprechender Eintrag vermerkt, wenn das Programm "Schlauch befüllen" auf der Pumpe gestartet wird.
* "Batteriewechsel protokollieren": Es erfolgt ein Eintrag, wenn Du in der Pumpe die Batterie wechselst.
* "Wechsel des Betriebsmodus protokollieren": Es wird in der AndroidAPS Datenbank vermerkt, wenn Du die Pumpe startest, stoppst oder pausierst.
* "Alarme protokollieren": Wenn die Pumpe einen Alarm ausgibt, wird ein entsprechender Eintrag in der AndroidAPS Datenbank gemacht. Ausgenommen davon sind Erinnerung, Bolus- und TBR-Abbrüche. Diese werden nicht aufgezeichnet.
* "TBR-Emulation aktivieren": Mit der Insight Pumpe können temporäre Baslaraten (TBR) nur bis max. 250% abgegeben werden. Um diese Einschränkung zu umgehen, führt TBR Emulation dazu, dass die Pumpe einen verzögerten Bolus für das zusätzlich benötigte Insulin abgibt, wenn Du eine TBR von mehr als 250 % einstellst..  
    <font color="red">Hinweis: Bitte verwende nicht mehrere verzögerte Boli gleichzeitig, da dies zu Fehlern führen kann.</font>
* "Erholungsdauer": Dies legt fest, wie lange AndroidAPS abwartet, bevor nach einem fehlgeschlagenen Verbindungsversuch ein neuer Versuch unternommen wird. Du kannst Werte zwischen 0 und 20 Sekunden auswählen. Falls Du Verbindungsprobleme haben solltest, wähle eine längere Wartezeit aus ("Erholungsdauer").   
      
    Beispiel für min. Erholungsdauer = 5 und max. Erholungsdauer = 20   
      
    keine Verbindung - warte **5** Sek.   
    neuer Versuch - keine Verbindung - warte **6** Sek.   
    neuer Versuch - keine Verbindung - warte **7** Sek.   
    neuer Versuch - keine Verbindung - warte **8** Sek.   
    ...   
    neuer Versuch - keine Verbindung - warte **20** Sek.   
    neuer Versuch - keine Verbindung - warte **20** Sek.   
    ...

* "Verbindungsabbau-Verzögerung": Legt (in Sekunden) fest, wie lange AndroidAPS wartet, bevor die Verbindung zur Pumpe getrennt wird, nachdem eine Aktion erfolgreich beendet wurde. Der Standardwert ist 5 Sekunden.

Für Zeiträume, in denen die Pumpe gestoppt war, speichert AndroidAPS eine temporäre Basalrate mit 0%.

In AndroidAPS zeigt der Accu-Chek Insight Tab den aktuellen Pumpenstatus. Der Tab verfügt über zwei Buttons:

* "Aktualisieren": Pumpenstatus aktualisieren
* "TBR-beendet-Benachrichtigung aktivieren/deaktivieren": Im Standard gibt die Insight Pumpe einen Alarm ab, wenn eine temporäre Basalrate beendet wurde. Mit diesem Button kannst Du diesen Alarm aktivieren und deaktivieren ohne auf die Konfigurationssoftware zurückgreifen zu müssen.
    
    ![Screenshot of Insight Status](../images/Insight_Status2.png)

## Einstellungen in der Pumpe

Stelle die Alarme in der Pumpe wie folgt ein:

* Menü > Einstellungen > Geräteeinstellungen > Modus Einstellungen > Stille > Signal > Soundmenü > Einstellungen > Geräteeinstellungen > Modus Einstellungen > Stille > Lautstärke > 0 (alle Balken entfernen)
* Menü > Modi > Signal-Modus > Stille

So werden alle Alarme der Pumpe nur noch ohne Ton abgegeben, so dass AndroidAPS entscheiden kann, ob ein Alarm für Dich relevant ist. Wenn AndroidAPS einen Alarm nicht anerkennt, wird dessen Lautstärke steigen (zuerst Piepton, dann Vibration).

Insight Pumpen mit neuerer Firmware werden bei jeder Bolusabgabe kurz vibrieren (z.B. wenn AndroidAPS eine SMB- oder TBR-Emulation anführt). Diese Vibration kann nicht deaktiviert werden. Ältere Pumpen vibrieren in diesen Fällen nicht.

## Batteriewechsel

Die Innenpumpe hat eine kleine interne Batterie, um wichtige Funktionen wie die Uhr am Laufen zu halten, während Du die herausnehmbare Batterie wechselst. Wenn der Batteriewechsel zu lange dauert, kann diese interne Batterie leer werden, die Uhr wird zurückgesetzt und Du wirst gebeten, Zeit und Datum nach dem Einlegen der neuen Batterie neu einzugeben. Falls dies geschieht, werden alle Einträge in AndroidAPS, die vor dem Batteriewechsel liegen, nicht mehr in Berechnungen aufgenommen, da die richtige Zeit nicht korrekt erkannt werden kann.

## Insight spezifische Fehler

### Verzögerter Bolus

Bitte verwende nicht mehrere verzögerte Boli gleichzeitig, da dies zu Fehlern führen kann.

### Timeout

Manchmal kann es passieren, dass die Insight Pumpe während des Verbindungsaufbaus nicht antwortet. In diesem Fall wird AAPS die folgende Nachricht anzeigen: "Zeitüberschreitung während des Handshakes - Bluetooth zurücksetzen".

![Insight Reset Bluetooth](../images/Insight_ResetBT.png)

Schalte dann Bluetooth auf Pumpe und Smartphone für etwa 10 Sekunden aus und schalte es dann wieder ein.

## Mit der Insight Pumpe über Zeitzonen hinweg reisen

Für allgemeine Informationen siehe die Seite [Mit der Pumpe über Zeitzonen hinweg reisen](../Usage/Timezone-traveling#insight).