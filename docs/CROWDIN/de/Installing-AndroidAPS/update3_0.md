# Notwendige Überprüfungen nach Aktualisierung auf AndroidAPS 3.0

* **Minimale Android-Version ist 9.0 jetzt.**
* **Daten werden nicht in die neue Datenbankstruktur überführt.**

  Die Änderungen der Struktur sind so weitreichend, dass eine Übernahme nicht möglich ist. Daher werden nach dem Update IOB, COB, Behandlungen etc. leer sein. Du musst einen neuen [Profilwechsel](../Usage/Profiles) machen und mit IOB = 0 und COB = 0 starten.

  Plane das Update sorgfältig!!! Die beste Situation wäre eine ohne aktives Insulin und ohne Kohlenhydrate an Bord.

* In den [Release Notes](../Installing-AndroidAPS/Releasenotes) findest Du weitere Details zu den neuen und geänderten Funktonen.


## Automatisierungen prüfen

* Neue Beschränkungen wurden eingeführt. Überprüfe Deine Automatisierungen, insbesondere auf Gültigkeit der Bedingungen.
* Wenn eine der Bedingungen fehlt, musst Du sie erneut hinzufügen.
* Rote Automatisierungen enthalten ungültige Aktionen, bearbeite sie und setze sie auf gültige Werte zurück.

  Beispiel: Eine Änderung des Profils auf 140 % wurde früher erlaubt, ist jetzt aber auf 130 % beschränkt.

## Prüfe Deine NSClient- und Synchronisations-Einstellungen

* Die Implementierung des NSClient Plugins hat sich komplett geändert.
* Gehe zur Registerkarte NSClient und öffne die Einstellungen im rechten Menü. Eine neue Einstellung "Synchronisierung" ist jetzt verfügbar.
* You can now make a detailed selection about which items shall be synchronized with your Nightscout site.

## Nightscout profile cannot be pushed
* The nightscout profile is gone, rest in peace!
* To copy your current nightscout profile into a local profile, go to the treatments page (now to be opened in the right-hand menu).
* Search for a profile switch with 100% and press clone.
* A new local profile is added, valid from the current date.
* Um das Profil von Nightscout aus zu aktualisieren, musst Du 'Clone' verwenden (den Eintrag, nicht das Profil) und die Änderungen speichern. Du solltest "Profil gültig ab: <aktuelles Datum>" sehen.

## Reset master password
* You can now reset your master password in case you have forgotten it.
* You need to add a file named `PasswordReset` to the `/AAPS/extra` directory on your phones fileystem.
* Restart AndroidAPS.
* The new password will be the serial number of your active pump.
* For Dash: The serial number is printed on the Pod.
* For EROS it is also listed on the POD tab as "Sequence Number"

## Warning signal beneath BG

Beginning with Android 3.0, you might get a warning signal beneath your BG number on the main screen.

  ![Red BG warning](../images/bg_warn_red.png)

  ![Yellow BG warning](../images/bg_warn_yellow.png)

For details see [AAPS screens page](../Getting-Started/Screenshots#bg-warning-sign)


## Failure message: Data from different pump

   ![Failure message: Data from different pump](../images/Screen_DifferentPump.png)

To resolve this issue go to [config builder](../Configuration/Config-Builder#pump). Change pump to virtual pump and back to your actual pump. This will reset the pump state.
