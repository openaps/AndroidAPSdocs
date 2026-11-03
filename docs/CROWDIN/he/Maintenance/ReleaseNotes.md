
# Release notes

```{toctree}
:hidden:

Update2_7.md
Update3_0.md
UpdateAaps3204.md
```

כדי לעדכן לגרסה חדשה, יש לפעול לפי ההוראות ב[מדריך העדכון](UpdateToNewVersion.md). סעיף פתרון התקלות בדף מדריך העדכון מתייחס גם לקשיים הנפוצים ביותר בעת עדכון **AAPS**.

```{admonition} Upgrading from AAPS v3?
:class: tip
ראו [מה השתנה ב-AAPS v4](V4Changes.md) לשינויים העיקריים בהתנהגות — תכונות שעברו מקום, ששמן שונה או שהוסרו.
```

You will receive a notification like this when a new update is available:

![Update info](../images/AAPS_LoopDisable90days.png)

If you do not update until expiration date **AAPS** will switch to Open Loop.

ראו [סוף התמיכה](EndOfLife.md) לתאריכי הסיום של גרסאות AAPS.

**Do not ignore the notification.** New versions of **AAPS** provide important safety fixes. Therefore, every **AAPS** user must update to the latest version as soon as possible. זהו מאמץ לשפר את הבטיחות של כל משתמש **AAPS** ושל קהילת ה-DIY. Thank you for your understanding.

(maintenance-android-version-aaps-version)=

## Android version and AAPS version

If your smartphone uses an Android Version older than Android 12 you will not be able to use AAPS v3.4 and up as it requires at least Android 12.

In order to allow users with older Android to use older version of AAPS new versions were pushed which only change version verification. No other improvements are included.

יש למצוא את גרסת ה-Android שלכם בטבלה שלמטה ולהשתמש בגרסת **AAPS** המתאימה. הקוד מורד מ-<https://github.com/nightscout/AndroidAPS> מהענף שמוצג.

