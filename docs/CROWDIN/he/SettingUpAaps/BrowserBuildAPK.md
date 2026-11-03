(github-build-apk)=

# בנייה בדפדפן – שלב 4: בניית ה-APK

```{note}
זהו **שלב 4** של [בנייה בדפדפן](BrowserBuild.md). קודם יש להשלים את [שלב 3 – אישור Google Drive](BrowserBuildGoogleDrive.md).
```

## בניית ה-APK של AAPS עם GitHub Actions של AAPS-CI
 - מתאים לרוב המשתמשים.

```{tab-set}

:::{tab-item} ויקי
### הרצת ה-workflow לבניית APK חתום

1. In your GitHub copy of AndroidAPS, select Actions.
2. Expand All Workflows.
3. יש לבחור ב-AAPS-CI

![Actions AAPS-CI](../images/update/CI/GitHubActions1.png)

4. Scroll down and tap Run Workflow.

![Run Workflow](../images/update/CI/GitHubActions2.png)

5. יש להשאיר את **Use workflow from** על הענף master. ב-**Select AAPS Version** יש לבחור את גרסת **AAPS** שרוצים לבנות (בדרך כלל החדשה ביותר). יש לבחור את ה[וריאנט](#browserbuild-variant) (fullRelease) ולהקיש על Run workflow.



![Run Workflow](../images/update/CI/GitHubActions3.png)

6. You will see the message Workflow run was successfully requested. Refresh your browser page and you will be able to monitor the build progress. When the action completes, the AAPS CI action will show a green tick mark. You have successfully built the updated version of Android APS.

![מעקב אחרי ה-workflow](../images/update/CI/GitHubActions4.png)

### התקנת ה-APK של AAPS

1. יש לפתוח את Google Drive שלכם
2. Browse into AAPS, select the new version folder and you will find both the phone and Android Wear versions.

![המיקום ב-Google Drive](../images/update/CI/GitHubActions5.png)
:::  

:::{tab-item} סרטון
<div align="center" style="max-width: 360px; margin: auto; margin-bottom: 2em;">
  <div style="position: relative; width: 100%; aspect-ratio: 9/16;">
    <iframe
      src="https://geo.dailymotion.com/player/x9rdwms.html?video=x9rdwms&loop=true&mute=true"
      loading="lazy"
      style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
      frameborder="0"
      allowfullscreen>
    </iframe>
  </div>
</div>
:::  

```

## בחירת גרסת הבנייה

**רק גרסאות AAPS מ-3.3.2.1 ומעלה נבנות בשיטת הדפדפן.**

יש להקיש על **Select AAPS Version** ולבחור את הגרסה לבנייה. הגרסה החדשה ביותר נמצאת בראש הרשימה.

![הרשימה Select AAPS Version](../images/Building-the-App/CI/BrowserBuildVariant2.png)

(browserbuild-variant)=

## בחירת וריאנט הבנייה

*הערה: גם האפליקציה ל-Android וגם האפליקציה ל-Android Wear נבנות באופן אוטומטי.*

  - יש לבחור את הווריאנט הדרוש:
    - fullRelease: לשימוש רגיל עם משאבה, עם כל האפשרויות.
    - [aapsclientRelease, aapsclient2Release, aapsclient3Release](#RemoteControl_aapsclient): למטפלים (דורש [Nightscout](../SettingUpAaps/Nightscout.md)). `aapsclient3Release` בונה את **AAPSClient3**, שזמין מגרסה 4.0 של **AAPS** (ראו [על AAPSClient, AAPSClient2 ו-AAPSClient3](#remotecontrol-aapsclient-versions)).
    - pumpcontrolRelease: במקום האפליקציה או השלט של המשאבה שלכם

![](../images/Building-the-App/CI/BrowserBuildVariant3.png)

וריאנטים שמסתיימים ב-"Debug" נבנים במצב debug (ניפוי באגים), שמועיל למפתחים לפתרון תקלות.

<!-- If you want to test the items in a pull request has been moved to dev page /AdvancedOptions/DevBranch.md -->

----

כשהבנייה מצליחה, קובץ ה-APK נשמר ב-Google Drive שלכם. המשיכו אל [העברה והתקנה של AAPS](TransferringAndInstallingAaps.md).

```{note}
מספטמבר 2026, [אימות מפתחים ב-Android](#android-developer-verification) של Google עלול לחסום התקנה של ה-APK בהקשה על הקובץ, תלוי במדינה שלכם. פתרונות עקיפה בחינם מוסברים בדף ההוא.
```

אם הבנייה נכשלת, קודם [בדקו ביומן הבנייה מה השתבש](#aaps-ci-read-the-logs), ואז ראו [בנייה בדפדפן: פתרון תקלות](../GettingHelp/BrowserBuildTroubleshooting.md). כדי לכלול קומיט מסוים בבנייה, ראו [cherry-pick של קומיט](#github-cherry-pick).
