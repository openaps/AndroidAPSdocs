Es wird vorausgesetzt, dass du bereits eine eigene Nightscout Seite eingerichtet hast, falls nicht folge [Nightscout](http://www.nightscout.info/wiki/welcome/set-up-nightscout-using-heroku), um eine ausführliche Anleitung zur Einrichtung zu erhalten. Bei der unteren Anleitung findest du die Einstellungen die du zusätzlich noch ändern musst.
* Gehe zu https://portal.azure.com/ oder https://herokuapp.com/

* Wähle deinen App Namen.

* Drücke settings (azure), oder Settings > "Reveal Config Variables (heroku)

* Füge die Variablen hinzu oder ändere sie wie folgt:
  * `ENABLE` = `careportal boluscalc food bwp cage sage iage iob cob basal ar2 rawbg pushover bgi pump openaps`
  * `DEVICESTATUS_ADVANCED` = `true` (HEROKU: 'on')
  * `PUMP_FIELDS` = `reservoir battery clock`
  * Various alarms can be set for [monitoring the pump](https://github.com/nightscout/cgm-remote-monitor#pump-pump-monitoring), battery % in particular is encouraged:
    * `PUMP_WARN_BATT_P` = `51`
    * `PUMP_URGENT_BATT_P` = `26`

[[https://github.com/MilosKozak/AndroidAPS/wiki/images/nightscout1.png]]

* Drücke Speichern.