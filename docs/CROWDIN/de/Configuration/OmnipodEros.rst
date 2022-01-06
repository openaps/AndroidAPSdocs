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
   -  |DiaLink|  DiaLink - `Kontakt: <mailto:Boshetyn@ukr.net>`__     
   -  |LoopLink|  `LoopLink Website <https://www.getlooplink.org/>`__ - `Kontakt: <https://jameswedding.substack.com/>`__ - nicht getestet

* |Android_Phone| **Mobilgerät** 

  Komponente, die AndroidAPS betreibt und Steuerungsbefehle an das Pod-Kommunikationsgerät sendet.

      +  unterstütze `Android Smartphones <https://docs.google.com/spreadsheets/d/1eNtXAWwrdVtDvsvXaR_72wgT9ICjZPNEBq8DbitCv_4/edit>`__ mit AAPS ab Version 2.8 und zugehörigem `Komponenten-Setup <../index.html#component-setup>`__

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

**Basalraten-Profile mit 30-Minuten-Schritten werden in AndroidAPS NICHT unterstützt.** Wenn Du neu bei AndroidAPS bist und zum ersten Mal Dein Basalprofil einrichtest, beachte bitte, dass Basalprofile, die mit einer halben Stunde beginnen, nicht unterstützt werden und Du Dein Basalprofil anpassen musst. Basalraten müssen immer zur vollen Stunde starten. Wenn Du zum Beispiel eine Basalrate von 1,1 Einheiten hast, die um 9:30 Uhr startet und zwei Stunden bis 11:30 Uhr läuft, wird dies nicht funktionieren.  Du muss diese 1,1 IE Basalrate auf einen Zeitraum von entweder 9:00 - 11:00 Uhr oder 10:00 - 12:00 Uhr einstellen.  Obwohl die Omnipod-Hardware selbst Basalratenwechsel zur halben Stunde unterstützt, ist AndroidAPS derzeit nicht in der Lage, sie mit seinen Algorithmen zu berücksichtigen.

Aktivieren des Omnipod-Treibers in AAPS
===================================

Du kannst den Omnipod-Treiber in AAPS auf **zwei Wegen** aktivieren:

Option 1: Der Einrichtungsassistent
--------------------------

Nach der Installation einer neuen Version von AndroidAPS startet der **Einrichtungsassistent** automatisch.  Dies wird auch nach einem Upgrade geschehen.  Wenn du die Einstellungen von einer vorherigen Installation exportiert hast, kannst du den Einrichtungsassistenten beenden und deine alten Einstellungen importieren.  Für Neuinstallationen fahre unten fort.

Über den **AAPS Einrichtungsassistenten (2)** der sich in der oberen rechten Ecke befindet. Klicke auf das **Drei-Punkte-Menü (1)** und fahre durch das Assistenten-Menü bis zum Erreichen des Bildschirms **Pumpe** fort. Wähle dann den **Omnipod Button (3)** aus.

    |Enable_Omnipod_Driver_1|  |Enable_Omnipod_Driver_2|

Auf dem gleichen Bildschirm werden unter der Pumpenauswahl die **Omnipod-Treibereinstellungen** angezeigt. Füge unterhalb der **RileyLink Konfiguration** Dein RileyLink Gerät hinzu, indem Du den **Nicht gesetzt** Text drückst. 

Drücke im Bildschirm **RileyLink Auswahl** den **Scannen** Knopf und wähle Deinen RileyLink aus der Liste der verfügbaren Bluetooth-Geräte aus. Wenn Du alles richtig ausgewählt hast, wirst Du auf den Bildschirm der Pumpentreiberauswahl (unter Omnipod Treibereinstellungen) zurückgeleitet. Dort sollte die MAC-Adresse Deines gewählten RileyLink anzeigt werden. 

Drücke die **Weiter** Taste, um mit dem Rest des **Einrichtungsassistenten** fortzufahren. Es kann bis zu einer Minute dauern, bis der gewählte RileyLink eingerichtet wurde und der **Fortsetzen** Button aktiviert wird.

Die Details zur Einrichtung des Pod-Kommunikationsgeräts finden sich weiter unten im Bereich `RileyLink Setup <#rileylink-setup>`__.

**ODER**

Option 2: Der Konfigurations-Generator
----------------------------

Über das **Hamburger Menü** oben links unter **Konfigurations-Assistent (1)** <unk> \ **Pumpe**\ <unk> \ **Omnipod** indem Du das **Auswahlfeld (2)** mit dem Titel **Omnipod** wählst. Wenn du das **Kontrollkästchen (4)** neben dem **Einstellungsrädchen (3)** wählst, wird das Omnipod-Menü als Registerkarte im AAPS-Interface mit dem Titel **POD** angezeigt. Dies wird in dieser Dokumentation als Registerkarte **Omnipod (POD)** bezeichnet.

    **HINWEIS:** Eine schnellere Möglichkeit zum Zugriff auf die **Omnipod-Einstellungen** findest du unten in der Rubrik `Omnipod-Einstellungen <#omnipod-einstellungen>`__ dieses Dokuments.

    |Enable_Omnipod_Driver_3| |Enable_Omnipod_Driver_4|

Überprüfung der Omnipod-Treiberauswahl
----------------------------------------

*Hinweis: Wenn Du den Setup-Assistenten vorzeitig verlassen hast, ohne Deinen RileyLink auszuwählen, ist der Omnipod Treiber aktiviert, aber Du musst trotzdem Deinen RileyLink noch auswählen.  Dann erscheint bei dir der Omnipod (POD) Tab wie unten zusehen*

Um zu überprüfen, ob Du den Omnipod-Treiber in AAPS aktiviert hast, **wische nach links** vom Tab **Übersicht** wo du nun einen Reiter **Omnipod** oder **POD** siehst.

|Enable_Omnipod_Driver_5|

Omnipod-Konfiguration
======================

Bitte **wische nach links** zur **Omnipod (POD)** Registerkarte, wo du alle Pod und RileyLink Funktionen verwalten kannst (einige dieser Funktionen sind ohne aktive Pod Sitzung nicht aktiviert oder nicht sichtbar):

    |refresh_pod_status| Aktualisiere Pod-Verbindungen und -Status

    |pod_management| Pod-Management (Aktivieren, Deaktivieren, Testsignal, RileyLink Statistik und Pod-Historie)

