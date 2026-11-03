# AAPS 빌드

## 다운로드 대신 직접 빌드

**의료기기 관련 규정 때문에 AAPS 앱(apk 파일)은 다운로드할 수 없습니다. 본인이 사용하기 위해 앱을 빌드하는 것은 합법이지만, 다른 사람에게 복사본을 주어서는 안 됩니다!**

자세한 내용은 [FAQ 페이지](../UsefulLinks/FAQ.md)를 참조하십시오.

---

AAPS 앱을 빌드하는 방법은 세 가지가 있습니다:

### 브라우저로 빌드 (권장)

GitHub Actions를 사용하여 웹 브라우저에서 앱을 빌드할 수 있습니다. Android 휴대폰에서는 [AAPS Builder](#aaps-builder) 설정 페이지가 과정을 안내하며, 빌드는 매번 직접 시작합니다. 컴퓨터나 iPhone에서는 fork로 빌드하고 앱을 Google Drive에 저장할 수도 있습니다.

**[다음 안내를 따르십시오.](./BrowserBuild.md)**

----

### Android Studio로 빌드

컴퓨터에서 Android Studio를 사용하여 앱을 빌드할 수 있습니다. 예전에는 이것이 유일한 빌드 방법이었습니다. 지금은 주로 코드를 변경하려는 개발자가 Android Studio를 사용합니다.

**[다음 안내를 따르십시오.](./ComputerBuild.md)**

----

### 명령줄로 빌드

이 방법은 Android Studio를 설치하지 않고 로컬 명령줄에서 AAPS를 빌드하려는 사용자를 위한 것입니다.

**[다음 안내를 따르십시오.](./CLIBuild.md)**

----

(building-aaps-troubleshooting)=
## 빌드가 실패하는 경우

빌드 방법마다 별도의 문제 해결 섹션이 있습니다:

* **AAPS Builder**: [AAPS Builder 문제 해결](#aaps-builder-troubleshooting)
* 컴퓨터나 iPhone에서 하는 **브라우저 빌드**: [브라우저 빌드 문제 해결](#aaps-ci-troubleshooting)
* **Android Studio**: [Android Studio 문제 해결](../GettingHelp/TroubleshootingAndroidStudio.md)

키 저장소나 그 비밀번호를 잃어버렸습니까? [새 키 저장소로 AAPS 재설치하기](#reinstall-aaps)를 보십시오.

앱은 빌드되었지만 휴대폰에 설치되지 않으면 [AAPS 전송 및 설치](TransferringAndInstallingAaps.md)를 참조하십시오.

문제가 여기에 없으면 [어디에서 도움을 받을 수 있습니까?](../GettingHelp/WhereCanIGetHelp.md)를 참조하십시오.
