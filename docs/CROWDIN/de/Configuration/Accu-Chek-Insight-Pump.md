# Accu-Chek Insight Pumpe

**Diese Software ist Teil einer DIY-Lösung (Do It Yourself = Eigenbau) einer künstlichen Bauchspeicheldrüse und kein kommerzielles Produkt. Daher bist DU gefordert. DU musst lesen, lernen und verstehen, was das System macht und wie du es bedienst. Das System wird Dir nicht alle Schwierigkeiten Deiner Diabetestherapie abnehmen, aber wenn Du willens bist, die nötige Zeit zu investieren, dann kann es die Ergebnisse Deiner Therapie verbessern und die Lebensqualität erhöhen. Überstürze nichts. Nimm dir Zeit zum Lernen. Du bist ganz alleine dafür verantwortlich, was Du mit dem System machst.**

* * *

## ***WARNUNG:** Wenn Du bisher die Insight mit **SightRemote** genutzt hast, führe bitte ein **Update auf die neueste AAPS-Version ** durch und **deinstalliere SightRemote**.*

## Hard- und Softwareanforderungen

* Eine Roche Accu-Chek Insight Insulinpumpe (alle Firmware-Version können genutzt werden)
<br>   Hinweis: AAPS schreibt die Daten immer in das  <b>erste Basalraten-Profil in der Pumpe</b>.
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

![Screenshot of Insight Settings](../images/Insight_pairing_V2_5.png)

In den Insight-Einstellungen in AndroidAPS kannst Du die folgenden Optionen aktivieren:

* "Log reservoir changes": This will automatically record an insulin cartridge change when you run the "fill cannula" program on the pump.  
    <font color="red">Note: A cannula change also resets Autosens</b></font>
* "Schlauchwechsel protokollieren": In der AndroidAPS Datenbank wird ein entsprechender Eintrag vermerkt, wenn das Programm "Schlauch befüllen" auf der Pumpe gestartet wird.
* "Log site change": This adds a note to the AndroidAPS database when you run the "cannula filling" program on the pump.
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