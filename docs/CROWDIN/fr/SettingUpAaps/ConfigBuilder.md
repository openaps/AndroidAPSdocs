# Configuration (Config Builder)

```{admonition} Vous venez d'AAPS v3 ? :class: note Le **Config Builder** s'appelle maintenant **Configuration** et se trouve dans le **menu** (☰). Voir [Ce qui a changé dans AAPS v4](#v4-changes).

    <br />**Configuration** est l'endroit où vous choisissez les plugins actifs (MGC, pompe, algorithme APS, sensibilité, synchronisation, …) et où vous ouvrez chaque plugin et ses paramètres. La [présentation pas à pas](#configuration-v4) se trouve ci-dessous ; le reste de cette page décrit chaque section en détail.
    
    (configuration-v4)=
    ## La Configuration dans AAPS v4
    
    Dans **AAPS** v4, touchez le **menu** (☰) en **haut à gauche** de l'écran principal et choisissez **Configuration** (*« Paramétrez votre configuration (MGC, pompe, ...) et activez des fonctionnalités »*).
    
    ![Le menu en haut à gauche avec l'entrée Configuration](../images/v4/Configuration/configuration_menu.png)
    
    Les plugins sont regroupés par **catégorie**, par exemple *Lissage*, *Calibration*, *Calcul de Sensibilité*, *APS*, *Communication* et *Général*. Chaque ligne affiche le nom de la catégorie et le plugin **actuellement actif** (par ex. *APS → OpenAPS SMB*). Touchez une ligne pour ouvrir une catégorie.
    
    ![L'écran Configuration, avec la liste des catégories de plugins](../images/v4/Configuration/configuration_plugins.png)
    
    Dans une catégorie, vous voyez les plugins disponibles pour celle-ci. Pour les catégories à choix unique, vous choisissez le plugin actif ; certaines catégories sont à choix multiple (*« Choisissez toutes les options qui s'appliquent. »*). Chaque plugin propose deux actions :
    
    - **Ouvrir le plugin** : ouvre l'écran propre au plugin.
    - **Paramètres** : ouvre les préférences du plugin (les paramètres peuvent être regroupés dans des sections dépliables).
    
    ![Une catégorie avec ses plugins, chacun avec « Ouvrir le plugin » et « Paramètres »](../images/v4/Configuration/configuration_open_plugin.png)
    
    (configuration_sync_icon)=
    ### L'icône de téléphone : « synchronisé depuis le maître »
    
    Une petite **icône de téléphone** à côté d'une catégorie ou d'un paramètre indique que cet élément est **synchronisé depuis le maître** : sa valeur ou sa sélection est envoyée à cet appareil par le canal NSClientV3 (Nightscout).
    
    Sur un **client** (**AAPSClient**), ces éléments sont **maintenus synchronisés avec le maître**. L'icône n'apparaît que sur un client. Elle n'est donc pas visible sur la capture d'écran ci-dessus, prise sur l'application principale **AAPS**. Sur un client, elle apparaît en général sur *Lissage*, *Calibration*, *Calcul de Sensibilité* et *APS*. La façon exacte dont le maître et les clients restent alignés, et les paramètres que vous pouvez modifier de chaque côté, sont décrits dans [Contrôle maître ↔ client](#client-master-config-prefs).
    
    La même icône apparaît aussi **dans les paramètres**, à côté de chaque préférence synchronisée. Dans l'exemple ci-dessous, *Coupure d'absorption* porte l'icône ; les paramètres sans icône sont configurés sur chaque appareil :
    
    ![Les paramètres d'un plugin : l'icône de téléphone marque les préférences synchronisées](../images/v4/ClientMaster/preferences_synced_icon.png)
    
    Les éléments **sans** icône sont configurés **sur chaque appareil**. L'exemple le plus important est la connexion **NSClientV3 (Communication)** elle-même : l'**URL Nightscout**, le **jeton d'accès** et les **websockets** sont réglés sur chaque téléphone séparément. Ils n'ont donc **pas** l'icône de téléphone.
    
    ---
    
    (Config-Builder-tab-or-hamburger-menu)=
    ## Ouvrir l'écran d'un plugin
    
    Chaque écran de plugin s'ouvre de l'une de ces façons (les onglets et la case à cocher en forme d'œil d'**AAPS** v3 n'existent plus, voir [Ce qui a changé dans AAPS v4](#v4-changes)) :
    
    - **Configuration** → la catégorie du plugin → **Ouvrir le plugin**,
    - le panneau **Gestion** de la barre de navigation du bas, pour les écrans que vous utilisez le plus (Profil, Paramètres Insuline, Pompe, Automatisation, Aliments...),
    - un bouton [QuickLaunch (lancement rapide)](../DailyLifeWithAaps/QuickLaunch.md) que vous ajoutez vous-même,
    - la **barre de recherche** de l'écran principal.
    
    ```{contents}
    :backlinks: entry
    :depth: 2
    

