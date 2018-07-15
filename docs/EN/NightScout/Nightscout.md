# Nightscout setup

It is assumed you already have a Nightscout site, if not visit the [Nightscout](http://www.nightscout.info/wiki/welcome/set-up-nightscout-using-heroku) page for full instructions on set up, the instructions below are then settings you will also need to add to your Nightscout site.  Your Nightscout site needs to be at least version 10, so please check you are running the [latest version](http://www.nightscout.info/wiki/welcome/how-to-update-to-latest-cgm-remote-monitor-aka-cookie) otherwise you will get an error message on your AAPS app.  Some people find looping uses more than the azure free quota allowed, so heroku is the preferred choice.

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

[[https://github.com/MilosKozak/AndroidAPS/wiki/images/nightscout1.png]]

* Click "Save" at the top of the panel.
