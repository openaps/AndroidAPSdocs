# Nightscout

(Nightscout-security-considerations)=

## שיקולי אבטחה

Nightscout הוא שרת הדיווח והניטור של **AAPS**: **AAPS** מעלה אליו את הנתונים שלכם, ואתם או המטפלים שלכם צופים בהם באתר Nightscout או באפליקציות מעקב. האתר שומר את הנתונים הרפואיים, הפרופילים והטיפולים שלכם, ולכן כדאי לחשוב על אבטחת אתר ה-Nightscout שלכם.

ב-**AAPS** 4, שליטה מרחוק לא עוברת דרך אתר Nightscout. כאשר השליטה ממכשיר לקוח מופעלת ([מצב מוקשח](#client-master-control-hardened-mode)), טיפולים או יעדים שמוזנים ישירות ב-Nightscout **לא מוחלים** על ידי **AAPS**. במקום זאת, פקודות מרחוק מגיעות מ-**AAPSClient** מצומד - ראו [שליטה בין מכשיר ראשי ↔ מכשיר לקוח](#client-master-control).

יש לנקוט זהירות מרבית אם Nightscout משמש כמקור ערכי הסוכר של AAPS.

### Nightscout settings

You can deny public access to your Nightscout site by using [authentication roles](https://nightscout.github.io/nightscout/security): make sure you only share your URL with a `readable` token, never with an `admin` token.

Nightscout `API_SECRET` is your site main password: don't share it publicly.

(Nightscout-aaps-settings)=

### AAPS settings

קבלת נתונים מ-Nightscout (שינויי פרופיל, טיפולים, ...) היא אופציונלית וכבויה כברירת מחדל. המתגים שמתוארים למטה מוסתרים כאשר השליטה ממכשיר לקוח מופעלת (מצב מוקשח) וב[מצב פשוט](#preferences-simple-mode).

* ניתן להגיע להגדרות **סנכרון** של התוסף NSClientV3 באחת משתי הדרכים: 1) **הגדרות** (סמל גלגל השיניים במסך הראשי) -> **NSClientV3** -> **סנכרון**, או 2) **הגדרות תצורה** (תפריט ☰) -> **תקשורת** -> "**הגדרות**" תחת NSClientV3.
* יש להפעיל את "העלאת נתונים ל־Nightscout".
* "העלאת נתוני סוכר ל־Nightscout" נמצא בהגדרות של מקור ערכי הסוכר שלכם (**הגדרות תצורה ← מקור ערכי הסוכר ← הגדרות**). יש להפעיל אותו, אלא אם Nightscout הוא מקור ערכי הסוכר של AAPS: במקרה כזה **אין** להפעיל אותו.
* אין להפעיל את "קבלת נתוני CGM מ־Nightscout" אלא אם Nightscout הוא מקור ערכי הסוכר שלכם.

#### Do not sync from Nightscout

השארת כל האפשרויות "קבלת … מ-Nightscout" כבויות מבטיחה ש-AAPS לא ישתמש באף שינוי שמגיע מ-Nightscout:

![Nightscout upload only](../images/preferences/settings_nsclient_sync.png)

#### Accept changes from Nightscout

הפעלת האפשרויות האלה מאפשרת לשנות הגדרות של AAPS דרך Nightscout, למשל שינויים בפרופילים והחלפת פרופיל, יעדים זמניים והוספת פחמימות, ש-AAPS יביא בחשבון. הן מוצגות רק כאשר השליטה ממכשיר לקוח והמצב הפשוט כבויים.  
שימו לב שטיפולי אינסולין ישמשו רק לחישובים, כמו "לא לתת בולוס, רק לרשום".

![אפשרויות הקבלה מ-Nightscout מופעלות](../images/NSsafety3.png)

### הגדרות אבטחה נוספות

Keep your phone up to date as described in [safety first](#preparing-safety-first).

(Nightscout-manual-nightscout-setup)=

## הגדרה ידנית של Nightscout

ההנחה היא שכבר יש לכם אתר Nightscout. אם אין, בקרו בדף [Nightscout](http://nightscout.github.io/nightscout/new_user/) לקבלת הוראות התקנה מלאות. ההוראות שלמטה הן הגדרות שתצטרכו להוסיף גם לאתר Nightscout שלכם. אתר Nightscout שלכם צריך להיות לפחות בגרסה 15, לכן יש לוודא שאתם מריצים את [הגרסה האחרונה](https://nightscout.github.io/update/update/#updating-your-site-to-the-latest-version), אחרת תקבלו הודעת שגיאה באפליקציית AAPS.

* [Edit your variables](https://nightscout.github.io/nightscout/setup_variables/#nightscout-configuration)

* הוסיפו או ערכו את המשתנים באופן הבא:
  
  * `ENABLE` = `careportal boluscalc food bwp cage sage iage iob cob basal dbsize pushover pump openaps`
  * `DEVICESTATUS_ADVANCED` = `true`
  * `SHOW_FORECAST` = `openaps`
  * `PUMP_FIELDS` = `reservoir battery clock`
  * ניתן להגדיר אזעקות שונות ל[ניטור המשאבה](https://github.com/nightscout/cgm-remote-monitor#pump-pump-monitoring), מומלץ במיוחד אחוז הסוללה: 
    * `PUMP_WARN_BATT_P` = `51`
    * `PUMP_URGENT_BATT_P` = `26` 

* Save the modifications. Your Nightscout site should now allow you to display the pills. You can force default display adding them in `SHOW_PLUGINS`.
  
  * `SHOW_PLUGINS` = `careportal boluscalc food bwp cage sage iage iob cob basal dbsize pushover pump openaps`
  
  ![Nightscout Pills](../images/nightscout1.png)

## Nightscout as a paid SaaS (Software as a Service)

Use the vendor web interface to set the variables. Contact the vendor support service if necessary.