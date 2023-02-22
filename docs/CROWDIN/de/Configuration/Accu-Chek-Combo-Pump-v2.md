# Accu-Chek Combo

Diese Anweisungen sind zum Einrichten der Accu-Chek Combo Pumpe mit dem neuen Combo-Treiber, der als Teil von AAPS ab Version 3.2 verfügbar ist. Dieser Treiber ist völlig unabhängig vom alten Treiber.

**Die Software ist Teil einer DIY-Lösung (Do It Yourself = Eigenbau) und kein kommerzielles Produkt. Daher bist DU gefordert. DU musst lesen, lernen und verstehen, was das System macht und wie du es bedienst. Das System wird Dir nicht alle Schwierigkeiten Deiner Diabetestherapie abnehmen, aber wenn Du willens bist, die nötige Zeit zu investieren, dann kann es die Ergebnisse Deiner Therapie verbessern und die Lebensqualität erhöhen. Überstürze nichts. Nimm dir Zeit zum Lernen. Du bist ganz alleine dafür verantwortlich, was Du mit dem System machst. Du bist ganz alleine dafür verantwortlich, was Du mit dem System machst.**

## Hard- und Softwareanforderungen

* Eine Roche Accu-Chek Combo (jede Firmware funktioniert).
* Einen Smartpix oder Realtyme Adapter und die Accu-Chek 360°-Konfigurationssoftware um die Pumpe zu konfigurieren. (Kunden von Roche können die Software beim Kundendienst anfordern.)
* Ein kompatibles Telefon. Android 9 (Pie) oder neuer ist ein Muss. Bei Verwendung von LineageOS ist die minimale unterstützte Version 16.1. Siehe [Versionshinweise](https://androidaps.readthedocs.io/en/latest/Installing-AndroidAPS/Releasenotes.html#android-version-and-aaps-version) für Details.
* AndroidAPS muss auf Deinem Smartphone installiert sein.

Einige Telefone funktionieren vielleicht besser als andere je nach Qualität der Bluetooth-Unterstützung und ob sie eine zusätzliche, sehr aggressive Energiesparlogik haben oder nicht. Eine Liste gestester Telefone findet sich in der [AAPS Phones](https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit) Liste. Die Liste ist nicht abschließend und spiegelt nur die persönliche Erfahrung der Benutzer wieder. Bitte trage Deine Erfahrung in die Liste ein und hilf damit anderen. Die ganzen DIY-Projekte funktionieren nur, wenn jeder etwas zurückgibt.

(combov2-before-you-begin)=
## Bevor du startest

**SICHERHEITEN** - Versuche diesen Prozess nicht in einer Umgebung, in der Du Dich nicht von einem Fehler erholen kannst. Halten Sie Ihr Smartpix / Realtyme Gerät bereit, zusammen mit der 360 Configuration Software. Plane ungefähr eine Stunde, um alles einzurichten und zu überprüfen, ob alles richtig funktioniert.

Beachte folgende Einschränkungen:

* Verzögerter Bolus und Multiwave-Bolus werden nicht unterstützt. (Schaue dir  [Extended Carbs](../Usage/Extended-Carbs.rst) als Alternative an.)
* Nur ein basales Profil (das erste Profil) wird unterstützt.
* Der Loop ist deaktiviert, wenn das aktuell aktive Profil der Pumpe nicht Profil Nr. 1 ist. Dies geht bis das Profilnr. 1 aktiviert wird; wenn das erledigt ist, wird beim nächsten Verbindungsaufbau von AAPS (entweder allein nach einer Weile oder weil der Benutzer den Refresh Button in der Combov2 Benutzeroberfläche drückt), erkennen, dass Profil Nr. 1 das aktuell ist und den Loop wieder aktivieren.
* Wenn der Loop eine laufende Basalrate abbrechen will, wird stattdessen die Basalrate für 15 min. auf 90% oder 110% gesetzt. Das liegt daran, dass das Abbrechen eines TBR eine Warnung auf die Pumpe verursacht, die viele Vibrationen verursacht, und diese Vibrationen können nicht deaktiviert werden.
* Die Stabiltät der Bluetooth-Verbindung variiert je nach verwendetem Telefon stark, dies kann zu “pump unreachable”-Alarmen führen und verhindern, dass die Verbindung zur Pumpe hergestellt werden kann. Wenn dieses Verhalten auftritt, prüfe ob a) BT auf dem Telefon eingeschaltet ist b) “Aktualisieren” im Combo Tab von AAPS die Verbindung wieder herstellt. Versuche das Telefon neu starten, wenn die Schritte a) und b) nicht erfolgreich waren.
* Es gibt ein anderes Problem, bei dem ein Neustart nicht hilft, sondern eine Taste auf der Pumpe gedrückt werden muss (welcher den Bluetooth-Stack der Pumpe zurücksetzt), bevor die Pumpe wieder Verbindungen vom Telefon annimmt.
* Das Setzen einer TBR direkt auf der Pumpe ist im Closed Loop Betrieb nicht nötig und sollte möglichst nicht vorgenommen werden. Das Erkennen einer manuell gesetzten Basalrate kann bis zu 20 Minuten dauern und wird bei der Berechnung auch erst ab dem Zeitpunkt berücksichtigt, zu dem die TBR von AAPS eingelesen wird. Das führt dazu, dass die im Körper befindliche Insulinmenge (IOB) falsch berechnet wird.

