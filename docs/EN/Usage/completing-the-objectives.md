# Objectives

**AAPS** has a series of **objectives** that you need to complete to progress from basic open looping to hybrid closed looping and full **AAPS** functionality. Completing the **objectives** ensures:

* You have configured everything correctly in your **AAPS** setup
* You have learned about the essential features of **AAPS** 
* You have a basic understanding of what your system is doing, and therefore why you can trust it.


:::{admonition} Note
:class: note

Regularly export your **AAPS** settings after completing each **objective**!
:::

We strongly recommend that you  [export your settings](../Usage/ExportImportSettings.md) after completing each **objective**. This exporting process creates a **settings** (.json) file which you should keep backed-up in one or more safe places (_e.g._ Google Drive, hard disk, email attachment _etc._). This ensures that you keep your progress through the **objectives**, and if you accidentally delete your progress, you can simply re-load it by importing a recent settings file. Having a backup **settings** file is also required if you want to change your **AAPS** smartphone for any reason (upgrading/lost/broken phone _etc._)

The **settings** file will save not only your progress through the objectives, but also your own customised **AAPS** settings such as **max bolus** _etc._  

If you do not have a backup copy of your **settings**, if anything happens to your **AAPS** smartphone you will need to start the **objectives** from the beginning again. 

Overall the **objectives** take around 6 weeks to complete (see [how long will it take?](preparing-how-long-will-it-take?) for a detailed breakdown) from configuring **AAPS** on your smartphone to "basic" hybrid closed looping (from objective 1 to objective 8), so, although you _can_ proceed up to **objective 5** using a **virtual pump** (and using some other method of insulin delivery in the meantime), having to re-complete all the **objectives** because for example, you lost your smartphone, is still something you really want to avoid. 

As well as progressing through the **objectives**, if you want, you can also remove your progress and [go back to an earlier objective](Objectives-go-back-in-objectives). 

## Objective 1: Setting up visualization and monitoring, analysing basals and ratios

- Select the correct blood glucose source for your setup.  See [BG Source](../Configuration/BG-Source.md) for more information.
- Select the correct Pump in ConfigBuilder to ensure your pump can communicate with AAPS. Select **virtual pump** if you are using a pump model with no **AAPS** driver for looping, or if you want to work through the early **objectives** while using another system for insulin delivery. 
- If using a DanaR pump then ensure you have followed the [DanaR Insulin Pump](../Configuration/DanaR-Insulin-Pump.md) instructions to ensure the link between pump and **AAPS**.
- Follow instructions in [Nightscout](../Installing-AndroidAPS/Nightscout.md) page to ensure **Nightscout** can receive and display this data.
- Note that URL in **NSClient** must be **_without_ "/api/v1/"** at the end - see [NSClient settings in Preferences](Preferences-nsclient).

Note - *You may need to wait for the next sensor glucose reading to arrive before **AAPS** will recognise it.*

## Objective 2: Learn how to control AAPS

- Perform several actions in **AAPS** as described in this **objective**.

- Click on the orange text "Not completed yet" to access the to-dos.

- Links will be provided to guide you, in case you are not familiar with a specific action yet.

  ```{image} ../images/Objective2_V2_5.png
  :alt: Screenshot objective 2
  ```

(Objectives-objective-3-prove-your-knowledge)=
## Objective 3: Prove your knowledge

- Pass a multiple-choice exam testing your **AAPS** knowledge.

- Click on the orange text "Not completed yet" to access the page with the question and answering options.

  ```{image} ../images/Objective3_V2_5.png
  :alt: Screenshot objective 3
  ```

- Links will be provided to guide you in case you are unsure about the correct answers yet.

- These new questions will lead to some not answered questions even though you have successfully completed objective 3 in previous versions.

- Unanswered questions will affect you only if you start a new objective. In other words: If you have already completed all objectives you can wait and answer the new questions later without loosing AAPS functions.



## Objective 4: Starting on an open loop

- Select "Open Loop" either from Preferences, or by pressing and holding the Loop button in top left of the home screen.
- Work through the [Preferences](../Configuration/Preferences.md) to set up for you.
- Manually enact at least 20 of the temporary basal rate suggestions over a period of 7 days; input them to your pump and confirm in **AAPS** that you have accepted them. Check that this data shows in **AAPS** and Nightscout.
- Enable [temp targets](../Usage/temptarget.md) if necessary. Use hypo temp targets to prevent the system correcting too aggressively because of a raising sensor glucose level after a hypo.

