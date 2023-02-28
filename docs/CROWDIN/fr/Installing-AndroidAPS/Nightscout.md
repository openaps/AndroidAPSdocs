# Nightscout

(Nightscout-security-considerations)=

## Remarques sur la sécurité

En complément des rapports, Nightscout peut également être utilisé pour contrôler AAPS. C'est-à-dire que vous pouvez définir des cibles temporaires ou ajouter des glucides futurs. Ces informations seront recueillies par AAPS qui agira en conséquence. Par conséquent, cela vaut la peine de penser à sécuriser votre site Nightscout.

### Paramètres Nightscout

Vous pouvez interdire l'accès public à votre site Nightscout en utilisant des [rôles d'authentification](https://nightscout.github.io/nightscout/security).

### Paramètres AndroidAPS

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

## Configuration de Nightscout semi-automatisée

Le cofondateur Martin Schiftan a offert gratuitement une installation de Nightscout semi-automatisée pendant de nombreuses années. Comme le nombre d'utilisateurs a augmenté de façon importante, il a dû commencer à demander une petite participation à partir d'octobre 2021 - à partir de €4, 7 par mois.

**Avantages**

* Vous pouvez installer Nightscout en quelques clics et l'utiliser directement. 
* Réduction du travail manuel car Martin essaye d'automatiser l'administration.
* Tous les réglages peuvent être effectués via une interface web conviviale. 
* Le service comprend une vérification automatique des taux basaux à l'aide d'Autotune. 
* Les serveurs sont situés en Allemagne et en Finlande.

<https://ns.10be.de/en/index.html>

Une alternative est <https://t1pal.com/> - à partir de 11,99$ par mois.