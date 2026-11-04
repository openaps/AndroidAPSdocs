(aaps-ci-preparation)=

# בנייה בדפדפן – שלב 2: יצירת keystore לחתימה

```{note}
זהו **שלב 2** של [בנייה בדפדפן](BrowserBuild.md). קודם יש להשלים את [שלב 1 – יצירת fork ב-GitHub](BrowserBuildFork.md).
```

יש לחתום את AAPS במפתחות פרטיים שנשמרים בתוך **Java KeyStore (JKS)**. זו ההחלטה החשובה ביותר בכל התהליך, כי היא קובעת אם תוכלו **לשדרג** את AAPS בהמשך בלי להתקין אותו מחדש.

```{note}
בשלבים הבאים תשמרו מידע פרטי (ה-keystore שלכם, ובהמשך גם הגישה ל-Google Drive) בתוך GitHub בתור **secrets**. secret הוא פשוט ערך מוצפן שרק הבנייה שלכם יכולה לקרוא – אף אחד אחר לא יכול לראות אותו, גם לא אנשים שמסתכלים על ה-fork שלכם. כך הבנייה שלכם נשארת רק שלכם.
```

## בחירת שיטה ל-keystore

קראו את שתי האפשרויות ובחרו את זו שמתאימה למצב שלכם.

### אפשרות 1 – יצירת keystore חדש (משתמשים חדשים)

בחרו באפשרות הזו אם **אחד** מהדברים האלה נכון:

- זו **הפעם הראשונה** שאתם בונים את AAPS.
- אין לכם keystore מבנייה קודמת ב-Android Studio (במחשב).
- שכחתם את הסיסמה או את ה-alias של ה-keystore.

```{warning}
בנייה של AAPS עם **אפשרות 1** יוצרת keystore חדש לגמרי, ולכן **היא לא תאפשר לשדרג את ה-AAPS הקיים שלכם** במקום. כדי לעבור לבנייה החדשה יש לייצא את ההגדרות, להסיר את ה-AAPS הישן, להתקין את החדש ולייבא שוב את ההגדרות. פעלו לפי השלבים ב-[התקנה מחדש של AAPS עם keystore חדש](#reinstall-aaps).
```

**→ [המשך עם אפשרות 1 – יצירת keystore חדש](BrowserBuildO1.md)**

### אפשרות 2 – העלאת ה-keystore הקיים שלכם (משתמשים קיימים / קודמים)

בחרו באפשרות הזו אם **כבר יש לכם** את קובץ ה-keystore `.jks` שבו השתמשתם בבנייה קודמת של AAPS במחשב ב-Android Studio, **וגם** אתם יודעים את הסיסמה ואת ה-alias שלו (בדרך כלל `key0`).

כך ה-AAPS שמותקן אצלכם עכשיו נשאר ניתן לשדרוג: העדכונים הבאים ישתמשו באותו keystore.

**→ [המשך עם אפשרות 2 – העלאת ה-keystore הקיים שלכם](BrowserBuildO2.md)**

----

```{note}
בדף הבא תבחרו את המכשיר שלכם (מחשב או iPhone). אחר כך כל דף של מכשיר מסביר איך להוריד ולפתוח את קובץ ההכנה בדרך הנכונה לאותו מכשיר, ואיך ליצור את ה-keystore. אפליקציית AAPS שנבנתה תישמר ב-Google Drive שלכם.
```

**הבא: בחרו ב-[אפשרות 1](BrowserBuildO1.md) או ב-[אפשרות 2](BrowserBuildO2.md) למעלה, ואז פעלו לפי הדף של המכשיר שלכם.**

----

(ci-keystore-export)=

## ייצוא ה-keystore (לא חובה)

אם אתם רוצים לייצא את ה-keystore השמור, השתמשו בשיטה הזו.

הסקריפט הזה מייצא את פרטי ה-keystore שהגדרתם קודם (באפשרות 1 או באפשרות 2) כקובץ ZIP מוגן בסיסמה אל התיקייה `/AAPS/KeyStore` ב-Google Drive שלכם.

```{warning}
לפני שמשתמשים בשיטת הייצוא הזו, יש לוודא שההגדרות של ה-keystore ושל Google Drive הושלמו.
```

### Steps:

1. **הוספת secret לסיסמת ה-ZIP:**
   - עברו במאגר שלכם אל **Settings** ← **Secrets and variables** ← **Actions**
   - לחצו על **New repository secret**
   - בשדה **Name**, הקלידו: `ZIP_PASSWORD`
   - בשדה **Secret**, הקלידו סיסמה משלכם להצפנת קובץ ה-ZIP
   - השתמשו בסיסמה רק באותיות אנגליות ובמספרים (בלי סימנים מיוחדים)
   - לחצו על **Add secret**

   ![aaps_ci_zip_password.png](../images/Building-the-App/CI/aaps_ci_zip_password.png)

2. **הרצת ה-workflow של הייצוא:**
   - עברו ללשונית **Actions** במאגר שלכם
   - בחרו את **CI Keystore Export**
   - לחצו על **Run workflow**
   - קובץ ה-ZIP של ה-keystore המיוצא יישמר ב-Google Drive שלכם

   ![aaps_ci_keystore_export.png](../images/Building-the-App/CI/aaps_ci_keystore_export.png)

   ![aaps_ci_keystore_export_run.png](../images/Building-the-App/CI/aaps_ci_keystore_export_run.png)

```{toctree}
:hidden:

אפשרות 1 – יצירת keystore חדש <BrowserBuildO1.md>
אפשרות 2 – העלאת ה-keystore הקיים שלכם <BrowserBuildO2.md>
```
