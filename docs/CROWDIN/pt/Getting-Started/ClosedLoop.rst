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

O mesmo se aplica a um sistema de pâncreas artificial de loop fechado. Não faz o trabalho todo, você ainda terá de cuidar da sua diabetes. Um sistema de loop fechado combina os dados do sensor de um MCG/MFG com as especificações do seu tratamento da diabetes, tais como taxa basal, fator de sensibilidade à insulina e rácio de hidratos de carbono. A partir desses dados ele calcula sugestões de tratamento e implementa esses pequenos ajustes permanentes com a finalidade de manter a sua diabetes dentro do intervalo alvo e aliviá-lo deste trabalho. Isto deixa mais tempo para a sua vida "além" da diabetes.

Assim como não quer entrar num avião em que apenas o piloto automático voa sem supervisão humana, um sistema de loop fechado ajuda-o com a sua gestão da diabetes, mas irá sempre precisar do seu apoio! ** Mesmo com um loop fechado não pode simplesmente esquecer a sua diabetes! **

Just as the autopilot depends on the sensor values as well as the pilot's specifications, a closed loop system needs appropriate input such as basal rates, ISF and carb ratio to support you successfully.


Open Source Artificial Pancreas Closed Loop Systems
===================================================
At present there are three major open source closed loop systems available:

AndroidAPS (AAPS)
--------------------------------------------------
O AndroidAPS é descrito em detalhes `nesta documentação <./WhatisAndroidAPS.html>` _. It uses an Android Smartphone for calculation and control of your insulin pump. Está em forte colaboração com o OpenAPS (ou seja,  they share algorithms).

As `bombas <../Hardware/pumps.html>`_ compatíveis são:

* `DanaR <../Configuration/DanaR-Insulin-Pump.html>`_ / `DanaRS <../Configuration/DanaRS-Insulin-Pump.html>`_
* `Accu-Chek Combo <../Configuration/Accu-Chek-Combo-Pump.html>`_
* `Accu-Chek Insight <../Configuration/Accu-Chek-Insight-Pump.html>`_
* `Omnipod Eros <../Configuration/OmnipodEros.html>`_
* some old `Medtronic pumps <../Configuration/MedtronicPump.html>`_

OpenAPS
--------------------------------------------------
`OpenAPS <https://openaps.readthedocs.io>`_ was the first Open Source Closed Loop System. Ele usa um pequeno computador como Raspberry Pi ou Intel Edison.

As bombas compatíveis são:

* some old Medtronic pumps

Loop for iOS
--------------------------------------------------
`Loop for iOS <https://loopkit.github.io/loopdocs/>`_ is the Open Source Closed Loop System to be used with Apple iPhones.

As bombas compatíveis são:

* Omnipod Eros
* some old Medtronic pumps
