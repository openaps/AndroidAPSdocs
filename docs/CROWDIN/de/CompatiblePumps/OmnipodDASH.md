- - -
orphan: true
- - -

# Omnipod DASH

Diese Anleitung hilft bei der Konfiguration der seit **AAPS**-Version 3.0 integrierten Pumpengeneration des **Omnipod DASH** **(NICHT des Omnipod Eros)**.

## Omnipod DASH Spezifikationen

Hier finden sich die besonderen Merkmale des **Omnipod DASH** („DASH“) und dessen Unterschiede zum **Omnipod EROS** („EROS“):

* Die DASH Pods sind durch eine blaue Nadelkappe gekennzeichnet (EROS haben eine farblose Nadelkappe). Die Pods sind ansonsten in Bezug auf deren Abmessungen identisch.
*  DASH benötigt keinen BLE-Link ein sog. Bridge Device (es wird KEIN RileyLink, OrangeLink oder EmaLink gebraucht).
* Die Bluetooth-Verbindung des DASH wird nur bei Bedarf verwendet und verbindet sich zum Senden des Befehls und trennt sich unmittelbar danach!
* Keine Verbindungsfehler „Verbindung zum Gerät / Pod“ mehr beim DASH.
* **AAPS** wartet zum Senden der Befehle bis der Pod erreichbar ist.
* Bei Aktivierung des Pods wird **AAPS** den neuen DASH-Pod finden und sich mit ihm verbinden.
* Reichweite für die BT-Verbindung: 5-10 Meter (je nach Umgebung).

```{admonition} Android 15
:class: warning

There are currently reported Bluetooth connection issues with the following combination of **AAPS**: DASH + Android 15.
Please refrain from upgrading your phone to Android 15 unless you have checked the following [**list**](https://docs.google.com/spreadsheets/u/1/d/e/2PACX-1vScCNaIguEZVTVFAgpv1kXHdsHl3fs6xT6RB2Z1CeVJ561AvvqGwxMhlmSHk4J056gMCAQE02sAWJvT/pubhtml?gid=683363241&amp;single=true) and verified that your phone is not a known reported issue.
If you experience frequent disconnection; try to enable Bond BT as described in: [**Bluetooth Issues**](../GettingHelp/GeneralTroubleshooting.md). 
```

## Hardware- und Software-Anforderungen

* Den DASH erkennt man an der blauen Nadelkappe.

![Omnipod Pod](../images/DASH_images/Omnipod_Pod.png)

* **Kompatibles Android-Smartphone** mit einer BLE Bluetooth-Verbindung  
  Sei Dir bewusst, dass der **AAPS**-Omnipod-Dash-Treiber sich zum Senden eines Befehls jedes Mal über Bluetooth mit dem DASH verbindet und diese Verbindung danach sofort wieder trennt. Die Bluetooth-Verbindungen können durch andere Bluethooth-Geräte gestört werden, die mit dem Smartphone, auf dem **AAPS** läuft, verbunden sind. Das können z. B. Earbuds etc. sein ... (was in seltenen Fällen zu Verbindungsproblemen oder bei einigen Smartphone-Modellen zu Pod-Fehlern bei der Aktivierung oder danach führen kann).
   -  **AAPS Version 3.0. oder neuer erstellt und installiert** mit der Anleitung aus dem Abschnitt [**AAPS erstellen**](../SettingUpAaps/BuildingAaps.md).
* [**Kontinuierliche Glukosemessung (CGM)**](../Getting-Started/CompatiblesCgms.md)

The instructions below explain how to activate a new pod session. Wait to close to expiry of a current pod session before trying to connect **AAPS** with a new pod. Once a pod is is cancelled it cannot reused and the disconnection will be final.

## Bevor Du anfängst

**SAFETY FIRST** - you should not try to connect **AAPS** to a pod for the first time without having access to extra pods, insulin, and phone devices are a must have.

**Your Omnipod Dash PDM will become redundant after the AAPS Dash driver activates your pod.** Previously a user may have operated a PDM to send commands to your DASH. A DASH will only faciiliate a single device to send commands to communicate with it. The device that successfully activates the pod is the only device allowed to communicate with it from that point forward. This means that once you activate a DASH with your Android phone through the **AAPS**, **you will no longer be able to use your PDM with that pod**. The **AAPS** Dash driver in your Android phone is now your acting PDM.

*This does NOT mean you should throw away your PDM, it is recommended to keep it around as a backup and for emergencies, for instance when your phone gets lost or AAPS is not working correctly.*

**Your pod will not stop delivering insulin when it is not connected to AAPS**. Default basal rates are programmed on the pod on activation as defined in the current active **Profile**. As long as **AAPS** is operational it will send basal rate commands that run for a maximum of 120 minutes. When for some reason the pod does not receive any new commands (for instance because communication was lost due to Pod - phone distance) the pod will automatically fall back to default basal rates.