RileyLink-Setup
---------------

Wenn Du Deinen RileyLink bereits erfolgreich im Setup-Assistenten oder wie oben beschrieben verbunden hast, fahre mit dem Abschnitt `Aktivieren eines Pod-Abschnitts <#activating-a-pod>`__ fort.

*Hinweis: Ein guter visueller Hinweis dafür, dass der RileyLink nicht angeschlossen ist, ist, dass die Tasten Insulin und Bolusrechner auf der Startseite fehlen. Dies passiert auch in den ersten 30 Sekunden nach dem Start von AAPS, da AAPS sich erst mit dem RileyLink verbinden muss.*

1. Stelle sicher, dass Dein RileyLink voll geladen und eingeschaltet ist.

2. Nachdem Du den Omnipod Treiber ausgewählt hast,
identifiziere und wähle deinen RileyLink aus dem **Konfigurations-Assistent (1)** ->  **Pumpe** -> **Omnipod** -> **Einstellungsrädchen (2)** -> **RileyLink Konfiguration (3)** durch Klicken auf den Text **Not Set** oder **MAC Adresse (falls vorhanden)**.   

    Stelle sicher, dass dein RileyLink-Akku geladen ist und sich `in unmittelbarer Nähe befindet <#optimale-positionierung-von-omnipod-und-rileylink>`__ (~30 cm entfernt oder weniger) zu deinem Handy positioniert, damit AAPS es durch seine MAC-Adresse identifizieren kann. Einmal ausgewählt, kannst du deine erste Pod Session aktivieren. Benutze die Zurück-Taste auf deinem Handy, um zum AAPS-Haupt-Bildschirm zurückzukehren.

    |RileyLink_Setup_1| |RileyLink_Setup_2|

3. Drücke auf dem Bildschirm **RileyLink Auswahl** die **Scan-Schaltfläche (4)** um einen Bluetooth Scan zu starten. **Wählen Deinen RileyLink (5)** aus der Liste der verfügbaren Bluetooth-Geräte aus.

    |RileyLink_Setup_3| |RileyLink_Setup_4|

4. Nach erfolgreicher Auswahl wirst Du zu den Omnipod Einstellungen zurückgeleitet, welche die **MAC-Adresse Deines aktuell ausgewählte RileyLinks auflisten (6).** 

    |RileyLink_Setup_5|

5. Vergewissere dich, dass im Tab **Omnipod (POD)** der **RileyLink Status (1)** als **verbunden** erscheint. Das **Pod Status (2)** Feld sollte **Kein aktiver Pod** anzeigen; Falls nicht, wiederhole bitte den vorherigen Schritt oder verlasse AAPS, um zu sehen, ob dies die Verbindung aktualisiert.

    |RileyLink_Setup_6|

Einen Pod aktivieren
----------------

Bevor du einen Pod aktivieren kannst, stelle sicher, dass du deine RileyLink-Verbindung in den Omnipod-Einstellungen richtig konfiguriert und verbunden hast.

*HINWEIS: Für die Verbindung mit dem Pod steht aus Sicherheitsgründen nur ein kleinerer Kommunikationsbereich zur Verfügung. Vor dem Pairing des Pods ist das Funksignal schwächer, aber nachdem es verbunden wurde, wird es mit voller Signalleistung funktionieren. Stelle sicher, dass Dein Pod während dieser Prozedur `in der Nähe<#optimale-positionierung-von-omnipod-und-rileylink>`__ *(~30 cm entfernt oder weniger)* ist, aber nicht auf oder direkt neben dem RileyLink liegt.*

1. Navigiere zur Registerkarte **Omnipod (POD)** und klicke auf den **POD MGMT (1)** Button und dann auf **Pod aktivieren (2)**.

    |Activate_Pod_1| |Activate_Pod_2|

2. Die Anzeige ** Pod füllen* * wird angezeigt. Fülle deinen neuen Pod mit mindestens 80 Einheiten Insulin und achte auf zwei Signaltöne, die anzeigen, dass der Pod bereit ist, gestartet zu werden. Beachte bei der Berechnung der gesamt Insulinmenge, welche Du in 3 Tagen benötigst, dass zum Füllen des Pod 12 bis 15 IE benötigt werden. 

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

    **WENN die Deaktivierung scheitert** und du keinen Bestätigungspiepton erhältst, kommt evlt. die Meldung **Keine Antwort von RileyLink** oder **Keine Antwort vom Pod**. Bitte klicke auf den Button **Erneut versuchen (1)**, um die Deaktivierung erneut zu versuchen. Wenn die Deaktivierung weiterhin fehlschlägt, klicke bitte auf die **Verwerfen (2)** -Schaltfläche, um den Pod zu verwerfen. Du kannst nun deinen Pod entfernen, da die aktive Sitzung beendet wurde. Falls Dein Pod einen dauerhaften Alarm hat, musst Du ihn mit einem Pin oder einer Büroklammer manuell ausschalten. Die **Verwerfen (2)** Schaltfläche wird ihn nicht stillt stellen.
	
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

*HINWEIS - wenn du keinen Button 'Unterbrechen' siehst*, ist dessen Anzeige im Register Omnipod (POD) nicht aktiviert. Aktiviere die Einstellung **Button 'Insulinabgabe unterbrechen' im Omnipod Tab anzeigen** in den `Omnipod-Einstellungen <#omnipod-einstellungen>`__ unter **Andere**.

Insulinabgabe unterbrechen
~~~~~~~~~~~~~~~~~~~~~~~~~~~

Verwende diesen Befehl, um den aktiven Pod in den Status 'unterbrochen' zu versetzen. In diesem ausgesetzten Zustand wird der Pod kein Insulin liefern. Dieser Befehl ahmt die Suspend-Funktion nach, die der originale Omnipod PDM an einen aktiven Pod sendet.

1. Gehe zur Registerkarte **Omnipod (POD)** und drücke den Button **Unterbrechen (1)**. Der Suspend-Befehl wird vom RileyLink an den aktiven Pod gesendet und der **Unterbrechen (3)** Button wird ausgegraut. Der **Pod Status (2)** wird **AUSLIEFERUNG UNTERBROCHEN** anzeigen.

    |Suspend_Insulin_Delivery_1| |Suspend_Insulin_Delivery_2|

