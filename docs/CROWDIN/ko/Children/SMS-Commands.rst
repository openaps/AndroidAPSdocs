SMS 명령어
**************************************************
안전유의사항
==================================================
* AndroidAPS는 SMS 문자를 통해 아이의 폰을 원격으로 조정할 수 있습니다. SMS 통신기를 활성화 했다면, 원격 명령어를 사용하기 위해 설정된 폰(부모폰)이 도난 될 수도 있는 경우도 발생할 수 있다는것을 항상 유념하세요. 따라서 최소한 PIN 코드이상의 보안으로 본인의 폰을 보호하세요.
* Bolus 혹은 프로파일 변경 등의 원격 명령들이 수행되었다면 AndroidAPS 역시 SMS 문자로 항상 알려줄 것입니다. 수신 폰 중 하나가 도난당한 경우를 대비하여 적어도 2개 이상의 폰에 확인 SMS 문자가 전송될 수 있도록 설정해놓는 것이 좋습니다.
* **SMS 원격명령을 통해 Bolus를 주입한 경우 Nightscout (NSClient, 웹사이트...)를 통해 탄수화물양을 항상 입력하여야 합니다!** 그러지 않으면 너무 낮은 COB인 상태에서 IOB가 계산될 것이고 AAPS가 당신이 너무 많은 활성 인슐린을 가지고 있다고 가정하게 되기 때문에 적절한 보정 주입이 되지 않을 수 있습니다.

사용 방법
==================================================
* Most of the adjustments of temp targets, following AAPS etc. can be done on `NSclient app <../Children/Children.html>`_ on an Android phone with an internet connection.
* Boluses can't be given through Nightscout, but you can use SMS commands.
* If you use an iPhone as a follower and therefore cannot use NSclient, there are additional SMS commands available.

* In your android phone setting go to Applications > AndroidAPS > Permissions and enable SMS
* In AndroidAPS go to Preferences > SMS Communicator and enter the phone number(s) that you will allow SMS commands to come from (separated by semicolons - i.e. +4412345678;+4412345679) and also enable 'Allow remote commands via SMS'.
* If you want to use more than one number:

  * Enter just one number.
  * Make that single number work by sending and confirming a SMS command.
  * Enter additional number(s) separated by semicolon, no space.
  
    .. image:: ../images/SMSCommandsSetupSpace.png
      :alt: SMS Commands Setup


* Send a SMS to the phone with AndroidAPS running from your approved phone number(s) using any of the commands below in **CAPITAL LETTERS**, the phone will respond to confirm success of command or status requested. Confirm command by sending the code provided in SMS from AndroidAPS phone where neccessary.

**Hint**: It can be useful to have SMS flat for both phones if a lot of SMS will be sent.

명령어
==================================================

SMS 명령을 전송할때 대문자와 소문자는 구별하지 않습니다.

SMS 명령어는 영어로만 전송하여야 하며, 응답이 `번역 <../translations.html#translate-strings-for-androidaps-app>`된 경우 번역문으로 응답을 받게 됩니다.

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
   * 응답: 보정값 120을 전송하려면 Rrt 를 입력하고 답장하세요
   * 코드 전송 후 응답: 보정 전송됨 (**xDrip이 설치되었다면 xDrip+에서 Accept Calibrations가 활성화 되어 있어야만 합니다**)

Basal
--------------------------------------------------
* BASAL STOP/CANCEL
   * 응답: 임시Basal을 중지하려면 EmF 를 입력하고 답장하세요 [참고: 코드 EmF는 단순 예시일 뿐입니다]
* BASAL 0.3
   * 응답: 30분 동안 Basal 0.3U/h 주입하려면 Swe 를 입력하고 답장하세요
* BASAL 0.3 20
   * 응답: 20분 동안 Basal 0.3U/h 주입하려면 Swe 를 입력하고 답장하세요
* BASAL 30%
   * 응답: 30 분 동안 Basal 30% 주입하려면 Swe을 입력하고 답장하세요
* BASAL 30% 50
   * 응답: 50 분 동안 Basal 30% 주입하려면 Swe을 입력하고 답장하세요

Bolus
--------------------------------------------------
Remote bolus not allowed within 15 min -value editable only if 2 phone numbers added- after last bolus command or remote commands! Therefore response depends on time last bolus was given.

* BOLUS 1.2
   * Response A: To deliver bolus 1.2U reply with code Rrt
   * Response B: Remote bolus not available. Try again later.
* BOLUS 0.60 MEAL
   * If you specify the optional parameter MEAL, this sets the Temp Target MEAL (default values are: 90 mg/dL, 5.0 mmol/l for 45 mins).
   * Response A: To deliver meal bolus 0.60U reply with code Rrt
   * Response B: Remote bolus not available. 
* CARBS 5
   * Response: To enter 5g at 12:45 reply with code EmF
* CARBS 5 17:35/5:35PM
   * Response: To enter 5g at 17:35 reply with code EmF
* EXTENDED STOP/CANCEL
   * Response: To stop extended bolus reply with code EmF
* EXTENDED 2 120
   * Response: To start extended bolus 2U for 120 min reply with code EmF

프로파일
--------------------------------------------------
* PROFILE STATUS
   * Response: Profile1
* PROFILE LIST
   * Response: 1.`Profile1` 2.`Profile2`
* PROFILE 1
   * Response: To switch profile to Profile1 100% reply with code Any
* PROFILE 2 30
   * Response: To switch profile to Profile2 30% reply with code Any

Other
--------------------------------------------------
* TREATMENTS REFRESH
   * Response: Refresh treatments from NS
* NSCLIENT RESTART
   * Response: NSCLIENT RESTART 1 receivers
* PUMP
   * Response: Last conn: 1 minago Temp: 0.00U/h @11:38 5/30min IOB: 0.5U Reserv: 34U Batt: 100
* SMS DISABLE/STOP
   * Response: To disable the SMS Remote Service reply with code Any. Keep in mind that you'll able to reactivate it directly from the AAPS master smartphone only.
* TARGET MEAL/ACTIVITY/HYPO   
   * Response: To set the Temp Target MEAL/ACTIVITY/HYPO reply with code Any
* TARGET STOP/CANCEL   
   * Response: To cancel Temp Target reply with code Any
* HELP
   * Response: BG, LOOP, TREATMENTS, .....
* HELP BOLUS
   * Response: BOLUS 1.2 BOLUS 1.2 MEAL

Troubleshooting
==================================================
Multiple SMS
--------------------------------------------------
If you receive the same message over and over again (i.e. profile switch) you will probably have set up a circle with other apps. This could be xDrip+, for example. If so, please make sure that xDrip+ (or any other app) does not uploads treatments to NS. 

If the other app is installed on multiple phones make sure to deactive upload on all of them.

SMS commands not working on Samsung phones
--------------------------------------------------
There was a report on SMS commands stopping after an update on Galaxy S10 phone. Could be solved by disabeling 'send as chat message'.

.. image:: ../images/SMSdisableChat.png
  :alt: Disable SMS as chat message