**AAPS Profile does not support a 30 minute basal rate time frame** If you are new to **AAPS** and are setting up your basal rate **Profile** for the first time, please be aware that basal rates starting on a half-hour basis are not supported, and programmes on an hourly basis. For example, if you have a basal rate of 1.1 units which starts at 09:30 and has a duration of 2 hours ending at 11:30, it is not possible replicate this im **AAPS**. You will need to change this 1.1 unit basal rate to a time range of either 9:00-11:00 or 10:00-12:00. Even though the DASH hardware itself supports the 30 minute basal rate **Profile** increments, **AAPS** does support this feature.

**0U/h profile basal rates are NOT supported in AAPS** While the DASH does support a zero basal rate, since **AAPS** uses multiples of the user's **Profile** basal rate to determine automated treatment; it cannot function with a zero basal rate. A temporary zero basal rate can be achieved through the "Disconnect pump" function or through a combination of Disable Loop/Temp Basal Rate or Suspend Loop/Temp Basal Rate. The lowest basal rate allowed in **AAPS** is 0.05U/h.

## DASH in AAPS auswählen

There are **two ways**:

### Option 1: Neue Installation

When installing **AAPS** for the first time, the **Setup Wizard** will guide new users through key features and installation requirements for **AAPS**. Select “DASH” when you reach Pump selection.

![Enable_Dash_1](../images/DASH_images/Enable_Dash/Enable_Dash_1.png)

When in doubt you can also select “Virtual Pump” and select “DASH” later, after setting up **AAPS** (see option 2).

### Option 2: Der Konfigurations-Generator

On an existing installation you can select the **DASH** pump from the Config builder:

On the top-left hand corner **hamburger menu** select **Config Builder (1)**\ ➜\ **Pump**\ ➜\ **Dash**\ ➜\ **Settings Gear (3)** by selecting the **radio button (2)** titled **Dash**.

Selecting the **checkbox (4)** next to the **Settings Gear (3)** will allow the DASH menu to be displayed as a tab in the **AAPS** interface titled **DASH**. Checking this box will facilitate your access to the DASH commands when using **AAPS**.

