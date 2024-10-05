# Dexcom G7 and ONE+


## תחילה הערות

Noteworthy is the fact that the G7 and ONE+ systems, compared to the G6, do not smooth the values, neither in the app, nor in the reader. [לפרטים נוספים על כך](https://www.dexcom.com/en-us/faqs/why-does-past-cgm-data-look-different-from-past-data-on-receiver-and-follow-app).

![G7 english](../images/6fe30b84-227a-4bae-a9a5-527cee341dbf.png)

```{admonition} [Smoothing method](../Usage/Smoothing-Blood-Glucose-Data)
:class: warning
**Exponential Smoothing** **MUST** be enabled for meaningful use of the G7 / ONE+ values.  
```

## 1.  יישום Dexcom G7 ששונתה (Patched) (DiAKEM)

**Note: AAPS 3.2.0.0 or higher is required! Not available for ONE+.**

### התקינו אפליקציית G7 ששונתה (!) והפעילו את החיישן

A patched Dexcom G7 app (DiAKEM) gives access to the Dexcom G7 data. This is not the BYODA app as this app can not receive G7 data at the moment.

Uninstall the original Dexcom app if you used it before (A running sensor session can be continued - note the sensor code before removal of the app!)

Download and install the patched.apk [here](https://github.com/authorgambel/g7/releases).

Enter sensor code in the patched app.

Follow the general recommendations for CGM hygiene and sensor placement found [here](../Hardware/GeneralCGMRecommendation.md).

After the warm-up phase, the values are displayed as usual in the G7 app.

### תצורה ב-AAPS

For the configuration in AAPS
- בחרו 'BYODA' [בבונה התצורה, מקור ערכי הסוכר](../Configuration/Config-Builder.md#bg-source) - אפילו אם זה לא היישום BYODA!

- אם ב-AAPS לא מתקבלים ערכים, החליפו למקור ערכי סוכר אחרים ואז חזרו ל'BYODA' כדי לגרום ל-AAPS לחפש נתונים מ-BYODA.

## 2. xDrip+ (direct connection to G7 or ONE+)

- עקבו אחר ההוראות כאן: [Xdrip+ G7](https://navid200.github.io/xDrip/docs/Dexcom/G7.html)
- בחרו את xDrip+ ב[בונה התצורה, מקור נתוני סוכר](../Configuration/Config-Builder.md#bg-source).

- התאימו את ההגדרות של xDrip+ לפי ההסברים בדף [ההגדרות של xDrip+](../Configuration/xdrip.md).

## 3. xDrip+ (מצב מלווה)

-   הורידו והתקינו את [xDrip](https://github.com/NightscoutFoundation/xDrip).
- בחרו "Companion App" כמקור נתונים בxDrip+ ויש לבחור בהגדרות פחות נפוצות> הגדרות בלוטות' > יש לאפשר "Companion Bluetooth".
-   בחרו את xDrip+ ב[בונה התצורה, מקור נתוני סוכר](../Configuration/Config-Builder.md#bg-source).

-   התאימו את ההגדרות של xDrip+ לפי ההסברים בדף [ההגדרות של xDrip+](../Configuration/xdrip.md). 
