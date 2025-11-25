# Tweaking AAPS Profile

**This is NOT a medical advice, please work with your care team for proper support and advice on your Diabetes management.**

This guide provides advice originally written up by @Robby from Discord on tips and tricks to help tune your **AAPS** Profile.

This guide is mainly trying to find/explain the logic of the OpenAPS algorithm results with a given profile, and provide information about which values to adjust when certain situations are observed. 

## Changing the profile settings, how to process
1. Ensure you have read and understand the recommended settings and advice below, not following this advice will make the whole process more complex and less likely to get well tuned profile.
2. Carefully observe and compare, **over several days**, what is happening with your Blood Glucose Levels (BG) and your Insulin on Board (IOB).  
3. Keep an eye out for patterns that happen around the same time (almost) everyday.   
4. It's important to do this over several days and never use the data you observe from a single day to make **profile** adjustment decisions.  
5. After you have observed a repeatable pattern of behaviours, e.g. at 1PM you see a spike in BG or a negative IOB value, only then start to make small changes to your profile. 
6. It's important to limit the changes you make to one thing at a time. E.g. increase your basil by .5 around 1PM.  
7. After every change it's important to monitor the impact this has on your BG and IOB for the next few days.
8. Repeat this pattern of observe, decide, change.

**Don't Rush, go slow!**

## Recommended settings and advice while tweaking
- Do all testing with closed loop enabled.
- Turn OFF all automations.
- Do not take manual user actions (manual bolus, temp targets etc) while testing, let the system use the profile settings only.
- On the secondary charts: on chart 1, use IOB, COB and SENS. On chart 2, use DEV and -BGI
- COB=0*
  -  *meaning that the meal is digested, and there are no more carbs in your body. AAPS might indicate COB=0 while you still have carbs on board.
- No physical activities.
- No stress.
- No illness.  
- Turn OFF AutoSens and DynISF so that they will not try to adapt your profile.  
- Before starting to tweak IC or ISF value, it is important to have set correct basal rates.
- When your basal rate in profile is correct, when you are on target with COB=0* and IOB=0, you will remain constantly on target whatever your ISF (ISF is only used when you are
higher than your target).
- You need to check the actual IOB but also, the IOB chart to see how was the IOB during the past few hours.  
  ![IOB Chart](../images/troubleshooting/profile/IOB_Chart.png)  
  - This chart shows negative IOB during early morning hours. (IA=IOB GA=COB)  


## Profile definitions
A **strong** profile indicates some combination of the the following:
- ISF number is too small
- The basal number is too big
- IC number is too small

## IOB Observations
If you observe the following patterns after a few days, consider the following changes

### IOB positive
- Basal is not strong enough

### IOB negative
- Basal too strong
- Previous meal: too much bolus
- May be the effects from past exercise/physical activity

## BG Target Observations

### Stuck High
- ISF is not strong enough (the calculated insulin is too weak)
- Basal might not be strong enough (SMBs do not have enough "basal stock" to use)
- A security (MaxIOB ?) might have kicked in and is limiting insulin injection. For the limitations, look in the OpenSMB tab

### Stuck Low
- ISF too strong
- Basal too strong (if also negative IOB)

### Rollercoaster
- ISF too strong

## BG After Meals Observations

### Fast rise and go high
- Food contains fast carbs
- Consider doing a pre-bolus
- Bolus (IC or injected %) not strong enough

### Fast rise and then go low 
- Consider doing a pre-bolus, profile might be too aggressive (over correction of the raise)
- Bolus too strong

## How to calculate your IC
1. First, you need the correct basal settings in your profile.
2. Start on target, better without negative IOB.
3. Record the total insulin given in the pump tab (or pump history) and call it **Start insulin**
C4. Very accurately measure a known portion of carbs, and record the start time and **Start IOB**. Then enter carbs and bolus information into **AAPS** using the wizard (with the current configured CI). Don't forget to eat the carbs ;)
5. After some hours, when COB=0* and you're back on target, record end time, and note down the **End IOB**, check the total insulin given as before and call it **End insulin**.  
   ***NOTE:** The time frame is NOT important, as long as it is longer than your digestion*
6. From the difference between **Start** and **End** insulin amount, subtract/add the difference end IOB - start IOB. Then subtract the basal insulin calculated from your profile settings.
7. You'll have the total insulin used to “digest” your carbs. Calculate your IC.

### Explanations for the IC calculations
- With a profile that has correct basal(s), during any time frame, you stay on target and have an IOB near 0. You get your profile basal only.
- You add carbs and bolus to this mix. Wait till your body digests all the carbs and be back on target. Your insulin usage will be the sum of your basal + the insulin needed for the carbs. You calculate the insulin used for your basal (by using your profile) and the surplus will be the insulin used to digest the carbs.
- If the time frame is too short, there will be carbs undigested, thus your "insulin needed for the carbs" will be wrong.
- If the time frame is too long, nothing bad will happen. You'll use all your carbs and you'll get more basal. At the end, you'll subtract the basal from the total insulin used, the extended time frame (with more basal use) will not affect the result.




