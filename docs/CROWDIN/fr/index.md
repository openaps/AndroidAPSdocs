# Bienvenue dans la documentation de AAPS

![image](./images/basic-outline-of-AAPS.png)

Android APS (**AAPS**) est une application open source pour les personnes vivant avec un diabète insulino-dépendant. C'est un système de pancréas artificiel ("artificial pancreas system" ou APS) qui fonctionne sur smartphone Android. **AAPS** utilise l'algorithme du logiciel openAPS et s'efforce de reproduire ce que fait un pancréas sain : maintenir la glycémie dans un intervalle correct pour être en bonne santé, via l'administration automatisée de l'insuline. Pour utiliser **AAPS**, vous aurez besoin de **trois** appareils compatibles : un téléphone Android, une pompe à insuline approuvée par les autorités médicales et un capteur permettant la mesure du glucose en continu (MGC).

Cette documentation explique comment installer et utiliser **AAPS**. Vous pouvez naviguer dans la documentation de **AAPS** soit via le menu de gauche (et la fonction pratique "**Rechercher docs**"), soit en utilisant l'[index](#aaps-documentation-index) en bas de cette page.

## Vue d'ensemble de la documentation AAPS ("Les docs")

Dans le chapitre 2) "Démarrage", l'[Introduction](Getting-Started/Introduction.md) explique de manière générale à quoi sert un système de pancréas artificiel (APS). Cette page décrit le contexte global de la boucle, pourquoi **AAPS** a été développé, compare **AAPS** à d'autres systèmes, et parle de la sûreté. Elle donne des suggestions sur la façon d'aborder le sujet d'**AAPS** avec votre équipe médicale, explique pourquoi vous devez compiler l'application **AAPS** vous-même plutôt que de simplement la télécharger, et donne un aperçu basique de la façon dont communiquent les différents éléments d'un système **AAPS**. Elle aborde également l'accessibilité et qui peut bénéficier de l'utilisation d'**AAPS**.

[Preparing for AAPS](./Getting-Started/PreparingForAaps.md) gives more detail about safety considerations, and the phones, CGMs (Continuous Glucose Monitors) and insulin pumps which are compatible with **AAPS**. Cette page donne un aperçu du processus que vous allez suivre, et vous donne une idée du temps nécessaire jusqu'à pouvoir profiter pleinement de toutes les fonctionnalités de **AAPS**. Cette section vous prépare techniquement à assembler aussi rapidement et efficacement que possible les différents éléments de votre **AAPS**. The subsection [CGM Configuration](./Getting-Started/CompatiblesCgms.md) explains how to optimse CGM setup and what smoothing options are best.

Maintenant que vous avez une bonne compréhension du processus, vous pouvez démarrer l'assemblage de votre boucle **AAPS**. Vous trouverez les instructions détaillées pour ce faire dans le chapitre **3) Installation d'AAPS**. It covers choosing and [setting up your reporting server](./SettingUpAaps/SettingUpTheReportingServer.md) (Nightscout or Tidepool) so you can review and share your data, getting your computer ready for building the AAPS app, building the AAPS app and transferring the AAPS app to your phone. Ce chapitre décrit également la configuration de l'application **AAPS** à l'aide de l'Assistant de configuration, pour qu'il puisse communiquer avec votre application MGC et avec une pompe à insuline réelle ou virtuelle, ainsi qu'en liant **AAPS** à votre serveur de reporting. Vous serez ensuite petit à petit guidé dans l'utilisation d'**AAPS**, via un processus progressif, sécurisé et soigneusement calibré. Ce processus est conçu pour s'assurer que vous/votre enfant connaissez bien et êtes à l'aise dans la navigation entre les différents menus et sous-menus de configuration avant de passer à la phase suivante. Ces phases sont communément appelées Objectifs, et visent à vous faire acquérir suffisamment d'expérience pour pouvoir commencer à utiliser les fonctionnalités les plus avancées de l'application. Ces objectifs sont conçus spécifiquement de manière à débloquer progressivement plus de possibilités dans **AAPS** et à passer de la boucle ouverte à la boucle fermée.

Le chapitre 4) [Fonctionnalités à distance](remote-control.md) met en avant un atout majeur d'**AAPS**. Il y a tout un éventail de possibilités pour envoyer des commandes à distance à **AAPS**, ou simplement pour en suivre les données. Ceci est également utile pour les aidants qui souhaitent utiliser **AAPS** pour les mineurs, et pour les adultes diabétiques qui souhaitent soit surveiller leur glycémie (et d'autres mesures) de manière plus pratique que sur leur téléphone (sur une montre, dans la voiture _etc._), ou encore que d'autres personnes de leur entourage surveillent également les données. Ce chapitre fournit également des conseils pour utiliser Android Auto afin que vous puissiez afficher la glycémie dans la voiture.

