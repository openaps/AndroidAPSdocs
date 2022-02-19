# Omnipod DASH

Diese Anleitung ist für die Konfiguration der **Omnipod DASH** Pumpe **(NICHT für Omnipod Eros)**. Der Omnipod-Treiber ist als Teil von AndroidAPS (AAPS) ab Version 3.0 verfügbar.

**Diese Software ist Teil einer DIY-Lösung (Do It Yourself = Eigenbau) und kein kommerzielles Produkt. Daher bist DU gefordert. DU musst lesen, lernen und verstehen, was das System macht und wie du es bedienst. Du bist ganz alleine dafür verantwortlich, was Du mit dem System machst.**

## Omnipod DASH Spezifikationen

Hier finden sich die Spezifikationen für den **Omnipod DASH** und die Unterschiede zum **Omnipod EROS**:

* Die DASH Pods sind durch eine blaue Nadelkappe gekennzeichnet (EROS haben eine farblose Nadelkappe). Die Pods sind ansonsten in Bezug auf die übrigen Abmessungen identisch.
* Es muss kein separates Gerät für die Verbindung zwischen DASH Pods und AAPS verwendet werden, da in den Pods ein Bluetooth-Modul integriert ist (KEIN RileyLink, OrangeLink oder EmaLink erforderlich).
* Die BT-Verbindung wird immer nur kurz zum Senden von Befehlen verwendet und trennt sich anschließend wieder!
* Der Fehler "Keine Verbindung zum Gerät / Pod" tritt nicht mehr auf.
* AAPS wartet auf Erreichbarkeit des Pod, um Befehle zu senden
* Für die Aktivierung eines neuen DASH Pod findet AAPS den Pod und verbindet sich.
* Reichweite für die BT-Verbindung: 5-10 Meter (je nach Umgebung)

## Hardware- und Software-Anforderungen

* Ein neuer **Omnipod DASH** (erkennbar durch eine blaue Nadelkappe)

![Omnipod Pod](../images/DASH_images/Omnipod_Pod.png)

