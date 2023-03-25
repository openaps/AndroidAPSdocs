# Necessary checks after update to AAPS 3.0

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
* Du kannst nun eine detaillierte Auswahl treffen, welche Daten mit deiner Nightscout-Seite synchronisiert werden sollen.

## Nightscout-Profil kann nicht geladen werden
* Das Nightscout Profil ist verschwunden, Ruhe in Frieden!
* Um Dein aktuelles Nightscout-Profil in ein lokales Profil zu kopieren, geh auf die Seite 'Behandlungen' (jetzt im rechten Dreipunkt-Menü).
* Suche nach einem Profilwechsel mit 100% und drücke 'Klonen'.
* Ein neues lokales Profil wird hinzugefügt, dass vom aktuellen Datum an gültig ist.
* Um das Profil von Nightscout aus zu aktualisieren, musst Du 'Clone' verwenden (den Eintrag, nicht das Profil) und die Änderungen speichern. Du solltest "Profil gültig ab: <aktuelles Datum>" sehen.

(update3_0-reset-master-password)=

## Masterpasswort zurücksetzen
* Du kannst nun Dein Master-Passwort zurücksetzen, falls Du es vergessen hast.
* Dazu muss eine Datei mit dem Namen `PasswordReset` in das `/AAPS/extra` Verzeichnis Deines Telefon-Dateisystems hinzugefügt werden.
* Restart AAPS.
* Das neue Passwort wird durch die Seriennummer Deiner aktiven Pumpe gebildet.
* For Dash: The serial number is always 4241.
* Für den Omnipod EROS ist es die in der Registerkarte 'POD' als "Laufende Nummer" angegebene Zahl.

## Warnsignal neben BG

Beginnend mit Android 3.0 erhälst Du möglicherweise ein dreieckiges Warnsignal neben der BG-Ziffer, links auf dem Hauptbildschirm.

  ![Red BG warning](../images/bg_warn_red.png)

  ![Yellow BG warning](../images/bg_warn_yellow.png)

For details see [AAPS screens page](Screenshots-bg-warning-sign)


## Fehlermeldung: Daten aus verschiedenen Pumpen

   ![Fehlermeldung: Daten aus verschiedenen Pumpen](../images/Screen_DifferentPump.png)

To resolve this issue go to [config builder](Config-Builder-pump). Change pump to virtual pump and back to your actual pump. This will reset the pump state.