Wenn du den alten Combop-Treiber verwendet hast, der von der separaten Ruffy-App abhängig ist und zu dieser neuen wechseln möchtest Beachten Sie, dass die Paarung wieder durchgeführt werden muss - Ruffy und der neue Combopreiber können keine Paarinformationen teilen. Stelle bitte sicher, dass Ruffy _nicht_ läuft. Im Zweifelsfall drücke lange das Ruffy-App-Symbol, um ein Kontextmenü anzuzeigen. Klicke in diesem Menü auf "App-Info". In der gerade geöffneten Benutzeroberfläche drücke "Force Stop". Auf diese Weise wird sichergestellt, dass eine aktive Ruffy-Instanz den neuen Treiber nicht stören kann.

Außerdem, wenn Du von dem alten Treiber migrierst, beachte, dass der neue Treiber einen Bolus Befehl auf eine andere Weise zur Combo kommuniziert, welcher viel schneller bearbeitet wird, Sei also nicht zu überrascht, wenn ein Bolus sofort beginnt, unabhängig von der Dosierung. Außerdem gelten die allgemeinen Anregungen, Tipps und Tricks etc. über den Umgang mit dem Ruffy Paarungs- und Verbindungsproblemen hier nicht, da dies ein komplett neuer Treiber ist, der keinen Code mit dem alten Treiber teilt.

## Telefon einrichten

Es ist sehr wichtig sicherzustellen, dass die Batterieoptimierung ausgeschaltet wird. AAPS erkennt automatisch, wenn es diesen Optimierungen unterliegt und fragt in seiner Benutzeroberfläche an, dass diese abgeschaltet werden. Aber auf modernen Android-Telefonen ist Bluetooth _selbst_ eine App (eine System-App). Und im Allgemeinen läuft die "Bluetooth app" mit _eingeschalteter Batterie Optimierung im Standard_. Infolgedessen kann Bluetooth es ablehnen, zu reagieren, wenn das Telefon darauf abzielt, Strom zu sparen, da es die Bluetooth-App einfach beendet. Das bedeutet, dass in den Einstellungen der Bluetooth-System-App auch die Batterieoptimierungen ausgeschaltet werden müssen. Unglücklicherweise kann man feststellen, dass die Bluetooth-System-App sich zwischen den Telefonen unterscheidet. In unverändertem Android gehe zu Einstellungen -> Apps -> Alle N-Apps anzeigen (N = Anzahl der Apps auf Ihrem Handy). Öffnen Sie dann das Menü in der oberen rechten Ecke, klicken Sie auf "System anzeigen" oder "System-Apps anzeigen" oder "Alle Apps". Jetzt in der erweiterten Liste der Apps nach einer "Bluetooth"-App suchen. Wähle es aus und tippe auf "App-Informationen" und dann auf "Batterie". Dort deaktiviere die Batterieoptimierung (manchmal auch als "Batterieverbrauch" bezeichnet) .

