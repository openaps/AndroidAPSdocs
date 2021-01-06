=====================================================
 Dokumentation zum AndroidAPS Omnipod Insulinpumpen-Treiber
=====================================================

Diese Anweisungen sind für die Konfiguration der Omnipod Eros Generation Pumpe (**NICHT Omnipod Dash**). Der Omnipod-Treiber ist als Teil von AndroidAPS (AAPS) ab Version 2.8 verfügbar.

**Diese Software ist Teil einer DIY-Lösung (Do It Yourself = Eigenbau) und kein kommerzielles Produkt. Daher bist DU gefordert. DU musst lesen, lernen und verstehen, was das System macht und wie du es bedienst. Du bist ganz alleine dafür verantwortlich, was Du mit dem System machst.**

.. contents:: 
   :backlinks: entry
   :depth: 2

Hardware- und Software-Anforderungen
==================================

* **Pod-Kommunikationsgerät** 

  Komponente, die die Kommunikation von deinem AndroidAPS-Gerät zu deinen Pods der Eros Generation ermöglicht.

   -  |OrangeLink|  `OrangeLink Website <https://getrileylink.org/product/orangelink>`_    
   -  |RileyLink| `433MHz RileyLink <https://getrileylink.org/product/rileylink433>`__
   -  |EmaLink|  `Emalink Website <https://github.com/sks01/EmaLink>`__ - `Kontakt: <mailto:getemalink@gmail.com>`__     
   -  |LoopLink|  `LoopLink Website <https://www.getlooplink.org/>`__ - `Kontakt: <https://jameswedding.substack.com/>`__ - nicht getestet

* |Android_Phone| **Mobilgerät** 

  Komponente, die AndroidAPS betreibt und Steuerungsbefehle an das Pod-Kommunikationsgerät sendet.

      + Unterstützte `Android-Smartphones <https://docs.google.com/spreadsheets/d/1eNtXAWwrdVtDvsvXaR_72wgT9ICjZPNEBq8DbitCv_4/edit#gid=0>`__ mit AAPS 2.8 oder höher und zugehörigem `Komponenten-Setup <https://androidaps.readthedocs.io/en/latest/CROWDIN/de/index.html#komponenten-setup>`__

* |Omnipod_Pod| **Insulin-Pumpe** 

  Komponente, die vom Pod-Kommunikationsgerät empfangene Befehle interpretiert, die von Deinem Smartphone mit aktiviertem AndroidAPS stammen.

      + Ein neuer Omnipod-Pod (Eros-Generation - **NICHT DASH**)

Diese Anleitung geht davon aus, dass Du eine neue Pod-Sitzung startest. Falls dies nicht der Fall ist, habe bitte Geduld und beginne diesen Prozess erst bei Deinem nächsten Starten eines neuen Pods.

Bevor du anfängst
================

**Sicherheit geht vor** - Stelle sicher, dass Du auf eventuell auftretende Fehler reagieren kannst, bevor Du diesen Prozess beginnst: zusätzliche Pods, Insulin, geladener RileyLink und Smartphone mit vollem Akku sind unbedingt notwendig.

**Dein Omnipod PDM funktioniert nicht mehr, wenn der AAPS Omnipod Treiber Deinen Pod aktiviert hat**. Bisher hast Du Deinen Omnipod PDM verwendet, um Befehle an Deinen Omnipod Eros Pod zu senden. Ein Omnipod Eros Pod kann sich nur mit einem einzigen Gerät verbinden. Das Gerät, das den Pod erfolgreich aktiviert, ist das einzige Gerät, das von diesem Zeitpunkt an mit ihm kommunizieren darf. Dies bedeutet, dass, sobald Du einen Omnipod Eros Pod mit Deinem RileyLink über den AAPS Omnipod Treiber aktiviert hast, **wirst Du Deinen PDM nicht mehr mit diesem Pod** verwenden können. Der AAPS Omnipod Treiber mit dem RileyLink ist dann Dein aktiver PDM. *Dies bedeutet NICHT, dass Du Deinen PDM wegwerfen solltest. Es wird empfohlen, ihn als Backup zu behalten und für Notfälle, falls AAPS nicht korrekt funktioniert.*

**Du kannst mehrere RileyLinks konfigurieren, aber nur ein RileyLink kann gleichzeitig mit einem Pod kommunizieren.** Der AAPS Omnipod Treiber unterstützt die Möglichkeit, mehrere RileyLinks in der RileyLink-Konfiguration hinzuzufügen, jedoch kann nur ein RileyLink gleichzeitig für das Senden und Empfangen der Kommunikation ausgewählt werden.

**Dein Pod wird nicht abgeschaltet, wenn der RileyLink außerhalb der Reichweite liegt.** Dein Pod wird weiterhin Basal-Insulin liefern, wenn Dein RileyLink außerhalb der Reichweite ist oder die Kommunikation mit dem aktiven Pod geblockt wird. Beim Aktivieren eines Pods wird das in AAPS definierte Profil in den neuen Pod programmiert. Wenn du den Kontakt zum Pod verlierst, wird er auf dieses zurückgesetzt. Du kannst keine neuen Befehle senden, solange der RileyLink nicht wieder in Reichweite kommt und die Verbindung wiedergeherstellt ist.

**Basalraten-Profile mit 30-Minuten-Schritten werden in AndroidAPS NICHT unterstützt.** Wenn Du neu bei AndroidAPS bist und zum ersten Mal Dein Basalprofil einrichtest, beachte bitte, dass Basalprofile, die mit einer halben Stunde beginnen, nicht unterstützt werden und Du Dein Basalprofil anpassen musst. Basalraten müssen immer zur vollen Stunde starten. For example, if you have a basal rate of say 1.1 units which starts at 09:30 and has a duration of 2 hours ending at 11:30, this will not work.  Du muss diese 1,1 IE Basalrate auf einen Zeitraum von entweder 9:00 - 11:00 Uhr oder 10:00 - 12:00 Uhr einstellen.  Obwohl die Omnipod-Hardware selbst Basalratenwechsel zur halben Stunde unterstützt, ist AndroidAPS derzeit nicht in der Lage, sie mit seinen Algorithmen zu berücksichtigen.

Aktivieren des Omnipod-Treibers in AAPS
===================================

Du kannst den Omnipod-Treiber in AAPS auf **zwei Wegen** aktivieren:

Option 1: Der Einrichtungsassistent
--------------------------

Nach der Installation einer neuen Version von AndroidAPS startet der **Einrichtungsassistent** automatisch.  Dies wird auch nach einem Upgrade geschehen.  Wenn du die Einstellungen von einer vorherigen Installation exportiert hast, kannst du den Einrichtungsassistenten beenden und deine alten Einstellungen importieren.  Für Neuinstallationen fahre unten fort.

Über den **AAPS Einrichtungsassistenten (2)** der sich in der oberen rechten Ecke befindet. Klicke auf das **Drei-Punkte-Menü (1)** und fahre durch das Assistenten-Menü bis zum Erreichen des Bildschirms **Pumpe** fort. Then select the **Omnipod radio button (3)** .

    |Enable_Omnipod_Driver_1|  |Enable_Omnipod_Driver_2|

On the same screen, below the pump selection, the **Omnipod Driver Settings** are displayed, under the **RileyLink Configuration** add your RileyLink device by pressing the **Not Set** text. 

On the **RileyLink Selection** screen press the **Scan** button and select your RileyLink by scanning for all available Bluetooth devices and selecting your RileyLink from the list. When properly selected you are returned to the pump driver selection screen displaying the Omnipod driver settings showing your selected RileyLink with the MAC address listed. 

Press the **Next** button to proceed with the rest of the **Setup Wizard.**  It can take up to one minute for the selected RileyLink to initialize and the **Next** button to become active.

Detailed steps on how to setup your pod communication device are listed below in the `RileyLink Setup Section <#rileylink-setup>`__.

**ODER**

Option 2: Der Konfigurations-Generator
----------------------------

Via the top-left hand corner **hamburger menu** under **Config Builder (1)** ➜\ **Pump**\ ➜\ **Omnipod** by selecting the **radio button (2)** titled **Omnipod**. Wenn du das **Kontrollkästchen (4)** neben dem **Einstellungsrädchen (3)** wählst, wird das Omnipod-Menü als Registerkarte im AAPS-Interface mit dem Titel **POD** angezeigt. Dies wird in dieser Dokumentation als Registerkarte **Omnipod (POD)** bezeichnet.

    **HINWEIS:** Eine schnellere Möglichkeit zum Zugriff auf die **Omnipod-Einstellungen** findest du unten in der Rubrik `Omnipod-Einstellungen <#omnipod-einstellungen>`__ dieses Dokuments.

    |Enable_Omnipod_Driver_3| |Enable_Omnipod_Driver_4|

