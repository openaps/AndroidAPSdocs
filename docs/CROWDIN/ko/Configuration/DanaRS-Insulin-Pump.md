# 다나 RS 펌프

*다음은 2017년 이후의 다나 RS 펌프를 사용하는 경우에서 앱과 펌프를 설정하기 위한 안내입니다. 만약 오리지널 다나 R 펌프를 사용하는 경우에는 [DanaR Insulin Pump](./DanaR-Insulin-Pump)를 확인하십시오.*

**새 펌웨어 v3를 사용하는 다나 RS는 현재 AndroidAPS를 사용할 수 없습니다.**

* 다나 RS 펌프의 "BASAL A"가 앱에서 사용됩니다. 기존 데이터는 덮어쓰여집니다.

* AndroidAPS의 구성 관리자에서 'DanaRS'를 선택하십시오.

* 우측 상단에 있는 점 3개 버튼을 눌러 메뉴를 선택하십시오. 설정을 선택하십시오.

* 다나 RS의 '새 펌프와 연동'에서 사용 중인 다나 RS 펌프의 시리얼 번호를 선택하십시오.
  
  ![AAPS pair Dana RS](../images/AAPS_DanaRSPairing.png)

* '펌프 비밀번호'에서 비밀번호를 입력하십시오. (초기 비밀번호는 1234입니다)   
  ** 펌프와 연결되었는지 확인해야합니다!** 다른 블루투스 연결 (예를 들어, 스마트폰과 자동차 오디오)에서 사용하는 방법과 같습니다.
  
  ![Dana RS confirmation pairing](../images/DanaRS_Pairing.png)

* Select Bolus Speed to change the default bolus speed used (12sec per 1u, 30sec per 1u or 60sec per 1u).

* Restart your phone.

* Set basal step on pump to 0.01 U/h using Doctors menu (see pump user guide)

* 펌프에서 확장Bolus를 활성화하세요.

## Dana RS specific errors

### Error during insulin delivery

In case the connection between AAPS and Dana RS is lost during bolus insulin delivery (i.e. you walk away from phone while Dana RS is pumping insulin) you will see the following message and hear an alarm sound.

![Alarm insulin delivery](../images/DanaRS_Error_bolus.png)

* In most cases this is just a communication issue and the correct amount of insulin is delivered.
* Check in pump history (either on the pump or through Dana tab > pump history > boluses) if correct bolus is given.
* Delete error entry in CP tab if you wish.
* Real amount is read and recorded on next connect. To force this press BT icon on dana tab or just wait for next connect.

## Special note when switching phone

When switching to a new phone the following steps are neccessary:

* **Export settings** on your old phone
  
  * Hamburger menu (top left corner of screen)
  * 정비
  * Export settings
    
    ![AAPS export settings](../images/AAPS_ExportSettings.png)

* **Transfer** settings from old to new phone

* **Manually pair** Dana RS with the new phone 
  * As pump connection settings are also imported AAPS on your new phone will already "know" the pump and therefore not start a bluetooth scan. Therefore new phone and pump must be paired manually.
* **Install AndroidAPS** on the new phone.
* **Import settings** on your new phone 
  * Hamburger menu (top left corner of screen)
  * 정비
  * Import settings

## Timezone traveling with Dana RS pump

다른 시간대의 나라로 여행하는 경우에 대한 정보는 [ 펌프와 함께 하는 다른 시간대 여행 ](../Usage/Timezone-traveling#danarv2-danars) 섹션을 참조하십시오.