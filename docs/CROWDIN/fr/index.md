# Bienvenue dans la documentation de AAPS

![image](./images/basic-outline-of-AAPS.png)

Android APS (**AAPS**) est une application open source pour les personnes vivant avec un diabète insulino-dépendant. C'est un système de pancréas artificiel ("artificial pancreas system" ou APS) qui fonctionne sur smartphone Android. **AAPS** uses an OpenAPS software algorithm and aims to do what a real pancreas does: keep blood sugar levels within healthy limits by using automated insulin dosing. To use **AAPS** you need **three** compatible devices: **(1)** an Android phone, **(2)** a continuous glucose monitor (CGM), and **(3)** a FDA/CE approved insulin pump. Optionally you will need cloud services **(4)** to remote control **AAPS**, share your data and store them in a reporting server, then also **(5)** a smartwatch.

Cette documentation explique comment installer et utiliser **AAPS**. Vous pouvez naviguer dans la documentation de **AAPS** soit via le menu de gauche (et la fonction pratique "**Rechercher docs**"), soit en utilisant l'[index](#index-aaps-documentation-index) en bas de cette page.

## Vue d'ensemble de la documentation AAPS ("Les docs")

Section **2) Getting Started**, the [Introduction](Getting-Started/Introduction.md) explains the general concept of what an artificial pancreas system (APS) is designed to do. Cette page décrit le contexte global de la boucle, pourquoi **AAPS** a été développé, compare **AAPS** à d'autres systèmes, et parle de la sûreté. Elle donne des suggestions sur la façon d'aborder le sujet d'**AAPS** avec votre équipe médicale, explique pourquoi vous devez compiler l'application **AAPS** vous-même plutôt que de simplement la télécharger, et donne un aperçu basique de la façon dont communiquent les différents éléments d'un système **AAPS**. Elle aborde également l'accessibilité et qui peut bénéficier de l'utilisation d'**AAPS**.

Cette section vous prépare techniquement à assembler aussi rapidement et efficacement que possible les différents éléments de votre **AAPS**. Cette page donne un aperçu du processus que vous allez suivre, et vous donne une idée du temps nécessaire jusqu'à pouvoir profiter pleinement de toutes les fonctionnalités de **AAPS**. Cette section vous prépare techniquement à assembler aussi rapidement et efficacement que possible les différents éléments de votre **AAPS**. Le sous-chapitre [Configuration MGC](./Getting-Started/CompatiblesCgms.md) explique comment optimiser la configuration de votre capteur de glycémie et quelles options de lissage sont les meilleures.

Maintenant que vous avez une bonne compréhension du processus, vous pouvez démarrer l'assemblage de votre boucle **AAPS**.

Vous trouverez les instructions détaillées pour ce faire dans le chapitre **3) Installation d'AAPS**. On y parlera du choix et du [serveur de reporting](./SettingUpAaps/SettingUpTheReportingServer.md) (Nightscout ou Tidepool) afin que vous puissiez analyser et partager vos données, de la préparation de votre ordinateur pour installer Android Studio, de la compilation elle-même de l'application AAPS et du transfert de l'application AAPS sur votre téléphone. Ce chapitre décrit également la configuration de l'application **AAPS** à l'aide de l'Assistant de configuration, pour qu'il puisse communiquer avec votre application MGC et avec une pompe à insuline réelle ou virtuelle, ainsi qu'en liant **AAPS** à votre serveur de reporting. Vous serez ensuite petit à petit guidé dans l'utilisation d'**AAPS**, via un processus progressif, sécurisé et soigneusement calibré. Ce processus est conçu pour s'assurer que vous/votre enfant connaissez bien et êtes à l'aise dans la navigation entre les différents menus et sous-menus de configuration avant de passer à la phase suivante. Ces phases sont communément appelées Objectifs, et visent à vous faire acquérir suffisamment d'expérience pour pouvoir commencer à utiliser les fonctionnalités les plus avancées de l'application. Ces objectifs sont conçus spécifiquement de manière à débloquer progressivement plus de possibilités dans **AAPS** et à passer de la boucle ouverte à la boucle fermée.

Section **4) Daily life with AAPS** covers key **AAPS** features, to help you use (and customise)  **AAPS**. Vous y trouverez des explications sur les écrans de l'application, les glucides actifs, la sensibilité, le changement de profil, les cibles temporaires, les glucides étendus (ou eCarbs), les automatisations et la SI Dynamique. On y parle également de sujets tels que la gestion de différents types de repas, le changement de cathéter ou de capteur, les mises à jour du smartphone, les changements d'heure, [voyager avec AAPS](DailyLifeWithAaps/TimezoneTraveling-DaylightSavingTime.md) et faire du sport. Les questions et réponses courantes se trouvent dans la section de dépannage.

