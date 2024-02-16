# Nightscout

(Nightscout-security-considerations)=

## Sicherheitsüberlegungen

Neben der Erstellung von Berichten, kann Nightscout auch genutzt werden, um AndroidAPS zu steuern. So kannst Du z.B. temporäre Ziele setzen oder Kohlenhydrate eingeben. Diese Informationen werden von AAPS übernommen, das dann entsprechend reagiert. Daher macht es Sinn, über die Absicherung Deiner Nightscout-Seite nachzudenken.

Exercise maximum caution if using Nightscout as your AAPS data source.

### Nightscout Einstellungen

You can deny public access to your Nightscout site by using [authentication roles](https://nightscout.github.io/nightscout/security): make sure you only share your URL with a `readable` token, never with an `admin` token.

Nightscout `API_SECRET` is your site main password: don't share it publicly.

### AAPS-Einstellungen

You can setup AAPS to accept Nightscout commands (profile changes, treatments, ...), or fully disable it.

* Access the NSClient or NSClientV3 plugin settings with either 1) Main view -> Config Builder -> Synchronization -> NSClient Cog icon 2) NSCLIENT tab -> Three dots menu -> Plugin preferences
* Enable all data upload to Nightscout (3) as this is now the standard method unless your BG data source is Nightscout.  
  If your AAPS BG data source is Nightscout **do not** enable Upload BG data to NS (3).
* Do not enable Receive/backfill data (4) unless Nightscout is your BG data source.

![Nightscout upload only](../images/NSsafety.png)

#### Do not sync from Nightscout

Disabling these options makes sure no Nightscout change will be used by AAPS.

![Nightscout upload only](../images/NSsafety2.png)

#### Accept changes from Nightscout

Enabling these options allow you to remotely change AAPS settings through Nightscout, like profiles modifications and switch, temporary targets and adding carbs that will be taken into account by AAPS.  
Note that insulin treatments will only be used for calculations like "Do not bolus, record only".

![Nightscout upload only](../images/NSsafety3.png)

### Weitere Sicherheitseinstellungen

Halte Dein Smartphone aktuell wie es in den [Sicherheitshinweisen](../Getting-Started/Safety-first.md) beschrieben ist.

(Nightscout-manual-nightscout-setup)=

## Manuelles Nightscout-Setup

Wir gehen davon aus, dass du bereits eine Nightscout Seite hast. Falls nicht, gehe zum [Nightscout Wiki](http://nightscout.github.io/nightscout/new_user/). Dort findest du detaillierte Informationen zur Einrichtung. Die unten stehenden Hinweise beziehen sich auf die Einstellungen, die du zusätzlich in deiner Nightscout Seite vornehmen musst. Your Nightscout site needs to be at least version 15 for AAPS 3.2, so please check you are running the [latest version](https://nightscout.github.io/update/update/#updating-your-site-to-the-latest-version) otherwise you will get an error message on your AAPS app.

* [Edit your variables](https://nightscout.github.io/nightscout/setup_variables/#nightscout-configuration)

* Variablen hinzufügen oder wie folgt ändern:
  
  * `ENABLE` = `careportal boluscalc food bwp cage sage iage iob cob basal dbsize pushover pump openaps`
  * `DEVICESTATUS_ADVANCED` = `true`
  * `SHOW_FORECAST` = `openaps`
  * `PUMP_FIELDS` = `reservoir battery clock`
  * Ein Alarm bei [niedrigem Pumpen-Batteriestand](https://github.com/nightscout/cgm-remote-monitor#pump-pump-monitoring) in % kann wie folgt aktiviert werden: 
    * `PUMP_WARN_BATT_P` = `51`
    * `PUMP_URGENT_BATT_P` = `26` 

* Save the modifications. Your Nightscout site should now allow you to display the pills. You can force default display adding them in `SHOW_PLUGINS`.
  
  * `SHOW_PLUGINS` = `careportal boluscalc food bwp cage sage iage iob cob basal dbsize pushover pump openaps`
  
  ![Nightscout Pills](../images/nightscout1.png)

## Nightscout as a paid SaaS (Software as a Service)

Use the vendor web interface to set the variables. Contact the vendor support service if necessary.