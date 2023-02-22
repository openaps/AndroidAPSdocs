# O que é um Sistema de Loop Fechado?

```{image} ../images/autopilot.png
:alt: AAPS é como um piloto automático
```

Um sistema de pâncreas artificial de loop fechado combina diversos componentes para facilitar o gerenciamento do diabetes para você. In her great book [Automated Insulin Delivery](https://www.artificialpancreasbook.com/) Dana M. Lewis, one of the founders of the open source closed loop movement, calls it an ["autopilot for your diabetes"](https://www.artificialpancreasbook.com/3.-getting-started-with-your-aps). Mas o que isso significa?

**Autopilot in an aircraft**

O piloto automático não faz o trabalho completo e não dá a possibilidade ao piloto de dormir ao longo de todo o voo. Ele facilita o trabalho dos pilotos. Liberta-os do fardo de uma vigilância constante do avião e da atitude de voo. Isto permite que o piloto se concentre no monitoramento do espaço aéreo e no controle das funções do piloto automático.

O piloto automático recebe sinais de vários sensores, um computador avalia-os em conjunto com as especificações do piloto e então executa os ajustes necessários. O piloto não precisa mais se preocupar com os ajustes constantes.

**Closed Loop System**

O mesmo se aplica a um sistema de pâncreas artificial de loop fechado. Ele não faz todo o trabalho, você ainda tem de cuidar do seu diabetes. Um sistema de loop fechado combina os dados do sensor de um CGM/FGM com as especificações de gerenciamento de diabetes, como taxa de basal, fator de sensibilidade à insulina e relação de carboidratos. A partir daí, calcula as sugestões de tratamento e implementa esses pequenos ajustes permanentes a fim de manter seu diabetes dentro do intervalo de meta para aliviá-lo. Isso deixa mais tempo para a sua vida "ao lado do" diabetes.

Assim como não quer entrar num avião onde apenas o piloto automático voa sem supervisão humana, um sistema de loop fechado ajuda-o com o gerenciamento do seu diabetes, mas sempre precisa do seu apoio! **Even with a closed loop you can't just forget your diabetes!**

Assim como o piloto automático depende dos valores dos sensores e das especificações do piloto, um sistema de loop fechado precisa de entradas apropriadas, como taxas de basal, FS e I:C (relação número de gramas de carboidratos para uma unidade de insulina) para apoiar você com sucesso.

## Sistemas de Pâncreas Artificial de Loop Fechado de Código Aberto

Atualmente existem três principais sistemas de loop fechado de código aberto disponíveis:

### AndroidAPS (AAPS)

AndroidAPS is described in detail in [this documentation](./WhatisAndroidAPS.html). Ele usa um Smartphone Android para cálculo e controle da sua bomba de insulina. It is in strong collaboration with OpenAPS (i.e. they share algorithms).

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

Bombas compatíveis:

- some old Medtronic pumps

### Loop para iOS

[Loop for iOS](https://loopkit.github.io/loopdocs/) is the Open Source Closed Loop System to be used with Apple iPhones.

Bombas compatíveis:

- Omnipod DASH
- Omnipod Eros
- some old Medtronic pumps