## Combo Setup

* Konfiguriere die Pumpe mit der Accu-Chek 360 Konfigurationssoftware. Falls du die Software nicht hast wende dich an die Accu-Chek Hotline. Sie senden registrierten Benutzern normalerweise eine CD mit der 360º Konfigurations-Software und einen SmartPix USB-Infrarotempfänger. (Das Realtyme Gerät funktioniert auch falls du dieses besitzt.)

  - **Erforderliche Einstellungen** (in Screenshots grün markiert):

     * Setze/Lasse das Benutzermenü auf “Standard”. Dadurch werden nur die benötigten Menüs/Aktionen auf der Pumpe angezeigt und solche versteckt, die nicht unterstützt werden (verzögerter Bolus, Multiwave Bolus, mehrere Basalprofile), die die Loop-Funktionalität einschränken würden, da der Loop nicht sicher laufen würde, wenn diese Aktionen Verwendung fänden.
     * Stelle sicher, dass der _Quick Info Text_ auch wirklich “QUICK INFO” heißt (ohne Anführungszeichen, zu finden unter _Anzeige-/Kommunikationseinstellungen_).
     * Stelle die _Maximale Anpassung_ der Temporären Basalrate auf 500%.
     * Deaktiviere _Ende der temporären Basalrate signalisieren_.
     * Setze die _Schrittweitendauer_ der Temporären Basalrate auf 15 min.
     * Bluetooth aktivieren

  - **Empfohlene Einstellungen** (in Screenshots blau markiert)

     * Stelle den Restmenge bei Alarm “Amp. fast leer” ein, wie es für dich passt.
     * Konfiguriere eine maximale Bolusmenge passend zu deiner Therapie, um dich gegen Fehler in der Software zu schützen.
     * Lege gleichermaßen die maximale Dauer einer temporären Basalrate als Sicherheitsmaßnahme fest. Erlaube mindestens 3 Stunden, da die Option die Pumpe für 3 Stunden abzulegen, 0% über 3 Stunden setzt.
     * Aktiviere die Tastensperre an der Pumpe, um die Bolusabgabe über die Pumpe zu verhindern, insbesondere wenn die Pumpe vorher schon verwendet wurde und die schnelle Bolusabgabe eingerichtet war.
     * Stelle die Anzeigedauer und das Menü-Timeout auf das Minimum (5,5 bzw. 5). Das erlaubt AndroidAPS in Fehlerzuständen schneller wieder fortzusetzen und verringert die Anzahl an Vibrationen die während so einem Fehler auftreten können.

  ![Screenshot der Einstellungen des Benutzer-Menüs](../images/combo/combo-menu-settings.png)

  ![Screenshot der TBR-Einstellungen](../images/combo/combo-tbr-settings.png)

  ![Screenshot der Bolus Einstellungen](../images/combo/combo-bolus-settings.png)

  ![Screenshot der Insulinreservoir Einstellungen](../images/combo/combo-insulin-settings.png)

## Aktivierung des Treibers und Kopplung mit der Combo

* Wähle den Treiber "Accu-Chek Combo" im [Config-Builder](../Configuration/Config-Builder) aus. **Wichtig**: Es ist auch der alte Treiber, genannt "Accu-Chek Combo (Ruffy)", in dieser Liste. Wähle diesen _nicht_ aus.

  ![Screenshot of Config Builder Combo](../images/combo/combov2-config-builder.png)

* Tippe auf das Zahnrad, um die Treibereinstellungen zu öffnen.

