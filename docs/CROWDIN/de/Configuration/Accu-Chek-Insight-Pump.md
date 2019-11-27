# Accu-Chek Insight Pumpe

**Diese Software ist Teil einer DIY-Lösung (Do It Yourself = Eigenbau) einer künstlichen Bauchspeicheldrüse und kein kommerzielles Produkt. Daher bist DU gefordert. DU musst lesen, lernen und verstehen, was das System macht und wie du es bedienst. Das System wird Dir nicht alle Schwierigkeiten Deiner Diabetestherapie abnehmen, aber wenn Du willens bist, die nötige Zeit zu investieren, dann kann es die Ergebnisse Deiner Therapie verbessern und die Lebensqualität erhöhen. Überstürze nichts. Nimm dir Zeit zum Lernen. Du bist ganz alleine dafür verantwortlich, was Du mit dem System machst.**

* * *

## ***WARNUNG:** Wenn Du bisher die Insight mit **SightRemote** genutzt hast, führe bitte ein **Update auf die neueste AAPS-Version ** durch und **deinstalliere SightRemote**.*

## Hard- und Softwareanforderungen

* Eine Roche Accu-Chek Insight (jede Firmware funktioniert)
    
    Hinweis: AAPS schreibt Daten immer in das **erstes Basalratenprofil in der Pumpe**.