2. Wenn der Befehl zum Aussetzen erfolgreich durch den RileyLink bestätigt wurde, zeigt ein Bestätigungsdialog die Nachricht **Alle Insulinlieferungen wurden ausgesetzt** an. Klicke **OK** um zu bestätigen und fortzufahren.

    |Suspend_Insulin_Delivery_3|

3. Dein aktiver Pod hat nun die Insulinabgabe unterbrochen. Die **Omnipod (POD)** Registerkarte aktualisiert den **Pod Status (1)** auf **unterbrochen**. Der **Unterbrechen**-Button ändert sich zu **Abgabe fortsetzen (2)**.

    |Suspend_Insulin_Delivery_4|

Insulinabgabe fortsetzen
~~~~~~~~~~~~~~~~~~~~~~~~~

Benutze diesen Befehl, um den aktiven, derzeit pausierten Pod anzuweisen, die Insulinabgabe fortzusetzen. Nachdem der Befehl erfolgreich verarbeitet wurde, wird die normale Insulinabgabe mit der aktuellen Basalrate fortgesetzt. Grundlage dafür ist das aktive Basalprofil zur aktuellen Uhrzeit. Der Pod akzeptiert wieder Befehle für Bolus, TBR und SMB.

1. Gehe zur Registerkarte **Omnipod (POD)** und stelle sicher, dass das Feld **Pod Status (1)** **unterbrochen** anzeigt, dann drücke die **Fortsetzen (2)** Taste, um den Prozess zu starten, um den aktuellen Pod anzuweisen, die normale Insulinlieferung fortzusetzen. Eine Nachricht **RESUME DELIVERY** wird im Feld **Pod Status (3)** angezeigt. Das bedeutet, dass der RileyLink aktiv den Befehl an den gestoppten Pod sendet.

    |Resume_Insulin_Delivery_1| |Resume_Insulin_Delivery_2|

2. Wenn der Befehl zum Fortsetzen erfolgreich durch den RileyLink bestätigt wurde, zeigt ein Bestätigungsdialog die Nachricht **Insulinabgabe wieder aufgenommen.** an. Klicke **OK** um zu bestätigen und fortzufahren.

    |Resume_Insulin_Delivery_3|

3. Die **Omnipod (POD)** Registerkarte aktualisiert das Feld **Pod Status (1)** um **LAUFEND** und die Schaltfläche **Lieferung fortsetzen** wird nun zu **UNTERBRECHEN (2)** geändert.

    |Resume_Insulin_Delivery_4|

Pod-Alarme bestätigen
------------------------

*HINWEIS - Wenn du keine ACK ALERTS Schaltfläche siehst, liegt es daran, dass diese nur auf der Registerkarte Omnipod (POD) angezeigt wird, wenn der Pod-Ablauf oder der niedrige Reservoir-Alarm ausgelöst wurden.*

In dem folgenden Prozess wird gezeigt, wie Warntöne bestätigt und quittiert werden können, die auftreten, wenn die aktive Pod-Zeit den Grenzwert für die Warnung vor dem Ablauf von 72 Stunden (3 Tage) erreicht. Dieser Grenzwert für die Zeitbegrenzung ist in den **Stunden vor dem Herunterfahren** in den Omnipod Warnungen definiert. Die maximale Nutzungsdauer eines Pods beträgt 80 Stunden (3 Tage und 8 Stunden), dennoch empfiehlt der Hersteller, 72 Stunden (3 Tage) nicht zu überschreiten.

*HINWEIS - Wenn die Einstellung "Benachrichtigungen automatisch bestätigen" in den Omnipod-Alarmen aktiviert wurden, wird diese Benachrichtigung nach dem ersten Auftreten automatisch bearbeitet und der Alarm muss nicht NICHT manuell abgebrochen werden.*

1. Wenn die definierte **Stunden vor dem Herunterfahren** Warnung erreicht ist, gibt der Pod Warnungen aus, um Dir mitzuteilen, dass er sich seiner Ablaufzeit nähert und bald eine Wechsel des Pods erforderlich sein wird. Dies kann auf der Registerkarte **Omnipod (POD)** überprüft werden, das Feld **Pod läuft ab: (1)** zeigt die genaue Uhrzeit an, wann der Pod abläuft (72 Stunden nach der Aktivierung). Nachdem diese Zeit abgelaufen ist, wird der Text **rot** dargestellt und im Feld **Aktive Pod-Warnungen** wird eine Statusnachricht **Pod läuft in Kürze ab** angezeigt. Dieser Auslöser zeigt die **ACK ALERTS (3)** Schaltfläche an. Eine **Systembenachrichtigung (4)** informiert Dich über das bevorstehende Ablaufdatum des Pods.

    |Acknowledge_Alerts_1| |Acknowledge_Alerts_2|

2. Gehe zur Registerkarte **Omnipod (POD)** und drücke die **ACK ALERTS (2)** Schaltfläche (Bestätigungs-Warnungen). Der RileyLink sendet den Befehl an den Pod, um die Ablaufwarnung des Pods zu deaktivieren und aktualisiert das Feld **Pod Status (1)** mit **ACKNOWLEDGE ALERTS**.

    |Acknowledge_Alerts_3|

3. Bei **erfolgreicher Deaktivierung** der Alarme werden **2 Signaltöne** vom aktiven Pod abgegeben und ein Bestätigungsdialog zeigt die Nachricht **Aktive Warnungen wurden bestätigt.** an. Drücke **OK**, um den Dialog zu bestätigen und zu schließen.

    |Acknowledge_Alerts_4|

    Wenn sich der RileyLink außerhalb des Bereichs des Pods befindet während der Befehl zum Bestätigen des Alarms gerade verarbeitet wird, werden 2 Optionen angezeigt: **Mute (1)** wird diese aktuelle Warnung zum Schweigen bringen. **OK (2)** bestätigt diese Warnung und ermöglicht es dem Nutzer, Warnungen erneut zu bestätigen.

    |Acknowledge_Alerts_5|

