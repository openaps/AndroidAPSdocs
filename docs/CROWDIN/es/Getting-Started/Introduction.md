# Introducción a APS y AAPS

```{contents} In this page
:backlinks: entry
:depth: 2
```

## ¿Qué es un sistema de páncreas artificial?

Un páncreas humano hace muchas cosas además de regular el azúcar en sangre. Sin embargo, el término **«sistema de páncreas artificial» (APS)** suele referirse a un sistema que trabaja para mantener automáticamente los niveles de azúcar en sangre dentro de límites saludables.

La forma más básica de hacerlo es detectar los **niveles de glucosa**, usar estos valores para hacer **cálculos** y luego administrar al cuerpo la cantidad correcta (prevista) de **insulina**. Repite el cálculo cada pocos minutos, 24/7. Utiliza **alarmas** y **alertas** para informar al usuario si se necesita intervención o atención. Este sistema suele estar formado por un **sensor de glucosa**, una **bomba de insulina** y un **controlador** que hace los cálculos. En **AAPS** y en otros sistemas de código abierto, el controlador es una aplicación en un teléfono. En la mayoría de los sistemas comerciales es un software integrado en la propia bomba, y la aplicación del teléfono se usa sobre todo para ver datos y para controlar.

Para conocer cómo se desarrollaron los sistemas de lazo cerrado y cómo funcionan, este artículo de revisión de 2022 es un buen punto de partida. Ten en cuenta que es anterior a la mayoría de los sistemas disponibles hoy, así que no es una guía de lo que hay actualmente en el mercado:

