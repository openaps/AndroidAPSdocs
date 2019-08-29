# 아큐첵 인사이트 펌프(Accu-Chek Insight Pump)

**이 소프트웨어는 DIY 인공 췌장 솔루션의 일부이며 판매용 제품이 아닙니다. 하지만 사용법을 읽고 배우고 이해 하셔야합니다. 이 소프트웨어는 당뇨관리를 대신 해주는 것은 아니지만, 시간을 들여 숙지하신 후 용하신다면 당뇨관리를 용이하게 도와주며 삶의 질을 향상시키는데 큰 도움을 줍니다. 성급하게 생각하지 마시고, 사용법을 숙지하시기를 권장합니다. 서용자가 소프트웨어 활용과 관련하여 대한 책임을 집니다.**

* * *

## ***주의**: 만약 이 전에 Insight를 **SightRemote**와 같이 사용하셨을 경우, **최신 AAPS버전으로업데이트** 해주시고 **SightRemote를 삭제**해주시기 바랍니다.*

## 하드웨어와 소프트웨어의 필요 요건

* 로슈 아큐-첵 Insight 펌프 (모든 펌웨어 작동 가능) <br /> 주의: AAPS는 항상 펌프의 첫번째 Basal 프로파일로** 데이터를 기록합니다.**
* 안드로이드 폰(모든 안드로이드 버젼에서 작동하지만, Android APS는 안드로이드 5 (Lollipop) 이상이 필요합니다.)
* AndroidAPS앱을 핸드폰에 설치해주시기 바랍니다.

## 설정

* Insight 펌프는 한 번에 한 개의 장치에만 연결해야합니다. 전에 Insight Remote Control(Meter)를 연결하여 사용하신 적이 있으시다면, 연결 목록에서 Meter를 삭제해주셔야 합니다: 메뉴 > 세팅 > 연결 > 장치 제거
    
    ![Screenshot of Remove Meter Insight](../images/Insight_RemoveMeter.png)

* AndroidAPS 앱의 [구성관리자](../Configuration/Config-Builder) 펌프 부분에서 아큐첵 Insight를 선택해주시기 바랍니다.
    
    ![Screenshot of Config Builder Insight](../images/Insight_ConfigBuilder.png)

* 톱니바퀴 아이콘을 눌러 Insight 설정을 열어주세요.

* 설정 상단에서 "Insight 연결" 버튼을 눌러주세요 주변 모든 블루투스 장치 목록이 보일 것 입니다 (하단 왼쪽).
* Insight 펌프에서 메뉴 > 설정 > 연결 > 장치추가를 선택해주세요 그러면 펌프에서 아래 화면과 같이 (하단 오른쪽) 펌프의 시리얼 번호를 보여줍니다.
    
    ![Screenshot of Insight Pairing 1](../images/Insight_Pairing1.png)

* 확인하신 시리얼번호를 핸드폰 블루투스 장치 목록에서 선택해주시기 바랍니다. 그런 다음 "연결"을 눌러주세요.
    
    ![Screenshot of Insight Pairing 2](../images/Insight_Pairing2.png)

* 그럼 펌프와 핸드폰에 코드가 보일 것 입니다. 두 장치에서 보여지는 코드가 동일한 경우 두 장치에서 "확인"을 눌러 연결해주시기 바랍니다.
    
    ![Screenshot of Insight Pairing 3](../images/Insight_Pairing3.png)

* 성공! 펌프와 Android Aps를 성공적으로 연결되었습니다.
    
    ![Screenshot of Insight Pairing 4](../images/Insight_Pairing4.png)

* 잘 작동하고 있는지 확인하기 위해서는, Android APS에서 구정관리자로 들어가신 다음에 Insight 펌프에서 톱니바퀴 아이콘을 선택하셔서 Insight 설정으로 들어갑니다. 그 후 Insight 연결을 누르시면 펌프의 정보가 보일 것 입니다.
    
    ![Screenshot of Insight Pairing Information](../images/Insight_PairingInformation.png)

주의: 펌프와 휴대폰의 연결은 영구적이지 않습니다. 필요할 경우에만 연결이 됩니다. (예, 임시 Basal양 설정, bolus 주입, 펌프 이력 불러오기 등) 그렇지 않으면 핸드폰과 펌프의 베터리가 너무 빨리 소모됩니다.

## AAPS의 설정

![Screenshot of Insight Settings](../images/Insight_pairing.png)

Android Aps에서 Insight 설정을 통해 다음 활동들을 활성화 할 수 있습니다.

* "로그 사이트 변경": 펌프에서 카뉼라 채우기를 할 경우 자동으로 인슐린의 카트리지 교체을 기록합니다.   
    <font color="red">주의: 카뉼라 변경시 Autosens 또한 재설정됩니다.</b></font>
