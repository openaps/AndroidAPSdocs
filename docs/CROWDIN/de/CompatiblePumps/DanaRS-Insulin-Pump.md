* * *

orphan: true

* * *

# DanaRS und Dana-i Pumpe

*Diese Anleitung beschreibt die Einrichtung der App und Deiner Pumpe, wenn du eine Dana RS (ab 2017) oder die neuere Dana-i verwendest. Für eine Original DanaR, lies bitte die Informationen zur [DanaR Insulinpumpe](./DanaR-Insulin-Pump.md).*

**Eine Dana RS Insulinpumpe mit der Firmware v3 wird ab AAPS Version 2.7 unterstützt.**

**Um eine Dana-i Insulinpumpe mit AAPS nutzen zu können, wird AAPS ab Version 3.0 (oder höher) benötigt.**

* Bei der DanaRS und Dana-i wird das Basalprofil "BASAL A" von AAPS verwendet. Eventuell in der Pumpe vorhandene Einträge in diesem Profil werden überschrieben.

(DanaRS-Insulin-Pump-pairing-pump)=

## Pumpe verbinden

* Klicke auf dem AAPS Startbildschirm oben links auf das Hamburger Menü und wähle den Konfigurations-Generator aus.
* Wähle 'Dana-i/RS' im Abschnitt Pumpe.
* Über das Zahnrad erreichst Du die Pumpeneinstellungen direkt oder Du wählst den Weg über den Startbildschirm.
    
    ![AAPS Konfigurations-Generator Dana-i/RS](../images/DanaRS_i_ConfigB.png)

* Gehe zum 'DANA-i/RS' Tab.

* Wähle das Einstellungsmenü. Klicke dazu auf die drei Punkte rechts oben. 
* Wähle die 'Dana-i/RS Einstellungen'.
* Klicke auf "Ausgewählte Pumpe"
* Im Fenster zum Kopplungsprozess ('Pairing') klicke auf den Eintrag Deiner Pumpe.
    
    ![Dana-i/RS mit AndroidAPS verbinden](../images/DanaRS_i_Pairing.png)

* **Du musst die Verbindung auf der Pumpe bestätigen!** Das funktioniert genau gleich wie Du es von der Verbindung Deines Smartphones mit anderen Bluetooth-Geräten wie z.B. Bluetooth-Kopfhörern kennst.
    
    ![Bestätigung der Verbindung auf der Dana RS](../images/DanaRS_Pairing.png)

* Der Kopplungsprozess unterscheidet sich abhängig vom Pumpentyp und Firmware:
    
    * Für DanaRS v1 wähle das Pumpenpasswort in den Einstellungen und gibt Dein Passwort ein.
    * Bei einer DanaRS v3 musst Du zwei Zahlen- und Buschstabenfolgen, die auf dem Pumpendisplay angezeigt werden, in den AAPS-Kopplungsdialog, eingeben.
    * Für Dana-i wird der Standard-Android-Kopplungsdialog angezeigt und Du musst eine 6-stellige Nummer, die im Pumpendisplay angezeigt wird, eingeben.

* Klicke auf "Bolus-Geschwindigkeit" um die gewünschte Abgabegeschwindigkeit (12 s/1 IE, 30 s/1 IE oder 60 s/1 IE) einzustellen.

* Stelle im Arztmenü auf der Pumpe (siehe Bedienungsanleitung der DanaRS) die BASALschritte auf 0,01 IE/h.
* Stelle im Arztmenü auf der Pumpe (siehe Bedienungsanleitung der DanaRS) die Bolus-Schritte auf 0,05 IE/h.
* Aktiviere verzögerten Bolus in der Pumpe.

(DanaRS-Insulin-Pump-default-password)=

### Standard-Passwort

* Für die DanaRS mit Firmware v1 und v2 ist das Standard-Passwort 1234.
* Das Standard-Password einer DanaRS (mit Firmware v3) oder eine Dana-i leitet sich vom Produktionsdatum der Pumpe ab. Das Password muss im Format MMTT eingegeben werden, wobei MM der Produktionsmonat ist und TT der Produktionstag (Beispiel: '0124' steht für das Produktionsdatum 24. Januar).
    
    * Wähle PRÜFEN aus dem Hauptmenü aus und drücke dann OK. Wähle nun GERÄTE INFO aus und bestätige mit OK.
    * Nummer 3 ist das Produktionsdatum. 
    * Bei DanaRS v3 und Dana-i wird dieses Passwort nur verwendet, um die Tasten der Pumpe zu sperren. Es wird nicht zur Kommunikation verwendet wird und muss auch nicht in AAPS eingegeben werden.

