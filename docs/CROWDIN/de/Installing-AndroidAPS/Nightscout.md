# Nightscout

## Sicherheitsüberlegungen

Neben der Erstellung von Berichten, kann Nightscout auch genutzt werden, um AndroidAPS zu steuern. So kannst Du z.B. temporäre Ziele setzen oder Kohlenhydrate eingeben. Diese Informationen werden von AAPS übernommen, das dann entsprechend reagiert. Daher macht es Sinn, über die Absicherung Deiner Nightscout-Seite nachzudenken.

### Nightscout Einstellungen

You can deny public access to your Nightscout site by using [authentication roles](https://nightscout.github.io/nightscout/security).

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

Wir gehen davon aus, dass du bereits eine Nightscout Seite hast. Falls nicht, gehe zum [Nightscout Wiki](http://nightscout.github.io/nightscout/new_user/). Dort findest du detaillierte Informationen zur Einrichtung. Die unten stehenden Hinweise beziehen sich auf die Einstellungen, die du zusätzlich in deiner Nightscout Seite vornehmen musst. Your Nightscout site needs to be at least version 10 (displayed as 0.10...), so please check you are running the [latest version](https://nightscout.github.io/update/update/#updating-your-site-to-the-latest-version) otherwise you will get an error message on your AAPS app. Some people find looping uses more than the azure free quota allowed, so heroku is the preferred choice.

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

![Azure](../images/nightscout1.png)

* Klicke auf "Speichern" am oberen Rand des Fensters.

## Halb-automatische Nightscout Einrichtung

Dieser Service wird von Looper Martin Schiftan derzeit kostenlos angeboten. Wenn Dir das Angebot gefällt, kannst Du ihm eine kleine Spende zukommen lassen. Den Link findest Du links in der Navigation auf seiner Seite.

**Vorteile**

* Du kannst Nightscout mit ein paar Klicks einrichten und direkt verwenden. 
* Deutlich weniger manueller Aufwand, da Martin versucht, die Administration so weit als möglich zu automatisieren.
* Alle Einstellungen können über eine benutzerfreundliche Web-Oberfläche vorgenommen werden. 
* Eine automatisierte Basalratenüberprüfung mit Autotune ist ebenfalls enthalten. 
* Der Server steht in Deutschland.

<https://ns.10be.de/en/index.html>