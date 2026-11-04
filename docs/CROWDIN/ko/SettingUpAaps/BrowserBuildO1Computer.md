(aaps-ci-option1-computer)=

# 옵션 1 · 컴퓨터 – 새 키 저장소 생성하기

```{note}
**컴퓨터**(Windows / Mac / Linux)에서 [옵션 1](BrowserBuildO1.md)(새 키 저장소 생성하기)을 진행합니다.
```

## 1. 준비 파일 다운로드하기

:::{include} BrowserBuildDownloadPrep.md
:::

## 2. 로컬 서버를 시작하고 키 저장소 생성하기

컴퓨터 사용(Windows/Mac/Linux 지원)

다음 웹 페이지를 여십시오 [https://simplewebserver.org/download.html](https://simplewebserver.org/download.html)

Simple Web Server를 설치하십시오<br/> Windows 또는 Mac 사용자는 Microsoft Store 또는 Mac App Store에서 설치할 수 있습니다.<br/> 브라우저가 스토어 앱을 열지 물으면 허용하십시오.<br/><br/> ![simple_http_server](../images/Building-the-App/CI/aaps_ci_simple_http_server_store.png)<br/>

Mac의 예:

- get(받기) → install(설치) → open(열기)<br/><br/> ![simple_http_server](../images/Building-the-App/CI/aaps_ci_simple_http_server.png)<br/><br/>

- Get Started(시작하기)를 클릭하십시오<br/><br/> ![simple_http_server](../images/Building-the-App/CI/aaps_ci_simple_http_server_step1.png)<br/><br/>

- New Server(새 서버)를 클릭하십시오<br/><br/> ![simple_http_server](../images/Building-the-App/CI/aaps_ci_simple_http_server_step2.png)<br/><br/>

- Folder Path(폴더 경로)에서 aaps-ci-preparation.html이 있는 폴더를 선택한 다음 Create Server(서버 만들기)를 클릭하십시오.<br/><br/> ![simple_http_server](../images/Building-the-App/CI/aaps_ci_simple_http_server_step3.png)<br/><br/>

- 이 화면이 보이면 서버가 시작된 것입니다.<br/><br/> ![simple_http_server](../images/Building-the-App/CI/aaps_ci_simple_http_server_step4.png)<br/><br/>

- Simple Web Server를 닫지 마십시오. Please switch to your browser and open<br/> [http://127.0.0.1:8080/aaps-ci-preparation.html](http://127.0.0.1:8080/aaps-ci-preparation.html)<br/><br/>

- 이후 단계는 아래 동영상의 1분 37초부터 참조하십시오.

  <!--crowdin: exclude-->
  <div align="center" style="max-width: 360px; margin: auto; margin-bottom: 2em;">
    <div style="position: relative; width: 100%; aspect-ratio: 9/16;">
      <iframe
        src="https://geo.dailymotion.com/player/x9rdrpy.html?video=x9rdrpy&startTime=97&loop=true&mute=true"
        loading="lazy"
        style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
        frameborder="0"
        allowfullscreen>
      </iframe>
    </div>
  </div>

----

**다음: [3단계 – Google Drive 인증하기](BrowserBuildGoogleDrive.md) →**
