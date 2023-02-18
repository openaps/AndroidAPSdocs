# Nightscout

(Nightscout-security-considerations)=

## Remarques sur la sécurité

Besides reporting Nightscout can also be used to control AAPS. I.e. you can set temp targets or add future carbs. This information will be picked up by AAPS and it will act correspondingly. Therefore it is worth thinking about securing your Nightscout website.

### Paramètres Nightscout

You can deny public access to your Nightscout site by using [authentication roles](https://nightscout.github.io/nightscout/security).

### Paramètres AndroidAPS

There is an NS upload only (no sync) function in AAPS settings. By doing so AAPS will not pick up changes done in Nightscout such as temp targets or future carbs.

* Cliquez sur le menu 3 points en haut à droite de votre page d'accueil AAPS.
* Sélectionnez "Préferences".
* Faites défiler vers le bas et dans la section NSClient, appuyez sur "Paramètres Avancés".
* Activez Remonter uniquement vers NS

![Nightscout upload only](../images/NSsafety.png)

### Autres paramètres de sécurité

Keep your phone up to date as described in [safety first](../Getting-Started/Safety-first.md).

(Nightscout-manual-nightscout-setup)=

## Manuel d'installation Nightscout

It is assumed you already have a Nightscout site, if not visit the [Nightscout](http://nightscout.github.io/nightscout/new_user/) page for full instructions on set up, the instructions below are then settings you will also need to add to your Nightscout site. Your Nightscout site needs to be at least version 10 (displayed as 0.10...), so please check you are running the [latest version](https://nightscout.github.io/update/update/#updating-your-site-to-the-latest-version) otherwise you will get an error message on your AAPS app. Some people find looping uses more than the azure free quota allowed, so heroku is the preferred choice.

* Aller à https://herokuapp.com/

* Cliquez sur le nom de votre Application.

* Cliquez sur Paramètres d'application (azure) ou Paramètres > "Reveal Config Variables (heroku)

* Ajouter ou modifier les variables comme suit :
  
  * `ENABLE` = `careportal boluscalc food bwp cage sage iage iob cob basal ar2 rawbg pushover bgi pump openaps`
  * `DEVICESTATUS_ADVANCED` = `true`
  * `SHOW_FORECAST` = `openaps`
  * `PUMP_FIELDS` = `reservoir battery clock`
  * Diverses alarmes peuvent être définies pour [surveiller la pompe](https://github.com/nightscout/cgm-remote-monitor#pump-pump-monitoring), le pourcetage de pile en particulier est encouragé : 
    * `PUMP_WARN_BATT_P` = `51`
    * `PUMP_URGENT_BATT_P` = `26` 

![Azure](../images/nightscout1.png)

* Cliquez sur "Enregistrer" en haut du panneau.

## Configuration de Nightscout semi-automatisée

Fellow looper Martin Schiftan offered a semi-automated Nightscout setup for many years free of charge. As number of users increased so did cost and therefore he had to start asking a small fee starting October 2021 - starting at €4,17 per month.

**Benefits**

* Vous pouvez installer Nightscout en quelques clics et l'utiliser directement. 
* Réduction du travail manuel car Martin essaye d'automatiser l'administration.
* Tous les réglages peuvent être effectués via une interface web conviviale. 
* Le service comprend une vérification automatique des taux basaux à l'aide d'Autotune. 
* Les serveurs sont situés en Allemagne et en Finlande.

<https://ns.10be.de/en/index.html>

An alternative would be <https://t1pal.com/> - starting at $11,99 per month.