(DanaRS-Insulin-Pump-change-password-on-pump)=

## Passwort auf Pumpe ändern

* Auf der Pumpe Taste OK drücken.
* Im Hauptmenü "EINSTELLUNGEN" wählen. (Dazu nach rechts scrollen indem Du mehrfach den Pfeiltaste drückst.)
    
    ![DanaRS Hauptmenü](../images/DanaRSPW_01_MainMenu.png)

* Wähle im Untermenü "ANWENDER MENÜ".
    
    ![DanaRS Menü Optionen](../images/DanaRSPW_02_OptionMenu.png)

* Scrolle mit der Pfeiltaste nach unten zu "11. Passwort".
    
    ![DanaRS 11. Passwort](../images/DanaRSPW_03_11PW.png)

* Drücke OK, um das bisherige Passwort einzugeben.

* Gib das**bisherige Passwort** (Standard-Passwort siehe [oben](#default-password)) ein und drücke OK
    
    ![DanaRS altes Kennwort eingeben](../images/DanaRSPW_04_11PWenter.png)

* Wenn hier das falsche Passwort eingegeben wird, gibt es keine Fehlermeldung!

* Lege ein **neues Passwort** fest (Ändere die Ziffern mit den + & - Buttons / gehe mit dem Pfeil-Button nach rechts).
    
    ![DanaRS neues Passwort](../images/DanaRSPW_05_PWnew.png)

* Bestätige mit der OK-Taste.

* Bestätige erneut mit OK, um die Änderungen zu speichern.
    
    ![DanaRS Neues Kennwort speichern](../images/DanaRSPW_06_PWnewSave.png)

* Scrolle nach unten zu "14. EXIT" und drücke die OK-Taste.
    
    ![DanaRS Exit](../images/DanaRSPW_07_Exit.png)

(DanaRS-Insulin-Pump-dana-rs-specific-errors)=

## Dana RS spezifische Fehler

### Fehler bei der Insulinabgabe

Falls die Verbindung zwischen AAPS und der Dana RS während der Insulinabgabe abbricht (z.B. weil du dich vom Smartphone entfernst, während die Dana RS Insulin abgibt) wird die folgende Meldung angezeigt und ein Alarmton abgegeben.

![Alarm Abgabefehler](../images/DanaRS_Error_bolus.png)

* In den meisten Fällen handelt es sich nur um ein Kommunikationsproblem und es wurde tatsächlich die korrekte Insulinmenge abgegeben.
* Prüfe in der Historie der Dana RS (entweder direkt in der Pumpe oder über den Dana Tab > Pumpen-Speicher > Boli), ob die korrekte Bolusmenge abgegeben wurde.
* Lösche den Fehler-Eintrag im [Behandlungen-Tab](#screens-bolus-carbs), wenn Du möchtest.
* Die tatsächlich abgegebene Insulinmenge wird bei der nächsten Verbindung zwischen AAPS und Dana RS ausgelesen. Um eine Verbindung manuell herzustellen, drücke das Bluetooth Icon auf dem Dana Tab oder warte einfach auf die nächste Verbindung.

## Wichtiger Hinweis beim Wechsel des Smartphones

Falls Du das Smartphone wechselst, sind die folgenden Schritte erforderlich:

* [Exportiere die Einstellungen](../Maintenance/ExportImportSettings.md) auf Deinem alten Smartphone
* Übertrage die Einstellungen vom alten auf das neue Smartphone.

### DanaRS v1

* Verbinde die Dana RS **manuell** mit dem neuen Smartphone.
* Da die Verbindungseinstellungen zusammen mit den anderen Einstellungen in AAPS importiert werden, "kennt" AAPS deine Pumpe bereits und startet daher keinen Bluetooth-Scan. Daher müssen das neue Smartphone und die Pumpe manuell verbunden werden.
* Installiere AAPS auf dem neuen Smartphone.
* [Importiere die Einstellungen](../Maintenance/ExportImportSettings.md) auf Deinem neuen Smartphone

### DanaRS v3, Dana-i

* Starte den Kopplungsprozess wie [oben](#pairing-pump) beschrieben.
* In Einzelfällen muss die Koppelung im alten Smartphone zunächst gelöscht werden. Um die Koppelung in AAPS zu löschen, drückst Du in der Dana-i/RS-Registerkarte lange auf das Bluetooth-Symbol.

## Mit der Dana RS Pumpe über Zeitzonen hinweg reisen

Für allgemeine Informationen zum Reisen über Zeitzonen hinweg siehe [Mit der Pumpe über Zeitzonen hinweg reisen](#timezone-traveling-danarv2-danars).