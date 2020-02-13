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
원격 Bolus 주입은 15분 내에 허용되지 않습니다 - 이 값은 2개의 폰번호가 추가되었을 시만 수정가능합니다. 따라서 응답은 최근 Bolus 주입시간에 따라 달라지게 됩니다.

* BOLUS 1.2
   * 응답 A: Bolus 1.2U을 주입하려면 Rrt를 입력하고 답장하세요
   * 응답 B: 원격 주입이 불가능합니다. 나중에 다시 시도해주세요.
* BOLUS 0.60 MEAL
   * MEAL 옵션을 지정하는 경우 MEAL 임시목표가 설정됩니다 (기본값은 45분동안 목표값 90 mg/dL입니다).
   * 응답 A: MEAL Bolus 0.6U을 주입하려면 Rrt를 입력하고 답장하세요
   * 응답 B: 원격 주입이 불가능합니다. 
* CARBS 5
   * 응답: 12:45에 5g을 입력하려면 EmF를 입력하고 답장하세요
* CARBS 5 17:35/5:35PM
   * 응답: 17:35에 5g을 입력하려면 EmF를 입력하고 답장하세요
* EXTENDED STOP/CANCEL
   * 응답: 확장 Bolus를 중지하려면 EmF 를 입력하고 답장하세요
* EXTENDED 2 120
   * 응답: 120분 동안 확장 Bolus 2U 주입하려면 EmF 를 입력하고 답장하세요

프로파일
--------------------------------------------------
* PROFILE STATUS
   * 응답: Profile1
* PROFILE LIST
   * 응답: 1.`Profile1` 2.`Profile2`
* PROFILE 1
   * 응답: 프로파일 Profile1 100%로 변경하려면 Any 를 입력하고 답장하세요
* PROFILE 2 30
   * 응답: 프로파일 Profile2 30%로 변경하려면 Any 를 입력하고 답장하세요

기타
--------------------------------------------------
* TREATMENTS REFRESH
   * 응답: NS에서 관리 새로고침
* NSCLIENT RESTART
   * 응답: NSCLIENT RESTART 1 receivers
* PUMP
   * 응답: Last conn: 1 minago Temp: 0.00U/h @11:38 5/30min IOB: 0.5U Reserv: 34U Batt: 100
* SMS DISABLE/STOP
   * 응답: SMS 원격 기능을 비활성화려면 Any를 입력하고 답장하세요. AAPS 마스터폰을 통해서만 다시 활성화할 수 있습니다.
* TARGET MEAL/ACTIVITY/HYPO   
   * 응답: 임시목표 MEAL/ACTIVITY/HYPO를 설정하려면 Any를 입력하고 답장하세요
* TARGET STOP/CANCEL   
   * 응답: 임시목표를 취소하려면 Any를 입력하고 답장하세요
* HELP
   * 응답: BG, LOOP, TREATMENTS, .....
* HELP BOLUS
   * 응답: BOLUS 1.2 BOLUS 1.2 MEAL

문제해결
==================================================
무한 SMS
--------------------------------------------------
동일한 메세지를 끊임없이 계속 수신하는 경우 (예. 프로파일 변경) 아마도 다른 앱과 무한루프가 되게 설정되었을 가능성이 있습니다. 예를 들면 그 앱이 xDrip+일 수가 있습니다. 따라서 그런경우엔, xDrip+(또는 다른앱)이 treatments를 NS에 업로드하지 않도록 하세요. 

다른 앱이 여러 휴대 전화에 설치된 경우 모든 휴대 전화에서 업로드를 비활성화해야합니다.

삼성폰에서 SMS 명령어가 작동하지 않을 경우
--------------------------------------------------
갤럭시 S10 폰 업데이트 이후 SMS 명령어가 작동하지 않는다는 문제가 보고되었습니다. '채팅 메세지로 보내기'를 비활성화하면 해결될 수 있습니다.

.. image:: ../images/SMSdisableChat.png
  :alt: 채팅 메세지로 보내기 비활성화하기