4. Gehe zur Registerkarte **Omnipod (POD)** unter dem Menüpunkt **Aktive Pod Warnungen**. Die Warnmeldung wird dort nicht mehr angezeigt und der aktive Pod erzeugt keine Signale mehr, die mit dem Ablauf des Pods zu tun haben.

Anzeige Pod-Historie
----------------

In diesem Abschnitt wird gezeigt, wie du deine Pod-Historie überprüfen und nach verschiedenen Aktionskategorien filtern kannst. Mit diesem Werkzeug kannst du die Aktionen und Ergebnisse deines jeweils aktiven Pod während dessen dreitägigem Lebenszyklus (72 - 80 Stunden) ansehen.

Diese Funktion ist hilfreich bei der Überprüfung von Boli, Temporären Basalraten (TBRs) und grundlegenden Änderungen, die erfolgt sind, bei denen du aber nicht sicher bist, ob sie abgeschlossen wurden. Die übrigen Kategorien sind im Allgemeinen hilfreich bei der Problembehebung und zur Bestimmung der Reihenfolge von Ereignissen, die zu einem Fehler geführt haben.

*HINWEIS:*
**Unsichere** Befehle erscheinen in der Pod-Historie, aber für deren Genauigkeit gibt es aufgrund der Unsicherheit keine Garantie.

1. Go to the **Omnipod (POD)** tab and press the **POD MGMT (1)** button to access the **Pod management** menu and then press the **Pod history (2)** button to access the pod history screen.

    |Pod_History_1| |Pod_History_2|

2. In der Anzeige **Pod-Historie** wird die Standardkategorie **Alle (1)** angezeigt, die **Datum und Uhrzeit (2)** aller Pods **Aktionen (3)** und **Ergebnisse (4)** in umgekehrter chronologischer Reihenfolge darstellt. Drücke zweimal die **Zurück-Taste deines Telefons** um zur **Omnipod (POD)** Registerkarte  zurückzukehren.

    |Pod_History_3| |Pod_History_4|

Zeige RileyLink Einstellungen und Historie an
-----------------------------------

Dieser Abschnitt zeigt, wie die Einstellungen des aktiven Pods und RileyLinks zusammen mit der Kommunikationshistorie der beiden überprüft werden können. Diese Funktion wird nach dem Aufrufen in zwei Abschnitte unterteilt: **Einstellungen** und **Historie**.

Hauptsächlich wird diese Funktion verwendet, wenn der RileyLink außerhalb des Bluetooth-Bereichs des Smartphones ist und der **RileyLink-Status** nach einer bestimmten Zeit **RileyLink nicht erreichbar** meldet. Der Button **Aktualisieren** auf der Registerkarte **Omnipod (POD)** stellt manuell die Bluetooth-Kommunikation mit dem derzeit in den Omnipod-Einstellungen konfigurierten RileyLink erneut her.

Für den Fall dass der **REFRESH** Button im **Omnipod (POD)** Tab die Verbindung zum Rileylink nicht wiederherstellen kann, folge den zusätzlichen Hinweisen weiter unten zur manuellen Wiederherstellung der Verbindung.

Bluetooth-Kommunikation für Pod-Kommunikationsgerät manuell wiederherstellen
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

1. Wenn im **Omnipod (POD)** Tab der **RileyLink-Status: (1)** **RileyLink nicht erreichbar** meldet, drücke den **POD MGMT (2)** Knopf, um zur **Pod-Verwaltung** zu kommen. Wenn im Menü **Pod Management** eine Benachrichtigung zur aktiven Suche nach einer RileyLink-Verbindung erscheint, drücke auf **RileyLink Statistiken (3)**, um die **RileyLink Einstellungen** Seite aufzurufen.

    |RileyLink_Bluetooth_Reset_1| |RileyLink_Bluetooth_Reset_2|

2. Auf dem Bildschirm **RileyLink-Einstellungen (1)** unter **RileyLink (2)** kannst du sowohl den Bluetooth-Verbindungsstatus als auch den Fehler in den Feldern **Verbindungsstatus und Fehler: (3)** bestätigen. Ein *Bluetooth-Fehler* und *RileyLink nicht erreichbar* Status sollten angezeigt werden. Starte das manuelle Wiederverbinden der Bluetooth-Verbindung, indem du auf die **Aktualisierung (4)** Taste in der unteren rechten Ecke drückst.

    |RileyLink_Bluetooth_Reset_3|
    
    Wenn der RileyLink nicht reagiert oder außer Reichweite des Smartphones ist, während der Bluetooth-Aktualisierungsbefehl gerade verarbeitet wird, erscheint eine Warnmeldung, die 2 Optionen ermöglicht.

   **Mute (1)** lässt diese aktuelle Warnung verstummen.
   **OK (2)** bestätigt diese aktuelle Warnung und ermöglicht es dem Nutzer zu versuchen die Bluetooth-Verbindung erneut wieder herzustellen.
	
    |RileyLink_Bluetooth_Reset_4|	
	
3. Wenn die **Bluetooth-Verbindung** nicht wieder hergestellt wird, dann versuche die Bluetooth-Funktion auf deinem Smartphone manuell **aus-** und dann wieder **anzuschalten**.

4. Nach einer erfolgreichen RileyLink Bluetooth-Wiederverbindung sollte das Feld **Verbindungsstatus: (1)** **RileyLink bereit** anzeigen. Herzlichen Glückwunsch, Du hast jetzt erneut Deinen konfigurierten RileyLink mit AAPS verbunden!

    |RileyLink_Bluetooth_Reset_5|

Pod-Kommunikationsgerät und Aktive Pod-Einstellungen
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Dieser Bildschirm liefert Informationen, Status und Einstellungen zur Konfiguration sowohl für den aktuell konfigurierten Rileylink als auch für den aktuell aktiven Pod. 

1. Go to the **Omnipod (POD)** tab and press the **POD MGMT (1)** button to access the **Pod management** menu, then press the **RileyLink stats (2)** button to view your currently configured **RileyLink (3)** and active pod **Device (4)** settings.

    |RileyLink_Statistics_Settings_1| |RileyLink_Statistics_Settings_2|

    |RileyLink_Statistics_Settings_3|
    
