(browser-build)=

# Browser build

Building AAPS with GitHub Actions.

**Minimum AAPS version supported is 3.3.2.1.**

## בנייה עצמית במקום הורדה

**The AAPS app (an apk file) is not available for download, due to regulations around medical devices. בנייה עצמית של האפליקציה לשימוש אישי הינה חוקית אך אסור לתת את האפליקציה לאחרים!**

See [FAQ page](../UsefulLinks/FAQ.md) for details.

(Building-APK-without-a-computer)=

## בחירת שיטת הבנייה

יש לבחור את השיטה שמתאימה למכשיר שממנו בונים:

### בטלפון Android: AAPS Builder (מומלץ)

דף הגדרה מדריך אתכם שלב אחר שלב ביצירת מאגר בנייה פרטי משלכם ב-GitHub. אין מה להתקין, אין קובץ הכנה, ואתם מתחילים כל בנייה בעצמכם. את האפליקציה מורידים ישירות מ-GitHub. Google Drive אינו חובה.

זה עובד גם מדפדפן במחשב.

**→ [בנייה עם AAPS Builder](BrowserBuildAapsBuilder.md)**

### במחשב או ב-iPhone / iPad: Fork וקובץ הכנה

יוצרים עותק (fork) של קוד המקור של AAPS ב-GitHub, יוצרים את ה-keystore באמצעות קובץ הכנה, והאפליקציה שנבנתה נשמרת ב-Google Drive שלכם. יש לבצע את ארבעת השלבים שלמטה.

```{note}
**כבר בונים עם fork?** אפשר להמשיך לעדכן אותו כמו שמתואר ב-[עדכון בדפדפן (fork)](../Maintenance/UpdateBrowserBuild.md), או לעבור ל-AAPS Builder. כדי לעבור, קודם יש לקבל עותק של ה-keystore מה-fork שלכם: ראו [מעבר מהבנייה הקודמת בדפדפן](#aaps-builder-from-fork).
```

You will need to use multiple tabs in your browser, and switch from one to the other. Example Chrome:

![fork_aaps](../images/Building-the-App/CI/BrowserBuildTabs.png)

```{note}
You will need to jump from tab to tab: start with all tabs closed to avoid losing yourself when switching from one to another.
```

#### מה צריך

- **חשבון Google**, כדי שאפשר יהיה לשמור את האפליקציה שנבנתה ב-Google Drive שלכם.
- **חשבון GitHub** (בחינם) – יוצרים אותו בשלב 1.
- **דפדפן אינטרנט** שיכול להשאיר כמה לשוניות פתוחות בו-זמנית (בהמשך ההנחה היא Chrome).
- **כלי עזר קטן להרצת קובץ ההכנה**. הכלי הדרוש תלוי במכשיר שממנו בונים – אין צורך להתקין שום דבר עכשיו, שלב 2 מדריך אתכם בהתאם למכשיר שלכם:
  - **מחשב (Windows / Mac / Linux):** Simple Web Server.
  - **iPhone / iPad:** אין צורך באפליקציה נוספת – משתמשים באפליקציית Files ובדפדפן המובנים.

#### השלבים

הבנייה בדפדפן היא סדרה של בחירות. יש לבצע את השלבים האלה לפי הסדר:

1. **[יצירת fork ב-GitHub](BrowserBuildFork.md)** – יצירת עותק אישי של קוד המקור של AAPS.
2. **[יצירת keystore לחתימה](BrowserBuildKeystore.md)** – ההחלטה החשובה: ליצור keystore חדש (אפשרות 1) או להעלות את ה-keystore הקיים שלכם (אפשרות 2), ואז לפעול לפי הדף של המכשיר שלכם.
3. **[אישור Google Drive](BrowserBuildGoogleDrive.md)** – מתן אפשרות ל-GitHub לשמור את האפליקציה שנבנתה ב-Google Drive שלכם.
4. **[בניית ה-APK](BrowserBuildAPK.md)** – הרצת ה-workflow של GitHub Actions ובחירת הגרסה והווריאנט.

אם נתקלים בבעיה, ראו **[בנייה בדפדפן: פתרון תקלות](../GettingHelp/BrowserBuildTroubleshooting.md)**. לפעולות אופציונליות עם fork, ראו [ייצוא ה-keystore](#ci-keystore-export) או [cherry-pick של קומיט](#github-cherry-pick).

----

**התחילו עם [שלב 1 – יצירת fork ב-GitHub](BrowserBuildFork.md) →**

```{toctree}
:hidden:

AAPS Builder <BrowserBuildAapsBuilder.md>
שלב 1: יצירת ה-fork <BrowserBuildFork.md>
שלב 2: יצירת ה-keystore <BrowserBuildKeystore.md>
שלב 3: אישור Google Drive <BrowserBuildGoogleDrive.md>
שלב 4: בניית ה-APK <BrowserBuildAPK.md>
```
