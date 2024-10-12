# Omnipod DASH

Diese Anleitung ist für die Konfiguration der **Omnipod DASH** Pumpe **(NICHT für Omnipod Eros)**. Der Omnipod-Treiber ist ab Version 3.0 als Teil von AAPS verfügbar.

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
   - **Wichtiger Hinweis: Es gab mehrere Fälle von dauerhaften, nicht wiederherstellbaren Verbindungsverlusten bei der Verwendung älterer Pods mit Firmware Version 3.XX.X. Nutze diesen alten Pods mit AAPS bitte mit Vorsicht. Insbesondere dann, wenn Dein Smartphone mit anderen Bluetooth-Geräten gekoppelt ist!** Der AAPS Omnipod DASH-Treiber baut bei jedem Senden eines Befehls eine Bluetooth-Verbindung zum DASH Pod via Bluetooth auf und beendet diese Verbindung unmittelbar danach wieder. Die Bluetooth-Verbindungen können durch andere Geräte gestört werden, die mit dem Telefon verbunden sind, auf dem AAPS läuft, wie Earbuds etc... (was in seltenen Fällen zu Verbindungsproblemen oder Pod-Fehlern bei der Aktivierung oder danach bei einigen Telefonmodellen führen kann).
   -  **AAPS Version 3.0 (oder neuer)**, wie im Abschnitt[ **Build APK**](../Installing-AndroidAPS/Building-APK.md) beschrieben, erstellt und auf dem Smartphone installiert.
