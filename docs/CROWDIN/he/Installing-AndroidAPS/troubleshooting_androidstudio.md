(troubleshooting_androidstudio-troubleshooting-android-studio)=
# פתרון תקלות ב-Android Studio

(troubleshooting_androidstudio-lost-keystore)=
## אבד ה-keystore
If you use the same keystore when updating AndroidAPS you do not have to uninstall the previous version on your smartphone. That's why it is recommended to store the keystore in a save place.

If you try to install the apk, signed with a different keystore than before, you will get an error message that the installation failed!

In case you cannot find your old keystore or its password anymore, proceed as follows:

1. [Export settings](ExportImportSettings-export-settings) on your phone.
2. העתיקו או העלו את קובץ ההגדרות מהטלפון שלך למיקום חיצוני (כלומר למחשב, שירות אחסון בענן...).
4. Generate signed apk of new version as described on the [Update guide](../Installing-AndroidAPS/Update-to-new-version.md) and transfer it to your phone.
5. הסירו את ההתקנה של גרסת ה-AAPS הקודמת מהטלפון.
6. התקינו את גרסת ה-AAPS החדשה בטלפון.
7. [Import settings](ExportImportSettings-import-settings) to restore your objectives and configuration.
8. בדקו את אפשרויות אופטימיזציית הסוללה שלכם והשביתו אותן שוב.

   אם אינכם מוצאים אותן בטלפון, העתיקו אותן מהאחסון החיצוני אל הטלפון.
8. המשיכו להשתמש בלופ.

## Gradle Sync failed
Gradle Sync can fail to various reasons. Wen you get a message saying that gradle sync failed, open the "Build" tab (1) at the bottom of Android Studio and check what error message (2) is displayed.

  ![Gradle Failed](../images/studioTroubleshooting/07_GradleSyncFailed2.png)

These are the usual gradle sync failures:
* [שינויים שלא הוגשו](troubleshooting_androidstudio-uncommitted-changes)
* [אין גרסה שמור של ... זמינה](troubleshooting_androidstudio-could-not-resolve-no-cached-version)
* [Android Gradle דורש Java 11 כדי לפעול](troubleshooting_androidstudio-android-gradle-plugin-requires-java-11-to-run)

*Important*: After you have followed the instructions for your specific problem, you need to trigger the [gradle sync](troubleshooting_androidstudio-gradle-resync) again.

(troubleshooting_androidstudio-uncommitted-changes)=
### שינויים שלא הוגשו

If you receive a failure message like

![Gradle Uncommited Changes](../images/studioTroubleshooting/02_GradleUncommitedChanges.png)

#### שלב 1 - בדקו את התקנת git
  * פתחו את לשונית terminal (1) בתחתית Android Studio, העתקו והדבקו את הטקסט הבא או הקלדו בטרמינל:
    ```
    git --version
    ```

    ![Gradle Git Version](../images/studioTroubleshooting/03_GitVersion.png)

    הערה: יש רווח ושני מקפים בין git ל-version!

  * עליכם לקבל הודעה שאומרת איזו גרסת git מותקנת, כפי שניתן לראות בצילום המסך למעלה. In this case, go to [Step 2](troubleshooting_androidstudio-step-2-check-for-uncommitted-changes).

  * למקרה שתקבלו את ההודעה
    ```
    Git: command not found
    ```
    התקנת Git שלכם בעייתית.

  * [בדקו את התקנת git](git-install-check-git-settings-in-android-studio)

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

    * הקבצים נשלפים שוב משרת ה-Git. If there are no other changes in the commit tab, go to [Step 3](troubleshooting_androidstudio-step-3-gradle-resync).

  * אם אתם יכולים לראות "Unversioned Files", ייתכן שאחסנתם קבצים בספריית sourecode שלך שצריכה להיות במקומות אחרים, למשל קובץ מאגר המפתחות שלך.

    * השתמשו בסייר הקבצים הרגיל במחשב כדי להעביר או לגזור ולהדביק את הקובץ למקום אחר.

    * חזרו ל-Android Studio ולחצו על כפתור רענן (4) בלשונית Commit כדי לוודא שהקובץ אינו מאוחסן יותר בספריית AndroidAPS.

      If there are no other changes in the commit tab, go to [Step 3](troubleshooting_androidstudio-step-3-gradle-resync).


(troubleshooting_androidstudio-step-3-gradle-resync)=

#### שלב 3: סנכרן מחדש את Gradle (שוב)

Follow the instructions at [Gradle Resync](troubleshooting_androidstudio-step-3-gradle-resync).

(troubleshooting_androidstudio-android-gradle-plugin-requires-java-11-to-run)=

### Android Gradle דורש Java 11 כדי לפעול

  You might experience this error message:

  ![Android Gradle דורש Java 11 כדי לפעול](../images/studioTroubleshooting/11_GradleJDK.png)

  Click on "Gradle Settings" (1) to go to open the gradle settings.

  If you don't have the link to the "Gradle Settings", open the Gradle settings manually by selecting the Gradle Tab on the right border (1), select the tools icon (2) and there the item 'Gradle Settings' (3).

  ![Gradle Settings](../images/studioTroubleshooting/09_GradleSettings.png)

  When you have opened the Gradle settings dialog, open the options (1) at "Gradle JDK" and selected the "Embedded JDK version" (2).

  ![Gradle Settings](../images/studioTroubleshooting/12_GradleSettingsJDK.png)

  Press "OK" to save and close the settings dialog.

  *Important*: If you don't see the setting "Gradle JDK", you might have not updated Android Studio. Make sure you are using Android Studio 2021.1.1 Bumblebee) or newer.

  Now you need to trigger a [Gradle Resync](troubleshooting_androidstudio-step-3-gradle-resync)