Le chapitre **5) Utilisation d'AAPS** couvre les principales fonctionnalités d'**AAPS**, pour vous aider à utiliser (et personnaliser) **AAPS**. Vous y trouverez des explications sur les écrans de l'application, les glucides actifs, la sensibilité, le changement de profil, les cibles temporaires, les glucides étendus (ou eCarbs), les automatisations et la SI Dynamique. On y parle également de sujets tels que la gestion de différents types de repas, le changement de cathéter ou de capteur, les mises à jour du smartphone, les changements d'heure, [voyager avec AAPS](Usage/Timezone-traveling.md) et faire du sport. Les questions et réponses courantes se trouvent dans la section de dépannage.


Le chapitre **6) Maintenance d'AAPS** explique comment exporter et sauvegarder vos paramètres (ce qui est très important en cas de perte/de casse de votre téléphone), donne les dernières notes de version et la procédure pour mettre à jour **AAPS**. En moyenne, vous pouvez vous attendre à une nouvelle version et 2 à 3 mises à jour par an. Comme pour tout logiciel, vous devez effectuer ces mises à jour, car elles corrigent des bogues mineurs et apportent des améliorations à **AAPS**. Sur la page de dépannage, il y a une section dédiée "Mise à jour" avec les questions fréquentes.

Le chapitre **7) [Obtenir de l'aide](Where-To-Go-For-Help/Connect-with-other-users.md)** vous aidera à trouver l'endroit approprié pour demander de l'aide à propos d'**AAPS**. C'est très important pour que vous puissiez entrer en contact avec d'autres utilisateurs aussi rapidement que possible, clarifier les questions et résoudre les écueils communs. Beaucoup de gens utilisent déjà **AAPS** avec succès, mais chacun a eu à un moment une question à laquelle il ou elle ne savait pas répondre seul(e). Grâce au grand nombre d'utilisateurs, les temps de réponse sont généralement très courts, de l'ordre de quelques heures. N'ayez pas peur de demander de l’aide, il n’y a pas de question stupide ! Nous encourageons les utilisateurs, quelque soit leur niveau, à poser autant de questions qu’ils jugent nécessaire pour les aider à fonctionner en toute sécurité. Ce chapitre comprend une section de résolution de problèmes d'ordre général avec **AAPS** et **AAPSClient** (une application de suivi) ainsi que des explications sur la façon d'envoyer vos données **AAPS** (fichiers de logs ou journaux) aux développeurs pour investigation, si vous pensez qu'un problème technique avec **AAPS** nécessite un examen.

La section **8) Liens utiles** offre un accès rapide à certaines pages. Parmi celles-ci, le [Glossaire](Getting-Started/Glossary.md), une liste des acronymes (ou abréviations) utilisés dans **AAPS**. C'est ici que vous trouverez ce que signifient les termes SI ou CT, par exemple. Cette section contient également des liens vers des captures d'écran utiles et d'autres données.

Le chapitre 9) parle des **Options avancées d'AAPS** telles que comment passer de l'utilisation de **AAPS** en boucle fermée hybride (bolus pour les repas, _etc_) en boucle fermée totale (sans bolus), et explicite les modes de développement et d'ingénierie. Pour la plupart des utilisateurs, la version principale ou "Master" d'**AAPS** est tout à fait suffisante, sans avoir besoin de chercher dans ces options. Ce chapitre est destiné aux utilisateurs qui ont déjà un bon contrôle et cherchent à améliorer encore leur configuration.

Dans le chapitre 10) [Comment soutenir AAPS](make-a-PR.md), nous fournissons des informations pour que vous puissiez soutenir ce projet. Vous pouvez faire un don d'argent, d'équipement ou de connaissances. Vous pouvez suggérer/apporter des modifications à la documentation vous-même, aider avec [la traduction de la documentation](translations.md) ou partager vos données via le projet Open Humans.

Le chapitre 11 contient de la documentation additionnelle ou archivée, dont une page pour les [professionnels de santé](Resources/clinician-guide-to-AndroidAPS.md) qui s'intéressent à la technologie du pancréas artificiel open source comme **AAPS**, ou pour les patients qui veulent partager ces informations avec leur équipe médicale. Ce sujet est également abordé dans l'introduction. D'autres références et ressources sur le diabète et la boucle sont listées dans le chapitre 12).


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

(AAPS-Documentation-Index)=

## Index de la documentation AAPS

```{toctree}
:caption: 1) Change language

Change language <./ChangeLanguage/ChangeLanguage.md>
```
```{toctree}
:caption: 2) Getting started

Introduction to AAPS <./Getting-Started/Introduction.md>
Preparing for AAPS <./Getting-Started/PreparingForAaps.md>
Compatible pumps <./Getting-Started/CompatiblePumps.md>
Compatible CGMs <./Getting-Started/CompatiblesCgms.md>
Compatible phones  <./Getting-Started/Phones.md>
```

