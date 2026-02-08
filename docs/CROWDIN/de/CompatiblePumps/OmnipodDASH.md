# Omnipod DASH

Diese Anleitung hilft bei der Konfiguration der seit **AAPS**-Version 3.0 integrierten Pumpengeneration des **Omnipod DASH** **(NICHT des Omnipod Eros)**.

## Omnipod DASH Spezifikationen

Hier finden sich die besonderen Merkmale des **Omnipod DASH** („DASH“) und dessen Unterschiede zum **Omnipod EROS** („EROS“):

- Die DASH Pods sind an einer **blauen Nadelkappe** zu erkennen (EROS haben eine farblose Nadelkappe). Die Pods sind ansonsten in Bezug auf deren Abmessungen identisch.
- DASH benötigt keinen BLE-Link ein sog. Bridge Device (es wird KEIN RileyLink, OrangeLink oder EmaLink gebraucht).
- Die Bluetooth-Verbindung des DASH wird nur genutzt, wenn ein Befehl (z. B. ein Bolus) gesendet wird. Die Verbindung wird unmittelbar danach wieder getrennt.
- Keine Verbindungsfehler „Verbindung zum Gerät / Pod“ mehr beim DASH.
- **AAPS** wartet zum Senden der Befehle bis der Pod erreichbar ist.
- Bei Aktivierung des Pods wird **AAPS** den neuen DASH-Pod finden und sich mit ihm verbinden.
- Erwartete Reichweite zum Smartphone: 5-10 Meter (kann individuell verschieden sein; „YMMV“).

(omnipod-dash-constraints)=

