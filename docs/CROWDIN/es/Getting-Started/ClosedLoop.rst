¿Qué es un Sistema de Lazo Cerrado?
**************************************************

.. imagen:: ../images/autopilot.png
  :alt: AAPS es como un autopiloto

Un sistema de páncreas artificial de lazo cerrado combina diferentes componentes para facilitarte la gestión de la diabetes. 
En su gran libro ` Automated Insulin Delivery <https://www.artificialpancreasbook.com/>` _ Dana M. Lewis, una de las fundadoras del movimiento colaborativo de "lazos cerrados", lo llama un "piloto automático para su diabetes" <https://www.artificialpancreasbook.com/3.-getting-started-with-your-aps>`_. ¿Qué quiere decir eso?

**Piloto automático de un avión**

El piloto automático no hace el trabajo completo y no permite al piloto de dormir durante todo el vuelo. Facilita el trabajo de los pilotos. Les libera de la carga de vigilar permanentemente el avión y la altitud de vuelo. Esto permite al piloto concentrarse en la vigilancia del espacio aéreo y en supervisar el funcionamiento del piloto automático.

El piloto automático recibe señales de varios sensores, un ordenador los evalúa junto con las especificaciones del piloto y luego realiza los ajustes necesarios. El piloto ya no tiene que preocuparse por ir ajustando constantemente.

** Sistema de Lazo Cerrado * *

Lo mismo se aplica a un páncreas artificial con sistema de lazo cerrado. No hace todo el trabajo, todavía tienes que cuidar de tu diabetes. Un sistema de lazo cerrado combina los datos del sensor de un MCG/FGM con tus especificaciones de gestión de diabetes, como la tasa basal, el factor de sensibilidad a insulina y los ratios de hidratos. A partir de esto calcula sugerencias de tratamiento e implementa pequeños ajustes constantemente para mantener tu diabetes dentro del rango objetivo y para ayudarte en ese trabajo. Esto deja más tiempo para el lado "no diabético" de tu vida.

De la misma manera en la que no subirías a un avión que volara sólo con piloto automático, sin supervisión humana, un lazo cerrado te ayuda en la gestión de tu diabetes pero no te sustituye, siempre necesitará de tu supervisión! **¡Incluso con un bucle cerrado no te puedes olvidar de tu diabetes!**

Así como el piloto automático de un avión depende de los valores de los sensores así como de especificaciones del piloto, un sistema de lazo cerrado necesita valores de entrada apropiados, tales como las basales, la ISF y los ratios de hidratos para poder funcionar con éxito.


Sistemas de Páncreas Artificial con Lazo cerrado en Código Abierto (Open Source)
==================================================
Actualmente hay tres grandes sistemas de circuito cerrado de código abierto disponibles:

AndroidAPS (AAPS)
--------------------------------------------------
AndroidAPS se describe en detalle en " esta documentación <./WhatisAndroidAPS.html>`_. Utiliza un Smartphone Android para el cálculo y el control de su bomba de insulina. Está en estrecha colaboración con OpenAPS (p.e. comparten algoritmos).

Las bombas compatibles <../Hardware/pumps.html>`_ son:

* DanaR / DanaRS
* Accu-Check Combo
* Accu-Chek Insight
* algunas bombas Medtronic antiguas (como la de la versión 2.4)

OpenAPS
--------------------------------------------------
` OpenAPS <https://openaps.readthedocs.io>` _ fue el primer Sistema de Bucle Cerrado de Código Abierto. Utiliza un ordenador pequeño como Raspberry Pi o Intel Edison.

Las bombas compatibles son:

* algunas bombas Medtronic antiguas

Loop para iOS
--------------------------------------------------
`Loop para iOS <https://loopkit.github.io/loopdocs/>`_ es el sistema de lazo cerrado en código abierto que se utiliza con iPhones de Apple.

Las bombas compatibles son:

* Omnipod Eros
* algunas bombas Medtronic antiguas
