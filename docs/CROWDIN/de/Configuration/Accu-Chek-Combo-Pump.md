# Accu-Chek Combo

**Die Software ist Teil einer DIY-Lösung (Do It Yourself = Eigenbau) und kein kommerzielles Produkt. Daher bist DU gefordert. DU musst lesen, lernen und verstehen, was das System macht und wie du es bedienst. Das System wird Dir nicht alle Schwierigkeiten Deiner Diabetestherapie abnehmen, aber wenn Du willens bist, die nötige Zeit zu investieren, dann kann es die Ergebnisse Deiner Therapie verbessern und die Lebensqualität erhöhen. Überstürze nichts. Nimm dir Zeit zum Lernen. Du bist ganz alleine dafür verantwortlich, was Du mit dem System machst.**

## Benötigte Hardware

- Eine Roche Accu-Chek Combo (jede Firmware funktioniert)
- Einen Smartpix oder Realtyme Adapter und die Accu-Chek 360°-Konfigurationssoftware um die Pumpe zu konfigurieren. (Kunden von Roche können die Software beim Kundendienst anfordern.)
- Ein kompatibles Telefon: Ein Android Telefon mit LineageOS 14.1 (früher CyanogenMod) oder mindestens Android 8.1 (Oreo). Ab AndroidAPS 3.0 ist Android 9 obligatorisch. Siehe [Versionshinweise](https://androidaps.readthedocs.io/en/latest/Installing-AndroidAPS/Releasenotes.html#android-version-und-aaps-version) für Details.
- Bei LineageOS muss es eine neuere Version (nicht vor Juni 2017) sein, da erst zu diesem Zeitpunkt die für die Combo-Unterstützung notwendige Änderung hinzugefügt wurde. 
- Eine Liste gestester Telefone findet sich in der [AAPS Phones](https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit) Liste.
- Die Liste ist nicht abschließend und spiegelt nur die persönliche Erfahrung der Benutzer wieder. Bitte trage Deine Erfahrung in die Liste ein und hilf damit anderen. Die ganzen DIY-Projekte funktionieren nur, wenn jeder etwas zurückgibt.
- Vorsicht, obwohl man unter Android 8.1 mit der Combo Pumpe kommunizieren kann, gibt es noch Schwierigkeiten mit AAPS unter Android 8.1. 
- Für fortgeschrittene erfahrene Anwender gibt es noch die Möglichkeit, Bluetooth-Kopplung zwischen Pumpe und einem gerooteten Android-Telefon (Android 4.1 oder LOS 14.1) vorzunehmen und die Informationen dann auf ein anderes gerootetes Handy (Android > 5 ) zu übertragen, damit ruffy/AAPS auf dem zweiten Handy läuft. Dieses Vorgehen erlaubt die Verwendung eines Android < 8.1; es ist aber nicht großartig getestet und auch kein sehr verbreitetes Verfahren. https://github.com/gregorybel/combo-pairing/blob/master/README.md

## Einschränkungen

- Verzögerter Bolus und Multiwave-Bolus werden nicht unterstützt. (Schaue dir [Extended Carbs](../Usage/Extended-Carbs.rst) als Alternative an.)
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

- Install AndroidAPS as described in the [AndroidAPS wiki](https://androidaps.readthedocs.io/)
- Make sure to read the wiki to understand how to setup AndroidAPS.
- Select the MDI plugin in AndroidAPS, not the Combo plugin at this point to avoid the Combo plugin from interfering with ruffy during the pairing process.
- Clone ruffy via git from [MilosKozak/ruffy](https://github.com/MilosKozak/ruffy). At the moment, the primary branch is the `combo` branch, in case of problems you might also try the 'pairing' branch (see below).
- Build and install ruffy and use it to pair the pump. If it doesn't work after multiple attempts, switch to the `pairing` branch, pair the pump and then switch back the original branch. If the pump is already paired and can be controlled via ruffy, installing the `combo` branch is sufficient. Note that the pairing processing is somewhat fragile (but only has to be done once) and may need a few attempts; quickly acknowledge prompts and when starting over, remove the pump device from the Bluetooth settings beforehand. Another option to try is to go to the Bluetooth menu after initiating the pairing process (this keeps the phone's Bluetooth discoverable as long as the menu is displayed) and switch back to ruffy after confirming the pairing on the pump, when the pump displays the authorization code. If you're unsuccessful in pairing the pump (say after 10 attempts), try waiting up to 10s before confirming the pairing on the pump (when the name of the phone is displayed on the pump). If you have configured the menu timeout to be 5s above, you need to increase it again. Some users reported they needed to do this. Lastly, consider moving from one room to another in case of local radio interference. At least one user immediately overcame pairing problems by simply changing rooms.
- When AAPS is using ruffy, the ruffy app can't be used. The easiest way is to just reboot the phone after the pairing process and let AAPS start ruffy in the background.
- If the pump is completely new, you need to do one bolus on the pump, so the pump creates a first history entry.
- Before enabling the Combo plugin in AAPS make sure your profile is set up correctly and activated(!) and your basal profile is up to date as AAPS will sync the basal profile to the pump. Then activate the Combo plugin. Press the *Refresh* button on the Combo tab to initialize the pump.
- To verify your setup, with the pump **disconnected**, use AAPS to set a TBR of 500% for 15 min and issue a bolus. The pump should now have a TBR running and the bolus in the history. AAPS should also show the active TBR and delivered bolus.

## Why does pairing with the pump does not work with the app "ruffy"?

There are serveral possible reasons. Versuche die folgenden Schritte:

1. Lege eine **neue oder volle Batterie** in die Pumpe ein. Sieh Dir den Batterie-Abschnitt für Details an. Stelle sicher, dass die Pumpe sich sehr nahe am Smartphone befindet.

![Combo sollte sich direkt bei dem Smartphone befinden](../images/Combo_next_to_Phone.png)

2. Turn off or remove any other bluetooth devices so they will not be able to establish a connection to the phone while pairing is in progress. Any parallel bluetooth communication or prompt to establish connections might disturb the pairing process.

3. Delete already connected devices in the Bluetooth menu of the pump: **BLUETOOTH SETTINGS / CONNECTION / REMOVE** until **NO DEVICE** is shown.

4. Delete a pump already connected to the phone via Bluetooth: Under Settings / Bluetooth, remove the paired device "**SpiritCombo**"
5. Stelle sicher, dass die Loop in AAPS nicht im Hintergrund läuft. Deaktivate Loop in AAPS.
6. Try using the '**pairing**' branch from the [MilosKozak/ruffy](https://github.com/MilosKozak/ruffy/tree/pairing) repository to establish the connection 
7. Now start ruffy on the phone. You may press Reset! and remove the old connection. Then hit **Connect!**.
8. In the Bluetooth menu of the pump, go to **ADD DEVICE / ADD CONNECTION**. Press *CONNECT!** 
    - The next three steps are timing-sensitive, so you might need to try different pauses/speed if pairing fails. Read the full sequence before trying it.

9. Now the Pump should show up the BT Name of phone to select for pairing. Here it is importand to wait at least 5s before you hit the select button on Pump. Otherwise the Pumpe will not send the Paring request to the Phone proberly.
    
    - If Combo Pump is set to 5s Screentime out, you may test it with 40s (original setting). From experiance the time between pump is showing up in phone until select phone is around 5-10s. In many other cases pairing just times out without successfully pair. Later you should set it back to 5s, to meet AAPS Combo settings and speed up connections.
    - If the pump does not show the phone as a pairing device at all, your phone's Bluetooth stack is probably not compatible with the pump. Make sure you are running a new **LineageOS ≥ 14.1** or **Android ≥ 8.1 (Oreo)**. If possible, try another smartphone. You can find a list of already successfully used smartphones under \[AAPS Phones\] (https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit#gid=698881435). 

10. Sometimes the phone asks for a (typically 4 digit) bluetooth PIN number that is not related to the 10 digit PIN later shown on the pump. Usually, ruffy will set this PIN automatically, but due to timing issues, this does not always work. If a request for a Bluetooth pairing PIN appears on the phone before any code is shown on the pump, you need to enter **}gZ='GD?gj2r|B}>** as the PIN. This is easiest done if you copy this 16 character text into the clipboard before starting the pairing sequence and just paste it in the dialog at this step. See related [Github issue](https://github.com/MilosKozak/ruffy/issues/14) for details.

11. At next the pump should show up a 10 digit security code. And Ruffy shold show a screen to enter it. So enter the code in Ruffy and you should be ready to go.
12. If pairing was not successful and you got a timeout on the pump, you will need to restart the process from scratch.
13. If you have used the 'Pairing' branch to build the ruffy app, now install the version build from the 'combo' branch on top of it. Make sure that you have used the same keys when signing the two versions of the app to be able to keep all setting and data, as they also contain the connection properties.
14. Reboot the phone.
15. Now you can restart AAPS loop.

## Nutzung

- Keep in mind that this is not a product, esp. in the beginning the user needs to monitor and understand the system, its limitations and how it can fail. It is strongly advised NOT to use this system when the person using it is not able to fully understand the system.
- Read the OpenAPS documentation https://openaps.org to understand the loop algorithm AndroidAPS is based upon.
- Read the online documentation to learn about and understand AndroidAPS https://androidaps.readthedocs.io/
- This integration uses the same functionality which the meter provides that comes with the Combo. The meter allows to mirror the pump screen and forwards button presses to the pump. The connection to the pump and this forwarding is what the ruffy app does. A `scripter` component reads the screen and automates entering boluses, TBRs etc and making sure inputs are processed correctly. AAPS then interacts with the scripter to apply loop commands and to administer boluses. This mode has some restrictions: it's comparatively slow (but well fast enough for what it is used for), and setting a TBR or giving a bolus causes the pump to vibrate.
- The integration of the Combo with AndroidAPS is designed with the assumption that all inputs are made via AndroidAPS. Boluses entered on the pump directly will be detected by AAPS, but it can take up to 20 min before AndroidAPS becomes aware of such a bolus. Reading boluses delivered directly on the pump is a safety feature and not meant to be regularly used (the loop requires knowledge of carbs consumed, which can't be entered on the pump, which is another reason why all inputs should be done in AndroidAPS). 
- Don't set or cancel a TBR on the pump. The loop assumes control of TBR and cannot work reliably otherwise, since it's not possible to determine the start time of a TBR that was set by the user on the pump.
- The pump's first basal rate profile is read on application start and is updated by AAPS. The basal rate should not be manually changed on the pump, but will be detected and corrected as a safety measure (don't rely on safety measures by default, this is meant to detect an unintended change on the pump).
- It's recommended to enable key lock on the pump to prevent bolusing from the pump, esp. when the pump was used before and using the "quick bolus" feature was a habit. Also, with keylock enabled, accidentally pressing a key will NOT interrupt active communication between AAPS and pump.
- When a BOLUS/TBR CANCELLED alert starts on the pump during bolusing or setting a TBR, this is caused by a disconnect between pump and phone, which happens from time to time. AAPS will try to reconnect and confirm the alert and then retry the last action (boluses are NOT retried for safety reasons). Therefore, such an alarm can be ignored as AAPS will confirm it automatically, usually within 30s (cancelling it is not problem, but will lead to the currently active action to have to wait till the pump's display turns off before it can reconnect to the pump). If the pump's alarm continues, automatic corfirmation failed, in which case the user needs to confirm the alarm manually.
- When a low cartridge or low battery alarm is raised during a bolus, they are confirmed and shown as a notification in AAPS. If they occur while no connection is open to the pump, going to the Combo tab and hitting the Refresh button will take over those alerts by confirming them and show a notification in AAPS.
- When AAPS fails to confirm a TBR CANCELLED alert, or one is raised for a different reason, hitting Refresh in the Combo tab establishes a connection, confirms the alert and shows a notification for it in AAPS. This can safely be done, since those alerts are benign - an appropriate TBR will be set again during the next loop iteration.
- For all other alerts raised by the pump: connecting to the pump will show the alert message in the Combo tab, e.g. "State: E4: Occlusion" as well as showing a notification on the main screen. An error will raise an urgent notification. AAPS never confirms serious errors on the pump, but let's the pump vibrate and ring to make sure the user is informed of a critical situation that needs action.
- After pairing, ruffy should not be used directly (AAPS will start in the background as needed), since using ruffy at AAPS at the same time is not supported.
- If AAPS crashes (or is stopped from the debugger) while AAPS and the pump were communicating (using ruffy), it might be necessary to force close ruffy. Restarting AAPS will start ruffy again. Restarting the phone is also an easy way to resolve this if you don't know how to force kill an app.
- Don't press any buttons on the pump while AAPS communicates with the pump (Bluetooth logo is shown on the pump).