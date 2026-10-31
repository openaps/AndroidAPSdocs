# Bienvenue dans la documentation de AAPS

![image](./images/basic-outline-of-AAPS.png)

```{admonition} Latest Release
:class: note

 31 octobre 2026 : la version 4.0.0 est disponible. Consultez les [notes de version](#latestrelease) pour voir les nouveautés, et suivez les instructions du [manuel de mise à jour](./Maintenance/UpdateToNewVersion.md) pour faire la mise à jour.

```

Android APS (**AAPS**) est une application open source pour les personnes vivant avec un diabète insulino-dépendant. C'est un système de pancréas artificiel ("artificial pancreas system" ou APS) qui fonctionne sur smartphone Android. **AAPS** utilise l'algorithme du logiciel OpenAPS et s'efforce de reproduire ce que fait un pancréas sain : maintenir la glycémie dans un intervalle correct pour être en bonne santé, via l'administration automatisée de l'insuline. Pour utiliser **AAPS**, vous avez besoin de **trois** appareils compatibles : **(1)** un téléphone Android, **(2)** un système de mesure du glucose en continu (MGC) et **(3)** une pompe à insuline approuvée FDA/CE. Vous pouvez aussi ajouter **(4)** des services cloud, pour contrôler **AAPS** à distance, partager vos données et les stocker sur un serveur de rapports, et **(5)** une montre connectée.

Cette documentation explique comment installer et utiliser **AAPS**. Vous pouvez naviguer dans la documentation **AAPS** soit avec le menu de gauche (et sa fonction pratique de recherche **Search docs**), soit avec l'[index](#index-aaps-documentation-index) en bas de cette page.

## Vue d'ensemble de la documentation AAPS ("Les docs")

Dans le chapitre **1) Démarrage**, l'[Introduction](Getting-Started/Introduction.md) explique de manière générale à quoi sert un système de pancréas artificiel (APS). Elle décrit le contexte général de la boucle, explique pourquoi **AAPS** a été développé, compare **AAPS** à d'autres systèmes et parle de la sécurité. Elle donne des suggestions sur la façon d'aborder le sujet d'**AAPS** avec votre équipe médicale, explique pourquoi vous devez compiler l'application **AAPS** vous-même plutôt que de simplement la télécharger, et donne un aperçu basique de la façon dont communiquent les différents éléments d'un système **AAPS**. Elle aborde également l'accessibilité et qui peut bénéficier de l'utilisation d'**AAPS**.

[Se préparer à démarrer avec AAPS](./Getting-Started/PreparingForAaps.md) donne plus de détails sur la sécurité, et sur les téléphones, les MGC (systèmes de mesure du glucose en continu) et les pompes à insuline compatibles avec **AAPS**. Cette page donne un aperçu du processus que vous allez suivre, et vous donne une idée du temps nécessaire jusqu'à pouvoir profiter pleinement de toutes les fonctionnalités de **AAPS**. Cette section vous prépare techniquement à assembler aussi rapidement et efficacement que possible les différents éléments de votre **AAPS**. La sous-section [MGC compatibles](./Getting-Started/CompatiblesCgms.md) explique comment optimiser la configuration de votre MGC et quelles options de lissage sont les meilleures.

Maintenant que vous avez une bonne compréhension du processus, vous pouvez démarrer l'assemblage de votre boucle **AAPS**.

Le chapitre **2) Compiler l'application** explique pourquoi vous devez compiler l'application **AAPS** vous-même au lieu de simplement la télécharger. Il vous guide pas à pas pour [la compiler](./SettingUpAaps/BuildingAaps.md) (avec un navigateur, Android Studio ou la ligne de commande), puis pour la transférer et l'installer sur votre téléphone. Il commence par une étape facultative : créer un [compte Google dédié](./UsefulLinks/DedicatedGoogleAccountForAaps.md) pour conserver vos compilations et vos sauvegardes. Il explique aussi la [vérification des développeurs Android](#android-developer-verification), un changement que Google déploie à partir de septembre 2026. Ce changement modifie la façon d'installer les applications que vous compilez vous-même.

Le chapitre **3) Mise en place du serveur de rapports** explique comment choisir et [mettre en place votre serveur de rapports](./SettingUpAaps/SettingUpTheReportingServer.md) (Nightscout ou Tidepool), pour consulter et partager vos données.

