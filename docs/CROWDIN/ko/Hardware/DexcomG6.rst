Dexcom G6
**************************************************
우선적인 기본 사항
==================================================

* '이 문서<../Hardware/GeneralCGMRecommendation.html>`의 일반적인 CGM 위생과 센서 설정 권장사항을 따르십시오.
* 2018년 가을 이후 제조된 G6 트랜스미터의 경우 `latest nightly built xDrip+버전들<https://github.com/NightscoutFoundation/xDrip/releases>`중 하나를 사용해야 합니다. 이러한 트랜스미터들은 새로운 펌웨어를 가지고 있으며, xDrip+의 안정적인 최신 버전(2019/01/10)에서 사용할 수 없습니다.

Dexcom G6로 loop을 사용하기 위한 일반적인 정보
==================================================

Dexcom G6를 사용하는 것은 맨 처음 제시된 것 보다 좀 더 복잡할 수 있다는 것이 확실합니다. 안전하게 사용하기 위해 몇 가지 알아야 할 사항들이 있습니다: 

* xDrip+이나 Spike에서 보정 코드를 사용하여 native data를 사용한다면, 안전을 위해 센서 재시작(preemptive restarts)를 사용하지 마십시오.
* 만일 불가피하게 센서 재시작(preemptive restarts)를 사용하여야 한다면, 혈당값 변화를 확인할 수 있으면서 필요한 경우 혈당값을 보정할 수 있을 때 진행해야 합니다. 
* 만일 센서를 재시작하는 경우에는 안전한 결과를 위해 11일, 12일에 자동 보정 없이 진행하거나, 혈당 변화를 계속해서 관찰하면서 보정할 준비가 되어 있어야 합니다.
* 자동 보정이 되어있는 G6의 센서를 미리 삽입하는 것은 결과적으로 혈당값의 편차를 발생시킬 수 있습니다. 만약 센서를 미리 삽입하는 경우, 가장 정확한 결과값을 얻기 위해 센서를 보정할 필요가 있습니다.
* 혈당값 변화를 관찰하는 것이 불가하다면, 자동 보정 모드를 사용하지 않는 방식으로 바꾸고, G5와 같은 시스템을 사용하는 것이 바람직합니다.

이러한 권장사항의 세부적인 내용들과 이유들에 대해 더 알고자 하신다면, 'www.diabettech.com <http://www.diabettech.com>'에서 Tim Street이 게시한 '전체 문서 <http://www.diabettech.com/artificial-pancreas/diy-looping-and-cgm/>'를 읽어보시기 바랍니다.

Dexcom G6를 xdrip+와 사용하는 경우
==================================================
* 덱스콤 G6 트랜스미터는 덱스콤 리시버 (또는 t:slim 펌프로 대체 가능)과 한 개의 핸드폰 앱에 동시 연결할 수 있습니다.
* xDrip+를 리시버로 사용하는 경우 Dexcom 공식 앱을 먼저 제거합니다. ** 트랜스미터로 xDrip+와 Dexcom 공식 앱에 동시 연결은 할 수 없습니다! **
* Clarity가 필요하고 xDrip+ 알람 사용을 원하는 경우, '덱스콤 앱(패치버전)<../Hardware/DexcomG6.html#if-using-g6-with-patched-dexcom-app>'을 xDrip+에 로컬 브로드캐스트로 연결하여 사용하십시오.
* 만약 아직 'xDrip'을 설치하지 않았다면 <https://github.com/NightscoutFoundation/xDrip>에서 다운로드하고, nightscout ('G5' <http://www.nightscout.info/wiki/welcome/nightscout-with-xdrip-and-dexcom-share-wireless/xdrip-with-g5-support>)의 지시사항을 따르십시오.
* 구성 관리자 (AndroidAPS의 세팅)에서 xDrip+를 선택합니다.
* 'xDrip+ 설정 페이지 <../Configuration/xdrip.html>'를 따라 xDrip+의 설정을 조정하십시오.
* 비행기 모드에서 AAPS가 혈당값을 수신하지 못하는 경우 'xDrip+ 설정 페이지' <../Configuration/xdrip.html>에 설명된 'Identify receiver'를 이용합니다.

Dexcom G6를 Dexcom 앱(패치버전)과 사용하는 경우
==================================================
* 'https://github.com/dexcomapp/dexcomapp<https://github.com/dexcomapp/dexcomapp>'에서 apk를 다운로드하고 필요에 따라 알맞은 버전을 선택하십시오 (mg/dl 또는 mmol/l, G6).

  * 폴더 2.4는 현재 버전의 사용자를 위한 것입니다. 폴더 2.3은 오래된 AndroidAPS 2.3에만 해당됩니다.
  * 컴퓨터에서 https://play.google.com/store/search?q=dexcom%20g6 사이트를 엽니다. 
  * 검색 결과 페이지에서 보여지는 덱스콤 G6 앱 링크를 클릭하십시오.
  * URL에서 region이 표시됩니다.

   .. image:: ../images/DexcomG6regionURL.PNG
     :alt: Dexcom G6 URL의 region

