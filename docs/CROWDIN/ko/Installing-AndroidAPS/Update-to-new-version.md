# 새로운 버젼 또는 브랜치 업데이트

## 다운로드 대신에 당신 스스로 빌드하세요

**AndroidAPS는 의료기기 규정 때문에 다운로드 가능하지 않습니다. 당신 스스로 사용하기 위해 앱을 빌드하는 것은 합법입니다. 그러나 빌드 복사본을 다른 사람과 공유하시면 안됩니다! 세부사항은 [FAQ 페이지](../Getting-Started/FAQ.md)를 참고하세요**

## 중요사항

* Please update as soon as possible after a new release is available. You will receive an [information on the AndroidAPS home screen](../Installing-AndroidAPS/Releasenotes#release-notes) about the new version.
* As of version 2.3 you have to use git to update. Updating via zip file does not work anymore.
* Please use [Android Studio Version 3.6.1](https://developer.android.com/studio/) or newer to build the apk.
* [Windows 10 32-bit systems](../Installing-AndroidAPS/troubleshooting_androidstudio#unable-to-start-daemon-process) are not supported by Android Studio 3.6.1.
* If you are using xDrip make sure to [identify the receiver](../Configuration/xdrip#identify-receiver).
* If you are using Dexcom G6 with the [patched Dexcom app](../Hardware/DexcomG6#if-using-g6-with-patched-dexcom-app) you will need the version from the [2.4 folder](https://github.com/dexcomapp/dexcomapp/tree/master/2.4).

## 기존 사용자들을 위한 간단한 세부설명

처음 업데이트하는 경우 이 단락을 건너뛰십시오. 이 간단한 세부설명은 기존 사용자를 위한 것입니다. 만일 Git이 설치되지 않았다면 [Git 설치](../Installing-AndroidAPS/git-install.rst)를 하세요.

당신이 윈도우 PC를 사용하고 이전 버전에서 AAPS를 업데이트했다면, 다음 네가지 단계를 업데이트할 수 있습니다.

1. 현재 사용중인 AAPS 버전에서[설정 저장하기](../Usage/ExportImportSettings#how-to-export-settings) 하여 설정파일을 저장하세요
2. [Update local copy](../Installing-AndroidAPS/Update-to-new-version#update-your-local-copy) (VCS->Git->Pull)
3. [싸인된 APK파일을 생성하세요](../Installing-AndroidAPS/Update-to-new-version#generate-signed-apk) (WEAR가 아닌, APP을 선택하셔야 합니다)
4. 4.BG 소스로, xDrip 내에서 리시버를 선택하시거나, 2.4폴더 이후버전의 Dexcom app을 선택하세요.

## Git를 설치하세요. (미설치시)

설치 페이지에 있는 매뉴얼을 따르세요.

## 저장파일을 업데이트 하세요.

* ○ VCS -> Git -> Pull 순서로 클릭하세요
    
    ![안드로이드 스튜디오-GIT-Pull](../images/AndroidStudio361_Update01.png)

* 풀을 클릭 (대화 상자 필드의 변경사항 없음)
    
    ![안드로이드 스튜디오-GIT-Pull 2](../images/AndroidStudio361_Update02.png)

* Wait while download is in progress.
    
    ![Android Studio - Pull in progress](../images/AndroidStudio361_Update03.png)

* When done Android Studio will inform you that "all files are up-to-date".
    
    ![All files up to date](../images/AndroidStudio361_Update04.png)

## 서명된 Apk파일 설치하기

<!--- Text is maintained in page building-apk.md --->

* Click "Build" in the menu bar and select "Generate Signed Bundle / APK...".

![Build apk](../images/AndroidStudio361_27.png)

* Select "APK" (1.) instead of "Android App Bundle" and click "Next" (2.).

![APK instead of bundle](../images/AndroidStudio361_28.png)

* Make sure that module is set to "app".
* Select your key store path by clicking on "Choose existing...".
* Enter your passwords for key store and key.
* If the box to remember passwords is checked you don't have to enter them. In case the box was not checked during last build and you cannot remember the passwords refer to the [troubleshooting section](../Installing-AndroidAPS/troubleshooting_androidstudio#lost-keystore).
* Click "Next".

![Key store](../images/AndroidStudio361_Update05.png)

* Select build variant "fullRelease" (1.). 
* Check boxes V1 and V2 for signature versions (2.).
* Click "Finish". (3.)

![Finish build](../images/AndroidStudio361_32.png)

* Android Studio will display the information "APK(s) generated successfully..." after build is finished.
* In case build was not successful refer to the [troubleshooting section](../Installing-AndroidAPS/troubleshooting_androidstudio.rst).
* Easiest way to find the apk is to click on "Event log".

![Build successfully - event log](../images/AndroidStudio361_33.png)

* In the event log section click "locate".

![Event log - locate apk](../images/AndroidStudio361_34.png)

* app-full-release.apk is the file you are looking for.

![File location apk](../images/AndroidStudio361_35.png)

## 스마트폰에 apk파일을 보내기.

Easiest way to transfer app-full-release.apk to your phone is via [USB cable or Google Drive](https://support.google.com/android/answer/9064445?hl=en). Please note that transfer by mail might cause difficulties and is not the preferred way.

On your phone you have to allow installation from unknown sources. Manuals how to do this can be found on the internet (i.e. [here](https://www.expressvpn.com/de/support/vpn-setup/enable-apk-installs-android/) or [here](https://www.androidcentral.com/unknown-sources)).

## 폰에있는 AAPS 버전 확인하기.

You can check the AAPS version on your phone by clicking the three dots menu on the top right and then about.

![AAPS version installed](../images/Update_VersionCheck.png)

## 문제해결

별도의 [Android Studio 문제해결](../Installing-AndroidAPS/troubleshooting_androidstudio.rst) 페이지를 보세요.