# Wear AAPS 앱 빌드

Wear OS 스마트워치용 **AAPS** 앱(**Wear apk**, `aaps-wear-….apk`)은 **AAPS** 휴대폰 앱과 별개의 설치 파일입니다. 두 앱이 모두 필요합니다: 휴대폰 앱이 루프를 실행하고, 워치 앱은 그 데이터를 표시하며 휴대폰 앱에 명령을 보낼 수 있습니다. 워치 앱은 휴대폰에서 설치합니다. [Wear OS 워치에 AAPS 설정하기](WearOsSmartwatch.md)를 참고하십시오.

두 앱은 다음 조건이 맞을 때만 함께 작동합니다:

- 휴대폰과 워치에 **같은 AAPS 버전**.
- 두 앱의 서명에 **같은 키 저장소** 사용.

이를 확실히 지키는 가장 간단한 방법은 두 앱을 같은 빌드에서 **동시에** 빌드하는 것입니다. 브라우저 빌드는 이것을 자동으로 해 줍니다: 빌드할 때마다 휴대폰 apk와 Wear apk가 함께 만들어집니다. Android Studio나 명령줄을 사용한다면, 휴대폰 apk를 빌드한 바로 다음에 두 번째 단계로 Wear apk를 빌드합니다.

```{note}
휴대폰에서 이미 **AAPS**를 사용하고 있지만 같은 빌드에서 만든 Wear apk가 없습니까? 같은 키 저장소로 두 앱을 다시 빌드하고, 휴대폰 앱도 다시 설치하십시오. 몇 달 뒤에 빌드했거나 다른 Android Studio 버전으로 빌드한 Wear apk는 휴대폰 앱과 호환되지 않을 가능성이 큽니다.
```

## 지원되는 Wear OS 버전

**AAPS**는 **Wear OS 3.0, 3.2 또는 3.5**(Android 11, API 레벨 30) **이상**(Wear OS 4, 5, 6)이 설치된 워치에서 작동합니다. Wear OS 2 워치는 지원되지 않습니다.

```{warning}
AAPS 워치 페이스는 API 레벨 30~33(Wear OS 3.0, 3.2, 3.5, 4)의 Wear OS 스마트워치에서 사용할 수 있습니다.<br>
새로운 Wear OS 버전에서는 AAPS 워치 페이스가 점점 더 작동하지 않습니다. [Wear OS 워치 페이스 변경 사항](#wearos-watchface-changes)과 [Wear OS 5의 제한 사항](#BuildingAapsWearOs-WearOS5)을 참고하십시오.
```

(building-aaps-wear-os-method)=

## 사용하는 빌드 방법으로 Wear apk 받기

[AAPS 빌드](../SettingUpAaps/BuildingAaps.md)에 사용하는 방법의 섹션을 따르십시오.

(building-aaps-wear-os-browser)=

### 브라우저 빌드 (권장)

**따로 할 일이 없습니다.** 모든 브라우저 빌드는 같은 소스와 같은 키 저장소로 두 개의 파일을 만듭니다:

- `aaps-….apk`: 휴대폰 앱.
- `aaps-wear-….apk`: 워치 앱.

