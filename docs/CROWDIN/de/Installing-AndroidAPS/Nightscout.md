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

![Azure](../../images/nightscout1.png)

* Klicke auf "Speichern" am oberen Rand des Fensters.

## ns.10be.de

This service is offered by fellow looper Martin Schiftan free of charge at the moment. You can install Nightscout with a few clicks and use it directly. He tries to automate the administration to such an extent that you don't have to do much manual work anymore. All settings can be made via a user-friendly web interface. The service includes an automated basal rate check using Autotune. The server is located in Germany.

<http://ns.10be.de/en/index.html>