* **Kompatibles Android Smartphone** mit Bluetooth-Verbindung (Bluetooth Low Energy, BLE)
   -  Nicht alle Telefone und Android-Versionen werden sicher funktionieren. Bitte überprüfe die [**DASH getesteten Telefone**](https://docs.google.com/spreadsheets/d/1zO-Vf3wv0jji5Gflk6pe48oi348ApF5RvMcI6NG5TnY) oder teste einfach mit Deinem Telefon und teile das Ergebnis (Telefonversion und geographische Region, Android-Version, funktioniert / einige Schwierigkeiten / funktioniert nicht).
   -  **Bei einigen Telefonmodellen könnte es zu Problemen kommen**: Beachte, dass der Omnipod DASH Treiber des AAPS sich jedes Mal mit dem DASH Pod über Bluetooth verbindet, wenn er einen Befehl sendet und sich unmittelbar danach wieder trennt. Die Bluetooth-Verbindungen können durch andere Geräte gestört werden, die mit dem Telefon verbunden sind, auf dem AAPS läuft, wie Earbuds etc... (was in seltenen Fällen zu Verbindungsproblemen oder Pod-Fehlern bei der Aktivierung oder danach bei einigen Telefonmodellen führen kann).</strong>
   -  **Version 3.0 oder neuer von AndroidAPS erstellt und installiert** nach der [**Build APK**](../Installing-AndroidAPS/Building-APK.html#) Anleitung.
* [**Kontinuierliche Glukosemessung (CGM)**](https://androidaps.readthedocs.io/en/latest/Configuration/BG-Source.html)

Diese Anleitung geht davon aus, dass Du einen neuen DASH Pod startest. Falls dies nicht der Fall ist, habe bitte Geduld und beginne diesen Prozess erst bei Deinem nächsten Starten eines neuen Pods.

## Bevor du anfängst

**Sicherheit geht vor** - Stelle sicher, dass Du auf eventuell auftretende Fehler reagieren kannst, bevor Du diesen Prozess beginnst: zusätzliche Pods, Insulin und Smartphone mit vollem Akku sind unbedingt notwendig.

**Dein Omnipod DASH PDM wird nicht mehr funktionieren, nachdem der AAPS Dash-Treiber deinen Pod aktiviert hat.** Zuvor hast Du den Dash PDM verwendet, um Befehle an Deinen Dash-Pod zu senden. Ein Dash-Pod kann nur von einem einzigen Gerät Befehle empfangen und mit ihm kommunizieren. Das Gerät, das den Pod erfolgreich aktiviert, ist das einzige Gerät, das von diesem Zeitpunkt an mit ihm kommunizieren darf. Das bedeutet, dass, sobald Du einen DASH-Pod mit Deinem Smartphone über den AAPS DASH-Treiber aktiviert hast, **Du den PDM nicht mehr mit diesem Pod** verwenden kannst. Der AAPS DASH Treiber in Deinem Android-Telefon ist jetzt Dein PDM.

*Dies bedeutet NICHT, dass Du Deinen PDM wegwerfen solltest. Es wird empfohlen, ihn als Backup zu behalten und für Notfälle, falls das Telefon verloren geht oder AAPS nicht korrekt funktioniert.*

**Dein Pod gibt weiterhin Insulin ab, auch wenn er nicht mit AndroidAPS verbunden ist**. Die Standard-Basalraten werden bei der Aktivierung auf den Pod übertragen, wie sie im aktuell aktiven Profil definiert sind. Solange AndroidAPS aktiv ist, sendet es Basalraten-Befehle, die maximal 120 Minuten laufen. Wenn der Pod aus irgendeinem Grund keine neuen Befehle erhält (zum Beispiel, weil die Kommunikation aufgrund eines zu großen Abstandes zwischen Pod und Telefon verloren gegangen ist), fällt der Pod automatisch auf die Standard-Basalraten zurück.

**Basalraten-Profile mit 30-Minuten-Schritten werden in AndroidAPS NICHT unterstützt.** Wenn Du neu bei AndroidAPS bist und zum ersten Mal Dein Basalprofil einrichtest, beachte bitte, dass Basalprofile, die mit einer halben Stunde beginnen, nicht unterstützt werden und Du Dein Basalprofil anpassen musst. Basalraten müssen immer zur vollen Stunde starten. Wenn Du zum Beispiel eine Basalrate von 1,1 Einheiten hast, die um 9:30 Uhr startet und zwei Stunden bis 11:30 Uhr läuft, wird dies nicht funktionieren. Du muss diese 1,1 IE Basalrate auf einen Zeitraum von entweder 9:00 - 11:00 Uhr oder 10:00 - 12:00 Uhr einstellen. Obwohl die Hardware des Omnipod DASH selbst Basalratenwechsel zur halben Stunde unterstützt, ist AndroidAPS derzeit nicht in der Lage, sie mit seinen Algorithmen zu berücksichtigen.

## Aktivieren des Omnipod-DASH Treibers in AAPS

Der DASH Treiber kann in AAPS auf **zwei Wegen** aktiviert werden:

### Option 1: Neue Installation

Wenn Du AndroidAPS zum ersten Mal installierst, führt Dich der **Einrichtungsassistent** durch die Installation von AndroidAPS. Wähle "DASH" aus, wenn Du die Pumpenauswahl erreichst.

![Enable_Dash_1](../images/DASH_images/Enable_Dash/Enable_Dash_1.png)

Im Zweifel kannst Du beim Einrichten von AndroidAPS auch zunächst die „Virtuelle Pumpe“ und dann später „DASH“ wählen (siehe Option 2).

### Option 2: Der Konfigurations-Generator

Bei einer vorhandenen Installation von AAPS kannst Du **DASH** als Pumpe unter "Konfiguration" auswählen:

Über das **Hamburger Menü** oben links unter **Konfiguration (1)** \ ➜\ **Pumpe** \ ➜ \ **Dash** \ ➜\ **Zahnrad (3)** über das **Auswahlfeld (2)** für **DASH**.

Wenn Du das ** Kontrollkästchen (4)** neben dem ** Einstellungsrädchen (3)** wählst, wird das DASH-Menü als Registerkarte im AAPS-Interface mit dem Titel **DASH** als eigener Tab angezeigt. Wenn Du dieses Kästchen aktivierst, wird der Zugriff auf die DASH-Befehle bei der Verwendung von AAPS erleichtert.

**HINWEIS:** Eine schnellere Möglichkeit, zu den [**DASH-Einstellungen**](#dash-settings) zu gelangen, findest Du im Abschnitt DASH-Einstellungen weiter unten in diesem Dokument.

![Enable_Dash_3](../images/DASH_images/Enable_Dash/Enable_Dash_3.png)

### Überprüfung der Omnipod-Treiberauswahl

Um zu überprüfen, ob Du den DASH-Treiber in AAPS aktiviert hast, wenn das Kästchen (4) ausgewählt ist, **wische nach links** von der Registerkarte **Übersicht**, wo Du nun einen Tab **DASH** sehen solltest. Wenn Du das Kästchen nicht aktiviert hast, findest Du die Registerkarte DASH links oben im Hamburger Menü.

![Enable_Dash_4](../images/DASH_images/Enable_Dash/Enable_Dash_4.jpg)

## DASH Konfiguration

Bitte **wische nach links **zur **DASH** Registerkarte, wo du alle Pod Funktionen verwalten kannst (einige dieser Funktionen sind ohne aktive Pod Sitzung nicht aktiviert oder nicht sichtbar):

![Refresh_LOGO](../images/DASH_images/Refresh_LOGO.png) Aktualisieren von Pod-Verbindungen und -Status, Abstellen von Alarmen wenn der Pod piept

![POD_MGMT_LOGO](../images/DASH_images/POD_MGMT_LOGO.png) Pod-Management (Aktivieren, Deaktivieren, Testsignal und Pod-Historie)

### Pod aktivieren

1. Navigiere zur Registerkarte **DASH** und klicke auf den **POD MGMT (1)** Button und dann auf **Pod aktivieren (2)**.

![Activate_Pod_1](../images/DASH_images/Activate_Pod/Activate_Pod_1.png)    ![Activate_Pod_2](../images/DASH_images/Activate_Pod/Activate_Pod_2.png)

2. Der **Pod füllen** Bildschirm wird angezeigt. Fülle deinen neuen Pod mit mindestens 80 Einheiten Insulin und achte auf zwei Signaltöne, die anzeigen, dass der Pod bereit ist, gestartet zu werden. Beachte bei der Berechnung der gesamten Insulinmenge, welche Du in drei Tagen benötigst, dass zum Füllen des Pod 3 bis 10 IE benötigt werden.

![Activate_Pod_3](../images/DASH_images/Activate_Pod/Activate_Pod_3.png)    ![Activate_Pod_4](../images/DASH_images/Activate_Pod/Activate_Pod_4.jpg)

Stelle sicher, dass der neue Pod und das Smartphone, auf dem AAPS läuft, in der Nähe voneinander liegen und klicke auf den Button **Weiter**.

**HINWEIS**: Nur wenn Du die folgende Fehlermeldung erhältst (dies kann passieren), keine Panik. Klicke auf den **Wiederholen-Button**. In den meisten Fällen wird die Aktivierung dann erfolgreich fortgesetzt.

![Activate_Pod_3](../images/DASH_images/Activate_Pod/Activate_pod_error.png)

3. Der Bildschirm **Initialisiere Pod** wird angezeigt und der Pod beginnt zu entlüften. (Du wirst ein Klicken hören, gefolgt von einer Reihe tickender Sounds, der Pod entlüftet sich selbst).  Ein grünes Häkchen wird nach erfolgreichem Befüllen angezeigt und der **Weiter** Button wird angezeigt. Klicke auf den **Weiter** Button, um die Initialisierung des Pods abzuschließen; anschließend wird der **Pod anlegen** Bildschirm angezeigt.

![Activate_Pod_5](../images/DASH_images/Activate_Pod/Activate_Pod_5.jpg)    ![Activate_Pod_6](../images/DASH_images/Activate_Pod/Activate_Pod_6.jpg)

4. Bereite anschließend die Infusionsstelle des neuen Pods vor. Entferne die blaue Nadelkappe aus Kunststoff. Wenn Du anschließend etwas aus dem Pod herausragen siehst, beende den Prozess und starte mit einem neuen Pod. Wenn alles in Ordnung ist, ziehe das weiße Papier von der Klebefläche ab und setze den Pod auf die ausgewählte Stelle Deines Körpers. Wenn du fertig bist, klicke auf den **Weiter** Button.

![Activate_Pod_8](../images/DASH_images/Activate_Pod/Activate_Pod_8.jpg)

5. Das **Pod anlegen** Dialogfenster wird nun angezeigt. **NUR auf OK klicken, wenn Du bereit bist, die Kanüle einzuführen**.

![Activate_Pod_9](../images/DASH_images/Activate_Pod/Activate_Pod_9.jpg)

6. Nach dem Drücken von **OK** dauert es eventuell etwas, bevor der DASH antwortet und die Kanüle setzt (1-2 Minuten maximal), also habe Geduld.

 *HINWEIS: Bevor die Kanüle eingesetzt wird, ist es ratsam, die Haut in der Nähe des Kanülensetzpunktes etwas zusammenzukneifen. Dies sorgt für eine sanfte Einführung der Nadel und verringert die Gefahr einer Verstopfung.*

![Activate_Pod_10](../images/DASH_images/Activate_Pod/Activate_Pod_10.png)    ![Activate_Pod_11](../images/DASH_images/Activate_Pod/Activate_Pod_11.jpg)

7. Es wird ein grünes Häkchen angezeigt, und der Button **Weiter** wird bei erfolgreicher Kanüleneinführung aktiviert. Klicke auf den **Weiter** Button.

![Activate_Pod_12](../images/DASH_images/Activate_Pod/Activate_Pod_12.jpg)

9. Der **Pod aktiviert** Bildschirm wird angezeigt. Klicke auf den grünen **Beenden** Button. Glückwunsch! Du hast jetzt eine neuen Pod aktiviert.

![Activate_Pod_13](../images/DASH_images/Activate_Pod/Activate_Pod_13.jpg)

10. Der Menübildschirm **Pod Management** sollte nun den **Aktiviere Pod (1)** Button als *deaktiviert* und den **Deaktiviere Pod (2)** Button als *aktiviert* angezeigen. Dies liegt daran, dass jetzt ein Pod aktiv ist und du keinen zusätzlichen Pod aktivieren kannst, ohne zuerst den aktuell aktiven Pod zu deaktivieren.

    Klicke auf den Zurück-Knopf auf deinem Smartphone, um zum Tab-Bildschirm **DASH** zurückzukehren, auf dem jetzt Informationen zu deiner aktiven Pod-Sitzung angezeigt werden, einschließlich der aktuellen Basalrate, Pod Reservoir Level, abgegebenem Insulin, Pod Fehlern und Warnungen.

    Weitere Details zu den angezeigten Informationen findest Du im [**DASH Tab**](#dash-tab) Abschnitt dieses Dokuments.

![Activate_Pod_14](../images/DASH_images/Activate_Pod/Activate_Pod_14.png)    ![Activate_Pod_15](../images/DASH_images/Activate_Pod/Activate_Pod_15.jpg)

Es ist zu empfehlen, NACH der Aktivierung des Pods die Einstellungen zu exportieren. Dies solltest Du nach jedem Podwechsel und einmal monatlich tun. Kopiere die Exportdatei an einen sicheren Ort (z. B. in der Cloud). Siehe [**Einstellungen exportieren**](https://androidaps.readthedocs.io/en/latest/Usage/ExportImportSettings.html?highlight=exporting#export-import-settings).


### Pod deaktivieren

Unter normalen Umständen beträgt die erwartete Lebensdauer eines Pods drei Tage (72 Stunden) und zusätzliche 8 Stunden nach der Pod-Ablaufwarnung und somit insgesamt 80 Stunden.

Gehe wie folgt vor, um einen Pod zu deaktivieren (entweder vor dem Ablaufen der Nutzungsdauer oder wegen eines Pod-Fehlers):

1. Gehe zur Registerkarte **DASH** und klicke auf **POD MGMT (1)** und dann auf dem **Pod Management** Bildschirm klicke auf den **Pod deaktivieren (2)** Button.

![Deactivate_Pod_1](../images/DASH_images/Deactivate_Pod/Deactivate_Pod_1.jpg)    ![Deactivate_Pod_2](../images/DASH_images/Deactivate_Pod/Deactivate_Pod_2.png)

2. Auf dem Bildschirm **Pod deaktivieren**, klicke auf die **Weiter** Taste, um die Deaktivierung des Pods zu starten. Du erhältst vom Pod ein Piepen als Bestätigung, dass die Deaktivierung erfolgreich war.

![Deactivate_Pod_3](../images/DASH_images/Deactivate_Pod/Deactivate_Pod_3.jpg) ![Deactivate_Pod_4](../images/DASH_images/Deactivate_Pod/Deactivate_Pod_4.jpg)

3. Nach erfolgreicher Deaktivierung wird ein grünes Häkchen angezeigt. Klicke auf **Weiter** um die Deaktivierung des Pods abzuschließen. Du kannst nun deinen Pod entfernen, da die aktive Sitzung beendet wurde.

![Deactivate_Pod_5](../images/DASH_images/Deactivate_Pod/Deactivate_Pod_5.jpg)

4. Klicke auf den grünen Knopf, um zum Bildschirm **Pod Management** zurückzukehren.

![Deactivate_Pod_6](../images/DASH_images/Deactivate_Pod/Deactivate_Pod_6.jpg)

5. Du bist jetzt wieder im **Pod Management** Menü; drücke die Zurück-Taste auf Deinem Smartphone um zur Registerkarte **DASH** zurückzukehren. Überprüfe, ob das Feld **Pod Status** die Nachricht **Kein aktiver Pod** anzeigt.

![Deactivate_Pod_7](../images/DASH_images/Deactivate_Pod/Deactivate_Pod_7.png) ![Deactivate_Pod_8](../images/DASH_images/Deactivate_Pod/Deactivate_Pod_8.jpg)

### Insulinabgabe fortsetzen

**Hinweis**: Während eines Profilwechsels muss der DASH die Insulinabgabe unterbrechen, bevor das neue Basal-Profil gesetzt wird. Wenn die Kommunikation zwischen den beiden Befehlen fehlschlägt, kann die Insulinabgabe unterbrochen werden. Lies [**Insulinabgabe unterbrochen**](#delivery-suspended) im Abschnitt Problembehandlung für weitere Details.

Benutze diesen Befehl, um den aktiven, derzeit pausierten Pod anzuweisen, die Insulinabgabe fortzusetzen. Nachdem der Befehl erfolgreich verarbeitet wurde, wird die normale Insulinabgabe mit der aktuellen Basalrate fortgesetzt. Grundlage dafür ist das aktive Basalprofil zur aktuellen Uhrzeit. Der Pod akzeptiert wieder Befehle für Bolus, TBR und SMB.

1. Gehe zur Registerkarte **DASH** und stelle sicher, dass der **Pod Status (1)** **unterbrochen** anzeigt, drücke dann die **Abgabe fortsetzen (2)** Taste, um den aktuellen Pod anzuweisen, die normale Insulinabgabe fortzusetzen. Eine Nachricht **RESUME DELIVERY** wird im Feld **Pod Status (3)** angezeigt.

![Resume_1](../images/DASH_images/Resume/Resume_1.jpg)   ![Resume_2](../images/DASH_images/Resume/Resume_2.jpg)

2. Wenn der Befehl zur Fortsetzung der Insulinabgabe erfolgreich war, wird in einem Bestätigungsdialog die Nachricht **Insulinabgabe wieder aufgenommen.** angezeigt. Klicke **OK** um zu bestätigen und fortzufahren.

![Resume_3](../images/DASH_images/Resume/Resume_3.png)

3. In der Registerkarte **DASH** wird das Feld **Pod Status (1)** aktualisiert, es zeigt **In Betrieb** an und die **Insulinabgabe fortsetzen** Schaltfläche wird nicht mehr angezeigt.

![Resume_4](../images/DASH_images/Resume/Resume_4.jpg)

### Pod Alarme stummschalten

*HINWEIS: Die 'Alarme stummschalten' Schaltfläche ist nur auf der Registerkarte **DASH** verfügbar, wenn der Alarm 'Pod Ablauf' oder 'niedriger Reservoirstand' ausgelöst wurde. Wenn die 'Alarme stummschalten' Schaltfläche nicht sichtbar ist und Du Pieptöne vom Pod hörst, versuche 'Aktualisieren' in der Registerkarte DASH.*

In dem folgenden Prozess wird gezeigt, wie Warntöne bestätigt und stummgeschaltet werden können, die auftreten, wenn die Laufzeit des aktiven Pods den Grenzwert für die Warnung vor dem Ablauf von 72 Stunden (3 Tage) erreicht. Dieser Grenzwert für die Laufzeit ist unter **Stunden bis zum Podende** in den DASH-Einstellungen 'Alarme' definiert. Die maximale Nutzungsdauer eines Pods beträgt 80 Stunden (3 Tage und 8 Stunden), dennoch empfiehlt der Hersteller, 72 Stunden (3 Tage) nicht zu überschreiten.

1. Wenn die definierte **Stunden bis zum Podende** Vorwarnzeit erreicht ist, gibt der Pod Warnungen aus, um Dir mitzuteilen, dass er sich seiner Ablaufzeit nähert und bald ein Wechsel des Pods erforderlich sein wird. Du kannst dies auf der Registerkarte **DASH** überprüfen; das **Pod läuft ab: (1)** Feld zeigt die genaue Zeit an, zu der der Pod ablaufen wird (72 Stunden nach der Aktivierung), und dieser Text wird **rot** angezeigt, wenn dieser Zeitpunkt überschritten ist. Unter dem Feld **aktive Pod-Warnungen (2)** wird die Statusmeldung **Pod läuft in Kürze ab** angezeigt. Dadurch wird auch die Schaltfläche **Alarme stummschalten (3)** angezeigt.

![ACK_alerts_1](../images/DASH_images/ACK_Alerts/ACK_ALERTS_1.png)

2. Gehe zur Registerkarte **DASH** und drücke den **Alarme stummschalten (2)** Button . AAPS sendet den Befehl an den Pod um die Ablaufwarnung des Pods zu unterdrücken und aktualisiert das Feld **Pod Status (1)** mit **Aktive Alarme stummgeschaltet**.

![ACK_alerts_2](../images/DASH_images/ACK_Alerts/ACK_ALERTS_2.png)

3. Nach **erfolgreicher Stummschaltung** der Alarme werden **2 Pieptöne** vom aktiven Pod ausgegeben und ein Bestätigungsdialog zeigt die Nachricht **Aktive Alarme stummgeschaltet**. Drücke **OK**, um den Dialog zu bestätigen und zu schließen.


![ACK_alerts_3](../images/DASH_images/ACK_Alerts/ACK_ALERTS_3.png)

4. Go to the **DASH** tab. Im Feld **Aktive Pod-Warnungen** wird keine Warnmeldung mehr angezeigt und der aktive Pod gibt keine Pieptöne zur Warnung mehr ab.

### Anzeige Pod-Historie

In diesem Abschnitt wird gezeigt, wie du deine Pod-Historie überprüfen und nach verschiedenen Aktionskategorien filtern kannst. Mit dem Werkzeug 'Pod Historie' kannst Du die Aktionen und Ergebnisse deines jeweils aktiven Pod während dessen dreitägigem Lebenszyklus (72 - 80 Stunden) ansehen.

Diese Funktion ist hilfreich bei der Überprüfung von Bolus-, TBR- und Basalraten-Befehlen, die an den Pod gesendet wurden. Die übrigen Kategorien sind hilfreich bei der Problembehebung und zur Bestimmung der Reihenfolge von Ereignissen, die zu einem Fehler geführt haben.

*HINWEIS:* **Nur der letzte Befehl kann 'unsicher' sein**. Neue Befehle *werden nicht gesendet*, bis der **zuvor als 'unsicher' eingestufte entweder bestätigt oder abgelehnt wurde**. Der Weg unsichere Befehl zu beheben, ist den Pod Status zu **Aktualisieren**.

1. Gehe zur Registerkarte **DASH** und klicke auf **POD MGMT (1)** und dann auf dem **Pod Management** Bildschirm klicke auf den **Pod Historie (2)** Button.

![Pod_history_1](../images/DASH_images/Pod_History/Pod_history_1.jpg) ![Pod_history_2](../images/DASH_images/Pod_History/Pod_history_2.jpg)

2. Auf dem **Pod Historie** Bildschirm wird als Standard die Kategorie **Alle (1)** angezeigt. Sie zeigt **Datum und Zeit (2)** aller Pod **Aktionen (3)** und **Ergebnisse (4)** in umgekehrter chronologischer Reihenfolge. Drücke **2 mal die Zurück-Taste** des Smartphones, um zur Reisterkarte **DASH** im AAPS Hauptfenster zurückzukehren.


![Pod_history_3](../images/DASH_images/Pod_History/Pod_history_3.jpg) ![Pod_history_4](../images/DASH_images/Pod_History/Pod_history_4.jpg)

## Registerkarte DASH

Im Folgenden werden die Anordnung und die Bedeutung der Symbole und Statusfelder auf der Registerkarte **DASH** des AAPS-Hauptbildschims erläutert.

*HINWEIS: Wenn in einem der Statusfelder der Registerkarte **DASH** die Meldung 'unsicher' erscheint, musst Du die Schaltfläche 'Aktualisieren' drücken, um sie zu löschen und den Pod-Status zu aktualisieren.*

![DASH_Tab_1](../images/DASH_images/DASH_Tab/DASH_Tab_1.png)

### Felder

* **Bluetooth-Adresse:** Zeigt die aktuelle Bluetooth-Adresse des verbundenen Pods an.
* **Bluetooth-Status:** Zeigt den aktuellen Verbindungsstatus an.
* **Laufnede Nummer:** Zeigt die Seriennummer des aktiven POD an.
* **Firmware-Version:** Zeigt die Firmware-Version für die aktive Verbindung an.
* **Zeit auf dem Pod:** Zeigt die aktuelle Zeit auf dem Pod.
* **Pod läuft ab:** Zeigt Datum und Uhrzeit an, wenn der Pod abläuft.
* **Pod Status:** Zeigt den Pod Status an.
* **Letzte Verbindung:** Zeigt die Zeit der letzten Kommunikation mit dem Pod an.

   - *gerade eben* vor weniger als 20 Sekunden.
   - *vor weniger als einer Minute* vor mehr als 20 Sekunden, aber weniger als 60 Sekunden.
   - *vor 1 Minute* vor mehr als 60 Sekunden, aber weniger als 120 Sekunden (2 min).
   - *vor XX Minuten* vor mehr als 2 Minuten, definiert durch den Wert von XX.

* **Letzter Bolus:** Zeigt die Dosierung des letzten Bolus an, der an den aktiven Pod gesendet wurde und in Klammern, wie lange es her ist, dass er abgegeben wurde.
* **Basis-Basalrate:** Zeigt die Basalrate an, die für den aktuellen Zeitpunkt im Basalratenprofil programmiert wurde.
* **Temporäre Basalrate:** Zeigt die aktuell laufende temporäre Basalrate im folgenden Format an

   - {Einheiten pro Stunde} @{TBR Startzeit}  ({Minuten aktiv}/{Gesamtlaufzeit TBR in Minuten})
   - *Beispiel:* 0,00 IE/h @18:25 ( 90/120 min.)

* **Reservoir:** Zeigt 50+ IE übrig an, wenn mehr als 50 Einheiten im Reservoir vorhanden sind. Unter 50 IE werden die exakten Einheiten angezeigt.
* **Insgesamt abgegeben:** Zeigt die Gesamtzahl der aus dem Reservoir abgegebenen Insulineinheiten an. Dies schließt Insulin ein, das zum Aktivieren und Befüllen verwendet wurde.
* **Fehler:** Zeigt den letzten Fehler an. Prüfe die [Pod Historie](#view-pod-history) und die 'log files' auf vorhandene Fehlermeldungen und detailliertere Informationen.
*  **Aktive Pod-Warnungen:** Zeigt jeweils aktuelle Warnungen auf dem aktiven Pod.

### Schaltflächen


![Refresh_Icon](../images/DASH_images/Refresh_LOGO.png) : Sendet einen Befehl an den aktiven Pod, um die Kommunikation zu aktualisieren.

   * Verwende diese Option, um den Pod-Status zu aktualisieren und die Statusfelder zu erneuern, die den Text 'unsicher' enthalten.
   * Weitere Informationen findest Du im Abschnitt Fehlerbehebung.

![POD_MGMT_Icon](../images/DASH_images/POD_MGMT_LOGO.png) : Öffnet den Pod-Management Bildschirm.

![ack_alert_logo](../images/DASH_images/ack_alert_logo.png) : drücken, um die Pod-Alarme und Benachrichtigungen (Ende der Laufzeit, niedriges Reservoir) stummzuschalten.

   * Der Button wird nur angezeigt, wenn die aktuelle Zeit des Pods nach dem Pod-Ablaufdatum liegt.
   * Nach erfolgreicher Bestätigung wird dieses Symbol nicht mehr angezeigt.

![RESUME_Icon](../images/DASH_images/DASH_tab_icons/RESUME_Icon.png) : setzt eine ausgesetzte Insulinabgabe im aktiven Pod fort.

### Pod Management Menu

Im Folgenden ist die Bedeutung der Symbole im **Pod Management** Bildschirm zu sehen, die Du durch Drücken des **POD MGMT (0)** Buttons in der Registerkarte **DASH** erreichst. ![DASH_Tab_2](../images/DASH_images/DASH_Tab/DASH_Tab_2.png) ![DASH_Tab_3](../images/DASH_images/DASH_Tab/DASH_Tab_3.png)

* 1 - [**Pod aktivieren**](#activate-pod): Initiiert und aktiviert einen neuen Pod.
* 2 - [**Pod deaktivieren**](#deactivate-pod): Deaktiviert den aktuell aktiven Pod.
* 3 - **Testton abspielen**: Spielt einen einzelnen Test Piep auf dem Pod ab.
* 4 - [**Pod History**](#view-pod-history): Zeigt den Aktivitätsverlauf für den aktiven Pod an.

## DASH-Einstellungen

Über das **Hamburger Menü** oben links unter **Konfiguration (1)** \ ➜\ **Pumpe** \ ➜ \ **DASH** \ ➜\ **Einstellungsrädchen (3)** über das **Auswahlfeld (2)** für **DASH**. Wenn Du das ** Kontrollkästchen (4)** neben dem ** Einstellungsrädchen (3)** wählst, wird das DASH-Menü als Registerkarte im AAPS-Interface mit dem Titel **DASH** als eigener Tab angezeigt.

![Dash_settings_1](../images/DASH_images/Dash_settings/Dash_settings_1.png) ![Dash_settings_2](../images/DASH_images/Dash_settings/Dash_settings_2.png)

**HINWEIS:** Einen schnelleren Zugriff auf die **DASH-Einstellungen** erlaubt das **3-Punkt-Menü (1)** in der oberen rechten Ecke der Registerkarte **DASH** und die Auswahl **DASH-Einstellungen (2)** aus dem Dropdown-Menü.

![Dash_settings_3](../images/DASH_images/Dash_settings/Dash_settings_3.png)

Die Einstellungen sind nach Gruppen sortiert unten aufgelistet. Du kannst die meisten der Einstellungen über einen Kippschalter aktivieren oder deaktivieren:

![Dash_settings_4](../images/DASH_images/Dash_settings/Dash_settings_4.jpg)

*HINWEIS: Ein Sternchen (\*) bedeutet, dass "aktiviert" der Standardwert für eine Einstellung ist.*

### Bestätigungstöne

Bestätigt mit Signaltönen des Pods die Abgabe und Änderung von Bolus, Basalrate, SMB und TBR.

* **Bolus-Piep aktiviert:** Aktiviert oder deaktiviert Bestätigungstöne bei Abgabe eines Bolus.
* **Basal-Piep aktiviert:** Aktiviert oder deaktiviert Bestätigungstöne bei Einstellung einer neuen, Abbruch der aktiven oder Änderung der aktuellen Basalrate.
* **SMB-Piep aktiviert:** Aktiviert oder deaktiviert Bestätigungstöne bei Abgabe eines SMB.
* **TBR-Piep aktiviert:** Aktiviert oder deaktiviert Bestätigungstöne, bei Setzen oder Abbruch einer TBR.

### Alarme

Einstellungen für AAPS-Alarme für Ablauferinnerung, Zeit bis Podende und niedrigen Reservoirstand basierend auf den definierten Schwelleneinheiten.

*Beachte, dass eine AAPS-Benachrichtigung IMMER für jeden Alarm nach der ersten Kommunikation mit dem Pod ausgegeben wird, da der Alarm ausgelöst wurde. Wenn du die Benachrichtigung löschst, wird der Alarm NICHT gelöscht, AUSSER wenn die automatische Bestätigung von Pod-Alarmen aktiviert ist. Um den Alarm MANUELL zu löschen, musst Du auf der Registerkarte **DASH** den **Alarm stummschalten** Button drücken.*

* **Ablauferinnerung aktiviert:** Aktiviere oder deaktiviere die Pod-Ablauferinnerung, die ausgelöst wird, wenn die festgelegte Anzahl von Stunden vor dem Podende erreicht ist.
* **Stunden bis zum Podende:** Legt die Anzahl der Stunden vor der Abschaltung des aktiven Pods fest, die den Alarm zur Pod-Ablauferinnerung auslöst.
* **Warnung niedriger Reservoirstand aktiviert:** Aktiviere oder deaktiviere eine Warnung für das Limit für den niedrigen Reservoirstand der verbleibenden Einheiten des Pods, wie es im Feld 'Anzahl der Einheiten' definiert ist.
* **Anzahl der Einheiten:** Die Anzahl der verbleibenden Einheiten, bei denen der Alarm für den niedrigen Reservoirstand ausgelöst werden soll.

### Benachrichtigungen

Ermöglicht AAPS-Benachrichtigungen und akustische Telefon-Warnungen, wenn unsicher ist, ob TBR, SMB, Bolus oder eine Unterbrechung der Insulinabgabe erfolgreich waren.

*HINWEIS: Dies sind nur Benachrichtigungen, es werden keine akustischen Signale ausgegeben.*

* **Ton für unsichere TBR-Benachrichtigung aktiviert:** Aktiviere oder deaktiviere diese Einstellung, um einen akustischen Alarm und eine visuelle Benachrichtigung auszulösen, wenn AAPS unsicher ist, ob eine TBR erfolgreich gesetzt wurde.
* **Ton für unsichere SMB-Benachrichtigung aktiviert:** Aktiviere oder deaktiviere diese Einstellung, um einen akustischen Alarm und eine visuelle Benachrichtigung auszulösen, wenn AAPS unsicher ist, ob ein SMB erfolgreich abgegeben wurde.
* **Ton für unsichere Bolus-Benachrichtigung aktiviert:** Aktiviere oder deaktiviere diese Einstellung, um einen akustischen Alarm und eine visuelle Benachrichtigung auszulösen, wenn AAPS unsicher ist, ob ein Bolus erfolgreich abgegeben wurde.
* **Ton bei unterbrochener Abgabe aktiviert:** Aktivieren oder deaktivieren Sie diese Einstellung, um eine akustische Benachrichtigung und visuelle Benachrichtigung auszulösen, wenn die Unterbrechung der Insulinabgabe erfolgreich durchgeführt wurde.

### Andere

* **Sommerzeit/Zeitzonen-Erkennung aktiviert:** Ermöglicht die automatische Erkennung von Zeitzonenänderungen, wenn das Telefon in einem Gebiet verwendet wird, in dem die Sommerzeit gilt.

## Actions (ACT) Tab

Diese Registerkarte ist in der AAPS-Hauptdokumentation gut dokumentiert, aber es gibt einige Punkte auf dieser Registerkarte, die sich speziell darauf beziehen, wie sich der DASH-Pod von schlauchbasierten Pumpen unterscheidet, insbesondere nach dem Anbringen eines neuen Pods.

1. Gehe zur Registerkarte **Aktionen (AKT)** im AAPS-Hauptinterface.

2. Im Abschnitt **Careportal (1)** werden in den Feldern für **Insulin** und **Kanüle** die Angaben für das **Alter** **nach jedem POD-Wechsel** auf 0 Tage und 0 Stunden gesetzt. Das liegt daran, wie die Omnipod-Pumpe gebaut ist und funktioniert. Da der Pod die Kanüle direkt in die Haut am Ort der Pod-Anwendung einführt, wird bei Omnipod-Pumpen kein herkömmlicher Schlauch verwendet. *Nach einem Podwechsel wird das Alter jedes dieser Werte daher automatisch auf Null zurückgesetzt.* **Das Alter der Pumpenbatterie** wird nicht angegeben, da die Batterie im Pod immer länger hält, als die Lebensdauer des Pods (maximal 80 Stunden). Die **Pumpenbatterie** und das **Insulinreservoir ** sind immer im Pod enthalten.

![ACT_1](../images/DASH_images/Actions_Tab/ACT_1.png)

### Level

**Insulin Level**

Der angezeigte Insulinlevel ist der von Omnipod DASH gemeldete Betrag an verbleibenden Einheiten. Der Pod meldet allerdings den tatsächlichen Insulinlevel erst dann, wenn er unter 50 Einheiten liegt. Bis dahin wird „Über 50 Einheiten“ angezeigt. Die gemeldete Menge ist nicht genau: Wenn der Pod „leer“ meldet, wird das Reservoir in den meisten Fällen noch einige zusätzliche Einheiten Insulin enthalten. Auf der Registerkarte DASH wird die Übersicht angezeigt wie unten beschrieben:

  * **Mehr als 50 IE verbleibend** - Der Pod meldet mehr als 50 Einheiten im Reservoir.
  * **Below 50 Units** - The amount of insulin remaining in the reservoir as reported by the Pod.

Additional note:
  * **SMS** - Returns value or 50+U for SMS responses
  * **Nightscout** - Uploads value of 50 when over 50 units to Nightscout (version 14.07 and older).  Neuere Versionen melden einen Wert von 50+, wenn sich mehr als 50 Einheiten im Reservoir befinden.

## Problembehandlung

### Delivery suspended

  * There is no suspend button anymore. If you want to "suspend" the pod, you can set a zero TBR for x minutes.
  * During profile switches, dash must suspend delivery before setting the new basal profile. If communication fails between the two commands, then delivery can stay suspended. When this happens:
     - There will be no insulin delivery, that includes Basal, SMB, Manual bolusing etc.
     - There might be notification that one of the commands is unconfirmed: this depends on when the failure happened.
     - AAPS will try to set the new basal profile every 15 minutes.
     - AAPS will show a notification informing that the delivery is suspended every 15min, if the delivery is still suspended (resume delivery failed).
     - The [**Resume delivery**](#resuming-insulin-delivery) button will be active if the user chooses to resume delivery manually.
     - If AAPS fail to resume delivery on its own (this happens if the Pod is unreachable, sound is muted, etc), the pod will start beeping 4 time every minute for 3 minutes, then repeated every 15 minutes if delivery is still suspended for more than 20minutes.
  * For unconfirmed commands, "refresh pod status" should confirm/deny them.

**Note:** When you hear beeps from the pod, do not assume that delivery will continue without checking the phone, delivery might stay suspended, **so you need to check !**

### Pod Fehler

Pods fallen gelegentlich aus unterschiedlichen Gründen aus, u. a. wegen Hardwareproblemen mit dem Pod selbst. Am besten ist es, diese nicht bei Insulet anzugeben, da AAPS kein zugelassener Anwendungsfall ist. A list of fault codes can be [**found here**](https://github.com/openaps/openomni/wiki/Fault-event-codes) to help determine the cause.

### Verhindere Pod Fehler 49

Dieser Fehler hängt mit einem fehlerhaften Pod-Status für einen Befehl oder einem Fehler während der Insulinabgabe zusammen. This is when the driver and Pod disagree on the actual state. The Pod (out of a build-in safety measure) then reacts with an unrecoverable error code 49 (0x31) ending up with what is know as a “screamer”: the long irritating beep that can only be stopped by punching a hole at the appropriate location at the back of the Pod. The exact origin of a “49 pod failure” often is hard to trace. In situations that are suspected for this failure to occur (for instance on application crashes, running a development version or re-installation).

### Pumpe nicht erreichbar Alarme

When no communication can be established with the pod for a preconfigured time a “Pump unreachable” alert will be raised. Pump unreachable alerts can be configured by going to the top right-hand side three-dot menu, selecting **Preferences**\ ➜\ **Local Alerts**\ ➜\ **Pump unreachable threshold [min]**. Recommended value is alerting after **120** minutes.

### Export  Settings

Exporting AndroidAPS settings enables you to restore all your settings, and maybe more importantly, all your Objectives. You may need to restore settings to the “last known working situation” or after uninstalling/reinstalling AndroidAPS or in case of phone loss, reinstalling on the new phone.

Note: The active pod information is included in the exported settings. If you import an "old" exported file, your actual pod will "die". There is no other alternative. In some cases (like a _programmed_ phone change), you may need to use the exported file to restore AndroisAPS settings **while keeping the current active Pod**. In this case it is important to only use the recently exported settings file containing the pod currently active.

**It is good practice to do an export immediately after activating a pod**. This way you will always be able to restore the current active Pod in case of a problem. For instance when moving to another backup phone.

Regularly copy your exported settings to a safe place (as a cloud drive) that can be accessible by any phone when needed (e.g. in case of a phone loss or factory reset of the actual phone).

### Import Settings

**WARNING** Please note that importing settings will possibly import an outdated Pod status. As a result, there is a risk of losing the active Pod! (see **Exporting Settings**). It is better to only try it when no other options are available.

When importing settings with an active Pod, make sure the export was done with the currently active pod.

**Importing while on an active Pod:** (you risk losing the Pod!)

1. Make sure you are importing settings that were recently exported with the currently active Pod.
2. Import your settings
3. Check all preferences

**Importing (no active Pod session)**

1. Importing any recent export should work (see above)
2. Import your settings.
3. Check all preferences.
4. You may need to **Deactivate** the "non exixting" pod if the imported settings included any active pod data.

### Importing settings that contain Pod state from an inactive Pod

When importing settings containing data for a Pod that is no longer active, AndroidAPS will try to connect with it, which will obviously fail. You can not activate a new Pod in this situation.

To remove the old Pod session “try” to de-activate the Pod. The de-activation will fail. Select “Retry”. After the second or third retry you will get the option to remove the pod. Once the old pod is removed you will be able to activate a new Pod.

### Reinstalling AndroidAPS

When uninstalling AndroidAPS you will lose all your settings, objectives and the current Pod session. To restore them make sure you have a recent exported settings file available!

When on an active Pod, make also sure that you have an export for the current Pod session or you will lose the currently active Pod when importing older settings.

1. Exportiere deine Einstellungen und bewahre eine Kopie an einem sicheren Ort auf.
2. Uninstall AndroidAPS and restart your phone.
3. Install the new version of AndroidAPS.
4. Import your settings
5. Verify all preferences (optionally import settings again)
6. Activate a new Pod
7. When done: Export current settings

### Updating AndroidAPS to a newer version

In most cases there is no need to uninstall. You can do an “in-place” install by starting the installation for the new version. This is also possible when on an active Pod  session.

1. Exportiere Deine Einstellungen.
2. Install  the new AndroidAPS version.
3. Verify the installation was successful
4. RESUME the Pod or activate a new Pod.
5. When done: Export current settings.

### Omnipod-Treiberwarnungen

Please note that the Omnipod Dash driver presents a variety of unique alerts on the **Overview tab**, most of them are informational and can be dismissed while some provide the user with an action to take to resolve the cause of the triggered alert. Im Folgenden findest du eine Zusammenfassung der wichtigsten Warnmeldungen, die dir begegnen können:

* No active Pod No active Pod session detected. This alert can temporarily be dismissed by pressing **SNOOZE** but it will keep triggering as long as a new pod has not been activated. Once activated this alert is automatically be silenced.
* Pod suspended Informational alert that Pod has been suspended.
* Setting basal profile failed : Delivery might be suspended! Bitte aktualisiere den Pod-Status manuell auf der Registerkarte Omnipod und setze die Übertragung bei Bedarf fort. Informational alert that the Pod basal profile setting has failed, and you will need to hit *Refresh* on the Omnipod tab.
* Es kann nicht überprüft werden, ob der SMB-Bolus erfolgreich war. Wenn du sicher bist, dass der Bolus nicht erfolgreich war, solltest du den SMB-Eintrag manuell auf der Registerkarte Behandlungen entfernen. Alert that the SMB bolus command success could not be verified, you will need to verify the *Last bolus* field on the DASH tab to see if SMB bolus succeeded and if not remove the entry from the Treatments tab.
* Unsicher, ob die "Ereignis Bolus/TBR/SMB" abgeschlossen wurde. Bitte überprüfe manuell, ob sie erfolgreich war.

## Where to get help for Omnipod DASH driver

All of the development work for the Omnipod DASH driver is done by the community on a **volunteer** basis; we ask that you to remember that fact and use the following guidelines before requesting assistance:

-  **Level 0:** Read the relevant section of this documentation to ensure you understand how the functionality with which you are experiencing difficulty is supposed to work.
-  **Level 1:** If you are still encountering problems that you are not able to resolve by using this document, then please go to the *#androidaps* channel on **Discord** by using [this invite link](https://discord.gg/4fQUWHZ4Mw).
-  **Level 2:** Search existing issues to see if your issue has already been reported at [Issues](https://github.com/nightscout/AndroidAPS/issues) if it exists, please confirm/comment/add information on your problem. If not, please create a [new issue](https://github.com/nightscout/AndroidAPS/issues) and attach [your log files](../Usage/Accessing-logfiles.md).
-  **Be patient - most of the members of our community consist of good-natured volunteers, and solving issues often requires time and patience from both users and developers.**
