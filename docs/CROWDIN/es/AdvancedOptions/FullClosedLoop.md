# Lazo cerrado completo

```{contents} In this page
:backlinks: entry
:depth: 2
```

El gran atractivo del lazo cerrado completo **FCL** es que puede imitar un páncreas artificial y hacer el día a día más fácil, sin necesidad de poner bolos para las comidas.

Aunque el **lazo cerrado híbrido** ('HCL') se basa en un algoritmo, el usuario todavía tiene que poner bolos manualmente antes de las comidas. Como resultado, el lazo puede hacer una pausa temporal (basal temporal a cero) para no administrar demasiada insulina.

En el **FCL** ya no hacen falta bolos según el tamaño de la comida: ¡deja eso al algoritmo!  **AAPS** puede manejar las comidas sin que el usuario ponga ningún bolo y sin introducir carbohidratos, en un modo llamado «comidas no anunciadas» **(‘UAM’)**. **UAM** permite que **AAPS** tolere mejor entradas de carbohidratos incorrectas, siendo más agresivo.

## ¿Qué esperar?

Hay muchos estudios publicados sobre los buenos resultados que puede lograr el **FCL**. Para leer más, consulta:

1) ![NationalLibraryOfMedicine](../images/Logo_of_U.S._National_Library_of_Medicine.png) ![PubMed](../images/US-NLM-PubMed-Logo.png) National Library of Medicine, PubMed [First Use of Open-Source Automated Insulin Delivery AndroidAPS in Full Closed-Loop Scenario: Pancreas4ALL Randomized Pilot Study](https://pubmed.ncbi.nlm.nih.gov/36826996/);

2) ![NationalLibraryOfMedicine](../images/Logo_of_U.S._National_Library_of_Medicine.png) ClinicalTrials.gov National Library of Medicine, Clinical Trial [Feasibility and Safety Study of the Automated Insulin Delivery Closed Loop System Pancreas4ALL (ASAP)](https://www.clinicaltrials.gov/study/NCT04835350?term=Feasibility%20and%20Safety%20Study%20of%20the%20Automated%20Insulin%20Delivery%20Closed%20Loop%20System%20Pancreas4ALL%20(ASAP)&rank=1)

Para tener éxito con el **FCL**, el usuario debe:

- comprobar si cumple los requisitos del **FCL**;
- configurar **Automatizaciones** adaptadas a las necesidades de su día a día; y
- ajustar con precisión los ajustes de **AAPS** (sobre todo las **Automatizaciones**).


## Consideraciones generales sobre por qué pasar (o no) del HCL al FCL

El **FCL** no es para todo el mundo:

- Algunos usuarios de **FCL** logran un TIR (70–180) de alrededor del 90 % y una HbA1c por debajo del 6 %; sin embargo, otros usuarios prefieren un control más estricto. En particular, reducir al mínimo los valores por encima de 140 mg/dl con dietas de carbohidratos rápidos probablemente requiere un prebolo.
- Ajustar **AAPS** puede ser difícil. No es para usuarios que se sienten abrumados por AAPS.  Tendrás que dedicar algunas semanas a ajustar con precisión tu **FCL**. Invertir ese tiempo puede dar mejores resultados y un mejor control de la **glucosa (BG)**.
- Las comidas pueden ser más fáciles de manejar, pero el ejercicio puede seguir siendo difícil en el **FCL**. A la mayoría de nosotros nos gusta limitar los tentempiés para el deporte, para controlar el peso corporal.
- Todavía es difícil establecer un **FCL** para niños (ver más abajo).


## Lazo cerrado híbrido bien ajustado

Es recomendable establecer primero un **HCL** bien ajustado antes de pensar en pasar al **FCL**.  El éxito con el **FCL** requiere un ajuste muy personalizado e individual de la configuración del usuario, para que **AAPS** pueda dar insulina imitando de cerca TU lazo cerrado híbrido que ya funciona bien.

El **FCL** requiere que el usuario configure y ajuste sus **Automatizaciones**. Sin embargo, el usuario debe entender bien sus necesidades de insulina antes de empezar con el **FCL**. Un error puede quedar oculto por otro error que lo compensa. Esto puede crear un sistema **FCL** inestable y difícil de corregir después. Debes esperar alcanzar con tu FCL un % de TIR comparable al que ves hoy en tu **HCL**.

**El FCL es una configuración DIY (hazlo tú mismo) de Automatizaciones que define el usuario analizando sus datos, tanto de su HCL con éxito como de su experiencia inicial con el FCL, al ajustar la configuración.**

## Insulina rápida (Lyumjev, Fiasp)

El **FCL** requiere insulina rápida.  Así, al comienzo de la subida de **glucosa** por la comida, el **FCL** puede mantener la **glucosa** en rango (según la definición común, por debajo de 180 mg/dl (10 mmol/l)).

Un estudio con modelos (detalles en LINK FullLoop V2/marzo 2023, sección 2.2) puede mostrar con números que las *insulinas más rápidas*

Fuente:

![IEEEControlSystemsMagazine](../images/IEEE_Control_Systems_Society_Logo_RGB.jpg) ![ResearchGate](../images/researchgate-logo-white.svg)



IEEE Control Systems Magazine, ResearchGate [The Artificial Pancreas and Meal Control: An Overview of Postprandial Glucose Regulation in Type 1 Diabetes](https://www.researchgate.net/publication/322866519_The_Artificial_Pancreas_and_Meal_Control_An_Overview_of_Postprandial_Glucose_Regulation_in_Type_1_Diabetes);

- dará picos de **glucosa** mucho más bajos que las insulinas más lentas;
- tolerar un primer bolo de comida retrasado un par de minutos sin picos de altura inaceptable; y
- reducir al mínimo el efecto sobre el pico de **glucosa** de distintas cantidades de carbohidratos (tamaños de comida).

Es poco probable que el **FCL** sea eficaz con una insulina distinta de Lyumjev o Fiasp, salvo que el usuario siga una dieta moderada o baja en carbohidratos.

Sin embargo, Fiasp o Lyumjev pueden causar oclusiones frecuentes de la bomba, incluso después de optimizar cosas como la longitud de la aguja. Es importante vigilar el tiempo de uso de la cánula o del pod. Muchos usuarios ven que 48 horas es el límite de eficacia de la insulina antes de que falle la cánula o el pod.

## Requisitos previos

Se necesitan valores de **glucosa** fiables y una conexión Bluetooth estable para que **AAPS** funcione de forma óptima sin perder un tiempo valioso. El **FCL** requiere un sistema técnicamente estable 24/7:

- el **rendimiento de tu MCG**. Tu MCG no debe producir valores de **glucosa** con saltos, que el **FCL** podría interpretar por error como señal de que empieza una comida. De la misma forma, las calibraciones del **MCG** pueden producir valores con saltos.
- cómo y dónde se hace el suavizado del **MCG**, y qué puede significar para tu ajuste. Sobre todo, cómo se define el delta y que AAPS lo reconozca como señal de que empieza una comida.
- la estabilidad del Bluetooth de la bomba y del MCG;
- evitar (o al menos detectar pronto) la oclusión de la bomba;
- el flujo de datos, las apps de tu teléfono y la diferencia entre los días de uso del sensor;
- tener todos los componentes de **AAPS** bien cargados y las piezas de repuesto cerca; y
- cambiar la cánula (o el pod) siempre con tiempo suficiente para reducir el riesgo de oclusión;

Todo lo anterior variará según los componentes de tu sistema **AAPS** y tu estilo de vida.

## Limitaciones relacionadas con las comidas

- Configurar un **FCL** puede ser más fácil para personas cuya dieta no tiene alimentos con un efecto rápido y alto sobre la **glucosa**, y cuyas comidas no cambian mucho de un día a otro. Esto no significa necesariamente pocos carbohidratos.

- Las dietas ricas en grasa o proteína, o la digestión lenta/gastroparesia, hacen las cosas más fáciles, no más difíciles, para el **FCL**, porque los carbohidratos tardíos cubren bien las inevitables «colas» de acción tardía del bolo necesario cerca del pico.

### Índice glucémico y efecto sobre la glucosa en sangre

La dificultad para el modo **UAM** aumenta cuanto mayor es el 'efecto sobre la glucosa en sangre' ('EBG')

- Empieza con un efecto moderado o bajo y ajusta la configuración de tu **Perfil**. Solo entonces, «prueba» comidas con **EBG** alto.
- Considera un bolo inicial de < 50 % si comes algo con **EBG** muy alto.

1) **Sin EBG**: p. ej., carne fresca, pescado, huevos, bacón, aceites, queso. 2) **EBG bajo**: p. ej., verduras frescas y bayas, setas, frutos secos, leche, yogur, requesón. 3) **EBG moderado**: p. ej., pan/fideos integrales, patatas, arroz salvaje, avena, frutas secas. 4) **EBG alto**: p. ej., pan de trigo, baguette, pan tostado, gofres, galletas, puré de patatas, fideos, arroz. 5) **EBG muy alto**: p. ej., azúcar, bebidas azucaradas, zumos de fruta, copos de maíz, caramelos, dulces, patatas fritas de bolsa, palitos salados.

