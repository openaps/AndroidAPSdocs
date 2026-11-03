# Ajustarea profilului AAPS

```{admonition} This is NOT a medical advice
:class: avertizare
Vă rugăm să lucrați cu echipa dumneavoastră de îngrijire pentru a primi sprijin și sfaturi cu privire la managementul diabetului dumneavoastră.</br>
Utilizați acest ghid numai după ce [ați configurat corect **profilul**](https://androidaps.readthedocs.io/en/latest/SettingUpAaps/YourAapsProfile.md), urmând toate obiectivele **AAPS**.
```

This guide explains the logic of the OpenAPS algorithm results with a given __Profile__, and provides information about which values in **AAPS** may be adjusted when certain situations or patterns are observed. The suggestions about basal testing below may diverge from what your care team advises.

Using **closed loop** may make basal testing easier and may significantly reduce the hypo risk if your __Profile__ basal is too strong.

## Changing profile's settings, how to proceed

1. Ensure you have read and understand __AAPS’__ recommended settings and advice below. Not following this advice may make the adjusting process problematic and less likely to get a well tuned __Profile__
2. Carefully observe and compare, **over several days**, what is happening with your __BG__ and __IOB__.
3. Keep an eye out for patterns with **AAPS** that happen around the same time (almost) everyday.
4. It's important to do this over several days. Poor results tend to be yielded from using data observed on a single day to make __Profile’s__ adjustment decisions.
5. After you have observed a repeatable pattern of behavior, e.g. at 1PM you see a spike in __BG__ or a negative __IOB__ value, only then start to make small changes to your __Profile__.
6. It's important to limit the changes you make to one thing at a time. De exemplu increase your basal by 10% around 1PM.
7. After every change, it's important to monitor the impact on your __BG__ and __IOB__ for the next few days.
8. Repetați acest tipar: observați, decideți, ajustați din nou dacă este nevoie

Nu vă grăbiți, mergeți încet!

## Recommended settings and advice while tweaking basal

