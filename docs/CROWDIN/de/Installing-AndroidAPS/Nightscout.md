# Nightscout

(Nightscout-security-considerations)=

## Sicherheitsüberlegungen

Neben der Erstellung von Berichten, kann Nightscout auch genutzt werden, um AndroidAPS zu steuern. So kannst Du z.B. temporäre Ziele setzen oder Kohlenhydrate eingeben. Diese Informationen werden von AAPS übernommen, das dann entsprechend reagiert. Daher macht es Sinn, über die Absicherung Deiner Nightscout-Seite nachzudenken.

### Nightscout Einstellungen

Du kannst den allgemeinen Zugriff auf Deine Nightscout-Seite mittels [authentication roles](https://nightscout.github.io/nightscout/security) (Benutzer mit verschiedenen Zugriffsrechten) unterbinden.

### AndroidAPS Einstellungen

In den AAPS-Einstellungen gibt es eine Funktion, nur Daten zu Nightscout hochzuladen (keine Synchronisierung). By doing so AAPS will not pick up changes done in Nightscout such as temp targets or future carbs.

* Tippe oben rechts auf dem Startbildschirm auf das 3-Punkte-Menü.
* Klicke auf "Einstellungen".
* Scrolle nach unten und tippe auf "Erweiterte Einstellungen".
* Wähle "Zu Nightscout nur hochladen (keine Synchronisation)".

![Nightscout upload only](../images/NSsafety.png)

### Weitere Sicherheitseinstellungen

Keep your phone up to date as described in [safety first](../Getting-Started/Safety-first.md).

(Nightscout-manual-nightscout-setup)=

## Manuelles Nightscout-Setup

It is assumed you already have a Nightscout site, if not visit the [Nightscout](http://nightscout.github.io/nightscout/new_user/) page for full instructions on set up, the instructions below are then settings you will also need to add to your Nightscout site. Your Nightscout site needs to be at least version 10 (displayed as 0.10...), so please check you are running the [latest version](https://nightscout.github.io/update/update/#updating-your-site-to-the-latest-version) otherwise you will get an error message on your AAPS app. Some people find looping uses more than the azure free quota allowed, so heroku is the preferred choice.

* Gehe zu https://herokuapp.com/

* App-Namen auswählen

* Klicke auf "Application settings" (Azure) bzw. "Settings" > "Reveal Config Variables" (Heroku).

* Variablen hinzufügen oder wie folgt ändern:
  
  * `ENABLE` = `careportal boluscalc food bwp cage sage iage iob cob basal ar2 rawbg pushover bgi pump openaps`
  * `DEVICESTATUS_ADVANCED` = `true`
  * `SHOW_FORECAST` = `openaps`
  * `PUMP_FIELDS` = `reservoir battery clock`
  * Ein Alarm bei [niedrigem Pumpen-Batteriestand](https://github.com/nightscout/cgm-remote-monitor#pump-pump-monitoring) in % kann wie folgt aktiviert werden: 
    * `PUMP_WARN_BATT_P` = `51`
    * `PUMP_URGENT_BATT_P` = `26` 

![Azure](../images/nightscout1.png)

* Klicke auf "Speichern" am oberen Rand des Fensters.

## Halb-automatische Nightscout Einrichtung

Fellow looper Martin Schiftan offered a semi-automated Nightscout setup for many years free of charge. As number of users increased so did cost and therefore he had to start asking a small fee starting October 2021 - starting at €4,17 per month.

**Benefits**

* Du kannst Nightscout mit ein paar Klicks einrichten und direkt verwenden. 
* Deutlich weniger manueller Aufwand, da Martin versucht, die Administration so weit als möglich zu automatisieren.
* Alle Einstellungen können über eine benutzerfreundliche Web-Oberfläche vorgenommen werden. 
* Eine automatisierte Basalratenüberprüfung mit Autotune ist ebenfalls enthalten. 
* Die Server befinden sich in Deutschland und Finnland.

<https://ns.10be.de/en/index.html>

An alternative would be <https://t1pal.com/> - starting at $11,99 per month.