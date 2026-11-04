(browser-build)=

# 브라우저 빌드

GitHub Actions로 AAPS를 빌드합니다.

**지원되는 최소 AAPS 버전은 3.3.2.1입니다.**

## 다운로드 대신 직접 빌드

**의료기기 관련 규정 때문에 AAPS 앱(apk 파일)은 다운로드할 수 없습니다. 본인이 사용하기 위해 앱을 빌드하는 것은 합법이지만, 다른 사람에게 복사본을 주어서는 안 됩니다!**

자세한 내용은 [FAQ 페이지](../UsefulLinks/FAQ.md)를 참조하십시오.

(Building-APK-without-a-computer)=

## 빌드 방법 선택

빌드에 사용하는 기기에 맞는 방법을 선택하십시오:

### Android 휴대폰에서: AAPS Builder (권장)

설정 페이지가 GitHub에 자신만의 비공개 빌드 저장소를 만드는 과정을 안내합니다. 설치할 것도, 준비 파일도 없으며, 빌드는 매번 직접 시작합니다. 앱은 GitHub에서 직접 다운로드합니다. Google Drive는 선택 사항입니다.

컴퓨터 브라우저에서도 사용할 수 있습니다.

**→ [AAPS Builder로 빌드](BrowserBuildAapsBuilder.md)**

### 컴퓨터 또는 iPhone / iPad에서: fork와 준비 파일

GitHub에서 AAPS 소스 코드의 복사본(fork)을 만들고, 준비 파일로 키 저장소를 만듭니다. 빌드된 앱은 Google Drive에 저장됩니다. 아래의 네 단계를 따르십시오.

```{note}
**이미 fork로 빌드하고 있습니까?** [브라우저로 업데이트](../Maintenance/UpdateBrowserBuild.md)에 설명된 대로 계속 업데이트하거나, AAPS Builder로 전환하십시오. 전환하려면 먼저 fork에서 키 저장소의 복사본을 가져오십시오: [이전 브라우저 빌드에서 전환하는 경우](#aaps-builder-from-fork)를 참조하십시오.
```

브라우저에서 여러 탭을 사용하며 탭 사이를 오가야 합니다. Chrome 예시:

![fork_aaps](../images/Building-the-App/CI/BrowserBuildTabs.png)

```{note}
여러 탭 사이를 오가야 합니다: 탭을 전환할 때 헷갈리지 않도록 모든 탭을 닫은 상태에서 시작하십시오.
```

#### 필요한 것

- 빌드된 앱을 Google Drive에 저장할 수 있도록 **Google 계정**이 필요합니다.
- **GitHub 계정**(무료) – 1단계에서 만듭니다.
- 여러 탭을 한 번에 열어 둘 수 있는 **웹 브라우저**(아래에서는 Chrome을 기준으로 설명합니다).
- **준비 파일을 실행하는 작은 도우미**. 필요한 도우미는 빌드에 사용하는 기기에 따라 다릅니다. 지금은 설치할 것이 없으며, 2단계에서 기기에 맞게 안내합니다:
  - **컴퓨터(Windows / Mac / Linux):** Simple Web Server.
  - **iPhone / iPad:** 추가 앱이 필요 없습니다. 기본 제공 파일 앱과 브라우저를 사용합니다.

#### 단계

브라우저 빌드는 여러 선택으로 이루어져 있습니다. 다음 단계를 순서대로 따르십시오:

1. **[GitHub fork 만들기](BrowserBuildFork.md)** – AAPS 소스 코드의 개인 복사본을 만듭니다.
2. **[서명 키 저장소 만들기](BrowserBuildKeystore.md)** – 가장 중요한 선택입니다: 새 키 저장소를 생성하거나(옵션 1) 기존 키 저장소를 업로드한(옵션 2) 다음, 기기에 맞는 페이지를 따르십시오.
3. **[Google Drive 인증하기](BrowserBuildGoogleDrive.md)** – GitHub가 빌드된 앱을 Google Drive에 저장하도록 허용합니다.
4. **[APK 빌드](BrowserBuildAPK.md)** – GitHub Actions 워크플로를 실행하고 버전과 변형을 선택합니다.

문제가 생기면 **[브라우저 빌드: 문제 해결](../GettingHelp/BrowserBuildTroubleshooting.md)**을 참조하십시오. fork로 하는 선택 작업은 [키 저장소 내보내기](#ci-keystore-export) 또는 [커밋 cherry-pick 하기](#github-cherry-pick)를 참조하십시오.

----

**[1단계 – GitHub fork 만들기](BrowserBuildFork.md)부터 시작하십시오 →**

```{toctree}
:hidden:

AAPS Builder <BrowserBuildAapsBuilder.md>
1단계: fork 만들기 <BrowserBuildFork.md>
2단계: 키 저장소 만들기 <BrowserBuildKeystore.md>
3단계: Google Drive 인증하기 <BrowserBuildGoogleDrive.md>
4단계: APK 빌드 <BrowserBuildAPK.md>
```
