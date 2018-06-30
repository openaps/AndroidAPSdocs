Die Software ist Teil einer DIY-Lösung(Do It Yourself = Eigenbau) und kein Produkt. Daher bist **DU** gefordert. **DU** musst lesen, lernen und verstehen, was das System macht und wie du es bedienst.
Das System wird Dir nicht alle Schwierigkeiten Deiner Diabetestherapie abnehmen, aber wenn Du willens bist, die nötige Zeit zu investieren, dann kann es die Ergebnisse Deiner Therapie verbessern und die Lebensqualität erhöhen. Dir sollte klar sein, dass das System umso besser arbeitet je besser Deine Therapiegrundeinstellung ist.
Hetz Dich nicht auch wenn andere Dir erzählen wie toll das alles ist. Nimm Dir Zeit zu lernen!
Du bist ganz alleine dafür verantwortlich was Du mit dem System machst.


## Benötigte Hardware

* Eine Roche Accu-Chek Combo Pumpe (egal welche Firmware, es funktionieren alle)
* Einen Smartpix oder Realtyme Adapter und die Accu-Chek 360°-Konfigurationssoftware um die Pumpe zu konfigurieren. Kunden von Roche können die Software beim Kundendienst erfragen.
* Ein kompatibles Telefon: Ein Android Telefon mit LineageOS 14.1 (früher CyanogenMod) oder Android 8.1 (Oreo). Das LineageOS muss neuer als Juni 2017 sein, da erst zu diesem Zeitpunkt die für die Combo-Unterstützung notwendige Änderung hinzugefügt wurde. Eine Liste gestester Telefone findet sich hier https://docs.google.com/spreadsheets/d/1-Im_rTkWPbk-Pl_hlnh-GhfZbAlXbh4PiLNnBJqGFyk/edit#gid=0. Die Liste ist nicht abschließend und spiegelt nur die persönliche Erfahrung der Benutzer wieder. Bitte trage Deine Erfahrung in die Liste ein und hilf damit anderen. Die ganzen DIY-Projekte funktionieren nur, wenn jeder etwas zurückgibt. 
* Vorsicht, obwohl man unter Android 8.1 mit der Combo Pumpe kommunizieren kann, gibt es noch Schwierigkeiten mit AAPS unter Android 8.1. Für fortgeschrittene erfahrene Anwender gibt es noch die Möglichkeit, Bluetooth-Pairing zwischen Pumpe und einem gerooteten Android-Telefon (Android 4.1 oder LOS 14.1) vorzunehmen und die Informationen dann auf ein anderes gerootetes Handy (Android > 5 ) zu übertragen, damit ruffy/AAPS auf dem zweiten Handy läuft.
Dieses Vorgehen erlaubt die Verwendung eines Android < 8.1; es ist aber nicht großartig getestet und auch kein sehr verbreitetes Verfahren. https://github.com/gregorybel/combo-pairing/blob/master/README.md
Wenn Dir rooten/pairen usw. nichts sagen, dann ist die letzte Variante vermutlich nichts für Dich.

## Beschränkungen

