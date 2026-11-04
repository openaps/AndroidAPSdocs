# Diaconn G8

```{contents} Table of contents
:depth: 1
:local: true
```

## AAPS에서 사용할 수 있는 펌프 기능

* 추가 통신 장치 없이 휴대폰의 자체 블루투스로 **AAPS**와 통신합니다.
* 서머타임(DST)과 시간대 변경은 수동으로 처리해야 합니다.

## 인슐린 펌프 블루투스 페어링

- 왼쪽 위의 **메뉴**(☰)를 누르십시오.

![구성 항목이 있는 메뉴](../images/v4/Configuration/configuration_menu.png)

- **구성** > **펌프**를 누르고 **디아콘 G8**을 선택하십시오.

![Diaconn G8 플러그인이 있는 구성 > 펌프](../images/v4/Configuration/configuration_pump_list_3.png)

선택하면 **디아콘 G8** 카드에 **설정**과 **플러그인 열기** 두 버튼이 표시됩니다:

![구성 > 펌프에서 선택된 Diaconn G8 플러그인](../images/v4/Pumps/diaconn_g8_enabled.png)

**설정**은 Diaconn G8 드라이버의 설정을 엽니다(아래 [Diaconn G8 인슐린 펌프 옵션 설정](#diaconn-g8-insulin-pump-option-setting) 참조).

**플러그인 열기**(또는 **관리** > **펌프**)는 Diaconn G8 펌프 화면을 엽니다. 펌프를 페어링하기 전에는 다음과 같이 보입니다:

![페어링 전의 Diaconn G8 펌프 화면](../images/v4/Pumps/diaconn_g8_pump_screen.png)

![이미지](../images/DiaconnG8/DiaconnG8_04.jpg)

```{admonition} Older screenshot
:class: note
위 스크린샷은 이전 **AAPS** 버전의 것입니다. **AAPS** 4에서는 펌프 화면의 **페어링** 버튼으로 페어링을 시작합니다. **선택된 펌프** 설정은 없습니다.
```

- 펌프 화면에서 **페어링**을 누르십시오. **디아콘 펌프 페어링** 화면이 열리고 **AAPS**가 주변의 펌프를 검색합니다.
- 목록에 인슐린 펌프의 모델 번호가 나타나면 누르십시오(예: **DIACONN-65010**).

![펌프를 검색 중인 Diaconn 펌프 페어링 화면](../images/DiaconnG8/DiaconnG8_05.png)

- 모델 번호를 확인하는 방법은 두 가지가 있습니다:

1. 펌프 뒷면에 있는 SN 번호의 마지막 5자리.
2. O 버튼 > Information > BLE > 마지막 5자리 순서로 누르십시오.

![이미지](../images/DiaconnG8/DiaconnG8_06.jpg)

- 펌프를 선택하면 PIN 코드를 묻는 창이 나타납니다. 연결을 완료하려면 펌프에 표시된 PIN 번호를 입력하십시오.

 ![이미지](../images/DiaconnG8/DiaconnG8_07.jpg)

- **페어링 성공!**이 표시되면 **확인**을 눌러 펌프 화면으로 돌아가십시오.

## 펌프 상태 확인 및 로그 동기화

- 펌프가 연결되면 펌프 화면(**관리** > **펌프**)을 여십시오. 펌프 상태(배터리, 레저버, 마지막 연결, 마지막 볼러스, 기저 주입량 등)가 표시됩니다.
- **새로고침**을 누르면 펌프에 연결하여 상태를 업데이트하고 로그를 동기화합니다.
- 펌프에서 읽은 이력을 보려면 **펌프 이력**을 누르십시오.

![이미지](../images/DiaconnG8/DiaconnG8_08.jpg)

```{admonition} Older screenshot
:class: note
위 스크린샷은 이전 **AAPS** 버전의 것입니다. **AAPS** 4에서는 펌프 상태가 펌프 화면(**관리** > **펌프**)에 표시되고 **새로고침** 버튼으로 동기화됩니다.
```

(diaconn-g8-bluetooth-troubleshooting)=

## 블루투스 문제 해결

**펌프와의 블루투스 연결이 불안정할 때 해야 할 일.**

### 방법 1) AAPS를 다시 시작한 후 펌프를 다시 확인하십시오

- 왼쪽 위의 **메뉴**(☰)를 누르십시오.
- 메뉴 아래쪽의 **종료**를 누르십시오.

![아래쪽에 종료 항목이 있는 메뉴](../images/v4/Configuration/configuration_menu.png)

- **AAPS**를 다시 시작하고 펌프 연결을 확인하십시오.

### 방법 2) 첫 번째 방법으로 해결되지 않으면 블루투스 연결을 끊은 후 다시 연결하십시오.

- 위쪽에 있는 블루투스 버튼을 약 3초 동안 길게 누르십시오.

![이미지](../images/DiaconnG8/DiaconnG8_11.jpg)

- 페어링된 Diaconn G8 인슐린 펌프의 설정 버튼을 누르십시오.

![이미지](../images/DiaconnG8/DiaconnG8_12.jpg)

- 페어링을 해제하십시오.

![이미지](../images/DiaconnG8/DiaconnG8_13.jpg)

- **AAPS**에서 펌프 화면(**관리** > **펌프**)을 열고 **페어링 해제**를 누른 다음 **페어링 정보를 초기화하시겠습니까?**를 확인하십시오.
- 펌프의 블루투스 페어링 과정을 다시 진행하십시오(위 참조).

## 추가 정보

(diaconn-g8-insulin-pump-option-setting)=

### Diaconn G8 인슐린 펌프 옵션 설정

- **구성** > **펌프** > **디아콘 G8** > **설정**
- 또는 펌프 화면(**관리** > **펌프**)에서 오른쪽 위의 설정 아이콘(톱니바퀴)을 누르십시오.

![Diaconn G8 드라이버 설정](../images/v4/Pumps/diaconn_g8_settings.png)

- **볼러스 주입 속도**는 펌프가 볼러스를 주입하는 속도를 정합니다.
- **레저버 교체 기록** 옵션을 활성화하면 "인슐린 교체" 이벤트가 발생할 때 관련 내용이 케어포털에 자동으로 업로드됩니다.
- **바늘 교체 기록** 옵션을 활성화하면 "위치 변경" 이벤트가 발생할 때 관련 내용이 케어포털에 자동으로 업로드됩니다.
- **튜브 교체 기록** 옵션을 활성화하면 "튜브 교체" 이벤트가 발생할 때 관련 내용이 노트로 자동 추가됩니다.
- **배터리 교체 기록** 옵션을 활성화하면 "배터리 교체" 이벤트가 발생할 때 관련 내용이 케어포털에 자동으로 업로드됩니다. **관리** > **펌프 배터리 교체**로 배터리 교체를 직접 기록할 수도 있습니다. (참고: 배터리를 교체하려면 먼저 진행 중인 모든 주입 기능을 멈추십시오.)
- **Diaconn Cloud 동기화**는 펌프 로그를 Diaconn Cloud로 보냅니다.

![Diaconn G8 동작 메뉴](../images/DiaconnG8/DiaconnG8_15.jpg)

```{admonition} Older screenshot
:class: note
위 스크린샷은 이전 **AAPS** 버전의 것입니다. **AAPS** 4에서는 배터리 교체를 **관리** > **펌프 배터리 교체**로 기록합니다. **동작** 탭은 없습니다.
```

### 확장 볼러스 기능

- 확장 볼러스를 사용하면 폐쇄 루프가 비활성화됩니다.
- 확장 볼러스가 폐쇄 루프 환경에서 작동하지 않는 이유는 [이 페이지](#extended-bolus-and-why-they-wont-work-in-closed-loop-environment)를 참조하십시오.

## 도움을 받을 수 있는 곳

Diaconn G8 드라이버는 커뮤니티가 **자원봉사**로 개발합니다. 도움을 요청하기 전에:

1. 기능이 어떻게 작동해야 하는지 확인하려면 이 문서의 관련 부분을 **읽으십시오**.
2. [Discord](https://discord.gg/4fQUWHZ4Mw)의 *#AAPS* 채널이나 다른 [커뮤니티 채널](../GettingHelp/WhereCanIGetHelp.md)에서 **질문하십시오**.
3. [기존 이슈](https://github.com/nightscout/AndroidAPS/issues)를 검색하여 **버그를 보고하십시오**. 목록에 없으면 [새 이슈](https://github.com/nightscout/AndroidAPS/issues)를 열고 [로그 파일](../GettingHelp/AccessingLogFiles.md)을 첨부하십시오.

도움을 요청할 때는 휴대폰 제조사와 모델, Android 버전, **AAPS** 버전, 그리고 문제를 쉬운 말로 설명한 내용(무엇이 바뀌었는지, 마지막으로 정상 작동한 때가 언제인지)을 포함하십시오.
