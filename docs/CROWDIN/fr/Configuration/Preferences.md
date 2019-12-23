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

### Status lights

* Status lights give a visual warning for low reservoir and battery level as well as overdue site change. Extended version shows elapsed time / battery percentage.
    
    ![Status lights - detail](../images/StatusLights_V2_5.png)
    
    Settings for status lights must be made in Nightscout settings. Set the following variables:
    
    * Cannula age: CAGE_WARN and CAGE_URGENT (standard 48 and 72 hours)
    * Insulin age (reservoir): IAGE_WARN and IAGE_URGENT (standard 72 and 96 hours)
    * Sensor age: SAGE_WARN and SAGE_URGENT (standard 164 and 166 hours)
    * Battery age: BAGE_WARN and BAGE_URGENT (standard 240 and 360 hours)

* Treshold for warning reservoir level and critical reservoir level.

* Treshold for warning battery level and critical battery level.

## Sécurités des traitements

### Max allowed bolus [U]

C’est la quantité maximale d’insuline en bolus que AAPS est autorisé à administrer. Ce paramètre existe comme une limite de sécurité pour empêcher l'administration d’un bolus trop important dû à une saisie accidentelle ou une erreur de l’utilisateur. Il est recommandé de définir cette valeur à un montant raisonnable qui correspond approximativement à la quantité maximale d’insuline de bolus que vous êtes susceptible d’avoir besoin pour un repas ou pour une dose de correction. Cette restriction s’applique également aux résultats de la Calculatrice de Bolus.

### Max allowed carbs [g]

Il s’agit de la quantité maximale de Glucides que la Calculatrice de Bolus AAPS est autorisée à doser. Ce paramètre existe comme une limite de sécurité pour empêcher l'administration d’un bolus trop important dû à une saisie accidentelle ou une erreur de l’utilisateur. Il est recommandé de définir cette valeur à un montant raisonnable qui correspond approximativement à la quantité maximale de glucides que vous êtes susceptible d’avoir dans d'un repas.

## Boucle

Vous pouvez alterner entre Boucle Ouverte et Boucle Fermée. La Boucle Ouverte signifie que les suggestions de DBT (Débit de Basal Temporaire) sont calculées à partir de vos données et apparaissent sous forme d’une notification, mais vous devez choisir manuellement de les accepter et de les entrer manuellement sur votre pompe. La Boucle fermée signifie que les suggestions DBT (Débit de Basal Temporaire) sont automatiquement envoyées à votre pompe sans confirmation ou entrée de votre part. L’écran d’accueil affiche dans le coin supérieur gauche si vous êtes en Boucle Ouverte ou en Boucle Fermée. Appuyer et maintenir ce bouton de l’écran d’accueil vous permettra également de basculer entre les deux.

## OpenAPS AMA

