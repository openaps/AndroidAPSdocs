# Preparing

## Guide to the Android APS doc	

### First Steps
Welcome. This is an introduction to aid beginners to the concept of Do-It-Yourself-APS (Android-Artificial-Pancreas-Systems “AAPS”) is commonly referred to as ‘looping’..

#### Safety
“With great power come great responsibility…”

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

#### App build time

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

Users are encouraged to keep their phone version of Android up-to-date including with security parameters. However, if you are new with AAPS or are not a technical expert you might want to delay updating your phone until others confirm it is safe on our various forums. 

:::{admonition} delaying Samsung phones updates
:class: warning
Samsung has an unfortunate track record of forcing updates of their phones which cause bluetooth connectivity issues. To disable these forced updates you need to switch the phone to "developper mode" by:
 go to settings and about then software information, then tap build number u til it confirms you have unlocked developer mode. Got back to main settings menu and you should see a new developer options menu item. Open developer options and scroll to find auto system update and turn it off
:::

:::{admonition} Google Play Protect potential Issue
:class: warning
There have been several reports of **AAPS** being shut down arbitrarily by Google Play Protect every morning. If this happens you will have to go to the google play options and disable “Google Play Protect”. Not all  phone models or all Android versions are affected..
:::

## Introduction to your AAPS profile ##

### **What is an AAPS profile?**

Your AAPS profile is a set of five key parameters which define how AAPS should deliver insulin in response to your sensor glucose levels. AAPS has several _additional_ modifiable parameters (like SMB settings), but using these well relies on your underlying AAPS profile being correct. The AAPS profile incorporates: duration of insulin action (DIA), glucose targets, basal rates (BR), insulin sensitivity factors (ISF) and insulin-to-carb ratios (IC or ICR). Screenshots from AAPS of an _example_ profile are shown in below. Please note, this profile shows a large number of timepoints. When you start out with AAPS, your profile is likely to be much simpler. Profiles vary significantly from person-to-person, for examples of AAPS profiles for small children, teenagers and adults please see the later section, optimising your [profile](link).    

#### **Duration of insulin action (DIA)**
The duration of insulin action is set to a single value in AAPS, because your pump will continually infuse the same type of insulin. The remaining four parameters can be set to different values, changing hourly if required, over a 24 hour period. 

#### **Glucose targets**
Glucose targets are set according to your personal preferences. For example, if you are concerned about hypos at night, you may set your target slightly higher at 117/mg/dL (6.5 mmol/L) from 9 pm - 7am. If you want to make sure you have plenty of insulin on board (IOB) in the morning before bolusing for breakfast, you may set a lower target of 81 mg/dL (4.5 mmol/L) from 7 am - 8 am. A glucose target, particularly if it is only short-term (less than 4 hours in duration), does not need to be the *actual value* you expect or want your glucose level to get to, rather, it is a good way to tell AAPS to be more or less aggressive, while still keeping your glucose levels in range. The **figure below** shows an example of how the DIA and glucose targets could be set in an AAPS profile.   

