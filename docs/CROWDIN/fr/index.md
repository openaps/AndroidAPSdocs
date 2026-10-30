# Bienvenue dans la documentation de AAPS

![image](./images/basic-outline-of-AAPS.png)

```{admonition} Latest Release
:class: note

 xx xxxx 202x : Version {{ aaps_version }}.x.x is out. Check the [Release Notes](#latestrelease) to see what's new and follow the instructions in the [update manual](./Maintenance/UpdateToNewVersion.md) to update.

```

Android APS (**AAPS**) est une application open source pour les personnes vivant avec un diabète insulino-dépendant. C'est un système de pancréas artificiel ("artificial pancreas system" ou APS) qui fonctionne sur smartphone Android. **AAPS** utilise l'algorithme du logiciel OpenAPS et s'efforce de reproduire ce que fait un pancréas sain : maintenir la glycémie dans un intervalle correct pour être en bonne santé, via l'administration automatisée de l'insuline. To use **AAPS** you need **three** compatible devices: **(1)** an Android phone, **(2)** a continuous glucose monitor (CGM), and **(3)** an FDA/CE approved insulin pump. You can also add **(4)** cloud services to remotely control **AAPS**, share your data, and store it on a reporting server, and **(5)** a smartwatch.

This documentation explains how to set up and use **AAPS**. You can navigate through the **AAPS** documentation either through the menu on the left (and the handy **Search docs** function), or by using the [index](#index-aaps-documentation-index) at the bottom of this page.

## Vue d'ensemble de la documentation AAPS ("Les docs")

Section **1) Getting Started**, the [Introduction](Getting-Started/Introduction.md) explains the general concept of what an artificial pancreas system (APS) is designed to do. Cette page décrit le contexte global de la boucle, pourquoi **AAPS** a été développé, compare **AAPS** à d'autres systèmes, et parle de la sûreté. Elle donne des suggestions sur la façon d'aborder le sujet d'**AAPS** avec votre équipe médicale, explique pourquoi vous devez compiler l'application **AAPS** vous-même plutôt que de simplement la télécharger, et donne un aperçu basique de la façon dont communiquent les différents éléments d'un système **AAPS**. Elle aborde également l'accessibilité et qui peut bénéficier de l'utilisation d'**AAPS**.

Cette section vous prépare techniquement à assembler aussi rapidement et efficacement que possible les différents éléments de votre **AAPS**. Cette page donne un aperçu du processus que vous allez suivre, et vous donne une idée du temps nécessaire jusqu'à pouvoir profiter pleinement de toutes les fonctionnalités de **AAPS**. Cette section vous prépare techniquement à assembler aussi rapidement et efficacement que possible les différents éléments de votre **AAPS**. The subsection [CGM Configuration](./Getting-Started/CompatiblesCgms.md) explains how to optimize your CGM setup and which smoothing options are best.

Maintenant que vous avez une bonne compréhension du processus, vous pouvez démarrer l'assemblage de votre boucle **AAPS**.

Section **2) Build the app** explains why you need to build the **AAPS** app yourself rather than just downloading it, and takes you step-by-step through [building it](./SettingUpAaps/BuildingAaps.md) (using a browser, Android Studio, or the command line) and then transferring and installing it on your phone. It starts with an optional step, setting up a [dedicated Google account](./UsefulLinks/DedicatedGoogleAccountForAaps.md) to hold your builds and backups. It also explains [Android developer verification](#android-developer-verification), a change Google is rolling out from September 2026 that affects how self-built apps are installed.

Section **3) Setting up the reporting server** covers choosing and [setting up your reporting server](./SettingUpAaps/SettingUpTheReportingServer.md) (Nightscout or Tidepool) so you can review and share your data.

