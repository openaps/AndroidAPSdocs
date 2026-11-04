# Key AAPS features

## Modul buclei

Starea buclei este afișată pe ecranul principal cu una dintre pictogramele de mai jos.

**AAPS** offers several loop modes, such as Closed Loop (1), Low Glucose Suspend (LGS - 2) and Open Loop (3).

See [AAPS screens > The main screen > Loop status](#AapsScreens-loop-status) for information on how to select the loop mode and on the other icons in the picture (4 to 6).

![Stare buclă](../images/Home2020_LoopStatus.png)

(KeyAapsFeatures-OpenLoop)=

### Buclă deschisă

**AAPS** continuously evaluates all available data (IOB, COB, BG...) and makes treatment suggestions (temporary basal rates) on how to adjust your therapy if necessary.

Sugestiile nu vor fi executate automat (ca în bucla închisă). The suggestions have to be enacted by the user manually into the pump (if using virtual pump) or by using a button if **AAPS** is connected to a real pump.

When **AAPS** has a suggestion, a **Loop** entry with a badge appears in the bottom navigation of the main screen. Press it to read the suggestion ("Accept new temp basal") with its rate, duration and reason, then press **Perform** to carry it out:

![Open loop suggestion with the Perform button](../images/screens/loop_tab.png)

O sugestie este valabilă doar câteva minute. If it is older than about 9 minutes, or if the loop has been suspended or the pump disconnected in the meantime, **AAPS** refuses it and nothing is sent to the pump (*"This suggestion is too old. Nu s-a trimis nimic către pompă. Așteptați următoarea sugestie.”*). Așteptați următoarea sugestie.

This option is for getting to know how **AAPS** works or if you are using an unsupported pump. You will be in Open Loop, no matter what choice you make here, until the end of **[Objective 5](#objectives-objective5)**.

(KeyAapsFeatures-LGS)=

### Suspendare la glicemie scăzută (LGS)

În acest mod, [maxIOB](#Open-APS-features-maximum-total-iob-openaps-cant-go-over) este setat la zero.

Aceasta înseamnă că, dacă glicemia scade, **AAPS** poate reduce bazala pentru dumneavoastră. But if blood glucose is rising, no automatic correction will be made. Your basal rates will remain the same as defined in your current **Profile**. Only if IOB is negative (from a previous Low Glucose Suspend) additional insulin will be given to lower **BG**.

Acest mod este disponibil începând cu **[Obiectivul 6](#objectives-objective6)**.

Besides selecting it yourself, **AAPS** can also switch to this mode on its own: while you are working on **[Objective 6](#objectives-objective6)**, and whenever it detects duplicate BG readings (see [BG warning sign](#aaps-screens-bg-warning-sign)).

(KeyAapsFeatures-ClosedLoop)=

### Buclă închisă

**AAPS** continuously evaluates all available data (IOB, COB, BG...) and automatically adjusts the treatment if necessary (*i.e.* without further intervention by you) to reach the set [target range or value](#profile-glucose-targets) (bolus delivery, temporary basal rate, insulin switch-off to avoid hypo etc.).

The Closed Loop works within numerous safety limits, which can be set individually.

Closed Loop is only possible if you are in **[Objective 7](#objectives-objective7)** or higher and use a supported pump.

(autosens)= (Open-APS-features-autosens)=

## Autosens

- Autosens este un algoritm care analizează deviațiile glicemiei (pozitive/negative/neutre).
- It will try and figure out how sensitive/resistant you are based on these deviations.
- The oref implementation in **OpenAPS** runs off a combination of 24 and 8 hours worth of data. Folosește varianta care este mai sensibilă.
- If users have come from oref1 they will probably notice the system may be less dynamic to changes, due to the varying of either 24 or 8 hours of sensitivity.
- Changing a cannula or changing a profile will reset Autosens ratio back to 100% (a percentual profile switch with duration won't reset autosens).
- Autosens adjusts your basal and ISF (i.e.: mimicking what a Profile shift does).
- If continuously eating carbs over an extended period, Autosens will be less effective during that period as carbs are excluded from **BG** delta calculations.
- The deviations are converted into a **sensitivity ratio** (a percentage): a ratio below 100% means AAPS thinks you're more sensitive to insulin than your **Profile** assumes (so it lowers effective basal and raises the ISF value), while a ratio above 100% means you're more resistant (so it raises basal and lowers the ISF value).
- By default this ratio is kept between 0.7 (70%, more sensitive) and 1.2 (120%, more resistant), so a run of unusual data can't push your dosing too far from your **Profile**. These bounds can be adjusted in Sensitivity Detection's advanced settings.
- Autosens and [Autotune](../AdvancedOptions/Autotune.md) address the same underlying problem on different timescales: Autosens nudges your *live* dosing minute-to-minute based on the last 8-24h, while Autotune slowly rewrites your *Profile* itself based on weeks of history. Running both is normal and expected — they complement rather than duplicate each other.

*For the full technical treatment of the autosens algorithm, see [OpenAPS's Autosens documentation](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autosens.html).*

(Open-APS-features-super-micro-bolus-smb)=

## Super Micro Bolus (SMB)

**SMB**, the shortform of **Super micro bolus**, is an OpenAPS feature introduced from 2018 onwards, within the Oref1 algorithm. In contrast to **AMA**, **SMB** does not use temporary basal rates to control glucose levels, but mainly **small super micro boluses**. In situations where **AMA** would add 1.0 IU insulin using a temporary basal rate, **SMB** delivers several super micro boluses in small steps at **5 minute intervals**, e.g. 0.4 IU, 0.3 IU, 0.2 IU and 0.1 IU. At the same time (for safety reasons) the actual basal rate is set to 0 IU/h for a certain period to prevent overdose (**'zero-temping'**). This allows the system to adjust the blood glucose faster than with the temporary basal rate increase in **AMA**.

Thanks to SMB, it may be sufficient for meals containing only "slow" carbs to inform the system of the planned amount of carbohydrate and leave the rest to **AAPS**. However, this may lead to higher postprandial (post-meal) peaks because pre-bolusing isn’t possible. Or you can give, if necessary with pre-bolusing, a **start bolus**, which **only partly** covers the carbohydrates (e.g. 2/3 of the estimated amount) and let **SMB** deliver the rest of the insulin.

![SMB pe graficul IOB](../images/SMBs.png)

SMB sunt afișate pe [graficul IOB](#aaps-screens-iob) cu triunghiuri albastre. [Press and hold](#aaps-screens-graph-press-and-hold) the graph at a triangle to see how much insulin was delivered, or use the [Treatments history](#aaps-screens-treatments).

**SMB's** features contain some safety mechanisms:

1. **Cea mai mare doză unică de SMB**  
  Cea mai mare doză de SMB poate fi doar cea mai mică valoare din:
  
        * value corresponding to the current basal rate (as adjusted by autosens) for the duration set in "Max minutes of basal to limit SMB to", e.g. basal quantity for the next 30 minutes, or
        * half the amount of insulin currently required, or
        * the remaining portion of your maxIOB value in the settings.
      

2. **Low temp basal rates**  
  Low temporary basal rates (called 'low temps') or temporary basal rates at 0 U/h (called 'zero-temps') are activated more in **SMB**. Acest lucru este intenționat, din motive de siguranță, și nu are efecte negative dacă **Profilul** este setat corect. On the main graph, the IOB curve (yellow thin line) is more meaningful than the course of the temporary basal rates.

3. **Mese neanunțate**  
  Calcule suplimentare pentru a prezice evoluția glicemiei, de exemplu prin **UAM** (mese neanunțate). Even without manual carbohydrate input from the user, **UAM** can automatically detect a significant increase in glucose levels due to meals, adrenaline or other influences and try to adjust this with **SMB**. To be on the safe side this also works the other way round and can stop the SMB earlier if an unexpectedly rapid drop in glucose occurs. That's why UAM should always be active at SMB.

SMB doesn't decide on its own that insulin is needed — it draws on the same blended BG predictions (eventual BG, zero-temp, COB, UAM) described in [how AAPS turns predictions into a dosing decision](#aaps-screens-how-predictions-become-a-dosing-decision). SMB and zero-temping are simply the two tools AAPS uses to act on that decision.

**Trebuie să fi început [obiectivul 9](#objectives-objective9) pentru a folosi SMB.**

See also [OpenAPS's oref1/SMB documentation](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/oref1.html#understanding-super-micro-bolus-smb) for the full technical treatment, or [Tim's info on SMB](https://www.diabettech.com/artificial-pancreas/understanding-smb-and-oref1/) for a community write-up.

Setările pentru OpenAPS SMB sunt descrise mai jos.

(Open-APS-features-max-u-h-a-temp-basal-can-be-set-to)=

### Rată bazală maximă

This safety setting determines the maximum temporary basal rate the insulin pump may deliver. Este cunoscută și ca **max-basal**.

Această valoare se măsoară în unități pe oră (U/h). Se recomandă setarea unei valori de bun simț. O recomandare bună pentru setarea acestui parametru este:

**MAX-BASAL = CEA MAI MARE RATĂ BAZALĂ x 4**

De exemplu, dacă cea mai mare rată bazală din profilul tău a fost 0,5 U/h puteți multiplica cu 4 pentru a obține o valoare de 2 U/h.

**AAPS** limits this value as a 'hard limit' according to [Settings > Safety > Patient age](#preferences-patient-type). Limitele stricte sunt următoarele:

- Copil: 2
- Adolescent: 5
- Adult: 10
- Adult cu rezistență la insulină: 12
- Pregnant: 25

*See also [overview of hard-coded limits](#Open-APS-features-overview-of-hard-coded-limits).*

(Open-APS-features-maximum-total-iob-openaps-cant-go-over)=

### IOB maxim pentru SMB

This value determines the maximum **Insulin on Board** (basal and bolus IOB) that **AAPS** will remain under while running in closed loop mode. Este cunoscută și ca **maxIOB**.

If the current IOB (e.g. after a meal bolus) is above the defined value, the loop stops dosing insulin until the IOB limit is below the given value.

A good start for setting this parameter is:

      maxIOB = medie bolus de masă + 3x maximul bazalei zilnice
    

Fiți atent și răbdător când ajustați **max-IOB**. It is different for everyone and can also depend on the average total daily dose (TDD).

**AAPS** limits this value as a 'hard limit' according to [Settings > Safety > Patient age](#preferences-patient-type). Limitele stricte sunt următoarele:

- Copil: 7
- Adolescent: 13
- Adult: 22
- Adult cu rezistență la insulină: 30
- Pregnant: 70

*See also [overview of hard-coded limits](#Open-APS-features-overview-of-hard-coded-limits).*

Note : When using **SMB**, the **max-IOB** is calculated differently than in AMA. In **AMA**, maxIOB is a safety-parameter for basal **IOB**, while in SMB-mode, it also includes bolus IOB.

### Utilizați sensibilitatea dinamică

This is the [DynamicISF](../DailyLifeWithAaps/DynamicISF.md) feature. Când este activată, devin disponibile setări noi. Settings are explained on the [DynamicISF](#dyn-isf-preferences) page.

### Utilizați Autosens

Aceasta este funcția [Autosens](#Open-APS-features-autosens). Când folosiți DynamicISF, Autosens nu poate fi folosit, deoarece sunt doi algoritmi diferiți care modifică aceeași variabilă (sensibilitatea).

Autosens analizează deviațiile glicemiei (pozitive/negative/neutre). Pe baza acestor deviații va încerca să-și dea seama cât de sensibil/rezistent sunteți și va ajusta rata bazală și ISF pe baza lor.

Când este activată, devin disponibile setări noi.

#### Sensibilitatea ridică ținta

If this option is enabled, the sensitivity detection (autosens) can raise the target when sensitivity is detected (below 100%). In this case your target will be raised by the percentage of the detected sensitivity.

If the target is modified due to sensitivity detection, it will be displayed with a green background on your main screen.

![Țintă modificată de autosens](../images/Home2020_DynamicTargetAdjustment.png)

This setting is available when one of "Use dynamic sensitivity" or "Use Autosens" are enabled.

#### Rezistența la insulină coboară ținta

If this option is enabled, the sensitivity detection (autosens) can lower the target when resistance is detected (above 100%). In this case your target will be lowered by the percentage of the detected resistance.

This setting is available when one of "Use dynamic sensitivity" or "Use Autosens" are enabled.

### Activați SMB

Enable this to use SMB functionality. If disabled, no **SMBs** will be given.

Când este activată, devin disponibile setări noi.

(Open-APS-features-enable-smb-with-high-temp-targets)=

#### Activați SMB cu ținte temporare ridicate

If this setting is enabled, **SMBs** will still be delivered even if the user has selected a high **Temp Target** (defined as 100 mg/dL or 5.6 mmol/L and above, regardless of **Profile** target). Use caution when enabling it: **SMBs** can become overly aggressive if your settings are not well tuned or if your **Profile** is subject to frequent variation (for example, with children).

When this setting is disabled, a high **Temp Target** turns **SMBs** off. For example, if this option is disabled, **SMBs** can be disabled by setting a **Temp Target** of 100 mg/dL or 5.6 mmol/L and above. This option will also disable **SMBs** regardless of what other condition is trying to enable SMB — apart from a low **Temp Target** such as **Eating Soon** (or any **Temp Target** of 98 mg/dL or 5.4 mmol/L and below), which may still deliver **SMBs** to drive **BG** towards the target.

This setting does not turn **SMB** on by itself. With a high temp target, **SMB** is only given if one of the other settings below (for example **Enable SMB always** or **Enable SMB with COB**) also allows it.

(Open-APS-features-enable-smb-always)=

#### Activați SMB întotdeauna

Dacă această setare este activată, SMB este întotdeauna activat (independent de COB, ținte temporare sau bolusuri). If this setting is enabled, the rest of the enable settings below will have no effect. Totuși, dacă **Activați SMB cu ținte temporare ridicate** este dezactivată și este setată o țintă temporară ridicată, SMB vor fi dezactivate.

This setting is only available if **AAPS** detects that you are using a [reliable BG source](#GettingStarted-TrustedBGSource), with advanced filtering. FreeStyle Libre 1 is not considered a reliable source due to the risk of infinitely repeating old BG data in case of sensor failure.

Noisy data could cause **AAPS** to believe BG is rising really fast, resulting in the administration of unnecessary SMBs. For more information about noise and data smoothing, see [here](../CompatibleCgms/SmoothingBloodGlucoseData.md).

#### Activați SMB cu COB

If this setting is enabled, SMB is enabled when the COB is greater than 0.

This setting is not visible if "Enable SMB always" is switched on.

#### Activați SMB cu ținte temporare joase

If this setting is enabled, SMB is enabled when a temp target is set (eating soon, activity, hypo, custom). If this setting is enabled but **Enable SMB with high temp target** is disabled, SMB will be enabled when a low temp target is set (98 mg/dL or 5.4 mmol/L and below) but disabled when a high temp target is set.

This setting is not visible if "Enable SMB always" is switched on.

#### Activați SMB după carbohidrați

If enabled, SMB is enabled for 6h after carbohydrates are announced, even if COB has reached 0.

For safety reasons, this setting is only available if **AAPS** detects that you are using a reliable BG source. It is not visible if "Enable SMB always" is switched on.

This setting is only available if **AAPS** detects that you are using a [reliable BG source,](#GettingStarted-TrustedBGSource) with advanced filtering. FreeStyle Libre 1 is not considered a reliable source due to the risk of infinitely repeating old BG data in case of sensor failure.

Noisy data could cause **AAPS** to believe BG is rising really fast, resulting in the administration of unnecessary SMBs. For more information about noise and data smoothing, see [here](../CompatibleCgms/SmoothingBloodGlucoseData.md).  
This setting is not visible if "Enable SMB always" is switched on.

#### Interval SMB

Această funcție limitează frecvența SMB. This value determines the minimum time between SMBs. Rețineți că bucla rulează de fiecare dată când sosește o valoare a glicemiei (în general la 5 minute). Scădeți 2 minute pentru a-i da buclei timp suplimentar să termine. E.g. if you want SMB to be given every loop run, set this to 3 minutes.

Valoare implicită: 3 minute.

(Open-APS-features-max-minutes-of-basal-to-limit-smb-to)=

#### Maximul de minute de bazală la care să se limiteze SMB

Aceasta este o setare de siguranță importantă. This value determines how much SMB can be given based on the amount of basal insulin in a given time, when it is covered by COBs.

Making this value larger allows the SMB to be more aggressive. Ar trebui să începeți cu valoarea implicită de 30 de minute. After some experience, increase the value in 15 minutes increments and observe the effects over multiple meals.

It is recommended not to set the value higher than 90 minutes, as this would lead to a point where the algorithm might not be able to accommodate a decreasing BG with 0 U/h basal ('zero-temp'). Ar trebui să setați și alarme, mai ales dacă încă testați setări noi, care să vă avertizeze cu mult înainte de o hipoglicemie.

Valoare implicită: 30 minute.

#### Maximul UAM de minute de bazală la care să se limiteze SMB

This setting allows you to adjust the strength of SMB during UAM, when there are no more carbs.

Default value : the same as **Max minutes of basal to limit SMB**.

Această setare este vizibilă doar dacă „Activați SMB” și „Activați UAM” sunt activate.

(enable-uam)=

### Activați UAM

Cu această opțiune activată, algoritmul SMB poate recunoaște mesele neanunțate. This is helpful if you forget to tell **AAPS** about your carbs or estimate your carbs wrong and the amount of entered carbs is wrong or if a meal with lots of fat and protein has a longer duration than expected. Without any carb entry, UAM can recognize fast glucose increase caused by carbs, adrenaline, etc., and tries to adjust it with SMBs. Funcționează și invers: dacă glicemia scade rapid, poate opri SMB mai devreme.

**Prin urmare, UAM trebuie activat întotdeauna când se utilizează SMB.**

(key-aaps-features-minimal-carbs-required-for-suggestion)=

### Pragul de carbohidrați necesari

Minimum grams of carbs to display a carbs suggestion alert. Consumul de carbohidrați suplimentari va fi sugerat atunci când designul de referință detectează că acesta are nevoie de carbohidrați. În acest caz veți primi o notificare care poate fi amânată cu 5, 15 sau 30 de minute.

Notificările „Carbohidrați necesari” pot fi trimise către Nightscout, dacă doriți; în acest caz va fi afișat și difuzat un anunț.

În orice caz, carbohidrații necesari vor fi afișați în secțiunea COB de pe ecranul principal.

![Display carbs required on main screen](../images/main/main_screen_carbs_required.png)

### Setări avansate

For the full parameter reference (including settings not covered here), see [OpenAPS's preferences and safety settings documentation](https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/preferences-and-safety-settings.html).

**Utilizați întotdeauna media scurtă a diferenței în loc de diferența simplă** Dacă activați această funcție, **AAPS** folosește media scurtă a diferenței/glicemiei din ultimele 15 minute, care este de obicei media ultimelor trei valori. This helps **AAPS** to be steadier with noisy data sources like xDrip and Libre.

**Multiplicator maxim de siguranță zilnic** Aceasta este o limită de siguranță importantă. The default setting (which is unlikely to need adjusting) is 3. This means that **AAPS** will never be allowed to set a temporary basal rate that is more than 3x the highest hourly basal rate programmed in a user’s pump and/or profile. Example: if your highest basal rate is 1.0 U/h and max daily safety multiplier is 3, then **AAPS** can set a maximum temporary basal rate of 3.0 U/h (= 3 x 1.0 U/h).

Default value: 3 (shouldn’t be changed unless you really need to and know what you are doing)

**Current Basal safety multiplier** This is another important safety limit. The default setting (which is also unlikely to need adjusting) is 4. This means that **AAPS** will never be allowed to set a temporary basal rate that is more than 4x the current hourly basal rate programmed in a user’s pump and/or profile.

Default value: 4 (shouldn’t be changed unless you really need to and know what you are doing)

* * *

(Open-APS-features-auto-isf)=

## Auto ISF

**Auto ISF** este un algoritm **experimental** pentru utilizatori avansați. It is built on OpenAPS SMB and adds rules that make the insulin sensitivity factor (ISF) stronger or weaker depending on how your glucose behaves.

It is a development feature: it can only be switched on in a [dev build](../AdvancedOptions/DevBranch.md) with **Engineering Mode** enabled. In a regular release build it stays forced off and is therefore not shown in **Configuration → APS**. Completing the [Objectives](../SettingUpAaps/CompletingTheObjectives.md) does not unlock it.

After selecting it, its **Settings** contain the OpenAPS SMB settings plus an **AutoISF settings** group:

- **Activați AutoISF**: pornește ajustările ISF. Without it, the algorithm behaves like OpenAPS SMB.
- **AutoISF min** and **AutoISF max**: how weak and how strong the ISF is allowed to become, in the same way as the Autosens limits. With the default value 1.0 the effect is switched off.
- **Ponderi**: each one drives one rule, and the default value 0.0 switches the rule off. 
  - cât timp glicemia **accelerează**, ISF este întărit (mai multă insulină);
  - cât timp glicemia **încetinește**, ISF este slăbit (mai puțină insulină);
  - cât timp glicemia este **sub țintă**, ISF este slăbit;
  - cât timp glicemia este **peste țintă**, ISF este întărit;
  - a **post-prandial** weight and a **duration** weight act after meals and when glucose stays high for a long time.
- **Raportul administrării SMB** (cu un minim, un maxim și un interval de glicemie): ce parte din insulina necesară poate fi administrată ca SMB.
- **Extensia maximă a intervalului SMB**: de câte ori poate fi depășită limita obișnuită a mărimii SMB ([numărul maxim de minute de bazală](#Open-APS-features-max-minutes-of-basal-to-limit-smb-to), implicit 30 de minute). The default value 1 changes nothing; up to 5 is possible. Increase this experimental value slowly and with caution.
- **IOB threshold percent**: the percentage of max IOB above which SMBs are disabled.

    {admonition} Only for experienced users
    :class: danger
    With its default values Auto ISF changes nothing. Every value you raise makes **AAPS** more aggressive. Change one value at a time, in small steps, and watch the result for several days. Be extremely careful with an **AutoISF max** above 2.5.

(Open-APS-features-advanced-meal-assist-ama)=

## Asistență avansată a mesei (AMA)

AMA, prescurtarea de la „advanced meal assist” (asistență avansată a mesei), este o funcție OpenAPS din 2017 (oref0). OpenAPS Advanced Meal Assist (AMA) allows the system to high-temp more quickly after a meal bolus if you enter carbs reliably.

Puteți găsi mai multe informații în [documentația OpenAPS](https://newer-docs.readthedocs.io/en/latest/docs/walkthrough/phase-4/advanced-features.html#advanced-meal-assist-or-ama).

### Maximum basal rate (OpenAPS "max-basal")

Această setare de siguranță împiedică **AAPS** să poată administra vreodată o rată bazală periculos de mare și limitează rata bazală temporară la x U/h. Se recomandă setarea unei valori de bun simț. A good recommendation is to take the highest basal rate in your profile and multiply it by 4 and at least 3. For example, if the highest basal rate in your profile is 1.0 U/h you could multiply that by 4 to get a value of 4 U/h and set the 4 as your safety parameter.

You cannot choose any value: For safety reason, there is a 'hard limit', which depends on the patient age. „Limita strictă” pentru maxIOB este mai mică în AMA decât în SMB. Pentru copii valoarea este cea mai mică, iar pentru adulții cu rezistență la insulină este cea mai mare.

The hardcoded parameters in **AAPS** are:

- Copil: 2
- Adolescent: 5
- Adult: 10
- Adult cu rezistență la insulină: 12
- Pregnant: 25

*See also [overview of hard-coded limits](#Open-APS-features-overview-of-hard-coded-limits).*

### IOB maxim pentru AMA

Acest parametru limitează IOB bazal maxim până la care **AAPS** mai funcționează. If the IOB is higher, it stops giving additional basal insulin until the basal IOB is under the limit.

Valoarea implicită este 2, dar ar trebui să creșteți acest parametru încet, pentru a vedea cât de mult vă afectează și ce valoare vi se potrivește cel mai bine. Este diferit pentru fiecare persoană și depinde și de doza zilnică totală medie (DZT). Din motive de siguranță, există o limită care depinde de vârsta pacientului. „Limita strictă” pentru maxIOB este mai mică în AMA decât în SMB.

- Copil: 3
- Adolescent: 5
- Adult: 7
- Adult cu rezistență la insulină: 12
- Pregnant: 25

*See also [overview of hard-coded limits](#Open-APS-features-overview-of-hard-coded-limits).*

### Utilizați Autosens (AMA)

Here, you can choose, if you want to use the [sensitivity detection](../DailyLifeWithAaps/SensitivityDetectionAndCob.md) autosens or not.

### Autosens adaptează țintele

If you have this option enabled, autosens can adjust targets (next to basal and ISF), too. This lets **AAPS** work more 'aggressive' or not. The actual target might be reached faster with this.

### Setări avansate

- Normally you do not have to change the settings in this dialog!
- If you want to change them anyway, make sure you understand what you are doing — see the full parameter reference in [OpenAPS's preferences and safety settings documentation](https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/preferences-and-safety-settings.html).

**Utilizați întotdeauna media scurtă a diferenței în loc de diferența simplă** Dacă activați această funcție, **AAPS** folosește media scurtă a diferenței/glicemiei din ultimele 15 minute, care este de obicei media ultimelor trei valori. This helps **AAPS** to work more steady with noisy data sources like xDrip and Libre.

**Multiplicator maxim de siguranță zilnic** Aceasta este o limită de siguranță importantă. The default setting (which is unlikely to need adjusting) is 3. This means that **AAPS** will never be allowed to set a temporary basal rate that is more than 3x the highest hourly basal rate programmed in a user’s pump. Example: if your highest basal rate is 1.0 U/h and max daily safety multiplier is 3, then **AAPS** can set a maximum temporary basal rate of 3.0 U/h (= 3 x 1.0 U/h).

Default value: 3 (shouldn’t be changed unless you really need to and know what you are doing)

**Current Basal safety multiplier** This is another important safety limit. The default setting (which is also unlikely to need adjusting) is 4. This means that **AAPS** will never be allowed to set a temporary basal rate that is more than 4x the current hourly basal rate programmed in a user’s pump.

Default value: 4 (shouldn’t be changed unless you really need to and know what you are doing)

**Bolus snooze dia divisor** The feature “bolus snooze” works after a meal bolus. **AAPS** doesn’t set low temporary basal rates after a meal in the period of the DIA divided by the “bolus snooze”-parameter. Valoarea implicită este 2. That means with a DIA of 5h, the “bolus snooze” would be 5h : 2 = 2.5h long.

Valoare implicită: 2

* * *

(Open-APS-features-overview-of-hard-coded-limits)=

## Prezentare generală a limitelor fixe (stabilite în cod)

|            | Copil | Adolescent | Adult | Adult cu rezistență la insulină | Pregnant |
| ---------- | ----- | ---------- | ----- | ------------------------------- | -------- |
| MAXBOLUS   | 5     | 10         | 17    | 25                              | 60       |
| MINDIA     | 5     | 5          | 5     | 5                               | 5        |
| MAXDIA     | 9     | 9          | 9     | 9                               | 10       |
| MINIC      | 2     | 2          | 2     | 2                               | 0,3      |
| MAXIC      | 100   | 100        | 100   | 100                             | 100      |
| MAXIOB_AMA | 3     | 5          | 7     | 12                              | 25       |
| MAXIOB_SMB | 7     | 13         | 22    | 30                              | 70       |
| MAXBASAL   | 2     | 5          | 10    | 12                              | 25       |