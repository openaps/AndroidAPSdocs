# For Clinicians – A General Introduction and Guide to AAPS

This page is intended for clinicians who have expressed interest in open source artificial pancreas technology such as AAPS, or for patients who want to share such information with their clinicians.

This guide has some high-level information about DIY closed looping and specifically how AAPS works. For more details on all of these topics, please view the [comprehensive AAPS documentation online](../index.md). Si tiene alguna pregunta, por favor pida a su paciente más detalles, o siempre sientase libre para llegar a la comunidad con alguna pregunta. (Si no estás en los medios sociales (por ejemplo, [Twitter](https://twitter.com/kozakmilos) o Facebook), se siente libre de enviar por correo electrónico a developers@AndroidAPS.org). [También puede encontrar algunos de los estudios más recientes & resultados relacionados aquí](https://openaps.org/outcomes/).

## The steps for building a DIY Closed Loop:

To start using AAPS, the following steps should be taken:

* Find a [compatible pump](../Getting-Started/CompatiblePumps.md), a [compatible Android device](../Getting-Started/Phones.md), and a [compatible CGM source](../Getting-Started/CompatiblesCgms.md).
* [Download the AAPS source code and build the software](../SettingUpAaps/BuildingAaps.md).
* [Configure the software to talk to their diabetes devices and specify settings and safety preferences](../SettingUpAaps/SetupWizard.md).

## How A DIY Closed Loop Works

Sin un sistema de lazo cerrado, una persona con diabetes recopila datos de su bomba y de la CGM, decide qué hacer, y toma medidas.

Con la entrega automatizada de insulina, el sistema hace lo mismo: recopila datos de la bomba, CGM, y en cualquier otro lugar se registra (como Nightscout), utiliza esta información para hacer los cálculos y decidir cuánta más o menos se necesita (arriba o abajo la tasa basal subyacente), y utiliza las tasas basales temporales para hacer los ajustes necesarios para mantener o eventualmente llevar a los BG al rango objetivo.

If the device running AAPS breaks or goes out of range of the pump, once the latest temporary basal rate ends, the pump falls back to being a standard pump with the preprogrammed basals rates runnning.

## How data is gathered:

With AAPS, an Android device runs a special app to do the math, the device communicates using Bluetooth with a supported pump. AAPS can communicate with other devices and to the cloud via wifi or mobile data to gather additional information, and to report to the patient, caregivers, and loved ones about what it’s doing and why.

El dispositivo Android tiene que:

* comunicar con la bomba y leer el historial - cuánta insulina se ha entregado
* comunicarse con el MCG (ya sea directamente, o a través de la nube) para ver qué están haciendo/han estado haciendo los BG

Cuando el dispositivo ha recopilado estos datos, el algoritmo se ejecuta y realiza la toma de decisiones en función de los valores (ISF, ratio de carb, DIA, destino, etc.). Si es necesario, entonces emite comandos a la bomba para modificar la velocidad de entrega de la insulina.

También recogerá cualquier información sobre los bolos, el consumo de hidratos de carbono y los ajustes temporales de los objetivos de la bomba o de Nightscout para usarla para el cálculo de las tasas de entrega de insulina.

## How does it know what to do?

El software de código abierto está diseñado para que sea fácil para el dispositivo hacer el trabajo que la gente realiza (en el modo manual) para calcular cómo se debe ajustar la entrega de insulina. It first collects data from all the supporting devices and from the cloud, prepares the data and runs the calculations, makes predictions of expected BG-levels during the next hours will be expected to do in different scenarios, and calculates the needed adjustments to keep or bring BG back into target range. A continuación, se envían los ajustes necesarios a la bomba. Luego lee los datos de nuevo y lo hace una y otra vez.

Como el parámetro de entrada más importante es el nivel de glucosa en sangre procedente de la MCG, es importante disponer de datos de MCG de alta calidad.

AAPS is designed to transparently track all input data it gathers, the resulting recommendation, and any action taken. Por lo tanto, es fácil responder a la pregunta en cualquier momento, "¿por qué está haciendo X?" revisando los registros.

## Examples of AAPS algorithm decision making:

AAPS uses the same core algorithm and feature set as OpenAPS. El algoritmo hace varias predicciones (basadas en valores, y la situación) que representan diferentes escenarios de lo que podría suceder en el futuro. En Nightscout, estos se muestran como "líneas púrpuras". AAPS uses different colors to separate these [prediction lines](#aaps-screens-prediction-lines). In the logs, it will describe which of these predictions and which time frame is driving the necessary actions.

### Here are examples of the purple prediction lines, and how they might differ:

![Ejemplos de líneas de predicción púrpura](../images/Prediction_lines.jpg)

### Here are examples of different time frames that influence the needed adjustments to insulin delivery:

### Scenario 1 - Zero Temp for safety

En este ejemplo, el BG está aumentando en el corto plazo; sin embargo, se prevé que será bajo en un período de tiempo más largo. De hecho, se pronostica que va por debajo de los objetivos *y* el umbral de seguridad. For safety to prevent the low, AAPS will issue a zero temp (temporary basal rate at 0%), until the eventualBG (in any time frame) is above threshold.

![Escenario de dosificación 1](../images/Dosing_scenario_1.jpg)

### Scenario 2 - Zero temp for safety

En este ejemplo, se prevé que la BG esté baja en el corto plazo, pero se prevé que finalmente estará por encima de la meta. However, because the near-term low is actually below the safety threshold, AAPS will issue a zero temp, until there is no longer any point of the prediction line that is below threshold.

![Escenario de dosificación 2](../images/Dosing_scenario_2.jpg)

### Scenario 3 - More insulin needed

En este ejemplo, una predicción a corto plazo muestra que irá por debajo del objetivo. Sin embargo, no se prevé que esté por debajo del umbral de seguridad. El posible BG está por encima del objetivo. Therefore, AAPS will restrain from adding any insulin that would contribute to a near-term low (by adding insulin that would make the prediction go below threshold). A continuación, evaluará la adición de la insulina para alcanzar el nivel más bajo de la BG prevista para el objetivo, una vez que sea seguro hacerlo. *(Dependiendo de la configuración y la cantidad y el momento de la insulina necesaria, este tipo de insulina puede ser entregado a través de basales temporales o SMB (super micro bolos) ).*

![Escenario de dosificación 3](../images/Dosing_scenario_3.jpg)

### Scenario 4 - Low temping for safety

In this example, AAPS sees that BG is spiking well above target. Sin embargo, debido a la sincronización de la insulina, ya hay suficiente insulina en el cuerpo, para lograr una BG en rango de tiempo. De hecho, se predice que BG, eventualmente, estará por debajo del objetivo. Therefore, AAPS will not provide extra insulin so it will not contribute to a longer-timeframe low. A pesar de que BG está alto/subiendo, es probable que haya una baja tasa basal temporal aquí.

![Escenario de dosificación 4](../images/Dosing_scenario_4.jpg)

## Optimizing settings and making changes

As a clinician who may not have experience with AAPS or DIY closed loops, you may find it challenging to help your patient optimize their settings or make changes to improve their outcomes. We have multiple tools and [guides](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/optimize-your-settings.html) in the community that help patients make small, tested adjustments to improve their settings.

Lo más importante para los pacientes es hacer un cambio a la vez, y observar el impacto durante 2-3 días antes de elegir cambiar o modificar otro valor (a menos que sea obviamente un mal cambio que empeore las cosas, en cuyo caso deberían revertir inmediatamente a la configuración anterior). La tendencia humana es cambiar todo a la vez; pero si alguien lo hace, entonces se puede acabar con la configuración subóptima para el futuro, y les resulta difícil volver a un estado bueno conocido.

Una de las herramientas más potentes para realizar los cambios de configuración es una herramienta de cálculo automatizada para las tasas basales, ISF y coeficiente de carbohidratos. This is called “[Autotune](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autotune.html)”. Está diseñado para que se ejecute de forma independiente/manualmente, y permita que los datos le guíen a usted o a su paciente en la realización de cambios incrementales en los valores. Es la mejor práctica en la comunidad ejecutar (o revisar) los informes de Autoajuste primero, antes de intentar realizar ajustes manuales en los valores. With AAPS, Autotune will be run as a "one-off", although there are ongoing efforts to incorporate it directly into AAPS as well. As these parameters are a prerequisite both for standard pump insulin delivery and for closed loop insulin delivery, discussion of the autotune results and adustment of these parameters would be the natural link to the clinician.

Adicionalmente, el comportamiento humano (aprendido de la forma manual de la diabetes) a menudo influye en los resultados, incluso con un lazo cerrado de DIY. For example, if BG is predicted to go low and AAPS reduces insulin on the way down, only a small amount of carbs (e.g. 3-4g carbs) may be needed to bring BG up from 70 mg/dl (3.9 mmol). Sin embargo, en muchos casos, alguien puede optar por tratar con muchos más carbohidratos (por ejemplo, apegarse a la regla de los 15), lo que causará un aumento más rápido resultante de la glucosa extra y porque la insulina se ha reducido en el período de tiempo que conduce a la baja.

## OpenAPS

**This guide was adopted from [The clinician's guide to OpenAPS](https://openaps.readthedocs.io/en/latest/docs/Resources/clinician-guide-to-OpenAPS.html).** OpenAPS is a system developed to be run on a small portable computer (generally referred to as the "rig"). AAPS uses many of the techniques implemented in OpenAPS, and shares much of the logic and algorithms, which is why this guide is very similar to the original guide. Much of the information about OpenAPS can be easily adapted to AAPS, with the main difference being the hardware platform where each piece of software is run.

## Summary

This is meant to be a high-level overview of how AAPS works. For more details, ask your patient, reach out to the community, or read the full AAPS documentation available online.

Lectura recomendada adicional:

* The [full AAPS documentation](../index.md)
* La publicación [OpenAPS Reference Design](https://OpenAPS.org/reference-design/), que explica cómo se ha diseñado OpenAPS para la seguridad: https://openaps.org/reference-design/
* The [full OpenAPS documentation](https://openaps.readthedocs.io/en/latest/index.html) 
  * More [details on OpenAPS calculations](https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/Understand-determine-basal.html#understanding-the-determine-basal-logic)