RileyLink (3) Felder
++++++++++++++++++++

	* **Adresse:** MAC-Adresse des gewählten Pod-Kommunikationsgeräts, die in den Omnipod-Einstellungen definiert wurde.
	* **Name:** Bluetooth-Identifikationsname des in den Bluetooth-Einstellungen deines Smartphones definierten Pod-Kommunikationsgeräts.
	* **Akkustand:** Zeigt den aktuellen Batterieladestand des angeschlossenen Pod-Kommunikationsgeräts an
	* **Connected Device:** Model of the Omnipod pod currently communicating with the pod communication device
	* **Verbindungsstatus:**: Der aktuelle Status der Bluetooth-Verbindung zwischen dem Pod-Kommunikationsgerät und dem Smartphone, auf dem AAPS läuft.
	* **Verbindungsfehler: ** Wenn es einen Fehler mit dem Pod-Kommunikationsgerät gibt, werden hier die Details der Bluetooth-Verbindung angezeigt.
	* **Firmware-Version:** Aktuelle Firmware-Version, die auf dem aktiv verbundenen Pod-Kommunikationsgerät installiert ist.

Gerät (4) Felder - Mit einem aktiven Pod
++++++++++++++++++++++++++++++++++++++

	* **Geräte-Typ:** Der Geräte-Typ, der mit dem Pod-Kommunikationsgerät verbunden ist (Omnipod-Pod-Pumpe)
	* **Gerätemodell:** Das Modell des aktiven Geräts, das mit dem Pod-Kommunikationsgerät verbunden ist (der Modellname des Omnipod-Pods, also Eros)
	* **Seriennummer der Pumpe:** Seriennummer des aktuell aktivierten Pods
	* **Pumpenfrequenz:** Funkfrequenz, die das Pod-Kommunikationsgerät eingestellt hat, um die Kommunikation zwischen sich und dem Pod zu ermöglichen.
	* **Zuletzt verwendete Frequenz:** Letzte bekannte Funkfrequenz, die der Pod zur Kommunikation mit dem Pod-Kommunikationsgerät verwendet hat.
	* **Letzter Gerätekontakt:** Datum und Uhrzeit des letzten Kontakts vom Pod mit dem Pod-Kommunikationsgerät.
	* **Aktualisieren Button:** Durch Klicken manuell die Einstellungen auf dieser Seite aktualisieren.

Historie des RileyLink und aktiven Pods
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Dieser Bildschirm gibt in umgekehrter chronologischer Reihenfolge Auskunft über jeden Zustand oder jede Maßnahme des RileyLink und des aktuell verbundenen Pods. Die gesamte Historie ist nur für den gerade aktiven Pod verfügbar. Nach einem Podwechsel wird diese Historie gelöscht und nur die Ereignisse des neu aktivierten Pods werden aufgezeichnet und angezeigt.

1. Go to the **Omnipod (POD)** tab and press the **POD MGMT (1)** button to access the **Pod Management** menu, then press the **Pod History (2)** button to view the **Settings** and **History** screen. Klicke auf den Text **Pod Historie (3)**, um den gesamten Verlauf des RileyLink und der derzeit aktiven Pod-Sitzung anzuzeigen.

    |RileyLink_Statistics_History_1| |RileyLink_Statistics_History_2|

    |RileyLink_Statistics_History_3|
    
Felder
++++++
    
   * **Datum & Uhrzeit**: In umgekehrter chronologischer Reihenfolge der Zeitstempel der einzelnen Ereignisse.
   * **Gerät:** Das Gerät, auf das sich die aktuelle Aktion oder der aktuelle Zustand bezieht.
   **Zustand oder Aktion:** Der aktuelle Zustand oder die Aktion, die das Gerät durchgeführt hat.

Omnipod (POD) Tab
=================

Im Folgenden werden die Anordnung und die Bedeutung der Symbole und Statusfelder auf der Registerkarte **Omnipod (POD)** des AAPS-Hauptbildschims erläutert.

*HINWEIS: Wenn in den Statusfeldern der Registerkarte Omnipod (POD) eine Meldung erscheint (unsicher), musst Du die Schaltfläche Aktualisieren drücken, um sie zu löschen und den Pod-Status zu aktualisieren.*

|Omnipod_Tab|

Felder
------

* **RileyLink Status:** Zeigt den aktuellen Verbindungsstatus des RileyLink an

   - *RileyLink nicht erreichbar* - Das Pod-Kommunikationsgerät befindet sich entweder nicht in Bluetooth-Reichweite des Smartphones, ist ausgeschaltet oder hat einen Fehler, der die Bluetooth-Kommunikation verhindert.
   - *RileyLink bereit* - Das Pod-Kommunikationsgerät ist eingeschaltet und initialisiert gerade die Bluetooth-Verbindung.
   - *Verbunden* - Das Pod-Kommunikationsgerät ist eingeschaltet, verbunden und aktiv in der Lage, über Bluetooth zu kommunizieren.

* **Pod Adresse:** Zeigt die aktuelle Adresse an, in der der aktive Pod referenziert wird
* **LOT:** Zeigt die LOT-Nummer des aktiven Pods an
* **TID:** Zeigt die Seriennummer des Pods an.
**Firmware-Version:** Zeigt die Firmware-Version des aktiven Pods an.
* **Zeit auf dem Pod:** Zeigt die aktuelle Uhrzeit auf dem aktiven Pod an.
* **Pod läuft ab:** Zeigt das Datum und die Uhrzeit an, zu der der aktive Pod abläuft.
* **Pod-Status:** Zeigt den Status des aktiven Pods an.
* **Letzte Verbindung:** Zeigt an, wann zum letzten Mal eine Kommunikation mit dem aktiven Pod stattgefunden hat.

   - *gerade eben* - vor weniger als 20 Sekunden.
   - *vor weniger als einer Minute* - vor mehr als 20 Sekunden, aber weniger als 60 Sekunden.
   - *vor einer Minute* - vor mehr als 60 Sekunden, aber weniger als 120 Sekunden (2 min).
   - *vor XX Minuten* - vor mehr als 2 Minuten, definiert durch den Wert von XX.

