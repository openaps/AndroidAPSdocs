# Nightscout

(Nightscout-security-considerations)=

## Sicherheitsüberlegungen

Neben der Erstellung von Berichten, kann Nightscout auch genutzt werden, um AndroidAPS zu steuern. So kannst Du z.B. temporäre Ziele setzen oder Kohlenhydrate eingeben. Diese Informationen werden von AAPS übernommen, das dann entsprechend reagiert. Daher macht es Sinn, über die Absicherung Deiner Nightscout-Seite nachzudenken.

### Nightscout Einstellungen

Du kannst den allgemeinen Zugriff auf Deine Nightscout-Seite mittels [authentication roles](https://nightscout.github.io/nightscout/security) (Benutzer mit verschiedenen Zugriffsrechten) unterbinden.

### AAPS-Einstellungen

In den AAPS-Einstellungen gibt es eine Funktion, nur Daten zu Nightscout hochzuladen (keine Synchronisierung). Wenn Du diese Funktion wählst, wird AAPS keine Änderungen von Nightscout (z.B. temporäre Ziele oder Kohlenhydrateingaben) übernehmen.

* Tippe oben rechts auf dem Startbildschirm auf das 3-Punkte-Menü.
* Klicke auf "Einstellungen".
* Scrolle nach unten und tippe auf "Erweiterte Einstellungen".
* Wähle "Zu Nightscout nur hochladen (keine Synchronisation)".

![Nightscout nur Daten hochladen](../images/NSsafety.png)

### Weitere Sicherheitseinstellungen

Halte Dein Smartphone aktuell wie es in den [Sicherheitshinweisen](../Getting-Started/Safety-first.md) beschrieben ist.

(Nightscout-manual-nightscout-setup)=

## Manuelles Nightscout-Setup

Wir gehen davon aus, dass du bereits eine Nightscout Seite hast. Falls nicht, gehe zum [Nightscout Wiki](http://nightscout.github.io/nightscout/new_user/). Dort findest du detaillierte Informationen zur Einrichtung. Die unten stehenden Hinweise beziehen sich auf die Einstellungen, die du zusätzlich in deiner Nightscout Seite vornehmen musst. Deine Nightscout Seite muss mindestens unter Version 10 (wird als 0.10... angezeigt) laufen. Prüfe daher, ob Du tatsächlich die [letzte Version](https://nightscout.github.io/update/update/#updating-your-site-to-the-latest-version) verwendest. Andersfalls bekommst Du in der AAPS App eine Fehlermeldung. Manche Looper haben festgestellt, dass durch das Loopen mehr Speicherplatz verbraucht wird, als Azure kostenfrei zur Verfügung stellt. Daher ist Heroku die bessere Wahl.

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

## Nightscout as a paid SaaS (Software as a Service)

While Nightscout is an free open source software which you can download yourself free of charge you need

1. a cloud service provider to host your own nightscout instance

2. invest time to setup your nightscout instance and MongoDB and

3. operate your nightscout instance which can be as easy as updating from time to time the nightscout instance or much more complex if errors occur.

An alternative can be to pay for these SaaS services and get rid of these tasks.

Here you find a randomly ordered list of possible service providers. We will not recommend any of them but we want to give new users a place to jump to their web site and inform themself!

| [![ns.10be.de](../images/ns.10be.de-logo_halb_klein.jpg)](https://ns.10be.de/en/index.html) | [![T1Pal](../images/t1_pal_bear_bw.png)](https://t1pal.com/) |