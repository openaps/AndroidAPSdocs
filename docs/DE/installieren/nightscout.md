# Nightscout
Du musst eine Nightscout-Webiste haben. Dies ist eine Datenbank im Internet, auf die sämtliche BZ- und Behandlungsdaten hochgeladen werden. Dort kannst du auch verschiedene Profile (Basalschemen, Korrekturfaktoren etc.) anlegen und ändern, die dann automatisch in AndroidAPS erscheinen. Die Website dieser Datenbank erlaubt dir zahlreiche statistische Auswertungen zur Optimierung deiner Diabetestherapie, Freigabe der Daten für Freunde oder Familienmitglieder (Follower) und Vorlage beim Diabetologen.

Es gibt folgende Möglichkeiten, solch eine Seite zu erstellen und zu betreiben:

## ns.10be.de
Dieser Server steht in Deutschland und wird von Looper Martin Schiftan derzeit kostenlos angeboten. Sämtliche Einstellungen lassen sich auf der Administrations-Website komfortabel vornehmen. Die Basalraten werden dort automatisch mit Autotune ausgewertet.

[http://ns.10be.de/de/index.html ](http://ns.10be.de/de/index.html)

## Heroku
Über Heroku kannst du von Hand selbst eine Nightscout-Website mit Datenbank hosten. Die kostenlosen Server stehen im Ausland und müssen von Hand konfiguriert werden.

### Heroku-Seite einrichten
[http://www.heroku.com](http://www.heroku.com)
[http://www.nightscout.info/wiki/welcome/set-up-nightscout-using-heroku](http://www.nightscout.info/wiki/welcome/set-up-nightscout-using-heroku)
  
Tipp: Alle Zugangsdaten auf einem Zettel oder in einer Textdatei notieren!

### Heroku-Variablen einrichten

* Auf [https://herokuapp.com/](https://herokuapp.com/) einloggen
* App-Namen auswählen
* Settings > Schaltfläche "Reveal Config Vars" anklicken
* Variablen hinzufügen oder wie folgt ändern:

  * ENABLE = `careportal food cage sage iage iob cob basal rawbg pushover bgi pump openaps openapsbasal loop`
  * DEVICESTATUS_ADVANCED = `true`
  * PUMP_FIELDS = `reservoir battery clock`

Ein Alarm bei niedrigem Pumpen-Batteriestand in % kann wie folgt aktiviert werden:

* PUMP_WARN_BATT_P = `51`
* PUMP_URGENT_BATT_P = `26`

Optional: Die nachfolgenden Variablen können gesetzt werden damit die Zeiten im Careportal in AndroidAPS farblich angezeigt werden:
* `BAGE_WARN` = `480` (Gelbe Warnung nach x Stunden seit dem letzten Pumpenbatterie Wechsel im Careportal)
* `BAGE_URGENT` = `504` (Rote Warnung nach x Stunden seit dem letzten Pumpenbatterie Wechsel im Careportal)
* `CAGE_WARN` = `40` (Gelbe Warnung nach x Stunden seit dem letzten Pumpenkatheter Wechsel im Careportal)
* `CAGE_URGENT` = `48` (Rote Warnung nach x Stunden seit dem letzten Pumpenkatheter Wechsel im Careportal)
* `IAGE_WARN` = `144` (Gelbe Warnung nach x Stunden seit dem letzten Insulinreservoir Wechsel im Careportal)
* `IAGE_URGENT` = `192` (Rote Warnung nach x Stunden seit dem letzten Insulinreservoir Wechsel im Careportal)
* `SAGE_WARN` = `160` (Gelbe Warnung nach x Stunden seit dem letzten CGM Sensor Gesetzt im Careportal)
* `SAGE_URGENT` = `168` (Rote Warnung nach x Stunden seit dem letzten CGM Sensor Gesetzt im Careportal)
 


### Nightscout-Website Version checken

* https://DEINAPPNAME.herokuapp.com/
* Menü über die drei waagerechten Striche rechts oben am Bildschirm anklicken
* Am Ende des Menüs muss "Nightscout Version 0.10.2-..." stehen

Tipp: Falls eine ältere Version angezeigt wird, z.B. "0.10.1-...", dann muss Nightscout aktualisiert werden. Dazu nach der Anleitung unter [http://www.nightscout.info/wiki/welcome/how-to-update-to-latest-cgm-remote-monitor-aka-cookie](http://www.nightscout.info/wiki/welcome/how-to-update-to-latest-cgm-remote-monitor-aka-cookie) vorgehen. Sollte sich trotz erfolgreichem Update die Versionsanzeige nicht aktualisieren, dann ist noch ein "Redeploy" von Hand erforderlich, siehe die Anleitung [http://www.nightscout.info/wiki/welcome/how-to-update-to-latest-cgm-remote-monitor-aka-cookie/update-my-fork-troubleshooting-part-2](http://www.nightscout.info/wiki/welcome/how-to-update-to-latest-cgm-remote-monitor-aka-cookie/update-my-fork-troubleshooting-part-2)
