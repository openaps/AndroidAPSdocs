# O que é um Sistema de Loop Fechado?

```{image} ../images/autopilot.png
:alt: AAPS é como um piloto automático
```

Um sistema artificial de pâncreas em loop fechado combina diferentes componentes para facilitar o controlo da diabetes por si. In her great book [Automated Insulin Delivery](https://www.artificialpancreasbook.com/) Dana M. Lewis, one of the founders of the open source closed loop movement, calls it an ["autopilot for your diabetes"](https://www.artificialpancreasbook.com/3.-getting-started-with-your-aps). Mas o que é que isso significa?

**Autopilot in an aircraft**

O piloto automático não faz o trabalho completo e com isso não dá a possibilidade ao piloto de dormir durante todo o voo. Facilita o trabalho dos pilotos. Isso os livra do fardo de monitorizar permanentemente a aeronave e a altitude do voo. Isto permite que o piloto se concentre em monitorizar o espaço aéreo e controlar as funções do piloto automático.

O piloto automático recebe sinais de vários sensores, um computador e avalia-os juntamente com as especificações do piloto e, faz então os ajustes necessários. O piloto não irá mais preocupar-se com os constantes ajustes.

**Closed Loop System**

O mesmo se aplica a um sistema de pâncreas artificial de loop fechado. Não faz o trabalho todo, você ainda terá de cuidar da sua diabetes. Um sistema de loop fechado combina os dados do sensor de um MCG/MFG com as especificações do seu tratamento da diabetes, tais como taxa basal, fator de sensibilidade à insulina e rácio de hidratos de carbono. A partir desses dados ele calcula sugestões de tratamento e implementa esses pequenos ajustes permanentes com a finalidade de manter a sua diabetes dentro do intervalo alvo e aliviá-lo deste trabalho. Isto deixa mais tempo para a sua vida "além" da diabetes.

Assim como não quer entrar num avião em que apenas o piloto automático voa sem supervisão humana, um sistema de loop fechado ajuda-o com a sua gestão da diabetes, mas irá sempre precisar do seu apoio! **Even with a closed loop you can't just forget your diabetes!**

Da mesma forma que o piloto automático depende dos valores do sensor, bem como das especificações do piloto , um sistema de loop fechado precisa da "entrada" dos dados certos, tais como: taxas de basal, FSI e rácios de hidratos de carbono para o apoiar com sucesso.

## Sistemas de Código Aberto de Pâncreas Artificial de Loop Fechado

Neste momento existem três grandes sistemas código aberto de loop fechado disponíveis:

### AndroidAPS (AAPS)

AndroidAPS is described in detail in [this documentation](./WhatisAndroidAPS.html). Ele usa um smartphone Android para o cálculo e controlo da sua bomba de insulina. It is in strong collaboration with OpenAPS (i.e. they share algorithms).

Compatible [pumps](../Hardware/pumps.md) are:

- [DanaR](../Configuration/DanaR-Insulin-Pump.md) / [DanaRS & Dana-i](../Configuration/DanaRS-Insulin-Pump.html)
- [Accu-Chek Combo](../Configuration/Accu-Chek-Combo-Pump.md)
- [Accu-Chek Insight](../Configuration/Accu-Chek-Insight-Pump.md)
- [Diaconn G8](../Configuration/DiaconnG8.md)
- [Omnipod DASH](../Configuration/OmnipodDASH.md)
- [Omnipod Eros](../Configuration/OmnipodEros.md)
- some old [Medtronic pumps](../Configuration/MedtronicPump.md)

### OpenAPS

[OpenAPS](https://openaps.readthedocs.io) was the first Open Source Closed Loop System. Ele usa um pequeno computador como Raspberry Pi ou Intel Edison.

As bombas compatíveis são:

- some old Medtronic pumps

### Loop para iOS

[Loop for iOS](https://loopkit.github.io/loopdocs/) is the Open Source Closed Loop System to be used with Apple iPhones.

As bombas compatíveis são:

- Omnipod DASH
- Omnipod Eros
- some old Medtronic pumps
