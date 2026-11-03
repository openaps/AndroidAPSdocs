# Welcome to the AAPS documentation

![image](./images/basic-outline-of-AAPS.png)

```{admonition} Latest Release
:class: note

31 באוקטובר 2026: גרסה 4.0.0 יצאה. Check the [Release Notes](#latestrelease) to see what's new and follow the instructions in the [update manual](./Maintenance/UpdateToNewVersion.md) to update.

```

Android APS (**AAPS**) is an open source app for people living with insulin-dependent diabetes. It is an artificial pancreas system (APS) which runs on Android smartphones. **AAPS** uses an OpenAPS software algorithm and aims to do what a real pancreas does: keep blood sugar levels within healthy limits by using automated insulin dosing. כדי להשתמש ב־**AAPS** נדרשים **שלושה** מכשירים תואמים: **(1)** טלפון Android, **(2)** חיישן סוכר רציף (CGM) ו־**(3)** משאבת אינסולין בעלת אישור FDA/CE. אפשר להוסיף גם **(4)** שירותי ענן, כדי לשלוט ב־**AAPS** מרחוק, לשתף את הנתונים ולשמור אותם בשרת דיווח, וגם **(5)** שעון חכם.

תיעוד זה מסביר איך להגדיר את **AAPS** ואיך להשתמש בה. אפשר לנווט בתיעוד של **AAPS** דרך התפריט בצד (ובעזרת פונקציית החיפוש הנוחה **Search docs**), או דרך [תוכן העניינים](#index-aaps-documentation-index) בתחתית הדף.

## סקירה של תיעוד AAPS ("התיעוד")

בפרק **1) תחילת העבודה**, הדף [מבוא ל-APS ול-AAPS](Getting-Started/Introduction.md) מסביר את הרעיון הכללי: מה מערכת לבלב מלאכותי (APS) נועדה לעשות. It outlines the background of looping in general, why **AAPS** was developed, compares **AAPS** to other systems, and addresses safety. It gives suggestions about how to talk to your clinical team about **AAPS**, explains why you need to build the **AAPS** app yourself rather than just downloading it, and gives an overview of the typical connectivity of an **AAPS** system. It also addresses accessibility, and who is likely to benefit from **AAPS**.

הפרק [מתכוננים להתחיל עם AAPS](./Getting-Started/PreparingForAaps.md) מפרט יותר על שיקולי הבטיחות ועל הטלפונים, חיישני הסוכר הרציפים (CGM) ומשאבות האינסולין התואמים ל־**AAPS**. It gives an overview of the process you will go through, and provides an approximate timeline for gaining full functionality of **AAPS**. This section gets you technically prepared to assemble your **AAPS** setup as quickly and efficiently as possible. תת־הפרק [מערכות CGM תואמות](./Getting-Started/CompatiblesCgms.md) מסביר איך לשפר את הגדרת ה־CGM ואילו אפשרויות החלקה הן הטובות ביותר.

Now that you have a solid understanding of the process, you can start assembling your **AAPS** loop.

פרק **2) בניית האפליקציה** מסביר למה צריך לבנות את אפליקציית **AAPS** בעצמכם ולא פשוט להוריד אותה. הוא מוביל אתכם צעד אחר צעד ב[בניית האפליקציה](./SettingUpAaps/BuildingAaps.md) (בדפדפן, ב־Android Studio או משורת הפקודה), ואחר כך בהעברה ובהתקנה שלה בטלפון. הפרק מתחיל בשלב שאינו חובה: יצירת [חשבון Google ייעודי](./UsefulLinks/DedicatedGoogleAccountForAaps.md) לשמירת הבניות והגיבויים. הוא מסביר גם את [אימות המפתחים ב־Android](#android-developer-verification), שינוי ש־Google מכניסה החל מספטמבר 2026, והוא משפיע על אופן ההתקנה של אפליקציות שבניתם בעצמכם.

פרק **3) הגדרת שרת הדיווח** עוסק בבחירה וב[הגדרה של שרת הדיווח](./SettingUpAaps/SettingUpTheReportingServer.md) (Nightscout או Tidepool), כדי שתוכלו לעבור על הנתונים שלכם ולשתף אותם.

