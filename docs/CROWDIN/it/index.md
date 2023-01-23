# Welcome to the AndroidAPS documentation

AndroidAPS is an open source app for people living with insulin-dependent diabetes that acts as an artificial pancreas system (APS) on Google Android smartphones. Main components are different openAPS software algorithms which aim to do what a living pancreas does: keeping blood sugar levels within healthy limits by using automated insulin dosing (AID). Additionally, you need at least a supported and FDA/CE approved insulin pump and continuous glucose meter.

The app does NOT use self-learning artificial intelligence. Instead, the calculations of AndroidAPS are based on the individual dosage algorithm and carbohydrate intake the user manually puts into his treatments profile, but they are verified by the system for safety reasons.

The app is not provided in Google Play - you have to build it from source code by yourself for legal reasons.

Main components are:

```{image} images/modules-female.png
:alt: Components
```

For more details, please read on here.

```{toctree}
:caption: Getting started
:glob: true
:maxdepth: 1

Safety first <./Getting-Started/Safety-first.rst>
What is a closed loop system <./Getting-Started/ClosedLoop.rst>
What is a closed loop system with AndroidAPS <./Getting-Started/WhatisAndroidAPS.rst>
Docs updates & changes <./Getting-Started/WikiUpdate.rst>
```

```{toctree}
:caption: What do I need
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
Install git <./Installing-AndroidAPS/git-install.rst>
Troubleshooting Android Studio <./Installing-AndroidAPS/troubleshooting_androidstudio.rst>
Release notes <./Installing-AndroidAPS/Releasenotes.rst>
Dev branch <./Installing-AndroidAPS/Dev_branch.md>
```

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

```{toctree}
:caption: Configuration
:glob: true
:maxdepth: 1

Config builder <./Configuration/Config-Builder.md>
Preferences <./Configuration/Preferences.md>
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
```

```{toctree}
:caption: AndroidAPS for children
:glob: true
:maxdepth: 1

Remote monitoring <./Children/Children.rst>
SMS commands <./Children/SMS-Commands.rst>
```

```{toctree}
:caption: Troubleshooting
:glob: true
:maxdepth: 1

Troubleshooting <./Usage/troubleshooting.rst>
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

Please note - this project has no association with and is not endorsed by: [SOOIL](http://www.sooil.com/eng/), [Dexcom](http://www.dexcom.com/), [Accu-Chek, Roche Diabetes Care](http://www.accu-chek.com/) or [Medtronic](http://www.medtronic.com/)
:::