Section **4) [Configure AAPS](./SettingUpAaps/SetupWizard.md)** covers setting up the **AAPS** app using the setup Wizard, linking it with your CGM app and either a real or virtual insulin pump, as well as linking **AAPS** to your reporting server. You are then introduced to everything **AAPS** can do, through a safe, carefully paced, step-by-step process. This makes sure that you (or your child) are thoroughly familiar and comfortable navigating all the different levels and menu configurations before moving on to the next phase, commonly called the next "Objective". You keep progressing this way until you have enough experience to begin using the more advanced options in the app. Ces objectifs sont conçus spécifiquement de manière à débloquer progressivement plus de possibilités dans **AAPS** et à passer de la boucle ouverte à la boucle fermée.

Section **5) [Daily life with AAPS](./DailyLifeWithAaps/AapsScreens.md)** covers key **AAPS** features, to help you use (and customize) **AAPS**. This includes understanding the screens, carbs-on-board, sensitivity, DynamicISF, profile switching, temp targets, extended carbs (or eCarbs), automations, and [reviewing your data](./Maintenance/Reviewing.md) in the history browser and statistics. It also covers frequent topics like how to manage different types of meals, how to deal with cannula and sensor changes, smartphone updates, daylight saving changes, [traveling with AAPS](DailyLifeWithAaps/TimezoneTraveling-DaylightSavingTime.md), and sports. Les questions et réponses courantes se trouvent dans la section de dépannage.

Section **6) [Remote AAPS features](./RemoteFeatures/RemoteControl.md)** highlights a real strength of **AAPS**. Il y a tout un éventail de possibilités pour envoyer des commandes à distance à **AAPS**, ou simplement pour en suivre les données. Ceci est également utile pour les aidants qui souhaitent utiliser **AAPS** pour les mineurs, et pour les adultes diabétiques qui souhaitent soit surveiller leur glycémie (et d'autres mesures) de manière plus pratique que sur leur téléphone (sur une montre, dans la voiture _etc._), ou encore que d'autres personnes de leur entourage surveillent également les données. Ce chapitre fournit également des conseils pour utiliser Android Auto afin que vous puissiez afficher la glycémie dans la voiture.

Section **7) [Wear OS smartwatches](./WearOS/BuildingAapsWearOS.md)** gives information and procedures to use an Android **Wear OS** smartwatch with the dedicated **AAPS** watchfaces or custom watchfaces, either as a remote control of your phone or just a display indicator.


Section **8) [Maintenance of AAPS](./Maintenance/ExportImportSettings.md)** covers how to export and back up your settings (which is very important in case you lose/break your phone), gives the latest version notes, details how to update **AAPS** and explains what happens when a version reaches its end of life. En moyenne, vous pouvez vous attendre à une nouvelle version et 2 à 3 mises à jour par an. Comme pour tout logiciel, vous devez effectuer ces mises à jour, car elles corrigent des bogues mineurs et apportent des améliorations à **AAPS**. Sur la page de dépannage, il y a une section dédiée "Mise à jour" avec les questions fréquentes.

Section **9) [Help & Troubleshooting](GettingHelp/WhereCanIGetHelp.md)** should help direct you to the best places to go to find general help with **AAPS**. It is the single place to go when something is not working: the [Troubleshooting](GettingHelp/GeneralTroubleshooting.md) hub collects, by topic, the solutions to the most common problems, and the [FAQ](UsefulLinks/FAQ.md) answers frequent questions. C'est très important pour que vous puissiez entrer en contact avec d'autres utilisateurs aussi rapidement que possible, clarifier les questions et résoudre les écueils communs. Beaucoup de gens utilisent déjà **AAPS** avec succès, mais chacun a eu à un moment une question à laquelle il ou elle ne savait pas répondre seul(e). Grâce au grand nombre d'utilisateurs, les temps de réponse sont généralement très courts, de l'ordre de quelques heures. N'ayez pas peur de demander de l’aide, il n’y a pas de question stupide ! Nous encourageons les utilisateurs, quelque soit leur niveau, à poser autant de questions qu’ils jugent nécessaire pour les aider à fonctionner en toute sécurité. Ce chapitre comprend une section de résolution de problèmes d'ordre général avec **AAPS** et **AAPSClient** (une application de suivi) ainsi que des explications sur la façon d'envoyer vos données **AAPS** (fichiers de logs ou journaux) aux développeurs pour investigation, si vous pensez qu'un problème technique avec **AAPS** nécessite un examen.