(troubleshooting_androidstudio-could-not-resolve-no-cached-version)=

### Could not resolve/No cached version

  You might get this error message:

    ![Could not resolve... No cached version](../images/studioTroubleshooting/08_NoCachedVersion.png)

  * בצד ימין, פתחו את הלשונית Gradle (1).

    ודאו שהלחצן המוצג ב-(2) *לא נבחר*.

    ![Gradle Offline Mode](../images/studioTroubleshooting/10_GradleOfflineMode.png)

  * Now you need to trigger a [Gradle Resync](troubleshooting_androidstudio-step-3-gradle-resync)

(troubleshooting_androidstudio-unable-to-start-daemon-process)=
### לא ניתן להפעיל את תהליך daemon

  If you see an error message like the one below you probably use a Windows 10 32-bit system. This is not supported by Android Studio 3.5.1 and above and unfortunately nothing the AAPS developer can do about.

  If you are using Windows 10 you must use a 64-bit operating system.

  There are a lot of manuals on the internet how to determine wether you have a 32-bit or 64-bit OS - i.e. [this one](https://www.howtogeek.com/howto/21726/how-do-i-know-if-im-running-32-bit-or-64-bit-windows-answers/).

  ![Screenshot Unable to start daemon process](../images/AndroidStudioWin10_32bitError.png)

### Gradle Resync

  If you can still see the message that the gradle sync failed, now select the Link "Try again". ![Gradle Sync Failed Mode](../images/studioTroubleshooting/01_GradleSyncFailed.png)


  If you don't see the a message anymore, you can still trigger this manually:

  * פתחו את הלשונית Gradle (1) בגבול הימני של Android Studio.

    ![Gradle Reload](../images/studioTroubleshooting/06_GradleResyncManually.png)

  * לחצו לחיצה ימנית על AndroidAPS (2)

  * לחצו על "Reload Gradle Project" (3)

## Generate Signed APK generated successfully with 0 build variants

When you generate the signed apk, you might get the notification that generation was successfully but are told that 0 build variants where generated:

![APK generated with 0 build variants](../images/studioTroubleshooting/14_BuildWith0Variants.png)

This is a false warning. Check the directory your selected as "Destination folder" for generation (step [Generate Signed APK](Building-APK-generate-signed-apk)) and you will find the generated apk there!


## האפליקציה נוצרה עם אזהרות compiler/kotlin

If your build completed successfully but you get compiler or kotlin warnings (indicated by a yellow or blue exclamation mark) then you can just ignore these warnings.

 ![Gradle finished with warnings](../images/studioTroubleshooting/13_BuildWithWarnings.png)

Your app was build successfully and can be transferred to phone!


## Key was created with errors

When creating a new keystore for building the signed APK, on Windows the following error message might appear

![Key was created with errors](../images/AndroidStudio35SigningKeys.png)

This seems to be a bug with Android Studio 3.5.1 and its shipped Java environment in Windows. The key is created correctly but a recommendation is falsely displayed as an error. This can currently be ignored.


## נתוני סוכר אינם מתקבלים על ידי AndroidAPS

* במקרה שאתם משתמשים באפליקציית Dexcom G6 הפרוצה: אפליקציה זו מיושנת. Use the [BYODA](DexcomG6-if-using-g6-with-build-your-own-dexcom-app) app instead.

* In case you are using xDrip+: Identify receiver as described on [xDrip+ settings page](xdrip-identify-receiver).


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

If you built the app successfully, transferred it to your phone and installed it successfully but the version number stays the same then you might have missed to [update your local copy](Update-to-new-version-update-your-local-copy)

## אף אחת מהאפשרויות לא עזרה

If non of the above tips helped you might consider building the app from scratch:

1. [ייצוא הגדרות](../Usage/ExportImportSettings) (בגרסת AAPS שכבר מותקנת בטלפון שלך)

2. הכינו את סיסמת המפתח וסיסמת מאגר המפתחות שלכם. במקרה ששכחתם את הסיסמאות, תוכלו לנסות למצוא אותן בקבצי הפרויקט כפי שמתואר [כאן](https://youtu.be/nS3wxnLgZOo).

    או שתצרו מאגר מפתחות חדש.

3. Build app from scratch as described [here](Building-APK-download-androidaps-code).

4. לאחר בניית ה-APK, מחקו את האפליקציה שבטלפון, העבירו את ה-APK החדש לטלפון והתקינו.
5. [ייבאו הגדרות](../Usage/ExportImportSettings) שוב כדי לשחזר את המשימות ואת ההגדרות שלכם.
6. בדקו את אפשרויות אופטימיזציית הסוללה שלכם והשביתו אותן שוב.

## במקרה הגרוע ביותר

In case even building the app from scratch does not solve your problem you might want to try to uninstall Android Studio completely. Some Users reported that this solved their problem.

**Make sure to uninstall all files associated with Android Studio.** If you do not completely remove Android Studio with all hidden files, uninstalling may cause new problems instead of solving your existing one(s). Manuals for complete uninstall can be found online i.e.

[https://stackoverflow.com/questions/39953495/how-to-completely-uninstall-android-studio-from-windowsv10](https://stackoverflow.com/questions/39953495/how-to-completely-uninstall-android-studio-from-windowsv10).

Install Android Studio from scratch as described [here](Building-APK-install-android-studio).