* **Letzter Bolus:** Zeigt die Dosierung des letzten Bolus an, der an den aktiven Pod gesendet wurde, und in Klammern, wie lange es her ist, dass er abgegeben wurde.
* **Basis-Basalrate:** Zeigt die Basalrate an, die für den aktuellen Zeitpunkt im Basalratenprofil programmiert wurde.
* **Temporäre Basalrate:** Zeigt die aktuell laufende temporäre Basalrate im folgenden Format an

   - Einheiten / Stunde zum Zeitpunkt der Erstellung der TBR (gelaufene Minuten / Gesamtminuten, in denen die TBR läuft)
   - *Beispiel:* 0,00U/h @18:25 ( 90/120 Minuten)

* **Reservoir:** Zeigt über 50+U an, wenn mehr als 50 Einheiten im Reservoir verbleiben. Unterhalb dieses Wertes werden die genauen Einheiten in gelber Schrift angezeigt.
* **Insgesamt abgegeben:** Zeigt die Gesamtzahl der aus dem Reservoir abgegebenen Insulineinheiten an. *Beachte, dass es sich hierbei um einen Näherungswert handelt, da das Befüllen des Pods nicht absolut exakt geschieht.*
* **Fehler:** Zeigt den zuletzt aufgetretenen Fehler an. Überprüfe die `Pod Historie <#anzeige-pod-historie>`__, `RileyLink Historie <#historie-des-rileylink-und-aktiven-pods>`__ und die Protokolldateien auf frühere Fehler und für ausführlichere Informationen.
* **Aktive Pod-Warnungen:** Reserviert für derzeit laufende Warnungen auf dem aktiven Pod. Wird normalerweise verwendet, wenn das Pod-Ablaufdatum nach 72 Stunden erreicht ist und native Pieptöne vom Pod ausgegeben werden.

Symbole
-----

.. list-table:: 
      
    * - |refresh_pod_status|
      - **AKTUALISIEREN:** 
			
	Sendet einen Befehl an den aktiven Pod, um die Kommunikation zu aktualisieren
			 
	* Verwende diese Option, um den Pod-Status zu aktualisieren und die Statusfelder zu erneuern, die den Text (unsicher) enthalten.
	* Weitere Informationen zur `Problembehandlung <#problembehandlung>`__ findest du im Abschnitt unten.
    * - |pod_management|  	 
      - **POD MGMT:**

	Navigiert zum Pod Management Menü   
    * - |ack_alerts|		 
      - **ALARM BESTÄTIGEN:**
   			 
	Durch Drücken dieser Taste werden die Signaltöne und Benachrichtigungen zum Ablauf des Pods deaktiviert. 
			 
	* Der Button wird nur angezeigt, wenn die aktuelle Zeit des Pods nach dem Pod-Ablaufdatum liegt.
	* Nach erfolgreicher Bestätigung wird dieses Symbol nicht mehr angezeigt.			 
    * - |set_time|	 
      - **ZEIT EINSTELLEN:**
   
	Durch Drücken dieser Taste wird die Uhrzeit auf dem Pod mit der aktuellen Uhrzeit des Smartphones aktualisiert.
    * - |suspend|  		 
      - **UNTERBRECHEN:**
   
	Setzt den aktiven Pod aus
    * - |resume|	 
      - **ABGABE FORTSETZEN:**
   
	Setzt den derzeit angehaltenen, aktiven Pod fort


Pod Management Menu
-------------------

Im Folgenden werden die Darstellung und die Bedeutung der Symbole im Menü **Pod Management** erläutert, das über die Registerkarte **Omnipod (POD)** aufgerufen wird.

|Omnipod_Tab_Pod_Management|

.. list-table:: 

    * - |activate_pod|
      - **Pod aktivieren**
   
        Startet und aktiviert einen neuen Pod
    * - |deactivate_pod|
      - **Pod deaktivieren**
 
        Deaktiviert den aktuell aktiven Pod.
		 
	* Ein unvollständig verbundener Pod ignoriert diesen Befehl.
	* Verwende diesen Befehl, um einen heulenden Pod zu deaktivieren (Fehler 49).
	* Wenn die Schaltfläche deaktiviert (ausgegraut) ist, verwende **Pod verwerfen**.
    * - |play_test_beep|
      - **Testton abspielen**
 
 	Gibt beim Drücken einen einzelnen Testton auf dem Pod wieder.
    * - |discard_pod|
      - **Pod verwerfen**

	Durch Drücken wird der Pod-Status eines nicht reagierenden Pods deaktiviert und verworfen.
			      
	Die Schaltfläche wird nur in ganz bestimmten Fällen angezeigt, da eine ordnungsgemäße Deaktivierung nicht mehr möglich ist:

	* Ein **Pod ist nicht vollständig verbunden** und ignoriert daher die Befehle zum Deaktivieren.
	* Ein **Pod hängt** während des Kopplungsvorgangs zwischen den Schritten fest
	* Ein **Pod lässt sich überhaupt nicht verbinden.**
    * - |pod_history|
      - **Pod Historie** 
   
   	Zeigt den Aktivitätsverlauf des aktiven Pods an
    * - |rileylink_stats|
      - **RileyLink Status:**
   
        Navigiert zum Bildschirm "RileyLink Status", der die aktuellen Einstellungen und den Verlauf der RileyLink-Verbindung anzeigt

	* **Einstellungen** - zeigt Informationen zum RileyLink und aktiven Pod-Einstellungen an
	* **Historie** - zeigt den Verlauf der RileyLink- und Pod-Kommunikation an
    * - |reset_rileylink_config|
      - **RileyLink-Konfiguration zurücksetzen** 
   
   	Durch Drücken dieser Taste wird die Konfiguration des aktuell angeschlossenen Pod-Kommunikationsgeräts zurückgesetzt. 
			      
	* Wenn die Kommunikation gestartet wird, werden bestimmte Daten an das Pod-Kommunikationsgerät gesendet und dort eingestellt 
			      
	    - Speicherregister werden gesetzt
	    - Kommunikationsprotokolle werden eingestellt
	    - Eingestellte Funkfrequenz wird gesetzt
				
	* Beachte die `zusätzlichen Hinweise <#hinweise-zum-zurucksetzen-der-rileylink-konfiguration>`__ am Ende dieser Tabelle
    * - |pulse_log|
      - **Pulse-Log lesen:** 
    
    	Sendet das Pulse-Log des aktiven Pods in die Zwischenablage		    

*Hinweise zum Zurücksetzen der RileyLink-Konfiguration*
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

