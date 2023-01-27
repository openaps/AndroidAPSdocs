# Что такое система замкнутого цикла?

```{image} ../images/autopilot.png
:alt: AAPS-как автопилот
```

Искусственная поджелудочная железа замкнутой системы сочетает в себе различные компоненты чтобы облегчить управление диабетом. In her great book [Automated Insulin Delivery](https://www.artificialpancreasbook.com/) Dana M. Lewis, one of the founders of the open source closed loop movement, calls it an ["autopilot for your diabetes"](https://www.artificialpancreasbook.com/3.-getting-started-with-your-aps). Что это означает?

**Autopilot in an aircraft**

Автопилот не выполняет всю работу и не дает возможности пилоту спать в течение всего полета. Он облегчает работу пилотов. Он освобождает их от бремени постоянного наблюдения за самолетом и ходом полета. Это позволяет пилоту сосредоточиться на мониторинге воздушного пространства и управлении функциями автопилота.

Автопилот получает сигналы от различных датчиков, компьютер оценивает их наряду со спецификациями пилота, а затем вносит необходимые корректировки. Пилоту больше не нужно беспокоиться о постоянных корректировках.

**Closed Loop System**

То же самое относится и к и системе искусственной поджелудочной железы. Она не делает всю работу, вы все равно должны контролировать свой диабет. Система замкнутого цикла объединяет данные датчиков мониторинга с такими параметрами управления диабетом, как скорость базала, коэффициент чувствительности к инсулину и углеводный коэффициент. Исходя из этого, она рассчитывает предложения по лечению и выполняет постоянные небольшие корректировки, чтобы держать диабет в целевом диапазоне и избавить вас от этой заботы. Это оставляет больше времени для жизни "рядом с" диабетом.

Так же, как никто не хочет попасть на самолет, которым управляет только автопилот без контроля человека, система замкнутого цикла помогает нам в управлении диабетом, но всегда нуждается в нашей поддержке! **Even with a closed loop you can't just forget your diabetes!**

Точно так же, как автопилот зависит от показателей датчиков, а также от параметров, задаваемых летчиками, система замкнутой петли требует соответствующих вводных данных, таких как скорость базала, чувствительность к инсулину ISF и углеводный коэффициент, чтобы успешно обеспечить поддержку вашего организма.

## Замкнутые системы ИПЖ с открытым исходным кодом

В настоящее время существует три основных замкнутых системы с открытым исходным кодом:

### AndroidAPS (AAPS)

AndroidAPS is described in detail in [this documentation](./WhatisAndroidAPS.html). Он использует смартфон Android для вычислений и контроля инсулиновой помпы. It is in strong collaboration with OpenAPS (i.e. they share algorithms).

Compatible [pumps](../Hardware/pumps.md) are:

- [DanaR](../Configuration/DanaR-Insulin-Pump.md) / [DanaRS & Dana-i](../Configuration/DanaRS-Insulin-Pump.html)
- [Помпа Accu Chek Combo](../Configuration/Accu-Chek-Combo-Pump.md)
- [Accu-Chek Insight](../Configuration/Accu-Chek-Insight-Pump.md)
- [Diaconn G8](../Configuration/DiaconnG8.md)
- [Omnipod DASH](../Configuration/OmnipodDASH.md)
- [Omnipod Eros](../Configuration/OmnipodEros.md)
- some old [Medtronic pumps](../Configuration/MedtronicPump.md)

### OpenAPS

[OpenAPS](https://openaps.readthedocs.io) was the first Open Source Closed Loop System. Она использует мини-компьютер, Raspberry Pi или Intel Edison.

Совместимые помпы:

- some old Medtronic pumps

### Петля iOS

[Loop for iOS](https://loopkit.github.io/loopdocs/) is the Open Source Closed Loop System to be used with Apple iPhones.

Совместимые помпы:

- Omnipod DASH
- Omnipod Eros
- some old Medtronic pumps
