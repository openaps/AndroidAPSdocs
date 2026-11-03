# חישוב פחמימות פעילות (COB)

## How does AAPS calculate the COB value?

When carbs are entered by the user as part of a meal entry or carb correction, **AAPS** will add this calculation to the current carbs on board (**COB**). **AAPS** then calculates the user’s carbs’ absorption based on observed deviations to the user’s **BG** values. קצב הספיגה תלוי בגורם הרגישות לפחמימות (**CSF**). זו אינה הגדרה ב**פרופיל** של המשתמש, אלא ערך ש-**AAPS** מחשב לפי הגדרות **ISF/I:C**. הוא קובע בכמה mg/dL עולה **רמת הסוכר בדם (BG)** של המשתמש מכל 1 גרם פחמימות.

## Carb Sensitivity Factor

The formula adopted by **AAPS** is:

- absorbed_carbs = deviation * ic / isf.

The effect on the user’s **Profile** will:

- _הגדלת_ **IC** תגדיל את כמות הפחמימות הנספגות בכל 5 דקות, ובכך תקצר את זמן הספיגה הכולל;

- _increase_ **ISF** - by decreasing the carbs absorbed every 5 minutes thus prolong total time of absorption; and

- _שינוי_ **אחוז הפרופיל** יגדיל או יקטין את שני הערכים ולכן לא ישפיע על זמן ספיגת הפחמימות.

למשל, אם **ISF** ב**פרופיל** המשתמש הוא 100 ו-**I:C** הוא 5, גורם הרגישות לפחמימות של המשתמש יהיה 20. על כל עלייה של 20 mg/dL ב**רמת הסוכר בדם (BG)** של המשתמש, **AAPS** יחשב שנספג 1 גרם פחמימות. Positive **IOB** also affects the **COB** calculation. כך, אם **AAPS** צופה ש**רמת הסוכר בדם (BG)** של המשתמש תרד ב-20 mg/dL בגלל **IOB**, אבל היא נשארה יציבה, **AAPS** יחשב גם כן שנספג 1 גרם פחמימות.

Carbs will also be absorbed via the methods described below based on which sensitivity algorithm has been selected within the user's **AAPS**.

## Carbs Sensitivity - Oref1

Unabsorbed carbs are cut off after specified time:

![Oref1](../images/cob_oref0_orange_II.png)

![גרף COB עם חיתוך (cut-off) של Oref1](../images/cob_oref0_orange_I.png)

```{admonition} Older screenshot
:class: note
צילום המסך שלמעלה הוא מגרסה קודמת של **AAPS**. ב-**AAPS** 4 הגרפים נראים מעט שונה, אבל גרף ה-**COB** מציג את אותו המידע.
```


## Carbs Sensitivity - WeightedAverage

Absorption is calculated to have COB = 0 after specified time:

![AAPS, WeightedAverage](../images/cob_aaps2_orange_II.png)

If minimal carbs absorption (min_5m_carbimpact) is used instead of value calculated from **BG** deviations, an orange dot appears on the **COB** graph.

(CobCalculation-detection-of-wrong-cob-values)=
## זיהוי ערכי פחמ' פעילות שגויים

**AAPS** יזהיר את המשתמש אם הוא עומד לתת בולוס עם **פחמימות פעילות (COB)** מארוחה קודמת, והאלגוריתם מזהה שחישוב ה-**COB** הנוכחי שגוי. In this case it will give the user an additional hint on the confirmation screen after usage of bolus wizard.

### How does AAPS detect wrong COB values?

Ordinarily __AAPS__ detects carb absorption through **BG** deviations. In case the user has entered carbs but **AAPS** cannot detect their estimated absorption through **BG** deviations, it will use the [min_5m_carbimpact](#Preferences-min_5m_carbimpact) method to calculate the absorption instead (so called ‘fallback’). As this method calculates only the minimal carb absorption without considering **BG** deviations, it might lead to incorrect COB values.

![Hint on wrong COB value](../images/Calculator_SlowCarbAbsorption.png)

בצילום המסך שלמעלה, ב-66% מהזמן ספיגת הפחמימות חושבה לפי min_5m_carbimpact במקום לפי הערך שזוהה מהסטיות. This indicates that the user may have had less **COB** than calculated by the algorithm.

### איך מתמודדים עם האזהרה הזו?

- שקלו לבטל את הטיפול - לחצו על ‘ביטול’ במקום ‘אישור’.
- Calculate your upcoming meal again with bolus wizard leaving **COB** unticked.
- If you need a correction bolus, enter it manually.
- היזהרו ממינון יתר או מהצטברות אינסולין!


### מדוע האלגוריתם אינו מזהה נכונה את COB?

This could be because:
- Potentially the user overestimated carbs when entering them.
- Activity / exercise after your previous meal.
- I:C needs adjustment.
- Value for min_5m_carbimpact is wrong (recommended is 8 with SMB, 3 with AMA).


## תיקון ידני של פחמימות שנרשמו

אם כמות הפחמימות הוערכה ביתר או בחסר, ניתן לתקן זאת במסך **היסטוריית טיפולים** כפי שמתואר [כאן](#screens-bolus-carbs).


## Carb correction - how to delete a Carb entry from Treatments


ניתן להשתמש במסך **היסטוריית טיפולים** כדי לתקן רשומת פחמימות שגויה על ידי מחיקתה. ייתכן שהסיבה היא שהמשתמש העריך את כמות הפחמימות ברשומה ביתר או בחסר:

![מחיקת רשומת פחמימות מהיסטוריית הטיפולים](../images/e123d85d-907e-4545-bf1b-09fee4d42555.png)

1. יש לבדוק ולזכור את ערכי **COB** ו-**IOB** הנוכחיים במסך הראשי של **AAPS**.
2. יש לפתוח את **היסטוריית טיפולים** (תפריט הצד ← *היסטוריית טיפולים*), לשונית **פחמימות ובולוס**. בהתאם למשאבה, הפחמימות עשויות להופיע יחד עם האינסולין בשורה אחת או כרשומה נפרדת (למשל עם Dana RS).
3. יש לבצע **לחיצה ארוכה** על רשומת הפחמימות השגויה. הרשימה עוברת ל**מצב בחירה** עם תיבת סימון בכל שורה, והרשומה מסומנת (מספר **1** בתמונה). ניתן לסמן גם רשומות נוספות שרוצים להסיר.
4. יש להקיש על הסמל **🗑 מחיקה** בסרגל העליון (מספר **2**) ולאשר. חלון האישור מציג בדיוק מה יוסר.
5. יש לוודא שהפחמימות הוסרו בהצלחה: לבדוק שוב את **COB** במסך הראשי של **AAPS**.
6. יש לעשות את אותו הדבר עבור **IOB** אם יש רק שורה אחת שכוללת גם פחמימות וגם אינסולין.
7. If carbs are not removed as intended and additional carbs are added as explained in this section, the **COB** entry will be too high and this could lead to **AAPS** delivering too much insulin.
8. יש להזין את כמות הפחמימות הנכונה בחלון **פחמימות** (**טיפולים** ← **פחמימות**) ולהגדיר את זמן האירוע הנכון.
9. אם הייתה רק שורה אחת שכללה גם פחמימות וגם אינסולין, יש להוסיף מחדש גם את כמות האינסולין. יש לוודא שזמן האירוע נכון ולבדוק את **IOB** במסך הראשי לאחר אישור הרשומה החדשה.

