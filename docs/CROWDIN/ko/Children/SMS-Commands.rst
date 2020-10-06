SMS 명령어
**************************************************
안전유의사항
==================================================
* AndroidAPS는 SMS 문자를 통해 아이의 폰을 원격으로 조정할 수 있습니다. SMS 통신기를 활성화 했다면, 원격 명령어를 사용하기 위해 설정된 폰(부모폰)이 도난 될 수도 있는 경우도 발생할 수 있다는것을 항상 유념하세요. 따라서 최소한 PIN 코드이상의 보안으로 본인의 폰을 보호하세요.
* Bolus 혹은 프로파일 변경 등의 원격 명령들이 수행되었다면 AndroidAPS 역시 SMS 문자로 항상 알려줄 것입니다. 수신 폰 중 하나가 도난당한 경우를 대비하여 적어도 2개 이상의 폰에 확인 SMS 문자가 전송될 수 있도록 설정해놓는 것이 좋습니다.
* **SMS 원격명령을 통해 Bolus를 주입한 경우 Nightscout (NSClient, 웹사이트...)를 통해 탄수화물양을 항상 입력하여야 합니다!** 그러지 않으면 너무 낮은 COB인 상태에서 IOB가 계산될 것이고 AAPS가 당신이 너무 많은 활성 인슐린을 가지고 있다고 가정하게 되기 때문에 적절한 보정 주입이 되지 않을 수 있습니다.
* As of AndroidAPS version 2.7 an authenticator app with a time-based one-time password must be used to increase safety when using SMS commands.
* Your remote device should be protected with strong password or biometrics.
* Additionally it is recommended to allow a `second phone number <#authorized-phone-numbers>`_ for SMS commands. So you can use second number to `temporary disable <#other>`_ SMS communicator in case your main remote phone gets lost or stolen.

Setup SMS commands
==================================================

.. image:: ../images/SMSCommandsSetup.png
  :alt: SMS 명령 설정
      
* AAPS와 작동하는 임시 목표와 관련된 대부분의 조정들은 can be done on `NSClient app <../Children/Children.html>`_ on an Android phone with an internet connection.
Bolus는 Nightscout를 통해 원격 주입되지 않지만, SMS 명령으로 가능합니다.
* If you use an iPhone as a follower and therefore cannot use NSClient app, there are additional SMS commands available.

* 당신의 안드로이드폰의 환경설정에서 애플리케이션 > AndroidAPS > 권한에 들어간 뒤 SMS를 활성화하세요

Authorized phone numbers
-------------------------------------------------
* In AndroidAPS go to **Preferences > SMS Communicator** and enter the phone number(s) that you will allow SMS commands to come from (separated by semicolons - i.e. +6412345678;+6412345679) 
* Enable 'Allow remote commands via SMS'.
* 하나 이상의 전화번호 사용을 원한다면:

  * 하나의 번호만 입력하세요.
  * SMS 명령을 보내고 확인하여 해당 전화번호가 올바르게 작동하는지 확인하십시오.
  * 다른 번호를 입력하세요. 세미콜론으로 구분하고 공백이 있으면 안됩니다.
  
    .. image:: ../images/SMSCommandsSetupSpace2.png
      :alt: SMS Commands Setup multiple numbers

Minutes between bolus commands
-------------------------------------------------
* You can define the minimum delay between to boluses issued via SMS.
* For safety reasons you have to add at least two authorized phone numbers to edit this value.

Additionally mandatory PIN at token end
-------------------------------------------------
* For safety reasons the reply code must be followed by a PIN.
* PIN rules:

   * 3 to 6 digits
   * not same digits (i.e. 1111)
   * not in a row (i.e. 1234)

Authenticator setup
-------------------------------------------------
* Two-factor authentication is used to improve safety.
* You can use any Authenticator app that supports RFC 6238 TOTP tokens. Popular free apps are:

   * `Authy <https://authy.com/download/>`_
   * Google Authenticator - `Android <https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2>`_ / `iOS <https://apps.apple.com/de/app/google-authenticator/id388497605>`_
   * `LastPass Authenticator <https://lastpass.com/auth/>`_
   * `FreeOTP Authenticator <https://freeotp.github.io/>`_

* Install the authenticator app of your choice on your follower phone and scan the QR code shown in AAPS.
* Test the one-time password by entering the token shown in your authenticator app and the PIN you just setup in AAPS. 예시:

   * Your mandatory PIN is 2020
   * TOTP token from the authenticator app is 457051
   * Enter 4570512020
   
* Red text "WRONG PIN" will change **automatically** to green "OK" if entry is correct. **There is no button you can press!**
* Time on both phones must be synchronized. Best practice is automatically from network. Time differences might lead to authentication problems.
* Use button "RESET AUTHENTICATORS" if you want to remove provisions.

Use SMS commands
==================================================
* Send a SMS to the phone with AndroidAPS running from your approved phone number(s) using any of the `commands <../Children/SMS-Commands.html#commands>`_ below. 
* The AAPS phone will respond to confirm success of command or status requested. 
* Confirm command by sending the code where necessary. 예시:

   * Your mandatory PIN is 2020
   * TOTP token from the authenticator app is 457051
   * Enter 4570512020

**힌트**: 많은 SMS를 사용한다면 SMS 제한없는 요금제를 사용하면 좋습니다.

명령어
==================================================
Commands must be send in English, response will be in your local language if the response string is already `translated <../translations.html#translate-strings-for-androidaps-app>`_.

.. image:: ../images/SMSCommands.png
  :alt: SMS Commands Example

Loop
--------------------------------------------------
* LOOP STOP/DISABLE
   * 응답: Loop가 중지되었습니다
