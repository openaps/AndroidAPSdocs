# DanaRS Insulinpumpe

*Diese Anleitung beschreibt die Einrichtung der App und deiner Pumpe wenn du eine Dana RS (ab 2017) verwendest. Gehe zu [DanaR Insulinpumpe](./DanaR-Insulin-Pump) wenn du die Original DanaR benutzt.*

* Bei der DanaRS wird das Basalprofil "BASAL A" von AAPS verwendet. Eventuell in der Pumpe vorhandene Einträge in diesem Profil werden überschrieben.

* Gehe in AndroidAPS zu "KONFIGURATION".

* Klicke auf die drei Punkte rechts oben, um das Menü zu öffnen. Klicke auf Einstellungen.

* Klicke im Abschnitt "DanaRS" auf "Verbinde neue Pumpe" und gib die Seriennummer (Unterseite der Pumpe gegenüber dem Reservoir- und Batteriedeckel) deiner DanaRS ein.

* Klicke auf "Pumpen-Passwort" und gib dein Passwort ein. (Das Standard Passwort lautet 1234.)

* Klicke auf "Bolus-Geschwindigkeit" um die gewünschte Abgabegeschwindigkeit (12 s/1 IE, 30 s/1 IE oder 60 s/1 IE) einzustellen.

* Starte dein Smartphone neu.

* Stelle im Arztmenü auf der Pumpe (siehe Bedienungsanleitung der DanaRS) die Basalschritte auf 0,01 IE/h.

* Erlaube verzögerte Boli auf der Pumpe (Bolus Einstellungen -> V Bolus: EIN).

## Dana RS specific errors

### Error during insulin delivery

In case the connection between AAPS and Dana RS is lost during bolus insulin delivery (i.e. you walk away from phone while Dana RS is pumping insulin) you will see the following message and hear an alarm sound.

![Alarm insulin delivery](../images/DanaRS_Error_bolus.png)

* In most cases this is just a communication issue and the correct amount of insulin is delivered.
* Check in pump history (either on the pump or through Dana tab > pump history > boluses) if correct bolus is given.
* Delete error entry in CP tab if you wish.
* Real amount is read and recorded on next connect. To force this press BT icon on dana tab or just wait for next connect.

## Special note when switching phone

When switching to a new phone the following steps are neccessary:

* **Export settings** on your old phone 
  * Hamburger menu (top left corner of screen)
  * Maintenance
  * Export settings
* **Transfer** settings from old to new phone
* **Manually pair** Dana RS with the new phone 
  * As pump connection settings are also imported AAPS on your new phone will already "know" the pump and therefore not start a bluetooth scan. Therefore new phone and pump must be paired manually.
* **Install AndroidAPS** on the new phone.
* **Import settings** on your new phone 
  * Hamburger menu (top left corner of screen)
  * Maintenance
  * Import settings