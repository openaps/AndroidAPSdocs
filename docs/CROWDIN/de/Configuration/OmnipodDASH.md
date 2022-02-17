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

Stelle sicher, dass der neue Pod und das Samrtphone mit dem AAPS in der Nähe voneinander liegen und klicke auf den Button **Weiter**.

**HINWEIS**: Nur wenn Du die folgende Fehlermeldung erhältst (dies kann passieren), keine Panik. Klicke auf den **Wiederholen-Button**. In den meisten Fällen wird die Aktivierung dann erfolgreich fortgesetzt.

![Activate_Pod_3](../images/DASH_images/Activate_Pod/Activate_pod_error.png)

3. Der Bildschirm **Initialisiere Pod** wird angezeigt und der Pod beginnt zu entlüften. (Du wirst ein Klicken hören, gefolgt von einer Reihe tickender Sounds, der Pod entlüftet sich selbst).  Ein grünes Häkchen wird nach erfolgreichem Befüllen angezeigt und der **Weiter** Button wird angezeigt. Klicke auf den **Weiter** Button, um die Initialisierung des Pods abzuschließen; anschließend wird der **Pod anbringen** Bildschirm angezeigt.

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

1. Gehe zur Registerkarte **DASH** und stelle sicher, dass der **Pod Status (1)** **unterbrochen**anzeigt, drücke dann die **Fortsetzen (2)** Taste, um den aktuellen Pod anzuweisen, die normale Insulinabgabe fortzusetzen. A message **RESUME DELIVERY** will display in the **Pod Status (3)** field.

![Resume_1](../images/DASH_images/Resume/Resume_1.jpg)   ![Resume_2](../images/DASH_images/Resume/Resume_2.jpg)

2. When the Resume delivery command is successful, a confirmation dialog will display the message **Insulin delivery has been resumed**. Click **OK** to confirm and proceed.

![Resume_3](../images/DASH_images/Resume/Resume_3.png)

3. The **DASH** tab will update the **Pod status (1)** field to display **RUNNING,** and the **Resume Delivery** button will no longer be displayed

![Resume_4](../images/DASH_images/Resume/Resume_4.jpg)

### Silencing Pod Alerts

*NOTE - The SILENCE ALERTS button is only available on the **DASH** tab when the pod expiration or low reservoir alert has been triggered. If the SILENCE ALERTS button is not visible and you hear beep sounds from the pod, try to 'Refresh pod status'.*

The process below will show you how to acknowledge and dismiss pod beeps when the active pod time reaches the warning time limit before the pod expiration of 72 hours (3 days). This warning time limit is defined in the **Hours before shutdown** Dash alerts setting. The maximum life of a pod is 80 hours (3 days 8 hours), however Insulet recommends not exceeding the 72 hours (3 days) limit.

1. When the defined **Hours before shutdown** warning time limit is reached, the pod will issue warning beeps to inform you that it is approaching its expiration time and pod change will be required soon. You can verify this on the **DASH** tab, the **Pod expires: (1)** field will show the exact time the pod will expire (72 hours after activation), and the text will turn **red** after this time has passed. Under the **Active Pod alerts (2)** field the status message **Pod will expire soon** is displayed. This also will trigger displaying the **SILENCE ALERTS (3)** button.

![ACK_alerts_1](../images/DASH_images/ACK_Alerts/ACK_ALERTS_1.png)

2. Go to the **DASH** tab and press the **SILENCE ALERTS (2)** button . AAPS sends the command to the pod to deactivate the pod expiration warning beeps and updates the **Pod status (1)** field with **ACKNOWLEDGE ALERTS**.

![ACK_alerts_2](../images/DASH_images/ACK_Alerts/ACK_ALERTS_2.png)

3. Upon **successful deactivation** of the alerts, **2 beeps** will be issued by the active pod and a confirmation dialog will display the message **Activate alerts have been Silenced**. Click the **OK** button to confirm and dismiss the dialog.


![ACK_alerts_3](../images/DASH_images/ACK_Alerts/ACK_ALERTS_3.png)

4. Go to the **Omnipod (POD)** tab. Under the **Active Pod alerts** field, the warning message is no longer displayed, and the active pod will no longer issue pod expiration warning beeps.

### Anzeige Pod-Historie

In diesem Abschnitt wird gezeigt, wie du deine Pod-Historie überprüfen und nach verschiedenen Aktionskategorien filtern kannst. The pod history tool allows you to view the actions and results committed to your currently active pod during its three days (72 - 80 hours) life.

This feature is helpful in verifying boluses, TBRs and basal commands that were sent to the pod. The remaining categories are useful for troubleshooting issues and determining the order of events that occurred leading up to a failure.

*NOTE:* **Only the last command can be uncertain**. New commands *will not be sent* until the **last 'uncertain' command becomes 'confirmed' or 'denied'**. The way to 'fix' uncertain commands is to **'refresh pod status'**.

1. Go to the **DASH** tab and press the **POD MGMT (1)** button to access the **Pod Management** menu and then press the **Pod history (2)** button to access the pod history screen.

