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
3. Einen funktionierenden Omnipod PDM (falls **AAPS** Probleme macht)
4. Unterstütztes Smartphone sind ein Muss! (Siehe [Hardware- und Software-Anforderungen](#hardware-software-requirements))
5. Korrekte Version von AAPS (erstellt und installiert)

### **Sobald der AAPS-Dash-Treiber Deinen Pod aktiviert hat, wird Dein Omnipod Dash PDM überflüssig.**
- Vor dem Umstieg auf **AAPS** hätte zum Senden eines Befehls an den Pod (z. B. Abgabe eines Bolus), das zugehörige Omnipod PDM (oder in einigen Regionen die Smartphone-App) genutzt werden müssen.
- Der DASH lässt für das Pod-Management und Senden von Befehlen, maximal eine Bluetooth-Verbindung (z. B. PDM oder Smartphone) zu.
- Das Gerät, das den Pod erfolgreich aktiviert hat, ist das einzige Gerät, das von diesem Zeitpunkt an mit ihm kommunizieren darf. Das bedeutet, dass, sobald Du einen DASH mit Deinem Android-Smartphone mit **AAPS** aktiviert hast, **kannst Du Deinen PDM nicht mehr mit diesem Pod benutzen!** Für die Zeit, in der Pod aktiv ist, ist der **AAPS** Dash-Treiber, der auf Deinem Android-Telefon läuft, jetzt der neue PDM für Deinen Pod.
- **Wirf Deinen PDM NICHT weg!** Es wird empfohlen, ihn als Backup und für Notfälle zu behalten. Das hilft insbesondere dann, wenn Dein Smartphone verloren geht oder **AAPS** nicht korrekt funktioniert.

### Dein Pod **WIRD die Insulinabgabe NICHT** stoppen, wenn er nicht mit AAPS verbunden ist.
Die Basalraten werden, wie sie im aktuell aktiven [**Profil**](../SettingUpAaps/YourAapsProfile.md) festgelegt sind, mit der Aktivierung im Pod gespeichert.  
Solange **AAPS** funktioniert, wird es Basalraten-Anpassungen mit einer maxmalen Gültigkeit von 120 Minuten senden.  
Sollte der Pod aus irgendeinem Grund keine neuen Befehle erhalten (wenn z. B. die Verbindung aufgrund der Entfernung zum Smartphone abbricht), wird der Pod auf die in Deinem [**Profil**](../SettingUpAaps/YourAapsProfile.md) hinterlegte Standard-Basalrate zurückfallen.

### **AAPS Profil(e) unterstützen keine halbstündlichen Basalraten**
Wenn Du noch unerfahren mit **AAPS** sein solltest und erstmalig Deine Basalraten in Dein [**Profil**](../SettingUpAaps/YourAapsProfile.md) einpflegst, beachte, dass Basalraten nur zur vollen Stunde beginnen dürfen. Ein Start zur halben Stunde wird nicht unterstützt. Beispiel: Wenn Du auf Deinem Omnipod PDM einen basalrate von 1,1 IE, die um 09.30h für 2h startet und um 11:30h zu Ende ist, wird es nicht möglich sein, diese Basalrate exakt so im Basal-**Profil** für **AAPS** abzubilden.  
Du wirst die Basalrate von 1,1 IE entweder auf das Zeitfenster von 9:00-11:00 oder 10:00-12:00 verschieben müssen. Auch wenn die DASH-Hardware 30-minütige-Segmente im Basalraten-**Profil** managen kann, unterstützt **AAPS** dieses Feature NICHT.

### **0 IE/h im Basalraten-Profil werden in AAPS NICHT unterstützt**
Auch wenn der DASH „Null-Basalraten“ unterstützt, nutzt **AAPS** Vielfache Deiner im **Profile** hinterlegten Basalrate, um festzulegen mit wieviel Insulin automatisch behandelt werden soll. Das funktioniert mit einer „Nul-Basalrate“ jedoch nicht.  
Eine temporäre Basalrate mit 0 IE/h kann mit Hilfe der „Pumpe trennen“-Funktion oder durch eine Kombination von „Loop/temporäre Basalrate stoppen“ oder „Loop/temporäre Basalrate aussetzen“ nachgebildet werden.  
**HINWEIS:** Die kleinste zulässige Basalrate des DASH in **AAPS** beträgt 0,05 IE/h.

## DASH in AAPS auswählen

Es gibt **zwei** Optionen, um den Omnipod in **AAPS** zu konfigurieren:

### Option 1: Neue Installation

Bei der **AAPS**-Erstinstallation wird Dich der **Einrichtungsassistent** durch die wichtigsten **AAPS**-Funktionen und Installationsanforderungen führen.  
Wähle bei der Pumpenauswahl den „DASH“ aus.

![Enable_Dash_1](../images/DASH_images/Enable_Dash/Enable_Dash_1.png)

Falls Du unsicher sein solltest, kannst Du auch zunächst die „Virtuelle Pumpe“ und dann später, nach abgeschlossener **AAPS**-Einrichtung, „DASH“ wählen (siehe Option 2).

(omnipod-dash-option-2-config-builder)=
### Option 2: Der Konfigurations-Generator

Bei einer vorhandenen Installation von AAPS kannst Du **DASH** als Pumpe unter "Konfiguration" auswählen:

Wähle aus dem **Hamburger Menü** in der linken oberen Ecke die Option **Konfiguration (1)** ➜ **Pumpe** ➜ **Dash** ➜ **Zahnrad (3)**, indem Du das **Optionsfeld (2)** mit dem Namen **Dash** auswählst.

Wenn Du das **Kontrollkästchen (4)** neben dem **Zahnrad (3)** wählst, wird das DASH-Menü als Registerkarte im **AAPS**-Interface mit dem Titel **DASH** als eigener Tab angezeigt. Wenn Du dieses Kästchen aktivierst, wird der Zugriff auf die DASH-Befehle bei der Verwendung von **AAPS** erleichtert.

**HINWEIS:** Eine schnellere Möglichkeit, zu den [**DASH-Einstellungen**](#omnipod-dash-settings) zu gelangen, findest Du im Abschnitt DASH-Einstellungen weiter unten in diesem Dokument.

![Enable_Dash_3](../images/DASH_images/Enable_Dash/Enable_Dash_3.png)

### Überprüfung der Omnipod-Treiberauswahl

Drücke **2 Mal die Zurück-Taste** des Smartphones, um zur Registerkarte **DASH** im **AAPS**-Bildschirm zurückzukehren. Wenn diese Option nicht aktiviert ist, finden Du die DASH Registerkarte links oben im Hamburger-Menü.

![Enable_Dash_4](../images/DASH_images/Enable_Dash/Enable_Dash_4.jpg)

## DASH Konfiguration

**Wische nach links** zur [**DASH-Registerkarte**](#omnipod-dash-tab), auf der Du alle Pod-Funktionen verwalten kannst (einige dieser Funktionen sind ohne aktive Pod-Sitzung nicht aktiviert oder nicht sichtbar):

![Refresh_LOGO](../images/DASH_images/Refresh_LOGO.png) „Aktualisieren“ von Pod-Verbindungen und -Status, Abstellen von Alarmen, wenn der Pod piept

![POD_MGMT_LOGO](../images/DASH_images/POD_MGMT_LOGO.png)   „Pod-Management“ (Aktivieren, Deaktivieren, Testsignal und Pod-Historie)

(omnipod-dash-activate-pod)=

### Pod aktivieren

1. Navigiere zur Registerkarte **DASH** und klicke auf den **POD MGMT (1)** Button und dann auf **Pod aktivieren (2)**.

   ![Activate_Pod_1](../images/DASH_images/Activate_Pod/Activate_Pod_1.png)

   ![Activate_Pod_2](../images/DASH_images/Activate_Pod/Activate_Pod_2.png)

2. Der **Pod füllen** Bildschirm wird angezeigt. Fülle Deinen neuen Pod mit **mindestens 80 Einheiten** Insulin und achte auf zwei Signaltöne, die anzeigen, dass der Pod bereit ist, gestartet zu werden.

   ***HINWEIS**: Berücksichtige bei der Berechnung der gesamten Insulinmenge, die Du in drei Tagen benötigst, dass zum Füllen des Pod 3 bis 10 IE zusätzlich benötigt werden.*

   ![Activate_Pod_3](../images/DASH_images/Activate_Pod/Activate_Pod_3.png)

   ![Activate_Pod_4](../images/DASH_images/Activate_Pod/Activate_Pod_4.jpg)

   Stelle sicher, dass der neue Pod und das Smartphone, auf dem **AAPS** läuft, nah beieinander liegen und klicke auf den Button **Weiter**.

   ***HINWEIS**: wenn die Fehlermeldung _„Konnte keinen verfügbaren Pod für die Aktivierung finden“_ (das kann passieren) erscheint: keine Panik. Klicke auf **Erneut** bzw. <0>Wiederholen</0>. In den meisten Fällen wird die Aktivierung dann erfolgreich fortgesetzt.*

   ![Activate_Pod_3](../images/DASH_images/Activate_pod_error.png)

3. Klicke auf den **Weiter** Button, um die Initialisierung des Pods abzuschließen; anschließend wird der **Pod anlegen** Bildschirm angezeigt. Klicke auf den **Weiter** Button, um die Initialisierung des Pods abzuschließen; anschließend wird der **Pod anlegen** Bildschirm angezeigt.

   ![Activate_Pod_5](../images/DASH_images/Activate_Pod/Activate_Pod_5.jpg)    ![Activate_Pod_6](../images/DASH_images/Activate_Pod/Activate_Pod_6.jpg)

4. Als nächstes bereite die Infusionsstelle für den neuen Pod vor. Wasche Dir die Hände, um jegliche Infektionsgefahr zu vermeiden. Reinige die Infusionsstelle entweder mit Seife und Wasser oder zur Desinfektion mit einem Alkohol-Tuch. Lass die Haut vollständig trocknen, bevor Du weiter machst.   
   Wenn Deine Haut auf den Klebstoff reagiert, probiere ein Hautbarriere (Tuch oder Spray) aus.

   Entferne die blaue Nadelkappe aus Kunststoff. Wenn Du etwas siehst, das aus dem Pod herausschaut, oder Du etwas anderes Ungewöhnliches bemerkst, **STOPPE** den Prozess und starte mit einem neuen Pod. Wenn alles **in Ordnung** ist, ziehe das weiße Papier von der Klebefläche ab und setze den Pod auf die ausgewählte Stelle Deines Körpers.

   Wenn du fertig bist, klicke auf den **Weiter** Button.

   ![Activate_Pod_8](../images/DASH_images/Activate_Pod/Activate_Pod_8.jpg)

6. Das **Pod anlegen** Dialogfenster wird nun angezeigt. **NUR auf OK klicken, wenn Du bereit bist, die Kanüle zu setzen!**

   ![Activate_Pod_9](../images/DASH_images/Activate_Pod/Activate_Pod_9.jpg)

7. Nachdem Du **OK** gedrückt hast, kann es einige Zeit dauern, bis der DASH reagiert und die Kanülen legt (maximal 1-2 Minuten). Wechsele zur Registerkarte **DASH**.

   ***HINWEIS**: Bevor die Kanüle gesetzt wird, ist es ratsam, die Haut in der Nähe des Kanülensetzpunktes etwas zusammenzukneifen. Dies sorgt für eine sanfte Einführung der Nadel und verringert die Gefahr einer Verstopfung.*

   ![Activate_Pod_10](../images/DASH_images/Activate_Pod/Activate_Pod_10.png)    ![Activate_Pod_11](../images/DASH_images/Activate_Pod/Activate_Pod_11.jpg)

8. Wenn die Kanüle erfolgreich gesetzt wurde, erscheint ein grünes Häkchen und die Schaltfläche **Weiter** wird verfügbar.   
   Tippe auf **Weiter**.

   ![Activate_Pod_12](../images/DASH_images/Activate_Pod/Activate_Pod_12.jpg)

1. Der **Pod aktiviert** Bildschirm wird angezeigt.

   Klicke auf den grünen **Beenden** Button.

   Glückwunsch! Du hast jetzt eine neue Pod-Sitzung gestartet.

   ![Activate_Pod_13](../images/DASH_images/Activate_Pod/Activate_Pod_13.jpg)

2. Der Menübildschirm **Pod Management** sollte nun den **Aktiviere Pod (1)** Button als *deaktiviert* und den **Deaktiviere Pod (2)** Button als *aktiviert* angezeigen. Dies liegt daran, dass jetzt ein Pod aktiv ist und du keinen zusätzlichen Pod aktivieren kannst, ohne zuerst den aktuell aktiven Pod zu deaktivieren.

    Klicke auf den Zurück-Knopf auf deinem Smartphone, um zum Tab-Bildschirm **DASH** zurückzukehren, auf dem jetzt Informationen zu deiner aktiven Pod-Sitzung angezeigt werden, einschließlich der aktuellen Basalrate, Pod Reservoir Level, abgegebenem Insulin, Pod Fehlern und Warnungen.

    ***HINWEIS**: Weitere Details zu den angezeigten Informationen findest Du im [**DASH-Tab**](#omnipod-dash-tab)-Abschnitt dieses Dokuments.*

   ![Activate_Pod_14](../images/DASH_images/Activate_Pod/Activate_Pod_14.png)

   ![Activate_Pod_15](../images/DASH_images/Activate_Pod/Activate_Pod_15.jpg)

   ***HINWEIS:** Es hat sich bewährt die Einstellungen NACH der Aktivierung des Pods zu exportieren. Die Einstellungen sollten nach jeder Änderung des Pods oder einmal im Monat exportiert werden. Kopiere die exportierte Datei in einen Cloud-Speicher (z. B. Google Drive) oder irgendwo außerhalb des Smartphones, für den Fall, dass das Smartphone verloren geht (siehe auch [**Einstellungen exportieren**](../Maintenance/ExportImportSettings.md)).*


(omnipod-dash-deactivate-pod)=

### Pod deaktivieren

Unter normalen Umständen beträgt die erwartete Lebensdauer eines Pods drei Tage (72 Stunden) und zusätzliche 8 Stunden nach der Pod-Ablaufwarnung und somit insgesamt 80 Stunden.

Gehe wie folgt vor, um einen Pod zu deaktivieren (entweder vor dem Ablaufen der Nutzungsdauer oder wegen eines Pod-Fehlers):

1. Gehe auf den **DASH**-Tab, tippe auf **POD MGMT (1)**, auf dem **Pod Management**-Bildschirm tippe dann auf **Pod deaktivieren (2)**.

   ![Deactivate_Pod_1](../images/DASH_images/Deactivate_Pod/Deactivate_Pod_1.jpg)

   ![Deactivate_Pod_2](../images/DASH_images/Deactivate_Pod/Deactivate_Pod_2.png)

2. Auf dem Bildschirm **Pod deaktivieren**, klicke auf die **Weiter** Taste, um die Deaktivierung des Pods zu starten.

   Du erhältst vom Pod ein Piepen als Bestätigung, dass die Deaktivierung erfolgreich war.

   ![Deactivate_Pod_3](../images/DASH_images/Deactivate_Pod/Deactivate_Pod_3.jpg)

   ![Deactivate_Pod_4](../images/DASH_images/Deactivate_Pod/Deactivate_Pod_4.jpg)

3. Bei erfolgreicher Deaktivierung wird ein grünes Häkchen angezeigt. Klicke auf **Weiter** um die Deaktivierung des Pods abzuschließen.

   Du kannst nun deinen Pod entfernen, da die aktive Sitzung beendet wurde.

   ![Deactivate_Pod_5](../images/DASH_images/Deactivate_Pod/Deactivate_Pod_5.jpg)

4. Klicke auf den grünen Knopf, um zum Bildschirm **Pod Management** zurückzukehren.

   ![Deactivate_Pod_6](../images/DASH_images/Deactivate_Pod/Deactivate_Pod_6.jpg)

5. Du bist jetzt wieder im **Pod Management** Menü; drücke die Zurück-Taste auf Deinem Smartphone um zur Registerkarte **DASH** zurückzukehren.

   Überprüfe, ob das Feld **Pod Status** die Nachricht **Kein aktiver Pod** anzeigt.

   ![Deactivate_Pod_2](../images/DASH_images/Deactivate_Pod/Deactivate_Pod_2.png)

   ![Deactivate_Pod_8](../images/DASH_images/Enable_Dash/Enable_Dash_4.jpg)


(omnipod-dash-resuming-insulin-delivery)=

### Insulinabgabe fortsetzen

**HINWEIS**: Während eines **Profilwechsels** unterbricht AAPS - wie es auch der PDM macht - die Insulinabgabe, bevor das neue Basal-**Profil** gesetzt wird. Wenn die Kommunikation zwischen den Befehlen „Unterbrechen“ und „Fortsetzen“ fehlschlägt, kann die Insulinabgabe ausgesetzt bleiben. Mehr Informationen gibt es unter [**Insulinabgabe ausgesetzt**](#omnipod-dash-delivery-suspended) im Abschnitt Fehlerbehebung.

Wenn die Insulinlieferung ausgesetzt ist, muss dem aktiven aber aktuell „ausgesetzten“ Pod ein Kommando gesendet werden, die Insulinlieferung wieder fortzusetzen. Nachdem der Befehl erfolgreich verarbeitet wurde, wird die normale Insulinabgabe mit der aktuellen Basalrate fortgesetzt. Grundlage dafür ist das zu dieser Zeit aktive Basal**profil**. Der Pod akzeptiert dann wieder Befehle für Bolus, **TBR**und **SMB**.

1. Gehe zur Registerkarte **DASH** und stelle sicher, dass der **Pod Status (1)** **unterbrochen** anzeigt, drücke dann die **Abgabe fortsetzen (2)** Taste, um den aktuellen Pod anzuweisen, die normale Insulinabgabe fortzusetzen. Eine Nachricht **RESUME DELIVERY** wird im Feld **Pod Status (3)** angezeigt.

   ![Resume_1](../images/DASH_images/Resume/Resume_1.jpg)   ![Resume_2](../images/DASH_images/Resume/Resume_2.jpg)

2. Wenn der Befehl zur Fortsetzung der Insulinabgabe erfolgreich war, wird in einem Bestätigungsdialog die Nachricht **Insulinabgabe wieder aufgenommen.** angezeigt. Klicke **OK** um zu bestätigen und fortzufahren.

   ![Resume_3](../images/DASH_images/Resume/Resume_3.png)

3. In der Registerkarte **DASH** wird das Feld **Pod Status (1)** aktualisiert, es zeigt **In Betrieb** an und die **Insulinabgabe fortsetzen** Schaltfläche wird nicht mehr angezeigt.

   ![Resume_4](../images/DASH_images/Resume/Resume_4.jpg)

(omnipod-dash-silencing-pod-alerts)=

### Pod Alarme stummschalten

In dem folgenden Prozess wird gezeigt, wie Warntöne bestätigt und stummgeschaltet werden können, die auftreten, wenn die Laufzeit des aktiven Pods den Grenzwert für die Warnung vor dem Ablauf von 72 Stunden (3 Tage) erreicht. Dieser Grenzwert für die Laufzeit ist unter **Stunden bis zum Podende** in den DASH-Einstellungen 'Alarme' definiert. Die maximale Nutzungsdauer eines Pods beträgt 80 Stunden (3 Tage und 8 Stunden), dennoch empfiehlt der Hersteller, 72 Stunden (3 Tage) nicht zu überschreiten.

***HINWEIS**: Die Schaltfläche **ALARME STUMMSCHALTEN (3)** ist nur auf der Registerkarte **DASH** verfügbar, wenn der Alarm „Pod Ablauf“ oder „niedriger Reservoirstand“ ausgelöst wurde. Wenn die Option **ALARME STUMMSCHALTEN** nicht sichtbar ist und Du Pieptöne vom Pod hörst, versuche auf der DASH-Registerkarte zu „Aktualisieren“.*

1. **AAPS** sendet den Befehl an den Pod, um die Ablaufwarnung des Pods zu unterdrücken und aktualisiert das Feld **Pod Status (1)** mit **Aktive Alarme stummgeschaltet**. Dadurch wird auch die Schaltfläche **Alarme stummschalten (3)** angezeigt.

   ![ACK_alerts_1](../images/DASH_images/ACK_Alerts/ACK_ALERTS_1.png)

2. Dadurch wird auch die Schaltfläche **Alarme stummschalten (3)** angezeigt. **AAPS** sendet den Befehl an den Pod, um die Ablaufwarnung des Pods zu unterdrücken und aktualisiert das Feld **Pod Status (1)** mit **Aktive Alarme stummgeschaltet**.

   ![ACK_alerts_2](../images/DASH_images/ACK_Alerts/ACK_ALERTS_2.png)

3. Nach **erfolgreicher Stummschaltung** der Alarme werden **2 Pieptöne** vom aktiven Pod ausgegeben und ein Bestätigungsdialog zeigt die Nachricht **Aktive Alarme stummgeschaltet**. Drücke **OK**, um den Dialog zu bestätigen und zu schließen.

   ![ACK_alerts_3](../images/DASH_images/ACK_Alerts/ACK_ALERTS_3.png)

4. Wechsele zur Registerkarte **DASH**. Im Feld **Aktive Pod-Warnungen** wird keine Warnmeldung mehr angezeigt und der aktive Pod gibt keine Pieptöne zur Warnung mehr ab.

(omnipod-dash-view-pod-history)=

### Anzeige Pod-Historie

In diesem Abschnitt wird erklärt, wie Du Deine Pod-Historie überprüfen und nach verschiedenen Aktionskategorien filtern kannst. Mit dem Werkzeug 'Pod Historie' kannst Du die Aktionen und Ergebnisse deines jeweils aktiven Pod während dessen dreitägigem Lebenszyklus (72 - 80 Stunden) ansehen.

Diese Funktion ist hilfreich bei der Überprüfung von Bolus-, TBR- und Basalraten-Befehlen, die an den Pod gesendet wurden. Die übrigen Kategorien sind hilfreich bei der Problembehebung und zur Bestimmung der Reihenfolge von Ereignissen, die zu einem Fehler geführt haben.

***HINWEIS:** ** Nur der letzte Befehl kann unsicher sein**. Neue Befehle *werden erst dann wieder gesendet*, wenn der **zuvor als „unsicher“ eingestufte Befehl entweder bestätigt oder abgelehnt wurde**. Ein unsicherer Befehl kann durch **Pod-Status aktualisieren** behoben werden.*

1. Gehe zur Registerkarte **DASH** und klicke auf **POD MGMT (1)** und dann auf dem **Pod Management** Bildschirm klicke auf den **Pod Historie (2)** Button.

   ![Pod_history_1](../images/DASH_images/Deactivate_Pod/Deactivate_Pod_1.jpg)  
   ![Pod_history_2](../images/DASH_images/Pod_History/Pod_history_2.jpg)

2. Auf dem **Pod Historie** Bildschirm wird als Standard die Kategorie **Alle (1)** angezeigt. Sie zeigt **Datum und Zeit (2)** aller Pod **Aktionen (3)** und **Ergebnisse (4)** in umgekehrter chronologischer Reihenfolge. Drücke **2 Mal die Zurück-Taste** des Smartphones, um zur Registerkarte **DASH** im **AAPS**-Bildschirm zurückzukehren.

   ![Pod_history_3](../images/DASH_images/Pod_History/Pod_history_3.jpg) ![Pod_history_4](../images/DASH_images/Pod_History/Pod_history_4.jpg)

(omnipod-dash-tab)=

## Registerkarte DASH

Im Folgenden werden die Anordnung und die Bedeutung der Symbole und Statusfelder auf der Registerkarte **DASH** des AAPS-Hauptbildschims erläutert.

***HINWEIS:** Wenn in einem der Statusfelder der **DASH**-Registerkarte die Meldung „unsicher“ erscheint, musst Du die Schaltfläche „Aktualisieren“ drücken, um die Meldung zu löschen und den Pod-Status zu aktualisieren.*

![DASH_Tab_1](../images/DASH_images/DASH_Tab/DASH_Tab_1.png)

### Felder



- **Bluetooth-Adresse:** Zeigt die aktuelle Bluetooth-Adresse des verbundenen Pods an.

- **Bluetooth-Status:** Zeigt den aktuellen Verbindungsstatus an.

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

  - Beispiel:* 0,00 IE/h @18:25 ( 90/120 Minuten)

- **Reservoir:** Zeigt 50+ IE übrig an, wenn mehr als 50 Einheiten im Reservoir vorhanden sind. Unter 50 IE werden die exakten Einheiten angezeigt.

- **Insgesamt abgegeben:** Zeigt die Gesamtzahl der aus dem Reservoir abgegebenen Insulineinheiten an. Dies schließt Insulin ein, das zum Aktivieren und Befüllen verwendet wurde.

- **Fehler:** Zeigt den letzten Fehler an. Prüfe die [Pod Historie](#omnipod-dash-view-pod-history) und die Protokolldateien („log files“) auf vorhandene Fehlermeldungen und detailliertere Informationen.

- **Aktive Pod-Warnungen:** Zeigt jeweils aktuelle Warnungen auf dem aktiven Pod.



### Schaltflächen

![Refresh_Icon](../images/DASH_images/Refresh_LOGO.png) Sendet einen Befehl an den aktiven Pod, um die Kommunikation zu wieder herzustellen (aktualisieren).

  - *Verwende diese Option, um den Pod-Status zu aktualisieren und die Statusfelder zu erneuern, die den Text 'unsicher' enthalten.*

  - *Weitere Informationen findest Du im Abschnitt [Fehlerbehebung](#omnipod-dash-troubleshooting).*

![POD_MGMT_Icon](../images/DASH_images/POD_MGMT_LOGO.png)   Öffnet den Pod-Management Bildschirm.

![ack_alert_logo](../images/DASH_images/ack_alert_logo.png) Drücken, um die Pod-Alarme und Benachrichtigungen (Ende der Laufzeit, niedriges Reservoir) stumm zuschalten.

  - *Der Button wird nur angezeigt, wenn die aktuelle Zeit des Pods nach dem Pod-Ablaufdatum liegt.*
  -  *Nach erfolgreicher Bestätigung wird dieses Symbol nicht mehr angezeigt.*

![RESUME_Icon](../images/DASH_images/DASH_tab_icons/RESUME_Icon.png)    Setzt eine ausgesetzte Insulinabgabe im aktiven Pod fort.



### Pod Management Menu

Unten sind die Funktionalitäten, die sich hinter den Symbolen auf dem **Pod Management**-Menü verbergen, beschrieben. Das Menü erreichst Du über die **POD MGMT (1)**-Schaltfläche aus der **DASH**-Registerkarte heraus.

![DASH_Tab_2](../images/DASH_images/Deactivate_Pod/Deactivate_Pod_1.jpg)

![DASH_Tab_3](../images/DASH_images/DASH_Tab/DASH_Tab_3.png)

**Die folgende Tabelle beschreibt jede Schaltfläche und deren Funktion:**

| Schaltfläche | Funktion                                                                                              |
| ------------ | ----------------------------------------------------------------------------------------------------- |
| 1            | Zugriff auf die Pod Management-Einstellungen                                                          |
| 2            | [**Pod aktivieren**](#omnipod-dash-activate-pod): Füllt und aktiviert einen neuen Pod.                |
| 3            | [**Pod deaktivieren**](#omnipod-dash-deactivate-pod): Deaktiviert den derzeit aktiven Pod.            |
| 4            | **Testton abspielen**: Spielt einen einzelnen Test Piep auf dem Pod ab.                               |
| 5            | [**Pod Historie**](#omnipod-dash-view-pod-history) : Zeigt den Aktivitätsverlauf des aktiven Pods an. |


(omnipod-dash-settings)=

## DASH-Einstellungen

Wenn diese Option nicht aktiviert ist, findest Dudie DASH Registerkarte links oben im Hamburger-Menü. Wenn Du das **Kontrollkästchen (4)** neben dem **Zahnrad (3)** aktivierst, wird das DASH-Menü als Registerkarte im **AAPS**-Interface mit dem Titel **DASH** als eigener Tab angezeigt.

![Dash_settings_1](../images/DASH_images/Enable_Dash/Enable_Dash_3.png)

***HINWEIS:** Einen schnelleren Zugriff auf die **DASH-Einstellungen** erlaubt das **3-Punkt-Menü (1)** in der oberen rechten Ecke der Registerkarte **DASH** und die Auswahl **DASH-Einstellungen (2)** aus dem Dropdown-Menü.*

![Dash_settings_3](../images/DASH_images/Dash_settings/Dash_settings_3.png)

Die Einstellungen sind nach Gruppen sortiert unten aufgelistet. Du kannst die meisten der Einstellungen über einen Kippschalter aktivieren oder deaktivieren:

***HINWEIS**: Ein Sternchen (\*) bedeutet, dass der „aktiviert" der Standardwert für eine Einstellung ist.*

### Bestätigungstöne

![Dash_settings_4](../images/DASH_images/Dash_settings/Dash_settings_4.jpg)

Bestätigt mit Signaltönen des Pods die Abgabe und Änderung von Bolus, Basalrate, SMB und TBR.

**Bolus-Piep aktiviert:** Aktiviert oder deaktiviert Bestätigungstöne bei Abgabe eines Bolus.

**Basal-Piep aktiviert:** Aktiviert oder deaktiviert Bestätigungstöne bei Einstellung einer neuen, Abbruch der aktiven oder Änderung der aktuellen Basalrate.

**SMB-Piep aktiviert:** Aktiviert oder deaktiviert Bestätigungstöne bei Abgabe eines SMB.

**TBR-Piep aktiviert:** Aktiviert oder deaktiviert Bestätigungstöne, bei Setzen oder Abbruch einer TBR.



### Alarme

![Dash_settings_5](../images/DASH_images/Dash_settings/Dash_settings_5.jpg)

Einstellungen für **AAPS**-Alarme für Ablauferinnerung, Zeit bis Pod-Ende und niedrigen Reservoirstand basierend auf den definierten Schwellwerten.

***HINWEIS:** Beachte, dass eine AAPS-Benachrichtigung IMMER für jeden Alarm nach der ersten Kommunikation mit dem Pod ausgegeben wird, da der Alarm ausgelöst wurde. Wenn Du die Benachrichtigung löschst, wird der Alarm NICHT gelöscht, AUSSER wenn die automatische Bestätigung von Pod-Alarmen aktiviert ist. Um den Alarm MANUELL zu löschen, musst Du auf der Registerkarte **DASH** den **Alarm stummschalten** Button drücken.*

**Ablauferinnerung aktiviert:** Aktiviere oder deaktiviere die Pod-Ablauferinnerung, die ausgelöst wird, wenn die festgelegte Anzahl von Stunden vor dem Pod-Ende erreicht ist.

**Stunden bis zum Pod-Ende:** Legt die Anzahl der Stunden vor der Abschaltung des aktiven Pods fest, die den Alarm zur Pod-Ablauferinnerung auslöst.

**Warnung niedriger Reservoirstand aktiviert:** Aktiviere oder deaktiviere eine Warnung für das Limit für den niedrigen Reservoirstand der verbleibenden Einheiten des Pods, wie es im Feld „Anzahl der Einheiten“ definiert ist.

**Anzahl der Einheiten:** Die Anzahl der verbleibenden Einheiten, bei denen der Alarm für den niedrigen Reservoirstand ausgelöst werden soll.



### Benachrichtigungen

![Dash_settings_6](../images/DASH_images/Dash_settings/Dash_settings_6.jpg)

Im Benachrichtigungsabschnitt kannst Du für den Fall, dass für AAPS nicht klar ist, ob TBR, SMB, Bolus oder eine Unterbrechnung der Insulinabgabe erfolgreich ausgeführt wurden, entsprechende Benachrichtigungen und akustische Smartphone-Warnungen aktivieren.

***HINWEIS**: Dies sind nur Benachrichtigungen, es werden keine akustischen Signale ausgegeben.*

**Ton für unsichere TBR-Benachrichtigung aktiviert:** Aktiviere oder deaktiviere diese Einstellung, um einen akustischen Alarm und eine visuelle Benachrichtigung auszulösen, wenn **AAPS** unsicher ist, ob eine TBR erfolgreich gesetzt wurde.

**Ton für unsichere SMB-Benachrichtigung aktiviert:** Aktiviere oder deaktiviere diese Einstellung, um einen akustischen Alarm und eine visuelle Benachrichtigung auszulösen, wenn **AAPS** unsicher ist, ob ein SMB erfolgreich abgegeben wurde.

**Ton für unsichere Bolus-Benachrichtigung aktiviert:** Aktiviere oder deaktiviere diese Einstellung, um einen akustischen Alarm und eine visuelle Benachrichtigung auszulösen, wenn **AAPS** unsicher ist, ob ein Bolus erfolgreich abgegeben wurde.

**Ton bei unterbrochener Abgabe aktiviert:** Aktivieren oder deaktiviere diese Einstellung, um eine akustische Benachrichtigung und visuelle Benachrichtigung auszulösen, wenn die Unterbrechung der Insulinabgabe erfolgreich durchgeführt wurde.

## Aktionen (AKT) Tab

Diese Registerkarte ist in der **AAPS**-Dokumentation gut beschrieben, aber es gibt einige Punkte auf dieser Registerkarte, die sich speziell darauf beziehen, wie sich der DASH von schlauchbasierten Pumpen unterscheidet, insbesondere nach dem Anbringen eines neuen Pods.

1. Gehe von der **AAPS**-Übersicht zur Registerkarte **Aktionen (AKT)**.

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

Dieser Abschnitt behandelt bekannte Probleme und Lösungen für den Einsatz des Omnipod DASH mit AAPS. Es gibt in der Dokumentation auch einen Abschnitt [Allgemeine Fehlerbehebung](../GettingHelp/GeneralTroubleshooting.md), den Du lesen solltest, da dort auch relevante Pod-Themen abgedeckt werden.

---

(omnipod-dash-bluetooth-related-issues)=

## **Bluetooth-Probleme**

Bei bekannten Problemen mit Bluetooth-Verbindungen, Pumpen/Pods oder Aktivierungs- und Verbindungsproblemen schau im Abschnitt [Bluetooth-Fehlerbehebung](../GettingHelp/BluetoothTroubleshooting.md) nach.

---
### Insulinabgabe unterbrochen

  - Es gibt keine Unterbrechen-Taste mehr. Wenn Du die Insulinabgabe unterbrechen möchtest, kannst Du eine Null-**TBR** für x Minuten setzen.
  - Während eines **Profilwechsels** muss der DASH die Insulinabgabe unterbrechen, bevor das neue Basal-**Profil** gesetzt wird. Wenn die Kommunikation zwischen den beiden Befehlen fehlschlägt, kann die Insulinabgabe unterbrochen bleiben. Wenn das passiert:
     - Es gibt dann keine Insulinabgabe; dies schließt Basal, SMB, manuelle Boli usw. ein.
     - Es kann eine Benachrichtigung geben, dass einer der Befehle unbestätigt blieb: Dies hängt davon ab, wann der Fehler aufgetreten ist.
     - **AAPS** wird alle 15 Minuten versuchen, das neue Basalprofil zu setzen.
     - **AAPS** wird alle 15 Minuten darüber benachrichtigen, dass die Insulinabgabe unterbrochen ist, sofern die Abgabe noch immer unterbrochen ist (Insulinabgabe konnte nicht gestartet werden).
     - Die [**Lieferung fortsetzen**](#omnipod-dash-resuming-insulin-delivery)-Schaltfläche wird aktiviert, wenn der Benutzer die Insulinlieferung manuell fortsezt.
     - Wenn **AAPS** die Abgabe nicht alleine fortsetzen kann (dies geschieht, wenn der Pod nicht erreichbar ist, der Ton stumm geschaltet ist, etc.), beginnt der Pod für 3 Minuten jede Minute viermal zu piepen. Das wird, wenn die Abgabe für mehr als 20 Minuten ausgesetzt ist, alle 15 Minuten wiederholt.
  - Für unbestätigte Befehle sollte "Aktualisieren" des Podstatus diese bestätigen oder ablehnen.

*****HINWEIS:** Wenn Du Pieptöne vom Pod hörst, kannst Du nicht davon ausgehen, dass die Insulinabgabe ohne Überprüfung im Smartphone fortgesetzt wird. Die Abgabe könnte weiterhin ausgesetzt bleiben, ***also musst Du prüfen, was los ist!******

---
### Pod Fehler

- Pods fallen gelegentlich aus unterschiedlichen Gründen aus, u. a. wegen Hardwareproblemen mit dem Pod selbst.
- Da AAPS offiziell nicht für die Interaktion mit Pods zugelassen ist, sollten keine Support-Tickets für Ersatz-Pods bei Insulet aufgemacht werden.
- Um die Ursache zu ermitteln, kannst Du in [**dieser Liste**](https://github.com/openaps/openomni/wiki/Fault-event-codes) die Fehlercodes nachschlagen.

---
### Verhindere Pod Fehler 49

Dieser Fehler hängt mit einem fehlerhaften Pod-Status für einen Befehl oder einem Fehler während der Insulinabgabe zusammen. Dies ist der Fall, wenn der AAPS-Treiber und der Pod unterschiedliche Angaben zum aktuellen Status haben. Der Pod reagiert (aufgrund einer eingebauten Sicherheitsfunktion) dann mit einem nicht auflösbaren Fehlercode 49 (0x31) und verabschiedet sich mit einem so genannten „Heuler“: dem langen, irritierenden Piepton, der nur gestoppt werden kann, indem mit einer Büroklammer in ein Loch am richtigen Ort auf der Rückseite des Pods gedrückt wird. Der genaue Ursprung eines „Pod Fehlers 49“ ist oft schwer zu ermitteln. Situationen, die für das Auftreten dieses Fehlers vermutet werden (z.B. bei einem Absturz der Anwendung, beim Ausführen einer Entwicklungsversion oder bei einer Neuinstallation).

---

### Pumpe nicht erreichbar Alarme

Wenn für eine voreingestellte Zeitspanne keine Kommunikation mit dem Pod hergestellt werden kann, wird eine „Pumpe nicht erreichbar“ Alarmmeldung angezeigt. „Pumpe nicht erreichbar“-Alarme können über das Drei-Punkte-Menü oben rechts konfiguriert werden. Wähle **Einstellungen** ➜ **Lokale Alarme** ➜ ** Grenzwert Pumpe ist nicht erreichbar [min]**. Eine Alarmierung nach **120** Minuten wird als Wert empfohlen.

---
### Exporteinstellungen

Durch den Export der **AAPS**-Einstellungen kannst Du alle Deine Einstellungen - und vielleicht noch wichtiger - alle Deine Objectives (Ziele) wiederherstellen. Es kann passieren, dass die Einstellungen in der „letzten bekannten funktionierenden Fassung“ wieder hergestellt werden müssen, etwa nach der Deinstallation/Neuinstallation von **AAPS** oder im Falle eines Smartphone-Verlustes.

***HINWEIS:** Die Informationen des aktiven Pods sind in den exportierten Einstellungen enthalten. Wenn Du eine „alte“ Exportdatei importierst, wird Dein aktueller Pod „sterben“. Es gibt hierzu keine Alternative. In einigen Fällen (wie bei einem _geplanten_ Austausch Deines Smartphones) musst Du unter Umständen die exportierte Datei verwenden, um **AAPS**-Einstellungen wiederherzustellen, **um so den aktuell aktiven Pod** weiter nutzen zu können. In diesem Fall ist es wichtig, nur die zuletzt exportierte Einstellungsdatei zu verwenden, die den aktuell aktiven Pod enthält.*

**Es ist eine gute Idee, einen Export sofort nach der Aktivierung eines Pods durchzuführen.** Auf diese Weise wirst Du immer in der Lage sein, die Verbindung zum aktuell aktiven Pod im Falle eines Problems wiederherzustellen. Zum Beispiel, wenn Du auf ein anderes Smartphone wechseln willst.

Kopiere regelmäßig Deine exportierten Einstellungen (idealerweise direkt nach dem Export) an einen sicheren Ort (einen Cloudspeicher z. B. Google Drive) auf den Du mit einem beliebigen Smartphone zugreifen kannst. Damit kannst Du das Setup von einem beliebigen Smartphone aus wiederherstellen, auch wenn Du Dein Smartphone verloren haben solltest oder Du nicht Zuhause sein solltest.

---
### Importeinstellungen

**WARNUNG**: Bitte beachte, dass durch das Importieren der Einstellungen möglicherweise auch ein veralteter Pod-Status mit importiert wird (abhängig davon, wann Du den letzen Export/Backup gemacht hast).  
Infolgedessen besteht das **Risiko, den aktiven Pod zu verlieren!** (siehe **Exportieren von Einstellungen**).
1. Versuche nur dann zu importieren, wenn keine andere Möglichkeit gibt.
2. Wenn Du die Einstellungen mit einem aktiven Pod importierst, stelle sicher, dass der Export ebenfalls mit diesem Pod durchgeführt wurde.

**Importieren während ein Pod aktiv ist:** (Du riskierst den Pod!)

1. **Stelle sicher, dass Du Einstellungen importierst, die kürzlich mit dem aktuell aktiven Pod exportiert wurden!**
2. Einstellungen importieren
3. Alle Voreinstellungen kontrollieren.

**Importieren ohne aktiven Pod**

1. Importieren aller kürzlichen Exporte sollte funktionieren (siehe oben)
2. Einstellungen importieren
3. Alle Voreinstellungen kontrollieren.
4. Es kann erforderlich sein, einen in den importierten Einstellungen enthaltenen, aber nicht mehr vorhandenen Pod zu **deaktivieren**.

---
### Importieren von Einstellungen, die den Pod-Status von einem inaktiven Pod enthalten

Wenn Du Einstellungen für einen mittlerweile inaktiven Pod importierst, wird AAPS versuchen sich mit diesem Pod zu verbinden. Dies wird logischerweise scheitern. Du kannst in dieser Situation keinen neuen Pod aktivieren.

Um die alte Pod-Sitzung zu löschen:
1. „Versuche“, den Pod zu deaktivieren. Die Deaktivierung wird wahrscheinlich nicht funktionieren.
2. Wähle "Wiederholen".
3. Nach der zweiten oder dritten Wiederholung erhälst Du die Möglichkeit, den Pod zu entfernen.
4. Sobald der alte Pod gelöscht ist, kannst Du einen neuen Pod aktivieren.

### Generic error: java.lan.illegalStateException: Trying to set a Bluetooth Address to ***, but it is already set to ***.

Wenn Du beim Initialisieren eines neuen Pods diese Fehlermeldung erhältst, liegt es daran, dass **AAPS** noch die Einstellungen des alten Pods in der Konfiguration gespeichert hat.

![omnipod_address_in_use](../images/DASH_images/Errors/omnipod_address_in_use.png)

Das kann passieren, wenn Du ein Backup wieder einspielst oder die Deaktivierung eines Pods nicht funktioniert hat.

Zum Beheben des Fehlers, klicke so oft auf `WIEDERHOLEN` bis eine `Verwerfen`-Option angezeigt wird. Klicke dann auf „Verwerfen“. Das Vorgehen sollte auch bei der Deaktivierung eines Pods funktionieren.

Du solltest jetzt einen neuen Pod aktivieren können.

---
### Neuinstallation von AAPS

Beim Deinstallieren von **AAPS** verlierst Du alle Einstellungen, Objectives (Ziele) und die laufende Pod-Sitzung. **Um diese wiederherzustellen, stelle sicher, dass Du eine kürzlich exportierte Einstellungsdatei zur Verfügung hast!**

Wenn ein Pod aktiv ist, stelle sicher, dass Du einen Export für die aktuelle Pod-Sitzung hast oder Du wirst den aktuell aktiven Pod durch das Importieren der älteren Einstellungen verlieren.

1. Exportiere Deine Einstellungen und speichere eine Kopie an einem sicheren Ort (z. B. Google Drive).
2. Deinstalliere **AAPS** und starte Dein Smartphone neu.
3. Installiere die neue **AAPS**-Version.
4. Einstellungen importieren
5. Überprüfe alle Einstellungen (optional Einstellungen erneut importieren).
6. Aktiviere einen neuen Pod.
7. Anschließend: Aktuelle Einstellungen exportieren.

---
### AAPS auf eine neuere Version aktualisieren

In den meisten Fällen ist eine Deinstallation nicht erforderlich. Du kannst eine „in-place“ Installation durchführen, indem Du die Installation für die neue Version startest. Dies ist auch möglich, wenn ein Pod aktiv ist.

1. Exportiere Deine Einstellungen.
2. Installiere die neue **AAPS**-Version.
3. Überprüfe, ob die Installation erfolgreich war.
4. Verbinde den Pod wieder oder aktiviere einen neuen Pod.
5. Anschließend: Aktuelle Einstellungen exportieren.

---
### Omnipod-Treiberwarnungen

Bitte beachte, dass der Omnipod-Treiber auf der Registerkarte **Übersicht** eine Vielzahl eindeutiger Warnungen anzeigt. Die meisten davon sind informativ und können ignoriert werden, während einige dem Benutzer eine Aktion vorschlagen, um die Ursache für die ausgelöste Warnung zu beheben.

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
-  **Level 1:** Wenn Du immer noch Probleme, die Du mit diesem Dokument nicht lösen kannst, haben solltest, gehe **Discord-**Kanal *#AAPS*. Nutze dazu [diesen Einladungslink <https://discord.gg/4fQUWHZ4Mw>](https://discord.gg/4fQUWHZ4Mw). Es gibt auch zahlreiche Facebook- und andere Gruppen, in denen Du Fragen stellen kannst (siehe [**Wo kann ich Hilfe erhalten?**](../GettingHelp/WhereCanIGetHelp.md))
-  **Level 2:** Durchsuche bereits bestehende 'Issues', um zu sehen, ob Dein Problem bereits in den [Issues](https://github.com/nightscout/AndroidAPS/issues) gemeldet wurde. Falls es bereits vorhanden ist, bestätige/kommentiere/ergänze bitte Informationen zu Deinem Problem. Wenn nicht, erstelle bitte ein [neues Issue](https://github.com/nightscout/AndroidAPS/issues) und füge [Deine Protokolldateien](../GettingHelp/AccessingLogFiles.md) (Logs) hinzu.
-  **Sei geduldig - die meisten Mitglieder unserer Community sind gutmütige Freiwillige und die Lösung von Problemen erfordert oft Zeit und Geduld von Nutzern und Entwicklern.**

Wenn Du nach Hilfe fragst, solltest Du die folgenden Informationen parat haben, damit in der Community mit spezifischen Fragen und Problemen geholfen werden kann:
- Hersteller und Modell des Android-Smartphones
- Android-Version (z. B. 15 oder 16)
  - Hast Du vor Kurzem ein Android-Update durchgeführt?
- Die von Dir genutzte **AAPS**-Version
- Eine einfache englische Beschreibung Deines Problems, die die folgenden Dinge bereits berücksichtigt hat
   - Hat es bisher funktioniert?
   - Wann hat es funktioniert oder wann hat es nicht funktioniert?
   - Hast Du Änderungen an der Konfiguration oder den Profileinstellungen vorgenommen?
   - Hast Du ein neues Bluetooth-Gerät gekoppelt?
   - Hast Du eine neue App installiert oder aktualisiert?
   - Wie lange hat es funktioniert, bevor es nicht mehr funktionierte?