* In the settings user interface, tap on the button 'Pair with pump' at the top of the screen. This opens the Combo pairing user interface. Follow the instructions shown on screen to start pairing. When Android asks for permission to make the phone visible to other Bluetooth devices, press "allow". Eventually, the Combo will show a custom 10-digit pairing PIN on its screen, and the driver will request it. Enter that PIN in the corresponding field.

  ![Screenshot of Combo Pairing UI 1](../images/combo/combov2-pairing-screen-1.png)

  ![Screenshot of Combo Pairing UI 2](../images/combo/combov2-pairing-screen-2.png)

  ![Screenshot of Combo Pairing UI 3](../images/combo/combov2-pairing-screen-3.png)

  ![Screenshot of Combo Pairing UI 4](../images/combo/combov2-pairing-screen-4.png)

  ![Screenshot of Combo Pairing UI 4](../images/combo/combov2-pairing-screen-5.png)

* When the driver asks for the 10-digit PIN that is shown on the Combo, and the code is entered incorrectly, this is shown: ![Screenshot of Combo Pairing UI 3](../images/combo/combov2-pairing-screen-incorrect-pin.png)

* Once pairing is done, the pairing user interface is closed by pressing the OK button in the screen that states that pairing succeeded. After it is closed, you return to the driver settings user interface. The 'Pair with pump' button should now be greyed out and disabled.

  The Accu-Chek Combo tab looks like this after successfully pairing:

  ![Screenshot of Accu-Chek Combo tab with pairing](../images/combo/combov2-tab-with-pairing.png)

  if however there is no pairing with the Combo, the tab looks like this instead:

  ![Screenshot of Accu-Chek Combo tab without pairing](../images/combo/combov2-tab-without-pairing.png)

* To verify your setup (with the pump **disconnected** from any cannula to be safe!) use AAPS to set a TBR of 500% for 15 min and issue a bolus. Die Pumpe sollte nun die TBR anzeigen und einen Bolus-Eintrag in der Historie haben. AAPS sollte ebenfalls die TBR und den Bolus anzeigen.

* On the Combo, it is recommended to enable the key lock to prevent bolusing from the pump, esp. when the pump was used before and using the "quick bolus" feature was a habit.

## Notizen zum Pairing

The Accu-Chek Combo was developed before Bluetooth 4.0 was released, and just one year after the very first Android version was released. This is why its way of pairing with other devices is not 100% compatible with how it is done in Android today. To fully overcome this, AAPS would need system level permissions, which are only available for system apps. These are installed by the phone makers into the phone - users cannot install system apps.

The consequence of this is that pairing will never be 100% without problems, though it is greatly improved in this new driver. In particular, during pairing, Android's Bluetooth PIN dialog can briefly show up and automatically go away. But sometimes, it stays on screen, and asks for a 4-digit PIN. (This is not to be confused with the 10-digit Combo pairing PIN.) Do not enter anything, just press cancel. If pairing does not continue, follow the instructions on screen to retry the pairing attempt.

(combov2-tab-contents)=
## Accu-Chek Combo tab Inhalt

The tab shows the following information when a pump was paired (items are listed from top to bottom):

![Screenshot of Accu-Chek Combo tab with pairing](../images/combo/combov2-tab-with-pairing.png)

1. _Driver state_: The driver can be in one of the following states:
   - "Disconnected" : There is no Bluetooth connection; the driver is in this state most of the time, and only connects to the pump when needed - this saves power
   - "Verbinden"
   - "Checking pump" : the pump is connected, but the driver is currently performing safety checks to ensure that everything is OK and up to date
   - "Ready" : the driver is ready to accept commands from AAPS
   - "Suspended" : the pump is suspended (shown as "stopped" in the Combo)
   - "Executing command" : an AAPS command is being executed
   - "Error" : an error occurred; the connection was terminated, any ongoing command was aborted
2. _Last connection_: How many minutes ago did the driver successfully connect to the Combo; if this goes beyond 30 minutes, this item is shown with a red color
3. _Current activity_: Additional detail about what the pump is currently doing; this is also where a thin progress bar can show a command's execution progress, like setting a basal profile
4. _Battery_: Battery level; the Combo only indicates "full", "low", "empty" battery, and does not offer anything more accurate (like a percentage), so only these three levels are shown here
5. _Reservoir_: How many IU are currently in the Combo's reservoir
6. _Last bolus_: How many minutes ago the last bolus was delivered; if none was delivered yet after AAPS was started, this is empty
7. _Temp basal_: Details about the currently active temporary basal; if none is currently active, this is empty
8. _Base basal rate_: Currently active base basal rate ("base" means the basal rate without any active TBR influencing the basal rate factor)
9. _Serial number_: Combo serial number as indicated by the pump (this corresponds to the serial number shown on the back of the Combo)
10. _Bluetooth address_: The Combo's 6-byte Bluetooth address, shown in the `XX:XX:XX:XX:XX:XX` format