פרק **4) [הגדרת AAPS](./SettingUpAaps/SetupWizard.md)** עוסק בהגדרת אפליקציית **AAPS** בעזרת אשף ההתקנה, בחיבור שלה לאפליקציית ה־CGM ולמשאבת אינסולין אמיתית או וירטואלית, וגם בחיבור **AAPS** לשרת הדיווח. אחר כך תכירו את כל מה ש־**AAPS** יכולה לעשות, בתהליך בטוח, צעד אחר צעד ובקצב זהיר. כך ניתן לוודא שאתם (או הילד שלכם) מכירים היטב את כל הרמות ואת הגדרות התפריטים ומרגישים בנוח איתם, לפני המעבר לשלב הבא, שנקרא בדרך כלל "המשימה" הבאה. ממשיכים כך עד שצוברים מספיק ניסיון כדי להתחיל להשתמש באפשרויות המתקדמות יותר באפליקציה. These Objectives are specially designed in such a way that will gradually unlock more possibilities of **AAPS** and switch from Open Loop to Closed Loop.

פרק **5) [חיי היומיום עם AAPS](./DailyLifeWithAaps/AapsScreens.md)** מציג את התכונות המרכזיות של **AAPS**, כדי לעזור לכם להשתמש ב־**AAPS** ולהתאים אותה לצרכים שלכם. זה כולל הבנה של המסכים, פחמימות פעילות (COB), רגישות, DynamicISF, החלפת פרופיל, יעדים זמניים, פחמימות ממושכות (eCarbs), אוטומציות ו[סקירת הנתונים שלכם](./Maintenance/Reviewing.md) בדפדפן ההיסטוריה ובסטטיסטיקה. הפרק עוסק גם בנושאים נפוצים, כמו איך להתמודד עם סוגים שונים של ארוחות, איך לטפל בהחלפת צינורית ובהחלפת חיישן, עדכוני טלפון, מעבר לשעון קיץ, [נסיעות עם AAPS](DailyLifeWithAaps/TimezoneTraveling-DaylightSavingTime.md) וספורט. שאלות ותשובות נפוצות מופיעות בפרק פתרון התקלות.

פרק **6) [תכונות AAPS מרחוק](./RemoteFeatures/RemoteControl.md)** מציג את אחת החוזקות האמיתיות של **AAPS**. There are a wide range of possibilities for remotely sending commands to, or simply following the data from **AAPS**. This is equally useful for carers who want to use **AAPS** for minors, and for adults with diabetes who either want to monitor their sugars (and other metrics) more conveniently than just on their phone (on a watch, in the car _etc._), or wish to have significant others to also monitor the data. This section also provides guidance for using Android Auto so you can view glucose levels in the car.

פרק **7) [שעונים חכמים עם Wear OS](./WearOS/BuildingAapsWearOS.md)** נותן מידע והוראות לשימוש בשעון חכם עם Android **Wear OS**, עם פני השעון הייעודיים של **AAPS** או עם פני שעון מותאמים אישית, כשלט רחוק לטלפון או רק כתצוגה.


פרק **8) [תחזוקת AAPS](./Maintenance/ExportImportSettings.md)** מסביר איך לייצא ולגבות את ההגדרות (חשוב מאוד למקרה שהטלפון אובד או נשבר), מציג את הערות הגרסה האחרונה, מפרט איך לעדכן את **AAPS** ומסביר מה קורה כשגרסה מגיעה לסוף התמיכה. You can expect that there will be one new version and 2-3 required updates per year. You are required to do these updates as with all software, as any minor bugs are ironed out, and improvements to **AAPS** are made. קיים סעיף ייעודי לפתרון תקלות בעדכון, ובו השאלות הנפוצות.

פרק **9) [עזרה ופתרון תקלות](GettingHelp/WhereCanIGetHelp.md)** מכוון אתכם למקומות הטובים ביותר לקבלת עזרה כללית עם **AAPS**. זה המקום היחיד שאליו פונים כשמשהו לא עובד: הדף [פתרון תקלות](GettingHelp/GeneralTroubleshooting.md) מרכז לפי נושאים את הפתרונות לבעיות הנפוצות ביותר, והדף [שאלות נפוצות](UsefulLinks/FAQ.md) עונה על שאלות שחוזרות הרבה. This is very important so that you can get in touch with others as quickly as possible, clarify questions and solve the usual pitfalls. A lot of people are already using **AAPS** successfully, but everyone has a question at some point that they couldn't solve on their own. Due to the large number of users, the response times to questions are usually very quick, typically only a few hours. Don’t worry about asking for help, there is no such thing as a dumb question! We encourage users of any/all levels of experience to ask as many questions as they feel is necessary to help get them up and running safely. פרק זה כולל פתרון תקלות כללי עבור **AAPS** ועבור **AAPSClient**, אפליקציה נלווית למעקב. הוא גם מסביר כיצד לשלוח את נתוני **AAPS**, כלומר קובצי היומן, למפתחים לצורך בדיקה אם לדעתכם יש בעיה טכנית ב־**AAPS** שדורשת בירור.

