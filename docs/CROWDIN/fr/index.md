# Bienvenue dans la documentation de AAPS

![image](./images/basic-outline-of-AAPS.png)

Android APS (**AAPS**) est une application open source pour les personnes vivant avec un diabète insulino-dépendant. C'est un système de pancréas artificiel ("artificial pancreas system" ou APS) qui fonctionne sur smartphone Android. **AAPS** utilise l'algorithme du logiciel openAPS et s'efforce de reproduire ce que fait un pancréas sain : maintenir la glycémie dans un intervalle correct pour être en bonne santé, via l'administration automatisée de l'insuline. Pour utiliser **AAPS**, vous aurez besoin de **trois** appareils compatibles : un téléphone Android, une pompe à insuline approuvée par les autorités médicales et un capteur permettant la mesure du glucose en continu (MGC).

Cette documentation explique comment installer et utiliser **AAPS**. Vous pouvez naviguer dans la documentation de **AAPS** soit via le menu de gauche (et la fonction pratique "**Rechercher docs**"), soit en utilisant l'[index](Index-of-the-AAPS-Documentation.md) en bas de cette page.

## Vue d'ensemble de la documentation AAPS ("Les docs")

Dans le chapitre 2) "Démarrage", l'[Introduction](introduction.md) explique de manière générale à quoi sert un système de pancréas artificiel (APS). Cette page décrit le contexte global de la boucle, pourquoi **AAPS** a été développé, compare **AAPS** à d'autres systèmes, et parle de la sûreté. Elle donne des suggestions sur la façon d'aborder le sujet d'**AAPS** avec votre équipe médicale, explique pourquoi vous devez compiler l'application **AAPS** vous-même plutôt que de simplement la télécharger, et donne un aperçu basique de la façon dont communiquent les différents éléments d'un système **AAPS**. Elle aborde également l'accessibilité et qui peut bénéficier de l'utilisation d'**AAPS**.

[Se préparer à AAPS](preparing.md) donne plus de détails sur les considérations de sûreté, ainsi que sur les téléphones, les MCG (Mesure Continue du Glucose) et les pompes à insuline qui sont compatibles avec **AAPS**. Cette page donne un aperçu du processus que vous allez suivre, et vous donne une idée du temps nécessaire jusqu'à pouvoir profiter pleinement de toutes les fonctionnalités de **AAPS**. Cette section vous prépare techniquement à assembler aussi rapidement et efficacement que possible les différents éléments de votre **AAPS**. Le sous-chapitre [Configuration MCG](Configuration/BG-Source.md) explique comment optimiser la configuration de votre capteur de glycémie et quelles options de lissage sont les meilleures.

Maintenant que vous avez une bonne compréhension du processus, vous pouvez démarrer l'assemblage de votre boucle **AAPS**. Vous trouverez les instructions détaillées pour ce faire dans le chapitre **3) Installation d'AAPS**. On y parlera du choix et du [serveur de reporting](setting-up-the-reporting-server.md) (Nightscout ou Tidepool) afin que vous puissiez analyser et partager vos données, de la préparation de votre ordinateur pour installer Android Studio, de la compilation elle-même de l'application AAPS et du transfert de l'application AAPS sur votre téléphone. Ce chapitre décrit également la configuration de l'application **AAPS** à l'aide de l'Assistant de configuration, pour qu'il puisse communiquer avec votre application MCG et avec une pompe à insuline réelle ou virtuelle, ainsi qu'en liant **AAPS** à votre serveur de reporting. Vous serez ensuite petit à petit guidé dans l'utilisation d'**AAPS**, via un processus progressif, sécurisé et soigneusement calibré. Ce processus est conçu pour s'assurer que vous/votre enfant connaissez bien et êtes à l'aise dans la navigation entre les différents menus et sous-menus de configuration avant de passer à la phase suivante. Ces phases sont communément appelées Objectifs, et visent à vous faire acquérir suffisamment d'expérience pour pouvoir commencer à utiliser les fonctionnalités les plus avancées de l'application. Ces objectifs sont conçus spécifiquement de manière à débloquer progressivement plus de possibilités dans **AAPS** et à passer de la boucle ouverte à la boucle fermée.