* Diese Funktion wird in erster Linie verwendet, wenn das derzeit aktive Pod-Kommunikationsgerät nicht antwortet und die Kommunikation in einem festgefahrenen Zustand ist.
* Wenn das Pod-Kommunikationsgerät aus- und wieder eingeschaltet wird, muss die Taste **RileyLink-Konfiguration zurücksetzen** gedrückt werden, damit diese Kommunikationsparameter in der Konfiguration des Pod-Kommunikationsgeräts eingestellt werden.
* Wird dies NICHT getan, muss AAPS neu gestartet werden, nachdem das Pod-Kommunikationsgerät aus- und wieder eingeschaltet wurde.
* Diese Taste **muss NICHT** gedrückt werden, wenn zwischen verschiedenen Pod-Kommunikationsgeräten gewechselt wird.

Omnipod-Einstellungen
================

Die Einstellungen des Omnipod-Treibers können über das **Hamburger-Menü** oben links unter **Konfigurations-Assistent**\ ➜\ **Pumpe**\ ➜\ **Omnipod**\ ➜\ **Einstellungsrädchen (2)** konfiguriert werden, 
 indem Du das **Auswahlfeld (1)** mit dem Titel **Omnipod** wählst. Wenn du das **Kontrollkästchen (3)** neben dem Einstellungsrädchen (2) wählst, wird das Omnipod-Menü als Registerkarte mit der Bezeichnung **OMNIPOD** oder **POD** in der AAPS-Oberfläche angezeigt. Dies wird in dieser Dokumentation als Registerkarte **Omnipod (POD)** bezeichnet.

|Omnipod_Settings_1|

**HINWEIS:** Eine schnellere Möglichkeit, auf die **Omnipod Einstellungen** zuzugreifen, besteht darin, das **Drei-Punkte-Menü (1)** in der oberen rechten Ecke der Registerkarte **Omnipod (POD)** aufzurufen und **Omnipod Einstellungen (2)** aus dem Dropdown-Menü auszuwählen.

|Omnipod_Settings_2|

Die Einstellungen sind nach Gruppen sortiert unten aufgelistet.
Du kannst die meisten der Einstellungen über einen Kippschalter aktivieren oder deaktivieren:

|Omnipod_Settings_3|

*HINWEIS: Ein Sternchen (\*) bedeutet, dass "aktiviert" der Standardwert für eine Einstellung ist.*

RileyLink
---------

Ermöglicht das Scannen eines Pod-Kommunikationsgeräts. Der Omnipod-Treiber kann nicht mehr als ein Pod-Kommunikationsgerät auf einmal ansteuern.

* **Akkustand von OrangeLink/EmaLink/DiaLink anzeigen:** Meldet den aktuellen Batteriestand des OrangeLink/EmaLink/DiaLink. Es wird **dringend empfohlen**, dass alle OrangeLink/EmaLink/DiaLink-Benutzer diese Einstellung aktivieren.

	+  DOES NOT work with the original RileyLink.
	+  May not work with RileyLink alternatives.
	+  Enabled - Reports the current battery level for supported pod communication devices.
	+  Disabled - Reports a value of n/a.
* **Enable battery change logging in Actions:** In the Actions menu the battery change button is enabled IF you have enabled this setting AND the battery reporting setting above.  Some pod communication devices now have the ability to use regular batteries which can be changed.  This option allows you to note that and reset battery age timers.

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
* **\*DST/Time zone detect on enabled:** allows for time zone changes to be automatically detected if the phone is used in an area where DST is observed.

Switching or Removing an Active Pod Communication Device (RileyLink)
--------------------------------------------------------------------

With many alternative models to the original RileyLink available (such as OrangeLink or EmaLink) or the need to have multiple/backup versions of the same pod communication device (RileyLink), it becomes necessary to switch or remove the selected pod communication device (RileyLink) from Omnipod Setting configuration. 

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
    
4. You are returned to the **Omnipod Setting** menu where under **RileyLink Configuration** you will now see the device is **Not Set (5)**.  Congratulations, you have now successfully removed your selected pod communication device.

    |RileyLink_Setup_Remove_4|

Add Currently Selected Pod Communication Device (RileyLink)
-----------------------------------------------------------

This process will show how to add a new pod communication device to the Omnipod Driver settings.

1. Under **RileyLink Configuration** press the **Not Set (1)** text to open the **RileyLink Selection** menu. 

    |RileyLink_Setup_Add_1|
    
2. Press the **Scan (2)** button to start scanning for all available Bluetooth devices.

    |RileyLink_Setup_Add_2|

3. Select **your RileyLink (3)** from the list of available devices and you will be returned to the **Omnipod Settings** menu displaying the **MAC Address (4)** of your newly selected device.  Congratulations you have successfully selected your pod communication device.

    |RileyLink_Setup_Add_3| |RileyLink_Setup_Add_4|
    

Actions (ACT) Tab
=================

This tab is well documented in the main AAPS documentation but there are a few items on this tab that are specific to how the Omnipod pod differs from tube based pumps, especially after the processes of applying a new pod.

1. Go to the **Actions (ACT)** tab in the main AAPS interface.

2. Under the **Careportal (1)** section the following 3 fields will have their **age reset** to 0 days and 0 hours **after each pod change**: **Insulin** and **Cannula**. This is done because of how the Omnipod pump is built and operates. The **pump battery** and **insulin reservoir** are self contained inside of each pod. Since the pod inserts the cannula directly into the skin at the site of the pod application, a traditional tube is not used in Omnipod pumps. *Therefore after a pod change the age of each of these values will automatically reset to zero.* **Pump battery age** is not reported as the battery in the pod will always be more than the life of the pod (maximum 80 hours).

  |Actions_Tab|

Levels
------

**Insulin Level**

Reporting of the amount of insulin in the Omnipod Eros Pod is not exact.  This is because it is not known exactly how much insulin was put in the pod, only that when the 2 beeps are triggered while filling the pod that over 85 units have been injected. A Pod can hold a maximum of 200 units. Priming can also introduce variance as it is not and exact process.  With both of these factors, the Omnipod driver has been written to give the best approximation of insulin remaining in the reservoir.  

  * **Above 50 Units** - Reports a value of 50+U when more than 50 units are currently in the reservoir.
  * **Below 50 Units** - Reports an approximate calculated value of insulin remaining in the reservoir. 
  * **SMS** - Returns value or 50+U for SMS responses
  * **Nightscout** - Uploads value of 50 when over 50 units to Nightscout (version 14.07 and older).  Newer versions will report a value of 50+ when over 50 units.


