# Nightscout

## Sicherheitsüberlegungen

Neben der Erstellung von Berichten, kann Nightscout auch genutzt werden, um AndroidAPS zu steuern. So kannst Du z.B. temporäre Ziele setzen oder Kohlenhydrate eingeben. Diese Informationen werden von AAPS übernommen, das dann entsprechend reagiert. Daher macht es Sinn, über die Absicherung Deiner Nightscout-Seite nachzudenken.

### Nightscout Einstellungen

Du kannst den allgemeinen Zugriff auf Deine Nightscout-Seite mittels [authentication roles](http://www.nightscout.info/wiki/welcome/website-features/0-9-features/authentication-roles) (Benutzer mit verschiedenen Zugriffsrechten) unterbinden.

### AndroidAPS Einstellungen

In den AAPS-Einstellungen gibt es eine Funktion, nur Daten zu Nightscout hochzuladen (keine Synchronisierung). Wenn Du diese Funktion wählst, wird AAPS keine Änderungen von Nightscout (z.B. temporäre Ziele oder Kohlenhydrateingaben) übernehmen. Falls Du ein [NS Profil](../Configuration/Config-Builder#nightscout-profil) nutzt, werden die Profildaten dennoch weiter zwischen AAPS und Nightscout synchronisiert.

* Tippe oben rechts auf dem Startbildschirm auf das 3-Punkte-Menü.
* Klicke auf "Einstellungen".
* Scrolle nach unten und tippe auf "Erweiterte Einstellungen".
* Wähle "Zu Nightscout nur hochladen (keine Synchronisation)".

![Nightscout nur Daten hochladen](../images/NSsafety.png)

### Weitere Sicherheitseinstellungen

Halte Dein Smartphone aktuell wie es in den [Sicherheitshinweisen](../Getting-Started/Safety-first.rst) beschrieben ist.

## Manuelles Nightscout-Setup

Wir gehen davon aus, dass du bereits eine Nightscout Seite hast. Falls nicht, gehe zum [Nightscout Wiki](http://nightscout.github.io/nightscout/new_user/). Dort findest du detaillierte Informationen zur Einrichtung. Die unten stehenden Hinweise beziehen sich auf die Einstellungen, die du zusätzlich in deiner Nightscout Seite vornehmen musst. Deine Nightscout Seite muss mindestens unter Version 10 (wird als 0.10... angezeigt) laufen. Prüfe daher, ob du tatsächlich die [letzte Version](http://www.nightscout.info/wiki/welcome/how-to-update-to-latest-cgm-remote-monitor-aka-cookie) verwendest. Andersfalls bekommst du in der AAPS App eine Fehlermeldung. Manche Looper haben festgestellt, dass durch das Loopen mehr Speicherplatz verbraucht wird, als Azure kostenfrei zur Verfügung stellt. Daher ist Heroku die bessere Wahl.

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

## Halb-automatische Nightscout Einrichtung

Dieser Service wird von Looper Martin Schiftan derzeit kostenlos angeboten. Wenn Dir das Angebot gefällt, kannst Du ihm eine kleine Spende zukommen lassen. Den Link findest Du links in der Navigation auf seiner Seite.

**Vorteile**

* Du kannst Nightscout mit ein paar Klicks einrichten und direkt verwenden. 
* Deutlich weniger manueller Aufwand, da Martin versucht, die Administration so weit als möglich zu automatisieren.
* Alle Einstellungen können über eine benutzerfreundliche Web-Oberfläche vorgenommen werden. 
* Eine automatisierte Basalratenüberprüfung mit Autotune ist ebenfalls enthalten. 
* Der Server steht in Deutschland.

[http://ns.10be.de](http://ns.10be.de/en/index.html)