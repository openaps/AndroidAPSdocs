# Préférences

Ouvrir les préférences en cliquant sur les trois points de menu en haut à droite de l'écran d'accueil :

![Comment ouvrir les préférences](../images/PreferencesOpen.png)

## Mot de passe pour paramètres

Cela vous permet de définir un mot de passe afin d’empêcher toute modification accidentelle ou non autorisée de la section Préférences. Après avoir enregistré un mot de passe, vous devrez l'entrer de nouveau pour accéder aux Préférences. Pour supprimer l’option de mot de passe. en étant dans Préférences , effacer le texte dans le champs du mot de passe.

## Age du patient

Il existe des limites de sécurité en fonction de l'âge que vous avez sélectionné dans ce paramètre. Si vous commencez à atteindre ces limites restrictives (comme le Maximum Bolus), il est temps de changer d’un cran. C’est une mauvaise idée de selectionner un âge supérieur a l'âge réel car cela peut conduire à un surdosage lorsque l'on entre une valeur incorrecte dans la boîte de dialogue de l’insuline (en oubliant le point décimal ou la virgule par exemple). Si vous voulez connaître les valeurs réelles de ces limites de sécurité codées en dur, faites défiler jusqu'à l'algorithme que vous utilisez sur [cette page](../Usage/Open-APS-features.md).

## Généralités