(ConfigBuilder_Profile)=

## Profil

Ce module ne peut pas être désactivé car il fait partie du cœur d'**AAPS**.

Voir [Votre profil AAPS](../SettingUpAaps/YourAapsProfile.md) pour comprendre les bases de ce que contient votre **Profil**.

(insulin)= (Config-Builder-insulin)=

## Insuline

![Paramètres Insuline](../images/manage/insulin_settings.png)

Dans **AAPS** 4, l'insuline n'est plus un plugin à sélectionner dans **Configuration**. Ouvrez **Gestion → Paramètres Insuline** pour configurer l'insuline que vous utilisez.

L'éditeur d'insuline vous permet de :

* give the insulin an **Insulin nickname** so it is easy to recognise,
* set the **Peak** (time to maximum insulin activity, in minutes) and the **DIA** (Duration of Insulin Action, in hours), either by typing the value or using the **–** / **+** buttons,
* toucher un bouton prédéfini **Charger le pic depuis** (**Novorapid** (75 min), **Fiasp** (55 min) ou **Lyumjev** (45 min)) pour remplir en une seule étape le délai du pic standard de cette insuline.

Les plages autorisées sont les mêmes quelle que soit l'insuline utilisée :

* **DAI** : 5 à 9 heures (5 à 10 heures si le type de patient est **Femme enceinte**). Voir [Durée d'action de l'insuline (DAI) et pic](#Config-Builder-insulin-dia) pour choisir une valeur.
* **Pic** : 35 à 120 minutes.

Les courbes d'**IA** (insuline active) et d'**Activité** affichées en bas de l'éditeur se mettent à jour quand vous modifiez les valeurs. Vous voyez donc tout de suite comment vos réglages changent l'action de l'insuline.

Plus d'informations pour comprendre le profil d'insuline tel qu'il est affiché dans **AAPS** [ici](#AapsScreens-insulin-profile).

(Config-Builder-insulin-change-active)=

### Changer l'insuline utilisée (DAI ou pic)

L'insuline marquée **ACTIF** est celle qu'utilise votre profil en cours. Ses champs sont grisés : vous ne pouvez ni la modifier ni la supprimer. Ainsi, le nom d'insuline affiché dans votre profil en cours correspond toujours aux réglages réellement utilisés.

Pour changer la DAI ou le pic que vous utilisez :

1. Ouvrez **Gestion → Paramètres Insuline**. Si l'écran s'ouvre en lecture seule (un **✏️ crayon** dans la barre du haut), touchez le crayon et déverrouillez vos paramètres.
2. Touchez **+** (*Ajouter une nouvelle insuline*). **AAPS** crée une copie de l'insuline affichée à l'écran.
3. Réglez le nouveau **Pic** et/ou la nouvelle **DAI**, puis touchez l'icône d'enregistrement (en haut à droite).
4. Touchez **▶** (*Activer l'insuline*) et confirmez. La nouvelle insuline devient **ACTIF**.

```{admonition} Le nom contient le pic et la DAI :class: note **AAPS** ajoute automatiquement le pic, la DAI et la concentration au nom de l'insuline (par exemple *Fiasp 55m 8h U100*). Vous pouvez ainsi distinguer vos configurations d'un coup d'œil.

    <br />Vous pouvez supprimer l'ancienne insuline quand elle n'est plus active.
    
    ### Les préréglages « Charger le pic depuis »
    
    Dans **AAPS** 4, il n'y a pas de liste de types d'insuline à choisir. Toutes les insulines utilisent la même courbe d'activité exponentielle ; seuls leur **Pic** et leur **DAI** sont différents. Les préréglages **Charger le pic depuis** de l'éditeur d'insuline remplissent en une seule touche le pic recommandé pour les insulines les plus courantes (le petit ⓘ à côté de **Charger le pic depuis** les liste avec leur valeur de pic). Vous pouvez ensuite encore ajuster le **Pic** et la **DAI**.
    
    Ne changez le pic par rapport à sa valeur recommandée que si vous comprenez l'effet de ce changement. Le [graphique de la courbe d'insuline](#AapsScreens-insulin-profile) vous aide à comprendre les courbes.
    
    #### Novorapid
    
    ![Courbe d'insuline avec le pic Novorapid](../images/Profile/ConfBuild_Insulin_RAO.png)
    
    * recommandé pour Humalog, Novolog et Novorapid (appelé *Rapid-Acting Oref* dans **AAPS** v3)
    * Pic = 75 minutes après l'injection
    
    #### Fiasp
    
    ![Courbe d'insuline avec le pic Fiasp](../images/Profile/ConfBuild_Insulin_URO.png)
    
    * recommandé pour Fiasp (appelé *Ultra-Rapid Oref* dans **AAPS** v3)
    * Pic = 55 minutes après l'injection
    
    (Config-Builder-lyumjev)=
    #### Lyumjev
    
    ![Courbe d'insuline avec le pic Lyumjev](../images/Profile/ConfBuild_Insulin_L.png)
    
    * recommandé pour Lyumjev
    * Pic = 45 minutes après l'injection
    
    #### Pic personnalisé
    
    * Il n'y a pas de type d'insuline « Free-Peak Oref » séparé dans **AAPS** 4 : saisissez n'importe quel **Pic** (35 à 120 minutes) directement dans l'[éditeur d'insuline](#Config-Builder-insulin), sans utiliser de préréglage.
    * Un pic personnalisé est utile si vous utilisez une insuline qui n'est pas dans la liste, ou un mélange de plusieurs insulines.
    
    (Config-Builder-insulin-dia)=
    ### Durée d'action de l'insuline (DAI) et pic
    
    ```{warning}
    En boucle, diminuer la DAI ou le pic augmente toujours l'insuline délivrée. La DAI ne fonctionne pas de la même façon dans AAPS que dans les systèmes AID commerciaux. Des changements faits sans attention dans ces réglages peuvent modifier les doses d'insuline beaucoup plus ou beaucoup moins que prévu.
    

AAPS modélise le déroulement de l'action de l'insuline avec une formule mathématique, configurée avec la **DAI** et le réglage de **pic**, qui lui est étroitement lié. La DAI est la durée théorique jusqu'à ce que l'IA atteigne zéro, et le pic est le moment où l'effet de l'insuline est le plus fort. On obtient ainsi une courbe d'IA et une courbe d'activité, qui est simplement la **vitesse** de diminution de l'IA.

Notez que quand AAPS est en boucle, il est normal d'avoir des périodes de [basal temporaire à zéro](#Open-APS-features-super-micro-bolus-smb). Cette insuline basale manquante est entièrement soustraite de l'IA. C'est pourquoi, en pratique, l'IA atteint zéro de nombreuses heures avant la DAI configurée. Vous pouvez voir séparément l'[IA des bolus et l'IA basale](#aaps-screens-iob-cob-basal-sens) depuis l'écran principal.

Pour configurer la DAI et le pic, touchez **Gestion** sur l'écran principal, puis touchez **Paramètres Insuline**. AAPS affiche la configuration d'insuline active comme ceci :

![Exemple de configuration d'insuline](../images/manage/insulin_profile.png)

Dans cet exemple, le pic est réglé sur 55 minutes, la DAI est de 8 heures et la [concentration de l'insuline](#Insulin-Concentration) est la valeur standard de 100 UI/ml.

À cause de l'effet des basals temporaires à zéro expliqué plus haut et de la formule utilisée par AAPS pour la diminution de l'IA, la plupart des utilisateurs règlent une DAI nettement plus longue que dans les systèmes commerciaux. En général, beaucoup de personnes trouvent qu'une **DAI** de 9 h leur convient bien. Quand vous aurez plus d'expérience avec AAPS et un profil bien réglé, vous pourrez essayer de trouver une DAI et un pic personnalisés avec les informations ci-dessous.

````{admonition} Détails sur l'effet de la configuration de la DAI et du pic :class: dropdown

Comme le débit basal a une influence indirecte sur la diminution de l'IA dans AAPS, des débits basals trop élevés peuvent masquer une DAI trop longue, et inversement. Il est donc logique de bien régler d'abord les débits basals avant d'ajuster la DAI et le pic. De plus, les réglages de DAI et de pic interagissent : l'effet de la DAI dépend du pic, et inversement.

Ces graphiques montrent l'effet exact de la DAI et du pic sur les courbes d'IA, sur toute la plage des valeurs autorisées.

Ajustement de la DAI :

```{image} ../images/iob_remaining_static_peak.png :width: 400px

    <br />Ajustement du pic :
    
    ```{image} ../images/iob_remaining_static_dia.png
    :width: 400px
    

Enfin, une comparaison où la DAI et le pic sont ajustés en même temps. L'idée est que les deux valeurs sont ajustées dans les mêmes proportions, de sorte que `49/35 ~ 7/5`. Ou de la même façon, `120/93 ~ 9/7`. Les intervalles restent les mêmes quelle que soit la DAI ou le pic de départ, tant que le changement relatif est le même pour les deux.

```{image} ../images/iob_remaining_uniform.png :width: 400px

    <br />Notez que quand la DAI et le pic sont ajustés de cette façon, chaque point de la courbe se décale de la même proportion.
    
    ````
    
    #### Pour en savoir plus sur la configuration de la DAI et du pic
    
    * [Détails techniques et historique du prédécesseur d'AAPS, OpenAPS](https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/understanding-insulin-on-board-calculations.html#understanding-the-new-iob-curves-based-on-exponential-activity-curves) (en anglais).
    * [Why we are regularly wrong in the duration of insulin action (DIA) times we use, and why it matters…](https://www.diabettech.com/insulin/why-we-are-regularly-wrong-in-the-duration-of-insulin-action-dia-times-we-use-and-why-it-matters/) (pourquoi nous nous trompons souvent sur la durée d'action de l'insuline, en anglais) sur Diabettech.
    * [Exponential Insulin Curves + Fiasp](https://web.archive.org/web/20220630154425/http://seemycgm.com/2017/10/21/exponential-insulin-curves-fiasp/) (courbes d'insuline exponentielles et Fiasp, en anglais) sur See My CGM (archive).
    * [Revised Humalog model in a closed loop](https://bionicwookiee.com/2022/04/13/revised-humalog-model-in-a-closed-loop/) (modèle Humalog révisé en boucle fermée, en anglais) et d'autres articles sur Bionic Wookie, qui recommandent une DAI de 9 h pour Lyumjev, Fiasp, NovoRapid et Humalog.
    
    (Config-Builder-bg-source)=
    ## Source GLY
    Sélectionnez la source de glycémie que vous utilisez. Voir la page [Source GLY](../Getting-Started/CompatiblesCgms.md) pour plus d'informations sur la configuration.
    
    ![Configuration > Source GLY](../images/v4/Configuration/configuration_bg_source.png)
    
    Faites défiler vers le bas pour voir les autres sources :
    
    ![Configuration > Source GLY, suite](../images/v4/Configuration/configuration_bg_source_2.png)
    
    ![Configuration > Source GLY, fin de la liste](../images/v4/Configuration/configuration_bg_source_3.png)
    
    * [xDrip+ Glycémie](../CompatibleCgms/xDrip.md) : aussi pour les applications compatibles comme [Juggluco](../CompatibleCgms/Juggluco.md)
    * [Glycémie NSClient](../CompatibleCgms/CgmNightscoutUpload.md) : seulement si vous savez ce que vous faites, voir [Source GLY](../Getting-Started/CompatiblesCgms.md).
    * [Medtronic 640g](../CompatibleCgms/MM640g.md)
    * Glimp : seules les versions 4.15.57 et plus récentes sont prises en charge
    * [BYODA (Build Your Own Dexcom App)](#DexcomG6-if-using-g6-with-build-your-own-dexcom-app).
    * Application MGC MicroTech : pour le capteur Aidex / LinX
    * [Poctech](../CompatibleCgms/PocTech.md)
    * Tomato (MiaoMiao) : application Tomato pour l'appareil MiaoMiao
    * [Glunovo](https://infinovo.com/) : application Glunovo pour le système MGC Glunovo
    * Intelligo : application Intelligo
    * Syai/Ottai : pour les applications Syai et Ottai (voir [Syai Tag](../CompatibleCgms/SyaiTagX1.md) et [Ottai](../CompatibleCgms/OttaiM8.md))
    * Application SI : application SI modifiée (patchée) ou application Sibionics pour le capteur Sibionics
    * Application Sino : application modifiée (patchée) pour le capteur Sinocare
    * Lecteur de notifications : lit les valeurs de glycémie dans les notifications des applications MGC officielles (Dexcom, Medtronic, Eversense, etc.)
    * Instara : application Instara
    * Gly Aléatoire : génère des données de glycémie aléatoires pour les tests. Elle ne peut être activée que dans une version de développement (engineering) avec la **Pompe virtuelle**. Dans une installation normale d'**AAPS**, elle ne peut donc pas être utilisée.
    
    ## Lissage
    
    ![Configuration > Lissage](../images/v4/Configuration/configuration_smoothing.png)
    
    Voir [Lissage des données de glycémie](../CompatibleCgms/SmoothingBloodGlucoseData.md).
    
    ## Calibration
    
    Choisissez comment **AAPS** traite les valeurs qu'il reçoit de votre capteur :
    
    - **Absence d'étalonnage** : les valeurs du capteur sont utilisées telles quelles. Utilisez cette option quand le capteur est déjà étalonné en usine et précis. C'est le réglage par défaut.
    - **Étalonnage linéaire** : **AAPS** corrige les valeurs du capteur avec une pente et un décalage qu'il calcule à partir de vos mesures au doigt.
    
    How to use **Linear calibration**:
    
    1. Select **Linear calibration** in the **Calibration** category.
    2. When you insert a new sensor, log the sensor change: use **Log sensor change** on the calibration screen, or enter a CGM sensor insert in the Careportal. This tells **AAPS** when the sensor session started. If **AAPS** notices a gap of more than 30 minutes in the readings, it may ask you to mark a sensor change; this prompt appears on the master only, not on a client.
    3. Open the plugin and tap **Add calibration**. Enter your fingerstick value. **AAPS** pairs it with the sensor value from the last 10 minutes.
    
    A calibration is accepted only when:
    
    - a sensor change is logged and at least **2 hours** have passed since then (warm-up),
    - your glucose is stable. If it changes too fast, the dialog tells you and shows the limit,
    - there is a CGM reading from the last 10 minutes,
    - it is for the current moment. You cannot enter older fingerstick values.
    
    How the correction works:
    
    - **AAPS** draws a straight line through the pairs of the current sensor: `corrected value = slope × sensor value + offset`.
    - Newer pairs count more than older ones: a pair that is 2 days old counts about 37 %, a 4-day-old pair about 14 %. The line therefore follows your sensor as it drifts.
    - At least **2 pairs** are needed.
    - If the pairs are close together (less than 54 mg/dL / 3 mmol/L apart), only the values are shifted (offset, no slope).
    - The slope is kept between 0.55 and 1.6. A slope outside this range is limited to the nearest value.
    - Safety limit: if the correction at 100 mg/dL (5.5 mmol/L) would be more than ±30 mg/dL (1.7 mmol/L), no correction is applied. This protects you from a wrong entry.
    
    What it changes:
    
    - The corrected value is used everywhere: the BG on the main screen, the graph and the loop. The sensor readings themselves are not changed. The correction is applied on top, also to the earlier readings of the current sensor.
    - A new sensor change starts from zero. Pairs from earlier sensors no longer count.
    - On the graph, a calibration is shown as a marker at the fingerstick value.
    - Calibrations are synchronized through Nightscout, so your clients show the same corrected values.
    
    Check and remove entries:
    
    - **Open plugin** shows the status (for example *Slope 0.85, mid-range correction -0.4*), a chart of your pairs with the line, and the list of entries.
    - If an entry is wrong (for example, you had sugar on your finger), tap the bin icon next to it. The line is calculated again at once.
    
    ```{admonition} Using xDrip+ as BG source?
    :class: note
    xDrip+ has its own calibration. Calibrate in one place only, so that the sensor values are not corrected twice.
    

    {admonition} Calibrate with care
    :class: warning
    A wrong fingerstick value leads to wrong glucose values and therefore to wrong insulin dosing. Lavez-vous les mains avant la mesure, et n'étalonnez pas quand votre glycémie change vite.

![Configuration > Calibration](../images/v4/Configuration/configuration_calibration.png)

(Config-Builder-pump)=

## Pompe

Sélectionnez la pompe que vous utilisez. Voir la page [Pompes compatibles](../Getting-Started/CompatiblePumps.md) pour plus d'informations sur la configuration.

![Configuration > Pompe](../images/v4/Configuration/configuration_pump_list_1.png)

Faites défiler vers le bas pour voir tous les pilotes de pompe :

![Configuration > Pompe, suite](../images/v4/Configuration/configuration_pump_list_2.png)

![Configuration > Pompe, suite](../images/v4/Configuration/configuration_pump_list_3.png)

![Configuration > Pompe, fin de la liste](../images/v4/Configuration/configuration_pump_list_4.png)

Quand vous sélectionnez une autre pompe, **AAPS** vous demande de confirmer le changement :

![Confirmation du changement de plugin](../images/v4/Pumps/switch_plugin_dialog.png)

* [Dana R](../CompatiblePumps/DanaR-Insulin-Pump.md)
* Dana R Korean (pour la pompe DanaR vendue en Corée)
* Dana Rv2 (pompe DanaR avec une mise à jour non officielle du firmware)
* [Dana-i/RS](../CompatiblePumps/DanaRS-Insulin-Pump.md)
* [Accu Chek Insight](../CompatiblePumps/Accu-Chek-Insight-Pump.md)
* [Accu Chek Combo](../CompatiblePumps/Accu-Chek-Combo-Pump-v2.md)
* Omnipod pour [Omnipod Eros](../CompatiblePumps/OmnipodEros.md)
* Dash pour [Omnipod DASH](../CompatiblePumps/OmnipodDASH.md)
* [Medtronic](../CompatiblePumps/MedtronicPump.md)
* [Diaconn G8](../CompatiblePumps/DiaconnG8.md)
* [EOPatch2](../CompatiblePumps/EOPatch2.md)
* [Medtrum](../CompatiblePumps/MedtrumNano.md)
* [Equil 5.3](../CompatiblePumps/Equil5.3.md)
* [Carelevo](../CompatiblePumps/CareLevo.md)
* Pompe virtuelle : boucle ouverte - suggestions d'**AAPS** uniquement 
  * as you make your first steps with **AAPS**, during the first [objectives](../SettingUpAaps/CompletingTheObjectives.md)
  * pour une pompe qui n'a pas encore de pilote

(config-builder-wrong-pump-data)=

### Message : « Les données proviennent d'une autre pompe »

**AAPS** mémorise la pompe à laquelle il est connecté (type de pompe et numéro de série). S'il reçoit des données d'une autre pompe, par exemple après le remplacement de votre pompe par une nouvelle du même modèle, il affiche ce message et ignore les données de cette pompe :

![Les données proviennent d'une autre pompe](../images/Screen_DifferentPump.png)

Pour utiliser la nouvelle pompe, changez de pilote de pompe : sélectionnez **Pompe virtuelle**, confirmez, puis sélectionnez de nouveau votre pompe. **AAPS** enregistre alors la pompe à laquelle il est maintenant connecté.

(Config-Builder-sensitivity-detection)=

## Calcul de Sensibilité

![Configuration > Calcul de Sensibilité](../images/v4/Configuration/configuration_sensitivity_detection.png)

Sélectionnez le type de calcul de sensibilité. Pour plus de détails sur les différentes méthodes, [lisez cette page](../DailyLifeWithAaps/SensitivityDetectionAndCob.md). Cette fonction analyse les données historiques en continu et fait des ajustements si elle détecte que vous êtes plus sensible (ou au contraire plus résistant) à l'insuline que d'habitude. Vous trouverez plus de détails sur le calcul du ratio de sensibilité lui-même dans [Fonctionnalités clés d'AAPS > Autosens](#Open-APS-features-autosens).

You can view your sensitivity on the main screen in an [additional graph](#AapsScreens-section-g-additional-graphs), by selecting SENS% and watching the white line. Remarque : vous devez être à l'[Objectif 8](#objectives-objective8) pour que le calcul de sensibilité/[Autosens](#Open-APS-features-autosens) puisse ajuster automatiquement la quantité d'insuline délivrée. Avant d'atteindre cet objectif, le pourcentage Autosens et la ligne dans votre graphique sont affichés uniquement pour information.

### Paramètres d’absorption

Si vous utilisez Oref1 avec **SMB**, vous devez régler **min_5m_carbimpact** sur 8. Cette valeur est utilisée seulement pendant les interruptions des données du **MGC**, ou quand l'activité physique « consomme » toute la hausse de glycémie qui, sinon, permettrait à **AAPS** de faire baisser les GA. Quand l'[absorption des glucides](../DailyLifeWithAaps/CobCalculation.md) ne peut pas être calculée de façon dynamique à partir des réactions de votre glycémie, une absorption par défaut est appliquée à vos glucides. En résumé, c'est une sécurité.

(Config-Builder-aps)=

## APS

![Configuration > APS](../images/v4/Configuration/configuration_aps.png)

Sélectionnez l'algorithme APS souhaité pour les ajustements de thérapie. Vous pouvez voir le détail actif de l'algorithme choisi avec **Ouvrir le plugin**.

* OpenAPS AMA 
  * Advanced Meal Assist (aide avancée aux repas) : ancien algorithme qui n'est plus recommandé.
  * En résumé, son avantage : après un bolus de repas, le système peut augmenter le débit basal temporaire plus vite, À CONDITION que vous saisissiez vos glucides de façon fiable.
* [OpenAPS SMB](#Open-APS-features-super-micro-bolus-smb) 
  * Super Micro Bolus : l'algorithme le plus récent, recommandé pour tous les utilisateurs.
  * Contrairement à AMA, SMB n'utilise pas les débits de basal temporaires pour contrôler la glycémie, mais surtout de petits **Super Micro Bolus**.
  * Remarque : il est recommandé d'utiliser cet algorithme dès le début, même si vous ne recevrez pas de SMB avant l'[Objectif 9](#objectives-objective9).
* [Auto ISF](#Open-APS-features-auto-isf) 
  * Algorithme expérimental pour utilisateurs avancés. Il n'apparaît dans la liste qu'une fois les objectifs terminés.

Si vous passez de l'algorithme AMA à SMB, *min_5m_carbimpact* doit être changé manuellement à **8** (valeur par défaut pour SMB) dans [Paramètres → Paramètres d’absorption](#Preferences-min_5m_carbimpact).

## Boucle

Ce module ne peut pas être désactivé car il fait partie du cœur d'**AAPS**.

![Configuration > Boucle](../images/v4/Configuration/configuration_loop.png)

## Restrictions

![Configuration > Restrictions](../images/v4/Configuration/configuration_constraints.png)

### Objectifs

**AAPS** a un programme d'apprentissage (une série d'objectifs) que vous devez réaliser étape par étape. Cela devrait vous guider en toute sécurité à travers la mise en place d'un système de boucle fermée.

Voir la page [Compléter les objectifs](../SettingUpAaps/CompletingTheObjectives.md) pour plus d'informations.

## Communication

Dans cette catégorie (appelée **Synchronisation** dans **AAPS** v3), vous choisissez si et où **AAPS** doit envoyer vos données.

![Configuration > Communication](../images/v4/Configuration/configuration_communication.png)

Faites défiler vers le bas pour voir le reste de la liste :

![Configuration > Communication, suite](../images/v4/Configuration/configuration_communication_2.png)

### NSClientV3

Peut être utilisé comme [serveur de rapports](../SettingUpAaps/SettingUpTheReportingServer.md) et/ou pour la [surveillance à distance](../RemoteFeatures/RemoteMonitoring.md) et le [contrôle à distance](../RemoteFeatures/RemoteControl.md).

Voir [Synchronisation avec le serveur de rapports](#SetupWizard-synchronization-with-the-reporting-server-and-more) pour configurer la synchronisation NSClientV3.

### Tidepool

Peut être utilisé comme [serveur de rapports](../SettingUpAaps/SettingUpTheReportingServer.md).

Voir [Tidepool](../SettingUpAaps/Tidepool.md).

### xDrip

Sert à **envoyer** des données, comme les valeurs de glycémie et les traitements, à xDrip+ sur le même téléphone. Ses paramètres contiennent aussi **Envoyer l'état à xDrip+** : une ligne d'état avec l'IA et les GA, que xDrip+ et certaines applications compagnon pour montres affichent.

### Open Humans

Voir [Open Humans](../SupportingAaps/OpenHumans.md).

(Config-Builder-wear)=

### Montre

Surveiller et contrôler **AAPS** depuis une montre Wear OS. La configuration de la montre est expliquée sur la page [Montre connectée Wear OS](../WearOS/WearOsSmartwatch.md). Après avoir activé le plugin, choisissez ses options dans [Paramètres > Montre](#preferences-wear). L'utilisation de la montre est expliquée sur la page [Fonctionnement de AAPS via votre montre connectée Wear OS](../RemoteFeatures/RemoteControlWearOS.md).

(external-companion-apps)=

### Applications compagnon externes

Diffuse les données d'état d'**AAPS** sur le téléphone, pour que d'autres applications installées dessus puissent les afficher, par exemple des applications compagnon pour montres ou widgets. La diffusion contient la glycémie et sa tendance, l'IA, les GA, le débit basal et le débit basal temporaire, le nom du profil, l'état de la boucle, la batterie du téléphone et de la pompe, le niveau du réservoir et la progression du bolus. Activez-la seulement si une application compagnon que vous utilisez demande ces données.

Les applications connues pour lire cette diffusion sont [WatchDrip+](https://bigdigital.home.blog/) (montres Xiaomi et Amazfit), [GlucoDataHandler](https://github.com/pachi81/GlucoDataHandler) (complications et widgets Wear OS, et Android Auto via GlucoDataAuto) et l'application G-Watch. Leur configuration est décrite sur la page [Montres connectées et AAPS](#watches-external-companion-apps). Certaines utilisent aussi **Envoyer l'état à xDrip+** du plugin **xDrip** ci-dessus, pour une ligne d'état avec l'IA et les GA.

Dans les versions précédentes, ce plugin s'appelait **Samsung Tizen**, d'après l'[application G-Watch pour les montres Samsung Tizen](#Watchfaces-tizen) pour laquelle il a d'abord été créé.

### Garmin

Connexion à un appareil Garmin (Fenix, Edge...)

## Traitements

Ouvrez le **menu** (☰) et sélectionnez [Historique Traitements](#aaps-screens-treatments) pour voir les traitements enregistrés. Si vous voulez modifier ou supprimer une entrée (par ex. vous avez mangé moins de glucides que prévu), sélectionnez « Supprimer », puis saisissez la nouvelle valeur (changez l'heure si nécessaire) avec **Traitements → Glucides** dans la barre de navigation du bas (voir [Glucides](#screens-bolus-carbs)).

## Généralités

Dans **AAPS** 4, la catégorie **Général** de **Configuration** ne contient que **Autotune**. Les autres fonctions décrites ci-dessous sont toujours disponibles et n'ont plus besoin d'être activées ici ; chaque paragraphe indique où les trouver.

![Configuration > Général](../images/v4/Configuration/configuration_general.png)

### Aperçu

L'[écran principal](#AapsScreens-the-homescreen) d'**AAPS** n'est plus un plugin et n'a plus de paramètres propres dans **Configuration**. Les options qui se trouvaient ici sont dans **Paramètres** (icône en forme d'engrenage) : [Afficher les notes dans les boîtes de dialogue](#Preferences-show-notes-field-in-treatments-dialogs), [Voyants d'état](#Preferences-status-lights) et le [Pourcentage de Bolus](#Preferences-deliver-this-part-of-bolus-wizard-result) utilisé par l'assistant bolus. L'option super bolus d'**AAPS** 3.x [n'est pas disponible comme paramètre](#Preferences-advanced-settings-overview) dans **AAPS** 4.

(Config-Builder-actions)=

### Actions

L'onglet Actions d'**AAPS** 3.x n'existe plus. Ses boutons sont maintenant dans le panneau **Gestion**. Voir [Où est passé l'onglet Actions ?](#screens-action-tab).

### Automatisation

**Gestion → Automatisation** vous permet de gérer vos [Automatisations](../DailyLifeWithAaps/Automations.md), à partir de l'[Objectif 10](#objectives-objective10).

(Config-Builder-sms-communicator)=

### Communicateur SMS

Permet aux aidants à distance de contrôler certaines fonctions d'**AAPS** par SMS. Voir [Commandes SMS](../RemoteFeatures/SMSCommands.md) pour plus d'informations sur la configuration.

### Aliments

**Gestion → Aliments** affiche les aliments prédéfinis dans la base de données d'aliments de Nightscout. Voir le [Readme de Nightscout](https://github.com/nightscout/cgm-remote-monitor#food-custom-foods) pour plus d'informations sur la configuration.

Remarque : les entrées ne peuvent pas être utilisées dans le calculateur d'**AAPS**. (Affichage uniquement)

(Config-Builder-autotune)=

### Autotune

Vous pouvez activer Autotune, voir [ici](../AdvancedOptions/Autotune.md).

### Maintenance

Ouvrez le **menu** (☰) et sélectionnez **Maintenance** pour exporter / importer les paramètres et gérer les fichiers log.

![Écran Maintenance, fichiers log](../images/screens/maintenance.png)

![Écran Maintenance, gestion des fichiers](../images/screens/maintenance_2.png)

![Écran Maintenance, gestion de la base de données](../images/screens/maintenance_3.png)

### Configuration

S'appelle maintenant **Configuration** : c'est la page actuelle.