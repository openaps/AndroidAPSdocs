# Bienvenue dans la documentation de AAPS

![image](./images/basic-outline-of-AAPS.png)

Android APS (**AAPS**) is an open source app for people living with insulin-dependent diabetes. It is an artificial pancreas system (APS) which runs on Android smartphones. **AAPS** uses an openAPS software algorithm and aims to do what a real pancreas does: keep blood sugar levels within healthy limits by using automated insulin dosing. To use **AAPS** you need **three** compatible devices: an Android phone, a FDA/CE approved insulin pump, and a continuous glucose meter (CGM).

This documentation explains how to setup and use **AAPS**. You can navigate through the **AAPS** documentation either through the menu on the left (and the handy "**Search docs**" function), or by using the [index](Index-of-the-AAPS-Documentation.md) at the bottom of this page.

## Overview of the AAPS documentation ("The docs")

Under "Getting Started", the [Introduction](introduction.md) explains the general concept of what an artificial pancreas system (APS) is designed to do. It outlines the background of looping in general, why **AAPS** was developed, compares **AAPS** to other systems, and addresses safety. It gives suggestions about how to talk to your clinical team about **AAPS**, explains why you need to build the **AAPS** app yourself rather than just downloading it, and gives an overview of the typical connectivity of an **AAPS** system. It also addresses accessibility, and who is likely to benefit from **AAPS**.

[Preparing for AAPS](preparing.md) gives more detail about safety considerations, and the phones, CGMs (Continuous Glucose Monitors) and insulin pumps which are compatible with **AAPS**. It gives an overview of the process you will go through, and provides an approximate timeline for gaining full functionality of **AAPS**. This section gets you technically prepared to assemble your **AAPS** setup as quickly and efficiently as possible.

Now that you have a solid understanding of the process, you can start assembling your **AAPS** loop. The **Setting up AAPS** section contains step-by-step instructions to do this. It covers choosing and [setting up your reporting server](setting-up-the-reporting-server.md) (Nightscout or Tidepool) so you can review and share your data, getting your computer ready for building the AAPS app, building the AAPS app and transferring the AAPS app to your phone. It also covers setting up the **AAPS** app using the setup Wizard, linking it with your CGM app, and either a real or virtual insulin pump, as well as linking **AAPS** to your reporting server. You then progress through the objectives, which will help you to optimise your settings as you unlock the full functionality of the **AAPS** app.

The [Remote control and Following](remote-control.md) section highlights a real strength of **AAPS**, which is that there are a wide range of possibilities for remotely sending commands to, or simply following the data from **AAPS**. This is equally useful for carers who want to use **AAPS** for minors, and for adults with diabetes who either want to monitor their sugars (and other metrics) more conveniently than just on their phone (on a watch, in the car _etc._), or wish to have significant others to also monitor the data. This section also provides guidance for using Android auto so you can view glucose levels in the car.