**NOTE:** A faster way to access the [**Dash settings**](#dash-settings) can be found below in the DASH settings section of this document.

![Enable_Dash_3](../images/DASH_images/Enable_Dash/Enable_Dash_3.png)

### Überprüfung der Omnipod-Treiberauswahl

To verify that you have selected the DASH in **AAPS**, if you have checked the box (4), **swipe to the left** from the **Overview** tab, where you will now see a **DASH** tab on **AAPS**. If this box is left unchecked, you’ll find the DASH tab in the hamburger menu upper left.

![Enable_Dash_4](../images/DASH_images/Enable_Dash/Enable_Dash_4.jpg)

## DASH Konfiguration

Please **swipe left** to the **DASH** tab where you will be able to manage all pod functions (some of these functions are not enabled or visible without an active pod session):

![Refresh_LOGO](../images/DASH_images/Refresh_LOGO.png) 'Refresh' pod connectivity and status, be able to silence pod alarms when the pod beeps

![POD_MGMT_LOGO](../images/DASH_images/POD_MGMT_LOGO.png) 'Pod Management' (Activate, Deactivate, Play test beep, and Pod history)


### Pod aktivieren

1. Navigiere zur Registerkarte **DASH** und klicke auf den **POD MGMT (1)** Button und dann auf **Pod aktivieren (2)**.

![Activate_Pod_1](../images/DASH_images/Activate_Pod/Activate_Pod_1.png)

​    ![Activate_Pod_2](../images/DASH_images/Activate_Pod/Activate_Pod_2.png)

2. Der **Pod füllen** Bildschirm wird angezeigt. Fülle deinen neuen Pod mit mindestens 80 Einheiten Insulin und achte auf zwei Signaltöne, die anzeigen, dass der Pod bereit ist, gestartet zu werden. Beachte bei der Berechnung der gesamten Insulinmenge, welche Du in drei Tagen benötigst, dass zum Füllen des Pod 3 bis 10 IE benötigt werden.

![Activate_Pod_3](../images/DASH_images/Activate_Pod/Activate_Pod_3.png)    ![Activate_Pod_4](../images/DASH_images/Activate_Pod/Activate_Pod_4.jpg)

Ensure that the new pod and the phone running **AAPS** are within close proximity of each other and click the **Next** button.

**NOTE**: if the  error message below pops up _'Could not find an available pod for activation'_ (this can happen), do not panic. Click on the **Retry** button. In most situations activation will continue successfully.

![Activate_Pod_3](../images/DASH_images/Activate_pod_error.png)

3. Der Bildschirm **Initialisiere Pod** wird angezeigt und der Pod beginnt zu entlüften. (Du wirst ein Klicken hören, gefolgt von einer Reihe tickender Sounds, der Pod entlüftet sich selbst).  Ein grünes Häkchen wird nach erfolgreichem Befüllen angezeigt und der **Weiter** Button wird angezeigt. Klicke auf den **Weiter** Button, um die Initialisierung des Pods abzuschließen; anschließend wird der **Pod anlegen** Bildschirm angezeigt.

![Activate_Pod_5](../images/DASH_images/Activate_Pod/Activate_Pod_5.jpg)    ![Activate_Pod_6](../images/DASH_images/Activate_Pod/Activate_Pod_6.jpg)

4. Als nächstes bereite die Infusionsstelle für den neuen Pod vor. Wasche Dir die Hände, um jegliche Infektionsgefahr zu vermeiden. Reinige die Infusionsstelle entweder mit Wasser und Seife oder mit einem Alkoholtuch, um zu desinfizieren. Lasse die Hautl vollständig trockne, bevor Du weiter machst. Entferne die blaue Nadelkappe aus Kunststoff. Wenn Du anschließend etwas aus dem Pod herausragen siehst, beende den Prozess und starte mit einem neuen Pod. Wenn alles in Ordnung ist, ziehe das weiße Papier von der Klebefläche ab und setze den Pod auf die ausgewählte Stelle Deines Körpers. Wenn du fertig bist, klicke auf den **Weiter** Button.

![Activate_Pod_8](../images/DASH_images/Activate_Pod/Activate_Pod_8.jpg)

5. Das **Pod anlegen** Dialogfenster wird nun angezeigt. **NUR auf OK klicken, wenn Du bereit bist, die Kanüle einzuführen**.

![Activate_Pod_9](../images/DASH_images/Activate_Pod/Activate_Pod_9.jpg)

6. Nachdem Du **OK** gedrückt hast, kann es einige Zeit dauern, bis der DASH reagiert und die Kanülen legt (maximal 1-2 Minuten). Bitte hab etwas Geduld.

 *HINWEIS: Bevor die Kanüle eingesetzt wird, ist es ratsam, die Haut in der Nähe des Kanülensetzpunktes etwas zusammenzukneifen. Dies sorgt für eine sanfte Einführung der Nadel und verringert die Gefahr einer Verstopfung.*

![Activate_Pod_10](../images/DASH_images/Activate_Pod/Activate_Pod_10.png)    ![Activate_Pod_11](../images/DASH_images/Activate_Pod/Activate_Pod_11.jpg)

7. Es wird ein grünes Häkchen angezeigt, und der Button **Weiter** wird bei erfolgreicher Kanüleneinführung aktiviert. Klicke auf den **Weiter** Button.

![Activate_Pod_12](../images/DASH_images/Activate_Pod/Activate_Pod_12.jpg)

9. Der **Pod aktiviert** Bildschirm wird angezeigt. Klicke auf den grünen **Beenden** Button. Glückwunsch! Du hast jetzt eine neue Pod-Sitzung gestartet.

![Activate_Pod_13](../images/DASH_images/Activate_Pod/Activate_Pod_13.jpg)

10. Der Menübildschirm **Pod Management** sollte nun den **Aktiviere Pod (1)** Button als *deaktiviert* und den **Deaktiviere Pod (2)** Button als *aktiviert* angezeigen. Dies liegt daran, dass jetzt ein Pod aktiv ist und du keinen zusätzlichen Pod aktivieren kannst, ohne zuerst den aktuell aktiven Pod zu deaktivieren.

    Klicke auf den Zurück-Knopf auf deinem Smartphone, um zum Tab-Bildschirm **DASH** zurückzukehren, auf dem jetzt Informationen zu deiner aktiven Pod-Sitzung angezeigt werden, einschließlich der aktuellen Basalrate, Pod Reservoir Level, abgegebenem Insulin, Pod Fehlern und Warnungen.

    Weitere Details zu den angezeigten Informationen findest Du im [**DASH-Tab**](#dash-tab)-Abschnitt dieses Dokuments.

![Activate_Pod_14](../images/DASH_images/Activate_Pod/Activate_Pod_14.png)

​    ![Activate_Pod_15](../images/DASH_images/Activate_Pod/Activate_Pod_15.jpg)

It is good practice to export settings AFTER activating the pod. Export settings should be done at each pod change and once a month, copy the exported file to your internet drive. see [**Export settings Doc**](../Maintenance/ExportImportSettings.md).


(OmnipodDASH-deactivate-pod)=

### Pod deaktivieren

Under normal circumstances, the expected lifetime of a pod is three days (72 hours) and an additional 8 hours after the pod expiration warning for a total of 80 hours of pod usage.

To deactivate a pod (either from expiration or from a pod failure):

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

**Note**: During **Profile Switches**, DASH must suspend delivery before setting the new basal **Profile** as delivery can be suspended. Read [**Delivery suspended**](#delivery-suspended) in the troubleshooting section for more details.

Use this command to instruct the active, currently suspended pod to resume insulin delivery. After the command is successfully processed, insulin will resume normal delivery using the current basal rate based on the current time from the active basal **Profile**. The pod will again accept commands for bolus, **TBR**, and **SMB**.

1. Gehe zur Registerkarte **DASH** und stelle sicher, dass der **Pod Status (1)** **unterbrochen** anzeigt, drücke dann die **Abgabe fortsetzen (2)** Taste, um den aktuellen Pod anzuweisen, die normale Insulinabgabe fortzusetzen. Eine Nachricht **RESUME DELIVERY** wird im Feld **Pod Status (3)** angezeigt.

![Resume_1](../images/DASH_images/Resume/Resume_1.jpg)   ![Resume_2](../images/DASH_images/Resume/Resume_2.jpg)

2. Wenn der Befehl zur Fortsetzung der Insulinabgabe erfolgreich war, wird in einem Bestätigungsdialog die Nachricht **Insulinabgabe wieder aufgenommen.** angezeigt. Klicke **OK** um zu bestätigen und fortzufahren.

![Resume_3](../images/DASH_images/Resume/Resume_3.png)

3. In der Registerkarte **DASH** wird das Feld **Pod Status (1)** aktualisiert, es zeigt **In Betrieb** an und die **Insulinabgabe fortsetzen** Schaltfläche wird nicht mehr angezeigt.

![Resume_4](../images/DASH_images/Resume/Resume_4.jpg)

### Pod Alarme stummschalten

*NOTE - The SILENCE ALERTS button is only available on the **DASH** tab when the pod expiration or low reservoir alert has been triggered. If the SILENCE ALERTS button is not visible and you hear beep sounds from the pod, try to 'Refresh pod status'.*

The process below will show you how to acknowledge and dismiss pod beeps when the active pod time reaches the warning time limit before the pod expiration of 72 hours (3 days). This warning time limit is defined in the **Hours before shutdown** Dash alerts setting. The maximum life of a pod is 80 hours (3 days 8 hours), however Insulet recommends not exceeding the 72 hours (3 days) limit.

1. Wenn die definierte **Stunden bis zum Podende** Vorwarnzeit erreicht ist, gibt der Pod Warnungen aus, um Dir mitzuteilen, dass er sich seiner Ablaufzeit nähert und bald ein Wechsel des Pods erforderlich sein wird. Du kannst dies auf der Registerkarte **DASH** überprüfen; das **Pod läuft ab: (1)** Feld zeigt die genaue Zeit an, zu der der Pod ablaufen wird (72 Stunden nach der Aktivierung), und dieser Text wird **rot** angezeigt, wenn dieser Zeitpunkt überschritten ist. Unter dem Feld **aktive Pod-Warnungen (2)** wird die Statusmeldung **Pod läuft in Kürze ab** angezeigt. Dadurch wird auch die Schaltfläche **Alarme stummschalten (3)** angezeigt.

![ACK_alerts_1](../images/DASH_images/ACK_Alerts/ACK_ALERTS_1.png)

2. Gehe zur Registerkarte **DASH** und drücke den **Alarme stummschalten (2)** Button . **AAPS** sendet den Befehl an den Pod, um die Ablaufwarnung des Pods zu unterdrücken und aktualisiert das Feld **Pod Status (1)** mit **Aktive Alarme stummgeschaltet**.

![ACK_alerts_2](../images/DASH_images/ACK_Alerts/ACK_ALERTS_2.png)

3. Nach **erfolgreicher Stummschaltung** der Alarme werden **2 Pieptöne** vom aktiven Pod ausgegeben und ein Bestätigungsdialog zeigt die Nachricht **Aktive Alarme stummgeschaltet**. Drücke **OK**, um den Dialog zu bestätigen und zu schließen.


![ACK_alerts_3](../images/DASH_images/ACK_Alerts/ACK_ALERTS_3.png)

4. Wechsele zur Registerkarte **DASH**. Im Feld **Aktive Pod-Warnungen** wird keine Warnmeldung mehr angezeigt und der aktive Pod gibt keine Pieptöne zur Warnung mehr ab.

(OmnipodDASH-view-pod-history)=

### Anzeige Pod-Historie

This section explains how to review your active pod history and filter by different action categories. The pod history tool allows you to view the actions and results committed to your currently active pod during its three days (72 - 80 hours) life.

This feature is helpful in verifying boluses, TBRs and basal commands that were sent to the pod. The remaining categories are useful for troubleshooting issues and determining the order of events that occurred leading up to a failure.

*NOTE:* **Only the last command can be uncertain**. New commands *will not be sent* until the **last 'uncertain' command becomes 'confirmed' or 'denied'**. The way to 'fix' uncertain commands is to **'refresh pod status'**.

1. Gehe zur Registerkarte **DASH** und klicke auf **POD MGMT (1)** und dann auf dem **Pod Management** Bildschirm klicke auf den **Pod Historie (2)** Button.

![Pod_history_1](../images/DASH_images/Deactivate_Pod/Deactivate_Pod_1.jpg)



 ![Pod_history_2](../images/DASH_images/Pod_History/Pod_history_2.jpg)



2. Auf dem **Pod Historie** Bildschirm wird als Standard die Kategorie **Alle (1)** angezeigt. Sie zeigt **Datum und Zeit (2)** aller Pod **Aktionen (3)** und **Ergebnisse (4)** in umgekehrter chronologischer Reihenfolge. Drücke **2 Mal die Zurück-Taste** des Smartphones, um zur Registerkarte **DASH** im **AAPS**-Bildschirm zurückzukehren.


![Pod_history_3](../images/DASH_images/Pod_History/Pod_history_3.jpg) ![Pod_history_4](../images/DASH_images/Pod_History/Pod_history_4.jpg)

(OmnipodDASH-dash-tab)=

## Registerkarte DASH

Below is an explanation of the layout and meaning of the icons and status fields on the **DASH** tab in the main AAPS interface.

*NOTE: If any message in the **DASH** tab status fields report (uncertain), then you will need to press the Refresh button to clear it and refresh the pod status.*

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


![Refresh_Icon](../images/DASH_images/Refresh_LOGO.png) : Sends a refresh command to the active pod to update communication.

   * Verwende diese Option, um den Pod-Status zu aktualisieren und die Statusfelder zu erneuern, die den Text 'unsicher' enthalten.
   * Weitere Informationen findest Du im Abschnitt Fehlerbehebung.

![POD_MGMT_Icon](../images/DASH_images/POD_MGMT_LOGO.png) : Navigates to the Pod management menu.

![ack_alert_logo](../images/DASH_images/ack_alert_logo.png) : When pressed this will disable the pod alerts beeps and notifications (expiry, low reservoir..).

   * Der Button wird nur angezeigt, wenn die aktuelle Zeit des Pods nach dem Pod-Ablaufdatum liegt.
   * Nach erfolgreicher Bestätigung wird dieses Symbol nicht mehr angezeigt.

![RESUME_Icon](../images/DASH_images/DASH_tab_icons/RESUME_Icon.png) : Resumes the currently suspended insulin delivery in the active pod.

### Pod Management Menu

Below is the meaning of the icons on the **Pod Management** menu accessed by pressing **POD MGMT (1)** button from the **DASH** tab.

![DASH_Tab_2](../images/DASH_images/Deactivate_Pod/Deactivate_Pod_1.jpg)

 ![DASH_Tab_3](../images/DASH_images/DASH_Tab/DASH_Tab_3.png)

* 2 - [**Pod aktivieren**](#activate-pod) : Füllt und aktiviert einen neuen Pod.
* 3 - [**Pod deaktivieren**](#deactivate-pod) : Deaktiviert den derzeit aktiven Pod.
* 4 - **Testton abspielen**: Spielt einen einzelnen Test Piep auf dem Pod ab.
* 5 - [**Pod Historie**](#view-pod-history) : Zeigt den Aktivitätsverlauf des aktiven Pods an.

(DanaRS-Insulin-Pump-dash-settings)=

## DASH-Einstellungen

The Dash driver settings are configurable from the top-left hand corner **hamburger menu** under **Config Builder (1)**\ ➜\ **Pump**\ ➜\ **Dash**\ ➜\ **Settings Gear (3)** by selecting the **radio button (2)** titled **Dash**. Selecting the **checkbox (4)** next to the **Settings Gear (3)** will allow the Dash menu to be displayed as a tab in the **AAPS** interface titled **DASH**.

![Dash_settings_1](../images/DASH_images/Enable_Dash/Enable_Dash_3.png)



**NOTE:** A faster way to access the **Dash settings** is by accessing the **3 dot menu (1)** in the upper right hand corner of the **DASH** tab and selecting **Dash preferences (2)** from the dropdown menu.

![Dash_settings_3](../images/DASH_images/Dash_settings/Dash_settings_3.png)

The settings groups are listed below; you can enable or disable via a toggle switch for most entries described below:

*NOTE: An asterisk (\*) denotes the default setting is enabled.*

### Bestätigungstöne

![Dash_settings_4](../images/DASH_images/Dash_settings/Dash_settings_4.jpg)

Provides confirmation beeps from the pod for bolus, basal, SMB, and TBR delivery and changes.

* **Bolus-Piep aktiviert:** Aktiviert oder deaktiviert Bestätigungstöne bei Abgabe eines Bolus.
* **Basal-Piep aktiviert:** Aktiviert oder deaktiviert Bestätigungstöne bei Einstellung einer neuen, Abbruch der aktiven oder Änderung der aktuellen Basalrate.
* **SMB-Piep aktiviert:** Aktiviert oder deaktiviert Bestätigungstöne bei Abgabe eines SMB.
* **TBR-Piep aktiviert:** Aktiviert oder deaktiviert Bestätigungstöne, bei Setzen oder Abbruch einer TBR.

### Alarme

![Dash_settings_5](../images/DASH_images/Dash_settings/Dash_settings_5.jpg)

Provides **AAPS** alerts for pod expiration, shutdown, low reservoir based on the defined threshold units.

*Note an AAPS notification will ALWAYS be issued for any alert after the initial communication with the pod since the alert was triggered. Dismissing the notification will NOT dismiss the alert UNLESS automatically acknowledge Pod alerts is enabled. To MANUALLY dismiss the alert you must visit the **DASH** tab and press the **Silence ALERTS button**.*

* **Ablauferinnerung aktiviert:** Aktiviere oder deaktiviere die Pod-Ablauferinnerung, die ausgelöst wird, wenn die festgelegte Anzahl von Stunden vor dem Podende erreicht ist.
* **Stunden bis zum Podende:** Legt die Anzahl der Stunden vor der Abschaltung des aktiven Pods fest, die den Alarm zur Pod-Ablauferinnerung auslöst.
* **Warnung niedriger Reservoirstand aktiviert:** Aktiviere oder deaktiviere eine Warnung für das Limit für den niedrigen Reservoirstand der verbleibenden Einheiten des Pods, wie es im Feld 'Anzahl der Einheiten' definiert ist.
* **Anzahl der Einheiten:** Die Anzahl der verbleibenden Einheiten, bei denen der Alarm für den niedrigen Reservoirstand ausgelöst werden soll.

### Benachrichtigungen

![Dash_settings_6](../images/DASH_images/Dash_settings/Dash_settings_6.jpg)

The Notification section allows the user to so select their preferred notifications and audible phone alerts when it is uncertain if TBR, SMB, or bolus, and delivery suspended events were successful.

*NOTE: These are notifications only, no audible beep alerts are made.*

* **Ton für unsichere TBR-Benachrichtigung aktiviert:** Aktiviere oder deaktiviere diese Einstellung, um einen akustischen Alarm und eine visuelle Benachrichtigung auszulösen, wenn **AAPS** unsicher ist, ob eine TBR erfolgreich gesetzt wurde.
* **Ton für unsichere SMB-Benachrichtigung aktiviert:** Aktiviere oder deaktiviere diese Einstellung, um einen akustischen Alarm und eine visuelle Benachrichtigung auszulösen, wenn **AAPS** unsicher ist, ob ein SMB erfolgreich abgegeben wurde.
* **Ton für unsichere Bolus-Benachrichtigung aktiviert:** Aktiviere oder deaktiviere diese Einstellung, um einen akustischen Alarm und eine visuelle Benachrichtigung auszulösen, wenn **AAPS** unsicher ist, ob ein Bolus erfolgreich abgegeben wurde.
* **Ton bei unterbrochener Abgabe aktiviert:** Aktivieren oder deaktivieren Sie diese Einstellung, um eine akustische Benachrichtigung und visuelle Benachrichtigung auszulösen, wenn die Unterbrechung der Insulinabgabe erfolgreich durchgeführt wurde.

## Aktionen (AKT) Tab

This tab is well documented in the main**AAPS**documentation but there are a few items on this tab that are specific to how the DASH differs from tube based pumps, especially after the processes of applying a new pod.

1. Gehe von der **AAPS**-Übersicht zur Registerkarte **Aktionen (AKT)**.

2. Unter dem Abschnitt **Careportal (1)** werden in der Rubrik für **Insulin** und **Kanüle** die zugehörigen Felder für das **Alter** **nach jedem Wechsel** auf 0 Tage und 0 Stunden zurückgesetzt. Das liegt daran, wie die Omnipod-Pumpe gebaut ist und funktioniert. Da der Pod die Kanüle direkt in die Haut am Ort der Pod-Anwendung einführt, wird bei Omnipod-Pumpen kein herkömmlicher Schlauch verwendet. *Nach einem Podwechsel wird das Alter jedes dieser Werte daher automatisch auf Null zurückgesetzt.* **Das Alter der Pumpenbatterie** wird nicht angegeben, da die Batterie im Pod immer länger hält, als die Lebensdauer des Pods (maximal 80 Stunden). Die **Pumpenbatterie** und das **Insulinreservoir ** sind immer im Pod enthalten.

![ACT_1](../images/DASH_images/Actions_Tab/ACT_1.png)

### Level

**Insulin Level**

Insulin level displayed is the amount reported by DASH. However, the pod only reports the actual insulin reservoir level when it is below 50 units. Until then “Above 50 units” will be displayed. The amount reported is not exact: when the pod reports ‘empty’ in most cases the reservoir will still have some additional units of insulin left. The DASH overview tab will display as described the below:

  * **Mehr als 50 IE verbleibend** - Der Pod meldet mehr als 50 Einheiten im Reservoir.
  * **Unter 50 Einheiten** - Die Menge an Insulin, die noch im Reservoir vorhanden ist, wie vom Pod gemeldet.

Additional note:
  * **SMS** - Aus dem Pod übernommener Wert oder 50+ IE für SMS-Antworten
  * **Nightscout** - Lädt den Wert 50 hoch, wenn mehr als 50 Einheiten angezeigt werden (Nightscout Version 14.07 und älter).  Neuere Versionen melden einen Wert von 50+, wenn sich mehr als 50 Einheiten im Reservoir befinden.

## Problembehandlung

### Insulinabgabe unterbrochen

  * Es gibt keine Unterbrechen-Taste mehr. Wenn Du die Insulinabgabe unterbrechen möchtest, kannst Du eine Null-**TBR** für x Minuten setzen.
  * Während eines **Profilwechsels** muss der DASH die Insulinabgabe unterbrechen, bevor das neue Basal-**Profil** gesetzt wird. Wenn die Kommunikation zwischen den beiden Befehlen fehlschlägt, kann die Insulinabgabe unterbrochen bleiben. Wenn das passiert:
     - Es gibt dann keine Insulinabgabe; dies schließt Basal, SMB, manuelle Boli usw. ein.
     - Es kann eine Benachrichtigung geben, dass einer der Befehle unbestätigt blieb: Dies hängt davon ab, wann der Fehler aufgetreten ist.
     - **AAPS** wird alle 15 Minuten versuchen, das neue Basalprofil zu setzen.
     - **AAPS** wird alle 15 Minuten darüber benachrichtigen, dass die Insulinabgabe unterbrochen ist, sofern die Abgabe noch immer unterbrochen ist (Insulinabgabe konnte nicht gestartet werden).
     - Die [**Insulin fortsetzen**](#resuming-insulin-delivery) Schaltfläche wird aktiv, wenn die Lieferung manuell fortgesetzt werden soll.
     - Wenn **AAPS** die Abgabe nicht alleine fortsetzen kann (dies geschieht, wenn der Pod nicht erreichbar ist, der Ton stumm geschaltet ist, etc.), beginnt der Pod für 3 Minuten jede Minute viermal zu piepen. Das wird, wenn die Abgabe für mehr als 20 Minuten ausgesetzt ist, alle 15 Minuten wiederholt.
  * Für unbestätigte Befehle sollte "Aktualisieren" des Podstatus diese bestätigen oder ablehnen.

**Note:** When you hear beeps from the pod, do not assume that delivery will continue without checking the phone, delivery might stay suspended, **so you need to check !**

### Pod Fehler

Pods fail occasionally due to a variety of issues, including hardware issues with the Pod itself. It is best practice not to call these into Insulet, since AAPS is not an approved use case. A list of fault codes can be [**found here**](https://github.com/openaps/openomni/wiki/Fault-event-codes) to help determine the cause.

### Verhindere Pod Fehler 49

This failure is related to an incorrect pod state for a command or an error during an insulin delivery command. This is when the driver and Pod disagree on the actual state. The Pod (out of a built-in safety measure) then reacts with an unrecoverable error code 49 (0x31) ending up with what is know as a “screamer”: the long irritating beep that can only be stopped by punching a hole at the appropriate location at the back of the Pod. The exact origin of a “49 pod failure” often is hard to trace. In situations that are suspected for this failure to occur (for instance on application crashes, running a development version or re-installation).

### Pumpe nicht erreichbar Alarme

When no communication can be established with the pod for a preconfigured time a “Pump unreachable” alert will be raised. Pump unreachable alerts can be configured by going to the top right-hand side three-dot menu, selecting **Preferences**\ ➜\ **Local Alerts**\ ➜\ **Pump unreachable threshold [min]**. Recommended value is alerting after **120** minutes.

### Exporteinstellungen

Exporting **AAPS** settings enables you to restore all your settings, and maybe more importantly, all your Objectives. You may need to restore settings to the “last known working situation” or after uninstalling/reinstalling **AAPS** or in case of phone loss, reinstalling on the new phone.

Note: The active pod information is included in the exported settings. If you import an "old" exported file, your actual pod will "die". There is no other alternative. In some cases (like a _programmed_ phone change), you may need to use the exported file to restore **AAPS'** settings **while keeping the current active Pod**. In this case it is important to only use the recently exported settings file containing the pod currently active.

**It is good practice to do an export immediately after activating a pod**. This way you will always be able to restore the current active pod in case of a problem. For instance when moving to another backup phone.

Regularly copy your exported settings to a safe place (as a cloud drive) that can be accessible by any phone when needed (e.g. in case of a phone loss or factory reset of the actual phone).

### Importeinstellungen

**WARNING** Please note that importing settings will possibly import an outdated Pod status. As a result, there is a risk of losing the active Pod! (see **Exporting Settings**). It is better to only try it when no other options are available.

When importing settings with an active Pod, make sure the export was done with the currently active pod.

**Importing while on an active Pod:** (you risk losing the Pod!)

1. Stelle sicher, dass Du Einstellungen importierst, die kürzlich mit dem aktuell aktiven Pod exportiert wurden.
2. Einstellungen importieren
3. Alle Voreinstellungen kontrollieren.

**Importing (no active Pod session)**

1. Importieren aller kürzlichen Exporte sollte funktionieren (siehe oben)
2. Einstellungen importieren
3. Alle Voreinstellungen kontrollieren.
4. You may need to **Deactivate** the "non existing" pod if the imported settings included any active pod data.

### Importieren von Einstellungen, die den Pod-Status von einem inaktiven Pod enthalten

When importing settings containing data for a Pod that is no longer active, AAPS will try to connect with it, which will obviously fail. You can not activate a new Pod in this situation.

To remove the old pod session “try” to de-activate the Pod. The de-activation will fail. Select “Retry”. After the second or third retry you will get the option to remove the pod. Once the old pod is removed you will be able to activate a new pod.

### Neuinstallation von AAPS

When uninstalling**AAPS** you will lose all your settings, objectives and the current Pod session. To restore them make sure you have a recent exported settings file available!

When on an active Pod, make sure that you have an export for the current pod session or you will lose the currently active pod when importing older settings.

1. Exportiere deine Einstellungen und bewahre eine Kopie an einem sicheren Ort auf.
2. Deinstalliere **AAPS** und starte Dein Smartphone neu.
3. Installiere die neue **AAPS**-Version.
4. Einstellungen importieren
5. Überprüfe alle Einstellungen (optional Einstellungen erneut importieren).
6. Aktiviere einen neuen Pod.
7. Anschließend: Aktuelle Einstellungen exportieren.

### AAPS auf eine neuere Version aktualisieren

In most cases there is no need to uninstall. You can do an “in-place” install by starting the installation for the new version. This is also possible when on an active Pod  session.

1. Exportiere Deine Einstellungen.
2. Installiere die neue **AAPS**-Version.
3. Überprüfe, ob die Installation erfolgreich war.
4. Verbinde den Pod wieder oder aktiviere einen neuen Pod.
5. Anschließend: Aktuelle Einstellungen exportieren.

### Omnipod-Treiberwarnungen

Please note that the Omnipod Dash driver presents a variety of unique alerts on the **Overview tab**, most of them are informational and can be dismissed while some provide the user with an action to take to resolve the cause of the triggered alert. A summary of the main alerts that you may encounter is listed below:

* Keine aktive Pod-Sitzung erkannt. Dieser Alarm kann vorübergehend durch Drücken von **Schlummern** deaktiviert werden, wird aber weiterhin ausgelöst, solange kein neuer Pod aktiviert wurde. Einmal aktiviert, wird dieser Alarm automatisch ausgeschaltet.
* Pod unterbrochen Hinweis, dass der Pod angehalten wurde.
* Setzen des **Basalprofils** fehlgeschlagen: Insulinabgabe könnte ausgesetzt sein! Bitte aktualisiere den Pod-Status manuell auf der Registerkarte Omnipod und setze die Übertragung bei Bedarf fort. Hinweis, dass die Einstellung des Pod-**Basalprofils** fehlgeschlagen ist und Du auf der Registerkarte DASH auf *Aktualisieren* drücken musst.
* Es kann nicht überprüft werden, ob der **SMB**-Bolus erfolgreich war. Wenn du sicher bist, dass der Bolus nicht erfolgreich war, solltest du den SMB-Eintrag manuell auf der Registerkarte Behandlungen entfernen. Im Falle einer Nachricht, dass die Abgabe eines **SMB**-Bolus nicht geprüft werden konnte, musst Du auf der Registerkarte DASH das Feld *Letzter Bolus* überprüfen, um zu sehen, ob der **SMB**-Bolus durchgelaufen ist, und wenn nicht, den Eintrag auf der Registerkarte „Behandlungen“ entfernen.
* Unsicher, ob die "Ereignis Bolus/TBR/SMB" abgeschlossen wurde. Bitte überprüfe manuell, ob sie erfolgreich war.

## Wo ich Hilfe zum DASH finde

All of the development work for the DASH is done by the community on a **volunteer** basis; please keep this in mind and use the following guidelines before requesting assistance:

-  **Level 0:** Lies den entsprechenden Abschnitt dieser Dokumentation um sicherzustellen, dass du verstehst, wie die Funktion, mit der Du Schwierigkeiten hast, funktionieren soll.
-  **Level 1:** Wenn Du immer noch Probleme, die Du mit diesem Dokument nicht lösen kannst, haben solltest, gehe **Discord-**Kanal *#AAPS*. Nutze dazu [diesen Einladungslink <https://discord.gg/4fQUWHZ4Mw>](https://discord.gg/4fQUWHZ4Mw).
-  **Level 2:** Durchsuche bereits bestehende 'Issues', um zu sehen, ob Dein Problem bereits in den [Issues](https://github.com/nightscout/AndroidAPS/issues) gemeldet wurde. Falls es bereits vorhanden ist, bestätige/kommentiere/ergänze bitte Informationen zu Deinem Problem. Wenn nicht, erstelle bitte ein [neues Issue](https://github.com/nightscout/AndroidAPS/issues) und füge [Deine Protokolldateien](../GettingHelp/AccessingLogFiles.md) (Logs) hinzu.
-  **Sei geduldig - die meisten Mitglieder unserer Community sind gutmütige Freiwillige und die Lösung von Problemen erfordert oft Zeit und Geduld von Nutzern und Entwicklern.**
