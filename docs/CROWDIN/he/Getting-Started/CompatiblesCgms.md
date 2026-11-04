# Compatible CGMs

סעיף זה נותן סקירה קצרה של כל מערכות ה-**CGM/FGM** התואמות ל-**AAPS**.

*טיפ*: אם אפשר להציג את נתוני הסוכר שלכם באפליקציית xDrip, אפשר לבחור ב-xDrip כמקור ערכי ה-**BG** ב-**AAPS**.

<!-- List of hidden pages to avoid overcrowding the table of contents -->

```{toctree}
:hidden:

../CompatibleCgms/GeneralCGMRecommendation.md
../CompatibleCgms/SmoothingBloodGlucoseData.md
../CompatibleCgms/xDrip.md
../CompatibleCgms/CgmNightscoutUpload.md
../CompatibleCgms/DexcomG6.md
../CompatibleCgms/DexcomG7.md
../CompatibleCgms/Juggluco.md
../CompatibleCgms/Libre1.md
../CompatibleCgms/Libre2.md
../CompatibleCgms/Libre2MinimalL00per.md
../CompatibleCgms/Libre3.md
../CompatibleCgms/Eversense.md
../CompatibleCgms/MM640g.md
../CompatibleCgms/PocTech.md
../CompatibleCgms/OttaiM8.md
../CompatibleCgms/SyaiTagX1.md
../CompatibleCgms/Caresens.md
```

* [General recommendations](../CompatibleCgms/GeneralCGMRecommendation.md)
* [Data Smoothing](../CompatibleCgms/SmoothingBloodGlucoseData.md)
* [הגדרות xDrip](../CompatibleCgms/xDrip.md)
* [Nightscout כמקור ערכי סוכר](../CompatibleCgms/CgmNightscoutUpload.md): אפשר להשתמש ב-Nightscout כמקור ערכי סוכר למתן אינסולין בלולאה סגורה, אבל **שיטה זו אינה מומלצת**, כי היא תלויה בחיבור יציב לנתונים סלולריים או ל-Wi-Fi. המשמעות היא ש-**AAPS** יקבל את נתוני ה-**CGM** רק כאשר יש חיבור לאינטרנט לאתר ה-Nightscout שלכם. להגדרה אמינה יותר, עדיף בהרבה להשתמש ב-CGM ששולח את הנתונים ל-**AAPS** בשידור מקומי (local broadcast) מהמקלט (כפי שמופיע ברשימה למטה).