Überprüfung der Omnipod-Treiberauswahl
----------------------------------------

*Note: If you have exited the Setup Wizard early without selecting your RileyLink, the Omnipod Driver is enabled but you will still need to select your RileyLink.  You may see the Omnipod (POD) tab appear as it does below*

Um zu überprüfen, ob Du den Omnipod-Treiber in AAPS aktiviert hast, **wische nach links** vom Tab **Übersicht** wo du nun einen Reiter **Omnipod** oder **POD** siehst.

|Enable_Omnipod_Driver_5|

Omnipod-Konfiguration
======================

Bitte **wische nach links** zur **Omnipod (POD)** Registerkarte, wo du alle Pod und RileyLink Funktionen verwalten kannst (einige dieser Funktionen sind ohne aktive Pod Sitzung nicht aktiviert oder nicht sichtbar):

    |refresh_pod_status| Aktualisiere Pod-Verbindungen und -Status

    |pod_management| Pod-Management (Aktivieren, Deaktivieren, Testsignal, RileyLink Statistik und Pod-Historie)

RileyLink-Setup
---------------

If you already successfully paired your RileyLink in the Setup Wizard or steps above, then proceed to the `Activating a Pod Section <#activating-a-pod>`__ below.

*Hinweis: Ein guter visueller Hinweis dafür, dass der RileyLink nicht angeschlossen ist, ist, dass die Tasten Insulin und Bolusrechner auf der Startseite fehlen. Dies passiert auch in den ersten 30 Sekunden nach dem Start von AAPS, da AAPS sich erst mit dem RileyLink verbinden muss.*

1. Stelle sicher, dass Dein RileyLink voll geladen und eingeschaltet ist.

2. After selecting the Omnipod driver, identify and select your RileyLink from **Config Builder (1)** ➜\ **Pump**\ ➜\ **Omnipod**\ ➜\ **Gear Icon (Settings) (2)** ➜\ **RileyLink Configuration (3)** by pressing the **Not Set** or **MAC Address (if present)** text.   

    Stelle sicher, dass dein RileyLink-Akku geladen ist und sich `in unmittelbarer Nähe befindet <#optimale-positionierung-von-omnipod-und-rileylink>`__ (~30 cm entfernt oder weniger) zu deinem Handy positioniert, damit AAPS es durch seine MAC-Adresse identifizieren kann. Einmal ausgewählt, kannst du deine erste Pod Session aktivieren. Benutze die Zurück-Taste auf deinem Handy, um zum AAPS-Haupt-Bildschirm zurückzukehren.

    |RileyLink_Setup_1| |RileyLink_Setup_2|

3. On the **RileyLink Selection** screen press the **Scan (4)** button to initiate a bluetooth scan. **Select your RileyLink (5)**  from the list of available Bluetooth devices.

    |RileyLink_Setup_3| |RileyLink_Setup_4|

4. After successful selection you are returned to the Omnipod Settings page listing your **currently selected RileyLink\'s MAC Address (6).** 

    |RileyLink_Setup_5|

5. Vergewissern dich, dass im Tab **Omnipod (POD)** der **RileyLink Status (1)** als **verbunden erscheint. * Das **Pod Status (2)** Feld sollte **Kein aktiver Pod** anzeigen; Falls nicht, wiederhole bitte den vorherigen Schritt oder verlasse AAPS, um zu sehen, ob dies die Verbindung aktualisiert.

    |RileyLink_Setup_6|

Einen Pod aktivieren
----------------

Bevor du einen Pod aktivieren kannst, stelle sicher, dass du deine RileyLink-Verbindung in den Omnipod-Einstellungen richtig konfiguriert und verbunden hast.

*HINWEIS: Für die Verbindung mit dem Pod steht aus Sicherheitsgründen nur ein kleinerer Kommunikationsbereich zur Verfügung. Vor dem Pairing des Pods ist das Funksignal schwächer, aber nachdem es verbunden wurde, wird es mit voller Signalleistung funktionieren. Stelle sicher, dass dein Pod während dieser Prozedur `in der Nähe<#optimale-positionierung-von-omnipod-und-rileylink>`__ *(~30 cm entfernt oder weniger)* ist, aber nicht oben oder direkt neben dem RileyLink.  

1. Navigiere zur Registerkarte **Omnipod (POD)** und klicke auf den **POD MGMT (1)** Button und dann auf **Pod aktivieren (2)**.

    |Activate_Pod_1| |Activate_Pod_2|

2. Die Anzeige ** Pod füllen* * wird angezeigt. Fülle deinen neuen Pod mit mindestens 85 Einheiten Insulin und achte auf zwei Signaltöne, die anzeigen, dass der Pod bereit ist, gestartet zu werden.

    |Activate_Pod_3|

    Stelle sicher, dass der neue Pod und RileyLink in der Nähe von einander liegen (~ 30cm oder weniger), und klicke auf den Button **Weiter**.

3. Der Bildschirm **Initializiere Pod** wird angezeigt und der Pod beginnt zu entlüften. (Du wirst einen Klick hören, gefolgt von einer Reihe tickender Sounds, der Pod entlüftet sich selbst). Wenn der RileyLink außerhalb der Reichweite des zu aktivierenden Pods ist, erhältst du die Fehlermeldung **Keine Antwort vom Pod**. Wenn dies geschieht, `schiebe den RileyLink näher <#optimale-positionierung-von-omnipod-und-rileylink>`_ (~ 30 cm weg oder weniger) ran, aber nicht auf den Pod oder direkt neben den Pod und klicke auf den Button **Erneut versuchen (1)* *.

    |Activate_Pod_4| |Activate_Pod_5|

4. Bei erfolgreicher Befüllung wird ein grünes Häkchen angezeigt und der **Weiter** Button wird aktiviert. Klicke auf den Button **Weiter**, um die Initialisierung des Pods abzuschließen, und die Anzeige **Pod anbringen** zu sehen.

    |Activate_Pod_6|

5. Bereite anschließend die Infusionsstelle des neuen Pods vor. Entferne die Nadelkappe aus Kunststoff und den weißen Papierträger von der Klebefläche und setze den Pod auf die ausgewählte Stelle Deines Körpers auf. Wenn du fertig bist, klicke auf den **Weiter** Button.

    |Activate_Pod_7|

6. Das Dialogfenster **Pod anlegen** wird jetzt angezeigt. **NUR auf OK klicken, wenn du bereit bist, die Kanülen einzuführen.**

    |Activate_Pod_8|

7. Nach dem Drücken von **OK** dauert es eventuell etwas, bevor der Omnipod antwortet und die Kanüle setzt (1-2 Minuten maximal) also habe Geduld.

    Wenn der RileyLink außerhalb der Reichweite des zu aktivierenden Pods ist, erhältst du die Fehlermeldung **Keine Antwort vom Pod**. Wenn dies geschieht, bewegen Sie den RileyLink näher (~ 30 cm weg oder weniger) zu, aber nicht auf der Oberseite oder direkt neben dem Pod und klicken Sie auf den Button **Erneut versuchen**.

    Wenn der RileyLink außerhalb der Bluetoothreichweite oder keine aktive Verbindung zum Smartphone hat, bekommt man eine Fehlermeldung **Keine Antwort von RileyLink**. Wenn diese Fehlermeldung auftritt, verringere die Distanz vom RileyLink und dem Smartphone und klicke auf den Button **Erneut versuchen**.

    *HINWEIS: Bevor die Kanüle eingesetzt wird, ist es ratsam, die Haut in der Nähe des Kanülensetzpunktes zu kneifen. Dies sorgt für eine sanfte Einführung der Nadel und verringert die Gefahr einer Verstopfung.*

    |Activate_Pod_9|

    |Activate_Pod_10| |Activate_Pod_11|

8. Es wird ein grünes Häkchen angezeigt, und der Button **Weiter** wird bei erfolgreicher Kanüleneinführung aktiviert. Klicke auf den Button **Weiter**.

    |Activate_Pod_12|

9. Der **Pod aktiviert** Bildschirm wird angezeigt. Drücke auf das grüne **Beenden** Feld. Glückwunsch! Du hast jetzt eine neuen Pod aktiviert.

    |Activate_Pod_13|

