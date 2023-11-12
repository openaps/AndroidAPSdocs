# Nightscout

(Nightscout-security-considerations)=

## Remarques sur la sécurité

En complément des rapports, Nightscout peut également être utilisé pour contrôler AAPS. C'est-à-dire que vous pouvez définir des cibles temporaires ou ajouter des glucides futurs. Ces informations seront recueillies par AAPS qui agira en conséquence. Par conséquent, cela vaut la peine de penser à sécuriser votre site Nightscout.

### Paramètres Nightscout

Vous pouvez interdire l'accès public à votre site Nightscout en utilisant des [rôles d'authentification](https://nightscout.github.io/nightscout/security).

### AAPS settings

Il y a dans les paramètres AAPS une fonction "Remonter uniquement vers NS (sync désactivée)". En l'activant, AAPS ne prendra pas en compte les changement effectués dans Nightscout comme les cibles temp. ou les glucides renseignés.

* Cliquez sur le menu 3 points en haut à droite de votre page d'accueil AAPS.
* Sélectionnez "Préferences".
* Faites défiler vers le bas et dans la section NSClient, appuyez sur "Paramètres Avancés".
* Activez Remonter uniquement vers NS

![Remonter uniquement vers NS](../images/NSsafety.png)

### Autres paramètres de sécurité

Gardez votre téléphone à jour comme c'est décrit dans [La sécurité avant tout](../Getting-Started/Safety-first.md).

(Nightscout-manual-nightscout-setup)=

## Manuel d'installation Nightscout

Il est supposé que vous avez déjà un site Nightscout. Si ce n'est pas le cas, rendez-vous sur la page [Nightscout](http://nightscout.github.io/nightscout/new_user/) pour des instructions complètes sur la configuration. Les instructions ci-dessous sont alors les paramètres que vous devrez également ajouter à votre site Nightscout. Votre site Nightscout doit être au moins la version 10 (affichée comme 0.10...), donc vérifiez que vous utilisez bien la [dernière version](https://nightscout.github.io/update/update/#updating-your-site-to-the-latest-version) sinon vous recevrez un message d'erreur sur votre application AAPS. Certaines personnes trouvent que la boucle utilise plus que le quota gratuit d'azure, donc heroku est le choix à privilégier.

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

## Nightscout as a paid SaaS (Software as a Service)

While Nightscout is an free open source software which you can download yourself free of charge you need

1. a cloud service provider to host your own Nightscout instance

2. invest time to setup your Nightscout instance and MongoDB and

3. operate your Nightscout instance which can be as easy as updating from time to time the Nightscout instance or much more complex if errors occur.

An alternative can be to pay for these SaaS services and get rid of these tasks.

Here you find a randomly ordered list of possible service providers. We will not recommend any of them but we want to give new users a place to jump to their web site and inform themself!

[![ns.10be.de](../images/ns.10be.de-logo_halb_klein.jpg)](https://ns.10be.de/en/index.html)

[![T1Pal](../images/t1_pal_bear_bw.png)](https://t1pal.com/)