# **Freestyle Libre 3** 및 3+

Freestyle Libre 3 (FSL3)의 혈당 값을 AAPS로 받으려면 특별한 설정이 필요합니다. Freestyle Libre 3 (FSL3) 값을 AAPS로 가져오는 방법은 두 가지가 있습니다.

![FL3](../images/d912c1d3-06d2-4b58-ad7c-025ca1980fae.jpeg)

아래 방법은 모두 별도의 앱인 Juggluco를 사용합니다. Juggluco로 센서에서 1분 간격의 원시 데이터를 받고, 이 데이터를 xDrip 또는 AAPS로 보냅니다. 새 센서는 Libre 3 앱으로 시작하거나 Juggluco에서 직접 시작할 수 있습니다. 아래 안내는 Juggluco 앱으로 센서를 시작하는 방법을 설명합니다. 센서를 Libreview 계정에 로그인한 상태에서 시작했다면, 수신 앱을 Juggluco와 Libre 3 앱 사이에서 바꿀 수도 있습니다.

센서를 Libre 3 앱으로 시작한 경우, Juggluco는 의료진과 공유할 수 있도록 데이터를 LibreView로 보낼 수도 있습니다.

xDrip에서는 혈당 측정기 값과 센서 측정값의 차이를 보정하기 위해 센서를 -40 mg/dL에서 +20 mg/dL(-2.2 mmol/L에서 +1.1 mmol/L) 범위에서 보정할 수 있습니다.

## 방법 1: 1분 측정값을 직접 사용하기
**AAPS**는 5분 측정값에 맞게 만들어져 있습니다. 따라서 1분 값을 처리할 때 가끔 제한이 있습니다.

