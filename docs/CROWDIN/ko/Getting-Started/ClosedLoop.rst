Closed loop 시스템이란 어떤 것일까요?
**************************************************

.. image:: ../images/autopilot.png
  :alt: AAPS는 오토파일럿과 유사합니다.

인공 췌장 closed loop 시스템은 당뇨병 관리를 좀 더 편리하게 하기 위해 다양한 구성 요소들을 결합한 것입니다. 
오픈 소스 closed loop 활동의 창립자 중 한 명인 Dana M. Lewis는 그의 훌륭한 책 'Automated Insulin Delivery (자동으로 인슐린 주입하기)<https://www.artificialpancreasbook.com/>' 에서 이를 당뇨병을 위한 오토파일럿(자동조종장치)'<https://www.artificialpancreasbook.com/3.-getting-started-with-your-aps>'라고 명명했습니다. 과연 이게 무엇을 의미할까요?

**비행기에서의 오토파일럿(자동조종장치)**

The autopilot does not do the complete job and does not give the possibility to the pilot to sleep throughout the entire flight. It facilitates the work of the pilots. It relieves them of the burden of permanently monitoring the aircraft and the flight attitude. This allows the pilot to concentrate on monitoring the airspace and controlling the autopilot's functions.

The autopilot receives signals from various sensors, a computer evaluates them together with the pilot's specifications and then makes the necessary adjustments. The pilot no longer has to worry about the constant adjustments.

**Closed Loop System**

The same applies to an artificial pancreas closed loop system. It does not do the whole job, you still have to take care of your diabetes. A closed loop system combines the sensor data from a CGM/FGM with your diabetes management specifications such as basal rate, insulin sensitivity factor and carb ratio. From this it calculates treatment suggestions and implements these permanent small adjustments in order to keep your diabetes within the target range and to relieve you. This leaves more time for your life "next to" diabetes.

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