![24-07-23, profile basics - DIA and target](https://github.com/openaps/AndroidAPSdocs/assets/94044064/f3904cc3-3d9e-497e-a3b6-3a49650053e6)


For the final three parameters, basal rates (BR), insulin sensitivity factors (ISF) and insulin-to-carb ratios (IC or ICR), the absolute values and trends in your insulin requirements vary significantly from person to person, depending on your biology, gender, age, fitness level etc. as well as shorter term factors like illness and recent exercise. For more guidance on this, the book [“Brights Spots and Landmines”](https://brightspotsandlandmines.org/Bright_Spots_and_Landmines_by_Adam_Brown.pdf) by Adam Brown is an excellent book to read. 

#### **Basal rates** 

Your basal rate of insulin (Units/hour) provides background insulin, keeping your glucose levels stable in the absence of food or exercise. 

Accurate basal rates enable you to wake up in range, and to skip meals - or eat - earlier or later in the day, without going high or low. The insulin pump delivers small amounts of rapid acting insulin every few minutes, to keep the liver from releasing too much glucose, and to move glucose into body cells. Basal insulin usually makes up between 40 - 50% of your total daily dose (TDD), depending on your diet, and typically follows a circadian rhythm, with one peak and one valley in insulin requirements over 24 hours. For more information, chapter 23 of [“Think like a Pancreas”](https://amzn.eu/d/iVU0RGe) by Gary Scheiner is very useful. 

Most type 1 diabetes educators (and people with type 1 diabetes!) agree that you should work on getting your basal rates correct, before attempting to optimise your ISF and ICR. 
 
#### **Insulin sensitivity factor (ISF)**

The insulin sensitivity factor (sometimes called correction factor) is a measure of how much your blood glucose level will be reduced by 1 unit of insulin. 

**In mg/dL units:** 
If you have an ISF of 40, each unit of insulin will reduce your blood glucose by approx. 40 mg/dL (for example, your blood glucose will fall from 140 mg/dL to 100 mg/dL). 

**In mmol/L units:** 
If you have an ISF of 1.5, each unit of insulin will reduce your blood glucose by approx. 1.5 mmol/L (for example from 8 mmol/L to 6.5 mmol/L). 

From these examples you can see that the _smaller_ the ISF value, the less sensitive you are to insulin. So if you reduce your ISF from 40 to 35 (mg/dl) or 1.5 to 1.3 (mmol/L) this is often called strengthening your ISF. Conversely, increasing the ISF value from 40 to 45 (mg/dl) or 1.5 to 1.8 mmol/L) is weakening your ISF. 

If your ISF is too strong (small value) it will result in hypos, and if it is too weak (large value), it will result in hyperglycemia.  

A basic starting point for determining your daytime ISF is to base it on your total daily dose (TDD) using the 1,700 (94) rule. More detail is given in Chapter 7 of [“Think like a Pancreas”](https://amzn.eu/d/iVU0RGe) by Gary Scheiner.

1700 (if measuring in mg/dl) or 94 (mmol/L)/ TDD = approx ISF. 

Example: TDD = 40 U
Approx ISF (mg/dl) = 1700/40 = 43
Approx ISF (mmol/L) = 94/40 = 2.4

See the **figure below** for an example of how the basal rates and ISF values could be set in an AAPS profile.   

![24-07-23, profile basics - basal and ISF](https://github.com/openaps/AndroidAPSdocs/assets/94044064/55c8ed24-e24e-4caa-9c17-294fa93cb84a)

#### **Insulin to Carb ratio (ICR)**
  
The ICR is a measure of how many grams of carbohydrate are covered by one unit of insulin.

Some people also use I:C as an abbreviation instead of ICR, or talk about carb ratio (CR). 

It is common to have different ICR at different times of day due to hormone levels and physical activity. Many people find they have their lowest ICR around breakfast time. So, for example, your ICR could be 1:8 for breakfast, 1:10 for lunch and 1:10 for dinner, but these patterns are not universal, and some people are more insulin resistant at dinner time, and require a stronger/smaller ICR then. 

For example, a 1-to-10 (1:10) insulin-to-carb ratio means that you take 1U of insulin for every 10 grams of carbs eaten. A meal of 25g carbs would need 2.5U of insulin. 

If your ICR is weaker, perhaps 1:20, you would only need 0.5U of insulin to cover 10 g of carbs. A meal of 25g of carbs would need 25/20 = 1.25U of insulin.  

As shown in the **figure below**, when entering these values into an AAPS profile, we just enter the final part of the ratio, so an insulin-to-carb ratio of 1:3.5 is entered simply as “3.5”.

![24-07-23, profile basics - ICR](https://github.com/openaps/AndroidAPSdocs/assets/94044064/7741eefb-cae5-45c5-a9e5-8eae5ead3f48)


#### **Why should I try to get my profile settings right? Can’t the loop just take care of it?**   

A hybrid closed loop _can_ attempt to make insulin delivery adjustments to minimise poor glycemic control that results from having incorrect profile values. It can do this, for example, by withholding insulin delivery if you are hypo. However, you can achieve much better glycemic control if your profile settings are already as close as possible to what your body needs. This is one of the reasons that AAPS uses staged objectives to move from open loop pumping towards hybrid closed loop. In addition, there will be times when you need to open the loop (sensor warmups, sensor failure _etc._), sometimes in the middle of the night, and you will want to have your settings right for these situations. 

If you are starting with AAPS after using a different open or closed-loop pumping system, you will already have a reasonable idea of what values to use for basal rates (BR), insulin sensitivity factors (ISF) and insulin-to-carb ratios (IC or ICR). 

If you are moving from injections (MDI) to AAPS, then it is a good idea to read up on how to make the transfer from MDI to pump first, and plan and make the move carefully in consultation with your diabetes team. ["Pumping insulin"](https://amzn.eu/d/iaCsFa2) by John Walsh & Ruth Roberts and [“Think like a Pancreas”](https://amzn.eu/d/iVU0RGe) by Gary Scheiner are very useful.  

In the [later section](operating - optimising - your profile link) we present example profiles, dscuss how to set and optimise the parameters which form your AAPS profile(s), and provide guidance on additional resources such as **Autotune** which aim to automate optimisation of your profile.
