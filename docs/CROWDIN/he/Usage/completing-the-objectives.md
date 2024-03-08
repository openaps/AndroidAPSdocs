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

  ```{image} ../images/Objective2_V2_5.png
  :alt: Screenshot objective 2
  ```
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

  ```{image} ../images/OpenLoop_MinimalRequestChange2.png
  :alt: Open Loop minimal request change
  ```

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

אפשר להתאים אישית (להרחיב או להצר) את השטח הירוק של הגרף, המייצג את טווח המטרה שלכם, על ידי הזנת ערכים שונים ב[העדפות](../Configuration/Preferences.md) > טווח להצגה.

```{image} ../images/sign_stop.png
:alt: Stop sign
```

:::{admonition} אם השתמשתם במשאבה וירטואלית עד כה, שנו למשאבת אינסולין אמיתית עכשיו!

אם אתם משתמשים בלולאה פתוחה עם משאבה וירטואלית עצרו כאן. לחצו על אימות בסוף משימה זו רק לאחר שעברתם להשתמש במשאבה "אמיתית".
:::

```{image} ../images/blank.png
:alt: blank
```

(Objectives-objective-6-starting-to-close-the-loop-with-low-glucose-suspend)=

## משימה 6: מתחילים לסגור לולאה עם השהיה עקב ערך סוכר נמוך

```{image} ../images/sign_warning.png
:alt: Warning sign
```

:::{admonition}  הלולאה הסגורה שבמשימה 6 לא תתקן ערכי סוכר גבוהים כי היא מוגבלת להפסקת הזרקת אינסולין כתיקון לסוכר נמוך!
:class: Note
עדיין תצטרכו לתקן ערכי סוכר גבוהים בעצמכם (ידנית עם תיקונים באמצעות משאבה או עט)!
:::

כחלק מ**משימה 6** אתם תסגרו את הלולאה ותפעילו מצב השעייה עקב גלוקוז נמוך (LGS) בו [אינסולין פעיל מקסימלי](Open-APS-features-maximum-total-iob-openaps-cant-go-over-openaps-max-iob) מוגדר אפס. עליכם להישאר במצב LGS למשך 5 ימים כדי להשלים את משימה זו. כדאי לנצל את הזמן הזה כדי לבדוק אם הגדרות הפרופיל שלכם מדויקות ואינן מפעילות אירועי היפו לעתים קרובות מדי.

זמן משוער להשלמת משימה זו: 5 ימים.

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
- ייתכן שתחוו קפיצות בסוכר לאחר טיפול בהיפוגליקמיות באופן זמני בגלל שאין עליה במינון הבזאלי לאחר היציאה מהיפוגליקמיה.

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

זמן משוער להשלמת משימה זו: 7 ימים.

- You can use [autotune](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autotune.html) as a one off to check your basals remain accurate or do a traditional basal test.
- הפעילו autosens למשך 7 ימים וצפו בהתנהגות עקום כתוצאה משינויים הורמונליים, פעילות גופנית וכו'. עקום הרגישות הלבן נמצא הוא גרף משני במסך הבית (יש להפעילו).

(Objectives-objective-9-enabling-additional-oref1-features-for-daytime-use-such-as-super-micro-bolus-smb)=

## משימה 9: אפשרו פונקציות oref1 כגון סופר מיקרובולוס (SMB), בשעות היום

במטרה זו תתמודדו ותשתמשו ב"סופר מיקרו בולוס (SMB)" ככלי מרכזי. לאחר קריאות החובה תהיה לכם הבנה טובה של מהו SMB, איך הוא עובד, נקודת התחלה סבירה של הגדרות שימוש ב-SMB ומדוע הבזאלי מוגדר כאפס באופן זמני לאחר מתן SMB. זמן משוער להשלמת משימה זו: 28 ימים.

- [קטע SMB בתיעוד זה](Open-APS-features-super-micro-bolus-smb) ו-[oref1 ב-openAPSdocs](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/oref1.html) הם קריאת חובה כדי להבין את SMB ואת הרעיון של בזאלי זמני 0.
- לאחר מכן, עליכם [להעלות את מגבלת האינסולין הפעיל המרבי] (Open-APS-features-maximum-total-iob-openaps-cant-go-over-openaps-max-iob) כדי לאפשר ל-SMB לתפקד כראוי. מעכשיו, האינסולין הפעיל המרבי כולל את כל האינסולין המוזרק, לא רק את הבזאלי. סף זה משהה את מתן ה-SMB עד שהאינסולין הפעיל (IOB) יורד אל מתחת לערך זה (_למשל_ maxIOB מוגדר ל-7 יח' וניתן בולוס של 8 יח' לכיסוי ארוחה: הזרקת SMB יושהה ולא יינתן אלא אם IOB יורד אל מתחת ל-7 יח'). אפשר להעריך את ערך האינסולין הפעיל המרבי עם החישוב: בולוס ארוחה ממוצע + X3 המינון הבזאלי המרבי שיש ביממה - ראו ב[משימה 7] (Objectives-objective-7-tuning-the-closed-loop-raising-max-iob-above-0-and-gradually-lowering-bg-targets) כדוגמה)
- שנו את הפרמטר "min_5m_carbimpact" (העדפות > הגדרות ספיגה > min_5m_carbimpact) ל-8 כשאתם עוברים מאלגוריתם OpenAPS AMA ל-OpenAPS SMB. עבור AMA ערך ברירת המחדל הוא 3. קראו עוד על הגדרה זו [כאן](../Configuration/Preferences.html#min-5m-carbimpact)

(Objectives-objective-10-automation)=

## משימה 10: אוטומציות

חובה להתחיל את משימה 10 כדי להיות מסוגלים להשתמש באוטומציות.

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

- ודאו ש-SMB פועל כראוי
- קראו את ההוראות של Dynamic ISF [כאן](../Usage/DynamicISF.md)
- חפשו בקבוצות הפייסבוק והדיסקורד אחר דיונים סביב Dynamic ISF וקראו על חוויות והמלצות ממשתמשים אחרים.
- הפעילו את התוסף **DynamicISF** וזהו את הכיול המתאים בדיוק לגופכם. רצוי להתחיל עם ערך נמוך מ-100% מטעמי בטיחות.

(Objectives-go-back-in-objectives)=

## חזרה על משימות

אם ברצונכם לחזור על משימה מכל סיבה שהיא, ניתן לעשות זאת ע"י לחיצה על "ביטול השלמה".

```{image} ../images/Objective_ClearFinished.png
:alt: Go back in objectives
```

## משימות ב- AndroidAPS לפני גרסה 3.0

משימה אחת הוסרה כאשר AndroidAPS 3.0 שוחרר.  משתמשי AndroidAPS גרסה 2.8.2.1 המשתמשים בגרסת אנדרואיד ישנה יותר (כלומר גרסה 9 ומטה) יעברו את המשימות הישנות, השונות מהמתואר בדף זה. לפרטים על המשימות הישנות לחצו [כאן](../Usage/Objectives_old.md).
