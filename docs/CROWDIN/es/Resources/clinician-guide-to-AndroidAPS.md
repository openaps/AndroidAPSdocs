# Para los Médicos – Una Introducción General y una Guía para AndroidAPS

Esta página está pensada para los profesionales que han expresado su interés en la tecnología de páncreas artificial de código abierto, como AndroidAPS, o para pacientes que desean compartir dicha información con sus médicos.

Esta guía tiene alguna información de alto nivel sobre el lazo cerrado de DIY y específicamente cómo funciona AndroidAPS. For more details on all of these topics, please view the [comprehensive AndroidAPS documentation online](../index.md). Si tiene alguna pregunta, por favor pida a su paciente más detalles, o siempre sientase libre para llegar a la comunidad con alguna pregunta. (Si no estás en los medios sociales (por ejemplo, [Twitter](https://twitter.com/kozakmilos) o Facebook), se siente libre de enviar por correo electrónico a developers@AndroidAPS.org). [También puede encontrar algunos de los estudios más recientes & resultados relacionados aquí](https://openaps.org/outcomes/).

## The steps for building a DIY Closed Loop:

Para empezar a utilizar AndroidAPS, se deben realizar los pasos siguientes:

* Find a [compatible pump](../Hardware/pumps.md), a [compatible Android device](https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit?usp=sharing), and a [compatible CGM source](../Configuration/BG-Source.md).
* [Download the AndroidAPS source code and build the software](../Installing-AndroidAPS/Building-APK.md).
* [Configure the software to talk to their diabetes devices and specify settings and safety preferences](../index.md#configuration).

## How A DIY Closed Loop Works

Sin un sistema de lazo cerrado, una persona con diabetes recopila datos de su bomba y de la CGM, decide qué hacer, y toma medidas.

Con la entrega automatizada de insulina, el sistema hace lo mismo: recopila datos de la bomba, CGM, y en cualquier otro lugar se registra (como Nightscout), utiliza esta información para hacer los cálculos y decidir cuánta más o menos se necesita (arriba o abajo la tasa basal subyacente), y utiliza las tasas basales temporales para hacer los ajustes necesarios para mantener o eventualmente llevar a los BG al rango objetivo.

Si el dispositivo que ejecuta AndroidAPS se rompe o se desconecta de la bomba, una vez que termina la última basal temporal, la bomba vuelve a ser una bomba estándar con las basales preprogramadas que se encuentran en su memoria.

## How data is gathered:

Con AndroidAPS, un dispositivo Android que ejecuta una aplicación especial para hacer los cálculos, el dispositivo se comunica usando Bluetooth con una bomba compatible. AndroidAPS se puede comunicar con otros dispositivos y con la nube a través de datos wifi o móviles para reunir información adicional, y para informar al paciente, a los cuidadores y a los seres queridos sobre lo que está haciendo y por qué.

El dispositivo Android tiene que:

* comunicar con la bomba y leer el historial - cuánta insulina se ha entregado
* comunicarse con el MCG (ya sea directamente, o a través de la nube) para ver qué están haciendo/han estado haciendo los BG

Cuando el dispositivo ha recopilado estos datos, el algoritmo se ejecuta y realiza la toma de decisiones en función de los valores (ISF, ratio de carb, DIA, destino, etc.). Si es necesario, entonces emite comandos a la bomba para modificar la velocidad de entrega de la insulina.

También recogerá cualquier información sobre los bolos, el consumo de hidratos de carbono y los ajustes temporales de los objetivos de la bomba o de Nightscout para usarla para el cálculo de las tasas de entrega de insulina.

## How does it know what to do?

El software de código abierto está diseñado para que sea fácil para el dispositivo hacer el trabajo que la gente realiza (en el modo manual) para calcular cómo se debe ajustar la entrega de insulina. It first collects data from all the supporting devices and from the cloud, prepares the data and runs the calculations, makes predictions of expected BG-levels during the next hours will be expected to do in different scenarios, and calculates the needed adjustments to keep or bring BG back into target range. A continuación, se envían los ajustes necesarios a la bomba. Luego lee los datos de nuevo y lo hace una y otra vez.

Como el parámetro de entrada más importante es el nivel de glucosa en sangre procedente de la MCG, es importante disponer de datos de MCG de alta calidad.

AndroidAPS se ha diseñado para realizar un seguimiento transparente de todos los datos de entrada que recopila, la recomendación resultante y cualquier acción que se tome. Por lo tanto, es fácil responder a la pregunta en cualquier momento, "¿por qué está haciendo X?" revisando los registros.

## Examples of AndroidAPS algorithm decision making:

AndroidAPS utiliza el mismo algoritmo de núcleo y el mismo conjunto de características que OpenAPS. El algoritmo hace varias predicciones (basadas en valores, y la situación) que representan diferentes escenarios de lo que podría suceder en el futuro. En Nightscout, estos se muestran como "líneas púrpuras". AndroidAPS uses different colors to separate these [prediction lines](../Installing-AndroidAPS/Releasenotes.md#overview-tab). In the logs, it will describe which of these predictions and which time frame is driving the necessary actions.

### Here are examples of the purple prediction lines, and how they might differ:

![Ejemplos de líneas de predicción púrpura](../images/Prediction_lines.jpg)

### Here are examples of different time frames that influence the needed adjustments to insulin delivery:

### Scenario 1 - Zero Temp for safety

En este ejemplo, el BG está aumentando en el corto plazo; sin embargo, se prevé que será bajo en un período de tiempo más largo. De hecho, se pronostica que va por debajo de los objetivos *y* el umbral de seguridad. Por seguridad para evitar la baja, AndroidAPS emitirá un temporal cero (tasa basal temporal en 0%), hasta que el caso de eventualBG (en cualquier intervalo de tiempo) esté por encima del umbral.

![Escenario de dosificación 1](../images/Dosing_scenario_1.jpg)

### Scenario 2 - Zero temp for safety

En este ejemplo, se prevé que la BG esté baja en el corto plazo, pero se prevé que finalmente estará por encima de la meta. Sin embargo, debido a que el mínimo a corto plazo está en realidad por debajo del umbral de seguridad, AndroidAPS emitirá un temporal cero, hasta que ya no haya ningún punto de la línea de predicción que esté por debajo del umbral.

![Escenario de dosificación 2](../images/Dosing_scenario_2.jpg)

### Scenario 3 - More insulin needed

En este ejemplo, una predicción a corto plazo muestra que irá por debajo del objetivo. Sin embargo, no se prevé que esté por debajo del umbral de seguridad. El posible BG está por encima del objetivo. Por lo tanto, AndroidAPS evitará añadir cualquier insulina que contribuya a un bajo nivel a corto plazo (añadiendo insulina que haría que la predicción fuera inferior al umbral). A continuación, evaluará la adición de la insulina para alcanzar el nivel más bajo de la BG prevista para el objetivo, una vez que sea seguro hacerlo. *(Dependiendo de la configuración y la cantidad y el momento de la insulina necesaria, este tipo de insulina puede ser entregado a través de basales temporales o SMB (super micro bolos) ).*

![Escenario de dosificación 3](../images/Dosing_scenario_3.jpg)

### Scenario 4 - Low temping for safety

En este ejemplo, AndroidAPS ve que BG está subiendo muy por encima del objetivo. Sin embargo, debido a la sincronización de la insulina, ya hay suficiente insulina en el cuerpo, para lograr una BG en rango de tiempo. De hecho, se predice que BG, eventualmente, estará por debajo del objetivo. Por lo tanto, AndroidAPS no suministrará insulina adicional, por lo que no contribuirá a un periodo más largo de tiempo en niveles de Bg más bajos. A pesar de que BG está alto/subiendo, es probable que haya una baja tasa basal temporal aquí.

![Escenario de dosificación 4](../images/Dosing_scenario_4.jpg)

## Optimizing settings and making changes

Como un profesional clínico que no tiene experiencia con AndroidAPS o lazos cerrados DIY, es posible que le sea difícil ayudar a su paciente a optimizar su configuración o a realizar cambios para mejorar sus resultados. We have multiple tools and [guides](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/optimize-your-settings.html) in the community that help patients make small, tested adjustments to improve their settings.

Lo más importante para los pacientes es hacer un cambio a la vez, y observar el impacto durante 2-3 días antes de elegir cambiar o modificar otro valor (a menos que sea obviamente un mal cambio que empeore las cosas, en cuyo caso deberían revertir inmediatamente a la configuración anterior). La tendencia humana es cambiar todo a la vez; pero si alguien lo hace, entonces se puede acabar con la configuración subóptima para el futuro, y les resulta difícil volver a un estado bueno conocido.

Una de las herramientas más potentes para realizar los cambios de configuración es una herramienta de cálculo automatizada para las tasas basales, ISF y coeficiente de carbohidratos. This is called “[Autotune](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autotune.html)”. Está diseñado para que se ejecute de forma independiente/manualmente, y permita que los datos le guíen a usted o a su paciente en la realización de cambios incrementales en los valores. Es la mejor práctica en la comunidad ejecutar (o revisar) los informes de Autoajuste primero, antes de intentar realizar ajustes manuales en los valores. Con AndroidAPS, Autoajustar se ejecutará como un "sistema separado", aunque hay esfuerzos en curso para incorporarlo directamente a AndroidAPS también. As these parameters are a prerequisite both for standard pump insulin delivery and for closed loop insulin delivery, discussion of the autotune results and adustment of these parameters would be the natural link to the clinician.

Adicionalmente, el comportamiento humano (aprendido de la forma manual de la diabetes) a menudo influye en los resultados, incluso con un lazo cerrado de DIY. Por ejemplo, si se pronostica que BG va bajo y AndroidAPS reduce la insulina en el camino hacia abajo, sólo puede ser necesaria una pequeña cantidad de carbohidratos (por ejemplo, carbohidratos de 3-4g) para llevar a BG arriba de 70 mg/dl (3,9 mmol). Sin embargo, en muchos casos, alguien puede optar por tratar con muchos más carbohidratos (por ejemplo, apegarse a la regla de los 15), lo que causará un aumento más rápido resultante de la glucosa extra y porque la insulina se ha reducido en el período de tiempo que conduce a la baja.

## OpenAPS

**This guide was adopted from [The clinician's guide to OpenAPS](https://openaps.readthedocs.io/en/latest/docs/Resources/clinician-guide-to-OpenAPS.html).** OpenAPS is a system developed to be run on a small portable computer (generally referred to as the "rig"). AndroidAPS utiliza muchas de las técnicas implementadas en OpenAPS, y comparte gran parte de la lógica y los algoritmos, por lo que esta guía es muy parecida a la guía original. Gran parte de la información acerca de OpenAPS se puede adaptar fácilmente a AndroidAPS, con la diferencia principal siendo la plataforma de hardware donde se ejecuta cada pieza de software.

## Summary

Esto tiene como objetivo ser una visión general de alto nivel sobre cómo funciona AndroidAPS. Para más detalles, pregunte a su paciente, contacte a la comunidad, o lea la documentación completa de AndroidAPS disponible en línea.

Lectura recomendada adicional:

* The [full AndroidAPS documentation](../index)
* La publicación [OpenAPS Reference Design](https://OpenAPS.org/reference-design/), que explica cómo se ha diseñado OpenAPS para la seguridad: https://openaps.org/reference-design/
* The [full OpenAPS documentation](https://openaps.readthedocs.io/en/latest/index.html) 
  * More [details on OpenAPS calculations](https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/Understand-determine-basal.html#understanding-the-determine-basal-logic)