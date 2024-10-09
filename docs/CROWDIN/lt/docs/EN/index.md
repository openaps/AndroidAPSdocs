# Welcome to the AAPS documentation

![image](./images/basic-outline-of-AAPS.png)

Android APS (**AAPS**) is an open source app for people living with insulin-dependent diabetes. It is an artificial pancreas system (APS) which runs on Android smartphones. **AAPS** uses an openAPS software algorithm and aims to do what a real pancreas does: keep blood sugar levels within healthy limits by using automated insulin dosing. To use **AAPS** you need **three** compatible devices: an Android phone, a FDA/CE approved insulin pump, and a continuous glucose meter (CGM).

This documentation explains how to setup and use **AAPS**. You can navigate through the **AAPS** documentation either through the menu on the left (and the handy "**Search docs**" function), or by using the [index](Index-of-the-AAPS-Documentation.md) at the bottom of this page.

## Overview of the AAPS documentation ("The docs")

Section 2) "Getting Started", the [Introduction](introduction.md) explains the general concept of what an artificial pancreas system (APS) is designed to do. It outlines the background of looping in general, why **AAPS** was developed, compares **AAPS** to other systems, and addresses safety. It gives suggestions about how to talk to your clinical team about **AAPS**, explains why you need to build the **AAPS** app yourself rather than just downloading it, and gives an overview of the typical connectivity of an **AAPS** system. It also addresses accessibility, and who is likely to benefit from **AAPS**.

[Preparing for AAPS](preparing.md) gives more detail about safety considerations, and the phones, CGMs (Continuous Glucose Monitors) and insulin pumps which are compatible with **AAPS**. It gives an overview of the process you will go through, and provides an approximate timeline for gaining full functionality of **AAPS**. This section gets you technically prepared to assemble your **AAPS** setup as quickly and efficiently as possible. The subsection [CGM Configuration](Configuration/BG-Source.md) explains how to optimse CGM setup and what smoothing options are best.

Now that you have a solid understanding of the process, you can start assembling your **AAPS** loop. Section **3) Setting up AAPS** contains step-by-step instructions to do this. It covers choosing and [setting up your reporting server](setting-up-the-reporting-server.md) (Nightscout or Tidepool) so you can review and share your data, getting your computer ready for building the AAPS app, building the AAPS app and transferring the AAPS app to your phone. It also covers setting up the **AAPS** app using the setup Wizard, linking it with your CGM app, and either a real or virtual insulin pump, as well as linking **AAPS** to your reporting server. You are then slowly introduced to the full usage of what **AAPS** has to offer via a safe and carefully calibrated step-by-step process designed to make sure that you/your child are thoroughly familiar and comfortable navigating all the different levels and menu configurations before graduating on the next phase, commonly referred to as the next "Objective", until you are have enough experience to begin using the more advanced options available within the app. These Objectives are specially designed in such a way that will gradually unlock more possibilities of **AAPS** and switch from Open Loop to Closed Loop.

Section 4) [Remote AAPS features](remote-control.md) highlights a real strength of **AAPS**. There are a wide range of possibilities for remotely sending commands to, or simply following the data from **AAPS**. This is equally useful for carers who want to use **AAPS** for minors, and for adults with diabetes who either want to monitor their sugars (and other metrics) more conveniently than just on their phone (on a watch, in the car _etc._), or wish to have significant others to also monitor the data. This section also provides guidance for using Android Auto so you can view glucose levels in the car.

Section **5) Daily life with AAPS** covers key **AAPS** features, to help you use (and customise)  **AAPS**. This including understanding the screens, carbs-on-board, sensitivity, profile switching, temp targets, extended carbs (or eCarbs), automations, and DynamicISF. It also covers frequent topics like how to manage different types of meals, how to deal with cannula and sensor changes, smartphone updates, daylight saving changes, and [travelling with AAPS](Usage/Timezone-traveling.md) and sports. Common questions and answers are located within the troubleshooting section.


Section **6) Maintenance of AAPS** covers how to export and backup your settings (which is very important in case you lose/break your phone), gives the latest version notes and details how to update **AAPS**. You can expect that there will be one new version and 2-3 required updates per year. You are required to do these updates as with all software, as any minor bugs are ironed out, and improvements to **AAPS** are made. There is a dedicated "updating" troubleshooting section with the common queries.

Section **7) [Getting Help](Where-To-Go-For-Help/Connect-with-other-users.html)** should help direct you to the best places to go to find general help with **AAPS**. This is very important so that you can get in touch with others as quickly as possible, clarify questions and solve the usual pitfalls. A lot of people are already using **AAPS** successfully, but everyone has a question at some point that they couldn't solve on their own. Due to the large number of users, the response times to questions are usually very quick, typically only a few hours. Don’t worry about asking for help, there is no such thing as a dumb question! We encourage users of any/all levels of experience to ask as many questions as they feel is necessary to help get them up and running safely. This section includes general troubleshooting for **AAPS** and **AAPSClient** (a companion following app) as well as explaining how to send your **AAPS** data (logfiles) to the developers for investigation, if you think a technical issue with **AAPS** needs looking at.

Section **8) Useful AAPS links** are for handy reference. This includes the  [Glossary](Getting-Started/Glossary.md), a list of the acronyms (or short-term names) used throughout **AAPS**. This is where to go to find out what the terms ISF or TT, stand for, for example. This section also has links to useful screenshots and other data.

Section 9) covers **Advanced AAPS options** such as how to progress from using **AAPS** for hybrid-closed looping (bolusing for meals _etc._) to full closed looping (no bolusing), and details development and engineering modes. Most users get on just fine with the main or "Master" **AAPS** version without looking into these options, this section is for users who already have good control and are looking to further improve their setup.

