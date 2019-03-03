# Accu-Chek Insight Pumpe

**Die Software ist Teil der DIY-Lösung (Do It Yourself = Eigenbau) einer künstlichen Bauchspeicheldrüse und kein kommerzielles Produkt. Daher bist DU gefordert. DU musst lesen, lernen und verstehen, was das System macht und wie du es bedienst. Das System wird Dir nicht alle Schwierigkeiten Deiner Diabetestherapie abnehmen, aber wenn Du willens bist, die nötige Zeit zu investieren, dann kann es die Ergebnisse Deiner Therapie verbessern und die Lebensqualität erhöhen. Überstürze nichts. Nimm dir Zeit zum Lernen. Du bist ganz alleine dafür verantwortlich, was Du mit dem System machst.**

* * *

## ***WARNUNG:** Wenn Du bisher die Insight mit **SightRemote** genutzt hast, führe bitte ein **Update auf Version 2.1** durch und **deinstalliere SightRemote**.*

## Hardware- und Softwareanforderungen

- Eine Roche Accu-Chek Insight Insulinpumpe (alle Firmware-Version können genutzt werden) <br /> Hinweis: AAPS schreibt die Daten immer in das **erste Basalraten-Profil in der Pumpe**.
- Android-Handy
- AndroidAPS App (mindestens Version 2.1) muss auf Deinem Smartphone installiert sein.

## Einrichtung

-     Wähle die Accu-Chek Insight im Bereich 'Pumpe' des AndroidAPS [Konfigurations-Generators](../Configuration/Config-Builder).
     
      ![Screenshot des Konfigurations-Generators](../../images/Insight_ConfigBuilder.png)
     

-     Tippe auf das Zahnrad, um die Insight-Einstellungen zu öffnen.
     

-     Klicke den Button 'Insight Pairing' am oberen Bildschirmrand in den erscheinenden Einstellungen. Du solltest eine Liste aller Bluetooth-Geräte in der Nähe sehen (Bild unten links).
     
 
 -     Wähle auf der Insight Pumpe Menü > Einstellungen > Kommunikation > Gerät hinzufügen (Menu > Settings > Communication > Add Device). Auf dem Display der Pumpe wird in folgender Anzeige die Seriennummer der Pumpe angezeigt (Bild unten rechts).
      
      ![Screenshot Insight Pairing 1](../../images/Insight_Pairing1.png)
      

-     Klicke im Smartphone auf die Seriennummer der Pumpe in der Liste der gefundenen Bluetooth-Geräte. Klicke dann zum Bestätigen auf 'Pair'. 
     
      ![Screenshot Insight Pairing 2](../../images/Insight_Pairing2.png)
     

-     Sowohl die Pumpe als auch das Telefon zeigen dann einen Code. Stelle sicher, dass der Code auf beiden Geräten übereinstimmt und bestätige das sowohl auf der Pumpe als auch auf dem Smartphone.
     
      ![Screenshot Insight Pairing 3](../../images/Insight_Pairing3.png)
     

-     Fertig! Klopfe Dir selbst auf die Schulter, denn Du hast Pumpe und AndroidAPS erfolgreich verbunden.
     
      ![Screenshot Insight Pairing 4](../../images/Insight_Pairing4.png)
     

-     Klicke im Konfigurations-Generator in AndroidAPS auf das Zahnrad beim Eintrag 'Insight Pumpe', um die Insight-Einstellungen aufzurufen. Klicke dann auf "Insight Pairing' und Dir werden einige Informationen zur Pumpe angezeigt
     

Hinweis: Es besteht keine permanente Verbindung zwischen Pumpe und Smartphone. Eine Verbindung wird nur dann hergestellt, wenn es erforderlich ist (z.B. Setzen einer temporären Basalrate, Bolusabgabe, Auslesen der Pumpenhistorie...). Sonst würden die Akkus des Smartphones und die Batterien der Pumpe zu schnell leer.

## Einstellungen in AndroidAPS

      ![Screenshot Insight Settings](../images/Insight_pairing.png)
    

In den Insight-Einstellungen in AndroidAPS kannst Du die folgenden Optionen aktivieren:

- "Katheterwechsel protokollieren": Es wird automatisch ein Eintrag Katheterwechsel erfasst, wenn das Programm zum Füllen der Kanüle auf der Pumpe ausgeführt wird.  
 <font color="red">Hinweis: Ein Wechsel der Kanüle führt zu einem Reset von Autosens.</b></font>