פרק **10)** עוסק ב**[אפשרויות AAPS מתקדמות](./AdvancedOptions/FullClosedLoop.md)**, למשל איך לעבור משימוש ב־**AAPS** כלולאה סגורה היברידית (עם בולוס לארוחות _וכו'_) ללולאה סגורה מלאה (בלי בולוס), איך [לכוונן את הפרופיל](./GettingHelp/ProfileTuning.md) ולהשתמש ב־Autotune, ומפרט את מצב הפיתוח ואת מצב ההנדסה. Most users get on just fine with the main or "Master" **AAPS** version without looking into these options, this section is for users who already have good control and are looking to further improve their setup.

בפרק **11) [איך לתמוך ב־AAPS](SupportingAaps/HowCanIHelp.md)** אנחנו נותנים מידע שיעזור לכם לתמוך בפרויקט הזה. You can donate money, equipment or expertise. ניתן להציע שינויים בתיעוד או לערוך אותו בעצמכם, לסייע ב[תרגום התיעוד](SupportingAaps/Translations.md) ולשתף את הנתונים שלכם באמצעות פרויקט Open Humans.

פרק **12) מקורות מידע** כולל תיעוד נוסף או מאורכב, ובו תת־פרק עבור [צוותים רפואיים](UsefulLinks/ClinicianGuideToAaps.md) שמתעניינים בטכנולוגיית לבלב מלאכותי בקוד פתוח כמו **AAPS**, או עבור מטופלים שרוצים לשתף מידע כזה עם הצוות הרפואי שלהם. גם המבוא עוסק בנושא הזה. More diabetes and looping references and resources are also contained in this section. הוא כולל את [מילון המונחים](./UsefulLinks/Glossary.md), רשימה של ראשי התיבות (או השמות המקוצרים) שמופיעים לאורך **AAPS**. This is where to go to find out what the terms ISF or TT, stand for, for example.


 ### Interested in getting started with **AAPS**? קראו עוד על **AAPS** ב[מבוא ל-APS ול-AAPS](Getting-Started/Introduction.md).

```{admonition} SAFETY NOTICE
:class: danger
The safety of **AAPS** relies on the safety features of your hardware (phone, pump, CGM). Only use a fully functioning FDA/CE approved insulin pump and CGM. Do not use broken, modified or self-built insulin pumps or CGM receivers. Only use original consumable supplies (inserters, cannulas and insulin reservoirs) approved by the manufacturer for use with your pump and CGM. Using untested or modified supplies can cause inaccuracy and insulin dosing errors, resulting in significant risk to the user. 

Do not use **AAPS** if you take SGLT-2 inhibitors (gliflozins), as they lower blood sugar levels. קיים סיכון מוגבר לחמצת קטוטית סוכרתית (DKA) עקב מתן אינסולין מופחת, ולהיפוגליקמיה עקב ירידה ברמות הסוכר בדם. 
```

```{admonition} Disclaimer
:class: note

- All information and code described here is for informational and educational purposes only. Use [Nightscout](https://nightscout.github.io/) and **AAPS** at your own risk, and do not use the information or code to make medical decisions. Nightscout כרגע אינו מנסה לעמוד בדרישות הפרטיות של HIPAA. 
- Use of code from github.com is without warranty or formal support of any kind. פרטים נוספים בקובץ LICENSE של מאגר זה.
- All product and company names, trademarks, servicemarks, registered trademarks, and registered servicemarks are the property of their respective holders. השימוש בהם הוא למטרות מידע בלבד, ואינו מרמז על קשר כלשהו איתם או על המלצה מצדם.

ל־**AAPS** אין קשר לחברות הבאות, והן אינן ממליצות עליה: [SOOIL](http://www.sooil.com/eng/), [Dexcom](https://www.dexcom.com/), [Accu-Chek, Roche Diabetes Care](https://www.accu-chek.com/), [Insulet](https://www.insulet.com/), [Medtronic](https://www.medtronic.com/), [Diaconn](https://www.diaconn.com/en/index.html), [EOFlow](http://www.eoflow.com/), [MicroTech Medical (Equil)](https://www.microtechmd.com/), [Medtrum](https://www.medtrum.com/), [Senseonics (Eversense)](https://www.senseonics.com/), [i-SENS (CareSens)](https://i-sens.com/), [POCTech](https://poctechcorp.com/en/), [Ottai](https://ottai.com/) או [Syai](https://www.syai.com/).

```

