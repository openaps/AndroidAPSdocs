---
substitutions:
  DiaLink: |-
    ```{image} ../images/omnipod/DiaLink.png
    ```
  EmaLink: |-
    ```{image} ../images/omnipod/EmaLink.png
    ```
  LoopLink: |-
    ```{image} ../images/omnipod/LoopLink.png
    ```
  OrangeLink: |-
    ```{image} ../images/omnipod/OrangeLink.png
    ```
  RileyLink: |-
    ```{image} ../images/omnipod/RileyLink.png
    ```
---

# Component Overview

AndroidAPS is not just a (self-built) application, it is just one of several modules of your closed loop system. Before deciding for components, it would be a good idea to have a look at the [component setup](../index.md#component-setup), too.

```{image} ../images/modules.png
:alt: Components overview
```

:::{note}
**IMPORTANT SAFETY NOTICE**

The foundation of AndroidAPS safety features discussed in this documentation is built on the safety features of the hardware used to build your system. It is critically important that you only use a tested, fully functioning FDA or CE approved insulin pump and CGM for closing an automated insulin dosing loop. Hardware or software modifications to these components can cause unexpected insulin dosing, causing significant risk to the user. If you find or get offered broken, modified or self-made insulin pumps or CGM receivers, *do not use* these for creating an AndroidAPS system.

Additionally, it is equally important to only use original supplies such as inserters, cannulas and insulin containers approved by the manufacturer for use with your pump or CGM. Using untested or modified supplies can cause CGM inaccuracy and insulin dosing errors. Insulin is highly dangerous when misdosed - please do not play with your life by hacking with your supplies.

Last not least, you must not take SGLT-2 inhibitors (gliflozins) as they incalculably lower blood sugar levels.  The combination with a system that lowers basal rates in order to increase BG is especially dangerous as due to the gliflozin this rise in BG might not happen and a dangerous state of lack of insulin can happen.
:::

## Necessary Modules

### Good individual dosage algorithm for your diabetes therapy

Even though this is not something to create or buy, this is the 'module' which is probably underestimated the most but essential. When you let an algorithm help manage your diabetes, it needs to know the right settings to not make severe mistakes.
Even if you are still missing other modules, you can already verify and adapt your 'profile' in collaboration with your diabetes team.
Most loopers use circadian BR, ISF and CR, which adapt hormonal insulin sensitivity during the day.

The profile includes

- BR (Basal rates)
- ISF (insulin sensitivity factor) is your blood glucose unit per one unit insulin
- CR (carb ratio) is grams carbohydrate per one unit insulin
- DIA (duration of insulin acting).

### No use of SGLT-2 inhibitors

SGLT-2 inhibitors, also called gliflozins, inhibit reabsorption of glucose in the kidney. As they incalculably lower blood sugar levels, you MUST NOT take them while using a closed loop system like AndroidAPS! There would be a huge risk of a ketoacidosis or a hypoglycemia! The combination of this medication with a system that lowers basal rates in order to increase BG is especially dangerous as due to the gliflozin this rise in BG might not happen and a dangerous state of lack of insulin can happen.

### Phone

The current version of AndroidAPS requires an Android smartphone with Google Android 8.0 or above. So if you are thinking about a new phone, Android 8.1 is recommended at a minimum but optimally choose Android 9 or 10.
Users are strongly encouraged to keep their build of AndroidAPS up to date for safety reason, however for users unable to use a device with a minimum version of Android 8.0, AndroidAPS version 2.6.1.4, suitable for older Android versions, remains available from the [old repository.](https://github.com/miloskozak/androidaps)

Users are creating a [list of tested phones and watches](https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit?usp=sharing)

To record a phone or watch that isn't already listed in the spreadsheet then please fill in the [form](https://docs.google.com/forms/d/e/1FAIpQLScvmuqLTZ7MizuFBoTyVCZXuDb__jnQawEvMYtnnT9RGY6QUw/viewform).

Any problems with the spreadsheet please send an email to [hardware@androidaps.org](mailto:hardware@androidaps.org), any donations of phone/watch models that still need testing please send an email to [donations@androidaps.org](mailto:hardware@androidaps.org).

### Insulin pump

AndroidAPS **currently** works with

- [Accu-Chek Combo](../Configuration/Accu-Chek-Combo-Pump.md) (additionally needed: Ruffy app, LineageOS or Android 8.1 on your phone)
- [Accu-Chek Insight](../Configuration/Accu-Chek-Insight-Pump.md)
- [DanaR](../Configuration/DanaR-Insulin-Pump.md)
- [Dana-i/RS](../Configuration/DanaRS-Insulin-Pump.md)
- [some old Medtronic pumps](../Configuration/MedtronicPump.md) from upcoming version 2.4 ([additional communication device](../Module/module.md#additional-communication-device) needed)
- [Omnipod Eros](../Configuration/OmnipodEros.md) ([additional communication device](../Module/module.md#additional-communication-device) needed)
- [Omnipod DASH](../Configuration/OmnipodDASH.md)

If no additional communication device  is mentioned the communication betweeen insulin pump and AndroidAPS is based on the integrated bluetooth stack of Android without the need of an additional communication device to translate the communnication protocol.

**Other pumps** that may have the potential to work with AndroidAPS are listed on the [Future (possible) Pumps](../Getting-Started/Future-possible-Pump-Drivers.md) page.

If you need to **privately buy** a pump then you can find various distributors is in [this spreadsheet](https://drive.google.com/open?id=1CRfmmjA-0h_9nkRViP3J9FyflT9eu-a8HeMrhrKzKz0), please share the details of yours if not already listed.

#### Additional communication device

For old medtronic pumps an additional communication device (besides your phone) is needed to "translate" the radio signal from pump to bluetooth. Make sure to choose the correct version depending on your pump.

- {{ OrangeLink }}  [OrangeLink Website](https://getrileylink.org/product/orangelink)
- {{ RileyLink }} [433MHz RileyLink](https://getrileylink.org/product/rileylink433)
- {{ EmaLink }}  [Emalink Website](https://github.com/sks01/EmaLink) - [Contact Info](mailto:getemalink@gmail.com)
- {{ DiaLink }}  DiaLink - [Contact Info](mailto:Boshetyn@ukr.net)
- {{ LoopLink }}  [LoopLink Website](https://www.getlooplink.org/) - [Contact Info](https://jameswedding.substack.com/) - Untested

**So what's the best pump for looping with AndroidAPS?**

The Combo, the Insight and the older Medtronics are solid pumps, and loopable. The Combo has the advantage of many more infusion set types to choose from as it has a standard luer lock. And the battery is a default one you can buy at any gas station, 24 hour convenience store and if you really need one, you can steal/borrow it from the remote control in the hotel room ;-).

The advantages of the DanaR/RS and Dana-i vs. the Combo as the pump of choice however are:

- The Dana pumps connect to almost any phone with Android >= 5.1 without the need to flash lineage. If your phone breaks you usually can find easily any phone that works with the Dana pumps as quick replacement... not so easy with the Combo. (This might change in the future when Android 8.1 gets more popular)
- Initial pairing is simpler with the Dana-i/RS. But you usually only do this once so it only impacts if you want to test a new feature with different pumps.
- So far the Combo works with screen parsing. In general that works great but it is slow. For looping this does not matter much as everything works in the background. Still there is much more time you need to be connected so more time where the BT connection might break, which isn't so easy if you walk away from your phone whilst bolusing & cooking.
- The Combo vibrates on the end of TBRs, the DanaR vibrates (or beeps) on SMB. At night time you are likely to be using TBRs more than SMB.  The Dana-i/RS is configurable that it does neither beep or vibrate.
- Reading the history on the Dana-i/RS in a few seconds with carbs makes it possible to switch phones easily while offline and continue looping as soon a soon as some CGM values are in.
- All pumps AndroidAPS can talk with are waterproof on delivery. Only the Dana pumps are also "waterproof by warranty" due to the sealed battery compartment and reservoir filling system.

### BG Source

This is just a short overview of all compatible CGMs/FGM with AndroidAPS. For further details, look [here](../Configuration/BG-Source.md). Just a short hint: if you can display your glucose data in xDrip+ app or Nightscout website, you can choose xDrip+ (or Nightscout with web connection) as BG source in AAPS.

- [Dexcom G6](../Hardware/DexcomG6.md): BOYDA is recommended as of version 3.0 (see [release notes](../Installing-AndroidAPS/Releasenotes.md#important-hints) for details). xDrip+ must be at least version 2022.01.14 or newer
- [Dexcom G5](../Hardware/DexcomG5.md): It works with xDrip+ app or patched Dexcom app
- [Dexcom G4](../Hardware/DexcomG4.md): These sensors are quite old, but you can find instructions on how to use them with xDrip+ app
- [Libre 2](../Hardware/Libre2.md): It works with xDrip+ (no transmitter needed), but you have to build your own patched app.
- [Libre 1](../Hardware/Libre1.md): You need a transmitter like Bluecon or MiaoMiao for it (build or buy) and xDrip+ app
- [Eversense](../Hardware/Eversense.md): It works so far only in combination with ESEL app and a patched Eversense-App (works not with Dana RS and LineageOS, but DanaRS and Android or Combo and Lineage OS work fine)
- [Enlite (MM640G/MM630G)](../Hardware/MM640g.md): quite complicated with a lot of extra stuff

### Nightscout

Nightscout is a open source web application that can log and display your CGM data and AndroidAPS data and creates reports. You can find more information on the [website of the Nightscout project](http://nightscout.github.io/). You can create your own [Nightscout website](https://nightscout.github.io/nightscout/new_user/), use the semi-automated Nightscout setup on [zehn.be](https://ns.10be.de/en/index.html) or host it on your own server (this is for IT experts).

Nightscout is independent of the other modules. You will need it to fulfill Objective 1.

Additional information on how to configure Nightscout for use with AndroidAPS can be found [here](../Installing-AndroidAPS/Nightscout.md).

### AAPS-.apk file

The basic component of the system. Before installing the app, you have to build the apk-file (which is the filename extension for an Android App) first. Instructions are  [here](../Installing-AndroidAPS/Building-APK.md).

## Optional Modules

### Smartwatch

You can choose any smartwatch with Android Wear 1.x and above. Most loopers wear a Sony Smartwatch 3 (SWR50) as it is the only watch that can get readings from Dexcom G5/G5 when phone is out of range. Some other watches can be patched to work as a standalone receiver as well (see [this documentation](https://github.com/NightscoutFoundation/xDrip/wiki/Patching-Android-Wear-devices-for-use-with-the-G5) for more details).

Users are creating a [list of tested phones and watches](https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit?usp=sharing). There are different watchfaces for use with AndroidAPS, which you can find [here](../Configuration/Watchfaces.md).

To record a phone or watch that isn't already listed in the spreadsheet then please fill in the [form](https://docs.google.com/forms/d/e/1FAIpQLScvmuqLTZ7MizuFBoTyVCZXuDb__jnQawEvMYtnnT9RGY6QUw/viewform).

Any problems with the spreadsheet please send an email to [hardware@androidaps.org](mailto:hardware@androidaps.org), any donations of phone/watch models that still need testing please send an email to [donations@androidaps.org](mailto:hardware@androidaps.org).

### xDrip+

Even if you don't need to have the xDrip+ App as BG Source, you can still use it for i.e. alarms or a good blood glucose display. You can have as many as alarms as you want, specify the time when the alarm should be active, if it can override silent mode, etc. Some xDrip+ information can be found [here](../Configuration/xdrip.md). Please be aware that the documentations to this app are not always up to date as its progress is quite fast.

## What to do while waiting for modules

It sometimes takes a while to get all modules for closing the loop. But no worries, there are a lot of things you can do while waiting. It is NECESSARY to check and (where appropriate) adapt basal rates (BR), insulin-carbratio (IC), insulin-sensitivity-factors (ISF) etc. And maybe open loop can be a good way to test the system and get familiar with AndroidAPS. Using this mode, AndroidAPS gives treatment advices you can manually execute.

You can keep on reading through the docs here, get in touch with other loopers online or offline, [read](../Where-To-Go-For-Help/Background-reading.md) documentations or what other loopers write (even if you have to be careful, not everything is correct or good for you to reproduce).

**Done?**
If you have your AAPS components all together (congrats!) or at least enough to start in open loop mode, you should first read through the [Objective description](../Usage/Objectives.md) before each new Objective and setup up your [hardware](../index.md#component-setup).

% Image aliases resource for referencing images by name with more positioning flexibility

% Hardware and Software Requirements
