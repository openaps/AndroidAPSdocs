# Dexcom G7, ONE+ ו-Stelo


## הערות מקדימות

חשוב לדעת: בניגוד ל-G6, המערכות G7, ONE+ ו-Stelo אינן מחליקות את הערכים, לא באפליקציה ולא במקלט. [לפרטים נוספים על כך](https://www.dexcom.com/en-us/faqs/why-does-past-cgm-data-look-different-from-past-data-on-receiver-and-follow-app).

```{admonition} Smoothing method 
Read [Smoothing method](../CompatibleCgms/SmoothingBloodGlucoseData.md) suggestions to use for Dexcom G7/ONE+/Stelo
```

## 1. xDrip (חיבור ישיר ל-G7, ONE+ או Stelo)

- xDrip מתחבר לחיישן בעצמו: יש להסיר את אפליקציית Dexcom, כי רק אפליקציה אחת יכולה להתחבר לחיישן. כדי להשאיר את אפליקציית Dexcom, השתמשו במקום זאת ב-[xDrip Companion App](#DexcomG7-xdrip-companion-app).
- פעלו לפי ההוראות כאן: [xDrip G7, ONE+ and Stelo](https://navid200.github.io/xDrip/docs/Dexcom/G7.html). נדרשת גרסה עדכנית של xDrip. הגרסה המינימלית מופיעה בדף המקושר.
- בחרו xDrip ב-[**הגדרות תצורה ← מקור ערכי הסוכר**](#Config-Builder-bg-source).

- התאימו את הגדרות xDrip לפי ההסברים בדף [הגדרות xDrip](../CompatibleCgms/xDrip.md).

## 2. Build Your Own Dexcom App (רק G7)

```{admonition} Old app version
:class: warning
Dexcom BYODA is now a very old version of the app and cannot be updated. לא זמין עבור ONE+ או Stelo.
```

-   [Build Your Own Dexcom App](https://docs.google.com/forms/d/e/1FAIpQLScD76G0Y-BlL4tZljaFkjlwuqhT83QlFM5v6ZEfO7gCU98iJQ/viewform?fbzx=2196386787609383750) (BYODA) תומכת בשידור מקומי אל AAPS

-   This app lets you use your Dexcom G7 with any Android smartphone.
-   Uninstall the original Dexcom app
-   Install the downloaded apk
-   Enter sensor code in patched app
-   לאחר זמן קצר, BYODA אמורה לקלוט את אות החיישן.

(DexcomG7-xdrip-companion-app)=

## 3. xDrip Companion App (G7, ONE+ ו-Stelo)

אפליקציית Dexcom הרשמית נשארת מחוברת לחיישן. xDrip קורא את ערכי הסוכר מההתראות של אפליקציית Dexcom ושולח אותם אל **AAPS**.

```{admonition} Not a trusted data source
:class: note
**AAPS** אינו מחשיב את xDrip במצב Companion App כ[מקור מהימן לערכי סוכר](#GettingStarted-TrustedBGSource): לכן SMB לא מותר בכל זמן.
```

### קריאת ההתראות של אפליקציית Dexcom

- השאירו את אפליקציית Dexcom מותקנת ומחוברת לחיישן. ההתראות שלה חייבות להישאר גלויות: אין להשתיק או להסתיר אותן.
- הורידו והתקינו את [xDrip](https://github.com/NightscoutFoundation/xDrip). השתמשו ב-xDrip באותן יחידות סוכר כמו באפליקציית Dexcom.
- ב-xDrip, עברו אל **Settings** > **Hardware Data Source** ובחרו **Companion App**.

  ![הגדרת Hardware Data Source ב-xDrip: Companion App](../images/xDrip_Companion_DataSource.png)

- xDrip מבקש הרשאה לקרוא התראות. הקישו על **OK**, ואז בחרו **xDrip** ברשימה והפעילו את **Allow notification access** (מתן גישה להתראות).

  ![רשימת הגישה להתראות](../images/xDrip_Companion_NotificationAccess1.png)

- אם **Allow notification access** מופיע באפור (*Controlled by Restricted Setting*), Android חוסם אותו כי xDrip לא הותקן מחנות Play:

  ![גישה להתראות שחסומה על ידי הגדרה מוגבלת](../images/xDrip_Companion_Restricted.png)

  פתחו את פרטי האפליקציה של xDrip (לחיצה ארוכה על הסמל של xDrip > **App info**), הקישו על תפריט שלוש הנקודות בחלק העליון של המסך ובחרו **Allow restricted settings**. לאחר מכן חזרו למסך הגישה להתראות ואשרו את הגישה.

  ![פרטי האפליקציה: Allow restricted settings](../images/xDrip_Companion_AllowRestricted.png)

  ![הגישה להתראות אושרה עבור xDrip](../images/xDrip_Companion_NotificationAccess2.png)

- ערכים מופיעים ב-xDrip כאשר אפליקציית Dexcom מציגה ערך חדש. אם לא מופיע דבר, ייתכן שיש להפעיל חיישן ב-xDrip: לפעולה זו אין השפעה על החיישן האמיתי. במצב זה Stelo מספק ערך כל 15 דקות.

### Companion Bluetooth (G7)

כאשר אפליקציית Dexcom מחוברת לחיישן G7, xDrip יכול גם להאזין לערכים שהחיישן שולח לאפליקציית Dexcom דרך Bluetooth. xDrip אינו מצומד לחיישן ואין צורך להזין את קוד החיישן: אפליקציית Dexcom נשארת בשליטה.

עם **Companion Bluetooth**, xDrip מקבל מהחיישן את הזמן המדויק ואת המגמה של כל ערך, במקום הזמן שבו ההתראה הופיעה, ומשלים פערים מהזמן שבו הטלפון היה מחוץ לטווח (backfill).

- ב-xDrip, עברו אל **Settings** > **Less common settings** > **Bluetooth Settings** והפעילו את **Companion Bluetooth**.

  ![הגדרות Bluetooth ב-xDrip: Companion Bluetooth](../images/xDrip_Companion_Bluetooth.png)

- האפשרות לא פועלת בכל הטלפונים ובכל גרסאות Android. אם מופיעות בעיות, יש לכבות אותה.
- אם חיישן Dexcom ישן עדיין נמצא ברשימת Bluetooth של הטלפון, xDrip עלול להאזין לחיישן הלא נכון: ב-Android, ב-**הגדרות** > **מכשירים מחוברים**, יש לבטל את השיוך (Forget) של חיישנים שכבר אינם בשימוש.
- Companion Bluetooth מיועד ל-G7. עם ONE+ ו-Stelo, יש להסתמך על ההתראות.

### תצורה ב-AAPS

- בחרו xDrip ב-[**הגדרות תצורה ← מקור ערכי הסוכר**](#Config-Builder-bg-source).
- התאימו את הגדרות xDrip לפי ההסברים בדף [הגדרות xDrip](../CompatibleCgms/xDrip.md).

## 4. Juggluco (G7 ו-ONE+)

נדרשת גרסה 9.0+

- Disable the app previously connected to the sensor: Uninstall the app or use "Force Stop." Disable "Nearby Devices" permission in app settings. Restrict the app's battery usage.

- Forget the sensor in Bluetooth settings: In Android settings, find the sensor in bonded devices and select "Forget." Dexcom G7 sensor names start with DXCM.

- Avoid interference from other sensors: Keep old Dexcom sensors out of Bluetooth range.

- Connect the G7 sensor to Juggluco: Open Juggluco → Left menu → Photo. Scan the data matrix on the G7 sensor's applicator. Wait up to 5 minutes for Juggluco to find the sensor.

- Pairing requirements: Agree to pair the sensor with Juggluco. Ensure the screen isn’t locked during pairing. If pairing fails, wait 5 minutes before trying again.

- Exception: Wear OS watches can bond without pressing an agree button.
