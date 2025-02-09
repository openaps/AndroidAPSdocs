- - -
orphan: true
- - -

# Omnipod DASH

These instructions are for configuring the **Omnipod DASH** generation pump **(NOT Omnipod Eros)**, available as part of **AAPS** version 3.0.

## Omnipod DASH Spezifikationen

These are the specifications of the **Omnipod DASH** ('DASH') and what differentiates it from the **Omnipod EROS** ('EROS'):

* Die DASH Pods sind durch eine blaue Nadelkappe gekennzeichnet (EROS haben eine farblose Nadelkappe). The pods are otherwise identical in terms of physical dimensions.
*  DASH does not require a BLE link/bridge device (NO RileyLink, OrangeLink, or EmaLink needed).
* The DASH's bluetooth connection is used only when needed, and connects to send command and disconnects right after!
* No more "no connection to link device / pod" errors with DASH.
* **AAPS** will wait for pod's accessibility to send commands.
* On pod activation, **AAPS** will find and connect to a new DASH pod.
* Expected range: 5-10 meters (YMMV).

WARNING: There are currently reported Bluetooth connection issues with the following combination of **AAPS** / DASH / Android 15. **AAPS** should not be  in combination with Android 15 and DASH unless the user has checked the following [**List**](https://docs.google.com/spreadsheets/u/1/d/e/2PACX-1vScCNaIguEZVTVFAgpv1kXHdsHl3fs6xT6RB2Z1CeVJ561AvvqGwxMhlmSHk4J056gMCAQE02sAWJvT/pubhtml?gid=683363241&single=true) and verified their phone is not known reported issue. **AAPS** is currently working to resolve this issue.

## Hardware- und Software-Anforderungen

* DASH is identified by blue needle cap.

![Omnipod Pod](../images/DASH_images/Omnipod_Pod.png)

* **Compatible Android phone** with a BLE Bluetooth connection  
  Be aware that **AAPS** Omnipod Dash driver connects with the DASH via Bluetooth every time it sends a command, and it disconnects right after. The Bluetooth connection can be disturbed by other bluetooth devices linked to the phone that is running **AAPS**, like earbuds etc... (which might cause, in rare occasions, connection issue or pod errors/loss on activation or afterwards in some phone models), or be disturbed by it.
   -  **AAPS Version 3.0. oder neuer erstellt und installiert** mit der Anleitung aus dem Abschnitt [**AAPS erstellen**](../SettingUpAaps/BuildingAaps.md).
* [**Kontinuierliche Glukosemessung (CGM)**](../Getting-Started/CompatiblesCgms.md)

The instructions below explain how to activate a new pod session. Wait to close to expiry of a current pod session before trying to connect **AAPS** with a new pod. Once a pod is is cancelled it cannot reused and the disconnection will be final.

## Bevor Du anfängst

**SAFETY FIRST** - you should not try to connect **AAPS** to a pod for the first time without having access to extra pods, insulin, and phone devices are a must have.

**Your Omnipod Dash PDM will become redundant after the AAPS Dash driver activates your pod.** Previously a user may have operated a PDM to send commands to your DASH. A DASH will only faciiliate a single device to send commands to communicate with it. Das Gerät, das den Pod erfolgreich aktiviert, ist das einzige Gerät, das von diesem Zeitpunkt an mit ihm kommunizieren darf. This means that once you activate a DASH with your Android phone through the **AAPS**, **you will no longer be able to use your PDM with that pod**. The **AAPS** Dash driver in your Android phone is now your acting PDM.

*Dies bedeutet NICHT, dass Du Deinen PDM wegwerfen solltest. Es wird empfohlen, ihn als Backup zu behalten und für Notfälle, falls das Telefon verloren geht oder AAPS nicht korrekt funktioniert.*

**Dein Pod gibt auch dann Insulin ab, wenn keine AAPS-Verbindung besteht**. Default basal rates are programmed on the pod on activation as defined in the current active **Profile**. As long as **AAPS** is operational it will send basal rate commands that run for a maximum of 120 minutes. Wenn der Pod aus irgendeinem Grund keine neuen Befehle erhält (zum Beispiel, weil die Kommunikation aufgrund eines zu großen Abstandes zwischen Pod und Telefon verloren gegangen ist), fällt der Pod automatisch auf die Standard-Basalraten zurück.

**AAPS Profile does not support a 30 minute basal rate time frame** If you are new to **AAPS** and are setting up your basal rate **Profile** for the first time, please be aware that basal rates starting on a half-hour basis are not supported, and programmes on an hourly basis. For example, if you have a basal rate of 1.1 units which starts at 09:30 and has a duration of 2 hours ending at 11:30, it is not possible replicate this im **AAPS**. Du muss diese 1,1 IE Basalrate auf einen Zeitraum von entweder 9:00 - 11:00 Uhr oder 10:00 - 12:00 Uhr einstellen. Even though the DASH hardware itself supports the 30 minute basal rate **Profile** increments, **AAPS** does support this feature.

**0U/h profile basal rates are NOT supported in AAPS** While the DASH does support a zero basal rate, since **AAPS** uses multiples of the user's **Profile** basal rate to determine automated treatment; it cannot function with a zero basal rate. Eine temporäre Null-Basalrate kann durch die Funktion PUMPE TRENNEN oder durch eine Kombination aus LOOP DEAKTIVIEREN/TEMP BASALRATE oder LOOP PAUSIEREN/TEMP BASALRATE erreicht werden. The lowest basal rate allowed in **AAPS** is 0.05U/h.

## Selecting Dash in AAPS

There are **two ways**:

### Option 1: Neue Installation

When installing **AAPS** for the first time, the **Setup Wizard** will guide new users through key features and installation requirements for **AAPS**. Wähle "DASH" aus, wenn Du die Pumpenauswahl erreichst.

![Enable_Dash_1](../images/DASH_images/Enable_Dash/Enable_Dash_1.png)

When in doubt you can also select “Virtual Pump” and select “DASH” later, after setting up **AAPS** (see option 2).

### Option 2: Der Konfigurations-Generator

Bei einer vorhandenen Installation von AAPS kannst Du **DASH** als Pumpe unter "Konfiguration" auswählen:

Über das **Hamburger Menü** oben links unter **Konfiguration (1)** \ ➜\ **Pumpe** \ ➜ \ **Dash** \ ➜\ **Zahnrad (3)** über das **Auswahlfeld (2)** für **DASH**.

Selecting the **checkbox (4)** next to the **Settings Gear (3)** will allow the DASH menu to be displayed as a tab in the **AAPS** interface titled **DASH**. Checking this box will facilitate your access to the DASH commands when using **AAPS**.

**NOTE:** A faster way to access the [**Dash settings**](#dash-settings) can be found below in the DASH settings section of this document.

![Enable_Dash_3](../images/DASH_images/Enable_Dash/Enable_Dash_3.png)

### Überprüfung der Omnipod-Treiberauswahl

To verify that you have selected the DASH in **AAPS**, if you have checked the box (4), **swipe to the left** from the **Overview** tab, where you will now see a **DASH** tab on **AAPS**. If this box is left unchecked, you’ll find the DASH tab in the hamburger menu upper left.

![Enable_Dash_4](../images/DASH_images/Enable_Dash/Enable_Dash_4.jpg)

## DASH Konfiguration

Bitte **wische nach links **zur **DASH** Registerkarte, wo du alle Pod Funktionen verwalten kannst (einige dieser Funktionen sind ohne aktive Pod Sitzung nicht aktiviert oder nicht sichtbar):

![Refresh_LOGO](../images/DASH_images/Refresh_LOGO.png) 'Refresh' pod connectivity and status, be able to silence pod alarms when the pod beeps

![POD_MGMT_LOGO](../images/DASH_images/POD_MGMT_LOGO.png) 'Pod Management' (Activate, Deactivate, Play test beep, and Pod history)


### Pod aktivieren

1. Navigiere zur Registerkarte **DASH** und klicke auf den **POD MGMT (1)** Button und dann auf **Pod aktivieren (2)**.

![Activate_Pod_1](../images/DASH_images/Activate_Pod/Activate_Pod_1.png)

​    ![Activate_Pod_2](../images/DASH_images/Activate_Pod/Activate_Pod_2.png)

2. Der **Pod füllen** Bildschirm wird angezeigt. Fülle deinen neuen Pod mit mindestens 80 Einheiten Insulin und achte auf zwei Signaltöne, die anzeigen, dass der Pod bereit ist, gestartet zu werden. Beachte bei der Berechnung der gesamten Insulinmenge, welche Du in drei Tagen benötigst, dass zum Füllen des Pod 3 bis 10 IE benötigt werden.

![Activate_Pod_3](../images/DASH_images/Activate_Pod/Activate_Pod_3.png)    ![Activate_Pod_4](../images/DASH_images/Activate_Pod/Activate_Pod_4.jpg)

Ensure that the new pod and the phone running **AAPS** are within close proximity of each other and click the **Next** button.

**NOTE**: if the  error message below pops up _'Could not find an available pod for activation'_ (this can happen), do not panic. Klicke auf den **Wiederholen-Button**. In den meisten Fällen wird die Aktivierung dann erfolgreich fortgesetzt.

![Activate_Pod_3](../images/DASH_images/Activate_pod_error.png)

3. Der Bildschirm **Initialisiere Pod** wird angezeigt und der Pod beginnt zu entlüften. (Du wirst ein Klicken hören, gefolgt von einer Reihe tickender Sounds, der Pod entlüftet sich selbst).  Ein grünes Häkchen wird nach erfolgreichem Befüllen angezeigt und der **Weiter** Button wird angezeigt. Klicke auf den **Weiter** Button, um die Initialisierung des Pods abzuschließen; anschließend wird der **Pod anlegen** Bildschirm angezeigt.

![Activate_Pod_5](../images/DASH_images/Activate_Pod/Activate_Pod_5.jpg)    ![Activate_Pod_6](../images/DASH_images/Activate_Pod/Activate_Pod_6.jpg)

4. Next, prepare the infusion site ready to receive the new pod. Wash hands to avoid any risk of infection. Clean the infusion site by either using soap and water or an alcohol wipe to disinfect and let the skin air dry completely before proceeding. Remove the pod's blue plastic needle cap. If you see something that sticks out of the pod or unusual, cancel the process and start with a new pod. If everything looks OK, proceed to take off the white paper backing from the adhesive and apply the pod to the selected site on your body. Wenn du fertig bist, klicke auf den **Weiter** Button.

![Activate_Pod_8](../images/DASH_images/Activate_Pod/Activate_Pod_8.jpg)

5. Das **Pod anlegen** Dialogfenster wird nun angezeigt. **NUR auf OK klicken, wenn Du bereit bist, die Kanüle einzuführen**.

![Activate_Pod_9](../images/DASH_images/Activate_Pod/Activate_Pod_9.jpg)

6. After pressing **OK**, it may take some time before the DASH responds and inserts the cannula (1-2 minutes maximum). Be patient.

 *HINWEIS: Bevor die Kanüle eingesetzt wird, ist es ratsam, die Haut in der Nähe des Kanülensetzpunktes etwas zusammenzukneifen. Dies sorgt für eine sanfte Einführung der Nadel und verringert die Gefahr einer Verstopfung.*

![Activate_Pod_10](../images/DASH_images/Activate_Pod/Activate_Pod_10.png)    ![Activate_Pod_11](../images/DASH_images/Activate_Pod/Activate_Pod_11.jpg)

7. Es wird ein grünes Häkchen angezeigt, und der Button **Weiter** wird bei erfolgreicher Kanüleneinführung aktiviert. Klicke auf den **Weiter** Button.

![Activate_Pod_12](../images/DASH_images/Activate_Pod/Activate_Pod_12.jpg)

9. Der **Pod aktiviert** Bildschirm wird angezeigt. Klicke auf den grünen **Beenden** Button. Glückwunsch! You have now started a new pod session.

![Activate_Pod_13](../images/DASH_images/Activate_Pod/Activate_Pod_13.jpg)

10. Der Menübildschirm **Pod Management** sollte nun den **Aktiviere Pod (1)** Button als *deaktiviert* und den **Deaktiviere Pod (2)** Button als *aktiviert* angezeigen. Dies liegt daran, dass jetzt ein Pod aktiv ist und du keinen zusätzlichen Pod aktivieren kannst, ohne zuerst den aktuell aktiven Pod zu deaktivieren.

    Klicke auf den Zurück-Knopf auf deinem Smartphone, um zum Tab-Bildschirm **DASH** zurückzukehren, auf dem jetzt Informationen zu deiner aktiven Pod-Sitzung angezeigt werden, einschließlich der aktuellen Basalrate, Pod Reservoir Level, abgegebenem Insulin, Pod Fehlern und Warnungen.

    Weitere Details zu den angezeigten Informationen findest Du im [**DASH-Tab**](#dash-tab)-Abschnitt dieses Dokuments.

![Activate_Pod_14](../images/DASH_images/Activate_Pod/Activate_Pod_14.png)

​    ![Activate_Pod_15](../images/DASH_images/Activate_Pod/Activate_Pod_15.jpg)

Es ist zu empfehlen, NACH der Aktivierung des Pods die Einstellungen zu exportieren. Export settings should be done at each pod change and once a month, copy the exported file to your internet drive. Details hierzu findest Du in [**Erstellen und Wiederherstellen von Backups**](../Maintenance/ExportImportSettings.md).


(OmnipodDASH-deactivate-pod)=

### Pod deaktivieren

Unter normalen Umständen beträgt die erwartete Lebensdauer eines Pods drei Tage (72 Stunden) und zusätzliche 8 Stunden nach der Pod-Ablaufwarnung und somit insgesamt 80 Stunden.

Gehe wie folgt vor, um einen Pod zu deaktivieren (entweder vor dem Ablaufen der Nutzungsdauer oder wegen eines Pod-Fehlers):

1. Gehe zur Registerkarte **DASH** und klicke auf **POD MGMT (1)** und dann auf dem **Pod Management** Bildschirm klicke auf den **Pod deaktivieren (2)** Button.

![Deactivate_Pod_1](../images/DASH_images/Deactivate_Pod/Deactivate_Pod_1.jpg)

​    ![Deactivate_Pod_2](../images/DASH_images/Deactivate_Pod/Deactivate_Pod_2.png)

2. Auf dem Bildschirm **Pod deaktivieren**, klicke auf die **Weiter** Taste, um die Deaktivierung des Pods zu starten. Du erhältst vom Pod ein Piepen als Bestätigung, dass die Deaktivierung erfolgreich war.

![Deactivate_Pod_3](../images/DASH_images/Deactivate_Pod/Deactivate_Pod_3.jpg)

 ![Deactivate_Pod_4](../images/DASH_images/Deactivate_Pod/Deactivate_Pod_4.jpg)


3. Nach erfolgreicher Deaktivierung wird ein grünes Häkchen angezeigt. Klicke auf **Weiter** um die Deaktivierung des Pods abzuschließen. Du kannst nun deinen Pod entfernen, da die aktive Sitzung beendet wurde.

![Deactivate_Pod_5](../images/DASH_images/Deactivate_Pod/Deactivate_Pod_5.jpg)

4. Klicke auf den grünen Knopf, um zum Bildschirm **Pod Management** zurückzukehren.

![Deactivate_Pod_6](../images/DASH_images/Deactivate_Pod/Deactivate_Pod_6.jpg)

5. Du bist jetzt wieder im **Pod Management** Menü; drücke die Zurück-Taste auf Deinem Smartphone um zur Registerkarte **DASH** zurückzukehren. Überprüfe, ob das Feld **Pod Status** die Nachricht **Kein aktiver Pod** anzeigt.

![Deactivate_Pod_2](../images/DASH_images/Deactivate_Pod/Deactivate_Pod_2.png)

 ![Deactivate_Pod_8](../images/DASH_images/Enable_Dash/Enable_Dash_4.jpg)

### Insulinabgabe fortsetzen

**Note**: During **Profile Switches**, DASH must suspend delivery before setting the new basal **Profile** as delivery can be suspended. Lies [**Insulinabgabe unterbrochen**](#delivery-suspended) im Abschnitt Problembehandlung für weitere Details.

Benutze diesen Befehl, um den aktiven, derzeit pausierten Pod anzuweisen, die Insulinabgabe fortzusetzen. After the command is successfully processed, insulin will resume normal delivery using the current basal rate based on the current time from the active basal **Profile**. The pod will again accept commands for bolus, **TBR**, and **SMB**.

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

2. Gehe zur Registerkarte **DASH** und drücke den **Alarme stummschalten (2)** Button . **AAPS** sends the command to the pod to deactivate the pod expiration warning beeps and updates the **Pod status (1)** field with **ACKNOWLEDGE ALERTS**.

![ACK_alerts_2](../images/DASH_images/ACK_Alerts/ACK_ALERTS_2.png)

3. Nach **erfolgreicher Stummschaltung** der Alarme werden **2 Pieptöne** vom aktiven Pod ausgegeben und ein Bestätigungsdialog zeigt die Nachricht **Aktive Alarme stummgeschaltet**. Drücke **OK**, um den Dialog zu bestätigen und zu schließen.


![ACK_alerts_3](../images/DASH_images/ACK_Alerts/ACK_ALERTS_3.png)

4. Wechsele zur Registerkarte **DASH**. Im Feld **Aktive Pod-Warnungen** wird keine Warnmeldung mehr angezeigt und der aktive Pod gibt keine Pieptöne zur Warnung mehr ab.

(OmnipodDASH-view-pod-history)=

### Anzeige Pod-Historie

This section explains how to review your active pod history and filter by different action categories. Mit dem Werkzeug 'Pod Historie' kannst Du die Aktionen und Ergebnisse deines jeweils aktiven Pod während dessen dreitägigem Lebenszyklus (72 - 80 Stunden) ansehen.

Diese Funktion ist hilfreich bei der Überprüfung von Bolus-, TBR- und Basalraten-Befehlen, die an den Pod gesendet wurden. Die übrigen Kategorien sind hilfreich bei der Problembehebung und zur Bestimmung der Reihenfolge von Ereignissen, die zu einem Fehler geführt haben.

*HINWEIS:* **Nur der letzte Befehl kann 'unsicher' sein**. Neue Befehle *werden nicht gesendet*, bis der **zuvor als 'unsicher' eingestufte entweder bestätigt oder abgelehnt wurde**. Der Weg unsichere Befehle zu beheben, ist den Pod Status zu **Aktualisieren**.

1. Gehe zur Registerkarte **DASH** und klicke auf **POD MGMT (1)** und dann auf dem **Pod Management** Bildschirm klicke auf den **Pod Historie (2)** Button.

![Pod_history_1](../images/DASH_images/Deactivate_Pod/Deactivate_Pod_1.jpg)



 ![Pod_history_2](../images/DASH_images/Pod_History/Pod_history_2.jpg)



2. Auf dem **Pod Historie** Bildschirm wird als Standard die Kategorie **Alle (1)** angezeigt. Sie zeigt **Datum und Zeit (2)** aller Pod **Aktionen (3)** und **Ergebnisse (4)** in umgekehrter chronologischer Reihenfolge. Use your phone’s **back button 2 times** to return to the **DASH** tab in the main **AAPS** interface.


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
* **Fehler:** Zeigt den letzten Fehler an. Prüfe die [Pod Historie](#view-pod-history) und die Protokolldateien („log files“) auf vorhandene Fehlermeldungen und detailliertere Informationen.
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

Im Folgenden ist die Bedeutung der Symbole im **Pod Management**-Bildschirm zu sehen, die Du durch Drücken des **POD MGMT (1)** Buttons in der Registerkarte **DASH** erreichst.

![DASH_Tab_2](../images/DASH_images/Deactivate_Pod/Deactivate_Pod_1.jpg)

 ![DASH_Tab_3](../images/DASH_images/DASH_Tab/DASH_Tab_3.png)

* 2 - [**Pod aktivieren**](#activate-pod) : Füllt und aktiviert einen neuen Pod.
* 3 - [**Pod deaktivieren**](#deactivate-pod) : Deaktiviert den derzeit aktiven Pod.
* 4 - **Testton abspielen**: Spielt einen einzelnen Test Piep auf dem Pod ab.
* 5 - [**Pod Historie**](#view-pod-history) : Zeigt den Aktivitätsverlauf des aktiven Pods an.

(DanaRS-Insulin-Pump-dash-settings)=

## DASH-Einstellungen

Über das **Hamburger Menü** oben links unter **Konfiguration (1)** \ ➜\ **Pumpe** \ ➜ \ **DASH** \ ➜\ **Einstellungsrädchen (3)** über das **Auswahlfeld (2)** für **DASH**. Selecting the **checkbox (4)** next to the **Settings Gear (3)** will allow the Dash menu to be displayed as a tab in the **AAPS** interface titled **DASH**.

![Dash_settings_1](../images/DASH_images/Enable_Dash/Enable_Dash_3.png)



**HINWEIS:** Einen schnelleren Zugriff auf die **DASH-Einstellungen** erlaubt das **3-Punkt-Menü (1)** in der oberen rechten Ecke der Registerkarte **DASH** und die Auswahl **DASH-Einstellungen (2)** aus dem Dropdown-Menü.

![Dash_settings_3](../images/DASH_images/Dash_settings/Dash_settings_3.png)

Die Einstellungen sind nach Gruppen sortiert unten aufgelistet. Du kannst die meisten der Einstellungen über einen Kippschalter aktivieren oder deaktivieren:

*HINWEIS: Ein Sternchen (\*) bedeutet, dass "aktiviert" der Standardwert für eine Einstellung ist.*

### Bestätigungstöne

![Dash_settings_4](../images/DASH_images/Dash_settings/Dash_settings_4.jpg)

Bestätigt mit Signaltönen des Pods die Abgabe und Änderung von Bolus, Basalrate, SMB und TBR.

* **Bolus-Piep aktiviert:** Aktiviert oder deaktiviert Bestätigungstöne bei Abgabe eines Bolus.
* **Basal-Piep aktiviert:** Aktiviert oder deaktiviert Bestätigungstöne bei Einstellung einer neuen, Abbruch der aktiven oder Änderung der aktuellen Basalrate.
* **SMB-Piep aktiviert:** Aktiviert oder deaktiviert Bestätigungstöne bei Abgabe eines SMB.
* **TBR-Piep aktiviert:** Aktiviert oder deaktiviert Bestätigungstöne, bei Setzen oder Abbruch einer TBR.

### Alarme

![Dash_settings_5](../images/DASH_images/Dash_settings/Dash_settings_5.jpg)

Provides **AAPS** alerts for pod expiration, shutdown, low reservoir based on the defined threshold units.

*Beachte, dass eine AAPS-Benachrichtigung IMMER für jeden Alarm nach der ersten Kommunikation mit dem Pod ausgegeben wird, da der Alarm ausgelöst wurde. Wenn Du die Benachrichtigung löschst, wird der Alarm NICHT gelöscht, AUSSER wenn die automatische Bestätigung von Pod-Alarmen aktiviert ist. Um den Alarm MANUELL zu löschen, musst Du auf der Registerkarte **DASH** den **Alarm stummschalten** Button drücken.*

* **Ablauferinnerung aktiviert:** Aktiviere oder deaktiviere die Pod-Ablauferinnerung, die ausgelöst wird, wenn die festgelegte Anzahl von Stunden vor dem Podende erreicht ist.
* **Stunden bis zum Podende:** Legt die Anzahl der Stunden vor der Abschaltung des aktiven Pods fest, die den Alarm zur Pod-Ablauferinnerung auslöst.
* **Warnung niedriger Reservoirstand aktiviert:** Aktiviere oder deaktiviere eine Warnung für das Limit für den niedrigen Reservoirstand der verbleibenden Einheiten des Pods, wie es im Feld 'Anzahl der Einheiten' definiert ist.
* **Anzahl der Einheiten:** Die Anzahl der verbleibenden Einheiten, bei denen der Alarm für den niedrigen Reservoirstand ausgelöst werden soll.

### Benachrichtigungen

![Dash_settings_6](../images/DASH_images/Dash_settings/Dash_settings_6.jpg)

The Notification section allows the user to so select their preferred notifications and audible phone alerts when it is uncertain if TBR, SMB, or bolus, and delivery suspended events were successful.

*HINWEIS: Dies sind nur Benachrichtigungen, es werden keine akustischen Signale ausgegeben.*

* **Sound for uncertain TBR notifications enabled:** Enable or disable this setting to trigger an audible alert and visual notification when **AAPS** is uncertain if a TBR was successfully set.
* **Sound for uncertain SMB notifications enabled:** Enable or disable this setting to trigger an audible alert and visual notification when **AAPS**is uncertain if an SMB was successfully delivered.
* **Sound for uncertain bolus notifications enabled:** Enable or disable this setting to trigger an audible alert and visual notification when **AAPS**is uncertain if a bolus was successfully delivered.
* **Ton bei unterbrochener Abgabe aktiviert:** Aktivieren oder deaktivieren Sie diese Einstellung, um eine akustische Benachrichtigung und visuelle Benachrichtigung auszulösen, wenn die Unterbrechung der Insulinabgabe erfolgreich durchgeführt wurde.

## Aktionen (AKT) Tab

This tab is well documented in the main**AAPS**documentation but there are a few items on this tab that are specific to how the DASH differs from tube based pumps, especially after the processes of applying a new pod.

1. Go to the **Actions (ACT)** tab in the main **AAPS**interface.

2. Under the **Careportal (1)** section the **Insulin** and **Cannula** fields will have their **age reset** to 0 days and 0 hours **after each pod change**. Das liegt daran, wie die Omnipod-Pumpe gebaut ist und funktioniert. Da der Pod die Kanüle direkt in die Haut am Ort der Pod-Anwendung einführt, wird bei Omnipod-Pumpen kein herkömmlicher Schlauch verwendet. *Nach einem Podwechsel wird das Alter jedes dieser Werte daher automatisch auf Null zurückgesetzt.* **Das Alter der Pumpenbatterie** wird nicht angegeben, da die Batterie im Pod immer länger hält, als die Lebensdauer des Pods (maximal 80 Stunden). Die **Pumpenbatterie** und das **Insulinreservoir ** sind immer im Pod enthalten.

![ACT_1](../images/DASH_images/Actions_Tab/ACT_1.png)

### Level

**Insulin Level**

Insulin level displayed is the amount reported by DASH. Der Pod meldet allerdings den tatsächlichen Insulinlevel erst dann, wenn er unter 50 Einheiten liegt. Bis dahin wird „Über 50 Einheiten“ angezeigt. Die gemeldete Menge ist nicht genau: Wenn der Pod „leer“ meldet, wird das Reservoir in den meisten Fällen noch einige zusätzliche Einheiten Insulin enthalten. The DASH overview tab will display as described the below:

  * **Above 50 Units** - The pod reports more than 50 units currently in the reservoir.
  * **Unter 50 Einheiten** - Die Menge an Insulin, die noch im Reservoir vorhanden ist, wie vom Pod gemeldet.

Sonstiges
  * **SMS** - Aus dem Pod übernommener Wert oder 50+ IE für SMS-Antworten
  * **Nightscout** - Lädt den Wert 50 hoch, wenn mehr als 50 Einheiten angezeigt werden (Nightscout Version 14.07 und älter).  Neuere Versionen melden einen Wert von 50+, wenn sich mehr als 50 Einheiten im Reservoir befinden.

## Problembehandlung

### Insulinabgabe unterbrochen

  * Es gibt keine Unterbrechen-Taste mehr. If you want to "suspend" the pod, you can set a zero **TBR** for x minutes.
  * During **Profile Switches**, DASH must suspend delivery before setting the new basal **Profile**. Wenn die Kommunikation zwischen den beiden Befehlen fehlschlägt, kann die Insulinabgabe unterbrochen bleiben. Wenn das passiert:
     - Es gibt dann keine Insulinabgabe; dies schließt Basal, SMB, manuelle Boli usw. ein.
     - Es kann eine Benachrichtigung geben, dass einer der Befehle unbestätigt blieb: Dies hängt davon ab, wann der Fehler aufgetreten ist.
     - **AAPS** will try to set the new basal profile every 15 minutes.
     - **AAPS** will show a notification informing that the delivery is suspended every 15 minutes, if the delivery is still suspended (resume delivery failed).
     - Die [**Insulin fortsetzen**](#resuming-insulin-delivery) Schaltfläche wird aktiv, wenn die Lieferung manuell fortgesetzt werden soll.
     - If **AAPS** fails to resume delivery on its own (this happens if the pod is unreachable, sound is muted, etc), the pod will start beeping 4 times every minute for 3 minutes, then repeated every 15 minutes if delivery is still suspended for more than 20 minutes.
  * Für unbestätigte Befehle sollte "Aktualisieren" des Podstatus diese bestätigen oder ablehnen.

**Hinweis:** Wenn Du Pieptöne vom Pod hörst, kannst Du nicht davon ausgehen, dass die Insulinabgabe ohne Überprüfung im Smartphone fortgesetzt wird. Die Abgabe könnte weiterhin ausgesetzt bleiben, **also musst Du prüfen, was los ist!**

### Pod Fehler

Pods fallen gelegentlich aus unterschiedlichen Gründen aus, u. a. wegen Hardwareproblemen mit dem Pod selbst. Am besten ist es, diese nicht bei Insulet anzugeben, da AAPS kein zugelassener Anwendungsfall ist. Eine Liste der Fehlercodes [**findet sich hier**](https://github.com/openaps/openomni/wiki/Fault-event-codes), um die Ursache zu ermitteln.

### Verhindere Pod Fehler 49

Dieser Fehler hängt mit einem fehlerhaften Pod-Status für einen Befehl oder einem Fehler während der Insulinabgabe zusammen. Dies ist der Fall, wenn der AAPS-Treiber und der Pod unterschiedliche Angaben zum aktuellen Status haben. Der Pod reagiert (aufgrund einer eingebauten Sicherheitsfunktion) dann mit einem nicht auflösbaren Fehlercode 49 (0x31) und verabschiedet sich mit einem so genannten „Heuler“: dem langen, irritierenden Piepton, der nur gestoppt werden kann, indem mit einer Büroklammer in ein Loch am richtigen Ort auf der Rückseite des Pods gedrückt wird. Der genaue Ursprung eines „Pod Fehlers 49“ ist oft schwer zu ermitteln. Situationen, die für das Auftreten dieses Fehlers vermutet werden (z.B. bei einem Absturz der Anwendung, beim Ausführen einer Entwicklungsversion oder bei einer Neuinstallation).

### Pumpe nicht erreichbar Alarme

Wenn für eine voreingestellte Zeitspanne keine Kommunikation mit dem Pod hergestellt werden kann, wird eine „Pumpe nicht erreichbar“ Alarmmeldung angezeigt. Pump nicht erreichbar Alarme können über das Drei-Punkte-Menü oben rechts konfiguriert werden. Wählen Sie **Einstellungen** \ ➜ \ **Lokale Alarme** \ ➜ \ ** Grenzwert Pumpe ist nicht erreichbar [min]**. Empfohlener Wert ist eine Alarmierung nach **120** Minuten.

### Exporteinstellungen

Exporting **AAPS** settings enables you to restore all your settings, and maybe more importantly, all your Objectives. You may need to restore settings to the “last known working situation” or after uninstalling/reinstalling **AAPS** or in case of phone loss, reinstalling on the new phone.

Hinweis: Die Informationen des aktiven Pod sind in den exportierten Einstellungen enthalten. Wenn Du eine „alte“ Exportdatei importierst, wird Dein aktueller Pod „sterben“. Es gibt hierzu keine Alternative. In some cases (like a _programmed_ phone change), you may need to use the exported file to restore **AAPS'** settings **while keeping the current active Pod**. In diesem Fall ist es wichtig, nur die zuletzt exportierte Einstellungsdatei zu verwenden, die den aktuell aktiven Pod enthält.

**Es ist eine gute Idee, einen Export sofort nach der Aktivierung eines Pods durchzuführen.** This way you will always be able to restore the current active pod in case of a problem. Zum Beispiel, wenn Du auf ein anderes Smartphone wechseln willst.

Kopiere die exportierten Einstellungen regelmäßig an einen sicheren Ort (z. B. in der Cloud), der bei Bedarf von jedem Telefon aus zugänglich ist (z. B. im Falle eines Telefonverlustes oder dem Rücksetzen auf die Werkseinstellung des aktuellen Telefons).

### Importeinstellungen

**WARNUNG** Bitte beachte, dass durch das Importieren von Einstellungen möglicherweise ein veralteter Pod-Status importiert wird. Dadurch besteht die Gefahr, dass der aktive Pod eingebüßt wird! (siehe **Exporteinstellungen**). Es ist besser, dies nur dann auszuprobieren, wenn keine anderen Optionen verfügbar sind.

Wenn Du die Einstellungen mit einem aktiven Pod importierst, stelle sicher, dass der Export ebenfalls mit diesem Pod durchgeführt wurde.

**Importieren während ein Pod aktiv ist:** (Du riskierst den Pod!)

1. Stelle sicher, dass Du Einstellungen importierst, die kürzlich mit dem aktuell aktiven Pod exportiert wurden.
2. Einstellungen importieren
3. Alle Voreinstellungen kontrollieren.

**Importieren ohne aktiven Pod**

1. Importieren aller kürzlichen Exporte sollte funktionieren (siehe oben)
2. Einstellungen importieren
3. Alle Voreinstellungen kontrollieren.
4. Es kann erforderlich sein, einen in den importierten Einstellungen enthaltenen, aber nicht mehr vorhandenen Pod zu **deaktivieren**.

### Importieren von Einstellungen, die den Pod-Status von einem inaktiven Pod enthalten

Wenn Du Einstellungen für einen mittlerweile inaktiven Pod importierst, wird AAPS versuchen sich mit diesem Pod zu verbinden. Dies wird logischerweise scheitern. Du kannst in dieser Situation keinen neuen Pod aktivieren.

To remove the old pod session “try” to de-activate the Pod. Die Deaktivierung wird fehlschlagen. Wähle "Wiederholen". Nach der zweiten oder dritten Wiederholung erhälst Du die Möglichkeit, den Pod zu entfernen. Once the old pod is removed you will be able to activate a new pod.

### Neuinstallation von AAPS

When uninstalling**AAPS** you will lose all your settings, objectives and the current Pod session. Um sie wiederherzustellen, stelle sicher, dass Du eine kürzlich exportierte Einstellungsdatei zur Verfügung hast!

When on an active Pod, make sure that you have an export for the current pod session or you will lose the currently active pod when importing older settings.

1. Exportiere deine Einstellungen und bewahre eine Kopie an einem sicheren Ort auf.
2. Uninstall **AAPS** and restart your phone.
3. Install the new version of **AAPS**.
4. Einstellungen importieren
5. Verify all preferences (optionally import settings again).
6. Activate a new pod.
7. Anschließend: Aktuelle Einstellungen exportieren.

### AAPS auf eine neuere Version aktualisieren

In den meisten Fällen ist eine Deinstallation nicht erforderlich. Du kannst eine „in-place“ Installation durchführen, indem Du die Installation für die neue Version startest. Dies ist auch möglich, wenn ein Pod aktiv ist.

1. Exportiere Deine Einstellungen.
2. Install the new **AAPS** version.
3. Überprüfe, ob die Installation erfolgreich war.
4. RESUME the Pod or activate a new pod.
5. Anschließend: Aktuelle Einstellungen exportieren.

### Omnipod-Treiberwarnungen

Bitte beachte, dass der Omnipod-Treiber auf der Registerkarte **DASH** eine Vielzahl eindeutiger Warnungen anzeigt. Die meisten davon sind informativ und können ignoriert werden, während einige dem Benutzer eine Aktion vorschlagen, um die Ursache für die ausgelöste Warnung zu beheben. Im Folgenden findest du eine Zusammenfassung der wichtigsten Warnmeldungen, die dir begegnen können:

* Keine aktive Pod-Sitzung erkannt. Dieser Alarm kann vorübergehend durch Drücken von **Schlummern** deaktiviert werden, wird aber weiterhin ausgelöst, solange kein neuer Pod aktiviert wurde. Einmal aktiviert, wird dieser Alarm automatisch ausgeschaltet.
* Pod suspended Informational alert that pod has been suspended.
* Setting basal **Profile** failed : Delivery might be suspended! Bitte aktualisiere den Pod-Status manuell auf der Registerkarte Omnipod und setze die Übertragung bei Bedarf fort. Informational alert that the Pod basal **Profile** setting has failed, and you will need to hit *Refresh* on the Omnipod tab.
* Unable to verify whether **SMB** bolus succeeded. Wenn du sicher bist, dass der Bolus nicht erfolgreich war, solltest du den SMB-Eintrag manuell auf der Registerkarte Behandlungen entfernen. Alert that the **SMB** bolus command success could not be verified, you will need to verify the *Last bolus* field on the DASH tab to see if **SMB** bolus succeeded and if not remove the entry from the Treatments tab.
* Unsicher, ob die "Ereignis Bolus/TBR/SMB" abgeschlossen wurde. Bitte überprüfe manuell, ob sie erfolgreich war.

## Where to get help for DASH

All of the development work for the DASH is done by the community on a **volunteer** basis; please keep this in mind and use the following guidelines before requesting assistance:

-  **Level 0:** Lies den entsprechenden Abschnitt dieser Dokumentation um sicherzustellen, dass du verstehst, wie die Funktion, mit der Du Schwierigkeiten hast, funktionieren soll.
-  **Level 1:** Wenn Du immer noch Probleme, die Du mit diesem Dokument nicht lösen kannst, haben solltest, gehe **Discord-**Kanal *#AAPS*. Nutze dazu [diesen Einladungslink <https://discord.gg/4fQUWHZ4Mw>](https://discord.gg/4fQUWHZ4Mw).
-  **Level 2:** Durchsuche bereits bestehende 'Issues', um zu sehen, ob Dein Problem bereits in den [Issues](https://github.com/nightscout/AndroidAPS/issues) gemeldet wurde. Falls es bereits vorhanden ist, bestätige/kommentiere/ergänze bitte Informationen zu Deinem Problem. Wenn nicht, erstelle bitte ein [neues Issue](https://github.com/nightscout/AndroidAPS/issues) und füge [Deine Protokolldateien](../GettingHelp/AccessingLogFiles.md) (Logs) hinzu.
-  **Sei geduldig - die meisten Mitglieder unserer Community sind gutmütige Freiwillige und die Lösung von Problemen erfordert oft Zeit und Geduld von Nutzern und Entwicklern.**
