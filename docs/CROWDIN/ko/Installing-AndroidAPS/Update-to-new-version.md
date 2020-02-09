# 새로운 버젼 또는 브랜치 업데이트

## 다운로드 대신에 당신 스스로 빌드하세요

**AndroidAPS는 의료기기 규정 때문에 다운로드 가능하지 않습니다. 당신 스스로 사용하기 위해 앱을 빌드하는 것은 합법입니다. 그러나 빌드 복사본을 다른 사람과 공유하시면 안됩니다! 세부사항은 [FAQ 페이지](../Getting-Started/FAQ.md)를 참고하세요**

## 중요사항

* 버전 2.3에서는 업데이트에 git를 사용해야합니다. 압축 파일을 통한 업데이트는 더 이상 작동하지 않습니다.
* apk 빌드를 위해서 [안드로이드 스튜디오 버전 3.5.1](https://developer.android.com/studio/) 또는 이후의 버전을 이용하세요.
* Android Studio 3.5.1는 Windows 10 32-bit를 지원하지 않습니다.
* XDrip을 사용하고 있다면, 반드시 리시버를 확인하세요.
* [(패치된) 덱스콤 앱](../Hardware/DexcomG6#if-using-g6-with-patched-dexcom-app)으로 덱스콤 G6를 사용중이라면 [2.4 폴더](https://github.com/dexcomapp/dexcomapp/tree/master/2.4)이후의 버전이 필요합니다.

## 기존 사용자들을 위한 간단한 세부설명

처음 업데이트하는 경우 이 단락을 건너뛰십시오. The quick walk-through is for experienced users. Your next step would be to [install git](../Installing-AndroidAPS/git-install.rst) if you do not have it already.

If you already updated AAPS in previous versions and use a Windows PC you can update in four simple steps:

1. [Export your settings](../Usage/ExportImportSettings#how-to-export-settings) from the existing AAPS version on your phone to be on the save side
2. [Update local copy](../Installing-AndroidAPS/Update-to-new-version#update-your-local-copy) (VCS->Git->Pull)
3. [Generate signed APK](../Installing-AndroidAPS/Update-to-new-version#generate-signed-apk) (Select 'app' instead of 'wear' on your way!)
4. Depending on your [BG source](../Configuration/BG-Source.rst) make sure to [identify receiver](../Configuration/xdrip#identify-receiver) in xDrip or use the patched Dexcom app from the [2.4 folder](https://github.com/dexcomapp/dexcomapp/tree/master/2.4).

## Install git (if you don't have it)

Follow the manual on the [git installation page](../Installing-AndroidAPS/git-install.rst).

## Update your local copy

* Click: VCS -> Git -> Pull
  
  ![Android Studio - GIT - Pull](../images/Update_Pull.png)

* Click Pull (no changes in dialog field)
  
  ![Android Studio - GIT - Pull 2](../images/Update_Pull2.png)

## Generate signed APK

<!--- Text is maintained in page building-apk.md ---> In the menu select "Build" and then "Generate Signed Bundle / APK...". (The menu in Android Studio changed as of September 2018. In older versions select in the menu “Build” and then “Generate Signed APK...”.)

Signing means that you sign your generated app but in a digital way as a kind of digital fingerprint in the app itself. That is necessary because Android has a rule that it only accepts signed code to run for security reasons. For more information on this topic, follow the link [here](https://developer.android.com/studio/publish/app-signing.html#generate-key) Security is a deep and complex topic and you don't need this now.

![Screenshot 39a](../images/Installation_Screenshot_39a.PNG)

In the following dialogue box select "APK" instead of "Android App Bundle" and click button "Next".

![Screenshot 39b](../images/Installation_Screenshot_39b.PNG)

Select "app" and click "Next".

![Screenshot 40](../images/Installation_Screenshot_40.png)

Enter your key store path, enter key store password, select key alias and enter key password.

Select 'Remember passwords'.

Then click next.

![Key store path](../images/KeystorePathUpdate.PNG)

Select "full" (or "fullRelease") as flavour for the generated app. Select V1 "Jar Signature" (V2 is optional) and click "Finish". The following information might be important for later use.

* 'Release' should be your default choice for "Build Type", 'Debug' is just for people coding.
* Select the build type you want to build. 
  * full / fullRelease (i.e. recommendations automatically enacted in closed looping)
  * openloop (i.e. recommendations given to user to manually enact)
  * pumpcontrol (i.e. remote control for pump, no looping)
  * nsclient (i.e. looping data of another user is displayed and careportal entries can be added)

![Screenshot 44](../images/Installation_Screenshot_44.png)

In the event log you see that the Signed APK was generated successfully.

![Screenshot 45](../images/Installation_Screenshot_45.png)

Click the "locate" link in the event log.

![Screenshot 46](../images/Installation_Screenshot_46.png)

## Transfer APK to smartphone

**[Export your settings](../Usage/ExportImportSettings#how-to-export-settings) from the existing AAPS version on your phone to be on the save side.**

<!--- Text is maintained in page building-apk.md ---> A file manager window opens. It might look a bit different on your system as I am using Linux. On Windows there will be the File Explorer and on Mac OS X the Finder. There you should see the directory with the generated APK file. Unfortunately this is the wrong place as "wear-release.apk" is not the signed "app" APK we are searching for.

![Screenshot 47](../images/Installation_Screenshot_47.png)

Please change to the directory AndroidAPS/app/full/release to find the "app-full-release.apk" file. Transfer this file to your Android smartphone. You can do it on your preferred way:

* Bluetooth
* cloud upload (Google Drive or other cloud services)
* connect computer and phone by cable 
* by mail (Note that some mail apps do not allow apk attachments, in this case use other transfer method.)

In this example Gmail is used as it is fairly simple. To install the self-signed app you need to allow Android on your smartphone to do this installation even if this file is received via Gmail which is normally forbidden. If you use something other please proceed accordingly.

![Screenshot 48](../images/Installation_Screenshot_48.png)

In the settings of your smartphone there is an area "unknown apps install" where I have to give Gmail the right to install APK files which I get via Gmail.

Select "Allow from this source". After the installation, you can disable it again.

![Installation from unknown sources](../images/Installation_Screenshot_49-50.png)

The last step is to press on the APK file I got via Gmail and install the app. If the APK does not install and you have an older version of AndroidAPS on your phone that was signed with a different key then you will need to uninstall this first, remember to export your settings if so!

Yeah, you got it and can now start with configuring AndroidAPS for your use (CGMS, insulin pump) etc.

## Check AAPS version on phone

You can check the AAPS version on your phone by clicking the three dots menu on the top right and then about.

![AAPS version installed](../images/Update_VersionCheck.png)

## 문제해결

See separate page [troubleshooting Android Studio](../Installing-AndroidAPS/troubleshooting_androidstudio.rst).