Le chapitre **4) [Configurer AAPS](./SettingUpAaps/SetupWizard.md)** explique comment configurer l'application **AAPS** avec l'assistant de configuration, comment la relier à votre application MGC et à une pompe à insuline réelle ou virtuelle, et comment relier **AAPS** à votre serveur de rapports. Ensuite, vous découvrez tout ce qu'**AAPS** peut faire, avec un processus sûr, progressif et étape par étape. Ainsi, vous (ou votre enfant) connaissez bien tous les niveaux et tous les menus, et vous êtes à l'aise avec eux, avant de passer à la phase suivante, que l'on appelle l'« Objectif » suivant. Vous continuez ainsi jusqu'à avoir assez d'expérience pour utiliser les options plus avancées de l'application. Ces objectifs sont conçus spécifiquement de manière à débloquer progressivement plus de possibilités dans **AAPS** et à passer de la boucle ouverte à la boucle fermée.

Le chapitre **5) [Vie quotidienne avec AAPS](./DailyLifeWithAaps/AapsScreens.md)** présente les fonctions clés d'**AAPS**, pour vous aider à utiliser (et à personnaliser) **AAPS**. Cela comprend les écrans, les glucides actifs (GA), la sensibilité, le SI dynamique, les changements de profil, les cibles temporaires, les glucides étendus (ou eGlucides), les automatisations, et l'[examen de vos données](./Maintenance/Reviewing.md) dans l'historique et les statistiques. Il traite aussi de sujets fréquents : comment gérer différents types de repas, les changements de canule et de capteur, les mises à jour du smartphone, les changements d'heure (été/hiver), [voyager avec AAPS](DailyLifeWithAaps/TimezoneTraveling-DaylightSavingTime.md) et le sport. Les questions et réponses courantes se trouvent dans la section de dépannage.

Le chapitre **6) [Fonctionnalités AAPS à distance](./RemoteFeatures/RemoteControl.md)** met en avant un vrai point fort d'**AAPS**. Il y a tout un éventail de possibilités pour envoyer des commandes à distance à **AAPS**, ou simplement pour en suivre les données. Ceci est également utile pour les aidants qui souhaitent utiliser **AAPS** pour les mineurs, et pour les adultes diabétiques qui souhaitent soit surveiller leur glycémie (et d'autres mesures) de manière plus pratique que sur leur téléphone (sur une montre, dans la voiture _etc._), ou encore que d'autres personnes de leur entourage surveillent également les données. Ce chapitre fournit également des conseils pour utiliser Android Auto afin que vous puissiez afficher la glycémie dans la voiture.

Le chapitre **7) [Montres connectées Wear OS](./WearOS/BuildingAapsWearOS.md)** donne des informations et des procédures pour utiliser une montre connectée Android **Wear OS** avec les cadrans **AAPS** dédiés ou avec des cadrans personnalisés, soit comme télécommande de votre téléphone, soit simplement comme affichage.


Le chapitre **8) [Maintenance d'AAPS](./Maintenance/ExportImportSettings.md)** explique comment exporter et sauvegarder vos paramètres (très important si vous perdez ou cassez votre téléphone). Il donne les notes de la dernière version, explique comment mettre à jour **AAPS** et ce qui se passe quand une version arrive en fin de vie. En moyenne, vous pouvez vous attendre à une nouvelle version et 2 à 3 mises à jour par an. Comme pour tout logiciel, vous devez effectuer ces mises à jour, car elles corrigent des bogues mineurs et apportent des améliorations à **AAPS**. Sur la page de dépannage, il y a une section dédiée "Mise à jour" avec les questions fréquentes.

Le chapitre **9) [Aide et dépannage](GettingHelp/WhereCanIGetHelp.md)** vous indique les meilleurs endroits où trouver de l'aide générale sur **AAPS**. C'est le seul endroit où aller quand quelque chose ne fonctionne pas : la page [Dépannage général](GettingHelp/GeneralTroubleshooting.md) rassemble par thème les solutions aux problèmes les plus courants, et la [FAQ](UsefulLinks/FAQ.md) répond aux questions fréquentes. C'est très important pour que vous puissiez entrer en contact avec d'autres utilisateurs aussi rapidement que possible, clarifier les questions et résoudre les écueils communs. Beaucoup de gens utilisent déjà **AAPS** avec succès, mais chacun a eu à un moment une question à laquelle il ou elle ne savait pas répondre seul(e). Grâce au grand nombre d'utilisateurs, les temps de réponse sont généralement très courts, de l'ordre de quelques heures. N'ayez pas peur de demander de l’aide, il n’y a pas de question stupide ! Nous encourageons les utilisateurs, quelque soit leur niveau, à poser autant de questions qu’ils jugent nécessaire pour les aider à fonctionner en toute sécurité. Ce chapitre comprend une section de résolution de problèmes d'ordre général avec **AAPS** et **AAPSClient** (une application de suivi) ainsi que des explications sur la façon d'envoyer vos données **AAPS** (fichiers de logs ou journaux) aux développeurs pour investigation, si vous pensez qu'un problème technique avec **AAPS** nécessite un examen.

