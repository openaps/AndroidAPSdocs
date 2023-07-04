# Preparing

## Guide to the Android APS doc	

### First Steps
Welcome. This is an introduction to aid beginners to the concept of Do-It-Yourself-APS (Android-Artificial-Pancreas-Systems “AAPS”) is commonly referred to as ‘looping’..

#### Safetys
“With great powers come great responsibilities…”

**AAPS** is designed with an extensive set of safety features with limits imposed and gradually removed with completion of the [Objectives](https://androidaps.readthedocs.io/en/latest/Usage/Objectives.html) (predominately made up of multiple choice questions). An **AAPS** feature will be unlocked as the Objectives are successfully completed. This process will gradually allow the user to migrate from Open Loop to Closed Loop.

This has been done to achieve the best possible experience with AAPS by preventing common mistakes new users tend to make when starting to loop. The safety parameters have been built upon typical errors and general trends **AAPS** developers have observed with new users. Mistakes can happen because the beginner is inexperienced and too eager to get started with **AAPS** or has overlooked the required materials. Do not worry, we have all been there!

#### Key Principles

The key principles and concepts of looping must be understood by the user before using **AAPS**. This is achieved by investing your personal time into reading the **AAPS** documentation, and completing the Objectives which is aimed to provide you with a solid platform for safe and effective use of **AAPS**. The volume of **AAPS** documentation may seem overwhelming at first but be patient and trust the process - with the proper approach, you'll get there! The overall process will depend upon the beginner’s progress and completion of objectives can typically take between 6 to 9 weeks .

#### Plan for hiccups

At the preliminary stages of **AAPS**, you should expect to experience some hiccups whilst trying to fine tune your settings. **AAPS**’ glitches cannot be flushed out until the system is used in everyday life. Please plan accordingly and allow a sensible amount of time to troubleshoot and resolve such issues.

#### Flexibility/Adaptability

Success with **AAPS** requires a proactive approach, a willingness to reflect on the BG data and flexibility to make the necessary adjustments to **AAPS** in order to improve your outcomes. Just as it is nearly impossible to learn to play a sport by reading about the rules alone, the same can be said of **AAPS**.

#### Technology compatibility

There are limitations with **AAPS** as it is accessible for only certain types of insulin pumps or CGMs, and some technology may not be available for use in various countries. In order to avoid any disappointment or frustrations, please read  please read Component Set Up (Section INSERT)[Component Set Up (Section E).](https://androidaps.readthedocs.io/en/latest/Configuration/BG-Source.html)

#### App Build time

The time to build the **AAPS**(under Section INSERT) depends on your level of expertise and technical ability. Typically for inexperienced users, it can take up to half a day or a full day (with help from the community) in order to build the **AAPS**. The process will significantly speed up as you become more experienced at building the **AAPS**. 

To aid the build process there are sections dedicated for:

- list of questions and answers for frequent errors that are likely to occur under [FAQs (Section](https://androidaps.readthedocs.io/en/latest/Getting-Started/FAQ.html) K);
    
- “[How to install AAPS](https://androidaps.readthedocs.io/en/latest/Installing-AndroidAPS/Building-APK.html)? (Section D) which includes [Troubleshooting](https://androidaps.readthedocs.io/en/latest/Usage/troubleshooting.html) Subsection.
    

#### Keystore & configuration settings export  file

A “keystore” is a password encrypted file unique to your own copy of **AAPS**. Your android phone uses it to ensure that nobody else can upgrade your own copy without the keystore. In short, as part of the **AAPS** build, you should:

1.  save the your keystore file (.jks file used to sign your app) in a safe place;
    
2.  keep a note of your password for your keystore file.
    

By doing the above, this will ensure that you can use that exact same keystore file each time an updated version of **AAPS** is created. On average, there will be 2-3 AAPS updates required each year. 

In addition, **AAPS** provides the ability to [export all your configuration settings](https://androidaps.readthedocs.io/en/latest/Usage/ExportImportSettings.html). This ensures that you can safely recover your system while changing phones, upgrading/reinstalling the application with minimum disruption. 

#### Troubleshooting

Please feel free to reach out to the AAPS community if there is anything you feel unsure about - there is no such thing as a silly question! All users with various levels of experience are encouraged to ask questions as necessary. Response times to questions are usually quick, typically only a few hours due to the volume of **AAPS** users. 

##### [check the documentation](https://androidaps.readthedocs.io/en/latest/index.html)

##### [ask our facebook group](https://www.facebook.com/groups/AndroidAPSUsers/)

##### [ask our discord channel](https://discord.com/channels/629952586895851530/629954570394533889)

#### Section overview

AAPS documentation is made up of the following Sections:

##### [Getting started](https://androidaps.readthedocs.io/en/latest/Getting-Started/Safety-first.html)

This is a must read to understand the general concept of what an artificial pancreas system is designed to do.

##### [What do I need?](https://androidaps.readthedocs.io/en/latest/Module/module.html) 

This explains AAPS’ compatibility with CGMs (Continuous Glucose Monitors) and insulin pumps.  It also provides a guide on the correct assembly of an AAPS system to ensure that it functions correctly in everyday life.

##### How to install AAPS

This section is the manual for building the AAPS. Strict adherence to the step-by-step instructions are required in order to successfully build the AAPS.  Please take your time.

##### [Component Setup](https://androidaps.readthedocs.io/en/latest/Configuration/BG-Source.html)

This explains how to properly integrate each of the various different separate component parts into **AAPS**, as well as how to set them up to work as seamlessly as possible together. All components are listed under the separate sections: CGM/FGM, xDrip Settings, Pumps, Phones, Nightscout setup, and Smartwatches. The sensor (BG) values and control of the insulin pump are particularly important information to understand.

##### Configuration

This explains how to set and configure your ‘Profile’, ‘Insulin’, ‘BG Source’, ‘Pump’, ‘Sensitivity Detection’, ‘APS’, ‘Loop’, ‘Treatments’.

##### AAPS Usage

This section provides a breakdown of the features provided by AAPS.

##### [General Hints](https://androidaps.readthedocs.io/en/latest/Usage/Timezone-traveling.html)

Useful tricks on how to tackle looping issues such as time zones, and daylight saving (i.e. Spring Forward/ - Fall Back).

##### [AAPS](https://androidaps.readthedocs.io/en/latest/Getting-Started/Screenshots.html) for Children

This is designed for parents or caregivers who want to build an AAPS for their child.  It also explains the extra features necessary in order to support and safely  control your child’s AAPS remotely. <br><br>The concepts in this section should be fully understood in order to competently use this feature.

##### Troubleshooting

This section contains links to help solve issues when building or using AAPS.

##### FAQ

This section addresses specific questions which tend to come up when building or using AAPS.

##### [Glossary](https://androidaps.readthedocs.io/en/latest/Getting-Started/Glossary.html)

This contains a list of the acronyms (or short-term names) or defined terms developed specifically for AAP (for instance, the terms ‘ISF’ or ‘TT’ have special meanings in AAPS).

##### [Where to go for help](https://androidaps.readthedocs.io/en/latest/Where-To-Go-For-Help/Background-reading.html)?

This section is aimed to provide new users with links on resources in order to get help including accessing community support made up of both new and experienced users who can clarify questions, and resolve the usual pitfalls that come with AAPS.

##### For Clinicians

This is a section for the clinicians who have expressed interest in open source artificial pancreas technology such as AAPS, or for patients who want to share such information with their clinicians.                                                                                                                                                                                                                              |

## what are we going to build?	
### An Android Phone Application: AAPS

At the core, AAPS is an android application running from a phone. You are going to build it from scratch by installing tools to download the source code and build the actual application. 

### A reporting server NightScout (Tidepool*)

In order to fully take advantage of AAPS, you will want to setup a Nightscout server. It is used to collect data from AAPS over time to generate reports corelating CGM and insulin patterns.  Furthermore it can be used possibly to communicate to the AAPS application itself. This is required for parents who want to oversee their children AAPS sessions. 

To put things in perspective, attempting to analyze your diabetes performance by looking at CGM data separately from the pump data is like driving a car where the driver is blind and the passenger describes the scene... 

(*) (as of 26-Jun-203) Tidepool is currently available with the upcoming version 3.2 of AAPS.


### A comprehensive ecosystem for maintenance 

Since the application needs to be built and maintained; you will be taken step-by-step through setting up several tools which will allow to maintain the application, save your settings, your parameters, etc... 


## How long will it take?	

As mentioned earlier, adopting AAPS is a more of a "journey" than a one-time setup. Current estimates would be:
- initial reading of the documentation: 1 day
- installing/configuring PC to allow the build: 2-8 hours
- building a Nightscout server: 1 hour
- installing (xdrip or BYODA or ... ): 1 hour
- configuring CGM->xdrip->APPS  initially: 1 hour
- configuring  AAPS->pump initially:1 hour
- configuring AAPS->NightScout (reporting only): 1 hour
- optional (for Parents) - configuring NightScout <-> AAPS & NSFollowers: 1 hour
- Objective 1 :  1 hour
- Objective 2 :  2 hour
- Objective 3 : 14 days
- Objective 4 : 7  days
- Objective 5 : 7  days ?
- Objective 6 : 5-14 days
- Objective 7 : 7 days ?
- Objective 8 : 7-14 days ?
- Objective 9 : 14 day ?
- Objective 10 : 1 day ?

once you are fully operational on AAPS, you are very likely to keep fine tuning your parameters and improving your overall diabete management.

## Requirements	

### Medical

#### A Supportive CareTeam

As long as your endocrinologist masters CGM, pumps and is open to you using an open source hybrid loop system it should be fine. Even better:
- he already leverages NightScout (or Tidepool) with his patients on CGM/Pump
- he already support adoption of loop systems especially loop/AAPS/iAPS/OpenAPS
- he is himself a Type 1 Diabetic on AAPS.
...

#### NO SGLT-2 inhibitors

:::{admonition} NO SGLT-2 inhibitors
:class: danger
SGLT-2 inhibitors, also called gliflozins, inhibit reabsorption of glucose in the kidney. As they incalculably lower blood sugar levels, you MUST NOT take them while using a closed loop system like AAPS! There would be a huge risk of a ketoacidosis or a hypoglycemia! The combination of this medication with a system that lowers basal rates in order to increase BG is especially dangerous as due to the gliflozin this rise in BG might not happen and a dangerous state of lack of insulin can happen. 
:::
Common Branding names include: Invokana, Farxiga, Jardiance, Glyxambi, Synjardy, Steglatro, and Xigduo XR, others... 
 

#### 100U/ml insulins:

AAPS calculations are based on insulin concentrations of 100U/ml (same as pump's standard). The following types of insulin profile presets are supported:
- Rapid-Acting Oref: Humalog/NovoRapid/NovoLog
- Ultra-Rapid ORef:  Fiasp
- Lyumjev: 

For Experimental/Advanced users only:
- Free-Peak Oref: Allows you to define peak of the insulin activity


### Technical

This documentation aims at reducing the technical expertise required to an absolute minimum. However, you use your computer to build an android application from scratch, setup a server over the internet in a  public cloud; modify several android phone configurations and develop an extensive expertise in diabetes management... 
Overall this is achieved by moving step-by-step, being patient, and leveraging support from an extensive community. If you are already able to navigate the internet, manage your own gmail emails, keep your Computer up-to-date it should be feasible. Just take your time.
### Personal

Again, their is definitely a steep learning curve to use AAPS. It will take time, patience and significant efforts however it is also a very rewarding experience as proven by the 10, 000 active users of the solution... 


### CGMs
AAPS currently works with the following CGMs:

| STATUS      | Name                                                                                                     |
| ---        | ---                                                                                                      | 
| Current    | Dexcom G6, One                                                                                           | 
| Current    | Medtronic Enlite                                                                                         | 
| Current    | Eversense                                                                                                | 
| Current    | MM640g/MM630g                                                                                            | 
| Current    | Libre 2                                                                                                  | 
| Current    | PocTech                                                                                                  | 
| Current    | NightScout as intermediate BG Source                                                                     | 
| Legacy     | Dexcom G4/G5                                                                                             | 
| Legacy     | Libre 1 (requires Miao Miao)                                                                             | 
| Beta       | Dexcom G7                                                                                                | 
| No Support | Libre 3                                                                                                  | 


### Insulin Pumps

AAPS currently works with the following pumps:

| STATUS      | Name                    | Additional Requirements              |
| ---        | ---                     |  ---                                 |
| Current    | Newer Omnipod Dash      | |
| Current    | DANA R, DANA RS, DANA-i | |
| Current    | Roche/Accucheck Combo, insight | |
| Legacy     | Older Omnipod Eeros     |[additional device needed ](module-additional-communication-device) |
| Legacy     | [some old Medtronic pumps](../Configuration/MedtronicPump.md)    | [additional device needed ](module-additional-communication-device) |


### Phones

The current version of AAPS requires an Android smartphone with Google Android 9.0 or above. So if you are thinking about a new phone, Android 9 is recommended at a minimum but optimally choose Android 10 or 12 or 13.

Users are strongly encouraged to keep their build of AAPS up to date for safety reason, however for users unable to use a device with a minimum version of Android 8.0, AAPS version 2.6.1.4, suitable for older Android versions, remains available from the [old repository.](https://github.com/miloskozak/AAPS)

Users are creating a [list of tested phones and watches](https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit?usp=sharing)

To record a phone or watch that isn't already listed in the spreadsheet then please fill in the [form](https://docs.google.com/forms/d/e/1FAIpQLScvmuqLTZ7MizuFBoTyVCZXuDb__jnQawEvMYtnnT9RGY6QUw/viewform).

Any problems with the spreadsheet please send an email to [hardware@androidaps.org](mailto:hardware@androidaps.org), any donations of phone/watch models that still need testing please send an email to [donations@androidaps.org](mailto:hardware@androidaps.org).

- [List of tested phones](../Getting-Started/Phones.md)
- [Jelly Pro Settings](../Usage/jelly.md)
- [Huawei Settings](../Usage/huawei.md)

Users are strongly encouraged to keep their phone version of Android up-to-date including with security parameters. However, if you are new with AAPS or are not a technical expert you might want to delay updating your phone until others confirm it is safe on our various forums. 

:::{admonition} Google Play Protect potential Issue
:class: warning
There have been several reports of AAPS being shutdown arbitrarily by Google Play Protect every morning. If this happens you will have to go to the google play options and disable "Google Play Protect". This doesn't seem to apply to all phone models or all Android versions.
:::


