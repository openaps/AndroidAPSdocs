# **Tweaking the AAPS' Profile**

```{admonition} This is NOT a medical advice
:class: warning
Please work with your care team for support and advice on your diabetes management.</br>
Use this guide only once you have [set up your **Profile** correctly](https://androidaps.readthedocs.io/en/latest/SettingUpAaps/YourAapsProfile.md), following all **AAPS** objectives.
```

This guide explains the logic of the OpenAPS algorithm results with a given __Profile__, and provides information about which values to adjust when certain situations are observed. The suggestions about basal testing below may diverge from what your care team  advises

Using **closed loop** may make basal  testing easier and may significantly reduce  the hypo risk if your __Profile__ basal is too strong.

## **Changing profile's settings, how to proceed**

1. Ensure you have read and understand __AAPS’__ recommended settings and advice below. Not following this advice will make the whole process problematic and less likely to get a well tuned __Profile__
2. Carefully observe and compare, **over several days**, what is happening with your __BG__ and __IOB__.
3. Keep an eye out for patterns that happen around the same time (almost) everyday.
4. It's important to do this over several days. Poor results tend to be yielded from using data observed on a single day to make __Profile’s__ adjustment decisions.
5. After you have observed a repeatable pattern of behavior, e.g. at 1PM you see a spike in __BG__ or a negative __IOB__ value, only then start to make small changes to your __Profile__.
6. It's important to limit the changes you make to one thing at a time. E.g. increase your basal by 10% around 1PM.
7. After every change, it's important to monitor the impact on your __BG__ and __IOB__ for the next few days.
8. Repeat this pattern, observe, decide, tweak again if needed

Don't rush, go slow!

## **Recommended settings and advice while tweaking basal**

- Do all testing with [closed loop enabled](#AapsScreens-loop-status).
- **Turn <u>OFF</u> all [automations](../DailyLifeWithAAPS/Automations.md)**
- **Turn <u>OFF</u> [DynISF](#Open-APS-features-DynamicISF), [AutoISF](../AdvancedOptions/DevBranch.md), [AutoSens](#Open-APS-features-autosens)** so that they will not try to adapt your profile.
- Do not make manual user actions (manual bolus, temp targets etc…) while testing: let the system use the **Profile** settings only.
- For the [additional graphs](#AapsScreens-section-g-additional-graphs): on graph 1, use Insulin On Board, Carbs On Board (and Sensitivity change). On graph 2, use Deviations and Blood Glucose Impact. When asking for advice, always include those on your screenshots.
- COB=0[*](#profiletuning-cob-zero)
- No physical activities.
- No stress.
- No illness.
- No extreme weather like high or low temperatures.
- If your [basal rate profile](#your-aaps-profile-basal-rates) is correct, when you are on target with COB=0[*](#profiletuning-cob-zero) and IOB=0, you will remain constantly on target whatever your ISF (ISF is only used when you are higher than your target).
- You need to check the actual IOB but also, the IOB chart to see how the IOB was during the past few hours.

(profiletuning-cob-zero)=

***COB = 0**

Meaning that the meal is digested, and there are no more carbs in your body.

AAPS might indicate [COB=0 while you still have carbs on board](../DailyLifeWithAAPS/CobCalculation.md).

## **[Profile](../SettingUpAaps/YourAapsProfile.md) definitions**

A too **strong Profile** indicates some combination of the following:

- [ISF](#insulin-sensitivity-factor-isf) number is too small
- The [basal](#basal-rates) number is too big
- [I:C](#insulin-to-carb-ratio-icr) number is too small

## **IOB Observations**

*Note: you can also use Loopalyzer IOB graph in Nightscout reports to view IOB on several days.*

If you observe the following patterns after a few days, consider the following changes

### **IOB positive**

- **Profile** basal might not be strong enough (this could also be because of things like unannounced food, illness, bad site absorption, etc.)

![Positive IOB](../images/troubleshooting/profiletuning/PositiveInsulin.png)

### **IOB negative**

- Default basal too strong
- May be the effect from past exercise/physical activity

![Negative IOB](../images/troubleshooting/profiletuning/NegativeInsulin.png)

- Previous meal: too much bolus (which resulted in a very long zero temp basal)

![Negative IOB](../images/troubleshooting/profiletuning/NegativeInsulin2.png)

## **BG Target Observations**

### **Stuck High**

- __ISF__ ‘s number is high and not strong enough (calculated insulin is too weak)

![Stuck High](../images/troubleshooting/profiletuning/StuckHigh.png)

- __Profile__ basal might not be strong enough (SMBs do not have enough "basal stock" to use)
- A security ([MaxIOB](#Open-APS-features-maximum-total-iob-openaps-cant-go-over)?) might have kicked in and is limiting insulin injection. Verify in the [SMB](#Open-APS-features-super-micro-bolus-smb) tab.
- Technical issue: site absorption, infusion set, ...

### **Stuck Low**

- __ISF__ too strong and the number needs to be raised higher
- __Profile__ basal too strong (if also negative IOB)

### **Rollercoaster (ups and downs)**

- **ISF** too strong? See your [AAPS Profile](#your-aaps-profile-insulin-sensitivity-factor)

![Rollercoaster](../images/troubleshooting/profiletuning/StrongISF.png)

## **BG After Meals Observations**

### **Fast rise and BG going high**

- Food contains fast carbs
- Consider doing a pre-bolus
- Bolus (IC or injected %) not strong enough

![Rise High](../images/troubleshooting/profiletuning/FastRise.png)

### **Fast rise and then BG going low**

- Consider doing a pre-bolus, profile might be too aggressive (over correction of the raise)
- Bolus too strong



## **[How to calculate your I:C](#your-aaps-profile-insulin-to-carbs-ratio)**

1. First, you need the correct default basal settings in your **Profile**.
2. Start on target, better without negative IOB.
3. Record the total insulin given in the pump tab (or pump history) and call it Start insulin C4. Very accurately measure a known portion of carbs, and record the start time and Start IOB. Then enter carbs and bolus information into AAPS using the wizard (with the current configured CI). Don't forget to eat the carbs ;)
4. After some hours, when COB=0[*](#profiletuning-cob-zero) and you're back on target, record end time, and note down the End IOB, check the total insulin given as before and call it End insulin.
   *NOTE: The time frame is NOT important, as long as it is longer than your digestion*
5. From the difference between Start and End insulin amount, subtract/add the difference end IOB - start IOB. Then subtract the basal insulin calculated from your profile settings.
6. If __BG__ is in target, you'll have the total insulin used to “digest” your carbs. Calculate your **I:C**.

### **Explanations for the I:C calculations**

- With a **Profile** that has the correct default basal rate, during any time frame, you should stay on target and have an IOB near 0. You get your **Profile** basal only.
- You add carbs and bolus to this mix. Wait till your body digests all the carbs and be back on **BG** target. Your insulin usage will be the sum of your basal + the insulin needed for the carbs. You calculate the insulin used for your basal (by using your **Profile**) and the surplus will be the insulin used to digest the carbs.
- If the time frame is too short, there will be carbs undigested, thus your "insulin needed for the carbs" will be wrong.
- If the time frame is too long, nothing bad will happen. You'll use all your carbs and you'll get more basal. At the end, you'll subtract the basal from the total insulin used, the extended time frame (with more basal use) will not affect the result.

Originally written up by @Robby (Discord) on tips and tricks to help tune your AAPS Profile, reviewed and edited by the community (thank you!).