* Verzögerter Bolus und Multiwave-Bolus werden nicht unterstützt.
* Es wird nur ein Basalprofil unterstützt.
* Das Setzen mehrerer Basalprofile oder die Abgabe eines verzögerten Bolus oder eines Multiwave-Bolus stört das Konzept von temporären Basalraten und setzt den Loop für 6 Stunden in einen "low glucose suspend mode", da unter diesen Umständen keine sichere Funktion des Closed Loops gewährleistet ist.
* Derzeit kann man Zeit und Datum auf der Pumpe nicht über das Telefon einstellen, Sommer-/Winterzeit-Umstellungen oder Umstellungen andere Zeitzonen müssen daher händisch vorgenommen werden (automatisches einstellen der Uhr des Telefons am Vorabend abstellen erst wieder einstellen, wenn die Uhrzeit auf der Pumpe angepasst wurde).
* Basalraten werden nur im Bereich von 0,05 bis 10 iE/h unterstützt. Dies gilt auch für Anpassungen des Profiles, welche es erlauben, die Basalrate zu verdoppeln oder zu halbieren. Auch in diesem Fall müssen die Grenzwerte eingehalten werden, so dass die Basalrate maximal 5 iE/h sein darf (da nach Verdoppelung 10 iE/h), bzw. minimal 0,1 iE/h (da nach Halbierung 0,05 iE/h).
* Wenn der Loop eine laufende Basalrate abbrechen will, wird stattdessen die Basalrate für 15 min. auf 90% oder 110% gesetzt. Das ist nötig, weil das Abbrechen der Basalrate auf der Combo Pumpe einen Alarm (W6 TBR Abbruch) auslöst, der durch starke Vibrationen mitgeteilt wird.
* Manchmal kann es vorkommen, dass AAPS einen W6 TBR Abbruch Alarm nicht selbst quittiert, dann muss der Benutzer die Warnung selbst bestätigen, entweder durch Bestätigen des Alarms auf der Pumpe oder durch den Aktualisiere-Button im Combo Tab die Warnung an AAPS übergeben, damit AAPS die Warnung bestätigen kann.
* Die Stabiltät der Bluetooth-Verbindung variiert je nach verwendetem Telefon stark, dies kann zu "pump unreachable"-Alarmen führen und verhindern, dass die Verbindung zur Pumpe hergestellt werden kann. Wenn dieses Verhalten auftritt, prüfe ob
a) BT auf dem Telefon eingeschaltet ist
b) "Aktualisieren" im Combo Tab von AAPS die Verbindung wieder herstellt.
Versuche das Telefon neu starten, wenn die Schritte a) und b) nicht erfolgreich waren.
Wenn alles oben genannte nicht hilft, kann es nötig sein, auf der Pumpe einen beliebigen Knopf zu drücken (dadurch wird BT auf der Pumpe gestoppt und neu gestartet).
Derzeit ist nicht absehbar, dass dieses Verhalten verhindert werden kann. Wenn diese Fehler öfter auftreten, dann besteht die derzeit einzige Lösung in der Verwendung eines Telefons, von dem bekannt ist, dass es zuverlässig mit der Combo unter AAPS zusammenarbeitet (siehe oben).
* Ein direkt auf der Pumpe programmierter Bolus wird nicht immer rechtzeitig erkannt und die Erkennung kann im schlimmsten Fall bis zu 20 Minuten dauern. Der Bolus an der Pumpe wird immer überprüft, bevor eine hohe TBR oder ein Bolus von AAPS programmiert wird, aber aufgrund der Einschränkungen verweigert AAPS das Setzen des TBR / Bolus, da sie unter falschen Voraussetzungen berechnet wurden. (-> Bolus nicht direkt von der Pumpe abgebe! Siehe Kapitel *Benutzung*)
* Das Setzen einer TBR direkt auf der Pumpe ist im Closed Loop Betrieb nicht nötig und sollte möglichst nicht vorgenommen werden. Das Erkennen einer manuell gesetzten Basalrate kann bis zu 20 Minuten dauern und wird bei der Berechnung auch erst ab dem Zeitpunkt berücksichtigt, zu dem die TBR von AAPS eingelesen wird. Das führt dazu, dass die im Körper befindliche Insulinmenge (IOB) falsch berechnet wird.

## Setup
- Konfiguriere die Pumpe mit der 360° Konfigurations-Software.
  - Zwingend erforderliche Einstellungen (grün markiert in den Screenshots):
    - Setze/Lasse das Benutzermenü auf "Standard". Dadurch werden nur die benötigten Menüs/Aktionen auf der pumpe angezeigt und solche versteckt, die nicht unterstützt werden (verzögerter Bolus, Multiwave Bolus, mehrere Basalprofile), die die Loop-Funktionalität einschränken würden, da der Loop nicht sicher laufen würde, wenn diese Aktionen Verwendung fänden.
    - Stelle sicher dass der _Quick Info Text_ auch wirklich "QUICK INFO" heißt (ohne Anführungszeichen, zu finden unter _Anzeige-/Kommunikationseinstellungen_).
    - Stelle die _Maximale Anpassung_ der Temporären Basalrate auf 500%
    - Deaktiviere _Ende der temporären Basalrate signalisieren_
    - Setze die Schrittweitendauer der Temporären Basalrate auf 15 min
    - Aktiviere Bluetooth
  - Empfohlene Einstellungen (blau markiert in den Screenshots)
    - Stelle den Restmenge bei Alarm "Amp. fast leer" ein, wie es für dich passt
    - Konfiguriere eine maximale Bolusmenge passend zu deiner Therapie, um dich gegen Fehler in der Software zu schützen.
    - Lege gleichermaßen die maximale Dauer einer temporären Basalrate als Sicherheitsmaßnahme fest. Erlaube mindestens  3 Stunden, da die Option die Pumpe für 3 Stunden abzulegen, 0% über 3 Stunden setzt.
    - Stelle die Tastensperre der pumpe an, um zu verhindern, dass du von der Pumpe Bolus abgibst. Besonders, wenn du daran gewöhnt bist, Bolus von der Pumpe aus abzugeben.
    - Stelle die Anzeigedauer und das Menü-Timeout auf das Minimum (5,5 bzw. 5). Das erlaubt AndroidAPS in Fehlerzuständen schneller wieder fortzusetzen und verringert die Anzahl an Vibrationen die während so einem Fehler auftreten können.