* 덱스콤 공식 앱을 제거하십시오.
* 다운로드 한 apk를 설치합니다.
* 센서 코드 및 트랜스미터 일련 번호를 앱 (패치버전)에서 입력하십시오.
* 짧은 시간 안에 앱 (패치버전)은 트랜스미터 신호를 인식합니다. (인식하지 못할 경우 센서를 중지하고 새 센서를 시작해야 합니다.)
* (AndroidAPS의 설정 중) 구성 관리자에서 Dexcom 앱 (패치버전)을 선택합니다.
* 로컬 브로드캐스트를 통해 xDrip+ 알람을 사용하려면: xDrip+ 메뉴 > 설정 > 하드웨어 데이터 출처 > 640G /EverSense를 선택하십시오.
* 덱스콤 앱 (패치 버전)에서 xDrip+에 직접적인 로컬 브로드캐스트 연결은 할 수 없습니다. 위에서 설명한 방법으로 AAPS에 브로드캐스트 연결을 해야 합니다.

Dexcom G6를 직접 빌드한 덱스컴 앱과 사용하는 경우
==================================================
* 2020년 12월에 나온 "직접 덱스컴 앱을 빌드하기<https://docs.google.com/forms/d/e/1FAIpQLScD76G0Y-BlL4tZljaFkjlwuqhT83QlFM5v6ZEfO7gCU98iJQ/viewform?fbzx=2196386787609383750&fbclid=IwAR2aL8Cps1s6W8apUVK-gOqgGpA-McMPJj9Y8emf_P0-_gAsmJs6QwAY-o0>` (Build Your Own Dexcom App; BYODA)는 AAPS 와/또는 xDrip+에 로컬 브로드캐스트 연결을 지원합니다(G5 센서는 아님).
* 이 앱은 덱스콤 G6를 모든 종류의 안드로이드 스마트폰과 함께 사용 가능하도록 해줍니다.
* 이전에 덱스콤 공식앱 또는 덱스콤 앱(패치버전)을 사용하셨으면 제거하십시오.
* 다운로드 된 apk를 설치합니다.
* 센서 코드 및 트랜스미터 일련 번호를 앱 (패치버전)에서 입력하십시오.
* 휴대폰 설정에서 앱 > 덱스콤 G6 > 사용권한 > 추가 권한에서 '덱스콤 앱에 엑세스하기'를 누르십시오.
* 짧은 시간 안에 앱 (패치버전)은 트랜스미터 신호를 인식합니다. (인식하지 못할 경우 센서를 중지하고 새 센서를 시작해야 합니다.)

AndroidAPS에 대한 설정
--------------------------------------------------
* 구성 관리자에서 'Dexcom App (패치버전)'을 선택합니다.
* If you don't recieve any values select any other data source, then re-select 'Dexcom App (patched)' to trigger the demand for permissions to establish the connection between AAPS and BYODA-broadcast.

Settings for xDrip+
--------------------------------------------------
* Select '640G/Eversense' as data source.
* Command 'start sensor' must be performed in xDrip+ in order to receive values. This will not affect your current sensor controlled by Build Your Own Dexcom App.
   
G6의 문제 해결
==================================================
Dexcom G6 specific troubleshooting
--------------------------------------------------
* Transmitters with serial no. starting with 80 or 81 need at least last stable xDrip+ version from May 2019 or a newer nightly build.
* Transmitters with serial no. starting with 8G need at least nightly build from July 25th, 2019 or newer.
* xDrip+ and Dexcom app cannot be connected with the transmitter at the same time.
* Wait at least 15 min. between stopping and starting a sensor.
* Do not rewind back time of insertion. Answer question "Did you insert it today?" always with "Yes, today".
* Do not enable "restart sensors" while setting a new sensor
* Do not start new sensor before the following information is shown in Classic Status Page -> G5/G6 status -> PhoneServiceState:

  * Transmitter serial starting with 80 or 81: "Got data hh:mm" (i.e. "Got data 19:04")
  * Transmitter serial starting with 8G or 8H: "Got glucose hh:mm" (i.e. "Got glucose 19:04") or "Got no raw hh:mm" (i.e. "Got now raw 19:04")

.. image:: ../images/xDrip_Dexcom_PhoneServiceState.png
  :alt: xDrip+ PhoneServiceState

General troubleshoothing
--------------------------------------------------
General Troubleshoothing for CGMs can be found `here <./GeneralCGMRecommendation.html#troubleshooting>`__.

New transmitter with running sensor
--------------------------------------------------
If you happen to change transmitter during a running sensor session you might try to remove the transmitter without damaging the sensor mount. A video can be found at `https://youtu.be/AAhBVsc6NZo <https://youtu.be/AAhBVsc6NZo>`_.
