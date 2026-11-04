# Android Studio로 업데이트

## 다운로드 대신 직접 빌드

**AAPS**는 의료기기 관련 규정 때문에 다운로드할 수 없습니다. 본인이 사용하기 위해 앱을 빌드하는 것은 합법이지만, 다른 사람에게 복사본을 주어서는 안 됩니다! 자세한 내용은 [FAQ 페이지](../UsefulLinks/FAQ.md)를 참조하십시오.

```{note}
새 컴퓨터에서 **AAPS**를 빌드하려면 백업해 둔 키 저장소 파일을 새 컴퓨터로 복사하십시오. 그런 다음 이 안내 대신 [**AAPS** 첫 빌드 절차](../SettingUpAaps/BuildingAaps.md)를 따르십시오. 다른 점은 하나뿐입니다. 새 키 저장소를 만드는 대신 새 컴퓨터에 복사해 둔 키 저장소를 선택할 수 있습니다.
```

## Android Studio로 AAPS 새 버전으로 업데이트하는 과정 개요

```{contents} Steps for updating to a new version of AAPS
:depth: 1
:local: true
```

문제가 생기면 별도의 [Android Studio 문제 해결](../GettingHelp/TroubleshootingAndroidStudio.md) 페이지를 참조하십시오.

### 설정 내보내기

휴대폰에 있는 기존 **AAPS** 버전에서 설정을 내보내십시오. 필요하지 않을 수도 있지만, 만일을 위해 해 두는 것이 좋습니다.

방법이 기억나지 않으면 [백업 만들기와 복원하기](ExportImportSettings.md) 페이지를 참조하십시오.

### Android Studio 버전 확인

필요한 최소 버전은 [빌드 안내](#Building-APK-recommended-specification-of-computer-for-building-apk-file)에 설명되어 있습니다. 사용 중인 버전이 더 오래되었다면 [먼저 Android Studio를 업데이트하십시오](#Building-APK-install-android-studio)!

(Update-to-new-version-update-your-local-copy)=
### 로컬 복사본 업데이트

* Android Studio에서 기존 AAPS 프로젝트를 여십시오. 프로젝트를 선택해야 할 수도 있습니다. AAPS 프로젝트를 (더블) 클릭하십시오.

  ![Android Studio - 프로젝트 선택](../images/update/01_ProjectSelection.png)

* Android Studio의 메뉴 표시줄에서 Git -> Fetch를 선택하십시오.

   ![Android Studio 메뉴 - Git - Fetch](../images/update/02_GitFetch.png)

* 오른쪽 아래에 Fetch가 성공했다는 메시지가 표시됩니다.

   ![Android Studio 메뉴 - Git - Fetch 성공](../images/update/03_GitFetchSuccessful.png)

* 이제 메뉴 표시줄에서 Git -> Pull을 선택하십시오.

   ![Android Studio 메뉴 - Git - Pull](../images/update/04_GitPull.png)

* 모든 옵션은 그대로(origin/master) 두고 Pull을 선택하십시오.

   ![Android Studio - Git - Pull 대화 상자](../images/update/05_GitPullOptions.png)

* 다운로드가 진행되는 동안 기다리십시오. 진행 상황은 아래쪽 바에 정보로 표시됩니다. 다운로드가 끝나면 성공 메시지가 표시됩니다.

  ```{note}
  업데이트된 파일은 다를 수 있습니다! 문제가 있다는 뜻은 아닙니다.
  ```

   ![Android Studio - Pull 성공](../images/update/06_GitPullSuccess.png)

* 일부 종속 항목을 다운로드하기 위해 Gradle Sync가 실행됩니다. 끝날 때까지 기다리십시오.

  ![Android Studio - Gradle Sync](../images/studioSetup/40_BackgroundTasks.png)

### JVM 버전 확인

같은 컴퓨터에서 이전 버전의 **AAPS**를 이미 빌드한 적이 있다면 특히 이 확인이 필요합니다.

[빌드 안내](#Building-APK-recommended-specification-of-computer-for-building-apk-file)에서 지금 빌드하는 **AAPS** 버전에 맞는 JVM 버전을 확인하십시오. 그런 다음 [Incompatible Gradle JVM](#incompatible-gradle-jvm)에 설명된 단계를 따라 현재 올바른 버전을 사용하고 있는지 확인하십시오.

(Update-to-new-version-build-the-signed-apk)=
### 서명된 APK 빌드

이제 소스 코드는 현재 릴리스 버전이며, 모든 전제 조건을 확인했습니다. 이제 [서명된 APK 빌드 섹션](#Building-APK-generate-signed-apk)에 설명된 대로 서명된 APK를 빌드할 차례입니다.

(Update-to-new-version-transfer-and-install)=

### APK 전송 및 설치
APK를 설치하려면 휴대폰으로 전송해야 합니다.

```{note}
Android Studio에서 기존과 같은 키 저장소로 빌드했다면 휴대폰의 기존 앱을 삭제할 필요가 없습니다. APK를 설치할 때 안내에 따라 업데이트를 설치하십시오.
서명된 APK를 위해 Android Studio에서 새 키 저장소를 만든 경우처럼 다른 상황에서는 APK를 설치하기 전에 이전 앱을 삭제해야 합니다. **반드시 설정을 내보내십시오!**
```

[AAPS 전송 및 설치](../SettingUpAaps/TransferringAndInstallingAaps.md) 안내를 참조하십시오. Google의 [Android 개발자 인증](#android-developer-verification)이 적용되는 곳에서는(국가에 따라 2026년 9월부터) APK 파일을 눌러 설치하는 대신 [ADB](#android-developer-verification-adb)로 설치하십시오.

[여기](#Update-to-new-version-check-aaps-version-on-phone)에서 계속하십시오.

(update-computer-build-troubleshooting)=

## Troubleshooting

문제가 생겨도 당황하지 마십시오.

숨을 한 번 고르십시오!

그런 다음 문제가 이미 별도의 [Android Studio 문제 해결](../GettingHelp/TroubleshootingAndroidStudio.md) 페이지에 설명되어 있는지 확인하십시오.

더 도움이 필요하면 [Facebook](https://www.facebook.com/groups/AndroidAPSUsers) 또는 [Discord](https://discord.gg/4fQUWHZ4Mw)에서 다른 **AAPS** 사용자에게 문의하십시오.