10. Der Menübildschirm **Pod Management** sollte nun den **Aktiviere Pod (1)** Button als *deaktiviert* und den **Deaktiviere Pod (2)** Button als *aktiviert* angezeigen. Dies liegt daran, dass jetzt ein Pod aktiv ist und du keinen zusätzlichen Pod aktivieren kannst, ohne zuerst den aktuell aktiven Pod zu deaktivieren.

    Klicke auf den Zurück-Knopf auf deinem Smartphone, um zum Tab-Bildschirm **Omnipod (POD)** zurückzukehren, auf dem jetzt Informationen zu deiner aktiven Pod-Sitzung angezeigt werden, einschließlich der aktuellen Basalrate, Pod Reservoir Level, abgegebenem Insulin, Pod Fehler und Warnungen.

    Weitere Details zu den angezeigten Informationen findest du im Tab `Omnipod (POD) <#omnipod-pod-tab>`_ dieses Dokuments.

    |Activate_Pod_14| |Activate_Pod_15|

Deaktiviere einen Pod
------------------

Unter normalen Umständen beträgt die Lebensdauer eines Pods drei Tage (72 Stunden) und zusätzlich 8 Stunden nach der Pod-Ablaufwarnung und somit insgesamt 80 Stunden.

Gehe wie folgt vor, um einen Pod zu deaktivieren (entweder vor dem Ablaufen der Nutzungsdauer oder wegen eines Pod-Fehlers):

1. Gehe zur Registerkarte **Omnipod (POD)**, klicke auf den Button **POD MGMT (1)** und dann auf dem Bildschirm **Pod Management** auf den Button **Deaktiviere Pod (2)**.

    |Deactivate_Pod_1| |Deactivate_Pod_2|

2. Stelle sicher, dass sich der RileyLink in unmittelbarer Nähe zum Pod befindet, aber nicht direkt darauf oder direkt neben dem Pod liegt. Dann klicke auf dem **Deaktiviere Pod ** Bildschirm den **Weiter** -Button, um den Prozess der Deaktivierung des Pods zu starten.

    |Deactivate_Pod_3|

3. Der **Deaktiviere Pod** Bildschirm erscheint und du erhältst einen Bestätigungspiepton, dass die Deaktivierung erfolgreich war.

    |Deactivate_Pod_4|

    **WENN die Deaktivierung scheitert** und du keinen Bestätigungspiepton erhältst, kommt evlt. die Meldung **Keine Antwort von RileyLink** oder **Keine Antwort vom Pod**. Bitte klicke auf den Button **Erneut versuchen (1)**, um die Deaktivierung erneut zu versuchen. If deactivation continues to fail, please click on the **Discard Pod (2)** button to discard the Pod. Du kannst nun deinen Pod entfernen, da die aktive Sitzung beendet wurde. If your Pod has a screaming alarm, you may need to manually silence it (using a pin or a paperclip) as the **Discard Pod (2)** button will not silence it.
	
	|Deactivate_Pod_5| |Deactivate_Pod_6|

4. Nach erfolgreicher Deaktivierung wird ein grünes Häkchen angezeigt. Klicke auf den Button **Weiter**, um den Pod zu deaktivieren. Du kannst nun deinen Pod entfernen, da die aktive Sitzung beendet wurde.

    |Deactivate_Pod_7|

5. Klicke auf den grünen Knopf, um zum Bildschirm **Pod Management** zurückzukehren.

    |Deactivate_Pod_8|

6. Du bist nun zum **Pod Management** im Menü zurückgekehrt. Drücke die Zurück-Taste auf deinem Smartphone um zum Reiter **Omnipod (POD)** zurückzukehren. Überprüfe, ob das Feld **RileyLink Status:** *Verbunden* anzeigt und das Feld **Pod Sstatus:** die Nachricht *Keine aktiver Pod* anzeigt.

    |Deactivate_Pod_9| |Deactivate_Pod_10|

Insulinlieferung stoppen und fortsetzen
----------------------------------------

Die folgenden Schritte zeigen dir, wie du die Insulinzufuhr aussetzen und fortsetzen kannst.

*HINWEIS - wenn du keinen Button 'Unterbrechen' siehst*, ist dessen Anzeige im Register Omnipod (POD) nicht aktiviert. Enable the **Show Suspend Delivery button in Omnipod tab** setting in the `Omnipod settings <#omnipod-settings>`__ under **Other**.

Insulinabgabe unterbrechen
~~~~~~~~~~~~~~~~~~~~~~~~~~~

Verwende diesen Befehl, um den aktiven Pod in den Status 'unterbrochen' zu versetzen. In diesem ausgesetzten Zustand wird der Pod kein Insulin liefern. Dieser Befehl ahmt die Suspend-Funktion nach, die der originale Omnipod PDM an einen aktiven Pod sendet.

1. Gehe zur Registerkarte **Omnipod (POD)** und drücke den Button **Unterbrechen (1)**. Der Suspend-Befehl wird vom RileyLink an den aktiven Pod gesendet und der **Unterbrechen (3)** Button wird ausgegraut. The **Pod status (2)** will display **SUSPEND DELIVERY**.

    |Suspend_Insulin_Delivery_1| |Suspend_Insulin_Delivery_2|

2. Wenn der Befehl zum Aussetzen erfolgreich durch den RileyLink bestätigt wurde, zeigt ein Bestätigungsdialog die Nachricht **Alle Insulinlieferungen wurden ausgesetzt** an. Klicke **OK** um zu bestätigen und fortzufahren.

    |Suspend_Insulin_Delivery_3|

3. Dein aktiver Pod hat nun die Insulinabgabe unterbrochen. The **Omnipod (POD)** tab will update the **Pod status (1)** to **Suspended**. Der **Unterbrechen**-Button ändert sich zu **Abgabe fortsetzen (2)**.

    |Suspend_Insulin_Delivery_4|

Insulinabgabe fortsetzen
~~~~~~~~~~~~~~~~~~~~~~~~~

Benutze diesen Befehl, um den aktiven, derzeit pausierten Pod anzuweisen, die Insulinabgabe fortzusetzen. Nachdem der Befehl erfolgreich verarbeitet wurde, wird die normale Insulinabgabe mit der aktuellen Basalrate fortgesetzt. Grundlage dafür ist das aktive Basalprofil zur aktuellen Uhrzeit. Der Pod akzeptiert wieder Befehle für Bolus, TBR und SMB.

1. Go to the **Omnipod (POD)** tab and ensure the **Pod status (1)** field displays **Suspended**, then press the **Resume Delivery (2)** button to start the process to instruct the current pod to resume normal insulin delivery. A message **RESUME DELIVERY** will display in the **Pod status (3)** field, signifying the RileyLink is actively sending the command to the suspended pod.

    |Resume_Insulin_Delivery_1| |Resume_Insulin_Delivery_2|

2. Wenn der Befehl zum Fortsetzen erfolgreich durch den RileyLink bestätigt wurde, zeigt ein Bestätigungsdialog die Nachricht **Insulinabgabe wieder aufgenommen.** an. Klicke **OK** um zu bestätigen und fortzufahren.

    |Resume_Insulin_Delivery_3|

3. The **Omnipod (POD)** tab will update the **Pod status (1)** field to display **RUNNING,** and the **Resume Delivery** button will now display the **SUSPEND (2)** button.

    |Resume_Insulin_Delivery_4|

Pod-Alarme bestätigen
------------------------

*NOTE - if you do not see an ACK ALERTS button, it is because it is conditionally displayed on the Omnipod (POD) tab ONLY when the pod expiration or low reservoir alert has been triggered.*

In dem folgenden Prozess wird gezeigt, wie Warntöne bestätigt und quittiert werden können, die auftreten, wenn die aktive Pod-Zeit den Grenzwert für die Warnung vor dem Ablauf von 72 Stunden (3 Tage) erreicht. Dieser Grenzwert für die Zeitbegrenzung ist in den **Stunden vor dem Herunterfahren** in den Omnipod Warnungen definiert. Die maximale Nutzungsdauer eines Pods beträgt 80 Stunden (3 Tage und 8 Stunden), dennoch empfiehlt der Hersteller, 72 Stunden (3 Tage) nicht zu überschreiten.

*HINWEIS - Wenn die Einstellung "Benachrichtigungen automatisch bestätigen" in den Omnipod-Alarmen aktiviert wurden, wird diese Benachrichtigung nach dem ersten Auftreten automatisch bearbeitet und der Alarm muss nicht NICHT manuell abgebrochen werden.*

1. Wenn die definierte **Stunden vor dem Herunterfahren** Warnung erreicht ist, gibt der Pod Warnungen aus, um Dir mitzuteilen, dass er sich seiner Ablaufzeit nähert und bald eine Wechsel des Pods erforderlich sein wird. Dies kann auf der Registerkarte **Omnipod (POD)** überprüft werden, das Feld **Pod läuft ab: (1)** zeigt die genaue Uhrzeit an, wann der Pod abläuft (72 Stunden nach der Aktivierung). Nachdem diese Zeit abgelaufen ist, wird der Text **rot** dargestellt und im Feld **Aktive Pod-Warnungen** wird eine Statusnachricht **Pod läuft in Kürze ab** angezeigt. This trigger will display the **ACK ALERTS (3)** button. A **system notification (4)** will also inform you of the upcoming pod expiration

    |Acknowledge_Alerts_1| |Acknowledge_Alerts_2|

