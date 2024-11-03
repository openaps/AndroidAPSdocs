# Nightscout

(Nightscout-security-considerations)=

## Security considerations

Besides reporting Nightscout can also be used to control AAPS. I.e. you can set temp targets or add future carbs. This information will be picked up by AAPS and it will act correspondingly. Therefore it is worth thinking about securing your Nightscout website.

Exercise maximum caution if using Nightscout as your AAPS data source.

### Nightscout settings

You can deny public access to your Nightscout site by using [authentication roles](https://nightscout.github.io/nightscout/security): make sure you only share your URL with a `readable` token, never with an `admin` token.

Nightscout `API_SECRET` is your site main password: don't share it publicly.

(Nightscout-aaps-settings)=

### AAPS settings

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

### Further security settings

Keep your phone up to date as described in [safety first](#preparing-safety-first).

(Nightscout-manual-nightscout-setup)=

## Manual Nightscout setup

It is assumed you already have a Nightscout site, if not visit the [Nightscout](http://nightscout.github.io/nightscout/new_user/) page for full instructions on set up, the instructions below are then settings you will also need to add to your Nightscout site. Your Nightscout site needs to be at least version 15 for AAPS 3.2, so please check you are running the [latest version](https://nightscout.github.io/update/update/#updating-your-site-to-the-latest-version) otherwise you will get an error message on your AAPS app.

* [Edit your variables](https://nightscout.github.io/nightscout/setup_variables/#nightscout-configuration)

* Dodaj lub edytuj zmienne w następujący sposób:
  
  * `ENABLE` = `careportal boluscalc food bwp cage sage iage iob cob basal dbsize pushover pump openaps`
  * `DEVICESTATUS_ADVANCED` = `true`
  * `SHOW_FORECAST` = `openaps`
  * `PUMP_FIELDS` = `reservoir battery clock`
  * Various alarms can be set for [monitoring the pump](https://github.com/nightscout/cgm-remote-monitor#pump-pump-monitoring), battery % in particular is encouraged: 
    * `PUMP_WARN_BATT_P` = `51`
    * `PUMP_URGENT_BATT_P` = `26` 

* Save the modifications. Your Nightscout site should now allow you to display the pills. You can force default display adding them in `SHOW_PLUGINS`.
  
  * `SHOW_PLUGINS` = `careportal boluscalc food bwp cage sage iage iob cob basal dbsize pushover pump openaps`
  
  ![Nightscout Pills](../images/nightscout1.png)

## Nightscout as a paid SaaS (Software as a Service)

Use the vendor web interface to set the variables. Contact the vendor support service if necessary.