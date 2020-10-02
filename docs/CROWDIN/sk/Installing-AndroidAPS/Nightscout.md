# Nightscout

## Security considerations

Besides reporting Nightscout can also be used to control AAPS. I.e. you can set temp targets or add future carbs. This information will be picked up by AAPS and it will act correspondingly. Therefore it is worth thinking about securing your Nightscout website.

### Nightscout settings

You can deny public access to your Nightscout site by using [authentication roles](http://www.nightscout.info/wiki/welcome/website-features/0-9-features/authentication-roles).

### AndroidAPS settings

There is an NS upload only (no sync) function in AAPS settings. By doing so AAPS will not pick up changes done in Nightscout such as temp targets or future carbs. If you are using [NS profile](../Configuration/Config-Builder#ns-profile) the profiles will be synced between AAPS and Nightscout despite the setting "upload only".

* Tap 3-dot menu on top right corner on your AAPS homescreen.
* Select "Preferences".
* Scroll down and tap "Advanced settings".
* Activate "NS upload only

![Nightscout upload only](../images/NSsafety.png)

### Further security settings

Keep your phone up to date as described in [safety first](../Getting-Started/Safety-first.rst).

## Manual Nightscout setup

It is assumed you already have a Nightscout site, if not visit the [Nightscout](http://nightscout.github.io/nightscout/new_user/) page for full instructions on set up, the instructions below are then settings you will also need to add to your Nightscout site. Your Nightscout site needs to be at least version 10 (displayed as 0.10...), so please check you are running the [latest version](http://www.nightscout.info/wiki/welcome/how-to-update-to-latest-cgm-remote-monitor-aka-cookie) otherwise you will get an error message on your AAPS app. Some people find looping uses more than the azure free quota allowed, so heroku is the preferred choice.

* Go to https://herokuapp.com/

* Click your App Service name.

* Click Application settings (azure) or Settings > "Reveal Config Variables (heroku)

* Add or edit the variables as follows:
  
  * `ENABLE` = `careportal boluscalc food bwp cage sage iage iob cob basal ar2 rawbg pushover bgi pump openaps`
  * `DEVICESTATUS_ADVANCED` = `true`
  * `PUMP_FIELDS` = `reservoir battery clock`
  * Various alarms can be set for [monitoring the pump](https://github.com/nightscout/cgm-remote-monitor#pump-pump-monitoring), battery % in particular is encouraged: 
    * `PUMP_WARN_BATT_P` = `51`
    * `PUMP_URGENT_BATT_P` = `26` 

![Azure](../../images/nightscout1.png)

* Click "Save" at the top of the panel.

## Semi-automated Nightscout setup

This service is offered by fellow looper Martin Schiftan free of charge at the moment. If you like the service you can consider sending him a small donation (link in the navigation on the left side).

**Benefits**

* You can install Nightscout with a few clicks and use it directly. 
* Reduction of manual work as Martin tries to automate the administration.
* All settings can be made via a user-friendly web interface. 
* The service includes an automated basal rate check using Autotune. 
* The server is located in Germany.

<http://ns.10be.de/en/index.html>