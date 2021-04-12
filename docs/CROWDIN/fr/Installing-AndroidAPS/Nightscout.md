# Nightscout

## Remarques sur la sécurité

En complément des rapports, Nightscout peut également être utilisé pour contrôler AAPS. C'est-à-dire que vous pouvez définir des cibles temporaires ou ajouter des glucides futurs. Ces informations seront recueillies par AAPS qui agira en conséquence. Par conséquent, cela vaut la peine de penser à sécuriser votre site Nightscout.

### Paramètres Nightscout

Vous pouvez interdire l'accès public à votre site Nightscout en utilisant des [rôles d'authentification](https://nightscout.github.io/nightscout/security).

### Paramètres AndroidAPS

Il y a dans les paramètres AAPS une fonction "Remonter uniquement vers NS (sync désactivée)". En l'activant, AAPS ne prendra pas en compte les changement effectués dans Nightscout comme les cibles temp. ou les glucides renseignés. Si vous utilisez les [Profils NS](../Configuration/Config-Builder#profil-ns), les profils seront synchronisés entre AAPS et Nightscout malgré le paramètre "Remonter uniquement vers NS".

* Cliquez sur le menu 3 points en haut à droite de votre page d'accueil AAPS.
* Sélectionnez "Préferences".
* Faites défiler vers le bas et dans la section NSClient, appuyez sur "Paramètres Avancés".
* Activez Remonter uniquement vers NS

![Remonter uniquement vers NS](../images/NSsafety.png)

### Autres paramètres de sécurité

Gardez votre téléphone à jour comme c'est décrit dans [La sécurité avant tout](../Getting-Started/Safety-first.rst).

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

Ce service est offert gratuitement par Martin Schiftan, un utilisateur de la boucle fermée. Si vous aimez le service, vous pouvez envisager de lui envoyer un petit don (lien dans la navigation sur le côté gauche).

**Avantages**

* Vous pouvez installer Nightscout en quelques clics et l'utiliser directement. 
* Réduction du travail manuel car Martin essaye d'automatiser l'administration.
* Tous les réglages peuvent être effectués via une interface web conviviale. 
* Le service comprend une vérification automatique des taux basaux à l'aide d'Autotune. 
* Le serveur est situé en Allemagne.

<https://ns.10be.de/en/index.html>