## Bekannte Omnipod DASH AAPS-Einschränkungen/Probleme
- Android 16 benötigt eine **AAPS**-Version 3.3.2.1 oder höher.
- Generell wird empfohlen, **AAPS** auf Android 14 oder 16 auszuführen. Die Community hat im Zusammenhang mit Android 15 viele [Probleme](https://github.com/nightscout/AndroidAPS/issues/3471) gemeldet. Wenn Du Android 15 nutzt, wirst Du sehr wahrscheinlich das „Bluetooth Bonding“ aktivieren müssen, um Pods erfolgreich aktivieren und nutzen zu können. Schaue im Abschnitt [Allgemeine Problembehandlung](../GettingHelp/GeneralTroubleshooting.md) nach, wenn Du mehr über die „Bonding Einstellungen“ erfahren möchtest.
- Beim Omnipod Dash können zu häufige Änderungen der Basalrate zu [Problemen](https://github.com/nightscout/AndroidAPS/issues/4158) bei der Basalabgabe führen. Um das Problem zu umgehen, wenn Du **SMB**s nutzt, setzte das Änderungsintervall auf 5 Minuten oder länger.
- Dash unterstützt nur Basalraten in 0,05 IE/h Schritten. Solltest Du versuchen in Deinem **AAPS-Profil** Basalraten mit 0,01 Schritten zu hinterlegen, wirst Du keine Warnmeldung von AAPS erhalten. Der Pod wird die Basalrate auf 0,05 Schritte aufrunden. Wenn Du Dir „POD MGMT/Pod History“ anschaust, wirst Du sehen, dass ein 0,05 Basal gesetzt wurde. Dies bedeutet auch, dass die kleinst mögliche Basalrate des DASH in **AAPS** 0,05 IE/h beträgt.
- Wenn Du die Einstellungen mit einem aktiven Pod exportierst, enthält die Datei den Pod-Aktivierungsstatus. Wechsel dann auf einen neuen Pod und stelle die Einstellungen mit der Exportdatei wieder her. Damit hast Du sowohl die alte Pod-Aktivierung wieder hergestellt, als auch die neue Aktivierung gelöscht. Aus diesem Grund empfehlen wir die Einstellungen nach jeder Pod-Aktivierung zu exportieren, um eine Wiederherstellung des Pod-Aktivierungsstatus zu ermöglichen, falls etwas mit Deinem Rigg passiert.
- Beim Setzen eines neuen Basalprofils unterbricht der DASH die Insulinabgabe, bevor das neue Basalprofil **Profil** gesetzt wird. Wenn es eine Kommunikationsstörung oder einen Fehler gibt, wird das Basalprofil nicht automatisch neu gestartet. Mehr Details hierzu findest Du im Abschnitt [Insulinabgabe fortsetzen](#omnipod-dash-resuming-insulin-delivery).
- Wenn Alarme konfiguriert sind und der Pod bald ablaufen wird, wird der Pod solange piepen, bis die Alarme stumm geschaltet werden. Der Abschnitt [Pod-Alarme stummschalten](#omnipod-dash-silencing-pod-alerts) enthält detailliertere Informationen.
- Es gibt eine Reihe von bekannten Bluetooth-Auffälligkeiten, die Probleme mit der Pod-Aktivierung verursachen können. Lies im Abschnitt [Bluetooth-Fehlerbehebung](../GettingHelp/BluetoothTroubleshooting.md) nach, um mehr über die Lösungsmöglichkeiten zu diesen Problemen zu erfahren.

(hardware-software-requirements)=

(omnipod-dash-hardware-software-requirements)=
## Hardware- und Software-Anforderungen

- Omnipod DASH kann an der blauen Nadelkappe erkannt werden.

![Omnipod Pod](../images/DASH_images/Omnipod_Pod.png)

- **Ein kompatibles Android-Smartphone** mit Bluetooth Low Energy (BLE) (siehe [Smartphones](../Getting-Started/Phones.md) für weitere Informationen). Zusätzlich helfen Dir die folgenden Informationen bei der erfolgreichen Aktivierung und Nutzung des DASH auf einem kompatiblen Smartphone:
    -  Der **AAPS** Omnipod Dash „Treiber“ verbindet sich über Bluetooth mit dem DASH Pod.  
      **AAPS** baut zum Senden eines Kommandos (z. B. eines Bolus) eine Bluetooth-Verbindung auf. Nach dem Senden wird die Bluetooth-Verbindung sofort wieder getrennt.
       - **HINWEIS:**
         - Die Bluetooth-Verbindung kann durch andere mit dem Smartphone, auf dem **AAPS** läuft, verbundene Bluetooth-Geräte (z. B. Ear Buds) gestört oder sogar unterbrochen werden. Derartige Geräte können Verbindungsfehler oder Pod-Aktivierungsprobleme auf einigen Smartphone-Modellen verursachen. Es empfiehlt sich, die Liste der [getesteten Hardware-Setups](https://docs.google.com/spreadsheets/u/1/d/e/2PACX-1vScCNaIguEZVTVFAgpv1kXHdsHl3fs6xT6RB2Z1CeVJ561AvvqGwxMhlmSHk4J056gMCAQE02sAWJvT/pubhtml?gid=683363241&single=true) im Vorfeld auf Konfigurationen zu prüfen, die sich bewährt haben, bevor Du auf ein neues Setup um Deinen Omnipod DASH herum umsteigst.
         - Es gibt eine Reihe von bekannten Bluetooth-Auffälligkeiten, die Probleme mit der Pod-Aktivierung verursachen können. Im Abschnitt [Fehlerbehebung](#troubleshooting) findest Du einige Hinweise zu Bluetooth-Problemen, mit einer dedizierten Sektion zu den [Bluetooth-Problemen](#omnipod-dash-bluetooth-related-issues).
    - Für **Android 15** oder darunter: Du **MUSST** die **AAPS- Version 3.0 oder neuer** nutzen. Verwende dazu die [**AAPS erstellen**](../SettingUpAaps/BuildingAaps.md)-Anweisungen. Es ist dabei immer sinnvoll die neueste veröffentlichte Version nutzen.
    - Für **Android 16**: Du **MUSST** die **Version 3.3.2.1 oder neuer** mit den zugehörigen [**AAPS erstellen**](../SettingUpAaps/BuildingAaps.md)-Anweisungen nutzen, da sich mit Android 16 die Bluetooth-Funktionsweise geändert hat. Jede Version vor 3.3.2.1 wird wahrscheinlich zu Pod-Fehlern und/oder Aktivierungs-[Problemen](https://github.com/nightscout/AndroidAPS/issues/3471) führen.
- Ein unterstützter [**Kontinuierlicher Glucose Monitor (CGM)**](../Getting-Started/CompatiblesCgms.md)

In den nachfolgenden Anweisungen wird erläutert, wie man eine neue Pod-Sitzung mit **AAPS** aktiviert. Du solltest so lange warten, bis Dein aktueller Pod unmittelbar vor dem Laufzeitende ist, da Du mit **AAPS** ein neuen Pod aktivieren musst. Sobald ein Pod deaktiviert ist, kann er nicht wieder verwendet oder wieder aktiviert werden. Die Deaktivierung ist endgültig.

## Bevor Du anfängst

Stelle sicher, dass Du die vorliegende Anleitung vollständig gelesen und verstanden hast, Du den Abschnitt **Bevor Du anfängst** gelesen und verstanden hast, sowie  **[Omnipod und AAPS Einschränkungen und Probleme](#omnipod-dash-constraints)** gelesen hast, um nicht in bekannte Problem zu laufen.

### **SAFETY FIRST** - Du **SOLLTEST NICHT** versuchen, **AAPS** mit einem Pod zu verbinden, bevor Du nicht die folgenden Dinge zusammenhast:
1. Zusätzliche Pods (3 oder mehr als Ersatz)
2. Ersatz-Insulin und Pen-Equipment
3. A working Omnipod PDM (In case **AAPS** fails)
4. Supported Phones are a must! (See [Hardware/Software Requirements](#hardware-software-requirements))
5. Correct version of AAPS built and installed

### **Your Omnipod Dash PDM will become redundant after the AAPS Dash driver activates your pod.**
- Before using **AAPS** you or your care giver would have had to manage the Pod using the Omnipod PDM (or in some regions a Phone app) to send commands to your DASH (e.g a Bolus).
- The DASH can only facilitate a single Bluetooth device (e.g PDM or Phone) connection to manage and send commands.
- The device that successfully activates the pod is the only device allowed to communicate with that Pod from that point forward. This means that once you activate a DASH with your Android phone using **AAPS**, **you will no longer be able to use your PDM with that pod!** For the time that Pod is active the **AAPS** Dash driver running on your Android phone is now the new PDM for your pod.
- **DO NOT Throw away your PDM!** It is recommended to keep it around as a backup and for emergencies, for instance when your phone gets lost or **AAPS** is not working correctly.

### Your pod **WILL NOT** stop delivering insulin when it is not connected to AAPS.
Default basal rates are programmed on the pod on activation as defined in the current active [**Profile**](../SettingUpAaps/YourAapsProfile.md).  
As long as **AAPS** is operational it will send basal rate adjustment commands that run for a maximum of 120 minutes.  
When for some reason the pod does not receive any new commands (for instance because communication was lost due to Pod ➜ phone distance) the pod will automatically fall back to default basal rates as defined in your [**Profile**](../SettingUpAaps/YourAapsProfile.md).

### **AAPS Profile(s) do not support 30 minute basal rate time frames**
If you are new to **AAPS** and are setting up your basal rate [**Profile**](../SettingUpAaps/YourAapsProfile.md) for the first time, please be aware that basal rates starting on a half-hour basis are not supported. For example, on your Omnipod PDM, if you have a basal rate of 1.1 units which starts at 09:30 and has a duration of 2 hours ending at 11:30, it is not possible replicate this exact basil **Profile** in **AAPS**.  
You will need to change this 1.1 unit basal rate to a time range of either 9:00-11:00 or 10:00-12:00. Even though the DASH hardware itself supports the 30 minute basal rate **Profile** increments, **AAPS** does NOT support this feature.

### **0U/h Profile basal rates are NOT supported in AAPS**
While the DASH does support a zero basal rate, **AAPS** uses multiples of the user's **Profile** basal rate to determine automated treatment; it cannot function with a zero basal rate.  
Instead a temporary zero basal rate can be achieved through the "Disconnect pump" function, or through a combination of Disable Loop/Temp Basal Rate or Suspend Loop/Temp Basal Rate.  
**NOTE:** The lowest basal rate allowed by the DASH in **AAPS** is 0.05U/h.

## DASH in AAPS auswählen

There are **two** available options to configure Omnipod in **AAPS**:

### Option 1: New installations

When installing **AAPS** for the first time, the **Setup Wizard** will guide new users through key features and installation requirements for **AAPS**.  
Select “DASH” when you reach Pump selection.

![Enable_Dash_1](../images/DASH_images/Enable_Dash/Enable_Dash_1.png)

When in doubt you can also select “Virtual Pump” and select “DASH” later, after setting up **AAPS** (See Option 2).

(omnipod-dash-option-2-config-builder)=
### Option 2: The Config Builder

Bei einer vorhandenen Installation von AAPS kannst Du **DASH** als Pumpe unter "Konfiguration" auswählen:

On the top-left hand corner **hamburger menu** select **Config Builder (1)** ➜ **Pump** ➜ **Dash** ➜ **Settings Gear (3)** by selecting the **radio button (2)** titled **Dash**.

Wenn Du das **Kontrollkästchen (4)** neben dem **Zahnrad (3)** wählst, wird das DASH-Menü als Registerkarte im **AAPS**-Interface mit dem Titel **DASH** als eigener Tab angezeigt. Wenn Du dieses Kästchen aktivierst, wird der Zugriff auf die DASH-Befehle bei der Verwendung von **AAPS** erleichtert.

**NOTE:** A faster way to access the [**Dash settings**](#omnipod-dash-settings) can be found below in the DASH settings section of this document.

![Enable_Dash_3](../images/DASH_images/Enable_Dash/Enable_Dash_3.png)

### Verification of Omnipod Driver Selection

To verify that you have selected the DASH in **AAPS**, if you have **checked the box (4)**, **swipe to the left** from the **Overview** tab, where you will now see a **DASH** tab on **AAPS**. Wenn diese Option nicht aktiviert ist, finden Sie die DASH Registerkarte links oben im Hamburger-Menü.

![Enable_Dash_4](../images/DASH_images/Enable_Dash/Enable_Dash_4.jpg)

## DASH Konfiguration

**Swipe left** to the [**DASH tab**](#omnipod-dash-tab) where you will be able to manage all pod functions (some of these functions are not enabled or visible without an active pod session):

![Refresh_LOGO](../images/DASH_images/Refresh_LOGO.png) „Aktualisieren“ von Pod-Verbindungen und -Status, Abstellen von Alarmen, wenn der Pod piept

![POD_MGMT_LOGO](../images/DASH_images/POD_MGMT_LOGO.png)   „Pod-Management“ (Aktivieren, Deaktivieren, Testsignal und Pod-Historie)

(omnipod-dash-activate-pod)=

### Activate Pod

1. Navigiere zur Registerkarte **DASH** und klicke auf den **POD MGMT (1)** Button und dann auf **Pod aktivieren (2)**.

   ![Activate_Pod_1](../images/DASH_images/Activate_Pod/Activate_Pod_1.png)

   ![Activate_Pod_2](../images/DASH_images/Activate_Pod/Activate_Pod_2.png)

2. Der **Pod füllen** Bildschirm wird angezeigt. Fill a new pod with **at least 80 units** of insulin and listen for two beeps indicating that the pod is ready to be primed.

   ***NOTE:** When calculating the total amount of insulin you need for 3 days, please take into account that priming the pod will use about 3-10 units.*

   ![Activate_Pod_3](../images/DASH_images/Activate_Pod/Activate_Pod_3.png)

   ![Activate_Pod_4](../images/DASH_images/Activate_Pod/Activate_Pod_4.jpg)

   Stelle sicher, dass der neue Pod und das Smartphone, auf dem **AAPS** läuft, nah beieinander liegen und klicke auf den Button **Weiter**.

   ***HINWEIS**: wenn die Fehlermeldung _„Konnte keinen verfügbaren Pod für die Aktivierung finden“_ (das kann passieren) erscheint: keine Panik. Klicke auf **Erneut** bzw. <0>Wiederholen</0>. In den meisten Fällen wird die Aktivierung dann erfolgreich fortgesetzt.*

   ![Activate_Pod_3](../images/DASH_images/Activate_pod_error.png)

3. On the **Initialize Pod** screen, the pod will begin priming (you will hear a click followed by a series of ticking sounds as the pod primes itself).  
   A green checkmark will be shown upon successful priming, and the **Next** button will become enabled. Klicke auf den **Weiter** Button, um die Initialisierung des Pods abzuschließen; anschließend wird der **Pod anlegen** Bildschirm angezeigt.

   ![Activate_Pod_5](../images/DASH_images/Activate_Pod/Activate_Pod_5.jpg)    ![Activate_Pod_6](../images/DASH_images/Activate_Pod/Activate_Pod_6.jpg)

4. Als nächstes bereite die Infusionsstelle für den neuen Pod vor. Wasche Dir die Hände, um jegliche Infektionsgefahr zu vermeiden. Clean the infusion site by either using soap and water or an alcohol wipe to disinfect and let the skin air dry completely before proceeding.   
   If you get skin irritation from the adhesive consider using a Barrier Wipe or Barrier Spray.

   Entferne die blaue Nadelkappe aus Kunststoff. If you see something that sticks out of the pod or it looks unusual, **STOP** the process and start with a new pod. If everything looks **OK**, proceed to take off the white paper backing from the adhesive and stick the pod to the selected site on your body.

   Wenn du fertig bist, klicke auf den **Weiter** Button.

   ![Activate_Pod_8](../images/DASH_images/Activate_Pod/Activate_Pod_8.jpg)

6. Das **Pod anlegen** Dialogfenster wird nun angezeigt. **click on the OK button ONLY if you are ready to deploy the cannula!**

   ![Activate_Pod_9](../images/DASH_images/Activate_Pod/Activate_Pod_9.jpg)

7. Nachdem Du **OK** gedrückt hast, kann es einige Zeit dauern, bis der DASH reagiert und die Kanülen legt (maximal 1-2 Minuten). **Be patient!**

   ***NOTE:** Before the cannula is inserted, it is good practice to pinch the skin near the cannula insertion point. Dies sorgt für eine sanfte Einführung der Nadel und verringert die Gefahr einer Verstopfung.*

   ![Activate_Pod_10](../images/DASH_images/Activate_Pod/Activate_Pod_10.png)    ![Activate_Pod_11](../images/DASH_images/Activate_Pod/Activate_Pod_11.jpg)

8. A green checkmark is shown on the screen, and the **Next** button becomes available to select upon successful cannula insertion.   
   Click on the **Next** button.

   ![Activate_Pod_12](../images/DASH_images/Activate_Pod/Activate_Pod_12.jpg)

1. Der **Pod aktiviert** Bildschirm wird angezeigt.

   Klicke auf den grünen **Beenden** Button.

   Glückwunsch! Du hast jetzt eine neue Pod-Sitzung gestartet.

   ![Activate_Pod_13](../images/DASH_images/Activate_Pod/Activate_Pod_13.jpg)

2. Der Menübildschirm **Pod Management** sollte nun den **Aktiviere Pod (1)** Button als *deaktiviert* und den **Deaktiviere Pod (2)** Button als *aktiviert* angezeigen. Dies liegt daran, dass jetzt ein Pod aktiv ist und du keinen zusätzlichen Pod aktivieren kannst, ohne zuerst den aktuell aktiven Pod zu deaktivieren.

    Klicke auf den Zurück-Knopf auf deinem Smartphone, um zum Tab-Bildschirm **DASH** zurückzukehren, auf dem jetzt Informationen zu deiner aktiven Pod-Sitzung angezeigt werden, einschließlich der aktuellen Basalrate, Pod Reservoir Level, abgegebenem Insulin, Pod Fehlern und Warnungen.

    ***NOTE:** For more details on the information displayed go to the [**DASH Tab**](#omnipod-dash-tab) section of this document.*

   ![Activate_Pod_14](../images/DASH_images/Activate_Pod/Activate_Pod_14.png)

   ![Activate_Pod_15](../images/DASH_images/Activate_Pod/Activate_Pod_15.jpg)

   ***NOTE:** It is good practice to export settings AFTER activating the pod. Settings should be exported after each pod change and once a month, ensure you copy the exported settings file to a cloud storage location (e.g. Google Drive) or somewhere off your phone in case you loose your phone (see [**Export settings**](../Maintenance/ExportImportSettings.md)).*


(omnipod-dash-deactivate-pod)=

### Deactivate Pod

Under normal circumstances, the expected lifetime of a pod is three days (72 hours) and an additional 8 hours after the pod expiration warning for a total of 80 hours of total pod usage.

Gehe wie folgt vor, um einen Pod zu deaktivieren (entweder vor dem Ablaufen der Nutzungsdauer oder wegen eines Pod-Fehlers):

1. Go to the **DASH** tab, click on the **POD MGMT (1)** button, on the **Pod Management** screen click on the **Deactivate Pod (2)** button.

   ![Deactivate_Pod_1](../images/DASH_images/Deactivate_Pod/Deactivate_Pod_1.jpg)

   ![Deactivate_Pod_2](../images/DASH_images/Deactivate_Pod/Deactivate_Pod_2.png)

2. Auf dem Bildschirm **Pod deaktivieren**, klicke auf die **Weiter** Taste, um die Deaktivierung des Pods zu starten.

   Du erhältst vom Pod ein Piepen als Bestätigung, dass die Deaktivierung erfolgreich war.

   ![Deactivate_Pod_3](../images/DASH_images/Deactivate_Pod/Deactivate_Pod_3.jpg)

   ![Deactivate_Pod_4](../images/DASH_images/Deactivate_Pod/Deactivate_Pod_4.jpg)

3. A green checkmark will be displayed upon successful deactivation. Klicke auf **Weiter** um die Deaktivierung des Pods abzuschließen.

   Du kannst nun deinen Pod entfernen, da die aktive Sitzung beendet wurde.

   ![Deactivate_Pod_5](../images/DASH_images/Deactivate_Pod/Deactivate_Pod_5.jpg)

4. Klicke auf den grünen Knopf, um zum Bildschirm **Pod Management** zurückzukehren.

   ![Deactivate_Pod_6](../images/DASH_images/Deactivate_Pod/Deactivate_Pod_6.jpg)

5. Du bist jetzt wieder im **Pod Management** Menü; drücke die Zurück-Taste auf Deinem Smartphone um zur Registerkarte **DASH** zurückzukehren.

   Überprüfe, ob das Feld **Pod Status** die Nachricht **Kein aktiver Pod** anzeigt.

   ![Deactivate_Pod_2](../images/DASH_images/Deactivate_Pod/Deactivate_Pod_2.png)

   ![Deactivate_Pod_8](../images/DASH_images/Enable_Dash/Enable_Dash_4.jpg)


(omnipod-dash-resuming-insulin-delivery)=

### Resuming Insulin Delivery

**NOTE**: During **Profile Switches**, like when using the PDM, AAPS must suspend delivery on the Pod before setting the new basal **Profile**. If communication fails between the suspend and resume commands, then delivery can stay suspended, Read [**Delivery suspended**](#omnipod-dash-delivery-suspended) in the troubleshooting section for more details.

When insulin delivery is suspended you will need to issue a command to instruct the active, currently suspended pod to resume insulin delivery. Nachdem der Befehl erfolgreich verarbeitet wurde, wird die normale Insulinabgabe mit der aktuellen Basalrate fortgesetzt. Grundlage dafür ist das zu dieser Zeit aktive Basal**profil**. Der Pod akzeptiert dann wieder Befehle für Bolus, **TBR**und **SMB**.

1. Gehe zur Registerkarte **DASH** und stelle sicher, dass der **Pod Status (1)** **unterbrochen** anzeigt, drücke dann die **Abgabe fortsetzen (2)** Taste, um den aktuellen Pod anzuweisen, die normale Insulinabgabe fortzusetzen. Eine Nachricht **RESUME DELIVERY** wird im Feld **Pod Status (3)** angezeigt.

   ![Resume_1](../images/DASH_images/Resume/Resume_1.jpg)   ![Resume_2](../images/DASH_images/Resume/Resume_2.jpg)

2. Wenn der Befehl zur Fortsetzung der Insulinabgabe erfolgreich war, wird in einem Bestätigungsdialog die Nachricht **Insulinabgabe wieder aufgenommen.** angezeigt. Klicke **OK** um zu bestätigen und fortzufahren.

   ![Resume_3](../images/DASH_images/Resume/Resume_3.png)

3. In der Registerkarte **DASH** wird das Feld **Pod Status (1)** aktualisiert, es zeigt **In Betrieb** an und die **Insulinabgabe fortsetzen** Schaltfläche wird nicht mehr angezeigt.

   ![Resume_4](../images/DASH_images/Resume/Resume_4.jpg)

(omnipod-dash-silencing-pod-alerts)=

### Silencing Pod Alerts

In dem folgenden Prozess wird gezeigt, wie Warntöne bestätigt und stummgeschaltet werden können, die auftreten, wenn die Laufzeit des aktiven Pods den Grenzwert für die Warnung vor dem Ablauf von 72 Stunden (3 Tage) erreicht. Dieser Grenzwert für die Laufzeit ist unter **Stunden bis zum Podende** in den DASH-Einstellungen 'Alarme' definiert. Die maximale Nutzungsdauer eines Pods beträgt 80 Stunden (3 Tage und 8 Stunden), dennoch empfiehlt der Hersteller, 72 Stunden (3 Tage) nicht zu überschreiten.

***NOTE**: The **SILENCE ALERTS (3)** button is only available on the **DASH** tab when the pod expiration or low reservoir alert has been triggered. If the **SILENCE ALERTS** button is not visible and you hear beep sounds from the pod, try to 'Refresh pod status'.*

1. When the defined **Hours before shutdown** warning time limit is reached, the pod will issue warning beeps to inform you that it is approaching its expiration time and a pod change will be required soon.  
   You can verify this on the **DASH** tab, the **Pod expires: (1)** field will show the exact time the pod will expire (72 hours after activation), and the text will turn **red** after this time has passed.  
   Under the **Active Pod alerts (2)** field the status message **Pod will expire soon** is displayed. Dadurch wird auch die Schaltfläche **Alarme stummschalten (3)** angezeigt.

   ![ACK_alerts_1](../images/DASH_images/ACK_Alerts/ACK_ALERTS_1.png)

2. Go to the **DASH** tab and press the **SILENCE ALERTS (2)** button. **AAPS** sendet den Befehl an den Pod, um die Ablaufwarnung des Pods zu unterdrücken und aktualisiert das Feld **Pod Status (1)** mit **Aktive Alarme stummgeschaltet**.

   ![ACK_alerts_2](../images/DASH_images/ACK_Alerts/ACK_ALERTS_2.png)

3. Nach **erfolgreicher Stummschaltung** der Alarme werden **2 Pieptöne** vom aktiven Pod ausgegeben und ein Bestätigungsdialog zeigt die Nachricht **Aktive Alarme stummgeschaltet**. Drücke **OK**, um den Dialog zu bestätigen und zu schließen.

   ![ACK_alerts_3](../images/DASH_images/ACK_Alerts/ACK_ALERTS_3.png)

4. Wechsele zur Registerkarte **DASH**. Im Feld **Aktive Pod-Warnungen** wird keine Warnmeldung mehr angezeigt und der aktive Pod gibt keine Pieptöne zur Warnung mehr ab.

(omnipod-dash-view-pod-history)=

### View Pod History

In diesem Abschnitt wird erklärt, wie Du Deine Pod-Historie überprüfen und nach verschiedenen Aktionskategorien filtern kannst. Mit dem Werkzeug 'Pod Historie' kannst Du die Aktionen und Ergebnisse deines jeweils aktiven Pod während dessen dreitägigem Lebenszyklus (72 - 80 Stunden) ansehen.

Diese Funktion ist hilfreich bei der Überprüfung von Bolus-, TBR- und Basalraten-Befehlen, die an den Pod gesendet wurden. Die übrigen Kategorien sind hilfreich bei der Problembehebung und zur Bestimmung der Reihenfolge von Ereignissen, die zu einem Fehler geführt haben.

***NOTE:** **Only the last command can be uncertain**. New commands *will not be sent* until the **last 'uncertain' command becomes 'confirmed' or 'denied'**. The way to 'fix' uncertain commands is to **'refresh pod status'**.*

1. Gehe zur Registerkarte **DASH** und klicke auf **POD MGMT (1)** und dann auf dem **Pod Management** Bildschirm klicke auf den **Pod Historie (2)** Button.

   ![Pod_history_1](../images/DASH_images/Deactivate_Pod/Deactivate_Pod_1.jpg)  
   ![Pod_history_2](../images/DASH_images/Pod_History/Pod_history_2.jpg)

2. Auf dem **Pod Historie** Bildschirm wird als Standard die Kategorie **Alle (1)** angezeigt. Sie zeigt **Datum und Zeit (2)** aller Pod **Aktionen (3)** und **Ergebnisse (4)** in umgekehrter chronologischer Reihenfolge. Drücke **2 Mal die Zurück-Taste** des Smartphones, um zur Registerkarte **DASH** im **AAPS**-Bildschirm zurückzukehren.

   ![Pod_history_3](../images/DASH_images/Pod_History/Pod_history_3.jpg) ![Pod_history_4](../images/DASH_images/Pod_History/Pod_history_4.jpg)

(omnipod-dash-tab)=

## Registerkarte DASH

Im Folgenden werden die Anordnung und die Bedeutung der Symbole und Statusfelder auf der Registerkarte **DASH** des AAPS-Hauptbildschims erläutert.

***NOTE:** If any message in the **DASH** tab status fields report (uncertain), then you will need to press the Refresh button to clear it and refresh the pod status.*

![DASH_Tab_1](../images/DASH_images/DASH_Tab/DASH_Tab_1.png)

### Fields



- **Bluetooth-Adresse:** Zeigt die aktuelle Bluetooth-Adresse des verbundenen Pods an.

- **Bluetooth Status:**  Displays the current connection status.

- **Laufnede Nummer:** Zeigt die Seriennummer des aktiven POD an.

- **Firmware-Version:** Zeigt die Firmware-Version für die aktive Verbindung an.

- **Zeit auf dem Pod:** Zeigt die aktuelle Zeit auf dem Pod.

- **Pod Status:** Zeigt den Pod Status an.

- **Letzte Verbindung:** Zeigt die Zeit der letzten Kommunikation mit dem Pod an.

  - *gerade eben* vor weniger als 20 Sekunden.

  - *vor weniger als einer Minute* vor mehr als 20 Sekunden, aber weniger als 60 Sekunden.

  - *vor 1 Minute* vor mehr als 60 Sekunden, aber weniger als 120 Sekunden (2 min).

  - *vor XX Minuten* vor mehr als 2 Minuten, definiert durch den Wert von XX.

- **Letzter Bolus:** Zeigt die Dosierung des letzten Bolus an, der an den aktiven Pod gesendet wurde und in Klammern, wie lange es her ist, dass er abgegeben wurde.

- **Basis-Basalrate:** Zeigt die Basalrate an, die für den aktuellen Zeitpunkt im Basalratenprofil programmiert wurde.

- **Temporäre Basalrate:** Zeigt die aktuell laufende temporäre Basalrate im folgenden Format an
  - {Einheiten pro Stunde} @{TBR Startzeit}  ({Minuten aktiv}/{Gesamtlaufzeit TBR in Minuten})

  - Example:* 0.00U/h @18:25 ( 90/120 minutes)

- **Reservoir:** Zeigt 50+ IE übrig an, wenn mehr als 50 Einheiten im Reservoir vorhanden sind. Unter 50 IE werden die exakten Einheiten angezeigt.

- **Insgesamt abgegeben:** Zeigt die Gesamtzahl der aus dem Reservoir abgegebenen Insulineinheiten an. Dies schließt Insulin ein, das zum Aktivieren und Befüllen verwendet wurde.

- **Fehler:** Zeigt den letzten Fehler an. Review the [Pod history](#omnipod-dash-view-pod-history) and log files for past errors and more detailed information.

- **Aktive Pod-Warnungen:** Zeigt jeweils aktuelle Warnungen auf dem aktiven Pod.



### Buttons

![Refresh_Icon](../images/DASH_images/Refresh_LOGO.png) Sends a refresh command to the active pod to update communication.

  - *Verwende diese Option, um den Pod-Status zu aktualisieren und die Statusfelder zu erneuern, die den Text 'unsicher' enthalten.*

  - *See the [Troubleshooting](#omnipod-dash-troubleshooting) section below for additional information.*

![POD_MGMT_Icon](../images/DASH_images/POD_MGMT_LOGO.png)   Navigates to the Pod management menu.

![ack_alert_logo](../images/DASH_images/ack_alert_logo.png) When pressed this will disable the pod alerts beeps and notifications (expiry, low reservoir..).

  - *Der Button wird nur angezeigt, wenn die aktuelle Zeit des Pods nach dem Pod-Ablaufdatum liegt.*
  -  *Nach erfolgreicher Bestätigung wird dieses Symbol nicht mehr angezeigt.*

![RESUME_Icon](../images/DASH_images/DASH_tab_icons/RESUME_Icon.png)    Resumes the currently suspended insulin delivery in the active pod.



### Pod Management Menu

Below is describes the purpose of each icon on the **Pod Management** menu, accessed by pressing **POD MGMT (1)** button from the **DASH** tab.

![DASH_Tab_2](../images/DASH_images/Deactivate_Pod/Deactivate_Pod_1.jpg)

![DASH_Tab_3](../images/DASH_images/DASH_Tab/DASH_Tab_3.png)

**The table below describes each button and it's function:**

| Button | Function                                                                                      |
| ------ | --------------------------------------------------------------------------------------------- |
| 1      | Access the Pod Mgmt settings                                                                  |
| 2      | [**Activate Pod**](#omnipod-dash-activate-pod): Primes and activates a new pod.               |
| 3      | [**Deactivate Pod**](#omnipod-dash-deactivate-pod): Deactivates the currently active pod.     |
| 4      | **Play Test Beep** : Plays a single test beep on the pod when pressed.                        |
| 5      | [**Pod history**](#omnipod-dash-view-pod-history) : Displays the active pod activity history. |


(omnipod-dash-settings)=

## DASH-Einstellungen

The Dash driver settings are configurable from the top-left hand corner **hamburger menu** under **Config Builder (1)** ➜ **Pump**  **Dash** ➜ **Settings Gear (3)** by selecting the **radio button (2)** titled **Dash**. Wenn Du das **Kontrollkästchen (4)** neben dem **Zahnrad (3)** aktivierst, wird das DASH-Menü als Registerkarte im **AAPS**-Interface mit dem Titel **DASH** als eigener Tab angezeigt.

![Dash_settings_1](../images/DASH_images/Enable_Dash/Enable_Dash_3.png)

***HINWEIS:** Einen schnelleren Zugriff auf die **DASH-Einstellungen** erlaubt das **3-Punkt-Menü (1)** in der oberen rechten Ecke der Registerkarte **DASH** und die Auswahl **DASH-Einstellungen (2)** aus dem Dropdown-Menü.*

![Dash_settings_3](../images/DASH_images/Dash_settings/Dash_settings_3.png)

Die Einstellungen sind nach Gruppen sortiert unten aufgelistet. Du kannst die meisten der Einstellungen über einen Kippschalter aktivieren oder deaktivieren:

***NOTE:** An asterisk (\*) denotes the default setting is enabled.*

### Confirmation beeps

![Dash_settings_4](../images/DASH_images/Dash_settings/Dash_settings_4.jpg)

Bestätigt mit Signaltönen des Pods die Abgabe und Änderung von Bolus, Basalrate, SMB und TBR.

**Bolus beeps enabled:**    Enable or disable confirmation beeps when a bolus is delivered.

**Basal beeps enabled:**    Enable or disable confirmation beeps when a new basal rate is set, active basal rate is canceled or current basal rate is changed.

**SMB beeps enabled:**  Enable or disable confirmation beeps when a SMB is delivered.

**TBR beeps enabled:**  Enable or disable confirmation beeps when a TBR is set or canceled.



### Alerts

![Dash_settings_5](../images/DASH_images/Dash_settings/Dash_settings_5.jpg)

Einstellungen für **AAPS**-Alarme für Ablauferinnerung, Zeit bis Pod-Ende und niedrigen Reservoirstand basierend auf den definierten Schwellwerten.

***NOTE:** an AAPS notification will ALWAYS be issued for any alert after the initial communication with the pod since the alert was triggered. Wenn Du die Benachrichtigung löschst, wird der Alarm NICHT gelöscht, AUSSER wenn die automatische Bestätigung von Pod-Alarmen aktiviert ist. Um den Alarm MANUELL zu löschen, musst Du auf der Registerkarte **DASH** den **Alarm stummschalten** Button drücken.*

**Expiration reminder enabled:**    Enable or disable the pod expiration reminder set to trigger when the defined number of hours before shutdown is reached.

**Hours before shutdown:**  Defines the number hours before the active pod shutdown occurs, which will then trigger the expiration reminder alert.

**Low reservoir alert enabled:**    Enable or disable an alert when the pod's remaining units low reservoir limit is reached as defined in the Number of units field.

**Number of units:**    The number of units at which to trigger the pod low reservoir alert.



### Notifications

![Dash_settings_6](../images/DASH_images/Dash_settings/Dash_settings_6.jpg)

The Notification section allows the user to select their preferred notifications and audible phone alerts when AAPS is uncertain about the status of TBR, SMB, or bolus, and when delivery suspended events were successful.

***NOTE:** These are notifications only, no audible beep alerts are made.*

**Sound for uncertain TBR notifications enabled:**  Enable or disable this setting to trigger an audible alert and visual notification when **AAPS** is uncertain if a TBR was successfully set.

**Sound for uncertain SMB notifications enabled:**  Enable or disable this setting to trigger an audible alert and visual notification when **AAPS** is uncertain if an SMB was successfully delivered.

**Sound for uncertain bolus notifications enabled:**    Enable or disable this setting to trigger an audible alert and visual notification when **AAPS** is uncertain if a bolus was successfully delivered.

**Sound when delivery suspended notifications enabled:**    Enable or disable this setting to trigger an audible alert and visual notification when suspend delivery was successfully delivered.

## Aktionen (AKT) Tab

This tab is well documented in the main **AAPS** documentation but there are a few items on this tab that are specific to how the DASH differs from tube based pumps, especially after the processes of applying a new pod.

1. Go to the **Actions (ACT)** tab in the main **AAPS** interface.

2. Unter dem Abschnitt **Careportal (1)** werden in der Rubrik für **Insulin** und **Kanüle** die zugehörigen Felder für das **Alter** **nach jedem Wechsel** auf 0 Tage und 0 Stunden zurückgesetzt. Das liegt daran, wie die Omnipod-Pumpe gebaut ist und funktioniert. Da der Pod die Kanüle direkt in die Haut am Ort der Pod-Anwendung einführt, wird bei Omnipod-Pumpen kein herkömmlicher Schlauch verwendet. *Nach einem Podwechsel wird das Alter jedes dieser Werte daher automatisch auf Null zurückgesetzt.* **Das Alter der Pumpenbatterie** wird nicht angegeben, da die Batterie im Pod immer länger hält, als die Lebensdauer des Pods (maximal 80 Stunden). Die **Pumpenbatterie** und das **Insulinreservoir ** sind immer im Pod enthalten.

   ![ACT_1](../images/DASH_images/Actions_Tab/ACT_1.png)

### Level

**Insulin Level**

Der angezeigte Insulinlevel ist der vom DASH gemeldete Betrag der verbleibenden Einheiten. Der Pod meldet allerdings den tatsächlichen Insulinlevel erst dann, wenn er unter 50 Einheiten liegt. Bis dahin wird „Über 50 Einheiten“ angezeigt. Die gemeldete Menge ist nicht genau: Wenn der Pod „leer“ meldet, wird das Reservoir in den meisten Fällen noch einige zusätzliche Einheiten Insulin enthalten.

Auf der Registerkarte DASH wird die Übersicht wie unten beschrieben angezeigt:

  * **Mehr als 50 IE verbleibend** - Der Pod meldet mehr als 50 Einheiten im Reservoir.
  * **Unter 50 Einheiten** - Die Menge an Insulin, die noch im Reservoir vorhanden ist, wie vom Pod gemeldet.

Sonstiges
  * **SMS** - Aus dem Pod übernommener Wert oder 50+ IE für SMS-Antworten
  * **Nightscout** - Lädt den Wert 50 hoch, wenn mehr als 50 Einheiten angezeigt werden (Nightscout Version 14.07 und älter).  Neuere Versionen melden einen Wert von 50+, wenn sich mehr als 50 Einheiten im Reservoir befinden.

(omnipod-dash-troubleshooting)=

## Problembehandlung

(omnipod-dash-delivery-suspended)=

This section covers common known issues and solutions for Omnipod DASH use with AAPS. There is also [General Troubleshooting](../GettingHelp/GeneralTroubleshooting.md) section in the documentation that should be reviewed as it covers relevant topics for some Pod issues too.

---

(omnipod-dash-bluetooth-related-issues)=

## **Bluetooth related issues**

For known issues with Bluetooth connections, dropouts of pump/pods, or activation and connection issues [Bluetooth Troubleshooting](../GettingHelp/BluetoothTroubleshooting.md)

---
### Delivery suspended

  - Es gibt keine Unterbrechen-Taste mehr. Wenn Du die Insulinabgabe unterbrechen möchtest, kannst Du eine Null-**TBR** für x Minuten setzen.
  - Während eines **Profilwechsels** muss der DASH die Insulinabgabe unterbrechen, bevor das neue Basal-**Profil** gesetzt wird. Wenn die Kommunikation zwischen den beiden Befehlen fehlschlägt, kann die Insulinabgabe unterbrochen bleiben. Wenn das passiert:
     - Es gibt dann keine Insulinabgabe; dies schließt Basal, SMB, manuelle Boli usw. ein.
     - Es kann eine Benachrichtigung geben, dass einer der Befehle unbestätigt blieb: Dies hängt davon ab, wann der Fehler aufgetreten ist.
     - **AAPS** wird alle 15 Minuten versuchen, das neue Basalprofil zu setzen.
     - **AAPS** wird alle 15 Minuten darüber benachrichtigen, dass die Insulinabgabe unterbrochen ist, sofern die Abgabe noch immer unterbrochen ist (Insulinabgabe konnte nicht gestartet werden).
     - The [**Resume delivery**](#omnipod-dash-resuming-insulin-delivery) button will be active if the user chooses to resume delivery manually.
     - Wenn **AAPS** die Abgabe nicht alleine fortsetzen kann (dies geschieht, wenn der Pod nicht erreichbar ist, der Ton stumm geschaltet ist, etc.), beginnt der Pod für 3 Minuten jede Minute viermal zu piepen. Das wird, wenn die Abgabe für mehr als 20 Minuten ausgesetzt ist, alle 15 Minuten wiederholt.
  - Für unbestätigte Befehle sollte "Aktualisieren" des Podstatus diese bestätigen oder ablehnen.

*****NOTE:** When you hear beeps from the pod, do not assume that delivery will continue without checking the phone, delivery might stay suspended, ***so you need to check !******

---
### Pod Failures

- Pods fallen gelegentlich aus unterschiedlichen Gründen aus, u. a. wegen Hardwareproblemen mit dem Pod selbst.
- It is best practice not to raise support / replacement cases with Insulet, since AAPS is not an approved method of using the Pods.
- Um die Ursache zu ermitteln, kannst Du in [**dieser Liste**](https://github.com/openaps/openomni/wiki/Fault-event-codes) die Fehlercodes nachschlagen.

---
### Preventing error 49 pod failures

Dieser Fehler hängt mit einem fehlerhaften Pod-Status für einen Befehl oder einem Fehler während der Insulinabgabe zusammen. Dies ist der Fall, wenn der AAPS-Treiber und der Pod unterschiedliche Angaben zum aktuellen Status haben. Der Pod reagiert (aufgrund einer eingebauten Sicherheitsfunktion) dann mit einem nicht auflösbaren Fehlercode 49 (0x31) und verabschiedet sich mit einem so genannten „Heuler“: dem langen, irritierenden Piepton, der nur gestoppt werden kann, indem mit einer Büroklammer in ein Loch am richtigen Ort auf der Rückseite des Pods gedrückt wird. Der genaue Ursprung eines „Pod Fehlers 49“ ist oft schwer zu ermitteln. Situationen, die für das Auftreten dieses Fehlers vermutet werden (z.B. bei einem Absturz der Anwendung, beim Ausführen einer Entwicklungsversion oder bei einer Neuinstallation).

---

### Pump Unreachable Alerts

When no communication can be established with the pod for a pre-configured time a “Pump unreachable” alert will be raised. Pump unreachable alerts can be configured by going to the top right-hand side three-dot menu, selecting **Preferences** ➜ **Local Alerts** ➜ **Pump unreachable threshold [min]**. Eine Alarmierung nach **120** Minuten wird als Wert empfohlen.

---
### Export  Settings

Durch den Export der **AAPS**-Einstellungen kannst Du alle Deine Einstellungen - und vielleicht noch wichtiger - alle Deine Objectives (Ziele) wiederherstellen. Es kann passieren, dass die Einstellungen in der „letzten bekannten funktionierenden Fassung“ wieder hergestellt werden müssen, etwa nach der Deinstallation/Neuinstallation von **AAPS** oder im Falle eines Smartphone-Verlustes.

***NOTE:** The active pod information is included in the exported settings. Wenn Du eine „alte“ Exportdatei importierst, wird Dein aktueller Pod „sterben“. Es gibt hierzu keine Alternative. In einigen Fällen (wie bei einem _geplanten_ Austausch Deines Smartphones) musst Du unter Umständen die exportierte Datei verwenden, um **AAPS**-Einstellungen wiederherzustellen, **um so den aktuell aktiven Pod** weiter nutzen zu können. In diesem Fall ist es wichtig, nur die zuletzt exportierte Einstellungsdatei zu verwenden, die den aktuell aktiven Pod enthält.*

**Es ist eine gute Idee, einen Export sofort nach der Aktivierung eines Pods durchzuführen.** Auf diese Weise wirst Du immer in der Lage sein, die Verbindung zum aktuell aktiven Pod im Falle eines Problems wiederherzustellen. Zum Beispiel, wenn Du auf ein anderes Smartphone wechseln willst.

Regularly (after each export preferably) copy your exported settings to a safe place (a cloud drive e.g. Google Drive) that is accessible by any phone when needed. This allows you to restore to a phone from anywhere in case of a phone loss or factory reset of your phone while you are not at home.

---
### Import Settings

**WARNING**: Please note that importing settings will possibly import an outdated Pod status (depending when you made the last export/backup).  
As a result, there is a **risk of losing the active Pod!** (see **Exporting Settings**).
1. Only try an import when no other options are available.
2. Wenn Du die Einstellungen mit einem aktiven Pod importierst, stelle sicher, dass der Export ebenfalls mit diesem Pod durchgeführt wurde.

**Importieren während ein Pod aktiv ist:** (Du riskierst den Pod!)

1. **Make sure you are importing settings that were recently exported with the currently active Pod!**
2. Einstellungen importieren
3. Alle Voreinstellungen kontrollieren.

**Importieren ohne aktiven Pod**

1. Importieren aller kürzlichen Exporte sollte funktionieren (siehe oben)
2. Einstellungen importieren
3. Alle Voreinstellungen kontrollieren.
4. Es kann erforderlich sein, einen in den importierten Einstellungen enthaltenen, aber nicht mehr vorhandenen Pod zu **deaktivieren**.

---
### Importing settings that contain Pod state from an inactive Pod

Wenn Du Einstellungen für einen mittlerweile inaktiven Pod importierst, wird AAPS versuchen sich mit diesem Pod zu verbinden. Dies wird logischerweise scheitern. Du kannst in dieser Situation keinen neuen Pod aktivieren.

To remove the old pod session:
1. “try” to de-activate the Pod. The de-activation will likely fail.
2. Wähle "Wiederholen".
3. Nach der zweiten oder dritten Wiederholung erhälst Du die Möglichkeit, den Pod zu entfernen.
4. Sobald der alte Pod gelöscht ist, kannst Du einen neuen Pod aktivieren.

### Generic error: java.lan.illegalStateException: Trying to set a Bluetooth Address to ***, but it is already set to ***.

If you receive this error when attempting to Initialize a new pod **AAPS** fails as it still has settings for an old pod stored in configuration.

![omnipod_address_in_use](../images/DASH_images/Errors/omnipod_address_in_use.png)

This can happen if you restore from a backup, or a pod deactivation fails.

To resolve keep clicking on `RETRY` until a `Discard` option is shown, then discard. This procedure should work for De-Activating a pod too.

You should now be able to Activate a new pod.

---
### Reinstalling AAPS

When uninstalling **AAPS** you will lose all your settings, objectives and the current Pod session. **To restore them make sure you have a recent exported settings file available!**

Wenn ein Pod aktiv ist, stelle sicher, dass Du einen Export für die aktuelle Pod-Sitzung hast oder Du wirst den aktuell aktiven Pod durch das Importieren der älteren Einstellungen verlieren.

1. Export your settings and store a copy in a safe place (e.g Google Drive).
2. Deinstalliere **AAPS** und starte Dein Smartphone neu.
3. Installiere die neue **AAPS**-Version.
4. Einstellungen importieren
5. Überprüfe alle Einstellungen (optional Einstellungen erneut importieren).
6. Aktiviere einen neuen Pod.
7. Anschließend: Aktuelle Einstellungen exportieren.

---
### Updating AAPS to a newer version

In den meisten Fällen ist eine Deinstallation nicht erforderlich. Du kannst eine „in-place“ Installation durchführen, indem Du die Installation für die neue Version startest. This is also possible when on an active Pod session.

1. Exportiere Deine Einstellungen.
2. Installiere die neue **AAPS**-Version.
3. Überprüfe, ob die Installation erfolgreich war.
4. Verbinde den Pod wieder oder aktiviere einen neuen Pod.
5. Anschließend: Aktuelle Einstellungen exportieren.

---
### Omnipod driver alerts

The Omnipod Dash driver presents a variety of unique alerts on the **Overview tab**, most of them are informational and can be dismissed while some provide the user with an action requiring their input to resolve the cause of the triggered alert.

Im Folgenden findest du eine Zusammenfassung der wichtigsten Warnmeldungen, die dir begegnen können:

- Keine aktive Pod-Sitzung erkannt. Dieser Alarm kann vorübergehend durch Drücken von **Schlummern** deaktiviert werden, wird aber weiterhin ausgelöst, solange kein neuer Pod aktiviert wurde. Einmal aktiviert, wird dieser Alarm automatisch ausgeschaltet.
- Pod unterbrochen Hinweis, dass der Pod angehalten wurde.
- Setzen des **Basalprofils** fehlgeschlagen: Insulinabgabe könnte ausgesetzt sein! Bitte aktualisiere den Pod-Status manuell auf der Registerkarte Omnipod und setze die Übertragung bei Bedarf fort. Hinweis, dass die Einstellung des Pod-**Basalprofils** fehlgeschlagen ist und Du auf der Registerkarte DASH auf *Aktualisieren* drücken musst.
- Es kann nicht überprüft werden, ob der **SMB**-Bolus erfolgreich war. Wenn du sicher bist, dass der Bolus nicht erfolgreich war, solltest du den SMB-Eintrag manuell auf der Registerkarte Behandlungen entfernen. Im Falle einer Nachricht, dass die Abgabe eines **SMB**-Bolus nicht geprüft werden konnte, musst Du auf der Registerkarte DASH das Feld *Letzter Bolus* überprüfen, um zu sehen, ob der **SMB**-Bolus durchgelaufen ist, und wenn nicht, den Eintrag auf der Registerkarte „Behandlungen“ entfernen.
- Unsicher, ob die "Ereignis Bolus/TBR/SMB" abgeschlossen wurde. Bitte überprüfe manuell, ob sie erfolgreich war.

(omnipod-dash-where-to-get-help-for-dash)=

## Wo ich Hilfe zum DASH finde

Die gesamte Entwicklungsarbeit für den DASH wird von der Community durch **Freiwillige** geleistet; bitte berücksichtige das und gehe durch die folgenden Schritte bevor Du um Hilfe bittest:

-  **Level 0:** Lies den entsprechenden Abschnitt dieser Dokumentation um sicherzustellen, dass du verstehst, wie die Funktion, mit der Du Schwierigkeiten hast, funktionieren soll.
-  **Level 1:** Wenn Du immer noch Probleme, die Du mit diesem Dokument nicht lösen kannst, haben solltest, gehe **Discord-**Kanal *#AAPS*. Nutze dazu [diesen Einladungslink <https://discord.gg/4fQUWHZ4Mw>](https://discord.gg/4fQUWHZ4Mw). There are also numerous Facebook and other groups you can ask in too (see [**Getting Help**](../GettingHelp/WhereCanIGetHelp.md))
-  **Level 2:** Durchsuche bereits bestehende 'Issues', um zu sehen, ob Dein Problem bereits in den [Issues](https://github.com/nightscout/AndroidAPS/issues) gemeldet wurde. Falls es bereits vorhanden ist, bestätige/kommentiere/ergänze bitte Informationen zu Deinem Problem. Wenn nicht, erstelle bitte ein [neues Issue](https://github.com/nightscout/AndroidAPS/issues) und füge [Deine Protokolldateien](../GettingHelp/AccessingLogFiles.md) (Logs) hinzu.
-  **Sei geduldig - die meisten Mitglieder unserer Community sind gutmütige Freiwillige und die Lösung von Problemen erfordert oft Zeit und Geduld von Nutzern und Entwicklern.**

When requesting help come prepared with the following information to help those in the community with your specific questions and problems:
- Android phone make and model
- Android OS version (e.g 15 or 16)
  - Did you recently upgrade your Android OS version?
- The version of **AAPS** you are running
- Plain english description of the problem you are facing considering some of the following things
   - Was it working before now?
   - When did it work or not work?
   - Did you make any changes to configuration or profile settings?
   - Did you pair a new bluetooth device?
   - Did you upgrade or install a new app?
   - How long was it working before it stopped working?
