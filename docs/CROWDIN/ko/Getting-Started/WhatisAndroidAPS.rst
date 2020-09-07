What is a closed loop system with AndroidAPS?
**************************************************

AndroidAPS is an app that acts as an artificial pancreas system (APS) on an Android smartphone. 인공췌장시스템(APS)는 무엇입니까? 혈당을 건강한 범위안에서 유지시켜주는 췌장의 역할을 소프트웨어적으로 하게 만든 프로그램입니다. 

APS가 실제 췌장과 동일한 역할을 하진 못하지만, 1형당뇨인들이 기기를 이용하여 보다 편하고 안전하게 혈당을 관리할 수 있도록 하게해줍니다. 연속혈당측정기(CGM)이 AndroidAPS에 혈당정보를 전달해주고, AndroidAPS가 인슐린펌프에 적절한 인슐린 양을 조절하게 하여줍니다. 이 앱들은 블루투스로 서로 통신합니다. OpenAPS라고 불리는 또 다른 인공췌장시스템을 위해 개발된 특별한 알고리즘 혹은 규칙을 사용하여 적정 인슐린 양을 계산합니다. 이 OpenAPS는 전 세계 수천명의 사람들이 사용하며 수백만 시간의 누적사용양을 기록하고 있습니다. 

주의사항 : AndroidAPS는 어느 국가의 어느 의료기관에서도 규제하지 않습니다. AndroidAPS를 사용하는 것은 본인에게 스스로 의료적인 실험을 수행하는 것을 기본으로 합니다. 이 시스템을 구축하기 위해선 의지와 기술적 지식이 필요합니다. 처음에 이러한 기술적인 지식이 없다면, 스스로 노력하여 익혀야 할것입니다. 당신이 필요로 하는 정보를 이 문서, 인터넷, 혹은 이 시스템을 이미 이용하고 있는 사용자 들로부터 얻을 수 있을 것이며, 페이스북, 슈거트리 혹은 다른 커뮤니티를 통해 질문하실 수 있습니다. 많은 사람들이 AndroidAPS를 성공적으로 구축하여 안전하게 이용하게 있습니다. 하지만 모든 사용자들에게 아래 사항은 필수사항입니다.

* 시스템이 어떻게 작동하는지 철저히 이해할 수 있도록 시스템을 스스로 구축합니다.
* Adjusts its individual dosage algorithm with his or her diabetes team to work nearly perfect
* 시스템이 올바르게 작동하는지 확인하고 관리하세요.

.. 참고:: 
	**Disclaimer and Warning**

	이곳에 설명된 모든 정보, 생각, 코드는 오직 정보제공 및 교육적 목적으로만 제공된 것입니다. Nightscout은 현재 HIPAA 개인 정보 보호 준수 규약을 따르지 않습니다. Nightscout와 AndroidAPS를 본인의 책임하에 사용하세요. 의학적 결정을 위해 이 정보와 코드를 사용하지 마세요.

	github.com의 코드를 사용함에 있어 어떤 보증이나 공식적인 지원은 없습니다. 자세한 것은 이 곳의 라이센스에 대한 자세한 내용을 참고하세요.

	* 모든 제품명, 회사명, 상표, 서비스표, 등록상표, 등록 서비스표는 해당 소유자의 고유 재산입니다. 그것들을 사용한 것은 정보를 제공하기 위한 목적이며, 그들과의 제휴 또는 보증을 의미하지는 않습니다.

	Please note - this project has no association with and is not endorsed by: `SOOIL <http://www.sooil.com/eng/>`_, `Dexcom <http://www.dexcom.com/>`_, `Accu-Chek, Roche Diabetes Care <http://www.accu-chek.com/>`_ or `Medtronic <http://www.medtronic.com/>`_.
	
이 도전을 하실 준비가 되었다면 계속 읽어주세요. 

Primary goals behind AndroidAPS
==================================================

* 안전 기능이 내장된 앱 Oref0와 oref1라는 이름으로 알려진 알고리즘의 안전 기능에 대해서 알고 싶다면 여기를 눌러주세요 (https://openaps.org/reference-design/)
1형당뇨 관리를 위해 인공췌장과 Nightscout를 하나로 통합한 앱
* An app to which users can easily add or remove modules as needed
* An app with different versions for specific locations and languages.
* An app which can be used in open- and closed-loop mode
* An app that is totally transparent: users can input parameters, see results, and make the final decision
* An app which is independent of particular pump drivers and contains a "virtual pump" so users can safely experiment before using it on themselves 
* An app closely integrated with Nightscout
* An app in which the user is in control of safety constraints 

How to start
==================================================
Of course, all of this content here is very important, but can be in the beginning quite confusing.
A good orientation is given by the `Module Overview <../Module/module.html>`_ and the `Objectives <../Usage/Objectives.html>`_. You can also take a look on the `sample setup with Dana, Dexcom and Sony Smartwatch <../Getting-Started/Sample-Setup.html>`_.
 
