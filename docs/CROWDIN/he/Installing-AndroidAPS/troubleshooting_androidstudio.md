# פתרון תקלות ב-Android Studio

## אבד ה-keystore
אם אתם משתמשים באותו מאגר מפתחות בעת עדכון AndroidAPS, אינכם צריכים להסיר את ההתקנה של הגרסה הקודמת מהסמארטפון שלכם. זו הסיבה שמומלץ לשמור את מאגר המפתחות במקום בטוח.

אם תנסו להתקין את ה-apk שחתום עם מאגר מפתחות שונה מבעבר, תקבלו הודעת שגיאה שההתקנה נכשלה!

במקרה שאינכם יכולים למצוא את מאגר המפתחות הישן שלך או את הסיסמה שלו, המשיכו כדלקמן:

1. [ייצוא הגדרות](../Usage/ExportImportSettings#export-settings) בטלפון.
2. העתיקו או העלו את קובץ ההגדרות מהטלפון שלך למיקום חיצוני (כלומר למחשב, שירות אחסון בענן...).
4. צרו apk חתום של גרסה חדשה כמתואר ב[מדריך העדכון](../Installing-AndroidAPS/Update-to-new-version) והעבירו אותו אל הטלפון.
5. הסירו את ההתקנה של גרסת ה-AAPS הקודמת מהטלפון.
6. התקינו את גרסת ה-AAPS החדשה בטלפון.
7. [ייבוא הגדרות](../Usage/ExportImportSettings#import-settings) כדי לשחזר את ההתקדמות במשימות ואת הגדרות התצורה.
8. בדקו את אפשרויות אופטימיזציית הסוללה שלכם והשביתו אותן שוב.

   אם אינכם מוצאים אותן בטלפון, העתיקו אותן מהאחסון החיצוני אל הטלפון.
8. המשיכו להשתמש בלופ.

## Gradle Sync failed
סנכרון Gradle יכול להכשל בגלל מגוון סיבות. כאשר מופיעה הודעה שאומרת שסנכרון gradle נכשל, פתחו את הלשונית "Build" (1) בתחתית Android Studio ובדקו איזו הודעת שגיאה (2) מוצגת.

  ![Gradle Failed](../images/studioTroubleshooting/07_GradleSyncFailed2.png)

אלה הם כשלי סנכרון ה-gradle הנפוצים:
* [שינויים שלא הוגשו](#uncommitted-changes)
* [אין גרסה שמור של ... זמינה](#could-not-resolve-no-cached-version)
* [Android Gradle דורש Java 11 כדי לפעול](#android-gradle-plugin-requires-java-11-to-run)

*חשוב*: לאחר שביצעתם את ההוראות של הבעיה הספציפית שלכם, עליכם להפעיל שוב את [gradle sync](#gradle-resync).

### שינויים שלא הוגשו

אם מופיעה הודעת כשל כמו

![Gradle Uncommited Changes](../images/studioTroubleshooting/02_GradleUncommitedChanges.png)

#### שלב 1 - בדקו את התקנת git
  * פתחו את לשונית terminal (1) בתחתית Android Studio, העתקו והדבקו את הטקסט הבא או הקלדו בטרמינל:
    ```
    git --version
    ```

    ![Gradle Git Version](../images/studioTroubleshooting/03_GitVersion.png)

    הערה: יש רווח ושני מקפים בין git ל-version!

  * עליכם לקבל הודעה שאומרת איזו גרסת git מותקנת, כפי שניתן לראות בצילום המסך למעלה. במקרה זה, עברו אל [שלב 2](#step-2-check-for-uncommitted-changes).

  * למקרה שתקבלו את ההודעה
    ```
    Git: command not found
    ```
    התקנת Git שלכם בעייתית.

  * [בדקו את התקנת git](../Installing-AndroidAPS/git-install#check-git-settings-in-android-studio)

  * אם אתם משתמשי Windows ו-git הותקן זה עתה, עליכם להפעיל מחדש את המחשב כדי להפוך את git לזמינה גלובלית לאחר ההתקנה

  * אם Git מותקן והפעלתם מחדש (אם על Windows), ו-git עדיין לא נמצא:

  * חפשו במחשבכם את הקובץ "git.exe".

    זכרו באיזו ספרייה הקובץ נמצא.

  * עברו אל Environment variables (משתני הסביבה) בחלונות, בחרו את המשתנה "PATH" ולחצו על ערוך. הוסיפו את הספרייה בה מצאתם את התקנת git שלכם.

  * שמירו וסגירו.

  * הפעילו מחדש את Android Studio.

#### שלב 2: בדקו אם יש שינויים לא שלא הוגשו (uncommitted changes).

  * ב-Android Studio, פתחו את הלשונית "Commit" (1) בצד שמאל.![Commit Tab: Uncommitted changes](../images/studioTroubleshooting/04_CommitTabWithChanges.png)
  * אתם יכולים לראות "Default changeset" (2) או "Unversioned files" (3):

    * עבור "Default changeset", כנראה עדכנתם את Gradle או שיניתם בטעות חלק מתוכן הקובץ.

    * לחצו לחיצה ימנית על "Default Changeset" ובחרו "Rollback"

      ![Commit Tab: Rollback changes](../images/studioTroubleshooting/05_CommitTabRollback.png)

    * הקבצים נשלפים שוב משרת ה-Git. אם אין שינויים אחרים בלשונית ה-commit, עברו אל [שלב 3](#step-3-resync-gradle-again).

  * אם אתם יכולים לראות "Unversioned Files", ייתכן שאחסנתם קבצים בספריית sourecode שלך שצריכה להיות במקומות אחרים, למשל קובץ מאגר המפתחות שלך.

    * השתמשו בסייר הקבצים הרגיל במחשב כדי להעביר או לגזור ולהדביק את הקובץ למקום אחר.

    * חזרו ל-Android Studio ולחצו על כפתור רענן (4) בלשונית Commit כדי לוודא שהקובץ אינו מאוחסן יותר בספריית AndroidAPS.

      אם אין שינויים אחרים בלשונית ה-commit, עברו אל [שלב 3](#step-3-resync-gradle-again).


#### שלב 3: סנכרן מחדש את Gradle (שוב)

עקבו אחר ההוראות ב[סינכרון מחדש של Gradle ](#gradle-resync).

### Android Gradle דורש Java 11 כדי לפעול

  ייתכן שתתקלו בהודעת השגיאה הזו:

  ![Android Gradle דורש Java 11 כדי לפעול](../images/studioTroubleshooting/11_GradleJDK.png)

  לחצו על "Gradle Settings" (1) כדי לעבור לפתיחת הגדרות Gradle.

  אם אין לכם הקישור ל"Gradle Settings", פתחו את הגדרות Gradle ידנית על ידי בחירה בלשונית Gradle בגבול הימני (1), בחרו בסמל הכלים (2) ושם את הפריט 'Gradle Settings' (3).

  ![Gradle Settings](../images/studioTroubleshooting/09_GradleSettings.png)

  לאחר שפתחתם את תיבת הדו-שיח של הגדרות Gradle, פתחו את האפשרויות (1) ב-"Gradle JDK" ובחרו ב-"Embedded JDK version" (2).

  ![Gradle Settings](../images/studioTroubleshooting/12_GradleSettingsJDK.png)

  לחץ על "OK" כדי לשמור ולסגור את תיבת הדו-שיח של ההגדרות.

  *חשוב*: אם אינכם רואים את ההגדרה "Gradle JDK", ייתכן שלא עדכנתם את Android Studio. ודא שאתם משתמשים ב-Android Studio 2021.1.1 Bumblebee) או חדש יותר.

  עכשיו עליכם להפעיל [Gradle Resync](#gradle-resync)

### Could not resolve/No cached version

  ייתכן שתתקלו בהודעת השגיאה הזו:

    ![Could not resolve... No cached version](../images/studioTroubleshooting/08_NoCachedVersion.png)

  * בצד ימין, פתחו את הלשונית Gradle (1).

    ודאו שהלחצן המוצג ב-(2) *לא נבחר*.

    ![Gradle Offline Mode](../images/studioTroubleshooting/10_GradleOfflineMode.png)

  * עכשיו עליכם להפעיל [Gradle Resync](#gradle-resync)

### לא ניתן להפעיל את תהליך daemon

  אם אתם רואים הודעת שגיאה כמו זו למטה, כנראה שאתם משתמשים במערכת ההפעלה Windows 10 עם 32 ביט (סיביות). החל מ-Android Studio 3.5.1 ומעלה אין תמיכה במערכת זו ולמרבה הצער אין מה לעשות בנידון.

  לכן אם משתמשים ב-Windows 10, חובה להשתמש בגרסת 64 סיביות.

  יש הרבה מדריכים באינטרנט לקביעה האם יש לכם מערכת הפעלה של 32 סיביות או 64 סיביות - לדוגמה [זו](https://www.howtogeek.com/howto/21726/how-do-i-know-if-im-running-32-bit-or-64-bit-windows-answers/).

  ![Screenshot Unable to start daemon process](../images/AndroidStudioWin10_32bitError.png)

### Gradle Resync

  אם אתo עדיין יכולים לראות את ההודעה שסינכרון gradle נכשל, לחצו על הקישור "Try again".![Gradle Sync Failed Mode](../images/studioTroubleshooting/01_GradleSyncFailed.png)


  אם אינכם רואים את ההודעה יותר, עדיין אפשר להפעיל זאת באופן ידני:

  * פתחו את הלשונית Gradle (1) בגבול הימני של Android Studio.

    ![Gradle Reload](../images/studioTroubleshooting/06_GradleResyncManually.png)

  * לחצו לחיצה ימנית על AndroidAPS (2)

  * לחצו על "Reload Gradle Project" (3)

## Generate Signed APK generated successfully with 0 build variants

כאשר אתם יוצרים את ה-APK החתום, אתם עשויים לקבל את ההודעה שהיצירה עברה בהצלחה, אך נאמר לך שנוצרו 0 גרסאות בנייה:

![APK generated with 0 build variants](../images/studioTroubleshooting/14_BuildWith0Variants.png)

זוהי אזהרת שווא. בדקו את הספרייה שבחרתם כ"תיקיית יעד" ליצירת הקובץ (שלב [יצירת APK חתום](../Installing-AndroidAPS/Building-APK#generate-signed-apk)) ושם תמצאו את ה-APK שנוצר!


## האפליקציה נוצרה עם אזהרות compiler/kotlin

אם הבנייה הושלמה בהצלחה אבל אתם מקבלים אזהרות compiler או kotlin (מסומן בסימן קריאה צהוב או כחול) אז ניתן פשוט להתעלם מהאזהרות אלו.

 ![Gradle finished with warnings](../images/studioTroubleshooting/13_BuildWithWarnings.png)

האפליקציה שלכם נבנתה בהצלחה וניתן להעביר אותה לטלפון!


## Key was created with errors

בעת יצירת מאגר מפתחות חדש לבניית ה-APK החתום ב-Windows, עלולה להופיע הודעת השגיאה הבאה:

![Key was created with errors](../images/AndroidStudio35SigningKeys.png)

נראה שזה באג ב-Android Studio 3.5.1 ובסביבת ה-Java ב-Windows. המפתח נוצר בצורה נכונה אך האזהרה מוצגת בטעות כשגיאה. אפשר להתעלם מכך.


## נתוני סוכר אינם מתקבלים על ידי AndroidAPS

* במקרה שאתם משתמשים באפליקציית Dexcom G6 הפרוצה: אפליקציה זו מיושנת. יש לעבור להשתמש באפליקציית [BYODA](../Hardware/DexcomG6#if-using-g6-with-build-your-own-dexcom-app).

* במקרה שאתם משתמשים ב-xDrip+: עקבו אחר ההוראות לגבי זיהוי מקלט כמתואר ב[דף ההגדרות של xDrip+](../Configuration/xdrip#identify-receiver).


## אפליקציה לא הותקנה

![phone app note installed](../images/Update_AppNotInstalled.png)

* ודאו שהעברתם את הקובץ "app-full-release.apk" לטלפון שלכם.
* אם הטלפון מציג הודעת "אפליקציה לא מותקנת", בצעו את השלבים הבאים:

1. [ייצוא הגדרות](../Usage/ExportImportSettings) (בגרסת AAPS שכבר מותקנת בטלפון שלך)
2. הסירו את AAPS מהטלפון.
3. הפעילו מצב טיסה וכבו את הבלוטות'.
4. התקינו גרסה חדשה ("app-full-release.apk")
5. [ייבוא הגדרות](../Usage/ExportImportSettings)
6. הפעילו שוב את הבלוטות' והשביתן את מצב הטיסה

## האפליקציה מותקנת אך הגרסה ישנה

אם בניתם בהצלחה את האפליקציה, העברתם אותה לטלפון והתקנתם אותה בהצלחה אבל מספר הגרסה נשאר זהה אז אולי לא [עדכנתם את עותק הקוד ב-android studio.](../Installing-AndroidAPS/Update-to-new-version#update-your-local-copy)

## אף אחת מהאפשרויות לא עזרה

אם אף אחד מהטיפים לעיל לא עזר, אולי תשקלו לבנות את האפליקציה מאפס:

1. [ייצוא הגדרות](../Usage/ExportImportSettings) (בגרסת AAPS שכבר מותקנת בטלפון שלך)

2. הכינו את סיסמת המפתח וסיסמת מאגר המפתחות שלכם. במקרה ששכחתם את הסיסמאות, תוכלו לנסות למצוא אותן בקבצי הפרויקט כפי שמתואר [כאן](https://youtu.be/nS3wxnLgZOo).

    או שתצרו מאגר מפתחות חדש.

3. בנו אפליקציה מאפס כפי שמתואר [כאן](../Installing-AndroidAPS/Building-APK#download-androidaps-code).

4. לאחר בניית ה-APK, מחקו את האפליקציה שבטלפון, העבירו את ה-APK החדש לטלפון והתקינו.
5. [ייבאו הגדרות](../Usage/ExportImportSettings) שוב כדי לשחזר את המשימות ואת ההגדרות שלכם.
6. בדקו את אפשרויות אופטימיזציית הסוללה שלכם והשביתו אותן שוב.

## במקרה הגרוע ביותר

במקרה שאפילו בניית האפליקציה מאפס לא תפתור את הבעיה, אולי תרצו לנסות להסיר את ההתקנה של Android Studio לחלוטין. חלק מהמשתמשים דיווחו שזה פתר את הבעיה שלהם.

**הקפידו להסיר את כל הקבצים המשויכים ל-Android Studio.** אם לא תסירו לחלוטין את Android Studio עם כל הקבצים המוסתרים, הסרת ההתקנה עלולה לגרום לבעיות חדשות במקום לפתור את הקיימות. ניתן למצוא באינטרנט מדריכים להסרה מלאה כמו

[https://stackoverflow.com/questions/39953495/how-to-completely-uninstall-android-studio-from-windowsv10](https://stackoverflow.com/questions/39953495/how-to-completely-uninstall-android-studio-from-windowsv10).

בנו אפליקציה מאפס כפי שמתואר [כאן](../Installing-AndroidAPS/Building-APK#install-android-studio).
