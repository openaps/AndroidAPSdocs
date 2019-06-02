# Nightscout Setup

Wir gehen davon aus, dass du bereits eine Nightscout Seite hast. Falls nicht, gehe zum [Nightscout Wiki](http://www.nightscout.info/wiki/welcome/set-up-nightscout-using-heroku). Dort findest du detaillierte Informationen zur Einrichtung. Die unten stehenden Hinweise beziehen sich auf die Einstellungen, die du zusätzlich in deiner Nightscout Seite vornehmen musst. Deine Nightscout Seite muss mindestens unter Version 10 (wird als 0.10... angezeigt) laufen. Prüfe daher, ob du tatsächlich die [letzte Version](http://www.nightscout.info/wiki/welcome/how-to-update-to-latest-cgm-remote-monitor-aka-cookie) verwendest. Andersfalls bekommst du in der AAPS App eine Fehlermeldung. Manche Looper haben festgestellt, dass durch das Loopen mehr Speicherplatz verbraucht wird, als Azure kostenfrei zur Verfügung stellt. Daher ist Heroku die bessere Wahl.

* Gehe zu https://herokuapp.com/

* App-Namen auswählen

* Klicke auf "Application settings" (Azure) bzw. "Settings" > "Reveal Config Variables" (Heroku).

* Variablen hinzufügen oder wie folgt ändern:
  
  * `ENABLE` = `careportal boluscalc food bwp cage sage iage iob cob basal ar2 rawbg pushover bgi pump openaps`
  * `DEVICESTATUS_ADVANCED` = `true`
  * `PUMP_FIELDS` = `reservoir battery clock`
  * Ein Alarm bei [niedrigem Pumpen-Batteriestand](https://github.com/nightscout/cgm-remote-monitor#pump-pump-monitoring) in % kann wie folgt aktiviert werden: 
    * `PUMP_WARN_BATT_P` = `51`
    * `PUMP_URGENT_BATT_P` = `26` 
  * Optional: Die folgenden 'Timer' können für Farbhinweise im AAPS-Careportal eingestellt werden: 
    * `BAGE_WARN` = `480` (Warnung nach x Stunden seit dem letzten Batteriewechsel-Event im Careportal)
  * `BAGE_URGENT` = `504` (Dringende Warnung nach x Stunden seit dem letzten Batteriewechsel-Event im Careportal)
  * `CAGE_WARN` = `40` (Warnung nach x Stunden seit dem letzten Kanülenwechsel-Event im Careportal)
  * `CAGE_URGENT` = `48` (Dringende Warnung nach x Stunden seit dem letzten Kanülenwechsel-Event im Careportal)
  * `IAGE_WARN` = `144` (Warnung nach x Stunden seit dem letzten Reservoirwechsel-Event im Careportal)
  * `IAGE_URGENT` = `192` (Dringende Warnung nach x Stunden seit dem letzten Reservoirwechsel-Event im Careportal)
  * `SAGE_WARN` = `160` (Warnung nach x Stunden seit dem letzten CGM-Sensor-Setzen-Event im Careportal)
  * `SAGE_URGENT` = `168` (Dringende Warnung nach x Stunden seit dem letzten CGM-Sensor-Setzen-Event im Careportal)

![Azure](../../images/nightscout1.png)

* Klicke auf "Speichern" am oberen Rand des Fensters.

## ns.10be.de

Dieser Service wird von Looper Martin Schiftan derzeit kostenlos angeboten. Du kannst Nightscout mit ein paar Klicks einrichten und direkt verwenden. Er versucht die Administration weitestmöglich zu automatisieren, so dass nicht mehr viel Handarbeit notwendig ist. Alle Einstellungen können über eine benutzerfreundliche Web-Oberfläche vorgenommen werden. Eine automatisierte Basalratenüberprüfung mit Autotune ist ebenfalls enthalten. Der Server steht in Deutschland.

<http://ns.10be.de/en/index.html>