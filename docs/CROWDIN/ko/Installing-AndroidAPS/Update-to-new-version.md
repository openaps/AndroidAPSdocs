# 새로운 버젼 또는 브랜치 업데이트

## 다운로드 대신에 당신 스스로 빌드하세요

**AndroidAPS는 의료기기 규정 때문에 다운로드 가능하지 않습니다. 당신 스스로 사용하기 위해 앱을 빌드하는 것은 합법입니다. 그러나 빌드 복사본을 다른 사람과 공유하시면 안됩니다! 세부사항은 [FAQ 페이지](../Getting-Started/FAQ.md)를 참고하세요**

## 중요사항

* Please update as soon as possible after a new release is available. You will receive an [information on the AndroidAPS home screen](../Installing-AndroidAPS/Releasenotes.html#release-notes) about the new version.
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
  
  ![안드로이드 스튜디오-GIT-Pull](../images/Update_Pull.png)

* 풀을 클릭 (대화 상자 필드의 변경사항 없음)
  
  ![안드로이드 스튜디오-GIT-Pull 2](../images/Update_Pull2.png)

## 서명된 Apk파일 설치하기

<!--- Text is maintained in page building-apk.md ---> 메뉴에서 "Build"를 선택 후 "Generate Signed Bundle / APK..."를 선택합니다. (Android 스튜디오의 메뉴는 2018년 9월에 변경되었습니다. 구버전에서는 메뉴에서 “Build” 선택 후 “Generate Signed APK...” 선택합니다.)

서명은 당신이 빌드한 앱에 싸인하는 것을 의미하는 것이지 앱 자체에 일종의 디지털 지문으로 서명하는 디지털방식을 의미하는 것은 아닙니다. 그 과정은, Android가 보안적인 이유로 서명된 코드만을 받아들여야 하기 때문에, 필요합니다. 이것에 관한 추가적인 정보는 여기 링크를 여세요. 보안은 복잡한 문제이지만, 이번에 필요로 하지는 않습니다.

![Screenshot 39a](../images/Installation_Screenshot_39a.PNG)

다음의 대화박스에서 "Android App Bundle" 대신에 “APK”를 선택하시고, "Next"를 클릭하세요.

![Screenshot 39b](../images/Installation_Screenshot_39b.PNG)

"app"을 선택하시고 "Next"를 클릭하세요.

![Screenshot 40](../images/Installation_Screenshot_40.png)

Key store 경로를 입력하고 key store의 비밀번호를 입력한 다음, 그 별칭을 선택한 후 비밀번호를 입력하세요

'암호 기억' 을 선택하세요

Next를 클릭하십시오.

![Key store 경로](../images/KeystorePathUpdate.PNG)

생성될 앱에 대한 설정으로 "full" (혹은 "fullRelease")를 선택하세요. V1 "Jar Signature" 선택하시고 (V2은 선택사항), "Finish"를 클릭하세요. 다음 정보는 나중 사용을 위해 중요할 수도 있습니다.

* ○'릴리스' 는 "빌드 유형" 에 대한 선택사항이어야 하며, '디버그' 는 코딩을 위한 것입니다.
* ○원하는 빌드유형을 선택하기 
  * Full/ Fullrelease (clised loop 에서 자동으로 권장)
  * openloop(수동모드 사용자를 위한 권장사항)
  * pumpcontrol (예. loop 사용없이 펌프만 조종할때)
  * nsclient (다른 사용자의 loop data가 표시되고 캐탈포털 항목이 추가될 수 있음)

![Screenshot 44](../images/Installation_Screenshot_44.png)

이벤트로그에서 당신은 서명된 APK가 성공적으로 생성되었음을 확인할 것입니다.

![Screenshot 45](../images/Installation_Screenshot_45.png)

이벤트로그에서 "locate"링크를 클릭하세요

![Screenshot 46](../images/Installation_Screenshot_46.png)

## 스마트폰에 apk파일을 보내기.

**폰에서 현재 사용중인 AAPS 버전에서 [설정 저장하기](../Usage/ExportImportSettings#how-to-export-settings)하여 설정파일을 저장합니다.**

<!--- Text is maintained in page building-apk.md ---> 윈도우 파일매니져 열립니다. 필자는 리눅스를 사용하므로 당신의 시스템과는 다소 차이가 있을 수 있습니다. 윈도우 상에서는 파일 익스플러러가 있을 것이며, Mac상에서는 X the Finder가 있을 것입니다. 그곳에서, 생성된 APK파일이 있는 디렉토리를 찾아야 합니다. 불행히도 아래 사진의 폴더는 "wear-release.apk"가 우리가 찾을 서명된 "app" APK가 아니기 때문에 잘못된 위치입니다. 

![Screenshot 47](../images/Installation_Screenshot_47.png)

"app-full-release.apk"을 찾기 위해, AndroidAPS/app/full/release 디렉토리로 바꿔주세요. 이 파일을 안드로이드 폰으로 전송하세요. 원하는 방법으로 다음을 수행할 수 있습니다.

* 블루투스
* 클라우드 업로드 (Google Drive 또는 기타 클라우드 서비스)
* 케이블을 통해 컴퓨터 및 전화를 연결합니다. 
* 메일로 (일부 메일 애플리케이션에서는 첨부를 허용하지 않습니다. 이 경우에는 다른 전송 방법을 사용하십시오.)

이것의 예로 Gmail이 꽤나 간편하게 사용됩니다. 대체로 금지돼 있으나 이 파일이 Gmail을 통해 받아지더라도, 자가 서명된 앱을 설치하기 위해 당신의 스마트폰에서 Android를 허용해주셔야 합니다. 만일 파일을 전송할 다른 수단이 있다면, 그 방법에 따르시면 됩니다.

![Screenshot 48](../images/Installation_Screenshot_48.png)

스마트폰 설정의 “출처를 알수 없는 앱 설치”에서, Gmail에서 받은 APK 파일들을 설치할 수 있도록 Gmail의 권한을 활성화시켜줍니다. 

“이 출처 허용” 선택해 주세요 설치가 끝난 후, 이전의 권한 설정 및 출처허용이 불가능하도록 되돌릴 수 있습니다.

![Installation from unknown sources](../images/Installation_Screenshot_49-50.png)

마지막 단계는 Gmail을 통해 받은 APK 파일을 누르고, 앱을 설치하는 것입니다. 만일 APK가 설치되지 않았고 당신의 폰에 다른 Key로 서명된 이전버전의 AndroidAPS가 있다면, 반드시 이전 버전 앱의 세팅을 내보내기하고 해당 앱을 삭제해야합니다.

이해하셨나요? 이후 연속혈당측정기와 펌프 등.. 연동을 위한 AndroidAPS 설정을 시작할 수 있습니다. 

## 폰에있는 AAPS 버전 확인하기.

오른쪽 위에 있는 세 개의 점 메뉴를 클릭하면 AAPS 버전을 확인할 수 있습니다.

![AAPS 버전 설치됐습니다](../images/Update_VersionCheck.png)

## 문제해결

별도의 [Android Studio 문제해결](../Installing-AndroidAPS/troubleshooting_androidstudio.rst) 페이지를 보세요.