- - -
tocdepth: 1
- - -

# Docs updates & changes

## אוקטובר 2026

- [בנייה בדפדפן עם AAPS Builder](#aaps-builder): גרסה 8 של ה-workflow לבנייה, שמתוחזק עכשיו על ידי מפתחי AAPS במאגר [nightscout/aaps-builder](https://github.com/nightscout/aaps-builder). ההגדרה קצרה עכשיו בשלב אחד: [שלב 1](#aaps-builder-step1) ב[דף ההגדרה](#aaps-builder-setup) יוצר את המאגר הפרטי שלכם כעותק של המאגר הזה, וה-workflow לבנייה כבר נמצא בו, כך שאין יותר workflow להוסיף. מעכשיו שלבי הבנייה מתעדכנים בשבילכם: בכל בנייה המאגר שלכם מריץ את הגרסה שמפרסמים מפתחי AAPS, בלי שום שינוי מצדכם (ועדיין אין בנייה אוטומטית). הבנייה עצמה לא משתנה, והמאגר הקיים שלכם ממשיך לעבוד. כדי לקבל את העדכונים האוטומטיים האלה, יש להחליף פעם אחת את `.github/workflows/build.yml` שלכם כפי שמוסבר ב[עדכון AAPS](#aaps-builder-updates). ה-secret `KEYSTORE_SET` שלכם נשאר כמו שהוא. [שלב Google Drive](#aaps-builder-google-drive) האופציונלי עובד עכשיו בדף ההגדרה עצמו, בטלפון או במחשב: אין צורך בקובץ הכנה @psonnera
- [שעונים חכמים ו־AAPS](#watches-external-companion-apps): הסעיף **Samsung Tizen** הופך ל**אפליקציות נלוות חיצוניות**, ומפרט את האפליקציות שקוראות את השידור (broadcast) של **AAPS** (WatchDrip+, GlucoDataHandler, G-Watch). [WatchDrip+](#watches-xiaomi-amazfit) מגרסה 0.5 ואילך מתחברת ישירות ל-**AAPS** בלי xDrip+: נוספו שלבי הגדרה, וגם סיכום ב[הגדרות תצורה](#external-companion-apps), ב[Wear OS](../WearOS/WearOsSmartwatch.md) וב[ניטור מרחוק](../RemoteFeatures/RemoteMonitoring.md). שעוני Bluejay: דגם GTS הופסק, הדגם הנוכחי עודכן @psonnera
- [בנייה בדפדפן עם AAPS Builder](#aaps-builder): גרסה 6 של ה-workflow לבנייה. שלבי הבנייה משתמשים עכשיו בגרסאות מדויקות ובדוקות של הכלים של GitHub ושל מכונת הבנייה, והבנייה מסבירה בבירור מתי הודבק טקסט שגוי ב-secret `KEYSTORE_SET`. [דף ההגדרה](#aaps-builder-setup) הוא עכשיו חלק מהתיעוד ומתורגם, בודק את שם המשתמש שלכם ב-GitHub, ויש בו עזרה ברורה יותר עבור ה-secret, עבור "Page not found" (404) ועבור אפליקציית GitHub. אם בקובץ `.github/workflows/build.yml` שלכם כתוב גרסה 5 או מוקדמת יותר, יש להחליף אותו כפי שמוסבר ב[עדכון AAPS](#aaps-builder-updates) @psonnera
- [מתקין האינטרנט של AAPS](#web-installer): עכשיו דף בתיעוד, שמתורגם כמו כל השאר. הכתובת הישנה עדיין עובדת @psonnera
- [בנייה בדפדפן עם AAPS Builder](#aaps-builder): גרסה 3 של ה-workflow לבנייה מוסיפה את הווריאנט `aapsclient3Release` (**AAPSClient3**, AAPS 4.0 ואילך). כדי לבנות אותו, יש להחליף את `.github/workflows/build.yml` שלכם כפי שמוסבר ב[עדכון AAPS](#aaps-builder-updates) @psonnera
- [Dexcom G7](../CompatibleCgms/DexcomG7.md): הוסרה אפליקציית Dexcom G7 המתוקנת (DiaKEM), שכבר לא עובדת בהתקנות חדשות @psonnera
- [בנייה בדפדפן עם AAPS Builder](#aaps-builder): גרסה 2 של ה-workflow לבנייה. הבנייה האוטומטית השבועית הוסרה (אין תזמון, אין משתנים `AUTO_BUILD` / `AUTO_VARIANT`, אין תגיות `built/…`): כל בנייה מופעלת על ידיכם, עם הגרסה והווריאנט שתבחרו, ול-workflow יש רק הרשאת קריאה למאגר שלכם. אם בקובץ `.github/workflows/build.yml` שלכם כתוב גרסה 1, יש להחליף אותו כפי שמוסבר ב[עדכון AAPS](#aaps-builder-updates). נוספו צילומי מסך לכל שלב @psonnera
- [בנייה בדפדפן עם AAPS Builder](#aaps-builder): ה-workflow לבנייה הוא עכשיו חלק מהתיעוד הזה. אין יותר מאגר תבנית: יוצרים מאגר פרטי ריק ומוסיפים את ה-workflow מדף ההגדרה (שלב 2 חדש). ה-workflow כבר לא בודק עדכונים במאגר חיצוני. אם יצרתם את המאגר שלכם מהתבנית הקודמת, יש להחליף את `.github/workflows/build.yml` ב-workflow מדף ההגדרה, כפי שמוסבר ב[עדכון AAPS](#aaps-builder-updates) @psonnera
- דף חדש [בנייה בדפדפן עם AAPS Builder](#aaps-builder): בניית AAPS מטלפון Android בעזרת דף הגדרה שמתארח באתר זה, עם בנייה אוטומטית שבועית וללא קובץ הכנה. הוא מחליף את ההוראות ל-Android של הבנייה בדפדפן (דפי File Manager Plus הוסרו). AAPS Builder נוצר על ידי @dio99, התיעוד על ידי @psonnera

## אוגוסט 2026

- [העברה והתקנה של AAPS](../SettingUpAaps/TransferringAndInstallingAaps.md): הדף *אימות מפתחים ב-Android* אוחד עם מדריך ההתקנה, ונוספו [מתקין האינטרנט](#android-developer-verification-web) (התקנת ה-APK ישירות מהדפדפן, ללא צורך באימות) ו-ADB אלחוטי @psonnera

## יולי 2026

- [מבוא](../Getting-Started/Introduction.md): בדיקת דיוק של החלק על APS. תוקנו הכותרת והקישור של הציטוט מ-Frontiers, והוא מוצג עכשיו כרקע ולא כמדריך לשוק הנוכחי. עודכנו ההצהרות על מערכת דו-הורמונלית ועל לולאה סגורה מלאה, הובהר שהבקר הוא לא תמיד אפליקציה בטלפון, הוסרו שמות מותגים מסחריים ומספרי משתמשים ללא מקור, ו-OS-AID תוקן ל-*Open-Source Automated Insulin Delivery* @psonnera
- [מילון מונחים](../UsefulLinks/Glossary.md): נוספו הערכים **AID**, **FCL**, **HCL** ו-**OS-AID**, עם קישורים מ-**APS** ומ-**Closed Loop** @psonnera
- דף חדש [אימות מפתחים ב-Android](#android-developer-verification): ההשפעה של דרישת האימות העתידית של Google על התקנת אפליקציות שבניתם בעצמכם, עם דרכי התקנה חינמיות (ADB, תהליך מתקדם (advanced flow), חשבון הפצה מוגבלת (limited distribution)) @psonnera

## יוני 2026

- [בנייה בדפדפן](#browser-build): המבנה שונה לתהליך של כמה דפים שמתחיל בהחלטה (Fork → keystore אפשרות 1/אפשרות 2 עם דף נפרד לכל מכשיר → Google Drive → בנייה → פתרון תקלות); הוסרו לשוניות מקוננות, והתקנת File Manager Plus הפכה לשלב בולט @psonnera
- [מבוא](../Getting-Started/Introduction.md): המונחים הוחלפו מ-*DIY* ל-*OS-AID* (Open-Source Automated Insulin Delivery), נוספו Trio ו-Stelo, וטבלת התאימות של משאבות/CGM עודכנה @tmhastings

## March 2026

- [Add CLI Build option](../SettingUpAaps/CLIBuild.md) @je-l
- Rename *Computer Build* to *Android Studio Build*. Preserve file names for URLs.

## January 2025

- השקת [3.4](#version3400) וריכוז עדכוני התיעוד (אשף, גרסאות בנייה במחשב, הגדרות תצורה)
- CGM list update. Dexcom G5, Tomato, Glimp removed.
- [ממשק סבב אתרי עירוי](#Aapsscreens-site-rotation)
- [מצב הפעלה](#AapsScreens-running-mode)
- [Autotune](../AdvancedOptions/Autotune.md)

## December 2025

- [Profile tuning](../GettingHelp/ProfileTuning.md) from @robrub

## October 2025

- DiaKEM: new installs don't work after servers upgrade @psonnera
- הוסרה אפליקציית Libre 2 המתוקנת (מיושנת): היא לא עובדת עם חיישנים חדשים @psonnera
- עיבוד מחדש של דף Omnipod DASH @XiTatiON

## August 2025

- Updated versions and Android Studio prerequisites
- Added [3.3.2.1](#version3321) release, removed Android 16 references (fixed)
- Added [Browser Build](#browser-build) @Angus

## May 2025

- Added [3.2.0.4 upgrade page](#update-aaps-3204) @psonnera

## January 2025

- Quick wizard [long press feature](#Preferences-quick-wizard) @emilise
- [DynamicISF](../DailyLifeWithAaps/DynamicISF.md) page rewritten @emilise

## December 2024

- Documentation of [3.3 version](#version3300) @emilise

## November 2024

- Update of [Your AAPS Profile](../SettingUpAaps/YourAapsProfile.md) @emilise
- ארגון מחדש של התוכן על [שעונים חכמים עם Wear OS](../WearOS/BuildingAapsWearOS.md) @psonnera

## October 2024

- Update of several pages:
  - [כמה זמן זה ייקח](#preparing-how-long-will-it-take), [סקירת רכיבים](../Getting-Started/ComponentOverview.md), [השלמת המשימות](../SettingUpAaps/CompletingTheObjectives.md), [פרופיל AAPS שלכם](../SettingUpAaps/YourAapsProfile.md), [הגדרות תצורה](../SettingUpAaps/ConfigBuilder.md) ו-[העדפות](../SettingUpAaps/Preferences.md), [מסכי AAPS](../DailyLifeWithAaps/AapsScreens.md) @emilise
  - [חישוב פחמימות פעילות (COB)](../DailyLifeWithAaps/CobCalculation.md), [Dynamic ISF](../DailyLifeWithAaps/DynamicISF.md) @UnderCliffe10
- [Building instructions for Android Studio Ladybug](../SettingUpAaps/BuildingAaps.md) @tanja
- עבודה טכנית (תהליך הפריסה של התיעוד, ארגון הקבצים...) @psonnera ו-@emilise

***

Missing history from March 2022 to September 2024

With 3.2 rework, some obsolete information was removed. You can find it in the previous documentation version:

AAPS 3.1 documentation is available [here](https://androidaps.readthedocs.io/en/3.1/index.html).

***

```{dropdown} Older updates (2019 to 2022)
**February 2022**

- [BG quality warning sign](#aaps-screens-bg-warning-sign) @tanja
- [Medtronic pump update](../CompatiblePumps/MedtronicPump.md) @dottedfingertips
- [Necessary checks after update to AAPS 3.0](Update3_0.md) @tanja
- [Omnipod DASH](../CompatiblePumps/OmnipodDASH.md) @Freloner @robertrub @vanelsberg
- Update docs for AAPS 3.0 (partly) @xJoe
- [Wear OS for AAPS 3.0](../WearOS/WearOsSmartwatch.md) @peterleimbach

**January 2022**

- [Troubleshooting Android Studio](../GettingHelp/TroubleshootingAndroidStudio.md) - update @tanja

**December 2021**

- [Building the APK](../SettingUpAaps/BuildingAaps.md) - update Android Studio Arctic Fox | 2020.3.1 @tanja
- [Dana-i](../CompatiblePumps/DanaRS-Insulin-Pump.md) information added @MilosKozak

**November 2021**

- Best practices for calibrating a Libre 2 sensor
- [ISF](../UsefulLinks/FAQ.md) reformulation of impact
- Update [troubleshooting Android studio](../GettingHelp/TroubleshootingAndroidStudio.md)
- Removed patched [Dexcom](../CompatibleCgms/DexcomG6.md) app as it is obsolete

**October 2021**

- [Release notes](ReleaseNotes.md) AAPS 3.0 beta

**September 2021**

- Recommended computer specification to [build AAPS app](#Building-APK-recommended-specification-of-computer-for-building-apk-file)

**June 2021**

- [Watchface sideload](../WearOS/WearOsSmartwatch.md)

**April 2021**

- List of [communication devices](#CompatiblePumps-additional-communication-device) for Omnipod and Medtronic pumps
- AAPS predictions in [Nightscout](#Nightscout-manual-nightscout-setup)

**March 2021**

- Dev communication moved from gitter to [discord](https://discord.gg/4fQUWHZ4Mw)

**February 2021**

- New navigation bar and [language switch](../NavigateDoc/ChangeLanguageVersion.md)

**January 2021**

- [Action tab](#screens-action-tab) - more details on page 'AAPS screens'
- Dexcom G6 with [Build Your Own Dexcom App](#DexcomG6-if-using-g6-with-build-your-own-dexcom-app)
- Libre smart reader [battery level](#screens-sensor-level-battery)
- [Objectives](#objectives-objective3) - new questions
- Other [new AAPS 2.8.0 functions](#Releasenotes-version-2-8-0)

**December 2020**

- [Libre 2](../CompatibleCgms/Libre2.md) - patched app does not work with US sensors
- [OpenAPS hard-coded limits](#Open-APS-features-overview-of-hard-coded-limits)
- Sony Smartwatch 3 Manual Installation of Google Play Service

**October 2020**

- Accu-Chek Combo - update [time adjustment daylight savings time](#time-adjustment-daylight-savings-time-dst)
- Accu-Chek Insight - Option to [upload absolute values](#Accu-Chek-Insight-Pump-settings-in-aaps)
- Logs - more details about [folder location](../GettingHelp/AccessingLogFiles.md)
- Omnipod Eros - status update
- [SMS commands - time sync](../RemoteFeatures/SMSCommands.md)

**September 2020**

- Major update for new AAPS version 2.7
- For details see the [release notes](#Releasenotes-version-2-7-0)

**June 2020**

- Libre 2 - more details patched Libre Link app & use of Bluetooth transmitters
- [Time zone traveling](../DailyLifeWithAaps/TimezoneTraveling-DaylightSavingTime.md) with Libre 2

**May 2020**

- [Extended bolus only for Dana + Insight pumps](#Extended-Carbs-extended-bolus-and-switch-to-open-loop-dana-and-insight-pump-only)
- [Insight deactivate vibration](#Accu-Chek-Insight-Pump-vibration) (firmware 3.x only)
- [Minimal request rate](#Preferences-minimal-request-change) to reduce number of notifications in open loop mode
- Patched Libre Link app - check if correctly patched
- [Prediction lines](#aaps-screens-prediction-lines) - more details

**April 2020**

- Backdate insulin (i.e. given by syringe)
- Android 6 support will be discontinued in next master version

**March 2020**

- [Build apk with Android Studio 3.6.1](../SettingUpAaps/BuildingAaps.md)
- [DanaRS with firmware v3](../CompatiblePumps/DanaRS-Insulin-Pump.md) **cannot currently be used with AAPS!**
- [Extended bolus and switch to open loop](#Extended-Carbs-extended-bolus-and-switch-to-open-loop-dana-and-insight-pump-only)
- [Update apk with Android Studio 3.6.1](../Maintenance/UpdateToNewVersion.md)

**February 2020**

- Automation caveats
- [Autosens](#Open-APS-features-autosens) - short explanation
- Careportal alternatives
- [Extended bolus](#Extended-Carbs-extended-bolus-and-switch-to-open-loop-dana-and-insight-pump-only) feature - closed loop will be disabled
- New [Local Profile plugin](../SettingUpAaps/ConfigBuilder.md)
- Sample Setup - update Dexcom G6
- [Version 2.6.0](#Releasenotes-version-2-6-0) - major new features
- [Wear complications](../WearOS/WearOsSmartwatch.md)

**January 2020**

- [Manual carb correction](#screens-bolus-carbs) for faulty carb entries
- [Image size](../SupportingAaps/HowToEditTheDocs.md) when editing docs

**December 2019**

- [Android Auto](../RemoteFeatures/AndroidAuto.md) - setup with screenshots
- [Accu-Chek Insight & Autotune](#Accu-Chek-Insight-Pump-settings-in-aaps) - workaround for usage
- [Glimp](#Config-Builder-bg-source) - version 4.15.57 and newer supported
- [Watchfaces](../WearOS/WearOsSmartwatch.md) - major update, way more details
- [Watchface complications](#Watchfaces-complications) - use your favorite watchface with AAPS data

**November 2019**

- [Automation - deactivate when disabling loop](../DailyLifeWithAaps/Automations.md)
- [Dexcom G6 replace transmitter update](#xdrip-replace-transmitter)
- [Extended bolus - why they do not work in a loop context](#Extended-Carbs-extended-bolus-and-switch-to-open-loop-dana-and-insight-pump-only)
- [FAQ - sports](#FAQ-sports)
- [Homescreen - lines on graph](#aaps-screens-main-graph)
- [Insight - Disable absolute values in NS Client](#Accu-Chek-Insight-Pump-settings-in-aaps)
- [Medtronic pump - possible double entries](../CompatiblePumps/MedtronicPump.md)
- [New Freestyle Libre 2 tutorial](../CompatibleCgms/Libre2.md)
- [Profile switch with percentage - example](../DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md)
- [SMS commands update](../RemoteFeatures/SMSCommands.md)
- [Troubleshooting Android Studio](../GettingHelp/TroubleshootingAndroidStudio.md)
- [Troubleshooting - link collection](../GettingHelp/GeneralTroubleshooting.md)
- Update - quick walk-through for experienced users
- Docs - update [edit](#edit-the-docs-code-syntax) and [translation](#translations-translation-of-the-documentation).

**October 2019**

- [AAPS version 2.5](#Releasenotes-version-2-5-0) updates (especially on [update page](../Maintenance/UpdateToNewVersion.md))
- [Accu-Chek Insight - log options](#Accu-Chek-Insight-Pump-settings-in-aaps)
- [COB calculation on separate page](../DailyLifeWithAaps/CobCalculation.md)
- [COB - wrong COB value detection](#CobCalculation-detection-of-wrong-cob-values)
- [Dexcom G6 specific troubleshooting](#DexcomG6-troubleshooting-g6)
- [Objectives update version 2.5](../SettingUpAaps/CompletingTheObjectives.md)
- [Preferences update](../SettingUpAaps/Preferences.md)
- [SGLT-2 inhibitors - do not use when looping](#PreparingForAaps-no-sglt-2-inhibitors)
- [SMS Commands Troubleshooting](#SMSCommands-troubleshooting)
- [xDrip - update G6 transmitter replacement](#xdrip-replace-transmitter)

**September 2019**

- [Automate](../DailyLifeWithAaps/Automations.md)
- [Bolus calculator](#AapsScreens-wrong-cob-detection) - slow carb absorption
- [Nightscout security](#Nightscout-security-considerations)
- [Profile timeshift](#ProfileSwitch-ProfilePercentage-time-shift-of-the-circadian-percentage-profile) (more details)
- [Remote monitoring](../RemoteFeatures/RemoteMonitoring.md)
- [What is a closed loop system?](#Introduction-what-does-hybrid-closed-loop-mean)

**August 2019**

- Dexcom G6 patched app region
- [Dexcom G6 new transmitter](#xdrip-connect-g6-transmitter-for-the-first-time) ("firefly" / 8G...)
- What do I need? - new structure & additional information
- New structure
```