**Battery Level**

Battery level reporting is a setting that can be enabled to return the current battery level of pod communication devices like the OrangeLink and EmaLink.  The RileyLink hardware is not capable of reporting its battery level.  The battery level is reported after each communication with the pod, so when charging a linear increase may not be observed.  A manual refresh will update the current battery level.  When a supported Pod communication device is disconnected a value of 0% will be reported.

  * **RileyLink hardware is NOT capable of report battery level** 
  * **Use battery level reported by OrangeLink/EmaLink Setting MUST be enabled in the Omnipod settings to reporting battery level values**
  * **Battery Level ONLY works for OrangeLink and EmaLink Devices**
  * **Battery Level reporting MAY work for other devices (excluding RileyLink)**
  * **SMS** - Returns current battery level as a response when an actual level exists, a value of n/a will not be returned.
  * **Nightscout** - Battery level is reported when an actual level exists, value of n/a will not be reported


Problembehandlung
===============

Pod Fehler
------------

Pods fallen gelegentlich aus unterschiedlichen Gründen aus, u. a. wegen Hardwareproblemen mit dem Pod selbst. Am besten ist es, diese nicht bei Insulet anzugeben, da AAPS kein zugelassener Anwendungsfall ist. Eine Liste an Fehlercodes findest du `hier <https://github.com/openaps/openomni/wiki/Fault-event-codes>`__ um die Ursache zu ermitteln.

Verhindere Pod Fehler 49
--------------------------------

Dieser Fehler hängt mit einem fehlerhaften Pod-Status für einen Befehl oder einem Fehler während der Insulinabgabe zusammen. Wir empfehlen Nutzern, im Nightscout-Client unter **Konfigurations-Assistent ** -> **Allgemein** -> **NSClient** -> **Einstellungsrädchen** -> **Erweiterte Einstellungen** auf *Nur Upload (Synchronisation deaktivieren)* umzuschalten, um mögliche Fehler zu vermeiden.

Pumpe nicht erreichbar Alarme
-----------------------

It is recommended that pump unreachable alerts be configured to **120 minutes** by going to the top right-hand side three-dot menu, selecting **Preferences**\ ➜\ **Local Alerts**\ ➜\ **Pump unreachable threshold [min]** and setting this to **120**.

Importieren von Einstellungen aus früherem AAPS
----------------------------------

Bitte beachte, dass beim Importieren von Einstellungen die Möglichkeit besteht, dass ein veralteter Pod-Status importiert wird. Infolgedessen kannst Du einen aktiven Pod verlieren. Es wird daher dringend empfohlen, **keine Einstellungen während einer aktiven Pod-Sitzung zu importieren**.

1. Deaktiviere deine Pod-Sitzung. Stelle sicher, dass keine aktive Pod-Sitzung läuft.
2. Exportiere deine Einstellungen und bewahre eine Kopie an einem sicheren Ort auf.
3. Deinstalliere die vorherige Version von AAPS und starte dein Smartphone neu.
4. Installiere die neue Version von AAPS und stelle sicher, dass Du keine aktive Pod-Sitzung hast.
5. Importiere deine Einstellungen und aktiviere einen neuen Pod.

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
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

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

Die Antenne, die auf dem RileyLink zur Kommunikation mit einem Omnipod-Pod verwendet wird, ist eine 433 MHz-Wendelspiralantenne. Aufgrund seiner Konstruktion strahlt er ein omnidirektionales Signal wie ein dreidimensionaler Donut ab, wobei die Z-Achse die vertikal stehende Antenne darstellt. Das bedeutet, dass es optimale Positionen für die Platzierung des RileyLink gibt, insbesondere bei der Pod-Aktivierung und Deaktivierung.

|Toroid_w_CS|

    *(Bild 1. Graphische Darstellung einer Wendelspiralantenne in einem Rundstrahldiagramm*)

Aus Sicherheitsgründen muss die *Aktivierung* des Pods in einem *geringeren Abstand (~30 cm oder weniger)* als andere Vorgänge erfolgen, wie z. B. die Verabreichung eines Bolus, das Setzen eines TBR oder das einfache Aktualisieren des Pod-Status. Aufgrund der Art und Weise der Signalübertragung der RileyLink-Antenne ist es NICHT empfehlenswert, den Pod direkt auf oder neben dem RileyLink zu platzieren.

Die Abbildung unten zeigt die optimale Positionierung des RileyLink während der Pod-Aktivierung und Deaktivierung. Der Pod kann zwar auch in anderen Positionen aktiviert werden, jedoch wirst Du mit der unten gezeigten Position den größten Erfolg haben.

*Hinweis: Wenn trotz optimaler Positionierung des Pods die Kommunikation mit dem RileyLink fehlschlägt, kann dies an einer schwachen Batterie liegen, da diese den Sendebereich der RileyLink-Antenne verringert. Um dieses Problem zu vermeiden, stelle sicher, dass der RileyLink während dieses Vorgangs ordnungsgemäß geladen oder direkt an ein Ladekabel angeschlossen ist.*

|Omnipod_pod_and_RileyLink_Position|

Where to get help for Omnipod driver
====================================

All of the development work for the Omnipod driver is done by the community on a volunteer basis; we ask that you please be considerate and use the following guidelines when requesting assistance:

-  **Level 0:** Read the relevant section of this documentation to ensure you understand how the functionality with which you are experiencing difficulty is supposed to work.
-  **Level 1:** If you are still encountering problems that you are not able to resolve by using this document, then please go to the *#androidaps* channel on **Discord** by using `this invite link <https://discord.gg/4fQUWHZ4Mw>`__.
-  **Level 2:** Search existing issues to see if your issue has already been reported; if not, please create a new `issue <https://github.com/nightscout/AndroidAPS/issues>`__ and attach your `log files <../Usage/Accessing-logfiles.html>`__.
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
.. |DiaLink|				image:: ../images/omnipod/DiaLink.png
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