| CGM                                                                                      | [מקורות ערכי סוכר](#Config-Builder-bg-source) זמינים                                                                              |
| ---------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| [Dexcom G7](../CompatibleCgms/DexcomG7.md)                                               | BYODA, [xDrip](../CompatibleCgms/xDrip.md) או [Juggluco](../CompatibleCgms/Juggluco.md)                                           |
| [Dexcom ONE+](../CompatibleCgms/DexcomG7.md)                                             | [xDrip](../CompatibleCgms/xDrip.md) או [Juggluco](../CompatibleCgms/Juggluco.md)                                                  |
| [Dexcom Stelo](../CompatibleCgms/DexcomG7.md)                                            | [xDrip](../CompatibleCgms/xDrip.md)                                                                                               |
| [Dexcom G6](../CompatibleCgms/DexcomG6.md)                                               | BYODA או [xDrip](../CompatibleCgms/xDrip.md)                                                                                      |
| [Dexcom ONE](../CompatibleCgms/DexcomG6.md)                                              | [xDrip](../CompatibleCgms/xDrip.md)                                                                                               |
| [Libre 3/3+](../CompatibleCgms/Libre3.md)                                                | [Juggluco](../CompatibleCgms/Juggluco.md) (עם xDrip או בלעדיו)                                                                    |
| [Libre 2/2+](../CompatibleCgms/Libre2.md)                                                | [xDrip](../CompatibleCgms/xDrip.md) (באיחוד האירופי בלבד) או [Juggluco](../CompatibleCgms/Juggluco.md) (עם xDrip או בלעדיו)       |
| [Libre 1](../CompatibleCgms/Libre1.md)                                                   | [xDrip](../CompatibleCgms/xDrip.md) (Diabox שולחת את הקריאות שלה דרך המקור xDrip), Glimp או Tomato (MiaoMiao). Need a transmitter |
| [Eversense](../CompatibleCgms/Eversense.md)                                              | [xDrip](../CompatibleCgms/xDrip.md), אפליקציית ESEL/Eversense מתוקנת (patched) או קורא התראות                                     |
| [Enlite (MM640G/MM630G)](../CompatibleCgms/MM640g.md)                                    | [xDrip](../CompatibleCgms/xDrip.md) או MM640g + אפליקציית 600SeriesAndroidUploader                                                |
| [PocTech](../CompatibleCgms/PocTech.md)                                                  | אפליקציית PocTech                                                                                                                 |
| Glunovo                                                                                  | אפליקציית Glunovo                                                                                                                 |
| Intelligo                                                                                | אפליקציית Intelligo                                                                                                               |
| [Ottai](../CompatibleCgms/OttaiM8.md), [Syai](../CompatibleCgms/SyaiTagX1.md)            | Syai/Ottai (עם אפליקציית Ottai או Syai Tag)                                                                                       |
| Sibionics CGM                                                                            | [Juggluco](../CompatibleCgms/Juggluco.md) או SI App (עם SI App מתוקנת או עם אפליקציית Sibionics)                                  |
| Sinocare                                                                                 | Sino App (עם Sino App מתוקנת)                                                                                                     |
| MicroTech (Aidex, LinX, LinX Vista, Equil G. Smart 2, Diaexpert 2)                       | אפליקציית MicroTech CGM                                                                                                           |
| Instara                                                                                  | Instara (עם אפליקציית Instara)                                                                                                    |
| [Caresens](../CompatibleCgms/Caresens.md), Simplera, iCan, LinX, SmartGuide              | xDrip Companion App או [Juggluco](../CompatibleCgms/Juggluco.md)                                                                  |
| כל CGM שהאפליקציה הרשמית שלו מציגה את ערך הסוכר בהתראה (Dexcom, Medtronic, Eversense, …) | קורא התראות                                                                                                                       |

(GettingStarted-TrustedBGSource)=

## מקורות מהימנים לערכי סוכר

מערכות **CGM** שאושרו על ידי הרשויות למערכות מסחריות של לולאה סגורה היברידית נחשבות למקורות מהימנים לנתוני **BG** (ערכי סוכר).

כדי ש-**AAPS** יזהה אותן נכון, האפליקציה ששולחת את ערכי ה-**BG** חייבת לספק מידע על החיישן.

Trusted data sources allow **SMB** delivery, all the time.

| Sensor           |                                                    אפליקציית CGM                                                    |
| ---------------- |:-------------------------------------------------------------------------------------------------------------------:|
| Dexcom G6        |                                          BYODA, xDrip (**Direct, Native**)                                          |
| Dexcom G7        |               BYODA, xDrip (**Direct, Native**), <br/>Juggluco (**xDrip broadcast** בלי xDrip)                |
| Dexcom ONE+      |                   xDrip (**Direct, Native**), <br/>Juggluco (**xDrip broadcast** בלי xDrip)                   |
| Dexcom ONE/Stelo |                                             xDrip (**Direct, Native**)                                              |
| Libre 2/2+ (EU)  | xDrip (OOP2 **no calibration**), <br/>Juggluco (**xDrip broadcast** בלי xDrip, או **Patched Libre** עם xDrip) |
| Libre 2/2+/3/3+  |                       Juggluco (**xDrip broadcast** בלי xDrip, או **Patched Libre** עם xDrip)                       |
| Syai             |                                                   אפליקציית Syai                                                    |

**הערה: אפליקציות xDrip Companion ומצבי עוקב (Follower, כולל 640G/Eversense) אינם מקורות נתונים מהימנים.**
