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

인공 췌장 closed loop 시스템은 오토파일럿과 유사하다고 볼 수 있습니다. 이 시스템이 모든 관리를 대신 해주는 것이 아니며, 사용자는 계속해서 당뇨병 관리에 신경써야합니다. Closed loop 시스템은 CGM/FGM의 센서 데이터와 사용자의 당뇨병 관리 인자(basal 양, 인슐린 민감도 인자 (ISF), 인슐린 탄수화물 비율 (IC) 등)을 결합하여 작동합니다. From this it calculates treatment suggestions and implements these permanent small adjustments in order to keep your diabetes within the target range and to relieve you. This leaves more time for your life "next to" diabetes.

Just as you don't want to get on a plane where only the autopilot flies without human supervision, a closed loop system helps you with your diabetes management, but always needs your support! **Even with a closed loop you can't just forget your diabetes!**

Just as the autopilot depends on the sensor values as well as the pilot's specifications, a closed loop system needs appropriate input such as basal rates, ISF and carb ratio to support you successfully.


Open Source Artificial Pancreas Closed Loop Systems
==================================================
At present there are three major open source closed loop systems available:

AndroidAPS (AAPS)
--------------------------------------------------
AndroidAPS is described in detail in `this documentation <./WhatisAndroidAPS.html>`_. It uses an Android Smartphone for calculation and control of your insulin pump. It is in strong collaboration with OpenAPS (i.e. they share algorithms).

Compatible `pumps <../Hardware/pumps.html>`_ are:

* DanaR / DanaRS
* Accu-Chek Combo
* Accu-Chek Insight
* some old Medtronic pumps (as of version 2.4)

OpenAPS
--------------------------------------------------
`OpenAPS <https://openaps.readthedocs.io>`_ was the first Open Source Closed Loop System. It uses a small computer such as Raspberry Pi or Intel Edison.

Compatible pumps are:

* some old Medtronic pumps

Loop for iOS
--------------------------------------------------
`Loop for iOS <https://loopkit.github.io/loopdocs/>`_ is the Open Source Closed Loop System to be used with Apple iPhones.

Compatible pumps are:

* Omnipod Eros
* some old Medtronic pumps
