# Dexcom G6

## ראשית דבר

-   Follow general CGM hygiene and setting sensor recommendation [here](../Hardware/GeneralCGMRecommendation.md).

## הנחיות כלליות ללופ עם G6

כדי להשתמש בו בבטחה, יש לשים לב למספר נקודות:

-   If you are using a rebatteried or modded transmitter with xDrip+, the safest thing to do is **disable** preemptive restarts of the sensor that are anyway not needed for xDrip+.
-   "השרייה" מוקדמת של ה-G6 (הדבקת חיישן מבלי להפעילו למספר שעות) עם כיול המפעל עשויה לגרום סטיה בתוצאות. אם אתם עושים השרייה מוקדמת, כדי לקבל את התוצאות הטובות ביותר, סביר להניח שתצטרכו לכייל את החיישן.

To learn more about the details and reasons for these recommendations read the [complete article](https://www.diabettech.com/artificial-pancreas/diy-looping-and-cgm/) published by Tim Street at [www.diabettech.com](https://www.diabettech.com).

## אם משתמשים ב-G6 עם xDrip+

-   ניתן לחבר בו-זמנית משדר דקסקום G6 למקלט דקסקום (או לחילופין את המשאבה t:slim) ואפליקציה אחת בטלפון.
-   בעת שימוש ב-xDrip+ כמקלט הסירו תחילה את אפליקציית דקסקום. **You cannot connect xDrip+ and Dexcom app with the transmitter at the same time!**
-   If you need Clarity and want to profit from xDrip+ alarms use the [BYODA](DexcomG6-if-using-g6-with-build-your-own-dexcom-app) with local broadcast to xDrip+.
-   If not already set up, download [xDrip+](https://github.com/NightscoutFoundation/xDrip) and follow the instructions on [xDrip+ settings page](../Configuration/xdrip.md).
-   Select xDrip+ in ConfigBuilder (setting in AAPS).
-   Adjust settings in xDrip+ according to [xDrip+ settings page](../Configuration/xdrip.md)
-   If AAPS does not receive BG values when phone is in airplane mode use 'Identify receiver' as describe on [xDrip+ settings page](../Configuration/xdrip.md).

(DexcomG6-if-using-g6-with-build-your-own-dexcom-app)=
## אם משתמשים ב-G6 עם Build Your Own Dexcom App (BYODA)

-   As of December 2020 [Build Your Own Dexcom App](https://docs.google.com/forms/d/e/1FAIpQLScD76G0Y-BlL4tZljaFkjlwuqhT83QlFM5v6ZEfO7gCU98iJQ/viewform?fbzx=2196386787609383750&fbclid=IwAR2aL8Cps1s6W8apUVK-gOqgGpA-McMPJj9Y8emf_P0-_gAsmJs6QwAY-o0) (BYODA) also supports local broadcast to AAPS and/or xDrip+ (not for G5/ONE/G7 sensors!)
-   אפליקציה זו מאפשרת להשתמש ב-Dexcom G6 עם כל סמארטפון אנדרואיד.
-   Uninstall the original Dexcom app or patched Dexcom app if you used one of those previously (**do not stop** the currently running sensor)
-   התקינו את קובץ ה-APK של יישום שהורדתם
-   הזינו את קוד החיישן ואת המספר סידורי של המשדר.
-   In phone settings go to apps > Dexcom G6 > permissions > additional permissions and press 'Access Dexcom app'.
-   לאחר זמן קצר BYODA אמור לקלוט את אות המשדר.

### Settings for AAPS

-   בחרו "אפליקציית Dexcom עם פאץ'" בבונה התצורה.
-   If you don't receive any values select any other data source, then re-select 'Dexcom App (patched)' to trigger the demand for permissions to establish the connection between AAPS and BYODA-broadcast.

### הגדרות עבור xDrip+

-   בהגדרות xDrip בחרו '640G/Eversense' כמקור נתונים.
-   Command 'start sensor' must be performed in xDrip+ in order to receive values. This will not affect your current sensor controlled by Build Your Own Dexcom App.


(DexcomG6-troubleshooting-g6)=
## פתרון בעיות G6

### פתרון בעיות ספציפיות של Dexcom G6

-   Scroll down to **Troubleshooting** [here](https://navid200.github.io/xDrip/docs/Dexcom_page.html).

### פיתרון בעיות כלליות

General Troubleshooting for CGMs can be found [here](./GeneralCGMRecommendation.md#troubleshooting).

### משדר חדש עם חיישן שכבר מופעל

If you happen to change transmitter during a running sensor session you might try to remove the transmitter without damaging the sensor mount. A video can be found at <https://youtu.be/tx-kTsrkNUM> and [here](https://navid200.github.io/xDrip/docs/Remove-transmitter.html).
