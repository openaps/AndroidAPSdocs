# Ecrans AndroidAPS

## Écran d'accueil

![Écran d'accueil V2.1](../images/Screenshot_Home_screen_V2_1.png)

Ceci est le premier écran que vous verrez quand vous ouvrirez AndroidAPS et il contient la plupart des informations dont vous aurez besoin au jour le jour.

### Section A

* naviguer entre les différents modules AndroidAPS en balayant à gauche ou à droite

### Section B

* changer le statut de la boucle (boucle ouverte, boucle fermée, suspendre la boucle etc)
* voir votre profil actif et faire un [changement de profil](../Usage/Profiles.md)
* voir votre niveau actuel de cible glycémique et définir une [cible temporaire](../Usage/temptarget.md).

Un appui long sur n’importe lequel de ces boutons permet de modifier les paramètres. Par ex. un appui long sur la cible en haut à droite ("110" dans la copie d'écran ci-dessus) pour définir une cible temp.

### Section C

* dernière glycémie reçue de votre MGC
* depuis combien de temps elle a été reçue
* les changements dans les 15 et 40 dernières minutes
* votre débit de basal - y compris les débits de base temporaires (DBT) programmés par le système
* Insuline Active (IA)
* Glucides Actifs (GA)

Les [voyants d'état optionnels](../Configuration/Preferences#overview) (CAN | INS | RES | SEN | BAT) donnent un avertissement visuel pour un réservoir bas et le niveau de batterie ainsi que le changement de site en retard.

Le chiffre de l’insuline active serait à 0 s’il n’y avait que votre basal standard en cours et qu’il ne restait plus d’insuline active d’un précédent bolus. The figures in brackets show how much consists of insulin remaining from previous boluses and how much is a basal variation due to previous TBRs programmed by AAPS. Ce second chiffre peut être négatif s’il y a eu récemment des périodes de basal réduit.

### Section D

Cliquez sur la flèche située à droite de l'écran de la section D pour sélectionner les informations à afficher dans les graphiques ci-dessous.

### Section E

Graphique montrant votre glycémie (GLY) lue à partir de votre capteur de glycémie (MGC), il montre également des notifications Nightscout telles que les glycémies capillaires de calibrations et des entrées de glucides.

Long press on the graph to change the time scale. Vous pouvez choisir 6, 8, 12, 18 ou 24 heures.

Le prolongement des lignes indique la glycémie prévue, et la tendance, si vous avez sélectionné cette option.

* Ligne orange : GA (la couleur est généralement utilisée pour représenter les GA et les glucides)
* Ligne bleu foncé: IA (la couleur est généralement utilisée pour représenter l'IA et l'insuline)
* Ligne bleu clair: zéro-temp
* Ligne jaune foncé: RNS

These lines show you the different predictions based on current carb absorption (COB); insulin only (IOB); showing how long it will take BG to level off at/above target if deviations suddenly cease and we run a zero temp until then (zero-temp) and unannounced meal/effect detection where carbs are detected but have not been entered into the system by the user (UAM).

La ligne bleue continue indique la livraison basale de votre pompe. La ligne bleue en pointillé indique ce que le basal sera s’il n’y a pas d’ajustements basal temporaire (TBRs) et la ligne bleue en continue indique le basal réel délivré au fil du temps.

### Section F

Cette section est également configurable en utilisant les options de la section D. Dans cet exemple, nous montrons l'Insuline Active ou IA (s'il n'y avait pas de DBT ni de bolus restants elle serait à zéro), la sensibilité et la déviation. Les barres grises indiquent une déviation due aux glucides, les barres vertes indiquent que la glycémie est plus haute que le chiffre que l’algorithme attend et les barres rouges indiquent que la glycémie est plus basse que le chiffre que l’algorithme attend.

### Section G

Permet d'administrer un bolus (normalement, vous utilisiez le bouton Calculatrice pour effectuer cette opération), renseigner des glucides et d'ajouter une glycémie capillaire de calibration MGC. Un bouton d'assistant rapide s'affiche également ici s'il est configuré dans le [Générateur de configuration](../Configuration/Config-Builder#quickwizard-settings).

## Calculatrice

![Calculatrice](../images/Screenshot_Bolus_calculator.png)

Quand vous voulez faire un bolus de repas, c'est normalement d'ici que vous le ferez.

### Section A

zone où vous renseignez les informations concernant le bolus que vous voulez. The BG field is normally already populated with the latest reading from your CGM. If you don't have a working CGM then it will be blank. In the CARBS field you add your estimate of the amount of carbs - or equivalent - that you want to bolus for. Le champ CORR (correction) vous permet de modifier le dosage final si vous le souhaitez, et le champ CARB TIME ("horaire pour les glucides") est prévu pour le pré-bolus, pour que vous puissiez indiquer au système qu'il va y avoir un délai avant que les glucides n'arrivent et le bolus sera retardé. You can put a negative number in this field if you are bolusing for past carbs.

SUPER BOLUS is where the basal insulin for the next two hours is added to the immediate bolus and a zero TBR is issued for the following two hours to take back the extra insulin. L'idée est de fournir l'insuline plus tôt et, espérons-le, de réduire les pointes.

### Section B

affiche le bolus calculé et permet de renseigner une note. Si la quantité d'insuline active dépasse déjà le bolus calculé, elle affichera simplement la quantité de glucides encore nécessaire.

### Section C

montre les différents éléments qui ont été utilisées pour calculer le bolus. You can deselect any that you do not want to include but you normally wouldn't want to.

### Combinations of COB and IOB and what they mean

<ul>
    <li>If you tick COB and IOB unabsorbed carbs that are not already covered with insulin + all insulin that has been delivered as TBR or SMB will be taken into account</li>
    <li>If you tick COB without IOB you run the risk of too much insulin as AAPS is not accounting for what’s already given. </li>
    <li>If you tick IOB without COB, AAPS takes account of already delivered insulin but won’t cover that off against any carbs still to be absorbed. This leads to a 'missing carbs' notice.
</ul>

If you bolus for additional food shortly after a meal bolus (i.e. additional desert) it can be helpful to untick all boxes. This way just the new carbs are being added as the main meal won't necessarily be absorbed so IOB won't match COB accurately shortly after a meal bolus.

### Wrong COB detection

![Slow carb absorption](../images/Calculator_SlowCarbAbsorbtion.png)

If you see the warning above after using bolus wizard, AndroidAPS has detected that the calculated COB value maybe wrong. So if you want to bolus again after a previous meal with COB you should be aware of overdosing! For details see the hints on [COB calculation page](../Usage/COB-calculation.html#detection-of-wrong-cob-values).

## Insulin Profile

![Insulin Profile](../images/Screenshot_insulin_profile.png)

This shows the activity profile of the insulin you have chosen. The PURPLE line shows how much insulin remains after it has been injected as it decays with time and the BLUE line shows how active it is.

You will normally be using one of the Oref profiles - and the important thing to note is that the decay has a long tail. If you have been used to manual pumping you have probably been used to assuming that insulin decays over about 3.5 hours. However, when you are looping the long tail matters as the calculations are far more precise and these small amounts add up when they are subjected to the recursive calculations in the AndroidAPS algorithm.

For a more detailed discussion of the different types of insulin, their activity profiles and why all this matters you can read an article here on [Understanding the New IOB Curves Based on Exponential Activity Curves](https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/understanding-insulin-on-board-calculations.html#understanding-the-new-iob-curves-based-on-exponential-activity-curves)

And you can read an excellent blog article about it here: [Why we are regularly wrong in the duration of insulin action (DIA) times we use, and why it matters…](http://www.diabettech.com/insulin/why-we-are-regularly-wrong-in-the-duration-of-insulin-action-dia-times-we-use-and-why-it-matters/)

And more at: [Exponential Insulin Curves + Fiasp](http://seemycgm.com/2017/10/21/exponential-insulin-curves-fiasp/)

## Pump Status

![Pump Status](../images/Screenshot_pump_Combo.png)

Here we see the status of the insulin pump - in this case an Accu-Chek Combo. The information displayed is self explanatory. A long press on the HISTORY button will read the data from your pump history, including your basal profile. But remember only one basal profile is supported on the Combo pump.

## Care Portal

![Care Portal](../images/Screenshot_care_portal.png)

This replicates the functions you will find on your Nightscout screen under the "+" symbol which allows you to add notes to your records. Functions such as recording when you change a pump site, or insulin cartridge should be self explanatory. BUT this section does not issue any commands to your pump. So if you add a bolus using this screen it simply makes a note of this on your Nightscout record, the pump won't be instructed to deliver a bolus.

## Loop, MA, AMA, SMB

You don't normally need to worry about these, they show the results of the OpenAPS algorithm which runs each time the system gets a fresh reading from the CGM. These are discussed elsewhere.

## Profile

![Profile](../images/Screenshot_profile.png)

AndroidAPS can run using a number of different profile configuratons. Typically - as shown here - the Nightscout profile has been downloaded via the built in Nighscout client and is displayed here in read-only form. Si vous souhaitez effectuer des modifications, vous pouvez le faire à partir de votre interface utilisateur Nightscout, puis faire un [Changement de Profil](../Usage/Profiles.md) dans AndroidAPS pour activer les modifications. Les données telles que les débits de base du profil seront automatiquement copiés sur votre pompe.

** DAI : ** représente la Durée d'Action de l'Insulin et il est détaillé plus haut dans la section sur les profils d'insuline.

** G/I : ** est le rapport quantité de glucides divisé par le nombre d'unité d'Insulin. Ce profil comporte un certain nombre de valeurs différentes définies pour différentes périodes de la journée.

** SI :** est la Sensibilité à l'Insuline, elle correspond à la réduction de glycémie que permettra d'obtenir une unité d'insuline en supposant que rien d'autre ne change par ailleurs.

** Basal: ** est le profil de basal programmé dans votre pompe.

** Cible: ** est l'objectif glycémique que vous souhaitez atteindre. Si vous le souhaitez, vous pouvez définir différents niveaux pour différentes heures de la journée. Vous pouvez même définir des limites supérieure et inférieure afin que le l'algorithme ne commence à effectuer des modifications que lorsque la valeur de glycémie prévue est en dehors dela plage, mais si vous le faites, la boucle réagira moins vite et il est peu probable que vous obteniez une glycémie aussi stable.

## Traitement, xDrip, NSClient

Il s'agit simplement des journaux de traitements (bolus et glucides), des messages xDrip et des messages envoyés à Nightscout via le client intégré Nightscout. Vous n'avez normalement pas besoin de vous en inquiéter à moins qu'il y ait un problème.

## Config Builder

![Config Builder](../images/Screenshot_config_builder.png)

C'est ici que vous allez paramétrer la configuration de votre plate-forme AndroidAPS. Cette capture d'écran montre une configuration typique utilisant une pompe Combo, un capteur MGC Dexcom G5 géré par xDrip + et fonctionnant avec de l'insuline NovoRapid sur un profil Oref et connecté à un serveur Nightscout hébergé sur le cloud.

La case à cocher à droite détermine si ce module sera affiché dans la barre de menu en haut (voir la section A dans Ecran d'accueil) et la roue crantée permet d'accèder aux paramètres du module, s'il y en a.

## Réglages et Préférences

En haut à droite de la barre de navigation, vous trouverez trois petits points verticaux. En appuyant dessus, vous aurez accès aux préférences de l'application, préférences des plugins, l'historique, l'assistant de configuration, les informations de l'application (à propos de) et le bouton quitter pour fermer AAPS.