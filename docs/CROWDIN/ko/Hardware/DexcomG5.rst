덱스콤 G5
**************************************************
Dexcom G5를 Xdrip+와 사용하는 경우
==================================================
* 만약 아직 'xDrip'을 설치하지 않았다면 <https://github.com/NightscoutFoundation/xDrip>에서 다운로드하고, nightscout ('G5' <http://www.nightscout.info/wiki/welcome/nightscout-with-xdrip-and-dexcom-share-wireless/xdrip-with-g5-support>)의 지시사항을 따르십시오.
* In xdrip go to Settings > Inter-app settings > Broadcast Data Locally and select ON.
* In xdrip go to Settings > Inter-app settings > Accept Treatments and select OFF.
* xDrip 대신 AndroidAPS에서 보정 기능을 사용하려면 xDrip의 세팅 > Inter-app settings > Accept Calibrations를 활성화합니다.  세팅 > 추가 세팅 > Advanced Calibration 설정에서 선택사항들을 검토할 수 있습니다.
* 구성 관리자 (AndroidAPS의 세팅)에서 xDrip을 선택합니다.
* If AAPS does not receive BG values when phone is in airplane mode use 'Identify receiver' as describe on `xDrip+ settings page <../Configuration/xdrip.md>`_ .

Dexcom G5를 Dexcom 앱(패치버전)과 사용하는 경우
==================================================
* 'https://github.com/dexcomapp/dexcomapp<https://github.com/dexcomapp/dexcomapp>'에서 apk를 다운로드하고 알맞은 버전을 선택하십시오 (G5의 mg/dl 또는 mmol/l 버전 중 선택).

  * AndroidAPS 2.3 사용자는 폴더 2.3을, AAPS 2.5 이용자는 폴더 2.4를 사용하십시오.
  * 컴퓨터에서 https://play.google.com/store/search?q=dexcom%20g5 사이트를 엽니다. Region will be visible in URL.

   .. image:: ../images/DexcomG5regionURL.PNG
     :alt: Region in Dexcom G5 URL

* 오리지날 Dexcom 앱이 남아 있는 경우 센서를 스탑하고 삭제합니다.
* 다운로드 된 apk를 설치합니다.
* 센서를 시작합니다.
* 구성 관리자 (AndroidAPS의 설정)에서 Dexcom 앱 (패치버전)을 선택합니다.
* local broadcast를 통해 xDrip 알람을 사용하려면 xDrip 메뉴 > 설정 > 하드웨어 데이터 출처 > 640G /EverSense를 선택하십시오.
