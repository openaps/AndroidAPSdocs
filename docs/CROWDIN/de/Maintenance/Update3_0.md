- - -
orphan: true
- - -

# Notwendige Prüfungen nach der Aktualisierung auf AAPS 3.0

* **Minimale Android-Version ist 9.0 jetzt.**
* **Daten werden nicht in die neue Datenbankstruktur überführt.**

  Die Änderungen der Struktur sind so weitreichend, dass eine Übernahme nicht möglich ist. Daher werden nach dem Update IOB, COB, Behandlungen etc. leer sein. Daher werden nach dem Update IOB, COB, Behandlungen etc. leer sein.

  Plane das Update sorgfältig!!! Die beste Situation wäre eine ohne aktives Insulin und ohne Kohlenhydrate an Bord.

* In den [Release Notes](../Maintenance/ReleaseNotes.md) findest Du Details zu allen neuen und verbesserten Funktionen.


## Automatisierungen prüfen

* Neue Beschränkungen wurden eingeführt. Überprüfe Deine Automatisierungen, insbesondere auf Gültigkeit der Bedingungen.
* Wenn eine der Bedingungen fehlt, musst Du sie erneut hinzufügen.
* Rote Automatisierungen enthalten ungültige Aktionen, bearbeite sie und setze sie auf gültige Werte zurück.

  Beispiel: Eine Änderung des Profils auf 140 % wurde früher erlaubt, ist jetzt aber auf 130 % beschränkt.

## Prüfe Deine NSClient- und Synchronisations-Einstellungen

* Die Implementierung des NSClient Plugins hat sich komplett geändert.
* Gehe zur Registerkarte NSClient und öffne die Einstellungen im rechten Menü. Eine neue Einstellung "Synchronisierung" ist jetzt verfügbar.
* Du kannst nun eine detaillierte Auswahl treffen, welche Daten mit deiner Nightscout-Seite synchronisiert werden sollen.

(Update3_0-nightscout-profile-cannot-be-pushed)=
## Nightscout-Profil kann nicht geladen werden
* Das Nightscout Profil ist verschwunden, Ruhe in Frieden!
* Um Dein aktuelles Nightscout-Profil in ein lokales Profil zu kopieren, geh auf die Seite 'Behandlungen' (jetzt im rechten Dreipunkt-Menü).
* Suche nach einem Profilwechsel mit 100% und drücke 'Klonen'.
* Ein neues lokales Profil wird hinzugefügt, dass vom aktuellen Datum an gültig ist.
* Um das Profil von Nightscout aus zu aktualisieren, musst Du 'Clone' verwenden (den Eintrag, nicht das Profil) und die Änderungen speichern. Du solltest „Profil gültig ab:“ mit dem aktuellen Datum gefüllt sehen.

(Update3_0-reset-master-password)=
## Masterpasswort zurücksetzen
* Du kannst nun Dein Master-Passwort zurücksetzen, falls Du es vergessen hast.
* Dazu muss eine Datei mit dem Namen `PasswordReset` in das `/AAPS/extra` Verzeichnis Deines Smartphone-Dateisystems hinzugefügt werden.
* Starte AAPS neu.
* Das neue Passwort wird durch die Seriennummer Deiner aktiven Pumpe gebildet.
* Für den Omnipod Dash ist die Seriennummer immer '4241'.
* Für den Omnipod EROS ist es die in der Registerkarte 'POD' als "Laufende Nummer" angegebene Zahl.

## Warnsignal neben BG

Beginnend mit Android 3.0 erhälst Du möglicherweise ein dreieckiges Warnsignal neben der BG-Ziffer, links auf dem Hauptbildschirm.

  ![Rotes BG-Warndreieck](../images/bg_warn_red.png)

  ![Gelbes BG-Warndreieck](../images/bg_warn_yellow.png)

Weitere Informationen findest Du auf den Seiten zu den [AAPS-Bildschirmen](#aaps-screens-bg-warning-sign).

(update30-failure-message-data-from-different-pump)=
## Fehlermeldung: Daten aus verschiedenen Pumpen

   ![Fehlermeldung: Daten aus verschiedenen Pumpen](../images/Screen_DifferentPump.png)

Um das zu beheben, gehe in die [Konfiguration](#Config-Builder-pump). Wechsel die Pumpe zu einer virtuellen Pumpe und zurück zu Deiner aktuellen Pumpe. Dadurch wird der Pumpenzustand zurückgesetzt.
