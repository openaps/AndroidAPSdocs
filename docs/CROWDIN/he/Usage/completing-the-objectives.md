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

בסך הכל **המשימות** לוקחות 6 שבועות בערך (להרחבה ראו [כמה זמן זה ייקח?](preparing-how-long-will-it-take?) ) מהתקנת **AAPS** במכשירכם ועד הפעלת לולאה סגורה "בסיסית" היברידית (ממשימה 1 עד 8), כך שעל אף ש_ניתן_ להתקדם עד **משימה 5** באמצעות **משאבה וירטואלית** (ובאמצעות שימוש בשיטה אחרת של מתן אינסולין בינתיים), עדיין רצוי מאוד להימנע מהצורך להשלים מחדש את כל **המשימות** כי למשל, איבדתם את הסמארטפון.

בנוסף להתקדמות **במשימות**, אם תרצו, ניתן לבטל את ההתקדמות ו[לחזור על משימות קודמות](Objectives-go-back-in-objectives).

## משימה 1: הגדרת ויזואליזציה, ניטור, ניתוח המינון הבזאלי והיחסים

- **AAPS** בודק אם התצורה הטכנית הבסיסית שלכם עובדת.

אם היא לא עובדת, עליכם להגדירה מחדש עד שתפעל כראוי.

- בחרו את החיישן שלכם ב-[בונה התצורה](../Configuration/Config-Builder.md).  ראו [מקור נתוני סוכר](../Configuration/BG-Source.md) לפרטים נוספים.
- בחרו את המשאבה הנכונה ב[בונה התצורה](../Configuration/Config-Builder.md) כדי להבטיח שהמשאבה שלכם תוכל לתקשר עם AAPS. בחרו **משאבה וירטואלית** אם אתם משתמשים בדגם משאבה שבו **AAPS** אינו תומך, או אם ברצונכם לעבוד על **המשימות** הראשונות תוך שימוש במערכת אחרת למתן אינסולין. ראו [משאבת אינסולין](../Getting-Started/Pump-Choices.md) למידע נוסף.
- עקבו אחר הוראות [נייטסקאוט](../Installing-AndroidAPS/Nightscout.md) כדי לוודא ש-**Nightscout** מקבל ומציג את הנתונים.
- שימו לב שכתובת אתר הנייטסקאוט שב-NSClient **חייב להיות ללא הסיומת /api/v1/** - ראו [הגדרות NSClient בהעדפות](Preferences-nsclient).

שימו לב - _ייתכן שתצטרכו לחכות לקריאת הסוכר הבאה שתגיע כל מנת ש-**AAPS** יזהה אותה._

## משימה 2: לימדו כיצד לשלוט בממשק AndoridAPS

- בצעו מספר פעולות ב-**AndroidAPS** כמתואר במשימה **זו**.
- לחצו על הטקסט הכתום "עוד לא הושלם" כדי לפתוח את סעיפי המשימה.
- מצורפים קישורים על מנת להדריך אתכם בביצוע הסעיפים.

  ![Screenshot objective 2](../images/Objective2_V2_5.png)
- הפעולות להשלמת **משימה 2** הן:
  - להגדיר פרופיל זמני של 90% למשך 10 דקות (_רמז_: לחצו לחיצה ארוכה על שם הפרופיל במסך ראשי) (_הערה_: AAPS אינו מקבל מינונים בזאליים הנמוכים מ-0.05 יח'\שעה. אם הפרופיל כולל מינונים של 0.06 יח'\שעה ומטה, תצטרכו ליצור פרופיל חדש עם מינונים גבוהים יותר לצורך השלמת משימה זו. עברו חזרה לפרופיל הרגיל שלכם לאחר השלמת משימה זו.)
  - הדמיית "מקלחת" על ידי ניתוק המשאבה ב-**AAPS** למשך שעה אחת (_רמז_: לחצו על סמל הלולאה במסך הבית כדי לפתוח את תיבת הדו-שיח של הלולאה)
  - סיימו "להתקלח" על ידי חיבור מחדש של המשאבה (_רמז_: לחצו על הסמל "מנותק" האפור כדי לפתוח את תיבת הדו-שיח של הלולאה)
  - צרו ערך מטרה זמני מותאם אישית עם משך זמן של 10 דקות (_רמז_: לחצו על כפתור ערך המטרה במסך OVERVIEW כדי להעלות את תיבת הדו-שיח של ערך המטרה הזמני)
  - הפעלת מסך **פעולות** ב**בונה התצורה** כדי שיופיע בשורת התפריט העליונה הניתנת לגלילה הצידה (_רמז_: ב**בונה התצורה** גללו מטה אל "כללי")
  - הצגת תוכן של התוסף **לולאה** (סימון V בתיבה המסומנת בעין)
  - שינוי קנה המידה של גרף רמת הסוכר כדי לראות מסגרות זמן גדולות או קטנות יותר: מעבר בין 6 שעות, 12 שעות, 18 שעות ו-24 שעות של נתוני עבר (_רמז_: לחצו לחיצות ארוכות על הגרף)

(Objectives-objective-3-prove-your-knowledge)=

## משימה 3: הוכיחו את הידע שלכם

- היבחנו במבחן אמריקאי שיבדוק את ידיעתכם ב-AndroidAPS.

חלק מהמשתמשים רואים המשימה 3 כמשימה הקשה ביותר. חובה לקרוא את מסמכי AAPS יחד עם השאלות. אם אתם באמת תקועים לאחר קריאה מעמיקה במסמכי **AAPS**, חפשו "Objective 3" בקבוצות ה- Facebook או Discord של AAPS (סביר מאוד שכבר דנו בשאלתכם בעבר). אם אתם עדיין תקועים לאחר קריאת מסמכי **AAPS**, שאלו את שאלתכם בקבוצות ה-Facebook או Discord של AAPS. קבוצות אלה יכולות לספק רמזים או להפנות אתכם לחלק הרלוונטי במסמכי AAPS.

כדי לבצע את המשימה, לחצו על הטקסט הכתום "עדיין לא הושלם" כדי לגשת לשאלה הרלוונטית. יש לקרוא את השאלות ולבחור את תשובותיכם.

- על מנת לצמצם את מספר ההמלצות של הלולאה הפתוחה, הגדירו טווח ערכי מטרה רחב כמו לדוגמה 90-150 mg/dl או 5-8.5 mmol/l.

- תוכלו גם להגדיר ערך מטרה עליון גבוה עוד יותר ואף לכבות את הלופ בלילה.

לכל שאלה עשויה להיות יותר מתשובה אחת נכונה! אם נבחרה תשובה שגויה, השאלה תינעל למשך 60 דקות ובתומן תוכלו לחזור ולענות עליה. שימו לב שייתכן שסדר התשובות ישתנה כאשר תנסו לענות שוב, זאת כדי לוודא שאתם קוראים אותן בעיון ובאמת מבינים תוכנו כל משפט.

כאשר AAPS מותקן בפעם הראשונה, תצטרכו להשלים את **משימה 3** בכללותה כדי לעבור הלאה ל**משימה 4**. ניתן לסיים משימה רק אם כל המשימות הקודמות לה מושלמות. תכונות חדשות יפתחו בהדרגה ככל שתתקדם דרך היעדים.

:::{admonition}  **מה קורה אם שאלות חדשות מתווספות למשימה כאשר אני מעדכן לגרסה חדשה יותר של AAPS?**
:class: Note
מעת לעת, תכונות חדשות מתווספות ל-**AAPS**, העשויות לדרוש הוספת שאלה חדשה למשימות, במיוחד משימה 3. לכן, כל שאלה חדשה שתתווסף למשימה 3 תסומן כ"לא הושלמה" ויהיה עליכם לענות עליה. מכיוון שכל משימה היא עצמאית, לא תאבדו את הפונקציונליות הקיימת של AAPS בתנאי שהמשימות האחרות מושלמות.
:::

## משימה 4: התחלת לופ פתוח

מטרת משימה זו היא לזהות באיזו תדירות **AAPS** יעריך את השפעת המינון הבזאלי על רמות הגלוקוז ולהמליץ על שינויים זמניים במינונים. כחלק משימה זו, אתם תפעילו לולאה פתוחה בפעם הראשונה ותבצעו ידנית 20 שינויים זמניים המוצעים, במינוניים הבזאליים. בנוסף אתם תתנסו בהשפעת ברירות המחדל של המטרות הזמניות (_למשל_ עבור פעילות גופנית או טיפולים בהיפו). אם אינכם מכירים את ההגדרה של שינוי זמני במינון הבזאלי ב-**AAPS**, אנא עיינו בלשונית [פעולות](Screenshots#Screenshots-action-tab).

זמן משוער להשלמת משימה זו: **7 ימים**. חובה להמתין את זמן זה. אינכם יכולים להמשיך אל המשימה הבאה, גם אם ביצעתם כבר את כל השינויים הזמניים במינונים הבזאליים.

- בחרו בלולאה פתוחה בהעדפות או ע"י לחיצה ארוכה על סמל הלופ בחלק העליון של המסך הראשי, בצד שמאל (אם שפת AAPS היא עברית).
- כנסו ל[העדפות](../Configuration/Preferences.md) והגדירו את הלולאה (גללו מטה אל "לולאה\מצב לולאה ובחרו "לולאה פתוחה".
- אשרו באופן ידני לפחות 20 הצעות לשינוי במינון הבזאלי הזמני על פני תקופה של 7 ימים. בשימוש במשאבה וירטואלית הזינו את השינויים המוצעים במשאבה ואשרו ב-AAPS שביצעתם אותן. ודאו כי ההתאמות במינונים הבזאליים שאישרתם מופיעות ב-AAPS וב-Nightscout.
- אפשרו [ערכי מטרה זמניים](../Usage/temptarget.md) במקרה הצורך. לאחר טיפול בהיפו, השתמשו בערך מטרה היפו כדי למנוע מהמערכת לתקן ביתר על החזרה מההיפו.

### צמצום מספר התראות הלולאה הפתוחה

- על מנת לצמצם את מספר ההמלצות של הלולאה הפתוחה, הגדירו טווח ערכי מטרה רחב כמו לדוגמה 90-150 mg/dl או 5-8.5 mmol/l.
- תוכלו גם להגדיר ערך מטרה עליון גבוה עוד יותר ואף לכבות את הלופ בלילה.
- כדי לשנות את כמות ההמלצות אתם יכולים להגדיר את אחוז השינוי המינימלי הדרוש להפעלת הצעה לשינוי במינונים הבזאליים.

  ![Open Loop minimal request change](../images/OpenLoop_MinimalRequestChange2.png)

:::{admonition} אתם לא צריכים לאשר כל המלצת מהמערכת!
:class: Note
:::

(Objectives-objective-5-Understanding-your-open-loop-including-its-temp-basal-recommendations)=

## משימה 5: העמקת הבנת הלולאה הפתוחה, לרבות המינונים הבזאליים הזמניים וההמלצות

במסגרת **משימה 5** אתם תתחילו להבין כיצד מחושבות המלצות בזאליות זמניות. זה כולל את [לוגיקת קביעת מינון בזאלי](https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/Understand-determine-basal.html), ניתוח ההשפעה על ידי התבוננות [עקומי חיזוי במסך הראשי](Screenshots-prediction-lines)/Nightscout והסתכלות על חישובים מפורטים המוצגים בלשונית OPENAPS.

זמן משוער להשלמת משימה זו: 7 ימים.

משימה זו מחייבת אתכם לקבוע ולהגדיר את הערך "מינון בזאלי זמני מקסימלי" כמתואר ב-[תכונות OpenAPS](Open-APS-features#Open-APS-features-max-u-h-a-temp-basal-can-be-set-to-openaps-max-basal). ניתן להגדיר ערך זה בהעדפות > OpenAPS AMA.
יש לוודא שהגדרת בטיחות זו מוגדרת גם ב-**AAPS** וגם במשאבת האינסולין.

רצוי שתקבעו ערכי מטרה גבוהים מהרגיל עד אשר תבטחו בהגדרות ובחישובי הלופ.

**AAPS** מאפשר:

- ערך מטרה תחתון 72 mg/dl עד 180 mg/dl
- ערך מטרה עליון 90 mg/dl עד 225 mg/dl
- ערך מטרה זמני כערך יחיד יכול להיות בטווח 72 עד 225 mg/dl

ערך המטרה שלכם הוא ערך מרכזי. כל החישובים מבוססים עליו. הוא שונה מטווח יעד שאליו שואפים לשמור על ערכי הגלוקוז בדם. אם טווח המטרה שלכם רחב מאוד (לדוגמה טווח של 50 mg/dl), אתם תראו מעט פעילות של AAPS. הסיבה לכך היא שצפוי כי הגלוקוז נמצא איפשהו בטווח הרחב הזה ולכן מוצעים שינויים במינונים הבזאליים לעיתים רחוקות.

ייתכן שתרצו להתנסות בכיוונונים של ערכי המטרה להקטנת טווח המטרה (20 mg/dl ואף פחות) ולצפות בהתנהגות המערכת כתוצאה מכך.

You can adjust (widen or tighten) the graph’s green area, representing your target range, by entering different values in [Preferences](../Configuration/Preferences.md) > Overview > Range for Visualisation.

![Stop sign](../images/sign_stop.png)
:::{admonition} If you have been using a virtual pump, change to a real insulin pump now!
:class: note

If you are open looping with a virtual pump stop here. Only click verify at the end of this Objective once you have changed to using a "real" physical pump.
:::

![blank](../images/blank.png)

(Objectives-objective-6-starting-to-close-the-loop-with-low-glucose-suspend)=

## משימה 6: מתחילים לסגור לולאה עם השהיה עקב ערך סוכר נמוך

![Warning sign](../images/sign_warning.png)
:::{admonition}  Closed loop will not correct high BG values in objective 6 as it is limited to low glucose suspend only!
:class: Note
עדיין תצטרכו לתקן ערכי סוכר גבוהים בעצמכם (ידנית עם תיקונים באמצעות משאבה או עט)!
:::

As part of **Objective 6** you will close the loop and activate its Low Glucose Suspend (LGS) mode while [max IOB](Open-APS-features-maximum-total-iob-openaps-cant-go-over-openaps-max-iob) is set to zero. You have to remain in LGS mode for 5 days to complete this objective. You should use this time to check if your profile settings are accurate and don't trigger LGS events too often.

Estimated time to complete this objective: 5 days.

It's crucial that your current profile (basal, ISF, IC) is well tested before you close your loop in Low Glucose Suspend mode. Incorrect profile settings might force you into hypo situations which have be  treated manually. An accurate profile will help to avoid needing low glucose treatments during the 5 days period.

**If you still observe frequent or severe low glucose episodes consider refining your DIA, basal, ISF and carb ratios.**

During objective 6, **AAPS** will take care of setting maxIOB to zero. **This override will be reversed when moving to objective 7.**

This means that when you are on Objective 6, if sensor glucose levels are dropping, **AAPS** will reduce basal insulin delivery for you. If sensor glucose levels are rising, **AAPS** will only increase the basal rate above your profile value if basal IOB is negative as a result of from a previous Low Glucose Suspend. Otherwise, **AAPS** will not increase basal above your current profile value, even if glucose levels are rising. This caution is to avoid hypos as you are learning to use **AAPS**.

**As a consequence, you have to handle high glucose values with manual insulin bolus corrections.**

- If your basal IOB is negative (see screenshot below) a temporary basal rate (TBR) > 100% can be triggered in objective 6.

![Example negative IOB](../images/Objective6_negIOB.png)

- Set your target range slightly higher than you usually would aim at, just to be safe and to add a safety buffer.
- Enable 'Low Glucose Suspend' mode by pressing and holding the Loop icon at the top right corner of the OVERVIEW screen and selecting the Loop - LGS mode icon.
- Watch active temporary basals by looking at the turquoise basal text on the OVERVIEW screen or the turquoise basal render as part of the OVERVIEW graph.
- You may temporarily experience spikes following treated hypos without being able to increase basals on the rebound.

(Objectives-objective-7-tuning-the-closed-loop-raising-max-iob-above-0-and-gradually-lowering-bg-targets)=

## משימה 7: כוונון לולאה סגורה, העלאת האינסולין הפעיל המרבי מ-0 והורדה מדורגת של ערכי המטרה

To complete **Objective 7** you have to close your loop and raise your [maxIOB](Open-APS-features-maximum-total-iob-openaps-cant-go-over-openaps-max-iob). maxIOB was zeroed out automatically in **objective 6**. This is now reverted. **AAPS** will start to use your defined maxIOB value to correct high glucose values.

Estimated time to complete this objective: 1 day.

- Select 'Closed Loop' either from [Preferences](../Configuration/Preferences.md) or by pressing and holding the Loop icon at the top right corner of the OVERVIEW screen, over a period of 1 day.

- העלו את 'מינון אינסולין פעיל מרבי ממנו OpenAPS לא יחרוג' (נקרא גם 'max-IOB' ב-OpenAPS) ליותר מ-0 במשך יממה אחת. The default recommendation is "average mealbolus + 3x max daily basal" (for the SMB algorithm) or "3x max daily basal" (for the AMA algorithm) but you should slowly work up to this maximum until you know your settings work for you (max daily basal = the maximum hourly value in any time segment of the day).

המלצה זו היא נקודת התחלה. If you set it to the 3x and you are seeing AAPS giving too much insulin as glucose levels rise, then lower the "Maximum total IOB OpenAPS can’t go over" value. Alternatively, if you are very resistant, raise it very cautiously.

![max daily basal](../images/MaxDailyBasal2.png)

- Once confident on how much IOB suits your looping patterns, reduce your targets to your desired level.

(Objectives-objective-8-adjust-basals-and-ratios-if-needed-and-then-enable-autosens)=

## משימה 8: התאמת המינון בזאלי והיחסים במקרה הצורך ולאחר מכן הפעלת Autosens

As part of this objective you will revist your profile's performance and will use autosens functionality as an indicator for wrong settings.

זמן משוער להשלמת משימה זו: 7 ימים.

- You can use [autotune](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autotune.html) as a one off to check your basals remain accurate or do a traditional basal test.
- Enable [autosens](../Usage/Open-APS-features.md) over a period of 7 days and watch OVERVIEW's graph white line showing your insulin sensitivity rising or falling due to exercise or hormones etc. and keep an eye on the OpenAPS report tab which shows **AAPS** adjusting the basals and/or targets accordingly.

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

## Objective 11: Enabling additional features for daytime use, such as Dynamic Senstivity plugin (DynISF).

- Ensure that SMB is functioning properly
- Read the documentation concerning Dynamic ISF [here](../Usage/DynamicISF.md)
- Search the Facbook and Discord groups for discussions around Dynamic ISF and read about other users experiences and recommendations.
- Enable the **DynamicISF plugin** and identify the appropriate calibration for your body's uniqueness. It is advisable to begin with a value lower than 100% for safety reasons.

(Objectives-go-back-in-objectives)=

## חזרה על משימות

If you want to go back in **objectives** progress for whatever reason you can do so by clicking at "clear finished".

![Go back in objectives](../images/Objective_ClearFinished.png)

## משימות ב- AndroidAPS לפני גרסה 3.0

One objective was removed when **AAPS** version 3.0 was released.  Users of Android APS version 2.8.2.1 who are on older Android software (_i.e._ earlier than version 9) will be using an older set of Objectives which can be found [here](../Usage/Objectives_old.md).
