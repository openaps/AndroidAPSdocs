# מילון מונחים

**AAPS** = AndroidAPS הוא השם של אפליקציית ה-Android.

**AAPSClient** = אפליקציית המעקב למטפלים. בטלפון עוקב היא עוקבת אחרי **AAPS** של המשתמש דרך אתר ה-**Nightscout** שלו. אחרי צימוד לטלפון ה-**AAPS**, היא גם שולטת בו מרחוק. לא לבלבל עם **NSClient**. מידע נוסף → [ויקי - 'האפליקציה AAPSClient'](../RemoteFeatures/AapsClient.md) ו-[שליטה בין מכשיר ראשי ↔ מכשיר לקוח](#client-master-control).

**פעילות אינסולין** (Activity) = פעילות האינסולין, שמייצגת את המהירות שבה ה-IOB יורד. ראו [ויקי - 'DIA'](#Config-Builder-insulin-dia) ואת **BGI** הקשור.

**AID** = מתן אינסולין אוטומטי (Automated Insulin Delivery). המונח המקובל בעבודה הקלינית ובמחקר למערכת שמתאימה את מתן האינסולין באופן אוטומטי לפי נתוני **CGM**. **APS** ו**לולאה סגורה** פירושם אותו דבר → ראו גם **OS-AID**.

**APS** = מערכת לבלב מלאכותי (Artificial Pancreas System) → ראו גם **AID**.

**AMA** = Advanced Meal Assist. אלגוריתם שמאפשר ל-**AAPS** להעלות את הבזאלי בצורה אגרסיבית יותר אחרי בולוס לארוחה. מידע נוסף → [ויקי - 'סיוע מתקדם לארוחות (AMA)'](#Open-APS-features-advanced-meal-assist-ama).

**מקדם ההתאמה** (Adjustment Factor) = משמש ב-**DynamicISF**. זהו ערך בין 1% ל-300% שמגדירים ב**הגדרות**. This acts as a multiplier on the **TDD** value. ראו [ויקי - מקדם ההתאמה של DynamicISF](#dyn-isf-adjustment-factor)

**Android Auto** = a system used to host certain functions of an Android smartphone’s features, including **AAPS**, within a car's display. מידע נוסף → [ויקי - 'Android Auto'](../RemoteFeatures/AndroidAuto.md).

**APK** = חבילת אפליקציה של Android (Android application Package). A software installation file. מידע נוסף → [ויקי - 'בניית ה-APK'](../SettingUpAaps/BuildingAaps.md).

**Autosens** = חישוב הרגישות לאינסולין בחלונות זמן של 24 שעות ושל 8 שעות וכו'. מידע נוסף → [DIABETTECH - **Autosens**](https://www.diabettech.com/what-conclusions-can-we-draw-when-investigating-insulin-sensitivity-using-the-autosens-function-within-openaps-an-n1-study/).

**Azure** = פלטפורמת מחשוב ענן לאירוח אפליקציית האינטרנט **Nightscout** → ראו גם **Nightscout**.

**BAT** = אור חיווי לסוללת משאבה חלשה, שמוצג בשורת המצב במסך הראשי של **AAPS** → ראו גם **CAN** / **RES** / **SEN**.

**BG** = רמת הסוכר בדם (blood glucose).

**BGI** = השפעת רמת הסוכר בדם (blood glucose impact). המידה שבה רמת הסוכר (**BG**) 'אמורה' לעלות או לרדת על סמך פעילות האינסולין בלבד.

**BG source** (מקור ערכי הסוכר) = הגדרה ב-AAPS שקובעת מאיפה מגיעים נתוני הסוכר. ראו [ויקי - מקור ערכי הסוכר](#Config-Builder-bg-source)

**Bridge** (גשר) = התקן נוסף שהופך **FGM** ל-**CGM**.

**BR** = קצב בזאלי (Basal Rate). כמות האינסולין בפרק זמן נתון, שנועדה לשמור על רמת הסוכר (**BG**) יציבה. → see also **IC** / **ISF**.

**BYODA** = Build Your Own Dexcom App. דרך ליצור אפליקציית Dexcom משלכם, לקריאת נתוני החיישן Dexcom G6.

**CAGE** = Cannula AGE. מוצג במסך הראשי של **AAPS** וב-Nightscout, לפי רישומי **תיחול/מילוי** בפורטל הטיפולים → ראו גם **Nightscout**.

**CAN** = אור חיווי שמראה שעבר הזמן להחליף את הצינורית. הוא מוצג בשורת המצב במסך הראשי של **AAPS** → ראו גם **BAT** / **RES** / **SEN**.

**CGM** = Continuous Glucose Monitor → see also **FGM**.

**לולאה סגורה** (Closed Loop) = מערכת לולאה סגורה שמתאימה באופן אוטומטי את מתן האינסולין הבזאלי לפי האלגוריתם של **AAPS** והגדרות ה**פרופיל** של המשתמש, בלי צורך באישור המשתמש. מידע נוסף → [ויקי - 'לולאה סגורה'](#KeyAapsFeatures-ClosedLoop), וראו גם **HCL** / **FCL**.

**COB** = פחמימות פעילות (Carbs On Board). זוהי כמות הפחמימות שעדיין זמינה לעיכול בגוף → ראו גם IOB.

**CSF** = גורם הרגישות לפחמימות (Carbs Sensitivity Factor). כלומר, בכמה עולה רמת הסוכר (**BG**) על כל 1 גרם פחמימות שנספג.

**DIA** = Duration of Insulin Action. מידע נוסף → [ויקי - 'DIA'](#Config-Builder-insulin-dia) וראו גם → [DIABETTECH - 'DIA'](https://www.diabettech.com/why-we-are-regularly-wrong-in-the-duration-of-insulin-action-dia-times-we-use-and-why-it-matters/).

**DST** = שעון קיץ (Daylight Saving Time). ראו [ויקי - שינוי אזור זמן ושעון קיץ](../DailyLifeWithAaps/TimezoneTraveling-DaylightSavingTime.md).

**Dynamic ISF (או DynISF)** = תכונה ב-**AAPS** שמתאימה באופן דינמי את גורם הרגישות לאינסולין (**ISF**) לפי ה-**TDD** ורמת הסוכר (**BG**) של המשתמש.

**eCarbs** = extended Carbs. פחמימות שמחולקות על פני כמה שעות (למשל כדי לכסות שומן/חלבון), וכך **AAPS** יכול לפזר את האינסולין כמו בבולוס ממושך. מידע נוסף → [ויקי - 'פחמימות ממושכות'](../DailyLifeWithAaps/ExtendedCarbs.md)

**FCL** = לולאה סגורה מלאה (Full Closed Loop). לולאה שלא צריכה מהמשתמש שום קלט בזמן הארוחות: בלי ספירת פחמימות ובלי בולוס לארוחה. מידע נוסף → [ויקי - 'לולאה סגורה מלאה'](../AdvancedOptions/FullClosedLoop.md), וראו גם **HCL**.

**FGM** = ניטור סוכר בהבזק (Flash Glucose Monitor), כמו Abbott Freestyle Libre. מידע נוסף → [ויקי - 'מקור ערכי הסוכר'](#Config-Builder-bg-source), וראו גם 'CGM'.

**git** = כלי המשמש לאחסון ולהורדה של קוד המקור של **AAPS**.

**GitHub** = שירות אינטרנט שמאחסן את קוד המקור של **AAPS** ואת ניהול הגרסאות שלו (מעקב אחר שינויים בקבצים ותיאום העבודה עליהם, במיוחד בצוותים), ויכול גם לבנות את האפליקציה. הוא נחוץ גם לעדכוני **APK**. מידע נוסף → [ויקי - 'עדכון ה-APK'](../Maintenance/UpdateToNewVersion.md).

**Glimp** = אפליקציה לאיסוף ערכים מ-Freestyle Libre.

**HCL (או Hybrid Closed Loop)** = לולאה סגורה היברידית: לולאה שמנהלת באופן אוטומטי את מתן האינסולין בין הארוחות, אבל המשתמש עדיין צריך לתת בולוס לארוחות. כמעט כל מערכת שנמצאת בשימוש יומיומי, כולל **AAPS**, היא לולאה סגורה היברידית → ראו גם **FCL** / **לולאה סגורה**.

**IC (I:C, ICR, CR, carb ratio)** = יחס אינסולין לפחמימות (Insulin to Carb ratio). חשוב לדעת: לפי המוסכמה היחידה היא g/U (גרם ליחידה), אף שהקיצור מרמז על ההפך.

**IOB** = אינסולין פעיל (Insulin On Board). Insulin active in the user’s body. ראו [ויקי - אינסולין פעיל](#aaps-screens-iob)

**ISF** = Insulin Sensitivity Factor. הירידה הצפויה ברמת הסוכר בעקבות יחידת אינסולין אחת. היחידה היא mg/dL/U או mmol/L/U. הן אינן שוות ערך בלי המרה!

**Keystore (או JKS)** = Java Key Store: קובץ מוצפן שבו נשמרים התעודות והמפתחות האישיים שלכם (developer certificates). הוא נחוץ לבנייה (ולבנייה מחדש) של **AAPS**.

**LGS** = השהיה עקב ערך סוכר נמוך (Low Glucose Suspend). ראו [ויקי - השהיה עקב ערך סוכר נמוך](#KeyAapsFeatures-LGS)

**LineageOS** = free and open-source operating system for smartphones etc. כשמשתמשים ב-Accu-Chek Combo, ראו [ויקי - משאבת Combo](../CompatiblePumps/Accu-Chek-Combo-Pump-v2.md).

**קבצי יומן** (Log files) = הרישומים של **AAPS** על פעולות המשתמש (שימושיים לפתרון תקלות ולניפוי באגים). מידע נוסף → [ויקי - 'קבצי יומן'](../GettingHelp/AccessingLogFiles.md).

**maxIOB** = maximum total IOB. This is a safety feature and prevents **AAPS** delivering insulin over the user’s settings. מידע נוסף → [ויקי - 'סך האינסולין הפעיל המרבי ש-OpenAPS אינו יכול לחרוג ממנו'](#Open-APS-features-maximum-total-iob-openaps-cant-go-over).

**min_5m_carbimpact** = safety feature that is a calculation of default carb decay when carb absorption cannot be determined based on the user’s blood’s reactions. מידע נוסף → [ויקי - 'min_5m_carbimpact'](#Preferences-min_5m_carbimpact).

**Nightscout** = open source project to access and report **CGM** data. מרכז הנתונים של נתוני **AAPS** של המשתמש. הוא יכול להפיק דוחות כדי לראות את נתוני ה-**Nightscout** ההיסטוריים, כמו HbA1c צפוי, זמן בטווח, או לחפש דפוסים בנתונים בעזרת תרשים אחוזונים וכו'.

**Nightscout** → see also **Nightscout Reporter**. This is particularly useful for parents following their child's diabetes management.

**Nightscout Reporter Tool** = כלי שמפיק דוחות PDF מנתוני אפליקציית האינטרנט Nightscout. See 'Nightscout Reporter', 'NS Reporter' @ Facebook.

**NSClient** (**NSClientV3**) = התוסף של **AAPS** שמסנכרן נתונים עם **Nightscout** (**הגדרות תצורה** ← **תקשורת**). זה לא אותו דבר כמו **AAPSClient**, אפליקציית המעקב. מידע נוסף → [ויקי - 'NSClient'](#Preferences-nsclient).

**OpenAPS** = Open Artificial Pancreas System (מערכת לבלב מלאכותי פתוחה), הפרויקט הקודם שעליו מבוסס AAPS.

**מערכת לולאה פתוחה** (Open Loop system) = תכונה של **AAPS** שממליצה על התאמות, והמשתמש צריך לבצע אותן ידנית ב-**AAPS**. מידע נוסף → [ויקי - 'לולאה פתוחה'](#KeyAapsFeatures-OpenLoop).

**Oref0 / Oref1** = sensitivity detection and "reference design implementation version 0/1". זהו האלגוריתם המרכזי מאחורי OpenAPS. מידע נוסף → [ויקי - 'זיהוי רגישות'](../DailyLifeWithAaps/SensitivityDetectionAndCob.md).

**OS-AID** = מתן אינסולין אוטומטי בקוד פתוח (Open-Source Automated Insulin Delivery). מערכת **AID** שבנויה מתוכנה בקוד פתוח, כמו **AAPS**, **OpenAPS**, Loop או Trio. מערכות אלה אינן מאושרות באופן רשמי על ידי גופי בריאות (FDA, NHS וכו') → ראו גם **AID**.

**זמן השיא** (Peak time) = הזמן שבו השפעת האינסולין שניתן היא הגדולה ביותר. מידע נוסף → [ויקי - 'משך פעולת האינסולין (DIA) והשיא'](#Config-Builder-insulin-dia).

**PH** = Pump History. אפשר לראות אותה בהיסטוריית הטיפולים של **AAPS**: יש לפתוח את ה**תפריט** (☰) בפינה העליונה של המסך הראשי ולבחור **טיפולים**.

**תחזיות** (Predictions) = תחזיות לרמת הסוכר (**BG**) בעתיד, לפי חישובים שונים. מידע נוסף → [ויקי - 'קווי תחזית'](#aaps-screens-prediction-lines).

**פרופיל** (Profile) = הגדרות הטיפול הבסיסיות של המשתמש (קצב בזאלי, **DIA**, **IC**, **ISF**, יעד הסוכר (**BG**)). **AAPS** משתמש רק בפרופילים שנוצרו ב-**AAPS** (**ניהול** ← **פרופיל**), אבל אפשר להעתיק (לסנכרן) **פרופילים** של **Nightscout** אל **AAPS**. מידע נוסף → [ויקי - 'פרופיל AAPS שלכם'](../SettingUpAaps/YourAapsProfile.md).

**החלפת פרופיל** (Profile switch) = החלפה (זמנית) של ה**פרופיל** של המשתמש ל**פרופיל** אחר ששמור ב-**AAPS**.

**אחוז הפרופיל** (Profile Percentage) = הגדלה או הקטנה (זמנית) באחוזים של ה**פרופיל** של המשתמש, לפרק זמן שנבחר.

**RES** = אור חיווי שמראה שעבר הזמן להחליף את המכל. הוא מוצג בשורת המצב במסך הראשי של **AAPS** → ראו גם **BAT** / **CAN** / **SEN**.

**RileyLink** = התקן חומרה בקוד פתוח שמגשר בין Bluetooth Low Energy (BLE) לבין תקשורת אלחוטית ב-916MHz (למשאבות Medtronic ישנות) או ב-433MHz (למשאבות Omnipod Eros).

**SAGE** = sensor age. זה מוצג במסך הראשי של **AAPS** וב-**Nightscout**, לפי רישומי **הכנסת חיישן** בפורטל הטיפולים → ראו גם **Nightscout**.

**SEN** = אור חיווי שמראה שעבר הזמן להחליף את החיישן. הוא מוצג בשורת המצב במסך הראשי של **AAPS** → ראו גם **BAT** / **CAN** / **RES**.

**זיהוי רגישות** (Sensitivity detection) = חישוב הרגישות לאינסולין כתוצאה מפעילות גופנית, הורמונים וכו'. ראו גם → [DIABETTECH - 'Autosens'](https://www.diabettech.com/what-conclusions-can-we-draw-when-investigating-insulin-sensitivity-using-the-autosens-function-within-openaps-an-n1-study/).

**רעש חיישן** (Sensor noise) = מונח לקריאות לא יציבות של ה-**CGM**, שגורמות לערכי סוכר (**BG**) "קופצים". מידע נוסף → [ויקי - 'החלקת נתוני הגלוקוז בדם'](../CompatibleCgms/SmoothingBloodGlucoseData.md).

**SMB** = Super Micro Bolus. תכונה של **AAPS** למתן אינסולין מהיר יותר, כדי לתקן את רמת הסוכר (**BG**). מידע נוסף → [ויקי - '**SMB**'](#Open-APS-features-super-micro-bolus-smb), וראו גם **UAM**.

**סופר בולוס** (Super bolus) = העברה של אינסולין בזאלי לבולוס, כדי לתקן את רמת הסוכר (**BG**) מהר יותר.

**TBB** = סך הבזאלי הבסיסי (סכום הקצב הבזאלי ב-24 שעות) → ראו גם **TBR** / **TDD**.

**TBR** = קצב בזאלי זמני → ראו גם **TBB** / **TDD**.

**TDD** = מינון יומי כולל (בולוס + בזאלי ליום) → ראו גם **TBB** / **TBR**.

**TT** = יעד זמני: העלאה או הורדה זמנית של יעד הסוכר (הטווח) (**BG**) של המשתמש, למשל לאכילה או לפעילות ספורטיבית. מידע נוסף → [ויקי - 'יעדים זמניים'](../DailyLifeWithAaps/TempTargets.md).

**UAM** = ארוחות לא מוכרזות (unannounced meals). זיהוי עלייה משמעותית ברמת הסוכר (**BG**) עקב ארוחות, אדרנלין או השפעות אחרות, וניסיון להתאים את הטיפול לכך. מידע נוסף → [ויקי - 'UAM'](#enable-uam), וראו גם **SMB**.

**משאבה וירטואלית** (Virtual pump) = תכונה של **AAPS** שמאפשרת למשתמש לנסות את הפונקציות של **AAPS**, או מאפשרת לאנשים עם סוכרת (PWD) שלדגם המשאבה שלהם אין מנהל התקן ב-**AAPS** להשתמש ב-**AAPS** כלולאה פתוחה → ראו גם **לולאה פתוחה**.

**טפט** (Wallpaper) = תמונת הרקע של **AAPS**, ראו את דף הטלפונים.

**xDrip** = תוכנה בקוד פתוח לקריאת מערכות **CGM**.

**Zero-temp** = בזאלי זמני של 0% (בלי מתן אינסולין בזאלי).

→ see also [the OpenAPS documentation](https://openaps.readthedocs.io/en/latest/docs/Resources/glossary.html)