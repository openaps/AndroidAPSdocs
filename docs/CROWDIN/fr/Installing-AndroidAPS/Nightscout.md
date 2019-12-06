# Nightscout

## Security considerations

Besides reporting Nightscout can also be used to control AAPS. I.e. you can set temp targets or add future carbs. This information will be picked up by AAPS and it will act correspondingly. Therefore it is worth thinking about securing your Nightscout website.

### Paramètres Nightscout

You can deny public access to your Nightscout site by using [authentication roles](http://www.nightscout.info/wiki/welcome/website-features/0-9-features/authentication-roles).

### Paramètres AndroidAPS

There is an NS upload only (no sync) function in AAPS settings. By doing so AAPS will not pick up changes done in Nightscout such as temp targets or future carbs. If you are using [NS profile](../Configuration/Config-Builder#ns-profile) the profiles will be synced between AAPS and Nightscout despite the setting "upload only".

* Tap 3-dot menu on top right corner on your AAPS homescreen.
* Select "Preferences".
* Scroll down and tap "Advanced settings".
* Activate "NS upload only

![Nightscout upload only](../images/NSsafety.png)

### Further security settings

Keep your phone up to date as described in [safety first](../Getting-Started/Safety-first.rst).

## Manual Nightscout setup

Nous supposons que vous avez déjà un site Nightscout. Si ce n'est pas le cas, rendez-vous sur la page [Nightscout](http://www.nightscout.info/wiki/welcome/set-up-nightscout-using-heroku) pour suivre les instructions complètes sur la configuration. Les instructions ci-dessous sont les paramètres que vous devrez également ajouter à votre site Nightscout. Votre site Nightscout doit être au moins à la version 10 (affichée comme 0.10...), donc vérifiez que vous utilisez bien la [dernière version](http://www.nightscout.info/wiki/welcome/how-to-update-to-latest-cgm-remote-monitor-aka-cookie) sinon vous recevrez un message d'erreur sur votre application AAPS. Certaines personnes trouvent que la boucle utilise plus que le quota gratuit d'azure, donc heroku est le choix à privilégier.

* Aller à https://herokuapp.com/

* Cliquez sur le nom de votre Application.

* Cliquez sur Paramètres d'application (azure) ou Paramètres > "Reveal Config Variables (heroku)

* Ajouter ou modifier les variables comme suit :
  
  * `ENABLE` = `careportal boluscalc food bwp cage sage iage iob cob basal ar2 rawbg pushover bgi pump openaps`
  * `DEVICESTATUS_ADVANCED` = `true`
  * `PUMP_FIELDS` = `reservoir battery clock`
  * Diverses alarmes peuvent être définies pour [surveiller la pompe](https://github.com/nightscout/cgm-remote-monitor#pump-pump-monitoring), les alarmes concernant le niveau de batterie en particulier sont encouragées : 
    * `PUMP_WARN_BATT_P` = `51`
    * `PUMP_URGENT_BATT_P` = `26` 
  * Optional: The following 'timers' can be set for the coloring in the AAPS careportal: 
    * `BAGE_WARN` = `480` (Warning after x hours since last Battery Changed Event in Careportal)
  * `BAGE_URGENT` = `504` (Urgent warning after x hours since last Battery Changed Event in Careportal)
  * `CAGE_WARN` = `40` (Warning after x hours since last Cannula Changed Event in Careportal)
  * `CAGE_URGENT` = `48` (Urgent warning after x hours since last Cannula Changed Event in Careportal)
  * `IAGE_WARN` = `144` (Warning after x hours since last Insulin Cartridge Changed Event in Careportal)
  * `IAGE_URGENT` = `192` (Warning after x hours since last Insulin Cartridge Changed Event in Careportal)
  * `SAGE_WARN` = `160` (Warning after x hours since the last CGM Sensor Insert Event in Careportal)
  * `SAGE_URGENT` = `168` (Urgent Warning after x hours since the last CGM Sensor Insert Event in Careportal)

![Azure](../../images/nightscout1.png)

* Cliquez sur "Enregistrer" en haut du panneau.

## Semi-automated Nightscout setup

Ce service est offert gratuitement par Martin Schiftan, un utilisateur de la boucle fermée. If you like the service you can consider sending him a small donation (link in the navigation on the left side).

**Benefits**

* Vous pouvez installer Nightscout en quelques clics et l'utiliser directement. 
* Reduction of manual work as Martin tries to automate the administration.
* Tous les réglages peuvent être effectués via une interface web conviviale. 
* Le service comprend une vérification automatique des taux basaux à l'aide d'Autotune. 
* Le serveur est situé en Allemagne.

<http://ns.10be.de/en/index.html>