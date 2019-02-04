# 혈당 소스

**For users of Dexcom:**  
_If using G5 or G6 with xdrip+_  


* 만약 xDrip이 설치되지 않았다면 [xDrip](https://github.com/NightscoutFoundation/xDrip) 을 다운로드하고 나이트스카웃에서 해당 기기에 대한 지시를 따르세요([G4 without share](http://www.nightscout.info/wiki/welcome/nightscout-with-xdrip-wireless-bridge), [G4 share](http://www.nightscout.info/wiki/welcome/nightscout-with-xdrip-and-dexcom-share-wireless), [G5](http://www.nightscout.info/wiki/welcome/nightscout-with-xdrip-and-dexcom-share-wireless/xdrip-with-g5-support)).
* xDrip 에서 세팅>앱간 호환성 설정>Broadcast Locally 활성화
* xDrip 에서 세팅>앱간 호환성 설정>Accept Treament를 OFF 하세요.
* AndroidAPS에서 보정하여 사용할수 있기를 원한다면 xDrip세팅>앱간 호환성 설정>Accept Calibrations을 ON 하세요. 세팅>추가 세팅>Advanced Calibration 설정에서 옵션사항들을 검토할 수 있습니다.
* 구성관리자(AndroidAPS 셋팅)에서 xDrip을 선택하세요.

_If using G5 or G6 with patched Dexcom app_  


* <https://github.com/dexcomapp/dexcomapp>에서 apk를 다운로드하고, mg/dl이나 mmol/l 중 하나를 선택한다.
* 센서를 스탑하고 이전에 하지 않았다면 오리지날 dexcom 앱을 삭제한다.
* 다운로드된 apk를 설치한다.
* 센서를 시작한다.
* 구성관리자(AndroidAPS 세팅)에서 Dexcom G5 앱(패치버전)을 선택한다. 
* Note: Some people are discovery problems with the patched Dexcom G6 app (app crashes directly after restart on the phone). You can use xdrip+ until this problem is solved for all users.

_만약 OTG 케이블(전통적인 Nightscout)과 함께 G4를 선택한다면…_   


* 만약 미리 셋업하지 않았다면 플레이스토어에서 Nightscout 업로더 앱을 다운로드하고 [Nightscout](http://www.nightscout.info/wiki/welcome/basic-requirements)에 있는 지시사항을 따르세요. 
* AndroidAPS 설정에서 당신의 Nightscout 웹사이트와 API 비밀번호를 입력하세요.
* 구성관리자(안드로이드 APS 셋팅)에서 NS클라이언트를 선택하세요.

**블루투스 장치와 함께 리브레를 사용하는 경우:**  
리브레를 매 5분마다 새로운 혈당값을 받는 CGM으로 사용하기 위해서는 다음과 같은 [NFC to 블루투스] 어댑터를 구입해야합니다.

* MiaoMiao 리더 <https://www.miaomiao.cool/>
* Blukon Nightrider <https://www.ambrosiasys.com/howit>
* Bluereader <https://bluetoolz.de/blueorder/#home>
* Sony Smartwatch 3(SWR50) als auslesetool <https://github.com/pimpimmi/LibreAlarm/wiki/>

_xDrip을 사용하는 경우..._  


* 만약 미리 셋업하지 않았다면 xdrip 다운로드하고 [LimiTTEer](https://github.com/JoernL/LimiTTer), [Libre Alarm](https://github.com/pimpimmi/LibreAlarm/wiki) or [BlueReader](https://unendlichkeit.net/wordpress/?p=680&lang=en)([Hardware](https://bluetoolz.de/wordpress/)) 에 있는 지시사항을 따르세요.
* xDrip 에서 세팅>앱간 호환성 설정>Broadcast Locally 선택
* xDrip 에서 세팅>앱간 호환성 설정>Accept Treament를 OFF 하세요
* AndroidAPS에서 보정하여 사용할수 있기를 원한다면 xDrip세팅>앱간 호환성 설정>Accept Calibrations을 ON 하세요. 세팅>추가 세팅>Advanced Calibration 설정에서 옵션사항들을 검토할 수 있습니다.
* 구성관리자(AndroidAPS 셋팅)에서 xDrip을 선택하세요.
* G5 기본 모드의 경우 xDrip에서 세팅> Cloud upload > REST API > Extra options > Append source info to device 을 ON 하세요.

_Glimp를 사용하는 경우..._  


* 만약 미리 셋업하지 않았다면 Glimp 다운로드하고 [nightscout](http://www.nightscout.info/wiki/welcome/nightscout-for-libre)에 있는 지시사항을 따르세요.
* 구성관리자(AndroidAPS 세팅)에서 Glimp 선택하세요.

**미니메드640g 나 630g를 사용하는 경우...**  


* 만약 미리 셋업하지 않았다면 [600SeriesAndroidUploaer](http://pazaan.github.io/600SeriesAndroidUploader/)를 다운로드하고 [nightscout](http://www.nightscout.info/wiki/welcome/nightscout-and-medtronic-640g)에 있는 지시사항을 따르세요.
* 600시리즈 업로더에서 세팅으로가서 >xdrip+보내기 를 선택하세요.
* 구성관리자(AndroidAPS 세팅)에서 미니메드640g를 선택하세요.

**Poctech CT-100를 사용하는 경우...**  


* PocTech 앱을 설치하세요.
* 구성관리자(AndroidAPS 셋팅)에서 PocTech 앱을 선택하세요.

**Nightscout에 업로드된 다른 CGM을 사용하는 경우:**  
만약 당신의 데이타를 [Nightscout](http://www.nightscout.info)에 보내는 다른 CGM 셋업을 가지고 있다면  


* AndroidAPS 설정에서 당신의 Nightscout 웹사이트와 API 비밀번호를 입력하세요.
* 구성관리자(AndroidAPS 셋팅)에서 NSClient를 선택하세요.