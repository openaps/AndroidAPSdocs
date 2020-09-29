# 다나 RS 펌프

*다음은 2017년 이후의 다나 RS 펌프를 사용하는 경우에서 앱과 펌프를 설정하기 위한 안내입니다. 만약 오리지널 다나 R 펌프를 사용하는 경우에는 [DanaR Insulin Pump](./DanaR-Insulin-Pump)를 확인하십시오.*

**New Dana RS firmware v3 can be used from AndroidAPS version 2.7 onwards.**

* 다나 RS 펌프의 "BASAL A"가 앱에서 사용됩니다. 기존 데이터는 덮어쓰여집니다.

* AndroidAPS의 구성 관리자에서 'DanaRS'를 선택하십시오.

* 우측 상단에 있는 점 3개 버튼을 눌러 메뉴를 선택하십시오. 설정을 선택하십시오.

* 다나 RS의 '새 펌프와 연동'에서 사용 중인 다나 RS 펌프의 시리얼 번호를 선택하십시오.
  
  ![AAPS pair Dana RS](../images/AAPS_DanaRSPairing.png)

* Select Pump password and input your password.
  
  * For DanaRS with firmware 1 and 2 the default password is 1234.
  * For DanaRS with firmware 3 the default password is a combination of production month and production date (i.e. month 01 and day 24). ==> On your pump open main menu -> review -> information. 아니오. 3 is production date.

* **You have to confirm the pairing on the pump!** That's just the way you are used to from other bluetooth pairings (i.e. smartphone and car audio).
  
  ![Dana RS confirmation pairing](../images/DanaRS_Pairing.png)

* Select Bolus Speed to change the default bolus speed used (12sec per 1u, 30sec per 1u or 60sec per 1u).

* Restart your phone.

* Set basal step on pump to 0.01 U/h using Doctors menu (see pump user guide)

* 펌프에서 확장Bolus를 활성화하세요.

## Dana RS 특정 오류

### 인슐린 주입 중 발생하는 오류

Bolus 인슐린 주입 중 AAPS와 Dana RS의 연결이 끊기는 경우 (즉, Dana RS가 인슐린을 주입하는 동안 폰에서 멀어지는 경우), 다음과 같은 메시지가 뜨고 알람이 울릴 것입니다.

![인슐린 주입 알람](../images/DanaRS_Error_bolus.png)

* 대부분의 경우 이것은 단지 통신 상의 문제이며, 인슐린 양은 올바르게 주입됩니다.
* 올바른 bolus가 주입되었는지 (펌프 본체 또는 앱의 Dana 탭 > 펌프 이력 > boluses에서) 펌프의 이력을 확인하십시오.
* 케어포털 탭에서 오류 항목을 삭제할 수도 있습니다.
* 펌프가 다시 연결될 때 실제 주입된 양이 확인되어 앱에 기록됩니다. 이를 위해 Dana 탭에서 블루투스 아이콘을 누르거나, 다음 접속을 기다리십시오.

## 폰 교체를 위한 특별 참고 사항

새 폰으로 바꾸는 경우 다음의 과정들이 필요합니다:

* 이전의 폰에서 **설정 내보내기**
  
  * ≡ 메뉴 (화면 좌측 상단)
  * 정비
  * 설정 내보내기
    
    ![AAPS 설정 내보내기](../images/AAPS_ExportSettings.png)

* 새 폰에서 이전 폰의 설정을 **불러오기**

* **수동으로** 새 폰과 다나 RS를 연결하기 
  * 새 폰의 AAPS에서 펌프 연결 설정도 불러오기 때문에, 새 폰은 펌프를 미리 "인식"하여 블루투스 스캔을 시작하지 않습니다. 따라서 새 폰과 펌프를 수동으로 연결해줘야 합니다.
* 새 폰에서 **AndroidAPS 설치**
* **설정 불러오기** (새 폰에서) 
  * ≡ 메뉴 (화면 좌측 상단)
  * 정비
  * 설정 불러오기

## 다나 RS 펌프 사용 시 다른 표준시간대 지역으로의 이동

다른 시간대로 이동하는 경우에 대한 정보는 [펌프와 다른 시간대로의 이동 ](../Usage/Timezone-traveling#danarv2-danars) 섹션을 참조하십시오.