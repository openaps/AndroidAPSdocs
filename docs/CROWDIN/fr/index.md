# Bienvenue dans la documentation de AAPS

![image](./images/basic-outline-of-AAPS.png)

```{admonition} Version 3.3
:class: note

29/12/2024 : La version 3.3 est sortie. Consultez les [Notes de version] (#version3300) pour voir ce qui est nouveau et obtenir des instructions de mise à jour.

```

Android APS (**AAPS**) est une application open source pour les personnes vivant avec un diabète insulino-dépendant. C'est un système de pancréas artificiel ("artificial pancreas system" ou APS) qui fonctionne sur smartphone Android. **AAPS** utilise l'algorithme du logiciel OpenAPS et s'efforce de reproduire ce que fait un pancréas sain : maintenir la glycémie dans un intervalle correct pour être en bonne santé, via l'administration automatisée de l'insuline. Pour utiliser **AAPS** vous avez besoin de **trois** appareils compatibles : **(1)** un téléphone Android, **(2)** un moniteur de glucose continu (MGC) et **(3)** une pompe à insuline approuvée par la FDA/CE. Optionnellement, vous aurez besoin des services cloud **(4)** pour contrôler à distance **AAPS**, partager vos données et les stocker dans un serveur de rapports, et aussi **(5)** d'une smartwatch.

Cette documentation explique comment installer et utiliser **AAPS**. Vous pouvez naviguer dans la documentation de **AAPS** soit via le menu de gauche (et la fonction pratique "**Rechercher docs**"), soit en utilisant l'[index](#index-aaps-documentation-index) en bas de cette page.

## Vue d'ensemble de la documentation AAPS ("Les docs")

Dans le chapitre **2) Démarrage**, l'[Introduction](Getting-Started/Introduction.md) explique de manière générale à quoi sert un système de pancréas artificiel (APS). Cette page décrit le contexte global de la boucle, pourquoi **AAPS** a été développé, compare **AAPS** à d'autres systèmes, et parle de la sûreté. Elle donne des suggestions sur la façon d'aborder le sujet d'**AAPS** avec votre équipe médicale, explique pourquoi vous devez compiler l'application **AAPS** vous-même plutôt que de simplement la télécharger, et donne un aperçu basique de la façon dont communiquent les différents éléments d'un système **AAPS**. Elle aborde également l'accessibilité et qui peut bénéficier de l'utilisation d'**AAPS**.

Cette section vous prépare techniquement à assembler aussi rapidement et efficacement que possible les différents éléments de votre **AAPS**. Cette page donne un aperçu du processus que vous allez suivre, et vous donne une idée du temps nécessaire jusqu'à pouvoir profiter pleinement de toutes les fonctionnalités de **AAPS**. Cette section vous prépare techniquement à assembler aussi rapidement et efficacement que possible les différents éléments de votre **AAPS**. Le sous-chapitre [Configuration MGC](./Getting-Started/CompatiblesCgms.md) explique comment optimiser la configuration de votre capteur de glycémie et quelles options de lissage sont les meilleures.

Maintenant que vous avez une bonne compréhension du processus, vous pouvez démarrer l'assemblage de votre boucle **AAPS**.

Vous trouverez les instructions détaillées pour ce faire dans le chapitre **3) Installation d'AAPS**. On y parlera du choix et du [serveur de reporting](./SettingUpAaps/SettingUpTheReportingServer.md) (Nightscout ou Tidepool) afin que vous puissiez analyser et partager vos données, de la préparation de votre ordinateur pour installer Android Studio, de la compilation elle-même de l'application AAPS et du transfert de l'application AAPS sur votre téléphone. Ce chapitre décrit également la configuration de l'application **AAPS** à l'aide de l'Assistant de configuration, pour qu'il puisse communiquer avec votre application MGC et avec une pompe à insuline réelle ou virtuelle, ainsi qu'en liant **AAPS** à votre serveur de reporting. Vous serez ensuite petit à petit guidé dans l'utilisation d'**AAPS**, via un processus progressif, sécurisé et soigneusement calibré. Ce processus est conçu pour s'assurer que vous/votre enfant connaissez bien et êtes à l'aise dans la navigation entre les différents menus et sous-menus de configuration avant de passer à la phase suivante. Ces phases sont communément appelées Objectifs, et visent à vous faire acquérir suffisamment d'expérience pour pouvoir commencer à utiliser les fonctionnalités les plus avancées de l'application. Ces objectifs sont conçus spécifiquement de manière à débloquer progressivement plus de possibilités dans **AAPS** et à passer de la boucle ouverte à la boucle fermée.