Le chapitre **10)** présente les **[Options avancées d'AAPS](./AdvancedOptions/FullClosedLoop.md)** : par exemple comment passer d'une boucle fermée hybride avec **AAPS** (bolus pour les repas _etc._) à une boucle fermée complète (sans bolus), comment [ajuster votre profil](./GettingHelp/ProfileTuning.md) et utiliser Autotune. Il décrit aussi les modes développement et ingénierie. Pour la plupart des utilisateurs, la version principale ou "Master" d'**AAPS** est tout à fait suffisante, sans avoir besoin de chercher dans ces options. Ce chapitre est destiné aux utilisateurs qui ont déjà un bon contrôle et cherchent à améliorer encore leur configuration.

Dans le chapitre **11) [Comment soutenir AAPS](SupportingAaps/HowToEditTheDocs.md)**, nous donnons des informations pour que vous puissiez soutenir ce projet. Vous pouvez faire un don d'argent, d'équipement ou de connaissances. Vous pouvez suggérer/apporter des modifications à la documentation vous-même, aider avec [la traduction de la documentation](SupportingAaps/Translations) ou partager vos données via le projet Open Humans.

Le chapitre **12) Ressources** contient de la documentation archivée ou complémentaire, dont une sous-section pour les [médecins](UsefulLinks/ClinicianGuideToAaps.md) qui s'intéressent à la technologie du pancréas artificiel open source comme **AAPS**, ou pour les patients qui veulent partager ces informations avec leurs médecins. Ce sujet est aussi abordé dans l'introduction. D'autres références et ressources sur le diabète et la boucle sont aussi listées dans ce chapitre. Il comprend le [Glossaire](./UsefulLinks/Glossary.md), une liste des acronymes (ou noms courts) utilisés dans **AAPS**. C'est ici que vous trouverez ce que signifient les termes SI ou CT, par exemple.


 ### Prêt à commencer avec **AAPS** ? Apprenez-en plus sur **AAPS** dans l'[Introduction](Getting-Started/Introduction.md).

```{admonition} SAFETY NOTICE
:class: danger
La sécurité d'**AAPS** repose sur les fonctionnalités de sécurité de votre matériel (téléphone, pompe, MGC). Utilisez uniquement une pompe à insuline et un MGC approuvés par les autorités sanitaires, en bon état de fonctionnement. N'utilisez pas de pompes à insuline ni de récepteurs de MGC endommagés, modifiés ou fabriqués maison. Utilisez uniquement du matériel d'origine pour les consommables (applicateurs, canules et réservoirs d'insuline), approuvés par le fabricant de votre pompe et de votre MGC. L'utilisation de matériel non testé ou modifié peut entraîner un manque de précision et des erreurs de dosage de l'insuline, ce qui représente un risque important pour l'utilisateur. 

N'utilisez pas **AAPS** si vous prenez des inhibiteurs de SGLT-2 (gliflozines), car ils font baisser la glycémie. Vous augmentez le risque d'acidocétose diabétique (ACD), car moins d'insuline est administrée, et le risque d'hypoglycémie, car la glycémie baisse. 
```

```{admonition} Disclaimer
:class: note

- Toutes les informations et le code décrits ici le sont à des fins d'information et d'éducation uniquement. Vous utilisez [Nightscout](https://nightscout.github.io/) et **AAPS** à vos propres risques. N'utilisez pas ces informations ni ce code pour prendre des décisions médicales. Nightscout ne cherche actuellement pas à respecter la loi américaine HIPAA sur la confidentialité des données de santé. 
- L'utilisation du code de github.com est sans garantie ni support formel d'aucune sorte. Veuillez consulter la LICENCE du dépôt de code pour plus de détails.
- Tous les noms de produits et de sociétés, marques commerciales, marques de service, marques déposées, sont la propriété de leurs détenteurs respectifs. La description de leur utilisation est à titre informatif et n'implique aucune affiliation avec ces sociétés ni aucune approbation de leur part.

**AAPS** n'a aucun lien avec les sociétés suivantes et n'est pas approuvé par elles : [SOOIL](http://www.sooil.com/eng/), [Dexcom](https://www.dexcom.com/), [Accu-Chek, Roche Diabetes Care](https://www.accu-chek.com/), [Insulet](https://www.insulet.com/), [Medtronic](https://www.medtronic.com/), [Diaconn](https://www.diaconn.com/en/index.html), [EOFlow](http://www.eoflow.com/), [MicroTech Medical (Equil)](https://www.microtechmd.com/), [Medtrum](https://www.medtrum.com/), [Senseonics (Eversense)](https://www.senseonics.com/), [i-SENS (CareSens)](https://i-sens.com/), [POCTech](https://poctechcorp.com/en/), [Ottai](https://ottai.com/) ou [Syai](https://www.syai.com/).

```

