# **Tweaking the AAPS' Profile**

```{admonition} This is NOT a medical advice
:class: warning
Please work with your care team for support and advice on your diabetes management.</br>
Use this guide only once you have [set up your **Profile** correctly](https://androidaps.readthedocs.io/en/latest/SettingUpAaps/YourAapsProfile.md), following all **AAPS** objectives.
```

This guide explains the logic of the OpenAPS algorithm results with a given __Profile__, and provides information about which values to adjust when certain situations are observed. The suggestions about basal testing below may diverge from what your care team advises who may not be familar with __AAPS__.

Using **closed loop** may make basal testing easier and reduce the hypo risk if your __Profile__ basal is too strong.

### **Basal Rates**

Your basal rate of insulin (Units/hour) provides background insulin, keeping your **BG’s** stable in the absence of food or exercise. Your basal insulin rate should be set to match your body's fundamental energy needs and functions, ensuring **BG** is within range even when you're not eating to prevent the liver from overproducing sugar when cells aren't using it. 

__AAPS__ aims to deliver small amounts of insulin as required to keep the liver from releasing too much glucose, and to move glucose into body cells. Basal insulin usually makes up between 40 - 50% of your total daily dose (TDD), depending on your diet, and typically follows a circadian rhythm, with one peak and one valley in insulin requirements over 24 hours. For more information, chapter 6 of “Think like a Pancreas” by Gary Scheiner is very useful.

Most type 1 diabetes educators (and people with type 1 diabetes!) agree that you should work on getting your basal rates correct, before attempting to optimise your __ISF__ and __I:C__.

### **Basal Rates**

Accurate basal rates enable you to wake up in range, and to skip meals - or eat - earlier or later in the day, without going high or low.

Too high basal rate can lead to low __BGs__. And vice versa.

**AAPS** ‘baselines’ against the default basal rate. If the basal rate is too high, a ‘zero temp’ will count as a bigger negative __IOB__ than it should. This will lead to **AAPS** administering corrections than it should to bring __IOB__ ultimately to zero.

So, a basal rate too high will create low **BGs** both with the default rate, but also some hours hence as **AAPS** corrects to target.

Conversely, a basal rate too low can lead to high __BGs__, and a failure to bring levels down to **BG** target.

## **Changing Profile's settings, how to proceed**

There are various basal testing methods which usually entails observing your basal rates and insulin needs during an intermittent fasting over a 24-hour period. Ideally you need to test your basal rates for the whole day, it is not recommended to fast during 24h straight. This is because the body triggers mechanisms such as hormones to compensate. 

