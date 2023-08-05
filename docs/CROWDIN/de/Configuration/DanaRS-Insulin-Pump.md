# DanaRS und Dana-i Pumpe

*Diese Anleitung beschreibt die Einrichtung der App und Deiner Pumpe, wenn du eine Dana RS (ab 2017) oder die neuere Dana-i verwendest. Gehe zu [DanaR Insulinpumpe](./DanaR-Insulin-Pump) wenn du die Original DanaR benutzt.*

**New Dana RS firmware v3 can be used from AAPS version 2.7 onwards.**

**New Dana-i can be used from AAPS version 3.0 onwards.**

* Bei der DanaRS und Dana-i wird das Basalprofil "BASAL A" von AAPS verwendet. Eventuell in der Pumpe vorhandene Einträge in diesem Profil werden überschrieben.

(DanaRS-Insulin-Pump-pairing-pump)=

## Pumpe verbinden

* On AAPS homescreen click hamburger menu on the top left corner and go to Config Builder.
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
    * For DanaRS v3 you have to type 2 sequences of numbers and letters displayed on pump to AAPS pairing dialog.
    * Für Dana-i wird der Standard-Android-Kopplungsdialog angezeigt und Du musst eine 6-stellige Nummer, die im Pumpendisplay angezeigt wird, eingeben.

* Klicke auf "Bolus-Geschwindigkeit" um die gewünschte Abgabegeschwindigkeit (12 s/1 IE, 30 s/1 IE oder 60 s/1 IE) einzustellen.

* Stelle im Arztmenü auf der Pumpe (siehe Bedienungsanleitung der DanaRS) die BASALschritte auf 0,01 IE/h.
* Stelle im Arztmenü auf der Pumpe (siehe Bedienungsanleitung der DanaRS) die Bolus-Schritte auf 0,05 IE/h.
* Aktiviere verzögerten Bolus in der Pumpe.

(DanaRS-Insulin-Pump-default-password)=

### Standard-Passwort

* Für die DanaRS mit Firmware v1 und v2 ist das Standard-Passwort 1234.
* For DanaRS with firmware v3 or Dana-i the default password is derived from the manufacturing date and calculates as MMDD where MM is the month and DD is the day, the pump was produced (i.e. '0124' representing month 01 and day 24).
    
    * From MAIN MENU select REVIEW then open SHIPPING INFORMATION from the sub menu
    * Number 3 is manifacturing date. 
    * Bei DanaRS v3 und Dana-i wird dieses Passwort nur verwendet, um die Tasten der Pumpe zu sperren. It's not used for communication and it's not necessary to enter it in AAPS.

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

* Gib das **bisherige Passwort** (Standard Passwort siehe [oben](DanaRS-Insulin-Pump-default-password)) ein und drücke die OK-Taste.
    
    ![DanaRS altes Kennwort eingeben](../images/DanaRSPW_04_11PWenter.png)

* Wenn hier das falsche Passwort eingegeben wird, gibt es keine Fehlermeldung!

* Lege ein **neues Passwort** fest (Ändere die Ziffern mit den + & - Buttons / gehe mit dem Pfeil-Button nach rechts).
    
    ![DanaRS neues Passwort](../images/DanaRSPW_05_PWnew.png)

* Bestätige mit der OK-Taste.

* Press OK to save setting.
    
    ![DanaRS Neues Kennwort speichern](../images/DanaRSPW_06_PWnewSave.png)

* Scrolle nach unten zu "14. EXIT" and press OK to exit.
    
    ![DanaRS Exit](../images/DanaRSPW_07_Exit.png)

(DanaRS-Insulin-Pump-dana-rs-specific-errors)=

## Dana RS spezifische Fehler

### Fehler bei der Insulinabgabe

Falls die Verbindung zwischen AAPS und der Dana RS während der Insulinabgabe abbricht (z.B. weil du dich vom Smartphone entfernst, während die Dana RS Insulin abgibt) wird die folgende Meldung angezeigt und ein Alarmton abgegeben.

![Alarm Abgabefehler](../images/DanaRS_Error_bolus.png)

* In den meisten Fällen handelt es sich nur um ein Kommunikationsproblem und es wurde tatsächlich die korrekte Insulinmenge abgegeben.
* Prüfe in der Historie der Dana RS (entweder direkt in der Pumpe oder über den Dana Tab > Pumpen-Speicher > Boli), ob die korrekte Bolusmenge abgegeben wurde.
* Lösche den fehlerhaften Eintrag im[Behandlungen Tab](Screenshots-carb-correction), wenn Du magst.
* Die tatsächlich abgegebene Insulinmenge wird bei der nächsten Verbindung zwischen AAPS und Dana RS ausgelesen. Um eine Verbindung manuell herzustellen, drücke das Bluetooth Icon auf dem Dana Tab oder warte einfach auf die nächste Verbindung.

## Wichtiger Hinweis beim Wechsel des Smartphones

Falls Du das Smartphone wechselst, sind die folgenden Schritte erforderlich:

* [Exportiere die Einstellungen](ExportImportSettings-export-settings) auf Deinem alten Smartphone
* Übertrage die Einstellungen vom alten auf das neue Smartphone.

### DanaRS v1

* Verbinde die Dana RS **manuell** mit dem neuen Smartphone.
* Da die Verbindungseinstellungen zusammen mit den anderen Einstellungen in AAPS importiert werden, "kennt" AAPS deine Pumpe bereits und startet daher keinen Bluetooth-Scan. Daher müssen das neue Smartphone und die Pumpe manuell verbunden werden.
* Install AAPS on the new phone.
* [Importiere die Einstellungen](ExportImportSettings-import-settings) auf Deinem neuen Smartphone

### DanaRS v3, Dana-i

* Starte den Kopplungsprozess wie [oben](DanaRS-Insulin-Pump-pairing-pump) beschrieben.
* Sometimes it may be necessary to clear pairing information in AAPS by long-click BT icon on Dana-i/RS tab.

## Mit der Dana RS Pumpe über Zeitzonen hinweg reisen

Für allgemeine Informationen zum Reisen über Zeitzonen hinweg siehe [Mit der Pumpe über Zeitzonen hinweg reisen](Timezone-traveling-danarv2-danars).