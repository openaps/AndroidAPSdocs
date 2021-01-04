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
* If you are restarting sensors, either do it without the factory calibration for safest results on days 11 and 12, or ensure you are ready to calibrate and keep an eye on variation.
* Pre-soaking of the G6 with factory calibration is likely to give variation in results. 만일 pre-soak을 한다면, 가장 정확한 결과값을 얻기 위해 센서를 보정할 필요가 있습니다.
* If you aren’t being observant about the changes that may be taking place, it may be better to revert to non-factory-calibrated mode and use the system like a G5.

To learn more about the details and reasons for these recommendations read the `complete article <http://www.diabettech.com/artificial-pancreas/diy-looping-and-cgm/>`_ published by Tim Street at `www.diabettech.com <http://www.diabettech.com>`_.

If using G6 with xDrip+
==================================================
* The Dexcom G6 transmitter can simultaneously be connected to the Dexcom receiver (or alternatively the t:slim pump) and one app on your phone.
* When using xDrip+ as receiver uninstall Dexcom app first. **You cannot connect xDrip+ and Dexcom app with the transmitter at the same time!**
* If you need Clarity and want to profit from xDrip+ alarms use the `patched Dexcom app <../Hardware/DexcomG6.html#if-using-g6-with-patched-dexcom-app>`_ with local broadcast to xDrip+.
* If not already set up then download `xdrip <https://github.com/NightscoutFoundation/xDrip>`_ and follow instructions on nightscout (`G5 <http://www.nightscout.info/wiki/welcome/nightscout-with-xdrip-and-dexcom-share-wireless/xdrip-with-g5-support>`_).
* 구성 관리자 (AndroidAPS의 세팅)에서 xDrip+를 선택합니다.
* Adjust settings in xDrip+ according to `xDrip+ settings page <../Configuration/xdrip.html>`_
* If AAPS does not receive BG values when phone is in airplane mode use `Identify receiver` as describe on `xDrip+ settings page <../Configuration/xdrip.html>`_.

If using G6 with patched Dexcom app
==================================================
* Download the apk from `https://github.com/dexcomapp/dexcomapp <https://github.com/dexcomapp/dexcomapp>`_, and choose the version that fits your needs (mg/dl or mmol/l version, G6).

   * Folder 2.4 for users of the current version, folder 2.3 is only for the outdated AndroidAPS 2.3.
   * Open https://play.google.com/store/search?q=dexcom%20g6 on your computer. 
   * Click the link to the Dexcom G6 app on the search results page that is displayed.
   * Region will be visible in URL.
   
   .. image:: ../images/DexcomG6regionURL.PNG
     :alt: Region in Dexcom G6 URL

* 오리지날 Dexcom 앱이 남아 있는 경우 센서를 스탑하고 삭제합니다.
* 다운로드 된 apk를 설치합니다.
* 센서를 시작합니다.
* 구성 관리자 (AndroidAPS의 설정)에서 Dexcom 앱 (패치버전)을 선택합니다.
* If you want to use xDrip+ alarms via local broadcast: in xDrip+ hamburger menu > settings > hardware data source > 640G /EverSense.
* There is no local broadcast from patched Dexcom app directly to xDrip+. Broadcast has to go through AAPS as described above.

If using G6 with Build Your Own Dexcom App
==================================================
* As of December 2020 `Build Your Own Dexcom App <https://docs.google.com/forms/d/e/1FAIpQLScD76G0Y-BlL4tZljaFkjlwuqhT83QlFM5v6ZEfO7gCU98iJQ/viewform?fbzx=2196386787609383750&fbclid=IwAR2aL8Cps1s6W8apUVK-gOqgGpA-McMPJj9Y8emf_P0-_gAsmJs6QwAY-o0>`_ (BYODA)also supports local broadcast to AAPS and/or xDrip+ (not for G5 sensors!)
* This app lets you use your Dexcom G6 with any Android smartphone.
* In phone settings go to apps > Dexcom G6 > permissions > additional permissions and press 'Access Dexcom app'.

Settings for AndroidAPS
--------------------------------------------------
* Select 'Dexcom App (patched)' in config builder.
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
General Troubleshoothing for CGMs can be found `here <./GeneralCGMRecommendation.html#troubleshooting>`_.

New transmitter with running sensor
--------------------------------------------------
If you happen to change transmitter during a running sensor session you might try to remove the transmitter without damaging the sensor mount. A video can be found at `https://youtu.be/AAhBVsc6NZo <https://youtu.be/AAhBVsc6NZo>`_.
