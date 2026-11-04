(troubleshooting_androidstudio-troubleshooting-android-studio)=

# Android Studio 문제 해결

```{contents} List of common issues
:depth: 2
:local: true
```

(troubleshooting_androidstudio-lost-keystore)=
## 키 저장소를 잃어버린 경우
키 저장소나 그 비밀번호를 잃어버렸다면, 새 키 저장소로 서명된 apk로는 현재 **AAPS**를 업데이트할 수 없습니다. 삭제하고 다시 설치해야 합니다. [새 키 저장소로 AAPS 재설치하기](#reinstall-aaps)를 보십시오.

## Gradle Sync 실패
Gradle Sync는 여러 이유로 실패할 수 있습니다. 'gradle sync failed'라는 메시지가 나타나면 Android Studio 아래쪽의 "Build" 탭(1)을 열고 어떤 오류 메시지(2)가 표시되는지 확인하십시오.

![Gradle 실패](../images/studioTroubleshooting/07_GradleSyncFailed2.png)

```{contents} Likely reasons for gradle sync failures are:
:depth: 1
:local: true
```

*중요*: 해당 문제에 대한 안내를 따른 다음에는 [Gradle Sync](#gradle-resync)를 다시 실행해야 합니다.

(troubleshooting_androidstudio-uncommitted-changes)=
### 커밋되지 않은 변경 사항

다음과 같은 실패 메시지가 나타나면:

![Gradle 커밋되지 않은 변경 사항](../images/studioTroubleshooting/02_GradleUncommitedChanges.png)

```
Build file 'C:\Data\50-Android\AndroidAPS\app\build.gradle.kts' line: 243

There are uncommitted changes.
위키에 설명된 대로 소스를 다시 clone하고 Gradle 업데이트를 허용하지 마십시오
```

#### 1단계 - Git 설치 확인
  * Android Studio 아래쪽의 터미널 탭(1)을 열고 다음 텍스트를 복사하여 터미널(2)에 붙여 넣거나 입력하십시오.
    ```
    git --version
    ```

    ![Gradle Git 버전](../images/studioTroubleshooting/03_GitVersion.png)

    참고: Git과 version 사이에는 공백 하나와 하이픈 두 개가 있습니다!

  * 위 스크린샷처럼 설치된 Git 버전을 알려 주는 메시지가 나와야 합니다. 이 경우 [2단계](#troubleshooting-android-studio-check-for-uncommitted-changes)로 가십시오.

  * 다음과 같은 메시지가 나타나면
    ```
    Git: command not found
    ```
    Git 설치가 올바르지 않습니다.

  * [Git 설치 확인](#BuildingAaps-steps-for-installing-git)

  * Windows를 사용하고 있고 Git을 방금 설치했다면, 설치 후 Git을 어디에서나 사용할 수 있도록 컴퓨터를 다시 시작해야 합니다

  * Git이 설치되어 있고 (Windows에서) 다시 시작했는데도 Git을 찾을 수 없으면:

  * 컴퓨터에서 "git.exe" 파일을 찾으십시오.

    어느 디렉터리에 저장되어 있는지 적어 두십시오.

  * Windows의 환경 변수로 가서 "PATH" 변수를 선택하고 편집을 누르십시오. Git 설치를 찾은 디렉터리를 추가하십시오.

  * 저장하고 닫으십시오.

  * Android Studio를 다시 시작하십시오.

(troubleshooting-android-studio-check-for-uncommitted-changes)=
#### 2단계: 커밋되지 않은 변경 사항 확인.

  * Android Studio에서 왼쪽에 있는 'Commit' 탭(1)을 여십시오. ![Commit 탭: 커밋되지 않은 변경 사항](../images/studioTroubleshooting/04_CommitTabWithChanges.png)
  * "Changes"(이전 Android Studio 버전에서는 "Default changeset")(2) 또는 "Unversioned Files"(3)가 보입니다:

    * "Changes"의 경우 아마 'Gradle'을 업데이트했거나 실수로 일부 파일 내용을 바꾸었을 것입니다.

    * "Changes"를 마우스 오른쪽 버튼으로 누르고 "Rollback…"을 선택하십시오 (1)

      ![Commit 탭: 변경 사항 되돌리기](../images/studioTroubleshooting/05_CommitTabRollback.png)

    * 파일을 Git 서버에서 다시 가져옵니다. Commit 탭에 다른 변경 사항이 없으면 [3단계](#gradle-resync)로 가십시오.

  * "Unversioned Files"가 보이면 실수로 소스 코드 디렉터리에 파일을 저장했을 수 있습니다. 키 저장소 파일처럼 중요한 파일일 수 있으며, 다른 곳으로 옮겨야 합니다. 그 파일이 무엇인지 모르고 직접 만든 파일이 아니라면 삭제해도 됩니다.

    * 컴퓨터의 일반 파일 탐색기를 사용하여 그 파일을 안전한 곳으로 옮기거나 잘라내어 붙여 넣으십시오.

    * Android Studio로 돌아가 Commit 탭에서 Refresh 버튼(4)을 눌러 파일이 더 이상 **AAPS** 디렉터리에 저장되어 있지 않은지 확인하십시오.

      Commit 탭에 다른 변경 사항이 없으면 [3단계](#gradle-resync)로 가십시오.


#### 3단계: Gradle 다시 동기화(한 번 더)

[Gradle 다시 동기화](#gradle-resync)의 안내를 따르십시오.

### Git Pull Failed - Please tell me who you are

이 메시지가 보이면 Git이 사용자 정보를 알려 달라고 요청하는 것입니다.

![Git 사용자 확인](../images/studioTroubleshooting/164_Git_Identify.png)

터미널을 열고 다음 두 명령을 차례로 입력하십시오.

```
git config --global user.name "Your name here"
git config --global user.email your.email@here.com
```

이름은 따옴표 안에 써야 합니다.

![Git 사용자 확인 해결](../images/studioTroubleshooting/164_Git_Identify2.png)

(troubleshooting_androidstudio-android-gradle-plugin-requires-java-11-to-run)=

(incompatible-gradle-jvm)=
### Incompatible Gradle JVM

![Incompatible Gradle JVM](../images/studioTroubleshooting/160_InkompatibelAndroidGradleJVM.png)

```
Your build is currently configured to use incompatible Java 21.0.3 and Gradle 8.2.
Cannot sync the project.

We recommend upgrading to Gradle version 8.9.

The minimum compatible Gradle version is 8.5.

The maximum compatible Gradle JVM version is 19.
```

Or:

```
Cause: error: invalid source release: 21
```

위 오류 메시지가 나타나면 다시 빌드하기 전에 올바른 JVM 버전을 내려받아야 합니다:

1.  [요구 사항 표](#Building-APK-recommended-specification-of-computer-for-building-apk-file)에서 빌드하려는 **AAPS** 버전에 필요한 JVM 버전을 확인하고 적어 두십시오.

2. Android Studio 오른쪽의 코끼리(1)를 눌러 Gradle 보기를 열고, 설정(2)을 연 다음 **Gradle Settings**(3)를 선택하십시오:

![Gradle Settings 열기](../images/studioTroubleshooting/161_GradleSettings.png)

3.  **Gradle JDK** 항목에서 알맞은 버전이 선택되어 있는지 확인하십시오(1). 선택되어 있지 않으면 항목을 누르고 목록에 이미 있는지 보십시오. 아래 예에서는 JVM 21이 “jbr-21”로 표시됩니다. 찾았으면 선택하기만 하면 끝입니다. 없으면 **Download JDK**(2)를 선택하십시오.


![Download JDK 선택](../images/studioTroubleshooting/162_DownloadJDK.png)

4. Version(1)에서 **AAPS** 버전에 필요한 JDK(요구 사항 표를 확인할 때 적어 둔 것)를 선택하십시오. Vendor(2)에서는 아무 Vendor나 선택하십시오. Location(3): 바꾸지 마십시오. **Download**(4)를 누르십시오.

![JDK 17 선택](../images/studioTroubleshooting/163_JDKSelection.png)

5.  **OK**로 **Settings** 대화 상자를 닫으십시오.
6. 이제 Gradle Sync를 다시 시작해야 합니다. [Gradle 다시 동기화](#gradle-resync)의 안내를 따르십시오.

(incompatible-version-of-android-gradle-plugin)=
### 호환되지 않는 Android Gradle 플러그인 버전

  다음 오류 메시지가 나타나면

`The project is using an incompatible version (AGP x.x.x) of the Android Gradle plugin. Latest supported version is AGP x.x.x`

  ![호환되지 않는 Android Gradle 플러그인 버전](../images/studioTroubleshooting/15_InkompatibelAndroidGradlePlugin.png)

  오래된 버전의 Android Studio를 사용하고 있습니다. 메뉴에서 Help > Check for updates로 가서 찾은 Android Studio와 플러그인의 업데이트를 모두 설치하십시오.

(troubleshooting_androidstudio-could-not-resolve-no-cached-version)=
### Could not resolve/No cached version

  다음과 같은 오류 메시지가 나타날 수 있습니다:

![Could not resolve... No cached version](../images/studioTroubleshooting/08_NoCachedVersion.png)

  * 오른쪽에서 Gradle 탭(1)을 여십시오.

    (2)에 표시된 버튼이 선택되어 있지 *않은지* 확인하십시오.

    ![Gradle 오프라인 모드](../images/studioTroubleshooting/10_GradleOfflineMode.png)

  * 이제 [Gradle 다시 동기화](#gradle-resync)를 실행해야 합니다

(troubleshooting_androidstudio-unable-to-start-daemon-process)=
### Unable to start daemon process

  아래와 같은 오류 메시지가 보이면 아마 Windows 10 32비트 시스템을 사용하고 있을 것입니다. 이것은 Android Studio 3.5.1 이상에서 지원되지 않으며, 안타깝게도 **AAPS** 개발자가 할 수 있는 일이 없습니다!

  32비트 OS인지 64비트 OS인지 확인하는 방법은 인터넷에서 찾을 수 있습니다. 예: [이 페이지](https://support.microsoft.com/en-us/windows/32-bit-and-64-bit-windows-frequently-asked-questions-c6ca9541-8dce-4d48-0415-94a3faa2e13d).

  ![Unable to start daemon process 스크린샷](../images/AndroidStudioWin10_32bitError.png)

(gradle-resync)=
### Gradle 다시 동기화

  Gradle Sync가 실패했다는 메시지가 아직 보이면 이제 **Try again**(1) 링크를 선택하십시오. ![Gradle Sync 실패 모드](../images/studioTroubleshooting/01_GradleSyncFailed.png)


  메시지가 더 이상 보이지 않아도 수동으로 실행할 수 있습니다:

  * Android Studio 오른쪽 가장자리에 있는 Gradle 탭(1)을 여십시오.

    ![Gradle 다시 불러오기](../images/studioTroubleshooting/06_GradleResyncManually.png)

  * AAPS(2)를 마우스 오른쪽 버튼으로 누르십시오

  * "Reload Gradle Project"(3)를 누르십시오

## Generate Signed APK가 성공했지만 빌드 변형이 0개인 경우

서명된 apk를 생성할 때 생성은 성공했지만 '0 build variants'(빌드 변형 0개)가 생성되었다는 알림이 나타날 수 있습니다:

![빌드 변형이 0개로 생성된 APK](../images/studioTroubleshooting/14_BuildWith0Variants.png)

이것은 잘못된 경고입니다. 생성할 때 선택한 "Destination folder"(대상 폴더) 디렉터리([서명된 APK 생성](#Building-APK-generate-signed-apk) 단계)를 확인하면 생성된 apk가 거기에 있습니다!


## 컴파일러/kotlin 경고와 함께 앱이 만들어진 경우

빌드는 성공했지만 컴파일러 또는 kotlin 경고(노란색 또는 파란색 느낌표로 표시)가 나타나면 이 경고는 그냥 무시해도 됩니다.

 ![경고와 함께 완료된 Gradle](../images/studioTroubleshooting/13_BuildWithWarnings.png)

apk가 성공적으로 빌드되었으며 휴대폰으로 옮길 수 있습니다!


## AAPS가 CGM 데이터를 받지 못함

* 패치된 Dexcom G6 앱을 사용하고 있다면: 이 앱은 오래되었습니다. 대신 [BYODA](#DexcomG6-if-using-g6-with-build-your-own-dexcom-app) 앱을 사용하십시오.

* xDrip을 사용한다면: [xDrip 설정 페이지](#xdrip-identify-receiver)에 설명된 대로 수신기를 지정하십시오(identify receiver).


## Apk가 설치되지 않음

![휴대폰 앱이 설치되지 않음](../images/Update_AppNotInstalled.png)

* “app-full-release.apk” 파일을 휴대폰으로 옮겼는지 확인하십시오.
* 이 오류는 보통 새 apk가 설치된 **AAPS**와 다른 키 저장소로 서명되었다는 뜻입니다. 이전 키 저장소가 아직 있으면 그것을 선택하고 다시 빌드하십시오. 그렇지 않으면 [새 키 저장소로 AAPS 재설치하기](#reinstall-aaps)를 보십시오.
* 휴대폰에 "App not installed"(앱이 설치되지 않음)가 표시되면 다음 단계를 따르십시오:

1. [설정 내보내기](../Maintenance/ExportImportSettings.md)(휴대폰에 이미 설치된 AAPS 버전에서)
2. 휴대폰에서 **AAPS**를 삭제하십시오.
3. 비행기 모드를 켜고 Bluetooth를 끄십시오.
4. 새 버전 설치(“app-full-release.apk”)
5. [설정 가져오기](../Maintenance/ExportImportSettings.md)
6. Bluetooth를 다시 켜고 비행기 모드를 끄십시오

## Apk가 설치되었지만 이전 버전임

앱을 성공적으로 빌드하고 휴대폰으로 옮겨 설치까지 성공했는데 버전 번호가 그대로라면 [로컬 사본 업데이트](#Update-to-new-version-update-your-local-copy)를 잊었을 수 있습니다

## 위의 어떤 방법도 효과가 없는 경우

위의 어떤 방법도 도움이 되지 않으면 apk를 처음부터 빌드하는 것을 고려할 수 있습니다:

1. [설정 내보내기](../Maintenance/ExportImportSettings.md)(휴대폰에 이미 설치된 AAPS 버전에서)

2. 키 비밀번호와 키 저장소 비밀번호를 준비하십시오.

    아니면 그냥 새 키 저장소를 사용하십시오.

3. [여기](#Building-APK-download-AAPS-code)에 설명된 대로 apk를 처음부터 빌드하십시오.

4. apk를 성공적으로 빌드했으면 휴대폰에 있는 기존 apk를 삭제하고, 새 apk를 휴대폰으로 옮겨 설치하십시오.
5. [설정 가져오기](../Maintenance/ExportImportSettings.md)를 다시 하여 목표와 설정을 복원하십시오.
6. 배터리 최적화 옵션을 확인하고 다시 끄십시오.

## 최악의 경우

위 방법으로 빌드 문제가 해결되지 않으면 Android Studio를 완전히 삭제하고 처음부터 다시 빌드해 볼 수 있습니다.  이렇게 하면 빌드 문제가 해결된다는 사용자도 있습니다.  Android Studio를 삭제할 때 Android 사용자 설정은 삭제하지 말고, **Android Studio와 관련된 모든 파일을 반드시 삭제하십시오.** 숨김 파일까지 포함하여 Android Studio를 완전히 제거하지 않으면, 삭제가 기존 문제를 해결하기는커녕 새로운 문제를 일으킬 수 있습니다. 완전히 삭제하는 방법은 인터넷에서 찾을 수 있습니다. 예:

[https://stackoverflow.com/questions/39953495/how-to-completely-uninstall-android-studio-from-windowsv10](https://stackoverflow.com/questions/39953495/how-to-completely-uninstall-android-studio-from-windowsv10).

[여기](#Building-APK-install-android-studio)에 설명된 대로 Android Studio를 처음부터 다시 설치하십시오.
