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

* Les voyants d'état donnent un avertissement visuel pour un niveau de réservoir faible et de batterie ainsi qu'un changement de site en retard. La version étendue indique le temps écoulé / le pourcentage de la batterie.
    
    ![Voyants d'état - détail](../images/StatusLights_V2_5.png)
    
    Les paramètres des voyants d'état doivent être définis dans les paramètres Nightscout. Définir les variables suivantes :
    
    * Cannula age: CAGE_WARN and CAGE_URGENT (standard 48 and 72 hours)
    * Insulin age (reservoir): IAGE_WARN and IAGE_URGENT (standard 72 and 96 hours)
    * Sensor age: SAGE_WARN and SAGE_URGENT (standard 164 and 166 hours)
    * Battery age: BAGE_WARN and BAGE_URGENT (standard 240 and 360 hours)

* Seuils pour le niveau d'alerte du réservoir et le niveau critique du réservoir.

* Seuils pour le niveau d'alerte de la pile et le niveau critique de la pile.

## Sécurités des traitements

### Maximum Bolus autorisé [U]

C’est la quantité maximale d’insuline en bolus que AAPS est autorisé à administrer. Ce paramètre existe comme une limite de sécurité pour empêcher l'administration d’un bolus trop important dû à une saisie accidentelle ou une erreur de l’utilisateur. Il est recommandé de définir cette valeur à un montant raisonnable qui correspond approximativement à la quantité maximale d’insuline de bolus que vous êtes susceptible d’avoir besoin pour un repas ou pour une dose de correction. Cette restriction s’applique également aux résultats de la Calculatrice de Bolus.

### Maximum de Glucides autorisé [g]

Il s’agit de la quantité maximale de Glucides que la Calculatrice de Bolus AAPS est autorisée à doser. Ce paramètre existe comme une limite de sécurité pour empêcher l'administration d’un bolus trop important dû à une saisie accidentelle ou une erreur de l’utilisateur. Il est recommandé de définir cette valeur à un montant raisonnable qui correspond approximativement à la quantité maximale de glucides que vous êtes susceptible d’avoir dans d'un repas.

## Boucle

Vous pouvez alterner entre Boucle Ouverte et Boucle Fermée. Open looping means TBR suggestions are made based on your data and appear as a notification, but you must manually choose to accept them and manually enter them into your pump. Closed looping means TBR suggestions are automatically sent to your pump without confirmation or input from you. L’écran d’accueil affiche dans le coin supérieur gauche si vous êtes en Boucle Ouverte ou en Boucle Fermée. Appuyer et maintenir ce bouton de l’écran d’accueil vous permettra également de basculer entre les deux.

## OpenAPS AMA

OpenAPS Advanced Meal Assist (AMA) allows the system to high-temp more quickly after a meal bolus IF you enter carbs reliably. Turn it on in the Config tab to view the safety settings here, you will need to have completed [Objective 9](../Usage/Objectives#objective-9-enabling-additional-oref0-features-for-daytime-use-such-as-advanced-meal-assist-ama) to use this feature. Vous pouvez apprendre plus sur les Paramètres et [Autosens dans le manuel d'OpenAPS](http://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autosens.html).

### Max. U/hr pour le débit de basal temp

Ce paramètre existe comme une limite de sécurité pour empêcher AAPS d'être capable d'administrer un dosage Basal dangereusement élevé. La valeur est definie en Unités d'insuline par heure (U/h). Il est conseillé de definir cette valuer de facon raisonnable et sensée. Une bonne recommandation est de prendre le **plus haut dosage Basal** de votre profil et de le **multiplier par 4**. Par exemple, si le dosage basal le plus élevé dans votre profil a été 0.5 U/hr, vous qui pourriez le multiplier par 4 pour obtenir la valeur de 2 U/h.

### L'IA basal maximum que l'OpenAPS pourra délivrer [U]

Une quantité d'insuline basale supplémentaire (en unités) a pu s'accumuler dans votre corps, en plus de votre profil basal normal. Une fois cette valeur atteinte, AAPS cessera de délivrer de l'insuline basale supplémentaire jusqu'à ce que votre Insuline basale Active (IA) aie diminuée et soit de nouveau dans cette plage.

* Cette valeur ne prend pas en compte pas l'Insuline Active IA des bolus, mais seulement la Basale.
* Cette valeur est calculée et surveillée indépendamment de votre débit de basal normal. Ce n'est que l'insuline basale additionnelle en plus du débit normal qui est pris en compte.
* Cette valeur est mesurée en unités d'insuline (u).

Lorsque vous commencez à boucler, **il est conseillé de mettre l'IA basal Max à 0** pour une période de temps, pendant que vous vous habituez au système. Cela empêche AAPS de donner de l'insuline basale supplémentaire. Pendant ce temps, AAPS sera toujours en mesure de limiter ou de désactiver votre insuline basale pour prévenir l'hypoglycémie.

C'est une étape importante pour :

* Avoir un certain temps pour s'habituer en toute sécurité au système AAPS et surveiller son fonctionnement.
* Profiter de l'occasion pour parfaire votre profil basal et votre Sensibilité à l'Insulin (SI).
* Voir comment AAPS limite votre insuline basale pour prévenir l'hypoglycémie.

Lorsque vous vous sentez à l'aise, vous pouvez autoriser le système à commencer à vous donner de l'insuline basale supplémentaire, en augmentant la valeur de l'IA basal Max. The recommended guideline for this is to take the **highest basal rate** in your profile and **multiply it by 3**. For example, if the highest basal rate in your profile was 0.5u/hr you could multiply that by 3 to get a value of 1.5u.

* You can start conservatively with this value and increase it slowly over time. 
* These are guidelines only; everyone's body is different. You may find you need more or less than what is recommended here, but always start conservatively and adjust slowly.

*Note: As a safety feature, Max Basal IOB is hard-limited to 7u.*

## Paramètres d’absorption

If you have selected to use AMA Autosens then you will be able to enter your maximum meal absorption time and how frequently you want autosense to refresh. If you often eat high fat or protein meals you will need to increase your meal absorption time.

## Paramètres de la pompe

Les options ici varient selon le pilote de pompe que vous avez sélectionné dans 'Générateur de configuration'. Appairez et réglez votre pompe selon les instructions relatives à la pompe :

* [Pompe à insuline DanaR](../Configuration/DanaR-Insulin-Pump.md) 
* [Pompe à insuline DanaRS](../Configuration/DanaRS-Insulin-Pump.md) 
* [Pompe Accu-Chek Combo](../Configuration/Accu-Chek-Combo-Pump.md) 
* [Pompe Medtronic](..//Configuration/MedtronicPump.md)

Si vous utilisez AndroidAPS pour une boucle ouverte, vérifiez que vous avez sélectionné Pompe virtuelle Pump dans le Générateur de configuration.

## NS Client

* Définissez ici votre 'URL Nightscout' (https://yourwebsitename.herokuapp.com ou https://yourwebsitename.azurewebsites.net), et votre "NS API Secret" (un mot de passe de 12 caractères enregistré dans vos variables heroku ou azure). Cela permet de lire et d'écrire des données entre le site Nightscout et AndroidAPS. Vérifiez deux fois les fautes de frappe ici si vous êtes coincé dans l'objectif 1.
* **Vérifiez bien que l'URL est SANS /api/v1/ à la fin.**
    
    ![URL de NSClient](../images/NSClientURL.png)

* 'Log app start to nightscout' will record a note in your careportal entries every time the app is started. L'application ne devrait pas avoir besoin de démarrer plus d'une fois par jour; si c'est plus souvent, cela suggère un problème.

* 'Options d'alarme' vous permet de sélectionner les alarmes de Nightscout à utiliser par défaut dans l'application. Pour que les alarmes sonnent, vous devez définir les valeurs d'alerte Haute urgent, Haute, Basse et Basse urgent dans vos variables [heroku ou azure](http://www.nightscout.info/wiki/welcome/website-features#customalarms). Elles ne fonctionneront que si vous êtes connecté à nightscout et sont destinées aux parents/tuteurs. Si vous avez la source MGC sur votre téléphone, utilisez ces alarmes à la place (par exemple xdrip+).
* 'Activer les transmissions locales' partagera vos données Careportal vers d'autres applications sur le téléphone, telles que xdrip.
* 'Utiliser toujours les valeurs absolues du basal' doit être activé si vous souhaitez utiliser Autotune correctement.

## Communicateur SMS

Ce paramètre permet de contrôler à distance de l'application en envoyant des instructions au téléphone du patient que l'application appliquera comme Suspendre la boucle ou un bolus. Further information is described in [SMS Commands](../Children/SMS-Commands.rst) but it will only display in Preferences if you have selected this option in the Config Builder.

## Autres

* You can set defaults for your temp targets here for the different types of temp target (eating soon and activity). When you select a temp target and then choose, for example, "Eating Soon" from the drop down box, it will automatically populate the duration and value for you based on the figures you provided here. For more information on use of Temp Targets see [OpenAPS features](../Usage/Open-APS-features.md). 
* You can set default prime amounts - this will prime the pump the value specified and this insulin is counted as used from the reservoir but not counted in IOB calculations. See the instruction booklet in your cannula box for how many units should be primed depending on needle length and tubing length.
* You can change the display on the homescreen and watch for the values that are in range. Note that this is just how the graphs look and doesn't impact on your target or calculations.
* 'Shorten tab titles' allows you to see more tab titles on screen, for example the 'Open APS' tab becomes 'OAPS', 'Objectives' becomes 'Obj' etc.
* 'Local Alerts' lets you decide if you receive a warning and after how long for not receiving blood glucose values (stale data) or the pump being unreachable. If you frequently get pump unreachable alerts then enable BT Watchdog in the Advanced Settings.

## Choix de données

* 'Téléchargement Fabric' permet d'envoyer des rapports d'incidents en cas de crash et les données d'utilisation pour les développeurs.