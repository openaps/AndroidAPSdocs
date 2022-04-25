# Welcome to the AndroidAPS documentation

```{image} images/modules-female.png
:alt: Components
```

AndroidAPS is an open source app for people living with insulin-dependent diabetes that acts as an artificial pancreas system (APS) on Google Android smartphones. The main components are different openAPS software algorithms which aim to do what a living pancreas does: keeping blood sugar levels within healthy limits by using automated insulin dosing (AID). Additionally, you need at least a supported and FDA/CE approved insulin pump and continuous glucose meter.

The app does NOT use self-learning artificial intelligence. Instead, the calculations of AndroidAPS are based on the individual dosage algorithm and carbohydrate intake the user manually puts into their treatments profile, but they are verified by the system for safety reasons.

The app is not provided in Google Play - you have to build it from source code by yourself for legal reasons.

## How to read the documentation?

Especially for the newcomers, we want to show how they can best get acquainted with the help of the documentation.

Certainly, the approach "read everything" is valid, but we also see that newcomers may be overwhelmed by the variety of new information and may be disappointed to discover in the middle of reading the documentation that the necessary tools are currently not available to them or don't allow a meaningful use or only to a limited extent.

The [Getting started](Getting-Started/Safety-first.md) subsection is a must read to understand the general concept of an artifical pancreas system and especially with AndroidAPS.

The subsection [What do I need?](Module/module.md) specifies which CGMS and insulin pump can be used with AndroidAPS. This subsection is important to understand if your project can be implemented reasonably.

The subsection [Where to go for help?](Where-To-Go-For-Help/Connect-with-other-users.md) should help you to understand where you can get what kind of help. This is very important so that you don't feel left out, especially at the beginning, and so that you can get in touch with others as quickly as possible, clarify questions and solve the usual pitfalls as quickly as possible. Experience shows that a lot of people are already using AndroidAPS successfully, but everyone had a question somewhere that they couldn't solve on their own. The nice thing is, however, that due to the large number of users, the response times to questions are usually very quickly sub-day. Just try it out please.

In the subsection [Glossary](Getting-Started/Glossary.md) we have compiled a list of the short terms used, where you can look up what ISF, TT, etc. stands for.

For parents who want to build AndroidAPS for their children, we recommend the subsection [AndroidAPS for children](Children/Children.md) , as they have more advanced questions compared to the adult. You need to be able to support your children and understand the concept that AndroidAPS offers there.

If you now understand the concept, have the necessary tools and know where to get help in case of an emergency, it is the right time to start building the app. The subsection [How to install AndroidAPS?](Installing-AndroidAPS/Building-APK.md) shows you this in detail. Since the requirements are very different, we recommend that you really follow the instructions step by step for the first build. Please take some time the first time. Later this will go very quickly when you build the app again for a new version. It is important to save the keystore in a safe place, so that you can later create a new version for your app with the same key and thus ensure that the updates go as smoothly as possible. On average, you can assume that there will be one new version and 2-3 updates per year. This number is based on experience and may change in the future. But we want to give you a guideline here. When you are experienced - later on - building the app will take 15-30 minutes on average. At the beginning this can be half a day or a whole day with some help from the community. Unfortunately, this is quite normal. By the way, we have compiled the typical errors in the FAQ section as well as in an extra subsection of "How to install AndroidAPS?" and provide additional help in the subsection "Troubleshooting".

The subsection [Compenent Setup](Configuration/BG-Source.md) explains how to integrate the tools into AndroidAPS. The sensor values and the control of the insulin pump are particularly important here. The subsection [Configuration](Configuration/BG-Source.md) describes the configuration in AndroidAPS.

This is followed by the particularly important subsection [AndroidAPS Usage](Getting-Started/Screenshots.md), in which you are slowly introduced to the use of AndroidAPS. In particular, you will go through an Objetives phase, in which you will gradually unlock more possibilities of AndroidAPS and switch from Open Loop to Closed Loop.

After that there is a subsection [General Hints](Usage/Timezone-traveling.md) with e.g. information on how to deal with the time change and the use of AndroidAPS.

There is a subsection for the [clinicians](Resources/clinician-guide-to-AndroidAPS.md) who have expressed interest in open source artificial pancreas technology such as AndroidAPS, or for patients who want to share such information with their clinicians.

Finally, in the subsection [How to help?](make-a-PR.md) we would like to provide you with information so that you are able to suggest small or larger changes to the documentation yourself and work together with us on the documentation. We further need support for [translation of the documentation](translations.md) By the way, it also helps us a lot if you send links to the corresponding documentation when answering questions from other users.

:::{note}
Please don't be shy, we need support in creating the documentation. A pull request is relatively simple to create. You can't break anything. There are release procedures. If you just want to talk in the beginning to see how you can help, give us a shout on Discord or Facebook. In this day and age, a telco is quickly arranged and we can discuss how you can best get involved and how we can show you the first steps.
:::

For more details, please read on here.

```{toctree}
:caption: Change language
:glob: true
:maxdepth: 1

Change language <./changelanguage.rst>
```

```{toctree}
:caption: Getting started
:glob: true
:maxdepth: 1

Safety first <./Getting-Started/Safety-first.rst>
What is a closed loop system <./Getting-Started/ClosedLoop.rst>
What is a closed loop system with AndroidAPS <./Getting-Started/WhatisAndroidAPS.rst>
Pump choices <./Getting-Started/Pump-Choices.md>
Docs updates & changes <./Getting-Started/WikiUpdate.rst>
```

