(Accessing-logfiles-accessing-logfiles)=

# 로그파일 접근하기

* 폰을 파일 전송모드로 컴퓨터와 연결합니다
* AAPS 데이터 디렉터리의 `Android\data\info.nightscout.androidaps\files`에서 로그 파일을 찾으십시오.  
    루트 저장소 폴더의 이름은 휴대폰에 따라 조금 다를 수 있습니다.
* [AAPSClient](#RemoteControl_aapsclient)의 경우 위치는 `Android\data\info.nightscout.aapsclient\files`입니다.
* 참고: 로그 위치는 **AAPS 3.3**에서 바뀌었습니다. 필요하면 이전 버전의 문서를 참조하십시오.

![logs](../images/aapslog.png)

* 현재 로그는 .log 파일입니다. Android Studio의 [LogCat](https://developer.android.com/studio/debug/am-logcat.html), 아무 Android 로그 뷰어 앱, 또는 일반 텍스트 등 여러 방법으로 볼 수 있습니다. 
* Previous log files are zipped and stored in folders in date/time order. 
* 발생 가능한 버그에 대해 이야기하려고 [discord](https://discord.gg/4fQUWHZ4Mw)에서 로그 파일을 공유하는 경우, 압축을 풀고 오류가 발생하기 전 날짜의 파일을 올리십시오.