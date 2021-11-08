# הגדרות xDrip+

אם עוד לא התקנתם, הורידו [מכאן את xDrip+](https://jamorham.github.io/#xdrip-plus).

**תיעוד זה נועד ל-xDrip במכשירי אנדרואיד בלבד.** ישנו "xDrip for iOS" ולו אין כל קשר עם xDrip+ של מכשירי אנדרואיד.

עבור משדרי G6 המיוצרים לאחר סתיו/סוף 2018 (כלומר מספר סידורי מתחיל ב-81 או 80) תוכלו להשתמש [בגרסה הראשית](https://jamorham.github.io/#xdrip-plus).

אם המספר הסידורי של משדר G6 מתחיל ב-8G..., 8J... או 8L... השתמשו [בגרסה הלילית העדכנית](https://github.com/NightscoutFoundation/xDrip/releases).

אם הטלפון מפעיל את Android 10 ואתם נתקלים בקשיים ב- xDrip+ בגרסה הראשית, נסו להתקין [גרסה לילית מ-31/12/2019 ואילך](https://github.com/NightscoutFoundation/xDrip/releases).

## הגדרות בסיסיות לכל סוגי החיישנים

* וודאו שהגדרתם את כתובת הנייטסקאוט כראוי, כולל **S** בסוף http**s**:// (לא http://) וכולל הסיומת /api/v1 כמודגם.
   
   לדוגמה: https://API_SECRET@your-app-name.herokuapp.com/api/v1/
   
   ב-xDrip, תפריט המבורגר (בפינה השמאלית העליונה) > הגדרות > העלאה לענן > סינכרון לנייטסקאוט (rest api) > כתובת URL בסיסית

* אם תיבת הסימון של `כיול אוטומטי` מסומנת, הפעילו את `הורדת הנתונים` פעם אחת, ולאחר מכן כבו את תיבת הסימון ל`כיול אוטומטי` והשביתו את `הורדת הנתונים` שוב, אחרת הטיפולים (אינסולין ופחמימות) יתווספו פעמיים לנייטסקאוט.

* בחרו ב`אפשרויות נוספות`

* בטלו את `העלאת טיפולים` ו`נתוני מילוי חוזר`.
   
   **אזהרת בטיחות: עליכם לבטל את "העלאת טיפולים" מ-xDrip+, אחרת הטיפולים יוכפלו ב-AAPS ונתוני האינסולין והפחמימות הפעילים יהיו מוטעים.**

* על האפשרות `התראה על כשלונות` להיות כבויה. אחרת תקבלו התראה כל 5 דקות אם אין חיבור לאינטרנט או אם השרת אינו נגיש.
   
   ![xDrip+ Basic Settings 1](../images/xDrip_Basic1.png)
   
   ![xDrip+ Basic Settings 2](../images/xDrip_Basic2.png)

* **הגדרות לשיתוף פעולה בין אפליקציות** (הפץ על הטלפון) אם תשתמשו ב-AndroidAPS והנתונים של xDrip צריכים להיות מופנים ל-AndroidAPS, עליכם להפעיל את הפץ על הטלפון בתפריט הגדרות לשיתוף פעולה בין אפליקציות.

* על מנת שהערכים יהיו שווים, עליכם להפעיל `שלח גלוקוז מוצג`.

* אם אפשרתם את `קבל טיפולים` וגם את "אפשר שידורים מקומיים" ב-AndroidAPS, אז xDrip+ יקבל מידע על אינסולין, פחמימות ומינונים בזאליים מ-AndroidAPS ויוכל להעריך את תחזית להתנהגות הסוכר וכו' טוב יותר.
   
   ![xDrip+ Basic Settings 3](../images/xDrip_Basic3.png)

### זיהוי מקלט

* אם אתם חווים בעיות בשידור מקומי (AAPS שאינו מקבל ערכי סוכר מ-xDrip+) גשו להגדרות > הגדרות לשיתוף פעולה בין אפליקציות > זיהוי מקלט והזינו `info.nightscout.androidaps`.
* שימו לב: תיקון אוטומטי נוטה לפעמים לשנות את האות הראשונה לאות גדולה. **עליכם להשתמש באותיות קטנות בלבד** בעת הקלדת `info.nightscout.androidaps`. אותיות גדולות מונעות מ-AAPS לקבל את ערכי הסוכר מ-xDrip+.
   
   ![xDrip+ Basic Inter-app Settings Identify receiver](../images/xDrip_InterApp_NS.png)

## xDrip ודקסקום G6

* ניתן לחבר בו-זמנית משדר דקסקום G6 למקלט דקסקום (או לחילופין את המשאבה t:slim) ואפליקציה אחת בטלפון.
* בעת שימוש ב-xDrip+ כמקלט הסירו תחילה את אפליקציית דקסקום. **לא ניתן לחבר את xDrip+ וגם את אפליקציית דקסקום למשדר בו-זמנית!**
* אם אתם צריכים להשתמש ב-Clarity ורוצים ליהנות מהתראות ש-xDrip+ מציע, השתמשו ב[אפליקציית דקסקום עם פאצ'](../Hardware/DexcomG6#if-using-g6-with-patched-dexcom-app), המציעה שידור מקומי ל-xDrip+.

### גרסת xDrip+ בהתאם למספר הסידורי של משדר G6

* עבור משדרי G6 המיוצרים לאחר סתיו/סוף 2018 (כלומר מספר סידורי שמתחיל ב-80 או 81) תוכלו להשתמש ב[גרסת המאסטר](https://jamorham.github.io/#xdrip-plus). 
* אם המספר הסידורי של משדר G6 מתחיל עם 8G, 8H או 8J נסו [גרסה לילית מ-28/07/2019 ואילך](https://github.com/NightscoutFoundation/xDrip/releases).

### הגדרות ספציפיות לדקסקום

* פתחו את הגדרות דיבאג של G5/G6: תפריט המבורגר (משמאל למעלה במסך הבית) > הגדרות > הגדרות דיבאג של G5/G6![Open xDrip+ Settings](../images/xDrip_Dexcom_SettingsCall.png)

* הפעילו את ההגדרות הבאות
   
   * `Use the OB1 Collector`
   * `Native Algorithm` (חשוב למשתמשי SMB)
   * `G6 support`
   * `Allow OB1 unbonding`
   * `Allow OB1 initiate bonding`
* כל שאר ההגדרות בתפריט זה צריכות להיות כבויות
* שנו את רמת האזהרה של הסוללה ל-280 (בתחתית תפריט הגדרות דיבאג G5/G6) 
   
   ![xDrip+ G5/G6 Debug Settings](../images/xDrip_Dexcom_DebugSettings.png)

### אתחול מונע לא מומלץ 

**במשדרי G6 עם מספר סידורי שמתחיל ב- 8G, 8H ,8J וכו', אתחול מונע לא עובד ועלול לקלקל את המשדר!**

הארכה אוטומטית של חיישני דקסקום(`preemptive restarts`) אינה מומלצת מכיוון שהדבר עלול להוביל ל"קפיצות "בערכי הסוכר ביום התשיעי לאחר ההפעלה מחדש. 

![xDrip+ Jump after Preemptive Restart](../images/xDrip_Dexcom_PreemptiveJump.png)

What’s clear is that using the G6 is perhaps a little more complex than it as first suggests. To use it safely, there are a few points to be aware of:

* אם אתם משתמשים בנתונים הנאטיביים (Native Data) עם קוד הכיול ב-xDrip+ או ב-Spike, הדבר הבטוח ביותר שאפשר לעשות הוא לא לאפשר הפעלה מחדש של החיישן.
* אם אתם מוכרחים להשתמש באתחול מונע, הקפידו להפעיל זאת בזמן ביום בו תוכלו לצפות בשינוי ולכייל במידת הצורך. 
* אם אתם מפעילים מחדש חיישנים, בצעו זאת ללא כיול המפעל לקבלת התוצאות הבטוחות ביותר בימים 11 ו -12, או וודאו שאתם מוכנים לכייל ולשים עין על סטיות.
* "השרייה" מוקדמת של ה-G6 (הדבקת חיישן מבלי להפעילו למספר שעות) עם כיול המפעל עשויה לגרום סטיה בתוצאות. If you do pre-soak, then to get best results, you will probably need to calibrate the sensor.
* אם אינכם מקפידים לפקח על השינויים שעלולים להתרחש, אולי עדיף לחזור למצב שאינו מכויל ע"H היצרן ולהשתמש במערכת כמו G5.

למידע נוסף על הפרטים והסיבות להמלצות אלה קראו את [המאמר המלא](https://www.diabettech.com/artificial-pancreas/diy-looping-and-cgm/) שפרסם טים סטריט בכתובת [www.diabettech.com](https://www.diabettech.com).

### חיבור משדר G6 בפעם הראשונה 

**עבור משדרים שניים וכו', ראו [הארכת חיי המשדר](#extend-transmitter-life) להלן. **

עבור משדרי G6 המיוצרים לאחר סתיו/סוף 2018 (כלומר מספר סידורי שמתחיל ב-80 או 81) תוכלו להשתמש ב[גרסת המאסטר](https://jamorham.github.io/#xdrip-plus).

אם המספר הסידורי של משדר G6 מתחיל עם 8G, 8H או 8J נסו [גרסה לילית מ-28/07/2019 ואילך](https://github.com/NightscoutFoundation/xDrip/releases).

* כבו את מקלט דקסקום המקורי (אם נעשה בו שימוש).
* לחצו לחיצה ארוכה על סמל xDrip+ (טיפת דם) במסך הראשי כדי להפעיל את `אשף בחירת סנסור`.
* שימוש בלחצן אשף המקור מבטיח הגדרות ברירת מחדל הכוללות OB1 ומצב נאטיבי 
   * זה ינחה אותכם בהגדרה הראשונית. 
   * תזדקקו להזין את המספר הסידורי של המשדר אם זו הפעם הראשונה שבה אתה משתמש בו. 

* הזינו את המספר הסידורי של המשדר החדש (שעל אריזת המשדר או בגב המשדר). היזהרו לא להתבלבל בין `0` (אפס) לבין ` O ` (האות o).
   
   ![xDrip+ Dexcom Transmitter Serial No](../images/xDrip_Dexcom_TransmitterSN.png)

* הכניסו חיישן חדש (רק אם מחליפים אותו)

* הכניסו את המשדר לחיישן
* אם צצה הודעה המבקשת להתאמה עם "DexcomXX", כאשר "XX" הוא שני התווים האחרונים של המספר הסידורי של המשדר, אשרו אותה (הקישו על "צמד")
* אין להפעיל חיישן חדש לפני שהמידע הבא מוצג בדף הסטטוס הקלאסי > מצב G5/G6 < PhoneServiceState:
   
   * Transmitter serial starting with 80 or 81: "Got data hh:mm" (i.e. "Got data 19:04")
   * משדרים עם מספרים סידוריים המתחילים ב-8G, 8H, 8J וכו': "Got glucose hh:mm" (לדוגמה: "Got glucose 19:04") או "Got no raw hh:mm" (לדוגמה: "Got no raw 19:04") 
   
   ![xDrip+ PhoneServiceState](../images/xDrip_Dexcom_PhoneServiceState.png)

* התחל חיישן (רק אם מחליפים)
   
   > בחלק התחתון של המסך יוצג `Warm Up x,x hours left` לאחר מספר דקות.

> אם המספר הסידורי המשדר מתחיל עם 8G, 8H, 8J וכו' ולא מפורט זמן לאחר מספר דקות, יש לעצור ולהפעיל מחדש את החיישן.

* הפעילו מחדש את האוסף (סטטוס מערכת - אם לא מחליף חיישן) 
* אל תפעיל את מקלט הדקסקום המקורי (אם יש) לפני ש-xDrip+ יציג נתוני סוכר ראשונים.
* לחצו לחיצה ארוכה על סמל טיפת דם של xDrip+ במסך הראשי כדי להשבית את הלחצן `לחצן אשף המקורות`.
   
   ![xDrip+ Dexcom Transmitter 1](../images/xDrip_Dexcom_Transmitter01.png)
   
   ![xDrip+ Dexcom Transmitter 2](../images/xDrip_Dexcom_Transmitter02.png)
   
   ![xDrip+ Dexcom Transmitter 3](../images/xDrip_Dexcom_Transmitter03.png)
   
   ![xDrip+ Dexcom Transmitter 4](../images/xDrip_Dexcom_Transmitter04.png)

### מצב סוללת המשדר

* ניתן לשלוט על מצב הסוללה בסטטוס מערכת (תפריט המבורגר משמאל למעלה במסך הבית)
* החליקו שמאלה כדי לראות את המסך השני.![xDrip+ First Transmitter 4](../images/xDrip_Dexcom_Battery.png)

* הערכים המדויקים בהם המשדר "מת" עקב סוללה ריקה אינם ידועים. המידע הבא פורסם ברשת לאחר שהמשדר "מת":
   
   * פרסום 1: ימי משדר: 151 / מתח A: 297 / מתח B: 260 / התנגדות: 2391 
   * פרסום 2: ימי משדר: 249 / מתח A: 275 (בזמן הכישלון)

### הארכת חיי המשדר

* עד כה לא ניתן להאריך את חיי המשדרים עם מספר סידורי starts with 8G, 8H or 8J. Same is true for transmitters with serial no. starting with 81 and firmware 1.6.5.**27** (see xDrip+ System Status - G5/G6 status as shown in [screenshot above](../Configuration/xdrip#transmitter-battery-status)).
* To prevent difficulties starting sensors it is highly recommended to extend transmitter life before day 100 of first usage.
* Use of transmitters serial no. starting with 81 and firmware 1.6.5.**27** beyond day 100 is only possible if [engineering mode](../Usage/Enabling-Engineering-Mode-in-xDrip) is turned on and 'native mode' is deactivated (hamburger menu -> settings -> G5/G6 debug settings -> native algorithm) because a transmitter hard reset is NOT possible.
* Running sensor session will be stopped when extending transmitter life. So, extend before sensor change or be aware that there will be a new 2 h warm-up phase.
* Stop sensor manually via hamburger menu.
* Switch to the `engineering mode`: 
   * tap on the character on the right of the xDrip+ start screen that represents a syringe
   * then tap on the microphone icon in the lower right corner
   * In the text box that opens type "enable engineering mode" 
   * click "Done"
   * If Google Speak engine is enabled, you can also speak the voice command: "enable engineering mode". 
* Go to the G5 debug settings and make sure `Use the OB1 collector` is enabled.
* Use the voice command: “hard reset transmitter”
* The voice command will be executed with the next data receipt of the transmitter
* Look at the system status (Hamburger menu -> system status) and see what happens
* After approx. 10 min. you can switch to 'Classic Status Page' (swipe right) and click 'Restart collector'. This will set sensor days to 0 without the need to start a new sensor.
* Alternative: If you see a message "Phone Service State: Hard Reset maybe failed" on second system status screen just start the sensor and this message should go away.
   
   ![xDrip+ Hard Reset maybe failed](../images/xDrip_HardResetMaybeFailed.png)

* Transmitter days will be set to 0 after successful extension and start of sensor.

### Replace transmitter

עבור משדרי G6 המיוצרים לאחר סתיו/סוף 2018 (כלומר מספר סידורי שמתחיל ב-80 או 81) תוכלו להשתמש ב[גרסת המאסטר](https://jamorham.github.io/#xdrip-plus).

אם המספר הסידורי של משדר G6 is starting with 8G, 8H or 8Juse one of the [latest nightly builds](https://github.com/NightscoutFoundation/xDrip/releases).

* כבו את מקלט דקסקום המקורי (אם נעשה בו שימוש).
* Stop sensor (only if replacing sensor)
   
   Ensure it really is stopped:
   
   On the second "G5/G6 Status" screen look at `Queue Items` about halfway down - It may say something like `(1) Stop Sensor`
   
   Wait until this goes - usually within a few minutes. Sensor Status must be "Stopped" (see screenshot).
   
   -> To remove transmitter without stopping sensor see this video <https://youtu.be/AAhBVsc6NZo>.
   
   ![xDrip+ Stop Dexcom Sensor 1](../images/xDrip_Dexcom_StopSensor.png)
   
   ![xDrip+ Stop Dexcom Sensor 2](../images/xDrip_Dexcom_StopSensor2.png)

* Forget device in xDrip+ system status AND in smartphone’s BT settings (Will be shown as Dexcom?? whereas ?? are the last two digits of the transmitter serial no.)
   
   ![xDrip+ Forget Device](../images/xDrip_Dexcom_ForgetDevice.png)

* Remove transmitter (and sensor if replacing sensor)

* Put the old transmitter far away to prevent reconnection. A microwave is a perfect Faraday shield for this - but unplug power cord to be 100% no one is turning the microwave on.
* לחצו לחיצה ארוכה על סמל xDrip+ (טיפת דם) במסך הראשי כדי להפעיל את `אשף בחירת סנסור`.
* שימוש בלחצן אשף המקור מבטיח הגדרות ברירת מחדל הכוללות OB1 ומצב נאטיבי 
   * זה ינחה אותכם בהגדרה הראשונית. 
   * You will need your transmitter serial number if this is the first time you've used it.
* Put in serial number of new transmitter. Be careful not to confuse 0 (zero) and O (capital letter o).
* Insert new sensor (only if replacing).
* Put transmitter into sensor - **Do not start sensor immediately!**
* New "Firefly Transmitters" (serial no. starting with 8G, 8H or 8J) can only be used in native mode.
* The following options must not be activated for new "Firefly Transmitters" (serial no. starting with 8G, 8H or 8J):
   
   * Preemptive Restart (disable!)
   * Restart sensor (disable!)
   * Fallback to xDrip+ (disable!)
   
   ![Settings for Firefly transmitters](../images/xDrip_Dexcom_FireflySettings.png)

* Check in Classic Status Page -> G5/G6 status -> PhoneServiceState if one of the following information is displayed:
   
   * Transmitter serial starting with 80 or 81: "Got data hh:mm" (i.e. "Got data 19:04")
   * Transmitter serial starting with 8G, 8H or 8J: "Got glucose hh:mm" (i.e. "Got glucose 19:04") or "Got no raw hh:mm" (i.e. "Got now raw 19:04")
   
   ![xDrip+ PhoneServiceState](../images/xDrip_Dexcom_PhoneServiceState.png)

* Wait 15 minutes as the transmitter should communicate several times with xDrip before new sensor is started. Battery data will be shown below Firmware information.
   
   ![Firefly transmitter battery data](../images/xDrip_Dexcom_FireflyBattery.png)

* Start sensor and DO NOT BACKDATE! Always select "Yes, today"!

* Restart collector (system status - if not replacing sensor)
* אל תפעיל את מקלט הדקסקום המקורי (אם יש) לפני ש-xDrip+ יציג נתוני סוכר ראשונים.
* לחצו לחיצה ארוכה על סמל טיפת דם של xDrip+ במסך הראשי כדי להשבית את הלחצן `לחצן אשף המקורות`.
   
   ![xDrip+ Dexcom Transmitter 1](../images/xDrip_Dexcom_Transmitter01.png)
   
   ![xDrip+ Dexcom Transmitter 2](../images/xDrip_Dexcom_Transmitter02.png)
   
   ![xDrip+ Dexcom Transmitter 3](../images/xDrip_Dexcom_Transmitter03.png)
   
   ![xDrip+ Dexcom Transmitter 4](../images/xDrip_Dexcom_Transmitter04.png)

### New Sensor

* כבו את מקלט דקסקום המקורי (אם נעשה בו שימוש).
* Stop sensor if necessary
   
   Ensure it really is stopped:
   
   On the second "G5/G6 Status" screen look at `Queue Items` about halfway down - It may say something like `(1) Stop Sensor`
   
   Wait until this goes - usually within a few minutes.
   
   ![xDrip+ Stop Dexcom Sensor 1](../images/xDrip_Dexcom_StopSensor.png)
   
   ![xDrip+ Stop Dexcom Sensor 2](../images/xDrip_Dexcom_StopSensor2.png)

* Clean contacts (transmitter backside) with alcohol and let air-dry.

* In case you use this function disable `Restart Sensor` and `Preemptive restarts` (Hamburger menu -> Settings -> G5/G6 Debug Settings). If you miss this step and have these functions enabled the new sensor will not start properly.
   
   ![xDrip+ Preemptive Restart](../images/xDrip_Dexcom_Restart.png)

* Start Sensor
   
   **For new Firefly transmitters** (serial no. starting with 8G, 8H or 8J) **it is mandatory, for all other transmitters it is recommended to wait approx. 15 minutes between stopping and starting the new sensor (until `Sensor Status: Stopped` is shown on second system status screen). DO NOT BACKDATE!**

* Set time inserted
   
   * To use G6 Native mode you must wait for the 2 hour warm up (i.e insertion time is now).
   * If you are using the xDrip+ algorithm then you can set a time more than 2 hours ago to avoid warm up. Readings may be very erratic. Therefore, this is not recommended.
* Enter Sensor code (on the peel-off foil of the sensor) 
   * Keep code for further reference (i.e. new start after transmitter had to be removed)
   * Code can also be found in [xDrip+ logs](../Configuration/xdrip#retrieve-sensor-code): Click 3-dots-menu on xDrip+ homescreen and choose `View Event Logs`.
* No calibration is needed if you use G6 in "native mode". xDrip+ will show readings automatically after 2 hour warm-up.
* Do not turn original Dexcom Receiver (if used) back on before xDrip+ shows first readings.
   
   ![xDrip+ Start Dexcom Sensor 1](../images/xDrip_Dexcom_SensorStart01.png)
   
   ![xDrip+ Start Dexcom Sensor 2](../images/xDrip_Dexcom_SensorStart02.png)

### Retrieve sensor code

* In master dated 2019/05/18 and the latest nightly builds the sensor code is shown in system status (Hamburger menu top left on homescreen).
* Swipe left once to see second screen.
   
   ![xDrip+ Retrieve Dexcom Sensor Code2](../images/xDrip_Dexcom_SensorCode2.png)

* Dexcom sensor code can also be found in xDrip+ logs.

* Tap 3 dot menu (top right side on homescreen)
* Select `View Event Logs` and search for "code"
   
   ![xDrip+ Retrieve Dexcom Sensor Code](../images/xDrip_Dexcom_SensorCode.png)

## Troubleshooting Dexcom G5/G6 and xDrip+

### Problem connecting transmitter

* Transmitter must be shown in your smartphone's bluetooth settings.
* Transmitter will be shown as Dexcom?? whereas ?? represent the last two digits of your transmitter serial no. (i.e. DexcomHY).
* Open system status in xDrip+ (hamburger menu on top left side of home screen).
* Check if your transmitter is shown on first status page ('classic status page').
* If not: Delete device from your smartphone's bluetooth settings and restart collector.
* Wait about 5 min. until Dexcom transmitter reconnects automatically.

### Problem when starting new sensor

Please note that the following method might likely not work if your Dexcom G6 transmitter's serial no. is starting with 8G, 8H or 8J.

* Native sensor is marked as "FAILED: Sensor Failed Start"
* Stop sensor
* Restart your phone
* Start sensor with code 0000 (four times zero)
* Wait 15 minutes
* Stop sensor
* Start sensor with "real" code (printed on the adhesive protector)

Check in xDrip+ logs if xDrip+ starts counting "Duration: 1 minute" (and so on). Only in the xDrip+ logs you can detect at an early stage whether xdrip+ has stopped a sensor. Latest status is not always shown correctly on bottom of startscreen.

## xDrip+ & Freestyle Libre

### Libre specific settings

* Open Bluetooth Settings -> Hamburger Menu (top left of homescreen) -> Settings -> scroll down -> Less common settings -> Bluetooth Settings
   
   ![xDrip+ Libre Bluetooth Settings 1](../images/xDrip_Libre_BTSettings1.png)

* הפעילו את ההגדרות הבאות
   
   * `Turn Bluetooth on` 
   * `Use scanning`
   * `Always discover services`

* כל שאר ההגדרות בתפריט זה צריכות להיות כבויות
   
   ![xDrip+ Libre Bluetooth Settings 2](../images/xDrip_Libre_BTSettings2.png)

### Libre smart reader battery level

* Battery level of smart readers such as MiaoMiao 2 can be displayed in AAPS.
* Details can be found on [screenshots page](../Getting-Started/Screenshots#sensor-level-battery).

### Connect Libre Transmitter & start sensor

![xDrip+ Start Libre Transmitter & Sensor 1](../images/xDrip_Libre_Transmitter01.png)

![xDrip+ Start Libre Transmitter & Sensor 2](../images/xDrip_Libre_Transmitter02.png)

![xDrip+ Start Libre Transmitter & Sensor 3](../images/xDrip_Libre_Transmitter03.png)