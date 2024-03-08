# השלמת המשימות

ל**AAPS** יש סדרה של **משימות** שעליכם להשלים כדי להתקדם מלולאה פתוחה בסיסית ללולאה סגורה היברידית ולקבלת פונקציונליות מלאה של **AAPS**. השלמת **משימות** מבטיחה ש-:

- הגדרתם את הכל בצורה נכונה בהגדרות **AAPS**
- למדתם על התכונות החיוניות לשימוש ב-**AAPS**
- יש לכם הבנה בסיסית של מה המערכת שלכם עושה, ולכן למה אתם יכולים לסמוך עליה.

:::{admonition} הערה

ייצאו באופן קבוע את הגדרות **AAPS** לאחר השלמת כל **מטרה**!
:::

אנו ממליצים בחום [לייצא את ההגדרות שלכם](../Usage/ExportImportSettings.md) לאחר השלמת כל **משימה**. תהליך הייצוא יוצר קובץ **הגדרות** (מסוג.json) שעליכם ללגבות במקום בטוח אחד או יותר (_למשל_ Google Drive, קובץ מצורף לדוא"ל, דיסק קשיח וכו'). גיבוי מבטיח שתשמרו על ההתקדמותכם ב**משימות** ואם תמחק בטעות את ההתקדמות שלכם, תוכלו פשוט לטעון אותה מחדש על ידי ייבוא קובץ ההגדרות האחרון. יש גם צורך בגיבוי קובץ **הגדרות** אם ברצונכם להחליף את מכשיר הטלפון עליו מותקן **AAPS** מכל סיבה שהיא (שדרוג/אבדה/נזק וכו')

קובץ **הגדרות** ישמור לא רק את ההתקדמות במשימות, אלא גם הגדרות **AAPS** המותאמות אישית שלכם כגון **בולוס מקסימלי** _וכו'._

אם לא יהיה לכם עותק גיבוי של **ההגדרות** שלכם, במקרה שמשהו יקרה למכשירכם תצטרכו להתחיל שוב את **משימות** מההתחלה.

Overall the **objectives** take around 6 weeks to complete (see [how long will it take?](preparing-how-long-will-it-take?) for a detailed breakdown) from configuring **AAPS** on your smartphone to "basic" hybrid closed looping (from objective 1 to objective 8), so, although you _can_ proceed up to **objective 5** using a **virtual pump** (and using some other method of insulin delivery in the meantime), having to re-complete all the **objectives** because for example, you lost your smartphone, is still something you really want to avoid.

As well as progressing through the **objectives**, if you want, you can also remove your progress and [go back to an earlier objective](Objectives-go-back-in-objectives).

## משימה 1: הגדרת ויזואליזציה, ניטור, ניתוח המינון הבזאלי והיחסים

- **AAPS** checks if your basic technical setup is working.

If not you have to reconfigure until the basic technical setup works for **AAPS**.

- Select the correct CGMS/FGMS in [Config Builder](../Configuration/Config-Builder.md).  See [BG Source](../Configuration/BG-Source.md) for more information.
- Select the correct Pump in [Config Builder](../Configuration/Config-Builder.md) to ensure your pump can communicate with AAPS. Select **virtual pump** if you are using a pump model with no **AAPS** driver for looping, or if you want to work through the early **objectives** while using another system for insulin delivery. See [insulin pump](../Getting-Started/Pump-Choices.md) for more information.
- Follow instructions in [Nightscout](../Installing-AndroidAPS/Nightscout.md) page to ensure **Nightscout** can receive and display this data.
- Note that URL in **NSClient** must be **_without_ "/api/v1/"** at the end - see [NSClient settings in Preferences](Preferences-nsclient).

Note - _You may need to wait for the next sensor glucose reading to arrive before **AAPS** will recognise it._

## משימה 2: לימדו כיצד לשלוט בממשק AndoridAPS

- בצעו מספר פעולות ב-**AndroidAPS** כמתואר במשימה **זו**.
- לחצו על הטקסט הכתום "עוד לא הושלם" כדי לפתוח את סעיפי המשימה.
- מצורפים קישורים על מנת להדריך אתכם בביצוע הסעיפים.

  ```{image} ../images/Objective2_V2_5.png
  :alt: Screenshot objective 2
  ```
- Tasks to complete **Objective 2** are:
  - Set your profile to 90% for a duration of 10 min (_Hint_: Long press your profile name on the OVERVIEW screen) (_Note_: AAPS does not accept basal rates below 0.05U/hr. If your profile includes any rates 0.06U/hr or lower you will need to create a new profile with higher basal rates before completing this task. Switch back to your normal profile after completing this task.)
  - Simulate "taking a shower" by disconnecting your pump in **AAPS** for a duration of 1h (_Hint_: press the loop icon on the OVERVIEW screen to open the Loop dialogue)
  - End "taking a shower" by reconnecting your pump (_Hint_: press the "disconnected"-icon to open the loop dialog)
  - Create a custom temporary target with a duration of 10 min (_Hint_: press the target bar on the OVERVIEW screen to bring up the temporary target dialog)
  - Activate the **ACTIONS** plugin in **CONFIG BUILDER** to make it appear on the top scrollable menu bar (_Hint_: Go to **CONFIG BUILDER** and scroll down to 'General")
  - Display the LOOP plugin's content
  - Scale the BG-Chart to be able to look at larger or smaller timeframes: toggling between 6h, 12h, 18h 24h of past data (_Hint_: Tap the chart)

(Objectives-objective-3-prove-your-knowledge)=

## משימה 3: הוכיחו את הידע שלכם

- היבחנו במבחן אמריקאי שיבדוק את ידיעתכם ב-AndroidAPS.

חלק מהמשתמשים רואים המשימה 3 כמשימה הקשה ביותר. חובה לקרוא את מסמכי AAPS יחד עם השאלות. If you are genuinely stuck after researching the **AAPS** documents, please search the Facebook group for "Objective 3" (because it is likely that your question has been asked- and answered - before). If you are still stuck, ask in a post on either the Facebook or Discord group. קבוצות אלה יכולות לספק רמזים או להפנות אתכם לחלק הרלוונטי במסמכי AAPS.

כדי לבצע את המשימה, לחצו על הטקסט הכתום "עדיין לא הושלם" כדי לגשת לשאלה הרלוונטית. יש לקרוא את השאלות ולבחור את תשובותיכם.

- על מנת לצמצם את מספר ההמלצות של הלולאה הפתוחה, הגדירו טווח ערכי מטרה רחב כמו לדוגמה 90-150 mg/dl או 5-8.5 mmol/l.

- תוכלו גם להגדיר ערך מטרה עליון גבוה עוד יותר ואף לכבות את הלופ בלילה.

לכל שאלה עשויה להיות יותר מתשובה אחת נכונה! אם נבחרה תשובה שגויה, השאלה תינעל למשך 60 דקות ובתומן תוכלו לחזור ולענות עליה. Be aware that the order of the answers may have changed when you next try to answer, this is to make sure you read them carefully and really understand the validity (or not) of each response.

כאשר AAPS מותקן בפעם הראשונה, תצטרכו להשלים את **משימה 3** בכללותה כדי לעבור הלאה ל**משימה 4**. ניתן לסיים משימה רק אם כל המשימות הקודמות לה מושלמות. תכונות חדשות יפתחו בהדרגה ככל שתתקדם דרך היעדים.

:::{admonition}  **What happens if new question(s) are added to an Objective when I update to a newer version of AAPS?**
:class: Note
From time to time, new features are added to **AAPS** which may require a new question to be added to the Objectives, particularly Objective 3. לכן, כל שאלה חדשה שתתווסף למשימה 3 תסומן כ"לא הושלמה" ויהיה עליכם לענות עליה. מכיוון שכל משימה היא עצמאית, לא תאבדו את הפונקציונליות הקיימת של AAPS בתנאי שהמשימות האחרות מושלמות.
:::

## משימה 4: התחלת לופ פתוח

The purpose of this objective is to recognise how often **AAPS** will evaluate the basal rate's impact on glucose levels, and recommend temporary basal rate adjustments. As part of this objective, you will activate open looping for the first time, and will perform 20 proposed temporary basal rate changes manually on your pump. Furthermore, you will observe temporary and default temporary targets' impact (_e.g._ for activity or hypo treatments). If you are not familiar with setting a temporay basal rate change in **AAPS** yet, please refer to the [ACTIONS tab](Screenshots#Screenshots-action-tab).

Estimated time to complete this objective: **7 days**. This is a mandatory wait time. You can't proceed to the next Objective, even if you enacted all basal rate changes already.

- בחרו בלולאה פתוחה בהעדפות או ע"י לחיצה ארוכה על סמל הלופ בחלק העליון של המסך הראשי, בצד שמאל (אם שפת AAPS היא עברית).
- Walk through the [Preferences](../Configuration/Preferences.md) to set it up for you (scroll down to "Loop/APS Mode" and select "Open Loop".
- אשרו באופן ידני לפחות 20 הצעות לשינוי במינון הבזאלי הזמני על פני תקופה של 7 ימים. בשימוש במשאבה וירטואלית הזינו את השינויים המוצעים במשאבה ואשרו ב-AAPS שביצעתם אותן. Ensure these basal rate adjustments show up in AAPS and Nightscout.
- אפשרו [ערכי מטרה זמניים] (../Usage/temptarget.md) במקרה הצורך. After treating a hypo use hypo temp targets to prevent the system from overcorrecting upon the bounce back.

### צמצום מספר התראות הלולאה הפתוחה

- על מנת לצמצם את מספר ההמלצות של הלולאה הפתוחה, הגדירו טווח ערכי מטרה רחב כמו לדוגמה 90-150 mg/dl או 5-8.5 mmol/l.
- תוכלו גם להגדיר ערך מטרה עליון גבוה עוד יותר ואף לכבות את הלופ בלילה.
- You can set a minimum percentage for recommended basal rate changes to change the number of triggered notifications.

  ```{image} ../images/OpenLoop_MinimalRequestChange2.png
  :alt: Open Loop minimal request change
  ```

:::{admonition} You don't need to action each and every system recommendation!
:class: Note
:::

(Objectives-objective-5-Understanding-your-open-loop-including-its-temp-basal-recommendations)=

## משימה 5: העמקת הבנת הלולאה הפתוחה, לרבות המינונים הבזאליים הזמניים וההמלצות

As part of **Objective 5** you will start to understand how temporary basal recommendations are derived. This includes the [determination of basal logic](https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/Understand-determine-basal.html), analyzing the impact by observing [prediction lines in AAPS OVERVIEW](Screenshots-prediction-lines)/Nightscout and looking at detailed calculations shown on your OPENAPS tab.

Estimated time to complete this objective: 7 days.

This Objective requires you to determine and set your “Max U/h a temp basal can be set to” (max-basal) value as described in [OpenAPS-features](Open-APS-features#Open-APS-features-max-u-h-a-temp-basal-can-be-set-to-openaps-max-basal). This value can be set in Preferences > OpenAPS.
Make sure this safety setting is set in both **AAPS** and your insulin pump.

רצוי שתקבעו ערכי מטרה גבוהים מהרגיל עד אשר תבטחו בהגדרות ובחישובי הלופ.

**AAPS** מאפשר:

- ערך מטרה תחתון 72 mg/dl עד 180 mg/dl
- ערך מטרה עליון 90 mg/dl עד 225 mg/dl
- ערך מטרה זמני כערך יחיד יכול להיות בטווח 72 עד 225 mg/dl

Your target is a core value. All calculations are based on it. It is different from a target range which you usually aim to keep your blood glucose values in. If your target is very wide (say, 3 or more mmol/l [50 mg/dl or more] wide), you will often find little **AAPS** action. This is because sensor glucose is predicted to be somewhere in that wide range, and thus temporary basal rate changes are rarely suggested.

You may want to experiment with adjusting your targets being in a tighter range (say, 1 or less mmol/l [20 mg/dl or less] wide) and observe a resulting system behaviour.

You can adjust (widen or tighten) the graph’s green area, representing your target range, by entering different values in [Preferences](../Configuration/Preferences.md) > Range for Visualisation.

```{image} ../images/sign_stop.png
:alt: Stop sign
```

:::{admonition} If you have been using a virtual pump, change to a real insulin pump now!

If you are open looping with a virtual pump stop here. Only click verify at the end of this Objective once you have changed to using a "real" physical pump.
:::

```{image} ../images/blank.png
:alt: blank
```

(Objectives-objective-6-starting-to-close-the-loop-with-low-glucose-suspend)=

## משימה 6: מתחילים לסגור לולאה עם השהיה עקב ערך סוכר נמוך

```{image} ../images/sign_warning.png
:alt: Warning sign
```

:::{admonition}  Closed loop will not correct high BG values in objective 6 as it is limited to low glucose suspend only!
:class: Note
You will still need to correct high BG values by yourself (manually with corrections by pump or pen)!
:::

As part of **Objective 6** you will close the loop and activate its Low Glucose Suspend (LGS) mode while [max IOB](Open-APS-features-maximum-total-iob-openaps-cant-go-over-openaps-max-iob) is set to zero. You have to remain in LGS mode for 5 days to complete this objective. You should use this time to check if your profile settings are accurate and don't trigger LGS events too often.

Estimated time to complete this objective: 5 days.

It's crucial that your current profile (basal, ISF, IC) is well tested before you close your loop in Low Glucose Suspend mode. Incorrect profile settings might force you into hypo situations which have be  treated manually. An accurate profile will help to avoid needing low glucose treatments during the 5 days period.

**If you still observe frequent or severe low glucose episodes consider refining your DIA, basal, ISF and carb ratios.**

During objective 6, **AAPS** will take care of setting maxIOB to zero. **הגדרה זו תבוטל לאחר התחלת משימה 7.**

This means that when you are on Objective 6, if sensor glucose levels are dropping, **AAPS** will reduce basal insulin delivery for you. If sensor glucose levels are rising, **AAPS** will only increase the basal rate above your profile value if basal IOB is negative as a result of from a previous Low Glucose Suspend. Otherwise, **AAPS** will not increase basal above your current profile value, even if glucose levels are rising. This caution is to avoid hypos as you are learning to use **AAPS**.

**As a consequence, you have to handle high glucose values with manual insulin bolus corrections.**

- If your basal IOB is negative (see screenshot below) a temporary basal rate (TBR) > 100% can be triggered in objective 6.

```{image} ../images/Objective6_negIOB.png
:alt: Example negative IOB
```

- Set your target range slightly higher than you usually would aim at, just to be safe and to add a safety buffer.
- Enable 'Low Glucose Suspend' mode by pressing and holding the Loop icon at the top right corner of the OVERVIEW screen and selecting the Loop - LGS mode icon.
- Watch active temporary basals by looking at the turquoise basal text on the OVERVIEW screen or the turquoise basal render as part of the OVERVIEW graph.
- You may temporarily experience spikes following treated hypos without being able to increase basals on the rebound.

(Objectives-objective-7-tuning-the-closed-loop-raising-max-iob-above-0-and-gradually-lowering-bg-targets)=

## משימה 7: כוונון לולאה סגורה, העלאת האינסולין הפעיל המרבי מ-0 והורדה מדורגת של ערכי המטרה

To complete **Objective 7** you have to close your loop and raise your [maxIOB](Open-APS-features-maximum-total-iob-openaps-cant-go-over-openaps-max-iob). maxIOB was zeroed out automatically in **objective 6**. This is now reverted. **AAPS** will start to use your defined maxIOB value to correct high glucose values.

Estimated time to complete this objective: 1 day.

- Select 'Closed Loop' either from [Preferences](../Configuration/Preferences.md) or by pressing and holding the Loop icon at the top right corner of the OVERVIEW screen, over a period of 1 day.

- העלו את 'מינון אינסולין פעיל מרבי ממנו OpenAPS לא יחרוג' (נקרא גם 'max-IOB' ב-OpenAPS) ליותר מ-0 במשך יממה אחת. המלצת ברירת המחדל היא X3 המינון הבזאלי המקסימלי (עבור אלגוריתם AMA הישן, שנמצא בשימוש של משתמשים חדשים) או X3 המינון הבזאלי המקסימלי + בולוס ארוחה ממוצע (עבור אלגוריתם SMB). עליכם להתקדם אל ערך זה באופן מדורג עד שהגדרה זו עובדת היטב.
  מינון בזאלי מקסימלי = המינון הבזאלי המרבי שניתן בשעה כלשהי ביממה.

המלצה זו היא נקודת התחלה. If you set it to the 3x and you are seeing AAPS giving too much insulin as glucose levels rise, then lower the "Maximum total IOB OpenAPS can’t go over" value. Alternatively, if you are very resistant, raise it very cautiously.

```{image} ../images/MaxDailyBasal2.png
:alt: max daily basal
```

- כאשר תרגישו שערך האינסולין הפעיל מתאים לפעולת הלופ שלכם, הורידו את ערכי מטרה שלכם כרצונכם.

(Objectives-objective-8-adjust-basals-and-ratios-if-needed-and-then-enable-autosens)=

## משימה 8: התאמת המינון בזאלי והיחסים במקרה הצורך ולאחר מכן הפעלת Autosens

As part of this objective you will revist your profile's performance and will use autosens functionality as an indicator for wrong settings.

Estimated time to complete this objective: 7 days.

- You can use [autotune](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autotune.html) as a one off to check your basals remain accurate or do a traditional basal test.
- הפעילו autosens למשך 7 ימים וצפו בהתנהגות עקום כתוצאה משינויים הורמונליים, פעילות גופנית וכו'. עקום הרגישות הלבן נמצא הוא גרף משני במסך הבית (יש להפעילו).

(Objectives-objective-9-enabling-additional-oref1-features-for-daytime-use-such-as-super-micro-bolus-smb)=

## משימה 9: אפשרו פונקציות oref1 כגון סופר מיקרובולוס (SMB), בשעות היום

In this objective you will tackle and use "Super Micro Bolus (SMB)" as one core functionality. After working through the mandatory readings you will have a good understanding of what SMBs are, how these work, reasonable starting point with SMBs and why basal is set to zero temporarily after SMBs are given (zero-temping). Estimated time to complete this objective: 28 days.

- The [SMB section in this documentation](Open-APS-features-super-micro-bolus-smb) and [oref1 coverage in the openAPSdocs](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/oref1.html) are must-reads to understand SMB and the concept of zero-temping.
- Once done, you [raise maxIOB](Open-APS-features-maximum-total-iob-openaps-cant-go-over-openaps-max-iob) to get SMBs working well. maxIOB now includes all IOB, not just accumulated basal. This threshold pauses SMBs until IOB drops below this value (_e.g._ maxIOB is set to 7 U and a bolus of 8 U is given to cover a meal: SMBs will be paused and not given unless IOB drops below 7 U). A good start is setting maxIOB = average mealbolus + 3x max daily basal (max daily basal = the maximum hourly value in any time segment of the day - see [objective 7](Objectives-objective-7-tuning-the-closed-loop-raising-max-iob-above-0-and-gradually-lowering-bg-targets) as reference)
- Change "min_5m_carbimpact"-parameter (Preferences > Absorbtion settings > min_5m_carbimpact) to 8 as you move from an OpenAPS AMA algorithm to OpenAPS SMB. For AMAs the default value is 3. Read more about this setting [here](../Configuration/Preferences.html#min-5m-carbimpact)

(Objectives-objective-10-automation)=

## משימה 10: אוטומציות

You have to start **Objective 10** to be able to use Automations.

1. Read the documentation page  [Automation](../Usage/Automation.md) first.
2. Set-up the most basic automation rule;
   for example trigger an Android notification in few minutes:

- Select the notification tab
- From the top right 3 dots menu, select add rule
- Give a task name "My first automation notification"
- "edit"  "condition"
  - click the "+" symbol to add the first trigger
  - select "Time"  & "OK", it will create a default entry AT TODAY HOUR:MINUTE
  - click the MINUTE portion to edit the time such that it triggers in a few minutes. Then click ok to close
  - click "ok"  to close the Triggers screen
- "ADD" an "Action"
  - select "Notification", "OK"
  - click "Notification" to edit the message(Msg), enter something like "Ny first automation"
- wait until the time triggers the notification (note that depanding on your phone, it can be a few minutes late)

4. Experiment with setting up a more useful automation.

- The documentation page gives a few examples, and you can search for "automation" screenshots on the Facebook group. Since most people eat the same thing for breakfast at the same time every morning before school/work, a fairly common use-case can be to set a "before-breakfast-target" to set a slightly lower temporary target 30 minutes before having breakfast. In such case, your condition is likely to include "recurring time" which consists of selecting specific days of the week (Monday, Tuesday, Wednesday, Thursday, Friday) and a specific time (06:30 am). The action will consists of  "Start temp target" with a target value and a 30 minutes duration.

## משימה 11: הפעלת פונקציות נוספות לשימוש במשך היום כמו רגישות דינאמית).

- Ensure that SMB is functioning properly
- Read the documentation concerning Dynamic ISF [here](../Usage/DynamicISF.md)
- Search the Facbook and Discord groups for discussions around Dynamic ISF and read about other users experiences and recommendations.
- Enable the **DynamicISF plugin** and identify the appropriate calibration for your body's uniqueness. It is advisable to begin with a value lower than 100% for safety reasons.

(Objectives-go-back-in-objectives)=

## חזרה על משימות

אם ברצונכם לחזור על משימה מכל סיבה שהיא, ניתן לעשות זאת ע"י לחיצה על "ביטול השלמה".

```{image} ../images/Objective_ClearFinished.png
:alt: Go back in objectives
```

## משימות ב- AndroidAPS לפני גרסה 3.0

משימה אחת הוסרה כאשר AndroidAPS 3.0 שוחרר.  משתמשי AndroidAPS גרסה 2.8.2.1 המשתמשים בגרסת אנדרואיד ישנה יותר (כלומר גרסה 9 ומטה) יעברו את המשימות הישנות, השונות מהמתואר בדף זה. לפרטים על המשימות הישנות לחצו [כאן](../Usage/Objectives_old.md).