Wear apk는 빌드할 때 선택한 [변형](#browserbuild-variant)을 따릅니다: `fullRelease`는 **AAPS Wear** 앱, `aapsclientRelease`는 **AAPSClient Wear** 앱, `pumpcontrolRelease`는 **PumpControl Wear** 앱을 만듭니다. 각 Wear 앱은 짝이 맞는 휴대폰 앱하고만 통신합니다.

Wear apk를 찾는 곳:

- **AAPS Builder**: 빌드 페이지에서 **Artifacts**(아티팩트)까지 아래로 스크롤하여, 휴대폰 앱 옆에 있는 `aaps-wear-….apk`를 다운로드하십시오. [5단계 – 휴대폰에 앱 설치](#aaps-builder-step5)에 나온 그대로입니다. 워치 앱을 휴대폰에서 설치한다면(Wear Installer 2 또는 Easy Fire Tools) **AAPS**를 실행하는 휴대폰에, ADB를 사용한다면 컴퓨터에 다운로드하십시오.

  ![휴대폰 앱과 워치 앱이 있는 Artifacts](../images/Building-the-App/CI/AapsBuilder52_Artifacts.png)

- **Google Drive를 사용하는 fork**: Google Drive에서 `AAPS` 폴더를 연 다음, 빌드한 버전의 폴더를 여십시오. 이 폴더에 휴대폰 apk와 Wear apk가 있습니다. [브라우저 빌드 – 4단계: APK 빌드](#github-build-apk)를 참고하십시오.

  ![Google Drive 위치](../images/update/CI/GitHubActions5.png)

백업할 때 Wear apk를 휴대폰 apk와 함께 보관하십시오. **AAPS Builder**에서는 파일이 빌드 페이지에 14일 동안만 남아 있습니다.

다음: Wear apk를 워치에 설치하십시오. [Wear OS 워치에 AAPS 설정하기](WearOsSmartwatch.md)를 참고하십시오.

(building-aaps-wear-os-android-studio)=

### Android Studio

Wear apk는 휴대폰 apk와 같은 방법으로, 두 번째 서명된 빌드로 만듭니다. 휴대폰 apk를 빌드한 바로 다음에, 같은 Android Studio 버전과 같은 키 저장소로 빌드하십시오.

- [Android Studio 빌드](../SettingUpAaps/ComputerBuild.md) 안내를 따르십시오.
- "Build the AAPS signed apk"(서명된 AAPS apk 빌드)에서 [모듈 선택](#Building-APK-wearapk) 단계에 이르면 반드시 **`AndroidAPS.wear`**를 선택하십시오.

![Wear 모듈](../images/Building-the-App/wear_build1.png)

"**fullRelease**"를 선택하여 **AAPS** Wear apk 파일을 만드십시오.

![Wear 모듈](../images/Building-the-App/wear_build2.png)

원한다면 드롭다운 메뉴에서 대신 **“pumpcontrolRelease”**를 빌드할 수 있습니다. 이 앱으로는 펌프를 원격으로 제어만 할 수 있고, 루프는 사용할 수 없습니다.

다음: Wear apk를 워치에 설치하십시오. [Wear OS 워치에 AAPS 설정하기](WearOsSmartwatch.md)를 참고하십시오.

(building-aaps-wear-os-troubleshooting)=

#### Android Studio 빌드 문제 해결

전체 **AAPS** 앱(사실 모든 서명된 앱)을 빌드하는 과정에서 Android Studio는 같은 폴더에 .json 파일을 만듭니다. 이 파일 때문에 **AAPS** 워치 앱처럼 다음 서명된 앱을 빌드할 때 [커밋되지 않은 변경 사항](#troubleshooting_androidstudio-uncommitted-changes) 오류가 생깁니다. 가장 빠른 해결 방법은 전체 AAPS 앱이 빌드된 폴더로 가는 것입니다. 폴더는 아마 다음과 비슷할 것입니다:

`C:\Users\Your Name\AndroidStudioProjects\AndroidAPS\app\full\release.`

필요 없는 .json 파일을 삭제하거나 폴더 밖으로 옮기십시오. 그런 다음 **AAPS** 워치 앱을 다시 빌드해 보십시오. 그래도 안 되면, 더 자세한 [문제 해결 가이드](../GettingHelp/TroubleshootingAndroidStudio.md)가 문제를 일으키는 파일을 찾는 데 도움이 됩니다. 이 파일은 키 저장소 파일일 수도 있습니다.

(building-aaps-wear-os-cli)=

### 명령줄

[명령줄 빌드 안내](../SettingUpAaps/CLIBuild.md)를 따르고, 같은 키 저장소로 `wear` 모듈에 대해 컴파일 단계와 서명 단계를 반복하십시오:

```sh
./gradlew :wear:assembleFullRelease
```

서명되지 않은 Wear apk는 `wear/build/outputs/apk/full/release/` 아래에 저장됩니다. 휴대폰 apk와 똑같이 `apksigner`로 서명한 다음 워치에 설치하십시오. [Wear OS 워치에 AAPS 설정하기](WearOsSmartwatch.md)를 참고하십시오.
