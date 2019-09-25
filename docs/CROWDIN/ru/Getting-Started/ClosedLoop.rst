Что такое система замкнутого цикла?
**************************************

.. изображение:../images/autopilot.png
  :alt: AAPS-как автопилот

Искусственная поджелудочная железа замкнутой системы сочетает в себе различные компоненты чтобы облегчить управление диабетом. 
В своей книге " Automated Insulin Delivery <https://www.artificialpancreasbook.com/>` _ Dana M. Lewis, одна из основателей движения ИПЖ с открытым исходным кодом, назвала алгоритм системы "автопилот для диабета" <https://www.artificialpancreasbook.com/3.-getting-started-with-your-aps#switching-to-automated-diabetes-mode-autopilot-for-your-diabetes>` _. Что это означает?

**Автопилот в самолете**

Автопилот не выполняет всю работу и не дает возможности пилоту спать в течение всего полета. Он облегчает работу пилотов. Он освобождает их от бремени постоянного наблюдения за самолетом и ходом полета. Это позволяет пилоту сосредоточиться на мониторинге воздушного пространства и управлении функциями автопилота.

Автопилот получает сигналы от различных датчиков, компьютер оценивает их наряду со спецификациями пилота, а затем вносит необходимые корректировки. Пилоту больше не нужно беспокоиться о постоянных корректировках.

** Система замкнутого цикла * *

То же самое относится и к и системе искусственной поджелудочной железы. Она не делает всю работу, вы все равно должны контролировать свой диабет. Система замкнутого цикла объединяет данные датчиков мониторинга с такими параметрами управления диабетом, как скорость базала, коэффициент чувствительности к инсулину и углеводный коэффициент. Исходя из этого, она рассчитывает предложения по лечению и выполняет постоянные небольшие корректировки, чтобы держать диабет в целевом диапазоне и избавить вас от этой заботы. Это оставляет больше времени для жизни "рядом с" диабетом.

Так же, как никто не хочет попасть на самолет, которым управляет только автопилот без контроля человека, система замкнутого цикла помогает нам в управлении диабетом, но всегда нуждается в нашей поддержке! ** Даже в режиме замкнутого цикла нельзя просто взять и забыть про свой диабет! **

Точно так же, как автопилот зависит от показателей датчиков, а также от параметров, задаваемых летчиками, система замкнутой петли требует соответствующих вводных данных, таких как скорость базала, чувствительность к инсулину ISF и углеводный коэффициент, чтобы успешно обеспечить поддержку вашего организма.


Замкнутые системы ИПЖ с открытым исходным кодом
=====================================
At present there are three major open source closed loop systems available:

AndroidAPS (AAPS)
-----------------
AndroidAPS is described in detail in `this documentation <./WhatisAndroidAPS.html>`_. It uses an Android Smartphone for calculation and control of your insulin pump. It is in strong collaboration with OpenAPS (i.e. they share algorithms).

Compatible `pumps <../Hardware/pumps.html>`_ are:

* DanaR / DanaRS
* Accu-Chek Combo
* Accu-Chek Insight
* some old Medtronic pumps (as of version 2.4)

OpenAPS
---------
`OpenAPS <https://openaps.readthedocs.io>`_ was the first Open Source Closed Loop System. It uses a small computer such as Raspberry Pi or Intel Edison.

Compatible pumps are:

* some old Medtronic pumps

Loop for iOS
------------
`Loop for iOS <https://loopkit.github.io/loopdocs/>`_ is the Open Source Closed Loop System to be used with Apple iPhones.

Compatible pumps are:

* Omnipod
* some old Medtronic pumps