(index-aaps-documentation-index)=

## AAPS Documentation Index

```{toctree}
:caption: Using this documentation
:titlesonly:

Change language and version <./NavigateDoc/ChangeLanguageVersion.md>
Search the documentation <./NavigateDoc/SearchDoc.md>
Documentation updates <./Maintenance/DocumentationUpdate.md>
```
```{toctree}
:caption: 1) תחילת העבודה

מבוא ל-APS ול-AAPS <./Getting-Started/Introduction.md>
מתכוננים להתחיל עם AAPS <./Getting-Started/PreparingForAaps.md>
סקירת רכיבים <./Getting-Started/ComponentOverview.md>
- משאבות תואמות <./Getting-Started/CompatiblePumps.md>
- מערכות CGM תואמות <./Getting-Started/CompatiblesCgms.md>
- טלפונים  <./Getting-Started/Phones.md>
- שעונים חכמים ו־AAPS  <./Getting-Started/Watches.md>
```

```{toctree}
:caption: 2) בניית האפליקציה

חשבון Google ייעודי ל-AAPS (לא חובה) <./UsefulLinks/DedicatedGoogleAccountForAaps.md>
בניית AAPS <./SettingUpAaps/BuildingAaps.md>
- בנייה בדפדפן <./SettingUpAaps/BrowserBuild.md>
- בנייה ב-Android Studio <./SettingUpAaps/ComputerBuild.md>
- הוראות בנייה משורת הפקודה <./SettingUpAaps/CLIBuild.md>
העברה והתקנה של AAPS בטלפון החכם <./SettingUpAaps/TransferringAndInstallingAaps.md>
```
```{toctree}
:caption: 3) הגדרת שרת הדיווח

הגדרת שרת הדיווח <./SettingUpAaps/SettingUpTheReportingServer.md>
- Nightscout <./SettingUpAaps/Nightscout.md>
- Tidepool <./SettingUpAaps/Tidepool.md>
```
```{toctree}
:caption: 4) הגדרת AAPS

אשף ההתקנה של AAPS <./SettingUpAaps/SetupWizard.md>
פרופיל AAPS שלכם <./SettingUpAaps/YourAapsProfile.md>
ביצוע שינויים בתצורת AAPS שלכם <./SettingUpAaps/ChangeAapsConfiguration.md>
- הגדרות תצורה (Config Builder) <./SettingUpAaps/ConfigBuilder.md>
- הגדרות <./SettingUpAaps/Preferences.md>
השלמת המשימות <./SettingUpAaps/CompletingTheObjectives.md>
```

```{toctree}
:caption: 5) חיי היומיום עם AAPS

מסכי AAPS <./DailyLifeWithAaps/AapsScreens.md>
תכונות מרכזיות של AAPS <./DailyLifeWithAaps/KeyAapsFeatures.md>
חישוב פחמימות פעילות (COB) <./DailyLifeWithAaps/CobCalculation.md>
זיהוי רגישות <./DailyLifeWithAaps/SensitivityDetectionAndCob.md>
ISF דינמי (DynISF) <./DailyLifeWithAaps/DynamicISF.md>
החלפת פרופיל ואחוז הפרופיל <./DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md>
יעדים זמניים <./DailyLifeWithAaps/TempTargets.md>
פחמימות ממושכות <./DailyLifeWithAaps/ExtendedCarbs.md>
אשף מהיר (בולוס בלחיצה אחת) <./DailyLifeWithAaps/QuickWizards.md>
תרחישים (הגדרות מוכנות למצבים) <./DailyLifeWithAaps/Scenes.md>
אוטומציה <./DailyLifeWithAaps/Automations.md>
הפעלה מהירה (סרגל הפעולות המהירות במסך הראשי) <./DailyLifeWithAaps/QuickLaunch.md>
ווידג'טים למסך הבית <./DailyLifeWithAaps/Widgets.md>
מזון (מסד נתוני המזון שלכם) <./DailyLifeWithAaps/Food.md>
חיפוש כללי <./DailyLifeWithAaps/GlobalSearch.md>
סקירת הנתונים שלכם <./Maintenance/Reviewing.md>
AAPS לילדים <./DailyLifeWithAaps/AapsForChildren.md>
משאבות וצינוריות <./DailyLifeWithAaps/PumpsAndCannulas.md>
שינוי אזור זמן ושעון קיץ <./DailyLifeWithAaps/TimezoneTraveling-DaylightSavingTime.md>

```

