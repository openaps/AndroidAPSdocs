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

* Option permettant d'activer [superbolus](../Getting-Started/Screenshots#section-a) dans l'assistant de bolus.

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

You can toggle between open and closed looping here.

**Open looping** means TBR suggestions are made based on your data and appear as a notification, but you must manually choose to accept them and manually enter them into your pump.

**Closed looping** means TBR suggestions are automatically sent to your pump without confirmation or input from you.

The homescreen will display in the top left corner whether you are open or closed looping, and pressing and holding this homescreen button will also allow you to toggle between the two.

### Minimal Request Rate

When using open loop you will receive notifications every time AAPS recommends to adjust basal rate. To reduce number of notifications you can either use a wider bg target range or increase percentage of the minimal request rate. This defines the relative change required to trigger a notification.

![Minimal request rate](../images/MinRequestChange.png)

Please note: In closed loop mode a single target instead of range

## OpenAPS AMA

OpenAPS Advanced Meal Assist (AMA) allows the system to high-temp more quickly after a meal bolus IF you enter carbs reliably. Turn it on in the Config tab to view the safety settings here, you will need to have completed [Objective 9](../Usage/Objectives#objective-9-enabling-additional-oref0-features-for-daytime-use-such-as-advanced-meal-assist-ama) to use this feature. You can read more about the settings and [Autosens in the OpenAPS docs](http://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autosens.html).

### Max U/hr a Temp Basal can be set to

This setting exists as a safety limit to prevent AAPS from ever being capable of giving a dangerously high basal rate. The value is measured in units per hour (u/hr). Il est conseillé de definir cette valeur de facon raisonnable et sensée. A good recommendation is to take the **highest basal rate** in your profile and **multiply it by 4**. For example, if the highest basal rate in your profile was 0.5u/hr you could multiply that by 4 to get a value of 2u/hr.

### Maximum basal IOB OpenAPS can deliver [U]

Amount of additional basal insulin (in units) allowed to accumulate in your body, on top of your normal basal profile. Once this value is reached, AAPS will stop giving additional basal insulin until your basal Insulin on Board (IOB) has decayed to within this range again.

* Cette valeur ne prend pas en compte pas l'Insuline Active IA des bolus, mais seulement la Basal.
* Cette valeur est calculée et surveillée indépendamment de votre débit de basal normal. Ce n'est que l'insuline basale additionnelle en plus du débit normal qui est pris en compte.
* Cette valeur est mesurée en unités d'insuline (u).

When you begin looping, **it is advised to set Max Basal IOB to 0** for a period of time, while you are getting used to the system. This prevents AAPS from giving any additional basal insulin at all. During this time AAPS will still be able to limit or turn off your basal insulin to help prevent hypoglycaemia.

This is an important step in order to:

* Avoir un certain temps pour s'habituer en toute sécurité au système AAPS et surveiller son fonctionnement.
* Profiter de l'occasion pour parfaire votre profil basal et votre Sensibilité à l'Insulin (SI).
* Voir comment AAPS limite votre insuline basale pour prévenir l'hypoglycémie.

When you feel comfortable, you can allow the system to start giving you additional basal insulin, by raising the Max Basal IOB value. The recommended guideline for this is to take the **highest basal rate** in your profile and **multiply it by 3**. For example, if the highest basal rate in your profile was 0.5u/hr you could multiply that by 3 to get a value of 1.5u.

* Vous pouvez commencer prudemment avec cette valeur et l'augmenter lentement avec le temps. 
* Ce ne sont que des lignes directrices; chacun a un corps différent. Vous trouverez peut-être que vous aurez besoin de paramétrer une valeur supérieure ou inférieure à ce qui est recommandé ici, mais commencez toujours prudemment et ajustez lentement.

*Note: As a safety feature, Max Basal IOB is hard-limited to 7u.*

## Paramètres d’absorption

If you have selected to use AMA Autosens then you will be able to enter your maximum meal absorption time and how frequently you want autosense to refresh. If you often eat high fat or protein meals you will need to increase your meal absorption time.

## Paramètres de la pompe

The options here will vary depending on which pump driver you have selected in 'Config Builder'. Pair and set your pump up according to the pump related instructions:

* [Pompe à insuline DanaR](../Configuration/DanaR-Insulin-Pump.md) 
* [Pompe à insuline DanaRS](../Configuration/DanaRS-Insulin-Pump.md) 
* [Pompe Accu-Chek Combo](../Configuration/Accu-Chek-Combo-Pump.md) 
* [Pompe Accu-Chek Insight](../Configuration/Accu-Chek-Insight-Pump.md) 
* [Pompe Medtronic](..//Configuration/MedtronicPump.md)

If using AndroidAPS to open loop then make sure you have selected Virtual Pump in config builder.

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

This setting allows remote control of the app by texting instructions to the patients phone which the app will follow such as suspending loop, or bolusing. Further information is described in [SMS Commands](../Children/SMS-Commands.rst) but it will only display in Preferences if you have selected this option in the Config Builder.

## Autres

* Vous pouvez définir des valeurs par défaut pour vos cibles temporaires à cet endroit pour les différents types de cible temporaire (hypo, repas imminent et activité). Lorsque vous sélectionnez une cible temporaire et que vous choisissez, par exemple, "Repas imminent" dans la liste déroulante, elle renseignera automatiquement la durée et la valeur de votre CT en fonction des valeurs que vous avez paramétrées ici. Pour plus d'informations sur l'utilisation des cibles temporaires, voir [Fonctions OpenAPS](../Usage/Open-APS-features.md). 
* Vous pouvez définir des quantités par défaut pour remplir&amorcer - ceci amorcera la pompe avec la valeur spécifiée et cette insuline sera comptabilisée comme utilisée depuis le réservoir, mais pas dans les calculs de l'IA. Consultez les notices de vos canules et tubulures pour savoir combien d'unités doivent être injectées en fonction de la longueur de l'aiguille et de la longueur de la tubulure.
* Vous pouvez changer dans l'écran d'accueil et sur la montre les plages d'objectifs. Notez que cela ne concerne que la représentation graphique et n'a pas d'impact sur vos cibles ou sur les calculs.
* 'Raccourcir les titres des onglets' permet de voir plus d'onglets à l'écran, par exemple l'onglet 'OpenAPS' devient 'OAPS', 'Objectifs' devient 'OBJ' etc.
* 'Alertes locales' vous permet de décider si vous recevez un avertissement et après combien de temps pour ne pas recevoir de valeurs de glycémie (données périmées) ou si la pompe n'est pas accessible. Si vous recevez fréquemment des alertes de pompe injoignable, activez le Watchdog BT dans les Paramètres avancés.

## Choix de données

* 'Téléchargement Fabric' permet d'envoyer des rapports d'incidents en cas de crash et les données d'utilisation pour les développeurs.