(index.md:what-do-i-need)=

```{toctree}
:caption: What do I need?
:glob: true
:maxdepth: 1

Module <./Module/module.rst>
```

```{toctree}
:caption: How to Install AndroidAPS
:glob: true
:maxdepth: 1

Building the APK <./Installing-AndroidAPS/Building-APK.md>
Update to a new version or branch <./Installing-AndroidAPS/Update-to-new-version.md>
Hints and Checks after update to AAPS 3.0<./Installing-AndroidAPS/update3_0.md>
Checks after update to AAPS 2.7 <./Installing-AndroidAPS/update2_7.rst>
Install git <./Installing-AndroidAPS/git-install.rst>
Troubleshooting Android Studio <./Installing-AndroidAPS/troubleshooting_androidstudio.md>
Release notes <./Installing-AndroidAPS/Releasenotes.rst>
Dev branch <./Installing-AndroidAPS/Dev_branch.md>
```

(index.md:component-setup)=

```{toctree}
:caption: Component Setup
:glob: true
:maxdepth: 1

CGM/FGM <./Configuration/BG-Source.rst>
xDrip Settings <./Configuration/xdrip.md>
Pumps <./Hardware/pumps.rst>
Phones <./Hardware/Phoneconfig.rst>
Nightscout setup <./Installing-AndroidAPS/Nightscout.md>
Smartwatch  <./Hardware/Smartwatch.rst>
```

(index.md:configuration)=

```{toctree}
:caption: Configuration
:glob: true
:maxdepth: 1

Config builder <./Configuration/Config-Builder.md>
Preferences <./Configuration/Preferences.rst>
```

```{toctree}
:caption: AndroidAPS Usage
:glob: true
:maxdepth: 1

AndroidAPS screens <./Getting-Started/Screenshots.md>
Objectives <./Usage/Objectives.rst>
OpenAPS features <./Usage/Open-APS-features.md>
COB calculation <./Usage/COB-calculation.rst>
Sensitivity detection <./Configuration/Sensitivity-detection-and-COB.md>
Profile switch <./Usage/Profiles.md>
Temp-targets <./Usage/temptarget.md>
Extended carbs <./Usage/Extended-Carbs.rst>
Automation <./Usage/Automation.rst>
Careportal (discontinued) <./Usage/CPbefore26.rst>
Open Humans Uploader <./Configuration/OpenHumans.rst>
Automation with 3rd party apps <./Usage/automationwithapp.md>
Android auto <./Usage/Android-auto.md>
```

```{toctree}
:caption: General Hints
:glob: true
:maxdepth: 1

Crossing timezones with pumps <./Usage/Timezone-traveling.md>
Accessing logfiles <./Usage/Accessing-logfiles.md>
Accu-Chek Combo tips for basic usage <./Usage/Accu-Chek-Combo-Tips-for-Basic-usage.md>
Export/Import Settings <./Usage/ExportImportSettings.rst>
xDrip engineering mode <./Usage/Enabling-Engineering-Mode-in-xDrip.md>
```

```{toctree}
:caption: AndroidAPS for children
:glob: true
:maxdepth: 1

Remote monitoring <./Children/Children.rst>
SMS commands <./Children/SMS-Commands.rst>
Profile helper <./Configuration/profilehelper.rst>
```

```{toctree}
:caption: Troubleshooting
:glob: true
:maxdepth: 1

Troubleshooting <./Usage/troubleshooting.rst>
Nightscout client <./Usage/Troubleshooting-NSClient.md>
```

```{toctree}
:caption: FAQ
:glob: true
:maxdepth: 1

FAQ <./Getting-Started/FAQ.md>
```

```{toctree}
:caption: Glossary
:glob: true
:maxdepth: 1

Glossary <./Getting-Started/Glossary.md>
```

```{toctree}
:caption: Where to go for help
:glob: true
:maxdepth: 1

Useful resources to read before you start <./Where-To-Go-For-Help/Background-reading.md>
Where to go for help <./Where-To-Go-For-Help/Connect-with-other-users.md>
Docs updates & changes <./Getting-Started/WikiUpdate.rst>
```

```{toctree}
:caption: For Clinicians
:glob: true
:maxdepth: 1

For Clinicians <./Resources/clinician-guide-to-AndroidAPS>
```

```{toctree}
:caption: How to help
:glob: true
:maxdepth: 1

How to help <./Getting-Started/How-can-I-help.md>
How to translate the app and docs <./translations.md>
How to edit the docs <./make-a-PR>
```

:::{note}
**Disclaimer And Warning**

- All information, thought, and code described here is intended for informational and educational purposes only. Nightscout currently makes no attempt at HIPAA privacy compliance. Use Nightscout and AndroidAPS at your own risk, and do not use the information or code to make medical decisions.
- Use of code from github.com is without warranty or formal support of any kind. Please review this repository's LICENSE for details.
- All product and company names, trademarks, servicemarks, registered trademarks, and registered servicemarks are the property of their respective holders. Their use is for information purposes and does not imply any affiliation with or endorsement by them.

Please note - this project has no association with and is not endorsed by: [SOOIL](https://www.sooil.com/eng/), [Dexcom](https://www.dexcom.com/), [Accu-Chek, Roche Diabetes Care](https://www.accu-chek.com/) or [Medtronic](https://www.medtronic.com/)
:::