* LOOP START/ENABLE
   * 응답: Loop가 실행되었습니다
* LOOP STATUS
   * 현재의 Loop의 상태에 따라 응답됩니다
      * Loop가 중지중입니다
      * Loop가 실행중입니다
      * 일시중지중 (10분)
* LOOP SUSPEND 20
   * 응답: Loop가 20분동안 일시중지되었습니다
* LOOP RESUME
   * 응답: Loop가 재실행되었습니다

CGM 데이터
--------------------------------------------------
* BG
   * 응답: Last BG: 5.6 4min ago, Delta: -0,2 mmol, IOB: 0.20U (Bolus: 0.10U Basal: 0.10U)
* CAL 120
   * Response: To send calibration 5.6 reply with code from Authenticator app for User followed by PIN
   * 코드 전송 후 응답: 보정 전송됨 (**xDrip이 설치되었다면 xDrip+에서 Accept Calibrations가 활성화 되어 있어야만 합니다**)

Basal
--------------------------------------------------
* BASAL STOP/CANCEL
   * Response: To stop temp basal reply with code from Authenticator app for User followed by PIN
* BASAL 0.3
   * Response: To start basal 0.3U/h for 30 min reply with code from Authenticator app for User followed by PIN
* BASAL 0.3 20
   * Response: To start basal 0.3U/h for 20 min reply with code from Authenticator app for User followed by PIN
* BASAL 30%
   * Response: To start basal 30% for 30 min reply with code from Authenticator app for User followed by PIN
* BASAL 30% 50
   * Response: To start basal 30% for 50 min reply with code from Authenticator app for User followed by PIN

Bolus
--------------------------------------------------
원격 Bolus 주입은 15분 내에 허용되지 않습니다 - 이 값은 2개의 폰번호가 추가되었을 시만 수정가능합니다. 따라서 응답은 최근 Bolus 주입시간에 따라 달라지게 됩니다.

* BOLUS 1.2
   * Response A: To deliver bolus 1.2U reply with code from Authenticator app for User followed by PIN
   * 응답 B: 원격 주입이 불가능합니다. 나중에 다시 시도해주세요.
* BOLUS 0.60 MEAL
   * MEAL 옵션을 지정하는 경우 MEAL 임시목표가 설정됩니다 (기본값은 45분동안 목표값 90 mg/dL입니다).
   * Response A: To deliver meal bolus 0.60U reply with code from Authenticator app for User followed by PIN
   * 응답 B: 원격 주입이 불가능합니다. 
* CARBS 5
   * Response: To enter 5g at 12:45 reply with code from Authenticator app for User followed by PIN
* CARBS 5 17:35/5:35PM
   * Response: To enter 5g at 17:35 reply with code from Authenticator app for User followed by PIN
* EXTENDED STOP/CANCEL
   * Response: To stop extended bolus reply with code from Authenticator app for User followed by PIN
* EXTENDED 2 120
   * Response: To start extended bolus 2U for 120 min reply with code from Authenticator app for User followed by PIN

프로파일
--------------------------------------------------
* PROFILE STATUS
   * 응답: Profile1
* PROFILE LIST
   * 응답: 1.`Profile1` 2.`Profile2`
* PROFILE 1
   * Response: To switch profile to Profile1 100% reply with code from Authenticator app for User followed by PIN
* PROFILE 2 30
   * Response: To switch profile to Profile2 30% reply with code from Authenticator app for User followed by PIN

기타
--------------------------------------------------
* TREATMENTS REFRESH
   * 응답: NS에서 관리 새로고침
* NSCLIENT RESTART
   * 응답: NSCLIENT RESTART 1 receivers
* PUMP
   * Response: Last conn: 1 min ago Temp: 0.00U/h @11:38 5/30min IOB: 0.5U Reserv: 34U Batt: 100
* PUMP CONNECT
   * Response: Pump reconnected
* PUMP DISCONNECT *30*
   * Response: To disconnect pump for *30* minutes reply with code from Authenticator app for User followed by PIN
* SMS DISABLE/STOP
   * 응답: SMS 원격 기능을 비활성화려면 Any를 입력하고 답장하세요. AAPS 마스터폰을 통해서만 다시 활성화할 수 있습니다.
* TARGET MEAL/ACTIVITY/HYPO   
   * Response: To set the Temp Target MEAL/ACTIVITY/HYPO reply with code from Authenticator app for User followed by PIN
* TARGET STOP/CANCEL   
   * Response: To cancel Temp Target reply with code from Authenticator app for User followed by PIN
* HELP
   * 응답: BG, LOOP, TREATMENTS, .....
* HELP BOLUS
   * 응답: BOLUS 1.2 BOLUS 1.2 MEAL

문제해결
==================================================
무한 SMS
--------------------------------------------------
동일한 메세지를 끊임없이 계속 수신하는 경우 (예. 프로파일 변경) 아마도 다른 앱과 무한루프가 되게 설정되었을 가능성이 있습니다. 예를 들면 그 앱이 xDrip+일 수가 있습니다. 따라서 그런경우엔, xDrip+(또는 다른앱)이 treatments를 NS에 업로드하지 않도록 하세요. 

If the other app is installed on multiple phones make sure to deactivate upload on all of them.

삼성폰에서 SMS 명령어가 작동하지 않을 경우
--------------------------------------------------
갤럭시 S10 폰 업데이트 이후 SMS 명령어가 작동하지 않는다는 문제가 보고되었습니다. '채팅 메세지로 보내기'를 비활성화하면 해결될 수 있습니다.

.. image:: ../images/SMSdisableChat.png
  :alt: 채팅 메세지로 보내기 비활성화하기