A recommended way is to fast 4 times for 6 hours. (See [here](https://www.mkuh.nhs.uk/patient-information-leaflet/basal-rate-testing-for-insulin-pump-users) and [here](https://myhealth.alberta.ca/Health/Pages/conditions.aspx?hwid=custom.ab_diabetes_insulinpump_basalrate_inst)).

Option 1: Basal Test in **LGS**
One method to basal test is to suspend the loop (for safety you can set __AAPS__ to [LGS](https://androidaps.readthedocs.io/en/latest/SettingUpAaps/Preferences.html#low-glucose-suspend-lgs) to avoid lows, as done for achieving [objective 6](https://androidaps.readthedocs.io/en/latest/SettingUpAaps/CompletingTheObjectives.html#objective-6-starting-to-close-the-loop-with-low-glucose-suspend)), which will revert to your default background basal rate. Observe how your **BG** changes: if it is dropping, basal rate is too high. And vice versa.

Option 2: Basal Test in Closed Loop
An alternative method is to basal test in closed loop [closed loop enabled](#AapsScreens-loop-status).  This may be more tricky for some users[closed loop enabled](#AapsScreens-loop-status) to keep the loop runningwhile basal testing, and obervimg ow **IOB** changes. If **IOB** is negative, your basal rate is too high. And vice versa. Beware that this method relies on **ISF** to correct **BG**, and thus depends on other variables to be set reasonably well for it to be successful.


- **Turn <u>OFF</u> all [automations](../DailyLifeWithAAPS/Automations.md)**
- **Turn <u>OFF</u> [DynISF](#Open-APS-features-DynamicISF), [AutoISF](../AdvancedOptions/DevBranch.md), [AutoSens](#Open-APS-features-autosens)** so that they will not try to adapt your **Profile**.
- Do not make manual user actions (manual bolus, temp targets etc…) while testing: let the system use the **Profile** settings only.
- For the [additional graphs](#AapsScreens-section-g-additional-graphs): on graph 1, use Insulin On Board, Carbs On Board (and Sensitivity change). On graph 2, use Deviations and Blood Glucose Impact. When asking for advice, always include those on your screenshots.
- COB=0[*](#profiletuning-cob-zero)
- If your [basal rate profile](#your-aaps-profile-basal-rates) is correct, when you are on **BG** target with **COB**=0[*](#profiletuning-cob-zero) and **IOB**=0, you should remain within __BG__ target whatever your __ISF__ (__ISF__ is only used when you are higher than your target).
- You need to check the actual __IOB__ but also, the __IOB__ chart to see how the __IOB__ results during the past few hours.

For both Options:
1. Ensure you have read and understand __AAPS’__ recommended settings and advice below. Not following this advice will make the whole process problematic and less likely to get a well tuned __Profile__
2. Carefully observe and compare, **over several days**, what is happening with your __BG__ and __IOB__.
3. Avoid basal testing during:
  - physical activities;
  - stress;
  - illness;
  - extreme weather like high or low temperatures; or
  - new CGM or old CGM where data may be or is suspected to be unreliable.
4. Observe and look for patterns that happen around the same time (almost) everyday.
5. It's important to basal test over several days. Poor results tend to be yielded from using data observed on a single day to make __Profile’s__ adjustment decisions.
6. After you have observed a repeatable pattern of behaviour, e.g. at 1PM you see a spike in __BG__ or a negative __IOB__ value, only then start to make small changes to your __Profile__.
7. Limit your **Profile's** changes made to one thing at a time. E.g. increase or decreasse your basal by 10% around 1PM.
8. After each change, it's important to monitor the impact on your __BG__ and __IOB__ for the next few days.
9. Repeat this pattern, observe, decide, tweak again if needed.
   

Don't rush, go slow!

(profiletuning-cob-zero)=

***COB = 0**

Meaning that the meal is digested, and there are no more carbs in your body.

__AAPS__ might indicate [COB=0 while you still have carbs on board](../DailyLifeWithAAPS/CobCalculation.md).

## **[Profile](../SettingUpAaps/YourAapsProfile.md) definitions**

A too **strong Profile** indicates some combination of the following:

- [ISF](#your-aaps-profile-insulin-sensitivity-factor) number is too small
- The [basal](#your-aaps-profile-basal-rates) number is too big
- [I:C](#your-aaps-profile-insulin-to-carbs-ratio) number is too small

## **IOB Observations**

*Note: you can also use Loopalyzer IOB graph in Nightscout reports to view IOB on several days.*

If you observe the following patterns after a few days, consider the following changes

### **IOB positive**

- **Profile** basal might not be strong enough (this could also be because of things like unannounced food, illness, bad site absorption, etc.)

![Positive IOB](../images/troubleshooting/profiletuning/PositiveInsulin.png)

### **IOB negative**

- Default basal too strong
- May also be the effect from past exercise/physical activity/ illness

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
- Consider doing a pre-bolus or trying faster insulin like Fiasp or Ljumjev
- Bolus (**I:C** or injected %) not strong enough
- incorrect carb calculation or failure to add delayed carbs to account for protein or fat rise

![Rise High](../images/troubleshooting/profiletuning/FastRise.png)

### **Fast rise and then BG going low**

- Consider doing a pre-bolus, __Profile__ might be too aggressive (over correction for thhe rise trajetory)
- Bolus too strong
- incorrect carb calculation

## **[How to calculate your I:C](#your-aaps-profile-insulin-to-carbs-ratio)**

1. First, you need the correct default basal settings in your **Profile**.
2. Start on **BG**target, better without negative **IOB**.
3. Record the total insulin given in the pump tab (or pump history) and call it 'Start insulin C4'. Very accurately measure a known portion of carbs, and record the start time and start IOB. Then enter carbs and bolus information into **AAPS** using the wizard (with the current configured I:C). Don't forget to eat the carbs ;-).
4. After some hours, when COB=0[*](#profiletuning-cob-zero) and you're back on target, record end time, and note down the 'End IOB', check the total insulin given as before and label it 'End insulin'.
   *NOTE: The time frame is NOT important, as long as it is longer than your digestion*
5. From the difference between 'Start insulin' and 'End insulin' amount, subtract/add the difference end **IOB** - start **IOB**. Then subtract the basal insulin calculated from your **Profile's** settings.
6. If __BG__ is in target, you'll have the total insulin used to “digest” your carbs. Calculate your **I:C**.

### **Explanations for the I:C calculations**

- With a **Profile** that has the correct default basal rate, during any time frame, you should stay on target and have an IOB near 0. You get your **Profile** basal only.
- You add carbs and bolus to this mix. Wait till your body digests all the carbs and be back on **BG** target. Your insulin usage will be the sum of your basal + the insulin needed for the carbs. You calculate the insulin used for your basal (by using your **Profile**) and the surplus will be the insulin used to digest the carbs.
- If the time frame is too short, there will be carbs undigested, thus your "insulin needed for the carbs" will be wrong.
- If the time frame is too long, nothing bad will happen. You'll use all your carbs and you'll get more basal. At the end, you'll subtract the basal from the total insulin used, the extended time frame (with more basal use) will not affect the result.

### **Overnight Basal testing for children**

Another way of adjusting your basal rate is to observe your overnight __AAPS'__ data when all __COBs__ have decayed. This method is particularly effective for adjusting children's basal rates which are highly indvidualised and variable. 

It can be a constant challenge for caregivers to keep up with the basal rate demands in children. Basal rates often need to be adjusted for pre-puberty children as they physically develop and undergo growth spurts, and adjustments can be every 2 to 4 weeks depending on their weight and growth trajectory. For pre-puberty children it is also important for accurate basal testing that additional insulin has been given to address growth hormone which usually occurs within the first couple of hours of deep sleep (otherwise this can lead to a sticky __BG__high).

The advantage of overnight basal testing method is that it avoids fasting (assuming late eating has not taken place and __COB__ have decayed). This method can also be invaluable to spot patterns and change in insulin needs. Dr Saleh Adi from Tidepool provides useful ways on how to analyse overnight **BG** lines in order to optimise your child’s basal rates in closed loop-  see [here](https://www.youtube.com/watch?v=-fpWnGRhLSo)

Consider 
- gently increasing the basal rate if your child’s **BG** is persistently staying sticky overnight;
- decreasing your child’s basal rate if they are suffering from unexplained overnight lows;
- using __Percentage Profile__ increase or decrease as a means of testing a new basal rate once **BG** data has been observed and an assessment on basal needs has been made.

Repeat the basal testing as necessary to ensure an accurate **Profile**  is maintained and your child keeps within their BG target.

__Tip__ - when basal testing, meals which have a high fat content (like pizza or fries) should be avoided in the evening as this can skew the overnight **BG** data. This is because insulin demands tend to be higher many hours later after eating high fat meal content. Also avoid eating too late at night as __COB__ must be decayed in order to obtain accurate data.


Originally written up by @Robby (Discord) on tips and tricks to help tune your **AAPS Profile**, reviewed and edited by the community (thank you!).
