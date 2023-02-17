(Extended-Carbs-extended-carbs-ecarbs)=
# פחמימות ממושכות

## מהן פחמימות ממושכות ומתי משתמשים בהן?

בטיפול רגיל במשאבה, בולוסים מושהים הם דרך טובה להתמודד עם ארוחות שומניות או ארוחות אחרות שנספגות לאט ומעלות את רמת הגלוקוז בדם זמן רב יותר מהשפעת האינסולין. עם זאת, בהקשר של לולאה, בולוסים מושהים אינם הגיוניים כל כך (ומציבים קשיים טכניים), מכיוון שהם בעצם מינון בזאלי זמני קבוע גבוה, הנוגד את אופן פעולת הלולאה, שהוא התאמה דינמית של המינון בזאלי. For details see [extended bolus](Extended-Carbs-why-extended-boluses-won-t-work-in-a-closed-loop-environment) below.

אף על פי כן נותר הצורך להתמודד עם ארוחות כאלה. זו הסיבה ש-AndroidAPS מגרסה 2.0 תומך במה שנקרא פחמימות ממושכות או eCarbs.

פחמימות ממושכות הן פחמימות שפרוסות על פני מספר שעות. בארוחות סטנדרטיות עם יותר פחמימות מאשר שומן\חלבון, רישום פחמימות מקדים (והפחתת הבולוס הראשוני במידת הצורך) מספיקה בדרך כלל כדי למנוע מתן אינסולין מוקדם מדי.  אבל עבור ארוחות איטיות יותר, בולוס על כל הפחמימות מראש גורם ליותר מדי אינסולין פעיל מ-SMB, ניתן להשתמש בפחמימות ממושכות כדי לדמות בצורה נכונה יותר את ספיגת הפחמימות (או המקבילה לפחמימות שתזינו עבור חלבון או שומן) והשפעתה על רמת הגלוקוז בדם. עם המידע הזה, הלולאה יכולה להזריק בולוסי SMB בהדרגה כדי להתמודד עם אותן פחמימות, אפשר לחשוב על כך כבולוס מושהה דינמי (זה אמור לעבוד גם ללא SMBs, אבל עם פחות יעילות).

**Note:** eCarbs aren't limited to fatty / protein heavy meals: they can be also be used to help in any situation where there are influences that increase the blood sugar, e.g. other medication like corticosteroids.

## המכניקה של השימוש בפחמימות ממושכות

To enter eCarbs, set a duration in the *Carbs* dialog on the overview tab, the total carbs and optionally a time shift (*numbers below are just examples, you will need to try your own values to arrive at satisfactory glucose response for your use-cases*):

```{image} ../images/eCarbs_Dialog.png
:alt: הזנת פחמימות
```

פחמימות ממושכות בלשונית סקירה כללית, שימו לב לפחמימות בסוגריים בשדה הפחמימות, המציג את הפחמימות העתידיות:

```{image} ../images/eCarbs_Graph.png
:alt: eCarbs in graph
```

ערכים של פחמימות עתידיות נצבעים בכתום כהה בלשונית הטיפולים:

```{image} ../images/eCarbs_Treatment.png
:alt: eCarbs in future in treatment tab
```

______________________________________________________________________

A way to handle fat and protein with that feature is described here: [https://adriansloop.blogspot.com/2018/04/page-margin-0.html](https://adriansloop.blogspot.com/2018/04/page-margin-0.html)

______________________________________________________________________

## תצורה מומלצת, תרחיש לדוגמה והערות חשובות

The recommended setup is to use the OpenAPS SMB APS plugin, with SMBs enabled as well as the *Enable SMB with COB* preference being enabled.

A scenario e.g. for a Pizza might be to give a (partial) bolus up front via the *calculator* and then use the *carbs* button to enter the remaining carbs for a duration of 4-6 hours, starting after 1 or 2 hours.

**Important notes:** You'll need to try out and see which concrete values work for you of course. You might also carefully adjust the setting *max minutes of basal to limit SMB to* to make the algorithm more or less aggressive. בארוחות דלות פחמימות שעתירות שומן\חלבון זה עשוי להספיק להשתמש רק בפחמימות ממושכות ללא בולוסים מקדימים ידניים (ראו את הפוסט בבלוג למעלה). כאשר נוצר רישום פחמימות ממושכות, נוצרת גם תיעוד בנייטסקאוט לתיעוד כל התשומות, כדי להקל על איטרציה ושיפור התשומות.

(Extended-Carbs-extended-bolus-and-why-they-wont-work-in-closed-loop-environment)=
## בולוס מושהה ומדוע לא יעבוד במערכת לולאה סגורה?

כפי שהוזכר לעיל בולוסים ממושכים או מרובי גלים לא באמת עובדים בסביבת לולאה סגורה. [See below](Extended-Carbs-why-extended-boluses-won-t-work-in-a-closed-loop-environment) for details

(Extended-Carbs-extended-bolus-and-switch-to-open-loop-dana-and-insight-pump-only)=
### בולוס מושהה ומעבר ללולאה פתוחה - משאבת Dana ו-Insight בלבד

חלק מהאנשים ביקשו אפשרות להשתמש בבולוס מושהה ב-AAPS בכל זאת מכיוון שהם רצו להתייחס למזונות מיוחדים כפי שהיו רגילים בעבר.

לכן החל מגרסה 2.6 ישנה אפשרות לבולוס מושהה למשתמשי משאבות Dana ו-Insight.

- לולאה סגורה תיעצר אוטומטית ותעבור למצב לולאה פתוחה למשך זמן פעילות הבולוס הממושך.
- Bolus units, remaining and total time will be shown on homescreen.
- On Insight pump extended bolus is *not available* if [TBR emulation](Accu-Chek-Insight-Pump-settings-in-aaps) is used.

```{image} ../images/ExtendedBolus2_6.png
:alt: Extended bolus in AAPS 2.6
```

(Extended-Carbs-why-extended-boluses-won-t-work-in-a-closed-loop-environment)=
### הסיבה לכך שבולוסים מושהים לא יעבדו בלולאה סגורה

1. הלופ קובע שיש לספק עכשיו 1.55 יח'\שעה. לא משנה לאלגוריתם אם זה מוזרק כבולוס מושהה או כמינון בזאלי זמני. למעשה, חלק מהמשאבות משתמשות בבולוס המושהה. מה צריך לקרות? Most pump drivers then stop the extended bolus -> You didn't even need to start it.

2. אם הזנו בולוס מושהה מראש, מה צריך לקרות באלגוריתם?

   1. האם זה אמור להיות מחושב כנייטרלי יחד עם המינון הבזאלי בחישוב של הלולאה? ואז הלולאה אמורה להיות מסוגלת גם להפחית את הבולוס אם למשל יורדים מדי וכל האינסולין ה"נייטרלי" נלקח?
   2. האם פשוט להוסיף את הבולוס המושהה? אז פשוט צריך לתת ללופ להמשיך? אפילו בהיפו הכי חריף? זהו אינו פיתרון טוב, יש היפו צפוי אבל אסור למנוע אותו?

3. האינסולין הפעיל שהבולוס המושהה מוסיף מתממש לאחר 5 דקות במדידה הבאה. בהתאם, הלולאה תיתן פחות בזאלי. So not much changes... except that the possibility of hypo avoidance is taken.