* [**Kontinuierliche Glukosemessung (CGM)**](https://androidaps.readthedocs.io/en/latest/Configuration/BG-Source.html)

Diese Anleitung geht davon aus, dass Du einen neuen DASH Pod startest. Falls dies nicht der Fall ist, habe bitte Geduld und beginne diesen Prozess erst bei Deinem nächsten Starten eines neuen Pods.

## Bevor du anfängst

**Sicherheit geht vor** - Stelle sicher, dass Du auf eventuell auftretende Fehler reagieren kannst, bevor Du diesen Prozess beginnst: zusätzliche Pods, Insulin und Smartphone mit vollem Akku sind unbedingt notwendig.

**Dein Omnipod DASH PDM wird nicht mehr funktionieren, nachdem der AAPS Dash-Treiber deinen Pod aktiviert hat.** Zuvor hast Du den Dash PDM verwendet, um Befehle an Deinen Dash-Pod zu senden. Ein Dash-Pod kann nur von einem einzigen Gerät Befehle empfangen und mit ihm kommunizieren. Das Gerät, das den Pod erfolgreich aktiviert, ist das einzige Gerät, das von diesem Zeitpunkt an mit ihm kommunizieren darf. Das bedeutet, dass, sobald Du einen DASH-Pod mit Deinem Smartphone über den AAPS DASH-Treiber aktiviert hast, **Du den PDM nicht mehr mit diesem Pod** verwenden kannst. Der AAPS DASH Treiber in Deinem Android-Telefon ist jetzt Dein PDM.

*Dies bedeutet NICHT, dass Du Deinen PDM wegwerfen solltest. Es wird empfohlen, ihn als Backup zu behalten und für Notfälle, falls das Telefon verloren geht oder AAPS nicht korrekt funktioniert.*

**Dein Pod gibt auch dann Insulin ab, wenn keine AAPS-Verbindung besteht**. Die Standard-Basalraten werden bei der Aktivierung auf den Pod übertragen, wie sie im aktuell aktiven Profil definiert sind. Eine funktionsfähiges AAPS, sendet Basalraten-Befehle, die maximal 120 Minuten abdecken. Wenn der Pod aus irgendeinem Grund keine neuen Befehle erhält (zum Beispiel, weil die Kommunikation aufgrund eines zu großen Abstandes zwischen Pod und Telefon verloren gegangen ist), fällt der Pod automatisch auf die Standard-Basalraten zurück.

**Basalraten-Profile mit 30-Minuten-Schritten werden in AAPS NICHT unterstützt.** Wenn Du AAPS als Neuling nutzt und zum ersten Mal Dein Basalprofil einrichtest, beachte bitte, dass Deine Basalraten im Profil nur zur vollen Stunde starten und 60 Minuten dauern. Basalraten, die zu einer halben Stunde beginnen und/oder 30 Minuten dauern, werden nicht unterstützt und führen zu Fehlern. Wenn Du zum Beispiel eine Basalrate von 1,1 Einheiten hast, die um 9:30 Uhr startet und zwei Stunden bis 11:30 Uhr läuft, wird dies nicht funktionieren. Du muss diese 1,1 IE Basalrate auf einen Zeitraum von entweder 9:00 - 11:00 Uhr oder 10:00 - 12:00 Uhr einstellen. Der in AAPS verwendete Algorithmus kann halbstündige Basalraten nicht verarbeiten, auch wenn die Hardware des Omnipod DASH dies vorsieht.

Gleiches gilt auch für 'Null-Basalraten'. **Basalraten mit 0 IE/h werden in AAPS NICHT unterstützt**. AAPS benutzt Vielfache der im Profil hinterlegten Basalrate, um die benötigte Insulinmenge zu berechnen. Mit 'Null-Basalraten' funktioniert diese Berechnungn nicht, auch denn DASH Pods diese unterstützen. Eine temporäre Null-Basalrate kann durch die Funktion PUMPE TRENNEN oder durch eine Kombination aus LOOP DEAKTIVIEREN/TEMP BASALRATE oder LOOP PAUSIEREN/TEMP BASALRATE erreicht werden.

## Aktivieren des Omnipod-DASH Treibers in AAPS

Der DASH Treiber kann in AAPS auf **zwei Wegen** aktiviert werden:

### Option 1: Neue Installation

Wenn Du AAPS erstmals installierst, führt Dich der **Einrichtungsassistent** durch die Installation AAPS. Wähle "DASH" aus, wenn Du die Pumpenauswahl erreichst.

![Enable_Dash_1](../images/DASH_images/Enable_Dash/Enable_Dash_1.png)

Falls Du unsicher sein solltest, kannst Du auch zunächst die „Virtuelle Pumpe“ und dann später „DASH“ wählen (siehe Option 2).

### Option 2: Der Konfigurations-Generator

Bei einer vorhandenen Installation von AAPS kannst Du **DASH** als Pumpe unter "Konfiguration" auswählen:

Über das **Hamburger Menü** oben links unter **Konfiguration (1)** \ ➜\ **Pumpe** \ ➜ \ **Dash** \ ➜\ **Zahnrad (3)** über das **Auswahlfeld (2)** für **DASH**.

Wenn Du das ** Kontrollkästchen (4)** neben dem ** Einstellungsrädchen (3)** wählst, wird das DASH-Menü als Registerkarte im AAPS-Interface mit dem Titel **DASH** als eigener Tab angezeigt. Wenn Du dieses Kästchen aktivierst, wird der Zugriff auf die DASH-Befehle bei der Verwendung von AAPS erleichtert.

**HINWEIS:** Eine schnellere Möglichkeit, zu den [**DASH-Einstellungen**](DanaRS-Insulin-Pump-dash-settings) zu gelangen, findest Du im Abschnitt DASH-Einstellungen weiter unten in diesem Dokument.

![Enable_Dash_3](../images/DASH_images/Enable_Dash/Enable_Dash_3.png)

### Überprüfung der Omnipod-Treiberauswahl

Um zu überprüfen, ob Du den DASH-Treiber in AAPS aktiviert hast, wenn das Kästchen (4) ausgewählt ist, **wische nach links** von der Registerkarte **Übersicht**, wo Du nun einen Tab **DASH** sehen solltest. Wenn Du das Kästchen nicht aktiviert hast, findest Du die Registerkarte DASH links oben im Hamburger Menü.

![Enable_Dash_4](../images/DASH_images/Enable_Dash/Enable_Dash_4.jpg)

## DASH Konfiguration

Bitte **wische nach links **zur **DASH** Registerkarte, wo du alle Pod Funktionen verwalten kannst (einige dieser Funktionen sind ohne aktive Pod Sitzung nicht aktiviert oder nicht sichtbar):

![Refresh_LOGO](../images/DASH_images/Refresh_LOGO.png) Aktualisieren von Pod-Verbindungen und -Status, Abstellen von Alarmen wenn der Pod piept

![POD_MGMT_LOGO](../images/DASH_images/POD_MGMT_LOGO.png) Pod-Management (Aktivieren, Deaktivieren, Testsignal und Pod-Historie)

(OmnipodDASH-activate-pod)=

### Pod aktivieren

1. Navigiere zur Registerkarte **DASH** und klicke auf den **POD MGMT (1)** Button und dann auf **Pod aktivieren (2)**.

![Activate_Pod_1](../images/DASH_images/Activate_Pod/Activate_Pod_1.png)    ![Activate_Pod_2](../images/DASH_images/Activate_Pod/Activate_Pod_2.png)

2. Der **Pod füllen** Bildschirm wird angezeigt. Fülle deinen neuen Pod mit mindestens 80 Einheiten Insulin und achte auf zwei Signaltöne, die anzeigen, dass der Pod bereit ist, gestartet zu werden. Beachte bei der Berechnung der gesamten Insulinmenge, welche Du in drei Tagen benötigst, dass zum Füllen des Pod 3 bis 10 IE benötigt werden.

![Activate_Pod_3](../images/DASH_images/Activate_Pod/Activate_Pod_3.png)    ![Activate_Pod_4](../images/DASH_images/Activate_Pod/Activate_Pod_4.jpg)

Stelle sicher, dass der neue Pod und das Smartphone, auf dem AAPS läuft, in der Nähe voneinander liegen und klicke auf den Button **Weiter**.

**HINWEIS**: Nur wenn Du die folgende Fehlermeldung erhältst (dies kann passieren), keine Panik. Klicke auf den **Wiederholen-Button**. In den meisten Fällen wird die Aktivierung dann erfolgreich fortgesetzt.

![Activate_Pod_3](../images/DASH_images/Activate_pod_error.png)

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

    Weitere Details zu den angezeigten Informationen findest Du im [**DASH Tab**](OmnipodDASH-dash-tab) Abschnitt dieses Dokuments.

![Activate_Pod_14](../images/DASH_images/Activate_Pod/Activate_Pod_14.png)    ![Activate_Pod_15](../images/DASH_images/Activate_Pod/Activate_Pod_15.jpg)

Es ist zu empfehlen, NACH der Aktivierung des Pods die Einstellungen zu exportieren. Dies solltest Du nach jedem Podwechsel und einmal monatlich tun. Kopiere die Exportdatei an einen sicheren Ort (z. B. in der Cloud). Siehe [**Einstellungen exportieren**](https://androidaps.readthedocs.io/en/latest/Usage/ExportImportSettings.html?highlight=exporting#export-import-settings).


(OmnipodDASH-deactivate-pod)=

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

(OmnipodDASH-resuming-insulin-delivery)=

### Insulinabgabe fortsetzen

**Hinweis**: Während eines Profilwechsels muss der DASH die Insulinabgabe unterbrechen, bevor das neue Basal-Profil gesetzt wird. Wenn die Kommunikation zwischen den beiden Befehlen fehlschlägt, kann die Insulinabgabe unterbrochen werden. Lies [**Insulinabgabe unterbrochen**](OmnipodDASH) im Abschnitt Problembehandlung für weitere Details.

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

4. Wechsele zur Registerkarte **DASH**. Im Feld **Aktive Pod-Warnungen** wird keine Warnmeldung mehr angezeigt und der aktive Pod gibt keine Pieptöne zur Warnung mehr ab.

(OmnipodDASH-view-pod-history)=

### Anzeige Pod-Historie

In diesem Abschnitt wird gezeigt, wie Du Deine Pod-Historie überprüfen und nach verschiedenen Aktionskategorien filtern kannst. Mit dem Werkzeug 'Pod Historie' kannst Du die Aktionen und Ergebnisse deines jeweils aktiven Pod während dessen dreitägigem Lebenszyklus (72 - 80 Stunden) ansehen.

Diese Funktion ist hilfreich bei der Überprüfung von Bolus-, TBR- und Basalraten-Befehlen, die an den Pod gesendet wurden. Die übrigen Kategorien sind hilfreich bei der Problembehebung und zur Bestimmung der Reihenfolge von Ereignissen, die zu einem Fehler geführt haben.

*HINWEIS:* **Nur der letzte Befehl kann 'unsicher' sein**. Neue Befehle *werden nicht gesendet*, bis der **zuvor als 'unsicher' eingestufte entweder bestätigt oder abgelehnt wurde**. Der Weg unsichere Befehle zu beheben, ist den Pod Status zu **Aktualisieren**.

1. Gehe zur Registerkarte **DASH** und klicke auf **POD MGMT (1)** und dann auf dem **Pod Management** Bildschirm klicke auf den **Pod Historie (2)** Button.

![Pod_history_1](../images/DASH_images/Pod_History/Pod_history_1.jpg) ![Pod_history_2](../images/DASH_images/Pod_History/Pod_history_2.jpg)

2. Auf dem **Pod Historie** Bildschirm wird als Standard die Kategorie **Alle (1)** angezeigt. Sie zeigt **Datum und Zeit (2)** aller Pod **Aktionen (3)** und **Ergebnisse (4)** in umgekehrter chronologischer Reihenfolge. Drücke **2 mal die Zurück-Taste** des Smartphones, um zur Reisterkarte **DASH** im AAPS Hauptfenster zurückzukehren.


![Pod_history_3](../images/DASH_images/Pod_History/Pod_history_3.jpg) ![Pod_history_4](../images/DASH_images/Pod_History/Pod_history_4.jpg)

(OmnipodDASH-dash-tab)=

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
* **Fehler:** Zeigt den letzten Fehler an. Prüfe die [Pod Historie](OmnipodDASH-view-pod-history) und die 'log files' auf vorhandene Fehlermeldungen und detailliertere Informationen.
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

* 1 - [**Pod aktivieren**](OmnipodDASH-activate-pod): Initiiert und aktiviert einen neuen Pod.
* 2 - [**Pod deaktivieren**](OmnipodDASH-deactivate-pod): Deaktiviert den aktuell aktiven Pod.
* 3 - **Testton abspielen**: Spielt einen einzelnen Test Piep auf dem Pod ab.
* 4 - [**Pod History**](OmnipodDASH-view-pod-history): Zeigt den Aktivitätsverlauf für den aktiven Pod an.

(DanaRS-Insulin-Pump-dash-settings)=

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

*Beachte, dass eine AAPS-Benachrichtigung IMMER für jeden Alarm nach der ersten Kommunikation mit dem Pod ausgegeben wird, da der Alarm ausgelöst wurde. Wenn Du die Benachrichtigung löschst, wird der Alarm NICHT gelöscht, AUSSER wenn die automatische Bestätigung von Pod-Alarmen aktiviert ist. Um den Alarm MANUELL zu löschen, musst Du auf der Registerkarte **DASH** den **Alarm stummschalten** Button drücken.*

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

## Actions (ACT) Tab

Diese Registerkarte ist in der AAPS-Hauptdokumentation gut dokumentiert, aber es gibt einige Punkte auf dieser Registerkarte, die sich speziell darauf beziehen, wie sich der DASH-Pod von schlauchbasierten Pumpen unterscheidet, insbesondere nach dem Anbringen eines neuen Pods.

1. Gehe zur Registerkarte **Aktionen (AKT)** im AAPS-Hauptinterface.

2. Im Abschnitt **Careportal (1)** werden in den Feldern für **Insulin** und **Kanüle** die Angaben für das **Alter** **nach jedem POD-Wechsel** auf 0 Tage und 0 Stunden gesetzt. Das liegt daran, wie die Omnipod-Pumpe gebaut ist und funktioniert. Da der Pod die Kanüle direkt in die Haut am Ort der Pod-Anwendung einführt, wird bei Omnipod-Pumpen kein herkömmlicher Schlauch verwendet. *Nach einem Podwechsel wird das Alter jedes dieser Werte daher automatisch auf Null zurückgesetzt.* **Das Alter der Pumpenbatterie** wird nicht angegeben, da die Batterie im Pod immer länger hält, als die Lebensdauer des Pods (maximal 80 Stunden). Die **Pumpenbatterie** und das **Insulinreservoir ** sind immer im Pod enthalten.

![ACT_1](../images/DASH_images/Actions_Tab/ACT_1.png)

### Level

**Insulin Level**

Der angezeigte Insulinlevel ist der von Omnipod DASH gemeldete Betrag an verbleibenden Einheiten. Der Pod meldet allerdings den tatsächlichen Insulinlevel erst dann, wenn er unter 50 Einheiten liegt. Bis dahin wird „Über 50 Einheiten“ angezeigt. Die gemeldete Menge ist nicht genau: Wenn der Pod „leer“ meldet, wird das Reservoir in den meisten Fällen noch einige zusätzliche Einheiten Insulin enthalten. Auf der Registerkarte DASH wird die Übersicht angezeigt wie unten beschrieben:

  * **Mehr als 50 IE verbleibend** - Der Pod meldet mehr als 50 Einheiten im Reservoir.
  * **Unter 50 Einheiten** - Die Menge an Insulin, die noch im Reservoir vorhanden ist, wie vom Pod gemeldet.

Sonstiges
  * **SMS** - Aus dem Pod übernommener Wert oder 50+ IE für SMS-Antworten
  * **Nightscout** - Lädt den Wert 50 hoch, wenn mehr als 50 Einheiten angezeigt werden (Nightscout Version 14.07 und älter).  Neuere Versionen melden einen Wert von 50+, wenn sich mehr als 50 Einheiten im Reservoir befinden.

## Problembehandlung

(OmnipodDASH-delivery-suspended)=

### Insulinabgabe unterbrochen

  * Es gibt keine Unterbrechen-Taste mehr. Wenn Du die Insulinabgabe unterbrechen möchtest, kannst Du eine Null-TBR für x Minuten setzen.
  * Während eines Profilwechsels muss der DASH die Insulinabgabe unterbrechen, bevor das neue Basal-Profil gesetzt wird. Wenn die Kommunikation zwischen den beiden Befehlen fehlschlägt, kann die Insulinabgabe unterbrochen bleiben. Wenn das passiert:
     - Es wird gibt dann keine Insulinabgabe; dies schließt Basal-, SMB-, manuelle Boli usw. ein.
     - Es kann eine Benachrichtigung geben, dass einer der Befehle unbestätigt blieb: Dies hängt davon ab, wann der Fehler aufgetreten ist.
     - AAPS wird alle 15 Minuten versuchen, das neue Basalprofil zu setzen.
     - AAPS wird alle 15 Minuten eine Benachrichtigung anzeigen, dass die Insulinabgabe unterbrochen ist, wenn die Abgabe weiterhin unterbrochen ist (Insulinabgabe konnte nicht gestartet werden).
     - Die [**Abgabe fortsetzen**](OmnipodDASH-resuming-insulin-delivery) Schaltfläche ist aktiv, wenn der Benutzer die Abgabe manuell fortsetzen möchte.
     - Wenn AAPS die Abgabe nicht alleine fortsetzen kann (dies geschieht, wenn der Pod nicht erreichbar ist, der Ton stumm geschaltet ist, etc.), beginnt der Pod für 3 Minuten jede Minute viermal zu piepen, dies wird alle 15 Minuten wiederholt, wenn die Abgabe mehr als 20 Minuten ausgesetzt ist.
  * Für unbestätigte Befehle sollte "Aktualisieren" des Podstatus diese bestätigen oder ablehnen.

**Hinweis:** Wenn Du Pieptöne vom Pod hörst, kannst Du nicht davon ausgehen, dass die Insulinabgabe ohne Überprüfung im Smartphone fortgesetzt wird. Die Abgabe könnte weiterhin ausgesetzt bleiben, **also musst Du prüfen, was los ist!**

### Pod Fehler

Pods fallen gelegentlich aus unterschiedlichen Gründen aus, u. a. wegen Hardwareproblemen mit dem Pod selbst. Am besten ist es, diese nicht bei Insulet anzugeben, da AAPS kein zugelassener Anwendungsfall ist. Eine Liste der Fehlercodes [**findet sich hier**](https://github.com/openaps/openomni/wiki/Fault-event-codes), um die Ursache zu ermitteln.

### Verhindere Pod Fehler 49

Dieser Fehler hängt mit einem fehlerhaften Pod-Status für einen Befehl oder einem Fehler während der Insulinabgabe zusammen. Dies ist der Fall, wenn der AAPS-Treiber und der Pod unterschiedliche Angaben zum aktuellen Status haben. Der Pod reagiert (aufgrund einer eingebauten Sicherheitsfunktion) dann mit einem nicht auflösbaren Fehlercode 49 (0x31) und verabschiedet sich mit einem so genannten „Heuler“: dem langen, irritierenden Piepton, der nur gestoppt werden kann, indem mit einer Büroklammer in ein Loch am richtigen Ort auf der Rückseite des Pods gedrückt wird. Der genaue Ursprung eines „Pod Fehlers 49“ ist oft schwer zu ermitteln. Situationen, die für das Auftreten dieses Fehlers vermutet werden (z.B. bei einem Absturz der Anwendung, beim Ausführen einer Entwicklungsversion oder bei einer Neuinstallation).

### Pumpe nicht erreichbar Alarme

Wenn für eine voreingestellte Zeitspanne keine Kommunikation mit dem Pod hergestellt werden kann, wird eine „Pumpe nicht erreichbar“ Alarmmeldung angezeigt. Pump nicht erreichbar Alarme können über das Drei-Punkte-Menü oben rechts konfiguriert werden. Wählen Sie **Einstellungen** \ ➜ \ **Lokale Alarme** \ ➜ \ ** Grenzwert Pumpe ist nicht erreichbar [min]**. Empfohlener Wert ist eine Alarmierung nach **120** Minuten.

### Exporteinstellungen

Durch den Export derAAPS-Einstellungen kannst Du alle Deine Einstellungen - und vielleicht noch wichtiger - alle Deine Objectives (Ziele) wiederherstellen. Es kann passieren, dass die Einstellungen in der „letzten bekannten funktionierenden Fassung“ wieder hergestellt werden müssen, etwa nach der Deinstallation/Neuinstallation von AAPS oder im Falle eines Smartphone-Verlustes.

Hinweis: Die Informationen des aktiven Pod sind in den exportierten Einstellungen enthalten. Wenn Sie eine "alte" Exportdatei importieren, wird Ihr aktueller Pod "sterben". Es gibt hierzu keine Alternative. In einigen Fällen (wie bei einem _vorgesehenen_ Telefonwechsel) musst Du unter Umständen die exportierte Datei verwenden, um die AndroisAPS-Einstellungen wiederherzustellen **während der aktuelle aktive Pod** beibehalten wird. In diesem Fall ist es wichtig, nur die zuletzt exportierte Einstellungsdatei zu verwenden, die den aktuell aktiven Pod enthält.

**Es ist eine gute Idee, einen Export sofort nach der Aktivierung eines Pods durchzuführen.** Auf diese Weise wirst Du immer in der Lage sein, die Verbindung zum aktuell aktiven Pod im Falle eines Problems wiederherzustellen. Zum Beispiel, wenn Du auf ein anderes Smartphone wechseln willst.

Kopiere die exportierten Einstellungen regelmäßig an einen sicheren Ort (z. B. in der Cloud), der bei Bedarf von jedem Telefon aus zugänglich ist (z. B. im Falle eines Telefonverlustes oder dem Rücksetzen auf die Werkseinstellung des aktuellen Telefons).

### Importeinstellungen

**WARNUNG** Bitte beachte, dass durch das Importieren von Einstellungen möglicherweise ein veralteter Pod-Status importiert wird. Dadurch besteht die Gefahr, dass der aktive Pod eingebüßt wird! (siehe **Exporteinstellungen**). Es ist besser, dies nur dann auszuprobieren, wenn keine anderen Optionen verfügbar sind.

Wenn Du die Einstellungen mit einem aktiven Pod importierst, stelle sicher, dass der Export ebenfalls mit diesem Pod durchgeführt wurde.

**Importieren während ein Pod aktiv ist:** (Du riskierst den Pod!)

1. Stelle sicher, dass Du Einstellungen importierst, die kürzlich mit dem aktuell aktiven Pod exportiert wurden.
2. Einstellungen importieren
3. Alle Voreinstellungen kontrollieren

**Importieren ohne aktiven Pod**

1. Importieren aller kürzlichen Exporte sollte funktionieren (siehe oben)
2. Einstellungen importieren
3. Alle Voreinstellungen kontrollieren.
4. Es kann erforderlich sein, einen in den importierten Einstellungen enthaltenen, aber nicht mehr vorhandenen Pod zu **deaktivieren**.

### Importieren von Einstellungen, die den Pod-Status von einem inaktiven Pod enthalten

Wenn Du Einstellungen für einen mittlerweile inaktiven Pod importierst, wird AAPS versuchen sich mit diesem Pod zu verbinden. Dies wird logischerweise scheitern. Du kannst in dieser Situation keinen neuen Pod aktivieren.

Um die alte Pod-Sitzung zu entfernen „probiere“ den Pod zu deaktivieren. Die Deaktivierung wird fehlschlagen. Wähle "Wiederholen". Nach der zweiten oder dritten Wiederholung erhälst Du die Möglichkeit, den Pod zu entfernen. Sobald der alte Pod entfernt ist, kannst du einen neuen Pod aktivieren.

### Neuinstallation von AAPS

Beim Deinstallieren von AAPS verlierst Du alle Einstellungen, Objectives (Ziele) und die laufende Pod-Sitzung. Um sie wiederherzustellen, stelle sicher, dass Du eine kürzlich exportierte Einstellungsdatei zur Verfügung hast!

Wenn ein Pod aktiv ist, stelle sicher, dass Du einen Export für die aktuelle Pod-Sitzung hast oder Du wirst den aktuell aktiven Pod verlieren, wenn Du ältere Einstellungen importierst.

1. Exportiere deine Einstellungen und bewahre eine Kopie an einem sicheren Ort auf.
2. Deinstalliere AAPS und starte Dein Smartphone neu.
3. Installiere die neue AAPS-Version.
4. Einstellungen importieren
5. Überprüfe alle Einstellungen (optional Einstellungen erneut importieren)
6. Einen neuen Pod aktivieren
7. Anschließend: Aktuelle Einstellungen exportieren

### AAPS auf eine neuere Version aktualisieren

In den meisten Fällen ist eine Deinstallation nicht erforderlich. Du kannst eine „in-place“ Installation durchführen, indem Du die Installation für die neue Version startest. Dies ist auch möglich, wenn ein Pod aktiv ist.

1. Exportiere Deine Einstellungen.
2. Installiere die neue AAPS-Version.
3. Überprüfe, ob die Installation erfolgreich war.
4. Verbinde den Pod wieder oder aktiviere einen neuen Pod.
5. Anschließend: Aktuelle Einstellungen exportieren.

### Omnipod-Treiberwarnungen

Bitte beachte, dass der Omnipod-Treiber auf der Registerkarte **DASH** eine Vielzahl eindeutiger Warnungen anzeigt. Die meisten davon sind informativ und können ignoriert werden, während einige dem Benutzer eine Aktion vorschlagen, um die Ursache für die ausgelöste Warnung zu beheben. Im Folgenden findest du eine Zusammenfassung der wichtigsten Warnmeldungen, die dir begegnen können:

* Kein aktiver Pod Keine aktive Pod Sitzung erkannt. Dieser Alarm kann vorübergehend durch Drücken von **Schlummern** deaktiviert werden, wird aber weiterhin ausgelöst, solange kein neuer Pod aktiviert wurde. Einmal aktiviert, wird dieser Alarm automatisch ausgeschaltet.
* Pod unterbrochen Hinweis, dass der Pod angehalten wurde.
* Setzen des Basalprofils fehlgeschlagen: Insulinabgabe könnte ausgesetzt werden! Bitte aktualisiere den Pod-Status manuell auf der Registerkarte Omnipod und setze die Übertragung bei Bedarf fort. Hinweis, dass die Einstellung des Pod-Basalprofils fehlgeschlagen ist und Du auf der Registerkarte DASH auf *Aktualisieren* drücken musst.
* Es kann nicht überprüft werden, ob der SMB-Bolus erfolgreich war. Wenn du sicher bist, dass der Bolus nicht erfolgreich war, solltest du den SMB-Eintrag manuell auf der Registerkarte Behandlungen entfernen. Warnung, dass der Erfolg eines Befehls für einen SMB-Bolus nicht überprüft werden konnte. Du musst das Feld *Letzter Bolus* auf der Registerkarte DASH überprüfen, um zu sehen, ob der SMB-Bolus erfolgreich war, und wenn nicht, den Eintrag auf der Registerkarte Behandlungen entfernen.
* Unsicher, ob die "Ereignis Bolus/TBR/SMB" abgeschlossen wurde. Bitte überprüfe manuell, ob sie erfolgreich war.

## Wo bekomme ich Hilfe für den Omnipod-Treiber?

Die gesamte Entwicklungsarbeit für den Omnipod-Treiber wird von der Community auf **freiwilliger** Basis geleistet. Wir bitten dich, rücksichtsvoll zu sein und die folgenden Richtlinien zu befolgen, bevor du um Unterstützung bittest:

-  **Level 0:** Lies den entsprechenden Abschnitt dieser Dokumentation um sicherzustellen, dass du verstehst, wie die Funktion, mit der Du Schwierigkeiten hast, funktionieren soll.
-  **Level 1:** Wenn Du immer noch Probleme, die Du mit diesem Dokument nicht lösen kannst, haben solltest, gehe **Discord-**Kanal *#AAPS*. Nutze dazu [diesen Einladungslink <https://discord.gg/4fQUWHZ4Mw>](https://discord.gg/4fQUWHZ4Mw).
-  **Level 2:** Search existing issues to see if your issue has already been reported at [Issues](https://github.com/nightscout/AndroidAPS/issues) if it exists, please confirm/comment/add information on your problem. Wenn nicht, erstelle bitte ein [neues Issue](https://github.com/nightscout/AndroidAPS/issues) und füge [Deine Logdateien](../Usage/Accessing-logfiles.md) an.
-  **Sei geduldig - die meisten Mitglieder unserer Community sind gutmütige Freiwillige und die Lösung von Problemen erfordert oft Zeit und Geduld von Nutzern und Entwicklern.**
