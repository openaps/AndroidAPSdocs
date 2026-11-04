# המלצות כלליות של חיישנים רציפים (CGM)

## היגיינת CGM

ללא קשר למערכת ה-CGM שבה אתם משתמשים, אם אתם מתכוונים לכייל באמצעות בדיקות דם, יש כמה כללים ברורים מאוד שעליכם ליישם, בין שאתם משתמשים בתוכנת CGM בשיטת עשו זאת בעצמכם ובין שבאפליקציות הרשמיות.

-   יש לוודא שהידיים והערכה נקיות.
-   Try to calibrate when you have a series of dots with a flat arrow (15-30 minutes is usually enough)
-   הימנעו מכיול כאשר רמות הסוכר נעות מעלה או מטה.
-   Do “enough” calibrations – on official apps, you will be prompted for once or twice per day checks. במערכות בשיטת עשו זאת בעצמכם ייתכן שלא תתבקשו לעשות זאת, ועליכם להיזהר מהמשך שימוש ללא כיולים.
-   For sensors not requiring or not allowing calibration, check at least daily real blood sugar. AAPS will be as safe as your sensor readings are reliable.
-   אם רק אפשר, כיילו עם חלק מהקריאות בטווח נמוך (4-5mmol/L או 72-90mg/dL) וחלק ברמה מעט גבוהה יותר (7-9mmol/L או 126-160mg/dL), כי כך מתקבל טווח טוב יותר לכיול הנקודה/השיפוע.

## הדבקת חיישן Dexcom G6

When setting sensor, it is recommended not to press the inserter too firmly in order to avoid bleeding. The sensor contacts should not come into contact with blood.

After setting the sensor, the transmitter can be clicked into the sensor holder. זהירות! First click in the square side and then press down the round side.

(general-cgm-troubleshooting)=
## פתרון תקלות

### בעיה בחיבור

Bluetooth connection may be disturbed by other nearby Bluetooth devices such as blood glucose meters, headsets, tablets or kitchen devices such as microwave ovens or ceramic hobs. במקרה זה xDrip אינו מציג ערכי סוכר. When Bluetooth connection is re-established the data is backfilled.

### שגיאות חיישן

If recurring sensor errors occur try selecting a different body site to set your sensor. The sensor contacts should not come into contact with blood.

Often a "Sensor Error" can be corrected by immediate drinking and massage around the sensor!

### ערכים קופצניים

אפשר לנסות לשנות ב-xDrip את ההגדרות של חסימת רעש (Settings - Inter-App Settings - Noise Blocking), למשל "Block Very High noise and worse". See also [Smoothing BG data](../CompatibleCgms/SmoothingBloodGlucoseData.md).

### גיל חיישן שלילי

![גיל החיישן בשורה "חיישן" בלוח המצב המורחב](../images/main/main_status_row_expanded.png)

גיל החיישן מוצג בשורה **חיישן** של לוח המצב במסך הראשי (הקישו על החץ כדי להרחיב אותו). גיל שלילי מופיע אם יש רשומת "הכנסת חיישן" כפולה ב[פורטל הטיפולים](#aaps-screens-careportal) או רשומת הכנסת חיישן עם תאריך שגוי. פתחו את **היסטוריית טיפולים** (תפריט ☰), בחרו בלשונית **פורטל טיפולים** ומחקו את הרשומה השגויה.
