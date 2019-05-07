AndroidAPS 가이드에 오신 것을 환영합니다.
==============================================

**AndroidAPS가 무엇입니까?**

AndroidAPS is a app that acts as an artificial pancreas system (APS) on an Android smartphone. What is an artificial pancreas system? It is a software program that aims to do what a living pancreas does: keep blood sugar levels within healthy limits automatically. An APS can't do the job as well as a biological pancreas does, but it can make type 1 diabetes easier to manage using devices that are commercially available and software that is simple and safe. Those devices include a continuous glucose monitor (CGM) to tell AndroidAPS about your blood sugar levels and an insulin pump which AndroidAPS controls to deliver appropriate doses of insulin. The app communicates with those devices via bluetooth. It makes its dosing calculations using an algorithm, or set of rules, developed for another artificial pancreas system, called OpenAPS, which has thousands of users and has accumulated millions of hours of use. 

A note of caution: AndroidAPS is not regulated by any medical authority in any country. Using AndroidAPS is essentially carrying out a medical experiment on yourself. Setting up the system requires determination and technical knowledge. If you don't have the technical know-how at the beginning, you will by the end. All the information you need can be found in these documents, elsewhere online, or from others who have already done it -- you can ask them in Facebook groups or other forums. Many people have successfully built AndroidAPS and are now using it entirely safely, but it is essential that every user:
* Builds the system themselves so that they thoroughly understand how it works
* Adjusts the settings to suit their own diabetes
* Maintains and monitors the system to ensure it is working properly
If you're ready for the challenge, please read on. 

**AndroidAPS의 주요 개발 목표:**

* An app with safety built in. To read about the safety features of the algorithms, known as oref0 and oref1, click here (https://openaps.org/reference-design/)
* An all-in-one app for managing type 1 diabetes with an artificial pancreas and Nightscout
* An app to which users can easily add or remove modules as needed
* An app with different versions for specific locations and languages.
* An app which can be used in open- and closed-loop mode
* An app that is totally transparent: users can input parameters, see results, and make the final decision
* An app which is independent of particular pump drivers and contains a "virtual pump" so users can safely experiment before using it on themselves 
* An app closely integrated with Nightscout
* An app in which the user is in control of safety constraints 

**시작하기 위해 필요한 것들:**

* An Android smartphone with Android 5.0 or later. See `this spreadsheet <https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit?usp=sharing>`_ to learn which phones work best with AndroidAPS.
* A continuous clucose monitor (CGM): Dexcom G4/G5/G6, Freestyle Libre, Eversense, Medtronic Guardian, or PocTech
* An app on the phone to receive CGM data: `xDrip <http://stephenblackwasalreadytaken.github.io/xDrip/>`_/ `xDrip+ <https://jamorham.github.io/#xdrip-plus>`_, `Glimp <https://play.google.com/store/apps/details?id=it.ct.glicemia>`_ , `G5 patched app <https://github.com/dexcomapp/dexcomapp>`_, `PochTech app <https://play.google.com/store/apps/details?id=jp.co.unitec.concretemanagement&hl=gsw>`_ or `600SeriesAndroidUploader <http://pazaan.github.io/600SeriesAndroidUploader/>`_
* `AndroidAPS <https://github.com/MilosKozak/AndroidAPS>`_ itself installed on the phone
* `Nightscout cgm-remote-monitor <http://www.nightscout.info/wiki/welcome/set-up-nightscout-using-heroku>`_ 0.10.2 버전 혹은 이후버전
* A supported pump: Dana-R or Dana-RS from Sooil, or Accu-Chek Combo or Insight from Roche (unless you are able to build your own driver for another insulin pump)


.. 참고:: 
	**고지사항 및 경고문**

	이곳에 설명된 모든 정보, 생각, 코드는 오직 정보제공 및 교육적 목적으로만 제공된 것입니다. Nightscout은 현재 HIPAA 개인 정보 보호 준수 규약을 따르지 않습니다. Nightscout와 AndroidAPS를 본인의 책임하에 사용하세요. 의학적 결정을 위해 이 정보와 코드를 사용하지 마세요.

	github.com의 코드를 사용함에 있어 어떤 보증이나 공식적인 지원은 없습니다. 자세한 것은 이 곳의 라이센스에 대한 자세한 내용을 참고하세요.

	* 모든 제품명, 회사명, 상표, 서비스표, 등록상표, 등록 서비스표는 해당 소유자의 고유 재산입니다. 그것들을 사용한 것은 정보를 제공하기 위한 목적이며, 그들과의 제휴 또는 보증을 의미하지는 않습니다.

	참고 - 이 프로젝트는 `수일개발 <http://www.sooil.com/main.php>`_, `Dexcom <http://www.dexcom.com/>`_, `아큐-첵, Roche Diabetes Care <http://www.accu-chek.com/>`_ 과 관련이 없으며 이들이 어떠한 보증도 해주지 않습니다.

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