![Pod_history_1](../images/DASH_images/Pod_History/Pod_history_1.jpg) ![Pod_history_2](../images/DASH_images/Pod_History/Pod_history_2.jpg)

2. On the **Pod history** screen, the default category of **All (1)** is displayed, showing the **Date and Time (2)** of all pod **Actions (3)** and **Results (4)** in reverse chronological order. Use your phone’s **back button 2 times** to return to the **DASH** tab in the main AAPS interface.


![Pod_history_3](../images/DASH_images/Pod_History/Pod_history_3.jpg) ![Pod_history_4](../images/DASH_images/Pod_History/Pod_history_4.jpg)

## DASH Tab

Below is an explanation of the layout and meaning of the icons and status fields on the **DASH** tab in the main AAPS interface.

*NOTE: If any message in the **DASH** tab status fields report (uncertain), then you will need to press the Refresh button to clear it and refresh the pod status.*

![DASH_Tab_1](../images/DASH_images/DASH_Tab/DASH_Tab_1.png)

### Felder

* **Bluetooth Address:** Displays the current bluetooth address of the connected Pod.
* **Bluetooth Status:** Displays the current connection status.
* **Sequence Number:** Displays the sequence number of the active POD.
* **Firmware Version:** Displays the firmware version for the active connection.
* **Time on Pod:** Displays the current time on the Pod.
* **Pod expires:** Displays the date and time when the Pod will expire.
* **Pod status:** Displays the Pod status.
* **Last connection:** Displays time of last communication with the Pod.

   - *Moments ago* - less than 20 seconds ago.
   - *Less than a minute ago* - more than 20 seconds but less than 60 seconds ago.
   - *1 minute ago* - more than 60 seconds but less than 120 seconds (2 min)
   - *XX minutes ago* - more than 2 minutes ago as defined by the value of XX

* **Last bolus:** Displays the amount of the last bolus sent to the active pod and how long ago it was issued in parenthesis.
* **Base Basal rate:** Displays the basal rate programmed for the current time from the basal rate profile.
* **Temp basal rate:** Displays the currently running Temporary Basal Rate in the following format

   - {Units per hour} @{TBR start time}  ({minutes run}/{total minutes TBR will be run})
   - *Example:* 0.00U/h @18:25 ( 90/120 minutes)

