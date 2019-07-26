AndroidAPS 가이드에 오신 것을 환영합니다.
==============================================

.. note:: 
   **IMPORTANT SAFETY NOTICE**

   The foundation of AndroidAPS safety features discussed in this documentation is built on the safety features of the hardware used to build your system. It is critically important that you only use a tested, fully functioning FDA or CE approved insulin pump and CGM for closing an automated insulin dosing loop. Hardware or software modifications to these components can cause unexpected insulin dosing, causing significant risk to the user. If you find or get offered broken, modified or self-made insulin pumps or CGM receivers, *do not use* these for creating an AndroidAPS system.

   Additionally, it is equally important to only use original supplies such as inserters, cannulas and insulin containers approved by the manufacturer for use with your pump or CGM. Using untested or modified supplies can cause CGM inaccuracy and insulin dosing errors. Insulin is highly dangerous when misdosed - please do not play with your life by hacking with your supplies.

.. note:: 
	**고지사항 및 경고문**

	이곳에 설명된 모든 정보, 생각, 코드는 오직 정보제공 및 교육적 목적으로만 제공된 것입니다. Nightscout은 현재 HIPAA 개인 정보 보호 준수 규약을 따르지 않습니다. Nightscout와 AndroidAPS를 본인의 책임하에 사용하세요. 의학적 결정을 위해 이 정보와 코드를 사용하지 마세요.

	github.com의 코드를 사용함에 있어 어떤 보증이나 공식적인 지원은 없습니다. 자세한 것은 이 곳의 라이센스에 대한 자세한 내용을 참고하세요.

	* 모든 제품명, 회사명, 상표, 서비스표, 등록상표, 등록 서비스표는 해당 소유자의 고유 재산입니다. 그것들을 사용한 것은 정보를 제공하기 위한 목적이며, 그들과의 제휴 또는 보증을 의미하지는 않습니다.

	참고 - 이 프로젝트는 `수일개발 <http://www.sooil.com/main.php>`_, `Dexcom <http://www.dexcom.com/>`_, `아큐-첵, Roche Diabetes Care <http://www.accu-chek.com/>`_ 과 관련이 없으며 이들이 어떠한 보증도 해주지 않습니다.


**AndroidAPS가 무엇입니까?**

AndroidAPS는 인공췌장시스템(APS) 안드로이드용 스마트폰 앱입니다. 인공췌장시스템(APS)는 무엇입니까? 혈당을 건강한 범위안에서 유지시켜주는 췌장의 역할을 소프트웨어적으로 하게 만든 프로그램입니다. APS가 실제 췌장과 동일한 역할을 하진 못하지만, 1형당뇨인들이 기기를 이용하여 보다 편하고 안전하게 혈당을 관리할 수 있도록 하게해줍니다. 연속혈당측정기(CGM)이 AndroidAPS에 혈당정보를 전달해주고, AndroidAPS가 인슐린펌프에 적절한 인슐린 양을 조절하게 하여줍니다. 이 앱들은 블루투스로 서로 통신합니다. OpenAPS라고 불리는 또 다른 인공췌장시스템을 위해 개발된 특별한 알고리즘 혹은 규칙을 사용하여 적정 인슐린 양을 계산합니다. 이 OpenAPS는 전 세계 수천명의 사람들이 사용하며 수백만 시간의 누적사용양을 기록하고 있습니다. 

주의사항 : AndroidAPS는 어느 국가의 어느 의료기관에서도 규제하지 않습니다. AndroidAPS를 사용하는 것은 본인에게 스스로 의료적인 실험을 수행하는 것을 기본으로 합니다. 이 시스템을 구축하기 위해선 의지와 기술적 지식이 필요합니다. 처음에 이러한 기술적인 지식이 없다면, 스스로 노력하여 익혀야 할것입니다. 당신이 필요로 하는 정보를 이 문서, 인터넷, 혹은 이 시스템을 이미 이용하고 있는 사용자 들로부터 얻을 수 있을 것이며, 페이스북, 슈거트리 혹은 다른 커뮤니티를 통해 질문하실 수 있습니다. 많은 사람들이 AndroidAPS를 성공적으로 구축하여 안전하게 이용하게 있습니다. 하지만 모든 사용자들에게 아래 사항은 필수사항입니다.

* 시스템이 어떻게 작동하는지 철저히 이해할 수 있도록 시스템을 스스로 구축합니다.
* 본인의 당뇨에 맞게 설정을 조정합니다.
* 시스템이 올바르게 작동하는지 확인하고 관리하세요.

이 도전을 하실 준비가 되었다면 계속 읽어주세요. 

**Primary goals behind AndroidAPS:**