* Sélectionnez votre langue. Si votre langue n’est pas disponible, ou si certains mots ne sont pas traduits alors n’hésitez pas à faire quelques suggestions sur [Crowdin](https://crowdin.com/project/androidaps) ou poser des questions sur la chat room [gitter](https://gitter.im/MilosKozak/AndroidAPS).

## Aperçu

* Garder l'écran allumé est utile pendant que vous faites une présentation. Cela consomme beaucoup d'énergie, il est donc prudent de brancher votre téléphone sur un chargeur.
* Boutons vous permet de choisir quels boutons sont visibles sur votre écran d'accueil. Vous avez également quelques options des fenêtres contextuelles que vous verrez après avoir appuyé sur un bouton.
* Les paramètres de l’Assistant Rapide vous permettent d’ajouter un bouton rapide pour un goûter fréquent ou un repas, entrez votre choix de Glucides, sur l’écran d’accueil si vous cliquez sur le bouton Assistant rapide, il calculera et adminitrera le bolus pour ces glucides basé sur vos ratios actuels (en tenant compte de la valeur de glycémie ou de l'insuline encore active si c'est le cas).

### Paramètres Avancés

![Préférences - Aperçu - Paramètres avancés](../images/PreferencesOverviewAdvanced_V2_5.png)

* Paramètre général permettant de ne livrer qu'une partie du résultat de l'assistant de bolus. Seul le pourcentage défini (doit être compris entre 10 et 100) du bolus calculé est délivré lors de l'utilisation de l'assistant bolus. Le pourcentage est affiché dans l'assistant de bolus.
    
    ![Assistant de Bolus 80%](../images/BolusWizardPartDelivery.png)

* Option to enable [superbolus](../Getting-Started/Screenshots#section-h) in bolus wizard.

### Voyants d'état

* Les voyants d'état donnent un avertissement visuel pour un niveau de réservoir faible et de batterie ainsi qu'un changement de site en retard. La version étendue indique le temps écoulé / le pourcentage de la batterie.
    
    ![Voyants d'état - détail](../images/StatusLights_V2_5.png)
    
    Les paramètres des voyants d'état doivent être définis dans les paramètres Nightscout. Définir les variables suivantes :
    
    * Age canule : CAGE_WARN et CAGE_URGENT (standard 48 et 72 heures)
    * Age insuline (réservoir) : IAGE_WARN et IAGE_URGENT (standard 72 et 96 heures)
    * Age du capteur : SAGE_WARN et SAGE_URGENT (standard 164 et 166 heures)
    * Age pile : BAGE_WARN et BAGE_URGENT (standard 240 et 360 heures)

* Seuils pour le niveau d'alerte du réservoir et le niveau critique du réservoir.

* Seuils pour le niveau d'alerte de la pile et le niveau critique de la pile.

## Sécurités des traitements

### Maximum Bolus autorisé [U]

C’est la quantité maximale d’insuline en bolus que AAPS est autorisé à administrer. Ce paramètre existe comme une limite de sécurité pour empêcher l'administration d’un bolus trop important dû à une saisie accidentelle ou une erreur de l’utilisateur. Il est recommandé de définir cette valeur à un montant raisonnable qui correspond approximativement à la quantité maximale d’insuline de bolus que vous êtes susceptible d’avoir besoin pour un repas ou pour une dose de correction. Cette restriction s’applique également aux résultats de la Calculatrice de Bolus.

### Maximum de Glucides autorisé [g]

Il s’agit de la quantité maximale de Glucides que la Calculatrice de Bolus AAPS est autorisée à doser. Ce paramètre existe comme une limite de sécurité pour empêcher l'administration d’un bolus trop important dû à une saisie accidentelle ou une erreur de l’utilisateur. Il est recommandé de définir cette valeur à un montant raisonnable qui correspond approximativement à la quantité maximale de glucides que vous êtes susceptible d’avoir dans d'un repas.

## Boucle

Vous pouvez alterner entre Boucle Ouverte et Boucle Fermée.

**Boucle Ouverte** signifie que des propositions de DBT sont effectuées sur la base de vos données et apparaissent en tant que notifications, mais vous devez choisir de les accepter et de les rentrer manuellement dans votre pompe.

**Boucle Fermée** signifie que les propositions de DBT sont automatiquement envoyées à la pompe sans confirmation ou action de votre part.

L’écran d’accueil affiche dans le coin supérieur gauche si vous etes en Boucle Ouverte ou en Boucle Fermée. Appuyer et en maintenir ce bouton de l’écran d’accueil vous permettra également de basculer entre les deux modes.

### Changement minimum

Lorsque vous utilisez le mode boucle ouverte, vous recevrez des notifications chaque fois que le programme AAPS vous recommande d'ajuster le débit de basal. Pour réduire le nombre de notifications, vous pouvez utiliser une plage cible de glycémie plus étendue ou augmenter le pourcentage de changement minimal. Ce paramètre défini le changement relatif minimum qui déclenchera une notification.

![Changement minimum](../images/MinRequestChange.png)

Remarque : En mode boucle fermée, une cible unique au lieu de la plage cible (par ex. 5,5 mmol au lieu de 5,0 - 7,0 mmol) est recommandée.

## OpenAPS AMA

L'Assistance Améliorée Repas (AAR) de OpenAPS permet au système de reagir plus rapidement après un bolus de repas SI vous entrez les Glucides de manière fiable. Activez-le dans le Générateur de configuration pour voir les paramètres de sécurité, vous devrez avoir complété l'[Objectif 9](../Usage/Objectives#objectif-9-activation-de-fonctionnalites-supplementaires-en-journee-comme-l-aide-au-repas-amelioree-ara-ama) pour utiliser cette fonctionnalité. Vous pouvez en apprendre plus sur les Paramètres et l'Autosens dans le [manuel d'OpenAPS](http://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autosens.html).

### Max U/h pour le débit de Basal Temp

Ce paramètre est une limite de sécurité pour empêcher AAPS d'administrer un débit de basal dangereusement élevé. La valeur est definie en Unités d'insuline par heure (U/h). Il est conseillé de definir cette valeur de facon raisonnable et sensée. Une bonne recommandation est de prendre le **débit de basal le plus élevé** de votre profil et de le **multiplier par 4**. Par exemple, si le dosage basal le plus élevé de votre profil est de 0,5 U/h, vous pourriez le multiplier par 4 pour obtenir la valeur de 2 U/h.

### IA Basal max que OpenAPS pourra délivrer [U]

Une quantité d'insuline basale supplémentaire (en unités) a pu s'accumuler dans votre corps, en plus de votre profil de basal normal. Une fois cette valeur atteinte, AAPS cessera de délivrer de l'insuline basale supplémentaire jusqu'à ce que votre Insuline Active Basal (IA) aie diminuée et soit de nouveau sous ce seuil.

* Cette valeur ne prend pas en compte pas l'Insuline Active IA des bolus, mais seulement la Basal.
* Cette valeur est calculée et surveillée indépendamment de votre débit de basal normal. Ce n'est que l'insuline basale additionnelle en plus du débit normal qui est pris en compte.
* Cette valeur est mesurée en unités d'insuline (u).

Lorsque vous commencez à boucler, **il est conseillé de mettre l'IA Basal Max à 0** pour une certaine durée, le temps que vous vous habituiez au système. Cela empêche AAPS de donner de l'insuline basale supplémentaire. Pendant ce temps, AAPS sera toujours en mesure de limiter ou de désactiver votre insuline basale pour prévenir l'hypoglycémie.

C'est une étape importante pour :

* Avoir un certain temps pour s'habituer en toute sécurité au système AAPS et surveiller son fonctionnement.
* Profiter de l'occasion pour parfaire votre profil basal et votre Sensibilité à l'Insulin (SI).
* Voir comment AAPS limite votre insuline basale pour prévenir l'hypoglycémie.

Lorsque vous vous sentez à l'aise, vous pouvez autoriser le système à commencer à vous donner de l'insuline basale supplémentaire, en augmentant la valeur de l'IA basal Max. Une bonne recommandation est de prendre le **débit de basal maximum** de votre profil et de le **multiplier par 3**. Par exemple, si le débit de basal le plus élevé dans votre profil est de 0,5 U/h, vous pourriez le multiplier par 3 pour obtenir la valeur de 1,5 U.

* Vous pouvez commencer prudemment avec cette valeur et l'augmenter lentement avec le temps. 
* Ce ne sont que des lignes directrices; chacun a un corps différent. Vous trouverez peut-être que vous aurez besoin de paramétrer une valeur supérieure ou inférieure à ce qui est recommandé ici, mais commencez toujours prudemment et ajustez lentement.

*Remarque : En tant que fonction de sécurité, l'IA Basal Max est limitée à 7 U.*

## Paramètres d’absorption

Si vous avez choisi d'utiliser l'Autosense AMA, vous pourrez alors entrer votre durée macimale d'absorption pour un repas et la fréquence de rafraîchissement de l'autosense. Si vous mangez souvent des repas riches en matières grasses ou en protéines, vous devrez augmenter votre temps d'absorption des repas.

## Paramètres de la pompe

Ici les options varient selon la pompe que vous avez sélectionnée dans le 'Générateur de configuration'. Appairez et réglez votre pompe selon les instructions relatives à la pompe :

* [Pompe à insuline DanaR](../Configuration/DanaR-Insulin-Pump.md) 
* [Pompe à insuline DanaRS](../Configuration/DanaRS-Insulin-Pump.md) 
* [Pompe Accu-Chek Combo](../Configuration/Accu-Chek-Combo-Pump.md) 
* [Pompe Accu-Chek Insight](../Configuration/Accu-Chek-Insight-Pump.md) 
* [Pompe Medtronic](..//Configuration/MedtronicPump.md)

Si vous utilisez AndroidAPS en mode boucle ouverte, vérifiez que vous avez sélectionné une Pompe Virtuelle dans le Générateur de configuration.

## NS Client

* Définissez ici votre 'URL Nightscout' (https://yourwebsitename.herokuapp.com ou https://yourwebsitename.azurewebsites.net), et votre "API Secret NS" (un mot de passe de 12 caractères enregistré dans vos variables heroku ou azure). Cela permet de lire et d'écrire des données entre le site Nightscout et AndroidAPS. Vérifiez deux fois les fautes de frappe à cet endroit si vous êtes coincé dans l'objectif 1.
* **Vérifiez bien que l'URL est SANS /api/v1/ à la fin.**
    
    ![URL de NSClient](../images/NSClientURL.png)

* 'Log app start to nightscout' enregistre une note dans Careportal à chaque démarrage de l'application. L'application ne devrait pas avoir besoin de démarrer plus d'une fois par jour; si c'est plus souvent, cela suggère un problème.

* 'Options d'alarme' vous permet de sélectionner les alarmes de Nightscout à utiliser par défaut dans l'application. Pour que les alarmes sonnent, vous devez définir les valeurs d'alerte Haute urgent, Haute, Basse et Basse urgent dans vos variables [heroku ou azure](http://www.nightscout.info/wiki/welcome/website-features#customalarms). Elles ne fonctionneront que si vous êtes connecté à nightscout et sont destinées aux parents/tuteurs. Si vous avez la source MGC sur votre téléphone, utilisez ces alarmes à la place (par exemple xdrip+).
* 'Activer les transmissions locales' partagera vos données Careportal vers d'autres applications sur le téléphone, telles que xdrip.
* 'Utiliser toujours les valeurs absolues du basal' doit être activé si vous souhaitez utiliser Autotune correctement.
    
    **Ne pas activer cette fonction si vous utilisez une [pompe Insight](https://androidaps.readthedocs.io/en/latest/EN/Configuration/Accu-Chek-Insight-Pump#settings-in-aaps)!** Cela conduirait à de mauvais réglages DBT dans la pompe Insight.

## Communicateur SMS

Ce paramètre permet de contrôler à distance de l'application en envoyant des instructions au téléphone du patient que l'application appliquera comme Suspendre la boucle ou un bolus. Des informations supplémentaires sont décrites dans [Commandes SMS](../Children/SMS-Commands.rst), mais elles ne s'afficheront dans les Préférences que si vous avez sélectionné cette option dans le Générateur de configuration.

## Autres

* Vous pouvez définir des valeurs par défaut pour vos cibles temporaires à cet endroit pour les différents types de cible temporaire (hypo, repas imminent et activité). Lorsque vous sélectionnez une cible temporaire et que vous choisissez, par exemple, "Repas imminent" dans la liste déroulante, elle renseignera automatiquement la durée et la valeur de votre CT en fonction des valeurs que vous avez paramétrées ici. Pour plus d'informations sur l'utilisation des cibles temporaires, voir [Fonctions OpenAPS](../Usage/Open-APS-features.md). 
* Vous pouvez définir des quantités par défaut pour remplir&amorcer - ceci amorcera la pompe avec la valeur spécifiée et cette insuline sera comptabilisée comme utilisée depuis le réservoir, mais pas dans les calculs de l'IA. Consultez les notices de vos canules et tubulures pour savoir combien d'unités doivent être injectées en fonction de la longueur de l'aiguille et de la longueur de la tubulure.
* Vous pouvez changer dans l'écran d'accueil et sur la montre les plages d'objectifs. Notez que cela ne concerne que la représentation graphique et n'a pas d'impact sur vos cibles ou sur les calculs.
* 'Raccourcir les titres des onglets' permet de voir plus d'onglets à l'écran, par exemple l'onglet 'OpenAPS' devient 'OAPS', 'Objectifs' devient 'OBJ' etc.
* 'Alertes locales' vous permet de décider si vous recevez un avertissement et après combien de temps pour ne pas recevoir de valeurs de glycémie (données périmées) ou si la pompe n'est pas accessible. Si vous recevez fréquemment des alertes de pompe injoignable, activez le Watchdog BT dans les Paramètres avancés.

## Choix de données

* 'Téléchargement Fabric' permet d'envoyer des rapports d'incidents en cas de crash et les données d'utilisation pour les développeurs.