(index-aaps-documentation-index)=

## Index de la documentation AAPS

```{toctree}
:caption: Utiliser cette documentation

Changer la langue et la version <./NavigateDoc/ChangeLanguageVersion.md>
Rechercher dans la documentation <./NavigateDoc/SearchDoc.md>
Mises à jour et modifications de la documentation <./Maintenance/DocumentationUpdate.md>
```
```{toctree}
:caption: 1) Démarrage

Introduction aux APS et à AAPS <./Getting-Started/Introduction.md>
Se préparer à démarrer avec AAPS <./Getting-Started/PreparingForAaps.md>
Vue d'ensemble des composants <./Getting-Started/ComponentOverview.md>
- Pompes compatibles <./Getting-Started/CompatiblePumps.md>
- MGC compatibles <./Getting-Started/CompatiblesCgms.md>
- Téléphones  <./Getting-Started/Phones.md>
- Montres connectées et AAPS  <./Getting-Started/Watches.md>
```

```{toctree}
:caption: 2) Compiler l'application

Un compte Google dédié à AAPS (facultatif) <./UsefulLinks/DedicatedGoogleAccountForAaps.md>
Compilation d'AAPS <./SettingUpAaps/BuildingAaps.md>
- Compilation dans le navigateur <./SettingUpAaps/BrowserBuild.md>
- Compilation avec Android Studio <./SettingUpAaps/ComputerBuild.md>
- Instructions de compilation en ligne de commande <./SettingUpAaps/CLIBuild.md>
Transfert et installation de AAPS sur votre smartphone <./SettingUpAaps/TransferringAndInstallingAaps.md>
```
```{toctree}
:caption: 3) Mise en place du serveur de rapports

Mise en place du serveur de rapports <./SettingUpAaps/SettingUpTheReportingServer.md>
- Nightscout <./SettingUpAaps/Nightscout.md>
- Tidepool <./SettingUpAaps/Tidepool.md>
```
```{toctree}
:caption: 4) Configurer AAPS

Assistant de configuration <./SettingUpAaps/SetupWizard.md>
Votre profil AAPS <./SettingUpAaps/YourAapsProfile.md>
Modifier la configuration d'AAPS <./SettingUpAaps/ChangeAapsConfiguration.md>
- Configuration (Config Builder) <./SettingUpAaps/ConfigBuilder.md>
- Préférences <./SettingUpAaps/Preferences.md>
Compléter les objectifs <./SettingUpAaps/CompletingTheObjectives.md>
```

```{toctree}
:caption: 5) Vie quotidienne avec AAPS

Écrans AAPS <./DailyLifeWithAaps/AapsScreens.md>
Fonctionnalités clés d'AAPS <./DailyLifeWithAaps/KeyAapsFeatures.md>
Calcul GA <./DailyLifeWithAaps/CobCalculation.md>
Calcul de Sensibilité <./DailyLifeWithAaps/SensitivityDetectionAndCob.md>
SI dynamique <./DailyLifeWithAaps/DynamicISF.md>
Changement de profil et pourcentage de profil <./DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md>
Cibles temporaires <./DailyLifeWithAaps/TempTargets.md>
Glucides étendus / "eGlucides" <./DailyLifeWithAaps/ExtendedCarbs.md>
Assistants rapides (bolus en un seul appui) <./DailyLifeWithAaps/QuickWizards.md>
Scénarios (préréglages de situation) <./DailyLifeWithAaps/Scenes.md>
Automatisation <./DailyLifeWithAaps/Automations.md>
QuickLaunch (lancement rapide) <./DailyLifeWithAaps/QuickLaunch.md>
Widgets de l'écran d'accueil <./DailyLifeWithAaps/Widgets.md>
Aliments (votre base de données d'aliments) <./DailyLifeWithAaps/Food.md>
Recherche globale <./DailyLifeWithAaps/GlobalSearch.md>
Examiner vos données <./Maintenance/Reviewing.md>
AAPS pour les enfants <./DailyLifeWithAaps/AapsForChildren.md>
Pompes et canules <./DailyLifeWithAaps/PumpsAndCannulas.md>
Changement de fuseau horaire et heure d'été <./DailyLifeWithAaps/TimezoneTraveling-DaylightSavingTime.md>

```