```{toctree}
:caption: 6) תכונות AAPS מרחוק

ניטור מרחוק <./RemoteFeatures/RemoteMonitoring.md>
מעקב אחר AAPS (ללא התערבות במערכת AAPS) <./RemoteFeatures/FollowingOnly.md>
Android Auto <./RemoteFeatures/AndroidAuto.md>
שליטה מרחוק ב-AAPS <./RemoteFeatures/RemoteControl.md>
האפליקציה AAPSClient <./RemoteFeatures/AapsClient.md>
שליטה בין מכשיר ראשי ↔ מכשיר לקוח (שליטה מרחוק חתומה) <./RemoteFeatures/ClientMasterControl.md>
פקודות SMS <./RemoteFeatures/SMSCommands.md>

```
```{toctree}
:caption: 7) שעונים חכמים עם Wear OS

בניית אפליקציית Wear של AAPS <./WearOS/BuildingAapsWearOS.md>
הגדרת AAPS בשעון Wear OS <./WearOS/WearOsSmartwatch.md>
תפעול AAPS בעזרת שעון Wear OS <./RemoteFeatures/RemoteControlWearOS.md>
מסמך עזר לפני שעון מותאמים אישית <./ExchangeSiteCustomWatchfaces/CustomWatchfaceReference.md>
אתר לשיתוף פני שעון מותאמים אישית <./ExchangeSiteCustomWatchfaces/index.md>

```

```{toctree}
:caption: 8) תחזוקת AAPS

יצירה ושחזור של גיבויים <./Maintenance/ExportImportSettings.md>
הערות גרסה <./Maintenance/ReleaseNotes.md>
מה השתנה ב-AAPS v4 <./Maintenance/V4Changes.md>
עדכון לגרסה חדשה או לענף חדש <./Maintenance/UpdateToNewVersion.md>
- עדכון בדפדפן (fork) <./Maintenance/UpdateBrowserBuild.md>
- עדכון באמצעות Android Studio <./Maintenance/UpdateComputerBuild.md>
סוף התמיכה <./Maintenance/EndOfLife.md>

```

```{toctree}
:caption: 9) עזרה ופתרון תקלות

איפה אפשר לקבל עזרה? <./GettingHelp/WhereCanIGetHelp.md>
פתרון תקלות <./GettingHelp/GeneralTroubleshooting.md>
- בעיות הקשורות ל־Bluetooth <./GettingHelp/BluetoothTroubleshooting.md>
- פתרון תקלות ב-NSClient <./GettingHelp/TroubleshootingNsClient.md>
- פתרון תקלות ב-Android Studio <./GettingHelp/TroubleshootingAndroidStudio.md>
- בנייה בדפדפן: פתרון תקלות <./GettingHelp/BrowserBuildTroubleshooting.md>
- התקנה מחדש של AAPS עם keystore חדש <./GettingHelp/ReinstallAaps.md>
- גישה לקובצי היומן <./GettingHelp/AccessingLogFiles.md>
שאלות נפוצות של לופרים <./UsefulLinks/FAQ.md>
```

```{toctree}
:caption: 10) אפשרויות AAPS מתקדמות

לולאה סגורה מלאה <./AdvancedOptions/FullClosedLoop.md>
כוונון הפרופיל של AAPS <./GettingHelp/ProfileTuning.md>
שימוש בתוסף Autotune <./AdvancedOptions/Autotune.md>
ריכוז האינסולין <./AdvancedOptions/InsulinConcentration.md>
ענף הפיתוח <./AdvancedOptions/DevBranch.md>
בנייה בדפדפן: cherry-pick של קומיט <./AdvancedOptions/BrowserBuildCherryPick.md>

```
```{toctree}
:caption: 11) איך לתמוך ב־AAPS

איך לעזור ל-AAPS <./SupportingAaps/HowCanIHelp.md>
כיצד לערוך את התיעוד <./SupportingAaps/HowToEditTheDocs.md>
כיצד לתרגם מחרוזות לאפליקציית AAPS או לתיעוד <./SupportingAaps/Translations.md>
סטטוס תרגום האפליקציה והתיעוד <./SupportingAaps/StateOfTranslations.md>
Open Humans Uploader (העלאת נתונים ל-Open Humans) <./SupportingAaps/OpenHumans.md>

```
```{toctree}
:caption: 12) מקורות מידע

מילון מונחים <./UsefulLinks/Glossary.md>
חומרים שימושיים לקריאה לפני שמתחילים <./UsefulLinks/BackgroundReading.md>
לצוותים רפואיים – מבוא כללי ומדריך ל־AAPS <./UsefulLinks/ClinicianGuideToAaps.md>
```