![Screenshot der Menü-Einstellungen](../../images/combo/combo-menu-settings.png)

![Screenshot TBR-Einstellungen](../../images/combo/combo-tbr-settings.png)

![Screenshot der Bolus-Einstellungen](../../images/combo/combo-bolus-settings.png)

![Screenshot der Ampullen-Einstellungen](../../images/combo/combo-insulin-settings.png)


- Installiere AndroidAPS wie im Wiki unter http://wiki.AndroidAPS.org beschrieben. Die Version mit Combo-Unterstützung befindet sich im Branch `combo`.
- Lies zuerst das Wiki, um zu verstehen, wie AndroidAPS kompiliert und installiert wird.
In AndroidAPS solltest du zuerst das "MDI"-Pumpen-Plugin aktivieren - und nicht direkt das für die Combo, damit das Combo-Plugin nicht Ruffy während des Pairings stört.
- Gehe auf http://ruffy.AndroidAPS.org und kopiere den Quelltext mittels "git clone" auf deinen Rechner. Der Branch sollte hierbei genau so heißen wie der für AndroidAPS. Derzeit ist dies der `combo` Branch. Später wird es einen `master` und einen `dev` branch geben
- Nachdem Ruffy kompiliert und auf dem Handy installiert ist, muss die Pumpe mit Ruffy gepairt werden. Falls dieses wiederholt nicht funktioniert, kann ein weiterer Versuch mit dem `pairing`-Branch unternommen werden. Nach dem Pairing muss aber wieder auf den `combo`-Branch gewechselt werden. Der Pairing-Prozess ist leider etwas instabil und daher sind meistens ein paar Versuche notwendig (allerdings muss das Pairing auch nur einmalig durchgeführt werden). Die auf der Pumpe und dem Handy auftretenden Dialoge sollten schnell bestätigt werden - und bevor man einen neuen Versuch startet, muss die Pumpe zuerst in den Bluetooth-Einstellungen des Telefons wieder gelöscht werden. Eine weitere Möglichkeit, den Pairing-Prozess zu unterstützen, ist es, nach dem Starten des Vorgangs auf dem Telefon in das Bluetooth-Menü des Telefons zu wechseln bis auf der Pumpe der Authorisatzions-Code angezeigt wird, um dann wieder zu Ruffy zu wechseln und diesen Code einzugeben (durch den Wechsel in das Bluetooth-Menü bleibt das Telefon für einen längeren Zeitraum sichtbar; daher ist manchmal die Pumpe besser zu finden).
Ist ein Pairing weiterhin nicht möglich probiere bis zu 10s zu warten bevor du das Pairing auf der Pumpe bestätigst (wenn der Name des Handys auf dem Display der Pumpe angezeigt wird). Hierfür muss ggf. der oben gesetzte Menü-Timeout wieder herauf gesetzt werden. Bei einigen Nutzer war nur so ein Pairing möglich.
- Wenn AndroidAPS mit der Combo genutzt wird, übernimmt es die komplette Steuerung von Ruffy (nach dem Pairing), sodass Ruffy nicht mehr manuell genutzt werden darf (z. B. als manuelle Fernbedienung für die Combo). Um das System in einen sauberen Zustand zu bekommen, ist es am besten, das Telefon nach dem Pairing mit der Combo neu zu starten und Ruffy nur noch automatisch im Hintergrund durch AndroidAPS starten zu lassen.
- Ist die Pumpe neu, muss zuerst ein Bolus auf der Pumpe abgegeben werden, damit ein erster Bolus-Eintrag auf der Pumpe erstellt wird.
- Bevor das Combo-Plugin in AndroidAPS aktiviert wird, muss sichergestellt sein, dass das Basalratenprofil korrekt in AndroidAPS eingestellt ist und aktiviert wurde(!), da AndroidAPS das in der Pumpe programmierte Profil mit den eigenen Einstellungen überschreibt. Wenn das Basalratenprofil also korrekt in AAPS eingestellt ist, kann das Combo-Plugin aktiviert werden. Drücke nun den _Aktualisieren_ Button im Combo Tab um die Pumpe zu initialisieren.
- Um die Konfiguration zu prüfen, setze mit AAPS eine TBR von 500% für 15 Min. und gib einen Bolus ab. Die Pumpe sollte nun die TBR anzeigen und einen Bolus-Eintrag in der Historik haben. AAPS sollte ebenfalls die TBR und den Bolus anzeigen.

