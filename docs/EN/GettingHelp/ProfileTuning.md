# Tweaking AAPS Profile

**This is NOT a medical advice, please work with your care team for proper support and advice on your Diabetes management.**

This guide provides advice originally written up by @Robby from Discord on tips and tricks to help tune your **AAPS** Profile.

This guide is mainly trying to find/explain logic to the OpenAPS algorithm results with a given profile, and provide information of which values to adjust when certain outcomes are observed. 

## Profile setting change process
Over several days carefully observe and compare what is happening with your Blood Glucose Levels (BG) and your Insulin on Board (IOB).  
Keep an eye out for patterns that happen around the same time of day.   
It's important to do this over several days and never use the data you observe from a single day to make **profile** adjustment decisions.  
After you have observed a repeatable pattern of behaviors, e.g. at 1PM you see a spike in BG, and a low IOB value, only then start to make small changes to your profile. 
It's important to limit the changes you make to one thing at a time. E.g. increase your basil by .5 around 1PM.  
After every change it's important to monitor the impact this has on your BG and IOB for the next few days.
Repeat this pattern of observe, decide, change.

**Don't Rush, go slow!**

## Recommended settings and situation and advice while tweaking
- Do all testing with closed loop enabled.
- COB=0*
  -  *meaning that the meal is digested, and there are no more carbs in your body. AAPS might indicate COB=0 while you still have carbs on board.
- No physical activities.
- No stress.
- No illness.  
- Turn OFF AutoSens so that it will not try to adapt your profile.  
- Before starting to tweak IC or ISF value, it is important to have set a very good basal rate.
- With a good basal rate in profile, when you are on target with COB=0* and IOB=0, you will remain constantly on target whatever your ISF (it's only when you are
away from the target that a good ISF value is important).
- You need to check the actual IOB but also, the IOB chart to see how was the IOB during the past few hours.  
  ![IOB Chart](../images/troubleshooting/profile/IOB_Chart.png)  
  - This chart shows negative IOB during early morning hours. (IA= IOB GA=COB)  


## Profile definitions
A **strong** profile indicates some combintation of the the following:
- ISF number is too small
- The basal number is too big
- IC number is too small

## IOB Observations
If you observe the following patterns after a few days, consider the following changes

### IOB positive
- Basal is not strong enough

### IOB negative
- Basil too strong
- Previous meal: too much bolus
- Effects from past exercise/physical activity

## BG Target Observations

### Stuck High
- ISF is not strong enough
- Basil might not be strong enough
- A security (MaxIOB ?) might have kicked in

### Stuck Low
- ISF too strong
- Basil too strong (if also negative IOB)

### Rollercoaster  
- ISF too strong

## BG After Meals Observations

### Fast rise and go high
- Consider doing a pre-bolus
- Bolus not strong enough

### Fast rise and go low 
- Consider doing a pre-bolus
- Bolus too strong

## How to calculate your C/I
1. First, you need the correct basal settings in your profile.
2. Start on target, better without negative IOB.
3. Record the total insulin given in the pump tab (or pump history) and call it **Start insulin**.
4. Very accurately measure a known portion of carbs, and record the start time and **Start IOB**. Then enter carbs and bolus information into **AAPS** using the current configured CI. Don't forget to eat the carbs.
5. After some hours, when COB=0* and you're back on target, record end time, and note down the **End IOB**, check the total insulin given as before and call it **End insulin**.  
   ***NOTE:** The time frame is NOT important, as long as it is longer than your digestion*
6. From the difference between **Start** and **End** insulin amount, subtract/add the difference end IOB - start IOB. Then subtract the basal insulin calculated from your profile settings.
7. You'll have the total insulin used to “digest” your carbs. Calculate your C/I.

### Other Considerations while calculating your C/I
- With a profile that has correct basal(s), during any time frame, you stay on target and have an IOB near 0. You get your profile basal only.
- You add carbs and bolus to this mix. Wait till your body digests all the carbs and be back on target. Your insulin usage will be the sum of your basal + the insulin needed for the carbs. You calculate the insulin used for your basal (by using your profile) and the surplus will be the insulin used to digest the carbs.
- If the time frame is too short, there will be carbs undigested, thus your "insulin needed for the carbs" will be wrong.
- If the time frame is too long, nothing bad will happen. You'll use all your carbs and you'll get more basal. At the end, you'll subtract the basal from the total insulin used, the extended time frame (with more basal use) will not affect the result.




