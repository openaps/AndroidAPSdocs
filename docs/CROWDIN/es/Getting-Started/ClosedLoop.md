# ¿Qué es un Sistema de Lazo Cerrado?

```{image} ../images/autopilot.png
:alt: AAPS como un piloto automático
```

Un sistema de páncreas artificial de lazo cerrado combina diferentes componentes para facilitarte la gestión de la diabetes. In her great book [Automated Insulin Delivery](https://www.artificialpancreasbook.com/) Dana M. Lewis, one of the founders of the open source closed loop movement, calls it an ["autopilot for your diabetes"](https://www.artificialpancreasbook.com/3.-getting-started-with-your-aps). Pero, ¿Qué quiere decir esto?

**Autopilot in an aircraft**

El piloto automático no hace el trabajo completo y no permite al piloto de dormir durante todo el vuelo. Facilita el trabajo de los pilotos. Les libera de la carga de vigilar permanentemente el avión y la altitud de vuelo. Esto permite al piloto concentrarse en la vigilancia del espacio aéreo y en supervisar el funcionamiento del piloto automático.

El piloto automático recibe señales de varios sensores, un ordenador los evalúa junto con las especificaciones del piloto y luego realiza los ajustes necesarios. El piloto ya no tiene que preocuparse por ir ajustando constantemente.

**Closed Loop System**

Lo mismo se aplica a un páncreas artificial con sistema de lazo cerrado. No hace todo el trabajo, todavía tienes que cuidar de tu diabetes. Un sistema de lazo cerrado combina los datos del sensor de un MCG/FGM con tus especificaciones de gestión de diabetes, como la tasa basal, el factor de sensibilidad a insulina y los ratios de hidratos. A partir de esto calcula sugerencias de tratamiento e implementa pequeños ajustes constantemente para mantener tu diabetes dentro del rango objetivo y para ayudarte en ese trabajo. Esto deja más tiempo para el lado "no diabético" de tu vida.

De la misma manera en la que no subirías a un avión que volara sólo con piloto automático, sin supervisión humana, un lazo cerrado te ayuda en la gestión de tu diabetes pero no te sustituye, siempre necesitará de tu supervisión! **Even with a closed loop you can't just forget your diabetes!**

Así como el piloto automático de un avión depende de los valores de los sensores así como de especificaciones del piloto, un sistema de lazo cerrado necesita valores de entrada apropiados, tales como las basales, la ISF y los ratios de hidratos para poder funcionar con éxito.

## Sistemas de Páncreas Artificial con Lazo cerrado en Código Abierto (Open Source)

Actualmente hay tres grandes sistemas de circuito cerrado de código abierto disponibles:

### AndroidAPS (AAPS)

AndroidAPS is described in detail in [this documentation](./WhatisAndroidAPS.html). Utiliza un Smartphone Android para el cálculo y el control de su bomba de insulina. It is in strong collaboration with OpenAPS (i.e. they share algorithms).

Compatible [pumps](../Hardware/pumps.md) are:

- [DanaR](../Configuration/DanaR-Insulin-Pump.md) / [DanaRS & Dana-i](../Configuration/DanaRS-Insulin-Pump.html)
- [Accu-Check Combo](../Configuration/Accu-Chek-Combo-Pump.md)
- [Accu-Chek Insight](../Configuration/Accu-Chek-Insight-Pump.md)
- [Diaconn G8](../Configuration/DiaconnG8.md)
- [Omnipod DASH](../Configuration/OmnipodDASH.md)
- [Omnipod Eros](../Configuration/OmnipodEros.md)
- some old [Medtronic pumps](../Configuration/MedtronicPump.md)

### OpenAPS

[OpenAPS](https://openaps.readthedocs.io) was the first Open Source Closed Loop System. Utiliza un ordenador pequeño como Raspberry Pi o Intel Edison.

Las bombas compatibles son:

- some old Medtronic pumps

### Loop para iOS

[Loop for iOS](https://loopkit.github.io/loopdocs/) is the Open Source Closed Loop System to be used with Apple iPhones.

Las bombas compatibles son:

- Omnipod DASH
- Omnipod Eros
- some old Medtronic pumps
