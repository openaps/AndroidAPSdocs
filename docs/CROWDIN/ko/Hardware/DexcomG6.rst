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

To learn more about the details and reasons for these recommendations read the `complete article <https://www.diabettech.com/artificial-pancreas/diy-looping-and-cgm/>`_ published by Tim Street at `www.diabettech.com <https://www.diabettech.com>`_.

Dexcom G6를 xdrip+와 사용하는 경우
==================================================
* 덱스콤 G6 트랜스미터는 덱스콤 리시버 (또는 t:slim 펌프로 대체 가능)과 한 개의 핸드폰 앱에 동시 연결할 수 있습니다.
* xDrip+를 리시버로 사용하는 경우 Dexcom 공식 앱을 먼저 제거합니다. ** 트랜스미터로 xDrip+와 Dexcom 공식 앱에 동시 연결은 할 수 없습니다! **
* If you need Clarity and want to profit from xDrip+ alarms use the `BYODA <../Hardware/DexcomG6.html#if-using-g6-with-build-your-own-dexcom-app>`_ with local broadcast to xDrip+.
* If not already set up then download `xDrip+ <https://github.com/NightscoutFoundation/xDrip>`_ and follow instructions on `xDrip+ settings page <../Configuration/xdrip.html>`_.
* 구성 관리자 (AndroidAPS의 세팅)에서 xDrip+를 선택합니다.
* Adjust settings in xDrip+ according to `xDrip+ settings page <../Configuration/xdrip.html>`__
* If AAPS does not receive BG values when phone is in airplane mode use 'Identify receiver' as describe on `xDrip+ settings page <../Configuration/xdrip.html>`__.

Dexcom G6를 직접 빌드한 덱스컴 앱과 사용하는 경우
==================================================
* As of December 2020 `Build Your Own Dexcom App <https://docs.google.com/forms/d/e/1FAIpQLScD76G0Y-BlL4tZljaFkjlwuqhT83QlFM5v6ZEfO7gCU98iJQ/viewform?fbzx=2196386787609383750&fbclid=IwAR2aL8Cps1s6W8apUVK-gOqgGpA-McMPJj9Y8emf_P0-_gAsmJs6QwAY-o0>`_ (BYODA) also supports local broadcast to AAPS and/or xDrip+ (not for G5 sensors!)
* 이 앱은 덱스콤 G6를 모든 종류의 안드로이드 스마트폰과 함께 사용 가능하도록 해줍니다.
* 이전에 덱스콤 공식앱 또는 덱스콤 앱(패치버전)을 사용하셨으면 제거하십시오.
* 다운로드 한 apk를 설치합니다.
* 센서 코드 및 트랜스미터 일련 번호를 앱 (패치버전)에서 입력하십시오.
* 휴대폰 설정에서 앱 > 덱스콤 G6 > 사용권한 > 추가 권한에서 '덱스콤 앱에 엑세스하기'를 누르십시오.
* After short time BYODA should pick-up transmitter signal. (인식하지 못할 경우 센서를 중지하고 새 센서를 시작해야 합니다.)

AndroidAPS에 대한 설정
--------------------------------------------------
* 구성 관리자에서 'Dexcom App (패치버전)'을 선택합니다.
* If you don't receive any values select any other data source, then re-select 'Dexcom App (patched)' to trigger the demand for permissions to establish the connection between AAPS and BYODA-broadcast.

xDrip+에 대한 설정
--------------------------------------------------
* 데이터 소스로 '640G/Eversense'를 선택합니다.
* 혈당값을 수신하기 위하여 xDrip+에서 '센서 시작하기' 명령을 수행해야 합니다. 이는 직접 빌드한 덱스컴 앱(BYODA)로 제어하는 현재 센서에는 영향을 주지 않습니다.
   
G6의 문제 해결
==================================================
덱스콤 G6의 특이적인 문제 해결
--------------------------------------------------
* 트랜스미터의 시리얼 넘버가 80 또는 81로 시작하는 경우, 2019년 5월 이후에 배포된 최신의 안정적인 xDrip+ 버전 또는 새로운 nightly build 버전이 필요합니다.
* 트랜스미터의 시리얼 넘버가 8G로 시작하는 경우, 2019년 7월 25일 이후의 nightly build 버전 또는 더 최신의 버전이 필요합니다.
* xDrip+와 Dexcom 공식앱은 동시에 트랜스미터와 연결될 수 없습니다.
* 센서를 중지하고 시작할 때 적어도 15분 이상 기다려야합니다.
* 센서 삽입 시간을 뒤로 되돌리지 마십시오. "오늘 센서를 삽입했습니까?" 라는 질문에 항상 "예, 오늘입니다." 를 선택해야 합니다.
* 새 센서를 설정하는 동안 "센서를 다시 시작하기"를 사용하지 마십시오.
* 클래식 상태 페이지 - > G5/G6 상태 - > PhoneServiceState에서 다음의 내용이 표시되기 전에 새 센서를 시작하지 마십시오:

  * 트랜스미터 시리얼 넘버가 80 또는 81로 시작하는 경우: "Got data hh:mm" (예를 들어, "Got data: 19:04")
  * 트랜스미터 시리얼 넘버가 8G 또는 8H로 시작하는 경우: "Got glucose hh:mm" (예를 들어, "Got glucose 19:04") 또는 "Got now raw hh:mm" (예를 들어, "Got now raw: 19:04")

.. image:: ../images/xDrip_Dexcom_PhoneServiceState.png
  :alt: xDrip+ PhoneServiceState

General troubleshooting
--------------------------------------------------
CGM에 대한 일반적인 문제해결은 '이 문서<./GeneralCGMRecommendation.html#troubleshooting>'에서 확인할 수 있습니다.

센서 사용 중에 새로운 트랜스미터로 바꾸기
--------------------------------------------------
센서 사용 중 트랜스미터를 변경해야하는 경우, 센서 마운트를 손상시키지 않고 트랜스미터를 제거해야 합니다. A video can be found at `https://youtu.be/tx-kTsrkNUM <https://youtu.be/tx-kTsrkNUM>`_.
