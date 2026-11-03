# עדכון לגרסה חדשה או לענף חדש

## בנייה עצמית במקום הורדה

**AAPS** is not available to download, due to regulations concerning medical devices. בנייה עצמית של האפליקציה לשימוש אישי הינה חוקית אך אסור לתת את האפליקציה לאחרים! See [FAQ page](../UsefulLinks/FAQ.md) for details.

## Important notes

- Please update to the new version of **AAPS** as soon as possible after a new release is available.
- When a new release is available, in the **AAPS** app itself, you will receive an information banner about the new version.
- The new version will also be announced on Facebook at the time of release.
- Following the release, please read the [Release Notes](ReleaseNotes.md) in detail, and clarify any queries with the community on Facebook or Discord, before proceeding with the update.
- מעדכנים מ-**AAPS** 3.x? קודם יש לקרוא את [מה השתנה ב-AAPS v4](V4Changes.md): שם מופיעות התכונות שהועברו, ששמן שונה או שהוסרו.
- אל תשכחו [לייצא את ההגדרות שלכם](ExportImportSettings.md). כאשר מייבאים אותן שוב אחרי העדכון, בוחרים אם גם הגדרות המשאבה יוחלפו.

## Update AAPS with browser build

כבר בניתם את אפליקציית AAPS שלכם בדפדפן? יש לפעול לפי ההוראות של השיטה שבה השתמשתם:

- **AAPS Builder**: בונים מהדף **Build AAPS** של המאגר הפרטי שלכם (בדרך כלל בשם `my-aaps`) ומורידים את האפליקציה מ-GitHub. יש לפעול לפי [עדכון AAPS עם AAPS Builder](#aaps-builder-updates). אין fork לסנכרן.
- **Fork וקובץ הכנה**: מריצים את תהליך העבודה **AAPS-CI** בעותק (fork) שלכם של AndroidAPS, מאגר בשם `AndroidAPS` בחשבון GitHub שלכם, והאפליקציה מגיעה ל-Google Drive שלכם. יש לפעול לפי [עדכון בדפדפן (fork)](./UpdateBrowserBuild.md).

## Update AAPS with Android Studio

יש לפעול לפי [ההוראות האלה](./UpdateComputerBuild.md).

## Update AAPS with the command-line

Use the [same instructions](../SettingUpAaps/CLIBuild.md) as when building AAPS previously, but pull new changes with git.

(Update-to-new-version-check-aaps-version-on-phone)=

## אחרי העדכון

השלבים האלה זהים בכל שיטות הבנייה. Check in the [Release Notes](../Maintenance/ReleaseNotes.md) if there are any specific instructions after update.

After you installed the new apk:

- ניתן לבדוק את גרסת **AAPS** בטלפון: יש לפתוח את **התפריט** (☰) בפינה העליונה של המסך ולאחר מכן **אודות** (כמו בצילום המסך למטה). ניתן לראות את הגרסה הנוכחית של **AAPS**;
- לוודא שייבאתם את ההגדרות שלכם; וגם
- יש לבדוק את הגדרות **AAPS** שלכם תחת **הגדרות** ולוודא שהן עדיין נכונות.

![חלון אודות עם גרסת AAPS המותקנת](../images/about_dialog_version.png)