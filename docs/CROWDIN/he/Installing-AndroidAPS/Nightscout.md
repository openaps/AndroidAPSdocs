# Nightscout

## שיקולי ביטחון

מעבר לדיווח, ניתן להשתמש ב-Nightscout גם כדי לשלוט ב-AAPS. לדוגמה אפשר להגדיר ערכי מטרה זמניים ולהכריז על פחמימות עתידיות. מידע זה ייקלט על ידי AAPS ויטופל בהתאם. לכן כדאי לחשוב על אבטחת אתר ה-Nightscout שלכם.

### הגדרות Nightscout

אפשר למנוע גישה ציבורית לאתר ה-Nightscout באמצעות [תפקידי אימות](https://nightscout.github.io/nightscout/security).

### הגדרות AndroidAPS

יש פונקציית העלאה ל-NS בלבד (ללא סנכרון) בהגדרות AAPS. כך AAPS לא יקלוט שינויים שנעשו ב-Nightscout כגון ערכי מטרה זמניים או פחמימות עתידיות.

* הקישו על תפריט 3 נקודות בפינה הימנית העליונה במסך הבית של ה-AAPS שלך.
* בחרו "העדפות".
* גללו מטה והקישו על "הגדרות מתקדמות".
* הפעילו "העלאה בלבד ל-NS"

![העלאה בלבד ל-Nightscout](../images/NSsafety.png)

### הגדרות אבטחה נוספות

דאגו לעדכן את הטלפון שלכם כמתואר ב[בטיחות קודמת לכול](../Getting-Started/Safety-first.rst).

## הגדרה ידנית של Nightscout

ההנחה היא שכבר יש לכם אתר Nightscout, אם לא ביקרתם בדף [Nightscout](http://nightscout.github.io/nightscout/new_user/) לקבלת הנחיות מלאות על ההגדרה, ההוראות שלהלן הן הגדרות שתצטרכו להוסיף לאתר ה-Nightscout שלכם. אתר ה-Nightscout צריך להיות גרסה 10 לפחות (מוצג כ-0.10...) לכן וודאו שאתם משתמשים ב[גרסה האחרונה](https://nightscout.github.io/update/update/#updating-your-site-to-the-latest-version) אחרת תקבלו הודעת שגיאה באפליקציית AAPS.

* גלשו ל-https://herokuapp.com/

* לחצו על שם אפליקציית ה-Nightscout שלכם.

* Settings > "Reveal Config Variables" (heroku)

* הוסיפו או ערכו את המשתנים באופן הבא:
  
  * `ENABLE` = `careportal boluscalc food bwp cage sage iage iob cob basal ar2 rawbg pushover bgi pump openaps`
  * `DEVICESTATUS_ADVANCED` = `true`
  * `SHOW_FORECAST` = `openaps`
  * `PUMP_FIELDS` = `reservoir battery clock`
  * ניתן להגדיר אזעקות שונות ל[ניטור המשאבה](https://github.com/nightscout/cgm-remote-monitor#pump-pump-monitoring), מומלץ במיוחד אחוז הסוללה: 
    * `PUMP_WARN_BATT_P` = `51`
    * `PUMP_URGENT_BATT_P` = `26` 

![Azure](../images/nightscout1.png)

* לחצו על "Save" בחלק העליון של הלוח.

## הגדרה חצי אוטומטית של Nightscout

הלופר מרטין שיפטן הציע הגדרת Nightscout חצי אוטומטית במשך שנים רבות ללא תשלום. ככל שמספר המשתמשים גדל כך גם העלות ולכן הוא נאלץ להתחיל לבקש עמלה קטנה החל מאוקטובר 2021 - החל מ-4,17 אירו לחודש.

**יתרונות**

* אפשר יכול להתקין את Nightscout בכמה לחיצות ולהשתמש בו ישירות. 
* צמצום העבודה הידנית בעזרת הניהול האוטומטי של מרטין.
* ניתן לבצע את כל ההגדרות באמצעות ממשק אינטרנט ידידותי למשתמש. 
* השירות כולל בדיקת מינון בזאלי אוטומטי באמצעות Autotune. 
* השרתים ממוקמים בגרמניה ובפינלנד.

<https://ns.10be.de/en/index.html>

ישנה החלופה <https://t1pal.com/> - החל מ-$11.99 לחודש.