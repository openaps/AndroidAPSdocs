# Objectives

AAPS has a series of Objectives that need to be completed to walk you through the features and settings of safe looping.  They ensure you have configured everything detailed in the sections above correctly, and that you understand what your system is doing and why so you can trust it.

If you are **upgrading phones** then you can [export your settings](../Usage/ExportImportSettings.md) to keep your progress through the objectives. Not only will your progress through the objectives be saved, but also your safety settings such as max bolus etc.  If you do not export and import your settings then you will need to start the objectives from the beginning again.  It is a good idea to [backup your settings](../Usage/ExportImportSettings.html) frequently just in case.

If you want to go back in objectives see [explanation below](Objectives-go-back-in-objectives).

## Objective 1: Setting up visualization and monitoring, analysing basals and ratios

- Select the right blood glucose source for your setup.  See [BG Source](../Configuration/BG-Source.md) for more information.
- Select the right Pump in ConfigBuilder (select Virtual Pump if you are using a pump model with no AAPS driver for looping) to ensure your pump status can communicate with AAPS.
- If using DanaR pump then ensure you have followed [DanaR Insulin Pump](../Configuration/DanaR-Insulin-Pump.md) instructions to ensure the link between pump and AAPS.
- Follow instructions in [Nightscout](../Installing-AndroidAPS/Nightscout.md) page to ensure Nightscout can receive and display this data.
- Note that URL in NSClient must be **WITHOUT /api/v1/** at the end - see [NSClient settings in Preferences](Preferences-nsclient).

*You may need to wait for the next blood glucose reading to arrive before AAPS will recognise it.*

## Objective 2: Learn how to control AAPS

As part of this objective you learn how to navigate through AAPS screens and how to perform basic actions in AAPS which you will come across on a daily basis later. You will learn how to put a screen or a plugin either to the top scrollable menu bar or let it show via the hamburger menue on the top left list of enabled plugins. If your are not familiar with the AAPS homescreens and its navigation please refer to [AAPS Screens](../Getting-Started/Screenshots.md). Estimated time to complete this objective: 2 hours.

Basic navigation tips:
- Perform several actions in AAPS as described in this objective.
- Click on the orange text "Not completed yet" to access the to-dos.
- Links will be provided to guide you in case you are not familiar with a specific action yet.

  ```{image} ../images/Objective2_V2_5.png
  :alt: Screenshot objective 2
  ```
- Tasks to complete the objective are:
  - Set your profile to 90% for a duration of 10 min (Hint: Long press your profile name on the OVERVIEW screen)
  - Simulate "taking a shower" by disconnecting your pump in AAPS for a duration of 1h (Hint: press the loop icon on the OVERVIEW screen to open the Loop dialog)
  - End "taking a shower" by reconnecting your pump (Hint: press the "disconnected"-icon to open the loop dialog)
  - Create a custom temporary target with a duration of 10 min (Hint: press the target bar on the OVERVIEW screen to bring up the temporary target dialog)
  - Activate the ACTIONS plugin in CONFIG BUILDER to make it appear on the top scrolloable menu bar (Hint: Go to CONFIG BUILDER and scroll down to 'General")
  - Display the LOOP plugin's content
  - Scale the BG-Chart to be able to look at larger or smaller timeframes: toggling between 6h, 12h, 18h 24h of past data (Hint: Tap the chart)


(Objectives-objective-3-prove-your-knowledge)=
## Objective 3: Prove your knowledge

- Pass a multiple-choice exam testing your AAPS knowledge.

- Click on the orange text "Not completed yet" to access the page with the question and answering options.

  ```{image} ../images/Objective3_V2_5.png
  :alt: Screenshot objective 3
  ```

- Links will be provided to guide you in case you are unsure about the correct answers yet.

- The questions for objective 3 have been completely rewritten by native speakers as of AAPS 2.8. The new ones cover the same basic topics plus a few new ones.

- These new questions will lead to some not answered questions even though you have successfully completed objective 3 in previous versions.

- Unanswered questions will affect you only if you start a new objective. In other words: If you have already completed all objectives you can wait and answer the new questions later without loosing AAPS functions.

## Objective 4: Starting on an open loop

Purpose of this objective is to recognise how often AAPS will evaluate basal rate's impact on blood glucose and recommended temporary basal rate adjustments. As part of this objective you will activate open looping the first time and will perform 20 proposed temporary basal rate changes manually on your pump. Furthermore you will observe temporary and default temporary targets' impact (e.g. for activity or hypo treatments). If your are not familiar with setting a temporay basal rate change in AAPS yet, please refer to the [ACTIONS tab](Screenshots#Screenshots-action-tab). Estimated time to complete this objective: 7 days. This is a mandatory wait time and you can't proceed even if you enacted all basal rate changes already.

- Select Open Loop either from the "Preferences" menu or by presssing and holding the Loop icon on the top left of the OVERVIEW screen.
- Walk through the [Preferences](../Configuration/Preferences.md) to set it up for you (scroll down to "Loop/APS Mode" and select "Open Loop".
- Manually enact at least 20 of the temporary basal rate suggestions over a period of 7 days; key them into your (physical) pump and confirm in AAPS that you have accepted them. Ensure these basal rate adjustments show up in AAPS and Nightscout.
- Enable [temp targets](../Usage/temptarget.md) if necessary. After treating a hypo use hypo temp targets to prevent the system from overcorrecting upon the bounce back.

### Reduce number of notifications

- To reduce the number of proposed basal rate changes while in Open Loop set a wider target range like 90-150 mg/dl or 5.0-8.5 mmol/l.
- You might even consider to raise your upper limit (or disable Open Loop) at night.
- You can set a minimum percentage for recommended basal rate changes to change the number of triggered notifications.

  ```{image} ../images/OpenLoop_MinimalRequestChange2.png
  :alt: Open Loop minimal request change
  ```

- Good to know: You don't need to action each and every system recommendation ...

## Objective 5: Understanding your open loop, including its temp basal recommendations

As part of this objective you will start to understand how temporary basal recommendations are derived. This includes the [determination of basal logic](https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/Understand-determine-basal.html), analyzing the impact by observing [prediction lines in AAPS OVERVIEW](Screenshots-prediction-lines)/Nightscout and looking at detailed calculations shown on your OPENAPS tab. Estimated time to complete this objective: 7 days.

This objective requires to determine and set your “Max U/h a temp basal can be set to” (max-basal) value as described in [OpenAPS-features](Open-APS-features#Open-APS-features-max-u-h-a-temp-basal-can-be-set-to-openaps-max-basal). This value can be set in Preferences > OpenAPS.
Make sure this safety setting is set in AAPS and your pump. 

You might want to set your target higher than usual until you are comfortable with the calculations and settings. AAPS allows

- a low target to be a minimum of 4 mmol/l (72 mg/dl) or maximum of 10 mmol/l (180 mg/dl)
- a high target to be a minimum of 5 mmol/l (90 mg/dl) and maximum of 15 mmol/l (225 mg/dl)
- a temporary target as a single value can be anywhere in the range of 4 mmol/l to 15 mmol/l (72 mg/dl to 225 mg/dl)

Your target is a core value. All calculations are based on it and it is different from a target range you usually aim to keep your blood glucose values in. If your target is very wide (say, 3 or more mmol/l [50 mg/dl or more] wide), you will often find little AAPS action. This is because blood glucose is predicted to be somewhere in that wide range and thus temporary basal rate changes are suggested rarely.

You may want to experiment with adjusting your targets being in a tighter range (say, 1 or less mmol/l [20 mg/dl or less] wide) and observe a resulting system behavior.

You can adjust (widen or tighten) the graph’s green area, representing your target range, by entering different values in [Preferences](../Configuration/Preferences.md) > Range for Visualisation.

```{image} ../images/sign_stop.png
:alt: Stop sign
```

### Stop here if you are open looping with a virtual pump - do not click Verify at the end of this objective.

```{image} ../images/blank.png
:alt: blank
```

(Objectives-objective-6-starting-to-close-the-loop-with-low-glucose-suspend)=
## Objective 6: Starting to close the loop with Low Glucose Suspend

```{image} ../images/sign_warning.png
:alt: Warning sign
```

### Closed loop will not correct high BG values in objective 6 as it is limited to low glucose suspend. You have to correct high BG values by yourself (manually)!

As part of this objective you will close the loop and activate its Low Glucose Suspend (LGS) mode while [max IOB](Open-APS-features-maximum-total-iob-openaps-cant-go-over-openaps-max-iob) is set to zero. You have to remain in LGS mode for 5 days to complete this objective. You should use this time to check if your profile settings are bullet-proof and don't trigger LGS events too often. Estimated time to complete this objective: 5 days.

- Prerequisite: It's crucial that your current profile (basal, ISF, IC) is well tested before you close your loop in Low Glucose Suspend mode. Incorrect profile settings might force you into hypo situations which have be  treated manually. A proven profile will help to avoid low glucose treatments during the requested 5 days period. **If you still observe frequent or severe low glucose episodes consider refining your DIA, basal, ISF and carb ratios and do NOT start objective 6 at this time.**
- You don't have to change your settings by yourself at this point in time. During objective 6, AAPS will take care of setting maxIOB to zero. **This override will be reversed when moving to objective 7.**
- AAPS will override your maxIOB settings to zero, which means if blood glucose is dropping it can reduce basal for you. If blood glucose is rising it will only increase basal if basal IOB is negative resulting from a previous Low Glucose Suspend. In all other cases basal rates will remain unchanged from your current profile. **As a consequence you have to handle high values with insulin corrections manually.**
- If your basal IOB is negative (see screenshot below) a TBR > 100% can be triggered in objective 6 already.

```{image} ../images/Objective6_negIOB.png
:alt: Example negative IOB
```

- Set your target range slightly higher than you usually would aim at, just to be safe and to add some security buffer.
- Enable 'Low Glucose Suspend' mode by pressing and holding the Loop icon at the top right corner of the OVERVIEW screen and selecting the Loop - LGS mode icon.
- Watch active temporary basals by looking at the turquoise basal text on the OVERVIEW screen or the turquoise basal render as part of the OVERVIEW graph.
- You may temporarily experience spikes following treated hypos without being able to increase basals on the rebound.

(Objectives-objective-7-tuning-the-closed-loop-raising-max-iob-above-0-and-gradually-lowering-bg-targets)=
## Objective 7: Tuning the closed loop, raising maxIOB above 0 and gradually lowering BG targets

To complete this objective you have to close your loop and raise your [maxIOB](Open-APS-features-maximum-total-iob-openaps-cant-go-over-openaps-max-iob). maxIOB was zeroed out in objective 6 automatically. This is now reverted. AAPS will start to use this maxIOB value to correct high glucose values. Estimated time to complete this objective: 1 day. 

- Select 'Closed Loop' either from [Preferences](../Configuration/Preferences.md) or by pressing and holding the Loop icon at the top right corner of the OVERVIEW screen, over a period of 1 day.

- Raise your 'Maximum total IOB OpenAPS can’t go over' (in OpenAPS called 'max-iob') above 0. The default recommendation is "average mealbolus + 3x max daily basal" (for the SMB algorithm) or "3x max daily basal" (for the older AMA algorithm) but you should slowly work up to this until you know your settings work for you (max daily basal = the maximum hourly value in any time segment of the day).

This recommendation should be seen as a starting point. If you set it to the 3x and you are seeing moves that push you too hard and fast then lower that number. If you are very resistant, raise it very little at a time.

  ```{image} ../images/MaxDailyBasal2.png
  :alt: max daily basal
  ```

- Once confident on how much IOB suits your looping patterns, reduce your targets to your desired level.

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
