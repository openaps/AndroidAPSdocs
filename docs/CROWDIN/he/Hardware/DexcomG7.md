# Dexcom G7


## תחילה הערות

באביב 2022 התקבל ל- Dexcom G7 אישור ה-CE שלו ויצא לשוק בסוף אוקטובר '22.

חשוב לציין כי מערכת ה-G7, בניגוד ל-G6, אינה מחליקה את הערכים, לא באפליקציה ולא בקורא. [לפרטים נוספים על כך](https://www.dexcom.com/en-us/faqs/why-does-past-cgm-data-look-different-from-past-data-on-receiver-and-follow-app).

![G7 english](../images/6fe30b84-227a-4bae-a9a5-527cee341dbf.png)

:::{admonition} [שיטת החלקה](../Usage/Smoothing-Blood-Glucose-Data)
:class: warning **החלקה מעריכית** **חייבת** להיות מופעלת לשימוש תקין בערכי ה-G7.  
:::

## 1.  יישום Dexcom G7 ששונתה (Patched) (DiAKEM)

**הערה: דרושה גרסת AAPS 3.2.0.0 או מאוחרת יותר!**

### התקינו אפליקציית G7 ששונתה (!) והפעילו את החיישן

יישום Dexcom G7 (DiAKEM) מעניק גישה לנתוני ה-Dexcom G7. זוהי אינה אפליקציית BYODA מכיוון שאפליקציה זו אינה יכולה לקבל נתוני G7 כרגע.

הסירו את אפליקציית Dexcom המקורית אם השתמשתם בה לפני כן (ניתן להמשיך בסשן של חיישן שכבר הופעל - שימו לב לקוד החיישן לפני מחיקת האפליקציה!)

הורידו והתקינו את הקובץ patched.apk [מכאן](https://github.com/authorgambel/g7/releases).

הזינו קוד חיישן באפליקציה.

עקבו אחר ההמלצות הכלליות להיגיינה ומיקום החיישן [כאן](../Hardware/GeneralCGMRecommendation.md).

לאחר שלב החימום, הערכים מוצגים כרגיל באפליקציית G7.

### תצורה ב-AAPS

לתצורה ב-AAPS
- בחרו 'BYODA' [בבונה התצורה, מקור ערכי הסוכר](../Configuration/Config-Builder.md#bg-source) - אפילו אם זה לא היישום BYODA!

- אם ב-AAPS לא מתקבלים ערכים, החליפו למקור ערכי סוכר אחרים ואז חזרו ל'BYODA' כדי לגרום ל-AAPS לחפש נתונים מ-BYODA.

## 2. xDrip+ (חיבור ישיר ל-G7) (מומלץ)

- עקבו אחר ההוראות כאן: [Xdrip+ G7](https://navid200.github.io/xDrip/docs/Dexcom/G7.html)
- בחרו את xDrip+ ב[בונה התצורה, מקור נתוני סוכר](../Configuration/Config-Builder.md#bg-source).

- התאימו את ההגדרות של xDrip+ לפי ההסברים בדף [ההגדרות של xDrip+](../Configuration/xdrip.md).

## 3. xDrip+ (מצב מלווה)

-   הורידו והתקינו את [xDrip](https://github.com/NightscoutFoundation/xDrip).
- בחרו "Companion App" כמקור נתונים בxDrip+ ויש לבחור בהגדרות פחות נפוצות> הגדרות בלוטות' > יש לאפשר "Companion Bluetooth".
-   בחרו את xDrip+ ב[בונה התצורה, מקור נתוני סוכר](../Configuration/Config-Builder.md#bg-source).

-   התאימו את ההגדרות של xDrip+ לפי ההסברים בדף [ההגדרות של xDrip+](../Configuration/xdrip.md). 
