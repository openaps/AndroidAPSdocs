AndroidAPS 가이드에 오신 것을 환영합니다.
==============================================

**AndroidAPS가 무엇입니까?**

AndroidAPS는 블루투스 통신기능이 있는 인슐린 펌프를 이용하여 OpenAPS의 "oref0"와 "oref1" 알고리즘을 작동할 수 있는 안드로이드 스마트폰용 앱입니다.

**AndroidAPS의 주요 개발 목표:**

* 다른 코드를 수정하지 않고도 손쉽게 새로운 모듈추가가 가능한 모듈 방식의 앱
* 여러 언어로 번역 될 수 있는 앱
* 컴파일 전 최종 apk 파일에 포함될 기능을 손쉽게 선택가능하게 한 앱
* Open Loop와 Closed Loop 모드를 지원하는 앱
* APS가 어떻게 작동하는지 확인할 수 있는 앱: 입력변수, 결과 및 최종결정
* APS 알고리즘을 추가할 수 있는 기능과 사용자들이 어떤 알고리즘을 사용할 지 결정할 수 있게 한다.
* 실제 펌프사용 유무와 별개로 "가상펌프"를 통해 사용자가 APS를 안전하게 작동해볼 수 있도록 한 앱
* Nightscout와 원활하게 연동하는 앱
* 사용자의 안전 제약을 쉽게 추가/해제할 수 있도록 한 앱
* APS와 Nightscout를 통해 1형당뇨를 관리할 수 있도록 하는 일체형 통합 앱

**시작하기 위해 필요한 것들:**

* 5.0 혹은 이후 버전의 안드로이드 스마트폰. AndroidAPS와 잘 작동하는 폰에 대한 리포트를 확인하시려면 이`이 스프레드시트 <https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit?usp=sharing>`_ 를 확인해보세요.
* CGM 데이터 수신 앱: `xDrip <http://stephenblackwasalreadytaken.github.io/xDrip/>`_/ `xDrip+ <https://jamorham.github.io/#xdrip-plus>`_, `Glimp <https://play.google.com/store/apps/details?id=it.ct.glicemia>`_ , `Dexcom G5 앱(패치버전) <https://github.com/dexcomapp/dexcomapp>`_, `PochTech 앱 <https://play.google.com/store/apps/details?id=jp.co.unitec.concretemanagement&hl=gsw>`_ or `600SeriesAndroidUploader <http://pazaan.github.io/600SeriesAndroidUploader/>`_
* `AndroidAPS <https://github.com/MilosKozak/AndroidAPS>`_ 그 자체
* `Nightscout cgm-remote-monitor <http://www.nightscout.info/wiki/welcome/set-up-nightscout-using-heroku>`_ 0.10.2 버전 혹은 이후버전
* 호환되는 펌프: 다나R, 다나RS 또는 아큐-첵 콤보 인슐린 펌프(본인이 직접 다른 인슐린 펌프와 연동되도록 빌드 할 수도 있습니다.)
* 연속혈당측정기 (CGM) 데이터 소스: 덱스컴 G4/G5/G6, 프리스타일 리브레, 에버센스, 메드트로닉 가디언, 포텍


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
   향후 가능한 펌프 <./Getting-Started/Future-possible-Pump-Drivers.md>
   Sample Setup: Samsung S7, DanaR, Dexcom G5 and Sony Smartwatch <./Getting-Started/Sample-Setup.md>
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
   Dev branch <./Installing-AndroidAPS/Dev-branch.md>
   Nightscout 설정 <./Installing-AndroidAPS/Nightscout.md>
   
환경설정 
---------------
.. toctree::
   :maxdepth: 1
   :glob:
   
   구성관리자 <./Configuration/Config-Builder.md>
   BG 소스<./Configuration/BG-Source.md>
   다나R 펌프<./Configuration/DanaR-Insulin-Pump.md>
   다나RS 펌프<./Configuration/DanaRS-Insulin-Pump.md>
   아큐-첵 콤보 펌프 <./Configuration/Accu-Chek-Combo-Pump.md>
   워치화면 <./Configuration/Watchfaces.md>
   설정 <./Configuration/Preferences.md>
   민감도 감지와 COB <./Configuration/Sensitivity-detection-and-COB.md>
   
사용
------------
.. toctree::
   :maxdepth: 1
   :glob:
    
   목적 <./Usage/Objectives.md>
   OpenAPS 기능들 <./Usage/Open-APS-features.md>
   프로파일 변경 <./Usage/Profiles.md>
   임시목표 <./Usage/temptarget.md>
   문자(SMS) 명령 <./Usage/SMS-Commands.md>
   확장 탄수화물
   펌프의 시간대 이동 <./Usage/Timezone-traveling.md>
   로그 파일에 접근하기 <./Usage/Accessing-logfiles.md>
   혈당데이터 평활화하기 <./Usage/Smoothing-Blood-Glucose-Data-in-xDrip.md>
   아큐-첵 콤보 기초 사용법 <./Usage/Accu-Chek-Combo-Tips-for-Basic-usage.md>
   NSClient 문제해결 <./Usage/Troubleshooting-NSClient.md>

도움을 구할 곳들 
------------
.. toctree::
   :maxdepth: 1
   :glob:

   시작하기 전에 보면 좋은 유용한 자료들 <./Where-To-Go-For-Help/Background-reading.md>
   도움을 구할 곳들 <./Where-To-Go-For-Help/Connect-with-other-users.md>

도움주기
------------
.. toctree::
   :maxdepth: 1
   :glob:

   도움주기
   앱 번역하는 방법
   wiki 수정하는 방법
