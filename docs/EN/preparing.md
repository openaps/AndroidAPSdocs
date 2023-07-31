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

## What are we going to build and install?
	
### An Android Phone Application: **AAPS**

**AAPS** is fundamentally an app that runs on android smartphones & devices. You are going to build the **AAPS** app (an apk file) yourself, using a step-by-step guide, by downloading the **AAPS** source code from Github, installing the necessary programs (Android Studio, GitHub desktop) on your computer and building your own copy of **AAPS** app. You will then transfer the **AAPS** app across to your smartphone (by email, USB cable etc.) and install it.  

### A reporting server: NightScout (Tidepool*)

In order to fully take advantage of **AAPS**, you need to setup a Nightscout server. You can do this yourself (link to instructions) or alternatively, pay a small fee for a managed Nightscout service to be set up for you (link to T1 pal 10.be etc). Nightscout is used to collect data from **AAPS** over time and can generate detailed reports correlating CGM and insulin patterns. It is also possible for caregivers to use Nightscout to remotely communicate with the **AAPS** application, to oversee their child’s diabetic management. Such remote communication features include real-time monitoring of glucose and insulin levels, remote bolusing of insulin (by texting) and meal announcements. 
Attempting to analyse your diabetes performance by looking at CGM data separately from the pump data is like driving a car where the driver is blind and the passenger describes the scene. 
(*) (as of 26-Jun-2023) Tidepool will be available as an alternative to Nightscout, with the upcoming version 3.2 of **AAPS**.



### Maintenance of the **AAPS** system

Both **Nightscout** and **AAPS** must be updated approximately once a year, as improved versions are released. You will have step-by-step instructions on how to do this on your preconfigured computer. In some cases, the update can be delayed, in others it is strongly recommended or considered essential for safety. Notification of these updates will be given on the Facebook groups and Discord servers. The release notes will make it clear what the scenario is. There are likely to be many people asking similar questions to you at update time, and you will have support for performing the updates. setup the necessary  tools to allow the user to maintain and update the **AAPS** application, 


## How long will it take?	

As mentioned earlier, adopting **AAPS** is more of a “journey” that requires investment of your personal time. It is not a one-time setup. Current estimates for building **AAPS**, installing and configuring **AAPS** and **CGM** software and getting from open loop to hybrid closed looping with **AAPS** are about 2 to 3 months overall. Here is breakdown:

| Tasks                                                                                |  Time Guestimate |
|--------------------------------------------------------------------------------------|:----------------:|
| initial reading of the documentation:                                                | 1-2 days         |
| installing/configuring PC to allow the build:                                        | 2-8 hours        |
| building a Nightscout server:                                                        | 1 hour           |
| installing (xdrip or BYODA or …)                                                     | 1 hour           |
| configuring CGM->xdrip->APPS initially:                                              | 1 hour           |
| configuring AAPS->pump initially:                                                    | 1 hour           |
| configuring AAPS->NightScout (reporting only):                                       | 1 hour           |
| optional (for Parents) - configuring NightScout <-> **AAPS** & NSFollowers:          | 1 hour           |
| Objective 1: Setting up visualization and monitoring, analysing basals and ratios    | 1 hour           |
| Objective 2: Learn how to control AAPS                                               | 2 hour           |
| Objective 3: Prove your knowledge                                                    | Up to 14 days    |
| Objective 4: Starting on an open loop                                                | 7 days           |
| Objective 5: Understanding your open loop, including its temp basal recommendations  | 7 days           |
| Objective 6: Starting to close the loop with Low Glucose Suspend                     | Up to 5-14 days  |
| Objective 7: Tuning the closed loop, raising maxIOB and gradually lowering BG targets| Up to 7 days     |
| Objective 8: Adjust basals and ratios if needed, and then enable autosens            | Up to 7-14 days  |
| Objective 9: Enabling additional oref1 features, such as super micro bolus (SMB)     | Up to 14 days    |
| Objective 10: Automation                                                             | 1 day            |


Once you are fully operational on **AAPS**, you will need to fine tune your setting parameters in order to improve your overall diabetic management.

## Requirements	

### Medical

#### NO SGLT-2 inhibitors

:::{admonition} NO SGLT-2 inhibitors
:class: danger
SGLT-2 inhibitors, also called gliflozins, inhibit reabsorption of glucose in the kidney. Gliflozins incalculably lower blood sugar levels, and so you MUST NOT take them while using a closed loop system like AAPS! There would be a significant risk of ketoacidosis and/or hypoglycemia! The combination of this medication with a system that lowers basal rates in order to increase BG is especially dangerous. 