Le chapitre **4) Utilisation d'AAPS** couvre les principales fonctionnalités d'**AAPS**, pour vous aider à utiliser (et personnaliser) **AAPS**. Vous y trouverez des explications sur les écrans de l'application, les glucides actifs, la sensibilité, le changement de profil, les cibles temporaires, les glucides étendus (ou eCarbs), les automatisations et la SI Dynamique. On y parle également de sujets tels que la gestion de différents types de repas, le changement de cathéter ou de capteur, les mises à jour du smartphone, les changements d'heure, [voyager avec AAPS](DailyLifeWithAaps/TimezoneTraveling-DaylightSavingTime.md) et faire du sport. Les questions et réponses courantes se trouvent dans la section de dépannage.

Le chapitre **5) [Fonctionnalités à distance](./RemoteFeatures/RemoteControl.md)** met en avant un atout majeur d'**AAPS**. Il y a tout un éventail de possibilités pour envoyer des commandes à distance à **AAPS**, ou simplement pour en suivre les données. Ceci est également utile pour les aidants qui souhaitent utiliser **AAPS** pour les mineurs, et pour les adultes diabétiques qui souhaitent soit surveiller leur glycémie (et d'autres mesures) de manière plus pratique que sur leur téléphone (sur une montre, dans la voiture _etc._), ou encore que d'autres personnes de leur entourage surveillent également les données. Ce chapitre fournit également des conseils pour utiliser Android Auto afin que vous puissiez afficher la glycémie dans la voiture.

Le chapitre **6) Montres Wear OS** donne des informations et des procédures pour utiliser une montre Android **Wear OS** avec les cadrans dédiés **AAPS** ou des cadrans personnalisés soit en tant que télécommande de votre téléphone soit simplement en tant qu'affichage.


Le chapitre **7) Maintenance d'AAPS** explique comment exporter et sauvegarder vos paramètres (ce qui est très important en cas de perte/de casse de votre téléphone), donne les dernières notes de version et la procédure pour mettre à jour **AAPS**. En moyenne, vous pouvez vous attendre à une nouvelle version et 2 à 3 mises à jour par an. Comme pour tout logiciel, vous devez effectuer ces mises à jour, car elles corrigent des bogues mineurs et apportent des améliorations à **AAPS**. Sur la page de dépannage, il y a une section dédiée "Mise à jour" avec les questions fréquentes.

Le chapitre **8) [Obtenir de l'aide](GettingHelp/WhereCanIGetHelp.md)** vous aidera à trouver l'endroit approprié pour demander de l'aide à propos d'**AAPS**. C'est très important pour que vous puissiez entrer en contact avec d'autres utilisateurs aussi rapidement que possible, clarifier les questions et résoudre les écueils communs. Beaucoup de gens utilisent déjà **AAPS** avec succès, mais chacun a eu à un moment une question à laquelle il ou elle ne savait pas répondre seul(e). Grâce au grand nombre d'utilisateurs, les temps de réponse sont généralement très courts, de l'ordre de quelques heures. N'ayez pas peur de demander de l’aide, il n’y a pas de question stupide ! Nous encourageons les utilisateurs, quelque soit leur niveau, à poser autant de questions qu’ils jugent nécessaire pour les aider à fonctionner en toute sécurité. Ce chapitre comprend une section de résolution de problèmes d'ordre général avec **AAPS** et **AAPSClient** (une application de suivi) ainsi que des explications sur la façon d'envoyer vos données **AAPS** (fichiers de logs ou journaux) aux développeurs pour investigation, si vous pensez qu'un problème technique avec **AAPS** nécessite un examen.

Le chapitre **9)** parle des **Options avancées d'AAPS** depuis l'utilisation de **AAPS** en boucle fermée hybride (bolus pour les repas, _etc_) jusqu'à la boucle fermée totale (sans bolus), et explicite les modes de développement et d'ingénierie. Pour la plupart des utilisateurs, la version principale ou "Master" d'**AAPS** est tout à fait suffisante, sans avoir besoin de chercher dans ces options. Ce chapitre est destiné aux utilisateurs qui ont déjà un bon contrôle et cherchent à améliorer encore leur configuration.