The Combo can be operated through Bluetooth in the _remote-terminal_ mode or in the _command_ mode. The remote-terminal mode corresponds to the "remote control mode" on the Combo's meter, which mimics the pump's LCD and four buttons. Some commands have to be performed in this mode by the driver, since they have no counterpart in the command mode. That latter mode is much faster, but, as said, limited in scope. When the remote-terminal mode is active, the current remote-terminal screen is shown in the field that is located just above the Combo drawing at the bottom. When the driver switches to the command mode however, that field is left blank.

(The user does not influence this; the driver fully decides on its own what mode to use. This is merely a note for users to know why sometimes they can see Combo frames in that field.)

At the very bottom, there is the "Refresh" button. This triggers an immediate pump status update. It also is used to let AAPS know that a previously discovered error is now fixed and that AAPS can check again that everything is OK (more on that below in [the section about alerts](combov2-alerts)).

## Einstellungen

Diese Einstellungen sind für den Combotreiber verfügbar (Elemente sind von oben nach unten aufgeführt):

![Screenshot of Accu-Chek Combo preferences](../images/combo/combov2-preferences.png)

1. _Pair with pump_: This is a button that can be pressed to pair with a Combo. It is disabled if a pump is already paired.
2. _Unpair pump_: Unpairs a paired Combo; the polar opposite of item no. 1. It is disabled if no pump is paired.
3. _Discovery duration (in seconds)_: When pairing, the drivers makes the phone discoverable by the pump. This controls how long that discoverability lasts. By default, the maximum (300 seconds = 5 minutes) is selected. Android does not allow for discoverability to last indefinitely, so a duration has to be chosen.
4. _Autodetect and automatically enter insulin reservoir change_: If enabled, the "reservoir change" action that is normally done by the user through the "prime/fill" button in the Action tab. This is explained [in further detail below](combov2-autodetections).
5. _Autodetect and automatically enter battery change_: If enabled, the "battery change" action that is normally done by the user through the "pump battery change" button in the Action tab. This is explained [in further detail below](combov2-autodetections).
6. _Enable verbose Combo logging_: This greatly expands the amount of logging done by the driver. **CAUTION**: Do not enable this unless asked to by a developer. Otherwise, this can add a lot of noise to AndroidAPS logs and lessen their usefulness.

Most users only ever use the top two items, the _Pair with pump_ and _Unpair pump_ buttons.

(combov2-autodetections)=
## Automatische Erkennung und automatische Eingabe von Akku- und Reservoir-Änderungen

The driver is capable of detecting battery and reservoir changes by keeping track of the battery and reservoir levels. If the battery level was reported by the Combo as low the last time the pump status was updated, and now, during the new pump status update, the battery level shows up as normal, then the driver concludes that the user must have replaced the battery. The same logic is used for the reservoir level: If it now is higher than before, this is interpreted as a reservoir change.

This only works if the battery and reservoir are replaced when these levels are reported as low _and_ the battery and reservoir are sufficiently filled.

These autodetections can be turned off in the Preferences UI.

(combov2-alerts)=
## Alarme (Warnungen und Fehler) und wie sie behandelt werden

The Combo shows alerts as remote-terminal screens. Warnings are shown with a "Wx" code (x is a digit), along with by a short description. One example is "W7", "TBR OVER". Errors are similar, but show up with an "Ex" code instead.

Certain warnings are automatically dismissed by the driver. These are:

- W1 "reservoir low" : the driver turns this into a "low reservoir" warning that is shown on the AAPS main tab
- W2 "battery low" : the driver turns this into a "low battery" warning that is shown on the AAPS main tab
- W3, W6, W7, W8 : these are all purely informational for the user, so it is safe for the driver to auto-dismiss them

