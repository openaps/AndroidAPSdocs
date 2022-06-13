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

Assim como o piloto automático depende dos valores dos sensores e das especificações do piloto, um sistema de loop fechado precisa de entradas apropriadas, como taxas de basal, FS e I:C (relação número de gramas de carboidratos para uma unidade de insulina) para apoiar você com sucesso.


Sistemas de Pâncreas Artificial de Loop Fechado de Código Aberto
===================================================
Atualmente existem três principais sistemas de loop fechado de código aberto disponíveis:

AndroidAPS (AAPS)
--------------------------------------------------
O AndroidAPS é descrito em detalhes `nesta documentação <./WhatisAndroidAPS.html>`_. Ele usa um Smartphone Android para cálculo e controle da sua bomba de insulina. Está em forte colaboração com o OpenAPS (ou seja, eles compartilham algoritmos).

`Bombas <../Hardware/pumps.html>`_ compatíveis:

* `DanaR <../Configuration/DanaR-Insulin-Pump.html>`_ / `DanaRS & Dana-i <../Configuration/DanaRS-Insulin-Pump.html>`_
* `Accu-Chek Combo <../Configuration/Accu-Chek-Combo-Pump.html>`_
* `Accu-Chek Insight <../Configuration/Accu-Chek-Insight-Pump.html>`_
* `Diaconn G8 <../Configuration/DiaconnG8.html>`_
* `Omnipod Eros <../Configuration/OmnipodEros.html>`_ / Omnipod Dash
* algumas `bombas Medtronic <../Configuration/MedtronicPump.html>`_ antigas

OpenAPS
--------------------------------------------------
`OpenAPS <https://openaps.readthedocs.io>`_ foi o primeiro Sistema de Loop Fechado de Código Aberto. Ele usa um pequeno computador como Raspberry Pi ou Intel Edison.

Bombas compatíveis:

* algumas bombas Medtronic antigas

Loop para iOS
--------------------------------------------------
`Loop para iOS <https://loopkit.github.io/loopdocs/>`_ é o Sistema de Loop Fechado de Código Aberto a ser usado com iPhones Apple.

Bombas compatíveis:

* Omnipod Eros
* algumas bombas Medtronic antigas
