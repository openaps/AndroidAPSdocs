* * *

orphan: true

* * *

# Accu-Chek Insight Pumpe

**Diese Software ist Teil einer DIY-Lösung (Do It Yourself = Eigenbau) einer künstlichen Bauchspeicheldrüse und kein kommerzielles Produkt. Daher bist DU gefordert. DU musst lesen, lernen und verstehen, was das System macht und wie du es bedienst. Das System wird Dir nicht alle Schwierigkeiten Deiner Diabetestherapie abnehmen, aber wenn Du willens bist, die nötige Zeit zu investieren, dann kann es die Ergebnisse Deiner Therapie verbessern und die Lebensqualität erhöhen. Überstürze nichts. Nimm dir Zeit zum Lernen. Du bist ganz alleine dafür verantwortlich, was Du mit dem System machst.**

* * *

## ***WARNUNG:** Wenn Du bisher die Insight mit **SightRemote** genutzt hast, führe bitte ein **Update auf die neueste AAPS-Version ** durch und **deinstalliere SightRemote**.*

## Hard- und Softwareanforderungen

* Eine Roche Accu-Chek Insight (jede Firmware funktioniert)

Hinweis: AAPS schreibt Daten immer in das **erstes Basalratenprofil in der Pumpe**.

* An Android phone (Basically every Android version would work with Insight, but check on the [Module](../Getting-Started/ComponentOverview) page which Android version is required to run AAPS.)
* AAPS muss auf Deinem Smartphone installiert sein.

## Einrichtung

* Die Insight-Pumpe darf nur mit einem Gerät gleichzeitig verbunden sein. Wenn Du bisher die Fernbedienung mit Messgerät, die zusammen mit der Pumpe geliefert wurde, verwendet hast, musst Du diese aus der Liste der verbundenen Geräte in der Pumpe entfernen: Menü > Einstellungen > Verbindung > Gerät entfernen
    
    ![Screenshot Insight-Fernbedienung entfernen](../images/Insight_RemoveMeter.png)

* In [Config builder](../SettingUpAaps/ConfigBuilder.md) of the AAPS app select Accu-Chek Insight in the pump section
    
    ![Screenshot of Config Builder Insight](../images/Insight_ConfigBuilder_AAPS3_0.jpg)

* Tippe auf das Zahnrad, um die Insight-Einstellungen zu öffnen.

* Klicke den Button 'Insight Pairing' am oberen Bildschirmrand in den erscheinenden Einstellungen. Du solltest eine Liste aller Bluetooth-Geräte in der Nähe sehen (Bild unten links).
* Wähle auf der Insight Pumpe Menü Einstellungen Kommunikation Gerät hinzufügen (Menu > Settings > Communication > Add Device). Auf dem Display der Pumpe wird in folgender Anzeige die Seriennummer der Pumpe angezeigt (Bild unten rechts).
    
    ![Screenshot of Insight Pairing 1](../images/Insight_Pairing1.png)

* Klicke im Smartphone auf die Seriennummer der Pumpe in der Liste der gefundenen Bluetooth-Geräte. Klicke dann zum Bestätigen auf 'Pair'.
    
    ![Screenshot of Insight Pairing 2](../images/Insight_Pairing2.png)

* Sowohl die Pumpe als auch das Telefon zeigen dann einen Code. Stelle sicher, dass der Code auf beiden Geräten übereinstimmt und bestätige das sowohl auf der Pumpe als auch auf dem Smartphone.
    
    ![Screenshot of Insight Pairing 3](../images/Insight_Pairing3.png)

* Fertig! Klopfe Dir selbst auf die Schulter, denn Du hast Pumpe und AAPS erfolgreich miteinander verbunden.
    
    ![Screenshot of Insight Pairing 4](../images/Insight_Pairing4.png)

* Klicke im Reiter KONFIGURATION in AAPS auf das Zahnrad beim Eintrag 'Insight Pumpe', um die Insight-Einstellungen aufzurufen. Tippe dann auf "Insight Pairing' und Dir werden einige Informationen zur Pumpe angezeigt.
    
    ![Screenshot of Insight Pairing Information](../images/Insight_PairingInformation.png)

