# Générateur de configuration

Selon vos paramètres, vous pouvez ouvrir le générateur de configuration via un onglet situé en haut de l'écran ou via le menu hamburger.

![Ouvrir le générateur de configuration](../images/ConfBuild_Open.png)

Le Générateur de configuration (Conf) est l'onglet dans lequel vous activez et désactivez les fonctions modulaires. Les cases du côté gauche (A) vous permettent de choisir celles à utiliser, les cases du côté droit (C) vous permettent de les visualiser sous forme d'onglet (E) dans AndroidAPS. Si la case de droite n'est pas cochée, vous pouvez atteindre la fonction en utilisant le menu hamburger (D) en haut à gauche de l'écran.

Lorsque des paramètres supplémentaires sont disponibles dans le module, vous pouvez cliquer sur la roue crantée (B) qui vous amènera a des paramètres spécifiques dans les préférences.

**Première configuration :** Depuis lAPS 2.0, un assistant de configuration vous guide à travers le processus de configuration de AndroidAPS. Appuyez sur le menu 3 points en haut à droite de l'écran (F) et sélectionnez 'Assistant de configuration' pour l'utiliser.

![Sections du générateur de configuration et roue crantée](../images/ConfBuild_ConfigBuilder.png)

## Onglet ou menu hamburger

Avec la case à cocher sous le symbole de l'oeil, vous pouvez décider comment ouvrir la section correspondante du programme.

![Onglet ou menu hamburger](../images/ConfBuild_TabOrHH.png)

## Profil

Sélectionnez le profil de basal que vous souhaitez utiliser. Voir la page [Profils](../Usage/Profiles.md) pour plus d'informations sur la configuration.

### Profil local (recommandé)

Le profil local utilise le profil de basal entré manuellement sur le téléphone. Dès qu'il est sélectionné, un nouvel onglet apparaît dans AAPS, où vous pouvez modifier les données de profil lues à partir de la pompe si nécessaire. Avec le changement de profil suivant, les données sont ensuite écrites dans la pompe dans le profil 1. Ce profil est recommandé car il ne dépend pas de la connectivité Internet.

Vos profils locaux font partie des [paramètres exportés](../Usage/ExportImportSettings.rst). Donc assurez vous d'avoir une sauvegarde dans un endroit sûr.

![Paramètres profil local](../images/LocalProfile_Settings.png)

Boutons :

* Plus vert : ajouter
* X rouge : supprimer
* Flèche bleue : dupliquer

Si vous apportez des modifications à votre profil, assurez-vous que vous éditez le profil correct. Dans l'onglet Profil, ce n'est pas toujours le profil actuellement utilisé qui est affiché. Par ex. si vous avez fait un changement de profil à partir du bouton de l'écran d'accueil, il peut être différent du profil affiché dans l'onglet Profil car il n'y a pas de connexion entre les deux.

#### Dupliquer un changement de profil

Vous pouvez facilement créer un profil local à partir d'un changement de profil. Dans ce cas, le décalage temporel et le pourcentage seront appliqués au nouveau profil local.

1. Allez dans l'onglet Traitements.
2. Sélectionnez Changement Profil.
3. Appuyez sur "Dupliquer".
4. Vous pouvez éditer le nouveau profil local dans l'onglet Profil local (PL) ou via le menu hamburger.

![Dupliquer un changement de profil](../images/LocalProfile_ClonePS.png)

Si vous souhaitez passer du profil Nightscout au profil local, faites simplement un changement de profil sur votre profil NS et clonez le changement de profil comme décrit ci-dessus.

#### Remonter les profils locaux sur Nightscout

