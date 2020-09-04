Closed loop 시스템이란 어떤 것일까요?
**************************************************

.. image:: ../images/autopilot.png
  :alt: AAPS는 오토파일럿과 유사합니다.

인공 췌장 closed loop 시스템은 당뇨병 관리를 좀 더 편리하게 하기 위해 다양한 구성 요소들을 결합한 것입니다. 
오픈 소스 closed loop 활동의 창립자 중 한 명인 Dana M. Lewis는 그의 훌륭한 책 'Automated Insulin Delivery (자동으로 인슐린 주입하기)<https://www.artificialpancreasbook.com/>' 에서 이를 당뇨병을 위한 오토파일럿(자동조종장치)'<https://www.artificialpancreasbook.com/3.-getting-started-with-your-aps>'라고 명명했습니다. 과연 이게 무엇을 의미할까요?

**비행기에서의 오토파일럿(자동조종장치)**

오토파일럿이 모든 작업을 수행하는 것은 아니며, 따라서 비행하는 전체 시간 동안 조종사가 잠을 잘 수 있게 해주는 것은 아닙니다. 그것은 조종사들의 일을 용이하게 해주는 것입니다. 이는 항공기와 비행 상태를 계속해서 모니터링해야 하는 부담을 줄여줍니다. 이것은 조종사가 영공을 살피며 오토파일럿 기능들을 제어하는 것에 집중할 수 있도록 도와줍니다.

오토파일럿은 다양한 센서로부터 신호들을 수신하고, 컴퓨터가 파일럿의 설정에 따라 이를 평가한 다음, 필요한 조정을 시행합니다. 조종사는 계속적인 조정에 대해 걱정하지 않아도 됩니다.

**Closed Loop 시스템**

인공 췌장 closed loop 시스템은 오토파일럿과 유사하다고 볼 수 있습니다. 이 시스템이 모든 관리를 대신 해주는 것이 아니며, 사용자는 계속해서 당뇨병 관리에 신경써야합니다. Closed loop 시스템은 CGM/FGM의 센서 데이터와 사용자의 당뇨병 관리 인자(basal 양, 인슐린 민감도 인자 (ISF), 인슐린 탄수화물 비율 (IC) 등)을 결합하여 작동합니다. From this it calculates treatment suggestions and implements these permanent small adjustments in order to keep your diabetes within the target range and to relieve you. 이것은 당뇨병 관리에 "함께 해줌으로써" 사용자의 삶에 시간 여유를 만들어 줍니다.

우리가 사람 관리자 없이 오토파일럿만 있는 비행기에 탑승하고 싶지 않은 것처럼, closed loop 시스템은 당뇨병 관리를 도와주지만 반드시 사용자의 도움이 필요합니다! **Closed loop을 사용할지라도 당뇨병 관리를 완전히 잊어서는 안됩니다! **

오토파일럿이 조종사의 설정 뿐만 아니라 센서 값들에 의존하는 것과 같이, AAPS에서도 적절한 basal 양, ISF, 인슐린 탄수화물 비율 (CR) 등을 적절하게 입력해야 closed loop 시스템이 사용자를 성공적으로 보조할 수 있습니다.


인공 췌장 closed loop 시스템의 오픈 소스
==================================================
현재는 대표적인 세 종류의 오픈 소스 closed loop 시스템을 사용할 수 있습니다:

AndroidAPS (AAPS)
--------------------------------------------------
AndroidAPS는 '이 문서<./WhatisAndroidAPS.html>'에 자세히 설명되어 있습니다. 이는 안드로이드 스마트폰을 사용하여 인슐린 펌프 사용을 계산하고 제어합니다. 이는 OpenAPS와 강력하게 연동되어 있습니다 (즉, 알고리즘을 공유합니다).

호환 가능한 '펌프<../Hardware/pumps.html>`는 다음과 같습니다:

* 다나 R / 다나 RS
* 아큐-첵 콤보
* 아큐-첵 인사이트
* 일부 오래된 메드트로닉 펌프 (버전 2.4의 경우)

OpenAPS
--------------------------------------------------
OpenAPS<https://openaps.readthedocs.io>는 closed loop 시스템의 첫 번째 오픈 소스입니다. Raspberry Pi나 Intel Edison 같은 작은 컴퓨터를 사용합니다.

호환 가능한 펌프는 다음과 같습니다:

* 일부 오래된 메드트로닉 펌프

iOS 용 loop
--------------------------------------------------
iOS 용 loop<https://loopkit.github.io/loopdocs/>은 애플 iPhone에서 사용하는 closed loop 시스템의 오픈 소스입니다.

호환 가능한 펌프는 다음과 같습니다:

* 옴니파트 에로스
* 일부 오래된 메드트로닉 펌프