Section **10)** covers **[Advanced AAPS options](./AdvancedOptions/FullClosedLoop.md)** such as how to progress from using **AAPS** for hybrid-closed looping (bolusing for meals _etc._) to full closed looping (no bolusing), how to [tune your profile](./GettingHelp/ProfileTuning.md) and use Autotune, and details development and engineering modes. Pour la plupart des utilisateurs, la version principale ou "Master" d'**AAPS** est tout à fait suffisante, sans avoir besoin de chercher dans ces options. Ce chapitre est destiné aux utilisateurs qui ont déjà un bon contrôle et cherchent à améliorer encore leur configuration.

In section **11) [How to support AAPS](SupportingAaps/HowToEditTheDocs.md)** we provide information so that you can support this project. Vous pouvez faire un don d'argent, d'équipement ou de connaissances. Vous pouvez suggérer/apporter des modifications à la documentation vous-même, aider avec [la traduction de la documentation](SupportingAaps/Translations) ou partager vos données via le projet Open Humans.

Section **12) Resources**, contains archived or additional documentation, including a subsection for [clinicians](UsefulLinks/ClinicianGuideToAaps.md) who have expressed interest in open source artificial pancreas technology such as **AAPS**, or for patients who want to share such information with their clinicians, this topic is also addressed in the introduction. D'autres références et ressources sur le diabète et la boucle sont aussi listées dans ce chapitre. It includes the [Glossary](./UsefulLinks/Glossary.md), a list of the acronyms (or short-term names) used throughout **AAPS**. C'est ici que vous trouverez ce que signifient les termes SI ou CT, par exemple.


 ### Prêt à commencer avec **AAPS**? Apprenez-en plus sur **AAPS** dans l'[Introduction](Getting-Started/Introduction.md).

```{admonition} SAFETY NOTICE
:class: AVIS DE SÉCURITÉ
La sécurité de **AAPS** repose sur les fonctionnalités de sécurité de votre matériel (téléphone, pompe, MCG). Utilisez uniquement une pompe à insuline et un MGC approuvés par les autorités sanitaires, en bon état de fonctionnement. N'utilisez pas de pompes à insuline ni de capteurs MGC endommagés, modifiés ou fabriqués maison. Utilisez uniquement du matériel d'origine pour les consommables (applicateurs, cathéters et réservoirs d'insuline), approuvés par le fabricant de votre pompe et de votre MGC. L'utilisation de matériel non testé ou modifié peut entraîner un manque de précision et des erreurs de dosage de l'insuline, ce qui représente un risque important pour l'utilisateur. 

N'utilisez pas **AAPS** si vous prenez des inhibiteurs de SGLT-2 (gliflozines), car ils font baisser la glycémie. Le risque d'acidocétose diabétique est accru à cause de la baisse de l'insuline administrée ; et celui d'hypoglycémie est accru à cause de la baisse de la glycémie. 
```

```{admonition} Disclaimer
:class: note

Toutes les informations et le code décrits ici le sont à des fins d'information et d'éducation uniquement. Vous utilisez [Nightscout](https://nightscout.github.io/) et AAPS à vos risques et périls. N'utilisez pas les données ni le code pour prendre des décisions médicales. Nightscout n'a actuellement entrepris aucune démarche pour se conformer à la loi sur la confidentialité des données médicales HIPAA aux États-Unis, ni dans aucun autre pays. 
- L'utilisation du code de github.com est sans garantie ni support formel d'aucune sorte. Veuillez consulter la LICENCE du dépôt de code pour plus de détails.
- Tous les noms de produits et de sociétés, marques commerciales, marques de service, marques déposées, sont la propriété de leurs détenteurs respectifs. La description de leur utilisation est à titre informatif et n'implique aucune affiliation avec ces sociétés ni aucune approbation de leur part.

**AAPS** has no association with, and is not endorsed by: [SOOIL](http://www.sooil.com/eng/), [Dexcom](https://www.dexcom.com/), [Accu-Chek, Roche Diabetes Care](https://www.accu-chek.com/), [Insulet](https://www.insulet.com/), [Medtronic](https://www.medtronic.com/), [Diaconn](https://www.diaconn.com/en/index.html), [EOFlow](http://www.eoflow.com/), [MicroTech Medical (Equil)](https://www.microtechmd.com/), [Medtrum](https://www.medtrum.com/), [Senseonics (Eversense)](https://www.senseonics.com/), [i-SENS (CareSens)](https://i-sens.com/), [POCTech](https://poctechcorp.com/en/), [Ottai](https://ottai.com/) or [Syai](https://www.syai.com/).

```