* 안전 기능이 내장된 앱 Oref0와 oref1라는 이름으로 알려진 알고리즘의 안전 기능에 대해서 알고 싶다면 여기를 눌러주세요 (https://openaps.org/reference-design/)
1형당뇨 관리를 위해 인공췌장과 Nightscout를 하나로 통합한 앱
* An app to which users can easily add or remove modules as needed
* An app with different versions for specific locations and languages.
* An app which can be used in open- and closed-loop mode
* An app that is totally transparent: users can input parameters, see results, and make the final decision
* An app which is independent of particular pump drivers and contains a "virtual pump" so users can safely experiment before using it on themselves 
* An app closely integrated with Nightscout
* An app in which the user is in control of safety constraints 

**시작하기 위해 필요한 것들:**

* An Android smartphone with Android 5.0 or later. **Please update to Android 6 or higher as it is planned to drop support for Android 5.x soon.** See `this spreadsheet <https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit?usp=sharing>`_ to learn which phones work best with AndroidAPS.
* A continuous clucose monitor (CGM): Dexcom G4/G5/G6, Freestyle Libre, Eversense, Medtronic Guardian, or PocTech
* An app on the phone to receive CGM data: `xDrip <http://stephenblackwasalreadytaken.github.io/xDrip/>`_/ `xDrip+ <https://jamorham.github.io/#xdrip-plus>`_, `Glimp <https://play.google.com/store/apps/details?id=it.ct.glicemia>`_ , `G5 patched app <https://github.com/dexcomapp/dexcomapp>`_, `PochTech app <https://play.google.com/store/apps/details?id=jp.co.unitec.concretemanagement&hl=gsw>`_ or `600SeriesAndroidUploader <http://pazaan.github.io/600SeriesAndroidUploader/>`_
* `AndroidAPS <https://github.com/MilosKozak/AndroidAPS>`_ itself installed on the phone
* `Nightscout cgm-remote-monitor <http://www.nightscout.info/wiki/welcome/set-up-nightscout-using-heroku>`_ 0.10.2 버전 혹은 이후버전
* A supported pump: Dana-R or Dana-RS from Sooil, or Accu-Chek Combo or Insight from Roche (unless you are able to build your own driver for another insulin pump)



AndroidAPS 시작하기
----------------
.. toctree::
   :maxdepth: 1
   :glob:
   
   안전유의사항 <./Getting-Started/Safety-first>
   스크린샷 <./Getting-Started/Screenshots.md>
   스마트폰 <./Getting-Started/Phones.md>
   펌프 선택 <./Getting-Started/Pump-Choices.md>
   Possible future pump drivers  <./Getting-Started/Future-possible-Pump-Drivers.md>
   Sample Setup: Samsung S7, Dana-R, Dexcom G5 and Sony Smartwatch <./Getting-Started/Sample-Setup.md>
   APS사용자를 위한 FAQ
   용어 <./Getting-Started/Glossary.md>
  
AndroidAPS 설치하기
------------
.. toctree::
   :maxdepth: 1
   :glob:

   APK 파일 빌드하기 <./Installing-AndroidAPS/Building-APK.md>
   새 버전 혹은 다른 branch로 업데이트 하기 <./Installing-AndroidAPS/Update-to-new-version.md>
   릴리즈 노트 <./Installing-AndroidAPS/Releasenotes.md>
   Dev branch <./Installing-AndroidAPS/Dev_branch.md>
   Nightscout 설정 <./Installing-AndroidAPS/Nightscout.md>
   
환경설정 
---------------
.. toctree::
   :maxdepth: 1
   :glob:
   
   구성관리자 <./Configuration/Config-Builder.md>
   BG 소스<./Configuration/BG-Source.md>
   Dexcom G6 hints <./Configuration/Dexcom.md>
   Dana-R pump <./Configuration/DanaR-Insulin-Pump.md>
   Dana-RS pump <./Configuration/DanaRS-Insulin-Pump.md>
   Accu-Chek Combo pump <./Configuration/Accu-Chek-Combo-Pump.md>
   Accu-Chek Insight pump <./Configuration/Accu-Chek-Insight-Pump.md>
   Medtronic pump <./Configuration/MedtronicPump.md>
   워치화면 <./Configuration/Watchfaces.md>
   설정 <./Configuration/Preferences.md>
   민감도 감지와 COB <./Configuration/Sensitivity-detection-and-COB.md>
   xDrip+ settings <./Configuration/xdrip.md>
   
사용
------------
.. toctree::
   :maxdepth: 1
   :glob:
    
   목적 <./Usage/Objectives.md>
   OpenAPS 기능들 <./Usage/Open-APS-features.md>
   프로파일 변경 <./Usage/Profiles.md>
   Temp-targets <./Usage/temptarget.md>
   SMS commands <./Usage/SMS-Commands.md>
   확장 탄수화물
   Crossing timezones with pumps <./Usage/Timezone-traveling.md>
   로그 파일에 접근하기 <./Usage/Accessing-logfiles.md>
   Smoothing blood glucose data <./Usage/Smoothing-Blood-Glucose-Data-in-xDrip.md>
   Accu-Chek Combo tips for basic usage <./Usage/Accu-Chek-Combo-Tips-for-Basic-usage.md>
   NSClient 문제해결 <./Usage/Troubleshooting-NSClient.md>
   Android auto <./Usage/Android-auto.md>
   Huawei phones special configuration <./Usage/huawei.md>
   Jelly Pro - battery life optimization <./Usage/jelly.md>
   Automation <./Usage/automation.md>

도움을 구할 곳들 
------------
.. toctree::
   :maxdepth: 1
   :glob:

   시작하기 전에 보면 좋은 유용한 자료들 <./Where-To-Go-For-Help/Background-reading.md>
   도움을 구할 곳들 <./Where-To-Go-For-Help/Connect-with-other-users.md>

.. toctree::
   :maxdepth: 1
   :glob:
   :caption: Resources/Reference
            
   Resources <./Resources/index>
   For Clinicians <./Resources/clinician-guide-to-AndroidAPS>

도움주기
------------
.. toctree::
   :maxdepth: 1
   :glob:

   도움주기
   How to translate the app <./translations.md>
   wiki 수정하는 방법
