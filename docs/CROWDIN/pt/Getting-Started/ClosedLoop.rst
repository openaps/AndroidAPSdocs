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

Da mesma forma que o piloto automático depende dos valores do sensor, bem como das especificações do piloto , um sistema de loop fechado precisa da "entrada" dos dados certos, tais como: taxas de basal, FSI e rácios de hidratos de carbono para o apoiar com sucesso.


Sistemas de Código Aberto de Pâncreas Artificial de Loop Fechado
===================================================
Neste momento existem três grandes sistemas código aberto de loop fechado disponíveis:

AndroidAPS (AAPS)
--------------------------------------------------
O AndroidAPS é descrito em detalhes `nesta documentação <./WhatisAndroidAPS.html>` _. Ele usa um smartphone Android para o cálculo e controlo da sua bomba de insulina. Está em forte colaboração com o OpenAPS (ou seja,  eles partilham algoritmos).

As `bombas <../Hardware/pumps.html>`_ compatíveis são:

* ` DanaR <../Configuration/DanaR-Insulin-Pump.html> ` _ / ` DanaRS <../Configuration/DanaRS-Insulin-Pump.html> ` _
* `Accu-Chek Combo <./Configuration/Accu-Chek-Combo-Pump.md>`_
* ` Accu-Chek Insight <../Configuration/Accu-Chek-Insight-Pump.html> ` _
* `Omnipod Eros <../Configuration/OmnipodEros.html>`_
* algumas bombas antigas da `Medtronic <../Configuration/MedtronicPump.html>`_

OpenAPS
--------------------------------------------------
` OpenAPS <https://openaps.readthedocs.io>` _ foi o primeiro sistema de código aberto de Loop Fechado. Ele usa um pequeno computador como Raspberry Pi ou Intel Edison.

As bombas compatíveis são:

* algumas bombas antigas de Medtronic

Loop para iOS
--------------------------------------------------
` Loop para iOS <https://loopkit.github.io/loopdocs/>` _ é o sistema de código aberto de loop fechado para ser usado com iPhones da Apple.

As bombas compatíveis são:

* Omnipod Eros
* algumas bombas antigas da Medtronic