* "로그 튜브 변경": 펌프에서 '튜브 채우기"를 실행했을 경우 Android APS 데이타 베이스에 메모로 기록됩니다.
* "로그 베터리 변경": 펌프의 베터리를 교체했을 경우 베터리 교체에 대해 기록합니다.
* "로그 운영모드 변경": 펌프를 시작하시거나, 멈추시거나 중지하실때 Android APS 데이타베이스에 메모로 기록합니다.
* "로그 알림": 펌프에서 경고성 알림이 울리는 경우(인지 차원의 알림, Bolus와 임시 Basal 취소는 제외 - 이 부분은 기록되지 않습니다.)
* "임시 Basal 활성화 제한": Insight 펌프는 임시 Basal 양을 최대 250%까지 설정할수 있습니다. 만약 임시 basal을 250%이상 설정한 경우, 임시 Basal활성화 제한을 피하기 위해서 임시 Basal 에뮬레이션은 추가 인슐린을 확장 bolus로 진행 합니다.  
    <font color="red">주의: 한 번에 한번의 확장 Bolus를 진행하여야 합니다. 그렇지 않을 경우 오류가 날 수 있습니다.</font>
* "재연결 시간": 이것은 AndroidAPS가 연결 시도 실패한 후에 다시 시도하기까지 기다리는 시간을 정의합니다. 0~ 20초에서 선택하실 수 있습니다. 만약, 연결 문제를 경험하시고 계씨면 기다리는 시간을 길게 선택해주시기 바랍니다.   
      
    예를 들어 1분 동안 재연결 시간 =5와 최대 재연결시간 = 20   
      
    연결이 안됐을 경우 -> **5**초를 기다립니다.   
    재시도 -> 연결이 안됐을 경우 -> **6**초를 기다립니다.   
    재시도 -> 연결이 안됐을 경우 -> **7**초를 기다립니다.   
    재시도 -> 연결이 안됐을 경우 -> **8**초를 기다립니다.   
    ...   
    재시도 -> 연결이 안됐을 경우 -> **20**초를 기다립니다.   
    재시도 -> 연결이 안됐을 경우 -> **20**초를 기다립니다.   
    ...

* "연결 해지 지연": 이것은 작동이 끝난 후 AndroidAPS가 펌프와의 연결 해지를 기다리는 시간 (초) 을 정의합니다. 기본 값은 5초 입니다.

펌프가 멈췄을 경우에 AAPS는 Basal양 0%로 임시로그를 남깁니다.

In AndroidAPS, the Accu-Chek Insight tab shows the current status of the pump and has two buttons:

* "새로고침": 펌프의 상태를 새로고침 합니다.
* "임시 Basal 알림 활성화/비활성화": Insight 펌프는 기본적으로 임시 Basal이 끝나면 알림을 울립니다. 이 버튼은 구성 소프트웨어 없이 알림을 끄거나 킬수 있습니다.
    
    ![Screenshot of Insight Status](../images/Insight_Status2.png)

## 펌프 설정

다음과 같이 펌프에 알림을 설정하세요

* 메뉴 > 설정 > 기기설정 > 모드설정 > 조용 > 시그널 > 소리 메뉴 > 설정 > 기기설정 > 모드설정 > 조용 > 볼륨 > 0 (모든 바 제거)
* 메뉴 > 모드 > 시그널 모드 > 조용

이렇게하면 펌프의 모든 알람이 울리지 않으며 AndroidAPS가 알람이 당신에게 적합한 지 결정할 수 있습니다. AndroidAPS가 알람을 인지하지 못하면 볼륨이 증가합니다 (첫 번째 경고음과 진동).

최선 펌웨어의 Insight 펌프의 경우 Bolus할 때 일시적으로 진동이 울립니다. (예를 들어 AndroidAPS가 SMB 또는 임시 Bolus 에뮬레이션이 확정 Bolus를 진행한 경우) 진동은 비활성화 하실 수 없습니다. 예전 펌프는 동일한 상황에서 진동이 울리지 않습니다.

## 베터리 교체

Insight 펌프에는 배터리를 교체하는 동안 시계 작동과 같은 필수 기능을 유지하는 작은 내부 배터리가 있습니다. 배터리 교체 시간이 오래 걸리면 이 내장 배터리가 소진되고 시계가 재설정되며 새 배터리를 넣은 후 새 시간과 날짜를 입력하라는 메시지가 표시됩니다. If this happens, all entries in AndroidAPS prior to the battery change will no longer be included in calculations as the correct time cannot be identified properly.

## Insight specific errors

### Extended bolus

Just use one extended bolus at a time as multiple extended boluses at the same time might cause errors.

### Time out

Sometimes it might happen that the Insight pump does not answer during connection setup. In this case AAPS will display the following message: "Timeout during handshake - reset bluetooth".

![Insight Reset Bluetooth](../images/Insight_ResetBT.png)

In this case turn off bluetooth on pump AND smartphone for about 10 seconds and then turn it back on.

## Crossing time zones with Insight pump

For information on traveling accross time zones see section [Timezone traveling with pumps](../Usage/Timezone-traveling#insight).