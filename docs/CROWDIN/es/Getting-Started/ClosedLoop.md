# ¿Qué es un Sistema de Lazo Cerrado?

![AAPS como un piloto automático](../images/autopilot.png)

Un sistema de lazo cerrado de páncreas artificial combina diferentes componentes para facilitar la gestión de la diabetes para ti. En su excelente libro ["Automated Insulin Delivery"](https://www.artificialpancreasbook.com/), Dana M. Lewis, una de las fundadoras del movimiento de lazo cerrado de código abierto, lo denomina un ["piloto automático para tu diabetes"](https://www.artificialpancreasbook.com/3.-getting-started-with-your-aps). Pero, ¿Qué quiere decir esto?

**Piloto automático de un avión**

El piloto automático no realiza todo el trabajo y no brinda la posibilidad al piloto de dormir durante todo el vuelo. Facilita el trabajo de los pilotos. Los libera de la carga de monitorear permanentemente la aeronave y la actitud de vuelo. Esto permite al piloto concentrarse en monitorear el espacio aéreo y controlar las funciones del piloto automático.

El piloto automático recibe señales de varios sensores, un ordenador los evalúa junto con las especificaciones del piloto y luego realiza los ajustes necesarios. El piloto ya no tiene que preocuparse por los ajustes constantes.

**Sistema de lazo cerrado**

Lo mismo se aplica a un sistema de lazo cerrado de páncreas artificial. No hace todo el trabajo, aún debes cuidar de tu diabetes. Un sistema de lazo cerrado combina los datos del sensor (MCG/MFG) con las especificaciones de tu manejo de la diabetes, como la tasa basal, el factor de sensibilidad a la insulina y la relación de carbohidratos. A partir de esto, calcula sugerencias de tratamiento e implementa estos pequeños ajustes permanentes con el fin de mantener tu diabetes dentro del rango objetivo y aliviarte. Esto te deja más tiempo para tu vida "junto a" la diabetes.

Al igual que no querrías subirte a un avión donde solo el piloto automático vuele sin supervisión humana, un sistema de lazo cerrado te ayuda con el manejo de tu diabetes, ¡pero siempre necesita tu apoyo! **Incluso con un lazo cerrado, no puedes simplemente olvidarte de tu diabetes.**

Al igual que el piloto automático depende de los valores de los sensores, así como de las especificaciones del piloto, un sistema de lazo cerrado necesita una entrada adecuada, como tasas basales, ISF y relación de carbohidratos, para apoyarte con éxito.

## Sistemas de Lazo Cerrado de Páncreas Artificial de Código Abierto

En la actualidad, existen tres principales sistemas de lazo cerrado de código abierto disponibles:

### AndroidAPS (AAPS)

AAPS se describe en detalle en [esta documentación](./WhatisAndroidAPS.html). Utiliza un smartphone Android para el cálculo y el control de tu bomba de insulina. Mantiene una estrecha colaboración con OpenAPS (es decir, comparten algoritmos).

Las [bombas](../Hardware/pumps.md) compatibles son:

- [DanaR](../Configuration/DanaR-Insulin-Pump.md) / [DanaRS & Dana-i](../Configuration/DanaRS-Insulin-Pump.html)
- [Accu-Check Combo](../Configuration/Accu-Chek-Combo-Pump.md)
- [Accu-Chek Insight](../Configuration/Accu-Chek-Insight-Pump.md)
- [Diaconn G8](../Configuration/DiaconnG8.md)
- [Omnipod DASH](../Configuration/OmnipodDASH.md)
- [Omnipod Eros](../Configuration/OmnipodEros.md)
- Antiguos modelos de [Medtronic](../Configuration/MedtronicPump.md)

### OpenAPS

[OpenAPS](https://openaps.readthedocs.io) fue el primer Sistema de Lazo Cerrado de Código Abierto. Utiliza un pequeño ordenador, como Raspberry Pi o Intel Edison.

Las bombas compatibles son:

- Algunas bombas antiguas de Medtronic

### Loop para iOS

[Loop for iOS](https://loopkit.github.io/loopdocs/) es el Sistema de Lazo Cerrado de Código Abierto que se utiliza con iPhones de Apple.

Las bombas compatibles son:

- Omnipod DASH
- Omnipod Eros
- Algunas bombas antiguas de Medtronic
