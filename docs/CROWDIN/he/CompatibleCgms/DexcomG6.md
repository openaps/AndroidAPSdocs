# Dexcom G6 and ONE

## ראשית דבר

-   Follow general CGM hygiene and setting sensor recommendation [here](../CompatibleCgms/GeneralCGMRecommendation.md).

## General hints for looping with G6 and ONE

- Recent transmitters are called Firefly. לא ניתן להפעיל מחדש את החיישנים בלי להסיר את המשדר, ואת המשדר עצמו לא ניתן לאפס. הם גם אינם מפיקים נתונים גולמיים.

- If you are restarting sensors, ensure you are ready to calibrate and keep an eye on variation.

- השרייה מוקדמת (pre-soak) של G6/ONE עם כיול מפעל צפויה לגרום לשונות בתוצאות. אם אתם עושים השרייה מוקדמת, כדי לקבל את התוצאות הטובות ביותר, סביר להניח שתצטרכו לכייל את החיישן.

Read more in the [article](https://www.diabettech.com/artificial-pancreas/diy-looping-and-cgm/) published by Tim Street at [www.diabettech.com](https://www.diabettech.com).

## אם משתמשים ב-G6 או ב-ONE עם xDrip

- אם עדיין לא עשיתם זאת, הורידו את [xDrip](https://github.com/NightscoutFoundation/xDrip) והגדירו אותו לפי [דף ההגדרות של xDrip](../CompatibleCgms/xDrip.md).
- בחרו xDrip ב-[**הגדרות תצורה ← מקור ערכי הסוכר**](#Config-Builder-bg-source).
- The Dexcom G6 and ONE transmitters can simultaneously be connected to the Dexcom receiver (or alternatively the t:slim pump) and one app on your phone.
- כאשר משתמשים ב-xDrip כמקלט, יש להסיר קודם את אפליקציית Dexcom. **לא ניתן לחבר את xDrip ואת אפליקציית Dexcom למשדר באותו זמן!**
- אם צריך את Clarity ורוצים ליהנות מההתראות של xDrip, השתמשו ב-[BYODA](#DexcomG6-if-using-g6-with-build-your-own-dexcom-app) (רק G6) עם שידור מקומי (local broadcast) אל xDrip.
- You can also use xDrip as a companion app of the official Dexcom app, but you might experience delays in BG readings. To read the Dexcom app notifications without xDrip, as a trusted data source, use the [Notification Reader](#DexcomG6-notification-reader).
- עם המשדרים הנוכחיים xDrip תמיד משתמש ב[אלגוריתם המובנה](https://navid200.github.io/xDrip/docs/Native-Algorithm.html) של המשדר; אין סיבה לכבות אותו. [הפעלות מחדש מונעות](https://navid200.github.io/xDrip/docs/Preemptive-Restart.html) (Preemptive restarts) פועלות רק במשדרים ישנים (קושחה 1.6.5.25 או מוקדמת יותר), שבהם הן נחוצות כדי למנוע את עצירת החיישן אחרי 10 ימים; משדרים חדשים (Firefly) מתעלמים מהן. לפני כל ניסיון להפעיל מחדש, קראו את [Restart a sensor](https://navid200.github.io/xDrip/docs/Restart-G6-sensor.html) (הפעלה מחדש של חיישן).
- כל המידע על החיישן ועל המשדר עצמם נמצא ב[דף Dexcom של xDrip](https://navid200.github.io/xDrip/docs/Dexcom_page.html).

(DexcomG6-if-using-g6-with-build-your-own-dexcom-app)=
## אם משתמשים ב-G6 עם Build Your Own Dexcom App (BYODA)

```{admonition} Old app version
:class: warning
Dexcom BYODA is now a very old version of the app and cannot be updated.
```

-   [Build Your Own Dexcom App](https://docs.google.com/forms/d/e/1FAIpQLScD76G0Y-BlL4tZljaFkjlwuqhT83QlFM5v6ZEfO7gCU98iJQ/viewform?fbzx=2196386787609383750) (BYODA) תומכת בשידור מקומי אל AAPS ו/או אל xDrip

-   אפליקציה זו מאפשרת להשתמש ב-Dexcom G6 עם כל סמארטפון אנדרואיד.
-   Uninstall the original Dexcom app or patched Dexcom app if you used one of those previously (**do not stop** the currently running sensor)
-   Install the downloaded apk
-   הזינו את קוד החיישן ואת המספר הסידורי של המשדר באפליקציה המתוקנת.
-   In phone settings go to apps > Dexcom G6 > permissions > additional permissions and press 'Access Dexcom app'.
-   לאחר זמן קצר BYODA אמור לקלוט את אות המשדר.

### Settings for AAPS

-   בחרו **BYODA** ב-[**הגדרות תצורה → מקור ערכי הסוכר**](#Config-Builder-bg-source).

-   אם לא מתקבלים ערכים, בחרו מקור נתונים אחר כלשהו, ואז בחרו שוב **BYODA** כדי להפעיל את הבקשה להרשאות, שיוצרות את החיבור בין AAPS לבין השידור של BYODA.

### הגדרות עבור xDrip

-   בהגדרות xDrip בחרו '640G/Eversense' כמקור נתונים.
-   כדי לקבל ערכים, יש לבצע ב-xDrip את הפקודה 'start sensor'. This will not affect your current sensor controlled by Build Your Own Dexcom App.

(DexcomG6-notification-reader)=
## If using G6 or ONE with the Notification Reader

The official Dexcom G6 or ONE app stays connected to the transmitter. **AAPS** reads the glucose value directly from the notification of the Dexcom app, without any other app in between.

```{admonition} Trusted data source
:class: note
Readings from the Dexcom G6 and ONE apps are a [trusted BG data source](#GettingStarted-TrustedBGSource): SMBs can be allowed all the time.
```

Compared to BYODA or xDrip, the Notification Reader has limits:

- **No trend arrow** and **no backfill**: readings missed while the phone was off or out of range are lost.
- Each reading gets the time the notification appeared, not the exact time of the sensor reading.
- Only values between 40 and 405 mg/dL (2.2 and 22.5 mmol/L) are read. "LOW" and "HIGH" are not read.

### Set up the Dexcom app

-   Keep the Dexcom app installed and connected to the transmitter.
-   Make sure the Dexcom app shows the current glucose value in its notification. ההתראות שלה חייבות להישאר גלויות: אין להשתיק או להסתיר אותן.
-   Use the same glucose units (mg/dL or mmol/L) in the Dexcom app as in **AAPS**. Otherwise **AAPS** cannot read the value.

### תצורה ב-AAPS

-   Select **Notification Reader** in [**Configuration → BG Source**](#Config-Builder-bg-source) and confirm the switch.

    ![BG Source: Notification Reader selected](../images/NotificationReader_BgSource.png)

-   Back on the main screen, **AAPS** shows **Permissions Required**. Next to **Notification Access**, tap **Grant**.

    ![Permissions Required: Notification Access](../images/NotificationReader_Permissions.png)

-   Android opens its notification access list (its name depends on your Android version, for example *Notification read, reply & control*). Select **AAPS**, turn on **Allow notification access** and confirm with **Allow**.

    ![Android asks to allow notification access for AAPS](../images/NotificationReader_AllowDialog.png)

    Android warns that **AAPS** could read all your notifications. **AAPS** only reads the notifications of supported CGM apps and ignores all others.

    ![Notification access allowed for AAPS](../images/NotificationReader_AccessOn.png)

-   If **Allow notification access** is greyed out (*Controlled by Restricted Setting*), Android blocks it because **AAPS** was not installed from the Play Store. Open the **AAPS** app info (long press the **AAPS** icon > **App info**), tap the three dots menu at the top right and select **Allow restricted settings**. לאחר מכן חזרו למסך הגישה להתראות ואשרו את הגישה.
-   Readings appear in **AAPS** when the Dexcom app shows a new value.

```{warning}
If the Dexcom app notification shows more than one glucose number, or none, **AAPS** skips that notification.
```


(DexcomG6-troubleshooting-g6)=
## פתרון תקלות ב-G6 וב-ONE

### פתרון תקלות ייעודי ל-Dexcom G6/ONE

-   Scroll down to **Troubleshooting** [here](https://navid200.github.io/xDrip/docs/Dexcom_page.html).

### פיתרון בעיות כלליות

ניתן למצוא מידע כללי על פתרון תקלות ב-CGM [כאן](#general-cgm-troubleshooting).

### משדר חדש עם חיישן שכבר מופעל

If you happen to change transmitter during a running sensor session you might try to remove the transmitter without damaging the sensor mount. A video can be found [here](https://navid200.github.io/xDrip/docs/Remove-transmitter.html). If you opt for [this solution](https://youtu.be/tx-kTsrkNUM) instead, you must be careful to avoid [damaging sensor contacts](https://navid200.github.io/xDrip/docs/Petroleum-jelly-in-Dexcom-G6-Sensor.html) with the strip.