Other warnings are _not_ automatically dismissed. Also, errors are _never_ automatically dismissed. Both of these are handled the same way: They cause the driver to produce an alert dialog on top of the AAPS UI, and also cause it to abort any ongoing command execution. The driver then switches to the "error" state (see [the Accu-Chek Combo tab contents description above](combov2-tab-contents)). This state does not allow for any command execution. The user has to handle the error on the pump; for example, an occlusion error may require replacing the cannula. Once the user took care of the error, normal operation can be resumed by pressing the "Refresh" button on the Accu-Chek Combo tab. The driver then connects to the Combo and updates its status, checking for whether an error is still shown on screen etc. Also, the driver auto-refreshes the pump status after a while, so manually pressing that button is not mandatory.

Bolusing is a special case. It is done in the Combo's command mode, which does not report mid-bolus that an alert appeared. As a consequence, the driver cannot automatically dismiss warnings _during_ a bolus. This means that unfortunately, the pump will be beeping until the bolus is finished. The most common mid-bolus alert typically is W1 "reservoir low". **Don't** dismiss Comnbo warnings on the pump itself manually during a bolus. You risk interrupting the bolus. The driver will take care of the warning once the bolus is over.

Alerts that happen while the driver is not connected to the Combo will not be noticed by the driver. The Combo has no way of automatically pushing that alert to the phone; it is always the phone that has to initiate the connection. As a consequence, the alert will persist until the driver connects to the pump. Users can press the "Refresh" button to trigger a connection and let the driver handle the alert right then and there (instead of waiting until AAPS itself decides to initiate a connection).

**IMPORTANT**: If an error occurs, or a warning shows up that isn't one of those that are automatically dismissed, the driver enters the error state. In that state, the loop **WILL BE BLOCKED** until the pump status is refreshed! It is unblocked after the pump status is updated (either by manual "Refresh" button press or by the driver's eventual auto-update) and no error is shown anymore.

## Dinge, auf die Du bei der Verwendung der Combo achten solltest

* Keep in mind that this is not a product, esp. in the beginning the user needs to monitor and understand the system, its limitations and how it can fail. Es wird dringend empfohlen, dieses System NICHT zu verwenden, wenn die Person, die es benutzt, nicht in der Lage ist, es vollständig zu verstehen.
* Due to the way the Combo's remote control functionality works, several operations (especially setting a basal profile) are slow compared to other pumps. This is an unfortunate limitation of the Combo that cannot be overcome.
* Gib keine TBR an der Pumpe ein und lösche dort auch keine. The loop assumes control of TBRs and cannot work reliably otherwise, since it's not possible to determine the start time of a TBR that was set by the user on the pump.
* Don't press any buttons on the pump while AAPS communicates with the pump (the Bluetooth logo is shown on the pump while it is connected to AAPS). Doing that will interrupt the Bluetooth connection. Only do that if there are problems with establishing a connection (see [the "Before you begin" section above](combov2-before-you-begin)).
* Don't press any buttons while the pump is bolusing. In particular, don't try to dismiss alerts by pressing buttons. See [the section about alerts](combov2-alerts) for a more detailed explanation why.

## Checkliste für den Fall, dass keine Verbindung mit der Combo hergestellt werden kann

The driver does its best to connect to the Combo, and uses a couple of tricks to maximize reliability. Still, sometimes, connections aren't established. Here are some steps to take for trying to remedy this situation.

1. Press a button on the Combo. Sometimes, the Combo's Bluetooth stack becomes non-responsive, and does not accept connections anymore. By pressing a button on the Combo and making the LCD show something, the Bluetooth stack is reset. Most of the time, this is the only step that's needed to fix the connection issues.
2. Restart the phone. This may be needed if there is an issue with the phone's Bluetooth stack itself.
3. If the Combo's battery cap is old, consider replacing it. Old battery caps can cause issues with the Combo's power supply, which affect Bluetooth.
4. If connection attempts still keep failing, consider unpairing and then re-pairing the pump.
