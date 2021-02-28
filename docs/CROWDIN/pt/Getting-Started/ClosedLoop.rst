O que é um Sistema de Loop Fechado?
**************************************************

.. image:: ../images/autopilot.png
  :alt: AAPS é como um piloto automático

Um sistema artificial de pâncreas em loop fechado combina diferentes componentes para facilitar o controlo da diabetes por si. 
No seu livro `Automated Insulin Delivery<https://www.artificialpancreasbook.com/>`_, Dana M. Lewis, uma das fundadoras do movimento de código aberto de loop fechado, chama-o de `“piloto automático para a sua diabetes” <https://www.artificialpancreasbook.com/3.-getting-started-with-your-aps>`_. Mas o que é que isso significa?

**Piloto automático numa aeronave**

O piloto automático não faz o trabalho completo e com isso não dá a possibilidade ao piloto de dormir durante todo o voo. Facilita o trabalho dos pilotos. Isso os livra do fardo de monitorizar permanentemente a aeronave e a altitude do voo. Isto permite que o piloto se concentre em monitorizar o espaço aéreo e controlar as funções do piloto automático.

O piloto automático recebe sinais de vários sensores, um computador e avalia-os juntamente com as especificações do piloto e, faz então os ajustes necessários. O piloto não irá mais preocupar-se com os constantes ajustes.

**Sistema de Loop Fechado**

O mesmo se aplica a um sistema de pâncreas artificial de loop fechado. Não faz o trabalho todo, você ainda terá de cuidar da sua diabetes. A closed loop system combines the sensor data from a CGM/FGM with your diabetes management specifications such as basal rate, insulin sensitivity factor and carb ratio. From this it calculates treatment suggestions and implements these permanent small adjustments in order to keep your diabetes within the target range and to relieve you. This leaves more time for your life "next to" diabetes.

Just as you don't want to get on a plane where only the autopilot flies without human supervision, a closed loop system helps you with your diabetes management, but always needs your support! **Even with a closed loop you can't just forget your diabetes!**

Just as the autopilot depends on the sensor values as well as the pilot's specifications, a closed loop system needs appropriate input such as basal rates, ISF and carb ratio to support you successfully.


Open Source Artificial Pancreas Closed Loop Systems
===================================================
At present there are three major open source closed loop systems available:

AndroidAPS (AAPS)
--------------------------------------------------
AndroidAPS is described in detail in `this documentation <./WhatisAndroidAPS.html>`_. It uses an Android Smartphone for calculation and control of your insulin pump. It is in strong collaboration with OpenAPS (i.e. they share algorithms).

Compatible `pumps <../Hardware/pumps.html>`_ are:

* `DanaR <../Configuration/DanaR-Insulin-Pump.html>`_ / `DanaRS <../Configuration/DanaRS-Insulin-Pump.html>`_
* `Accu-Chek Combo <../Configuration/Accu-Chek-Combo-Pump.html>`_
* `Accu-Chek Insight <../Configuration/Accu-Chek-Insight-Pump.html>`_
* `Omnipod Eros <../Configuration/OmnipodEros.html>`_
* some old `Medtronic pumps <../Configuration/MedtronicPump.html>`_

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