(index-aaps-documentation-index)=

## Index de la documentation AAPS

```{toctree}
:caption: Using this documentation

Change language and version <./NavigateDoc/ChangeLanguageVersion.md>
Search the documentation <./NavigateDoc/SearchDoc.md>
Documentation updates <./Maintenance/DocumentationUpdate.md>
```
```{toctree}
:caption: 1) Getting started

Introduction to AAPS <./Getting-Started/Introduction.md>
Preparing for AAPS <./Getting-Started/PreparingForAaps.md>
Component Overview <./Getting-Started/ComponentOverview.md>
- Compatible pumps <./Getting-Started/CompatiblePumps.md>
- Compatible CGMs <./Getting-Started/CompatiblesCgms.md>
- Compatible phones  <./Getting-Started/Phones.md>
- Compatible watches  <./Getting-Started/Watches.md>
```

```{toctree}
:caption: 2) Build the app

Dedicated Google account for AAPS (optional) <./UsefulLinks/DedicatedGoogleAccountForAaps.md>
Building AAPS <./SettingUpAaps/BuildingAaps.md>
- Browser Build <./SettingUpAaps/BrowserBuild.md>
- Android Studio Build <./SettingUpAaps/ComputerBuild.md>
- CLI Build <./SettingUpAaps/CLIBuild.md>
Transferring and Installing AAPS <./SettingUpAaps/TransferringAndInstallingAaps.md>
```
```{toctree}
:caption: 3) Setting up the reporting server

Setting up the reporting server <./SettingUpAaps/SettingUpTheReportingServer.md>
- Nightscout <./SettingUpAaps/Nightscout.md>
- Tidepool <./SettingUpAaps/Tidepool.md>
```
```{toctree}
:caption: 4) Configure AAPS

Setup Wizard <./SettingUpAaps/SetupWizard.md>
Your AAPS Profile <./SettingUpAaps/YourAapsProfile.md>
Change AAPS configuration <./SettingUpAaps/ChangeAapsConfiguration.md>
- Configuration (Config Builder) <./SettingUpAaps/ConfigBuilder.md>
- Preferences <./SettingUpAaps/Preferences.md>
Completing the objectives <./SettingUpAaps/CompletingTheObjectives.md>
```

```{toctree}
:caption: 5) Daily Life with AAPS

AAPS Screens <./DailyLifeWithAaps/AapsScreens.md>
Key AAPS Features <./DailyLifeWithAaps/KeyAapsFeatures.md>
COB calculation <./DailyLifeWithAaps/CobCalculation.md>
Sensitivity detection <./DailyLifeWithAaps/SensitivityDetectionAndCob.md>
Dynamic ISF <./DailyLifeWithAaps/DynamicISF.md>
Profile Switch & Profile Percentage <./DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md>
Temp-Targets <./DailyLifeWithAaps/TempTargets.md>
Extended carbs <./DailyLifeWithAaps/ExtendedCarbs.md>
QuickWizards <./DailyLifeWithAaps/QuickWizards.md>
Scenes <./DailyLifeWithAaps/Scenes.md>
Automations <./DailyLifeWithAaps/Automations.md>
QuickLaunch toolbar <./DailyLifeWithAaps/QuickLaunch.md>
Home screen widgets <./DailyLifeWithAaps/Widgets.md>
Food database <./DailyLifeWithAaps/Food.md>
Global search <./DailyLifeWithAaps/GlobalSearch.md>
Reviewing your data <./Maintenance/Reviewing.md>
AAPS for children <./DailyLifeWithAaps/AapsForChildren.md>
Pumps and cannulas <./DailyLifeWithAaps/PumpsAndCannulas.md>
Timezone traveling & Daylight Saving Time <./DailyLifeWithAaps/TimezoneTraveling-DaylightSavingTime.md>

```