Section **5) [Remote AAPS features](./RemoteFeatures/RemoteControl.md)** highlights a real strength of **AAPS**. Il y a tout un éventail de possibilités pour envoyer des commandes à distance à **AAPS**, ou simplement pour en suivre les données. Ceci est également utile pour les aidants qui souhaitent utiliser **AAPS** pour les mineurs, et pour les adultes diabétiques qui souhaitent soit surveiller leur glycémie (et d'autres mesures) de manière plus pratique que sur leur téléphone (sur une montre, dans la voiture _etc._), ou encore que d'autres personnes de leur entourage surveillent également les données. Ce chapitre fournit également des conseils pour utiliser Android Auto afin que vous puissiez afficher la glycémie dans la voiture.

Section **6) Wear OS smartwatches** gives information and procedures to use an Android **Wear OS** smartwatch with the dedicated **AAPS** watchfaces or custom watchfaces, either as a remote control of your phone or just a display indicator.


Section **7) Maintenance of AAPS** covers how to export and backup your settings (which is very important in case you lose/break your phone), gives the latest version notes and details how to update **AAPS**. En moyenne, vous pouvez vous attendre à une nouvelle version et 2 à 3 mises à jour par an. Comme pour tout logiciel, vous devez effectuer ces mises à jour, car elles corrigent des bogues mineurs et apportent des améliorations à **AAPS**. Sur la page de dépannage, il y a une section dédiée "Mise à jour" avec les questions fréquentes.

Section **8) [Getting Help](GettingHelp/WhereCanIGetHelp.md)** should help direct you to the best places to go to find general help with **AAPS**. C'est très important pour que vous puissiez entrer en contact avec d'autres utilisateurs aussi rapidement que possible, clarifier les questions et résoudre les écueils communs. Beaucoup de gens utilisent déjà **AAPS** avec succès, mais chacun a eu à un moment une question à laquelle il ou elle ne savait pas répondre seul(e). Grâce au grand nombre d'utilisateurs, les temps de réponse sont généralement très courts, de l'ordre de quelques heures. N'ayez pas peur de demander de l’aide, il n’y a pas de question stupide ! Nous encourageons les utilisateurs, quelque soit leur niveau, à poser autant de questions qu’ils jugent nécessaire pour les aider à fonctionner en toute sécurité. Ce chapitre comprend une section de résolution de problèmes d'ordre général avec **AAPS** et **AAPSClient** (une application de suivi) ainsi que des explications sur la façon d'envoyer vos données **AAPS** (fichiers de logs ou journaux) aux développeurs pour investigation, si vous pensez qu'un problème technique avec **AAPS** nécessite un examen.

Section **9)** covers **Advanced AAPS options** such as how to progress from using **AAPS** for hybrid-closed looping (bolusing for meals _etc._) to full closed looping (no bolusing), and details development and engineering modes. Pour la plupart des utilisateurs, la version principale ou "Master" d'**AAPS** est tout à fait suffisante, sans avoir besoin de chercher dans ces options. Ce chapitre est destiné aux utilisateurs qui ont déjà un bon contrôle et cherchent à améliorer encore leur configuration.

In section **10) [How to support AAPS](SupportingAaps/HowToEditTheDocs.md)** we provide  information so that you can support this project. Vous pouvez faire un don d'argent, d'équipement ou de connaissances. Vous pouvez suggérer/apporter des modifications à la documentation vous-même, aider avec [la traduction de la documentation](SupportingAaps/Translations) ou partager vos données via le projet Open Humans.

Section **11) Resources**, contains archived or additional documentation, including a subsection for [clinicians](UsefulLinks/ClinicianGuideToAaps.md) who have expressed interest in open source artificial pancreas technology such as **AAPS**, or for patients who want to share such information with their clinicians, this topic is also addressed in the introduction. More diabetes and looping references and resources are also contained in this section. It includes the  [Glossary](./UsefulLinks/Glossary.md), a list of the acronyms (or short-term names) used throughout **AAPS**. C'est ici que vous trouverez ce que signifient les termes SI ou CT, par exemple.


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

**AAPS** n'est pas associé ni approuvé par: [SOOIL](http://www.sooil.com/eng/), [Dexcom](https://www.dexcom.com/), [Accu-Chek, Roche Diabetes Care](https://www.accu-chek.com/), [Insulet](https://www.insulet.com/) ou [Medtronic](https://www.medtronic.com/).

```

(index-aaps-documentation-index)=

## Index de la documentation AAPS

```{toctree}
:caption: 1) Changer la langue

Changer la langue <./ChangeLanguage/ChangeLanguage.md>
```
```{toctree}
:caption: 2) Getting started

Introduction to AAPS <./Getting-Started/Introduction.md>
Preparing for AAPS <./Getting-Started/PreparingForAaps.md>
Component Overview <./Getting-Started/ComponentOverview.md>
- Compatible pumps <./Getting-Started/CompatiblePumps.md>
- Compatible CGMs <./Getting-Started/CompatiblesCgms.md>
- Compatible phones  <./Getting-Started/Phones.md>
- Compatible watches  <./Getting-Started/Watches.md>
```

```{toctree}
:caption: 3) Setting up AAPS