![Índice glucémico y efecto sobre la glucosa en sangre](../images/fullClosedLoop01.png)

Las comidas más difíciles para el **FCL** son las que tienen solo componentes de **EBG** muy alto y alto (en rojo en la imagen): no solo la **glucosa** sube muy rápido, sino que además hay poca grasa/proteína/fibra que compense la inevitable «cola» de actividad de la insulina que llega al intentar controlar antes la glucosa alta.

Tomar tentempiés y bebidas dulces cargados de carbohidratos de absorción rápida de forma irregular es un problema para el **FCL**.


## Prepararse para la actividad física o el deporte

Al hacer ejercicio o estar activo, con una bomba o con lazo cerrado híbrido se recomienda que el usuario reduzca la **IOB** antes del ejercicio.

Con el **FCL**, el algoritmo está ajustado para detectar **UAM** y dar insulina automáticamente para frenar las subidas de **glucosa**.  Se debe poner un **Objetivo temporal** alto y un **Porcentaje de perfil** más bajo (activos ya alrededor del inicio de la comida) con bastante antelación a cualquier actividad.

Los niveles de ejercicio inusuales o irregulares son difíciles para el **FCL**. Para el ejercicio hay que planificar con antelación (sobre todo si quieres necesitar menos carbohidratos o tentempiés de rescate por hipoglucemias durante el deporte). Después de un día activo, se recomienda poner un **Porcentaje de perfil** más bajo para la noche, una vez digerida la cena: pon en las **Automatizaciones** un objetivo de **glucosa** elevado (>100 mg/dl), con «sin **SMB** con objetivo elevado» seleccionado en los **Ajustes** de **AAPS**.

