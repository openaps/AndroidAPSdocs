# מהי מערכת לולאה סגורה (לופ סגור)?

```{image} ../images/autopilot.png
:alt: AAPS is like an autopilot
```

מערכת לבלב מלאכותי בלולאה סגורה משלבת רכיבים שונים על מנת להקל את ניהול הסוכרת. In her great book [Automated Insulin Delivery](https://www.artificialpancreasbook.com/) Dana M. Lewis, one of the founders of the open source closed loop movement, calls it an ["autopilot for your diabetes"](https://www.artificialpancreasbook.com/3.-getting-started-with-your-aps). מה זה אומר?

**Autopilot in an aircraft**

הטייס האוטומטי אינו עושה את העבודה כולה ואינו נותן אפשרות לטייס לישון לאורך כל הטיסה. אך זה מקל על עבודת הטייסים. זה משחרר אותם מהנטל של ניטור קבוע של מצב המטוס. כך מתאפשר לטייס להתרכז בניטור המרחב האווירי ובבקרה על תפקודי הטייס האוטומטי.

הטייס האוטומטי מקבל אותות מחיישנים שונים, מחשב אותם יחד עם דרישות הטייס ולאחר מכן מבצע את ההתאמות הנדרשות. הטייס כבר לא צריך לדאוג מכיוונונים תכופים.

**Closed Loop System**

אותו דבר לגבי מערכת לולאה סגורה של לבלב מלאכותי. המערכת לא עושה את כל העבודה, עליכם עדיין יש חובה לדאוג לסוכרת. מערכת לולאה סגורה משלבת את נתוני חיישני הסוכר עם מפרטי ניהול הסוכרת שלכם כגון המינון הבזאלי, יחס התיקון ויחס הפחמימות. מכאן הוא מחשב הצעות טיפול ומיישם התאמות קטנות וקבועות אלה על מנת לשמור על איזון הסוכרת בטווח המטרה ולהקל עליך את הטיפול. זה משאיר יותר זמן לחיים "ליד" הסוכרת.

בדיוק כפי שאינכם רוצים לעלות על מטוס שבו תמיד הטייס האוטומטי טס ללא פיקוח אנושי, מערכת לולאה סגורה עוזרת בניהול הסוכרת, אך תמיד זקוקה לתמיכתכם! **Even with a closed loop you can't just forget your diabetes!**

בדיוק כפי שהטייס האוטומטי תלוי בערכי החיישן וגם בדרישות הטייס, מערכת לולאה סגורה זקוקה לקלט מתאים כגון ערכי מינון בזאלי, יחס תיקון ויחס פחמימות כדי לאזן אתכם בהצלחה.

## מערכות לבלב מלאכותיות בלולאה סגורה בקוד פתוח

כיום קיימות שלוש מערכות קוד פתוח עיקריות:

### AndroidAPS (AAPS)

AndroidAPS is described in detail in [this documentation](./WhatisAndroidAPS.html). המערכת משתמשת בסמארטפון אנדרואיד לחישוב ולשליטה על משאבת האינסולין. It is in strong collaboration with OpenAPS (i.e. they share algorithms).

Compatible [pumps](../Hardware/pumps.md) are:

- [DanaR](../Configuration/DanaR-Insulin-Pump.md) / [DanaRS & Dana-i](../Configuration/DanaRS-Insulin-Pump.html)
- [Accu-Chek Combo](../Configuration/Accu-Chek-Combo-Pump.md)
- [Accu-Chek Insight](../Configuration/Accu-Chek-Insight-Pump.md)
- [Diaconn G8](../Configuration/DiaconnG8.md)
- [Omnipod DASH](../Configuration/OmnipodDASH.md)
- [Omnipod Eros](../Configuration/OmnipodEros.md)
- some old [Medtronic pumps](../Configuration/MedtronicPump.md)

### OpenAPS

[OpenAPS](https://openaps.readthedocs.io) was the first Open Source Closed Loop System. היא משתמשת במחשבים זעירים כמו Raspberry Pi ו-Intel Edison.

משאבות תואמות:

- some old Medtronic pumps

### Loop ל-iOS

[Loop for iOS](https://loopkit.github.io/loopdocs/) is the Open Source Closed Loop System to be used with Apple iPhones.

משאבות תואמות:

- Omnipod DASH
- Omnipod Eros
- some old Medtronic pumps
