# השלמת המשימות

ל**AAPS** יש סדרה של **משימות** שעליכם להשלים כדי להתקדם מלולאה פתוחה בסיסית ללולאה סגורה היברידית ולקבלת פונקציונליות מלאה של **AAPS**. השלמת **משימות** מבטיחה ש-:

- הגדרתם את הכל בצורה נכונה בהגדרות **AAPS**
- למדתם על התכונות החיוניות לשימוש ב-**AAPS**
- יש לכם הבנה בסיסית של מה המערכת שלכם עושה, ולכן למה אתם יכולים לסמוך עליה.

```{admonition} Note
:class: note

Regularly export your **AAPS** settings after completing each **objective**!
```

We strongly recommend that you  [export your settings](../Maintenance/ExportImportSettings.md) after completing each **objective**. תהליך הייצוא יוצר קובץ **הגדרות** (מסוג.json) שעליכם ללגבות במקום בטוח אחד או יותר (_למשל_ Google Drive, קובץ מצורף לדוא"ל, דיסק קשיח וכו'). גיבוי מבטיח שתשמרו על ההתקדמותכם ב**משימות** ואם תמחק בטעות את ההתקדמות שלכם, תוכלו פשוט לטעון אותה מחדש על ידי ייבוא קובץ ההגדרות האחרון. יש גם צורך בגיבוי קובץ **הגדרות** אם ברצונכם להחליף את מכשיר הטלפון עליו מותקן **AAPS** מכל סיבה שהיא (שדרוג/אבדה/נזק וכו')

קובץ **הגדרות** ישמור לא רק את ההתקדמות במשימות, אלא גם הגדרות **AAPS** המותאמות אישית שלכם כגון **בולוס מקסימלי** _וכו'._

אם לא יהיה לכם עותק גיבוי של **ההגדרות** שלכם, במקרה שמשהו יקרה למכשירכם תצטרכו להתחיל שוב את **משימות** מההתחלה.

Overall the **objectives** take around 6 weeks to complete (see [how long will it take?](../Getting-Started/PreparingForAaps.md#how-long-will-it-take-to-set-everything-up) for a detailed breakdown) from configuring **AAPS** on your smartphone to "basic" hybrid closed looping (from objective 1 to objective 8), so, although you _can_ proceed up to **objective 5** using a **virtual pump** (and using some other method of insulin delivery in the meantime), having to re-complete all the **objectives** because for example, you lost your smartphone, is still something you really want to avoid.

As well as progressing through the **objectives**, if you want, you can also remove your progress and [go back to an earlier objective](#go-back-in-objectives).

## משימה 1: הגדרת ויזואליזציה, ניטור, ניתוח המינון הבזאלי והיחסים

- **AAPS** בודק אם התצורה הטכנית הבסיסית שלכם עובדת.

אם היא לא עובדת, עליכם להגדירה מחדש עד שתפעל כראוי.

- Select the correct CGMS/FGMS in [Config Builder](../SettingUpAaps/ConfigBuilder.md).  See [BG Source](../Getting-Started/CompatiblesCgms.md) for more information.
- Select the correct Pump in [Config Builder](../SettingUpAaps/ConfigBuilder.md) to ensure your pump can communicate with AAPS. בחרו **משאבה וירטואלית** אם אתם משתמשים בדגם משאבה שבו **AAPS** אינו תומך, או אם ברצונכם לעבוד על **המשימות** הראשונות תוך שימוש במערכת אחרת למתן אינסולין. See [insulin pump](../Getting-Started/CompatiblePumps.md) for more information.
- Follow instructions in [Nightscout](../SettingUpAaps/Nightscout.md) page to ensure **Nightscout** can receive and display this data.
- Note that URL in **NSClient** must be **_without_ "/api/v1/"** at the end - see [NSClient settings in Preferences](../SettingUpAaps/Preferences.md#NSClient).

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

חלק מהמשתמשים רואים המשימה 3 כמשימה הקשה ביותר. חובה לקרוא את מסמכי AAPS יחד עם השאלות. If you are genuinely stuck after researching the **AAPS** documents, please search the [Facebook](https://www.facebook.com/groups/AndroidAPSUsers) group for "Objective 3" (because it is likely that your question has been asked- and answered - before). If you are still stuck, ask in a post on either the [Facebook](https://www.facebook.com/groups/AndroidAPSUsers) or [Discord](https://discord.gg/4fQUWHZ4Mw) group. קבוצות אלה יכולות לספק רמזים או להפנות אתכם לחלק הרלוונטי במסמכי AAPS.

כדי לבצע את המשימה, לחצו על הטקסט הכתום "עדיין לא הושלם" כדי לגשת לשאלה הרלוונטית. יש לקרוא את השאלות ולבחור את תשובותיכם.

- על מנת לצמצם את מספר ההמלצות של הלולאה הפתוחה, הגדירו טווח ערכי מטרה רחב כמו לדוגמה 90-150 mg/dl או 5-8.5 mmol/l.

- תוכלו גם להגדיר ערך מטרה עליון גבוה עוד יותר ואף לכבות את הלופ בלילה.

לכל שאלה עשויה להיות יותר מתשובה אחת נכונה! אם נבחרה תשובה שגויה, השאלה תינעל למשך 60 דקות ובתומן תוכלו לחזור ולענות עליה. שימו לב שייתכן שסדר התשובות ישתנה כאשר תנסו לענות שוב, זאת כדי לוודא שאתם קוראים אותן בעיון ובאמת מבינים תוכנו כל משפט.

כאשר AAPS מותקן בפעם הראשונה, תצטרכו להשלים את **משימה 3** בכללותה כדי לעבור הלאה ל**משימה 4**. ניתן לסיים משימה רק אם כל המשימות הקודמות לה מושלמות. תכונות חדשות יפתחו בהדרגה ככל שתתקדם דרך היעדים.

```{admonition} __What happens if new question(s) are added to an Objective when I update to a newer version of AAPS?__
:class: Note
From time to time, new features are added to **AAPS** which may require a new question to be added to the Objectives, particularly Objective 3. As a result, any new question added to **Objective 3** will be marked as “incomplete” because **AAPS** will require you to action this. Do not worry, as each **Objective** is independent, you will **not lose the existing functionality of AAPS**, providing the other Objectives remain completed.
```

## משימה 4: התחלת לופ פתוח

מטרת משימה זו היא לזהות באיזו תדירות **AAPS** יעריך את השפעת המינון הבזאלי על רמות הגלוקוז ולהמליץ על שינויים זמניים במינונים. כחלק משימה זו, אתם תפעילו לולאה פתוחה בפעם הראשונה ותבצעו ידנית 20 שינויים זמניים המוצעים, במינוניים הבזאליים. בנוסף אתם תתנסו בהשפעת ברירות המחדל של המטרות הזמניות (_למשל_ עבור פעילות גופנית או טיפולים בהיפו). If you are not familiar with setting a temporay basal rate change in **AAPS** yet, please refer to the [ACTIONS tab](../DailyLifeWithAaps/AapsScreens.md#action-tab).

זמן משוער להשלמת משימה זו: **7 ימים**. חובה להמתין את זמן זה. אינכם יכולים להמשיך אל המשימה הבאה, גם אם ביצעתם כבר את כל השינויים הזמניים במינונים הבזאליים.

- בחרו בלולאה פתוחה בהעדפות או ע"י לחיצה ארוכה על סמל הלופ בחלק העליון של המסך הראשי, בצד שמאל (אם שפת AAPS היא עברית).
- Walk through the [Preferences](../SettingUpAaps/Preferences.md) to set it up for you (scroll down to "Loop/APS Mode" and select "Open Loop".
- אשרו באופן ידני לפחות 20 הצעות לשינוי במינון הבזאלי הזמני על פני תקופה של 7 ימים. בשימוש במשאבה וירטואלית הזינו את השינויים המוצעים במשאבה ואשרו ב-AAPS שביצעתם אותן. ודאו כי ההתאמות במינונים הבזאליים שאישרתם מופיעות ב-AAPS וב-Nightscout.
- Enable [temp targets](../DailyLifeWithAaps/TempTargets.md) if necessary. לאחר טיפול בהיפו, השתמשו בערך מטרה היפו כדי למנוע מהמערכת לתקן ביתר על החזרה מההיפו.

### צמצום מספר התראות הלולאה הפתוחה

- על מנת לצמצם את מספר ההמלצות של הלולאה הפתוחה, הגדירו טווח ערכי מטרה רחב כמו לדוגמה 90-150 mg/dl או 5-8.5 mmol/l.
- תוכלו גם להגדיר ערך מטרה עליון גבוה עוד יותר ואף לכבות את הלופ בלילה.
- כדי לשנות את כמות ההמלצות אתם יכולים להגדיר את אחוז השינוי המינימלי הדרוש להפעלת הצעה לשינוי במינונים הבזאליים.

  ![Open Loop minimal request change](../images/OpenLoop_MinimalRequestChange2.png)

```{admonition} You don't need to action each and every system recommendation!
:class: Note
```

(Objectives-objective-5-Understanding-your-open-loop-including-its-temp-basal-recommendations)=

## משימה 5: העמקת הבנת הלולאה הפתוחה, לרבות המינונים הבזאליים הזמניים וההמלצות

במסגרת **משימה 5** אתם תתחילו להבין כיצד מחושבות המלצות בזאליות זמניות. This includes the [determination of basal logic](https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/Understand-determine-basal.html), analyzing the impact by observing [prediction lines in AAPS OVERVIEW](../DailyLifeWithAaps/AapsScreens.md#prediction-lines)/Nightscout and looking at detailed calculations shown on your OPENAPS tab.

זמן משוער להשלמת משימה זו: 7 ימים.

This Objective requires you to determine and set your “Max U/h a temp basal can be set to” (max-basal) value as described in [OpenAPS-features](../DailyLifeWithAaps/KeyAapsFeatures.md#max-uh-a-temp-basal-can-be-set-to-openaps-max-basal). ניתן להגדיר ערך זה בהעדפות > OpenAPS AMA.
יש לוודא שהגדרת בטיחות זו מוגדרת גם ב-**AAPS** וגם במשאבת האינסולין.

רצוי שתקבעו ערכי מטרה גבוהים מהרגיל עד אשר תבטחו בהגדרות ובחישובי הלופ.

**AAPS** מאפשר:

- ערך מטרה תחתון 72 mg/dl עד 180 mg/dl
- ערך מטרה עליון 90 mg/dl עד 225 mg/dl
- ערך מטרה זמני כערך יחיד יכול להיות בטווח 72 עד 225 mg/dl

ערך המטרה שלכם הוא ערך מרכזי. כל החישובים מבוססים עליו. הוא שונה מטווח יעד שאליו שואפים לשמור על ערכי הגלוקוז בדם. אם טווח המטרה שלכם רחב מאוד (לדוגמה טווח של 50 mg/dl), אתם תראו מעט פעילות של AAPS. הסיבה לכך היא שצפוי כי הגלוקוז נמצא איפשהו בטווח הרחב הזה ולכן מוצעים שינויים במינונים הבזאליים לעיתים רחוקות.

ייתכן שתרצו להתנסות בכיוונונים של ערכי המטרה להקטנת טווח המטרה (20 mg/dl ואף פחות) ולצפות בהתנהגות המערכת כתוצאה מכך.

You can adjust (widen or tighten) the graph’s green area, representing your target range, by entering different values in [Preferences](../SettingUpAaps/Preferences.md) > Overview > Range for Visualisation.

![Stop sign](../images/sign_stop.png)

```{admonition} If you have been using a virtual pump, change to a real insulin pump now!
:class: note

If you are open looping with a virtual pump stop here. Only click verify at the end of this Objective once you have changed to using a "real" physical pump.
```

![blank](../images/blank.png)

(Objectives-objective-6-starting-to-close-the-loop-with-low-glucose-suspend)=

## משימה 6: מתחילים לסגור לולאה עם השהיה עקב ערך סוכר נמוך

![Warning sign](../images/sign_warning.png)

```{admonition} Closed loop will not correct high BG values in objective 6 as it is limited to low glucose suspend only!
:class: Note
עדיין תצטרכו לתקן ערכי סוכר גבוהים בעצמכם (ידנית עם תיקונים באמצעות משאבה או עט)!
```

As part of **Objective 6** you will close the loop and activate its Low Glucose Suspend (LGS) mode while [max IOB](../DailyLifeWithAaps/KeyAapsFeatures.md#maximum-total-iob-openaps-cant-go-over-openaps-max-iob) is set to zero. עליכם להישאר במצב LGS למשך 5 ימים כדי להשלים את משימה זו. כדאי לנצל את הזמן הזה כדי לבדוק אם הגדרות הפרופיל שלכם מדויקות ואינן מפעילות אירועי היפו לעתים קרובות מדי.

זמן משוער להשלמת משימה זו: 5 ימים.

קריטי שהפרופיל הנוכחי שלכם (בזאלים, ISF, IC) ייבדק היטב לפני שתסגרו את הלולאה שלכם במצב השעיה עקב סוכר נמוך. הגדרות פרופיל שגויות עלולות להוביל למצבי היפו שיטופלו באופן ידני. פרופיל מדויק יעזור להימנע מאירועי היפוגליקמיה במהלך 5 הימים.

**אם אתם חווים אירועי היפוגליקמיה תכופים או חמורים, שקלו לשפר את יחס ה-DIA, המינונים הבזאליים, ה-ISF וה-IC.**

במהלך משימה 6, **AAPS** ידאג להגדיר את maxIOB לאפס בעצמו. **הגדרה זו תבוטל לאחר התחלת משימה 7.**

משמעות הדבר היא שכאשר אתם במשימה 6, אם רמות הסוכר יורדות, **AAPS** יפחית את מתן האינסולין הבזאלי. אם רמות הסוכר עולות, **AAPS** יגדיל את המינון הבזאלי מעל הערך שבפרופיל, רק אם האינסולין הפעיל הבזאלי שלילי כתוצאה מהשעיה קודמת של עקב גלוקוז נמוך. אחרת, **AAPS** לא יעלה את המינון הבזאלי מעל הערך שבפרופיל, גם כשרמות הסוכר עולות. זהו אמצעי זהירות כדי להימנע מהיפוגליקמיות בזמן שאתם לומדים להשתמש **AAPS**.

**כתוצאה מכך, עליכם להתמודד עם ערכי סוכר גבוהים עם תיקוני בולוס אינסולין ידניים.**

- אם האינסולין הפעיל (IOB) הבזאלי שלכם שלילי (ראה צילום מסך למטה) ניתן להפעיל מינון בזאלי זמני (TBR) גבוה מ-100% במשימה 6.

![Example negative IOB](../images/Objective6_negIOB.png)

- הגדירו את טווח המטרה שלכם מעט גבוה יותר ממה שאליו אתם בדרך כלל מכוונים אליו, רק ליתר ביטחון.
- הפעילו את מצב "השעיית סוכר נמוך" על ידי לחיצה ממושכת על סמל הלולאה בפינה השמאלית העליונה של מסך הבית בחירה בסמל מצב לולאה - השהיה עקב ערך סוכר נמוך (ירוק מקווקו).
- צפו במינונים הבזאליים הזמניים הפעילים על ידי המופיע כטקסט בצבע טורקיז או בגרף, במסך הבית.
- ייתכן שתחוו קפיצות בסוכר לאחר טיפול בהיפוגליקמיות באופן זמני בגלל שאין עליה במינון הבזאלי לאחר היציאה מהיפוגליקמיה.

(Objectives-objective-7-tuning-the-closed-loop-raising-max-iob-above-0-and-gradually-lowering-bg-targets)=

## משימה 7: כוונון לולאה סגורה, העלאת האינסולין הפעיל המרבי מ-0 והורדה מדורגת של ערכי המטרה

To complete **Objective 7** you have to close your loop and raise your [maxIOB](../DailyLifeWithAaps/KeyAapsFeatures.md#maximum-total-iob-openaps-cant-go-over-openaps-max-iob). maxIOB אופס אוטומטית ב**משימה 6**. איפוס זה מבוטל עכשיו. **AAPS** יתחיל להשתמש בערך maxIOB שהגדרתם כדי לתקן ערכי סוכר גבוהים.

זמן משוער להשלמת משימה זו: יום אחד.

- Select 'Closed Loop' either from [Preferences](../SettingUpAaps/Preferences.md) or by pressing and holding the Loop icon at the top right corner of the OVERVIEW screen, over a period of 1 day.

- העלו את 'מינון אינסולין פעיל מרבי ממנו OpenAPS לא יחרוג' (נקרא גם 'max-IOB' ב-OpenAPS) ליותר מ-0 במשך יממה אחת. המלצת ברירת המחדל היא X3 המינון הבזאלי המקסימלי (עבור אלגוריתם AMA הישן, שנמצא בשימוש של משתמשים חדשים) או X3 המינון הבזאלי המקסימלי + בולוס ארוחה ממוצע (עבור אלגוריתם SMB). עליכם להתקדם אל ערך זה באופן מדורג עד שהגדרה זו עובדת היטב.
  מינון בזאלי מקסימלי = המינון הבזאלי המרבי שניתן בשעה כלשהי ביממה.

המלצה זו היא נקודת התחלה. אם אתם מגדירים אותו כ-x3 ואתם רואים ש-AAPS מזריק יותר מדי אינסולין כשרמות הגלוקוז עולות, אז הורידו את הערך "בזאלי פעיל מרבי ש-OpenAPS יכול לספק". לחילופין, אם התנגודת שלכם גבוהה, העלו אותו בהדרגה.

![max daily basal](../images/MaxDailyBasal2.png)

- כאשר תרגישו שערך האינסולין הפעיל מתאים לפעולת הלופ שלכם, הורידו את ערכי מטרה שלכם כרצונכם.

(Objectives-objective-8-adjust-basals-and-ratios-if-needed-and-then-enable-autosens)=

## משימה 8: התאמת המינון בזאלי והיחסים במקרה הצורך ולאחר מכן הפעלת Autosens

כחלק ממשימה זו, אתם תחדדו את ביצועי הפרופיל שלכם ותשתמשו בתכונת ה-autosens כאינדיקטור להגדרות שגויות.

זמן משוער להשלמת משימה זו: 7 ימים.

- אתם יכולים להשתמש ב-[autotune](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autotune.html) כפעולה חד פעמית כדי לבדוק שהתוכנית הבזאלית שלכם מדוייקת או לבצע בדיקה מסורתית.
- Enable [autosens](../DailyLifeWithAaps/KeyAapsFeatures.md) over a period of 7 days and watch OVERVIEW's graph white line showing your insulin sensitivity rising or falling due to exercise or hormones etc. and keep an eye on the OpenAPS report tab which shows **AAPS** adjusting the basals and/or targets accordingly.

(Objectives-objective-9-enabling-additional-oref1-features-for-daytime-use-such-as-super-micro-bolus-smb)=

## משימה 9: אפשרו פונקציות oref1 כגון סופר מיקרובולוס (SMB), בשעות היום

במטרה זו תתמודדו ותשתמשו ב"סופר מיקרו בולוס (SMB)" ככלי מרכזי. לאחר קריאות החובה תהיה לכם הבנה טובה של מהו SMB, איך הוא עובד, נקודת התחלה סבירה של הגדרות שימוש ב-SMB ומדוע הבזאלי מוגדר כאפס באופן זמני לאחר מתן SMB. זמן משוער להשלמת משימה זו: 28 ימים.

- The [SMB section in this documentation](../DailyLifeWithAaps/KeyAapsFeatures.md#super-micro-bolus-smb) and [oref1 coverage in the openAPSdocs](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/oref1.html) are must-reads to understand SMB and the concept of zero-temping.
- Once done, you [raise maxIOB](../DailyLifeWithAaps/KeyAapsFeatures.md#maximum-total-iob-openaps-cant-go-over-openaps-max-iob) to get SMBs working well. מעכשיו, האינסולין הפעיל המרבי כולל את כל האינסולין המוזרק, לא רק את הבזאלי. סף זה משהה את מתן ה-SMB עד שהאינסולין הפעיל (IOB) יורד אל מתחת לערך זה (_למשל_ maxIOB מוגדר ל-7 יח' וניתן בולוס של 8 יח' לכיסוי ארוחה: הזרקת SMB יושהה ולא יינתן אלא אם IOB יורד אל מתחת ל-7 יח'). A good start is setting maxIOB = average mealbolus + 3x max daily basal (max daily basal = the maximum hourly value in any time segment of the day - see [objective 7](#objective-7-tuning-the-closed-loop-raising-maxiob-above-0-and-gradually-lowering-bg-targets) as reference)
- שנו את הפרמטר "min_5m_carbimpact" (העדפות > הגדרות ספיגה > min_5m_carbimpact) ל-8 כשאתם עוברים מאלגוריתם OpenAPS AMA ל-OpenAPS SMB. עבור AMA ערך ברירת המחדל הוא 3. Read more about this setting [here](../SettingUpAaps/Preferences.md#min_5m_carbimpact)

(Objectives-objective-10-automation)=

## משימה 10: אוטומציות

חובה להתחיל את משימה 10 כדי להיות מסוגלים להשתמש באוטומציות.

1. Read the documentation page  [Automation](../DailyLifeWithAaps/Automations.md) first.
2. הגדר את כלל האוטומציה הבסיסי ביותר;
   לדוגמה, הפעל הודעת אנדרואיד בעוד מספר דקות:

- בחרו את לשונית האוטומציות
- בתפריט 3 הנקודות השמאלי העליון, בחרו הוספת כלל
- קראו לאוטומציה בשם, לדוגמה "האוטומציה הראשונה שלי"
- תנאי: עריכה
  - לחצו על "+" כדי להוסיף את הטריגר הראשון
  - בחרו "זמן" ו-"אישור", זה יצור ערך ברירת מחדל "ב- שעה שעה:דקה עכשיו"
  - לחצו על השעה כדי לערוך את הזמן כך שיופעל בעוד מספר דקות. לאחר מכן לחצו על אישור כדי לסגור
  - לחצו על "אישור" כדי לסגור את מסך הטריגרים
- פעולה: הוספה
  - בחרו "התראה", "אישור"
  - לחצו על "התראה" כדי לערוך את ההודעה (הודעה), הזינו משהו כמו "אוטומציה ראשונה"
- המתינו עד שיגיע הזמן שיפעיל את ההתראה (שים לב שבהתאם לטלפון שלכם, זה יכול להיות באיחור של כמה דקות)

4. התנסו עם הגדרת אוטומציה שימושית יותר.

- The documentation page gives a few examples, and you can search for "automation" screenshots on the [Facebook](https://www.facebook.com/groups/AndroidAPSUsers) group. מכיוון שרוב האנשים אוכלים את אותו הדבר לארוחת בוקר באותה שעה בכל בוקר לפני הלימודים/עבודה, מקרה שימוש נפוץ למדי יכול להיות להגדיר ערך מטרה "לפני ארוחת הבוקר" כדי להגדיר ערך מטרה זמני מעט נמוך 30 דקות לפני ארוחת הבוקר. במקרה כזה, סביר להניח שהתנאי שלכם יכלול "זמן חוזרני" המורכב מבחירת ימים ספציפיים בשבוע (לדוגמה: ראשון, שני, שלישי, רביעי, חמישי) ושעה מסוימת (06:30 בבוקר). הפעולה תהיה מורכבת מ-"הפעלת ערך מטרה זמני" עם ערך יעד ומשך 30 דקות.

## משימה 11: הפעלת פונקציות נוספות לשימוש במשך היום כמו רגישות דינאמית).

- ודאו ש-SMB פועל כראוי
- Read the documentation concerning Dynamic ISF [here](../DailyLifeWithAaps/DynamicISF.md)
- Search the Facbook and [Discord](https://discord.gg/4fQUWHZ4Mw) groups for discussions around Dynamic ISF and read about other users experiences and recommendations.
- הפעילו את התוסף **DynamicISF** וזהו את הכיול המתאים בדיוק לגופכם. רצוי להתחיל עם ערך נמוך מ-100% מטעמי בטיחות.

(Objectives-go-back-in-objectives)=

## חזרה על משימות

אם ברצונכם לחזור על משימה מכל סיבה שהיא, ניתן לעשות זאת ע"י לחיצה על "ביטול השלמה".

![Go back in objectives](../images/Objective_ClearFinished.png)

## משימות ב- AndroidAPS לפני גרסה 3.0

משימה אחת הוסרה כאשר AndroidAPS 3.0 שוחרר.  Users of Android APS version 2.8.2.1 who are on older Android software (_i.e._ earlier than version 9) will be using an older set of Objectives which can be found [here].
