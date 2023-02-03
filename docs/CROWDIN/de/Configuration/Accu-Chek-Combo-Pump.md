# Accu-Chek Combo

**Die Software ist Teil einer DIY-Lösung (Do It Yourself = Eigenbau) und kein kommerzielles Produkt. Daher bist DU gefordert. DU musst lesen, lernen und verstehen, was das System macht und wie du es bedienst. Das System wird Dir nicht alle Schwierigkeiten Deiner Diabetestherapie abnehmen, aber wenn Du willens bist, die nötige Zeit zu investieren, dann kann es die Ergebnisse Deiner Therapie verbessern und die Lebensqualität erhöhen. Überstürze nichts. Nimm dir Zeit zum Lernen. Du bist ganz alleine dafür verantwortlich, was Du mit dem System machst. Du bist ganz alleine dafür verantwortlich, was Du mit dem System machst.**

(hardware-requirements)=

## Benötigte Hardware

- Eine Roche Accu-Chek Combo (jede Firmware funktioniert)
- Einen Smartpix oder Realtyme Adapter und die Accu-Chek 360°-Konfigurationssoftware um die Pumpe zu konfigurieren. (Kunden von Roche können die Software beim Kundendienst anfordern.)
- Ein kompatibles Telefon: Ein Android Telefon mit LineageOS 14.1 (früher CyanogenMod) oder mindestens Android 8.1 (Oreo). Ab AndroidAPS 3.0 ist Android 9 obligatorisch. Siehe [Versionshinweise](https://androidaps.readthedocs.io/en/latest/Installing-AndroidAPS/Releasenotes.html#android-version-and-aaps-version) für Details.
- Bei LineageOS muss es eine neuere Version (nicht vor Juni 2017) sein, da erst zu diesem Zeitpunkt die für die Combo-Unterstützung notwendige Änderung hinzugefügt wurde. 
- Eine Liste gestester Telefone findet sich in der [AAPS Phones](https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit) Liste.
- Die Liste ist nicht abschließend und spiegelt nur die persönliche Erfahrung der Benutzer wieder. Bitte trage Deine Erfahrung in die Liste ein und hilf damit anderen. Die ganzen DIY-Projekte funktionieren nur, wenn jeder etwas zurückgibt.
- Vorsicht, obwohl man unter Android 8.1 mit der Combo Pumpe kommunizieren kann, gibt es noch Schwierigkeiten mit AAPS unter Android 8.1. 
- Für fortgeschrittene erfahrene Anwender gibt es noch die Möglichkeit, Bluetooth-Kopplung zwischen Pumpe und einem gerooteten Android-Telefon (Android 4.1 oder LOS 14.1) vorzunehmen und die Informationen dann auf ein anderes gerootetes Handy (Android > 5 ) zu übertragen, damit ruffy/AAPS auf dem zweiten Handy läuft. Dieses Vorgehen erlaubt die Verwendung eines Android < 8.1; es ist aber nicht großartig getestet und auch kein sehr verbreitetes Verfahren. https://github.com/gregorybel/combo-pairing/blob/master/README.md

## Einschränkungen

- Verzögerter Bolus und Multiwave-Bolus werden nicht unterstützt. (Schaue dir [Extended Carbs](../Usage/Extended-Carbs.md) als Alternative an.)
- Es wird nur ein Basalprofil unterstützt.
- Das Setzen mehrerer Basalprofile oder die Abgabe eines verzögerten Bolus oder eines Multiwave-Bolus an der Pumpe stört das Konzept von temporären Basalraten und setzt den Loop für 6 Stunden in einen “low glucose suspend mode”, da unter diesen Umständen keine sichere Funktion des Closed Loops gewährleistet ist.
- Derzeit kann man Zeit und Datum auf der Pumpe nicht über das Telefon einstellen, [Sommer-/Winterzeit-Umstellungen](../Usage/Timezone-traveling#accu-chek-combo) oder Umstellungen andere Zeitzonen müssen daher händisch vorgenommen werden (automatisches einstellen der Uhr des Telefons am Vorabend abstellen erst wieder einstellen, wenn die Uhrzeit auf der Pumpe angepasst wurde).
- Basalraten werden nur im Bereich von 0,05 bis 10 IE/h unterstützt. Dies gilt auch für Anpassungen des Profiles, welche es erlauben, die Basalrate zu verdoppeln oder zu halbieren. Auch in diesem Fall müssen die Grenzwerte eingehalten werden, so dass die Basalrate maximal 5 IE/h sein darf (da nach Verdoppelung 10 IE/h) bzw. minimal 0,1 iE/h (da nach Halbierung 0,05 iE/h).
- Wenn der Loop eine laufende Basalrate abbrechen will, wird stattdessen die Basalrate für 15 min. auf 90% oder 110% gesetzt. Das ist nötig, weil das Abbrechen der Basalrate auf der Combo Pumpe einen Alarm (W6 TBR Abbruch) auslöst, der durch starke Vibrationen mitgeteilt wird.
- Manchmal kann es vorkommen, dass AAPS einen W6 TBR Abbruch Alarm nicht selbst quittiert, dann muss der Benutzer die Warnung selbst bestätigen, entweder durch Bestätigen des Alarms auf der Pumpe oder durch den Aktualisiere-Button im Combo Tab die Warnung an AAPS übergeben, damit AAPS die Warnung bestätigen kann.
- Die Stabiltät der Bluetooth-Verbindung variiert je nach verwendetem Telefon stark, dies kann zu “pump unreachable”-Alarmen führen und verhindern, dass die Verbindung zur Pumpe hergestellt werden kann. 
- Wenn dieses Verhalten auftritt, prüfe ob a) BT auf dem Telefon eingeschaltet ist b) “Aktualisieren” im Combo Tab von AAPS die Verbindung wieder herstellt. Versuche das Telefon neu starten, wenn die Schritte a) und b) nicht erfolgreich waren. 
- Wenn alles oben genannte nicht hilft, kann es nötig sein, auf der Pumpe einen beliebigen Knopf zu drücken (dadurch wird BT auf der Pumpe gestoppt und neu gestartet). 
- Derzeit ist nicht absehbar, dass dieses Verhalten verhindert werden kann. Wenn diese Fehler öfter auftreten, dann besteht die derzeit einzige Lösung in der Verwendung eines Telefons, von dem bekannt ist, dass es zuverlässig mit der Combo unter AAPS zusammenarbeitet (siehe oben).
- Ein direkt auf der Pumpe programmierter Bolus wird nicht immer rechtzeitig erkannt und die Erkennung kann im schlimmsten Fall bis zu 20 Minuten dauern. 
- Der Bolus an der Pumpe wird immer überprüft, bevor eine hohe TBR oder ein Bolus von AAPS programmiert wird, aber aufgrund der Einschränkungen verweigert AAPS das Setzen des TBR / Bolus, da sie unter falschen Voraussetzungen berechnet wurden. (-> Bolus nicht direkt von der Pumpe abgeben! Siehe Kapitel [Nutzung](#nutzung) unten.
- Das Setzen einer TBR direkt auf der Pumpe ist im Closed Loop Betrieb nicht nötig und sollte möglichst nicht vorgenommen werden. Das Erkennen einer manuell gesetzten Basalrate kann bis zu 20 Minuten dauern und wird bei der Berechnung auch erst ab dem Zeitpunkt berücksichtigt, zu dem die TBR von AAPS eingelesen wird. Das führt dazu, dass die im Körper befindliche Insulinmenge (IOB) falsch berechnet wird. 

## Einrichtung

- Konfiguriere die Pumpe mit der 360° Konfigurations-Software. 
- Falls du die Software nicht hast wende dich an die Accu-Chek Hotline. Sie senden registrierten Benutzern normalerweise eine CD mit der 360º Konfigurations-Software und einen SmartPix USB-Infrarotempfänger. (Das Realtyme Gerät funktioniert auch falls du dieses besitzt.)
- **Erforderliche Einstellungen** (in Screenshots grün markiert):
    
    - Setze/Lasse das Benutzermenü auf “Standard”. Dadurch werden nur die benötigten Menüs/Aktionen auf der Pumpe angezeigt und solche versteckt, die nicht unterstützt werden (verzögerter Bolus, Multiwave Bolus, mehrere Basalprofile), die die Loop-Funktionalität einschränken würden, da der Loop nicht sicher laufen würde, wenn diese Aktionen Verwendung fänden.
    - Stelle sicher, dass der *Quick Info Text* auch wirklich “QUICK INFO” heißt (ohne Anführungszeichen, zu finden unter *Anzeige-/Kommunikationseinstellungen*).
    - Stelle die *Maximale Anpassung* der Temporären Basalrate auf 500%.
    - Deaktiviere *Ende der temporären Basalrate signalisieren*.
    - Setze die *Schrittweitendauer* der Temporären Basalrate auf 15 min.
    - Bluetooth aktivieren

- **Empfohlene Einstellungen** (in Screenshots blau markiert)
    
    - Stelle den Restmenge bei Alarm “Amp. fast leer” ein, wie es für dich passt.
    - Konfiguriere eine maximale Bolusmenge passend zu deiner Therapie, um dich gegen Fehler in der Software zu schützen.
    - Lege gleichermaßen die maximale Dauer einer temporären Basalrate als Sicherheitsmaßnahme fest. Erlaube mindestens 3 Stunden, da die Option die Pumpe für 3 Stunden abzulegen, 0% über 3 Stunden setzt.
    - Stelle die Tastensperre der Pumpe an, um zu verhindern, dass du von der Pumpe Bolus abgibst. Dies gilt besonders, wenn du daran gewöhnt bist, Bolus von der Pumpe aus abzugeben.
    - Stelle die Anzeigedauer und das Menü-Timeout auf das Minimum (5,5 bzw. 5). Das erlaubt AndroidAPS in Fehlerzuständen schneller wieder fortzusetzen und verringert die Anzahl an Vibrationen die während so einem Fehler auftreten können.

![Screenshot der Einstellungen des Benutzer-Menüs](../images/combo/combo-menu-settings.png)

![Screenshot der TBR-Einstellungen](../images/combo/combo-tbr-settings.png)

![Screenshot der Bolus Einstellungen](../images/combo/combo-bolus-settings.png)

![Screenshot der Insulinreservoir Einstellungen](../images/combo/combo-insulin-settings.png)

- Installiere AndroidAPS wie im [AndroidAPS wiki](https://androidaps.readthedocs.io/) beschrieben
- Lies zuerst das Wiki, um zu verstehen, wie AndroidAPS kompiliert und installiert wird.
- In AndroidAPS solltest du zuerst das “MDI”-Pumpen-Plugin aktivieren - und nicht direkt das für die Combo, damit das Combo-Plugin nicht Ruffy während des Pairings (Bluetooth-Verbindungsaufbau) stört.
- Klone ruffy mittels git von [MilosKozak/ruffy](https://github.com/MilosKozak/ruffy). Momentan ist `combo` der Haupt-Branch . Im Falle von Problemen kannst Du aber auch den 'pairing' Branch wie unten beschrieben probieren.
- Erstelle und installiere ruffy und verwenden ruffy dann, um die Pumpe zu verbinden. Falls dieses wiederholt nicht funktioniert, kann ein weiterer Versuch mit dem `pairing`-Branch unternommen werden. Nach der Kopplung muss aber wieder auf den <0>combo</0>-Branch gewechselt werden. Falls die Pumpe bereits verbunden ist und über ruffy gesteuert werden kann, ist der `combo`-Branch ausreichend. Der Kopplungs-Prozess ist leider etwas instabil und daher sind meistens ein paar Versuche notwendig (allerdings muss das Kopplen auch nur einmalig durchgeführt werden). Die auf der Pumpe und dem Handy auftretenden Dialoge sollten schnell bestätigt werden - und bevor man einen neuen Versuch startet, muss die Pumpe zuerst in den Bluetooth-Einstellungen des Telefons wieder gelöscht werden. Eine weitere Möglichkeit, den Kopplungs-Prozess zu unterstützen, ist es, nach dem Starten des Vorgangs auf dem Telefon in das Bluetooth-Menü des Telefons zu wechseln bis auf der Pumpe der Authorisatzions-Code angezeigt wird, um dann wieder zu Ruffy zu wechseln und diesen Code einzugeben (durch den Wechsel in das Bluetooth-Menü bleibt das Telefon für einen längeren Zeitraum sichtbar; daher ist manchmal die Pumpe besser zu finden). Ist eine Bluetooth-Verbindung weiterhin nicht möglich (nach etwa 10 Versuchen), probiere bis zu 10s zu warten bevor du die Kopplung auf der Pumpe bestätigst (wenn der Name des Handys auf dem Display der Pumpe angezeigt wird). Hierfür muss ggf. der oben gesetzte Menü-Timeout wieder herauf gesetzt werden. Bei einigen Nutzer war nur so eine Verbindung möglich. Schließlich kannst du noch versuchen, in ein anderes Zimmer zu gehen, um die Verbindung herzustellen falls es im ersten Zimmer Funkstörungen geben sollte. Zumindest ein Nutzer konnte die Verbindungsprobleme nach dem Wechsel des Zimmers sofort nicht mehr feststellen.
- Wenn AndroidAPS mit der Combo genutzt wird, übernimmt es die komplette Steuerung von ruffy (nach der Kopplung), so dass ruffy nicht mehr manuell genutzt werden darf (z. B. als manuelle Fernbedienung für die Combo). Um das System in einen sauberen Zustand zu bekommen, ist es am besten, das Telefon nach der Kopplung mit der Combo neu zu starten und Ruffy nur noch automatisch im Hintergrund durch AndroidAPS starten zu lassen.
- Ist die Pumpe neu, muss zuerst ein Bolus auf der Pumpe abgegeben werden, damit ein erster Bolus-Eintrag auf der Pumpe erstellt wird.
- Bevor das Combo-Plugin in AndroidAPS aktiviert wird, muss sichergestellt sein, dass das Basalratenprofil korrekt in AndroidAPS eingestellt ist und aktiviert wurde(!), da AndroidAPS das in der Pumpe programmierte Profil mit den eigenen Einstellungen überschreibt. Wenn das Basalratenprofil also korrekt in AAPS eingestellt ist, kann das Combo-Plugin aktiviert werden. Drücke nun den *Aktualisieren* Button im Combo Tab um die Pumpe zu initialisieren.
- **Trenne die Pumpe** um die Konfiguration zu prüfen, setze mit AAPS eine TBR von 500% für 15 Min. und gib einen Bolus ab. Die Pumpe sollte nun die TBR anzeigen und einen Bolus-Eintrag in der Historie haben. AAPS sollte ebenfalls die TBR und den Bolus anzeigen.

(why-pairing-with-the-pump-does-not-work-with-the-app-ruffy)=

## Warum funktioniert die Kopplung mit der Pumpe nicht mit der App "ruffy"?

Es sind verschiedene Gründe möglich. Versuche die folgenden Schritte:

1. Lege eine **neue oder volle Batterie** in die Pumpe ein. Sieh Dir den Batterie-Abschnitt für Details an. Stelle sicher, dass die Pumpe sich sehr nahe am Smartphone befindet.

![Combo sollte sich direkt bei dem Smartphone befinden](../images/Combo_next_to_Phone.png)

2. Schalte andere Bluetoothgeräte aus oder entferne sie, damit sie keine Verbindung zu dem Smartphone aufzubauen, während die Kopplung durchgeführt wird. Jede gleichzeitige Bluetooth-Kommunikation oder Eingabeaufforderung, eine Verbindung herzustellen, kann den Kopplungs-Prozess stören.

3. Entferne bereits verbundene Geräte im Bluetooth Menü der Pumpe **BLUETOOTH SETTINGS / CONNECTION / REMOVE** bis **NO DEVICE** angezeigt wird.

4. Entferne eine Pumpe, die bereits mit dem Smartphone per Bluetooth verbunden ist: Unter Einstellungen / Bluetooth das verbundene Gerät "**Spirit Combo**" entfernen
5. Stelle sicher, dass die Loop in AAPS nicht im Hintergrund läuft. Schalte den Loop in AAPS aus.
6. Versuche die Verbindung mit dem '**pairing**' Branch vom Repository [MilosKozak/ruffy](https://github.com/MilosKozak/ruffy/tree/pairing) herzustellen. 
7. Starte jetzt ruffy auf dem Smartphone. Du kannst Reset! drücken und die alte Verbindung entfernen. Drücke dann **Connect!**.
8. Navigiere im Bluetooth-Menü der Pumpe zu **GERÄT HINZUFÜGEN / VERBINDUNG HINZUFÜGEN**. Drücke *CONNECT!** 
    - Der Erfolg der nächsten drei Schritte hängt von zeitlichen Faktoren ab. Du solltest daher unterschiedliche Eingabegeschwindigkeiten und Pausen ausprobieren, wenn die Verbindung nicht beim ersten Mal klappt. Lies den gesamten Abschnitt, bevor Du es ausprobierst.

9. Jetzt sollte die Pumpe den Bluetooth-Namen des Smartphones anzeigen, das für das Pairing vorgesehen ist. An dieser Stelle ist es wichtig, mindestens 5s zu warten, bevor Du den Auswählen Button an der Pumpe drückst. Ansonsten wird die Pumpe die Pairing Anforderung nicht korrekt an das Smartphone übertragen.
    
    - Wenn die Combo Pumpe einen 5s Timeout für die Anzeige hat, solltest Du es mit 40s ausprobieren (originale Einstellung). Erfahrungsgemäss beträgt die Zeit bis die Pumpe auf dem Smartphone angezeigt wird 5-10s. In vielen anderen Fällen läuft das Pairing ohne erfolgreiche Verbindung ab. Später solltest Du es auf 5 Sekunden zurücksetzen, um die AAPS Combo Einstellungen zu erfüllen und die Verbindungen zu beschleunigen.
    - Wenn die Pumpe das Smartphone nicht als Pairing Gerät anzeigt, ist das Bluetooth Protokoll des Smartphones eventuell nicht kompatibel mit dem der Pumpe. Stelle sicher, dass Du eine neue Version **lineageOS ≥ 14.1** oder **Android ≥ 8.1 (Oreo)** verwendest. Wenn möglich, versuche es mit einem anderen Smartphone. Eine Liste von bereits erfolgreich benutzten Smartphones befindet sich unter \[AAPS Phones\] (https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit#gid=698881435). 

10. Manchmal fragt das Telefon nach einer (typischerweise 4-stelligen) Bluetooth-PIN-Nummer, die nicht mit der 10-stelligen PIN in Verbindung steht, die später auf der Pumpe angezeigt wird. Normalerweise wird diese PIN automatisch von Ruffy gesendet, aber aufgrund von Zeitproblemen funktioniert dies nicht immer. Wenn eine Anfrage für eine Bluetooth-Pairing-PIN auf dem Telefon erscheint, bevor ein Code auf der Pumpe angezeigt wird, musst du **}gZ='GD'?j2r|B}>** als PIN eingeben. Dies geht am einfachsten, wenn Sie diese 16 Zeichen in die Zwischenablage kopieren, bevor Sie die Paarungssequenz starten und ihn dann einfach in den Dialog einfügen. Weitere Informationen finden Sie unter [Github Issue](https://github.com/MilosKozak/ruffy/issues/14).

11. Danach sollte die Pumpe einen 10-stelligen Sicherheitscode anzeigen. Und Ruffy sollte einen Feld anzeigen, um ihn einzugeben. Geben Sie diesen Code in Ruffy ein und Sie sollten loslegen können.
12. Wenn das Pairing nicht erfolgreich war und Sie ein Timeout auf der Pumpe erhalten haben, müssen Sie den Prozess von Grund auf neu starten.
13. Wenn Sie den 'Pairing'- Branch benutzt haben, um die Ruffy App zu bauen, installieren Sie nun die Build Version aus dem 'combo'- Branch darüber. Stellen Sie sicher, dass Sie die gleichen Schlüssel beim Signieren der beiden Versionen der App verwendet haben, um alle Einstellungen und Daten beibehalten zu können da sie auch die Verbindungs-Eigenschaften enthalten.
14. Starte das Smartphone neu.
15. Jetzt kannst Du die AAPS Loop neu starten.

## Nutzung

- Denke daran, dass es kein Produkt ist, der Benutzer muss besonders am Anfang das System überwachen und seine Beschränkungen verstehen, sowie erkennen, wie es versagen kann. Es wird dringend empfohlen, dieses System NICHT zu verwenden, wenn die Person, die es benutzt nicht in der Lage ist, es vollständig zu verstehen.
- Lies die Dokumentation von OpenAPS auf https://openaps.org, um den Loop Algorithmus zu verstehen, auf dem AndroidAPS basiert.
- Lies die Online-Dokumentation, um mehr AndroidAPS zu erfahren und zu verstehen (https://androidaps.readthedocs.io/ ).
- Diese Implementierung verwendet die gleiche Funktionalität, die das Messgerät verwendet, das mit der Combo geliefert wird. Diese Implementierung ermöglicht es, den Bildschirm der Pumpe zu spiegeln und die Betätigung der Vorwärts-Taste an die Pumpe zu senden. Die ruffy App sorgt für die Verbindung zur Pumpe und ermöglicht diese Weiterleitung der Aktionen. Eine `scripter` Komponente liest den Bildschirm und autmatisiert die Eingabe von Boli, TBR usw. und stellt sicher, dass die Eingaben korrekt verarbeitet werden. AAPS interagiert dann mit dem scripter, um loop Befehle anzuwenden und die Boli zu verwalten. Dieser Modus besitzt einige Einschränkungen: Er ist relativ langsam (aber schnell genug für die Aufgaben, die er erledigen muss) und das Setzen einer TBR oder die Abgabe eines Bolus kann dazu führen, dass die Pumpe vibriert.
- Die Integration der Combo mit AndroidAPS ist darauf ausgerichtet, dass alle Eingaben über AndroidAPS erfolgen. Boli, die direkt an der Pumpe eingegeben werden, werden von AAPS erkannt, aber es kann bis zu 20 Minuten dauern, bevor AndroidAPS so einen Bolus berücksichtigt. Abgegebene Boli direkt an der Pumpe abzulesen ist ein Sicherheitsfeature und nicht dazu gedacht, regelmässig benutzt zu werden (die Loop benötigt Kenntnis der eingenommenen Kohlenhydrate, die an der Pumpe nicht eingegeben werden können, was ein weiterer Grund ist, weshalb alle Eingaben in AndroidAPS erfolgen sollten). 
- Gib keine TBR an der Pumpe ein und lösche dort auch keine. Die Loop übernimmt die Verwaltung der TBR und kann anderenfalls nicht zuverlässig funktionieren, da es nicht möglich ist, die Startzeit einer TBR zu ermitteln, die vom Benutzer an der Pumpe eingegeben wurde.
- Das erste Basalratenprofil der Pumpe wird beim App-Start gelesen und wird von AAPS auf dem aktuellen Stand gehalten. Die Basalrate sollte nicht manuell an der Pumpe geändert werden, aber sie wird als Sicherheitsmassnahme erkannt und korrigiert (verlasse Dich nicht blind auf diese Sicherheitsmassnahmen, da sie dazu gedacht sind, eine unbeabsichtigte Änderung an der Pumpe zu erkennen).
- Es wird empfohlen, die Tastensperre an der Pumpe zu aktivieren, um Bolusabgaben direkt an der Pumpe zu verhindern, besonders dann, wenn die Pumpe vorher direkt benutzt wurde und man sich daran gewöhnt hatte das "Quick Bolus"-Feature zu verwenden. Wenn die Tastensperre aktiviert ist, wird auch ein unbeabsichtigter Tastendruck die aktive Kommunikation zwischen AAPS und der Pumpe NICHT unterbrechen.
- Wenn ein Alarm BOLUS/TBR ABBRUCH an der Pumpe auftritt während ein Bolus abgegeben oder eine TBR gesetzt wird, wird dieser ausgelöst durch einen Verbindungsabbruch zwischen der Pumpe und dem Smartphone, was hin und wieder vorkommt. AAPS wird versuchen, erneut eine Verbindung herzustellen, den Alarm zu bestätigen und dann die letzte Aktion zu wiederholen (Boli werden aus Sicherheitsgründen NICHT wiederholt). Deshalb kann so ein Alarm ignoriert werden, da AAPS ihn automatisch bestätigen wird, normalerweise innerhalb von 30s (ein Abbruch ist kein Problem, wird aber dazu führen, dass die aktuell aktive Aktion warten muss, bis der Bildschirm der Pumpe ausgeschaltet wird bevor sie wieder die Verbindung zur Pumpe aufnehmen kann). Wenn der Alarm der Pumpe bestehen bleibt, ist die automatische Bestätigung fehlgeschlagen. In diesem Fall muss der Benutzer den Alarm manuell bestätigen.
- Wenn ein Alarm wegen eines fast leeren Reservoirs oder einer schwachen Batterie während der Abgabe eines Bolus auftritt, wird er bestätigt und als Benschrichtigung in AAPS angezeigt. Wenn so ein Alarm auftritt solange keine Verbindung zur Pumpe besteht, werden diese Alarme bestätigt und als Benschrichtigung in AAPS angezeigt, wenn man auf der Registerkarte "Combo" den Refresh-Button betätigt.
- Wenn AAPS einen TBR ABBRUCH Alarm nicht bestätigen kann oder ein Alarm aus einem anderen Grund ausgelöst wird, baut die Betätigung des Refresh-Buttons auf der Registerkarte "Combo" eine Verbindung auf und zeigt die Benachrichtigung dafür in AAPS an. Das kann sicher ausgeführt werden, da diese Alarme gutartig sind - eine entsprechende TBR wird erneut gesetzt während des nächsten Durchlaufens der Loop.
- Bei allen anderen Alarmen, die von der Pumpe ausgelöst werden gilt: der Aufbau einer Verbindung zur Pumpe zeigt die Alarmmeldung auf der Registerkarte "Combo" an, z.B. "Status: E4 Verstopfung". Diese Meldung wird auch auf dem Hauptbildschirm angezeigt. Ein Fehler löst eine dringende Benachrichtigung aus. AAPS bestätigt niemals schwere Fehler auf der Pumpe, aber es lässt die Pumpe vibrieren und piepen um sicherzustellen, dass der Benutzer über eine kritische Situation informiert wird, die eine Aktion erfordert.
- Nach dem Koppeln sollte ruffy nicht mehr direkt aufgerufen werden (AAPS wird ruffy im Hintergrund starten, falls es benötigt wird). Die gleichzeitige Nutzung von ruffy und AAPS wird nicht unterstützt.
- Wenn AAPS abstürzt (oder vom Debugger angehalten wird) während AAPS und die Pumpe kommunizieren (was über ruffy erfolgt), kann es erforderlich sein, das Schliessen von ruffy zu erzwingen. Der Neustart von AAPS startet ruffy ebenfalls erneut. Es ist ein einfacher Weg, so ein Problem zu beheben, indem das Smartphone neu gestartet wird, wenn Du nicht weiss, wie man das Schliessen einer App erzwingt.
- Drücke keine Buttons an der Pumpe während AAPS mit der Pumpe kommuniziert (erkennbar am Bluetooth Logo, das auf dem Bildschirm der Pumpe angezeigt wird).