Le chapitre 4) [Fonctionnalités à distance](remote-control.md) met en avant un atout majeur d'**AAPS**. Il y a tout un éventail de possibilités pour envoyer des commandes à distance à **AAPS**, ou simplement pour en suivre les données. Ceci est également utile pour les aidants qui souhaitent utiliser **AAPS** pour les mineurs, et pour les adultes diabétiques qui souhaitent soit surveiller leur glycémie (et d'autres mesures) de manière plus pratique que sur leur téléphone (sur une montre, dans la voiture _etc._), ou encore que d'autres personnes de leur entourage surveillent également les données. Ce chapitre fournit également des conseils pour utiliser Android Auto afin que vous puissiez afficher la glycémie dans la voiture.

Section **5) Daily life with AAPS** covers key **AAPS** features, to help you use (and customise)  **AAPS**. This including understanding the screens, carbs-on-board, sensitivity, profile switching, temp targets, extended carbs (or eCarbs), automations, and DynamicISF. It also covers frequent topics like how to manage different types of meals, how to deal with cannula and sensor changes, smartphone updates, daylight saving changes, and [travelling with AAPS](Usage/Timezone-traveling.md) and sports. Common questions and answers are located within the troubleshooting section.


Section **6) Maintenance of AAPS** covers how to export and backup your settings (which is very important in case you lose/break your phone), gives the latest version notes and details how to update **AAPS**. You can expect that there will be one new version and 2-3 required updates per year. You are required to do these updates as with all software, as any minor bugs are ironed out, and improvements to **AAPS** are made. There is a dedicated "updating" troubleshooting section with the common queries.

Section **7) [Getting Help](Where-To-Go-For-Help/Connect-with-other-users.html)** should help direct you to the best places to go to find general help with **AAPS**. This is very important so that you can get in touch with others as quickly as possible, clarify questions and solve the usual pitfalls. A lot of people are already using **AAPS** successfully, but everyone has a question at some point that they couldn't solve on their own. Due to the large number of users, the response times to questions are usually very quick, typically only a few hours. Don’t worry about asking for help, there is no such thing as a dumb question! Nous encourageons les utilisateurs, quelque soit leur niveau, à poser autant de questions qu’ils jugent nécessaire pour les aider à fonctionner en toute sécurité. This section includes general troubleshooting for **AAPS** and **AAPSClient** (a companion following app) as well as explaining how to send your **AAPS** data (logfiles) to the developers for investigation, if you think a technical issue with **AAPS** needs looking at.

Section **8) Useful AAPS links** are for handy reference. This includes the  [Glossary](Getting-Started/Glossary.md), a list of the acronyms (or short-term names) used throughout **AAPS**. This is where to go to find out what the terms ISF or TT, stand for, for example. This section also has links to useful screenshots and other data.

Section 9) covers **Advanced AAPS options** such as how to progress from using **AAPS** for hybrid-closed looping (bolusing for meals _etc._) to full closed looping (no bolusing), and details development and engineering modes. Most users get on just fine with the main or "Master" **AAPS** version without looking into these options, this section is for users who already have good control and are looking to further improve their setup.

In section 10) [How to support AAPS](make-a-PR.md) we provide  information so that you can support this project. You can donate money, equipment or expertise. You can suggest/make changes to the documentation yourself, help with [translation of the documentation](translations.md) and provide your data through the Open Humans project.

Section 11 contains archived or additional documentation, including a subsection for [clinicians](Resources/clinician-guide-to-AAPS.md) who have expressed interest in open source artificial pancreas technology such as **AAPS**, or for patients who want to share such information with their clinicians, this topic is also addressed in the introduction. More diabetes and looping references and resources are contained in Section 12.


 ### Interested in getting started with **AAPS**? Read more about **AAPS** in the [Introduction](introduction.md).

:::{admonition} SAFETY NOTICE
:class: danger The safety of **AAPS** relies on the safety features of your hardware (phone, pump, CGM). Only use a fully functioning FDA/CE approved insulin pump and CGM. Do not use broken, modified or self-built insulin pumps or CGM receivers. Only use original consumable supplies (inserters, cannulas and insulin reservoirs) approved by the manufacturer for use with your pump and CGM. Using untested or modified supplies can cause inaccuracy and insulin dosing errors, resulting in significant risk to the user.

Do not use **AAPS** if you take SGLT-2 inhibitors (gliflozins), as they lower blood sugar levels. You increase the risk diabetic ketoacidosis (DKA) due to reduced insulin delivery and hypoglycemia due to lowered blood sugar levels.
:::

:::{admonition} Disclaimer
:class: note

