# 혈당 소스

## For users of Dexcom  


### If using G5 or G6 with xdrip+  


* 만약 xDrip이 설치되지 않았다면 [xDrip](https://github.com/NightscoutFoundation/xDrip) 을 다운로드하고 나이트스카웃에서 해당 기기에 대한 지시를 따르세요([G4 without share](http://www.nightscout.info/wiki/welcome/nightscout-with-xdrip-wireless-bridge), [G4 share](http://www.nightscout.info/wiki/welcome/nightscout-with-xdrip-and-dexcom-share-wireless), [G5](http://www.nightscout.info/wiki/welcome/nightscout-with-xdrip-and-dexcom-share-wireless/xdrip-with-g5-support)).
* xDrip 에서 세팅>앱간 호환성 설정>Broadcast Locally 활성화
* xDrip 에서 세팅>앱간 호환성 설정>Accept Treament를 OFF 하세요.
* AndroidAPS에서 보정하여 사용할수 있기를 원한다면 xDrip세팅>앱간 호환성 설정>Accept Calibrations을 ON 하세요. 세팅>추가 세팅>Advanced Calibration 설정에서 옵션사항들을 검토할 수 있습니다.
* 구성관리자(AndroidAPS 셋팅)에서 xDrip을 선택하세요.

### If using G5 or G6 with patched Dexcom app  


* Download the apk from <https://github.com/dexcomapp/dexcomapp>, and choose the version that fits your needs (mg/dl or mmol/l version, G5 or G6).
* 센서를 스탑하고 이전에 하지 않았다면 오리지날 dexcom 앱을 삭제한다.
* 다운로드된 apk를 설치한다.
* 센서를 시작한다.
* 구성관리자(AndroidAPS 세팅)에서 Dexcom G5 앱(패치버전)을 선택한다. 

### If using G4 with OTG cable ('traditional' Nightscout)…  


* 만약 미리 셋업하지 않았다면 플레이스토어에서 Nightscout 업로더 앱을 다운로드하고 [Nightscout](http://www.nightscout.info/wiki/welcome/basic-requirements)에 있는 지시사항을 따르세요. 
* AndroidAPS 설정에서 당신의 Nightscout 웹사이트와 API 비밀번호를 입력하세요.
* 구성관리자(안드로이드 APS 셋팅)에서 NS클라이언트를 선택하세요.

## For users of Libre with Bluetooth cap  


To use your Libre as a CGM that is getting new BG values every 5 minutes you first need to buy a NFC to Bluetooth adapter like:

* MiaoMiao 리더 <https://www.miaomiao.cool/>
* Blukon Nightrider <https://www.ambrosiasys.com/howit>
* Bluereader <https://bluetoolz.de/blueorder/#home>
* Sony Smartwatch 3(SWR50) als auslesetool <https://github.com/pimpimmi/LibreAlarm/wiki/>

### If using xdrip...  


* 만약 미리 셋업하지 않았다면 xdrip 다운로드하고 [LimiTTEer](https://github.com/JoernL/LimiTTer), [Libre Alarm](https://github.com/pimpimmi/LibreAlarm/wiki) or [BlueReader](https://unendlichkeit.net/wordpress/?p=680&lang=en)([Hardware](https://bluetoolz.de/wordpress/)) 에 있는 지시사항을 따르세요.
* xDrip 에서 세팅>앱간 호환성 설정>Broadcast Locally 선택
* xDrip 에서 세팅>앱간 호환성 설정>Accept Treament를 OFF 하세요
* AndroidAPS에서 보정하여 사용할수 있기를 원한다면 xDrip세팅>앱간 호환성 설정>Accept Calibrations을 ON 하세요. 세팅>추가 세팅>Advanced Calibration 설정에서 옵션사항들을 검토할 수 있습니다.
* 구성관리자(AndroidAPS 셋팅)에서 xDrip을 선택하세요.
* G5 기본 모드의 경우 xDrip에서 세팅> Cloud upload > REST API > Extra options > Append source info to device 을 ON 하세요.

### If using Glimp...  


* 만약 미리 셋업하지 않았다면 Glimp 다운로드하고 [nightscout](http://www.nightscout.info/wiki/welcome/nightscout-for-libre)에 있는 지시사항을 따르세요.
* 구성관리자(AndroidAPS 세팅)에서 Glimp 선택하세요.

## For users of Eversense  


The easiest way to use Eversense with AndroidAPS is to install the modified [Eversense app](https://github.com/BernhardRo/Esel/blob/master/apk/mod_com.senseonics.gen12androidapp-release.apk) (and unistall the original one first).

**Warning: by uninstalling the old app, your local historical data older than one week will be lost!**

To finally get your data to AndroidAPS, you need to install [ESEL](https://github.com/BernhardRo/Esel/blob/master/apk/esel.apk) and enable "Send to AAPS and xDrip" in ESEL and "MM640g" as BG source in the [Configuration Builder](../Configuration/Config-Builder.md) in AndroidAPS. As the BG data from Eversense can be noisy sometimes, it is good to enable "Smooth Data" in ESEL, which is better than enabling "Always use short average delta instead of simple data".

You can find another instruction for using xDrip with an Eversense [here](https://github.com/BernhardRo/Esel/tree/master/apk).

## For users of MM640g or MM630g  


* 만약 미리 셋업하지 않았다면 [600SeriesAndroidUploaer](http://pazaan.github.io/600SeriesAndroidUploader/)를 다운로드하고 [nightscout](http://www.nightscout.info/wiki/welcome/nightscout-and-medtronic-640g)에 있는 지시사항을 따르세요.
* 600시리즈 업로더에서 세팅으로가서 >xdrip+보내기 를 선택하세요.
* 구성관리자(AndroidAPS 세팅)에서 미니메드640g를 선택하세요.

## For users of PocTech CT-100  


* PocTech 앱을 설치하세요.
* 구성관리자(AndroidAPS 셋팅)에서 PocTech 앱을 선택하세요.

**For users of other CGM uploaded to nightscout:**  
If you have any other CGM set up that sends your data to [Nightscout](http://www.nightscout.info) then  


* AndroidAPS 설정에서 당신의 Nightscout 웹사이트와 API 비밀번호를 입력하세요.
* 구성관리자(AndroidAPS 셋팅)에서 NSClient를 선택하세요.