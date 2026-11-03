(bluetoothtroubleshooting-bluetooth-related-issues)=

# Bluetooth related issues

Some users have been running into issues with Omnipod DASH activation failures, Medtrum Nano connectivity problems, and other pod errors related to Bluetooth. Many of these issues can be traced to one of the following issues.

Some of these issues likely apply to other Bluetooth Insulin pumps too, the Medtrum Nano has known issues with nearby device permission as well as the Omnipod DASH.

---

(bluetoothtroubleshooting-cannot-start-omnipod-with-android-16)=

## Cannot start Omnipod with Android 16
- Android 16 דורש לפחות את גרסה 3.3.2.1 של **AAPS** כדי ש־Omnipod DASH תפעל כראוי, כי בגרסה זו נוספו תיקונים במיוחד לבעיות מוכרות של Omnipod שנוצרו ב־Android 16.

---

(bluetoothtroubleshooting-bluetooth-battery-optimisation)=

## אופטימיזציית סוללה של Bluetooth

בגרסאות חדשות של Android, אופטימיזציית הסוללה מופעלת עבור אפליקציית המערכת Bluetooth. ידוע שזה גורם לבעיות מסוימות במשאבות ובמערכות CGM עם Bluetooth.

אם עברתם על [אשף ההתקנה](../SettingUpAaps/SetupWizard.md) ופעלתם לפי הגדרות התצורה בחלק [אופטימיזציית סוללה של Bluetooth](#setup-wizard-bluetooth-battery-optimisation), ההגדרה הזו אמורה להיות נכונה. אבל אם פעלתם לפי גרסה ישנה יותר של המדריך, ייתכן שלא שיניתם את ההגדרה הזו.

אם יש ניתוקים של המשאבה ושל ה-CGM, יש לוודא שההגדרה הזו מוגדרת נכון.

---

(bluetoothtroubleshooting-apps-using-nearby-device-permission)=

## אפליקציות שמשתמשות בהרשאת Android בשם "Nearby devices" (מכשירים בקרבת מקום) עלולות לגרום לניתוקים ולבעיות בהפעלת פוד

Android מאפשר לשלוט במה שכל אפליקציה יכולה לעשות או במה שהיא יכולה לגשת אליו בטלפון, באמצעות מודל הרשאות. לכל אפליקציה מותקנת אפשר לבחור לאפשר או לחסום הרשאות מסוימות, למשל גישה לקבצים במכשיר, גישה ל-Bluetooth, סריקה של מכשירים בקרבת מקום וכו'.

**AAPS** צריך כמה הרשאות מסוימות כדי לפעול. אחת מהן, שנדרשת כדי שהפודים יעבדו, היא ההרשאה "Nearby devices". אפליקציות רבות אחרות דורשות גם הן הרשאה זו. הקהילה מגלה שמתן הרשאה זו לחלק מהאפליקציות עלול לגרום לבעיות בהפעלת פודים חדשים במכשירים מסוימים.

(bluetoothtroubleshooting-apps-using-nearby-device-permission-known-apps)=

### אפליקציות שמשתמשות בהרשאות "Nearby device" וידוע שגרמו לבעיות:

האפליקציות ברשימה זו הוזכרו במקום אחד או יותר בקהילה כגורמות לבעיות במכשירי Omnipod DASH, ובחלק מהמקרים גם ב־Medtrum Nano.

```{admonition} Updating the list
:class: note
אפשר לתייג את @XiTatiON בערוץ #omnipod-dash ב־Discord כדי לדון באפליקציות שיש להוסיף לרשימה זו.
```

- **myBMW** MyBMW interrupted Medtrum Nano and Omnipod DASH. אפליקציית MyBMW מבקשת הרשאה ל־"find nearby devices" רק פעם אחת. אם לא נותנים אותה, האפליקציה עדיין עובדת כרגיל לגמרי

- **Amazon Alexa**  הסרת הרשאת "Nearby devices" מאפליקציית Alexa פתרה את הבעיה אצל חלק מהאנשים, אבל היא תמנע את האפשרות לצמד מכשירי Matter IoT

- **MINI app**  נראה שהאפליקציה מבוססת על אפליקציית myBMW, ולכן ייתכן שהיא מתנהגת באותו אופן

- **BM2** אפליקציה לניטור סוללה סולארית, שמשמשת בחלק ממערכות החשמל הסולארי ברכבי קמפינג ובמחנאות: כאשר האפליקציה פעלה, היא מנעה הפעלה של פוד חדש. עצירה כפויה (Force stop) של האפליקציה בזמן הפעלת פוד חדש היא דרך לעקוף את הבעיה. הפעלת האפליקציה לאחר מכן לא נראתה כמפריעה לתפקוד של Dash (ב־Pixel 8 Pro עם A16).

(bluetoothtroubleshooting-revoke-nearby-device-permission)=

### כיצד לבטל הרשאות "Nearby device" לאפליקציות אחרות:
אם יש בעיות בהפעלת פוד חדש, ואתם משתמשים בגרסת **AAPS** הנכונה שנתמכת בגרסת ה-Android שלכם, ייתכן שיהיה צורך לבטל את ההרשאה לאפליקציות אחרות בזמן ההפעלה של פוד חדש.

יש לפעול לפי התהליך הזה כדי לבטל את ההרשאה "Nearby device" לכל האפליקציות מלבד **AAPS**:

```{admonition} Menus and settings
:class: note
The screenshots and instructions in this guide are from a Vanilla Android 16 install on Google Pixel 8 Pro. סביר שהתפריטים ותיאורי ההגדרות לא יהיו זהים בדיוק אצל יצרנים ובמכשירים אחרים. יש להתאים את השלבים למכשיר שלכם. אם אינכם מצליחים להתקדם, ראו בסעיף [איפה לקבל עזרה עבור DASH](#omnipod-dash-where-to-get-help-for-dash) כיצד לפנות לקהילה לתמיכה.
```

1. יש לפתוח את הגדרות Android בטלפון, לגלול למטה וללחוץ על **Security and privacy (1)** (אבטחה ופרטיות).

    ![android_settings_sec_priv](../images/android_16/android_settings_sec_priv.png)

2. יש לגלול למטה וללחוץ על **Privacy controls (1)** (אמצעי בקרה לפרטיות).

   ![android_sec_priv](../images/android_16/android_sec_priv.png)

3. יש ללחוץ על **Permission manager (1)** (ניהול הרשאות).

   ![android_priv_control](../images/android_16/android_priv_control.png)

3. יש לגלול למטה וללחוץ על **Nearby devices (1)** (מכשירים בקרבת מקום).

   ![android_perm_man_nearby_dev](../images/android_16/android_perm_man_nearby_dev.png)

4. יש לעבור על רשימת האפליקציות וללחוץ על האפליקציה שעבורה רוצים לבטל את הרשאות **Nearby devices**.

   במדריך זה, **Android Auto (1)** היא האפליקציה שעבורה נבטל את ההרשאה.

   כדי לא להשבית לצמיתות (brick) פודים נוספים, אנו ממליצים לכולם לבטל בהתחלה את ההרשאה בכל האפליקציות מלבד **AAPS**.

```{admonition} Which app to select?
:class: tip
אם אינכם בטוחים איזו אפליקציה גורמת לבעיה, יש לבטל את ההרשאה בכולן (זכרו לבדוק גם את רשימת האפליקציות הידועות כבעייתיות ולהתחיל בהן). אם אפשר להרשות לאבד כמה פודים בדרך, יש להפעיל את ההרשאה באפליקציה אחת נוספת לפני כל הפעלה של פוד חדש, עד שמזהים איזו אפליקציה בדיוק גורמת לבעיות בפוד. אם תזהו אפליקציות בעייתיות חדשות, עדכנו אותנו בערוץ #omnipod-dash ב־Discord.
```

   ![android_nearby_dev](../images/android_16/android_nearby_dev.png)

5. כדי לבטל את ההרשאה, יש ללחוץ על **Don't allow (1)** (לא לאפשר), ואז על **Don't allow anyway (2)** (לא לאפשר בכל זאת). אם הפעולה בוצעה כראוי, **Don't allow (3)** תופיע כאפשרות המסומנת. כעת אפשר לחזור לתפריט **Nearby device** בלחיצה על **חץ החזרה (4)**, ולשנות הגדרה זו באפליקציות אחרות לפי הצורך.

   ![android_auto_nearby_dev](../images/android_16/android_auto_nearby_dev.png) ![android_auto_nearby_dev](../images/android_16/android_auto_nearby_dont_allow_anyway.png)  ![android_auto_nearby_dev](../images/android_16/android_auto_nearby_dont_allow.png)

(bluetoothtroubleshooting-re-enable-nearby-device-permission)=

### כיצד להפעיל מחדש הרשאות "Nearby device" לאפליקציות מערכת ולאפליקציות אחרות:

1. במידת הצורך, ראו בסעיף **"כיצד לבטל הרשאות Nearby device לאפליקציות אחרות"** כיצד להגיע להגדרות הפרטיות של האפליקציה. אחרי שמגיעים להגדרת **Nearby device**, יש להמשיך לשלב 2.

2. יש לעבור על רשימת האפליקציות וללחוץ על האפליקציה שעבורה רוצים לאפשר הרשאות **Nearby devices**.

   במדריך זה, **Android Auto (1)** היא האפליקציה שעבורה נאפשר את ההרשאה.

   אפשר לראות ש־**Android Auto (1)** חסרה ברשימת האפליקציות אחרי שההרשאה בוטלה. הסיבה היא שהאפליקציה **Android Auto** היא **אפליקציית מערכת**, ואפליקציות מערכת מוסתרות כברירת מחדל.

   ![android_auto_nearby_dev_missing](../images/android_16/android_auto_nearby_dev_missing.png)

3. כדי להציג אפליקציות מערכת מוסתרות, יש ללחוץ על **תפריט שלוש הנקודות (⋮) (1)** בחלק העליון של המסך, ואז על **"Show system" (2)** (הצגת אפליקציות מערכת). כעת אמורה להופיע ברשימה אפליקציית המערכת המוסתרת **Android Auto (3)**.

```{admonition} Find your app
:class: tip
אם ההרשאה של אפליקציה בוטלה, יש לגלול למטה עד שמופיעה רשימת האפליקציות שההרשאה שלהן בוטלה, בחלק התחתון של הרשימה.
```

   ![android_auto_nearby_dev_missing_hamburger](../images/android_16/android_auto_nearby_dev_missing_hamburger.png) ![android_auto_nearby_show_system](../images/android_16/android_auto_nearby_show_system.png) ![android_nearby_dev_system](../images/android_16/android_nearby_dev_system.png)

5. יש לפעול לפי ההנחיות בסעיף **"כיצד לבטל הרשאות Nearby device לאפליקציות אחרות"** בסדר הפוך, כדי להפעיל מחדש את ההרשאות לכל אפליקציה.

---

(bluetoothtroubleshooting-android-15-bluetooth-connection-problems)=

## Android 15 Frequent Bluetooth connection problems

After upgrading Android or moving to a recent phone, **AAPS** frequently loses Bluetooth connection to the pump. The problem disappears temporarily when restarting the phone. אם אתם משתמשים ב-**Omnipod DASH** והטלפון שלכם פועל עם Android 15, הפעלת ההגדרה **צימוד בלוטות'** עשויה לעזור לשפר את היציבות של חיבור ה-Bluetooth. כדי להפעיל אותה:

```{admonition} Android 16
:class: warning
יש להפעיל את **צימוד בלוטות'** רק ב-Android 15, ורק אם יש בעיות חיבור. אין להפעיל צימוד ב-Android 16.
```

1. יש לפתוח את [הגדרות DASH](#omnipod-dash-settings): לפתוח את מסך המשאבה DASH דרך **ניהול** > **משאבה** וללחוץ על הסמל **הגדרות** (גלגל שיניים) בחלק העליון של המסך.

   ![מסך המשאבה DASH](../images/v4/Pumps/dash_pump_screen.png)

2. יש לפתוח את החלק **הגדרות מתקדמות** ולהפעיל את **צימוד בלוטות'**.

   ![צימוד בלוטות' בחלק הגדרות מתקדמות](../images/v4/Pumps/dash_settings_advanced.png)

3. אם הטלפון מציג בקשת צימוד, יש לאשר אותה.

4. יש להפעיל מחדש את הטלפון.
