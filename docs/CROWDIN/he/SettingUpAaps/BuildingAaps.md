# Building AAPS

## בנייה עצמית במקום הורדה

**The AAPS app (an apk file) is not available for download, due to regulations around medical devices. בנייה עצמית של האפליקציה לשימוש אישי הינה חוקית אך אסור לתת את האפליקציה לאחרים!**

See [FAQ page](../UsefulLinks/FAQ.md) for details.

---

Three methods are available to build the AAPS app:

### בנייה בדפדפן (מומלץ)

ניתן לבנות את האפליקציה בדפדפן אינטרנט בעזרת GitHub Actions. מטלפון Android, דף ההגדרה של [AAPS Builder](#aaps-builder) מוביל אתכם שלב אחרי שלב, ואתם מתחילים כל בנייה בעצמכם. ממחשב או מ-iPhone אפשר גם לבנות עם fork ולשמור את האפליקציה ב-Google Drive שלכם.

**[Follow these instructions.](./BrowserBuild.md)**

----

### בנייה ב-Android Studio

You can build the app with your computer using Android Studio. This used to be the only build option, nowadays Android Studio is mostly used by developers who consider making code changes.

**[Follow these instructions.](./ComputerBuild.md)**

----

### בנייה משורת הפקודה

This option is intended for those who prefer to build AAPS in local command-line, without installing Android Studio.

**[Follow these instructions.](./CLIBuild.md)**

----

(building-aaps-troubleshooting)=
## אם הבנייה נכשלת

לכל שיטת בנייה יש חלק משלה לפתרון תקלות:

* **AAPS Builder**: [פתרון תקלות ב-AAPS Builder](#aaps-builder-troubleshooting)
* **בנייה בדפדפן** ממחשב או מ-iPhone: [בנייה בדפדפן: פתרון תקלות](#aaps-ci-troubleshooting)
* **Android Studio**: [פתרון תקלות ב-Android Studio](../GettingHelp/TroubleshootingAndroidStudio.md)

איבדתם את ה-keystore או את הסיסמה שלו? ראו [התקנה מחדש של AAPS עם keystore חדש](#reinstall-aaps).

אם האפליקציה נבנתה אבל לא מותקנת בטלפון, ראו [העברה והתקנה של AAPS](TransferringAndInstallingAaps.md).

אם הבעיה שלכם לא מופיעה כאן, ראו [איפה אפשר לקבל עזרה](../GettingHelp/WhereCanIGetHelp.md).
