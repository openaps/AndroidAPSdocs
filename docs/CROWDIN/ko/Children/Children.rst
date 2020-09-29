원격 모니터링
**************************************************

.. 이미지:: ../images/KidsMonitoring.png
  :alt: 아이들 모니터링
  
AndroidAPS는 아이들을 모니터링 하기 위한 몇가지 옵션을 제공하고 원격 명령어를 보낼 수 있다. 물론 동료나 친구들에게도 원격 모니터링을 사용할 수 있다.

기능
==================================================
AndroidAPS를 사용하면 아이들의 펌프는 아이들의 폰으로 제어될 수 있다.
부모는 원격에서 혈당, COB 그리고 IOB 등과 같은 수치를 볼 수 있다. 부모폰의 **NSClient app**을 통해. AndroidAPS와 NSClient에서의 설정은 동일해야 합니다.
* 부모님폰에서 **xDrip+의 팔로워 모드**를 이용하면 알람을 받을 수 있습니다.
* Remote control of AndroidAPS using `SMS Commands <../Children/SMS-Commands.html>`_ secured by two-factor authentication.
* NSClient 앱을 통해 원격 프로파일 변경, 임시 목표 변경.

원격 모니터링을 위한 도구와 앱
--------------------------------------------------
* `Nightscout 앱 <http://www.nightscout.info/>`_웹 브라우저 (주로 출력되는 데이터)
*	NSClient 앱
*	만약 Dexcom follow 앱을 이용한다면 (혈당 값만)
* `xDrip+ <../Configuration/xdrip.html>`_ 팔로워 모드 (주로 혈당과 **알람**)
*	`Sugarmate <https://sugarmate.io/>`_ or `Spike <https://spike-app.com/>`_ on iOS (mainly BG values and **alarms**)

고려해야 할 사항
==================================================
* 아이들을 위한 '파라미터(Basal 양, DIA, ISF...)의 정확한 설정 <../Getting-Started/FAQ.html#how-to-begin>`_ 은 어렵다, 특별하게 성장 호르몬이 분비될 때. 
* AndroidAPS와 NSClient에서의 설정은 동일해야 합니다.
* AAPS 마스터폰은 Loop를 실행한 후에만 업로드를 실행하고, 또 업로드와 다운로드 시간 차으로 인해 발생하는 마스터폰과 팔로워폰 사이의 시간 차이를 고려하세요.
* 그래서 원격 모니터링과 원격 관리를 시작하기 전에 아이와 함께 실생활에서 테스트하고 정확하게 설정하는 시간을 가져야 한다. 방학은 그것들을 정하기에 좋은 시간이 될 것이다.
* 원격 제어가 동작하지 않았을 때의 어떻게 대처할지에 대한 계획이 있는가? (예를 들면 네트워크 문제 등)
* 원격 모니터링과 관리는 유치원이나 초등학교에서는 정말로 도움이 될 수 있다. 그러나 선생님과 교육자들이 아이의 관리 계획을 인지하고 있는지 확인해야 한다. 그러한 계획에 대한 예는 Facebook에서 'AndroidAPS 사용자들을 위한 파일 섹션 <https://www.facebook.com/groups/AndroidAPSUsers/files/>`을 통해 얻어질 수 있다.