In a nutshell:
- **Example 1: risk of Hypo**
>During lunch, you use **AAPS** to bolus based on consuming 45g of glucose. The problem is that unbeknownst to AAPS, the inhibitors cause the body to eliminate some of the carbs resulting in your body having too much insulin compared to the absorbed Carbs, resulting in hypoglycemia.

- **Example 2: risk of Ketoacidosis**
>The inhibitors eliminate some of the carbs in the background causing a reduction in your BG. **AAPS** will automatically instruct the pump to decrease insulin intake  including basal. Over time this can result  in your  BG remaining below target value to the point where the body does not have enough background insulin to absorb any carbs resulting in Ketoacidosis. Ordinarily, Ketoacidosis  develops in T1D patients because their pump fails which would trigger alerts on their phone and be noticeable due to a high BG value. However, the danger with Gliflozins  is that there would be no AAPS alerts as  the pump remains operational and the BG potentially remains within target.  

Common Branding names include: Invokana, Farxiga, Jardiance, Glyxambi, Synjardy, Steglatro, and Xigduo XR, others.
:::

 

#### 100U/ml insulins:

**AAPS** calculations are based on insulin concentrations of 100U/ml (same as pump’s standard). The following types of insulin profile presets are supported:

- Rapid-Acting Oref: Humalog/NovoRapid/NovoLog
- Ultra-Rapid ORef:  Fiasp
- Lyumjev: 

For Experimental/Advanced users only:
- Free-Peak Oref: Allows you to define peak of the insulin activity


### Technical

This documentation aims to reduce the technical expertise required to an absolute minimum. You will need to use your computer to build the **AAPS** application in Android Studio (step-by-step instructions). You also need to set up a server over the internet in a public cloud and modify several android phone configurations and develop expertise in diabetes management. This can be  achieved by moving step-by-step, being patient, and help from the **AAPS** community. If you are already able to navigate the internet, manage your own gmail emails, and keep your computer up-to-date, then it is a feasible task to build the **AAPS**. Just take your time.

### Personal
Understanging and using **AAPS** requires a steep learning curve. It will take time, patience and significant efforts however it can be hugely beneficial as arguably proven by the 10,000 active users of **AAPS**.

### Phones

#### AAPS and Android Versions
The current version of **AAPS** (3.xxx) requires an Android smartphone with Google Android 9.0 or above. If you are considering buying a new phone, (as of July 2023), Android 13 is preferred.
Users are strongly encouraged to keep their build of **AAPS** up to date for safety reasons, however for users unable to use a device with Android 9.0 or newer, earlier versions of  **AAPS** compatible for older Android versions remain available from our old repository (check the release notes for legacy versions[old repository.](https://github.com/miloskozak/AAPS)).

Users are maintaining a [list of tested phones and watches](https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit?usp=sharing)

To record a phone or watch that isn't already listed in the spreadsheet then please fill in the [form](https://docs.google.com/forms/d/e/1FAIpQLScvmuqLTZ7MizuFBoTyVCZXuDb__jnQawEvMYtnnT9RGY6QUw/viewform). To report any problem with the spreadsheet please send an email to [hardware@androidaps.org](mailto:hardware@androidaps.org), any donations of phone/watch models that still need testing please send an email to [donations@androidaps.org](mailto:donations@androidaps.org).

- [List of tested phones](../Getting-Started/Phones.md)
- [Jelly Pro Settings](../Usage/jelly.md)
- [Huawei Settings](../Usage/huawei.md)

Users are strongly encouraged to keep their phone version of Android up-to-date, especially security updates. However, if you are new to **AAPS** and are not a technical expert, you might want to delay updating your phone in case someone reports issues in our discord channel or facebook group. 

#### Google Play Protect potential Issue

:::{admonition} Google Play Protect potential Issue
:class: warning
There have been several reports of **AAPS** being shut down arbitrarily by Google Play Protect every morning. If this happens you will have to go to the google play options and disable “Google Play Protect”. Not all  phone models or all Android versions are affected..
:::

#### Should you use a second phone dedicated to AAPS?

You don’t need to use a second phone dedicated to **AAPS** only. In fact most people will run **AAPS** directly on their main and only personal phone. **AAPS** is designed and built with extensive stability and recovery features. However there are some situations where a second phone might be better suited; for example:

IOS users might want to keep their main phone as iPhone and use a dedicated android phone for **AAPS**. (note you can run loop on iPhone while waiting for iAPS to go live)
Android users prone to install a large number of applications from various origins might want to segregate **AAPS** on a dedicated phone to ensure optimal stability. This is most common for teenagers and/or android developers.  
Some applications require limited customizations of android phones which might be incompatible with some of the parameters required by **AAPS**, or the CGMs/Pumps software. This is typically the case for business phones which are locked/audited by companies.