* Ein Android-Telefon (im Grunde funktionieren alle Android-Versionen, aber AndroidAPS selbst benötigt mindestens Android 5 (Lollipop).

* AndroidAPS muss auf Deinem Smartphone installiert sein.

## Einrichtung

* Die Insight-Pumpe darf nur mit einem Gerät gleichzeitig verbunden sein. Wenn Du bisher die Fernbedienung mit Messgerät, die zusammen mit der Pumpe geliefert wurde, verwendet hast, musst Du diese aus der Liste der verbundenen Geräte in der Pumpe entfernen: Menü > Einstellungen > Verbindung > Gerät entfernen
    
    ![Screenshot Insight-Fernbedienung entfernen](../images/Insight_RemoveMeter.png)

* Wähle im [Konfigurations-Generator](../Configuration/Config-Builder) in AndroidAPS die Accu-Chek Insight im Bereich Pumpe.
    
    ![Screenshot of Config Builder Insight](../images/Insight_ConfigBuilder.png)

* Tippe auf das Zahnrad, um die Insight-Einstellungen zu öffnen.

* Klicke den Button 'Insight Pairing' am oberen Bildschirmrand in den erscheinenden Einstellungen. Du solltest eine Liste aller Bluetooth-Geräte in der Nähe sehen (Bild unten links).
* Wähle auf der Insight Pumpe Menü Einstellungen Kommunikation Gerät hinzufügen (Menu > Settings > Communication > Add Device). Auf dem Display der Pumpe wird in folgender Anzeige die Seriennummer der Pumpe angezeigt (Bild unten rechts).
    
    ![Screenshot of Insight Pairing 1](../images/Insight_Pairing1.png)

* Klicke im Smartphone auf die Seriennummer der Pumpe in der Liste der gefundenen Bluetooth-Geräte. Klicke dann zum Bestätigen auf 'Pair'.
    
    ![Screenshot of Insight Pairing 2](../images/Insight_Pairing2.png)

* Sowohl die Pumpe als auch das Telefon zeigen dann einen Code. Stelle sicher, dass der Code auf beiden Geräten übereinstimmt und bestätige das sowohl auf der Pumpe als auch auf dem Smartphone.
    
    ![Screenshot of Insight Pairing 3](../images/Insight_Pairing3.png)

* Fertig! Klopfe Dir selbst auf die Schulter, denn Du hast Pumpe und AndroidAPS erfolgreich verbunden.
    
    ![Screenshot of Insight Pairing 4](../images/Insight_Pairing4.png)

* Klicke im Konfigurations-Generator in AndroidAPS auf das Zahnrad beim Eintrag 'Insight Pumpe', um die Insight-Einstellungen aufzurufen. Klicke dann auf "Insight Pairing' und Dir werden einige Informationen zur Pumpe angezeigt
    
    ![Screenshot of Insight Pairing Information](../images/Insight_PairingInformation.png)

Hinweis: Es besteht keine permanente Verbindung zwischen Pumpe und Smartphone. Eine Verbindung wird nur dann hergestellt, wenn es erforderlich ist (z.B. Setzen einer temporären Basalrate, Bolusabgabe, Auslesen der Pumpenhistorie...). Sonst würden die Akkus des Smartphones und die Batterien der Pumpe zu schnell leer.

## Einstellungen in AndroidAPS

Du darfst **‘Verwende absolute statt prozentuale Basalwerte beim Upload zu NightScout’ NICHT aktivieren **, wenn Du die Insight nutzt. Gehe in AAPS zu Einstellungen > Nightscout-Client > Erweiterte Einstellungen und stelle sicher, dass ‘Verwende absolute statt prozentuale Basalwerte beim Upload zu NightScout‘ deaktiviert ist. Es würde zu falschen Einstellungen der temporären Basalrate in der Insight-Pumpe führen. Folglich wirst Du Autotune nicht nutzen können, aber es gibt keine Alternative zum Abschalten, wenn Du die Insight nutzt.

![Screenshot of Insight Settings](../images/Insight_pairing_V2_5.png)

In den Insight-Einstellungen in AndroidAPS kannst Du die folgenden Optionen aktivieren:

* “Reservoirwechsel protokollieren”: Es wird automatisch ein Eintrag Reservoirwechsel erfasst, wenn das Programm zum Füllen der Kanüle auf der Pumpe ausgeführt wird.
* "Schlauchwechsel protokollieren": In der AndroidAPS Datenbank wird ein entsprechender Eintrag vermerkt, wenn das Programm "Schlauch befüllen" auf der Pumpe gestartet wird.
* "Kanülenwechsel protokollieren": Es wird automatisch ein Eintrag Kanülenwechsel erfasst, wenn das Programm zum Füllen der Kanüle auf der Pumpe ausgeführt wird. **Hinweis: Ein Kanülenwechsel setzt Autosens zurück.**
* "Batteriewechsel protokollieren": Es erfolgt ein Eintrag, wenn Du in der Pumpe die Batterie wechselst.
* "Wechsel des Betriebsmodus protokollieren": Es wird in der AndroidAPS Datenbank vermerkt, wenn Du die Pumpe startest, stoppst oder pausierst.
* "Alarme protokollieren": Wenn die Pumpe einen Alarm ausgibt, wird ein entsprechender Eintrag in der AndroidAPS Datenbank gemacht. Ausgenommen davon sind Erinnerung, Bolus- und TBR-Abbrüche. Diese werden nicht aufgezeichnet.
* "TBR-Emulation aktivieren": Mit der Insight Pumpe können temporäre Basalraten (TBR) nur bis max. 250% abgegeben werden. Um diese Einschränkung zu umgehen, führt TBR Emulation dazu, dass die Pumpe einen verzögerten Bolus für das zusätzlich benötigte Insulin abgibt, wenn Du eine TBR von mehr als 250 % einstellst.
    
    **Hinweis: Bitte verwende nicht mehrere verzögerte Boli gleichzeitig, da dies zu Fehlern führen kann.**

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

Battery life for Insight when looping range from 10 to 14 days, max. 20 days. The user reporting this is using Energizer lithium batteries.

The Insight pump has a small internal battery to keep essential functions like the clock running while you are changing the removable battery. If changing the battery takes too long, this internal battery may run out of power, the clock will reset, and you will be asked to enter a new time and date after inserting a new battery. If this happens, all entries in AndroidAPS prior to the battery change will no longer be included in calculations as the correct time cannot be identified properly.

## Insight spezifische Fehler

### Verzögerter Bolus

Just use one extended bolus at a time as multiple extended boluses at the same time might cause errors.

### Timeout

Sometimes it might happen that the Insight pump does not answer during connection setup. In this case AAPS will display the following message: "Timeout during handshake - reset bluetooth".

![Insight Reset Bluetooth](../images/Insight_ResetBT.png)

In this case turn off bluetooth on pump AND smartphone for about 10 seconds and then turn it back on.

## Mit der Insight Pumpe über Zeitzonen hinweg reisen

For information on traveling across time zones see section [Timezone traveling with pumps](../Usage/Timezone-traveling#insight).