### Reduce number of notifications

- To reduce the number of decisions to be made while in Open Loop set a wide target range _e.g._ 90 - 150 mg/dl or 5.0 - 8.5 mmol/l.

- You might want to set a wider upper limit, or even disable Open Loop, at night.

- In Preferences you can set a minimum percentage for suggestion of basal rate change.

  ```{image} ../images/OpenLoop_MinimalRequestChange2.png
  :alt: Open Loop minimal request change
  ```

- Also, you do not need to act every 5 minutes on all suggestions...

(Objectives-objective-5-Understanding-your-open-loop-including-its-temp-basal-recommendations)=

## Objective 5: Understanding your open loop, including its temp basal recommendations

- Start to understand the logic behind the temp basal recommendations by looking at the [determine basal logic](https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/Understand-determine-basal.html) and both the [forecast line in AAPS homescreen](Screenshots-prediction-lines)/Nightscout and the summary of outputs from the calculations in your OpenAPS tab.

Set your target higher than usual until you are confident in the calculations and settings. **AAPS** allows:

- a **low target** of between 4 - 10 mmol/l (72 - 180 mg/dl) 
- a **high target** of between 5  - 15 mmol/l (90 - 225 mg/dl) 
- a **temporary target** as a single value between 4 - 15 mmol/l (72 -225 mg/dl)

The targets are the values that **AAPS** calculations are based on, and not necessarily the same as where you aim to keep your sensor glucose values within. If your target is very wide (say, 3 or more mmol \[50 mg/dl or more\] wide), you will often see minimal **AAPS** action. This is because blood glucose is eventually predicted to be somewhere in that wide range and therefore not many fluctuating temporary basal rates are suggested.

You may want to experiment with adjusting your targets to be a closer together range (say, 1 or less mmol \[20 mg/dl or less\] wide) and observe how the behavior of your system changes as a result.

You can view a wider range (green lines) on the graph for the values you aim to keep your blood glucose within by entering different values in [Preferences](../Configuration/Preferences.md) > Range for Visualisation.

```{image} ../images/sign_stop.png
:alt: Stop sign
```
:::{admonition} If you have been using a virtual pump, change to a real pump now!
:class: note

If you are open looping with a virtual pump stop here. Only click verify at the end of this objective once you have changed to using a "real" physical pump.
:::


```{image} ../images/blank.png
:alt: blank
```

(Objectives-objective-6-starting-to-close-the-loop-with-low-glucose-suspend)=
## Objective 6: Starting to close the loop with Low Glucose Suspend

```{image} ../images/sign_warning.png
:alt: Warning sign
```

### Closed loop will not correct high BG values in objective 6 as it is limited to low glucose suspend. High BG values have to be corrected manually by you!

- Prerequisite: You need a good profile (basal, ISF, IC) already working in AAPS to start with Loop in Low Glucose Suspend mode. Otherwise you can run in a hypo which you have to manually correct. This will help you a lot to avoid having to treat a low glucose over a period of 5 days. **If you are still having frequent or severe low glucose episodes then consider refining your DIA, basal, ISF and carb ratios and do NOT start objective 6 at this time.**
- You don't have to change your settings now. During objective 6, the maxIOB setting is internally set to zero automatically. **This override will be reversed when moving to objective 7.**
- The system will override your maxIOB settings to zero, which means if blood glucose is dropping it can reduce basal for you. If blood glucose is rising then it will only increase basal if the basal IOB is negative from a previous Low Glucose Suspend. Otherwise basal rates will remain the same as your selected profile. **That means that you have to manually handle high values with insulin corrections.**
- If your basal IOB is negative (see screenshot below) a TBR > 100% can be issued also in objective 6.

```{image} ../images/Objective6_negIOB.png
:alt: Example negative IOB
```

