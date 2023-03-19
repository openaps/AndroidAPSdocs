# AAPS Omnipod Insulin Pump Driver Documentation

These instructions are for configuring the Omnipod Eros generation pump (**NOT Omnipod Dash**). The Omnipod driver is available as part of AAPS (AAPS) as of version 2.8.

**Diese Software ist Teil einer DIY-Lösung (Do It Yourself = Eigenbau) und kein kommerzielles Produkt. Daher bist DU gefordert. DU musst lesen, lernen und verstehen, was das System macht und wie du es bedienst. Du bist ganz alleine dafür verantwortlich, was Du mit dem System machst.**

```{contents}
:backlinks: entry
:depth: 2
```

## Hardware- und Software-Anforderungen

- **Pod-Kommunikationsgerät**

> Component that bridges communication from your AAPS enabled phone to Eros generation pods.
> 
> > - ![OrangeLink](../images/omnipod/OrangeLink.png)  [OrangeLink Website](https://getrileylink.org/product/orangelink)
> > - ![RileyLink](../images/omnipod/RileyLink.png) [433MHz RileyLink](https://getrileylink.org/product/rileylink433)
> > - ![EmaLink](../images/omnipod/EmaLink.png)  [Emalink Website](https://github.com/sks01/EmaLink) - [Contact Info](mailto:getemalink@gmail.com)
> > - ![DiaLink](../images/omnipod/DiaLink.png)  DiaLink - [Contact Info](mailto:Boshetyn@ukr.net)
> > - ![LoopLink](../images/omnipod/LoopLink.png)  [LoopLink Website](https://www.getlooplink.org/) - [Contact Info](https://jameswedding.substack.com/) - Untested

- ![Android_phone](../images/omnipod/Android_phone.png)  **Mobile Phone Device**

> Component that will operate AAPS and send control commands to the Pod communication device.
> 
> > - Unterstützte [Android-Smartphones](https://docs.google.com/spreadsheets/d/1eNtXAWwrdVtDvsvXaR_72wgT9ICjZPNEBq8DbitCv_4/edit) mit AAPS ab Version 2.8 und zugehörigem [Komponenten-Setup](index-component-setup)

- ![Omnipod_Pod](../images/omnipod/Omnipod_Pod.png)  **Insulin Delivery Device**

> Component that will interpret commands received from the Pod communication device originating from your AAPS enable phone.
> 
> > - Ein neuer Omnipod-Pod (Eros-Generation - **NICHT DASH**)

Diese Anleitung geht davon aus, dass Du eine neue Pod-Sitzung startest. Falls dies nicht der Fall ist, habe bitte Geduld und beginne diesen Prozess erst bei Deinem nächsten Starten eines neuen Pods.

## Bevor du anfängst

**Sicherheit geht vor** - Stelle sicher, dass Du auf eventuell auftretende Fehler reagieren kannst, bevor Du diesen Prozess beginnst: zusätzliche Pods, Insulin, geladener RileyLink und Smartphone mit vollem Akku sind unbedingt notwendig.

**Dein Omnipod PDM funktioniert nicht mehr, wenn der AAPS Omnipod Treiber Deinen Pod aktiviert hat**. Bisher hast Du Deinen Omnipod PDM verwendet, um Befehle an Deinen Omnipod Eros Pod zu senden. Ein Omnipod Eros Pod kann sich nur mit einem einzigen Gerät verbinden. Das Gerät, das den Pod erfolgreich aktiviert, ist das einzige Gerät, das von diesem Zeitpunkt an mit ihm kommunizieren darf. Dies bedeutet, dass, sobald Du einen Omnipod Eros Pod mit Deinem RileyLink über den AAPS Omnipod Treiber aktiviert hast, **wirst Du Deinen PDM nicht mehr mit diesem Pod** verwenden können. Der AAPS Omnipod Treiber mit dem RileyLink ist dann Dein aktiver PDM. *Dies bedeutet NICHT, dass Du Deinen PDM wegwerfen solltest. Es wird empfohlen, ihn als Backup zu behalten und für Notfälle, falls AAPS nicht korrekt funktioniert.*

**Du kannst mehrere RileyLinks konfigurieren, aber nur ein RileyLink kann gleichzeitig mit einem Pod kommunizieren.** Der AAPS Omnipod Treiber unterstützt die Möglichkeit, mehrere RileyLinks in der RileyLink-Konfiguration hinzuzufügen, jedoch kann nur ein RileyLink gleichzeitig für das Senden und Empfangen der Kommunikation ausgewählt werden.

**Dein Pod wird nicht abgeschaltet, wenn der RileyLink außerhalb der Reichweite liegt.** Dein Pod wird weiterhin Basal-Insulin liefern, wenn Dein RileyLink außerhalb der Reichweite ist oder die Kommunikation mit dem aktiven Pod geblockt wird. Beim Aktivieren eines Pods wird das in AAPS definierte Profil in den neuen Pod programmiert. Wenn du den Kontakt zum Pod verlierst, wird er auf dieses zurückgesetzt. Du kannst keine neuen Befehle senden, solange der RileyLink nicht wieder in Reichweite kommt und die Verbindung wiedergeherstellt ist.

**30 min Basal Rate Profiles are NOT supported in AAPS.** If you are new to AAPS and are setting up your basal rate profile for the first time please be aware that basal rates starting on a half hour are not supported and you will need to adjust your basal rate profile to start on the hour. Wenn Du zum Beispiel eine Basalrate von 1,1 Einheiten hast, die um 9:30 Uhr startet und zwei Stunden bis 11:30 Uhr läuft, wird dies nicht funktionieren.  Du muss diese 1,1 IE Basalrate auf einen Zeitraum von entweder 9:00 - 11:00 Uhr oder 10:00 - 12:00 Uhr einstellen.  Even though the 30 min basal rate profile increments are supported by the Omnipod hardware itself, AAPS is not able to take them into account with its algorithms currently.

## Aktivieren des Omnipod-Treibers in AAPS

Du kannst den Omnipod-Treiber in AAPS auf **zwei Wegen** aktivieren:

### Option 1: Der Einrichtungsassistent

After installing a new version of AAPS, the **Setup Wizard** will start automatically.  Dies wird auch nach einem Upgrade geschehen.  Wenn du die Einstellungen von einer vorherigen Installation exportiert hast, kannst du den Einrichtungsassistenten beenden und deine alten Einstellungen importieren.  Für Neuinstallationen fahre unten fort.

Über den **AAPS Setup Wizard (2)** , der oben rechts im **Drei-Punkt-Menü (1)** zugänglich ist und weiter durch das Assistentenmenüs (Setup Wizard) gelangst Du bis zum Bildschirm **Pump**. Dann wähle den **Omnipod Radio Button (3)**.

> ![Enable_Omnipod_Driver_1](../images/omnipod/Enable_Omnipod_Driver_1.png)  ![Enable_Omnipod_Driver_2](../images/omnipod/Enable_Omnipod_Driver_2.png)

Auf dem gleichen Bildschirm werden unter der Pumpenauswahl die **Omnipod-Treibereinstellungen** angezeigt. Füge unterhalb der **RileyLink Konfiguration** Dein RileyLink Gerät hinzu, indem Du den **Nicht gesetzt** Text drückst.

Drücke auf dem Bildschirm **RileyLink Auswahl** die **Scan-Schaltfläche (4)** um einen Bluetooth Scan zu starten. Wenn Du alles richtig ausgewählt hast, wirst Du auf den Bildschirm der Pumpentreiberauswahl (unter Omnipod Treibereinstellungen) zurückgeleitet. Dort sollte die MAC-Adresse Deines gewählten RileyLink anzeigt werden.

Drücke den **Weiter** Button, um mit dem Rest des **Setup-Assistenten fortzufahren.**  Es kann bis zu einer Minute dauern, bis der gewählte RileyLink initialisiert wird und der **Weiter** Button aktiviert wird.

Die Details zur Einrichtung des Pod-Kommunikationsgeräts finden sich weiter unten im Bereich [RileyLink Setup](OmnipodEros-rileylink-setup).

**ODER**

### Option 2: Der Konfigurations-Generator

Über das **Hamburger Menü** oben links unter **Konfigurations-Assistent (1)** \<unk> **Pumpe**\<unk> **Omnipod** indem Du das **Auswahlfeld (2)** mit dem Titel **Omnipod** wählst. Wenn du das **Kontrollkästchen (4)** neben dem **Einstellungsrädchen (3)** wählst, wird das Omnipod-Menü als Registerkarte im AAPS-Interface mit dem Titel **POD** angezeigt. Dies wird in dieser Dokumentation als Registerkarte **Omnipod (POD)** bezeichnet.

> **HINWEIS:** Eine schnellere Möglichkeit zum Zugriff auf die **Omnipod-Einstellungen** findest du unten in der Rubrik [Omnipod-Einstellungen](OmnipodEros-omnipod-settings) dieses Dokuments.
> 
> ![Enable_Omnipod_Driver_3](../images/omnipod/Enable_Omnipod_Driver_3.png) ![Enable_Omnipod_Driver_4](../images/omnipod/Enable_Omnipod_Driver_4.png)

### Überprüfung der Omnipod-Treiberauswahl

*Hinweis: Wenn Du den Setup-Assistenten vorzeitig verlassen hast, ohne Deinen RileyLink auszuwählen, ist der Omnipod Treiber aktiviert, aber Du musst trotzdem Deinen RileyLink noch auswählen.  Dann erscheint bei dir der Omnipod (POD) Tab wie unten zusehen*

Um zu überprüfen, ob Du den Omnipod-Treiber in AAPS aktiviert hast, **wische nach links** vom Tab **Übersicht** wo du nun einen Reiter **Omnipod** oder **POD** siehst.

![Enable_Omnipod_Driver_5](../images/omnipod/Enable_Omnipod_Driver_5.png)

## Omnipod-Konfiguration

Bitte **wische nach links** zur **Omnipod (POD)** Registerkarte, wo Du alle Pod und RileyLink Funktionen verwalten kannst (einige dieser Funktionen sind ohne aktive Pod Sitzung nicht aktiviert oder nicht sichtbar):

> ![refresh_pod_status](../images/omnipod/ICONS/omnipod_overview_refresh_pod_status.png) Refresh Pod connectivity and status
> 
> ![pod_management](../images/omnipod/ICONS/omnipod_overview_pod_management.png) Pod-Management (Aktivieren, Deaktivieren, Testsignal, RileyLink Statistik und Pod-Historie)

(OmnipodEros-rileylink-setup)=

### RileyLink-Setup

Wenn Du Deinen RileyLink bereits erfolgreich im Setup-Assistenten oder wie oben beschrieben verbunden hast, fahre mit dem Abschnitt [Aktivieren eines Pod](OmnipodEros-activating-a-pod) fort.

*Hinweis: Ein guter visueller Hinweis dafür, dass der RileyLink nicht angeschlossen ist, ist, dass die Tasten Insulin und Bolusrechner auf der Startseite fehlen. Dies passiert auch in den ersten 30 Sekunden nach dem Start von AAPS, da AAPS sich erst mit dem RileyLink verbinden muss.*

1. Stelle sicher, dass Dein RileyLink voll geladen und eingeschaltet ist.

2. Nach der Auswahl des Omnipod-Treibers identifiziere und wähle Deinen RileyLink im **Config Builder (1)** <unk>**Pumpe**<unk>**Omnipod**<unk>**Getriebesymbol (Einstellungen) (2)** <unk>**RileyLink Konfiguration (3)** indem Du die **Nicht setzen** oder **MAC-Adresse (falls vorhanden)** drückst.

   > Stelle sicher, dass dein RileyLink-Akku vollständig geladen ist und sich [in unmittelbarer Nähe](OmnipodEros-optimal-omnipod-and-rileylink-positioning) (~30 cm entfernt oder weniger) zu Deinem Smartphone befindet, damit AAPS dessen MAC-Adresse finden kann. Einmal ausgewählt, kannst Du Deine erste Pod Session aktivieren. Benutze die Zurück-Taste auf Deinem Handy, um zum AAPS-Haupt-Bildschirm zurückzukehren.
   > 
   > ![RileyLink_Setup_1](../images/omnipod/RileyLink_Setup_1.png) ![RileyLink_Setup_2](../images/omnipod/RileyLink_Setup_2.png)

3. Drücke die **Weiter** Taste, um mit dem Rest des **Einrichtungsassistenten** fortzufahren. **Wählen Sie Ihren RileyLink (5)**  aus der Liste der verfügbaren Bluetooth-Geräte aus.

   > ![RileyLink_Setup_3](../images/omnipod/RileyLink_Setup_3.png) ![RileyLink_Setup_4](../images/omnipod/RileyLink_Setup_4.png)

4. Nach erfolgreicher Auswahl wirst Du zu den Omnipod Einstellungen zurückgeleitet, welche die **MAC-Adresse Deines aktuell ausgewählte RileyLinks auflisten (6).**

   > ![RileyLink_Setup_5](../images/omnipod/RileyLink_Setup_5.png)

5. Vergewissere Dich, dass im Tab **Omnipod (POD)** der **RileyLink-Status (1)** als **verbunden erscheint.** Das **Pod Status (2)** Feld sollte **Kein aktiver Pod**anzeigen; Falls nicht, versuchen Sie bitte den vorherigen Schritt oder verlassen Sie AAPS, um zu sehen, ob dies die Verbindung aktualisiert.

   > ![RileyLink_Setup_6](../images/omnipod/RileyLink_Setup_6.png)

(OmnipodEros-activating-a-pod)=

### Einen Pod aktivieren

Bevor Du einen Pod aktivieren kannst, stelle sicher, dass Du Deine RileyLink-Verbindung in den Omnipod-Einstellungen richtig konfiguriert und verbunden hast

*HINWEIS: Für die Verbindung mit dem Pod steht aus Sicherheitsgründen nur ein kleinerer Kommunikationsbereich zur Verfügung. Vor dem Pairing des Pods ist das Funksignal schwächer, aber nachdem es verbunden wurde, wird es mit voller Signalleistung funktionieren. Stelle sicher, dass Dein Pod während dieser Prozedur [in der Nähe](OmnipodEros-optimal-omnipod-and-rileylink-positioning) (~30 cm entfernt oder weniger) ist, aber nicht auf oder direkt neben dem RileyLink liegt.</p>

01. Navigiere zur Registerkarte **Omnipod (POD)** und klicke auf den **POD MGMT (1)** Button und dann auf **Pod aktivieren (2)**.

    > ![Activate_Pod_1](../images/omnipod/Activate_Pod_1.png) ![Activate_Pod_2](../images/omnipod/Activate_Pod_2.png)

02. Der **Pod füllen** Bildschirm wird angezeigt. Fülle deinen neuen Pod mit mindestens 80 Einheiten Insulin und achte auf zwei Signaltöne, die anzeigen, dass der Pod bereit ist, gestartet zu werden. Beachte bei der Berechnung der gesamt Insulinmenge, welche Du in 3 Tagen benötigst, dass zum Füllen des Pod 12 bis 15 IE benötigt werden.

    > ![Activate_Pod_3](../images/omnipod/Activate_Pod_3.png)
    > 
    > Stelle sicher, dass der neue Pod und RileyLink in der Nähe von einander liegen (~ 30cm oder weniger), und klicke auf den Button **Weiter**.

03. Der Bildschirm **Initialisiere Pod** wird angezeigt und der Pod beginnt zu entlüften. (Du wirst ein Klicken hören, gefolgt von einer Reihe tickender Sounds, der Pod entlüftet sich selbst). Wenn RileyLink außerhalb des zulässigen Bereichs des aktiven Pods aktiviert wurde, erhälst Du eine Fehlermeldung **Keine Antwort von Pod**. Falls das passieren sollte, [bringe den RileyLink näher](OmnipodEros-optimal-omnipod-and-rileylink-positioning) (~30 cm oder weniger) an den Pod. Lege ihn allerdings nicht auf oder direkt neben den Pod und tippe auf **Wiederholen (1)**.

    > ![Activate_Pod_4](../images/omnipod/Activate_Pod_4.png) ![Activate_Pod_5](../images/omnipod/Activate_Pod_5.png)

04. Bei erfolgreicher Befüllung wird ein grünes Häkchen angezeigt und der **Weiter** Button wird aktiviert. Klicke auf den **Weiter** Button, um die Initialisierung des Pods abzuschließen; anschließend wird der **Pod anlegen** Bildschirm angezeigt.

    > ![Activate_Pod_6](../images/omnipod/Activate_Pod_6.png)

05. Bereite anschließend die Infusionsstelle des neuen Pods vor. Entferne die Nadelkappe aus Kunststoff und den weißen Papierträger von der Klebefläche und setze den Pod auf die ausgewählte Stelle Deines Körpers auf. Wenn du fertig bist, klicke auf den **Weiter** Button.

    > ![Activate_Pod_7](../images/omnipod/Activate_Pod_7.png)

06. Das **Pod anlegen** Dialogfenster wird nun angezeigt. **NUR auf OK klicken, wenn du bereit bist, die Kanülen einzuführen.**

    > ![Activate_Pod_8](../images/omnipod/Activate_Pod_8.png)

07. Nach dem Drücken von **OK** dauert es eventuell etwas, bevor der Omnipod antwortet und die Kanüle setzt (1-2 Minuten maximal) also habe Geduld.

    > Wenn RileyLink außerhalb des zulässigen Bereichs des aktiven Pods aktiviert wurde, erhälst Du eine Fehlermeldung **Keine Antwort von Pod**. Wenn dies geschieht, hole den RileyLink näher ran (~ 30 cm weg oder weniger), aber nicht auf die Oberseite oder direkt neben den Pod und klicke auf den Button **Erneut versuchen**.
    > 
    > Wenn der RileyLink sich außerhalb der Bluetoothreichweite befindert oder keine aktive Verbindung zum Smartphone hat, bekommst Du eine Fehlermeldung **Keine Antwort von RileyLink**. Wenn diese Fehlermeldung auftritt, verringere die Distanz vom RileyLink und dem Smartphone und klicke auf den Button **Erneut versuchen**.
    > 
    > *HINWEIS: Bevor die Kanüle eingesetzt wird, ist es ratsam, die Haut in der Nähe des Kanülensetzpunktes etwas zusammenzukneifen. Dies sorgt für eine sanfte Einführung der Nadel und verringert die Gefahr einer Verstopfung.*
    > 
    > ![Activate_Pod_9](../images/omnipod/Activate_Pod_9.png)
    > 
    > ![Activate_Pod_10](../images/omnipod/Activate_Pod_10.png) ![Activate_Pod_11](../images/omnipod/Activate_Pod_11.png)

08. Es wird ein grünes Häkchen angezeigt, und der Button **Weiter** wird bei erfolgreicher Kanüleneinführung aktiviert. Klicke auf den **Weiter** Button.

    > ![Activate_Pod_12](../images/omnipod/Activate_Pod_12.png)

09. Der **Pod aktiviert** Bildschirm wird angezeigt. Klicke auf den grünen **Beenden** Button. Glückwunsch! Du hast jetzt eine neuen Pod aktiviert.

    > ![Activate_Pod_13](../images/omnipod/Activate_Pod_13.png)

10. Der Menübildschirm **Pod Management** sollte nun den **Aktiviere Pod (1)** Button als *deaktiviert* und den **Deaktiviere Pod (2)** Button als *aktiviert* anzeigen. Dies liegt daran, dass jetzt ein Pod aktiv ist und du keinen zusätzlichen Pod aktivieren kannst, ohne zuerst den aktuell aktiven Pod zu deaktivieren.

    Klicke auf den Zurück-Knopf auf deinem Smartphone, um zum Tab-Bildschirm **Omnipod (POD)** zurückzukehren, auf dem jetzt Informationen zu deiner aktiven Pod-Sitzung angezeigt werden, einschließlich der aktuellen Basalrate, Pod Reservoir Level, abgegebenes Insulin, Pod Fehler und Warnungen.

    Weitere Details zu den angezeigten Informationen findest du im Tab [Omnipod (POD)](OmnipodEros-omnipod-pod-tab) dieses Dokuments.

    ![Activate_Pod_14](../images/omnipod/Activate_Pod_14.png) ![Activate_Pod_15](../images/omnipod/Activate_Pod_15.png)

### Deaktiviere einen Pod

Unter normalen Umständen beträgt die Lebensdauer eines Pods drei Tage (72 Stunden) und zusätzlich 8 Stunden nach der Pod-Ablaufwarnung und somit insgesamt 80 Stunden.

Gehe wie folgt vor, um einen Pod zu deaktivieren (entweder vor dem Ablaufen der Nutzungsdauer oder wegen eines Pod-Fehlers):

1. Navigiere zur Registerkarte **Omnipod (POD)** und klicke auf den **POD MGMT (1)** Button und dann im **Pod Management** Screen klicke auf den **Pod deaktivieren (2)** Button.

   > ![Deactivate_Pod_1](../images/omnipod/Deactivate_Pod_1.png) ![Deactivate_Pod_2](../images/omnipod/Deactivate_Pod_2.png)

2. Im **Deaktiviere Pod** Screen stelle zuerst sicher, dass sich der RileyLink in unmittelbarer Nähe zum Pod befindet, aber nicht direkt darauf oder direkt neben dem Pod liegt. Dann klicke auf den **Weiter** -Button, um den Prozess zur Deaktivierung des Pods zu starten.

   > ![Deactivate_Pod_3](../images/omnipod/Deactivate_Pod_3.png)

3. Der **Deaktiviere Pod** Bildschirm erscheint und du erhältst einen Bestätigungspiepton, dass die Deaktivierung erfolgreich war.

   > ![Deactivate_Pod_4](../images/omnipod/Deactivate_Pod_4.png)
   > 
   > **WENN die Deaktivierung scheitert** und du keinen Bestätigungspiepton erhältst, kommt evlt. die Meldung **Keine Antwort von RileyLink** oder **Keine Antwort vom Pod**. Bitte klicke auf den Button **Erneut versuchen (1)**, um die Deaktivierung erneut zu versuchen. Wenn die Deaktivierung weiterhin fehlschlägt, klicke bitte auf die **Verwerfen (2)** -Schaltfläche, um den Pod zu verwerfen. Du kannst nun deinen Pod entfernen, da die aktive Sitzung beendet wurde. Falls Dein Pod einen dauerhaften Alarm hat, musst Du ihn mit einem Pin oder einer Büroklammer manuell ausschalten. Die **Verwerfe Pod(2)** Schaltfläche wird ihn nicht still stellen.
   > 
   > > ![Deactivate_Pod_5](../images/omnipod/Deactivate_Pod_5.png)  ![Deactivate_Pod_6](../images/omnipod/Deactivate_Pod_6.png)

4. Nach erfolgreicher Deaktivierung wird ein grünes Häkchen angezeigt. Klicke auf **Weiter** um die Deaktivierung des Pods abzuschließen. Du kannst nun deinen Pod entfernen, da die aktive Sitzung beendet wurde.

   > ![Deactivate_Pod_7](../images/omnipod/Deactivate_Pod_7.png)

5. Klicke auf den grünen Button, um zum Bildschirm **Pod Management** zurückzukehren.

   > ![Deactivate_Pod_8](../images/omnipod/Deactivate_Pod_8.png)

6. Du bist nun zurück zum Menü **Pod Management** und drückst die Zurück-Taste auf Deinem Telefon, um zum Tab **Omnipod (POD)** zurückzukehren. Überprüfe, dass der **RileyLink Status:** Feldberichte **Verbunden** und das **Pod Status:** Feld eine **Kein aktiver Pod** Nachricht anzeigt.

   > ![Deactivate_Pod_9](../images/omnipod/Deactivate_Pod_9.png)  ![Deactivate_Pod_10](../images/omnipod/Deactivate_Pod_10.png)

### Insulinlieferung stoppen und fortsetzen

Die folgenden Schritte zeigen Dir, wie Du die Insulinzufuhr aussetzen und fortsetzen kannst.

*HINWEIS - wenn Du keinen Button 'Unterbrechen' siehst*, ist dessen Anzeige im Register Omnipod (POD) nicht aktiviert. Aktiviere die Einstellung **Button 'Insulinabgabe unterbrechen' im Omnipod Tab anzeigen** in den [Omnipod-Einstellungen](OmnipodEros-omnipod-settings) unter **Andere**.

#### Insulinabgabe unterbrechen

Verwende diesen Befehl, um den aktiven Pod in den Status 'unterbrochen' zu versetzen. In diesem suspendiertem Zustand wird der Pod kein Insulin mehr liefern. Dieser Befehl ahmt die Suspend-Funktion nach, die der originale Omnipod PDM an einen aktiven Pod sendet.

1. Gehe auf die Registerkarte **Omnipod (POD)** und klicke auf den **SUSPEND (1)** Button. Der Suspend-Befehl wird vom RileyLink an den aktiven Pod gesendet und die Taste **SUSPEND (3)** wird ausgegraut. The **Pod status (2)** will display **SUSPEND DELIVERY**.

   > ![Suspend_Insulin_Delivery_1](../images/omnipod/Suspend_Insulin_Delivery_1.png) ![Suspend_Insulin_Delivery_2](../images/omnipod/Suspend_Insulin_Delivery_2.png)

2. When the suspend command is successfully confirmed by the RileyLink a confirmation dialog will display the message **All insulin delivery has been suspended**. Klicke **OK** um zu bestätigen und fortzufahren.

   > ![Suspend_Insulin_Delivery_3](../images/omnipod/Suspend_Insulin_Delivery_3.png)

3. Dein aktiver Pod hat jetzt alle Insulinabgabe unterbrochen. Die **Omnipod (POD)** Registerkarte aktualisiert den **Pod Status (1)** auf **unterbrochen**. Der **Unterbrechen**-Button ändert sich zu **Abgabe fortsetzen (2)**.

   > ![Suspend_Insulin_Delivery_4](../images/omnipod/Suspend_Insulin_Delivery_4.png)

#### Insulinabgabe fortsetzen

Benutze diesen Befehl, um den aktiven, derzeit pausierten Pod anzuweisen, die Insulinabgabe fortzusetzen. Nachdem der Befehl erfolgreich verarbeitet wurde, wird die normale Insulinabgabe mit der aktuellen Basalrate fortgesetzt. Grundlage dafür ist das aktive Basalprofil zur aktuellen Uhrzeit. Der Pod akzeptiert wieder Befehle für Bolus, TBR und SMB.

1. Gehe zum Tab **Omnipod (POD)** und stelle sicher, dass das **Pod Status (1)** Feld zeigt **Suspended**, drücke dann den **Weiterlieferung (2)** Button, um den Prozess zu starten und den aktuellen Pod anzuweisen, die normale Insulinlieferung wieder fortzusetzen. Eine Nachricht **RESUME DELIVERY** wird im Feld **Pod Status (3)** angezeigt und signalisiert, dass der RileyLink den Befehl aktiv an den suspendierten Pod sendet.

   > ![Resume_Insulin_Delivery_1](../images/omnipod/Resume_Insulin_Delivery_1.png) ![Resume_Insulin_Delivery_2](../images/omnipod/Resume_Insulin_Delivery_2.png)

2. Wenn der Befehl zum Fortsetzen erfolgreich durch den RileyLink bestätigt wurde, zeigt ein Bestätigungsdialog die Nachricht **Insulinabgabe wieder aufgenommen** an. Klicke **OK** um zu bestätigen und fortzufahren.

   > ![Resume_Insulin_Delivery_3](../images/omnipod/Resume_Insulin_Delivery_3.png)

3. Die **Omnipod (POD)** Registerkarte aktualisiert das Feld **Pod Status (1)** um **LAUFEND** und die Schaltfläche **Lieferung fortsetzen** wird nun zu **UNTERBRECHEN (2)** geändert.

   > ![Resume_Insulin_Delivery_4](../images/omnipod/Resume_Insulin_Delivery_4.png)

### Pod-Alarme bestätigen

*HINWEIS - Wenn Du keine ACK ALERTS Schaltfläche siehst, liegt es daran, dass diese nur auf der Registerkarte Omnipod (POD) angezeigt wird, wenn der Pod-Ablauf oder der niedrige Reservoir-Alarm ausgelöst wurden.*

In dem folgenden Prozess wird gezeigt, wie Warntöne bestätigt und quittiert werden können, die auftreten, wenn die aktive Pod-Zeit den Grenzwert für die Warnung vor dem Ablauf von 72 Stunden (3 Tage) erreicht hat. Dieser Grenzwert für die Zeitbegrenzung ist in den Einstellungen für **Stunden vor dem Herunterfahren** in den Omnipod Warnungen definiert. Die maximale Nutzungsdauer eines Pods beträgt 80 Stunden (3 Tage und 8 Stunden), dennoch empfiehlt der Hersteller, 72 Stunden (3 Tage) nicht zu überschreiten.

*HINWEIS - Wenn die Einstellung "Benachrichtigungen automatisch bestätigen" in den Omnipod-Alarmen aktiviert wurde, wird diese Benachrichtigung nach dem ersten Auftreten automatisch bearbeitet und der Alarm muss nicht NICHT manuell abgebrochen werden.*

1. Wenn die definierte **Stunden bis zum Podende** Vorwarnzeit erreicht ist, gibt der Pod Warnungen aus, um Dir mitzuteilen, dass er sich seiner Ablaufzeit nähert und bald ein Wechsel des Pods erforderlich sein wird. Sie können dies auf der Registerkarte **Omnipod (POD)** überprüfen, das Feld **Pod läuft ab: (1)** zeigt die genaue Zeit an, zu welcher der Pod abläuft (72 Stunden nach der Aktivierung) und der Text wird **rot**, nachdem diese Zeit abgelaufen ist, in dem Feld **Active Pod Alarme (2)** wird die Statusnachricht **Pod wird bald bald ablaufen** angezeigt. Dieser Trigger veranlasst die Anzeige des **ACK ALERTS (3)** Buttons. Eine **Systembenachrichtigung (4)** informiert Dich ebenfalls über das bevorstehende Ende des Pods

   > ![Acknowledge_Alerts_1](../images/omnipod/Acknowledge_Alerts_1.png) ![Acknowledge_Alerts_2](../images/omnipod/Acknowledge_Alerts_2.png)

2. Gehe zum Tab **Omnipod (POD)** und drücke den **ACK ALERTS (2)** Button (Bestätigungsbenachrichtigungen). Der RileyLink sendet den Befehl an den Pod, um die Ablaufwarnung des Pods zu deaktivieren und aktualisiert das Feld **Pod Status (1)** mit **ACKNOWLEDGE ALERTS**.

   > ![Acknowledge_Alerts_3](../images/omnipod/Acknowledge_Alerts_3.png)

3. Nach **erfolgreicher Deaktivierung** der Benachrichtigungen, **2 Töne** werden vom aktiven Pod ausgegeben und ein Bestätigungsdialog zeigt die Nachricht **Aktivierungsbenachrichtigungen wurden bestätigt**. Drücke **OK**, um den Dialog zu bestätigen und zu schließen.

   > ![Acknowledge_Alerts_4](../images/omnipod/Acknowledge_Alerts_4.png)
   > 
   > Wenn sich der RileyLink außerhalb des Bereichs des Pods befindet, während der Befehl zum Bestätigen des Alarms gerade verarbeitet wird, werden 2 Optionen angezeigt. **Mute (1)** wird die aktuelle Warnung stummschalten. **OK (2)** bestätigt die aktuelle Warnung und ermöglicht es dem Nutzer nochmals die erhaltenen Alarme zu bestätigen.
   > 
   > ![Acknowledge_Alerts_5](../images/omnipod/Acknowledge_Alerts_5.png)

4. Gehe zur Registerkarte **Omnipod (POD)** unter dem Menüpunkt **Aktive Pod Warnungen**. Die Warnmeldung wird dort nicht mehr angezeigt und der aktive Pod erzeugt keine Signale mehr, die vor dem Ablauf des Pods warnen.

(OmnipodEros-view-pod-history)=

### Anzeige Pod-Historie

In diesem Abschnitt wird gezeigt, wie Du Deine Pod-Historie überprüfen und nach verschiedenen Aktionskategorien filtern kannst. Das Podhistory-Werkzeug erlaubt es, die Aktionen und Ergebnisse Ihres aktuell aktiven Pods während seines dreitägigen Lebens (72 - 80 Stunden) anzusehen.

Diese Funktion ist hilfreich bei der Überprüfung von Boli, Temporären Basalraten (TBRs) und Basaländerungen, die erfolgt sind, bei denen Du aber nicht sicher bist, ob sie abgeschlossen wurden. Die übrigen Kategorien sind im Allgemeinen hilfreich bei der Problembehebung und zur Bestimmung der Reihenfolge von Ereignissen, die zu einem Fehler geführt haben.

*HINWEIS:* **Unsichere** Befehle erscheinen in der Pod-Historie, aber für deren Genauigkeit gibt es aufgrund deren natürlichen Unsicherheit keine Garantie.

1. Gehe zur Registerkarte **Omnipod (POD)**, klicke auf den Button **POD MGMT (1)** und dann auf dem Bildschirm **Pod Management** auf den Button **Pod Historie (2)**, um die Pod Historie anzusehen.

   > ![Pod_History_1](../images/omnipod/Pod_History_1.png) ![Pod_History_2](../images/omnipod/Pod_History_2.png)

2. In der Anzeige **Pod-Historie** wird die Standardkategorie **Alle (1)** angezeigt, die **Datum und Uhrzeit (2)** aller Pods **Aktionen (3)** und **Ergebnisse (4)** in umgekehrter chronologischer Reihenfolge darstellt. Drücke zweimal die **Zurück-Taste deines Telefons** um zur **Omnipod (POD)** Registerkarte  zurückzukehren.

   > ![Pod_History_3](../images/omnipod/Pod_History_3.png) ![Pod_History_4](../images/omnipod/Pod_History_4.png)

### Zeige RileyLink Einstellungen und Historie an

Dieser Abschnitt zeigt, wie die Einstellungen des aktiven Pods und RileyLinks zusammen mit der Kommunikationshistorie der beiden überprüft werden können. Diese Funktion wird nach dem Aufrufen in zwei Abschnitte unterteilt: **Einstellungen** und **Historie**.

Hauptsächlich wird diese Funktion verwendet, wenn der RileyLink außerhalb des Bluetooth-Bereichs des Smartphones ist und der **RileyLink-Status** nach einer bestimmten Zeit **RileyLink nicht erreichbar** meldet. Der Button **REFRESH** auf der Registerkarte **Omnipod (POD)** wird manuell versuchen die Bluetooth-Kommunikation mit dem derzeit in den Omnipod-Einstellungen konfigurierten RileyLink erneut herzustellen.

Für den Fall dass der **REFRESH** Button im **Omnipod (POD)** Tab die Verbindung zum Rileylink nicht wiederherstellen kann, folge den zusätzlichen Hinweisen weiter unten zur manuellen Wiederherstellung der Verbindung.

#### Bluetooth-Kommunikation für Pod-Kommunikationsgerät manuell wiederherstellen

1. Wenn im **Omnipod (POD)** Tab der **RileyLink-Status: (1)** **RileyLink nicht erreichbar** meldet, drücke den **POD MGMT (2)** Knopf, um zur **Pod-Verwaltung** zu kommen. Wenn im Menü **Pod Management** eine Benachrichtigung zur aktiven Suche nach einer RileyLink-Verbindung erscheint, drücke auf **RileyLink Statistiken (3)**, um die **RileyLink Einstellungen** Seite aufzurufen.

   > ![RileyLink_Bluetooth_Reset_1](../images/omnipod/RileyLink_Bluetooth_Reset_1.png) ![RileyLink_Bluetooth_Reset_2](../images/omnipod/RileyLink_Bluetooth_Reset_2.png)

2. Auf dem Bildschirm **RileyLink-Einstellungen (1)** unter **RileyLink (2)** kannst du sowohl den Bluetooth-Verbindungsstatus als auch den Fehler in den Feldern **Verbindungsstatus und Fehler: (3)** bestätigen. Ein *Bluetooth-Fehler* und *RileyLink nicht erreichbar* Status sollten angezeigt werden. Starte das manuelle Wiederverbinden der Bluetooth-Verbindung, indem du auf den **refresh (4)** Button in der unteren rechten Ecke drückst.

   > ![RileyLink_Bluetooth_Reset_3](../images/omnipod/RileyLink_Bluetooth_Reset_3.png)
   > 
   > If the pod communication device is unresponsive or out of range of the phone while the Bluetooth refresh command is being processed a warning message will display 2 options.

   - **Mute (1)** wird die aktuelle Warnung stummschalten.
   - **OK (2)** will confirm this warning and allow the user to try to re-establish the Bluetooth connection again.

   > ![RileyLink_Bluetooth_Reset_4](../images/omnipod/RileyLink_Bluetooth_Reset_4.png)

3. If the **Bluetooth connection** does not re-establish, try manually turning **off** and then back **on** the Bluetooth function on your phone.

4. After a successful RileyLink Bluetooth reconnection the **Connection Status: (1)** field should report **RileyLink ready**. Herzlichen Glückwunsch, Du hast jetzt erneut Deinen konfigurierten RileyLink mit AAPS verbunden!

   > ![RileyLink_Bluetooth_Reset_5](../images/omnipod/RileyLink_Bluetooth_Reset_5.png)

#### Pod Communication Device and Active Pod Settings

This screen will provide information, status, and settings configuration information for both the currently configured pod communication device and the currently active Omnipod Eros pod.

1. Go to the **Omnipod (POD)** tab and press the **POD MGMT (1)** button to access the **Pod management** menu, then press the **RileyLink stats (2)** button to view your currently configured **RileyLink (3)** and active pod **Device (4)** settings.

   > ![RileyLink_Statistics_Settings_1](../images/omnipod/RileyLink_Statistics_Settings_1.png) ![RileyLink_Statistics_Settings_2](../images/omnipod/RileyLink_Statistics_Settings_2.png)
   > 
   > ![RileyLink_Statistics_Settings_3](../images/omnipod/RileyLink_Statistics_Settings_3.png)

##### RileyLink (3) fields

> - **Address:** MAC address of the selected pod communication device defined in the Omnipod Settings.
> - **Name:** Bluetooth identification name of the selected pod communication device defined in your phone's Bluetooth settings.
> - **Battery Level:** Displays the current battery level of the connected pod communication device
> - **Connected Device:** Model of the Omnipod pod currently communicating with the pod communication device
> - **Connection Status**: The current status of the Bluetooth connection between the pod communication device and the phone running AAPS.
> - **Connection Error:** If there is an error with the pod communication device Bluetooth connection details will be displayed here.
> - **Firmware Version:** Current firmware version installed on the actively connected pod communication device.

##### Device (4) fields - With an Active Pod

> - **Device Type:** The type of device communicating with the pod communication device (Omnipod pod pump)
> - **Device Model:** The model of the active device connected to the pod communication device (the current model name of the Omnipod pod, which is Eros)
> - **Seriennummer der Pumpe:** Seriennummer des aktuell aktivierten Pods
> - **Pump Frequency:** Communication radio frequency the pod communication device has tuned to enable communication between itself and the pod.
> - **Last Used frequency:** Last known radio frequency the pod used to communicate with the pod communication device.
> - **Last Device Contact:** Date and time of the last contact the pod made with the pod communication device.
> - **Refresh button** manually refresh the settings on this page.

#### Historie des RileyLink und aktiven Pods

This screen provides information in reverse chronological order of each state or action that either the RileyLink or currently connected pod is in or has taken. The entire history is only available for the currently active pod, after a pod change this history will be erased and only events from the newly activated pod will be recorded and shown.

1. Go to the **Omnipod (POD)** tab and press the **POD MGMT (1)** button to access the **Pod Management** menu, then press the **Pod History (2)** button to view the **Settings** and **History** screen. Click on the **HISTORY (3)** text to display the entire history of the RileyLink and currently active pod session.

   > ![RileyLink_Statistics_History_1](../images/omnipod/RileyLink_Statistics_History_1.png) ![RileyLink_Statistics_History_2](../images/omnipod/RileyLink_Statistics_History_2.png)
   > 
   > ![RileyLink_Statistics_History_3](../images/omnipod/RileyLink_Statistics_History_3.png)

##### Felder

> - **Date & Time**: In reverse chronological order the timestamp of each event.
> - **Device:** The device to which the current action or state is referring.
> - **State or Action:** The current state or action performed by the device.

(OmnipodEros-omnipod-pod-tab)=

## Omnipod (POD) Tab

Below is an explanation of the layout and meaning of the icons and status fields on the **Omnipod (POD)** tab in the main AAPS interface.

*NOTE: If any message in the Omnipod (POD) tab status fields report (uncertain) then you will need to press the Refresh button to clear it and refresh the pod status.*

> ![Omnipod_Tab](../images/omnipod/Omnipod_Tab.png)

### Felder

- **RileyLink Status:** Zeigt den aktuellen Verbindungsstatus des RileyLink an

- *RileyLink Unreachable* - pod communication device is either not within Bluetooth range of the phone, powered off or has a failure preventing Bluetooth communication.
- *RileyLink Ready* - pod communication device is powered on and actively initializing the Bluetooth connection
- *Connected* - pod communication device is powered on, connected and actively able to communicate via Bluetooth.

- **Pod address:** Displays the current address in which the active pod is referenced

- **LOT:** Zeigt die LOT-Nummer des aktiven Pods an

- **TID:** Zeigt die Seriennummer des Pods an.

- **Firmware-Version:** Zeigt die Firmware-Version des aktiven Pods an.

- **Zeit auf dem Pod:** Zeigt die aktuelle Uhrzeit auf dem aktiven Pod an.

- **Pod läuft ab:** Zeigt das Datum und die Uhrzeit an, zu der der aktive Pod abläuft.

- **Pod-Status:** Zeigt den Status des aktiven Pods an.

- **Letzte Verbindung:** Zeigt an, wann zum letzten Mal eine Kommunikation mit dem aktiven Pod stattgefunden hat.

- *gerade eben* vor weniger als 20 Sekunden.
- *vor weniger als einer Minute* vor mehr als 20 Sekunden, aber weniger als 60 Sekunden.
- *vor 1 Minute* vor mehr als 60 Sekunden, aber weniger als 120 Sekunden (2 min).
- *vor XX Minuten* vor mehr als 2 Minuten, definiert durch den Wert von XX.

- **Letzter Bolus:** Zeigt die Dosierung des letzten Bolus an, der an den aktiven Pod gesendet wurde, und in Klammern, wie lange es her ist, dass er abgegeben wurde.

- **Basis-Basalrate:** Zeigt die Basalrate an, die für den aktuellen Zeitpunkt im Basalratenprofil programmiert wurde.

- **Temporäre Basalrate:** Zeigt die aktuell laufende temporäre Basalrate im folgenden Format an

- Einheiten / Stunde zum Zeitpunkt der Erstellung der TBR (gelaufene Minuten / Gesamtminuten, in denen die TBR läuft)
- *Beispiel:* 0,00 IE/h @18:25 ( 90/120 min.)

- **Reservoir:** Zeigt 50+ IE übrig an, wenn mehr als 50 Einheiten im Reservoir vorhanden sind. Unterhalb dieses Wertes werden die genauen Einheiten in gelber Schrift angezeigt.

- **Insgesamt abgegeben:** Zeigt die Gesamtzahl der aus dem Reservoir abgegebenen Insulineinheiten an. *Beachte, dass es sich hierbei um einen Näherungswert handelt, da das Befüllen des Pods nicht absolut exakt geschieht.*

- **Fehler:** Zeigt den letzten Fehler an. Überprüfe die [Pod Historie](OmnipodEros-view-pod-history), [RileyLink Historie](OmnipodEros-rileylink-and-active-pod-history) und die Log-Dateien auf frühere Fehler und auf ausführlichere Informationen.

- **Aktive Pod-Warnungen:** Zeigt jeweils aktuelle Warnungen auf dem aktiven Pod. Wird normalerweise verwendet, wenn das Pod-Ablaufdatum nach 72 Stunden erreicht ist und native Pieptöne vom Pod ausgegeben werden.

### Icons

- **AKTUALISIEREN:**

  > ![refresh_pod_status](../images/omnipod/ICONS/omnipod_overview_refresh_pod_status.png)
  > 
  > Sendet einen Befehl an den aktiven Pod, um die Kommunikation zu aktualisieren
  > 
  > Verwende diese Option, um den Pod-Status zu aktualisieren und die Statusfelder zu erneuern, die den Text 'unsicher' enthalten.
  > 
  > Weitere Informationen zur [Problembehandlung](OmnipodEros-troubleshooting) findest du im Abschnitt unten.

- **POD MGMT:**

  > ![pod_management](../images/omnipod/ICONS/omnipod_overview_pod_management.png)
  > 
  > Navigiert zum Pod Management Menü

- **ACK ALERTS:**

  > ![ack_alerts](../images/omnipod/ICONS/omnipod_overview_ack_alerts.png)
  > 
  > Durch Drücken dieser Taste werden die Signaltöne und Benachrichtigungen zum Ablauf des Pods deaktiviert.
  > 
  > Der Button wird nur angezeigt, wenn die aktuelle Zeit des Pods nach dem Pod-Ablaufdatum liegt Nach erfolgreicher Bestätigung wird dieses Symbol nicht mehr angezeigt.

- **ZEIT EINSTELLEN:**

  > ![set_time](../images/omnipod/ICONS/omnipod_overview_set_time.png)
  > 
  > Durch Drücken dieser Taste wird die Uhrzeit auf dem Pod mit der aktuellen Uhrzeit des Smartphones aktualisiert.

- **SUSPEND:**

  > ![suspend](../images/omnipod/ICONS/omnipod_overview_suspend.png)
  > 
  > Suspends the active pod

- **RESUME DELIVERY:**

  > ![resume](../images/omnipod/ICONS/omnipod_overview_resume.png)
  > 
  > > Resumes the currently suspended, active pod

### Pod Management Menu

Below is an explanation of the layout and meaning of the icons on the **Pod Management** menu accessed from the **Omnipod (POD)** tab.

> ![Omnipod_Tab_Pod_Management](../images/omnipod/Omnipod_Tab_Pod_Management.png)

- **Pod aktivieren**

  > ![activate_pod](../images/omnipod/ICONS/omnipod_overview_pod_management_activate_pod.png)
  > 
  > Primes and activates a new pod

- **Pod deaktivieren**

  > ![deactivate_pod](../images/omnipod/ICONS/omnipod_overview_pod_management_deactivate_pod.png)
  > 
  > Deactivates the currently active pod.
  > 
  > A partially paired pod ignores this command.
  > 
  > Use this command to deactivate a screaming pod (error 49).
  > 
  > If the button is disabled (greyed out) use the Discard Pod button.

- **Play test beep**

  > ![play_test_beep](../images/omnipod/ICONS/omnipod_overview_pod_management_play_test_beep.png)
  > 
  > Plays a single test beep on the pod when pressed.

- **Discard pod**

  > ![discard_pod](../images/omnipod/ICONS/omnipod_overview_pod_management_discard_pod.png)
  > 
  > Deactivates and discards the pod state of an unresponsive pod when pressed.
  > 
  > Button is only displayed when very specific cases are met as proper deactivation is no longer possible:
  > 
  > > - A **pod is not fully paired** and thus ignores deactivate commands.
  > > - A **pod is stuck** during the pairing process between steps
  > > - A **pod simply does not pair at all.**

- **Pod history**

  > ![pod_history](../images/omnipod/ICONS/omnipod_overview_pod_management_pod_history.png)
  > 
  > Displays the active pod activity history

- **RileyLink stats:**

  > ![rileylink_stats](../images/omnipod/ICONS/omnipod_overview_pod_management_rileylink_stats.png)
  > 
  > Navigates to the RileyLink Statistics screen displaying current settings and RileyLink Connection history
  > 
  > > - **Settings** - displays RileyLink and active pod settings information
  > > - **Historie** - zeigt den Verlauf der RileyLink- und Pod-Kommunikation an

- **RileyLink-Konfiguration zurücksetzen**

  > ![reset_rileylink_config](../images/omnipod/ICONS/omnipod_overview_pod_management_reset_rileylink_config.png)
  > 
  > Durch Drücken dieser Taste wird die Konfiguration des aktuell angeschlossenen Pod-Kommunikationsgeräts zurückgesetzt.
  > 
  > > - Wenn die Kommunikation gestartet wird, werden bestimmte Daten an das Pod-Kommunikationsgerät gesendet und dort eingestellt > - Speicherregister werden gesetzt > - Kommunikationsprotokolle werden eingestellt > - Eingestellte Funkfrequenz wird gesetzt 
  > > - Beachte die [zusätzlichen Hinweise](OmnipodEros-reset-rileylink-config-notes) am Ende dieser Tabelle

- **Pulse-Log lesen:**

  > ![pulse_log](../images/omnipod/ICONS/omnipod_overview_pod_management_pulse_log.png)
  > 
  > > Sendet das Pulse-Log des aktiven Pods in die Zwischenablage

(OmnipodEros-reset-rileylink-config-notes)=

#### *Hinweise zum Zurücksetzen der RileyLink-Konfiguration*

- Diese Funktion wird in erster Linie verwendet, wenn das derzeit aktive Pod-Kommunikationsgerät nicht antwortet und die Kommunikation in einem festgefahrenen Zustand ist.
- If the pod communication device is turned off and then back on, the **Reset RileyLink Config** button needs to be pressed, so that it sets these communication parameters in the pod communication device configuration.
- If this is NOT done then AAPS will need to be restarted after the pod communication device is power cycled.
- This button **DOES NOT** need to be pressed when switching between different pod communication devices

(OmnipodEros-omnipod-settings)=

## Omnipod-Einstellungen

The Omnipod driver settings are configurable from the top-left hand corner **hamburger menu** under **Config Builder**➜**Pump**➜**Omnipod**➜**Settings Gear (2)** by selecting the **radio button (1)** titled **Omnipod**. Selecting the **checkbox (3)** next to the **Settings Gear (2)** will allow the Omnipod menu to be displayed as a tab in the AAPS interface titled **OMNIPOD** or **POD**. Dies wird in dieser Dokumentation als Registerkarte **Omnipod (POD)** bezeichnet.

![Omnipod_Settings_1](../images/omnipod/Omnipod_Settings_1.png)

**NOTE:** A faster way to access the **Omnipod settings** is by accessing the **3 dot menu (1)** in the upper right hand corner of the **Omnipod (POD)** tab and selecting **Omnipod preferences (2)** from the dropdown menu.

![Omnipod_Settings_2](../images/omnipod/Omnipod_Settings_2.png)

Die Einstellungen sind nach Gruppen sortiert unten aufgelistet. Du kannst die meisten der Einstellungen über einen Kippschalter aktivieren oder deaktivieren:

![Omnipod_Settings_3](../images/omnipod/Omnipod_Settings_3.png)

*NOTE: An asterisk (\*) denotes the default for a setting is enabled.*

### RileyLink

Allows for scanning of a pod communication device. The Omnipod driver cannot select more than one pod communication device at a time.

- **Show battery level reported by OrangeLink/EmaLink/DiaLink:** Reports the actual battery level of the OrangeLink/EmaLink/Dialink. It is **strongly recommended** that all OrangeLink/EmaLink/DiaLink users enable this setting.

- Funktioniert NICHT mit dem originalen RileyLink.
- Funktioniert möglicherweise nicht mit RileyLink-Alternativen.
- Aktiviert - Meldet den aktuellen Batteriestand für unterstützte Pod-Kommunikationsgeräte.
- Deaktiviert - Meldet einen Wert von n/a.

- **Aktiviere die Protokollierung des Akkuwechsels im Aktionen-Tab/Menü:** Im Menü "Aktionen" ist die Schaltfläche "Batteriewechsel protokollieren" aktiviert, WENN Du diese Einstellung UND die obige Einstellung zum Anzeigen des Akkustands aktiviert hast.  Einige Pod-Kommunikationsgeräte können inzwischen mit normalen Batterien betrieben werden, die ausgewechselt werden können.  Diese Option ermöglicht es Dir, dies zu protokollieren und den Timer für das Batteriealter zurückzusetzen.

### Bestätigungstöne

Bestätigt mit Signaltönen des Pods die Abgabe und Änderung von Bolus, Basalrate, SMB und TBR.

- **\*Bolus-Töne aktiviert:** Aktiviert oder deaktiviert Bestätigungstöne, wenn ein Bolus abgegeben wird.
- **\*Basal-Töne aktiviert:** Aktiviert oder deaktiviert die Bestätigungstöne, wenn eine neue Basalrate eingestellt wird, eine aktive Basalrate abgebrochen oder die aktuelle Basalrate geändert wird.
- **\*SMB-Töne aktiviert:** Aktiviert oder deaktiviert Bestätigungstöne, wenn ein SMB abgegeben wird.
- **TBR-Piep aktiviert:** Aktiviert oder deaktiviert Bestätigungstöne, bei Setzen oder Abbruch einer TBR.

### Alarme

Provides AAPS alerts and Nightscout announcements for pod expiration, shutdown, low reservoir based on the defined threshold units.

*Beachte, dass eine AAPS-Benachrichtigung IMMER für jeden Alarm nach der ersten Kommunikation mit dem Pod ausgegeben wird, da der Alarm ausgelöst wurde. Wenn Du die Benachrichtigung löschst, wird der Alarm NICHT gelöscht, AUSSER wenn die automatische Bestätigung von Pod-Alarmen aktiviert ist. To MANUALLY dismiss the alert you must visit the Omnipod (POD) tab and press the ACK ALERTS button.*

- **\*Expiration reminder enabled:** Enable or disable the pod expiration reminder set to trigger when the defined number of hours before shutdown is reached.
- **Stunden bis zum Podende:** Legt die Anzahl der Stunden vor der Abschaltung des aktiven Pods fest, die den Alarm zur Pod-Ablauferinnerung auslöst.
- **\*Low reservoir alert enabled:** Enable or disable an alert when the pod's remaining units low reservoir limit is reached as defined in the Number of units field.
- **Anzahl der Einheiten:** Die Anzahl der verbleibenden Einheiten, bei denen der Alarm für den niedrigen Reservoirstand ausgelöst werden soll.
- **Automatically acknowledge Pod alerts:** When enabled a notification will still be issued however immediately after the first pod communication contact since the alert was issued it will now be automatically acknowledged and the alert will be dismissed.

### Benachrichtigungen

Provides AAPS notifications and audible phone alerts when it is uncertain if TBR, SMB, or bolus events were successful.

*HINWEIS: Dies sind nur Benachrichtigungen, es werden keine akustischen Signale ausgegeben.*

- **Ton für unsichere TBR-Benachrichtigung aktiviert:** Aktiviere oder deaktiviere diese Einstellung, um einen akustischen Alarm und eine visuelle Benachrichtigung auszulösen, wenn AAPS unsicher ist, ob eine TBR erfolgreich gesetzt wurde.
- **\*Sound for uncertain SMB notifications enabled:** Enable or disable this setting to trigger an audible alert and visual notification when AAPS is uncertain if an SMB was successfully delivered.
- **\*Sound for uncertain bolus notifications enabled:** Enable or disable this setting to trigger an audible alert and visual notification when AAPS is uncertain if a bolus was successfully delivered.

### Andere

Bietet erweiterte Einstellungen zur Unterstützung bei der Fehlersuche.

- **Show Suspend Delivery button in Omnipod tab:** Hide or display the suspend delivery button in the **Omnipod (POD)** tab.
- **Show Pulse log button in Pod Management menu:** Hide or display the pulse log button in the **Pod Management** menu.
- **Show RileyLink Stats button in Pod Management menu:** Hide or display the RileyLink Stats button in the **Pod Management** menu.
- **\*DST/Time zone detect on enabled:** allows for time zone changes to be automatically detected if the phone is used in an area where DST is observed.

### Switching or Removing an Active Pod Communication Device (RileyLink)

With many alternative models to the original RileyLink available (such as OrangeLink or EmaLink) or the need to have multiple/backup versions of the same pod communication device (RileyLink), it becomes necessary to switch or remove the selected pod communication device (RileyLink) from Omnipod Setting configuration.

The following steps will show how to **Remove** and existing pod communication device (RileyLink) as well as **Add** a new pod communication device.  Executing both **Remove** and **Add** steps will switch your device.

1. Access the **RileyLink Selection** menu by selecting the **3 dot menu (1)** in the upper right hand corner of the **Omnipod (POD)** tab and selecting **Omnipod preferences (2)** from the dropdown menu. On the **Omnipod Settings** menu under **RileyLink Configuration (3)** press the **Not Set** (if no device is selected) or **MAC Address** (if a device is present) text to open the **RileyLink Selection** menu.

   > ![Omnipod_Settings_2](../images/omnipod/Omnipod_Settings_2.png) ![RileyLink_Setup_2](../images/omnipod/RileyLink_Setup_2.png)

### Remove Currently Selected Pod Communication Device (RileyLink)

This process will show how to remove the currently selected pod communication device (RileyLink) from the Omnipod Driver settings.

1. Under **RileyLink Configuration** press the **MAC Address (1)** text to open the **RileyLink Selection** menu.

   > ![RileyLink_Setup_Remove_1](../images/omnipod/RileyLink_Setup_Remove_1.png)

2. On the **RileyLink Selection** menu the press **Remove (2)** button to remove **your currently selected RileyLink (3)**

   > ![RileyLink_Setup_Remove_2](../images/omnipod/RileyLink_Setup_Remove_2.png)

3. At the confirmation prompt press **Yes (4)** to confirm the removal of your device.

   > ![RileyLink_Setup_Remove_3](../images/omnipod/RileyLink_Setup_Remove_3.png)

4. You are returned to the **Omnipod Setting** menu where under **RileyLink Configuration** you will now see the device is **Not Set (5)**.  Congratulations, you have now successfully removed your selected pod communication device.

   > ![RileyLink_Setup_Remove_4](../images/omnipod/RileyLink_Setup_Remove_4.png)

### Add Currently Selected Pod Communication Device (RileyLink)

This process will show how to add a new pod communication device to the Omnipod Driver settings.

1. Under **RileyLink Configuration** press the **Not Set (1)** text to open the **RileyLink Selection** menu.

   > ![RileyLink_Setup_Add_1](../images/omnipod/RileyLink_Setup_Add_1.png)

2. Press the **Scan (2)** button to start scanning for all available Bluetooth devices.

   > ![RileyLink_Setup_Add_2](../images/omnipod/RileyLink_Setup_Add_2.png)

3. Select **your RileyLink (3)** from the list of available devices and you will be returned to the **Omnipod Settings** menu displaying the **MAC Address (4)** of your newly selected device.  Congratulations you have successfully selected your pod communication device.

   > ![RileyLink_Setup_Add_3](../images/omnipod/RileyLink_Setup_Add_3.png) ![RileyLink_Setup_Add_4](../images/omnipod/RileyLink_Setup_Add_4.png)

## Actions (ACT) Tab

This tab is well documented in the main AAPS documentation but there are a few items on this tab that are specific to how the Omnipod pod differs from tube based pumps, especially after the processes of applying a new pod.

1. Gehe zur Registerkarte **Aktionen (AKT)** im AAPS-Hauptinterface.
2. Under the **Careportal (1)** section the following 3 fields will have their **age reset** to 0 days and 0 hours **after each pod change**: **Insulin** and **Cannula**. Das liegt daran, wie die Omnipod-Pumpe gebaut ist und funktioniert. Die **Pumpenbatterie** und das **Insulinreservoir ** sind immer im Pod enthalten. Da der Pod die Kanüle direkt in die Haut am Ort der Pod-Anwendung einführt, wird bei Omnipod-Pumpen kein herkömmlicher Schlauch verwendet. *Nach einem Podwechsel wird das Alter jedes dieser Werte daher automatisch auf Null zurückgesetzt.* **Das Alter der Pumpenbatterie** wird nicht angegeben, da die Batterie im Pod immer länger hält, als die Lebensdauer des Pods (maximal 80 Stunden).

> ![Actions_Tab](../images/omnipod/Actions_Tab.png)

### Levels

**Insulin Level**

Die Angabe der Insulinmenge im Omnipod Eros Pod ist nicht genau.  Das liegt daran, dass nicht genau bekannt ist, wie viel Insulin in den Behälter gefüllt wurde, sondern nur, dass beim Befüllen des Reservoirs 2 Pieptöne ertönen und mehr als 85 Einheiten gespritzt wurden. Ein Pod kann maximal 200 Einheiten aufnehmen. Auch das Priming kann zu Abweichungen führen, da es kein exakter Prozess ist.  Mit diesen beiden Faktoren wurde der Omnipod-Treiber so geschrieben, dass er die beste Annäherung an das im Reservoir verbleibende Insulin liefert.

> - **Above 50 Units** - Reports a value of 50+U when more than 50 units are currently in the reservoir.
> - **Below 50 Units** - Reports an approximate calculated value of insulin remaining in the reservoir.
> - **SMS** - Aus dem Pod übernommener Wert oder 50+ IE für SMS-Antworten
> - **Nightscout** - Lädt den Wert 50 hoch, wenn mehr als 50 Einheiten angezeigt werden (Nightscout Version 14.07 und älter).  Neuere Versionen melden einen Wert von 50+, wenn sich mehr als 50 Einheiten im Reservoir befinden.

**Akkustand**

Battery level reporting is a setting that can be enabled to return the current battery level of pod communication devices, such as the OrangeLink, EmaLink or DiaLink.  The RileyLink hardware is not capable of reporting its battery level.  The battery level is reported after each communication with the pod, so when charging a linear increase may not be observed.  A manual refresh will update the current battery level.  When a supported Pod communication device is disconnected a value of 0% will be reported.

> - **Die RileyLink-Hardware ist NICHT in der Lage ihren Batteriestand zu melden**
> - **"Show battery level reported by OrangeLink/EmaLink/DiaLink" Setting MUST be enabled in the Omnipod settings to report battery level values**
> - **Batteriestandsmeldung funktioniert NUR für OrangeLink-, EmaLink- und DiaLink-Geräte**
> - **Batteriestandsmeldung KANN für andere Geräte funktionieren (außer RileyLink)**
> - **SMS** - Gibt den aktuellen Akkustand als Antwort zurück, wenn ein aktueller Wert existiert, ein Wert von n/a wird nicht zurückgegeben
> - **Nightscout** - Akkustand wird gemeldet, wenn ein aktueller Wert existiert, ein Wert von n/a wird nicht gemeldet

(OmnipodEros-troubleshooting)=

## Problembehandlung

### Pod Fehler

Pods fallen gelegentlich aus unterschiedlichen Gründen aus, u. a. wegen Hardwareproblemen mit dem Pod selbst. Am besten ist es, diese nicht bei Insulet anzugeben, da AAPS kein zugelassener Anwendungsfall ist. Eine Liste an Fehlercodes findest du [hier](https://github.com/openaps/openomni/wiki/Fault-event-codes), um die Ursache zu ermitteln.

### Verhindere Pod Fehler 49

Dieser Fehler hängt mit einem fehlerhaften Pod-Status für einen Befehl oder einem Fehler während der Insulinabgabe zusammen. We recommend users to switch to the Nightscout client to *upload only (Disable sync)* under the **Config Builder**➜**General**➜**NSClient**➜**cog wheel**➜**Advanced Settings** to prevent possible failures.

### Pumpe nicht erreichbar Alarme

It is recommended that pump unreachable alerts be configured to **120 minutes** by going to the top right-hand side three-dot menu, selecting **Preferences**➜**Local Alerts**➜**Pump unreachable threshold \[min\]** and setting this to **120**.

(OmnipodEros-import-settings-from-previous-aaps)=
### Importieren von Einstellungen aus früherem AAPS

Bitte beachte, dass beim Importieren von Einstellungen die Möglichkeit besteht, dass ein veralteter Pod-Status importiert wird. Infolgedessen kannst Du einen aktiven Pod verlieren. Es wird daher dringend empfohlen, **keine Einstellungen während einer aktiven Pod-Sitzung zu importieren**.

1. Deaktiviere deine Pod-Sitzung. Stelle sicher, dass keine aktive Pod-Sitzung läuft.
2. Exportiere deine Einstellungen und bewahre eine Kopie an einem sicheren Ort auf.
3. Deinstalliere die vorherige Version von AAPS und starte dein Smartphone neu.
4. Installiere die neue Version von AAPS und stelle sicher, dass Du keine aktive Pod-Sitzung hast.
5. Importiere deine Einstellungen und aktiviere einen neuen Pod.

### Omnipod-Treiberwarnungen

please note that the Omnipod driver presents a variety of unique alerts on the **Overview tab**, most of them are informational and can be dismissed while some provide the user with an action to take to resolve the cause of the triggered alert. Im Folgenden findest du eine Zusammenfassung der wichtigsten Warnmeldungen, die dir begegnen können:

#### Kein aktiver Pod

Keine aktive Pod-Sitzung erkannt. Dieser Alarm kann vorübergehend durch Drücken von **Schlummern** deaktiviert werden, wird aber weiterhin ausgelöst, solange kein neuer Pod aktiviert wurde. Einmal aktiviert, wird dieser Alarm automatisch ausgeschaltet.

#### Pod angehalten

Hinweis, dass der Pod ausgesetzt wurde.

#### Setzen des Basal-Profils fehlgeschlagen. Die Abgabe könnte ausgesetzt sein! Bitte aktualisiere den Pod-Status manuell auf der Registerkarte Omnipod und setze die Übertragung bei Bedarf fort.

Hinweis, dass die Einstellung des Pod-Basalprofils fehlgeschlagen ist und Du auf der Registerkarte DASH auf *Aktualisieren* drücken musst.

#### Es kann nicht überprüft werden, ob der SMB-Bolus erfolgreich war. Wenn du sicher bist, dass der Bolus nicht erfolgreich war, solltest du den SMB-Eintrag manuell auf der Registerkarte Behandlungen entfernen.

Alert that the SMB bolus success could not be verified, you will need to verify the *Last bolus* field on the Omnipod tab to see if SMB bolus succeeded and if not remove the entry from the Treatments tab.

#### Unsicher, ob die "Ereignis Bolus/TBR/SMB" abgeschlossen wurde. Bitte überprüfe manuell, ob sie erfolgreich war.

Due to the way that the RileyLink and Omnipod communicate, situations can occur where it is *uncertain* if a command was successfully processed. Es war notwendig, den Nutzer über diese Unsicherheit zu informieren.

Im Folgenden findest du einige Beispiele dafür, wann eine unsichere Meldung auftreten kann.

- **Bolus** - Unsichere Boli können nicht automatisch überprüft werden. The notification will remain until the next bolus but a manual pod refresh will clear the message. *By default alerts beeps are enabled for this notification type as the user will manually need to verify them.*
- **TBRs, Pod Statuses, Profile Switches, Time Changes** - a manual pod refresh will clear the message. In der Voreinstellung sind die Signaltöne für diesen Benachrichtigungstyp deaktiviert.
- **Pod Time Deviation -** When the time on the pod and the time your phone deviates too much then it is difficult for AAPS loop to function and make accurate predictions and dosage recommendations. If the time deviation between the pod and the phone is more than 5 minutes then AAPS will report the pod is in a Suspended state under Pod status with a HANDLE TIME CHANGE message. An additional **Set Time** icon will appear at the bottom of the Omnipod (POD) tab. Clicking Set Time will synchronize the time on the pod with the time on the phone and then you can click the RESUME DELIVERY button to continue normal pod operations.

## Best Practices

(OmnipodEros-optimal-omnipod-and-rileylink-positioning)=

### Optimal Omnipod and RileyLink Positioning

The antenna used on the RileyLink to communicate with an Omnipod pod is a 433 MHz helical spiral antenna. Due to its construction properties it radiates an omni directional signal like a three dimensional doughnut with the z-axis representing the vertical standing antenna. This means that there are optimal positions for the RileyLink to be placed, especially during pod activation and deactivation routines.

![Toroid_w_CS](../images/omnipod/Toroid_w_CS.png)

> *(Fig 1. Graphical plot of helical spiral antenna in an omnidirectional pattern*)

Because of both safety and security concerns, pod *activation* has to be done at a range *closer (~30 cm away or less)* than other operations such as giving a bolus, setting a TBR or simply refreshing the pod status. Due to the nature of the signal transmission from the RileyLink antenna it is NOT recommended to place the pod directly on top of or right next to the RileyLink.

The image below shows the optimal way to position the RileyLink during pod activation and deactivation procedures. The pod may activate in other positions but you will have the most success using the position in the image below.

*Note: If after optimally positioning the pod and RileyLink communication fails, this may be due to a low battery which decreases the transmission range of the RileyLink antenna. To avoid this issue make sure the RileyLink is properly charged or connected directly to a charging cable during this process.*

![Omnipod_pod_and_RileyLink_Position](../images/omnipod/Omnipod_pod_and_RileyLink_Position.png)

## Where to get help for Omnipod driver

All of the development work for the Omnipod driver is done by the community on a volunteer basis; we ask that you please be considerate and use the following guidelines when requesting assistance:

- **Level 0:** Lies den entsprechenden Abschnitt dieser Dokumentation um sicherzustellen, dass du verstehst, wie die Funktion, mit der Du Schwierigkeiten hast, funktionieren soll.
- **Level 1:** Wenn Du immer noch Probleme hast, die du mit diesem Dokument nicht lösen kannst, dann gehe bitte in den *#androidaps* Channel auf **Discord**, indem du [diesen Einladungslink <https://discord.gg/4fQUWHZ4Mw>](https://discord.gg/4fQUWHZ4Mw) benutzt.
- **Level 2:** Search existing issues to see if your issue has already been reported; if not, please create a new [issue](https://github.com/nightscout/AndroidAPS/issues) and attach your [log files](../Usage/Accessing-logfiles.md).
- **Sei geduldig - die meisten Mitglieder unserer Community sind gutmütige Freiwillige und die Lösung von Problemen erfordert oft Zeit und Geduld von Nutzern und Entwicklern.**