```{toctree}
:caption: 3) Setting up AAPS

Setting up the reporting server <./SettingUpAaps/SettingUpTheReportingServer.md>
Building AAPS <./SettingUpAaps/BuildingAaps.md>
Transferring and Installing AAPS <./SettingUpAaps/TransferringAndInstallingAaps.md>
Setup Wizard<./SettingUpAaps/SetupWizard.md>
Change AAPS configuration <./SettingUpAaps/ChangeAapsConfiguration.md>
- Config Builder <./SettingUpAaps/ConfigBuilder.md>
- Preferences <./SettingUpAaps/Preferences.md>
Completing the objectives <./SettingUpAaps/CompletingTheObjectives.md>
```

```{toctree}
:caption: 4) Fonctionnalités à distance

Contrôle à distance <remote-control.md>
Suivi seul <following-only.md>
Android Auto <./Usage/Android-auto.md>

```

```{toctree}
:caption: 5) Utilisation d'AAPS

Les écrans d'AAPS <./Getting-Started/Screenshots.md>
Fonctionnalités principales d'AAPS <./Usage/Open-APS-features.md>
Calcul des Glucides Actifs <./Usage/COB-calculation.md>
Détection de la sensitivité <./Configuration/Sensitivity-detection-and-COB.md>
Changement de profil <./Usage/Profiles.md>
Cibles temporaires <./Usage/temptarget.md>
Glucides étendus <./Usage/Extended-Carbs.md>
Automatisations <./Usage/Automation.md>
Dynamic ISF <./Usage/DynamicISF.md>
Pompes et cathéters <./5-DailyLifewithAAPS/DailyLife-PUMPS.md>
Changements de fuseau horaire <./Usage/Timezone-traveling.md>

```

```{toctree}
:caption: 6) Maintenance d'AAPS

Sauvegarder vos paramètres
Export/Import des paramètres <./Usage/ExportImportSettings.md>
Notes de version <./Installing-AndroidAPS/Releasenotes.md>
Mettre à jour AAPS <./Installing-AndroidAPS/Update-to-new-version.md>


```

```{toctree}
:caption: 7) Obtenir de l'aide

Où trouver de l'aide <./Where-To-Go-For-Help/Connect-with-other-users.md>
Problèmes fréquents <./Usage/troubleshooting.md>
Problèmes avec AAPSClient <./Usage/Troubleshooting-NSClient.md>
Fichiers de logs <./Usage/Accessing-logfiles.md>
Au secours !  
```

```{toctree}
:caption: 8) Useful AAPS Links

Glossary <./Getting-Started/Glossary.md>
AAPS Screens <./Getting-Started/Screenshots.md>
Your AAPS profile 
Accu-Chek Combo tips for basic usage <./Usage/Accu-Chek-Combo-Tips-for-Basic-usage.md>
Operation of Wear AAPS on a Smartwatch <./Configuration/Watchfaces.md>
How to customise your AAPS watchface <./Usage/Custom_Watchface_Reference.md>
xDrip Settings <./CompatibleCgms/xDrip.md>
Autotune <./Usage/autotune.md>

```

```{toctree}
:caption: 9) Options avancées d'AAPS

Boucle fermée complète <./Usage/FullClosedLoop.md>
Branche de développement <./Installing-AndroidAPS/Dev_branch.md>
Mode ingénierie xDrip <./Usage/Enabling-Engineering-Mode-in-xDrip.md>

```
```{toctree}
:caption: 10) Soutenir AAPS

Comment aider <./Getting-Started/How-can-I-help.md>
Modifier la doc <./make-a-PR.md>
Traduire l'application ou la doc <./translations.md>
État des traductions <./Administration/stateTranslations.md>
Notes de version de la documentation <./Getting-Started/WikiUpdate.md>
Projet Open Humans <./Configuration/OpenHumans.md>

```

```{toctree}
:caption: 11) Additional/archive documentation

Dedicated Google account for AAPS (optional)<./SettingUpAaps/DedicatedGoogleAccountForAaps.md>

Careportal (discontinued) <./Usage/CPbefore26.md>

For Clinicians (outdated) <./Resources/clinician-guide-to-AndroidAPS.md>

Automation with 3rd party apps <./Usage/automationwithapp.md>

Checks after update to AAPS 3.0<./Installing-AndroidAPS/update3_0.md>

Checks after update to AAPS 2.7 <./Installing-AndroidAPS/update2_7.md>

```

```{toctree}
:caption: 12) Références

Ressources générales sur le diabète et la boucle <./Where-To-Go-For-Help/Background-reading.md>
Articles sur AAPS dans des journaux scientifiques
```

```{toctree}
:caption: 13) Bac à sable

Bac à sable <./Sandbox/sandbox1.md>
Test Crowdin <./Sandbox/crowdintest.md>
Redimensionnement d'image <./Sandbox/imagescaling.md>

```