Setting up the reporting server <./SettingUpAaps/SettingUpTheReportingServer.md>
- Nightscout <./SettingUpAaps/Nightscout.md>
- Tidepool <./SettingUpAaps/Tidepool.md>
Building AAPS <./SettingUpAaps/BuildingAaps.md>
Transferring and Installing AAPS <./SettingUpAaps/TransferringAndInstallingAaps.md>
Setup Wizard <./SettingUpAaps/SetupWizard.md>
Your AAPS Profile <./SettingUpAaps/YourAapsProfile.md>
Change AAPS configuration <./SettingUpAaps/ChangeAapsConfiguration.md>
- Config Builder <./SettingUpAaps/ConfigBuilder.md>
- Preferences <./SettingUpAaps/Preferences.md>
Completing the objectives <./SettingUpAaps/CompletingTheObjectives.md>
```

```{toctree}
:caption: 4) Vie quotidienne avec APPS

Écrans AAPS <./DailyLifeWithAaps/AapsScreens.md>
Fonctionnalités principales AAPS <. DailyLifeWithAaps/KeyAapsFeatures.md>
Calcul des GA <./DailyLifeWithAaps/CobCalculation.md>
Détection de la sensitivité <./DailyLifeWithAaps/SensitivityDetectionAndCob.md>
Changement de profil & pourcentage <./DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md>
Cibles temporaires <. DailyLifeWithAaps/TempTargets.md>
Glucides Étendus <./DailyLifeWithAaps/ExtendedCarbs.md>
Automatisations <./DailyLifeWithAaps/Automations.md>
SI dynamique <./DailyLifeWithAaps/DynamicISF.md>
AAPS pour les enfants <./DailyLifeWithAaps/AapsForChildren.md>
Pompes et canules <./DailyLifeWithAaps/PumpsAndCannulas.md>
Changement de fuseau horaire & Heure d'été <./DailyLifeWithAaps/TimezoneTraveling-DaylightSavingTime.md>

```

```{toctree}
:caption: 5) Remote AAPS features

Remote monitoring <./RemoteFeatures/RemoteMonitoring.md>
Remote control <./RemoteFeatures/RemoteControl.md>
SMS Commands <./RemoteFeatures/SMSCommands.md>
Following Only <./RemoteFeatures/FollowingOnly.md>
Android Auto <./RemoteFeatures/AndroidAuto.md>

```
```{toctree}
:caption: 6) Wear OS Smartwatches

AAPS for Wear OS <./WearOS/BuildingAapsWearOS.md>
Use the smartwatch <./WearOS/WearOsSmartwatch.md>
Remote control <./RemoteFeatures/RemoteControlWearOS.md>
Custom watchfaces reference <./ExchangeSiteCustomWatchfaces/CustomWatchfaceReference.md>
Exchange site custom watchfaces <./ExchangeSiteCustomWatchfaces/index.md>

```

```{toctree}
:caption: 7) Maintenance d'AAPS

Exporter/Importer les paramètres <./Maintenance/ExportImportSettings.md>
Analyse des données <./Maintenance/Reviewing.md>
Notes de version AAPS <./Maintenance/ReleaseNotes.md>
Changements de la doc <. Maintenance/DocumentationUpdate.md>
Mise à jour vers une nouvelle version d'AAPS <./Maintenance/UpdateToNewVersion.md>

```

```{toctree}
:caption: 8) Getting Help

Where can I get help with AAPS <./GettingHelp/WhereCanIGetHelp.md>
General troubleshooting <./GettingHelp/GeneralTroubleshooting.md>
Troubleshooting Android Studio <./GettingHelp/TroubleshootingAndroidStudio.md>
Accessing logfiles <./GettingHelp/AccessingLogFiles.md>
```

```{toctree}
:caption: 9) Options avancées d'AAPS

Boucle fermée complète <./AdvancedOptions/FullClosedLoop.md>
Branche de développement <./AdvancedOptions/DevBranch.md>
Autotune <./AdvancedOptions/Autotune.md>

```
```{toctree}
:caption: 10) Soutenir AAPS

Comment aider <./SupportingAaps/HowCanIHelp.md>
Modifier la doc <./SupportingAaps/HowToEditTheDocs.md>
Traduire l'application ou la doc <./SupportingAaps/Translations.md>
État des traductions <./SupportingAaps/StateOfTranslations.md>
Projet Open Humans <./SupportingAaps/OpenHumans.md>

```
```{toctree}
:caption: 11) Resources

Glossary <./UsefulLinks/Glossary.md>
FAQ <./UsefulLinks/FAQ.md>
General diabetes and looping resources <./UsefulLinks/BackgroundReading.md>
Dedicated Google account for AAPS (optional)<./UsefulLinks/DedicatedGoogleAccountForAaps.md>
For Clinicians (outdated) <./UsefulLinks/ClinicianGuideToAaps.md>
```