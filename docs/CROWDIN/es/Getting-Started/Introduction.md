# Introducción a APS y AAPS

## ¿Qué es un sistema de páncreas artificial?

Un páncreas humano hace muchas cosas además de regular el azúcar en sangre. Sin embargo, el término **“Sistema de Páncreas Artificiales” (APS)** generalmente se refiere a un sistema que funciona para mantener automáticamente los niveles de azúcar en la sangre dentro de límites saludables.

La forma más básica de hacer esto es detectando **niveles de glucosa**, usando estos valores para hacer **cálculos**, y luego entregar la cantidad correcta (predecidida) de **insulina** al cuerpo. Repite el cálculo cada pocos minutos, 24/7. Utiliza **alarmas** y **alertas** para informar al usuario si se necesita intervención o atención. Este sistema normalmente está formado por un **sensor de glucosa**, una **bomba de insulina** y una **aplicación** en un teléfono.

Puede leer más sobre los diferentes sistemas de pancreas artificiales actualmente en uso y en desarrollo en este artículo de revisión de 2022:

![Frontiers](../images/FRONTIERS_Logo_Grey_RGB.png) [Future Directions in Closed-Loop Technology](https://www.frontiersin.org/articles/10.3389/fendo.2022.919942/full#:~:text=Fully%20closed%2Dloop%20systems%2C%20unlike,user%20input%20for%20mealtime%20boluses).

En un futuro cercano, algunos sistemas denominados "hormona dual" tendrán la capacidad de administrar glucagón junto con insulina, con el objetivo de prevenir hipoglucemias graves y permitir un control aún más estricto de la glucosa en sangre.

An artificial pancreas can be thought of as an [“autopilot for your diabetes”](https://www.artificialpancreasbook.com/). What does that mean?

En una aeronave, un piloto automático no realiza completamente el trabajo del piloto humano; el piloto no puede dormirse durante todo el vuelo. El piloto automático ayuda en el trabajo del piloto. Les libera de la carga de monitorizar permanentemente la aeronave, permitiendo al piloto concentrarse en una supervisión más amplia de vez en cuando. El piloto automático recibe señales de varios sensores, una computadora las evalúa junto con las especificaciones del piloto y luego realiza los ajustes necesarios, alertando al piloto ante cualquier preocupación. El piloto ya no tiene que preocuparse por tomar decisiones constantemente.

![imagen](../images/autopilot.png)

(Introduction-what-does-hybrid-closed-loop-mean)=
## ¿Qué significa lazo cerrado híbrido?

La mejor solución para la diabetes tipo 1 sería una 'cura funcional' (probablemente un implante de células pancreáticas que estén protegidas del sistema inmunológico). Mientras esperamos eso, un páncreas artificial de 'lazo completamente cerrado' probablemente sea la siguiente mejor opción. Se trata de un sistema tecnológico que no necesita ninguna intervención por parte del usuario (como la administración de insulina para las comidas o la notificación de ejercicio), con una buena regulación de los niveles de glucosa en sangre. En este momento, no existen sistemas ampliamente disponibles que sean de 'lazo completamente cerrado', todos requieren cierta intervención del usuario. Los sistemas actualmente disponibles se llaman sistemas de lazo cerrado 'híbridos', porque utilizan una combinación de tecnología automatizada y entradas del usuario.

## ¿Cómo y por qué comenzó el lazo cerrado (looping)?

El desarrollo de tecnología comercial para personas con diabetes tipo 1 (DT1) es muy lento. En 2013, la comunidad de personas con diabetes tipo 1 (DT1) fundó el movimiento #WeAreNotWaiting. Desarrollaron sistemas por sí mismos utilizando tecnología existente y aprobada (bombas de insulina y sensores) para mejorar el control de la glucosa en sangre, la seguridad y la calidad de vida. Estos son conocidos como sistemas DIY (hágalo usted mismo), ya que no están formalmente aprobados por organismos de salud (FDA, NHS, etc.). There are four main DIY systems available: [OpenAPS](https://openaps.org/what-is-openaps/), **AAPS**, [Loop](https://loopkit.github.io/loopdocs/#what-is-loop) and [iAPS](https://github.com/Artificial-Pancreas/iAPS?fbclid=IwAR2fA9Y9YqYzpKSrtEsotfXl5b67UclDkKgyrv52tQLzYbOoBeNGRmjlJJI).

Una excelente manera de comprender los fundamentos del lazo cerrado DIY es leer el libro de Dana Lewis 'Entrega Automatizada de Insulina'. You can access it [here](https://www.artificialpancreasbook.com/) for free (or buy a hardcopy of the book). If you want to understand more about [OpenAPS](https://openaps.org/what-is-openaps/), which **AAPS** has developed from, the [OpenAPS website](https://openaps.org/what-is-openaps/) is a great resource.

Several commercial hybrid closed loop systems have been launched, the most recent of which are [CamAPS FX](https://camdiab.com/) (UK and EU) and [Omnipod 5](https://www.omnipod.com/en-gb/what-is-omnipod/omnipod-5) (USA and EU). Estos son muy diferentes a los sistemas DIY, principalmente porque ambos incluyen un 'algoritmo de aprendizaje' que ajusta la cantidad de insulina entregada según tus necesidades de insulina de los días anteriores. Muchas personas en la comunidad DIY ya han probado estos sistemas comerciales y los han comparado con su sistema DIY. You can find out more about how the different systems compare by asking on the dedicated Facebook groups for these systems, on the [AAPS Facebook group](https://www.facebook.com/groups/AndroidAPSUsers/) or on [Discord](https://discord.com/invite/4fQUWHZ4Mw).

## ¿Qué es Android APS (AAPS)?

![imagen](../images/basic-outline-of-AAPS.png)

**Figura 1**. Esquema básico de Android APS (Sistema de Páncreas Artificial), AAPS.

Android APS (**AAPS**) is a hybrid closed loop system, or Artificial Pancreas System  (APS). It makes its insulin dosing calculations using established [OpenAPS](https://openaps.org/) algorithms (a set of rules) developed by the #WeAreNotWaiting type 1 diabetes community.

Since OpenAPS is only compatible with certain older insulin pumps, **AAPS** (which can be used with a wider range of insulin pumps) was developed in 2016 by Milos Kozak, for a family member with type 1 diabetes. Desde aquellos primeros días, **AAPS** ha sido continuamente desarrollado y perfeccionado por un equipo de desarrolladores, voluntarios y entusiastas que tienen una conexión con el mundo de la diabetes tipo 1. Actualmente, **AAPS** es utilizado aproximadamente por 10.000 personas. It is a highly customisable and versatile system, and because it is open-source, it is also readily compatible with many other open-source diabetes software and platforms. The fundamental components of the current **AAPS** system are outlined in **Figure 1** above.



## ¿Cuáles son los componentes básicos de AAPS?

El "cerebro" de AAPS es una **aplicación** que tú mismo construyes. Existen instrucciones detalladas paso a paso para esto. You then install the **AAPS  app** on a [compatible](../Getting-Started/Phones.md) **Android smartphone** (**1**). Un número de usuarios prefieren tener su sistema de lazo cerrado en un teléfono separado de su teléfono principal. sí que, no necesariamente tienes que estar usando un teléfono Android para todo en tu vida, sólo para ejecutar tu lazo cerrado de AAPS.

The **Android smartphone** will also need to have another app installed on it as well as **AAPS**. This [additional app](../Getting-Started/CompatiblesCgms.md) receives glucose data from a sensor (**2**) by bluetooth, and then sends the data internally on the phone to the **AAPS app**.

La aplicación **AAPS** utiliza un proceso de toma de decisiones (**algoritmo**) de OpenAPS. Los principiantes comienzan usando el algoritmo básico **oref0**, pero es posible cambiar y utilizar el algoritmo más reciente **oref1** a medida que avanzas con AAPS. El algoritmo que uses (oref0 u oref1), dependerá de cuál se adapte mejor a tu situación.  En ambos casos, el algoritmo tiene en cuenta múltiples factores y realiza cálculos rápidos cada vez que llega una nueva lectura del sensor. The algorithm then sends instructions to the insulin pump (**3**) on how much insulin to deliver by bluetooth. All the information can be sent by mobile data or wifi to the internet (**4**). Estos datos también se pueden compartir con seguidores si se desea y/o recopilarse para su análisis.

## ¿Cuáles son las ventajas del sistema AAPS?

El algoritmo OpenAPS utilizado por **AAPS** controla los niveles de azúcar en sangre en ausencia de la entrada del usuario, de acuerdo a los parámetros definidos por los usuarios (siendo importantes las tasas basales, factores de sensibilidad a la insulina, relaciones insulina-carbohidratos, duración de la insulina activa, etc.), reaccionando cada 5 minutos a los nuevos datos del sensor. Algunas de las ventajas informadas de usar AAPS, son las opciones detalladas y ajustables, la automatización y el aumento de la transparencia del sistema para el paciente/cuidador. This can result in better control over your (or your dependant’s) diabetes, which in turn may give improved quality of life and increased peace of mind.

### **Specific advantages include:**

#### 1) Safety built-in
To read about the safety features of the algorithms, known as oref0 and oref1, [click here](https://openaps.org/reference-design/). The user is in control of their own safety constraints.

#### 2) **Hardware flexibility**

**AAPS** works with a wide range of insulin pumps and sensors. Por ejemplo, si desarrollas alergia al adhesivo del parche del sensor de Dexcom, podrías cambiar y usar un sensor Libre en su lugar. Esto proporciona flexibilidad a medida que cambian las circunstancias de la vida. You don't have to rebuild or reinstall the **AAPS** app, just tick a different box in the app to change your hardware. AAPS is independent of particular pump drivers and also contains a "virtual pump" so users can safely experiment before using it on themselves.

#### 3) **Highly customisable, with wide parameters**

Users can easily add or remove modules or functionality, and **AAPS** can be used in both open and closed loop mode. Here are some examples of the possibilities with the **AAPS** system:

 a) The ability to set a lower glucose target 30 min before eating; you can set the target as low as 72 mg/dL (4.0 mmol/L).

 b) If you are insulin-resistant resulting in high blood sugars, **AAPS** allows you to set an **automation** rule  to activate when BG rises above 8 mmol/L (144 mg/dL), switching to (for example) a 120% profile (resulting in an 20% increase in basal and strengthening of other factors too, compared to your normal **profile** setting). La automatización durará según el tiempo programado que establezcas. Dicha automatización se puede configurar para estar activa solo en ciertos días de la semana, en momentos específicos del día e incluso en ubicaciones determinadas.

 c) Si tu hijo está saltando en un trampolín de repente, sin que haya tiempo de avisar de antemano., **AAPS** permite la suspensión de la insulina durante un período de tiempo establecido, directamente a través del teléfono.

 d) After reconnecting a tubed pump which has been disconnected for  swimming, **AAPS** will calculate the basal insulin you have missed while disconnected and deliver it carefully, according to your current BG. Cualquier insulina que no sea necesaria se puede anular simplemente "cancelando" la basal perdida.

 e) **AAPS** has the facility for you to set different profiles for different situations and easily switch between them. For example, features which make the algorithm quicker to bring down elevated BG (like supermicro boluses (“**SMB**”), unannounced meals, (“**UAM**”) can be set to only work during the daytime, if you are worried about night-time hypos.

These are all examples, the full range of features gives huge flexibility for daily life including sport, illness, hormone cycles _etc_. En última instancia, es el usuario quien decide cómo usar esta flexibilidad, y no existe una automatización única que funcione para todos.

#### 4) **Remote monitoring**
There are multiple possible monitoring channels (Sugarmate, Dexcom Follow, xDrip+, Android Auto _etc._) which are useful for parents/carers and adults in certain scenarios (sleeping/driving) who need customisable alerts. In some apps (xDrip+) you can also turn alarms off totally, which is great if you have a new sensor “soaking” or settling down that you don’t want to loop with yet.

#### 5) **Remote control**
A significant advantage of **AAPS** over commercial systems is that it is possible for followers, using authenticated text (SMS) commands or via an app ([Nightscout](https://nightscout.github.io/) or AAPSClient) to send a wide range of commands back to the **AAPS** system. Esto es utilizado ampliamente por los padres de niños con diabetes tipo 1 que utilizan AAPS. It is very useful: for example, in the playground, if you want to pre-bolus for a snack from your own phone, and your child is busy playing. It is possible to monitor the system (_e.g._ Fitbit), send basic commands (_e.g._ Samsung Galaxy watch 4), or even run the entire AAPS system from a high-spec smartwatch (**5**) (_e.g._ LEMFO). En este último escenario, no necesitas usar un teléfono para ejecutar AAPS. As battery life on watches improves and technology becomes more stable, this last option is likely to become increasingly attractive.

#### 6) **No commercial constraints, due to open application interfaces**
Beyond the use of an open-source approach, which allows the source code of **AAPS** to be viewed at any time, the general principle of providing open programming interfaces gives other developers the opportunity to contribute new ideas too. **AAPS** is closely integrated with Nightscout. This accelerates development and allows users to add on features to make life with diabetes even more convenient. Good examples for such integrations are [Nightscout](https://nightscout.github.io/), [Nightscout Reporter](https://nightscout-reporter.zreptil.de/), [xDrip+](https://xdrip.readthedocs.io/en/latest/install/usethedoc/), [M5 stack](https://github.com/mlukasek/M5_NightscoutMon/wiki) etc. There is ongoing dialogue between open-source developers and those developing commercial systems. Many of the DIY innovations are gradually adopted by commercial systems, where developments are understandably slower, partly because interfaces between systems from different companies (pumps, apps, sensors _etc_) need to be carefully negotiated and licenced. This can also slow innovations which are convenient for the patient (or a small sub-population of patients, who have a very specific requirement) but do not generate any sizable profit.

#### 7) **Detailed app interface**
With **AAPS** it is easy to keep track of things like: pump insulin levels, cannula age, sensor age, pump battery age, insulin-on-board _etc_. Many actions can be done through the **AAPS** app (priming the pump, disconnecting the pump _etc_.), instead of on the pump itself, which means the pump can stay in your (or your dependant's) pocket or belt.

#### 8) **Accessibility and affordability**
**AAPS** gives people who currently can’t afford to self-fund, or don’t have funding/insurance, access to a world-class hybrid closed looping system which is conceptually years ahead, in terms of development, of the commercial systems. You currently need to have a Nightscout account to set up **AAPS**, although the Nightscout account is not required for day-to-day running of the **AAPS** loop. Many people continue to use Nightscout for collecting their data, and for remote control. Although **AAPS** itself is free, setting up Nightscout through one of the various platforms may incur a fee (€0 - €12), depending on what level of support you want (see comparison table) and whether you want to keep using Nightscout after setup or not. **AAPS** works with a wide range of affordable (starting from approx €150) [Android phones](https://docs.google.com/spreadsheets/u/1/d/e/2PACX-1vScCNaIguEZVTVFAgpv1kXHdsHl3fs6xT6RB2Z1CeVJ561AvvqGwxMhlmSHk4J056gMCAQE02sAWJvT/pubhtml?gid=683363241&single=true). Different versions are available for specific locations and languages, and AAPS can also be used by people who are [blind](#accessibility-for-users-aaps-who-are-partially-or-completely-blind).

#### 9) **Support**
No automated insulin delivery system is perfect. Los sistemas comerciales y de código abierto comparten muchos fallos comunes en la comunicación y fallos temporales del hardware. There is support available from community of AAPS users on Facebook, Discord and GitHub who designed, developed and are currently using **AAPS**, all over the world. There are also Facebook support groups and help from clinic/commercial companies for the commercial APS systems -  it is worth speaking to the users, or former users of these systems to get feedback on the common glitches, the quality of the education programme and the level of ongoing support provided.

#### 10) **Predictability, transparency and safety**
**AAPS** is totally transparent, logical and predictable, which may make it easier to know when a setting is wrong, and to adjust it accordingly. Puedes ver exactamente lo que el sistema está haciendo, por qué lo está haciendo y establecer sus límites operativos, lo que coloca el control (y la responsabilidad) en tus manos. Esto puede brindar al usuario confianza y un sueño más tranquilo.

#### 11) **Access to advanced features through development (dev) modes including full closed loop**
This **AAPS** documentation focuses on the mainstream **“master”** branch of **AAPS**. However, research and development is going on all the time. More experienced users may wish to explore the experimental features in the **development** branch. The development innovations focus on strategies for full closed looping (not having to bolus for meals _etc._), and generally trying to make life with type 1 diabetes as convenient as possible.

#### 12) **Ability to contribute yourself to further improvements**
Type 1 diabetes can be highly frustrating and isolating. Tener el control sobre tu propia tecnología para la diabetes, con la posibilidad de "retribuir" tan pronto como haces progresos al ayudar a otros en su camino, puede ser realmente gratificante. You can educate yourself, discover the roadblocks and look for, and even contribute, to new developments and the documentation. There will be others in the community with the same quest that you can bounce ideas off and work with. Esta es la esencia de #WeAreNotWaiting.

## ¿Cómo se compara AAPS con los bolis (MDI) y el lazo abierto?

Multiple daily injections (MDI, (a) in **Figure 2** below) usually involve giving an injection of a long-lasting insulin (_e.g._ Tresiba) once a day, with injections of faster-acting insulin (_e.g._ Novorapid, Fiasp) at mealtimes, or for corrections. Las bombas de lazo abierto o sistema manual, (b) implica el uso de una bomba para administrar insulina de acción rápida a tasas preprogramadas como basal y luego realizar bolos a través de la bomba en las horas de las comidas o para correcciones. The basics of a looping system are that the looping app uses the sensor glucose data to instruct the pump to stop insulin delivery when it predicts you are heading for a low, and to give you extra insulin if your glucose levels are rising and predicted to go too high (c). Although this figure is oversimplified compared to real-life, it aims to demonstrate the key differences of the approaches. It is possible to achieve exceptionally good glucose control with any of these three approaches.

![21-06-23 AAPS glucose MDI etc](../images/basic-overview-mdi-open-and-closed-loop.png)


**Figura 2**. Basic overview of (a) MDI, (b) open-loop pumping and (c) hybrid closed loop pumping.

## ¿Cómo se compara AAPS con otros sistemas de lazo cerrado?

As of June 25 2023, there are four major open source closed loop systems available: [OpenAPS](https://openaps.readthedocs.io/), **AAPS**, [Loop](https://loopkit.github.io/loopdocs/#what-is-loop) and [iAPS](https://github.com/Artificial-Pancreas/iAPS?fbclid=IwAR2fA9Y9YqYzpKSrtEsotfXl5b67UclDkKgyrv52tQLzYbOoBeNGRmjlJJI), (formerly FreeAPS X). Las características de los diferentes sistemas se muestran en la siguiente tabla:


| Devicestype | Nombre                                                                | [AAPS](https://wiki.aaps.app)               | [Loop](https://loopkit.github.io/loopdocs/) | [Open APS](https://openaps.readthedocs.io/en/latest/) | [iAPS](https://iaps.readthedocs.io/en/latest/) |
| ----------- | --------------------------------------------------------------------- | ------------------------------------------- | ------------------------------------------- | ----------------------------------------------------- | ---------------------------------------------- |
| Phone       | Android                                                               | ![disponible](../images/available.png)      | ![no disponible](../images/unavailable.png) | ![no disponible](../images/unavailable.png)           | ![no disponible](../images/unavailable.png)    |
| Phone       | iPhone                                                                | ![no disponible](../images/unavailable.png) | ![disponible](../images/available.png)      | ![no disponible](../images/unavailable.png)           | ![disponible](../images/available.png)         |
| Rig         | tiny computer (1)                                                     | ![no disponible](../images/unavailable.png) | ![no disponible](../images/unavailable.png) | ![disponible](../images/available.png)                | ![no disponible](../images/unavailable.png)    |
| BOMBA       | [Dana I](../CompatiblePumps/DanaRS-Insulin-Pump.md)                   | ![disponible](../images/available.png)      | ![no disponible](../images/unavailable.png) | ![no disponible](../images/unavailable.png)           | ![no disponible](../images/unavailable.png)    |
| BOMBA       | [Dana RS](../CompatiblePumps/DanaRS-Insulin-Pump.md)                  | ![disponible](../images/available.png)      | ![no disponible](../images/unavailable.png) | ![no disponible](../images/unavailable.png)           | ![no disponible](../images/unavailable.png)    |
| BOMBA       | [Dana R](../CompatiblePumps/DanaR-Insulin-Pump.md)                    | ![disponible](../images/available.png)      | ![no disponible](../images/unavailable.png) | ![no disponible](../images/unavailable.png)           | ![no disponible](../images/unavailable.png)    |
| BOMBA       | [Omnipod (Dash)](../CompatiblePumps/OmnipodDASH.md) (2)               | ![disponible](../images/available.png)      | ![disponible](../images/available.png)      | ![no disponible](../images/unavailable.png)           | ![disponible](../images/available.png)         |
| BOMBA       | [Omnipod (Eros)](../CompatiblePumps/OmnipodEros.md)                   | ![disponible](../images/available.png)      | ![disponible](../images/available.png)      | ![no disponible](../images/unavailable.png)           | ![disponible](../images/available.png)         |
| BOMBA       | [Diaconn G8](../CompatiblePumps/DiaconnG8.md)                         | ![disponible](../images/available.png)      | ![no disponible](../images/unavailable.png) | ![no disponible](../images/unavailable.png)           | ![no disponible](../images/unavailable.png)    |
| BOMBA       | [EOPatch 2](../CompatiblePumps/EOPatch2.md)                           | ![disponible](../images/available.png)      | ![no disponible](../images/unavailable.png) | ![no disponible](../images/unavailable.png)           | ![no disponible](../images/unavailable.png)    |
| BOMBA       | [Medtrum TouchCare Nano](../CompatiblePumps/MedtrumNano.md)           | ![disponible](../images/available.png)      | ![no disponible](../images/unavailable.png) | ![no disponible](../images/unavailable.png)           | ![no disponible](../images/unavailable.png)    |
| BOMBA       | [Medtrum TouchCare 300U](../CompatiblePumps/MedtrumNano.md)           | ![disponible](../images/available.png)      | ![no disponible](../images/unavailable.png) | ![no disponible](../images/unavailable.png)           | ![no disponible](../images/unavailable.png)    |
| BOMBA       | [Roche Combo](../CompatiblePumps/Accu-Chek-Combo-Pump-v2.md)          | ![disponible](../images/available.png)      | ![no disponible](../images/unavailable.png) | ![no disponible](../images/unavailable.png)           | ![no disponible](../images/unavailable.png)    |
| BOMBA       | [Roche Insight](../CompatiblePumps/Accu-Chek-Insight-Pump.md)         | ![disponible](../images/available.png)      | ![no disponible](../images/unavailable.png) | ![no disponible](../images/unavailable.png)           | ![no disponible](../images/unavailable.png)    |
| BOMBA       | [Medtronic antiguas](../CompatiblePumps/MedtronicPump.md)             | ![disponible](../images/available.png)      | ![disponible](../images/available.png)      | ![disponible](../images/available.png)                | ![disponible](../images/available.png)         |
| BOMBA       | [Equil 5.3](../CompatiblePumps/Equil5.3.md)                           | ![disponible](../images/available.png)      | ![no disponible](../images/unavailable.png) | ![no disponible](../images/unavailable.png)           | ![no disponible](../images/unavailable.png)    |
| MCG         | [Dexcom G7](../CompatibleCgms/DexcomG7.md)                            | ![disponible](../images/available.png)      | ![disponible](../images/available.png)      | ![no disponible](../images/unavailable.png)           | ![disponible](../images/available.png)         |
| MCG         | [Dexcom One](../CompatibleCgms/DexcomG6.md)                           | ![disponible](../images/available.png)      | ![disponible](../images/available.png)      | ![no disponible](../images/unavailable.png)           | ![disponible](../images/available.png)         |
| MCG         | [Dexcom G6](../CompatibleCgms/DexcomG6.md)                            | ![disponible](../images/available.png)      | ![disponible](../images/available.png)      | ![disponible](../images/available.png)                | ![disponible](../images/available.png)         |
| MCG         | [Dexcom G5](../CompatibleCgms/DexcomG5.md)                            | ![disponible](../images/available.png)      | ![disponible](../images/available.png)      | ![disponible](../images/available.png)                | ![disponible](../images/available.png)         |
| MCG         | [Libre 3](../CompatibleCgms/Libre3.md)                                | ![disponible](../images/available.png)      | ![no disponible](../images/unavailable.png) | ![no disponible](../images/unavailable.png)           | ![no disponible](../images/unavailable.png)    |
| MCG         | [Libre 2](../CompatibleCgms/Libre2.md)                                | ![disponible](../images/available.png)      | ![no disponible](../images/unavailable.png) | ![no disponible](../images/unavailable.png)           | ![disponible](../images/available.png)         |
| MCG         | [Libre 1](../CompatibleCgms/Libre1.md)                                | ![disponible](../images/available.png)      | ![no disponible](../images/unavailable.png) | ![no disponible](../images/unavailable.png)           | ![disponible](../images/available.png)         |
| MCG         | [Eversense](../CompatibleCgms/Eversense.md)                           | ![disponible](../images/available.png)      | ![no disponible](../images/unavailable.png) | ![no disponible](../images/unavailable.png)           | ![disponible](../images/available.png)         |
| MCG         | [MM640G/MM630G](../CompatibleCgms/MM640g.md)                          | ![disponible](../images/available.png)      | ![no disponible](../images/unavailable.png) | ![no disponible](../images/unavailable.png)           | ![disponible](../images/available.png)         |
| MCG         | [PocTech](../CompatibleCgms/PocTech.md)                               | ![disponible](../images/available.png)      | ![no disponible](../images/unavailable.png) | ![no disponible](../images/unavailable.png)           | ![disponible](../images/available.png)         |
| MCG         | [Ottai](../CompatibleCgms/OttaiM8.md)                                 | ![disponible](../images/available.png)      | ![no disponible](../images/unavailable.png) | ![no disponible](../images/unavailable.png)           | ![no disponible](../images/unavailable.png)    |
| MCG         | [Syai Tag](../CompatibleCgms/SyaiTagX1.md)                            | ![disponible](../images/available.png)      | ![no disponible](../images/unavailable.png) | ![no disponible](../images/unavailable.png)           | ![no disponible](../images/unavailable.png)    |
| MCG         | [Nightscout como origen BG](../CompatibleCgms/CgmNightscoutUpload.md) | ![disponible](../images/available.png)      | ![disponible](../images/available.png)      | ![disponible](../images/available.png)                | ![disponible](../images/available.png)         |

_Table notes:_
1. A **rig** is a small computer which you carry around with you, without a monitor. One supported device type is Intel Edison + Explorer Board and the other Raspberry Pi + Explorer HAT or Adafruit RFM69HCW Bonnet. The first APS were based on this setup, as mobile phones were not capable of running the required algorithms. Use of these systems has declined, as the setup on mobile phones has become easier, and phones have a display included. Intel has also stopped selling the Intel Edison. The excellent OpenAPS algorithms **oref0** and **oref1** are now incorporated in AAPS and iAPS.
2. Omnipod Dash is the successor of Omnipod Eros. It supports bluetooth communication and does not need a rig gateway to communicate between the Omnipod and mobile phone. If you have a choice, we recommend use of the Dash instead of Eros.


An international peer-reviewed consensus statement containing practical guidance on open source looping was written by and for health-care professionals, and published in a leading medical journal in 2022: [_Lancet Diabetes Endocrinol_, 2022; 10: 58–74](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8720075/)(_1_). It is well worth a read (including for your diabetes clinic) and summarises the main technical differences between the different open-source hybrid closed loop systems.

Es difícil tener una "sensación" de cualquier sistema sin usarlo o hablar con otros que lo estén utilizando, así que comunícate con otros en Facebook/Discord y pregunta. Most people find that **AAPS** is incredibly sophisticated in comparison to other hybrid closed loop systems (particularly the commercial systems), with a huge number of potentially customisable settings and features,  discussed above. Algunas personas pueden encontrar esto un poco abrumador al principio, pero no hay prisa por investigar todas las posibilidades de una vez. Puedes avanzar tan lentamente o tan rápido como desees, y siempre hay ayuda disponible en cada paso del camino.


## ¿AAPS utiliza inteligencia artificial o algún algoritmo de aprendizaje?

The current master version of **AAPS** (3.3.1.3) does not have any machine learning algorithms, multiple-parameter insulin response models, or artificial intelligence. Como tal, el sistema es abierto y transparente en cómo funciona, y tiene la capacidad de ser comprendido no solo por expertos, sino también por clínicos y pacientes. It also means that if you have a sharply varying schedule (maybe switching from a stressful week at work to a relaxing holiday) and are likely to need a significantly different amount of insulin, you can immediately switch **AAPS** to run a weaker/stronger customised profile. Un 'sistema de aprendizaje' hará este ajuste automáticamente, pero es probable que tarde más tiempo en ajustar la administración de insulina.

## Which system is right for me or my dependant?

En la práctica, la elección de sistema a menudo está restringida por la bomba que ya tienes o puedes obtener de tu equipo médico, y tu elección de teléfono (Apple o Android). Si aún no tienes una bomba, tienes la mayor variedad de sistemas para elegir. La tecnología está en constante evolución, algunas bombas están siendo descontinuadas y se están lanzando al mercado nuevas bombas y sensores. La mayoría de los sistemas de código abierto funcionan con los sensores principales (Libre y Dexcom) o se adaptan rápidamente para funcionar con nuevos sensores aproximadamente un año después de su lanzamiento (con un pequeño retraso en el tiempo para pruebas de seguridad y estabilidad).

Most **AAPS** users report more time in range, HbA1c reductions, as well as quality of life improvements from having a system that can auto-adjust basal rates overnight during sleep, and this is true for most hybrid closed loop systems. Algunas personas prefieren un sistema muy simple que no sea muy personalizable (lo que significa que pueden preferir un sistema comercial), y otras encuentran esta falta de control muy frustrante (pueden preferir un sistema de código abierto). If you (or your dependant) are newly diagnosed, a common route is to get used to using MDI plus a glucose sensor first, then progress to a pump which has the potential for looping, then progress to **AAPS**, but some people (especially small kids) may go straight to a pump.

Es importante tener en cuenta que el usuario de **AAPS** debe ser proactivo para solucionar y corregir problemas por sí mismo, con la ayuda de la comunidad. Esta es una mentalidad muy diferente a la de usar un sistema comercial. Con **AAPS**, el usuario tiene más control, pero también la responsabilidad, y debe sentirse cómodo con eso.

## ¿Es seguro usar sistemas de código abierto como AAPS?

### Safety of the AAPS system
A more accurate question is probably “is it safe **compared** with my current insulin delivery system?” since no method of insulin delivery is without risk. Hay muchas medidas de control y equilibrio establecidas en **AAPS**. A recent [paper](https://www.liebertpub.com/doi/epub/10.1089/dia.2019.0375) looked at the use of **AAPS** in a computer simulated set-up, which was an effective way to unobjectively trial how safe and effective the system is. En general, se estima que más de 10.000 personas en todo el mundo están utilizando sistemas de administración de insulina automatizados de código abierto, y continúa aumentando a nivel global.

Cualquier dispositivo que utilice comunicaciones por radio podría ser hackeado, y esto es válido también para una bomba de insulina que no esté en un lazo cerrado. Actualmente, no tenemos conocimiento de que alguien haya intentado dañar a personas hackeando su equipo médico relacionado con la diabetes. Sin embargo, existen múltiples formas de protegerse contra tales riesgos:

1.  En la configuración de la bomba, limita tanto la cantidad máxima permitida para los bolos como la configuración máxima de la basal temporal a cantidades que consideres más seguras. Estos son límites estrictos que no creemos que ningún hacker malicioso pueda eludir.

2.  Configura las alarmas de tu MCG habilitadas tanto para niveles elevados como bajos.

3.  Monitorea la administración de tu insulina en línea. Los usuarios de Nightscout pueden configurar alarmas adicionales para alertar sobre una amplia variedad de condiciones, incluyendo condiciones que son mucho más probables de ocurrir que un ataque malicioso. Además de los niveles altos y bajos, Nightscout puede mostrar datos de diagnóstico útiles para verificar que la bomba está funcionando según lo deseado, incluyendo la cantidad actual de insulina activa (IOB), el historial de la basal temporal de la bomba y el historial de bolos de la bomba. También se puede configurar para alertar de manera proactiva a los usuarios sobre condiciones no deseadas, como picos y caídas de glucosa previstos, bajo nivel de insulina en el depósito y baja batería de la bomba.

Si se realizara un ataque malicioso a tu bomba de insulina, estas estrategias reducirían significativamente el riesgo. Cada posible usuario de **AAPS** debe sopesar los riesgos asociados con el uso de **AAPS** en comparación con los riesgos de utilizar un sistema diferente.

#### Safety considerations around improving blood glucose control too fast

A rapid reduction in HbA1c and improved blood glucose control sounds appealing. However, reducing average blood glucose levels _too fast_ by starting any closed loop system can cause permanent damage, including to the eyes, and painful neuropathy that never goes away. This damage can be avoided simply by reducing levels more slowly. If you currently have an elevated HbA1c and are moving to AAPS (or any other closed loop system), please discuss this potential risk with your clinical team before starting, and agree a timeplan with them. More general information on how to reduce your glucose levels safely, including links to medical literature is given in the [safety section [here](#preparing-safety-first).

#### Medical safety around devices, consumable supplies and other medications

Use a tested, fully functioning FDA or CE approved insulin pump and CGM for an artificial pancreas loop. Las modificaciones de hardware o software a estos componentes pueden causar una dosificación inesperada de la insulina, causando un riesgo significativo para el usuario. If you find or get offered broken, modified or self-made insulin pumps or CGM receivers, do not use these for creating an AAPS system.

Use original supplies such as inserters, cannulas and insulin containers approved by the manufacturer of your pump and CGM. El uso de suministros no probados o modificados puede provocar inexactitud del MCG y errores de dosificación de la insulina. Insulin is highly dangerous when misdosed - please do not play with your life by hacking your supplies.

Do not take SGLT-2 inhibitors (gliflozins) when using **AAPS** as they incalculably lower blood sugar levels. Combining this effect with a system that lowers basal rates in order to increase BG is dangerous, there is more detail about this in the main [safety section](#preparing-safety-first).

(introduction-how-can-i-approach-discussing-aaps-with-my-clinical-team)=
## ¿Cómo puedo abordar la discusión sobre AAPS con mi equipo médico?

Users are encouraged to speak with their clinicians about their intention to use **AAPS**. Please do not be afraid to have an honest conversation with your diabetes team if you intend to use **AAPS** (or any other DIY loop, for that matter). Transparency and trust between patient and doctor is paramount.

### Suggested approach:
Start a conversation with your clinician to determine their familiarity and attitude towards diabetic technology such as CGMs,  pumps, hybrid loops and commercial looping. Your clinician/endocrinologist should be aware of the basic technology and be willing to discuss with you recent advancements with commercial loop products available within their regions.

#### Local precedent

Obtain your clinicians/endocrinologists’ views on DIY loop _vs_ commercial looping, and gauge their knowledge in this area. Are they familiar with **AAPS** and can they share with you any helpful experience of working with patients with DIY looping?

Ask if your team has any patients under their care who already use DIY looping. Due to patient confidentiality, doctors cannot pass other patient’s details to you without obtaining the individual’s consent. However, if you want to, you **can** ask them to pass **your** contact details to an existing DIY looping patient if there is one the clinician feels you might "click” with, suggesting that you would be happy for the patient to contact you to discuss DIY looping. Clinicians are not obliged to do this, but some are happy to, since they realise the importance of peer-to-peer support in type 1 diabetes management. You may also find it useful to meet local friendly DIY loopers. This is of course up to you, and not entirely necessary.

#### National and International Precedent

If you feel unsupported by your team to loop with **AAPS**, the following discussion points may help:

a) The **AAPS** system has been designed BY patients and their caregivers. It has been designed ultimately for safety, but also drawing on in-depth patient experience. There are currently around **10,000** AAPS users worldwide. There is therefore likely to be other patients using DIY looping in your clinic's patient population (whether they know about it or not).

b) Recent peer-reviewed published guidance in the internationally leading medical journal [The Lancet](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8720075/pdf/nihms-1765784.pdf)_(1)_ has confirmed that DIY loops are **safe** and **effective at improving diabetic control**, including time in range. There are regular articles in leading journals like [Nature](https://doi.org/10.1038/d41586-023-02648-9)_(3)_ which highlight the progress of the DIY looping community.

c) Starting with **AAPS** involves a _gradual_ migration from “open” loop pumping, through low-glucose suspend, through to hybrid “closed” looping, by completing a number of objectives. There is therefore a structured programme, requiring the user to demonstrate a level of competence at each stage and fine-tuning their basic settings (basal, ISF and ICR) before they can close the loop.

d) Technical support is available to you from the DIY community through GitHub, Discord and Facebook closed groups.

e) You will be able to provide **both CGM and insulin looping/pumping information** as combined reports at clinic meetings (through Nightscout or Tidepool), either printed out or on-screen (if you bring a laptop/tablet). The streamlining of both CGM and insulin data will allow more effective use of your clinician’s time to review your reports and aid their discussions in assessing your progress.

f) If there is still strong objection from your team, hand your clinician printouts of the reference articles linked here in the text, and give them the link to the **AAPS** clinicians section: [For Clinicians – A General Introduction and Guide to **AAPS**](../UsefulLinks/ClinicianGuideToAaps.md)

#### Support for DIY looping by other clinicians

The paper published in the [Lancet Diabetes Endocrinology](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8720075/)(_1_)[ (co led by Kings’ and Guy’s and St Thomas’ NHS Foundation Trust, and co lead by Dr Sufyan Hussain, a consultant diabetologist and honorary senior lecturer from King’s in London) provides:

a) **Assurance** for professionals that DIY artificial pancreas systems/ open source as a “safe and effective treatment” option for type 1 diabetes and provides guidance on recommendations, discussions, supports, documentation;

b) **Recognition** that open-source automated insulin delivery (“AID”) systems can increase time in range (TIR) while reducing variability in blood glucose concentrations and the amount of hypo and hyperglycaemic episodes in various age groups, genders and communities;

c) **Recommendation** that healthcare workers should **support** type 1 patients or their caregivers who choose to manage their diabetes with an open source AID system;

d) Recommendation that healthcare workers should attempt to learn about all treatment options that might benefit patients including available open-source AID systems.  If health care professionals do not have resources to educate themselves, or have legal or regulatory concerns, they should consider **cooperating, or teaming up with other healthcare professionals** who do;

e) Emphasis that all users of CGMs should have real-time and open-access to **their own health data** at all times

f) Emphasis that these open source systems have not undergone the same regulatory evaluations as commercially available medical technologies, and there is no commercial technical support. However, **extensive community support is available**; and

g) A recommendation that **regulation and legal frameworks** should be updated to ensure clarity on permitting ethical and effective treatment of such open source systems.

Another paper in [Medical Law International, 2021](http://pure-oai.bham.ac.uk/ws/files/120241375/0968533221997510.pdf)(_4_) also highlights the UK General Medical Council’s ‘consent guidance’ places a strong emphasis on doctor and patients making decisions together. The doctor should explain the potential benefits, risks, burdens and side-effects on DIY APS and may recommend a particular option without pressuring the patient.

Ultimately it is up to the patient to weigh up these factors, along with any non-clinical issues relevant to them and decide which treatment option, if any, to accept.

If a doctor discovers in a clinic that their patient is looping with a DIY system, they are not exempted from their obligations to monitor the patient, simply because they did not prescribe the particular piece of technology the patient is using; clinicians must continue to monitor patients.

Doctors (at least in the UK) are not prohibited from prescribing unlicensed medicines and can use their clinical discretion. They should therefore use their clinical judgement to decide if a DIY APS is suitable for a specific patient, and discuss what they consider to be the pros and cons with the patient.

#### The articles referenced above, and other useful links and position statements are listed below:

1. Open-source automated insulin delivery: international consensus statement and practical guidance for health-care professionals [_Lancet Diabetes Endocrinol_, (2022) _10_, 58–74](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8720075/)
2. [In Silico Trials of an Open-Source Android-Based Artificial Pancreas: A New Paradigm to Test Safety and Efficacy of Do-It-Yourself Systems, 2020](https://www.liebertpub.com/doi/epub/10.1089/dia.2019.0375)
3. A DIY ‘bionic pancreas’ is changing diabetes care — what's next? [_Nature_ (2023), _620_, 940-941](https://doi.org/10.1038/d41586-023-02648-9)
4. Prescribing unapproved medical devices? The case of DIY artificial pancreas systems [_Medical law international_, (2021), _21_, 42-68](http://pure-oai.bham.ac.uk/ws/files/120241375/0968533221997510.pdf)
5. [Berlin Institute of Health position statement, 2022](https://www.bihealth.org/en/notices/do-it-yourself-solutions-for-people-with-diabetes-are-safe-and-recommended)
6. Do-It-Yourself Automated Insulin Delivery: A Health-care Practitioner User’s Guide (Diabetes Canada position and guide) [_Canadian Journal of Diabetes_, (2023)_47_, E8, 389-397](https://www.canadianjournalofdiabetes.com/article/S1499-2671(23)00138-7/fulltext)
7.  Netherlands (EN/NL) - for clinicians - [how to help people on open source automated insulin delivery systems](https://www.diabetotech.com/blog/how-to-help-people-on-open-source-automated-insulin-delivery-systems)
8. First Use of Open-Source Automated Insulin Delivery AndroidAPS in Full Closed-Loop Scenario: Pancreas4ALLRandomized Pilot Study [_Diabetes Technol. Ther._, 25, _5_, 2023](https://www.liebertpub.com/doi/pdf/10.1089/dia.2022.0562?casa_token=D13eFx5vCwwAAAAA:MYvO8hChbViXVJFgov1T11RXBPx2N_wOMThLHwl3TVUxbCuANegPrIFRC5R5VXx_S71FoQYW-qg)
9. Pre-school and school-aged children benefit from the switch from a sensor-augmented pump to an AndroidAPS hybrid closed loop: A retrospective analysis [_Pediatr. Diabetes_ 2021, _22_, 594-604. 2021](https://onlinelibrary.wiley.com/doi/epdf/10.1111/pedi.13190)
10. Outcomes of the OPEN project, an EU-funded project into the Outcomes of Patient’s Evidence with Novel, Do-it-Yourself Artificial Pancreas Technology (https://www.open-diabetes.eu/publications)



## Why can’t I just download AAPS and use it straight away?

La aplicación **AAPS** no se proporciona en Google Play; debes construirla a partir del código fuente por ti mismo por razones legales. **AAPS** no tiene licencia, lo que significa que no tiene la aprobación de ninguna autoridad regulatoria en ningún país. **AAPS** is deemed to be carrying out a medical experiment on yourself, and is carried out at the user’s own risk.

Configurar el sistema requiere paciencia, determinación y el desarrollo gradual de conocimientos técnicos. Toda la información y el apoyo se pueden encontrar en estos documentos, en otros lugares en línea o a través de personas que ya lo han hecho. Over 10,000 people have successfully built and are currently using **AAPS** worldwide.

The developers of **AAPS** take safety incredibly seriously, and want others to have a good experience of using **AAPS**. Es por eso que es esencial que cada usuario (o cuidador, si el usuario es un niño):

- builds the AAPS system themself and works through the **objectives** so that they have reasonably good personalised settings and understand the basics of how **AAPS** works by the time they “close the loop”;

- Realiza copias de tu sistema exportando y guardando archivos importantes (como el keystore y el archivo de configuración .json) en algún lugar seguro, para que puedas configurarlo nuevamente rápidamente si es necesario;

- actualiza a las nuevas versiones "master" tan pronto como estén disponibles; y

- mantenga y supervise el sistema para asegurarse de que está funcionando correctamente.

## What is the connectivity of the AAPS system?

**Figure 3 (below)** shows one example of the **AAPS** system for a user who do not require any followers interacting with the system. Additional open-source software and platforms which are not shown can also be integrated.

![21-06-23 AAPS connectivity no followers](../images/AAPS-connectivity-no-followers.png)


**Figure 4 (below)** shows the full potential of the **AAPS** system for a user who has followers and requires a monitor and send adjust the system remotely (like a child with type 1 diabetes). Additional open-source software and platforms which are not shown can also be integrated.

![21-06-23 AAPS overview with followers](../images/AAPS-overview-with-followers.png)

## How does AAPS get continually developed and improved?

La mayoría de los usuarios de **AAPS** utilizan la versión completamente probada **master** de AAPS, que ha sido sometida a pruebas para detectar errores y problemas antes de ser lanzada a la comunidad. Entre bastidores, los desarrolladores prueban nuevas mejoras y las prueban en versiones de "desarrollo" (**dev**) de **AAPS** con una comunidad de usuarios dispuestos a realizar actualizaciones de errores en corto plazo. Si las mejoras funcionan bien, se lanzan como una nueva versión "master" de **AAPS**. Cualquier nueva versión "master" se anuncia en el grupo de Facebook, para que los usuarios habituales de **AAPS** puedan leer sobre ella y actualizar a la nueva versión maestra.

Some experienced and confident **AAPS** users conduct experiments with emerging technologies and with dev versions of the **AAPS** app, which can be interesting for the less adventurous users to read about, without having to do it themselves! Las personas tienden a compartir estos experimentos en el grupo de Facebook también.

Puedes obtener más información sobre algunos de estos experimentos y discusiones sobre tecnología emergente aquí:

Tim Street [https://www.diabettech.com/](https://www.diabettech.com/)

David Burren [https://bionicwookie.com/](https://bionicwookie.com/)

## Who can benefit from AAPS?

| Tipo de Usuario                                           |
| --------------------------------------------------------- |
| ✔️ Personas con diabetes tipo 1                           |
| ✔️ Cuidadores o padres de una persona con diabetes tipo 1 |
| ✔️ Usuarios ciegos con diabetes tipo 1                    |
| ✔️ *Clínicos y profesionales de la salud                  |

La tabla anterior supone que el usuario tiene acceso tanto a un monitor continuo de glucosa como a una bomba de insulina.

*All data from **AAPS** can be made available to healthcare professionals via data sharing platforms, including Nightscout that provides logging and real time monitoring of CGM data, insulin delivery, carbohydrate entries, predictions and settings. Los registros de Nightscout incluyen informes diarios y semanales que pueden ayudar a los profesionales de la salud en sus conversaciones con pacientes con diabetes tipo 1 al proporcionar datos más precisos sobre el control glucémico y consideraciones conductuales.

### Accessibility for users AAPS who are partially or completely blind

#### Day to day AAPS use:
AAPS can be used by blind people. On Android devices, the operating system has a program called TalkBack. This allows screen orientation via voice output as part of the operating system. By using TalkBack you can operate both your smartphone and AAPS without needing to be able to see.

#### Building the AAPS app:
As a user you will build the AAPS app in Android Studio. Many people use Microsoft Windows for this purpose, where there is the Screenreader analogous to TalkBack. Since Android Studio is a Java application, the “Java Access Bridge” component must be enabled in the Control Panel. Otherwise, the screen reader of the PC will not speak in Android Studio.

How you do this depends on your operating system, two methods are outlined below:

1) In the Windows Start menu, enter “Control Panel” in the search field, open with Enter. It opens: “All Control Panel Items”.

Open the "Ease of Access Centre".

Then open “Use computer without a display” with Enter.

Under hear text read aloud select "turn on narrator" and "turn on audio display", and click "apply"

or:

2) Press Windows key and enter “Control Panel” in the search field, open with Enter. It opens: “All Control Panel Items”.

Press the letter C to get to “Center for Ease of Use”, open with Enter.

Then open “Use computer without a screen” with Enter.

There, at the bottom, you will find the checkbox “Enable Java Access Bridge”, select it.

Done, just close the window! The screen reader should work now.



## What benefits can I get from AAPS?

Con inversión de tu tiempo, **AAPS** potencialmente puede llevar a:

- Aliviar el estrés y la carga de gestionar la diabetes tipo 1;

- Reducir la multitud de decisiones que surgen a raíz de la diabetes tipo 1;

- La provisión de dosis de insulina personalizadas y dinámicas basadas en datos en tiempo real, lo que puede reducir la necesidad de tratamientos para hipoglucemias y episodios de hiperglucemia;

- Un aumento en el conocimiento sobre la gestión de la insulina y la confianza para ajustar mejor tus configuraciones;

- La capacidad de crear configuraciones automáticas (**automatizaciones**) que se adapten a tu estilo de vida;

- Mejora en la calidad del sueño y reducción general en la frecuencia de intervenciones nocturnas;

- Monitorización remota y administración de la entrega de insulina para cuidadores de personas con diabetes tipo 1; y

- streamlining of all your portable diabetic equipment (continuous glucose monitor receiver and insulin controlling devices) by using an Android phone controlled by **AAPS**.


Ultimately, **AAPS** can empower individuals to better manage their diabetes, resulting in stable blood sugars and improved long term health outcomes.

Interested in how to get started with setting up AAPS? Take a look at the [preparing](../Getting-Started/PreparingForAaps.md) section.
