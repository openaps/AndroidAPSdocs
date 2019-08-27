Welcome to the AndroidAPS documentation
==============================================

AndroidAPS is an open source app for people living with insulin-dependent diabetes that acts as an artificial pancreas system (APS) on Google Android smartphones. Main components are different openAPS software algorithms which aim to do what a living pancreas does: keeping blood sugar levels within healthy limits by using automated insulin dosing (AID). The app does NOT use self-learning artificial intelligence. Instead, the calculations of AndroidAPS are based on the individual dosage algorithm and carbohydrate intake the user manually puts into his treatments profile, but they are verified by the system for safety reasons. The app is not provided in Google Play - you have to build it from source code by yourself for legal reasons.

Main components are:

.. image:: images/modules-female.png
  :alt: Components

For more details, please read on here.

Getting started
----------------
.. toctree::
   :maxdepth: 1
   :glob:
   
   Safety first <./Getting-Started/Safety-first.rst>
   What is a closed loop system <./Getting-Started/ClosedLoop.rst>
   What is a closed loop system with AndroidAPS <./Getting-Started/WhatisAndroidAPS.rst>  
   
   
What do I need 
-----------------------------------------
.. toctree::
   :maxdepth: 1
   :glob:
   
   Module <./Module/module.rst>

   
AndroidAPS 설치하기
------------
.. toctree::
   :maxdepth: 1
   :glob:

   APK 파일 빌드하기 <./Installing-AndroidAPS/Building-APK.md>
   새 버전 혹은 다른 branch로 업데이트 하기 <./Installing-AndroidAPS/Update-to-new-version.md>
   릴리즈 노트 <./Installing-AndroidAPS/Releasenotes.md>
   Dev branch <./Installing-AndroidAPS/Dev_branch.md>
   
   
Component Setup
---------------
.. toctree::
   :maxdepth: 1
   :glob:
   
   CGM/FGM <./Configuration/BG-Source.md>
   Pumps <./Hardware/pumps.rst>
   Phones <./Hardware/Phoneconfig.rst>
   Nightscout 설정 <./Installing-AndroidAPS/Nightscout.md>
   xDrip+ Settings <./Configuration/xdrip.md>
   Smartwatch  <./Hardware/Smartwatch.rst>
   

환경설정 
---------------
.. toctree::
   :maxdepth: 1
   :glob:
   
   Config builder <./Configuration/Config-Builder.md>
   설정 <./Configuration/Preferences.md>
   
   
AndroidAPS Usage
------------
.. toctree::
   :maxdepth: 1
   :glob:
    
   AndroidAPS screens <./Getting-Started/Screenshots.md>
   목적 <./Usage/Objectives.md>
   OpenAPS 기능들 <./Usage/Open-APS-features.md>   
   Sensitivity detection and COB <./Configuration/Sensitivity-detection-and-COB.md>
   프로파일 변경 <./Usage/Profiles.md>
   Temp-targets <./Usage/temptarget.md>   
   Extended carbs <./Usage/Extended-Carbs.md>    
  
 
General Hints 
---------------------
.. toctree::
   :maxdepth: 1
   :glob:
   
   Crossing timezones with pumps <./Usage/Timezone-traveling.md>
   로그 파일에 접근하기 <./Usage/Accessing-logfiles.md>
   Accu-Chek Combo tips for basic usage <./Usage/Accu-Chek-Combo-Tips-for-Basic-usage.md> 
   Export/Import Settings <./Usage/ExportImportSettings.rst>
   

AndroidAPS for children
------------------
.. toctree::
   :maxdepth: 1
   :glob:
   
   SMS commands <./Usage/SMS-Commands.md>
   

Advanced 
----------
.. toctree::
   :maxdepth: 1
   :glob:
   
   Android auto <./Usage/Android-auto.md>
   Automation <./Usage/automation.md>
   

Troubleshooting
------------------------------------------
.. toctree::
   :maxdepth: 1
   :glob:
  
   NS-Client <./Usage/Troubleshooting-NSClient.md>
   Update <./Installing-AndroidAPS/Update-to-new-version.html#troubleshooting>
   Pumps <./FGT/Troubleshootingpumps.rst>


FAQ 
------------------------------------------
.. toctree::
   :maxdepth: 1
   :glob:
  
   FAQ <./Getting-Started/FAQ.md>

   
용어
------------------------------------------
.. toctree::
   :maxdepth: 1
   :glob:
  
   용어 <./Getting-Started/Glossary.md>
  

도움을 구할 곳들 
------------
.. toctree::
   :maxdepth: 1
   :glob:

   시작하기 전에 보면 좋은 유용한 자료들 <./Where-To-Go-For-Help/Background-reading.md>
   도움을 구할 곳들 <./Where-To-Go-For-Help/Connect-with-other-users.md>

Resources/Reference
------------
.. toctree::
   :maxdepth: 1
   :glob:
            
   Resources <./Resources/index>
   For Clinicians <./Resources/clinician-guide-to-AndroidAPS>


도움주기
------------
.. toctree::
   :maxdepth: 1
   :glob:

   도움주기
   How to translate the app and documentation <./translations.md>
   wiki 수정하는 방법


.. note:: 
	**고지사항 및 경고문**

	이곳에 설명된 모든 정보, 생각, 코드는 오직 정보제공 및 교육적 목적으로만 제공된 것입니다. Nightscout은 현재 HIPAA 개인 정보 보호 준수 규약을 따르지 않습니다. Nightscout와 AndroidAPS를 본인의 책임하에 사용하세요. 의학적 결정을 위해 이 정보와 코드를 사용하지 마세요.

	github.com의 코드를 사용함에 있어 어떤 보증이나 공식적인 지원은 없습니다. 자세한 것은 이 곳의 라이센스에 대한 자세한 내용을 참고하세요.

	* 모든 제품명, 회사명, 상표, 서비스표, 등록상표, 등록 서비스표는 해당 소유자의 고유 재산입니다. 그것들을 사용한 것은 정보를 제공하기 위한 목적이며, 그들과의 제휴 또는 보증을 의미하지는 않습니다.

	Please note - this project has no association with and is not endorsed by: `SOOIL <http://www.sooil.com/eng/>`_, `Dexcom <http://www.dexcom.com/>`_, `Accu-Chek, Roche Diabetes Care <http://www.accu-chek.com/>`_ or `Medtronic <http://www.medtronic.com/>`_