Dans le chapitre **10) [Comment soutenir AAPS](SupportingAaps/HowToEditTheDocs.md)**, nous fournissons des informations pour que vous puissiez soutenir ce projet. Vous pouvez faire un don d'argent, d'équipement ou de connaissances. Vous pouvez suggérer/apporter des modifications à la documentation vous-même, aider avec [la traduction de la documentation](SupportingAaps/Translations) ou partager vos données via le projet Open Humans.

Le chapitre **11) Ressources**, contient de la documentation additionnelle ou archivée, dont une page pour les [professionnels de santé](UsefulLinks/ClinicianGuideToAaps.md) qui s'intéressent à la technologie du pancréas artificiel open source comme **AAPS**, ou pour les patients qui veulent partager ces informations avec leur équipe médicale. Ce sujet est également abordé dans l'introduction. D'autres références et ressources sur le diabète et la boucle sont aussi listées dans ce chapitre. Parmi celles-ci, le [Glossaire](./UsefulLinks/Glossary.md), une liste des acronymes (ou abréviations) utilisés dans **AAPS**. C'est ici que vous trouverez ce que signifient les termes SI ou CT, par exemple.


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

Changer la langue <./NavigateDoc/ChangeLanguage.md>
Changer la version <./NavigateDoc/ChangeVersion.md>
```
```{toctree}
:caption: 2) Démarrage

Introduction aux APS et à AAPS <./Getting-Started/Introduction.md>
Se préparer à AAPS <./Getting-Started/PreparingForAaps.md>
Les différents composants <./Getting-Started/ComponentOverview.md>
- Pompes compatibles <./Getting-Started/CompatiblePumps.md>
- MGCs compatibles <./Getting-Started/CompatiblesCgms.md>
- Téléphones compatibles <./Getting-Started/Phones.md>
- Montres compatibles  <./Getting-Started/Watches.md>
```

```{toctree}
:caption: 3) Installation d'AAPS

Serveur de reporting <./SettingUpAaps/SettingUpTheReportingServer.md>
- Nightscout <./SettingUpAaps/Nightscout.md>
- Tidepool <./SettingUpAaps/Tidepool.md>
Compilation d'AAPS <./SettingUpAaps/BuildingAaps.md>
Transfert et Installation d'AAPS <./SettingUpAaps/TransferringAndInstallingAaps.md>
Assistant de configuration <./SettingUpAaps/SetupWizard.md>
Votre Profil AAPS <./SettingUpAaps/YourAapsProfile.md>
Modifier la configuration <./SettingUpAaps/ChangeAapsConfiguration.md>
- Configuration <./SettingUpAaps/ConfigBuilder.md>
- Préférences <./SettingUpAaps/Preferences.md>
Compléter les objectifs <./SettingUpAaps/CompletingTheObjectives.md>
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
:caption: 5) AAPS à distance

Surveillance à distance <./RemoteFeatures/RemoteMonitoring.md>
Contrôle à distance <./RemoteFeatures/RemoteControl.md>
Commandes SMS <./RemoteFeatures/SMSCommands.md>
Suivi simple <./RemoteFeatures/FollowingOnly.md>
Android Auto <./RemoteFeatures/AndroidAuto.md>

```
```{toctree}
:caption: 6) Montres connectées Wear OS

AAPS pour Wear OS <./WearOS/BuildingAapsWearOS.md>
Utilisation de la montre <./WearOS/WearOsSmartwatch.md>
Contrôle à distance <./RemoteFeatures/RemoteControlWearOS.md>
Document de référence Cadrans Personnalisés <./ExchangeSiteCustomWatchfaces/CustomWatchfaceReference.md>
Site d'échange des cadrans personnalisés <./ExchangeSiteCustomWatchfaces/index.md>

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
:caption: 8) Trouver de l'aide

Où trouver de l'aide <./GettingHelp/WhereCanIGetHelp.md>
Problèmes fréquents<./GettingHelp/GeneralTroubleshooting.md>
Problèmes Android Studio <./GettingHelp/TroubleshootingAndroidStudio.md>
Accès aux fichiers journaux <./GettingHelp/AccessingLogFiles.md>
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
:caption: 11) Ressources

Glossaire <./UsefulLinks/Glossary.md>
FAQ <./UsefulLinks/FAQ. d>
Ressources générales pour le diabète et la boucle <./UsefulLinks/BackgroundReading.md>
Compte Google dédié pour AAPS (facultatif)<. UsefulLinks/DedicatedGoogleAccountForAaps.md>
Pour les cliniciens (obsolète) <./UsefulLinks/ClinicianGuideToAaps.md>
```