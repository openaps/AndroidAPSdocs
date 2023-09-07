# Prepairing

## Guide to the Android APS doc

### First Steps
Welcome. This is an introduction to aid beginners to the concept of Do-It-Yourself-APS (Android-Artificial-Pancreas-Systems “AAPS”) is commonly referred to as ‘looping’..

#### Safetys
“With great powers come great responsibilities…”

AAPS is designed with an extensive set of safety features with limits imposed and gradually removed with completion of the [Objectives](https://androidaps.readthedocs.io/en/latest/Usage/Objectives.html) (predominately made up of multiple choice questions). An AAPS feature will be unlocked as the Objectives are successfully completed. This process will gradually allow the user to migrate from Open Loop to Closed Loop.

This has been done to achieve the best possible experience with AAPS by preventing common mistakes new users tend to make when starting to loop. The safety parameters have been built upon typical errors and general trends AAPS developers have observed with new users. Mistakes can happen because the beginner is inexperienced and too eager to get started with AAPS or has overlooked the required materials. Do not worry, we have all been there!

#### Key Principles

The key principles and concepts of looping must be understood by the user before using AAPS. This is achieved by investing your personal time into reading the AAPS documentation, and completing the [Objectives](https://androidaps.readthedocs.io/en/latest/Usage/Objectives.html) which is aimed to provide you with a solid platform for safe and effective use of AAPS. The volume of AAPS documentation may seem overwhelming at first but be patient and trust the process - with the proper approach, you'll get there! The overall process will depend upon the beginner’s progress and completion of objectives which typically take between 6 to 9 weeks .

#### Plan for hiccups

At the preliminary stages of AAPS, you should expect to experience some hiccups whilst trying to fine tune your settings. AAPS’ glitches cannot be flushed out until the system is used in everyday life. Please plan accordingly and allow a sensible amount of time to troubleshoot and resolve such issues.

#### Flexibility/Adaptability

Success with AAPS requires a proactive approach, a willingness to reflect on the BG data and flexibility to make the necessary adjustments to AAPS in order to improve your outcomes. Just as it is nearly impossible to learn to play a sport by reading about the rules alone, the same can be said of AAPS.

#### Technology compatibility
There are limitations with AAPS as it is accessible for only certain types of insulin pumps or CGMs, and some technology may not be available for use in various countries. In order to avoid any disappointment or frustrations, please read [Component Set Up (Section E).](https://androidaps.readthedocs.io/en/latest/Configuration/BG-Source.html)

#### App Build time
The time to build the AAPS (under Section D) depends on your level of expertise and technical ability. Typically for inexperienced users, it can take up to half a day or a full day (with help from the community) in order to build the AAPS. The process will significantly speed up as you become more experienced at building the AAPS. 

To aid the build process there are sections dedicated for:

- list of questions and answers for frequent errors that are likely to occur under [FAQs (Section](https://androidaps.readthedocs.io/en/latest/Getting-Started/FAQ.html) K);

- “[How to install AAPS](https://androidaps.readthedocs.io/en/latest/Installing-AndroidAPS/Building-APK.html)? (Section D) which includes [Troubleshooting](https://androidaps.readthedocs.io/en/latest/Usage/troubleshooting.html) subsection.


#### Keystore & configuration settings export  file

A “keystore” is a password encrypted file unique to your own copy of AAPS. Your android phone uses it to ensure that nobody else can upgrade your own copy without the keystore.In short, as part of the AAPS build, you should:

1.  save the your keystore file (.jks file used to sign your app) in a safe place;

2.  keep a note of your password for your keystore file.


By doing the above, this will ensure that you can use that exact same keystore file each time an updated version of AAPS is created. On average, there will be 2-3 updates to the AAPS required each year. In addition, AAPS provides the ability to [export all your configuration settings](https://androidaps.readthedocs.io/en/latest/Usage/ExportImportSettings.html). This ensures that you can safely recover your system while changing phones, upgrading/reinstalling the application with minimum disruption. 

#### 문제 해결

Please feel free to reach out to the AAPS community if there is anything you feel unsure about - there is no such thing as a silly question!  All users with various levels of experience are encouraged to ask questions as necessary. Response times to questions are usually quick, typically only a few hours due to the volume of AAPS users. 

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

This explains how to properly integrate each of the various different separate component parts into AAPS, as well as how to set them up to work as seamlessly as possible together. All components are listed under the separate sections: CGM/FGM, xDrip Settings, Pumps, Phones, Nightscout setup, and Smartwatches. The sensor (BG) values and control of the insulin pump are particularly important information to understand.

##### Configuration

This explains how to set and configure your ‘Profile’, ‘Insulin’, ‘BG Source’, ‘Pump’, ‘Sensitivity Detection’, ‘APS’, ‘Loop’, ‘Treatments’.

##### AAPS Usage

This section provides a breakdown of the features provided by AAPS.

##### [General Hints](https://androidaps.readthedocs.io/en/latest/Usage/Timezone-traveling.html)

Useful tricks on how to tackle looping issues such as time zones, and daylight saving (i.e. Spring Forward/ - Fall Back).

##### [AAPS](https://androidaps.readthedocs.io/en/latest/Getting-Started/Screenshots.html) for Children

This is designed for parents or caregivers who want to build an AAPS for their child.  It also explains the extra features necessary in order to support and safely  control your child’s AAPS remotely. <br><br>The concepts in this section should be fully understood in order to competently use this feature.

##### 문제 해결

This section contains links to help solve issues when building or using AAPS.

##### FAQ

This section addresses specific questions which tend to come up when building or using AAPS.

##### [용어](https://androidaps.readthedocs.io/en/latest/Getting-Started/Glossary.html)

This contains a list of the acronyms (or short-term names) or defined terms developed specifically for AAP (for instance, the terms ‘ISF’ or ‘TT’ have special meanings in AAPS).

##### [Where to go for help](https://androidaps.readthedocs.io/en/latest/Where-To-Go-For-Help/Background-reading.html)?

This section is aimed to provide new users with links on resources in order to get help including accessing community support made up of both new and experienced users who can clarify questions, and resolve the usual pitfalls that come with AAPS.

##### For Clinicians

This is a section for the clinicians who have expressed interest in open source artificial pancreas technology such as AAPS, or for patients who want to share such information with their clinicians.                                                                                                                                                                                                                              |

## what are we going to build?

### An Android Phone Application

At the core, AAPS is an android application running from a phone. You are going to build it from scratch by installing tools to download the sourcecode and build the actual application.

### A reporting server NightScout (or Tidepool)

In order to fully use AAPS properly you will want to setup a nightscout server. It is used to collect data from AAPS over time and possibly communicate to the application. It is required for parents who want to oversee their children AAPS sessions. It is also key to share data between clinicians and patients to perform analysis over time.

## How long will it take?

## Who might AAPS not be suitable for?

## Where can I get help?

## Requirements

### medical

### technical

### personal

### CGMs

### Insulin Pump

### Reporting (NS, Tidepool)