| גרסת ה-Android שלכם | גרסת AAPS לשימוש | ענף להורדה                                                       |
| ------------------- | ---------------- | ---------------------------------------------------------------- |
| Android 12 and up   | הגרסה האחרונה    | [master](https://github.com/nightscout/AndroidAPS) (ברירת מחדל)  |
| Android 11          | **3.3.2.1**      | [3.3.2.1](https://github.com/nightscout/AndroidAPS/tree/3.3.2.1) |
| Android 9, 10       | **3.2.0.4**      | [3.2.0.4](https://github.com/nightscout/AndroidAPS/tree/3.2.0.4) |
| Android 8           | **2.8.2.1**      | [2.8.2.1](https://github.com/nightscout/AndroidAPS/tree/2.8.2.1) |
| Android 7           | **2.6.2**        | [2.6.2](https://github.com/nightscout/AndroidAPS/tree/2.6.2)     |

## WearOS version

- AAPS דורש WearOS 3.0, 3.2 או 3.5 (Android 11, רמת API 30) או חדשה יותר. שעוני WearOS 2 אינם נתמכים.

```{tip}
WearOS 5, API level 34 (Android 14) has [limitations](#BuildingAapsWearOs-WearOS5).
```

גרסאות עם כותרת הן הגרסה האחרונה לכל גרסת Android (ראו בטבלה למעלה). שאר הגרסאות מופיעות ביניהן, עם ההערות שלהן או עם קישור אליהן ב-GitHub.

(latestrelease)=

(version400)=

## גרסה 4.0.0

תאריך פרסום: 31-10-2026

**תכונות חדשות**

- ממשק משתמש חדש: אפליקציית הטלפון נבנתה מחדש ב-Jetpack Compose @MilosKozak
- [חיפוש כללי](../DailyLifeWithAaps/GlobalSearch.md) @MilosKozak
- מעבר ל-Kotlin Multiplatform, לקוח למחשבי Windows, Mac ו-Linux ול-iOS @MilosKozak
- [תרחישים](../DailyLifeWithAaps/Scenes.md): שמירה של קבוצת פעולות והרצה שלהן יחד @MilosKozak
- [שליטה בין מכשיר ראשי ↔ מכשיר לקוח](../RemoteFeatures/ClientMasterControl.md): שליחת פקודות מטלפון לקוח למכשיר הראשי @MilosKozak
  - [תפקידי לקוח](#client-master-control-roles): קריאה בלבד, ארוחות, טיפול או ניהול לכל לקוח @MilosKozak
  - [מצב מוקשח](#client-master-control-hardened-mode): כששליטת הלקוח מופעלת, המכשיר הראשי מקבל שינויים רק מלקוחות מצומדים @MilosKozak
  - צימוד עם קוד QR שגם מגדיר את Nightscout בלקוח, או עם PIN; סוד הצימוד מוחלף מיד לאחר הצימוד @MilosKozak
  - [אסימון Nightscout נפרד](#client-master-control-own-token) לכל לקוח, רק עם ההרשאות שהלקוח צריך @MilosKozak
- תמיכה ב[ריכוז האינסולין](../AdvancedOptions/InsulinConcentration.md) (U200, U500) במשאבות, באשף ובפרופילים @Philoul @MilosKozak
- ניהול אינסולין: קטלוג אינסולינים, כינויים, בחירה בפרופיל ובאשף @Philoul
- תוסף כיול @MilosKozak
- [החלקה](../CompatibleCgms/SmoothingBloodGlucoseData.md): מסנן קלמן Unscented (UKF) @piecycle
- [פעולות אוטומציה](#automations-automation-action) חדשות: **שינוי החלקה** @olorinmaia, וגם **הרצת**, **הפעלת** או **השבתת תרחיש** @MilosKozak
- [סבב אתרי עירוי](#Aapsscreens-site-rotation): מעקב אחר אתרי העירוי והחלפה ביניהם @Philoul @MilosKozak
- עבודה מחדש על [Autotune](../AdvancedOptions/Autotune.md) @Philoul
- [ווידג'טים](../DailyLifeWithAaps/Widgets.md) חדשים @MilosKozak @t1dude
- נגישות: אפליקציית הטלפון עובדת עם קורא מסך - פקדים עם שמות, מצב שמוקרא בקול, תיאורי גרפים וכותרות למעבר מהיר @MilosKozak
- [ייבוא הגדרות](../Maintenance/ExportImportSettings.md): אפשר לשמור את הגדרות המשאבה @MilosKozak
- ההודעה הקבועה משתמשת ב-live updates של Android, עם תמיכה ב-Now bar של Samsung ועם הדלתא @premnirmal
- גרף BG: [לחיצה ארוכה](#aaps-screens-graph-press-and-hold) כדי לראות את הערכים בנקודת קריאה, בכל גרף במסך הסקירה @t1dude @olorinmaia
- שיפורי ביצועים @MilosKozak
- פחמימות ממושכות אוטומטיות באשף בולוס @MilosKozak

**מכשירים חדשים**

- **CareLevo**: [מנהל התקן למשאבה](../CompatiblePumps/CareLevo.md) חדש @Kisu-Choi @MilosKozak
- **Dana-i2**: תמיכה @MilosKozak
- **Instara**: מקור CGM חדש @leohunt

**שיפורים במנהלי ההתקנים של המשאבות**

- מסכי הסקירה של המשאבות נבנו מחדש עבור Insight, Medtronic, Medtrum, Omnipod, Dana, Diaconn ו-Equil @MilosKozak
- **Omnipod DASH**: קודי Ref בסגנון PDM ותיאורי תקלות קריאים, פיצוי סחיפה פועל תמיד, דיווח טוב יותר על סוג הבולוס @nl-ruud
- **Omnipod**: מועד סיום סופי (hard-end) ל-Dash & Eros @mcnelson
- **DanaR, RS**: אמולטור משאבה לבדיקות @MilosKozak
- **Equil**: אמולטור משאבה לבדיקות @MilosKozak
- תיקונים רבים במשאבות ובלולאה @MilosKozak ואחרים

**Wear OS**

- [אפליקציית השעון](../WearOS/WearOsSmartwatch.md) נבנתה מחדש ב-Compose, אריחים ו-complications חדשים, התקנה אוטומטית של פני השעון (Watch Face Push) ב-Wear OS 6+ @olorinmaia @Philoul
- CustomWatchface זמין ל-WearOS 6.0 (GW7, GW8, GW9...) עם פני שעון ייעודיים בפורמט WFF @Philoul @olorinmaia
- CustomWatchface יכול כעת לכלול 5 משבצות Complication שניתן להתאים אישית (תכונה חדשה שזמינה רק לשעונים ישנים יותר) @Philoul
- [פני שעון WFF חדשים המבוססים על complications של AAPS](#wearos-complications-watchface-setup) @olorinmaia
- תיקונים בתוצאה של אשף בולוס ושל אשף מהיר @olorinmaia
- מסך חדש של גרף BG ושל מצב הפעלה בתפריט הראשי @olorinmaia
- אשף בולוס: דף [סוג הארוחה](#WearOsSmartwatch-wizard-meal-type) שמחלק את הפחמימות כמו האשף בטלפון, ו[זמן הפחמימות](#WearOsSmartwatch-wizard-carb-time) עם התזכורת *זמן לאכול* בשעון @olorinmaia
- [התראות הטלפון בשעון](#WearOsSmartwatch-phone-alarms): השעון מציג את ההתראה ומציע השתקה והשתקה ל-5 דקות @olorinmaia

**בנייה**

- תהליכי workflow של CI לבנייה לפי תג/ענף, מיפוי גרסאות JDK @Angus-repo

**תורמים**

@MilosKozak @Philoul @olorinmaia @Kisu-Choi @leohunt @piecycle @Angus-repo @mcnelson @t1dude @premnirmal @nl-ruud

רשימת השינויים המלאה: <https://github.com/nightscout/AndroidAPS/compare/3.4.2.6...4.0.0>

---

(version3426)=

## גרסה 3.4.2.6

- Equil: שיפור היציבות @MilosKozak

---

(version3425)=

**גרסה 3.4.2.5**

- Equil: תיקון תנאי מרוץ @MilosKozak

---

(version3424)=

**גרסה 3.4.2.4**

- תיקונים ב-Equil @MilosKozak
- תיקון סנכרון הפרופיל מ-NS @MilosKozak

---

(version3423)=

**גרסה 3.4.2.3**

- Dash: פתרון סחיפה @nl-ruud
- NSClientV3: תיקון פער לאחר חיבור מחדש @MilosKozak
- אוטומציות: תיקון שחזור נתונים מסריאליזציה @MilosKozak
- Equil: תיקון דיווח סוללה @MilosKozak
- ניקוי workflow @vanelsberg
- Equil: שיפור התאוששות משגיאות @MilosKozak
- DanaRS: תיקון תקשורת עם משאבה לשוק המקומי @MilosKozak
- Insight: תיקון סנכרון בזאלי זמני (TBR) @MilosKozak
- Dash: תיקון באג בהפעלה @nl-ruud

---

(version3422)=

**גרסה 3.4.2.2**

- תיקון בעיות ב-Equil וב-Medtronic
- שיפור הבטיחות של Medtrum

---

(version3421)=

**גרסה 3.4.2.1**

- Equil: תיקון הצימוד ותיבת דו-שיח ההתקדמות @MilosKozak

---

(version3420)=

**גרסה 3.4.2.0**

תאריך פרסום: 02-04-2026

- Equil: תיקון תנגודת עבור דגמים שונים @hhfcvmars
- Tidepool: תיקון סשן @MilosKozak
- Medtrum: תיקון תהליך ההפעלה על ידי מניעת מילוי כפול @MilosKozak
- COB: תיקון חישוב פחמימות פעילות (מטפל במקרה קצה מסוכן) @MilosKozak

---

(version3410)=

**גרסה 3.4.1.0**

תאריך פרסום: 08-03-2026

**ליבה**

- תיקון הטיפול בשעון קיץ (DST) @MilosKozak
- שיפור ואיחוד הזיהוי של יעד רגיל (mgdl > 99, mmol > 5.5) @MilosKozak
- SMS: הגנה על RESTART באמצעות PIN @MilosKozak
- תחזוקה: אזהרה אם נבחרה תיקייה שגויה @MilosKozak

**שיפורים במנהלי ההתקנים של המשאבות**

- **Omnipod DASH**: ארגון מחדש של קוד מנהל ההתקן BLE במודול omnipod/common @jwoglom
- **Omnipod DASH**: ניסיון לתקן את מצב החיבור @MilosKozak
- **Omnipod**: בדיקת תקינות הפרופיל לפני הפעלת פוד כדי למנוע בזבוז פודים (#4534) @brianV
- **Medtronic**: תיקון הצגת אותו סוג קידוד בתיבת דו-שיח ההגדרות @mifi100
- **Medtronic**: הכנת מחלקות משותפות למשאבות (הכנה ל-Tandem) @andy-rozman
- **RileyLink**: תיקון קידוד (#4519) @mifi100
- **Equil**: הרחבת תאימות משאבות האינסולין לפי קידומת המספר הסידורי (#4510) @hhfcvmars
- **Equil**: הוספת רישום ביומן @MilosKozak
- **Diaconn G8**: תיקון באג בסנכרון היומן והוספת תמיכה בקושחה 3.58+ @miyeongkim
- **Diaconn**: תיקון המרת יחידות משך הבזאלי הזמני (TBR) @miyeongkim
- **Diaconn**: שימוש ב-commandQueue.loadEvents() לסנכרון ההיסטוריה @miyeongkim
- אפשרות למתן אינסולין כשהלולאה מושהית אך המשאבה זמינה @cschuijt

**ענן / גיבוי**

- הוספת גיבוי ל-Google Drive @Angus-repo
- הודעה לממשק המשתמש על שינוי מצב שגיאת אחסון בענן @Angus-repo
- אפשרות לאחסון מקומי ובענן בו-זמנית @Angus-repo

**Tidepool**

- שיפור ההגירה ל-Tidepool OAuth2 @MilosKozak
- תיקון מצב BLOCKED בלתי מוגבל ב-Tidepool ותיקון דחיית SSIDs ריקים @michaeln-synapse

**NSClient**

- NSCv3: שיפור החיבור מחדש @MilosKozak

**Wear OS**

- הצגת IOB חדש בתוצאת האשף אם IOB משמש בחישובים @olorinmaia
- תיקון BolusProgress ב-Wear עם הכמות הכוללת @Philoul

**ממשק משתמש**

- שיפור הסמל ic_none עבור סבב אתרי עירוי @Philoul
- תיקון: הגדרת ניהול המשאבה בסבב אתרי עירוי לא הייתה בשימוש @samfundev

**תורמים**

@MilosKozak @Philoul @olorinmaia @jwoglom @mifi100 @andy-rozman @Angus-repo @brianV @cschuijt @hhfcvmars @miyeongkim @samfundev @michaeln-synapse

---

(version3400)=

**גרסה 3.4.0.0**

תאריך פרסום: 31-12-2025

**לפני השדרוג:**

* גרסה זו דורשת Google Android 12.0 ומעלה. בדקו את גרסת הטלפון לפני שתנסו לעדכן.
* עדכנו לגרסת Android Studio האחרונה, או עדיף, הגדירו בנייה בדפדפן.

**תכונות חדשות**

* מצב הפעלה @MilosKozak
  * הצגת [היסטוריית מצב הלולאה](#AapsScreens-running-mode) בלשוניות הטיפולים
  * הצגת [מצב הלולאה מ-AAPSClient](#RemoteControl_aapsclient) ואפשרות לשנות אותו.<br>שימו לב: נדרשת ההגדרה [NSClient > סינכרון > קבלת מצב פעולה מ־Nightscout](#Preferences-nsclient-synchronization)
* [מדי CGM חדשים](../Getting-Started/CompatiblesCgms.md): Glunovo, Intelligo, Sinocare
* תמיכה ב[סבב אתרי עירוי](#Aapsscreens-site-rotation) @Philoul
* [פעולת אוטומציה](#automations-automation-action) חדשה: הפעלה או השבתה של SMBs @MilosKozak
* Syai CGM הוא [מקור מהימן](#GettingStarted-TrustedBGSource) ותומך בסינון מתקדם @MilosKozak

**שיפורים ב-Wear OS**

* הפחתה משמעותית בצריכת הסוללה @MilosKozak
* שיפורים ותיקונים בממשק המשתמש @olorinmaia
* כתיבה מחדש כמעט מלאה של הקוד להתאמה לרמה הנוכחית של הספריות (קודם WearOS 2) @MilosKozak
* 2 רכיבי complications חדשים לנתונים מורחבים @Philoul
* מעבר לספק complications מודרני עם DataStore @MilosKozak

**תיקוני דליפות זיכרון**

* תיקון דליפות זיכרון בקוד @MilosKozak
* הוספת דיווחי דליפות זיכרון של LeakCanary ל-Firebase Crashlytics @MilosKozak

**שיפורים במנהלי ההתקנים של המשאבות**

* **DanaI**: תיקון בעיות ניתוק @MilosKozak
* **RileyLink**: האצת התקשורת באמצעות צמצום השהיות @mifi100
* **Medtrum**: הוספת הצגה של זמן הפעלת הפאץ' ושל גילו @vanelsberg, תיקון אותיות רישיות בסיסמה @MilosKozak
* **Combo**: תיקון תנאי מרוץ בבדיקות @MilosKozak @dv1
* **Equil**: שיפור הקישוריות והפחתת צריכת הסוללה @MilosKozak

**סנכרון Nightscout**

* שיפור הסרת כפילויות בעת כשל ב-NS @MilosKozak

**שיפורים בממשק ובחוויית המשתמש**

* שיפורים שונים @MilosKozak @Philoul @olorinmaia

**אוטומציה**

* פעולת שליטה חדשה ב-SMB - הפעלה או השבתה של SMB באמצעות אוטומציה @MilosKozak

**בדיקות**

* הוספת בדיקות יחידה מקיפות למשאבות Equil, Eopatch, Dana ו-Medtronic @MilosKozak
* שיפור יציבות הבדיקות והכיסוי שלהן במודולים רבים @MilosKozak

**Tidepool**

* Tidepool OAUTH2 (תמיכה באימות החדש של Tidepool) @MilosKozak

---

(version3321)=

## Version 3.3.2.1

Release date: 13-08-2025

- Fixed Omnipod Bluetooth connection on Android 16
- CI process (Browser build)
- Fix mmol-mgdl conversion
- Fix wrong time selection in dialogs in some timezones
- Fix reading keys in simple mode
- Fix missed predictions on wear
- שיפור הגדרות תצורה (ConfigBuilder)
- Improved NSCv3 full sync

---

(version3300)=

**Version 3.3.2.0**

Release date: 27-03-2025

**How to upgrade**

* [Android Studio version called "Meerkat"](#Building-APK-recommended-specification-of-computer-for-building-apk-file) or above is required to build this version. If you already built a 3.3.x version, you need to upgrade Android Studio again.

(version-enforcement)=

**החל מגרסה זו, ההודעות ואכיפת הגרסה פושטו והוקלו, והן פועלות כך:**

*  No expiration when device is offline (if no connection to the internet). It means no 60 and 90 days grace periods anymore.
*  After expiration LGS mode is enforced
*  You'll receive warning/notifications less often:
   - 28+ days remaining: every 7 days
   - 27-14 days remaining: every 3 days
   - then once a day
   - Notification will be generated after noon to not bother you during nights
* There are only 2 kinds of notification
   - New version available (has no effect on AAPS)
   - תוקף האפליקציה יפוג בתאריך עתידי מסוים (עדיין ללא השפעה על AAPS) / פג תוקף האפליקציה (AAPS יעבור למצב LGS)

**חידושים**

* פקודת SMS בשם RESTART @MilosKozak
* פרמטרי החלפת פרופיל בשעון @olorinmaia
* מצב כהה בפני השעון AAPS V2 @olorinmaia
* שיפורים בחילופי נתוני G7 @olorinmaia
* תצורת ווידג'ט @MilosKozak
* שיפורים בממשק לחצני הבחירה @olorinmaia
* אוטומציות: בחירת מיקום ממפה @MilosKozak
* הצגת הגרסה במסכים הראשיים @MilosKozak
* נאכפת קומפילציה עם מערכת git קיימת (ללא הורדות zip)
* הצגת הגרסה במסך הראשי @MilosKozak
* שיפורים בהעלאה ל-Tidepool @ConstantinMatheis

**תיקוני באגים**

* תיקון ביטול צימוד של Dash @Andreas
* תיקונים ב-Garmin @robertbuessow @suside
* תיקון הצגת אינסולין פעיל (IOB) בתיבות דו-שיח @olorinmaia
* שיפורי איות ואימות במשימות @MilosKozak
* תיקון הצגת בזאליים זמניים (TBRs) מדומים @MilosKozak
* תיקון עקיפת אבטחה @tdrkDev

---

**גרסה 3.3.1.3**

תאריך פרסום: 21-01-2025

**תיקוני באגים**

* Dash: צימוד הוא אופציונלי (כבוי כברירת מחדל) @MilosKozak
* Equil: תיקון בולוס של 10U ומעלה, שיפורים בהתראות @EquilHack
* Garmin: שיפורים בשעון @swissalpine
* שיפורים בשעון @olorinmaia
* שליטה במצב הלולאה מהשעון @tdrkDev
* שיפורי יציבות

*  **ייתכן שתידרש [הגדרה חדשה של Authenticator](#sms-commands-authenticator-setup).**

---

**גרסה 3.3.1.2**

תאריך פרסום: 15-01-2025

**How to upgrade**

* לבניית גרסה זו נדרשת [גרסת Android Studio בשם "Ladybug Feature Drop"](#Building-APK-recommended-specification-of-computer-for-building-apk-file) או גרסה חדשה יותר. **זו אינה אותה גרסה כמו "Ladybug" הרגילה.** אם כבר בניתם גרסת 3.3.x, עליכם לשדרג שוב את Android Studio.

**תיקוני באגים**

* Dash: שימוש בצימוד ב-Android 15+
* החזרת לחצן Dexcom במסך הסקירה
* Equil: אפשרות להסרת משאבה שאינה פועלת
* אזהרה כאשר מקדם ההתאמה של DynISF הוא אפס
* NSCv3: פתרון תקשורת websocket בטלפונים עם שעה שונה במקצת
* פקודות SMS: תיקון OneTimePassword. **ייתכן שתידרש [הגדרה חדשה של Authenticator](#sms-commands-authenticator-setup).**
* תיקון בעיה שבה לא ניתן היה עוד לערוך חלק מההעדפות.
* תיקון איפוס הסיסמה הראשית עם משאבה וירטואלית.
* תיקון ייבוא קובצי גיבוי גדולים של הגדרות.

---

**גרסה 3.3.1.0**

תאריך פרסום: 06-01-2025

**שינויים בממשק המשתמש**

* [הוספת צבעים להבחנה בין AAPSClient ל-AAPSClient2](#RemoteControl_aapsclient) @MilosKozak
* שיפור הסידור והסמלים של פעולות משתמש

**פונקציות נוספות**

* טריגר אוטומציה חדש: [מספר צעדים](#screen-heart-rate-steps) @Roman Rihter
* אפשרות לקבל הכול בסנכרון מלא של NSCv3 (כולל נתונים שלא סונכרנו קודם, כגון TBR) @MilosKozak
* NSClient v3: הפעלת הכרזה (Announcement) (_כלומר_ מ-AAPSClient ל-AAPS) @MilosKozak

**שינויים טכניים ותיקוני באגים**

* תיקון קריסה ב-Insight @philoul
* תיקון יצירת מספר גדול מדי של רשומות deviceStatus ב-Nightscout @MilosKozak
* תיקון ספיגת פחמימות @MilosKozak
* תיקון צבע לחצני הבחירה ותיבות הסימון @MilosKozak
* תיקון באג בהעברת אחוז DynISF @MilosKozak
* פתרון הודעת DynISF במיקום שגוי @MilosKozak
* תיקון באג בפני השעון @philoul

---

**גרסה 3.3.0.0**

תאריך פרסום: 29-12-2024

**תכונות עיקריות**

* התכונה **[Dynamic ISF](../DailyLifeWithAaps/DynamicISF.md)** אינה עוד תוסף נפרד, אלא כלולה כעת כאפשרות של התוסף [OpenAPS SMB](#Config-Builder-aps), יחד עם כמה שינויים בהתנהגות שלה:
  * **החלפת פרופיל** ו**אחוז הפרופיל** מובאים כעת בחשבון ב-**Dynamic ISF** ביחס לעוצמת הרגישות הדינמית
  * מחושב **ISF** ממוצע של 24 השעות האחרונות, וערך זה משמש באשף הבולוס ובחישוב **COB**. ערך **ISF של הפרופיל** אינו משמש כלל (למעט כחלופה כאשר נתוני ההיסטוריה אינם זמינים)
  * דף התיעוד של DynamicISF נכתב מחדש. קראו את הסעיף החשוב [דברים שיש להביא בחשבון בעת הפעלת Dynamic ISF](#dyn-isf-things-to-consider-when-activating-dynamicisf).
* [הפעלת “SMB תמיד” ו-“SMB אחרי פחמימות”](#Open-APS-features-enable-smb-always) למשתמשי FreeStyle Libre 2 ו-Libre 3
  * הערה: נדרשת הגרסה האחרונה של xDrip+ או Juggluco.
* טריגרים חדשים של **אוטומציות**
* ייצוא הגדרות ללא השגחה

**How to upgrade**

* לפני השדרוג:
  * **<span style="color:red">גרסה זו דורשת Google Android 11.0 ומעלה</span>**. בדקו את גרסת הטלפון לפני שתנסו לעדכן.
  * אם אתם משתמשים במנהל ההתקן "הישן" של Combo עם ruffy, עברו ל[מנהל ההתקן המובנה של Combo](../CompatiblePumps/Accu-Chek-Combo-Pump-v2.md) לפני העדכון
  * במהלך השדרוג תאבדו את [הגרפים הנוספים](#AapsScreens-section-g-additional-graphs) במסך הראשי: אם צריך, רשמו לעצמכם את התצורה הנוכחית, כדי שתוכלו ליצור אותם מחדש לאחר השדרוג.
  * [בעיות חיבור ה-Bluetooth שחלק מהמשתמשים חווים ב-Android 15](../Getting-Started/Phones.md) **אינן** נפתרות בגרסה זו (זו בעיה ב-Android ולא ב-**AAPS**). תיקון זמין ב-3.3.1.2.
  * לחצן BYODA במסך הבית אינו זמין עוד בשל מגבלות Android. זה תוקן ב-3.3.1.2.
* הוראות עדכון: פעלו לפי מדריך [עדכון לגרסה חדשה](../Maintenance/UpdateToNewVersion.md).
  * לבניית גרסה זו נדרשת [גרסת Android Studio בשם "Ladybug"](#Building-APK-recommended-specification-of-computer-for-building-apk-file) או גרסה חדשה יותר. אם כבר מותקנת אצלכם גרסה ישנה יותר של Android Studio, ייתכן שתצטרכו <span style="color:red">להגדיר את גרסת JVM ל-21</span>. ראו [פתרון תקלות ב-Android Studio > Incompatible Gradle JVM](#incompatible-gradle-jvm).
  * טיפ - אם אינכם רוצים לאבד את היסטוריית **AAPS**, בצעו תמיד עדכון ולא הסרה והתקנה מחדש. ליתר ביטחון, גבו את הגדרות **AAPS** הנוכחיות ואת ה-APK הישן כדי לחזור לגרסה ישנה אם משהו ישתבש.
* לאחר השדרוג:
  * הגדירו את [ההגדרה החדשה “תיקיית AAPS”](#preferences-maintenance-logdirectory) בלשונית התחזוקה.

**פירוט השינויים**

**מדי CGM ומשאבות**

* [הפעלת “SMB תמיד” ו-“SMB אחרי פחמימות”](#Open-APS-features-enable-smb-always) למשתמשי FreeStyle Libre 2 ו-Libre 3 @MilosKozak
* שיפורים ב[מנהל ההתקן של Medtrum](../CompatiblePumps/MedtrumNano.md) @jbr77rr
  * שיפורי תקשורת, כולל הגדרה חדשה לפתרון עקיף של בעיות בחלק מהטלפונים החכמים
  * הצגת רמת המכל בתחילת ההפעלה
  * תיקון באג שבו ההפעלה חוזרת להתחלה ולא ניתן לסיים אותה
  * משוב על מצב הסנכרון והבהרות נוספות
* משאבה נתמכת חדשה: [Equil 5.3](../CompatiblePumps/Equil5.3.md) @EquilHack
* מדי CGM נתמכים חדשים: [Ottai](../CompatibleCgms/OttaiM8.md) @ottai-developer ו-[Syai Tag](../CompatibleCgms/SyaiTagX1.md) @syai-dev
* כתיבה מחדש של מנהל ההתקן של Insight ב-kotlin @Philoul
* הסרת מנהל ההתקן הישן של Combo התלוי ב-ruffy

**שינויים בממשק המשתמש**

* [מצב פשוט](#preferences-simple-mode) מופעל כברירת מחדל בהתקנה חדשה @MilosKozak
* אפשרויות חדשות ב[אשף מהיר](#Preferences-quick-wizard) @radicalb
  * האשף המהיר משתמש כעת באותה לוגיקה כמו המחשבון לחישוב הבולוס ולהצגתו. כעת ניתן להשתמש בשדה “זמן הפחמימות” באשף המהיר כדי לתת בולוס מקדים.
* [תפריט טווח גרף](#aaps-screens-main-graph) חדש; שיפורים בממשק [תפריט הגרפים הנוספים](#AapsScreens-activate-optional-information) @Philoul
* [שיפור הפריסה של הגדרות תצורה](../SettingUpAaps/ConfigBuilder.md) @MilosKozak
  * הסעיפים מכווצים כעת כברירת מחדל. השתמשו בחץ כדי להרחיב.
* הצגת רגישות משתנה ב-AAPSClient
* שיפורים בממשק BolusWizard @kenzo44
* תיקון הצגת טקסט בלשוניות המשאבה בעת שימוש בערכת נושא בהירה @jbr77rr

**פונקציות נוספות**

* [ייצוא הגדרות ללא השגחה](#ExportImportSettings-Automating-Settings-Export) @vanelsberg
* [טריגר אוטומציה](#automations-automation-triggers) חדש @vanelsberg
  * הפעלת הפוד (משאבת פאץ' בלבד)
* [טריגרים חדשים לאוטומציות](#automations-automation-triggers) @jbr77rr
  * גיל הצינורית, גיל האינסולין, גיל הסוללה, גיל החיישן, רמת המכל, רמת סוללת המשאבה
* אפשרות להזנת כמות פחמימות שלילית @MilosKozak
* פרמטר חדש [“תיקיית AAPS”](#preferences-maintenance-settings) לבחירת תיקיית אחסון שונה מברירת המחדל.
* אפשרות ל[רישום אינסולין כשהמשאבה מושהית](#aaps-screens-buttons-insulin) @jbr77rr
* עדכון [משימה 2](#objectives-objective2) @MilosKozak
  * בדיקה שהסיסמה הראשית מוגדרת וידועה
* פחמימות אקראיות במצב בדיקה @MilosKozak
* תיקון באג בחישוב TDD @MilosKozak
* פקודות SMS: אפשרות [**לא** לשלוח SMS על שינוי פרופיל](#sms-commands-too-many-messages) שמגיע מ-NS @MilosKozak

**שעונים חכמים**

* שיפור Wear ופני שעון @Philoul @MilosKozak @olorinmaia
* אריחי שעון מפעולות אוטומציה @Philoul
* פני שעון משולבים מ-AAPS, AAPSClient ו-AAPSClient2 למעקב אחר מטופלים נוספים @Philoul @MilosKozak
* EXTRA: show\_user\_actions\_on\_watch\_only @MilosKozak

**שינויים טכניים**

* [שינוי מיקום קובצי היומן](#Accessing-logfiles-accessing-logfiles)
* מבנה חדש של מודולים פנימיים @MilosKozak
* הפרדת שכבת שמירת הנתונים מהקוד הראשי @MilosKozak
* כתיבה מחדש של קובצי הבנייה ב-kts @MilosKozak
* כתיבה מחדש של האלגוריתמים ב-kotlin לביצועים טובים יותר @MilosKozak
* בדיקות יחידה חדשות רבות @MilosKozak ואחרים
* המרת קוד נוסף ל-kotlin @MilosKozak
* ניהול העדפות חדש, xml \-\> kotlin @MilosKozak
* תצורת CI חדשה, הרצת CI בשרתים עצמאיים @MilosKozak
* עדכון ספריות לגרסה האחרונה, toml @MilosKozak
* מעבר ל-kotlin 2.0, java 21 @MilosKozak

---

(version3204)=

## [Version 3.2.0.4](https://github.com/nightscout/AndroidAPS/releases/tag/3.2.0.4)

Release date: 27-02-2024

This version is the last one supporting Android 10. If you cannot upgrade to Android 11, [update AAPS to 3.2.0.4](#update-aaps-3204).

**Changes**

- xDrip G7 support
- Medtrum fixes
- Automation icon fix
- Passing objective 1 fix

---

(version3200)=

**גרסה 3.2.0.0 מוקדשת ל-@Philoul**

תאריך פרסום: 23-10-2023

**דגשים חשובים**

- נדרש NS 15
- בעת שימוש ב-websockets בתוסף NS v3, טיפולים שהוזנו דרך ממשק NS (לחצן הפלוס) ויישומים אחרים המשתמשים ב-API v1 אינם נשלחים ל-AAPS. זה יתוקן בגרסה עתידית של NS. השתמשו תמיד באותו לקוח (v1 או v3) ב-AAPS וב-AAPSClient, עד ש-NS יעבור במלואו ל-v3 באופן פנימי. הדבר נכון גם עבור AAPS ו-AAPSClient עצמם.
- websockets בתוסף v3 פועלים באופן דומה לתוסף v1. כאשר websockets אינם מופעלים, AAPS מתזמן הורדות קבועות מ-NS, מה שאמור להפחית את צריכת החשמל מכיוון ש-NS אינו מחובר באופן קבוע. מצד שני, משמעות הדבר היא עיכובים בחילופי הנתונים. קראו [כאן](#Important-comments-on-using-v3-versus-v1-API-for-Nightscout-with-AAPS) את ההערות החשובות של צוות הפיתוח לפני השימוש!
- אם אתם משתמשים ב-xdrip כמקור CGM, עליכם לבחור בו שוב לאחר העדכון בשל שינויים פנימיים
- ניתן להשתמש ב-Tidepool במקום NS כדי לעבור את המשימה הראשונה
- אם אתם שולחים נתונים ל-xDrip+, עליכם להגדיר את תוסף הסנכרון של xDrip. כדי לקבל ערכי סוכר מ-AAPS ב-xDrip, יש לבחור “xDrip+ Sync Follower” כמקור
- אם ברצונכם לעבור למנהל ההתקן ComboV2, יש להסיר את Ruffy ולצמד שוב את המשאבה ל-AAPS
- כדי להשתמש בתוסף DynISF, עליכם להתחיל את משימה 11 (כל המשימות הקודמות חייבות להיות מושלמות כדי לאפשר התחלה של 11)

**Changes**

- מנהל התקן למשאבת EOPatch2 / GlucomenDay @jungsomyeonggithub @MilosKozak
- מנהל התקן למשאבת ComboV2 (אין צורך ב-Ruffy) @dv1
- מנהל התקן של Medtrum Nano @jbr7rr
- תמיכה ב-DanaI הקוריאנית @MilosKozak
- תמיכה ב-Glunovo CGM @christinadamianou
- תמיכה ב-G7 @MilosKozak @rICTx-T1D @khskekec
- תוסף NSClient v3 @MilosKozak
- תמיכה ב-Tidepool @MilosKozak
- תוסף החלקה @MilosKozak, @justmara, החלקה מעריכית @nichi (Tsunami), החלקת ממוצע @jbr7rr
- תוסף DynamicISF @Chris Wilson, @tim2000s
- תמיכה בפני שעון Garmin וב-HeartRate @buessow
- לוגו חדש @thiagomsoares
- פני שעון חדשים @Philoul
- תיקון בעיות רבות מגרסה 3.1
- אפשרות להוספת הערות במקומות נוספים @Sergey Zorchenko
- תיקוני ממשק משתמש @MilosKozak @osodebailar @Andries-Smit @yodax @Philoul @dv1 @paravoid
- פקודות SMS חדשות LOOP LGS/CLOSED @pzadroga
- תרגומי Wear @Andries-Smit
- העברת תקשורת xdrip למודול נפרד @MilosKozak
- שינויים פנימיים: עדכון גרסאות ספריות, מעבר ל-rx3, מבנה מודולים חדש @MilosKozak
- תיקונים במנהל ההתקן של Diaconn @miyeongkim
- אפשרויות תחזוקה נוספות למסד הנתונים @MilosKozak
- AAPSClient מספק מידע אם הטלפון הראשי מחובר לחשמל @MilosKozak
- שינוי ב-BolusWizard. אם CGM אינו זמין, מתעלמים מהאחוז (כלומר משתמשים ב-100%)
- מעבר למערכת בנייה kts @MilosKozak
- שיפור שילוב CI @MilosKozak @buessow
- ניקוי בדיקות @ryanhaining @MilosKozak
- 110k+ שורות קוד חדשות, שינוי 240k שורות, 6884 קבצים שהשתנו

(Important-comments-on-using-v3-versus-v1-API-for-Nightscout-with-AAPS)= **הערות חשובות על שימוש ב-API v3 לעומת v1 של Nightscout עם AAPS**

v1 הוא הפרוטוקול הישן לחילופי נתונים בין אתר NS לשרת NS. יש לו מגבלות רבות
- v1 שולח נתונים של 2 ימים בלבד
- v1 שולח את כל נתוני היומיים בכל חיבור מחדש
- השימוש ב-websockets הוא חובה = חיבור קבוע, צריכת סוללה גבוהה יותר
- בעת ניתוקים תכופים מ-NS, החיבור מושהה למשך 15 דקות כדי למנוע שימוש רב בנתונים

v3 הוא פרוטוקול חדש. בטוח ויעיל יותר
- באמצעות אסימונים ניתן להגדיר טוב יותר את הרשאות הגישה
- הפרוטוקול יעיל יותר בשני הצדדים (AAPS ו-NS)
- הוא יכול לקרוא עד 3 חודשי נתונים מ-NS
- ניתן לבחור אם להשתמש ב-websockets או לא בכל מכשיר (שימוש פירושו עדכונים מהירים יותר, אי-שימוש פירושו צריכת חשמל נמוכה יותר, אבל עדכונים איטיים יותר, כלומר דקות)
- NSClient אינו מושהה בעת ניתוקים

מגבלות
- יש להשתמש ב-NS 15 עם AAPS 3.2
- v3 אינו רואה עדכונים שנעשו בפרוטוקול v1 (כנראה זה ייפתר בגרסה עתידית של NS)
- בכיוון ההפוך, בגלל השיטה הישנה והלא יעילה למעקב אחר שינויים, v1 רואה שינויים שנעשו ב-v3
- זכרו ש-NS עדיין משתמש פנימית ב-v1, ולכן לא ניתן להזין נתונים דרך ממשק האתר של NS אם אתם משתמשים ב-v3. יש להשתמש ב-AAPSClient או ב-SMS אם רוצים להזין נתונים מרחוק

הגדרה מומלצת
- בשל כל האמור לעיל, עליכם לבחור שיטה אחת בלבד ולהשתמש בה בכל ההתקנים (זכרו שבזמן כתיבת הדברים כל המעלים האחרים משתמשים ב-v1). אם החלטתם לעבור ל-v3, בחרו v3 ב-AAPS ובכל יישומי AAPSClient
- v3 מועדף בשל יעילותו
- השימוש או אי-השימוש ב-websockets עם v3 תלוי בהעדפתכם
- מומלץ מאוד לתת ל-AAPS לאסוף את כל הנתונים ואז להעלות אותם ל-NS כמעלה היחיד. כל ההתקנים והיישומים האחרים צריכים לקרוא מ-NS בלבד. כך תמנעו התנגשויות ושגיאות סנכרון. זה נכון גם לקבלת נתוני סוכר ב-NS באמצעות מחבר Dexcom Share וכדומה

---

(version3100)=

**גרסה 3.1.0**

תאריך פרסום: 19-07-2022

[Release notes](https://github.com/nightscout/AndroidAPS/releases/tag/3.1.0)

---

**גרסה 3.0.0**

תאריך פרסום: 31-01-2022

[Release notes](https://github.com/nightscout/AndroidAPS/releases/tag/3.0.0)

---

(version2821)=

## גרסה 2.8.2.1

תאריך פרסום: 05-10-2021

זו הגרסה האחרונה שתומכת ב-Android 8. [הערות גרסה](https://github.com/nightscout/AndroidAPS/releases/tag/2.8.2.1)

---

**Version 2.8.2**

Release date: 23-01-2021

[Release notes](https://github.com/nightscout/AndroidAPS/releases/tag/2.8.2)

---

(version-2811)= (important-hints-2-8-1-1)=

**גרסה 2.8.1.1**

תאריך פרסום: 12-01-2021

[Release notes](https://github.com/nightscout/AndroidAPS/releases/tag/2.8.1.1)

---

(Releasenotes-version-2-8-0)=

**גרסה 2.8.0**

תאריך פרסום: 01-01-2021

[Release notes](https://github.com/nightscout/AndroidAPS/releases/tag/2.8.0)

---

(Releasenotes-version-2-7-0)=

**גרסה 2.7.0**

תאריך פרסום: 24-09-2020

[Release notes](https://github.com/nightscout/AndroidAPS/releases/tag/2.7.0)

---

(Releasenotes-version-2-6-1-4)=

**גרסה 2.6.1.4**

תאריך פרסום: 04-05-2020

[Release notes](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-2614)

---

**גרסה 2.6.1.3**

תאריך פרסום: 03-05-2020

[Release notes](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-2613)

---

**גרסה 2.6.1.2**

תאריך פרסום: 19-04-2020

[Release notes](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-2612)

---

**גרסה 2.6.1.1**

תאריך פרסום: 06-04-2020

[Release notes](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-2611)

---

**גרסה 2.6.1**

תאריך פרסום: 21-03-2020

[Release notes](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-261)

---

(Releasenotes-version-2-6-0)=

**גרסה 2.6.0**

תאריך פרסום: 29-02-2020

[Release notes](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-260)

---

**גרסה 2.5.1**

תאריך פרסום: 31-10-2019

[Release notes](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-251)

---

(Releasenotes-version-2-5-0)=

**גרסה 2.5.0**

תאריך פרסום: 26-10-2019

[Release notes](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-250)

---

**גרסה 2.3**

תאריך פרסום: 25-04-2019

[Release notes](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-23)

---

**גרסה 2.2.2**

תאריך פרסום: 07-04-2019

[Release notes](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-222)

---

**גרסה 2.2**

תאריך פרסום: 29-03-2019

[Release notes](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-22)

---

**גרסה 2.1**

תאריך פרסום: 03-03-2019

[Release notes](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-21)

---

**גרסה 2.0**

תאריך פרסום: 03-11-2018

[Release notes](https://github.com/openaps/AndroidAPSdocs/blob/e7e2e73cae3dd16af3391ce770fb48b3b3388c1b/docs/EN/Maintenance/ReleaseNotes.md#version-20)

---

**Version 1.0**

```{admonition} First version of **AAPS**
:class: note

The first test version started in 2015 and the first release was in 2016.

The exact chronology of these releases is not available at the moment but as this question has been asked several times we document it here.

```
![AAPS 1.0](../images/update/AAPS1.0.png)