- Faceți toate testele cu [bucla închisă activată](#AapsScreens-loop-status).
- **Turn <u>OFF</u> all [automations](../DailyLifeWithAaps/Automations.md)**
- **Turn <u>OFF</u> [DynISF](#Open-APS-features-DynamicISF), [AutoISF](#Open-APS-features-auto-isf), [AutoSens](#Open-APS-features-autosens)** so that they will not try to adapt your profile.
- Do not make manual user actions (manual bolus, temp targets etc…) while testing: let the system use the **Profile** settings only.
- Pentru [graficele suplimentare](#AapsScreens-section-g-additional-graphs): pe graficul 1, folosiți Insulină activă, Carbohidrați la bord (și Modificarea sensibilității). Pe graficul 2, folosiți Deviații și Impactul asupra glicemiei. Când cereți sfaturi, includeți întotdeauna aceste grafice în capturile de ecran.
- COB=0[*](#profiletuning-cob-zero)

Other considerations that should ideally be avoided, as they influence the data and can lead to poor conclusions:
- Fără activitate fizică.
- Fără stres.
- Fără boală.
- No extreme weather like high or low temperatures.
- No failed pump or CGM sessions.
- Fără carbohidrați neanunțați.

De reținut și:
- If your [basal rate profile](#your-aaps-profile-basal-rates) is correct, when you are on target with COB=0[*](#profiletuning-cob-zero) and IOB=0, you will remain constantly on target whatever your **ISF** (**ISF** is only used when you are higher than your **BG** target).
- You need to check the actual **IOB** but also the **IOB** chart, to observe how the **IOB** evolved during the past few hours.

(profiletuning-cob-zero)=

***COB = 0**

Meaning that the meal is digested, and there are no more carbs in your body.

**AAPS** might indicate [COB=0 while you still have carbs on board](../DailyLifeWithAaps/CobCalculation.md).

## Definiții ale [profilului](../SettingUpAaps/YourAapsProfile.md)

A too **strong Profile** indicates some combination of the following:

- [ISF](#your-aaps-profile-insulin-sensitivity-factor) number is too small.
- The [basal](#your-aaps-profile-basal-rates) number is too big.
- [I:C](#your-aaps-profile-insulin-to-carbs-ratio) number is too small.

## IOB Observations

*Note: you can also use Loopalyzer IOB graph in Nightscout reports to view IOB on several days.*

If you observe the following patterns after a few days, consider the following changes:

### IOB pozitiv

- **Profile** basal might not be strong enough (this could also be because of things like unannounced food, illness, bad site absorption, etc.)

![IOB pozitiv](../images/troubleshooting/profiletuning/PositiveInsulin.png)

### IOB negativ

- Bazala implicită este prea puternică.
- May be the effect from past exercise/physical activity.

![IOB negativ](../images/troubleshooting/profiletuning/NegativeInsulin.png)

- Masa anterioară: prea mult bolus (care a dus la o bazală temporară zero foarte lungă)

![IOB negativ](../images/troubleshooting/profiletuning/NegativeInsulin2.png)

## BG Target Observations

### Stuck High

- __ISF's__ number is high and not strong enough (calculated insulin is too weak)

![Stuck High](../images/troubleshooting/profiletuning/StuckHigh.png)

- __Profile__ basal might not be strong enough (**SMBs** do not have enough "basal stock" to use)
- Este posibil să fi intervenit o limită de siguranță ([MaxIOB](#Open-APS-features-maximum-total-iob-openaps-cant-go-over)?) care limitează administrarea insulinei. Verify in the **APS** plugin screen (**Configuration → APS → Open plugin**); see [SMB](#Open-APS-features-super-micro-bolus-smb).
- Technical issue: site absorption, infusion set, ...

### Stuck Low

- __ISF__ too strong and the number needs to be raised higher
- __Profile__ basal too strong (if also negative IOB)

### Rollercoaster (ups and downs)

- **ISF** prea puternic? See your [AAPS Profile](#your-aaps-profile-insulin-sensitivity-factor)

![Rollercoaster](../images/troubleshooting/profiletuning/StrongISF.png)

## Observații privind glicemia după mese

### Fast rise and BG going high

- Food contains fast carbs (like fruit juice).
- Consider doing a pre-bolus or a slightly earlier pre-bolus.
- Bolusul (IC sau % injectat) nu este suficient de puternic.

![Rise High](../images/troubleshooting/profiletuning/FastRise.png)

### Fast rise and then BG going low

- Consider doing a pre-bolus, your **Profile** might be too aggressive (over correction of the raise)
- Bolus too strong.



## [How to calculate your I:C](#your-aaps-profile-insulin-to-carbs-ratio)

1. First, you need the correct default basal settings in your **Profile**.
2. Start on target, better without negative IOB.
3. Record the total insulin given in **Manage → Pump** (or pump history) and call it Start insulin. Very accurately measure a known portion of carbs, and record the start time and Start IOB. Apoi introduceți în **AAPS** informațiile despre carbohidrați și bolus folosind asistentul (cu I:C configurat în prezent). Nu uitați să mâncați carbohidrații ;)
4. After some hours, when COB=0[*](#profiletuning-cob-zero) and you're back on target, record end time, and note down the End IOB, check the total insulin given as before and call it End insulin. *NOTE: The time frame is NOT important, as long as it is longer than your digestion*
5. From the difference between Start and End insulin amount, subtract/add the difference end IOB - start IOB. Then subtract the basal insulin calculated from your **Profile's** settings.
6. If __BG__ is in target, you'll have the total insulin used to “digest” your carbs. Calculați **I:C**.

### Explanations for the I:C calculations

- With a **Profile** that has the correct default basal rate, during any time frame, you should stay on target and have an IOB near 0. Primiți doar bazala din **profil**.
- La aceasta adăugați carbohidrați și bolus. Wait till your body digests all the carbs and be back on **BG** target. Your insulin usage will be the sum of your basal + the insulin needed for the carbs. You calculate the insulin used for your basal (by using your **Profile**) and the surplus will be the insulin used to digest the carbs.
- Dacă intervalul de timp este prea scurt, vor rămâne carbohidrați nedigerați, deci „insulina necesară pentru carbohidrați” va fi greșită.
- Dacă intervalul de timp este prea lung, nu se întâmplă nimic rău. Veți folosi toți carbohidrații și veți primi mai multă bazală. At the end, you'll subtract the basal from the total insulin used, the extended time frame (with more basal use) will not affect the result.

Originally written up by @Robby (Discord) on tips and tricks to help tune your **AAPS Profile**, reviewed and edited by the community (thank you!).