[여기](#juggluco-to-aaps)를 참조하십시오.


## 방법 2: xDrip으로 1분 측정값을 5분 값으로 변환하기
이 방법은 Juggluco로 센서에서 1분 간격의 원시 데이터를 받고, 이 데이터를 xDrip으로 보내 5분 간격 데이터로 평활화한 다음 AAPS로 보냅니다.

### 1단계: Juggluco 설정
[여기](https://www.juggluco.nl/Juggluco/download.html)에서 Juggluco 앱을 다운로드하여 설치하십시오. [여기](https://www.juggluco.nl/Juggluco/libre3/)의 안내를 따르십시오

혈당 값을 xDrip으로 보내도록 설정하십시오: Juggluco 설정에서 혈당 값을 다른 앱으로 보내도록 설정할 수 있습니다. Juggluco는 세 가지 종류의 broadcast를 보낼 수 있습니다: **Patched Libre broadcast**는 원래 패치된 Librelink 앱이 사용하던 방식이며, 혈당 값을 xDrip으로 보내는 데 사용할 수 있습니다.

### 2단계: xDrip 설정

혈당 값은 스마트폰의 xDrip 앱이 받습니다.

- 아직 설정하지 않았다면 [xDrip](https://github.com/NightscoutFoundation/xDrip)을 다운로드하고 [xDrip 설정 페이지](../CompatibleCgms/xDrip.md)의 안내를 따르십시오.
- xDrip에서 데이터 소스로 "Libre2 (patched app)"를 선택하십시오.
- 필요하면 Less Common Settings → Extra Logging Settings → Extra tags for logging에 "BgReading:d,xdrip libre_receiver:v"를 입력하십시오. 이렇게 하면 문제 해결을 위한 추가 오류 메시지가 기록됩니다.

![xDrip LibreLink 로그 기록](../images/Libre2_Tags.png)

- 기술적으로는 현재 혈당 값이 1분마다 xDrip으로 전송됩니다. 가중 평균 필터가 기본적으로 지난 25분 동안의 값으로 평활화된 값을 계산합니다. 이 기간은 NFC Scan features 메뉴에서 바꿀 수 있습니다.

  → 햄버거 메뉴 → Settings → NFC Scan features → Smooth libre 3 data when using xxx method

  ![xDrip 고급 설정 Libre 2 및 원시 값](../images/xDrip_Libre3_Smooth.png)



### 3단계: xDrip에서 센서 시작

xDrip에서 "Start Sensor"와 "not today"로 센서를 시작하십시오. 휴대폰을 센서에 갖다 댈 필요는 없습니다. 실제로 "Start Sensor"는 Libre 3 센서를 물리적으로 시작하지 않으며, 어떤 경우에도 센서와 통신하지 않습니다. 이것은 단지 xDrip에 새 센서가 혈당 값을 보내고 있다는 것을 알리기 위한 것입니다. 가능하면 처음 보정을 위해 혈액으로 측정한 값 두 개를 입력하십시오. 이제 xDrip에 혈당 값이 5분마다 표시되어야 합니다. 예를 들어 휴대폰에서 너무 멀리 떨어져 있어서 빠진 값은 나중에 채워지지 않습니다.

그래도 데이터가 없으면 최소 15~20분 기다리십시오.

센서를 교체하면 xDrip이 새 센서를 자동으로 감지하고 모든 보정 데이터를 삭제합니다. 활성화 후 혈당을 확인하고 처음 보정을 다시 할 수 있습니다.

### 4단계: AAPS 설정

- [여기](#juggluco-to-xdrip)를 참조한 후 다시 돌아오십시오.

- 휴대폰이 비행기 모드일 때 **AAPS**가 혈당 값을 받지 못하면 "Identify receiver"를 사용하십시오
- 평활화를 끄십시오(xDrip에서 이미 평활화합니다)

## 이후의 센서 교체

1. Juggluco를 열고 현재 센서의 일련번호를 기록하십시오

![Libre 일련번호](../images/libre3/step_13.jpg)

2. 이제 휴대폰의 NFC 리더로 새 센서를 스캔하기만 하면 됩니다. 과정이 성공적으로 시작되면 Juggluco가 알림을 표시합니다.
3. 이전 센서를 비활성화할 준비가 되면, 화면 왼쪽 위의 빈 공간 아무 곳이나 눌러 Juggluco 메뉴를 여십시오.
4. 만료된 센서를 선택하고 "Terminate"를 누르십시오

![센서 종료](../images/libre3/step_14.jpg)

참고: 두 센서가 활성 상태이면 Juggluco는 두 센서 중 가장 최근 값을 xDrip으로 보냅니다. 센서들이 혈당을 비슷하게 측정하도록 보정되지 않으면, xDrip에 혈당 값이 들쭉날쭉하게 보고될 수 있습니다. 잘못된 센서를 종료한 경우, 그 센서를 다시 스캔하기만 하면 다시 활성화할 수 있습니다.

## Libre 3 앱과 Juggluco 앱 사이에서 센서 전환하기

센서를 Libreview 계정에 로그인한 상태에서 시작했다면, 수신 앱을 Juggluco와 Libre 3 앱 사이에서 바꿀 수도 있습니다. 다음 단계가 필요합니다:

1. Google Play 스토어에서 Libre 3 앱을 설치하십시오
2. 센서를 활성화할 때 사용한 Libreview 계정으로 Libre 3 앱을 설정하십시오.
3. Android 설정에서 Juggluco 앱을 강제 중지하십시오.
4. Libre 3 메뉴에서 "Start Sensor"를 누르고, "Yes", "Next"를 선택한 다음 센서를 스캔하십시오.
5. 몇 분 후 Libre 3 앱에 혈당 값이 표시되어야 합니다.

Libre 3 앱에서 Juggluco로 바꾸려면 Android 설정에서 Libre 3 앱을 강제 중지한 다음 1단계 & 2단계를 진행하십시오.

(libre3-experiences-and-troubleshooting)=
## 경험 및 문제 해결

### Libre3 -> Juggluco 연결 문제 해결

- 최신 버전의 Juggluco 앱을 사용하고 있는지 확인하십시오
- 이 안내에 따라 설정을 확인하십시오
- 때때로 Libre 3 앱과 Juggluco를 강제 중지한 후 다시 시작해야 할 수 있습니다.
- Bluetooth를 껐다가 다시 켜십시오
- 잠시 기다리거나 Juggluco를 닫아 보십시오
- 이전 버전의 Juggluco(2.9.6 미만)는 Libre3 센서의 이후 데이터를 연결된 기기(예: WearOS의 Juggluco)로 보내지 않습니다. 패치된 Libre3 앱(Juggluco 메뉴)에서 "Resend data"를 눌러야 할 수 있습니다.

### 추가 도움말

원래 안내: [jkaltes 웹사이트](https://www.juggluco.nl/Juggluco/libre3/)

추가 GitHub 저장소: [GitHub 링크](https://github.com/maheini/FreeStyle-Libre-3-patch)