- Set your target range slightly higher than you usually aim for, just to be safe and have a bit more scurity buffer.
- Enable 'Low Glucose Suspend' mode either by by pressing and holding the Loop icon at the top right corner of the home screen and selecting the Loop - LGS mode icon.
- Watch how temporary basals are active by viewing the blue basal text on the homescreen or the blue basal render on the homescreen graph.
- You may temporarily experience spikes following treated hypos without the ability to increase basal on the rebound.

(Objectives-objective-7-tuning-the-closed-loop-raising-max-iob-above-0-and-gradually-lowering-bg-targets)=
## Objective 7: Tuning the closed loop, raising maxIOB above 0 and gradually lowering BG targets

- Select 'Closed Loop' either from [Preferences](../Configuration/Preferences.md) or by pressing and holding the Loop icon at the top right corner of the home screen, over a period of 1 day.

- Raise your 'Maximum total IOB OpenAPS can’t go over' (in OpenAPS called 'max-iob') above 0. The default recommendation is "average mealbolus + 3x max daily basal" (for the SMB algorithm) or "3x max daily basal" (for the older AMA algorithm) but you should slowly work up to this until you know your settings work for you (max daily basal = the maximum hourly value in any time segment of the day).

  This recommendation should be seen as a starting point. If you set to the 3x and you are seeing moves that push you too hard and fast then lower that number. If you are very resistant, raise it very little at a time.

  ```{image} ../images/MaxDailyBasal2.png
  :alt: max daily basal
  ```

- Once confident on how much IOB suits your looping patterns, then reduce your targets to your desired level.

(Objectives-objective-8-adjust-basals-and-ratios-if-needed-and-then-enable-autosens)=
## Objective 8: Adjust basals and ratios if needed, and then enable autosens

- You can use [autotune](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autotune.html) as a one off to check your basals remain accurate or do a traditional basal test.
- Enable [autosens](../Usage/Open-APS-features.md) over a period of 7 days and watch the white line on the homescreen graph show how your sensitivity to insulin may be rising or falling as a result of exercise or hormones etc. and keep an eye in the OpenAPS report tab how AAPS is adjusting the basals and/or targets accordingly.

*Don’t forget to record your looping in* [this form](https://bit.ly/nowlooping) *logging AAPS as your type of DIY loop software, if you have not already done so.*

(Objectives-objective-9-enabling-additional-oref1-features-for-daytime-use-such-as-super-micro-bolus-smb)=
## Objective 9: Enabling additional oref1 features for daytime use, such as super micro bolus (SMB)

- You must read the [SMB chapter in this wiki](Open-APS-features-super-micro-bolus-smb) and [chapter oref1 in openAPSdocs](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/oref1.html) to understand how SMB works, especially what's the idea behind zero-temping.
- Then you ought to [rise maxIOB](Open-APS-features-maximum-total-iob-openaps-cant-go-over-openaps-max-iob) to get SMBs working fine. maxIOB now includes all IOB, not just added basal. That is, if given a bolus of 8 U for a meal and maxIOB is 7 U, no SMBs will be delivered until IOB drops below 7 U. A good start is maxIOB = average mealbolus + 3x max daily basal (max daily basal = the maximum hourly value in any time segment of the day - see [objective 7](Objectives-objective-7-tuning-the-closed-loop-raising-max-iob-above-0-and-gradually-lowering-bg-targets) for an illustration)
- min_5m_carbimpact default in absorption settings has changed from 3 to 8 going from AMA to SMB. If you are upgrading from AMA to SMB, you have to change it manually.

(Objectives-objective-10-automation)=
## Objective 10: Automation

- You have to start objective 10 to be able to use [Automation](../Usage/Automation.md).
- Make sure you have completed all objectives including exam [Objectives-objective-3-prove-your-knowledge](Objectives#objective-3-prove-your-knowledge).
- Completing previous objectives will not effect other objectives you have already finished. You will keep all finished objectives!

(Objectives-go-back-in-objectives)=
## Go back in objectives

If you want to go back in objectives for whatever reason you can do so by clicking at "clear finished".

```{image} ../images/Objective_ClearFinished.png
:alt: Go back in objectives
```

## Objectives in Android APS before version 3.0

One objective was removed when Android APS 3.0 was released.  Users of Android APS version 2.8.2.1 who are on older Android software (i.e. earlier than version 9) will be using an older set of objectives which can be found [here](../Usage/Objectives_old.md).