* **Reservoir:** Displays over 50+U left when more than 50 units are left in the reservoir. Below 50 U, the exact units are displayed.
* **Total delivered:** Displays the total number of units of insulin delivered from the reservoir. This includes insulin used for activating and priming.
* **Errors:** Displays the last error encountered. Review the [Pod history](#view-pod-history) and log files for past errors and more detailed information.
*  **Active pod alerts:** Reserved for currently running alerts on the active pod.

### Schaltflächen


![Refresh_Icon](../images/DASH_images/Refresh_LOGO.png) : Sendet einen Befehl an den aktiven Pod, um die Kommunikation zu aktualisieren.

   * Use to refresh the pod status and dismiss status fields that contain the text (uncertain).
   * See the Troubleshooting section below for additional information.

![POD_MGMT_Icon](../images/DASH_images/POD_MGMT_LOGO.png) : Navigates to the Pod management menu.

![ack_alert_logo](../images/DASH_images/ack_alert_logo.png) : When pressed this will disable the pod alerts beeps and notifications (expiry, low reservoir..).

   * Button is displayed only when pod time is past expiration warning time.
   * Nach erfolgreicher Bestätigung wird dieses Symbol nicht mehr angezeigt.

![RESUME_Icon](../images/DASH_images/DASH_tab_icons/RESUME_Icon.png) : Resumes the currently suspended insulin delivery in the active pod.

### Pod Management Menu

Below is the meaning of the icons on the **Pod Management** menu accessed by pressing **POD MGMT (0)** button from the **DASH** tab. ![DASH_Tab_2](../images/DASH_images/DASH_Tab/DASH_Tab_2.png) ![DASH_Tab_3](../images/DASH_images/DASH_Tab/DASH_Tab_3.png)

* 1 - [**Activate Pod**](#activate-pod) : Primes and activates a new pod.
* 2 - [**Deactivate Pod**](#deactivate-pod) : Deactivates the currently active pod.
* 3 - **Play Test Beep** : Plays a single test beep on the pod when pressed.
* 4 - [**Pod history**](#view-pod-history) : Displays the active pod activity history.

## Dash Settings

The Dash driver settings are configurable from the top-left hand corner **hamburger menu** under **Config Builder (1)**\ ➜\ **Pump**\ ➜\ **Dash**\ ➜\ **Settings Gear (3)** by selecting the **radio button (2)** titled **Dash**. Wenn Du das ** Kontrollkästchen (4)** neben dem ** Einstellungsrädchen (3)** wählst, wird das DASH-Menü als Registerkarte im AAPS-Interface mit dem Titel **DASH** als eigener Tab angezeigt.

![Dash_settings_1](../images/DASH_images/Dash_settings/Dash_settings_1.png) ![Dash_settings_2](../images/DASH_images/Dash_settings/Dash_settings_2.png)

**NOTE:** A faster way to access the **Dash settings** is by accessing the **3 dot menu (1)** in the upper right hand corner of the **DASH** tab and selecting **Dash preferences (2)** from the dropdown menu.

![Dash_settings_3](../images/DASH_images/Dash_settings/Dash_settings_3.png)

Die Einstellungen sind nach Gruppen sortiert unten aufgelistet. Du kannst die meisten der Einstellungen über einen Kippschalter aktivieren oder deaktivieren:

![Dash_settings_4](../images/DASH_images/Dash_settings/Dash_settings_4.jpg)

*NOTE: An asterisk (\*) denotes the default setting is enabled.*

### Bestätigungstöne

Bestätigt mit Signaltönen des Pods die Abgabe und Änderung von Bolus, Basalrate, SMB und TBR.

* **Bolus beeps enabled:** Enable or disable confirmation beeps when a bolus is delivered.
* **Basal beeps enabled:** Enable or disable confirmation beeps when a new basal rate is set, active basal rate is canceled or current basal rate is changed.
* **SMB beeps enabled:** Enable or disable confirmation beeps when a SMB is delivered.
* **TBR beeps enabled:** Enable or disable confirmation beeps when a TBR is set or canceled.

### Alarme

Provides AAPS alerts for pod expiration, shutdown, low reservoir based on the defined threshold units.

*Beachte, dass eine AAPS-Benachrichtigung IMMER für jeden Alarm nach der ersten Kommunikation mit dem Pod ausgegeben wird, da der Alarm ausgelöst wurde. Wenn du die Benachrichtigung löschst, wird der Alarm NICHT gelöscht, AUSSER wenn die automatische Bestätigung von Pod-Alarmen aktiviert ist. To MANUALLY dismiss the alert you must visit the **DASH** tab and press the **Silence ALERTS button**.*

* **Expiration reminder enabled:** Enable or disable the pod expiration reminder set to trigger when the defined number of hours before shutdown is reached.
* **Hours before shutdown:** Defines the number hours before the active pod shutdown occurs, which will then trigger the expiration reminder alert.
* **Low reservoir alert enabled:** Enable or disable an alert when the pod's remaining units low reservoir limit is reached as defined in the Number of units field.
* **Number of units:** The number of units at which to trigger the pod low reservoir alert.

### Benachrichtigungen

Provides AAPS notifications and audible phone alerts when it is uncertain if TBR, SMB, or bolus, and delivery suspended events were successful.

*HINWEIS: Dies sind nur Benachrichtigungen, es werden keine akustischen Signale ausgegeben.*

* **Sound for uncertain TBR notifications enabled:** Enable or disable this setting to trigger an audible alert and visual notification when AAPs is uncertain if a TBR was successfully set.
* **Sound for uncertain SMB notifications enabled:** Enable or disable this setting to trigger an audible alert and visual notification when AAPS is uncertain if an SMB was successfully delivered.
* **Sound for uncertain bolus notifications enabled:** Enable or disable this setting to trigger an audible alert and visual notification when AAPS is uncertain if a bolus was successfully delivered.
* **Sound when delivery suspended notifications enabled:** Enable or disable this setting to trigger an audible alert and visual notification when suspend delivery was successfully delivered.

### Andere

* **\*DST/Time zone detect on enabled:** allows for time zone changes to be automatically detected if the phone is used in an area where DST is observed.

## Actions (ACT) Tab

This tab is well documented in the main AAPS documentation but there are a few items on this tab that are specific to how the Omnipod Dash pod differs from tube based pumps, especially after the processes of applying a new pod.

1. Go to the **Actions (ACT)** tab in the main AAPS interface.

2. Under the **Careportal (1)** section the **Insulin** and **Cannula** filds will have their **age reset** to 0 days and 0 hours **after each pod change**. Das liegt daran, wie die Omnipod-Pumpe gebaut ist und funktioniert. Da der Pod die Kanüle direkt in die Haut am Ort der Pod-Anwendung einführt, wird bei Omnipod-Pumpen kein herkömmlicher Schlauch verwendet. *Therefore after a pod change the age of each of these values will automatically reset to zero.* **Pump battery age** is not reported as the battery in the pod will always be more than the life of the pod (maximum 80 hours). The **pump battery** and **insulin reservoir** are self contained inside of each pod.

![ACT_1](../images/DASH_images/Actions_Tab/ACT_1.png)

### Level

**Insulin Level**

Insulin level displayed is the amount reported by Omnipod DASH. However, the pod only reports the actual insulin reservoir level when it is below 50 units. Until then “Above 50 units” will be displayed. The amount reported is not exact: when the pod reports ‘empty’ in most cases the reservoir will still have some additional units of insulin left. The omnipod DASH overview tab will display as described the below:

  * **Above 50 Units** - The Pod reports more than 50 units currently in the reservoir.
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
