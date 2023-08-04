# המלצות כלליות של חיישנים רציפים (CGM)

## היגיינה

בכל מערכת חיישן שהיא, אם אתם מתכוונים להשתמש בכיול מבוסס דם, אז יש כמה כללים מאוד ברורים שצריך ליישם, בין אם משתמשים בתוכנות "עשה זאת בעצמך" או באפליקציות הרשמיות.

-   יש לוודא שהידיים והערכה נקיות.
-   נסו לכייל כשהסוכר יציב, כלומר שיש סדרה של נקודות עם חץ שטוח  (בדרך כלל מספיקות 15-30 דקות)
-   הימנעו מכיול כאשר רמות הסוכר נעות מעלה או מטה.
-   בצעו "מספיק" כיולים - באפליקציות רשמיות, תתבקשו   לבצע בדיקות פעם או פעמיים ביום. במערכות עשה זאת בעצמך ייתכן שלא תתבקשו והיזהרו משימוש ללא כיולים.
-   אם אפשר, כיילו עם חלק מהקריאות שלך בטווח נמוך יותר (72-90 מ"ג/ד"ל) וחלק ברמה קצת יותר גבוהה (126-160 מ"ג/ד"ל) כי כך מסופק טווח טוב יותר עבור כיול הנקודה\שיפוע.

## הדבקת חיישן Dexcom G6

בעת החדרת החיישן, מומלץ לא ללחוץ חזק מדי על מכשיר ההחדרה על מנת למנוע דימום. חוט החיישן לא אמור לבוא במגע עם דם.

לאחר החדרת החיישן, ניתן ללחוץ את המשדר לתוך החיישן. זהירות! תחילה הרכיבו את הצד המרובע ולאחר מכן לחצו כלפי מטה על הצד העגול.

(GeneralCGMRecommendation-troubleshooting)=
## פתרון בעיות

### בעיה בחיבור

Bluetooth connection may be disturbed by other nearby Bluetooth devices such as blood glucose meters, headsets, tablets or kitchen devices such as microwave ovens or ceramic hobs. In this case xdrip does not display any BG values. When bluetooth connection is restabilised the data is backfilled.

### שגיאות חיישן

If recurring sensor errors occur try selecting a different body site to set your sensor. The sensor thread should not come into contact with blood.

Often a "Sensor Error" can be corrected by immediate drinking and massage around the sensor!

### ערכים קופצניים

You might try to change settings for noise blocking in xdrip (Settings - Inter-App Settings - Noise Blocking) i.e. "Block Very High noise and worse". See also [Smoothing BG data](../Usage/Smoothing-Blood-Glucose-Data-in-xDrip.md).

### גיל חיישן שלילי

![Negative sensor age](../images/Troubleshooting_SensorAge.png)

This occurs if there is either a double "CGM Sensor Insert" entry in [actions tab / menu](Config-Builder-actions) or a sensor insert with wrong date. Go to treatments tab \> careportal and delete the wrong entry.
