# Îndeplinirea obiectivelor

**AAPS** has a series of **Objectives** required to be completed to help the user progress from basic open looping to hybrid closed looping and full **AAPS** functionality. Completing the **Objectives** aims to ensure you have:

* Configured everything correctly in your **AAPS** setup;
* Learned about the essential features of **AAPS**; and
* A basic understanding of what your system can do, in order to help instill confidence when using **AAPS**.

When **AAPS** is installed for the first time, each objective must be completed before moving on to the next one. New features will gradually be unlocked as progress is made through each **Objective**.

**Objectives 1 to 8** will guide you from configuring **AAPS** on your smartphone to “basic” hybrid closed looping. Este nevoie de aproximativ 6 săptămâni pentru a fi finalizat. You can proceed up to **Objective 5** using a virtual pump (and using some other method of insulin delivery in the meantime). **Objectives 9 and 10** are designed to test more advanced **AAPS** features with the aim of better control of your diabetes, and will take up to 3 months to complete, possibly longer. Further details on an estimated breakdown of time can be obtained here: [How long will it take?](#preparing-how-long-will-it-take)

As well as progressing through the **Objectives**, if required, you can also remove your progress and [go back to an earlier objective](#go-back-in-objectives).

## Faceți o copie de rezervă a setărilor

```{admonition} Note
:class: nota

Se recomandă exportul setărilor **AAPS** după completarea fiecărui **Obiectiv**!
```

It is strongly recommended that you [export your settings](../Maintenance/ExportImportSettings.md) after completing each objective to avoid losing any progress made in **AAPS**. This exporting process creates a **settings file** (.json) which should be backed-up in one or more safe places (e.g. Google Drive, hard disk, email attachment _etc._). This ensures that any progress made in **AAPS** is saved. If your phone is lost or if you accidentally delete your progress, the json file can be re-loaded to **AAPS** by importing a recent settings file. Having a backup **settings file** is also required if a new **AAPS** smartphone is required for any reason (upgrading/lost/broken phone _etc._)

The **settings** file will save not only your progress through the **Objectives**, but also all your **AAPS** settings such as **max bolus** _etc._

The **Objectives** will need to be restarted from the beginning should you fail to have a backup of your settings and anything happens to your **AAPS** smartphone. Progressing through the **Objectives** takes time, and having to re-complete them again because for example you lost your smartphone, is a situation to be best avoided.

(objectives-objective1)=
## Obiectivul 1: Configurarea vizualizării și a monitorizării, analizarea bazalelor și a raporturilor

**Objective 1** requires the user to set up their basic technical setup in **AAPS**. Nu se poate face niciun progres până când acest pas nu este finalizat.

- Select the correct CGM/FGM in [Configuration → BG Source](#Config-Builder-bg-source). See [BG Source](../Getting-Started/CompatiblesCgms.md) for more information.
- Select the correct Pump in [Configuration → Pump](#Config-Builder-pump) to ensure your pump can communicate with **AAPS**. Select **virtual pump** if you are using a pump model with no **AAPS** driver for looping, or if you want to work through the early **Objectives** while using another system for insulin delivery. See [insulin pump](../Getting-Started/CompatiblePumps.md) for more information.
- Dacă utilizați Nightscout:
  - Follow instructions in [Nightscout](../SettingUpAaps/Nightscout.md) page to ensure **Nightscout** can receive and display **AAPS** data.
  - Note that the URL in **NSClientV3** must be **_without_ "/api/v1/"** at the end - see [Settings → NSClientV3](#Preferences-nsclient).
- Dacă utilizați Tidepool:
  - Follow instructions in [Tidepool](../SettingUpAaps/Tidepool.md) page to ensure **Tidepool** can receive and display **AAPS** data.

Note - *You may need to wait for the next sensor glucose reading to arrive before **AAPS** will recognize it.*

(objectives-objective2)=
## Objective 2: Learn how to control AAPS

**Objective 2** requires several ‘tasks’ to be actioned as shown in the screenshot below. Each task shows its status (**1**): the orange "**Not completed yet**" turns into "**Completed, well done!**" as soon as **AAPS** has registered the action. Tap **Hint** (**2**) underneath a task to open the related documentation, in case you are not familiar with a specific action yet.

![Screenshot objective 2](../images/Objective2_V2_5.png)

Tasks to complete **Objective 2** are:
- Set your **Profile** to 90% for a duration of 10 min.
  - _Hint_: Tap your Profile name on the main screen to open the **Profile** screen, then use the **Activate** (▶) button and set percentage and duration. More information in [Profile switch & Profile Percentage](../DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md).
  - _Note_: **AAPS** does not accept basal rates below 0.05U/hr. If your **Profile** includes rates 0.06U/hr or lower you will need to create a temporary **Profile** with higher basal rates before completing this task. Switch back to your normal **Profile** after completing this task.
- Simulate "taking a shower" by [disconnecting your pump](#AapsScreens-loop-status) in **AAPS** for a duration of 1h.
  - _Hint_: press the loop icon on the main screen to open the Loop dialog, then choose a duration under **Disconnect pump**.
- Încheiați "efectuarea dușului" prin reconectarea pompei dumneavoastră.
  - _Hint_: press the "disconnected"-icon to open the loop dialog again and choose **Reconnect Pump**.
- Set a custom [**Temporary Target**](../DailyLifeWithAaps/TempTargets.md) with a duration of 10 min.
  - _Hint_: press the target range on the main screen to bring up the temporary target screen.
- Display the **Loop** plugin's content.
  - _Hint_: open **Configuration → Loop** and tap "**Open plugin**".
- Use scroll or zoom on the BG chart to look at larger or smaller time frames.


(objectives-objective3)=
## Obiectivul 3: Dovediți-vă cunoștințele

**Objective 3** requires the user to pass a multiple-choice exam which is designed to test your **AAPS** knowledge.

Some users find **Objective 3** to be the most difficult objective to complete. Please read the **AAPS** documents in conjunction with the questions. If you are genuinely stuck after researching the **AAPS** documents, please search the [Facebook](https://www.facebook.com/groups/AndroidAPSUsers) or [Discord](https://discord.gg/4fQUWHZ4Mw) group for "Objective 3" (because it is likely that your question has been asked before - and answered by the group). These groups can provide friendly hints, or redirect you to the relevant part of the **AAPS** documents.

Între timp:
- To reduce the number of notifications / decisions you are asked to make (temporary basal rates) while in Open Loop, set a wide target range in your **Profile** _e.g._ 90 - 150 mg/dL or 5.0 - 8.5 mmol/L.
- S-ar putea să doriți să setați o limită superioară mai mare sau chiar să dezactivați bucla deschisă, noaptea.

To proceed with **Objective 3**, tap a question row to open it. Vă rugăm să citiți cu atenție fiecare întrebare și să selectați răspunsul (răspunsurile).

Pentru fiecare întrebare, poate fi mai mult de un răspuns corect! Dacă este selectat un răspuns incorect, întrebarea va fi blocată timp de o oră înainte de a putea reveni și răspunde din nou la întrebare. Fiți conștient de faptul că ordinea răspunsurilor s-a schimbat când veți încerca să răspundeți, acest lucru este necesar pentru a se asigura că le-ați citit cu atenție și că înțelegeți cu adevărat validitatea (sau nu) fiecărui răspuns.

```{admonition} __What happens if new question(s) are added to an Objective when I update to a newer version of AAPS?__
:class: note
From time to time, new features are added to **AAPS** which may require a new question to be added to the **Objectives**, particularly **Objective 3**. As a result, any new question added to **Objective 3** will be marked as “incomplete” because **AAPS** will require you to action this. Do not worry, as each **Objective** is independent, you will **not lose the existing functionality of AAPS**, providing the other **Objectives** remain completed.
```

## Obiectivul 4: Pornirea cu o buclă deschisă

The purpose of **Objective 4** is to recognize how often **AAPS** will evaluate the user's basal rate against glucose levels, and recommend temporary basal rate adjustments. As part of this **Objective**, you will activate open looping for the first time, and will accept 20 proposed temporary basal rate changes, and if required, apply these manually on your pump. You will also observe the impact of [**Temporary Targets**](../DailyLifeWithAaps/TempTargets.md). If you are not familiar with setting a temporary basal rate change in **AAPS** yet, see the pump actions in the **Manage** sheet ([Where did the Actions tab go?](#screens-action-tab)).

The minimal time to complete this objective: **7 days**. Acesta este un timp de așteptare obligatoriu. It is not possible to proceed to the next **Objective**, even if all basal rate changes were enacted already.

- Select Open Loop by pressing the [Loop icon](#AapsScreens-loop-status) on the main screen and choosing **Open Loop** as running mode.
- Implementați manual cel puțin 20 de sugestii de rată bazală temporară pe o perioadă de 7 zile; introduceți-le în pompa dumneavoastră (fizică) și confirmați în AAPS că le-ați acceptat. Ensure these basal rate adjustments show up in **AAPS** and **Nightscout**.
- Use [**Temp Targets**](../DailyLifeWithAaps/TempTargets.md) when necessary. După tratarea unei hipoglicemii, utilizați "ținta temporară de hipoglicemie" predefinită pentru a preveni supracorectarea sistemului la saltul înapoi al glicemiei.
- If you are still in [Simple Mode](#preferences-simple-mode) at this point, now is probably a good time to switch it off.

To reduce the number of proposed basal rate changes while in Open Loop, you can still use the tips described in [**Objective 3**](#objective-3-prove-your-knowledge). Additionally, you can change the minimum percentage for recommended basal rate changes with the "**Open mode minimum change**" setting in **Settings → Loop**. Cu cât valoarea este mai mare, cu atât veți primi mai puține notificări de schimbare.

![Cerere de schimbare minimală în bucla deschisă](../images/OpenLoop_MinimalRequestChange2.png)

```{admonition} Note
:class: note

You don't need to action each and every system recommendation!
```
(objectives-objective5)=
## Obiectivul 5: Înțelegerea buclei deschise, inclusiv a recomandărilor privind bazala temporară

As part of **Objective 5** you will start to understand how temporary basal recommendations are derived. This includes the [determination of basal logic](#aaps-screens-how-predictions-become-a-dosing-decision), analyzing the impact by observing [prediction lines in **AAPS Overview**](#aaps-screens-prediction-lines) (or Nightscout) and looking at the detailed calculations shown on the **OpenAPS SMB** plugin screen (**Configuration → APS → Open plugin**).

Estimated time to complete this objective: **7 days**.

This **Objective** requires you to determine and set your “Max U/h a temp basal can be set to” (max-basal) value as described in [OpenAPS-features](#Open-APS-features-max-u-h-a-temp-basal-can-be-set-to). This value can be set in [Settings → OpenAPS SMB](#Preferences-openaps-smb-settings). In [simple mode](#preferences-simple-mode), **AAPS** sets this value automatically and you don't need to change it. If you are still using a virtual pump, make sure this safety setting is set in both **AAPS** and your insulin pump.

You might wish to set your [**Profile** BG target](#profile-glucose-targets) higher than usual until you are comfortable with **AAPS**' calculations and settings. You may wish to experiment with adjusting your **BG target** in your **Profile** being in a tighter range (say, 1 or less mmol/L [20 mg/dL or less] wide) and observe the resulting behavior.

![Stop sign](../images/sign_stop.png)

```{admonition} If you have been using a virtual pump, change to a real insulin pump now!
:class: note

If you are open looping with a virtual pump **stop here**. Only click verify at the end of this **Objective** once you have changed to using a "real" pump which delivers insulin.

```

![blank](../images/blank.png)

(objectives-objective6)=
## Obiectivul 6: Începerea închiderii buclei cu Suspendare la Hipoglicemie

![Warning sign](../images/sign_warning.png)
```{admonition} Closed loop will not correct high **BG** values in **Objective 6** as it is limited to **Low Glucose Suspend** only!
:class: note
You will still need to correct high BG values by yourself (manually with corrections by pump or pen)!
```

As part of **Objective 6** you will close the loop and activate its **Low Glucose Suspend** (LGS) mode while [max IOB](#Open-APS-features-maximum-total-iob-openaps-cant-go-over) is set to zero. You have to remain in LGS mode for 5 days to complete this **objective**. You should use this time to check if your **Profile** settings are accurate and LGS events are not triggered too often.

Minimal time to complete this objective: **5 days**. Acesta este un timp de așteptare obligatoriu. You cannot proceed to the next **Objective** before this time is up.

It is crucial that your current **Profile** (basal, ISF, IC) have been well tested before you close your loop in **LGS** mode. Incorrect **Profile** settings might force you into hypo situations which have to be treated manually. An accurate **Profile** will help reduce the need for low glucose treatments during the 5 days period.

**If you still observe frequent or severe low glucose episodes consider refining your [insulin type's DIA](#Config-Builder-insulin-dia), basal, ISF and carb ratios.** Please refer to the [Facebook](https://www.facebook.com/groups/AndroidAPSUsers) or [Discord](https://discord.gg/4fQUWHZ4Mw) group which has much discussion on this.


During **Objective 6**, **AAPS** will override the maxIOB setting to zero. **This override will end when moving to Objective 7.**

This means that when you are on **Objective 6**, if sensor glucose levels are dropping, **AAPS** will reduce your basal insulin delivery for you. But, if sensor glucose levels are rising, **AAPS** will increase the basal rate above your **Profile** value only if **basal IOB** is negative as a result of a previous **LGS**. Otherwise, **AAPS** will not increase basal above your current profile value, even if glucose levels are rising. This caution is to avoid hypos as you are learning to use **AAPS**.

**As a consequence, you have to handle high glucose values with manual insulin bolus corrections.**

- If your IOB is negative (see screenshot below) a temporary basal rate (TBR) > 100% can be triggered in **Objective 6**.

![Example negative IOB](../images/Objective6_negIOB.png)

- Stabiliți intervalul țintă puțin mai mare decât de obicei ați intenționa, doar pentru a fi în siguranță și pentru a adăuga un tampon de siguranță.
- Enable 'Low Glucose Suspend' mode by pressing the Loop icon on the main screen and choosing **Low Glucose Suspend** as running mode.
- Urmăriți bazalele active temporare uitându-vă la textul bazal turcoaz pe ecranul VEDERE DE ANSAMBLU sau la randarea turcoaz a bazalei ca parte a graficului VEDERE DE ANSAMBLU.
- Este posibil să aveți parte temporar de valori crescute în urma tratării hipoglicemiilor fără a fi în măsură să creșteți bazalele la revenire.

(objectives-objective7)=
## Obiectivul 7: reglarea buclei închise, creșterea valorii maxIOB peste 0 și scăderea treptată a țintelor de glicemie

To complete **Objective 7** you have to close your loop and raise your [maxIOB](#Open-APS-features-maximum-total-iob-openaps-cant-go-over). **maxIOB** was zeroed out automatically in **Objective 6**, due to the Low Glucose Suspend mode. This is no longer the case. **AAPS** will start to use your defined maxIOB value to correct high glucose values. In [simple mode](#preferences-simple-mode), **AAPS** sets maxIOB automatically and you don't need to change it.

Minimal time to complete this objective: **1 day**. Acesta este un timp de așteptare obligatoriu. It is not possible to proceed to the next **Objective** until this period of time has expired.

- Select **Closed Loop** by pressing the [Loop icon](#AapsScreens-loop-status) on the main screen and choosing **Closed Loop** as running mode. Stay in **Closed Loop** over a period of 1 day.

- Creșteți lent 'Maximum IOB peste care OpenAPS nu poate trece' (în OpenAPS numit 'max-iob') peste 0, până când găsiți cele mai bune setări pentru dumneavoastră.

The default recommendation for this setting is “**average meal bolus + 3x max daily basal**”, where “max daily basal” is the maximum hourly value in any time segment of the day.

![max daily basal](../images/MaxDailyBasal2.png)

Această recomandare ar trebui considerată ca un punct de plecare. Dacă utilizați această regulă, dar vi se întâmplă ca AAPS să livreze prea multă insulină pe măsură ce valorile glicemiei cresc, poate fi nevoie să:
* reduceți valoarea "IOB maxim peste care OpenAPS nu poate trece";
* review your **Profile** settings, only making one adjustment at a time.

Alternatively, if you are very insulin resistant, raise the **maxIOB** value very cautiously.

Once confident on how much **maxIOB** suits your looping patterns, lower your **BG targets** to your desired level.

(objectives-objective8)=
## Obiectivul 8: Ajustarea bazalelor și a rapoartelor dacă este necesar și apoi activarea Autosens

As part of this **objective**, you will revisit your **Profile**'s performance and will use [Autosens](#Open-APS-features-autosens) functionality as an indicator for wrong settings.

Minimal time to complete this objective: **7 days**. Acesta este un timp de așteptare obligatoriu. It is not possible to proceed to the next **Objective** until this period of time has expired.

Enable [Autosens](../DailyLifeWithAaps/KeyAapsFeatures.md) over a period of 7 days (in [simple mode](#preferences-simple-mode) it is enabled by default) and watch [**Overview**'s graph white line](#AapsScreens-section-g-additional-graphs) showing your insulin sensitivity rising or falling due to exercise or hormones etc. Keep an eye on the **OpenAPS SMB** plugin screen (**Configuration → APS → Open plugin**) which shows **AAPS** adjusting the sensitivity, basals and targets accordingly.

This is a good time to review your settings for [Sensitivity Detection](#Config-Builder-sensitivity-detection). You can view your sensitivity on the main screen in an [additional graph](#AapsScreens-section-g-additional-graphs).

Additionally, you can use [Autotune](#autotune-how-autotune-calculates-adjustments) as a one off to check your basals remain accurate or do a traditional basal test.

(objectives-objective9)=
## Obiectivul 9: Facilitarea unor elemente suplimentare de oref1 pentru utilizarea în timpul zilei, cum ar fi super micro bolusul (SMB)

In **Objective 9**, you will tackle and use **"Super Micro Bolus (SMB)"** as one core functionality. După ce ați realizat citirile obligatorii, veți înțelege bine ce reprezintă SMB, cum funcționează și de ce bazala este setată temporar la zero după ce au fost date SMB (temporară zero).

Minimal time to complete this objective: **28 days**. Acesta este un timp de așteptare obligatoriu. Nu puteți trece la următorul obiectiv înainte ca acest timp să se încheie.

- The [SMB section in this documentation](#Open-APS-features-super-micro-bolus-smb) and [oref1 coverage in the openAPS docs](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/oref1.html) are must-reads to understand **SMB** and the concept of **zero-temping**.
- Once done, you can [raise maxIOB](#Open-APS-features-maximum-total-iob-openaps-cant-go-over) to get **SMBs** working more effectively. maxIOB now includes all **IOB**, not just accumulated basal. This threshold pauses **SMBs** until IOB drops below this value (_e.g._ **maxIOB** is set to 7U and a bolus of 8U is given to cover a meal: SMBs will be paused and not given unless **IOB** drops below 7U). A good start is setting **maxIOB** = **average meal bolus + 3x max daily basal** where "max daily basal" is the maximum hourly value in any time segment of the day. See [objective 7](#objective-7-tuning-the-closed-loop-raising-maxiob-above-0-and-gradually-lowering-bg-targets) as reference.
- Evaluate your carb absorption rate and consider changing the “min_5m_carbimpact”-parameter in [Settings → Absorption settings → min_5m_carbimpact](#Preferences-min_5m_carbimpact) if you find it too slow or too fast.

(objectives-objective10)=
## Obiectivul 10: Automatizare

**Automations** become available when **Objective 10** is started.

Minimal time to complete this objective: **28 days**. Acesta este un timp de așteptare obligatoriu. Nu puteți trece la următorul obiectiv înainte ca acest timp să se încheie.

Read the documentation page [Automation](../DailyLifeWithAaps/Automations.md) first.

Set up the most basic automation rule; for example trigger an Android notification in a few minutes:
- Open **Manage → Automation** and tap the **+** button (**Add rule**).
- Enter a **Task name**, for example "My first automation notification".
- Under **Condition**, tap "**EDIT**".
  - Tap "**Add trigger**" and select "**Time**". **AAPS** creates an entry for today at the current time.
  - Change the time so that it triggers in a few minutes.
  - Tap the **Save** icon (top right) to go back to the rule.
- Under **Action**, tap "**ADD**" and select "**Notification**".
  - Enter a message in the action card, for example "My first automation".
- Tap the **Save** icon (top right) and make sure the rule is **Enabled**.
- Așteptați până când ora declanșează notificarea (rețineți că, în funcție de telefon, poate dura câteva minute)

You can then experiment with setting up a more useful **Automation**. The documentation page gives a few examples, and you can search for "Automation" screenshots on the [Facebook](https://www.facebook.com/groups/AndroidAPSUsers) group. There is also a dedicated channel in the [Discord](https://discord.gg/4fQUWHZ4Mw) community.

For example, if you eat the same thing for breakfast at the same time every morning before school/work, you can create an **Automation** such as "before-breakfast-target" to set a slightly lower **Temporary Target** 30 minutes before having breakfast. În acest caz, starea dumneavoastră poate include "ora recurentă", care constă în selectarea anumitor zile ale săptămânii (Luni, Marți, Miercuri, Joi, Vineri) și o anumită oră (06:30 dimineața). Acțiunea va consta din „Start țintă temporară” cu o valoare țintă mai mică decât de obicei și o durată de 30 de minute.

## When all objectives are completed

Once you have accomplished all the **Objectives**, the list shows each of them with a tick and the date it was accomplished. The **Objectives** item disappears from the bottom navigation; you can still open the list with **Configuration → Constraints → Objectives → Open plugin**.

![All objectives accomplished](../images/objectives/objectives_completed.png)

Press "**More**" under an objective to see its tasks again:

![Details of an accomplished objective](../images/objectives/objective_1_details.png)

(CompletingTheObjectives-go-back-in-objectives)=
## Mergeți înapoi la obiective

If you wish to go back in the **Objectives** for whatever reason, open the finished **Objective** with "**More**" and tap "**Reset finished state**":

![Mergeți înapoi la obiective](../images/Objective_ClearFinished.png)

In the same way, the **Objective** you are currently working on can be restarted with "**Reset started state**".