2. Go to the **Omnipod (POD)** tab and press the **ACK ALERTS (2)** button (acknowledge alerts). The RileyLink sends the command to the pod to deactivate the pod expiration warning beeps and updates the **Pod status (1)** field with **ACKNOWLEDGE ALERTS**.

    |Acknowledge_Alerts_3|

3. Bei **erfolgreicher Deaktivierung** der Alarme werden **2 Signaltöne** vom aktiven Pod abgegeben und ein Bestätigungsdialog zeigt die Nachricht **Aktive Warnungen wurden bestätigt.** an. Drücke **OK**, um den Dialog zu bestätigen und zu schließen.

    |Acknowledge_Alerts_4|

    Wenn sich der RileyLink außerhalb des Bereichs des Pods befindet während der Befehl zum Bestätigen des Alarms gerade verarbeitet wird, werden 2 Optionen angezeigt: **Mute (1)** wird diese aktuelle Warnung zum Schweigen bringen. **OK (2)** bestätigt diese Warnung und ermöglicht es dem Nutzer, Warnungen erneut zu bestätigen.

    |Acknowledge_Alerts_5|

4. Go to the **Omnipod (POD)** tab, under the **Active Pod alerts** field, the warning message is no longer displayed and the active pod will no longer issue pod expiration warning beeps.

Anzeige Pod-Historie
----------------

In diesem Abschnitt wird gezeigt, wie du deine Pod-Historie überprüfen und nach verschiedenen Aktionskategorien filtern kannst. Mit diesem Werkzeug kannst du die Aktionen und Ergebnisse deines jeweils aktiven Pod während dessen dreitägigem Lebenszyklus (72 - 80 Stunden) ansehen.

Diese Funktion ist hilfreich bei der Überprüfung von Boli, Temporären Basalraten (TBRs) und grundlegenden Änderungen, die erfolgt sind, bei denen du aber nicht sicher bist, ob sie abgeschlossen wurden. Die übrigen Kategorien sind im Allgemeinen hilfreich bei der Problembehebung und zur Bestimmung der Reihenfolge von Ereignissen, die zu einem Fehler geführt haben.

*NOTE:*
**Unsichere** Befehle erscheinen in der Pod-Historie, aber für deren Genauigkeit gibt es aufgrund der Unsicherheit keine Garantie.

1. Rufe die Registerkarte **Omnipod (POD)** auf und drücke den Button **POD MGMT (1)**, um auf das Menü **Pod-Management** zuzugreifen. Drücke dann auf die Schaltfläche **Pod-Historie(2)**, um auf den Bildschirm der Pod-Historie zuzugreifen.

    |Pod_History_1| |Pod_History_2|

2. In der Anzeige **Pod-Historie** wird die Standardkategorie **Alle (1)** angezeigt, die **Datum und Uhrzeit (2)** aller Pods **Aktionen (3)** und **Ergebnisse (4)** in umgekehrter chronologischer Reihenfolge darstellt. Drücke zweimal die **Zurück-Taste deines Telefons** um zur **Omnipod (POD)** Registerkarte  zurückzukehren.

    |Pod_History_3| |Pod_History_4|

Zeige RileyLink Einstellungen und Historie an
-----------------------------------

Dieser Abschnitt zeigt, wie die Einstellungen des aktiven Pods und RileyLinks zusammen mit der Kommunikationshistorie der beiden überprüft werden können. Diese Funktion wird nach dem Aufrufen in zwei Abschnitte unterteilt: **Einstellungen** und **Historie**.

Hauptsächlich wird diese Funktion verwendet, wenn der RileyLink außerhalb des Bluetooth-Bereichs des Smartphones ist und der **RileyLink-Status** nach einer bestimmten Zeit **RileyLink nicht erreichbar** meldet. Der Button **Aktualisieren** auf der Registerkarte **Omnipod (POD)** stellt manuell die Bluetooth-Kommunikation mit dem derzeit in den Omnipod-Einstellungen konfigurierten RileyLink erneut her.

Falls durch Drücken des Buttons **Aktualisieren** auf der Registerkarte **Omnipod (POD)** die Verbindung zum RileyLink nicht wiederhergestellt werden kann, folge bitte den unten aufgeführten Schritten für eine manuelle Verbindung.

RileyLink Bluetooth-Kommunikation manuell wiederherstellen
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

1. From the **Omnipod (POD)** tab when the **RileyLink Status: (1)** reports **RileyLink unreachable** press the **POD MGMT (2)** button to navigate to the **Pod Management** menu. On the **Pod Management** menu you will see a notification appear actively searching for a RileyLink connection, press the **RileyLink stats (3)** button to access the **RileyLink settings** screen.

    |RileyLink_Bluetooth_Reset_1| |RileyLink_Bluetooth_Reset_2|

2. On the **RileyLink Settings (1)** screen under the **RileyLink (2)** section you can confirm both the Bluetooth connection status and error in the **Connection Status and Error: (3)** fields. A *Bluetooth Error* and *RileyLink unreachable* status should be shown. Start the manual Bluetooth reconnection by pressing the **refresh (4)** button in the lower right corner.

    |RileyLink_Bluetooth_Reset_3|
    
    Wenn der RileyLink nicht reagiert oder außer Reichweite des Smartphones ist während der Bluetooth-Aktualisierungsbefehl gerade verarbeitet wird, erscheint eine Warnmeldung, die 2 Optionen ermöglicht.

   **Mute (1)** lässt diese aktuelle Warnung verstummen.
   **OK (2)** bestätigt diese aktuelle Warnung und ermöglicht es dem Nutzer zu versuchen die Bluetooth-Verbindung erneut wieder herzustellen.
	
    |RileyLink_Bluetooth_Reset_4|	
	
3. Wenn die **Bluetooth-Verbindung** nicht wieder hergestellt wird, dann versuche die Bluetooth-Funktion auf deinem Smartphone manuell **aus-** und dann wieder **anzuschalten**.

4. Nach einer erfolgreichen RileyLink Bluetooth-Wiederverbindung sollte das Feld **Verbindungsstatus: (1)** **RileyLink bereit** anzeigen. Herzlichen Glückwunsch, du hast jetzt erneut deinen konfigurierten RileyLink mit AAPS verbunden!

    |RileyLink_Bluetooth_Reset_5|

RileyLink and Active Pod Settings
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

This screen will provide information, status, and settings configuration information for both the currently configured RileyLink and the currently active Omnipod Eros pod. It will also allow you to manually refresh the RileyLink Bluetooth connection.

1. Go to the **Omnipod (POD**) tab and press the **POD MGMT (1)** button to access the **Pod management** menu, then press the **RileyLink stats (2)** button to view your currently configured **RileyLink (3)** and active pod **Device (4)** settings.

    |RileyLink_Statistics_Settings_1| |RileyLink_Statistics_Settings_2|

    |RileyLink_Statistics_Settings_3|
    