```{toctree}
:caption: 6) Fonctionnalités AAPS à distance

Surveillance à distance <./RemoteFeatures/RemoteMonitoring.md>
Suivre AAPS (pas d'interaction avec le système AAPS) <./RemoteFeatures/FollowingOnly.md>
Android Auto <./RemoteFeatures/AndroidAuto.md>
Contrôle à distance d'AAPS <./RemoteFeatures/RemoteControl.md>
L'application AAPSClient <./RemoteFeatures/AapsClient.md>
Contrôle maître ↔ client (contrôle à distance signé) <./RemoteFeatures/ClientMasterControl.md>
Commandes SMS <./RemoteFeatures/SMSCommands.md>

```
```{toctree}
:caption: 7) Montres connectées Wear OS

Compiler l'application Wear AAPS <./WearOS/BuildingAapsWearOS.md>
Montre connectée Wear OS <./WearOS/WearOsSmartwatch.md>
Fonctionnement de AAPS via votre montre connectée Wear OS <./RemoteFeatures/RemoteControlWearOS.md>
Référence des cadrans personnalisés <./ExchangeSiteCustomWatchfaces/CustomWatchfaceReference.md>
Site d'échange pour les cadrans personnalisés <./ExchangeSiteCustomWatchfaces/index.md>

```

```{toctree}
:caption: 8) Maintenance d'AAPS

Créer et restaurer des sauvegardes <./Maintenance/ExportImportSettings.md>
Notes de version <./Maintenance/ReleaseNotes.md>
Ce qui a changé dans AAPS v4 <./Maintenance/V4Changes.md>
Mise à jour vers une nouvelle version ou une branche <./Maintenance/UpdateToNewVersion.md>
- Mise à jour avec un navigateur (fork) <./Maintenance/UpdateBrowserBuild.md>
- Mise à jour avec Android Studio <./Maintenance/UpdateComputerBuild.md>
Fin de vie <./Maintenance/EndOfLife.md>

```

```{toctree}
:caption: 9) Aide et dépannage

Où puis-je obtenir de l'aide ? <./GettingHelp/WhereCanIGetHelp.md>
Dépannage général <./GettingHelp/GeneralTroubleshooting.md>
- Dépannage Bluetooth <./GettingHelp/BluetoothTroubleshooting.md>
- Dépannage NSClient <./GettingHelp/TroubleshootingNsClient.md>
- Dépannage d'Android Studio <./GettingHelp/TroubleshootingAndroidStudio.md>
- Dépannage de la compilation dans le navigateur <./GettingHelp/BrowserBuildTroubleshooting.md>
- Réinstaller AAPS avec un nouveau keystore <./GettingHelp/ReinstallAaps.md>
- Accès aux fichiers log <./GettingHelp/AccessingLogFiles.md>
Foire Aux Questions (FAQ) <./UsefulLinks/FAQ.md>
```

```{toctree}
:caption: 10) Options avancées d'AAPS

Boucle fermée complète <./AdvancedOptions/FullClosedLoop.md>
Ajuster le profil AAPS <./GettingHelp/ProfileTuning.md>
Autotune <./AdvancedOptions/Autotune.md>
Concentration de l'insuline <./AdvancedOptions/InsulinConcentration.md>
Branche de développement <./AdvancedOptions/DevBranch.md>
Compilation dans le navigateur : cherry-pick d'un commit <./AdvancedOptions/BrowserBuildCherryPick.md>

```
```{toctree}
:caption: 11) Comment soutenir AAPS

Comment aider AAPS ? <./SupportingAaps/HowCanIHelp.md>
Comment éditer la documentation <./SupportingAaps/HowToEditTheDocs.md>
Traduire l'application et la documentation <./SupportingAaps/Translations.md>
État de la traduction de l'application et de la documentation <./SupportingAaps/StateOfTranslations.md>
Envoi vers Open Humans <./SupportingAaps/OpenHumans.md>

```
```{toctree}
:caption: 12) Ressources

Glossaire <./UsefulLinks/Glossary.md>
Ressources utiles à lire avant de commencer <./UsefulLinks/BackgroundReading.md>
Pour les médecins – Introduction générale et guide d'AAPS <./UsefulLinks/ClinicianGuideToAaps.md>
```