```{toctree}
:caption: 6) Remote AAPS features

Remote monitoring <./RemoteFeatures/RemoteMonitoring.md>
Following Only <./RemoteFeatures/FollowingOnly.md>
Android Auto <./RemoteFeatures/AndroidAuto.md>
Remote control <./RemoteFeatures/RemoteControl.md>
The AAPSClient app <./RemoteFeatures/AapsClient.md>
Master ↔ Client control <./RemoteFeatures/ClientMasterControl.md>
SMS Commands <./RemoteFeatures/SMSCommands.md>

```
```{toctree}
:caption: 7) Wear OS Smartwatches

AAPS for Wear OS <./WearOS/BuildingAapsWearOS.md>
Use the smartwatch <./WearOS/WearOsSmartwatch.md>
Remote control <./RemoteFeatures/RemoteControlWearOS.md>
Custom watchfaces reference <./ExchangeSiteCustomWatchfaces/CustomWatchfaceReference.md>
Exchange site custom watchfaces <./ExchangeSiteCustomWatchfaces/index.md>

```

```{toctree}
:caption: 8) Maintenance of AAPS

Export/Import Settings <./Maintenance/ExportImportSettings.md>
AAPS Release Notes <./Maintenance/ReleaseNotes.md>
What changed in AAPS v4 <./Maintenance/V4Changes.md>
Updating to a new version of AAPS <./Maintenance/UpdateToNewVersion.md>
- Browser Update (fork) <./Maintenance/UpdateBrowserBuild.md>
- Android Studio Update <./Maintenance/UpdateComputerBuild.md>
End of life <./Maintenance/EndOfLife.md>

```

```{toctree}
:caption: 9) Help & Troubleshooting

Where can I get help with AAPS <./GettingHelp/WhereCanIGetHelp.md>
Troubleshooting (start here) <./GettingHelp/GeneralTroubleshooting.md>
- Bluetooth troubleshooting <./GettingHelp/BluetoothTroubleshooting.md>
- Troubleshooting NSClient <./GettingHelp/TroubleshootingNsClient.md>
- Troubleshooting Android Studio <./GettingHelp/TroubleshootingAndroidStudio.md>
- Browser build troubleshooting <./GettingHelp/BrowserBuildTroubleshooting.md>
- Reinstalling AAPS (new keystore) <./GettingHelp/ReinstallAaps.md>
- Accessing logfiles <./GettingHelp/AccessingLogFiles.md>
FAQ <./UsefulLinks/FAQ.md>
```

```{toctree}
:caption: 10) Advanced AAPS options

Full Closed Loop <./AdvancedOptions/FullClosedLoop.md>
Profile Tuning Guide <./GettingHelp/ProfileTuning.md>
Autotune <./AdvancedOptions/Autotune.md>
Insulin concentration <./AdvancedOptions/InsulinConcentration.md>
Dev branch <./AdvancedOptions/DevBranch.md>
Browser build: cherry-pick a commit <./AdvancedOptions/BrowserBuildCherryPick.md>

```
```{toctree}
:caption: 11) How to support AAPS

How to help <./SupportingAaps/HowCanIHelp.md>
Editing the docs <./SupportingAaps/HowToEditTheDocs.md>
Translating the app and docs <./SupportingAaps/Translations.md>
State of translations <./SupportingAaps/StateOfTranslations.md>
Open Humans Uploader <./SupportingAaps/OpenHumans.md>

```
```{toctree}
:caption: 12) Resources

Glossary <./UsefulLinks/Glossary.md>
General diabetes and looping resources <./UsefulLinks/BackgroundReading.md>
For Clinicians <./UsefulLinks/ClinicianGuideToAaps.md>
```