RileyLink (3) fields
++++++++++++++++++++

	* **Configured Address:** MAC address of the selected RileyLink defined in the Omnipod Settings.
	* **Configured RileyLink Name:** Bluetooth identification name of the selected RileyLink defined in your phone's Bluetooth settings.
	* **Connected Device:** Model of the Omnipod pod currently communicating with the RileyLink (currently only eros pods work with the RileyLink
	* **Connection Status**: The current status of the Bluetooth connection between the RileyLink and the phone running AAPS.
	* **Connection Error:** If there is an error with the RileyLink Bluetooth connection details will be displayed here.
	* **RL Firmware:** Current firmware version installed on the actively connected RileyLink.

Device (4) fields - With an Active Pod
++++++++++++++++++++++++++++++++++++++

	* **Device Type:** The type of device communicating with the RileyLink (Omnipod pod pump)
	* **Device Model:** The model of the active device connected to the RileyLink (the current model name of the Omnipod pod, which is Eros)
	* **Pump Serial Number:** Serial number of the currently activated pod
	* **Pump Frequency:** Communication radio frequency the RileyLink has tuned to enable communication between itself and the pod.
	* **Last used frequency:** Last known radio frequency the pod used to communicate with the RileyLink.
	* **Last device contact:** Date and time of the last contact the pod made with the RileyLink.
	* **Refresh button** to manually refresh RileyLink Bluetooth communication with the phone.

RileyLink and Active Pod History
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

This screen provides information in reverse chronological order of each state or action that either the RileyLink or currently connected pod is in or has taken. The entire history is only available for the currently active pod, after a pod change this history will be erased and only events from the newly activated pod will be recorded and shown.

1. Go to the **Omnipod (POD**) tab and press the **POD MGMT (1)** button to access the **Pod management** menu, then press the **RileyLink stats (2)** button to view the **Settings** and **History** screen. Click on the **HISTORY (3)** text to display the entire history of the RileyLink and currently active pod session.

    |RileyLink_Statistics_History_1| |RileyLink_Statistics_History_2|

    |RileyLink_Statistics_History_3|
    
Fields
++++++
    
   * **Date & Time**: In reverse chronological order the timestamp of each event.
   * **Device:** The device to which the current action or state is referring.
   * **State or Action:** The current state or action performed by the device.

Omnipod (POD) Tab
=================

Below is an explanation of the layout and meaning of the icons and status fields on the **Omnipod (POD)** tab in the main AAPS interface.

*NOTE: If any message in the Omnipod (POD) tab status fields report (uncertain) then you will need to press the Refresh button to clear it and refresh the pod status.*

|Omnipod_Tab|

Fields
------

* **RileyLink Status:** Displays the current connection status of the RileyLink

   - *RileyLink Unreachable* - RileyLink is either not within Bluetooth range of the phone, powered off or has a failure preventing Bluetooth communication.
   - *RileyLink Ready* - RileyLink is powered on and actively initializing the Bluetooth connection
   - *Connected* - RileyLink is powered on, connected and actively able to communicate via Bluetooth.

* **Pod address:** Displays the current address in which the active pod is referenced
* **LOT:** Displays the LOT number of the active pod
* **TID:** Displays the serial number of the pod.
* **Firmware Version:** Displays the firmware version of the active pod.
* **Time on Pod:** Displays the current time on the active pod.
* **Pod expires:** Displays the date and time when the active pod will expire.
* **Pod status:** Displays the status of the active pod.
* **Last connection:** Displays the last time communication with the active pod was achieved.

   - *Moments ago* - less than 20 seconds ago.
   - *Less than a minute ago* - more than 20 seconds but less than 60 seconds ago.
   - *1 minute ago* - more than 60 seconds but less than 120 seconds (2 min)
   - *XX minutes ago* - more than 2 minutes ago as defined by the value of XX

* **Last bolus:** Displays the dosage of the last bolus sent to the active pod and how long ago it was issued in parenthesis.
* **Base Basal rate:** Displays the basal rate programmed for the current time from the basal rate profile.
* **Temp basal rate:** Displays the currently running Temporary Basal Rate in the following format

   - Units / hour @ time TBR was issued (minutes run / total minutes TBR will be run)
   - *Example:* 0.00U/h @18:25 ( 90/120 minutes)

* **Reservoir:** Displays over 50+U left when more than 50 units are left in the reservoir. Below this value the exact units are displayed in yellow text.
* **Total delivered:** Displays the total number of units of insulin delivered from the reservoir. *Note this is an approximation as priming and filling the pod is not an exact process.*
* **Errors:** Displays the last error encountered. Review the `Pod history <#view-pod-history>`__, `RileyLink history <#rileylink-and-active-pod-history>`__ and log files for past errors and more detailed information.
*  **Active pod alerts:** Reserved for currently running alerts on the active pod. Normally used when pod expiration is past 72 hours and native pod beep alerts are running.

Icons
-----

.. table:: 

   ====================  ===========================================
   |refresh_pod_status|  **Aktualisieren:** 
   			 
			 Sends a refresh command to the active pod to update communication
			 
			 * Use to refresh the pod status and dismiss status fields that contain the text (uncertain).
			 * See the `Troubleshooting section <#troubleshooting>`__ below for additional information.

   |pod_management|   	 **POD MGMT:**

			 Navigates to the Pod management menu
   |ack_alerts|		 **Alarm bestätigen:**
   			 
			 When pressed this will disable the pod expiration beeps and notifications. 
			 
			 * Button is displayed only when pod time is past expiration warning time
			 * Upon successful dismissal, this icon will no longer appear.
			 
   |set_time|		 **Zeit einstellen:**
   
			 When pressed this will update the time on the pod with the current time on your phone.
   |suspend|  		 **Unterbrechen:**
   
			 Suspends the active pod
   |resume| 		 **Abgabe fortsetzen:**
   
			 Resumes the currently suspended, active pod
   ====================  ===========================================


Pod Management Menu
-------------------

Below is an explanation of the layout and meaning of the icons on the **Pod Management** menu accessed from the **Omnipod (POD)** tab.

|Omnipod_Tab_Pod_Management|

.. table:: 

   =========================  ===========================================
   |activate_pod|	      **Pod aktivieren**
   
   			      Primes and activates a new pod

   |deactivate_pod|	      **Pod deaktivieren**
 
 			      Deactivates the currently active pod.
			 
		   	      *  A partially paired pod ignores this command.
			      *  Use this command to deactivate a screaming pod (error 49).
			      *  If the button is disabled (greyed out) use the Discard Pod button.

   |play_test_beep| 	      **Testton abspielen**
 
 			      Plays a single test beep on the pod when pressed.

   |discard_pod|	      **Pod ablegen**

			      Deactivates and discards the pod state of an unresponsive pod when pressed.
			      
			      Button is only displayed when very specific cases are met as proper deactivation is no longer possible:

			      * A **pod is not fully paired** and thus ignores deactivate commands.
			      * A **pod is stuck** during the pairing process between steps
	 		      * A **pod simply does not pair at all.**

   |pod_history| 	      **Pod Historie** 
   
   			      Displays the active pod activity history

   |rileylink_stats| 	      **RileyLink-Statistiken:**
   
   			      Navigates to the RileyLink Statistics screen displaying current settings and RileyLink Connection history

			      * **Settings** - displays RileyLink and active pod settings information
			      * **History** - displays RileyLink and Pod communication history

   |reset_rileylink_config|   **RileyLink-Konfiguration zurücksetzen** 
   
   			      When presssed this button resets the currently connected RileyLink configuration. 
			      
			      * When communication is started, specific data is sent to and set in the RileyLink 
			      
			        - Memory Registers are set
				- Communication Protocols are set
				- Tuned Radio Frequency is set
				
			      * See `addtional notes <#reset-rileylink-config-notes>`__ at the end of this table

   |pulse_log|		      **Pulse-Log lesen:** 
    
    			      Sends the active pod pulse log to the clipboard
   =========================  ===========================================			    

*Reset RileyLink Config Notes*
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

* The primary usage of this feature is when the currently active RileyLink is not responding and communication is in a stuck state.
* If the RileyLink is turned off and then back on, the **Reset RileyLink Config** button needs to be pressed, so that it sets these communication parameters in the RileyLink configuration.
* If this is NOT done then AAPS will need to be restarted after the RileyLink is power cycled.
* This button **DOES NOT** need to be pressed when switching between different pod communication devices (RileyLinks)

Omnipod Settings
================

The Omnipod driver settings are configurable from the top-left hand corner **hamburger menu** under **Config Builder**\ ➜\ **Pump**\ ➜\ **Omnipod**\ ➜\ **Settings Gear (2)** by selecting the **radio button (1)** titled **Omnipod**. Selecting the **checkbox (3)** next to the **Settings Gear (2)** will allow the Omnipod menu to be displayedas a tab in the AAPS interface titled **OMNIPOD** or **POD**. Dies wird in dieser Dokumentation als Registerkarte **Omnipod (POD)** bezeichnet.

|Omnipod_Settings_1|

**NOTE:** A faster way to access the **Omnipod settings** is by accessing the **3 dot menu (1)** in the upper right hand corner of the **Omnipod (POD)** tab and selecting **Omnipod preferences (2)** from the dropdown menu.

|Omnipod_Settings_2|

The settings groups are listed below; you can enable or disable via a toggle switch for most entries described below:

|Omnipod_Settings_3|

*NOTE: An asterisk (\*) denotes the default for a setting is enabled.*

RileyLink
---------

Allows for scanning of a RileyLink device. The Omnipod driver cannot select more than one RileyLink device at a time.

Bestätigungstöne
------------------

Provides confirmation beeps from the pod for bolus, basal, SMB, and TBR delivery and changes.

* **\*Bolus beeps enabled:** Enable or disable confirmation beeps when a bolus is delivered.
* **\*Basal beeps enabled:** Enable or disable confirmation beeps when a new basal rate is set, active basal rate is canceled or current basal rate is changed.
* **\*SMB beeps enabled:** Enable or disable confirmation beeps when a SMB is delivered.
* **TBR beeps enabled:** Enable or disable confirmation beeps when a TBR is set or canceled.

Alarme
------

Provides AAPS alerts and Nightscout announcements for pod expiration, shutdown, low reservoir based on the defined threshold units.

*Note an AAPS notification will ALWAYS be issued for any alert after the initial communication with the pod since the alert was triggered. Dismissing the notification will NOT dismiss the alert UNLESS automatically acknowledge Pod alerts is enabled. To MANUALLY dismiss the alert you must visit the Omnipod (POD) tab and press the ACK ALERTS button.*
	
* **\*Expiration reminder enabled:** Enable or disable the pod expiration reminder set to trigger when the defined number of hours before shutdown is reached.
* **Hours before shutdown:** Defines the number hours before the active pod shutdown occurs, which will then trigger the expiration reminder alert.
* **\*Low reservoir alert enabled:** Enable or disable an alert when the pod's remaining units low reservoir limit is reached as defined in the Number of units field.
* **Number of units:** The number of units at which to trigger the pod low reservoir alert.
* **Automatically acknowledge Pod alerts:** When enabled a notification will still be issued however immediately after the first pod communication contact since the alert was issued it will now be automatically acknowledged and the alert will be dismissed.

Benachrichtigungen
-------------

Provides AAPS notifications and audible phone alerts when it is uncertain if TBR, SMB, or bolus events were successful. 

*NOTE: These are notifications only, no audible beep alerts are made.*

* **Sound for uncertain TBR notifications enabled:** Enable or disable this setting to trigger an audible alert and visual notification when AAPs is uncertain if a TBR was successfully set.
* **\*Sound for uncertain SMB notifications enabled:** Enable or disable this setting to trigger an audible alert and visual notification when AAPS is uncertain if an SMB was successfully delivered.
* **\*Sound for uncertain bolus notifications enabled:** Enable or disable this setting to trigger an audible alert and visual notification when AAPS is uncertain if a bolus was successfully delivered.
   
Andere
-----

Provides advanced settings to assist debugging.
	
* **Show Suspend Delivery button in Omnipod tab:** Hide or display the suspend delivery button in the **Omnipod (POD)** tab.
* **Show Pulse log button in Pod Management menu:** Hide or display the pulse log button in the **Pod Management** menu.
* **Show RileyLink Stats button in Pod Management menu:** Hide or display the RileyLink Stats button in the **Pod Management** menu.
* **Use battery level reported by OrangeLink/EmaLink:** Reports the actual battery level of the OrangeLink/EmaLink. We **strongly recommend** that all OrangeLink/EmaLink users enable this setting.

	+  DOES NOT work with the original RileyLink.
	+  May not work with RileyLink alternatives.
	+  Enabled - Reports the current battery level for supported pod communication devices.
	+  Disabled - Reports a value of n/a.
* **\*DST/Time zone detect on enabled:** allows for time zone changes to be automatically detected if the phone is used in an area where DST is observed.

Switching or Removing an Active Pod Communication Device (RileyLink)
--------------------------------------------------------------------

With many alternative models to the original RileyLink available or the need have multiple/backup versions of the same pod communication device (RileyLink), it becomes necessary to switch or remove the selected pod communication device (RileyLink) from Omnipod Setting configuration. 

The following steps will show how to **Remove** and existing pod communication device (RileyLink) as well as **Add** a new pod communication device.  Executing both **Remove** and **Add** steps will switch your device.

1. Access the **RileyLink Selection** menu by selecting the **3 dot menu (1)** in the upper right hand corner of the **Omnipod (POD)** tab and selecting **Omnipod preferences (2)** from the dropdown menu. On the **Omnipod Settings** menu under **RileyLink Configuration (3)** press the **Not Set** (if no device is selected) or **MAC Address** (if a device is present) text to open the **RileyLink Selection** menu. 

    |Omnipod_Settings_2| |RileyLink_Setup_2|  

Remove Currently Selected Pod Communication Device (RileyLink)
--------------------------------------------------------------

This process will show how to remove the currently selected pod communication device (RileyLink) from the Omnipod Driver settings.

1. Under **RileyLink Configuration** press the **MAC Address (1)** text to open the **RileyLink Selection** menu. 

    |RileyLink_Setup_Remove_1|

2. On the **RileyLink Selection** menu the press **Remove (2)** button to remove **your currently selected RileyLink (3)**

    |RileyLink_Setup_Remove_2|

3. At the confirmation prompt press **Yes (4)** to confirm the removal of your device.

    |RileyLink_Setup_Remove_3|
    
4. You are returned to the **Omnipod Setting** menu where under **RileyLink Configuration** you will now see the device is **Not Set (5)**.  Congratulations, you have now successfully removed your selected pod communication device (RileyLink).

    |RileyLink_Setup_Remove_4|

Add Currently Selected Pod Communication Device (RileyLink)
-----------------------------------------------------------

This process will show how to add a new pod communication device (RileyLink) to the Omnipod Driver settings.

1. Under **RileyLink Configuration** press the **Not Set (1)** text to open the **RileyLink Selection** menu. 

    |RileyLink_Setup_Add_1|
    
2. Press the **Scan (2)** button to start scanning for all available Bluetooth devices.

    |RileyLink_Setup_Add_2|

3. Select **your RileyLink (3)** from the list of available devices and you will be returned to the **Omnipod Settings** menu displaying the **MAC Address (4)** of your newly selected device.  Congratulations you have successfully selected your pod communication device (RileyLink).

    |RileyLink_Setup_Add_3| |RileyLink_Setup_Add_4|
    

Actions (ACT) Tab
=================

This tab is well documented in the main AAPS documentation but there are a few items on this tab that are specific to how the Omnipod pod differs from tube based pumps, especially after the processes of applying a new pod.

1. Go to the **Actions (ACT)** tab in the main AAPS interface.

2. Under the **Careportal (1)** section the following 3 fields will have their **age reset** to 0 days and 0 hours **after each pod change**: **Insulin** and **Cannula**. This is done because of how the Omnipod pump is built and operates. The **pump battery** and **insulin reservoir** are self contained inside of each pod. Since the pod inserts the cannula directly into the skin at the site of the pod application, a traditional tube is not used in Omnipod pumps. *Therefore after a pod change the age of each of these values will automatically reset to zero.* **Pump battery age** is not reported as the battery in the pod will always be more than the life of the pod (maximum 80 hours).

  |Actions_Tab|

Levels
------

**Insuln Level**

Reporting of the amount of insulin in the Omnipod Eros Pod is not exact.  This is because it is not known exactly how much insulin was put in the pod, only that when the 2 beeps are triggered while filling the pod that over 85 units have been injected. A Pod can hold a maximum of 200 units. Priming can also introduce variance as it is not and exact process.  With both of these factors, the Omnipod driver has been written to give the best approximation of insulin remainin in the reservoir.  

  * **Abover 50 Units** - Reports a value of 50+U when more than 50 units are currently in the reservoir.
  * **Below 50 Units** - Reports an approximate calculated value of insulin remaining in the reservoir. 
  * **SMS** - Returns value or 50+U for SMS responses
  * **Nightscout** - Uploads value of 50 when over 50 units to Nightscout (version 14.07 and older).  Newer versions will report a value of 50+ when over 50 units.


**Battery Level**

Battery level reporting is a setting that can be enabled to return the current battery level of pod communicaton devices like the OrangeLink and EmaLink.  The RileyLink hardware is not capable of reporting its battery level.  The battery level is reported after each communication with the pod, so when charging a linear increase may not be observed.  A manual refresh will update the current battery level.  When a supported Pod communicaton device is disconnected a value of 0% will be reported.

  * **RileyLink hardware is NOT capable of report battery level** 
  * **Use battery level reported by OrangeLink/EmaLink Setting MUST be enabled in the Omnipod settings to reporting battery level values**
  * **Battery Level ONLY works for OrangeLink and EmaLink Devices**
  * **Battery Level reporting MAY work for other devices (excluding RileyLink)**
  * **SMS** - Returns current battery level as a response when an actual level exists, a value of n/a will not be returned.
  * **Nightscout** - Battery level is reported when an actual level exists, value of n/a will not be reported


Problembehandlung
===============

Pod Failures
------------

Pods fail occasionally due to a variety of issues, including hardware issues with the Pod itself. It is best practice not to call these into Insulet, since AAPS is not an approved use case. A list of fault codes can be found `here <https://github.com/openaps/openomni/wiki/Fault-event-codes>`__ to help determine the cause.

Preventing error 49 pod failures
--------------------------------

This failure is related to an incorrect pod state for a command or an error during an insulin delivery command. We recommend users to switch to the Nightscout client to *upload only (Disable sync)* under the **Config Builder**\ ➜\ **General**\ ➜\ **NSClient**\ ➜\ **cog wheel**\ ➜\ **Advanced Settings** to prevent possible failures.

Pump Unreachable Alerts
-----------------------

It is recommended that pump unreachable alerts be configured to **120 minutes** by going to the top right-hand side three-dot menu, selecting **Preferences**\ ➜\ **Local Alerts**\ ➜\ **Pump unreachable threshold [min]** and setting this to **120**.

Import Settings from previous AAPS
----------------------------------

Please note that importing settings has the possibility to import an outdated Pod status. As a result, you may lose an active Pod. It is therefore strongly recommended that you **do not import settings while on an active Pod session**.

1. Deactivate your pod session. Verify that you do not have an active pod session.
2. Export your settings and store a copy in a safe place.
3. Uninstall the previous version of AAPS and restart your phone.
4. Install the new version of AAPS and verify that you do not have an active pod session.
5. Import your settings and activate your new pod.

Omnipod driver alerts
---------------------

please note that the Omnipod driver presents a variety of unique alerts on the **Overview tab**, most of them are informational and can be dismissed while some provide the user with an action to take to resolve the cause of the triggered alert. A summary of the main alerts that you may encounter is listed below:

Kein aktiver Pod
~~~~~~~~~~~~~

No active Pod session detected. This alert can temporarily be dismissed by pressing **SNOOZE** but it will keep triggering as long as a new pod has not been activated. Once activated this alert is automatically silenced.

Pod angehalten
~~~~~~~~~~~~~

Informational alert that Pod has been suspended.

Setzen des Basal-Profils fehlgeschlagen. Delivery might be suspended! Please manually refresh the Pod status from the Omnipod tab and resume delivery if needed..
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Informational alert that the Pod basal profile setting has failed, and you will need to hit *Refresh* on the Omnipod tab.

Unable to verify whether SMB bolus succeeded. If you are sure that the Bolus didn't succeed, you should manually delete the SMB entry from Treatments.
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Alert that the SMB bolus success could not be verified, you will need to verify the *Last bolus* field on the Omnipod tab to see if SMB bolus succeeded and if not remove the entry from the Treatments tab.

Uncertain if "task bolus/TBR/SMB" completed, please manually verify if it was successful.
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Due to the way that the RileyLink and Omnipod communicate, situations can occur where it is *uncertain* if a command was successfully processed. The need to inform the user of this uncertainty was necessary.

Below are a few examples of when an uncertain notification can occur.

* **Boluses** - Uncertain boluses cannot be automatically verified. The notification will remain until the next bolus but a manual pod refresh will clear the message. *By default alerts beeps are enabled for this notification type as the user will manually need to verify them.*
* **TBRs, Pod Statuses, Profile Switches, Time Changes** - a manual pod refresh will clear the message. By default alert beeps are disabled for this notification type.
* **Pod Time Deviation -** When the time on the pod and the time your phone deviates too much then it is difficult for AAPS loop to function and make accurate predictions and dosage recommendations. If the time deviation between the pod and the phone is more than 5 minutes then AAPS will report the pod is in a Suspended state under Pod status with a HANDLE TIME CHANGE message. An additional **Set Time** icon will appear at the bottom of the Omnipod (POD) tab. Clicking Set Time will synchronize the time on the pod with the time on the phone and then you can click the RESUME DELIVERY button to continue normal pod operations.

Best Practices
==============

Optimale Positionierung von Omnipod und RileyLink
-----------------------------------------

The antenna used on the RileyLink to communicate with an Omnipod pod is a 433 MHz helical spiral antenna. Due to its construction properties it radiates an omni directional signal like a three dimensional doughnut with the z-axis representing the vertical standing antenna. This means that there are optimal positions for the RileyLink to be placed, especially during pod activation and deactivation routines.

|Toroid_w_CS|

    *(Fig 1. Graphical plot of helical spiral antenna in an omnidirectional pattern*)

Because of both safety and security concerns, pod *activation* has to be done at a range *closer (~30 cm away or less)* than other operations such as giving a bolus, setting a TBR or simply refreshing the pod status. Due to the nature of the signal transmission from the RileyLink antenna it is NOT recommended to place the pod directly on top of or right next to the RileyLink.

The image below shows the optimal way to position the RileyLink during pod activation and deactivation procedures. The pod may activate in other positions but you will have the most success using the position in the image below.

*Note: If after optimally positioning the pod and RileyLink communication fails, this may be due to a low battery which decreases the transmission range of the RileyLink antenna. To avoid this issue make sure the RileyLink is properly charged or connected directly to a charging cable during this process.*

|Omnipod_pod_and_RileyLink_Position|

Where to get help for Omnipod driver
====================================

All of the development work for the Omnipod driver is done by the community on a volunteer basis; we ask that you please be considerateand use the following guidelines when requesting assistance:

-  **Level 0:** Read the relevant section of this documentation to ensure you understand how the functionality with which you are experiencing difficulty is supposed to work.
-  **Level 1:** If you are still encountering problems that you are not able to resolve by using this document, then please go to the `AndroidAPS <https://gitter.im/MilosKozak/AndroidAPS>`__ channel on **Gitter** or the *#androidaps* channel on **Discord** by using `this invite link <https://discord.com/invite/NhEUtzr>`__.
-  **Level 2:** Search existing issues to see if your issue has already been reported; if not, please create a new `issue <https://github.com/nightscout/AndroidAPS/issues>`__ and attach your `log files <https://androidaps.readthedocs.io/en/latest/CROWDIN/sk/Usage/Accessing-logfiles.html>`__.
-  **Be patient - most of the members of our community consist of good-natured volunteers, and solving issues often requires time and patience from both users and developers.**



..
	Omnipod image aliases resource for referencing images by name with more positioning flexibility


..
	Interface Icons

..
	Omnipod (POD) Overview Tab

.. |ack_alerts|                    image:: ../images/omnipod/ICONS/omnipod_overview_ack_alerts.png
.. |pod_management|                image:: ../images/omnipod/ICONS/omnipod_overview_pod_management.png
.. |refresh_pod_status|            image:: ../images/omnipod/ICONS/omnipod_overview_refresh_pod_status.png
.. |resume|               	   image:: ../images/omnipod/ICONS/omnipod_overview_resume.png
.. |set_time|                      image:: ../images/omnipod/ICONS/omnipod_overview_set_time.png
.. |suspend|                       image:: ../images/omnipod/ICONS/omnipod_overview_suspend.png

..
	Pod Management Tab

.. |activate_pod|                  image:: ../images/omnipod/ICONS/omnipod_overview_pod_management_activate_pod.png
.. |deactivate_pod|                image:: ../images/omnipod/ICONS/omnipod_overview_pod_management_deactivate_pod.png
.. |discard_pod|                   image:: ../images/omnipod/ICONS/omnipod_overview_pod_management_discard_pod.png
.. |play_test_beep|                image:: ../images/omnipod/ICONS/omnipod_overview_pod_management_play_test_beep.png
.. |pod_history|                   image:: ../images/omnipod/ICONS/omnipod_overview_pod_management_pod_history.png
.. |pulse_log|                     image:: ../images/omnipod/ICONS/omnipod_overview_pod_management_pulse_log.png
.. |reset_rileylink_config|        image:: ../images/omnipod/ICONS/omnipod_overview_pod_management_reset_rileylink_config.png
.. |rileylink_stats|               image:: ../images/omnipod/ICONS/omnipod_overview_pod_management_rileylink_stats.png


..
	Instructional Section Images
	
..
	Hardware- und Software-Anforderungen
.. |EmaLink|				image:: ../images/omnipod/EmaLink.png
.. |LoopLink|				image:: ../images/omnipod/LoopLink.png
.. |OrangeLink|				image:: ../images/omnipod/OrangeLink.png		
.. |RileyLink|				image:: ../images/omnipod/RileyLink.png
.. |Android_phone|			image:: ../images/omnipod/Android_phone.png	
.. |Omnipod_Pod|			image:: ../images/omnipod/Omnipod_Pod.png
	
..
		Acknowledge Alerts
.. |Acknowledge_Alerts_1|               image:: ../images/omnipod/Acknowledge_Alerts_1.png
.. |Acknowledge_Alerts_2|               image:: ../images/omnipod/Acknowledge_Alerts_2.png
.. |Acknowledge_Alerts_3|               image:: ../images/omnipod/Acknowledge_Alerts_3.png
.. |Acknowledge_Alerts_4|               image:: ../images/omnipod/Acknowledge_Alerts_4.png
.. |Acknowledge_Alerts_5|               image:: ../images/omnipod/Acknowledge_Alerts_5.png

..
	Actions Tab
.. |Actions_Tab|                  		image:: ../images/omnipod/Actions_Tab.png

..
	Pod aktivieren
.. |Activate_Pod_1|                     image:: ../images/omnipod/Activate_Pod_1.png
.. |Activate_Pod_2|                     image:: ../images/omnipod/Activate_Pod_2.png
.. |Activate_Pod_3|                     image:: ../images/omnipod/Activate_Pod_3.png
.. |Activate_Pod_4|                     image:: ../images/omnipod/Activate_Pod_4.png
.. |Activate_Pod_5|                     image:: ../images/omnipod/Activate_Pod_5.png
.. |Activate_Pod_6|                     image:: ../images/omnipod/Activate_Pod_6.png
.. |Activate_Pod_7|                     image:: ../images/omnipod/Activate_Pod_7.png
.. |Activate_Pod_8|                     image:: ../images/omnipod/Activate_Pod_8.png
.. |Activate_Pod_9|                     image:: ../images/omnipod/Activate_Pod_9.png
.. |Activate_Pod_10|                    image:: ../images/omnipod/Activate_Pod_10.png
.. |Activate_Pod_11|                    image:: ../images/omnipod/Activate_Pod_11.png
.. |Activate_Pod_12|                    image:: ../images/omnipod/Activate_Pod_12.png
.. |Activate_Pod_13|                    image:: ../images/omnipod/Activate_Pod_13.png
.. |Activate_Pod_14|                    image:: ../images/omnipod/Activate_Pod_14.png
.. |Activate_Pod_15|                    image:: ../images/omnipod/Activate_Pod_15.png

..
	Pod deaktivieren
.. |Deactivate_Pod_1|                   image:: ../images/omnipod/Deactivate_Pod_1.png
.. |Deactivate_Pod_2|                   image:: ../images/omnipod/Deactivate_Pod_2.png
.. |Deactivate_Pod_3|                   image:: ../images/omnipod/Deactivate_Pod_3.png
.. |Deactivate_Pod_4|                   image:: ../images/omnipod/Deactivate_Pod_4.png
.. |Deactivate_Pod_5|                   image:: ../images/omnipod/Deactivate_Pod_5.png
.. |Deactivate_Pod_6|                   image:: ../images/omnipod/Deactivate_Pod_6.png
.. |Deactivate_Pod_7|                   image:: ../images/omnipod/Deactivate_Pod_7.png
.. |Deactivate_Pod_8|                   image:: ../images/omnipod/Deactivate_Pod_8.png
.. |Deactivate_Pod_9|                   image:: ../images/omnipod/Deactivate_Pod_9.png
.. |Deactivate_Pod_10|                  image:: ../images/omnipod/Deactivate_Pod_10.png

..
	Aktivieren des Omnipod-Treibers in AAPS
.. |Enable_Omnipod_Driver_1|            image:: ../images/omnipod/Enable_Omnipod_Driver_1.png
.. |Enable_Omnipod_Driver_2|            image:: ../images/omnipod/Enable_Omnipod_Driver_2.png
.. |Enable_Omnipod_Driver_3|            image:: ../images/omnipod/Enable_Omnipod_Driver_3.png
.. |Enable_Omnipod_Driver_4|            image:: ../images/omnipod/Enable_Omnipod_Driver_4.png
.. |Enable_Omnipod_Driver_5|            image:: ../images/omnipod/Enable_Omnipod_Driver_5.png

..
	Optimally Positioning the RileyLink and Omnipod pod
.. |Omnipod_pod_and_RileyLink_Position|	image:: ../images/omnipod/Omnipod_pod_and_RileyLink_Position.png
.. |Toroid_w_CS|                  		image:: ../images/omnipod/Toroid_w_CS.png

..
	Omnipod Settings
.. |Omnipod_Settings_1|                 image:: ../images/omnipod/Omnipod_Settings_1.png
.. |Omnipod_Settings_2|                 image:: ../images/omnipod/Omnipod_Settings_2.png
.. |Omnipod_Settings_3|                 image:: ../images/omnipod/Omnipod_Settings_3.png

..
	Omnipod Tab
.. |Omnipod_Tab|                  		image:: ../images/omnipod/Omnipod_Tab.png
.. |Omnipod_Tab_Pod_Management|         image:: ../images/omnipod/Omnipod_Tab_Pod_Management.png

..
	Pod Historie
.. |Pod_History_1|                  	image:: ../images/omnipod/Pod_History_1.png
.. |Pod_History_2|                  	image:: ../images/omnipod/Pod_History_2.png
.. |Pod_History_3|                  	image:: ../images/omnipod/Pod_History_3.png
.. |Pod_History_4|                  	image:: ../images/omnipod/Pod_History_4.png

..
	Resume Insulin Delivery
.. |Resume_Insulin_Delivery_1|          image:: ../images/omnipod/Resume_Insulin_Delivery_1.png
.. |Resume_Insulin_Delivery_2|          image:: ../images/omnipod/Resume_Insulin_Delivery_2.png
.. |Resume_Insulin_Delivery_3|          image:: ../images/omnipod/Resume_Insulin_Delivery_3.png
.. |Resume_Insulin_Delivery_4|          image:: ../images/omnipod/Resume_Insulin_Delivery_4.png

..
	RileyLink Bluetooth Reset
.. |RileyLink_Bluetooth_Reset_1|        image:: ../images/omnipod/RileyLink_Bluetooth_Reset_1.png
.. |RileyLink_Bluetooth_Reset_2|        image:: ../images/omnipod/RileyLink_Bluetooth_Reset_2.png
.. |RileyLink_Bluetooth_Reset_3|        image:: ../images/omnipod/RileyLink_Bluetooth_Reset_3.png
.. |RileyLink_Bluetooth_Reset_4|        image:: ../images/omnipod/RileyLink_Bluetooth_Reset_4.png
.. |RileyLink_Bluetooth_Reset_5|        image:: ../images/omnipod/RileyLink_Bluetooth_Reset_5.png

..
	RileyLink-Setup
.. |RileyLink_Setup_1|                  image:: ../images/omnipod/RileyLink_Setup_1.png
.. |RileyLink_Setup_2|                  image:: ../images/omnipod/RileyLink_Setup_2.png
.. |RileyLink_Setup_3|                  image:: ../images/omnipod/RileyLink_Setup_3.png
.. |RileyLink_Setup_4|                  image:: ../images/omnipod/RileyLink_Setup_4.png
.. |RileyLink_Setup_5|                  image:: ../images/omnipod/RileyLink_Setup_5.png
.. |RileyLink_Setup_6|                  image:: ../images/omnipod/RileyLink_Setup_6.png

..
	RileyLink Setup Add Device
.. |RileyLink_Setup_Add_1|                  image:: ../images/omnipod/RileyLink_Setup_Add_1.png
.. |RileyLink_Setup_Add_2|                  image:: ../images/omnipod/RileyLink_Setup_Add_2.png
.. |RileyLink_Setup_Add_3|                  image:: ../images/omnipod/RileyLink_Setup_Add_3.png
.. |RileyLink_Setup_Add_4|                  image:: ../images/omnipod/RileyLink_Setup_Add_4.png

..
	RileyLink Setup Remove Device
.. |RileyLink_Setup_Remove_1|                  image:: ../images/omnipod/RileyLink_Setup_Remove_1.png
.. |RileyLink_Setup_Remove_2|                  image:: ../images/omnipod/RileyLink_Setup_Remove_2.png
.. |RileyLink_Setup_Remove_3|                  image:: ../images/omnipod/RileyLink_Setup_Remove_3.png
.. |RileyLink_Setup_Remove_4|                  image:: ../images/omnipod/RileyLink_Setup_Remove_4.png

..
	RileyLink Statistics History
.. |RileyLink_Statistics_History_1|     image:: ../images/omnipod/RileyLink_Statistics_History_1.png
.. |RileyLink_Statistics_History_2|     image:: ../images/omnipod/RileyLink_Statistics_History_2.png
.. |RileyLink_Statistics_History_3|     image:: ../images/omnipod/RileyLink_Statistics_History_3.png

..
	RileyLink Statistics Settings
.. |RileyLink_Statistics_Settings_1|    image:: ../images/omnipod/RileyLink_Statistics_Settings_1.png
.. |RileyLink_Statistics_Settings_2|    image:: ../images/omnipod/RileyLink_Statistics_Settings_2.png
.. |RileyLink_Statistics_Settings_3|    image:: ../images/omnipod/RileyLink_Statistics_Settings_3.png

..
	Suspend Insulin Delivery
.. |Suspend_Insulin_Delivery_1|         image:: ../images/omnipod/Suspend_Insulin_Delivery_1.png
.. |Suspend_Insulin_Delivery_2|         image:: ../images/omnipod/Suspend_Insulin_Delivery_2.png
.. |Suspend_Insulin_Delivery_3|         image:: ../images/omnipod/Suspend_Insulin_Delivery_3.png
.. |Suspend_Insulin_Delivery_4|         image:: ../images/omnipod/Suspend_Insulin_Delivery_4.png
