# משימות של AndroidAPS 2.8.2.1

זו אינה הגרסה העדכנית ביותר של משימות AndroidAPS.  דף זה מפרט את המשימות שהיו קיימות לפני גרסה 3.0.  Anyone using an older version of Android (i.e. prior to Android 9) and Android APS version 2.8.2.1 should refer to this page.

Please see [this page](../Usage/Objectives.md) for the current set of Objectives.

ל-AndroidAPS מספר משימות שנועדו ללמד אתכם את ההגדרות ואת היכולות של לופ, באופן בטיחותי.  המשימות נועדו להבטיח שהגדרתם כראוי את כל מה שתואר בפרקים הקודמים ושאתם מבינים מה המערכת עושה ולמה, כדי שתוכלו לבטוח בה.

If you are **upgrading phones** then you can [export your settings](../Usage/ExportImportSettings.md) to keep your progress through the objectives. Not only will your progress through the objectives be saved, but also your safety settings such as max bolus etc.  If you do not export and import your settings then you will need to start the objectives from the beginning again.  It is a good idea to [backup your settings](../Usage/ExportImportSettings.html) frequently just in case.

If you want to go back in objectives see [explanation below](../Usage/Objectives.md#go-back-in-objectives).

## משימה 1: הגדרת ויזואליזציה, ניטור, ניתוח המינון הבזאלי והיחסים

- Select the right blood glucose source for your setup.  See [BG Source](../Configuration/BG-Source.md) for more information.
- Select the right Pump in ConfigBuilder (select Virtual Pump if you are using a pump model with no AndroidAPS driver for looping) to ensure your pump status can communicate with AndroidAPS.
- If using DanaR pump then ensure you have followed [DanaR Insulin Pump](../Configuration/DanaR-Insulin-Pump.md) instructions to ensure the link between pump and AndroidAPS.
- Follow instructions in [Nightscout](../Installing-AndroidAPS/Nightscout.md) page to ensure Nightscout can receive and display this data.
- Note that URL in NSClient must be **WITHOUT /api/v1/** at the end - see [NSClient settings in Preferences](../Configuration/Preferences.md#nsclient).

*You may need to wait for the next blood glucose reading to arrive before AndroidAPS will recognise it.*

## משימה 2: למדו כיצד לשלוט בממשק AndoridAPS

- Perform several actions in AndroidAPS as described in this objective.

- Click on the orange text "Not completed yet" to access the to-dos.

- Links will be provided to guide you in case you are not familiar with a specific action yet.

  ```{image} ../images/Objective2_V2_5.png
  :alt: Screenshot objective 2
  ```

## משימה 3: הוכיחו את הידע שלכם

- Pass a multiple-choice exam testing your AndroidAPS knowledge.

- Click on the orange text "Not completed yet" to access the page with the question and answering options.

  ```{image} ../images/Objective3_V2_5.png
  :alt: Screenshot objective 3
  ```

- Links will be provided to guide you in case you are unsure about the correct answers yet.

- The questions for objective 3 have been completely rewritten by native speakers as of AAPS 2.8. השאלות החדשות מכסות את אותם נושאים בסיסיים בתוספת מספר נושאים נוספים.

- These new questions will lead to some not answered questions even though you have successfully completed objective 3 in previous versions.

- Unanswered questions will affect you only if you start a new objective. או במילים אחרות: אם סיימתם את כבר סיימתם את כל המשימות, תוכלו להמתין ולענות על השאלות החדשות אחר כך ללא איבוד פונקציות AAPS שבמשימות מאוחרות יותר.

## משימה 4: התחלת לופ פתוח

- Select Open Loop either from Preferences, or by pressing and holding the Loop button in top left of the home screen.
- Work through the [Preferences](../Configuration/Preferences.md) to set up for you.
- Manually enact at least 20 of the temporary basal rate suggestions over a period of 7 days; input them to your pump and confirm in AndroidAPS that you have accepted them.  וודאו ששינוי המינון נרשם ב-AndroidAPS וגם ב-Nightscout.
- Enable [temp targets](../Usage/temptarget.md) if necessary. הפעילו ערך מטרה זמני היפו כדי למנוע מהמערכת לתקן ביתר עליות ברמת הסוכר בעת יציאה מהיפוגליקמיה.

### צמצום מספר התראות הלולאה הפתוחה

- To reduce the Number of decisions to be made while in Open Loop set wide target range like 90 - 150 mg/dl or 5,0 - 8,5 mmol/l.

- You might even want to wider upper limit (or disable Open Loop) at night.

- In Preferences you can set a minimum percentage for suggestion of basal rate change.

  ```{image} ../images/OpenLoop_MinimalRequestChange2.png
  :alt: Open Loop minimal request change
  ```

- Also, you do not need to act every 5 minutes on all suggestions...

## משימה 5: העמקת הבנת הלולאה הפתוחה, לרבות המינונים הבזאליים הזמניים וההמלצות

- Start to understand the thinking behind the temp basal recommendations by looking at the [determine basal logic](https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/Understand-determine-basal.html) and both the [forecast line in AndroidAPS homescreen](../Getting-Started/Screenshots.md#prediction-lines)/Nightscout and the summary of outputs from the calculations in your OpenAPS tab.

רצוי שתקבעו ערכי מטרה גבוהים מהרגיל עד אשר תבטחו בהגדרות ובחישובי הלופ.  המערכת מאפשרת

- a low target to be a minimum of 4 mmol (72 mg/dl) or maximum of 10 mmol (180 mg/dl)
- a high target to be a minimum of 5 mmol (90 mg/dl) and maximum of 15 mmol (225 mg/dl)
- a temporary target as a single value can be anywhere in the range of 4 mmol to 15 mmol (72 mg/dl to 225 mg/dl)

ערך המטרה הוא הערך עליו מבוססים החישובים והוא לא ערך הסוכר אליו אתם מתכוונים להגיע בפועל.  If your target is very wide (say, 3 or more mmol \[50 mg/dl or more\] wide), you will often find little AAPS action. זה בגלל שרמת הסוכר בדם צפויה להיות בתוך הטווח המטרה הרחב הזה ולכן לא יומלצו הרבה שינויים במינון הבזאלי.

You may want to experiment with adjusting your targets to be a closer together range (say, 1 or less mmol \[20 mg/dl or less\] wide) and observe how the behavior of your system changes as a result.

You can view a wider range (green lines) on the graph for the values you aim to keep your blood glucose within by entering different values in [Preferences](../Configuration/Preferences.md) > Range for Visualisation.

```{image} ../images/sign_stop.png
:alt: Stop sign
```

### עצרו כאן אם אתם משתמשים במשאבה וירטואלית - אל תלחצו על "אמת" לסיום משימה זו.

```{image} ../images/blank.png
:alt: blank
```

## משימה 6: מתחילים לסגור לולאה עם השהיה עקב ערך סוכר נמוך

```{image} ../images/sign_warning.png
:alt: Warning sign
```

### הלולאה הסגורה שבמשימה 6 לא תתקן ערכי סוכר גבוהים כי היא מוגבלת להפסקת הזרקת אינסולין כתיקון לסוכר נמוך. עליכם לתקן סוכר גבוה ידנית בעצמכם!

- Select Closed Loop either from [Preferences](../Configuration/Preferences.md) or by pressing and holding the Open Loop button in the top left of the home screen.

- Set your target range slightly higher than you usually aim for, just to be safe.

- Watch  how temporary basals are active by viewing the blue basal text on the homescreen or the blue basal render on the homescreen graph.

- Ensure your settings have supported AndroidAPS to avoid having to treat a low glucose over a period of 5 days.  אם אתם עדיין חווים היפוגליקמיות תכופות, שקלו לבצע שינויים ב-DIA, במינונים הבזאליים, ביחס הפחמימות וביחס התיקון.

- You don't have to change your settings. לאורך משימה 6, ערכו של maxIOB מוגדר כ-0 מאחורי הקלעים באופן אוטומטי. הגדרה זו תבוטל לאחר התחלת משימה 7.

- The system will override your maxIOB settings to zero, which means if blood glucose is dropping it can reduce basal for you, but if blood glucose is rising then it will only increase basal if the basal IOB is negative (from a previous Low Glucose Suspend), otherwise basal rates will remain the same as your selected profile.

  ```{image} ../images/Objective6_negIOB.png
  :alt: Example negative IOB
  ```

- If your basal IOB is negative (see screenshot above) a TBR > 100% can be issued also in objective 6.

- ייתכן שתחוו קפיצות בסוכר לאחר טיפול בהיפוגליקמיות באופן זמני בגלל שאין עליה במינון הבזאלי לאחר היציאה מהיפוגליקמיה.

## משימה 7: כוונון לולאה סגורה, העלאת האינסולין הפעיל המרבי מ-0 והורדה מדורגת של ערכי המטרה

- Raise your 'Maximum total IOB OpenAPS can’t go over' (in OpenAPS called 'max-iob') above 0 over a period of 1 day, the default recommendation is "average mealbolus + 3x max daily basal"(for SMB algorithm) or "3x max daily basal" (for older AMA algorithm) but you should slowly work up to this until you know your settings work for you (max daily basal = the maximum hourly value in any time segment of the day).

  המלצה זו היא נקודת התחלה. אם הגדרתם X3 בזאלי מרבי ואתם חווים תגובות חריפות ומהירות ברמת הסוכר, הורידו את ערך. אם יש לכם תנגודת גבוהה, הגדילו את הערך בעדינות ובאופן מדורג.

  ```{image} ../images/MaxDailyBasal2.png
  :alt: max daily basal
  ```

- Once confident on how much IOB suits your looping patterns then reduce your targets to your desired level.

## משימה 8: התאמת המינון בזאלי והיחסים במקרה הצורך ולאחר מכן הפעלת Autosens

- You can use [autotune](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autotune.html) as a one off to check your basals remain accurate or do a traditional basal test.
- Enable [autosens](../Usage/Open-APS-features.md) over a period of 7 days and watch the white line on the homescreen graph show how your sensitivity to insulin may be rising or falling as a result of exercise or hormones etc. and keep an eye in the OpenAPS report tab how AndroidAPS is adjusting the basals and/or targets accordingly.

*Don’t forget to record your looping in* [this form](https://bit.ly/nowlooping) *logging AndroidAPS as your type of DIY loop software, if you have not already done so.*

## משימה 9: ניסוי פונקציות נוספות של הלופ בשעות היום וצבירת ביטחון במערכת הלופ

- Before AAPS version 2.7 meal assist (MA) was the basic algorithm for AAPS and completing objective 8 was necessary to activate [advanced meal assist (AMA)](../Usage/Open-APS-features.md#advanced-meal-assist-ama).
- As [advanced meal assist (AMA)](../Usage/Open-APS-features.md#advanced-meal-assist-ama) is the standard algorithm from AAPS version 2.7 onwards use the following 28 days to try features you haven't used yet and get more confident with you closed loop system.

## משימה 10: אפשרו פונקציות oref1 כגון סופר מיקרובולוס (SMB), בשעות היום

- You must read the [SMB chapter in this wiki](../Usage/Open-APS-features.md#super-micro-bolus-smb) and [chapter oref1 in openAPSdocs](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/oref1.html) to understand how SMB works, especially what's the idea behind zero-temping.
- Then you ought to [rise maxIOB](../Usage/Open-APS-features.md#maximum-total-iob-openaps-cant-go-over-openaps-max-iob) to get SMBs working fine. מעכשיו, האינסולין הפעיל המרבי כולל את כל האינסולין המוזרק, לא רק בזאלי. That is, if given a bolus of 8 U for a meal and maxIOB is 7 U, no SMBs will be delivered until IOB drops below 7 U. A good start is maxIOB = average mealbolus + 3x max daily basal (max daily basal = the maximum hourly value in any time segment of the day - see [objective 7](../Usage/Objectives#objective-7-tuning-the-closed-loop-raising-max-iob-above-0-and-gradually-lowering-bg-targets) for an illustration)
- min_5m_carbimpact default in absorption settings has changed from 3 to 8 going from AMA to SMB. אם אתם עוברים מ-AMA ל-SMB, עליכם לעדכן זאת ידנית.

## משימה 11: אוטומציות

- You have to start objective 11 to be able to use [Automation](../Usage/Automation.md).
- Make sure you have completed all objectives including exam [../Usage/Objectives.md#objective-3-prove-your-knowledge](../Usage/Objectives#objective-3-prove-your-knowledge).
- Completing previous objectives will not effect other objectives you have already finished. המשימות שכבר הושלמו יישמרו כך!

## חזרה על משימות

אם ברצונכם לחזור על משימה מכל סיבה שהיא, ניתן לעשות זאת ע"י לחיצה על "ביטול השלמה".

```{image} ../images/Objective_ClearFinished.png
:alt: Go back in objectives
```