![Frontiers](../images/FRONTIERS_Logo_Grey_RGB.png) [Closed-Loop Insulin Delivery Systems: Past, Present, and Future Directions](https://www.frontiersin.org/journals/endocrinology/articles/10.3389/fendo.2022.919942/full) (Templer, _Frontiers in Endocrinology_, 2022).

Los llamados sistemas «bihormonales» administran glucagón además de insulina, para evitar hipoglucemias graves y permitir un control de la glucosa todavía más estricto. Un primer sistema de este tipo ha sido aprobado en Europa, pero solo se ofrece mediante estudios y proyectos, y otros todavía están en desarrollo. Ninguno está todavía a la venta para el público general.

Un páncreas artificial se puede ver como un [«piloto automático para tu diabetes»](https://www.artificialpancreasbook.com/). ¿Qué significa eso?

En una aeronave, un piloto automático no realiza completamente el trabajo del piloto humano; el piloto no puede dormirse durante todo el vuelo. El piloto automático ayuda en el trabajo del piloto. Le quita la carga de tener que manejar el avión todo el tiempo, y así el piloto puede concentrarse en una vigilancia más amplia. El piloto automático recibe señales de varios sensores; un ordenador evalúa los datos junto con las indicaciones del piloto, hace los ajustes necesarios y avisa al piloto si hay algún problema. El piloto ya no tiene que preocuparse de tomar decisiones continuamente, y esta comparación se puede aplicar a **AAPS**.

![imagen](../images/autopilot.png)

(Introduction-what-does-hybrid-closed-loop-mean)=
## ¿Qué significa lazo cerrado híbrido?

La mejor solución para la diabetes tipo 1 sería una 'cura funcional' (probablemente un implante de células pancreáticas que estén protegidas del sistema inmunológico). Mientras la comunidad de personas con diabetes tipo 1 (DT1) espera esto, un páncreas artificial de «lazo cerrado completo» es probablemente la mejor opción. Se trata de un sistema tecnológico que no necesita ninguna intervención por parte del usuario (como la administración de insulina para las comidas o la notificación de ejercicio), con una buena regulación de los niveles de glucosa en sangre. Casi todos los sistemas de uso diario son de lazo cerrado «híbrido», porque combinan tecnología automática con acciones del usuario. Los primeros sistemas de lazo cerrado completo se aprobaron en Europa en 2026, pero ninguno está todavía disponible de forma amplia.

## ¿Cómo y por qué comenzó el lazo cerrado (looping)?

El desarrollo de tecnología comercial para personas con diabetes tipo 1 (DT1) es muy lento. En 2013, la comunidad de personas con diabetes tipo 1 (DT1) fundó el movimiento #WeAreNotWaiting. Desarrollaron sistemas por sí mismos utilizando tecnología existente y aprobada (bombas de insulina y sensores) para mejorar el control de la glucosa en sangre, la seguridad y la calidad de vida. Se conocen como sistemas OS-AID (Open-Source Automated Insulin Delivery, administración automática de insulina de código abierto), antes llamados sistemas DIY («hazlo tú mismo»), porque no están aprobados formalmente por las autoridades sanitarias (FDA, NHS, etc.). Hay cuatro sistemas OS-AID principales: [OpenAPS](https://openaps.org/what-is-openaps/), **AAPS**, [Loop](https://loopkit.github.io/loopdocs/#what-is-loop) y [Trio](https://triodocs.org).

Una muy buena forma de entender los fundamentos del lazo OS-AID es leer el libro de Dana Lewis «Automated Insulin Delivery». Puedes leerlo [aquí](https://www.artificialpancreasbook.com/) gratis (o comprar el libro en papel). Si quieres entender mejor [OpenAPS](https://openaps.org/what-is-openaps/), a partir del cual se desarrolló **AAPS**, el [sitio web de OpenAPS](https://openaps.org/what-is-openaps/) es un recurso muy bueno.

También se han lanzado varios sistemas comerciales de lazo cerrado híbrido. Son muy diferentes de los sistemas OS-AID, sobre todo porque muchos de ellos tienen un «algoritmo de aprendizaje» que ajusta cuánta insulina se administra según tus necesidades de insulina de los días anteriores. Muchas personas de la comunidad OS-AID ya han probado sistemas comerciales y los han comparado con su sistema OS-AID. Puedes saber más sobre cómo se comparan los distintos sistemas preguntando en los grupos de Facebook de esos sistemas, en el [grupo de Facebook de AAPS](https://www.facebook.com/groups/AndroidAPSUsers/) o en [Discord](https://discord.com/invite/4fQUWHZ4Mw).

## ¿Qué es Android APS (AAPS)?

![imagen](../images/basic-outline-of-AAPS.png)

**Figura 1**. Esquema básico de Android APS (Sistema de Páncreas Artificial), AAPS.

Android APS (**AAPS**) es un sistema de lazo cerrado híbrido, o sistema de páncreas artificial (APS). Hace sus cálculos de dosis de insulina con algoritmos consolidados de [OpenAPS](https://openaps.org/) (un conjunto de reglas) desarrollados por la comunidad DT1 #WeAreNotWaiting.

Como OpenAPS solo es compatible con ciertas bombas de insulina antiguas, **AAPS** (que se puede usar con más tipos de bombas de insulina) se desarrolló por primera vez en 2016 para un familiar con diabetes tipo 1. Desde aquellos primeros días, **AAPS** ha sido continuamente desarrollado y perfeccionado por un equipo de desarrolladores, voluntarios y entusiastas que tienen una conexión con el mundo de la diabetes tipo 1. Hoy en día, **AAPS** lo usan muchos miles de personas en todo el mundo. Es un sistema muy personalizable y versátil y, como es de código abierto, también es fácilmente compatible con muchos otros programas y plataformas de código abierto para la diabetes. Los componentes fundamentales del sistema **AAPS** actual se muestran en la **Figura 1** de arriba.



## ¿Cuáles son los componentes básicos de AAPS?

El «cerebro» de AAPS es una **aplicación** que compilas tú mismo. Existen instrucciones detalladas paso a paso para esto. Después instalas la **aplicación AAPS** en un **smartphone Android** [compatible](../Getting-Started/Phones.md) (**1**). Un número de usuarios prefieren tener su sistema de lazo cerrado en un teléfono separado de su teléfono principal. Así que no tienes por qué usar un teléfono Android para todo lo demás en tu vida, solo para ejecutar tu lazo de AAPS.

El **smartphone Android** también necesita tener instalada otra aplicación, además de **AAPS**. Esta [aplicación adicional](../Getting-Started/CompatiblesCgms.md) recibe los datos de glucosa de un sensor (**2**) por Bluetooth y luego los envía, dentro del teléfono, a la **aplicación AAPS**.

La aplicación **AAPS** utiliza un proceso de toma de decisiones (**algoritmo**) de OpenAPS. Los principiantes comienzan usando el algoritmo básico **oref0**, pero es posible cambiar y utilizar el algoritmo más reciente **oref1** a medida que avanzas con AAPS. El algoritmo que uses (oref0 u oref1), dependerá de cuál se adapte mejor a tu situación.  En ambos casos, el algoritmo tiene en cuenta múltiples factores y realiza cálculos rápidos cada vez que llega una nueva lectura del sensor. Después, el algoritmo envía por Bluetooth instrucciones a la bomba de insulina (**3**) sobre cuánta insulina administrar. Toda la información se puede enviar a internet (**4**) por datos móviles o wifi. Estos datos también se pueden compartir con seguidores si se desea y/o recopilarse para su análisis. Opcionalmente, también puedes emparejar un [reloj inteligente](../Getting-Started/Watches.md) (**5**) con el teléfono para ver tus datos de un vistazo y, con algunos relojes, enviar órdenes básicas a **AAPS**.

## ¿Cuáles son las ventajas del sistema AAPS?

El algoritmo OpenAPS utilizado por **AAPS** controla los niveles de azúcar en sangre en ausencia de la entrada del usuario, de acuerdo a los parámetros definidos por los usuarios (siendo importantes las tasas basales, factores de sensibilidad a la insulina, relaciones insulina-carbohidratos, duración de la insulina activa, etc.), reaccionando cada 5 minutos a los nuevos datos del sensor.

Algunas de las ventajas de usar **AAPS** que cuentan los usuarios son las muchas opciones de ajuste fino, las **automatizaciones** y una mayor transparencia del sistema para el paciente o el cuidador. Esto puede dar un mejor control de tu diabetes (o de la de la persona que cuidas), y así quizá una mejor calidad de vida y más tranquilidad.

Con inversión de tu tiempo, **AAPS** potencialmente puede llevar a:

- Aliviar el estrés y la carga de gestionar la diabetes tipo 1;

- Reducir la multitud de decisiones que surgen a raíz de la diabetes tipo 1;

- La provisión de dosis de insulina personalizadas y dinámicas basadas en datos en tiempo real, lo que puede reducir la necesidad de tratamientos para hipoglucemias y episodios de hiperglucemia;

- Un aumento en el conocimiento sobre la gestión de la insulina y la confianza para ajustar mejor tus configuraciones;

- La capacidad de crear configuraciones automáticas (**automatizaciones**) que se adapten a tu estilo de vida;

- Mejora en la calidad del sueño y reducción general en la frecuencia de intervenciones nocturnas;

- Seguimiento remoto y administración de la entrega de insulina para cuidadores de personas con diabetes tipo 1; y

- simplificar todo tu equipo portátil para la diabetes (receptor del monitor continuo de glucosa y dispositivos para controlar la insulina) usando un teléfono Android controlado por **AAPS**.


En definitiva, **AAPS** puede ayudar a las personas a manejar mejor su diabetes, con glucosas estables y mejores resultados de salud a largo plazo.

### Algunas ventajas concretas son:

#### 1) Seguridad incorporada
Para leer sobre las funciones de seguridad de los algoritmos, llamados oref0 y oref1, [haz clic aquí](https://openaps.org/reference-design/). El usuario controla sus propios límites de seguridad.

#### 2) Flexibilidad de hardware

**AAPS** funciona con una amplia gama de bombas de insulina y sensores, y ofrece flexibilidad cuando la vida cambia. Por ejemplo, si desarrollas alergia al adhesivo del parche del sensor de Dexcom, podrías cambiar y usar un sensor Libre en su lugar. No hace falta volver a compilar ni reinstalar la aplicación **AAPS**: para cambiar tu hardware, solo tienes que elegir otra bomba u otra fuente de glucosa en **Configuración**. **AAPS** no depende de controladores de bomba concretos y además tiene una «bomba virtual», para que los usuarios puedan probar con seguridad antes de usarlo en sí mismos.

#### 3) Muy personalizable, con parámetros amplios

Los usuarios pueden añadir o quitar fácilmente módulos o funciones, y **AAPS** se puede usar tanto en modo de lazo abierto como de lazo cerrado. Estos son algunos ejemplos de lo que se puede hacer con el sistema **AAPS**:

 a) Puedes poner un objetivo de **glucosa** más bajo 30 minutos antes de comer; el objetivo puede bajar hasta 72 mg/dl (4,0 mmol/l).

 b) Si tienes resistencia a la insulina y por eso glucosas altas, **AAPS** te permite crear una regla de **automatización** que se active cuando la glucosa suba por encima de 8 mmol/l (144 mg/dl) y cambie (por ejemplo) a un perfil del 120 % (esto da un aumento del 20 % en la basal y también refuerza otros factores, comparado con la configuración normal de tu **perfil**). La automatización durará según el tiempo programado que establezcas. Dicha automatización se puede configurar para estar activa solo en ciertos días de la semana, en momentos específicos del día e incluso en ubicaciones determinadas.

 c) Si tu hijo salta en una cama elástica de repente, sin avisar antes, **AAPS** permite suspender la insulina durante un tiempo fijado, directamente desde el teléfono.

 d) Después de volver a conectar una bomba con catéter que estuvo desconectada para nadar, **AAPS** calcula la insulina basal que no recibiste mientras estaba desconectada y la administra con cuidado, según tu glucosa actual. Cualquier insulina que no sea necesaria se puede anular simplemente "cancelando" la basal perdida.

 e) **AAPS** te permite crear perfiles diferentes para situaciones diferentes y cambiar fácilmente entre ellos. Por ejemplo, las funciones que hacen que el algoritmo baje más rápido una glucosa alta (como los supermicrobolos («**SMB**») o las comidas no anunciadas («**UAM**»)) se pueden configurar para que solo funcionen durante el día, si te preocupan las hipoglucemias nocturnas.

Todo esto son ejemplos; el conjunto completo de funciones da una gran flexibilidad para la vida diaria, incluyendo deporte, enfermedad, ciclos hormonales, _etc._ En última instancia, es el usuario quien decide cómo usar esta flexibilidad, y no existe una automatización única que funcione para todos.

#### 4) Seguimiento remoto
Hay varios canales de seguimiento posibles (Sugarmate, Dexcom Follow, xDrip, Android Auto, _etc._), útiles para padres y cuidadores y para adultos en ciertas situaciones (al dormir o al conducir) que necesitan alertas personalizables. En algunas aplicaciones (xDrip) también puedes apagar del todo las alarmas, lo que va muy bien si tienes un sensor nuevo que se está «asentando» y con el que todavía no quieres hacer lazo.

#### 5) Control remoto
Una gran ventaja de **AAPS** frente a los sistemas comerciales es que los seguidores pueden enviar muchas órdenes distintas al sistema **AAPS**, con comandos de texto (SMS) autenticados o con una aplicación **AAPSClient** emparejada. Esta función la usan mucho los padres de niños con diabetes tipo 1 que usan **AAPS**.

Las funciones de control remoto pueden ser muy útiles: por ejemplo, en el parque, si quieres poner un prebolo para una merienda desde tu propio teléfono mientras tu hijo está ocupado jugando. También se puede seguir el sistema desde un reloj inteligente (_p. ej._ Garmin) o enviar órdenes básicas desde él (_p. ej._ un reloj Wear OS como el Samsung Galaxy Watch).

#### 6) Sin limitaciones comerciales, gracias a interfaces de aplicación abiertas
Además del enfoque de código abierto, que permite ver el código fuente de **AAPS** en cualquier momento, el principio general de ofrecer interfaces de programación abiertas da también a otros desarrolladores la oportunidad de aportar nuevas ideas. **AAPS** está muy integrado con Nightscout. Esto acelera el desarrollo y permite a los usuarios añadir funciones que hacen la vida con diabetes todavía más cómoda. Buenos ejemplos de estas integraciones son [Nightscout](https://nightscout.github.io/), [Nightscout Reporter](https://nightscout-reporter.zreptil.de/), xDrip, [M5 stack](https://github.com/mlukasek/M5_NightscoutMon/wiki), etc. Hay un diálogo continuo entre los desarrolladores de código abierto y quienes desarrollan sistemas comerciales. Muchas de las innovaciones OS-AID se incorporan poco a poco a los sistemas comerciales, donde el desarrollo es, como es lógico, más lento, en parte porque las interfaces entre sistemas de distintas empresas (bombas, aplicaciones, sensores, _etc._) se tienen que negociar y licenciar con cuidado. Esto también puede frenar innovaciones que son útiles para el paciente (o para un pequeño grupo de pacientes con una necesidad muy concreta), pero que no generan un beneficio económico importante.

#### 7) Interfaz de la aplicación detallada
Con **AAPS** es fácil controlar cosas como: el nivel de insulina en la bomba, la edad de la cánula, la edad del sensor, la edad de la batería de la bomba, la insulina activa, _etc._ Muchas acciones se pueden hacer desde la aplicación **AAPS** (cebar la bomba, desconectar la bomba, _etc._) en lugar de en la propia bomba, así que la bomba puede quedarse en tu bolsillo o en tu cinturón (o en los de la persona que cuidas).

#### 8) Accesibilidad y precio asequible
**AAPS** da a las personas que ahora no pueden pagarlo por su cuenta, o que no tienen financiación o seguro, acceso a un sistema de lazo cerrado híbrido que en su concepto está años por delante de los sistemas comerciales en cuanto a desarrollo. Actualmente necesitas un servidor de informes (Nightscout o Tidepool) para configurar **AAPS**, aunque no hace falta para el funcionamiento diario del lazo de **AAPS**. Mucha gente sigue usando Nightscout para recoger sus datos y para el seguimiento remoto. Aunque **AAPS** es gratuito, configurar Nightscout en una de las distintas plataformas puede tener un coste (0–12 €), según el nivel de soporte que quieras (consulta la tabla comparativa) y si quieres seguir usando Nightscout después de la configuración o no. **AAPS** funciona con una amplia gama de [teléfonos Android](https://docs.google.com/spreadsheets/u/1/d/e/2PACX-1vScCNaIguEZVTVFAgpv1kXHdsHl3fs6xT6RB2Z1CeVJ561AvvqGwxMhlmSHk4J056gMCAQE02sAWJvT/pubhtml?gid=683363241&single=true) asequibles (desde unos 150 €). Hay versiones diferentes para lugares e idiomas concretos, y AAPS también lo pueden usar personas [ciegas](#accessibility-for-users-aaps-who-are-partially-or-completely-blind).

#### 9) Apoyo
Ningún sistema automático de administración de insulina es perfecto. Los sistemas comerciales y de código abierto comparten muchos fallos comunes en la comunicación y fallos temporales del hardware. Hay apoyo de la comunidad de usuarios de AAPS en Facebook, Discord y GitHub, personas de todo el mundo que han diseñado, desarrollado y usan actualmente **AAPS**. Para los sistemas APS comerciales también hay grupos de apoyo en Facebook y ayuda de las clínicas o de las empresas; vale la pena hablar con usuarios o antiguos usuarios de estos sistemas para saber qué fallos son comunes, qué calidad tiene el programa de formación y cuánto apoyo continuo se ofrece.

#### 10) Previsibilidad, transparencia y seguridad
**AAPS** es transparente, lógico y previsible, lo que puede hacer más fácil saber cuándo un ajuste está mal y corregirlo. Puedes ver exactamente lo que el sistema está haciendo, por qué lo está haciendo y establecer sus límites operativos, lo que coloca el control (y la responsabilidad) en tus manos. Esto puede brindar al usuario confianza y un sueño más tranquilo.

#### 11) Acceso a funciones avanzadas mediante los modos de desarrollo (dev), incluido el lazo cerrado completo
Esta documentación de **AAPS** se centra en la rama principal **«master»** de **AAPS**. Sin embargo, la investigación y el desarrollo no se detienen nunca. Los usuarios con más experiencia pueden querer probar las funciones experimentales de la rama de **desarrollo**. Las novedades en desarrollo se centran en estrategias para el lazo cerrado completo (sin tener que poner bolos para las comidas, _etc._) y, en general, en hacer la vida con diabetes tipo 1 lo más cómoda posible.

#### 12) Posibilidad de contribuir tú mismo a nuevas mejoras
La diabetes tipo 1 puede ser muy frustrante y hacer que te sientas solo. Tener el control sobre tu propia tecnología para la diabetes, con la posibilidad de "retribuir" tan pronto como haces progresos al ayudar a otros en su camino, puede ser realmente gratificante. Puedes formarte, descubrir los obstáculos y buscar nuevos desarrollos, e incluso contribuir a ellos y a la documentación. En la comunidad habrá otras personas con el mismo objetivo con las que puedes compartir ideas y trabajar. Esta es la esencia de #WeAreNotWaiting.

## ¿Cómo se compara AAPS con las múltiples inyecciones diarias (MDI) y el lazo abierto?

Las múltiples inyecciones diarias (MDI, (a) en la **Figura 2** de abajo) suelen consistir en una inyección de insulina de acción prolongada (_p. ej._ Tresiba) una vez al día, e inyecciones de insulina de acción más rápida (_p. ej._ Novorapid, Fiasp) en las comidas o para correcciones. El uso de una bomba en lazo abierto (b) consiste en usar una bomba que administra insulina de acción rápida como basal a tasas preprogramadas, y luego poner bolos con la bomba en las comidas o para correcciones. La idea básica de un sistema de lazo es que la aplicación del lazo usa los datos de glucosa del sensor para decir a la bomba que pare la administración de insulina cuando predice que vas hacia una hipoglucemia, y que te dé insulina extra si tu glucosa está subiendo y se prevé que llegue demasiado alta (c). Aunque esta figura es más simple que la vida real, sirve para mostrar las diferencias principales entre los enfoques. Con cualquiera de estos tres enfoques se puede lograr un control de la glucosa excepcionalmente bueno.

![21-06-23 AAPS glucose MDI etc](../images/basic-overview-mdi-open-and-closed-loop.png)


**Figura 2**. Esquema básico de (a) MDI, (b) bomba en lazo abierto y (c) bomba en lazo cerrado híbrido.

## ¿Cómo se compara AAPS con otros sistemas de lazo cerrado?

A 25 de junio de 2023, hay cuatro sistemas principales de lazo cerrado de código abierto: [OpenAPS](https://openaps.readthedocs.io/), **AAPS**, [Loop](https://loopkit.github.io/loopdocs/#what-is-loop) y [Trio](https://triodocs.org) (antes FreeAPS X). Las características de los diferentes sistemas se muestran en la siguiente tabla:


| Tipo de dispositivo | Nombre                                                                        | [AAPS](https://wiki.aaps.app)               | [Lazo](https://loopkit.github.io/loopdocs/) | [Open APS](https://openaps.readthedocs.io/en/latest/) | [Trio](https://triodocs.org)                |
| ------------------- | ----------------------------------------------------------------------------- | ------------------------------------------- | ------------------------------------------- | ----------------------------------------------------- | ------------------------------------------- |
| Teléfono            | Android                                                                       | ![disponible](../images/available.png)      | ![no disponible](../images/unavailable.png) | ![no disponible](../images/unavailable.png)           | ![no disponible](../images/unavailable.png) |
| Teléfono            | iPhone                                                                        | ![no disponible](../images/unavailable.png) | ![disponible](../images/available.png)      | ![no disponible](../images/unavailable.png)           | ![disponible](../images/available.png)      |
| Rig                 | miniordenador (1)                                                             | ![no disponible](../images/unavailable.png) | ![no disponible](../images/unavailable.png) | ![disponible](../images/available.png)                | ![no disponible](../images/unavailable.png) |
| BOMBA               | [Dana I](../CompatiblePumps/DanaRS-Insulin-Pump.md)                           | ![disponible](../images/available.png)      | ![disponible](../images/available.png)      | ![no disponible](../images/unavailable.png)           | ![disponible](../images/available.png)      |
| BOMBA               | [Dana RS](../CompatiblePumps/DanaRS-Insulin-Pump.md)                          | ![disponible](../images/available.png)      | ![disponible](../images/available.png)      | ![no disponible](../images/unavailable.png)           | ![disponible](../images/available.png)      |
| BOMBA               | [Dana R](../CompatiblePumps/DanaR-Insulin-Pump.md)                            | ![disponible](../images/available.png)      | ![no disponible](../images/unavailable.png) | ![no disponible](../images/unavailable.png)           | ![no disponible](../images/unavailable.png) |
| BOMBA               | [Omnipod (Dash)](../CompatiblePumps/OmnipodDASH.md)                           | ![disponible](../images/available.png)      | ![disponible](../images/available.png)      | ![no disponible](../images/unavailable.png)           | ![disponible](../images/available.png)      |
| BOMBA               | [Omnipod (Eros)](../CompatiblePumps/OmnipodEros.md)                           | ![disponible](../images/available.png)      | ![disponible](../images/available.png)      | ![no disponible](../images/unavailable.png)           | ![disponible](../images/available.png)      |
| BOMBA               | [Diaconn G8](../CompatiblePumps/DiaconnG8.md)                                 | ![disponible](../images/available.png)      | ![no disponible](../images/unavailable.png) | ![no disponible](../images/unavailable.png)           | ![no disponible](../images/unavailable.png) |
| BOMBA               | [EOPatch 2](../CompatiblePumps/EOPatch2.md)                                   | ![disponible](../images/available.png)      | ![no disponible](../images/unavailable.png) | ![no disponible](../images/unavailable.png)           | ![no disponible](../images/unavailable.png) |
| BOMBA               | [Medtrum TouchCare Nano 200U](../CompatiblePumps/MedtrumNano.md)              | ![disponible](../images/available.png)      | ![disponible](../images/available.png)      | ![no disponible](../images/unavailable.png)           | ![disponible](../images/available.png)      |
| BOMBA               | [Medtrum TouchCare 300U](../CompatiblePumps/MedtrumNano.md)                   | ![disponible](../images/available.png)      | ![disponible](../images/available.png)      | ![no disponible](../images/unavailable.png)           | ![disponible](../images/available.png)      |
| BOMBA               | [Roche Combo](../CompatiblePumps/Accu-Chek-Combo-Pump-v2.md)                  | ![disponible](../images/available.png)      | ![no disponible](../images/unavailable.png) | ![no disponible](../images/unavailable.png)           | ![no disponible](../images/unavailable.png) |
| BOMBA               | [Roche Insight](../CompatiblePumps/Accu-Chek-Insight-Pump.md)                 | ![disponible](../images/available.png)      | ![no disponible](../images/unavailable.png) | ![no disponible](../images/unavailable.png)           | ![no disponible](../images/unavailable.png) |
| BOMBA               | [Medtronic antiguas](../CompatiblePumps/MedtronicPump.md)                     | ![disponible](../images/available.png)      | ![disponible](../images/available.png)      | ![disponible](../images/available.png)                | ![disponible](../images/available.png)      |
| BOMBA               | [Equil 5.3](../CompatiblePumps/Equil5.3.md)                                   | ![disponible](../images/available.png)      | ![no disponible](../images/unavailable.png) | ![no disponible](../images/unavailable.png)           | ![no disponible](../images/unavailable.png) |
| BOMBA               | [CareLevo](../CompatiblePumps/CareLevo.md)                                    | ![disponible](../images/available.png)      | ![no disponible](../images/unavailable.png) | ![no disponible](../images/unavailable.png)           | ![no disponible](../images/unavailable.png) |
| MCG                 | [Dexcom G7/One+/Stelo](../CompatibleCgms/DexcomG7.md)                         | ![disponible](../images/available.png)      | ![disponible](../images/available.png)      | ![no disponible](../images/unavailable.png)           | ![disponible](../images/available.png)      |
| MCG                 | [Dexcom One](../CompatibleCgms/DexcomG6.md)                                   | ![disponible](../images/available.png)      | ![disponible](../images/available.png)      | ![no disponible](../images/unavailable.png)           | ![disponible](../images/available.png)      |
| MCG                 | [Dexcom G6](../CompatibleCgms/DexcomG6.md)                                    | ![disponible](../images/available.png)      | ![disponible](../images/available.png)      | ![disponible](../images/available.png)                | ![disponible](../images/available.png)      |
| MCG                 | [Libre 3/3+](../CompatibleCgms/Libre3.md)                                     | ![disponible](../images/available.png)      | ![disponible](../images/available.png)      | ![no disponible](../images/unavailable.png)           | ![disponible](../images/available.png)      |
| MCG                 | [Libre 2/2+](../CompatibleCgms/Libre2.md)                                     | ![disponible](../images/available.png)      | ![disponible](../images/available.png)      | ![no disponible](../images/unavailable.png)           | ![disponible](../images/available.png)      |
| MCG                 | [Libre 1](../CompatibleCgms/Libre1.md)                                        | ![disponible](../images/available.png)      | ![disponible](../images/available.png)      | ![no disponible](../images/unavailable.png)           | ![disponible](../images/available.png)      |
| MCG                 | [Eversense](../CompatibleCgms/Eversense.md)                                   | ![disponible](../images/available.png)      | ![disponible](../images/available.png)      | ![no disponible](../images/unavailable.png)           | ![disponible](../images/available.png)      |
| MCG                 | [MM640G/MM630G](../CompatibleCgms/MM640g.md)                                  | ![disponible](../images/available.png)      | ![no disponible](../images/unavailable.png) | ![no disponible](../images/unavailable.png)           | ![no disponible](../images/unavailable.png) |
| MCG                 | [PocTech](../CompatibleCgms/PocTech.md)                                       | ![disponible](../images/available.png)      | ![no disponible](../images/unavailable.png) | ![no disponible](../images/unavailable.png)           | ![no disponible](../images/unavailable.png) |
| MCG                 | [Ottai](../CompatibleCgms/OttaiM8.md)                                         | ![disponible](../images/available.png)      | ![no disponible](../images/unavailable.png) | ![no disponible](../images/unavailable.png)           | ![no disponible](../images/unavailable.png) |
| MCG                 | [Syai Tag](../CompatibleCgms/SyaiTagX1.md)                                    | ![disponible](../images/available.png)      | ![no disponible](../images/unavailable.png) | ![no disponible](../images/unavailable.png)           | ![no disponible](../images/unavailable.png) |
| MCG                 | [Nightscout como fuente de glucosa](../CompatibleCgms/CgmNightscoutUpload.md) | ![disponible](../images/available.png)      | ![disponible](../images/available.png)      | ![disponible](../images/available.png)                | ![disponible](../images/available.png)      |

_Notas de la tabla:_
1. Un **rig** es un pequeño ordenador sin pantalla que llevas contigo. Un tipo de dispositivo compatible es Intel Edison + Explorer Board y el otro es Raspberry Pi + Explorer HAT o Adafruit RFM69HCW Bonnet. Los primeros sistemas APS se basaban en esta configuración, porque los teléfonos móviles no podían ejecutar los algoritmos necesarios. El uso de estos sistemas ha bajado, porque la configuración en teléfonos móviles es ahora más fácil y los teléfonos ya tienen pantalla. Además, Intel ha dejado de vender el Intel Edison. Los excelentes algoritmos de OpenAPS **oref0** y **oref1** están ahora incluidos en AAPS y en Trio.


Un documento de consenso internacional, revisado por expertos, con una guía práctica sobre el lazo de código abierto fue escrito por y para profesionales sanitarios, y se publicó en una revista médica líder en 2022: [_Lancet Diabetes Endocrinol_, 2022; 10: 58–74](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8720075/)(_1_). Vale mucho la pena leerlo (también para tu clínica de diabetes); resume las principales diferencias técnicas entre los distintos sistemas de lazo cerrado híbrido de código abierto.

Es difícil tener una "sensación" de cualquier sistema sin usarlo o hablar con otros que lo estén utilizando, así que comunícate con otros en Facebook/Discord y pregunta. La mayoría de las personas ven que **AAPS** es muy sofisticado comparado con otros sistemas de lazo cerrado híbrido (sobre todo los comerciales), con una enorme cantidad de ajustes y funciones personalizables, como se explica arriba. A algunas personas esto les puede abrumar un poco al principio, pero no hay prisa por explorar todas las posibilidades a la vez. Puedes avanzar tan despacio o tan rápido como quieras, y hay ayuda en cada paso del camino.


## ¿AAPS utiliza inteligencia artificial o algún algoritmo de aprendizaje?

La versión actual de **AAPS** (4.0) no tiene algoritmos de aprendizaje automático, modelos de respuesta a la insulina con múltiples parámetros ni inteligencia artificial. Como tal, el sistema es abierto y transparente en cómo funciona, y tiene la capacidad de ser comprendido no solo por expertos, sino también por clínicos y pacientes. También significa que, si tu horario cambia mucho (por ejemplo, pasas de una semana de trabajo estresante a unas vacaciones tranquilas) y es probable que necesites una cantidad de insulina muy diferente, puedes cambiar **AAPS** enseguida a un perfil personalizado más débil o más fuerte. Un 'sistema de aprendizaje' hará este ajuste automáticamente, pero es probable que tarde más tiempo en ajustar la administración de insulina.

(which-system-is-right-for-me-or-my-dependent)=
## ¿Qué sistema es el adecuado para mí o para la persona que cuido?

En la práctica, la elección de sistema a menudo está restringida por la bomba que ya tienes o puedes obtener de tu equipo médico, y tu elección de teléfono (Apple o Android). Si aún no tienes una bomba, tienes la mayor variedad de sistemas para elegir. La tecnología está en constante evolución, algunas bombas están siendo descontinuadas y se están lanzando al mercado nuevas bombas y sensores. La mayoría de los sistemas de código abierto funcionan con los sensores principales (Libre y Dexcom) o se adaptan rápidamente para funcionar con nuevos sensores aproximadamente un año después de su lanzamiento (con un pequeño retraso en el tiempo para pruebas de seguridad y estabilidad).

La mayoría de los usuarios de **AAPS** dicen tener más tiempo en rango, una HbA1c más baja y una mejor calidad de vida gracias a un sistema que ajusta automáticamente las tasas basales durante la noche mientras duermen; y esto es así en la mayoría de los sistemas de lazo cerrado híbrido. Algunas personas prefieren un sistema muy sencillo y poco personalizable (en ese caso quizá prefieras un sistema comercial), y a otras esta falta de control les resulta muy frustrante (en ese caso quizá prefieras un sistema de código abierto). Si tú (o la persona que cuidas) tienes un diagnóstico reciente, un camino habitual es acostumbrarse primero a MDI con un sensor de glucosa, después pasar a una bomba que pueda usarse para hacer lazo y después pasar a **AAPS**; pero algunas personas (sobre todo los niños pequeños) pueden pasar directamente a una bomba.

Es importante tener en cuenta que el usuario de **AAPS** debe ser proactivo para solucionar y corregir problemas por sí mismo, con la ayuda de la comunidad. Esta es una mentalidad muy diferente a la de usar un sistema comercial. Con **AAPS**, el usuario tiene más control, pero también la responsabilidad, y debe sentirse cómodo con eso.

## ¿Es seguro usar sistemas de código abierto como AAPS?

### Seguridad del sistema AAPS
Una pregunta más precisa es probablemente «¿es seguro **comparado** con mi sistema actual de administración de insulina?», ya que ningún método de administración de insulina está libre de riesgos. Hay muchas medidas de control y equilibrio establecidas en **AAPS**. Un [artículo](https://www.liebertpub.com/doi/epub/10.1089/dia.2019.0375) reciente estudió el uso de **AAPS** en una simulación por ordenador, una forma eficaz de comprobar de manera objetiva lo seguro y eficaz que es el sistema. En general, muchos miles de personas en todo el mundo usan sistemas de administración automática de insulina de código abierto, y su uso sigue creciendo en todo el mundo.

Cualquier dispositivo que utilice comunicaciones por radio podría ser hackeado, y esto es válido también para una bomba de insulina que no esté en un lazo cerrado. Actualmente, no tenemos conocimiento de que alguien haya intentado dañar a personas hackeando su equipo médico relacionado con la diabetes. Sin embargo, existen múltiples formas de protegerse contra tales riesgos:

1.  En la configuración de la bomba, limita tanto la cantidad máxima permitida para los bolos como la configuración máxima de la basal temporal a cantidades que consideres más seguras. Estos son límites estrictos que no creemos que ningún hacker malicioso pueda eludir.

2.  Activa las alarmas de tu MCG tanto para glucosas altas como bajas.

3.  Monitorea la administración de tu insulina en línea. Los usuarios de Nightscout pueden configurar alarmas adicionales para alertar sobre una amplia variedad de condiciones, incluyendo condiciones que son mucho más probables de ocurrir que un ataque malicioso. Además de los niveles altos y bajos, Nightscout puede mostrar datos de diagnóstico útiles para verificar que la bomba está funcionando según lo deseado, incluyendo la cantidad actual de insulina activa (IOB), el historial de la basal temporal de la bomba y el historial de bolos de la bomba. También se puede configurar para alertar de manera proactiva a los usuarios sobre condiciones no deseadas, como picos y caídas de glucosa previstos, bajo nivel de insulina en el depósito y baja batería de la bomba.

Si se realizara un ataque malicioso a tu bomba de insulina, estas estrategias reducirían significativamente el riesgo. Cada posible usuario de **AAPS** debe sopesar los riesgos asociados con el uso de **AAPS** en comparación con los riesgos de utilizar un sistema diferente.

#### Seguridad: no mejorar el control de la glucosa demasiado rápido

Una bajada rápida de la HbA1c y un mejor control de la glucosa suenan bien. Sin embargo, bajar los niveles medios de glucosa _demasiado rápido_ al empezar con cualquier sistema de lazo cerrado puede causar daños permanentes, también en los ojos, y una neuropatía dolorosa que no desaparece nunca. Este daño se puede evitar simplemente bajando los niveles más despacio. Si ahora tienes una HbA1c alta y vas a pasar a AAPS (o a cualquier otro sistema de lazo cerrado), habla de este posible riesgo con tu equipo médico antes de empezar y acordad juntos un plan de tiempos. Encontrarás más información general sobre cómo bajar tu glucosa de forma segura, con enlaces a literatura médica, en la sección de seguridad [aquí](#preparing-safety-first).

#### Seguridad médica: dispositivos, consumibles y otros medicamentos

Usa una bomba de insulina y un MCG probados, que funcionen por completo y que estén aprobados por la FDA o con marcado CE para un lazo de páncreas artificial. Las modificaciones de hardware o software a estos componentes pueden causar una dosificación inesperada de la insulina, causando un riesgo significativo para el usuario. Si encuentras o te ofrecen bombas de insulina o receptores de MCG rotos, modificados o hechos en casa, no los uses para crear un sistema AAPS.

Usa consumibles originales, como insertadores, cánulas y depósitos de insulina, aprobados por el fabricante de tu bomba y de tu MCG. El uso de suministros no probados o modificados puede provocar inexactitud del MCG y errores de dosificación de la insulina. La insulina es muy peligrosa si la dosis es incorrecta: por favor, no juegues con tu vida modificando tus consumibles.

No tomes inhibidores de SGLT-2 (gliflozinas) cuando uses **AAPS**, porque bajan el azúcar en sangre de forma imposible de calcular. Combinar este efecto con un sistema que baja las tasas basales para subir la glucosa es peligroso; hay más detalles en la [sección de seguridad](#preparing-safety-first) principal.

(introduction-how-can-i-approach-discussing-aaps-with-my-clinical-team)=
## ¿Cómo puedo abordar la discusión sobre AAPS con mi equipo médico?

Te animamos a hablar con tus médicos sobre tu intención de usar **AAPS**. No tengas miedo de hablar con sinceridad con tu equipo de diabetes si piensas usar **AAPS** (o cualquier otro lazo OS-AID). La transparencia y la confianza entre paciente y médico son fundamentales.

### Forma de hacerlo sugerida:
Empieza una conversación con tu médico para saber cuánto conoce la tecnología para la diabetes, como los MCG, las bombas, los lazos híbridos y los lazos comerciales, y qué opina de ella. Tu médico o endocrinólogo debería conocer la tecnología básica y estar dispuesto a hablar contigo de los avances recientes en los productos de lazo comerciales disponibles en su región.

#### Precedentes locales

Pregunta a tus médicos o endocrinólogos qué opinan del lazo OS-AID _frente al_ lazo comercial, y valora cuánto saben de este tema. ¿Conocen **AAPS** y pueden compartir contigo alguna experiencia útil con pacientes que usan un lazo OS-AID?

Pregunta si tu equipo tiene pacientes que ya usan un lazo OS-AID. Por la confidencialidad del paciente, los médicos no pueden darte los datos de otros pacientes sin el consentimiento de esa persona. Sin embargo, si quieres, **puedes** pedirles que pasen **tus** datos de contacto a un paciente que ya use un lazo OS-AID, si hay alguno con quien el médico cree que podrías llevarte bien, diciendo que no te importa que ese paciente te contacte para hablar del lazo OS-AID. Los médicos no están obligados a hacerlo, pero algunos lo hacen con gusto, porque saben lo importante que es el apoyo entre pacientes en el manejo de la diabetes tipo 1. También te puede ser útil conocer a otras personas amables de tu zona que usan un lazo OS-AID. Esto, por supuesto, depende de ti y no es del todo necesario.

#### Precedentes nacionales e internacionales

Si sientes que tu equipo no te apoya para hacer lazo con **AAPS**, estos argumentos pueden ayudarte:

a) El sistema **AAPS** ha sido diseñado POR pacientes y sus cuidadores. Ha sido diseñado sobre todo para la seguridad, pero también basándose en una experiencia profunda de los pacientes. Hay muchos miles de usuarios de **AAPS** en todo el mundo. Por eso es probable que haya otros pacientes en tu clínica que usan un lazo OS-AID (lo sepan los médicos o no).

b) Una guía reciente, revisada por expertos y publicada en la revista médica internacional líder [The Lancet](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8720075/pdf/nihms-1765784.pdf)(_1_), ha confirmado que los lazos OS-AID son **seguros** y **eficaces para mejorar el control de la diabetes**, incluido el tiempo en rango. Revistas líderes como [Nature](https://doi.org/10.1038/d41586-023-02648-9)(_3_) publican con regularidad artículos que destacan el progreso de la comunidad de lazo OS-AID.

c) Empezar con **AAPS** supone un paso _gradual_ desde la bomba en lazo «abierto», pasando por la suspensión por glucosa baja, hasta el lazo «cerrado» híbrido, completando una serie de objetivos. Por eso hay un programa estructurado: el usuario tiene que demostrar un nivel de competencia en cada etapa y ajustar sus configuraciones básicas (basal, ISF e ICR) antes de poder cerrar el lazo.

d) Tienes soporte técnico de la comunidad OS-AID en GitHub, Discord y grupos cerrados de Facebook.

e) Podrás presentar **la información del MCG y de la insulina del lazo/bomba** en informes combinados en las consultas (mediante Nightscout o Tidepool), ya sea impresos o en pantalla (si llevas un portátil o una tableta). Tener juntos los datos del MCG y de la insulina permitirá a tu médico usar mejor su tiempo para revisar tus informes y le ayudará a valorar tu progreso.

f) Si tu equipo sigue muy en contra, dale a tu médico copias impresas de los artículos de referencia enlazados en este texto y el enlace a la sección de **AAPS** para médicos: [Para médicos: introducción general y guía de **AAPS**](../UsefulLinks/ClinicianGuideToAaps.md)

#### Apoyo de otros médicos al lazo OS-AID

El artículo publicado en [Lancet Diabetes Endocrinology](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8720075/)(_1_) (codirigido por King’s y el Guy’s and St Thomas’ NHS Foundation Trust, y codirigido por el Dr. Sufyan Hussain, diabetólogo consultor y profesor titular honorario del King’s en Londres) aporta:

a) **Garantía** para los profesionales de que los sistemas de páncreas artificial OS-AID / de código abierto son una opción de «tratamiento seguro y eficaz» para la diabetes tipo 1, con orientación sobre recomendaciones, conversaciones, apoyo y documentación;

b) **Reconocimiento** de que los sistemas de administración automática de insulina («AID») de código abierto pueden aumentar el tiempo en rango (TIR) y a la vez reducir la variabilidad de la glucosa en sangre y el número de hipoglucemias e hiperglucemias en distintos grupos de edad, géneros y comunidades;

c) **Recomendación** de que los profesionales sanitarios **apoyen** a los pacientes con diabetes tipo 1 o a sus cuidadores que eligen manejar su diabetes con un sistema AID de código abierto;