## Benutzung

- Denk daran, dass es sich hierbei nicht um ein fertiges Produkt handelt. Besonders zu Anfang muss der Nutzer selbst das System ständig überwachen, um zu verstehen, wo die Grenzen des Systems liegen und in welchen Situationen es nicht funktioniert. Von einer Benutzung des Systems sollte daher dringend abgesehen werden, wenn der Nutzer dieses nicht komplett versteht.
- Lies die OpenAPS Dokumentation unter https://openaps.org, um den Closed-Loop Algorithmus zu verstehen, auf dem AndroidAPS aufbaut.
- Lies das Wiki unter http://wiki.AndroidAPS.org, um mehr über AndroidAPS zu lernen und das System zu verstehen.
- Das Combo-Plugin in AndroidAPS nutzt den gleichen Kommunikationskanal, der auch von dem originalen Fernbedienung zu der Combo genutzt wird. Das Fernbedienung bildet die Anzeige der Pumpe auf seinem eigenen Display ab und leitet Tastendrücke an diese weiter. Die Verbindung zu Pumpe und das Weiterleiten der Tastendrücke wird in AAPS durch Ruffy erledigt. Eine weitere Komponente im Combo-Plugin extrahiert dann Informationen aus der Anzeige der Pumpe und automatisiert das Eingeben von Boli, temporären Basalraten usw. und verifiziert, dass diese korrekt durch die Pumpe erkannt und verarbeitet werden. AndroidAPS selbst kommuniziert mit dieser Komponente, um TBR-Anpassungen und Boli-Abgaben auszuführen. Dieses Vorgehen hat allerdings Grenzen: Es ist relativ langsam (aber für uns noch schnell genug) und das Setzen einer TBR oder die Abgabe eines Bolus lassen die Pumpe vibrieren (genau so, wie dieses durch Drücken der Knöpfe an der Pumpe passiert).
- Die Integration der Combo in AndroidAPS geht davon aus, dass alle Eingaben an der Pumpe nur noch von AndroidAPS durchgeführt werden. Manuell an der Pumpe abgegebene Boli werden zwar von AndroidAPS erkannt, es kann aber bis zu 20 Minuten dauern, bis diese Information von AndroidAPS verarbeitet wird. Die Funktion, manuelle Boli zu erkennen, ist lediglich ein Sicherheits-Feature und ist nicht dafür gedacht, normal genutzt zu werden (der Closed-Loop Algorithmus benötigt außerdem Informationen zu allen aufgenommen Kohlenhydraten, was ein weiterer Grund dafür ist, alle Eingaben nur über AAPS einzugeben).
- Wenn AAPS genutzt wird, dürfen keine manuellen temporären Basalraten auf der Pumpe gesetzt werden. Der Closed-Loop-Algorithmus geht davon aus, die Änderungen an der Basalrate zu kontrollieren, und kann nicht wie vorgesehen funktionieren, wenn diese manuell auf der Pumpe gesetzt werden (unter anderem, da der Startzeitpunkt einer TBR über das genutzte Protokoll nicht bestimmt werden kann).
- Das erste Basalratenprofil der Pumpe wird beim Start von AAPS eingelesen und bei Abweichungen mit den in AAPS im Profil hinterlegten Werten überschrieben. Die Basalrate sollte daher nicht manuell auf der Pumpe geändert werden, da diese Änderunge beim nächsten AAPS-Start erkannt und "korrigiert" wird. Dieser Sicherheitscheck wird durchgeführt, um unbeabsichtigte Änderungen auf der Pumpe zu erkennen und zu korrigieren.
- Auf der Pumpe sollte die Tastensperre aktiviert sein, um zu verhindern, dass manuell ein Bolus auf der Pumpe abgegeben wird (eventuell aus Gewohnheit, da man zuvor oft die Quick-Bolus Funktion genutzt hat). Ist die Tastensperre aktiviert, führen versehentliche Tastendrücke auf der Pumpe nicht zu einem Verbindungsabbruch zwischen AndroidAPS und der Pumpe.
- Wenn auf der Pumpe ein BOLUS- oder TBR-ABBRUCH-Alarm auftritt, während ein Bolus abgegeben oder eine neue TBR gesetzt wird, wird hierdurch die Verbindung zwischen der Pumpe und dem Smartphone getrennt. AndroidAPS versucht automatisch, sich wieder zu verbinden und den Alarm zu bestätigen, um dann zu versuchen, die letzte Aktion ein zweites Mal auszuführen (Boli werden aus Sicherheitsgründen nicht wiederholt). Sollte der automatische Verbindungsaufbau fehlschlagen, kann der Alarm nicht bestätigt werden und der Nutzer muss dies manuell auf der Pumpe machen. 
- Wenn ein Alarm wegen niedrigem Ampullenfüllstand oder niedrigem Batterierladezustand während einer Bolusabgabe erscheint, werden diese in AAPS bestätigt und als Benachrichtigung gezeigt.  Sofern diese Alarme angezeigt werden, während keine Verbindung zur Pumpe besteht, gehe in AAPS zum Combo-Tab und drück den Button "Aktualisiere". Damit werden die Alarme manuell bestätigt und als Benachrichtigung in AAPS angezeigt.
- Sollte AAPS einen TBR-ABBRUCH- oder auch einen anderen Alarm nicht bestätigen können, kann der Button "Aktualisiere" im Combo-Tab gedrückt werden. Dann baut AAPS eine Verbindung auf, bestätigt den Alarm und erstellt eine entsprechende Benachrichtigung. Dies ist risikolos, weil diese Alarme unproblematisch sind. Eine entsprechende TBR wird bei der nächsten Loop-Berechnung gesetzt.
- Bei allen anderen Pumpenalarmen: Bei bestehender Kommunikation zwischen Pumpe und AAPS werden die Alarme, z. B. "E4: Verschluss" , sowohl im Combo-Tab als auch in der Übersichtsseite angezeigt. Eine Alarm verursacht eine Dringlichkeitsmeldung. AAPS bestätigt nie wichtige Fehlermeldungen der Pumpe direkt: Die Pumpe wird entweder vibrieren oder mit Alarmtönen auf krititsche Situationen hinweisen, die ein direktes Eingreifen des Pumpennutzers erfordern. 
- Ruffy sollte nach dem Pairen nicht direkt aufgerufen werden (AAPS nutzt Ruffy im Hintergrund, sofern es benötigt wird). Die gleichzeitige Nutzung von AAPS und Ruffy auf dem Smartphone wird nicht unterstützt.
- Falls AAPS beendet wird, während das Programm mit der Pumpe kommuniziert (mittels Ruffy), kann es notwendig sein, Ruffy zu beenden (z. B. über Android-Einstellungen > Apps > Ruffy). Ein Neustart von AAPS startet Ruffy dann selbständig. Ebenfalls kann ein Neustart des Smartphones Kommunikationsprobleme beheben.
- Drücke keinerlei Pumpentaste, während AAPS mit der Pumpe kommuniziert (Bluetoothsymbol ist im Display der Pumpe sichtbar).