## Obstáculos en niños

El **FCL** puede tener dificultades extra en niños, por ejemplo:

- Puede que Lyumjev o Fiasp no estén disponibles o no se toleren bien.
- La dosis basal horaria puede ser muy baja, lo que da una base pobre para **SMB** grandes.
- La dieta puede ser rica en componentes dulces. Con el poco volumen de sangre típico de un cuerpo pequeño, hay una fuerte tendencia a picos de **glucosa** muy altos.
- Las hormonas del crecimiento y los cambios marcados de la sensibilidad a la insulina hacen difícil mantener el **FCL** bien ajustado.


## Activar SMB reforzados: seguridad

En el **HCL** hay restricciones de seguridad sobre el tamaño de los bolos que el lazo puede dar automáticamente.

Los usuarios de **FCL** ya no tienen que poner un bolo grande al inicio de la comida. Por eso hay que ampliar los límites de tamaño de los **SMB**, para que el lazo pueda dar **SMB** lo bastante grandes.

Si usas **AAPS** en la versión Master, se recomienda configurar los **Ajustes** de **AAPS** con el tamaño máximo de **SMB** permitido que puede dar el **FCL** (maxUAMSMBBasalMinutes=120, es decir, 2 horas de basal de esa hora del día).

Si tu dosis basal es muy baja, los límites de **SMB** resultantes pueden ser demasiado bajos para controlar bien las subidas de **glucosa** después de comer. Una posible solución es evitar dietas que causen subidas fuertes de **glucosa**. El algoritmo [Auto ISF](#Open-APS-features-auto-isf) (solo disponible en una versión dev con el modo de ingeniería) tiene un ajuste **Extensión de rango máximo de SMB** que amplía el máximo estándar de 2 horas de basal por un factor >1, y permite subir el **Ratio de suministro de SMB** del 50 % por defecto.

**Sigue las instrucciones para que AAPS imite tus bolos mediante un par de SMB**.

Revisa de vez en cuando la pantalla del complemento **APS** (**Configuración → APS → Abrir complemento**) para ver si tus **SMB** pueden ser lo bastante grandes para dar la insulina que el lazo necesita al inicio de las comidas.

Si no, a veces tus esfuerzos de ajuste no servirán de nada.


```{admonition} Boosting **ISF** can become dangerous
:class: danger

Observa y analiza con cuidado los tamaños de los **SMB** poco después de empezar la comida. Ajusta paso a paso y no cambies más de 1 o 2 parámetros a la vez.

La configuración de **AAPS** debe estar lo bastante bien preparada para manejar tu (!) variedad de comidas.
```

## Detección de comidas/tus Automatizaciones para el refuerzo

Para un **FCL** con éxito, el **ISF** es el parámetro de ajuste clave. Al usar **AAPS** Master + **Automatizaciones**, **un cambio de perfil de > 100 % debe activarse automáticamente al detectar la comida** (mediante los deltas de glucosa) y dar un **ISF** más agresivo.

**AAPS** Master permite un **Perfil** temporal de hasta el 130 % en modo **HCL**. Reforzar el **ISF** se hace en 3 pasos:

- Paso 1: revisa el **ISF** del **Perfil** para la hora de esta comida y mira si, por ejemplo, Autosens sugiere un cambio que tenga en cuenta la sensibilidad a la insulina actual del cuerpo (de las últimas horas).
- Paso 2: aplica un factor (1/% del perfil, según lo fijado en la **Automatización**) para reforzar el **ISF**.
- Paso 3: comprueba que el **ISF** sugerido está dentro de los límites de seguridad fijados.

### Plantillas de Automatización para el FCL

Casillas para marcar arriba. Tienes la opción:

- En tu lista de **Automatización**, puedes DESMARCAR la casilla (a la izquierda de cada campo) => Esto desactiva esa **Automatización**. Por ejemplo, puedes hacerlo con todas las **Automatizaciones** de **FCL** del desayuno para usar el **HCL** en los desayunos.

- En cada regla de **Automatización** puedes marcar la casilla Acción del usuario => así las Acciones definidas no se ejecutarán automáticamente cuando se cumplan las Condiciones. En su lugar, la pantalla principal de **AAPS** te avisará cada vez que tu **FCL** fuera a dar automáticamente un **SMB**. Entonces puedes decir «sí» o «no». Esto es muy útil en tu fase de ajuste.

Esta función puede ser útil en ciertas situaciones, como el síndrome del «pie en el suelo», en el que la **glucosa** sube de golpe al levantarse por la mañana, pero el usuario quiere evitar una respuesta totalmente automática de «desayuno empezado».

La sección siguiente explica cómo combinar las Condiciones de las **Automatizaciones** y cómo manejar situaciones en las que **AAPS** debería aumentar (o reducir) la administración de insulina. Como el **ISF** no se puede ajustar directamente, subir el **Porcentaje de perfil** por encima del 100 % hace lo mismo para nuestro objetivo.

### SMB grandes automáticos en la subida de glucosa

La clave para un **FCL** con éxito: **al comienzo de las subidas de glucosa por las comidas, el lazo debe dar SMB automáticos muy grandes lo antes posible** para «alcanzar» la **IOB** necesaria (¡compárala con el bolo que sueles poner para una comida parecida en el **HCL**!)

Para ello, hay que analizar los datos de tu **HCL** para saber qué **deltas** probablemente no están relacionados con comidas y qué deltas sí podrían estarlo.

- Como puedes definir la **Automatización** dentro de una franja horaria fija, solo necesitas analizar esa franja.
- Si haces comidas muy distintas (p. ej., un desayuno con bastantes carbohidratos pero un almuerzo bajo en carbohidratos), puedes crear dos (grupos de) **Automatizaciones** distintos para cada franja horaria.
- Excluye las noches si ves saltos ocasionales por bajadas de compresión.
- Normalmente basta con usar el delta de los últimos 5 minutos.
- Pero también puedes usar uno de los deltas promedio. Comparando los deltas en las condiciones de tus **Automatizaciones**, incluso podrías definir acciones más o menos agresivas según si la **glucosa** sube de forma acelerada o no.

> ( delta – short avg delta )>n   es una expresión que se puede usar para detectar la aceleración y lanzar el primer **SMB** a la primera señal de subida de la **glucosa**. -                                                                             
> Atención: ¡no se puede usar con valores de **MCG** malos o muy suavizados!

Un **MCG** con datos irregulares pone al usuario en una mala situación, porque, para ir sobre seguro, tienes que ser «conservador» al definir qué delta es con seguridad la señal de una comida que empieza. Esto significa:

- el **FCL** pierde más tiempo, con picos de **glucosa** más altos y un %**TIR** más bajo;
- no puedes usar un delta más temprano o más pequeño, que podría lanzar, también sin comida, los **SMB** que en el **FCL** sustituyen al bolo del usuario.

Además, las primeras subidas después de una comida se caracterizan por un **iob bajo**. Con esto en mente, una Automatización (#1) para una cena podría ser así:

![Automatización #1: un delta de 8 o más y una IOB por debajo de 4 por la tarde-noche activan el perfil al 130 % durante 12 min](../images/fullClosedLoop02.png)

Automatización #1

Si se cumplen las Condiciones, **AAPS** daría 1 o 2 **SMB** en los próximos 12 minutos, usando un **ISF** reforzado según el **Porcentaje de perfil** elevado (en el ejemplo, un refuerzo del 30 % de insulinReq). Mientras se cumplan estas Condiciones, la regla de **Automatización** se alarga otros 12 minutos. Una comida baja en carbohidratos puede hacer subir la **glucosa** más despacio. Le vendría bien otra Automatización (#2) que se active con un delta más bajo y dé un refuerzo de insulina más débil.

![Automatización #2: un delta de 5 o más y una IOB por debajo de 5,5 activan el perfil al 115 % durante 12 min](../images/fullClosedLoop03.png)

Probablemente la misma **Automatización** también se activará en comidas con más carbohidratos, una vez pasada la subida fuerte definida en la Automatización #1.

Tienes que «escalonar» estas dos (+ quizá una tercera) **Automatizaciones** para que encajen con lo que ves en tus comidas (variedad) => Fijar tamaños de salto, criterios de **iob** y refuerzos adecuados será un proceso de ajuste por repetición.  Además, si incluyes franjas horarias adecuadas en las Condiciones, puedes hacer fácilmente Automatizaciones distintas para tus diferentes horas de comida (desayuno, almuerzo, cena).

Ten en cuenta que, todavía en la fase de subida (!), hay que bloquear el «exceso» de **iob**, para que los efectos tardíos de la **insulina** (la «**cola**» después de 3–5 horas) no superen la capacidad de frenado del lazo mediante la basal temporal a cero («quitando» basal para reducir el riesgo de hipoglucemia).

Con comidas grandes, **a veces hay una segunda subida**. Para entonces, normalmente el iob también ha bajado un poco, y las Automatizaciones más agresivas vuelven a actuar. (Comprueba que la condición de iob en la Automatización #2 no está demasiado baja para que esto ocurra).

Poco después de los primeros **SMB** llega una **fase equilibrada**, en la que una administración moderada de insulina debería cubrir los carbohidratos adicionales absorbidos. (Excepto en comidas bajas en carbohidratos, en las que el lazo puede ver una subida de **glucosa** demasiado débil y pasar ya ahora a basal temporal a cero).

En esta fase, la pantalla principal de **AAPS** (donde ves cob=0 en el lazo completo con **UAM**) puede pedir más carbohidratos. En el modo **UAM** eso solo significa que podrías hacer una comprobación muy aproximada: ¿es probable que esa cantidad de carbohidratos esté en tu cuerpo, sin absorber, de tu comida de hace aproximadamente una hora (sobre la que no diste información al lazo)?


### Umbral de iob

A menudo, las **Automatizaciones** #1 y/o #2 hacen subir el iob hasta niveles que normalmente bastan para **tus** comidas. Para un ajuste personal, mira en tus datos del **HCL** los valores máximos de iob en comidas bien controladas (a menudo: tu bolo de comida), y a partir de qué valor aparecía al final una hipoglucemia (o necesidad de carbohidratos extra).

Los **umbrales de iob** adecuados para reducir la agresividad de tu lazo pueden no ser los mismos para cada comida. Pero sobre todo en la primera hora después del inicio de una comida, que es muy importante en el modo **UAM**. Será distinto para cada usuario. Algunos usuarios absorben solo unos 30 g/hora, y puede ser posible definir un **iob** útil independiente de la comida exacta.

Para comidas excepcionales, o para bajarlo si después hay deporte, el umbral de **iob** se puede cambiar rápidamente en tu **Automatización**.

La Automatización (#3), «iobTH reached => **SMBs** off» (iobTH alcanzado: SMB desactivados), sirve para terminar (o pausar, hasta que llegue otra ola de subida por carbohidratos) el refuerzo agresivo de **SMB**.

![Automatización #3: una IOB de 5,5 o más sin objetivo temporal activo pone un objetivo temporal de 111 mg/dl](../images/fullClosedLoop04.png)

Automatización #3

Le dice al lazo que por encima de tu **umbral de iob** es mejor no usar más **SMB**

- El ejemplo lo hace poniendo TT=111 (un valor bastante arbitrario; elige un número >100 que reconozcas fácilmente como tu desactivación automática de **SMB**)
- En los [Ajustes → OpenAPS SMB](#Preferences-openaps-smb-settings) de **AAPS**, en general no permitas **SMB** con objetivo elevado.                                                                                                                   
  La insulina necesaria tendrá que darse entonces con mucha más prudencia, a través del cuello de botella de las **TBR**

**Atención: la Automatización #3 solo funciona cuando no hay ningún objetivo temporal (TT) activo.** Así que, si usaste un EatingSoonTT, debe haber terminado para entonces, normalmente 30–40 minutos después del inicio de la comida.

Una forma de hacerlo es crear una Condición de **Automatización** que termine un EatingSoonTT activo con la Condición **iob**>65% * iobTH.
> Formas de usar EatingSoonTT Algunos usuarios ponen un EatingSoonTT (pulsando el botón TT, o de forma automática con un objetivo de **glucosa** más bajo en el **Perfil** si las horas de comida son bastante fijas) aproximadamente una hora o más antes de comer, solo para asegurar una **glucosa** inicial baja y un **iob** algo mayor. Pero, suponiendo que el **FCL** siempre va camino del objetivo, esto puede no aportar mucho, y quizá prefieras definir una **Automatización** que ponga un EatingSoonTT al detectar el inicio de la comida (delta de glucosa, o aceleración = delta > avg delta). Un **TT** bajo es importante en esta fase porque el lazo calcula cada **SMB** con (glucosa prevista menos TT)/sens, así que un TT bajo hace mayor el insulinReq resultante.

Después de los primeros **SMB** reforzados, tu iobTH y la **Automatización** #3 deberían lograr un buen equilibrio: limitar el pico de glucosa, pero sin causar una hipoglucemia después de la comida.

Si tu desayuno tiene muchos más o menos carbohidratos que tu cena media, te puede ayudar definir **Automatizaciones** que se apliquen en cada franja del día y tengan distintos **iobTH** (quizá también distintos deltas y distinto **Porcentaje de perfil**). Tanto tú, al definir tu espectro de comidas y tus ajustes (sobre todo el **iobTH**), como el lazo, al manejar la curva de **glucosa** que se va formando, debéis aceptar ciertas alturas de pico para reducir el riesgo de hipoglucemia hacia el final de la **DIA** de los **SMB**.

### Estancamiento con glucosa alta

Si después de una comida «copiosa» ves un estancamiento largo con **glucosa alta**, la **Automatización** #4 (abajo), «post-meal High», ayuda con la resistencia por ácidos grasos: después de comidas de varios platos, una pizza grande y grasienta o una noche de raclette, la curva de glucosa puede formar dos jorobas o, muy a menudo, una meseta alta y larga.

![Automatización #4: glucosa por encima de 160 mg/dl y Autosens por debajo del 120 % activan el perfil al 120 % durante 15 min](../images/fullClosedLoop05.png)

Automatización #4

![Automatización #5: perfil al 120 % y glucosa por debajo de 150 mg/dl vuelven al perfil normal](../images/fullClosedLoop06.png)

Automatización #5

La Automatización #4, «post-meal High» (glucosa alta después de comer), también sirve en el lazo cerrado híbrido.

Además, se necesita una Automatización de finalización #5, «Stop pmH», para reducir la agresividad de la administración de insulina en cuanto la glucosa empiece a bajar. (Sin embargo, a menudo el lazo limitará igualmente la insulina adicional para prevenir la hipoglucemia, porque la glucosa prevista ya es baja).

## Prevención de hipoglucemias

El problema principal es que el **FCL** con **UAM** (sin entradas de carbohidratos) **no puede saber cuántos g de carbohidratos quedan por absorber** y podrían consumir esa insulina de la «cola» sin que tengas una hipoglucemia.

Con **SMB** reforzados, el **FCL** «alcanzó» lo que antes hacíamos con un bolo de comida. Pero **al final de la actividad de la insulina (la «cola»), la prevención de hipoglucemias puede convertirse en un tema serio**.

Para preparar el **FCL**, el usuario debe mirar con detalle la **evolución del iob en el tiempo** en comidas típicas y valorar **cuándo es demasiado y cómo puedes detectarlo ajustando tus Automatizaciones**. Esto es posible porque tenemos varios «tornillos» de ajuste. Puede ser difícil hacerlo bien

En general, no tiene sentido seguir optimizando los ajustes para un solo tipo de comida. Cuando tengas un ajuste suficientemente bueno, por ejemplo para un tipo de almuerzo que comes a menudo, prueba cómo funciona con otros tipos de comida y cómo llegarías a un «compromiso».

Para prevenir hipoglucemias entre 3 y 5 horas después de la comida, reduce la agresividad antes de que se acumule demasiado iob. Enfoques concretos:

- Haz el **ISF** cada vez más suave ya durante la subida de la glucosa, como en los ejemplos de Automatización #1 y #2.
- Define el umbral de iob a partir del cual **AAPS** se vuelve mucho más prudente (Automatización #3, arriba). Ten en cuenta que este **iob** se puede superar con el último **SMB** antes de que la regla se active, y después aún más con TBR si el lazo ve insulinReq. Los carbohidratos que se van absorbiendo harán bajar el iob.
- El umbral de iob se puede diferenciar según la comida: clonando las automatizaciones, puedes diferenciar fácilmente las franjas de desayuno, almuerzo y cena (o incluso por ubicación, como el comedor de la empresa, o en casa de la suegra, etc.)
> Dentro de estas franjas horarias puedes diferenciar aún más poniendo TT distintos para comidas bajas en carbohidratos frente a carbohidratos rápidos, etc. Así puedes «codificar» distintas clases de comida que pueden darse a esa hora del día y activarlas con **Automatizaciones** ajustadas especialmente para ellas. Probablemente no es necesario, salvo que tus hábitos de comida cambien mucho.

Antes de una comida especial, puedes subir tu umbral de **iob** o hacer otro cambio en cualquiera de tus Automatizaciones en menos de 5 segundos, directamente en tu teléfono con AAPS (**Administrar → Automatización**).

El riesgo de hipoglucemia algunas horas después de la comida depende sobre todo de si la composición de tu comida fue tal que las **colas de insulina de la lucha contra la mayor parte de los carbohidratos** serán **consumidas por «carbohidratos extendidos»** (absorción excesiva o retrasada de carbohidratos, proteína, grasa, fibra).

Con el tiempo aprenderás patrones, ajustarás tus Automatizaciones y quizá incluso cambies un poco tus hábitos de comida. Por ejemplo, puedes disfrutar de un pequeño(!) tentempié tardío de vez en cuando, que puede ayudar a mantener un buen **equilibrio entre la actividad de la insulina y la absorción de carbohidratos** durante **todo** el tiempo de la comida (digestión, absorción). Así la vida es más fácil para tu lazo (y para ti).

### Orden de las Automatizaciones programadas

Pueden surgir problemas cuando las definiciones de las **Automatizaciones** se solapan. Ejemplo: El problema es que delta >8 también es delta >5, es decir, puede haber dos **Automatizaciones** en competencia. ¿Qué hace entonces el lazo? Siempre decide según el orden en que aparecen tus **Automatizaciones** en **Administrar → Automatización**.  Ejemplo: La regla delta > +8 debe ir primero (y lanzar el refuerzo más fuerte si se cumplen todas las condiciones); después viene la comprobación de delta >5 (con una respuesta más suave). Si se hace al revés, la regla delta>8 nunca se aplicaría, porque delta>5 ya se cumple y el caso queda cerrado.
> Consejo para las Automatizaciones: cambiar el orden es muy fácil. En **Administrar → Automatización**, mantén pulsado el asa **=** a la derecha de una regla y arrástrala a otra posición.

Además, es muy fácil y rápido ajustar cualquier condición o acción en cualquier momento, en segundos, directamente en tu teléfono con AAPS; por ejemplo, si vas a una comida muy especial. (Pero no olvides volver a ponerlo normal para el día siguiente).

(full-closed-loop-troubleshooting)=

## Solucionando problemas

### Cómo volver al lazo cerrado híbrido

Puedes desmarcar las casillas de las **Automatizaciones** de tu **FCL**, volver a poner bolos para las comidas y volver a introducir los carbohidratos. Si quitaste los botones **Insulina** o **Calculadora** de tu pantalla principal, vuelve a añadirlos en la configuración de la [barra de Lanzamiento rápido](#quicklaunch) (siempre siguen disponibles en **Tratamientos**, en la navegación inferior). Ten en cuenta que ahora vuelves a ser tú quien pone los bolos de las comidas.

Puede ser buena idea hacer **FCL** solo en las comidas (franjas horarias) en las que las **Automatizaciones** están completamente definidas y marcadas, y desmarcar solo las de las otras comidas en las que prefieras hacer **HCL** (o en las que aún no tengas ninguna definida, en tu periodo de transición).

Por ejemplo, es perfectamente posible, sin pasos extra una vez definidas las **Automatizaciones** para la cena, hacer **FCL** solo en las cenas, mientras el desayuno y el almuerzo se hacen en **HCL** como estás acostumbrado.



### ¿Se siguen cumpliendo los requisitos para el FCL?

- ¿Sigue siendo correcto el **Perfil** básico?
- ¿Ha empeorado la calidad del **MCG**?
- Consulta los requisitos previos (arriba).

### La glucosa sube demasiado

- Las comidas no se detectan lo bastante pronto
    - Comprueba la (in)estabilidad del Bluetooth
    - Comprueba si puedes fijar deltas más pequeños para lanzar el primer **SMB**
    - Prueba con un aperitivo o una sopa un par de minutos antes de empezar la comida
- Los SMB son demasiado débiles
    - Comprueba el orden de las **Automatizaciones** (p. ej.: delta grande antes que delta pequeño)
    - Comprueba (en tiempo real) en la pantalla del complemento **APS** si la basal horaria del perfil y los minutos fijados (máx. 120) limitan el tamaño de SMB permitido
    - Comprueba (en tiempo real) en la pantalla del complemento **APS** si hay que subir el % del perfil
- Si todos tus ajustes están al límite, quizá tengas que aceptar la subida temporal o ajustar tu dieta.
> Si estás listo para probar una versión dev, [Auto ISF](#Open-APS-features-auto-isf) también permite SMB aún más grandes. Algunos usuarios también usan un pequeño prebolo en su «FCL». Sin embargo, esto interfiere con la curva de glucosa y, por tanto, con la detección de subidas y los **SMB** lanzados, así que no es fácil de aplicar con un beneficio general claro.
- Una observación importante de los usuarios piloto fue que la forma en que tus curvas de glucosa e iob llegan al inicio de la comida importa mucho para el pico que tendrás por los carbohidratos: Bajar (por ejemplo, hacia un EatingSoonTT establecido), acumular algo de iob y curvarse ya hacia una aceleración positiva fuerte parece muy útil para mantener los picos bajos.

### La glucosa baja demasiado

- Las comidas se detectan por error
    - Comprueba si puedes fijar deltas más grandes para lanzar el primer **SMB**
    - Marca «Acción del usuario» en la Automatización correspondiente; así, en el futuro, podrás decidir en el momento bloquear la Automatización si no tiene que ver con una comida
    - Para evitar que los tentempiés lancen **SMB** como si fueran una comida, pon un TT>100 al picar algo (como harías de todas formas en el deporte y con tentempiés contra la hipoglucemia)
- En total, los SMB dan demasiada insulina
    - Comprueba (en tiempo real) en la pantalla del complemento **APS** si hay que reducir la **Extensión de rango máximo de SMB**
    - Comprueba (en tiempo real) en la pantalla del complemento **APS** si hay que reducir el **Porcentaje de perfil**
    - Probablemente se puede reducir el Ratio de suministro de SMB. Ten en cuenta que en este caso afecta a todos los **SMB** (todas las franjas horarias),
- Problemas con la «cola» de insulina después de las comidas
    - Quizá necesites tomar un tentempié (si ves una predicción de hipoglucemia) o pastillas de glucosa (si ya estás en zona de hipoglucemia). Pero ten en cuenta que los carbohidratos necesarios que el lazo te pida en algún momento son muy probablemente exagerados, porque el lazo no tiene ninguna información sobre cuántos carbohidratos comiste y cuántos esperan todavía a ser absorbidos (tú sí puedes estimar cuántos más, incluidos los de grasas y proteínas).
    - Sería útil saber si el problema empieza sobre todo ya en la fase de subida de la glucosa. Entonces, poner un iobTH más bajo puede ser una solución fácil.
    - Si a menudo necesitas carbohidratos adicionales, apunta cuántos gramos necesitaste (sin contar lo que al final tomaste de más y requirió insulina extra otra vez).  Después usa el valor IC de tu perfil para estimar cuánta insulina menos debería haber dado el **SMB**, y usa esa información en tu ajuste (del **Porcentaje de perfil** en las **Automatizaciones**, o quizá también de tu iobTH). Esto puede referirse a los **SMB** dados cuando la glucosa estaba alta, o también a los **SMB** durante la subida de la **glucosa**.
    - Puede que simplemente tengas que aceptar picos de **glucosa** más altos para no bajar demasiado. O cambia tu dieta a algo con menos carbohidratos y más proteínas y grasas.


### Más información

Mantente en contacto con otros usuarios de **FCL**.

Debate sobre el lazo cerrado completo con Automatizaciones:

- Inglés:   [Canal de Discord](https://discord.gg/ChXj8BaKwA)

- Alemán:  [German Looper Community](https://de.loopercommunity.org/t/ueber-die-kategorie-full-loop/10107)
