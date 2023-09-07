# For Clinicians – A General Introduction and Guide to AndroidAPS

This page is intended for clinicians who have expressed interest in open source artificial pancreas technology such as AndroidAPS, or for patients who want to share such information with their clinicians.

This guide has some high-level information about DIY closed looping and specifically how AndroidAPS works. For more details on all of these topics, please view the [comprehensive AndroidAPS documentation online](../index.md). If you have questions, please ask your patient for more details, or always feel free to reach out to the community with question. (If you’re not on social media (e.g. [Twitter](https://twitter.com/kozakmilos) or Facebook), feel free to email developers@AndroidAPS.org). [You can also find some of the latest studies & outcomes related data here](https://openaps.org/outcomes/).

## The steps for building a DIY Closed Loop:

To start using AndroidAPS, the following steps should be taken:

* Find a [compatible pump](../Hardware/pumps.md), a [compatible Android device](https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit?usp=sharing), and a [compatible CGM source](../Configuration/BG-Source.md).
* [Download the AndroidAPS source code and build the software](../Installing-AndroidAPS/Building-APK.md).
* [Configure the software to talk to their diabetes devices and specify settings and safety preferences](index-configuration).

## How A DIY Closed Loop Works

Without a closed loop system, a person with diabetes gathers data from their pump and CGM, decides what to do, and takes action.

With automated insulin delivery, the system does the same thing: it gathers data from the pump, CGM, and anywhere else information is logged (such as Nightscout), uses this information to do the maths and decide how much more or less insulin is needed (above or below the underlying basal rate), and uses temporary basal rates to make the necessary adjustments to keep or eventually bring BGs into target range.

If the device running AndroidAPS breaks or goes out of range of the pump, once the latest temporary basal rate ends, the pump falls back to being a standard pump with the preprogrammed basals rates runnning.

## How data is gathered:

With AndroidAPS, an Android device runs a special app to do the math, the device communicates using Bluetooth with a supported pump. AndroidAPS can communicate with other devices and to the cloud via wifi or mobile data to gather additional information, and to report to the patient, caregivers, and loved ones about what it’s doing and why.

The Android device needs to:

* communicate with the pump and read history - how much insulin has been delivered
* communicate with the CGM (either directly, or via the cloud) - to see what BGs are/have been doing

When the device has collected this data, the algorithm runs and does the decision-making based on the settings (ISF, carb ratio, DIA, target, etc.). If required, it then issues commands to the pump to modify insulin delivery rate.

It will also gather any information about boluses, carbohydrate consumption, and temporary target adjustments from the pump or from Nightscout to use it for the calculation of insulin delivery rates.

## How does it know what to do?

The open source software is designed to make it easy for the device to do the work people used to do (in manual mode) to calculate how insulin delivery should be adjusted. It first collects data from all the supporting devices and from the cloud, prepares the data and runs the calculations, makes predictions of expected BG-levels during the next hours will be expected to do in different scenarios, and calculates the needed adjustments to keep or bring BG back into target range. Next it sends any necessary adjustments to the pump. Then it reads the data back, and does it over and over again.

As the most important input parameter is the blood glucose level coming from the CGM, it is important to have high-quality CGM data.

AndroidAPS is designed to transparently track all input data it gathers, the resulting recommendation, and any action taken. It is therefore easy to answer the question at any time, “why is it doing X?” by reviewing the logs.

## Examples of AndroidAPS algorithm decision making:

AndroidAPS uses the same core algorithm and feature set as OpenAPS. The algorithm makes multiple predictions (based on settings, and the situation) representing different scenarios of what might happen in the future. In Nightscout, these are displayed as “purple lines”. AndroidAPS uses different colors to separate these [prediction lines](Releasenotes-overview-tab). In the logs, it will describe which of these predictions and which time frame is driving the necessary actions.

### Here are examples of the purple prediction lines, and how they might differ:

![Purple prediction line examples](../images/Prediction_lines.jpg)

### Here are examples of different time frames that influence the needed adjustments to insulin delivery:

### Scenario 1 - Zero Temp for safety

In this example, BG is rising in the near-term time frame; however, it is predicted to be low over a longer time frame. In fact, it is predicted to go below target *and* the safety threshold. For safety to prevent the low, AndroidAPS will issue a zero temp (temporary basal rate at 0%), until the eventualBG (in any time frame) is above threshold.

![Dosing scenario 1](../images/Dosing_scenario_1.jpg)

### Scenario 2 - Zero temp for safety

In this example, BG is predicted to go low in the near-term, but is predicted to eventually be above target. However, because the near-term low is actually below the safety threshold, AndroidAPS will issue a zero temp, until there is no longer any point of the prediction line that is below threshold.

![Dosing scenario 2](../images/Dosing_scenario_2.jpg)

### Scenario 3 - More insulin needed

In this example, a near-term prediction shows a dip below target. However, it is not predicted to be below the safety threshold. The eventual BG is above target. Therefore, AndroidAPS will restrain from adding any insulin that would contribute to a near-term low (by adding insulin that would make the prediction go below threshold). It will then assess adding insulin to bring the lowest level of the eventual predicted BG down to target, once it is safe to do so. *(Depending on settings and the amount and timing of insulin required, this insulin may be delivered via temp basals or SMB's (super micro boluses) ).*

![Dosing scenario 3](../images/Dosing_scenario_3.jpg)

### Scenario 4 - Low temping for safety

In this example, AndroidAPS sees that BG is spiking well above target. However, due to the timing of insulin, there is already enough insulin in the body to bring BG into range eventually. In fact, BG is predicted to eventually be below target. Therefore, AndroidAPS will not provide extra insulin so it will not contribute to a longer-timeframe low. Although BG is high/rising, a low temporary basal rate is likely here.

![Dosing scenario 4](../images/Dosing_scenario_4.jpg)

## Optimizing settings and making changes

As a clinician who may not have experience with AndroidAPS or DIY closed loops, you may find it challenging to help your patient optimize their settings or make changes to improve their outcomes. We have multiple tools and [guides](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/optimize-your-settings.html) in the community that help patients make small, tested adjustments to improve their settings.

The most important thing for patients to do is make one change at a time, and observe the impact for 2-3 days before choosing to change or modify another setting (unless it’s obviously a bad change that makes things worse, in which case they should revert immediately to the previous setting). The human tendency is to turn all the knobs and change everything at once; but if someone does so, then they may end up with further sub-optimal settings for the future, and find it hard to get back to a known good state.

One of the most powerful tools for making settings changes is an automated calculation tool for basal rates, ISF, and carb ratio. This is called “[Autotune](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autotune.html)”. It is designed to be run independently/manually, and allow the data to guide you or your patient in making incremental changes to settings. It is best practice in the community to run (or review) Autotune reports first, prior to attempting to make manual adjustments to settings. With AndroidAPS, Autotune will be run as a "one-off", although there are ongoing efforts to incorporate it directly into AndroidAPS as well. As these parameters are a prerequisite both for standard pump insulin delivery and for closed loop insulin delivery, discussion of the autotune results and adustment of these parameters would be the natural link to the clinician.

Additionally, human behavior (learned from manual diabetes mode) often influences outcomes, even with a DIY closed loop. For example, if BG is predicted to go low and AndroidAPS reduces insulin on the way down, only a small amount of carbs (e.g. 3-4g carbs) may be needed to bring BG up from 70 mg/dl (3.9 mmol). However, in many cases, someone may choose to treat with many more carbs (e.g. sticking to the 15 rule), which will cause a resulting faster spike both from the extra glucose and because insulin had been reduced in the timeframe leading up to the low.

## OpenAPS

**This guide was adopted from [The clinician's guide to OpenAPS](https://openaps.readthedocs.io/en/latest/docs/Resources/clinician-guide-to-OpenAPS.html).** OpenAPS is a system developed to be run on a small portable computer (generally referred to as the "rig"). AndroidAPS uses many of the techniques implemented in OpenAPS, and shares much of the logic and algorithms, which is why this guide is very similar to the original guide. Much of the information about OpenAPS can be easily adapted to AndroidAPS, with the main difference being the hardware platform where each peace of software is run.

## Summary

This is meant to be a high-level overview of how AndroidAPS works. For more details, ask your patient, reach out to the community, or read the full AndroidAPS documentation available online.

Additional recommended reading:

* The [full AndroidAPS documentation](../index)
* The [OpenAPS Reference Design](https://OpenAPS.org/reference-design/), which explains how OpenAPS is designed for safety: https://openaps.org/reference-design/
* The [full OpenAPS documentation](https://openaps.readthedocs.io/en/latest/index.html) 
  * More [details on OpenAPS calculations](https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/Understand-determine-basal.html#understanding-the-determine-basal-logic)