Hinweis: Es besteht keine permanente Verbindung zwischen Pumpe und Smartphone. Eine Verbindung wird nur dann hergestellt, wenn es erforderlich ist (z.B. Setzen einer temporären Basalrate, Bolusabgabe, Auslesen der Pumpenhistorie...). Sonst würden die Akkus des Smartphones und die Batterien der Pumpe zu schnell leer.

(Accu-Chek-Insight-Pump-settings-in-aaps)=

## Einstellungen in AAPS

**Note : It is now possible (only with AAPS v2.7.0 and above) to use ‘Always use basal absolute values’ if you want to use Autotune with Insight pump, even if 'sync is enabled' with Nightscout.** (In AAPS go to [Preferences > NSClient > Advanced Settings](#Preferences-advanced-settings-nsclient)).

![Screenshot der Insight Einstellungen](../images/Insight_settings.png)

In den Insight-Einstellungen in AAPS kannst Du die folgenden Optionen aktivieren:

* “Reservoirwechsel protokollieren”: Es wird automatisch ein Eintrag Reservoirwechsel erfasst, wenn das Programm zum Füllen der Kanüle auf der Pumpe ausgeführt wird.

* "Kanülenwechsel protokollieren": Es wird automatisch ein Eintrag Kanülenwechsel erfasst, wenn das Programm zum Füllen der Kanüle auf der Pumpe ausgeführt wird.

* "Kanülenwechsel protokollieren": Es wird automatisch ein Eintrag Kanülenwechsel erfasst erstellt, wenn das Programm zum Füllen der Kanüle direkt auf der Pumpe ausgeführt wird. **Hinweis: Ein Kanülenwechsel setzt Autosens zurück.**

* "Batteriewechsel protokollieren": Es erfolgt ein Eintrag, wenn Du in der Pumpe die Batterie wechselst.

* "Wechsel des Betriebsmodus protokollieren": Es wird in der AAPS Datenbank vermerkt, wenn Du die Pumpe startest, stoppst oder pausierst.

* "Alarme protokollieren": Wenn die Pumpe einen Alarm ausgibt, wird ein entsprechender Eintrag in der AndroidAPS Datenbank gemacht. Ausgenommen davon sind Erinnerungen, Bolus- und TBR-Abbrüche. Diese werden nicht aufgezeichnet.

* "TBR-Emulation aktivieren": Mit der Insight Pumpe können temporäre Baslaraten (TBR) nur bis max. 250% abgegeben werden. Um diese Einschränkung zu umgehen, führt TBR Emulation dazu, dass die Pumpe einen verzögerten Bolus für das zusätzlich benötigte Insulin abgibt, wenn Du eine TBR von mehr als 250 % einstellst.
    
    **Hinweis: Bitte verwende nicht mehrere verzögerte Boli gleichzeitig, da dies zu Fehlern führen kann.**

* "Vibrationen bei der manuellen Bolusabgabe deaktivieren": Deaktiviert die Vibrationen der Insight Pumpe wenn ein manueller Bolus (oder erweiterter Bolus) abgegeben wird. Diese Einstellung ist nur mit der neuesten Insight Firmware verfügbar (3.x).

* "Vibrationen bei der automatischen Bolusabgabe deaktivieren": Deaktiviert die Vibrationen der Insight Pumpe wenn ein automatischer Bolus (SMB oder Temporäre Basalrate mit TBR Emulation) abgegeben wird. Diese Einstellung ist nur mit der neuesten Insight Firmware verfügbar (3.x).

* "Erholungsdauer": Dies legt fest, wie lange AAPS abwartet, bevor nach einem fehlgeschlagenen Verbindungsversuch ein neuer Versuch unternommen wird. Du kannst Werte zwischen 0 und 20 Sekunden auswählen. Falls Du Verbindungsprobleme haben solltest, wähle eine längere Wartezeit aus ("Erholungsdauer").   
      
    Beispiel für min. Erholungsdauer = 5 und max. Erholungsdauer = 20   
      
    keine Verbindung - warte **5** Sek.   
    neuer Versuch - keine Verbindung - warte **6** Sek.   
    neuer Versuch - keine Verbindung - warte **7** Sek.   
    neuer Versuch - keine Verbindung - warte **8** Sek.   
    ...   
    neuer Versuch - keine Verbindung - warte **20** Sek.   
    neuer Versuch - keine Verbindung - warte **20** Sek.   
    ...

* "Verbindungsabbau-Verzögerung": Legt (in Sekunden) fest, wie lange AAPS nach einer erfolgreich abgeschlossenen Aktion wartet, bis dann die Verbindung zur Pumpe getrennt wird. Der Standardwert ist 5 Sekunden.

Für Zeiträume, in denen die Pumpe gestoppt war, speichert AndroidAPS eine temporäre Basalrate mit 0%.

Auf dem Tab Accu-Chek Insight in AAPS, wird der aktuelle Pumpenstatus angezeigt mit zwei Buttons verfügbar:

* "Aktualisieren": Pumpenstatus aktualisieren
* "TBR-beendet-Benachrichtigung aktivieren/deaktivieren": Im Standard gibt die Insight Pumpe einen Alarm ab, wenn eine temporäre Basalrate beendet wurde. Mit diesem Button kannst Du diesen Alarm aktivieren und deaktivieren ohne auf die Konfigurationssoftware zurückgreifen zu müssen.
    
    ![Screenshot of Insight Status](../images/Insight_Status2.png)

## Einstellungen in der Pumpe

Stelle die Alarme in der Pumpe wie folgt ein:

* Menü > Einstellungen > Pumpeneinstellungen > Moduseinstellungen > Leise > Signalart > Tonsignal
* Menü > Einstellungen > Pumpeneinstellungen > Moduseinstellungen > Leise > Lautstärke > 0 (alle Balken entfernen)
* Menü > Modi > Signal-Modus > Stille

Damit werden Pumpenalarme stumm geschaltet, sodass AAPS entscheiden kann, ob ein Alarm für Dich relevant ist. Wenn AAPS einen Alarm nicht bestätigt, wird dessen Lautstärke ansteigen (zuerst einem Piepton, dann mit Vibration).

(Accu-Chek-Insight-Pump-vibration)=

### Vibration

Abhängig von der Version der Pumpen-Firmware kann die Insight bei Bolusabgabe (z. B. Abgabe SMB oder TBR-Anpassungen mit verlängertem Bolus) jedes Mal kurz vibrieren.

* Firmware 1.x: Grundsätzlich keine Vibration
* Firmware 2.x: Vibration kann nicht deaktiviert werden.
* Firmware 3.x: AAPS Bolusabgabe ohne Vibration. (minimum [version 2.6.1.4](#Releasenotes-version-2-6-1-4))

Die Firmware-Version kann im Menü der Pumpe nachgesehen werden.

## Batteriewechsel

Die Batterielebensdauer bei der Insight im Loop liegt zwischen 10 und 14 Tagen, maximal wurden 20 Tage erreicht. Diese Angaben wurden mit Energizer Lithium Batterien ermittelt.

Die Innenpumpe hat eine kleine interne Batterie, um wichtige Funktionen wie die Uhr am Laufen zu halten, während Du die herausnehmbare Batterie wechselst. Wenn der Batteriewechsel zu lange dauert, kann diese interne Batterie leer werden, die Uhr wird zurückgesetzt und Du wirst gebeten, Zeit und Datum nach dem Einlegen der neuen Batterie neu einzugeben. In diesem Fall werden alle Einträge in AAPS, die vor dem Batteriewechsel liegen, nicht mehr in die Berechnungen aufgenommen, da die richtige Zeit nicht korrekt erkannt werden kann.

(Accu-Chek-Insight-Pump-insight-specific-errors)=

## Insight spezifische Fehler

### Verzögerter Bolus

Bitte verwende nicht mehrere verzögerte Boli gleichzeitig, da dies zu Fehlern führen kann.

### Timeout

Manchmal kann es passieren, dass die Insight Pumpe während des Verbindungsaufbaus nicht antwortet. In diesem Fall wird AAPS die folgende Nachricht anzeigen: "Zeitüberschreitung während des Handshakes - Bluetooth zurücksetzen".

![Insight Reset Bluetooth](../images/Insight_ResetBT.png)

Schalte dann Bluetooth auf Pumpe und Smartphone für etwa 10 Sekunden aus und schalte es dann wieder ein.

## Mit der Insight Pumpe über Zeitzonen hinweg reisen

For information on traveling across time zones see section [Timezone traveling with pumps](#timezone-traveling-insight).