La section [Où chercher de l'aide ?](Where-To-Go-For-Help/Connect-with-other-users.html) devrait vous aider à vous orienter vers les meilleurs endroits pour aller chercher de l'aide en fonction de votre expérience avec AAPS. C'est très important pour que vous ne vous sentiez jamais seuls, surtout au début, et pour que vous puissiez entrer en contact avec d'autres utilisateurs aussi rapidement que possible, clarifier les questions et résoudre les écueils habituels le plus vite possible. L'expérience montre que beaucoup de gens utilisent déjà AAPS avec succès, mais tout le monde a une question à un moment qu'il ne sait pas résoudre seul. Due to the large number of users, the response times to questions are usually very quick, typically only a few hours. Don’t worry about asking for help, there is no such thing as a dumb question! Nous encourageons les utilisateurs, quelque soit leur niveau, à poser autant de questions qu’ils jugent nécessaire pour les aider à fonctionner en toute sécurité.

Dans la section [Glossaire](Getting-Started/Glossary.md) nous avons compilé une liste des acronymes (ou abbréviations) utilisés dans AAPS. Par exemple, pour savoir ce que signifie les termes SI ou CT, parmi les termes les plus courrants.

  Étant donné que les exigences sont très différentes de celles que vous avez pu mettre en place dans le passé, nous vous recommandons de suivre vraiment toutes les instructions, pas à pas, les premières fois que vous construisez l'application, afin que vous ayez une meilleure idée de la façon dont le processus de construction de l'application est censé se comporter lorsque toutes les étapes sont suivies exactement. N'oubliez pas de prendre votre temps. Plus tard, cela ira très rapidement lorsque vous devrez reconstruire l'application pour une nouvelle version. De cette façon, vous aurez plus de chances de voir quand quelque chose ne va pas comme prévu avant que trop d'étapes ne soient effectuées. Il est important de sauvegarder votre fichier de clés (fichier .jks utilisé pour signer votre application) dans un endroit sûr, afin que vous puissiez toujours utiliser le même fichier de clés et le même mot de passe chaque fois qu'on vous demande de créer une nouvelle mise à jour d'AAPS, car c"est ve fichier qui garanti que chaque nouvelle version de l'application « se souviendra » de toutes les informations que vous lui avez fournies dans les versions précédentes de l'application et ainsi de permettre que les mises à jour se dérouleront aussi facilement que possible. En moyenne, vous pouvez considérer qu'il y aura une nouvelle version et 2 à 3 mises à jour par an. Ce nombre est basé sur le retour d'expérience et peut changer à l'avenir. Mais nous voulons au moins vous donner une estimation sur ce à quoi vous pouvez vous attendre. Lorsque vous aurez plus d'expérience pour créer les "build" de mises à jour d'AAPS, toutes les étapes nécessaires pour une mise à jour ne prendront que 15 à 30 minutes. en moyenne. Cependant, au début, il peut y avoir une période d'apprentissage assez difficile, car ces étapes ne sont pas toujours considérées comme intuitives par les nouveaux utilisateurs! Donc, ne soyez pas frustré si vous trouvez qu'il vous faut une demi-journée ou une journée entière avec l'aide de la communauté avant d'arriver à faire vos premières mise à jour. Si vous trouvez que vous devenez très frustré, prenez juste des courtes pauses et régulièrement; après un tour du pâté de maisons ou deux, vous trouverez que vous serez plus à même d'aborder le problème à nouveau.


  Nous avons également compilé une liste de questions et de réponses à la plupart des erreurs typiques qui sont susceptibles de se produire lors des premières mises à jour dans la section Questions Fréquentes; ainsi que dans « Comment installer AAPS ? » qui fournit des renseignements supplémentaires dans la section « Dépannage ».

La section [Configuration des composants](Configuration/BG-Source.md) explique comment intégrer correctement chacun des composants dans AAPS, ainsi que la façon de les configurer pour les faire fonctionner aussi facilement que possible ensemble. Tous les composants sont listés dans les sections séparées : MGC/MGF, Paramètres xDrip, Pompes, Téléphones, Configuration Nightscout et Smartwatches. Les valeurs du capteur (Gly) et le contrôle de la pompe à insuline sont des informations particulièrement importantes à comprendre. La sous-section [Configuration](Configuration/BG-Source.md) décrit les meilleures configurations de pompe à utiliser dans AAPS.

Ceci est suivi d'une sous-section particulièrement importante [Utilisation AAPS](Getting-Started/Screenshots.md), dans laquelle vous êtes pas à pas initié à l'utilisation complète de tout ce que AAPS peut vous offrir via un processus progressif, sécurisé et soigneusement calibré, conçu pour vous assurer que vous/votre enfant sont parfaitement familiers et à l'aise pour naviguer dans les différents niveaux et configurations de menu avant de passer à la phase suivante, chacun étant communément appelé Objectif suivant, jusqu'à ce que vous ayez assez d'expérience pour commencer à utiliser les options les plus avancées disponibles dans l'application. Ces objectifs sont spécialement conçus de manière à débloquer progressivement plus de possibilités d'AAPS et à passer de la boucle ouverte à la boucle fermée.

Après cela, il y a une sous-section [Conseils Généraux](Usage/Timezone-traveling.md) avec par ex. des renseignements sur la façon de gérer les passages des fuseaux horaires ou encore savoir ce qu'il faut faire lors des changements d'heure du printemps - retour arrière de l'automne, changements qui se produiront deux fois par an en utilisant AAPS.

Cette page est destinée [aux professionels de santé](Resources/clinician-guide-to-AAPS.md) qui ont exprimé leur intérêt pour la technologie du pancréas artificiel en open source comme AAPS, ou pour les patients qui veulent partager ces informations avec leur équipe médicale.

Enfin, dans la sous-section [Comment aider ?](make-a-PR.md) nous aimerions vous fournir des informations afin que vous puissiez suggérer de petites ou grandes modifications à la documentation et travailler avec nous sur la documentation. We further need support for [translation of the documentation](translations.md). It also very helpful for everyone if you could provide links to the corresponding documentation (or screenshots of where the links are located within the Documentation if you are not familiar with how to send a link) when answering questions from other users. De cette façon, les informations correctes peuvent facilement être retrouvées si d'autres utilisateurs cherchent les réponses aux mêmes types de questions à l'avenir.

 Interested in getting started with **AAPS**? Read more about **AAPS** in the [Introduction](introduction.md).

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

## AAPS Documentation Index

```{toctree}
:caption: Changer de langue

Changer de langue <./changelanguage.md>
```
```{toctree}
:caption: Getting started

Introduction to AAPS <./introduction.md>

Preparing for AAPS <preparing.md>

```

```{toctree}
:caption: Setting up AAPS

Setting up the reporting server <./Installing-AndroidAPS/setting-up-the-reporting-server.md>
Building AAPS <./Installing-AndroidAPS/building-AAPS.md>
Transferring and Installing AAPS <./Installing-AndroidAPS/Transferring-and-installing-AAPS.md>
Setup Wizard<./Installing-AndroidAPS/setup-wizard.md>
Change AAPS configuration<./Installing-AndroidAPS/change-configuration.md>
Completing the objectives <./Usage/completing-the-objectives.md>
```

```{toctree}
:caption: Remote control and following

Remote control <remote-control.md>
Following-only <following-only.md>
Android auto <./Usage/Android-auto.md>

```

```{toctree}
:caption: Advanced Setting up APPS

Release notes <./Installing-AndroidAPS/Releasenotes.md>

Update to a new version or branch <./Installing-AndroidAPS/Update-to-new-version.md>

Dev branch <./Installing-AndroidAPS/Dev_branch.md>

Dedicated Google account for AAPS (optional)<./Installing-AndroidAPS/Dedicated-Google-account-for-AAPS.md>

```

```{toctree}
:caption: Boucle Fermée complète

Boucle Fermée complète <./Usage/FullClosedLoop.md>

```

(index-component-setup)=

```{toctree}
:caption: Component Setup

CGM/FGM <./Configuration/BG-Source.md>

xDrip Settings <./Configuration/xdrip.md>

Pump choices <./Getting-Started/Pump-Choices.md>

Phones <./Hardware/Phoneconfig.md>

Smartwatch  <./Hardware/Smartwatch.md>

```

```{toctree}
:caption: AAPS Usage

AAPS screens <./Getting-Started/Screenshots.md>

OpenAPS features <./Usage/Open-APS-features.md>

Dynamic ISF <./Usage/DynamicISF.md>

COB calculation <./Usage/COB-calculation.md>

Sensitivity detection <./Configuration/Sensitivity-detection-and-COB.md>

Profile switch <./Usage/Profiles.md>

Temp-targets <./Usage/temptarget.md>

Extended carbs <./Usage/Extended-Carbs.md>

Automation <./Usage/Automation.md>

Autotune (dev only) <./Usage/autotune.md>

Careportal (discontinued) <./Usage/CPbefore26.md>

Open Humans Uploader <./Configuration/OpenHumans.md>

Automation with 3rd party apps <./Usage/automationwithapp.md>



Custom Watchface reference document <./Usage/Custom_Watchface_Reference.md>

Exchange Site Custom Watchfaces <./ExchangeSiteCustomWatchfaces/index.md>

```

```{toctree}
:caption: "Conseils généraux"

Fuseaux horaires <./Usage/Timezone-traveling.md>

Acces aux fichiers journaux <./Usage/Accessing-logfiles.md>

Conseils d'utilisation de l'Accu-Chek Combo <./Usage/Accu-Chek-Combo-Tips-for-Basic-usage.md>

Export/Import des paramètres <./Usage/ExportImportSettings.md>

Mode ingénierie xDrip <./Usage/Enabling-Engineering-Mode-in-xDrip.md>

```

```{toctree}
:caption: Dépannage

Dépannage <./Usage/troubleshooting.md>

Client Nightscout <./Usage/Troubleshooting-NSClient.md>

```

```{toctree}
:caption: FAQ

FAQ <./Getting-Started/FAQ.md>
```

```{toctree}
:caption: Glossaire

Glossaire <./Getting-Started/Glossary.md>
```

```{toctree}
:caption: Où chercher de l'aide

Ressources utiles à lire avant de commencer <./Where-To-Go-For-Help/Background-reading.md>

Où chercher de l'aide <./Where-To-Go-For-Help/Connect-with-other-users.md>

Wiki mises à jour et modifications <./Getting-Started/WikiUpdate.md>

```

```{toctree}
:caption: Pour les professionnels de santé

Pour les professionnels de santé <./Ressources/clinician-guide-to-AndroidAPS.md>
```

```{toctree}
:caption: How to help

How to help <./Getting-Started/How-can-I-help.md>

How to translate the app and docs <./translations.md>

How to edit the docs <./make-a-PR.md>

State of translations <./Administration/stateTranslations.md>

```

```{toctree}
:caption: Legacy

Hints and Checks after update to AAPS 3.0<./Installing-AndroidAPS/update3_0.md>

Checks after update to AAPS 2.7 <./Installing-AndroidAPS/update2_7.md>

```

```{toctree}
:caption: Sandbox

Sandbox <./Sandbox/sandbox1.md>
Crowdin Test <./Sandbox/crowdintest.md>
Image Scaling <./Sandbox/imagescaling.md>

```
