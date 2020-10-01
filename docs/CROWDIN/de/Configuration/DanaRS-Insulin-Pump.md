# DanaRS Insulinpumpe

*Diese Anleitung beschreibt die Einrichtung der App und deiner Pumpe wenn du eine Dana RS (ab 2017) verwendest. Gehe zu [DanaR Insulinpumpe](./DanaR-Insulin-Pump) wenn du die Original DanaR benutzt.*

**New Dana RS firmware v3 can be used from AndroidAPS version 2.7 onwards.**

* Bei der DanaRS wird das Basalprofil "BASAL A" von AAPS verwendet. Eventuell in der Pumpe vorhandene Einträge in diesem Profil werden überschrieben.

* Gehe in AndroidAPS zu "KONFIGURATION".

* Klicke auf die drei Punkte rechts oben, um das Menü zu öffnen. Klicke auf Einstellungen.

* Klicke im Abschnitt "DanaRS" auf "Verbinde neue Pumpe" und wähle die Seriennummer deiner DanaRS aus. Diese findest Du auf Unterseite der Pumpe gegenüber dem Reservoir- und Batteriedeckel.
  
  ![Dana RS mit AndroidAPS verbinden](../images/AAPS_DanaRSPairing.png)

* Wähle "Pumpen-Passwort" und gib das Passwort ein.
  
  * For DanaRS with firmware 1 and 2 the default password is 1234.
  * For DanaRS with firmware 3 the default password is a combination of production month and production date (i.e. month 01 and day 24). ==> On your pump open main menu -> review -> information. Leider nein. 3 is production date.

* **You have to confirm the pairing on the pump!** That's just the way you are used to from other bluetooth pairings (i.e. smartphone and car audio).
  
  ![Bestätigung der Verbindung auf der Dana RS](../images/DanaRS_Pairing.png)

* Klicke auf "Bolus-Geschwindigkeit" um die gewünschte Abgabegeschwindigkeit (12 s/1 IE, 30 s/1 IE oder 60 s/1 IE) einzustellen.

* Starte dein Smartphone neu.

* Stelle im Arztmenü auf der Pumpe (siehe Bedienungsanleitung der DanaRS) die Basalschritte auf 0,01 IE/h.

* Erlaube die Vewendung von verlängerten Boli auf der Pumpe

## Dana RS spezifische Fehler

### Fehler bei der Insulinabgabe

Falls die Verbindung zwischen AAPS und der Dana RS während der Insulinabgabe abbricht (z.B. weil du dich vom Smartphone entfernst, während die Dana RS Insulin abgibt) wird die folgende Meldung angezeigt und ein Alarmton abgegeben.

![Alarm Abgabefehler](../images/DanaRS_Error_bolus.png)

* In den meisten Fällen handelt es sich nur um ein Kommunikationsproblem und es wurde tatsächlich die korrekte Insulinmenge abgegeben.
* Prüfe in der Historie der Dana RS (entweder direkt in der Pumpe oder über den Dana Tab > Pumpen-Speicher > Boli), ob die korrekte Bolusmenge abgegeben wurde.
* Den Fehler kannst Du, falls gewünscht, im CP (Careportal) Tab löschen.
* Die tatsächlich abgegebene Insulinmenge wird bei der nächsten Verbindung zwischen AAPS und Dana RS ausgelesen. Um eine Verbindung manuell herzustellen, drücke das Bluetooth Icon auf dem Dana Tab oder warte einfach auf die nächste Verbindung.

## Wichtiger Hinweis beim Wechsel des Smartphones

Falls du das Smartphone wechselst, sind die folgenden Schritte erforderlich:

* **Exportiere die Einstellungen** auf Deinem alten Smartphone
  
  * Hamburger Menü (drei Striche oben links am Bildschirm)
  * Wartung
  * Exportiere die Einstellungen
    
    ![AAPS Einstellungen exportieren](../images/AAPS_ExportSettings.png)

* **Übertrage** die exportierten Einstellungen vom alten auf das neue Smartphone

* **Manuelle Kopplung** die Dana RS und das neue Smartphone manuell (Bluetooth-Verbindung) 
  * Da die Verbindungseinstellungen zusammen mit den anderen Einstellungen in AAPS importiert werden, "kennt" AAPS deine Pumpe bereits und startet daher keinen Bluetooth-Scan. Daher müssen das neue Smartphone und die Pumpe manuell verbunden werden.
* **Installiere AndroidAPS** auf dem neuen Smartphone.
* **Importiere die Einstellungen** auf Deinem neuen Smartphone 
  * Hamburger Menü (drei Striche oben links am Bildschirm)
  * Wartung
  * Einstellungen importieren

## Mit der Dana RS Pumpe über Zeitzonen hinweg reisen

Für allgemeine Informationen siehe die Seite [Mit der Pumpe über Zeitzonen hinweg reisen](../Usage/Timezone-traveling#danarv2-danars).