L'Assistance Améliorée Repas (AAR) de OpenAPS permet au système de reagir plus rapidement après un bolus de repas SI vous entrez les Glucides de manière fiable. Activez-le dans le Générateur de configuration pour voir les paramètres de sécurité, vous devrez avoir complété l'[Objectif 9](../Usage/Objectives#objective-9-enabling-additional-oref0-features-for-daytime-use-such-as-advanced-meal-assist-ama) pour utiliser cette fonctionnalité. Vous pouvez apprendre plus sur les Paramètres et [Autosens dans le manuel d'OpenAPS](http://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autosens.html).

### Max U/hr a Temp Basal can be set to

Ce paramètre existe comme une limite de sécurité pour empêcher AAPS d'être capable d'administrer un dosage Basal dangereusement élevé. La valeur est definie en Unités d'insuline par heure (U/h). Il est conseillé de definir cette valuer de facon raisonnable et sensée. Une bonne recommandation est de prendre le **plus haut dosage Basal** de votre profil et de le **multiplier par 4**. Par exemple, si le dosage basal le plus élevé dans votre profil a été 0.5 U/hr, vous qui pourriez le multiplier par 4 pour obtenir la valeur de 2 U/h.

### Maximum basal IOB OpenAPS can deliver [U]

Une quantité d'insuline basale supplémentaire (en unités) a pu s'accumuler dans votre corps, en plus de votre profil basal normal. Une fois cette valeur atteinte, AAPS cessera de délivrer de l'insuline basale supplémentaire jusqu'à ce que votre Insuline basale Active (IA) aie diminuée et soit de nouveau dans cette plage.

* This value does not consider bolus IOB, only basal.
* This value is calculated and monitored independently of your normal basal rate. It is only the additional basal insulin on top of that normal rate that is considered.
* This value is measured in insulin units (u).

Lorsque vous commencez à boucler, **il est conseillé de mettre l'IA basal Max à 0** pour une période de temps, pendant que vous vous habituez au système. Cela empêche AAPS de donner de l'insuline basale supplémentaire. Pendant ce temps, AAPS sera toujours en mesure de limiter ou de désactiver votre insuline basale pour prévenir l'hypoglycémie.

C'est une étape importante pour :

* Have a period of time to safely get used to the AAPS system and monitor how it works.
* Take the opportunity to perfect your basal profile and Insulin Sensitivity Factor (ISF).
* See how AAPS limits your basal insulin to prevent hypoglycaemia.

Lorsque vous vous sentez à l'aise, vous pouvez autoriser le système à commencer à vous donner de l'insuline basale supplémentaire, en augmentant la valeur de l'IA basal Max. Une bonne recommandation est de prendre le **débit de basal maximum** de votre profil et de le **multiplier par 3**. Par exemple, si le débit de basal le plus élevé dans votre profil est de 0,5 U/h, vous pourriez le multiplier par 3 pour obtenir la valeur de 1,5 U.

* You can start conservatively with this value and increase it slowly over time. 
* These are guidelines only; everyone's body is different. You may find you need more or less than what is recommended here, but always start conservatively and adjust slowly.

*Remarque : En tant que fonction de sécurité, l'IA Max Basal est limitée à 7 U.*

## Paramètres d’absorption

Si vous avez choisi d'utiliser l'Autosense AMA, vous pourrez alors entrer votre temps d'absorption maximum de repas et la fréquence de rafraîchissement de l'autosense. Si vous mangez souvent des repas riches en matières grasses ou en protéines, vous devrez augmenter votre temps d'absorption des repas.

## Paramètres de la pompe

Les options ici varient selon le pilote de pompe que vous avez sélectionné dans 'Générateur de configuration'. Appairez et réglez votre pompe selon les instructions relatives à la pompe :

* [DanaR Insulin Pump](../Configuration/DanaR-Insulin-Pump.md) 
* [DanaRS Insulin Pump](../Configuration/DanaRS-Insulin-Pump.md) 
* [Pompe Accu-Chek Combo](../Configuration/Accu-Chek-Combo-Pump.md) 
* [Medtronic Pump](..//Configuration/MedtronicPump.md)

Si vous utilisez AndroidAPS pour une boucle ouverte, vérifiez que vous avez sélectionné Pompe virtuelle Pump dans le Générateur de configuration.

## NS Client

* Set your 'nightscout URL' here (https://yourwebsitename.herokuapp.com or https://yourwebsitename.azurewebsites.net), and the 'API secret' (a 12 character password recorded in your heroku or azure variables). This enables data to be read and written between both the nightscout website and AndroidAPS. Double check for typos here if you are stuck in Objective 1.
* **Make sure that the URL is WITHOUT /api/v1/ at the end.**
    
    ![NSClient URL](../images/NSClientURL.png)

* 'Log app start to nightscout' will record a note in your careportal entries every time the app is started. The app should not be needing to start more than once a day; more frequently than this suggests a problem.

* 'Alarm options' allows you to select which default nightscout alarms to use through the app. For the alarms to sound you need to set the Urgent High, High, Low and Urgent Low alarm values in your [heroku or azure variables](http://www.nightscout.info/wiki/welcome/website-features#customalarms). They will only work whilst you have a connection to nightscout and are intended for parent/carers, if you have the CGM source on your phone then use those alarms instead (e.g. xdrip+).
* 'Enable local broadcasts' will share your careportal data to other apps on the phone such as xdrip.
* 'Always use basal absolute values' must be activated if you want to use Autotune properly.
    
    **Do not activate this when using [Insight pump](https://androidaps.readthedocs.io/en/latest/EN/Configuration/Accu-Chek-Insight-Pump#settings-in-aaps)!** It would lead to false TBR settings in Insight pump.

## Communicateur SMS

Ce paramètre permet de contrôler à distance de l'application en envoyant des instructions au téléphone du patient que l'application appliquera comme Suspendre la boucle ou un bolus. Des informations supplémentaires sont décrites dans [Commandes SMS](../Children/SMS-Commands.rst), mais elles ne s'afficheront dans Préférences que si vous avez sélectionné cette option dans le Générateur de configuration.

## Autres

* You can set defaults for your temp targets here for the different types of temp target (eating soon and activity). When you select a temp target and then choose, for example, "Eating Soon" from the drop down box, it will automatically populate the duration and value for you based on the figures you provided here. For more information on use of Temp Targets see [OpenAPS features](../Usage/Open-APS-features.md). 
* You can set default prime amounts - this will prime the pump the value specified and this insulin is counted as used from the reservoir but not counted in IOB calculations. See the instruction booklet in your cannula box for how many units should be primed depending on needle length and tubing length.
* You can change the display on the homescreen and watch for the values that are in range. Note that this is just how the graphs look and doesn't impact on your target or calculations.
* 'Shorten tab titles' allows you to see more tab titles on screen, for example the 'Open APS' tab becomes 'OAPS', 'Objectives' becomes 'Obj' etc.
* 'Local Alerts' lets you decide if you receive a warning and after how long for not receiving blood glucose values (stale data) or the pump being unreachable. If you frequently get pump unreachable alerts then enable BT Watchdog in the Advanced Settings.

## Choix de données

* 'Fabric Upload' will send crash reporting and feature usage data to the developers.