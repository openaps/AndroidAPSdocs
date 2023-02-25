# בניית קובץ ה-APK

## בנייה עצמית במקום הורדה

**יישום AndroidAPS אינו זמין להורדה מטעמי רגולציה של מכשירים רפואיים. בנייה עצמית של היישום לשימוש אישי הינה חוקית אך אסור לתת את היישום לאחרים! ראו [שאלות נפוצות](../Getting-Started/FAQ.md) לפרטים.**

## הערות חשובות

* נא להשתמש ב-**[Android Studio Version 2020.3.1](https://developer.android.com/studio/)** או חדש יותר כדי לבנות את ה-apk.
* [מערכות Windows 10 של 32 ביט](troubleshooting_androidstudio-unable-to-start-daemon-process) אינן נתמכות על ידי Android Studio 2020.3.1

(Building-APK-recommended-specification-of-computer-for-building-apk-file)=

## מפרט מומלץ של מחשב לבניית קובץ apk

<table class="tg">
  
<thead>
  <tr>
    <th class="tg-baqh">מערכת הפעלה (64 ביט בלבד)</th>
    <th class="tg-baqh">חלונות 8 ומעלה</th>
    <th class="tg-baqh">Mac OS 10.14 ומעלה</th>
    <th class="tg-baqh">כל לינוקס שתומך ב-Gnome, KDE, או Unity DE; GNU C Library 2.31 או מאוחר יותר</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td class="tg-baqh"><p align="center">מעבד (64 ביט בלבד)</td>
    <td class="tg-baqh">ארכיטקטורת מעבד x86_64; דור שני של Intel Core ומעלה, או מעבד AMD עם תמיכה ב-<br><a href="https://developer.android.com/studio/run/emulator-acceleration#vm-windows" target="_blank" rel="noopener noreferrer"><span style="text-decoration:var(--devsite-link-text-decoration,none)">Windows Hypervisor</span></a></td>
    <td class="tg-baqh">מעבדים מבוססי ARM; דור שני של Intel Core ומעלה תמיכה ב-<br><a href="https://developer.android.com/studio/run/emulator-acceleration#vm-mac" target="_blank" rel="noopener noreferrer"><span style="text-decoration:var(--devsite-link-text-decoration,none)">Windows Hypervisor</span></a></td>
    <td class="tg-baqh">ארכיטקטורת מעבד x86_64; דור שני של Intel Core ומעלה, או מעבד AMD עם תמיכה בווירטואליזציה של AMD (AMD-V) ו-SSSE3</td>
  </tr>
  <tr>
    <td class="tg-baqh"><p align="center">RAM</td>
    <td class="tg-baqh" colspan="3"><p align="center">8GB ומעלה</td>
  </tr>
  <tr>
    <td class="tg-baqh"><p align="center">דיסק קשיח</td>
    <td class="tg-baqh" colspan="3"><p align="center">לפחות 30GB פנויים. מומלץ SSD.</td>
  </tr>
  <tr>
    <td class="tg-baqh"><p align="center">רזולוציה</td>
    <td class="tg-baqh" colspan="3"><p align="center">לפחות 1280X800 <br></td>
  </tr>
  <tr>
    <td class="tg-baqh"><p align="center">אינטרנט</td>
    <td class="tg-baqh" colspan="3"><p align="center">פס רחב</td>
  </tr>
</tbody>
</table>

זכרו שגם **מעבד 64 ביט (סיביות) וגם מערכת הפעלה של 64 ביט הם תנאי חובה.** אם המערכת שלכם לא עומדת בתנאי זה, עליכם לשנות את החומרה או התוכנה הבעייתיים או את המערכת כולה. **מומלץ מאוד להשתמש ב-SSD (Solid State Disk) במקום HDD (כונן קשיח) כי זמן בניית קובץ ה-APK של התקנת AAPS יתקצר משמעותית.** זוהי המלצה ולא דרישה. עם זאת, אין מניעה להשתמש בדיסק קשיח כאשר אתם בונים קובץ apk אך לשים לב שתהליך הבנייה עשוי להימשך זמן רב, אם כי לאחר התחלתה, תוכלו להשאיר אותה פועלת ללא השגחה עד להשלמתה.

* * *

### מאמר זה מחולק לשני חלקים.

* בחלק הסקירה יש הסבר על השלבים הדרושים לבניית קובץ ה-APK.
* בחלק המדריך צעד אחר צעד תמצאו את צילומי המסך של תהליך שלם. מכיוון שהגרסאות של Android Studio - סביבת פיתוח התוכנה בה נשתמש לבניית ה-APK - ישתנו מהר מאוד זה לא יהיה זהה להתקנה שלך אבל זה אמור לתת לך נקודת התחלה טובה. Android Studio פועל גם על Windows, Mac OS X ו-Linux וייתכנו הבדלים קטנים בהיבטים מסוימים בין כל פלטפורמה. אם אתם מגלים שמשהו חשוב שגוי או חסר, אנא הודע לקבוצת הפייסבוק "AndroidAPS Users" או בצ'אט Discord [Android APS](https://discord.gg/4fQUWHZ4Mw) כדי שנוכל לבדוק זאת.

## סקירה כללית

באופן כללי, השלבים של בניית קובץ ה-APK הם:

1. [התקנת Git](../Installing-AndroidAPS/git-install.md)
2. [התקנת Android Studio](Building-APK-install-android-studio)
3. [הגדרת נתיב של Git בהעדפות Android Studio](Building-APK-set-git-path-in-preferences)
4. [הורדת הקוד של AndroidAPS](Building-APK-download-androidaps-code)
5. [הורדת Android SDK](Building-APK-download-android-sdk)
6. [בניית האפליקציה](Building-APK-generate-signed-apk) (יצירת apk חתום)
7. [העברת קובץ ה-apk לטלפון](Building-APK-transfer-apk-to-smartphone)
8. [הגדרת זיהוי מקלט אם משתמשים ב-xDrip](xdrip-identify-receiver)

## מדריך שלב אחר שלב

תיאור מפורט של השלבים הדרושים לבניית קובץ ה-APK.

## התקינו git (אם לא מותקן כבר)

עקבו אחר המדריך ב[דף התקנת של git](../Installing-AndroidAPS/git-install.md).

(Building-APK-install-android-studio)=

## התקנת Android Studio

צילומי המסך הבאים נלקחו מגרסת Android Studio Arctic Fox | 2020.3.1. המסכים עשויים להשתנות בגרסאות עתידיות של Android Studio. אף על פי כן, אתם צפויים להיות מסוגלים למצוא את דרככם. אפשר [לקבל עזרה מהקהילה](../Where-To-Go-For-Help/Connect-with-other-users.md).

One of the most important things when installing Android Studio: **Be patient!** During installation and setup Android Studio is downloading a lot of stuff which will take its time.

Download [Android Studio from here](https://developer.android.com/studio/install.html) and install it on your computer.

On first start you will find the setup wizard:

Select "Do not import settings" as you have not used it before.

![Do not import settings](../images/studioSetup/01_ImportSettings.png)

Decide whether you want to share data with Google or not.

![Share data with Google](../images/studioSetup/02_DataSharing.png)

On the following screen click "Next".

![Welcome screen](../images/studioSetup/03_Welcome.png)

Select "Standard" installation and click "Next".

![Standard installation](../images/studioSetup/04_InstallType.png)

Select the theme for the user interface you like. (In this manual we used "Light".) Then click "Next".

> ***הערה:*** זוהי רק סכמת צבעים. תוכלו לבחור את מה שתרצו (לדוגמה "דרקולה" שהוא צבע כהה). לבחירה זו אין השפעה על בניית ה-APK אך צילומי המסך הבאים עשויים להיראות אחרת.

![UI color scheme](../images/studioSetup/05_UITheme.png)

Click "Finish" on the "Verify Settings" dialog.

![Verify settings](../images/studioSetup/06_Verify.png)

Wait while Android Studio downloads additional components and be patient. Once everything is downloaded button "Finish" turns blue. Click the button now.

![Downloading components](../images/studioSetup/07_Downloading.png)

(Building-APK-set-git-path-in-preferences)=

## הגדירו את נתיב git בהעדפות

Make sure [git is installed](../Installing-AndroidAPS/git-install.md) on your computer and you have restarted your computer after installing.

On the Android Studio welcome screen click "Customize" (1) on the left and then select the link "All settings..." (2):

![Android Studio settings from welcome screen](../images/studioSetup/10_WizardSettings.png)

### Windows

* As windows user, make sure you have restarted your computer after [installing Git](../Installing-AndroidAPS/git-install.md).

* לחצו פעמיים על "Version Control" (1) כדי לפתוח את תפריט המשנה.

* לחצו על Git (2).
* ודא ששיטת העדכון "Merge" (3.) נבחרה.
* בדקו אם Android Studio יכול לאתר נתיב ל-git.exe באופן אוטומטי על ידי לחיצה על הכפתור "Test" (4).
    
    ![הגדרות אנדרואיד סטודיו](../images/studioSetup/11_GitPath.png)

* אם ההגדרה האוטומטית מצליחה תוצג גרסת git.
    
    ![גרסת גיט מוצגת](../images/studioSetup/12_GitVersion.png)

* אם ניתן למצוא את git.exe באופן אוטומטי או שהבדיקה תגרום לשגיאה (1):
    
    ![גיט לא נמצא](../images/studioSetup/13_GitVersionError.png)
    
    במקרה זה לחצו על סמל התיקיה (2).

* השתמש ב[פונקציית חיפוש](https://www.tenforums.com/tutorials/94452-search-file-explorer-windows-10-a.html) ב-Windows Explorer כדי למצוא את "git.exe" אם אינכם בטוחים היכן הותקן git. אתם מחפש קובץ בשם "git.exe", הממוקם בתיקייה **\bin**.

* בחרו את הנתיב אל git.exe וודאו שבחרתם את זה שבתיקיית **\\bin\\** (3.) ולחצו על "OK" (4).
    
    ![בחר גיט ידנית](../images/studioSetup/14_GitManualSelection.png)

* בדקו שוב את נתיב ה-git שבחרת עם כפתור "Test" כמתואר לעיל.

* כאשר גרסת git מוצגת לצד הנתיב (ראו צילום מסך למעלה), סגרו את חלון ההגדרות על ידי לחיצה על כפתור "OK" (5).

### Mac

* כל גרסה של git תתאים. לדוגמה <https://git-scm.com/download/mac>.
* השתמשו ב-homebrew להתקנת git: ```$ brew install git```.
* לפרטים על התקנת git עיינו ב[תיעוד ה-git הרשמי](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git).
* אם אתם מתקינים git דרך homebrew אין צורך לשנות שום העדפות. ליתר ביטחון: ניתן למצוא אותם כאן: Android Studio > Preferences.

(Building-APK-download-androidaps-code)=

## הורדת הקוד של AndroidAPS

* במסך הפתיחה של Android Studio בחרו "Projects" (1) בצד שמאל ולאחר מכן "Get from VCS" (2).
    
    ![אנדרואיד סטודיו וויזרד](../images/studioSetup/20_ProjectVCS.png)
    
    * אם כבר פתחתם את Android Studio ולא רואים יותר את מסך הפתיחה בחרו File (1) > New (2) > Project from Version Control... (3)
        
        ![בדיקת פרויקט מפיקוח גרסה בתוך אנדרואיד סטודיו](../images/AndroidStudio_FileNew.PNG)
    
    * כעת נגיד ל-Android Studio מאיפה להשיג את הקוד:
    
    * ודאו שבחרתם ב"Repository URL" בצד שמאל (1).
    
    * בדוק אם "Git" נבחר ב-version control (2).
    * העתיקו והדביקו את כתובת האתר: ```https://github.com/nightscout/AndroidAPS``` למאגר הראשי של AndroidAPS לתוך תיבת הטקסט של URL (כתובת האתר) (3).
    * בחרו את הספרייה שבה ברצונכם לשמור את הקוד המשוכפל (4).
        
        ![שיבוט גיט](../images/studioSetup/21_CloneURL.png)

* לחץ על כפתור "Clone" (5).
    
    ![מאגר השיבוט](../images/studioSetup/22_Cloning.png)

* אל תלחצו על "Background" בזמן שהמאגר משוכפל!

* לאחר שכפול המאגר בהצלחה, Android Studio יפתח את הפרויקט המשוכפל.

* אתם תישאלו אם אתם נותנים אמון בפרויקט. בחרו "Trust project"!
    
    ![פרויקט מהימן](../images/studioSetup/23_TrustProject.png)

* בשורת המצב בתחתית תראו את מידע על כך ש-Android Studio מפעיל משימות ברקע.
    
    ![משימות ברקע](../images/studioSetup/24_GradleSyncRunning.png)

* העניקו גישה אם חומת האש (Firewall) שלכם מבקשת רשות.
    
    ![אישור חומת אש של ג'אוה](../images/AndroidStudio361_18.png)

* לאחר סיום משימות הרקע, סביר להניח שתראו שגיאה האומרת שהתרחשו שגיאות (1) או (2) או (3).
    
    ![רישוי SDK](../images/studioSetup/25_SyncFailed.png)
    
    אל דאגה, תכף הן תטופלנה!

(Building-APK-download-android-sdk)=

## הורדת Android SDK

* בתפריט, עבור אל File (1) > Settings (2).
    
    ![הגדרות פתוחות](../images/studioSetup/30_Settings.png)

* לחצו פעמיים על Appearance & Behaviour לפתיחת תפריט המשנה שלו (1).

* לחצו פעמיים על הגדרות System Settings (2) ובחרו Android SDK (3).
* סמנו V בתיבה שליד "Android 9.0 (Pie)" (4) (API Level 28).
    
    ![הגדרות SDK](../images/studioSetup/31_AndroidSDK.png)

* אשרו את ההודעה על ידי לחיצה על 'אישור'.
    
    ![אמת רישוי SDK](../images/studioSetup/32_ConfirmSDK.png)

* קבלו את הסכם הרישיון (1) ולחץ על "Next" (2).
    
    ![קבל רישוי SDK](../images/studioSetup/33_ConfirmLicense.png)

* המתינו עד לסיום ההורדה וההתקנה של ה-SDK.
    
    ![חכה בזמן התקנת SDK](../images/studioSetup/34_DownloadSDK.png)

* כאשר התקנת SDK תושלם, כפתור "Finish" יהפוך לכחול. לחצו עליו.
    
    ![סיים התקנת SDK](../images/studioSetup/35_DownloadSDKfinished.png)

* Android Studio עשוי להמליץ לעדכן את מערכת gradle. **לעולם אל תעדכנו את gradle!** זה יגרום לבעיות!

* אם אתם רואים מידע בצד הימני התחתון של חלון Android Studio שהתוסף של Android Gradle מוכן לעדכון לחץ על הטקסט "update" (1).
    
    ![אי שידרוג Gradle](../images/studioSetup/36_GradleUpdateRequest.png)

* בתיבת הדו-שיח בחרו "Don't remind me again for this project" (2).
    
    ![אי שידרוג Gradle](../images/studioSetup/37_GradleUpdateDeny.png)

* הפעילו מחדש את Android Studio לפני שתמשיכו.

(Building-APK-generate-signed-apk)=

## יצירת APK חתום

Signing means that you indicate your app to be your own creation but in a digital way as a kind of digital fingerprint within the app itself. That is necessary because Android has a rule that it only accepts signed code to run for security reasons. For more information on this topic, follow [this link](https://developer.android.com/studio/publish/app-signing.html#generate-key).

* לאחר הפעלת Android Studio, המתינו עד לסיום כל משימות הרקע.
    
    ![חכה למשימות ברקע](../images/studioSetup/40_BackgroundTasks.png)
    
    * ***אזהרה:*** אם עולות שגיאות, אל תמשיכו אל השלבים הבאים. \ אם צריך, עיינו ב[פתרון בעיות](../Installing-AndroidAPS/troubleshooting_androidstudio) לפיתרון תקלות נפוצות!
    
    ![טעות סנכרון של Gradle](../images/studioSetup/41_GradleSyncError.png)

* לחצו על "Build" (1) בשורת התפריטים ובחרו "Generate Signed Bundle / APK..." (2).
    
    ![בנה קובץ אפליקציה](../images/studioSetup/42_MenuBuild.png)

* לחצו על "APK" (1) במקום "Android App Bundle" ולאחר מכן לחצו "Next" (2).
    
    ![קובץ APK במקום חבילה](../images/studioSetup/43_Apk.png)

* וודאו שה-module הינו "AndriodAPS.app".

* לחצו "Create new" (2) על מנת להתחיל יצירת ה-key store (מאגר המפתחות).
    
    ***הערה:* ** בהקשר זה מאגר המפתחות הוא לא יותר מאשר קובץ בו נשמר המידע לחתימת האפליקציה. הוא מוצפן והמידע מאובטח עם סיסמאות.
    
    ![צור מפתח מאגר](../images/studioSetup/44_KeystoreNew.png)

* לחצו על צלמית התיקייה על מנת לבחור את הנתיב במחשב לשמירת מאגר המפתחות.
    
    ![צור מפתח מאגר](../images/studioSetup/45_KeystoreDialog.png)

* בחרו בנתיב בו מאגר המפתחות יישמר (1).
    
    ![צור מפתח מאגר](../images/studioSetup/46_KeystorePath.png)
    
    ***אזהרה: אל תשמור את המפתח התיקייה בה שמור הפרויקט. אתם חייבים להשתמש בתיקייה שונה!*** מיקום טוב יכול להיות תיקיית הבית שלכם.

* הקלידו שם קובץ למאגר המפתחות (2) ואשרו בלחיצה על "OK" (3).

* רשמו (2) ואמתו (3) את סיסמת המאגר המפתחות שלכם. ![בחר נתיב מפתח מאגר](../images/studioSetup/47_KeystoreDialog.png)
    
    ***הערה:*** הסיסמאות למאגר המפתחות לא חייבות להיות מתוחכמות. וודאו שתזכרו את הסיסמאות על ידי שמירתן במקום בטוח. In case you will not remember your passwords in the future, see [troubleshooting for lost key store](troubleshooting_androidstudio-lost-keystore).

* רשמו כינוי (4) למאגר המפתחות שלכם. בחרו כל כינוי שתרצו.

* רשמו (5) ואמתו (6) את הסיסמה למפתח שלך

* התוקף (7) הוא 25 שנה כברירת מחדל. אין חובה לשנות את ערך ברירת המחדל.

* חייבים להכניס שם פרטי ושם משפחה (8). כל המידע הנוסף הוא לבחירה.

* לחצו על "OK" (9) לסיום.

* וודאו שסימנתם את התיבה לזכירת הסיסמאות (1). כך שלא תידרשו לרשום אותן שוב בפעם הבאה שתבנו את האפליקציה (כלומר, כאשר תבנו גרסה חדשה לעדכון של AndroidAPS).

* לחצו על "Next" (2).
    
    ![זכור סיסמאות](../images/studioSetup/48_KeystoreSave.png)

* בחרו את "fullRelease" (1) כגרסה לבנייה ולחצו על "Finish".
    
    ![בחר גרסת בנייה](../images/studioSetup/49_BuildVariant.png)

* Android Studio יראה "Gradle Build running" בתחתית המסך. משימה זו לוקחת זמן, תלוי במחשב ובמהירות חיבור האינטרנט. **התאזרו בסבלנות!**
    
    ![ריצת G](../images/studioSetup/50_GradleRunning.png)

* AndroidStudio יציג את ההודעה "Generate Signed APK" לאחר סיום בניית האפליקציה.
    
    ![ריצת Gradle](../images/studioSetup/51_BuildFinished.png)

* במקרה שהבנייה לא הסתיימה בהצלחה, פנו ל[פרק פיתרון בעיות](../Installing-AndroidAPS/troubleshooting_androidstudio).

* לחצו על ההודעות להצגה מורחבת שלהן.

* לחצו על הקישור "locate".
    
    ![מצא מיקום הבנייה](../images/studioSetup/52_BuildLocate.png)
    
    * אם ההודעה אינה מוצגת יותר, תוכלו תמיד לפתוח את ה- "Event log" ולבחור אותו שם.![בנייה מוצלחת - אירוע לוג](../images/studioSetup/53_EventLog.png)

* מנהל הקבצים במחשבכם ייפתח. נווטו אל הספריה "full" (1) > "release (2).
    
    ![מיקום קובץ האפליקציה](../images/studioSetup/54_APKlocation.png)

* "app-full-release.apk" (3) הינו הקובץ שאתם מחפשים!

(Building-APK-transfer-apk-to-smartphone)=

## העתיקו את האפליקציה אל הטלפון

Easiest way to transfer app-full-release.apk to your phone is via [USB cable or Google Drive](https://support.google.com/android/answer/9064445?hl=en). Please note that transfer by mail might cause difficulties and is not the preferred way.

On your phone you have to allow installation from unknown sources. Manuals how to do this can be found on the internet (i.e. [here](https://www.expressvpn.com/de/support/vpn-setup/enable-apk-installs-android/) or [here](https://www.androidcentral.com/unknown-sources)).

## פתרון בעיות

See separate page [troubleshooting Android Studio](../Installing-AndroidAPS/troubleshooting_androidstudio).