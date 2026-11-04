# 명령줄 빌드 안내

```{admonition} For users familiar with the command-line and git
:class: note

AAPS를 빌드하는 가장 간단한 방법은 [브라우저 빌드](./BrowserBuild.md)입니다.
```

Fedora와 Debian Linux에서 테스트했습니다. 다른 시스템도 조금만 조정하면 작동할 것입니다.

## 요구 사항

[이 표](#Building-APK-recommended-specification-of-computer-for-building-apk-file)에서 필요한 최소 Java 버전을 확인하십시오. 시스템 패키지 관리자로 알맞은 OpenJDK 패키지를 설치하십시오. 예를 들어 Debian에서는 패키지 이름이 `openjdk-21-jdk`와 같습니다. 이 패키지에는 `javac`와 `keytool` 실행 파일이 들어 있어야 합니다.

[Android Studio 페이지](https://developer.android.com/studio#command-line-tools-only)에서 *Android Command line tools* 패키지를 다운로드하십시오. Android Studio 자체는 필요하지 않습니다. 이 패키지 설치에 대한 자세한 내용은 [sdkmanager 문서](https://developer.android.com/tools/sdkmanager)에 있습니다. 패키지를 설치한 후 두 개의 [환경 변수](https://developer.android.com/tools/variables) `ANDROID_HOME`과 `PATH`를 직접 설정해야 합니다. 마지막으로 `sdkmanager --licenses`를 실행하여 설치를 마치십시오.

## Gradle wrapper로 AAPS 빌드하기

### 1. AAPS 서명용 Java 키 저장소 파일 만들기

AAPS 서명용 키 저장소 파일이 이미 있으면 그 파일을 다시 사용하십시오.

```sh
keytool -genkeypair -v \
  -keystore aaps-keystore.jks \
  -alias aaps-key \
  -keyalg RSA \
  -keysize 4096 \
  -validity 20000
```

AAPS를 업데이트할 때마다 키 저장소 파일과 암호 문구(passphrase)가 필요합니다.

### 2. AAPS APK 파일 컴파일하기

아직 복제하지 않았다면 [git 저장소](https://github.com/nightscout/AndroidAPS)를 복제(clone)하십시오. AAPS는 최신 안정 버전에 master 브랜치를 사용합니다. 빌드하려는 브랜치/태그에 있는지 확인하십시오.

저장소 안에서 `./gradlew :app:assembleFullRelease`를 실행하십시오. Gradle과 종속 항목을 자동으로 다운로드한 다음 코드를 컴파일합니다. 빌드가 성공하면 `app/build/outputs/apk/full/release/app-full-release-unsigned.apk`에 서명되지 않은 APK가 생깁니다. `$ANDROID_HOME`에 `apksigner` 실행 파일도 설치되었을 것입니다. `PATH`를 다시 업데이트하십시오.

### 3. 서명되지 않은 APK 파일로 서명된 APK 파일 만들기

<!-- Suggest building outside the git repo, to minimize risk of accidental APK commits -->

홈 디렉터리로 이동하여 서명된 APK 파일을 만드십시오:

```sh
apksigner sign \
  --ks path/to/aaps-keystore.jks \
  --ks-key-alias aaps-key \
  --out app-full-release-signed.apk \
  ./AndroidAPS/app/build/outputs/apk/full/release/app-full-release-unsigned.apk
```

이제 설치하거나 업그레이드할 수 있는 `app-full-release-signed.apk`가 준비되었습니다.
