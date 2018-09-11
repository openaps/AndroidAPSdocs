# 혈당 소스

**덱스콤 사용자:**  
_xDrip+를 사용하는 경우_  


* 만약 xDrip이 설치되지 않았다면 [xDrip](https://github.com/NightscoutFoundation/xDrip) 을 다운로드하고 나이트스카웃에서 해당 기기에 대한 지시를 따르세요([G4 without share](http://www.nightscout.info/wiki/welcome/nightscout-with-xdrip-wireless-bridge), [G4 share](http://www.nightscout.info/wiki/welcome/nightscout-with-xdrip-and-dexcom-share-wireless), [G5](http://www.nightscout.info/wiki/welcome/nightscout-with-xdrip-and-dexcom-share-wireless/xdrip-with-g5-support)).
* xDrip 에서 세팅>앱간 호환성 설정>Broadcast Locally 활성화
* xDrip 에서 세팅>앱간 호환성 설정>Accept Treament를 OFF 하세요.
* AndroidAPS에서 보정하여 사용할수 있기를 원한다면 xDrip세팅>앱간 호환성 설정>Accept Calibrations을 ON 하세요. 세팅>추가 세팅>Advanced Calibration 설정에서 옵션사항들을 검토할 수 있습니다.
* 구성관리자(AndroidAPS 셋팅)에서 xDrip을 선택하세요.

_Dexcom G5 앱(패치버전)을 사용하는 경우_  


* <https://github.com/dexcomapp/dexcomapp>에서 apk를 다운로드하고, mg/dl이나 mmol/l 중 하나를 선택한다.
* 센서를 스탑하고 이전에 하지 않았다면 오리지날 dexcom 앱을 삭제한다.
* 다운로드된 apk를 설치한다.
* 센서를 시작한다.
* 구성관리자(AndroidAPS 세팅)에서 Dexcom G5 앱(패치버전)을 선택한다. 

_만약 OTG 케이블(전통적인 Nightscout)과 함께 G4를 선택한다면…_   


* If not already set up then download Nightscout Uploader app from the Play Store and follow instructions on [Nightscout](http://www.nightscout.info/wiki/welcome/basic-requirements).
* In AndroidAPS Preferences enter your nightscout website and API secret.
* Select NSClient in ConfigBuilder (setting in AndroidAPS).

**For users of Libre with Bluetooth cap:**  
To use your Libre as a CGM that is getting new BG values every 5 minutes you first need to buy a NFC to Bluetooth adapter like:

* MiaoMiao-Reader <https://www.miaomiao.cool/>
* Blukon Nightrider <https://www.ambrosiasys.com/howit>
* BlueReader <https://bluetoolz.de/blueorder/#home>
* Sony Smartwatch 3 (SWR50) als Auslesetool <https://github.com/pimpimmi/LibreAlarm/wiki/>

_If using xdrip..._  


* If not already set up then download xdrip and follow instructions on [LimiTTEer](https://github.com/JoernL/LimiTTer), [Libre Alarm](https://github.com/pimpimmi/LibreAlarm/wiki) or [BlueReader](https://unendlichkeit.net/wordpress/?p=680&lang=en)([Hardware](https://bluetoolz.de/wordpress/)).
* In xdrip go to Settings > Interapp Compatibility > Broadcast Data Locally and select ON.
* In xdrip go to Settings > Interapp Compatibility > Accept Treatments and select OFF.
* If you want to be able to use AndroidAPS to calibrate then in xdrip go to Settings > Interapp Compatibility > Accept Calibrations and select ON. You may also want to review the options in Settings > Less Common Settings > Advanced Calibration Settings.
* Select xdrip in ConfigBuilder (setting in AndroidAPS).

_If using Glimp..._  


* If not already set up then download Glimp and follow instructions on [nightscout](http://www.nightscout.info/wiki/welcome/nightscout-for-libre).
* Select Glimp in ConfigBuilder (setting in AndroidAPS).

**For users of MM640g or MM630g:**  


* If not already set up then download [600SeriesAndroidUploaer](http://pazaan.github.io/600SeriesAndroidUploader/) and follow instructions on [nightscout](http://www.nightscout.info/wiki/welcome/nightscout-and-medtronic-640g).
* In 600 Series Uploader go to Settings > Send to xdrip+ and select ON (tick).
* Select MM640g in ConfigBuilder (setting in AndroidAPS).

**For users of PocTech CT-100:**  


* Install PocTech App
* Select PocTech App in ConfigBuilder (setting in AndroidAPS).

**For users of other CGM uploaded to nightscout:**  
If you have any other CGM set up that sends your data to [Nightscout](http://www.nightscout.info) then  


* In AndroidAPS Preferences enter your nightscout website and API secret.
* Select NSClient in ConfigBuilder (setting in AndroidAPS).