- "Schlauchwechsel protokollieren": In der AndroidAPS Datenbank wird ein entsprechender Eintrag vermerkt, wenn das Programm "Schlauch befüllen" auf der Pumpe gestartet wird.
- "Batteriewechsel protokollieren": Es erfolgt ein Eintrag, wenn Du in der Pumpe die Batterie wechselst.
- "Wechsel des Betriebsmodus protokollieren": Es wird in der AndroidAPS Datenbank vermerkt, wenn Du die Pumpe startest, stoppst oder pausierst.
- "Alarme protokollieren": Wenn die Pumpe einen Alarm ausgibt, wird ein entsprechender Eintrag in der AndroidAPS Datenbank gemacht. Ausgenommen davon sind Erinnerung, Bolus- und TBR-Abbrüche. Diese werden nicht aufgezeichnet.
- "TBR-Emulation aktivieren": Mit der Insight Pumpe können temporäre Baslaraten (TBR) nur bis max. 250% abgegeben werden. Um diese Einschränkung zu umgehen, führt TBR Emulation dazu, dass die Pumpe einen verzögerten Bolus für das zusätzlich benötigte Insulin abgibt, wenn Du eine TBR von mehr als 250 % einstellst.
-     "Erholungsdauer": Dies legt fest, wie lange AndroidAPS abwartet, bevor nach einem fehlgeschlagenen Verbindungsversuch ein neuer Versuch unternommen wird. Du kannst Werte zwischen 0 und 20 Sekunden auswählen. Falls Du Verbindungsprobleme haben solltest, wähle eine längere Wartezeit aus ("Erholungsdauer"). 
       <br><br>Beispiel für min. Erholungsdauer = 5 und max. Erholungsdauer = 20
       <br><br>keine Verbindung -> warte <b>5</b> Sek.
         <br>  neuer Versuch -> keine Verbindung -> warte <b>6</b> Sek.
         <br>  neuer Versuch -> keine Verbindung -> warte <b>7</b> Sek.
         <br>  neuer Versuch -> keine Verbindung -> warte <b>8</b> Sek.
         <br>...
         <br>neuer Versuch -> keine Verbindung -> warte <b>20</b> Sek.
         <br>neuer Versuch -> keine Verbindung -> warte <b>20</b> Sek.
         <br>...
     

-     "Verbindungsabbau-Verzögerung": Legt (in Sekunden) fest, wie lange AndroidAPS wartet, bevor die Verbindung zur Pumpe getrennt wird, nachdem eine Aktion erfolgreich beendet wurde. Der Standardwert ist 5 Sekunden.
     

Für Zeiträume, in denen die Pumpe gestoppt war, speichert AndroidAPS eine temporäre Basalrate mit 0%.

In AndroidAPS zeigt der Accu-Chek Insight Tab den aktuellen Pumpenstatus. Der Tab verfügt über zwei Buttons:

- "Aktualisieren": Pumpenstatus aktualisieren
-     "TBR-beendet-Benachrichtigung aktivieren/deaktivieren": Im Standard gibt die Insight Pumpe einen Alarm ab, wenn eine temporäre Basalrate beendet wurde. Mit diesem Button kannst Du diesen Alarm aktivieren und deaktivieren ohne auf die Konfigurationssoftware zurückgreifen zu müssen.
     
      ![Screenshot Insight Status](../../images/Insight_Status2.png)
     

## Einstellungen in der Pumpe

Stelle die Alarme in der Pumpe wie folgt ein:

- Menü > Einstellungen > Geräteeinstellungen > Modus Einstellungen > Stille > Signal > Soundmenü > Einstellungen > Geräteeinstellungen > Modus Einstellungen > Stille > Lautstärke > 0 (alle Balken entfernen)
- Menü > Modi > Signal-Modus > Stille

So werden alle Alarme der Pumpe nur noch ohne Ton abgegeben, so dass AndroidAPS entscheiden kann, ob ein Alarm für Dich relevant ist. Wenn AndroidAPS einen Alarm nicht anerkennt, wird dessen Lautstärke steigen (zuerst Piepton, dann Vibration).

Insight Pumpen mit neuerer Firmware werden bei jeder Bolusabgabe kurz vibrieren (z.B. wenn AndroidAPS eine SMB- oder TBR-Emulation anführt). Diese Vibration kann nicht deaktiviert werden. Ältere Pumpen vibrieren in diesen Fällen nicht.

## Batteriewechsel

Die Innenpumpe hat eine kleine interne Batterie, um wichtige Funktionen wie die Uhr am Laufen zu halten, während Du die herausnehmbare Batterie wechselst. Wenn der Batteriewechsel zu lange dauert, kann diese interne Batterie leer werden, die Uhr wird zurückgesetzt und Du wirst gebeten, Zeit und Datum nach dem Einlegen der neuen Batterie neu einzugeben. Falls dies geschieht, werden alle Einträge in AndroidAPS, die vor dem Batteriewechsel liegen, nicht mehr in Berechnungen aufgenommen, da die richtige Zeit nicht korrekt erkannt werden kann.

## Insight spezifische Fehler

Manchmal kann es passieren, dass die Insight Pumpe während des Verbindungsaufbaus nicht antwortet. In diesem Fall wird AAPS die folgende Nachricht anzeigen: "Zeitüberschreitung während des Handshakes - Bluetooth zurücksetzen".

![Bluetooth zurücksetzen](../images/Insight_ResetBT.png)

Schalte dann Bluetooth auf Pumpe und Smartphone für etwa 10 Sekunden aus und schalte es dann wieder ein.

## Mit der Insight Pumpe über Zeitzonen hinweg reisen

Für allgemeine Informationen siehe die Seite [Mit der Pumpe über Zeitzonen hinweg reisen](../Usage/Timezone-traveling#insight).