- All information and code described here is for informational and educational purposes only. Use [Nightscout](https://nightscout.github.io/) and **AAPS** at your own risk, and do not use the information or code to make medical decisions. Nightscout ne fait actuellement aucune tentative de conformité à la confidentialité HIPAA.
- Use of code from github.com is without warranty or formal support of any kind. Veuillez consulter la LICENCE de ce référentiel pour plus de détails.
- All product and company names, trademarks, servicemarks, registered trademarks, and registered servicemarks are the property of their respective holders. Leur utilisation est à titre informatif et n'implique aucune affiliation avec eux ni aucune approbation de leur part.

**AAPS** has no association with, and is not endorsed by: [SOOIL](http://www.sooil.com/eng/), [Dexcom](https://www.dexcom.com/), [Accu-Chek, Roche Diabetes Care](https://www.accu-chek.com/), [Insulet](https://www.insulet.com/) or [Medtronic](https://www.medtronic.com/).

:::

(AAPS-Documentation-Index)=

## Index de la documentation AAPS

```{toctree}
:caption: 1) Changer la langue

Changer la langue <./changelanguage.md>
```
```{toctree}
:caption: 2) Démarrage

Introduction à AAPS <./introduction.md>
Se préparer à AAPS <preparing.md>
Pompes compatibles <./Getting-Started/Pump-Choices.md>
MGCs compatibles <./Configuration/BG-Source.md>
Téléphones compatibles <./Hardware/Phoneconfig.md>
```

```{toctree}
:caption: 3) Installation d'AAPS

Serveur de reporting <./Installing-AndroidAPS/setting-up-the-reporting-server.md>
Compilation d'AAPS <./Installing-AndroidAPS/building-AAPS.md>
Transfert et Installation d'AAPS <./Installing-AndroidAPS/Transferring-and-installing-AAPS.md>
Assistant de configuration <./Installing-AndroidAPS/setup-wizard.md>
Modifier la configuration AAPS <./Installing-AndroidAPS/change-configuration.md>
Compléter les objectifs <./Usage/completing-the-objectives.md>
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
Fichiers de logs <./Usage/Accessing-logfiles.md> My AAPS phone is broken/stolen/lost
```

```{toctree}
:caption: 8) Useful AAPS Links

Glossary <./Getting-Started/Glossary.md>
AAPS Screens <./Getting-Started/Screenshots.md>
Your AAPS profile 
Compatible pumps <./Getting-Started/Pump-Choices.md>
Accu-Chek Combo tips for basic usage <./Usage/Accu-Chek-Combo-Tips-for-Basic-usage.md>
Compatible CGMs <./Configuration/BG-Source.md>
Compatible phones  <./Hardware/Phoneconfig.md>
Operation of Wear AAPS on a Smartwatch <./Configuration/Watchfaces.md>
How to customise your AAPS watchface <./Usage/Custom_Watchface_Reference.md>
xDrip Settings <./Configuration/xdrip.md>
Autotune <./Usage/autotune.md>

```

```{toctree}
:caption: 9) Advanced AAPS options

Full Closed Loop <./Usage/FullClosedLoop.md>
Dev branch <./Installing-AndroidAPS/Dev_branch.md>
xDrip engineering mode <./Usage/Enabling-Engineering-Mode-in-xDrip.md>

```
```{toctree}
:caption: 10) How to support AAPS

How to help <./Getting-Started/How-can-I-help.md>

How to edit the docs <./make-a-PR.md>

How to translate the app and docs <./translations.md>

State of translations <./Administration/stateTranslations.md>

Docs updates & changes <./Getting-Started/WikiUpdate.md>

Open Humans Uploader <./Configuration/OpenHumans.md>

```

```{toctree}
:caption: 11) Additional/archive documentation

Dedicated Google account for AAPS (optional)<./Installing-AndroidAPS/Dedicated-Google-account-for-AAPS.md>

Careportal (discontinued) <./Usage/CPbefore26.md>

For Clinicians (outdated) <./Resources/clinician-guide-to-AndroidAPS.md>

Automation with 3rd party apps <./Usage/automationwithapp.md>

Checks after update to AAPS 3.0<./Installing-AndroidAPS/update3_0.md>

Checks after update to AAPS 2.7 <./Installing-AndroidAPS/update2_7.md>

```

```{toctree}
:caption: 12) References

General diabetes and looping resources <./Where-To-Go-For-Help/Background-reading.md>
Scientific AAPS journal articles
```

```{toctree}
:caption: 13) Sandbox

Sandbox <./Sandbox/sandbox1.md>
Crowdin Test <./Sandbox/crowdintest.md>
Image Scaling <./Sandbox/imagescaling.md>

```