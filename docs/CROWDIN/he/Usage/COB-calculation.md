# חישוב פחמימות פעילות (COB)

## איך AndroidAPS מחשב את הפחמימות הפעילות?

### Oref1

פחמימות שלא נספגו נעלמות לאחר זמן מוגדר

```{image} ../images/cob_oref0_orange_II.png
:alt: Oref1
```

### רגישות AAPS, רגישות משוקללת ממוצעת

absorption is calculated to have `COB == 0` after specified time

```{image} ../images/cob_aaps2_orange_II.png
:alt: AAPS, WheitedAverage
```

אם נעשה שימוש בספיגת פחמימות מינימלית (min_5m_carbimpact) במקום בערך המחושב לפי סטיות ברמת הסוכר, מופיעה נקודה כתומה על גרף הפחמ' הפעילות (COB).

(COB-calculation-detection-of-wrong-cob-values)=
## זיהוי ערכי פחמ' פעילות שגויים

AAPS מזהיר אם אתם עומדים לקבל בולוס עם COB מארוחה קודמת והאלגוריתם חושב שחישוב ה-COB הנוכחי עלול להיות שגוי. במקרה זה הוא יציג הודעה נוספת עח כך במסך האישור לאחר השימוש באשף הבולוס.

### כיצד AndroidAPS מזהה ערכי COB שגויים?

בדרך כלל AAPS מזהה ספיגת פחמימות באמצעות סטיות ברמת הסוכר. In case you entered carbs but AAPS cannot see their estimated absorption through BG deviations, it will use the [min_5m_carbimpact](../Configuration/Config-Builder.md?highlight=min_5m_carbimpact#absorption-settings) method to calculate the absorption instead (so called 'fallback'). מכיוון ששיטה זו מחשבת רק את ספיגת הפחמימות המינימלית מבלי להתחשב בסטיות של רמת הסוכר, היא עלולה להוביל לערכי COB שגויים.

```{image} ../images/Calculator_SlowCarbAbsorption.png
:alt: Hint on wrong COB value
```

בצילום המסך למעלה, 41% מזמן ספיגת הפחמימות חושב מתמטית לפי min_5m_carbimpact במקום הערך שזוהה מהסטיות.  זה אומר שאולי יש לכם פחות פחמימות פעילות ממה שחושב על ידי האלגוריתם.

### איך מתמודדים עם האזהרה הזו?

- Consider to cancel the treatment - press Cancel instead of OK.
- Calculate your upcoming meal again with bolus wizard leaving COB unticked.
- In case you are sure you need a correction bolus, enter it manually.
- In any case be careful not to overdose!

### מדוע האלגוריתם אינו מזהה נכונה את COB?

- Maybe you overestimated carbs when entering them.
- Activity / exercise after your previous meal
- I:C needs adjustment
- Value for min_5m_carbimpact is wrong (recommended is 8 with SMB, 3 with AMA)

## תיקון ידני של פחמימות שנרשמו

If you over- or underestimated carbs you can correct this though treatments tab and actions tab / menu as described [here](Screenshots-carb-correction).