In section 10) [How to support AAPS](make-a-PR.md) we provide  information so that you can support this project. You can donate money, equipment or expertise. You can suggest/make changes to the documentation yourself, help with [translation of the documentation](translations.md) and provide your data through the Open Humans project.

Section 11) contains archived or additional documentation, including a subsection for [clinicians](Resources/clinician-guide-to-AAPS.md) who have expressed interest in open source artificial pancreas technology such as **AAPS**, or for patients who want to share such information with their clinicians, this topic is also addressed in the introduction. More diabetes and looping references and resources are contained in Section 12).


 ### Interested in getting started with **AAPS**? Read more about **AAPS** in the [Introduction](introduction.md).

```{admonition} SAFETY NOTICE
:class: danger
The safety of **AAPS** relies on the safety features of your hardware (phone, pump, CGM). Only use a fully functioning FDA/CE approved insulin pump and CGM. Do not use broken, modified or self-built insulin pumps or CGM receivers. Only use original consumable supplies (inserters, cannulas and insulin reservoirs) approved by the manufacturer for use with your pump and CGM. Using untested or modified supplies can cause inaccuracy and insulin dosing errors, resulting in significant risk to the user. 

Do not use **AAPS** if you take SGLT-2 inhibitors (gliflozins), as they lower blood sugar levels. You increase the risk diabetic ketoacidosis (DKA) due to reduced insulin delivery and hypoglycemia due to lowered blood sugar levels. 
```

```{admonition} Disclaimer
:class: note

- All information and code described here is for informational and educational purposes only. Use [Nightscout](https://nightscout.github.io/) and **AAPS** at your own risk, and do not use the information or code to make medical decisions. Nightscout neatitinka jokių privatumo reikalavimų sveikatos priežiūros srityje. 
- Use of code from github.com is without warranty or formal support of any kind. Norėdami gauti daugiau informacijos, perskaitykite šios saugyklos LICENCIJĄ.
- All product and company names, trademarks, servicemarks, registered trademarks, and registered servicemarks are the property of their respective holders. Jie naudojami tik informaciniais tikslais ir nereiškia, kad AAPS priklauso jiems ir kad jie yra palaikomi.

**AAPS** has no association with, and is not endorsed by: [SOOIL](http://www.sooil.com/eng/), [Dexcom](https://www.dexcom.com/), [Accu-Chek, Roche Diabetes Care](https://www.accu-chek.com/), [Insulet](https://www.insulet.com/) or [Medtronic](https://www.medtronic.com/).

```

(AAPS-Documentation-Index)=

## AAPS Documentation Index

```{toctree}
:caption: 1) Change language

Change language <./changelanguage.md>
```
```{toctree}
:caption: 2) Getting started

Introduction to AAPS <./introduction.md>
Preparing for AAPS <preparing.md>
Compatible pumps <./Getting-Started/Pump-Choices.md>
Compatible CGMs <./Configuration/BG-Source.md>
Compatible phones  <./Hardware/Phoneconfig.md>
```

```{toctree}
:caption: 3) Setting up AAPS

Setting up the reporting server <./Installing-AndroidAPS/setting-up-the-reporting-server.md>
Building AAPS <./Installing-AndroidAPS/building-AAPS.md>
Transferring and Installing AAPS <./Installing-AndroidAPS/Transferring-and-installing-AAPS.md>
Setup Wizard<./Installing-AndroidAPS/setup-wizard.md>
Change AAPS configuration <./Installing-AndroidAPS/change-configuration.md>
- Config Builder <./Configuration/Config-Builder.md>
- Preferences <./Configuration/Preferences.md>
Completing the objectives <./Usage/completing-the-objectives.md>
```

```{toctree}
:caption: 4) Remote AAPS features

Remote control <remote-control.md>
Following Only <following-only.md>
Android Auto <./Usage/Android-auto.md>

```

```{toctree}
:caption: 5) Daily Life with APPS

AAPS Screens <./Getting-Started/Screenshots.md>
Key AAPS Features <./Usage/Open-APS-features.md>
COB calculation <./Usage/COB-calculation.md>
Sensitivity detection <./Configuration/Sensitivity-detection-and-COB.md>
Profile switch <./Usage/Profiles.md>
Temp-targets <./Usage/temptarget.md>
Extended carbs <./Usage/Extended-Carbs.md>
Automations <./Usage/Automation.md>
Dynamic ISF <./Usage/DynamicISF.md>
Meal Management
Pumps and cannulas <./5-DailyLifewithAAPS/DailyLife-PUMPS.md>
Sensors
Phones
Daylight saving changes
Travelling with AAPS 
Crossing timezones with pumps <./Usage/Timezone-traveling.md>

```

```{toctree}
:caption: 6) Maintenance of AAPS

Backing up your settings
Export/Import Settings <./Usage/ExportImportSettings.md>
Reviewing your data
Version Release Notes <./Installing-AndroidAPS/Releasenotes.md>
Updating to a new version of AAPS <./Installing-AndroidAPS/Update-to-new-version.md>


```

```{toctree}
:caption: 7) Getting Help

Where can I get help with AAPS <./Where-To-Go-For-Help/Connect-with-other-users.md>
General Troubleshooting <./Usage/troubleshooting.md>
Troubleshooting AAPSClient <./Usage/Troubleshooting-NSClient.md>
How to report bugs/request features
Accessing logfiles <./Usage/Accessing-logfiles.md>
Help! My AAPS phone is broken/stolen/lost
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
