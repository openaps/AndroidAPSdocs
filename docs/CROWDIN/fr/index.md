# Bienvenue dans la documentation de AAPS

![Image](images/modules-female.png)

AAPS est une application open source pour les personnes vivant avec un diabète insulino-dépendant et qui agit comme un pancréas artificiel (APS) sur les smartphones Google Android. Les principaux composants sont différents algorithmes logiciels de openAPS qui visent à reproduire ce que fait un pancréas vivant : maintenir la glycémie dans des limites de santé en utilisant un dosage automatisé d'insuline. De plus, il vous faut une pompe à insuline compatible approuvée FDA/CE et un capteur de Mesure de Glycémies en Continu (MGC).

Please read further in the [introduction](intro.md).

```{toctree}
:caption: Home

Intro <intro.md>

```

```{toctree}
:caption: Getting Started

Preparing <prepairing.md>
Building AAPS <buildingAAPS.md>
Completing the objectives <completingObjetives.md>

```

```{toctree}
:caption: Operating

Optimizing <optimizing.md>
Maintaining <maintaining.md>

```

```{toctree}
:caption: Troubleshooting

Dummy <dummy.md>
```

```{toctree}
:caption: FAQ & References

Dummy <dummy.md>
```

```{toctree}
:caption: Old-Getting started

Safety first <./Getting-Started/Safety-first.md>

What is a closed loop system <./Getting-Started/ClosedLoop.md>

What is a closed loop system with AAPS <./Getting-Started/WhatisAndroidAPS.md>

Docs updates & changes <./Getting-Started/WikiUpdate.md>

```

(index-what-do-i-need)=

```{toctree}
:caption: Old-What do I need

CGM/FGM choices <./Configuration/BG-Source.md>

Pump choices <./Getting-Started/Pump-Choices.md>

Module <./Module/module.md>

```

```{toctree}
:caption: Old-How to Install AAPS

Building the APK <./Installing-AndroidAPS/Building-APK.md>

Update to a new version or branch <./Installing-AndroidAPS/Update-to-new-version.md>

Hints and Checks after update to AAPS 3.0<./Installing-AndroidAPS/update3_0.md>

Checks after update to AAPS 2.7 <./Installing-AndroidAPS/update2_7.md>

Install git <./Installing-AndroidAPS/git-install.md>

Troubleshooting Android Studio <./Installing-AndroidAPS/troubleshooting_androidstudio.md>

Release notes <./Installing-AndroidAPS/Releasenotes.md>

Dev branch <./Installing-AndroidAPS/Dev_branch.md>

```

(index-component-setup)=

```{toctree}
:caption: Old-Component Setup

CGM/FGM <./Configuration/BG-Source.md>

xDrip Settings <./Configuration/xdrip.md>

Pump choices <./Getting-Started/Pump-Choices.md>

Phones <./Hardware/Phoneconfig.md>

Nightscout setup <./Installing-AndroidAPS/Nightscout.md>

Smartwatch  <./Hardware/Smartwatch.md>

```

(index-configuration)=

```{toctree}
:caption: Old-Configuration

Config builder <./Configuration/Config-Builder.md>

Preferences <./Configuration/Preferences.md>

```

```{toctree}
:caption: Old-AAPS Usage

AAPS screens <./Getting-Started/Screenshots.md>

Objectives <./Usage/Objectives.md>

OpenAPS features <./Usage/Open-APS-features.md>

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

Android auto <./Usage/Android-auto.md>

```

```{toctree}
:caption: Old-General Hints

Crossing timezones with pumps <./Usage/Timezone-traveling.md>

Accessing logfiles <./Usage/Accessing-logfiles.md>

Accu-Chek Combo tips for basic usage <./Usage/Accu-Chek-Combo-Tips-for-Basic-usage.md>

Export/Import Settings <./Usage/ExportImportSettings.md>

xDrip engineering mode <./Usage/Enabling-Engineering-Mode-in-xDrip.md>

```

```{toctree}
:caption: Old-AAPS for children

Remote monitoring <./Children/Children.md>

SMS commands <./Children/SMS-Commands.md>

Profile helper <./Configuration/profilehelper.md>

```

```{toctree}
:caption: Old-Troubleshooting

Troubleshooting <./Usage/troubleshooting.md>

Nightscout client <./Usage/Troubleshooting-NSClient.md>

```

```{toctree}
:caption: Old-FAQ

FAQ <./Getting-Started/FAQ.md>
```

```{toctree}
:caption: Old-Glossary

Glossary <./Getting-Started/Glossary.md>
```

```{toctree}
:caption: Old-Where to go for help

Useful resources to read before you start <./Where-To-Go-For-Help/Background-reading.md>

Where to go for help <./Where-To-Go-For-Help/Connect-with-other-users.md>

Docs updates & changes <./Getting-Started/WikiUpdate.md>

```

```{toctree}
:caption: Old-For Clinicians

For Clinicians <./Resources/clinician-guide-to-AndroidAPS.md>
```

```{toctree}
:caption: Old-How to help

How to help <./Getting-Started/How-can-I-help.md>

How to translate the app and docs <./translations.md>

State of translations <./Administration/stateTranslations.md>

How to edit the docs <./make-a-PR.md>

```

```{toctree}
:caption: Old-Sandbox

Sandbox <./Sandbox/sandbox1.md>
```

```{note}
**Avertissement**

- Toutes les informations, pensées et codes décrits ici sont destinés à des fins d'information et d'éducation uniquement. Nightscout ne fait actuellement aucune tentative de conformité à la confidentialité HIPAA. Utilisez Nightscout et AAPS à vos propres risques et n'utilisez pas les informations ni le code pour prendre des décisions médicales.
- L'utilisation du code de github.com est sans garantie ni support formel d'aucune sorte. Veuillez consulter la LICENCE de ce référentiel pour plus de détails.
- Tous les noms de produits et de sociétés, marques commerciales, marques de service, marques déposées,  sont la propriété de leurs détenteurs respectifs. Leur utilisation est à titre informatif et n'implique aucune affiliation avec eux ni aucune approbation de leur part.

A noter - ce projet n'a aucun lien avec, et n'est pas approuvé par : [SOOIL](<https://www.sooil.com/eng/>), [Dexcom](<https://www.dexcom.com/>), [Accu-Chek, Roche Diabetes Care](<https://www.accu-chek.com/>) ou [Medtronic](<https://www.medtronic.com/>)

```
