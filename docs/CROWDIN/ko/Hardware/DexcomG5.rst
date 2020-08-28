덱스콤 G5
**************************************************
Dexcom G5를 Xdrip+와 사용하는 경우
==================================================
* 만약 아직 'xDrip'을 설치하지 않았다면 <https://github.com/NightscoutFoundation/xDrip>에서 다운로드하고, nightscout ('G5' <http://www.nightscout.info/wiki/welcome/nightscout-with-xdrip-and-dexcom-share-wireless/xdrip-with-g5-support>)의 지시사항을 따르십시오.
* xDrip에서 세팅 > Inter-app settings > Broadcast locally를 활성화합니다.
* xDrip의 세팅 > Inter-app settings > Accept Treaments를 비활성화합니다.
* xDrip 대신 AndroidAPS에서 보정 기능을 사용하려면 xDrip의 세팅 > Inter-app settings > Accept Calibrations를 활성화합니다.  세팅 > 추가 세팅 > Advanced Calibration 설정에서 선택사항들을 검토할 수 있습니다.
* 구성 관리자 (AndroidAPS의 세팅)에서 xDrip을 선택합니다.
* 비행기 모드에서 AAPS가 혈당값을 수신하지 못하는 경우 [xDrip+ 설정 페이지](../Configuration/xdrip.md)에 설명된 'Identify receiver'를 이용합니다.

Dexcom G5를 Dexcom 앱(패치버전)과 사용하는 경우
==================================================
* 'https://github.com/dexcomapp/dexcomapp<https://github.com/dexcomapp/dexcomapp>'에서 apk를 다운로드하고 알맞은 버전을 선택하십시오 (G5의 mg/dl 또는 mmol/l 버전 중 선택).

   * AndroidAPS 2.3 사용자는 폴더 2.3을, AAPS 2.5 이용자는 폴더 2.4를 사용하십시오.
   * 컴퓨터에서 https://play.google.com/store/search?q=dexcom%20g5 사이트를 엽니다. Region will be visible in URL.
   
   .. image:: ../images/DexcomG5regionURL.PNG
     :alt: Region in Dexcom G5 URL

* Stop sensor and uninstall the original Dexcom app, if not already done.
* Install downloaded apk
* Start sensor
* Select Dexcom App (patched) in ConfigBuilder (setting in AndroidAPS).
* If you want to use xDrip alarms via local broadcast: in xDrip hamburger menu > settings > hardware data source > 640G /EverSense.
