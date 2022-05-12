O que é um Sistema de Loop Fechado?
**************************************************

.. image:: ../images/autopilot.png
  :alt: AAPS é como um piloto automático

Um sistema de pâncreas artificial de loop fechado combina diversos componentes para facilitar o gerenciamento do diabetes para você. 
Em seu ótimo livro `Automated Insulin Delivery <https://www.artificialpancreasbook.com/>`_ Dana M. Lewis, uma das fundadoras do movimento do loop fechado de código aberto, o chama de `"piloto automático para a sua diabetes" <https://www.artificialpancreasbook.com/3.-getting-started-with-your-aps>`_. Mas o que isso significa?

**Piloto automático em um avião**

O piloto automático não faz o trabalho completo e não dá a possibilidade ao piloto de dormir ao longo de todo o voo. Ele facilita o trabalho dos pilotos. Liberta-os do fardo de uma vigilância constante do avião e da atitude de voo. Isto permite que o piloto se concentre no monitoramento do espaço aéreo e no controle das funções do piloto automático.

O piloto automático recebe sinais de vários sensores, um computador avalia-os em conjunto com as especificações do piloto e então executa os ajustes necessários. O piloto não precisa mais se preocupar com os ajustes constantes.

**Sistema de Loop Fechado**

O mesmo se aplica a um sistema de pâncreas artificial de loop fechado. Ele não faz todo o trabalho, você ainda tem de cuidar do seu diabetes. Um sistema de loop fechado combina os dados do sensor de um CGM/FGM com as especificações de gerenciamento de diabetes, como taxa de basal, fator de sensibilidade à insulina e relação de carboidratos. A partir daí, calcula as sugestões de tratamento e implementa esses pequenos ajustes permanentes a fim de manter seu diabetes dentro do intervalo de meta para aliviá-lo. Isso deixa mais tempo para a sua vida "ao lado do" diabetes.

Assim como não quer entrar num avião onde apenas o piloto automático voa sem supervisão humana, um sistema de loop fechado ajuda-o com o gerenciamento do seu diabetes, mas sempre precisa do seu apoio! **Mesmo com um loop fechado, você não pode simplesmente esquecer o diabetes!**

Just as the autopilot depends on the sensor values as well as the pilot's specifications, a closed loop system needs appropriate input such as basal rates, ISF and carb ratio to support you successfully.


Open Source Artificial Pancreas Closed Loop Systems
===================================================
At present there are three major open source closed loop systems available:

AndroidAPS (AAPS)
--------------------------------------------------
AndroidAPS is described in detail in `this documentation <./WhatisAndroidAPS.html>`_. It uses an Android Smartphone for calculation and control of your insulin pump. It is in strong collaboration with OpenAPS (i.e. they share algorithms).

Compatible `pumps <../Hardware/pumps.html>`_ are:

* `DanaR <../Configuration/DanaR-Insulin-Pump.html>`_ / `DanaRS & Dana-i <../Configuration/DanaRS-Insulin-Pump.html>`_
* `Accu-Chek Combo <../Configuration/Accu-Chek-Combo-Pump.html>`_
* `Accu-Chek Insight <../Configuration/Accu-Chek-Insight-Pump.html>`_
* `Diaconn G8 <../Configuration/DiaconnG8.html>`_
* `Omnipod Eros <../Configuration/OmnipodEros.html>`_ / Omnipod Dash
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