Les profils locaux peuvent également être téléchargés sur Nightscout. Les paramètres peuvent être trouvés dans [les préférences NSClient](../Configuration/Preferences#nsclient).

![Télécharger profil local sur NS](../images/LocalProfile_UploadNS2.png)

Avantages :

* il n'est pas nécessaire d'avoir une connexion internet pour modifier les paramètres du profil
* les modifications du profil peuvent être effectuées directement sur le téléphone
* un nouveau profil peut être créé à partir d'un changement de profil
* les profils locaux peuvent être téléchargés sur Nightscout

Inconvénients :

* aucun

### Assistant Profil

L'assistant profil a deux fonctions :

1. Trouver un profil pour les enfants
2. Comparer deux profils ou changements de profil pour cloner un nouveau profil

Les détails sont expliqués sur la [page d'aide des profils](../Configuration/profilehelper.rst).

### Profil NS

NS Profile utilise les profils que vous avez enregistrés sur votre site Nightscout (https: //[yournightscoutsiteaddress]/profile). Vous pouvez utiliser le [changement de profil](../Usage/Profiles.md) pour définir lequel de ces profils est actif, ceci écrit le profil dans la pompe en cas de problème avec AndroidAPS. Cela vous permet de créer facilement plusieurs profils dans Nightscout (par ex. travail, maison, sports, vacances, etc.). Peu après avoir cliqué sur "Sauver", ils seront transférés à AAPS si votre smartphone est en ligne. Même sans connexion Internet ou sans connexion avec Nightscout, les profils Nightscout sont disponibles dans AAPS une fois qu'ils ont été synchronisés.

Effectuez un [changement de profil](../Getting-Started/Screenshots.md#profil-actuel) pour activer un profil de Nightscout. AAPS va écrire le profil sélectionné dans la pompe après le changement de profil, de sorte qu'il soit disponible sans AAPS en cas d'urgence et qu'il continue de s'exécuter.

Avantages :

* profils multiples
* facile à modifier via un PC ou une tablette

Inconvénients :

* aucune modification locale des paramètres de profil
* le profil ne peut pas être modifié directement sur le téléphone

## Insuline

![Insulin type](../images/ConfBuild_Insulin.png)

* Select the type of insulin curve you are using.
* The options 'Rapid-Acting Oref', Ultra-Rapid Oref', 'Lyumjev' and 'Free-Peak Oref' all have an exponential shape. More information is listed in the [OpenAPS docs](http://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/understanding-insulin-on-board-calculations.html#understanding-the-new-iob-curves-based-on-exponential-activity-curves). 
* The curves will vary based on the DIA and the time to peak.
    
    * PURPLE line shows how much **insulin remains** after it has been injected as it decays with time.
    * BLUE line shows **how active** insulin is.

### DAI

* The DIA is not the same for each person. That's why you have to test it for yourself. 
* But it must always be at least 5 hours.
* For a lot of people using ultra-rapid insulins like Fiasp there is practically no noticeable effect after 3-4 hours any more, even if 0.0xx units are available as a rule then. This residual amount can still be noticeable during sports, for example. Therefore, AndroidAPS uses minimum 5h as DIA.
* You can read more about that in the Insulin Profile section of [this](../Getting-Started/Screenshots#insulin-profile) page. 

### Insulin type differences

* For 'Rapid-Acting', 'Ultra-Rapid' and 'Lyumjev' the DIA is the only variable you can adjust by yourself, the time to peak is fixed. 
* Free-Peak allows you to adjust both the DIA and the time to peak, and must only be used by advanced users who know the effects of these settings. 
* The [insulin curve graph](../Getting-Started/Screenshots#insulin-profile) helps you to understand the different curves. 
* You can view it by enabling the tickbox to show it as a tab, otherwise it will be in the hamburger menu.

#### Rapid-Acting Oref

* recommended for Humalog, Novolog and Novorapid
* DIA = at least 5.0h
* Max. peak = 75 minutes after injection (fixed, not adjustable)

#### Ultra-Rapid Oref

* recommended for FIASP
* DIA = at least 5.0h
* Max. peak = 55 minutes after injection (fixed, not adjustable)

#### Lyumjev

* special insulin profile for Lyumjev
* DIA = at least 5.0h
* Max. peak = 45 minutes after injection (fixed, not adjustable)

#### Free Peak Oref

* With the "Free Peak 0ref" profile you can individually enter the peak time.
* The DIA is automatically set to 5 hours if it is not specified higher in the profile.
* This effect profile is recommended if an unbacked insulin or a mixture of different insulins is used.

## Source GLY

Select the blood glucose source you are using - see [BG Source](BG-Source.rst) page for more setup information.

* [xDrip+](https://xdrip-plus-updates.appspot.com/stable/xdrip-plus-latest.apk)
* NSClient BG
* [MM640g](https://github.com/pazaan/600SeriesAndroidUploader/releases)
* [Glimp](https://play.google.com/store/apps/details?id=it.ct.glicemia&hl=de) - only version 4.15.57 and newer are supported
* [Dexcom App (patched)](https://github.com/dexcomapp/dexcomapp/) - Select 'Send BG data to xDrip+' if you want to use xDrip+ alarms.
    
    ![Config Builder BG source](../images/ConfBuild_BGSource.png)

* [Poctech](http://www.poctechcorp.com/en/contents/268/5682.html)

* [Tomato App](http://tomato.cool/) for MiaoMiao device
* Random BG: Generates random BG data (Demo mode only)

## Pompe

Select the pump you are using.

* [Dana R](DanaR-Insulin-Pump.md)
* Dana R Korean (for domestic DanaR pump)
* Dana Rv2 (DanaR pump with unofficial firmware upgrade)
* [Dana RS](DanaRS-Insulin-Pump.md)
* [Accu Chek Insight](Accu-Chek-Insight-Pump.md)
* [Accu Chek Combo](Accu-Chek-Combo-Pump.md) (requires ruffy installation)
* [Medtronic](MedtronicPump.md)
* MDI (receive AAPS suggestions for your multiple daily injections therapy)
* Virtual pump (open loop for pump which don't have any driver yet - AAPS suggestions only)

For dana pumps, use **Advanced settings** to activate BT watchdog if necessary. It switches off bluetooth for one second if no connection to the pump is possible. This may help on some phones where the bluetooth stack freezes.

[Password for Dana RS pump](../Configuration/DanaRS-Insulin-Pump.md) must be entered correctly. Password was not checked in previous versions.

## Estimation de Sensibilité

Select the type of sensitivity detection. For more details of different designs please [read on here](../Configuration/Sensitivity-detection-and-COB.md). This will analyze historical data on the go and make adjustments if it recognizes that you are reacting more sensitively (or conversely, more resistant) to insulin than usual. More details about the Sensitivity algorithm can be read in the [OpenAPS docs](http://openaps.readthedocs.io/en/latest/docs/walkthrough/phase-4/advanced-features.html#auto-sensitivity-mode).

You can view your sensitivity on the homescreen by selecting SEN and watching the white line. Note, you need to be in [Objective 8](../Usage/Objectives#objective-8-adjust-basals-and-ratios-if-needed-and-then-enable-autosens) in order to let Sensitivity Detection/[Autosens](../Usage/Open-APS-features#autosens) automatically adjust the amount of insulin delivered. Before reaching that objective, the Autosens percentage / the line in your graph is displayed for information only.

### Paramètres d’absorption

If you use Oref1 with SMB you must change **min_5m_carbimpact** to 8. The value is only used during gaps in CGM readings or when physical activity "uses up" all the blood glucose rise that would otherwise cause AAPS to decay COB. At times when [carb absorption](../Usage/COB-calculation.rst) can't be dynamically worked out based on your bloods reactions it inserts a default decay to your carbs. De base, c'est une sécurité intégrée.

## APS

Select the desired APS algorithm for therapy adjustments. You can view the active detail of the chosen algorithm in the OpenAPS(OAPS) tab.

* OpenAPS AMA (advanced meal assist, state of the algorithm in 2017)  
    More detail about OpenAPS AMA can be found in the [OpenAPS docs](http://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autosens.html#advanced-meal-assist-or-ama). In simple terms the benefits are after you give yourself a meal bolus the system can high-temp more quickly IF you enter carbs reliably. 
* [OpenAPS SMB](../Usage/Open-APS-features.md) (super micro bolus, most recent algorithm for advanced users)  
    Note you need to be in [Objective 10](../Usage/Objectives#objective-10-enabling-additional-oref1-features-for-daytime-use-such-as-super-micro-bolus-smb) in order to use OpenAPS SMB and min_5m_carbimpact must be set to 8 in Config builder > Sensitivity detection > Sensitivity Oref1 settings.

## Boucle

* Switch between Open Loop, Closed Loop and Low Glucose Suspend (LGS).

![Config builder - loop mode](../images/ConfigBuilder_LoopLGS.png)

### Boucle Ouverte

* AAPS continuously evaluates all available data (IOB, COB, BG...) and makes treatment suggestions on how to adjust your therapy if necessary. 
* The suggestions will not be executed automatically (as in closed loop) have to be entered manually into the pump or by using a button in case you are using a compatible pump (Dana R/RS or Accu Chek Combo). 
* This option is for getting to know how AndroidAPS works or if you are using an unsupported pump.

### Boucle Fermée

* AAPS continuously evaluates all available data (IOB, COB, BG...) and automatically adjusts the treatment if necessary (i.e. without further intervention by you) to reach the set target range or value (bolus delivery, temporary basal rate, insulin switch-off to avoid hypo etc.). 
* The Closed Loop works within numerous safety limits, which you can be set individually.
* Closed Loop is only possible if you are in [Objective 6](../Usage/Objectives#objective-6-starting-to-close-the-loop-with-low-glucose-suspend) or higher and use a supported pump.
* Please note: In closed loop mode a single target instead of target range (i.e. 5,5 mmol or 100 mg/dl instead of 5,0 - 7,0 mmol or 90 - 125 mg/dl) is recommended.

### Low Glucose Suspend (LGS)

* maxIOB is set to zero
* This means if blood glucose is dropping it can reduce basal for you.
* But if blood glucose is rising no automatic correction will be made. Your basal rates will remain the same as your selected profile.
* Only if basal IOB is negative (from a previous Low Glucose Suspend) additional insulin will be given to lower BG.

### Minimal request change

* When using open loop you will receive notifications every time AAPS recommends to adjust basal rate. 
* To reduce number of notifications you can either use a wider bg target range or increase percentage of the minimal request rate.
* This defines the relative change required to trigger a notification.

## Objectifs (programme d'apprentissage)

AndroidAPS has a leraning program (objectives) that you have to fulfill step by step. This should guide you safely through setting up a closed loop system. It guarantees that you have set everything up correctly and understand what the system does exactly. This is the only way you can trust the system.

You should [export your settings](../Usage/ExportImportSettings.rst) (including progress of the objectives) on a regularly basis. In case you have to replace your smartphone later (new purchase, display damage etc.) you can simply import those settings.

See [Objectives](../Usage/Objectives.rst) page for more information.

## Traitements

If you view the Treatments (Treat) tab, you can see the treatments that have been uploaded to nightscout. Should you wish to edit or delete an entry (e.g. you ate less carbs than you expected) then select 'Remove' and enter the new value (change the time if necessary) through the [carbs button on the home screen](../Getting-Started/Screenshots#carb-correction).

## Généralités

### Aperçu

Displays the current state of your loop and buttons for most common actions (see [section The Homescreen](../Getting-Started/Screenshots.md) for details). Settings can be accessed by clicking the cog wheel.

#### Garder l'écran allumé

Option 'Keep screen on' will force Android to keep the screen on at all times. This is useful for presentations etc. But it consumes a lot of battery power. Therefore, it is recommended to connect the smartphone to a charger cable.

#### Boutons

Define which Buttons are shown on the home screen.

* Traitements
* Assistant
* Insuline
* Glucides
* CGM (opens xDrip+)
* Étalonnage

Furthermore, you can set shortcuts for insulin and carb increments and decide whether the notes field should be shown in treatment dialogues.

#### QuickWizard settings

Create a button for a certain standard meal (carbs and calculation method for the bolus) which will be displayed on the home screen. Use for standard meals frequently eaten. If different times are specified for the different meals you will always have the appropriate standard meal button on the home screen, depending on the time of day.

Note: Button will not be visible if outside the specified time range or if you have enough IOB to cover the carbs defined in the QuickWizard button.

![QuickWizard button](../images/ConfBuild_QuickWizard.png)

#### Default Temp-Targets

Choose default temp-targets (duration and target). Preset values are:

* eating soon: target 72 mg/dl / 4.0 mmol/l, duration 45 min
* activity: target 140 mg/dl / 7.8 mmol/l, duration 90 min
* hypo: target 125 mg/dl / 6.9 mmol/l, duration 45 min

#### Insuline par défaut pour Amorcer/Remplir

Choose the default amounts of the three buttons in fill/prime dialogue, depending on the length of your catheter.

#### Range of visualization

Choose the high and low marks for the BG-graph on AndroidAPS overview and smart watch. It is only the visualization, not the target range for your BG. Example: 70 - 180 mg/dl or 3.9 - 10 mmol/l

#### Raccourcir les titres des onglets

Choose wether the tab titles in AndroidAPS are long (e.g. ACTIONS, LOCAL PROFILE, AUTOMATION) or short (e.g. ACT, LP, AUTO)

#### Show notes field in treatment dialogs

Choose if you want to have a notes field when entering treatments or not.

#### Voyants d'état

Choose if you want to have [status lights](../Configuration/Preferences#status-lights) on overview for canula age, insulin age, sensor age, battery age, reservoir level or battery level. When warning level is reached, the color of the status light will switch to yellow. Critical age will show up in red.

#### Advanced settings

**Deliver this part of bolus wizard result**: When using SMB, many people do not meal-bolus 100% of needed insulin, but only a part of it (e.g. 75 %) and let the SMB with UAM (unattended meal detection) do the rest. In this setting, you can choose a default value for the percenteage the bolus wizard should calculate with. If this setting is 75 % and you had to bolus 10u, the bolus wizard will propose a meal bolus of only 7.5 units.

**Enable super bolus functionality in wizard** (It is different from *super micro bolus*!): Use with caution and do not enable until you learn what it really does. Basically, the basal for the next two hours is added to the bolus and a two hour zero-temp activated. **AAPS looping functions will be disabled - so use with care! If you use SMB AAPS looping functions will be disabled according to your settings in ["Max minutes of basal to limit SMB to"](../Usage/Open-APS-features#max-minutes-of-basal-to-limit-smb-to), if you do not use SMB looping functions will be disabled for two hours.** Details on super bolus can be found [here](https://www.diabetesnet.com/diabetes-technology/blue-skying/super-bolus).

### Actions

* Some buttons to quickly access common features.
* See [AAPS screenshots](../Getting-Started/Screenshots#action-tab) for details.

### Automatisation

User defined automation tasks ('if-then-else'). Please [read on here](../Usage/Automation.rst).

### Communicateur SMS

Allows remote caregivers to control some AndroidAPS features via SMS, see [SMS Commands](../Children/SMS-Commands.rst) for more setup information.

### Food

Displays the food presets defined in the Nightscout food database, see [Nightscout Readme](https://github.com/nightscout/cgm-remote-monitor#food-custom-foods) for more setup information.

Note: Entries cannot be used in the AndroidAPS calculator. (View only)

### Wear

Monitor and control AAPS using your Android Wear watch (see [page Watchfaces](../Configuration/Watchfaces.md)). Use settings (cog wheel) to define which variables should be considered when calculating bolus given though your watch (i.e. 15min trend, COB...).

Si vous voulez commander AAPS depuis la montre (bolus etc) alors dans les "Paramètres Wear" vous devez activer "Commandes depuis la montre".

![Wear settings](../images/ConfBuild_Wear.png)

Through Wear tab or hamburger menu (top left of screen, if tab is not displayed) you can

* Resend all data. Might be helpful if watch was not connected for some time and you want to push the information to the watch.
* Open settings on your watch directly from your phone.

### xDrip Statusline (watch)

Display loop information on your xDrip+ watchface (if you are not using AAPS/[AAPSv2 watchface](../Configuration/Watchfaces.md)

### NSClient

* Setup sync of your AndroidAPS data with Nightscout.
* Settings in [preferences](../Configuration/Preferences#nsclient) can be opened by clicking the cog wheel.

### Maintenance

Email and number of logs to be send. Normally no change necessary.

### Générateur de configuration

Use tab for config builder instead of hamburger menu.