d) Recomendación de que los profesionales sanitarios intenten informarse sobre todas las opciones de tratamiento que pueden beneficiar a los pacientes, incluidos los sistemas AID de código abierto disponibles.  Si los profesionales sanitarios no tienen recursos para formarse, o tienen dudas legales o normativas, deberían considerar **colaborar o trabajar en equipo con otros profesionales sanitarios** que sí los tengan;

e) Énfasis en que todos los usuarios de MCG deben tener en todo momento acceso libre y en tiempo real a **sus propios datos de salud**

f) Énfasis en que estos sistemas de código abierto no han pasado las mismas evaluaciones normativas que las tecnologías médicas comerciales, y en que no hay soporte técnico comercial. Sin embargo, **hay mucho apoyo de la comunidad**; y

g) Recomendación de que **la normativa y los marcos legales** se actualicen para dejar claro que se permite un tratamiento ético y eficaz con estos sistemas de código abierto.

Otro artículo en [Medical Law International, 2021](http://pure-oai.bham.ac.uk/ws/files/120241375/0968533221997510.pdf)(_4_) también destaca que la «guía de consentimiento» del General Medical Council del Reino Unido da mucha importancia a que médico y paciente tomen las decisiones juntos. El médico debe explicar los posibles beneficios, riesgos, cargas y efectos secundarios de un APS OS-AID, y puede recomendar una opción concreta sin presionar al paciente.

Al final, es el paciente quien debe valorar estos factores, junto con cualquier otro aspecto no clínico que le afecte, y decidir qué opción de tratamiento acepta, si acepta alguna.

Si un médico descubre en la consulta que su paciente hace lazo con un sistema OS-AID, no queda libre de su obligación de hacer seguimiento al paciente solo porque no le recetó esa tecnología; los médicos deben seguir haciendo seguimiento a los pacientes.

Los médicos (al menos en el Reino Unido) no tienen prohibido recetar medicamentos sin licencia y pueden usar su criterio clínico. Por eso deben usar su criterio clínico para decidir si un APS OS-AID es adecuado para un paciente concreto, y hablar con él de lo que consideran sus ventajas y desventajas.

#### Los artículos citados arriba, y otros enlaces útiles y declaraciones de posición, aparecen a continuación:

1. Open-source automated insulin delivery: international consensus statement and practical guidance for health-care professionals [_Lancet Diabetes Endocrinol_, (2022) _10_, 58–74](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8720075/)
2. [In Silico Trials of an Open-Source Android-Based Artificial Pancreas: A New Paradigm to Test Safety and Efficacy of Do-It-Yourself Systems, 2020](https://www.liebertpub.com/doi/epub/10.1089/dia.2019.0375)
3. A DIY ‘bionic pancreas’ is changing diabetes care — what's next? [_Nature_ (2023), _620_, 940-941](https://doi.org/10.1038/d41586-023-02648-9)
4. Prescribing unapproved medical devices? The case of DIY artificial pancreas systems [_Medical law international_, (2021), _21_, 42-68](http://pure-oai.bham.ac.uk/ws/files/120241375/0968533221997510.pdf)
5. [Declaración de posición del Berlin Institute of Health, 2022](https://www.bihealth.org/en/notices/do-it-yourself-solutions-for-people-with-diabetes-are-safe-and-recommended)
6. Do-It-Yourself Automated Insulin Delivery: A Health-care Practitioner User’s Guide (declaración de posición y guía de Diabetes Canada) [_Canadian Journal of Diabetes_, (2023)_47_, E8, 389-397](https://www.canadianjournalofdiabetes.com/article/S1499-2671(23)00138-7/fulltext)
7.  Países Bajos (EN/NL) - para médicos - [cómo ayudar a las personas que usan sistemas de administración automática de insulina de código abierto](https://www.diabetotech.com/blog/how-to-help-people-on-open-source-automated-insulin-delivery-systems)
8. First Use of Open-Source Automated Insulin Delivery AndroidAPS in Full Closed-Loop Scenario: Pancreas4ALLRandomized Pilot Study [_Diabetes Technol. Ther._, 25, _5_, 2023](https://www.liebertpub.com/doi/pdf/10.1089/dia.2022.0562?casa_token=D13eFx5vCwwAAAAA:MYvO8hChbViXVJFgov1T11RXBPx2N_wOMThLHwl3TVUxbCuANegPrIFRC5R5VXx_S71FoQYW-qg)
9. Pre-school and school-aged children benefit from the switch from a sensor-augmented pump to an AndroidAPS hybrid closed loop: A retrospective analysis [_Pediatr. Diabetes_ 2021, _22_, 594-604. 2021](https://onlinelibrary.wiley.com/doi/epdf/10.1111/pedi.13190)
10. Resultados del proyecto OPEN, un proyecto financiado por la UE sobre los resultados de la evidencia de los pacientes con la nueva tecnología de páncreas artificial «hazlo tú mismo» (Outcomes of Patient’s Evidence with Novel, Do-it-Yourself Artificial Pancreas Technology) (https://www.open-diabetes.eu/publications)



## ¿Por qué no puedo simplemente descargar AAPS y usarlo enseguida?

La aplicación **AAPS** no está en Google Play: por razones legales, tienes que compilarla tú mismo a partir del código fuente. **AAPS** no tiene licencia, lo que significa que no tiene la aprobación de ninguna autoridad regulatoria en ningún país. Usar **AAPS** se considera un experimento médico en ti mismo, y se hace bajo tu propio riesgo.

Configurar el sistema requiere paciencia, determinación y el desarrollo gradual de conocimientos técnicos. Toda la información y el apoyo se pueden encontrar en estos documentos, en otros lugares en línea o a través de personas que ya lo han hecho. Muchos miles de personas en todo el mundo han compilado **AAPS** con éxito y lo usan actualmente.

Los desarrolladores de **AAPS** se toman la seguridad muy en serio y quieren que otras personas tengan una buena experiencia al usar **AAPS**. Es por eso que es esencial que cada usuario (o cuidador, si el usuario es un niño):

- compile el sistema AAPS por sí mismo y complete los **objetivos**, para que tenga una configuración personal razonablemente buena y entienda lo básico de cómo funciona **AAPS** antes de «cerrar el lazo»;

- haga una copia de seguridad de su sistema, exportando y guardando archivos importantes (como el keystore y el archivo de configuración .json) en un lugar seguro, para poder configurarlo de nuevo rápidamente si hace falta;

- actualice a las nuevas versiones «master» cuando estén disponibles; y

- mantenga y supervise el sistema para asegurarse de que está funcionando correctamente.

## ¿Cómo se conecta el sistema AAPS?

La **Figura 3 (abajo)** muestra un ejemplo del sistema **AAPS** para un usuario que no necesita seguidores que interactúen con el sistema. También se pueden integrar otros programas y plataformas de código abierto que no aparecen aquí.

![21-06-23 AAPS connectivity no followers](../images/AAPS-connectivity-no-followers.png)


La **Figura 4 (abajo)** muestra todo el potencial del sistema **AAPS** para un usuario que tiene seguidores y necesita seguir y ajustar el sistema a distancia (como un niño con diabetes tipo 1). También se pueden integrar otros programas y plataformas de código abierto que no aparecen aquí.

![21-06-23 AAPS overview with followers](../images/AAPS-overview-with-followers.png)

## ¿Cómo se desarrolla y mejora AAPS continuamente?

La mayoría de los usuarios de **AAPS** utilizan la versión completamente probada **master** de AAPS, que ha sido sometida a pruebas para detectar errores y problemas antes de ser lanzada a la comunidad. Entre bastidores, los desarrolladores prueban nuevas mejoras y las prueban en versiones de "desarrollo" (**dev**) de **AAPS** con una comunidad de usuarios dispuestos a realizar actualizaciones de errores en corto plazo. Si las mejoras funcionan bien, se lanzan como una nueva versión «master» de **AAPS**. Cada nueva versión «master» se anuncia en el grupo de Facebook, para que los usuarios habituales de **AAPS** puedan leer sobre ella y actualizar a la nueva versión master.

Algunos usuarios de **AAPS** con experiencia y seguridad hacen experimentos con tecnologías nuevas y con versiones dev de la aplicación **AAPS**; puede ser interesante leer sobre ellos para los usuarios menos aventureros, ¡sin tener que hacerlo ellos mismos! Las personas tienden a compartir estos experimentos en el grupo de Facebook también.

Puedes obtener más información sobre algunos de estos experimentos y discusiones sobre tecnología emergente aquí:

Tim Street [https://www.diabettech.com/](https://www.diabettech.com/)

David Burren [https://bionicwookie.com/](https://bionicwookie.com/)

## ¿Quién se puede beneficiar de AAPS?

| Tipo de Usuario                                           |
| --------------------------------------------------------- |
| ✔️ Personas con diabetes tipo 1                           |
| ✔️ Cuidadores o padres de una persona con diabetes tipo 1 |
| ✔️ Usuarios ciegos con diabetes tipo 1                    |
| ✔️ *Médicos y profesionales sanitarios                    |

La tabla de arriba supone que el usuario tiene acceso tanto a un monitor continuo de glucosa como a una bomba de insulina.

*Todos los datos de **AAPS** se pueden poner a disposición de los profesionales sanitarios mediante plataformas para compartir datos, como Nightscout, que registra y muestra en tiempo real los datos del MCG, la administración de insulina, los carbohidratos introducidos, las predicciones y la configuración. Los registros de Nightscout incluyen informes diarios y semanales que pueden ayudar a los profesionales sanitarios a hablar con los pacientes con diabetes tipo 1 usando datos más precisos sobre el control glucémico y los aspectos de comportamiento.

(accessibility-for-users-aaps-who-are-partially-or-completely-blind)=

### Accesibilidad para usuarios de AAPS con ceguera parcial o total

#### Uso diario de AAPS:
AAPS lo pueden usar personas ciegas. En los dispositivos Android, el sistema operativo tiene un programa llamado TalkBack. Permite orientarse en la pantalla mediante salida de voz, como parte del sistema operativo. Con TalkBack puedes manejar tu smartphone y AAPS sin necesidad de ver.

#### Compilar la aplicación AAPS:
Como usuario, compilarás la aplicación AAPS en Android Studio. Mucha gente usa Microsoft Windows para esto; allí hay un lector de pantalla parecido a TalkBack. Como Android Studio es una aplicación Java, hay que activar el componente «Java Access Bridge» en el Panel de control. Si no, el lector de pantalla del PC no hablará en Android Studio.

Cómo hacerlo depende de tu sistema operativo; a continuación se explican dos métodos:

1) En el menú Inicio de Windows, escribe «Panel de control» (Control Panel) en el campo de búsqueda y ábrelo con Intro. Se abre: «Todos los elementos de Panel de control» (All Control Panel Items).

Abre el «Centro de accesibilidad» (Ease of Access Centre).

Después abre «Usar el equipo sin una pantalla» (Use computer without a display) con Intro.

En **Escuchar texto leído en voz alta** (Hear text read aloud), selecciona **Activar Narrador** (turn on narrator) y **Activar Descripción de audio** (turn on audio display), y luego haz clic en **Aplicar** (apply).

o:

2) Pulsa la tecla Windows y escribe «Panel de control» (Control Panel) en el campo de búsqueda; ábrelo con Intro. Se abre: «Todos los elementos de Panel de control» (All Control Panel Items).

Pulsa la letra C para ir al «Centro de accesibilidad» (Center for Ease of Use) y ábrelo con Intro.

Después abre «Usar el equipo sin una pantalla» (Use computer without a screen) con Intro.

Allí, abajo del todo, encontrarás la casilla «Habilitar Java Access Bridge» (Enable Java Access Bridge); márcala.

¡Hecho! Solo tienes que cerrar la ventana. Ahora el lector de pantalla debería funcionar.



¿Te interesa saber cómo empezar a configurar AAPS? Consulta la sección de [preparación](../Getting-Started/PreparingForAaps.md).
