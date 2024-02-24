# משימות

AAPS has a series of Objectives that need to be completed to walk you through the features and settings of safe looping.  המשימות נועדו להבטיח שהגדרתם כראוי את כל מה שתואר בפרקים הקודמים ושאתם מבינים מה המערכת עושה ולמה, כדי שתוכלו לבטוח בה.

If you are **upgrading phones** then you can [export your settings](../Usage/ExportImportSettings.md) to keep your progress through the objectives. Not only will your progress through the objectives be saved, but also your safety settings such as max bolus etc.  If you do not export and import your settings then you will need to start the objectives from the beginning again.  It is a good idea to [backup your settings](../Usage/ExportImportSettings.html) frequently just in case.

If you want to go back in objectives see [explanation below](Objectives-go-back-in-objectives).

## משימה 1: הגדרת ויזואליזציה, ניטור, ניתוח המינון הבזאלי והיחסים

- Select the right blood glucose source for your setup.  See [BG Source](../Configuration/BG-Source.md) for more information.
- Select the right Pump in ConfigBuilder (select Virtual Pump if you are using a pump model with no AAPS driver for looping) to ensure your pump status can communicate with AAPS.
- If using DanaR pump then ensure you have followed [DanaR Insulin Pump](../Configuration/DanaR-Insulin-Pump.md) instructions to ensure the link between pump and AAPS.
- You need to establish a data repository/reporting platform to complete this objective. That can be accomplished with either Nightscout or Tidepool (or both). Follow instructions at the [Nightscout](../Installing-AndroidAPS/Nightscout.md) or [Tidepool](../Installing-AndroidAPS/Tidepool.md) page for instructions.
- Note that URL in NSClient must be **WITHOUT /api/v1/** at the end - see [NSClient settings in Preferences](Preferences-nsclient).

*You may need to wait for the next blood glucose reading to arrive before AAPS will recognise it.*

## Objective 2: Learn how to control AAPS

- Perform several actions in AAPS as described in this objective.

- Click on the orange text "Not completed yet" to access the to-dos.

- Links will be provided to guide you in case you are not familiar with a specific action yet.

  ```{image} ../images/Objective2_V2_5.png
  :alt: Screenshot objective 2
  ```

(Objectives-objective-3-prove-your-knowledge)=

## משימה 3: הוכיחו את הידע שלכם

Objective 3 is a multiple choice test based on questions designed to test your theoretical knowledge of **AAPS**.

Some users find Objective 3 to be the most difficult objective to complete. Please do read the AAPS documents in conjunction with the questions. If you are genuinely stuck after researching the **AAPS** documents, please search or ask for help on the Facebook or Discord group. These groups can provide friendly hints or redirect you to the relevant part of the **AAPS** documents.

To proceed with Objective 3, click on the orange text “Not completed yet” to access the relevant question. Please read each question and select your answer(s).



Within each question, a hyperlink to the **AAPS** documents will guide you to the relevant section of the document which you should read in order to locate the correct answer.


[Obj3_Screenshot 2023-12-05 223422](https://github.com/openaps/AndroidAPSdocs/assets/137224335/77347516-e24e-459d-98ab-acbb49a3d4e8)![image](https://github.com/openaps/AndroidAPSdocs/assets/137224335/ca756b8e-efbc-4427-b281-ac953ce16718)



For each question, there may be more than one answer that is correct! If an incorrect answer is selected, the question will be time locked for a certain amount of time (60 minutes) before you can go back and answer the question.


After updating to a new version of **AAPS**, new questions may be added to cover a prevalent issue picked up by **AAPS** or alternatively to test your knowledge of a new feature of **AAPS** as released.


When **AAPS** is installed for the first time, you will have to complete Objective 3 entirely in order to move onto Objective 4. Each objective is required to be completed in sequential order. New features will gradually be unlocked as progress is made through the objectives.

__What happens if new questions are added later to Objective 3?__ From time to time, new features are added to **AAPS** which may require a new question to be added to Objective 3. As a result, any new question added to Objective 3 will be marked as “incomplete” because **AAPS** will require you to action this. As each Objective is independent, you will not lose the existing functionality of **AAPS** providing the other objectives remain completed.


## משימה 4: התחלת לופ פתוח

- Select Open Loop either from Preferences, or by pressing and holding the Loop button in top left of the home screen.
- Work through the [Preferences](../Configuration/Preferences.md) to set up for you.
- Manually enact at least 20 of the temporary basal rate suggestions over a period of 7 days; input them to your pump and confirm in AAPS that you have accepted them.  Ensure this data shows in AAPS and Nightscout.
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

- Start to understand the thinking behind the temp basal recommendations by looking at the [determine basal logic](https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/Understand-determine-basal.html) and both the [forecast line in AAPS homescreen](Screenshots-prediction-lines)/Nightscout and the summary of outputs from the calculations in your OpenAPS tab.

רצוי שתקבעו ערכי מטרה גבוהים מהרגיל עד אשר תבטחו בהגדרות ובחישובי הלופ.  המערכת מאפשרת

- a low target to be a minimum of 4 mmol (72 mg/dl) or maximum of 10 mmol (180 mg/dl)
- a high target to be a minimum of 5 mmol (90 mg/dl) and maximum of 15 mmol (225 mg/dl)
- a temporary target as a single value can be anywhere in the range of 4 mmol to 15 mmol (72 mg/dl to 225 mg/dl)

ערך המטרה הוא הערך עליו מבוססים החישובים והוא לא ערך הסוכר אליו אתם מתכוונים להגיע בפועל.  If your target is very wide (say, 3 or more mmol \[50 mg/dl or more\] wide), you will often find little AAPS action. זה בגלל שרמת הסוכר בדם צפויה להיות בתוך הטווח המטרה הרחב הזה ולכן לא יומלצו הרבה שינויים במינון הבזאלי.

You may want to experiment with adjusting your targets to be a closer together range (say, 1 or less mmol \[20 mg/dl or less\] wide) and observe how the behavior of your system changes as a result.

You can view a wider range (green lines) on the graph for the values you aim to keep your blood glucose within by entering different values in [Preferences](../Configuration/Preferences.md) > Range for Visualisation.

![Stop sign](../images/sign_stop.png)

### עצרו כאן אם אתם משתמשים במשאבה וירטואלית - אל תלחצו על "אמת" לסיום משימה זו.

![blank](../images/blank.png)

(Objectives-objective-6-starting-to-close-the-loop-with-low-glucose-suspend)=
## משימה 6: מתחילים לסגור לולאה עם השהיה עקב ערך סוכר נמוך

![Warning sign](../images/sign_warning.png)

### הלולאה הסגורה שבמשימה 6 לא תתקן ערכי סוכר גבוהים כי היא מוגבלת להפסקת הזרקת אינסולין כתיקון לסוכר נמוך. עליכם לתקן סוכר גבוה ידנית בעצמכם!

- Prerequisite: You need a good profile (basal, ISF, IC) already working in AAPS to start with Loop in Low Glucose Suspend mode. Otherwise you can run in a hypo which you have to manually correct. This will help you a lot to avoid having to treat a low glucose over a period of 5 days. **If you are still having frequent or severe low glucose episodes then consider refining your DIA, basal, ISF and carb ratios and do NOT start objective 6 at this time.**
- You don't have to change your settings now. During objective 6, the maxIOB setting is internally set to zero automatically. **This override will be reversed when moving to objective 7.**
- The system will override your maxIOB settings to zero, which means if blood glucose is dropping it can reduce basal for you. If blood glucose is rising then it will only increase basal if the basal IOB is negative from a previous Low Glucose Suspend. Otherwise basal rates will remain the same as your selected profile. **That means that you have to manually handle high values with insulin corrections.**
- If your basal IOB is negative (see screenshot below) a TBR > 100% can be issued also in objective 6.

![Example negative IOB](../images/Objective6_negIOB.png)

- Set your target range slightly higher than you usually aim for, just to be safe and have a bit more scurity buffer.
- Enable 'Low Glucose Suspend' mode either by by pressing and holding the Loop icon at the top right corner of the home screen and selecting the Loop - LGS mode icon.
- Watch how temporary basals are active by viewing the blue basal text on the homescreen or the blue basal render on the homescreen graph.
- ייתכן שתחוו קפיצות בסוכר לאחר טיפול בהיפוגליקמיות באופן זמני בגלל שאין עליה במינון הבזאלי לאחר היציאה מהיפוגליקמיה.

(Objectives-objective-7-tuning-the-closed-loop-raising-max-iob-above-0-and-gradually-lowering-bg-targets)=
## משימה 7: כוונון לולאה סגורה, העלאת האינסולין הפעיל המרבי מ-0 והורדה מדורגת של ערכי המטרה

- Select 'Closed Loop' either from [Preferences](../Configuration/Preferences.md) or by pressing and holding the Loop icon at the top right corner of the home screen, over a period of 1 day.

- העלו את 'מינון אינסולין פעיל מרבי ממנו OpenAPS לא יחרוג' (נקרא גם 'max-IOB' ב-OpenAPS) ליותר מ-0 במשך יממה אחת. המלצת ברירת המחדל היא X3 המינון הבזאלי המקסימלי (עבור אלגוריתם AMA הישן, שנמצא בשימוש של משתמשים חדשים) או X3 המינון הבזאלי המקסימלי + בולוס ארוחה ממוצע (עבור אלגוריתם SMB). עליכם להתקדם אל ערך זה באופן מדורג עד שהגדרה זו עובדת היטב. מינון בזאלי מקסימלי = המינון הבזאלי המרבי שניתן בכל שעה שהיא ביממה.

  המלצה זו היא נקודת התחלה. אם הגדרתם X3 בזאלי מרבי ואתם חווים תגובות חריפות ומהירות ברמת הסוכר, הורידו את ערך. אם יש לכם תנגודת גבוהה, הגדילו את הערך בעדינות ובאופן מדורג.

  ```{image} ../images/MaxDailyBasal2.png
  :alt: max daily basal
  ```

- כאשר תרגישו שערך האינסולין הפעיל מתאים לפעולת הלופ שלכם, הורידו את ערכי מטרה שלכם כרצונכם.

(Objectives-objective-8-adjust-basals-and-ratios-if-needed-and-then-enable-autosens)=
## משימה 8: התאמת המינון בזאלי והיחסים במקרה הצורך ולאחר מכן הפעלת Autosens

- תוכלו להשתמש ב-[autotune](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autotune.html) באופן חד פעמי לבדיקת השינוי במינון הבזאלי או שתעשו בדיקת בזאלי מסורתית.
- Enable [autosens](../Usage/Open-APS-features.md) over a period of 7 days and watch the white line on the homescreen graph show how your sensitivity to insulin may be rising or falling as a result of exercise or hormones etc. and keep an eye in the OpenAPS report tab how AAPS is adjusting the basals and/or targets accordingly.

*Don’t forget to record your looping in* [this form](https://bit.ly/nowlooping) *logging AAPS as your type of DIY loop software, if you have not already done so.*

(Objectives-objective-9-enabling-additional-oref1-features-for-daytime-use-such-as-super-micro-bolus-smb)=
## משימה 9: אפשרו פונקציות oref1 כגון סופר מיקרובולוס (SMB), בשעות היום

- חובה עליכם לקרוא את [הפרק על SMB באתר הויקי](Open-APS-features-super-micro-bolus-smb) ואת [פרק oref1 באתר openAPSdocs](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/oref1.html) כדי להבין כיצד SMB פועל ובמיוחד כיצד פועל איפוס בזאלי זמני.
- Then you ought to [rise maxIOB](Open-APS-features-maximum-total-iob-openaps-cant-go-over-openaps-max-iob) to get SMBs working fine. מעכשיו, האינסולין הפעיל המרבי כולל את כל האינסולין המוזרק, לא רק בזאלי. כלומר, אם תתנו בולוס בגודל 8 יחידות על ארוחה והאינסולין הפעיל המרבי הוא 7 יחידות, הלופ לא יזריק SMB לפני שהאינסולין שבגוף ירד אל מתחת ל-7 יחידות. אפשר להעריך את ערך האינסולין הפעיל המרבי עם החישוב: בולוס ארוחה ממוצע + X3 ערך הבזאלי המרבי שיש ביממה - ראו איור ב[משימה 7](Objectives-objective-7-tuning-the-closed-loop-raising-max-iob-above-0-and-gradually-lowering-bg-targets)
- ערך ברירת המחדל של min_5m_carbimpact בהגדרות הספיגה השתנו מ-3 ל-8 במעבר מ-AMA ל-SMB. אם אתם עוברים מ-AMA ל-SMB, עליכם לעדכן זאת ידנית.

(Objectives-objective-10-automation)=
## משימה 10: אוטומציות

- You have to start objective 10 to be able to use [Automation](../Usage/Automation.md).
- Make sure you have completed all objectives including exam [Objectives-objective-3-prove-your-knowledge](Objectives#objective-3-prove-your-knowledge).
- סיום משימות קודמות לא ישפיע על משימות שאותן כבר השלמתם. המשימות שכבר הושלמו יישמרו כך!

(Objectives-objective-11-DynamicISF)=
## Objective 11: Additional Features such as DynamicISF

- You have to start objective 11 to be able to use [DynamicISF](../Usage/Open-APS-features.md)

(Objectives-go-back-in-objectives)=
## חזרה על משימות

אם ברצונכם לחזור על משימה מכל סיבה שהיא, ניתן לעשות זאת ע"י לחיצה על "ביטול השלמה".

![Go back in objectives](../images/Objective_ClearFinished.png)

## משימות ב- AndroidAPS לפני גרסה 3.0

מטרה אחת הוסרה כאשר AndroidAPS 3.0 שוחרר.  Users of Android APS version 2.8.2.1 who are on older Android software (i.e. earlier than version 9) will be using an older set of objectives which can be found [here](../Usage/Objectives_old.md).
