# משימות

ל-AndroidAPS מספר משימות שנועדו ללמד אתכם את ההגדרות ואת היכולות של לופ, באופן בטיחותי.  המשימות נועדו להבטיח שהגדרתם כראוי את כל מה שתואר בפרקים הקודמים ושאתם מבינים מה המערכת עושה ולמה, כדי שתוכלו לבטוח בה.

אם אתם **משדרגים טלפונים**, תוכלו [לייצא את הגדרותיכם](../Usage/ExportImportSettings.md) ע"מ לשמור את התקדמותכם במשימות. לא רק שהתקמותכם במשימות תישמר, גם הגדרות הבטיחות כגון בולוס מקסימלי וכו'.  אם לא תייצאו ותייבאו את הגדרותיכם אתם תהיו חייבים להתחיל את המשימות מההתחלה.  יהיה זה רעיון טוב [לגבות את הגדרותיכם](../Usage/ExportImportSettings.html) לעיתים קרובות ליתר ביטחון.

אם ברצונכם לחזור אחורה במשימות, ראו את [ההסבר מטה](../Usage/Objectives#go-back-in-objectives).

## משימה 1: הגדרת ויזואליזציה, ניטור, ניתוח המינון הבזאלי והיחסים

- בחרו את מקור נתוני רמת הסוכר המתאים למערכת שלכם.  ראו [מקור נתוני סוכר](../Configuration/BG-Source.md) לפרטים נוספים.
- בחרו את המשאבה הנכונה לגביכם בבונה התצורה (בחרו במשאבה וירטואלית אם אתם משתמשים במשאבה שלה אין התאמה ל-) ע"מ להבטיח שהמשאבה תקושר ל-AndroidAPS.
- אם משתמשים במשאבת DanaR וודאו שקראתם את הוראות [משאבת DanaR](../Configuration/DanaR-Insulin-Pump.md) כדי להבטיח את חיבור המשאבה ל-AndroidAPS.
- עקבו אחר הוראות [נייטסקאוט](../Installing-AndroidAPS/Nightscout.md) כדי לוודא שנייטסקאוט מקבל ומציג את הנתונים.
- שימו לב שכתובת אתר הנייטסקאוט שב-NSClient **חייב להיות ללא הסיומת /api/v1/** - ראו [הגדרות NSClient בהעדפות](../Configuration/Preferences#nsclient).
- ייתכן שתצטרכו להמתין עד למדידת הסוכר הבאה כדי שתזוהה ע"י AndroidAPS.\*

## משימה 2: למדו כיצד לשלוט בממשק AndoridAPS

- בצעו מספר פעולות ב-AndroidAPS כמתואר במשימה זו.

- לחצו על הטקסט הכתום "עוד לא הושלם" כדי לפתוח את סעיפי המשימה.

- מצורפים קישורים על מנת להדריך אתכם בביצוע הסעיפים.

  ```{image} ../images/Objective2_V2_5.png
  :alt: Screenshot objective 2
  ```

## משימה 3: הוכיחו את הידע שלכם

- היבחנו במבחן אמריקאי שיבדוק את ידיעתכם ב-AndroidAPS.

- לחצו על הטקסט הכתום "עוד לא הושלם" על מנת לפתוח את השאלה ולענות עליה.

  ```{image} ../images/Objective3_V2_5.png
  :alt: Screenshot objective 3
  ```

- מצורפים קישורים על ללמדכם את התשובה אם אתם עוד לא יודעים אותה.

- השאלות שבמשימה 3 שוכתבו לחלוטין ע"י דוברי שפת אם החל מגרסת AAPS 2.8. השאלות החדשות מכסות את אותם נושאים בסיסיים בתוספת מספר נושאים נוספים.

- שאלות משוכתבות אלה יגרמו לכך שתהיה תוספת של מספר שאלות שלא נענו למרות סיום המשימה בגרסאות קודמות.

- שאלות שלא נענו ישפיעו רק אם תתחילו משימה חדשה. או במילים אחרות: אם סיימתם את כבר סיימתם את כל המשימות, תוכלו להמתין ולענות על השאלות החדשות אחר כך ללא איבוד פונקציות AAPS שבמשימות מאוחרות יותר.

## משימה 4: התחלת לופ פתוח

- בחרו לולאה פתוחה בהעדפות או ע"י לחיצה ארוכה על צלמית הלופ בחלק העליון של המסך הראשי, בצד שמאל (אם שפת AAPS היא עברית).
- עברו והגדירו את [ההעדפות](../Configuration/Preferences.md) כדי להתאים את לכם את המערכת.
- הפעילו ידנית לפחות 20 שינויים זמניים במינון הבזאלי בהמלצת הלופ על פני 7 ימים; אם סוג המשאבה משאבה וירטואלית, בצעו את השינוי במשאבה ואשרו את השינוי ב-AndroidAPS.  וודאו ששינוי המינון נרשם ב-AndroidAPS וגם ב-Nightscout.

אפשרו [ערכי מטרה זמניים](../Usage/temptarget.md) במקרה הצורך. הפעילו ערך מטרה זמני היפו כדי למנוע מהמערכת לתקן ביתר עליות ברמת הסוכר בעת יציאה מהיפוגליקמיה.

### צמצום מספר התראות הלולאה הפתוחה

- על מנת לצמצם את מספר ההמלצות של הלולאה הפתוחה, הגדירו טווח ערכי מטרה רחב כמו לדוגמה 90-150 mg/dl או 5-8.5 mmol/l.
- תוכלו גם להגדיר ערך מטרה עליון גבוה עוד יותר ואף לכבות את הלופ בלילה.

בהעדפות אתם יכולים להגדיר את אחוז השינוי המינימלי לשינוי במינונים הבזאליים.

> ```{image} ../images/OpenLoop_MinimalRequestChange2.png
> :alt: Open Loop minimal request change
> ```

- זכרו שאתם לא חייבים להגיב לכל המלצה של הלופ, כל 5 דקות...

## משימה 5: העמקת הבנת הלולאה הפתוחה, לרבות המינונים הבזאליים הזמניים וההמלצות

- התחילו לנסות להבין את המחשבה שמאחורי המלצת המינון הבזאלי הזמני ע"י קריאת [לוגיקת קביעת מינון בזאלי](https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/Understand-determine-basal.html) , את [עקום התחזית במסך הבית](../Getting-Started/Screenshots#prediction-lines) או בנייטסקאוט ואת סיכום הפלטים של החישובים המופיעים בכרטיסיית OpenAPS.

רצוי שתקבעו ערכי מטרה גבוהים מהרגיל עד אשר תבטחו בהגדרות ובחישובי הלופ.  המערכת מאפשרת

- ערך מטרה תחתון 72 mg/dl עד 180 mg/dl
- ערך מטרה עליון 90 mg/dl עד 225 mg/dl
- ערך מטרה זמני כערך יחיד יכול להיות בטווח 72 עד 225 mg/dl

ערך המטרה הוא הערך עליו מבוססים החישובים והוא לא ערך הסוכר אליו אתם מתכוונים להגיע בפועל.  אם טווח המטרה שלכם רחב מאוד (לדוגמה טווח של 50 mg/dl), אתם תראו מעט פעילות של AAPS. זה בגלל שרמת הסוכר בדם צפויה להיות בתוך הטווח המטרה הרחב הזה ולכן לא יומלצו הרבה שינויים במינון הבזאלי.

ייתכן שתרצו להתנסות בכיוונונים של ערכי המטרה להקטנת טווח המטרה (20 mg/dl ואף פחות) ולצפות בהתנהגות המערכת כתוצאה מכך.

תוכלו לצפות בטווח רחב יותר (עקום ירוק) בגרף עבור ערכי סוכר בהם אתם מעוניינים ע"י בחירת ערכים [בהעדפות](../Configuration/Preferences.md) > סקירה כללית > טווח הצגה.

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

### Closed loop will not correct high BG values in objective 6 as it is limited to low glucose suspend. High BG values have to be corrected manually by you!

- Prerequisite: You need a good profile (basal, ISF, IC) already working in AndroidAPS to start with Loop in Low Glucose Suspend mode. Otherwise you can run in a hypo which you have to manually correct. This will help you a lot to avoid having to treat a low glucose over a period of 5 days. **If you are still having frequent or severe low glucose episodes then consider refining your DIA, basal, ISF and carb ratios and do NOT start objective 6 at this time.**
- You don't have to change your settings now. During objective 6, the maxIOB setting is internally set to zero automatically. **This override will be reversed when moving to objective 7.**
- The system will override your maxIOB settings to zero, which means if blood glucose is dropping it can reduce basal for you. If blood glucose is rising then it will only increase basal if the basal IOB is negative from a previous Low Glucose Suspend. Otherwise basal rates will remain the same as your selected profile. **That means that you have to manually handle high values with insulin corrections.**
- If your basal IOB is negative (see screenshot below) a TBR > 100% can be issued also in objective 6.

```{image} ../images/Objective6_negIOB.png
:alt: Example negative IOB
```

- Set your target range slightly higher than you usually aim for, just to be safe and have a bit more scurity buffer.
- Enable 'Low Glucose Suspend' mode either by by pressing and holding the Loop icon at the top right corner of the home screen and selecting the Loop - LGS mode icon.
- Watch how temporary basals are active by viewing the blue basal text on the homescreen or the blue basal render on the homescreen graph.
- ייתכן שתחוו קפיצות בסוכר לאחר טיפול בהיפוגליקמיות באופן זמני בגלל שאין עליה במינון הבזאלי לאחר היציאה מהיפוגליקמיה.

## Objective 7: Tuning the closed loop, raising maxIOB above 0 and gradually lowering BG targets

- Select 'Closed Loop' either from [Preferences](../Configuration/Preferences.md) or by pressing and holding the Loop icon at the top right corner of the home screen, over a period of 1 day.

- Raise your 'Maximum total IOB OpenAPS can’t go over' (in OpenAPS called 'max-iob') above 0. The default recommendation is "average mealbolus + 3x max daily basal" (for the SMB algorithm) or "3x max daily basal" (for the older AMA algorithm) but you should slowly work up to this until you know your settings work for you (max daily basal = the maximum hourly value in any time segment of the day).

  המלצה זו היא נקודת התחלה. If you set to the 3x and you are seeing moves that push you too hard and fast then lower that number. If you are very resistant, raise it very little at a time.

  ```{image} ../images/MaxDailyBasal2.png
  :alt: max daily basal
  ```

- Once confident on how much IOB suits your looping patterns, then reduce your targets to your desired level.

## משימה 8: התאמת המינון בזאלי והיחסים במקרה הצורך ולאחר מכן הפעלת Autosens

תוכלו להשתמש ב-[autotune](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autotune.html) באופן חד פעמי לבדיקת השינוי במינון הבזאלי או שתעשו בדיקת בזאלי מסורתית.
\* הפעילו [autosens](../Usage/Open-APS-features.md) במשך 7 ימים וצפו בהתנהגות עקום הרגישות הלבן בגרף במסך הבית (גרף משני) כתוצאה משינויים הורמונליים, פעילות גופנית וכו'. שימו עין על כרטיסיית OpenAPS לצפייה בויסות המינון הבזאלי ואו ערכי המטרה.

*אל תשכחו לרשום את עצמכם \*\`בטופס הזה \<https://bit.ly/nowlooping>\`\_* לרישום סוג הלופ שלכם כ-AndroidAPS אם טרם עשיתם זאת.\*

## משימה 9: אפשרו פונקציות oref1 כגון סופר מיקרובולוס (SMB), בשעות היום

- חובה עליכם לקרוא את [הפרק על SMB באתר הבא](../Usage/Open-APS-features#super-micro-bolus-smb) ואת פרק [oref1 באתר openAPSdocs](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/oref1.html) כדי להבין כיצד SMB פועל ובמיוחד כיצד פועל איפוס בזאלי זמני.
- לאחר מכן, עליכם [להעלות את האינסולין הפעיל המרבי (maxIOB)](../Usage/Open-APS-features#maximum-total-iob-openaps-cant-go-over-openaps-max-iob) כדי לאפשר ל-SMB לתפקד כראוי. מעכשיו, האינסולין הפעיל המרבי כולל את כל האינסולין המוזרק, לא רק בזאלי. כלומר, אם תתנו בולוס בגודל 8 יחידות על ארוחה והאינסולין הפעיל המרבי הוא 7 יחידות, הלופ לא יזריק SMB לפני שהאינסולין שבגוף ירד אל מתחת ל-7 יחידות. אפשר להעריך את ערך האינסולין הפעיל המרבי עם החישוב: בולוס ארוחה ממוצע + X3 ערך הבזאלי המרבי שיש ביממה - ראו איור ב\`משימה 7 \<../Usage/Objectives.md#objective-7-tuning-the-closed-loop-raising-max-iob-above-0-and-gradually-lowering-bg-targets>\`\_
- ערך ברירת המחדל של min_5m_carbimpact בהגדרות הספיגה השתנו מ-3 ל-8 במעבר מ-AMA ל-SMB. אם אתם עוברים מ-AMA ל-SMB, עליכם לעדכן זאת ידנית.

## משימה 10: אוטומציות

- עליכם להתחיל את משימה 10 כדי להשתמש [באוטומציות](../Usage/Automation.md).
- וודאו שסיימתם את כל המשימות הקודמות, כולל כל השאלות [שבמשימה 3](../Usage/Objectives#objective-3-prove-your-knowledge).
- סיום משימות קודמות לא ישפיע על משימות שאותן כבר השלמתם. המשימות שכבר הושלמו יישמרו כך!

## חזרה על משימות

אם ברצונכם לחזור על משימה מכל סיבה שהיא, ניתן לעשות זאת ע"י לחיצה על "ביטול השלמה".

```{image} ../images/Objective_ClearFinished.png
:alt: Go back in objectives
```

## משימות ב- AndroidAPS לפני גרסה 3.0

מטרה אחת הוסרה כאשר AndroidAPS 3.0 שוחרר.  משתמשי AndroidAPS גרסה 2.8.2.1 המשתמשים בגרסת אנדרואיד ישנה יותר (כלומר לפני גרסה 9) יצטרכו לכעמוד במשימות הישנות שאפשר לקרוא עליהן [כאן](../Usage/Objectives_old.md).
