# Tikslai

AAPS has a series of Objectives that need to be completed to walk you through the features and settings of safe looping.  Jie užtikrina, kad aukščiau aprašytus parametrus sukonfigūravote teisingai, ir kad suprantate, ką Jūsų sistema daro ir kodėl galite ja pasitikėti.

If you are **upgrading phones** then you can [export your settings](../Usage/ExportImportSettings.md) to keep your progress through the objectives. Not only will your progress through the objectives be saved, but also your safety settings such as max bolus etc.  If you do not export and import your settings then you will need to start the objectives from the beginning again.  It is a good idea to [backup your settings](../Usage/ExportImportSettings.html) frequently just in case.

If you want to go back in objectives see [explanation below](Objectives-go-back-in-objectives).

## Tikslas 1: vizualizacijos ir monitoringo nustatymai, bazės ir koeficientų analizė

- Select the right blood glucose source for your setup.  See [BG Source](../Configuration/BG-Source.md) for more information.
- Select the right Pump in ConfigBuilder (select Virtual Pump if you are using a pump model with no AAPS driver for looping) to ensure your pump status can communicate with AAPS.
- If using DanaR pump then ensure you have followed [DanaR Insulin Pump](../Configuration/DanaR-Insulin-Pump.md) instructions to ensure the link between pump and AAPS.
- You need to establish a data repository/reporting platform to complete this objective. That can be accomplished with either Nightscout or Tidepool (or both). Follow instructions at the [Nightscout](../Installing-AndroidAPS/Nightscout.md) or [Tidepool](../Installing-AndroidAPS/Tidepool.md) page for instructions.
- Note that URL in NSClient must be **WITHOUT /api/v1/** at the end - see [NSClient settings in Preferences](Preferences-nsclient).

*You may need to wait for the next blood glucose reading to arrive before AAPS will recognise it.*

## Objective 2: Learn how to control AAPS

- Perform several actions in AAPS as described in this objective.

- Click on the orange text "Not completed yet" to access the to-dos.

- Links will be provided to guide you in case you are not familiar with a specific action yet.

  ```{image} ../images/Objective2_V2_5.png
  :alt: 2 tikslo ekrano vaizdas
  ```

(Objectives-objective-3-prove-your-knowledge)=

## Objective 3: Prove your knowledge

Objective 3 is a multiple choice test based on questions designed to test your theoretical knowledge of **AAPS**.

Some users find Objective 3 to be the most difficult objective to complete. Please do read the AAPS documents in conjunction with the questions. If you are genuinely stuck after researching the **AAPS** documents, please search or ask for help on the Facebook or Discord group. These groups can provide friendly hints or redirect you to the relevant part of the **AAPS** documents.

To proceed with Objective 3, click on the orange text “Not completed yet” to access the relevant question. Please read each question and select your answer(s).



Within each question, a hyperlink to the **AAPS** documents will guide you to the relevant section of the document which you should read in order to locate the correct answer.


[Obj3_Screenshot 2023-12-05 223422](https://github.com/openaps/AndroidAPSdocs/assets/137224335/77347516-e24e-459d-98ab-acbb49a3d4e8)![image](https://github.com/openaps/AndroidAPSdocs/assets/137224335/ca756b8e-efbc-4427-b281-ac953ce16718)



For each question, there may be more than one answer that is correct! If an incorrect answer is selected, the question will be time locked for a certain amount of time (60 minutes) before you can go back and answer the question.


After updating to a new version of **AAPS**, new questions may be added to cover a prevalent issue picked up by **AAPS** or alternatively to test your knowledge of a new feature of **AAPS** as released.


When **AAPS** is installed for the first time, you will have to complete Objective 3 entirely in order to move onto Objective 4. Each objective is required to be completed in sequential order. New features will gradually be unlocked as progress is made through the objectives.

__What happens if new questions are added later to Objective 3?__ From time to time, new features are added to **AAPS** which may require a new question to be added to Objective 3. As a result, any new question added to Objective 3 will be marked as “incomplete” because **AAPS** will require you to action this. As each Objective is independent, you will not lose the existing functionality of **AAPS** providing the other objectives remain completed.


## Tikslas 4: pradėkite naudoti Atvirą ciklą

- Select Open Loop either from Preferences, or by pressing and holding the Loop button in top left of the home screen.
- Work through the [Preferences](../Configuration/Preferences.md) to set up for you.
- Manually enact at least 20 of the temporary basal rate suggestions over a period of 7 days; input them to your pump and confirm in AAPS that you have accepted them.  Ensure this data shows in AAPS and Nightscout.
- Enable [temp targets](../Usage/temptarget.md) if necessary. Naudokite Hipo laikiną tikslą apsisaugoti, kad sistema pernelyg aktyviai nekoreguotų kylančios glikemijos po buvusios hipoglikemijos.

### Sumažinti pranešimų skaičių

- To reduce the Number of decisions to be made while in Open Loop set wide target range like 90 - 150 mg/dl or 5,0 - 8,5 mmol/l.

- You might even want to wider upper limit (or disable Open Loop) at night.

- In Preferences you can set a minimum percentage for suggestion of basal rate change.

  ```{image} ../images/OpenLoop_MinimalRequestChange2.png
  :alt: Atvirojo ciklo minimalaus pokyčio užklausa
  ```

- Also, you do not need to act every 5 minutes on all suggestions...

## Tikslas 5: perpraskite atvirojo ciklo veikimą bei laikinos bazės rekomendacijas

- Start to understand the thinking behind the temp basal recommendations by looking at the [determine basal logic](https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/Understand-determine-basal.html) and both the [forecast line in AAPS homescreen](Screenshots-prediction-lines)/Nightscout and the summary of outputs from the calculations in your OpenAPS tab.

Tikslinę glikemiją greičiausiai norėsite nustatyti aukštesnę nei įprastai, kol įsitikinsite skaičiavimais ir nustatymais.  Sistema leidžia

- a low target to be a minimum of 4 mmol (72 mg/dl) or maximum of 10 mmol (180 mg/dl)
- a high target to be a minimum of 5 mmol (90 mg/dl) and maximum of 15 mmol (225 mg/dl)
- a temporary target as a single value can be anywhere in the range of 4 mmol to 15 mmol (72 mg/dl to 225 mg/dl)

Tikslas yra reikšmė, kuria grindžiami skaičiavimai, o ne reikšmė, kuria norite išlaikyti gliukozės kiekį kraujyje.  If your target is very wide (say, 3 or more mmol \[50 mg/dl or more\] wide), you will often find little AAPS action. Numatomas gliukozės lygis greičiausiai bus jūsų tiksliniame diapazone, todėl nebus siūloma daug laikinų bazinio greičio pokyčių.

You may want to experiment with adjusting your targets to be a closer together range (say, 1 or less mmol \[20 mg/dl or less\] wide) and observe how the behavior of your system changes as a result.

You can view a wider range (green lines) on the graph for the values you aim to keep your blood glucose within by entering different values in [Preferences](../Configuration/Preferences.md) > Range for Visualisation.

![Stop ženklas](../images/sign_stop.png)

### Jei naudojate virtualią pomp ir atvirą ciklą - nespauskite Patvirtinti šio tikslo pabaigoje.

![tuščias](../images/blank.png)

(Objectives-objective-6-starting-to-close-the-loop-with-low-glucose-suspend)=
## Tikslas 6: pradėkite Uždaro ciklo (Closed Loop) režimą su pompos stabdymu esant žemai gliukozei

![Įspėjamasis ženklas](../images/sign_warning.png)

### Closed loop will not correct high BG values in objective 6 as it is limited to low glucose suspend. High BG values have to be corrected manually by you!

- Prerequisite: You need a good profile (basal, ISF, IC) already working in AAPS to start with Loop in Low Glucose Suspend mode. Otherwise you can run in a hypo which you have to manually correct. This will help you a lot to avoid having to treat a low glucose over a period of 5 days. **If you are still having frequent or severe low glucose episodes then consider refining your DIA, basal, ISF and carb ratios and do NOT start objective 6 at this time.**
- You don't have to change your settings now. During objective 6, the maxIOB setting is internally set to zero automatically. **This override will be reversed when moving to objective 7.**
- The system will override your maxIOB settings to zero, which means if blood glucose is dropping it can reduce basal for you. If blood glucose is rising then it will only increase basal if the basal IOB is negative from a previous Low Glucose Suspend. Otherwise basal rates will remain the same as your selected profile. **That means that you have to manually handle high values with insulin corrections.**
- If your basal IOB is negative (see screenshot below) a TBR > 100% can be issued also in objective 6.

![Neigiamo AIO pavyzdys](../images/Objective6_negIOB.png)

- Set your target range slightly higher than you usually aim for, just to be safe and have a bit more scurity buffer.
- Enable 'Low Glucose Suspend' mode either by by pressing and holding the Loop icon at the top right corner of the home screen and selecting the Loop - LGS mode icon.
- Watch how temporary basals are active by viewing the blue basal text on the homescreen or the blue basal render on the homescreen graph.
- You may temporarily experience spikes following treated hypos without the ability to increase basal on the rebound.

(Objectives-objective-7-tuning-the-closed-loop-raising-max-iob-above-0-and-gradually-lowering-bg-targets)=
## Objective 7: Tuning the closed loop, raising maxIOB above 0 and gradually lowering BG targets

- Select 'Closed Loop' either from [Preferences](../Configuration/Preferences.md) or by pressing and holding the Loop icon at the top right corner of the home screen, over a period of 1 day.

- Raise your 'Maximum total IOB OpenAPS can’t go over' (in OpenAPS called 'max-iob') above 0. The default recommendation is "average mealbolus + 3x max daily basal" (for the SMB algorithm) or "3x max daily basal" (for the older AMA algorithm) but you should slowly work up to this until you know your settings work for you (max daily basal = the maximum hourly value in any time segment of the day).

  Ši rekomendacija turėtų būti laikoma atskaitos tašku. If you set to the 3x and you are seeing moves that push you too hard and fast then lower that number. If you are very resistant, raise it very little at a time.

  ```{image} ../images/MaxDailyBasal2.png
  :alt: max daily basal
  ```

- Once confident on how much IOB suits your looping patterns, then reduce your targets to your desired level.

(Objectives-objective-8-adjust-basals-and-ratios-if-needed-and-then-enable-autosens)=
## Tikslas 8: jei reikia, koreguokite valandinės bazės reikšmes bei pagrindinius parametrus ir įgalinkite Autosens funkciją

- You can use [autotune](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autotune.html) as a one off to check your basals remain accurate or do a traditional basal test.
- Enable [autosens](../Usage/Open-APS-features.md) over a period of 7 days and watch the white line on the homescreen graph show how your sensitivity to insulin may be rising or falling as a result of exercise or hormones etc. and keep an eye in the OpenAPS report tab how AAPS is adjusting the basals and/or targets accordingly.

*Don’t forget to record your looping in* [this form](https://bit.ly/nowlooping) *logging AAPS as your type of DIY loop software, if you have not already done so.*

(Objectives-objective-9-enabling-additional-oref1-features-for-daytime-use-such-as-super-micro-bolus-smb)=
## Objective 9: Enabling additional oref1 features for daytime use, such as super micro bolus (SMB)

- You must read the [SMB chapter in this wiki](Open-APS-features-super-micro-bolus-smb) and [chapter oref1 in openAPSdocs](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/oref1.html) to understand how SMB works, especially what's the idea behind zero-temping.
- Then you ought to [rise maxIOB](Open-APS-features-maximum-total-iob-openaps-cant-go-over-openaps-max-iob) to get SMBs working fine. max AIO dabar apima visą AIO, ne tik pridėtą (pakeltą) valandinę bazę. That is, if given a bolus of 8 U for a meal and maxIOB is 7 U, no SMBs will be delivered until IOB drops below 7 U. A good start is maxIOB = average mealbolus + 3x max daily basal (max daily basal = the maximum hourly value in any time segment of the day - see [objective 7](Objectives-objective-7-tuning-the-closed-loop-raising-max-iob-above-0-and-gradually-lowering-bg-targets) for an illustration)
- min_5m_carbimpact default in absorption settings has changed from 3 to 8 going from AMA to SMB. Jeigu Jūs pereinate nuo AMA į SMB, turite jį parametrą pakeisti rankiniu būdu.

(Objectives-objective-10-automation)=
## Objective 10: Automation

- You have to start objective 10 to be able to use [Automation](../Usage/Automation.md).
- Make sure you have completed all objectives including exam [Objectives-objective-3-prove-your-knowledge](Objectives#objective-3-prove-your-knowledge).
- Completing previous objectives will not effect other objectives you have already finished. Visi užbaigti tikslai bus išsaugoti!

(Objectives-objective-11-DynamicISF)=
## Objective 11: Additional Features such as DynamicISF

- You have to start objective 11 to be able to use [DynamicISF](../Usage/Open-APS-features.md)

(Objectives-go-back-in-objectives)=
## Grįžti į tikslus

Jei dėl bet kokios priežasties norite grįžti į tikslų pradžią, galite tai padaryti paspaudę "išvalyti užbaigtus".

![Grįžti į tikslus](../images/Objective_ClearFinished.png)

## Objectives in Android APS before version 3.0

One objective was removed when Android APS 3.0 was released.  Users of Android APS version 2.8.2.1 who are on older Android software (i.e. earlier than version 9) will be using an older set of objectives which can be found [here](../Usage/Objectives_old.md).
