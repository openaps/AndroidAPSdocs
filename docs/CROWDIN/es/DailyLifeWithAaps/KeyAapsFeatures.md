# Funciones clave de AAPS

## Modo del lazo

El estado del lazo se muestra en la pantalla principal con uno de los iconos de abajo.

**AAPS** ofrece varios modos de lazo, como Lazo cerrado (1), Suspensión por glucosa baja (LGS - 2) y Lazo abierto (3).

Mira [Pantallas de AAPS > La pantalla principal > Estado del lazo](#AapsScreens-loop-status) para saber cómo elegir el modo del lazo y qué significan los otros iconos de la imagen (4 a 6).

![Estado del lazo](../images/Home2020_LoopStatus.png)

(KeyAapsFeatures-OpenLoop)=

### Lazo abierto

**AAPS** evalúa de forma continua todos los datos disponibles (IOB, COB, glucosa...) y hace sugerencias de tratamiento (tasas basales temporales) sobre cómo ajustar tu terapia si hace falta.

Las sugerencias no se ejecutan de forma automática (como en lazo cerrado). El usuario tiene que aplicar las sugerencias a mano en la bomba (si usa la bomba virtual) o con un botón si **AAPS** está conectado a una bomba real.

Cuando **AAPS** tiene una sugerencia, aparece una entrada **Lazo** con un distintivo en la navegación inferior de la pantalla principal. Púlsala para leer la sugerencia («Aceptar nueva basal temporal») con su tasa, duración y motivo, y luego pulsa **Realizar** para aplicarla:

![Sugerencia del lazo abierto con el botón Realizar](../images/screens/loop_tab.png)

Una sugerencia solo es válida durante unos minutos. Si tiene más de unos 9 minutos, o si mientras tanto el lazo se ha suspendido o la bomba se ha desconectado, **AAPS** la rechaza y no se envía nada a la bomba (*«Esta sugerencia es demasiado antigua. No se ha enviado nada a la bomba. Espera a la siguiente».*). Espera a la siguiente sugerencia.

Esta opción sirve para conocer cómo funciona **AAPS** o si usas una bomba no compatible. Estarás en Lazo abierto, elijas lo que elijas aquí, hasta el final del **[Objetivo 5](#objectives-objective5)**.

(KeyAapsFeatures-LGS)=

### Suspensión por glucosa baja (LGS)

En este modo, [maxIOB](#Open-APS-features-maximum-total-iob-openaps-cant-go-over) se pone a cero.

Esto significa que si la glucosa baja, **AAPS** puede reducir la basal por ti. Pero si la glucosa sube, no se hará ninguna corrección automática. Tus tasas basales se quedan como están definidas en tu **Perfil** actual. Solo si la IOB es negativa (por una Suspensión por glucosa baja anterior) se administrará insulina adicional para bajar la **glucosa**.

Este modo está disponible a partir del **[Objetivo 6](#objectives-objective6)**.

Además de elegirlo tú, **AAPS** también puede pasar a este modo por sí mismo: mientras trabajas en el **[Objetivo 6](#objectives-objective6)**, y siempre que detecta lecturas de glucosa duplicadas (mira [Señal de aviso de glucosa](#aaps-screens-bg-warning-sign)).

(KeyAapsFeatures-ClosedLoop)=

### Lazo cerrado

**AAPS** evalúa de forma continua todos los datos disponibles (IOB, COB, glucosa...) y ajusta el tratamiento de forma automática si hace falta (*es decir,* sin que tengas que intervenir) para llegar al [rango o valor objetivo](#profile-glucose-targets) configurado (administración de bolos, tasa basal temporal, corte de insulina para evitar una hipoglucemia, etc.).

El Lazo cerrado funciona dentro de muchos límites de seguridad, que se pueden configurar de forma individual.

El Lazo cerrado solo es posible si estás en el **[Objetivo 7](#objectives-objective7)** o superior y usas una bomba compatible.

(autosens)= (Open-APS-features-autosens)=

## Autosens

- Autosens es un algoritmo que analiza las desviaciones de la glucosa (positivas/negativas/neutras).
- Intenta averiguar cuánta sensibilidad o resistencia a la insulina tienes según estas desviaciones.
- La implementación de oref en **OpenAPS** usa una combinación de datos de 24 y de 8 horas. Usa el que sea más sensible.
- Si vienes de oref1, probablemente notarás que el sistema reacciona menos a los cambios, porque la sensibilidad se calcula con 24 u 8 horas de datos.
- Cambiar la cánula o cambiar el perfil pone el ratio de Autosens de nuevo en 100 % (un cambio de perfil por porcentaje con duración no reinicia Autosens).
- Autosens ajusta tu basal y tu ISF (es decir, imita lo que hace un cambio de perfil).
- Si comes carbohidratos de forma continua durante mucho tiempo, Autosens será menos eficaz durante ese tiempo, porque los carbohidratos se excluyen del cálculo del delta de **glucosa**.
- Las desviaciones se convierten en un **ratio de sensibilidad** (un porcentaje): un ratio por debajo del 100 % significa que AAPS cree que eres más sensible a la insulina de lo que supone tu **Perfil** (por eso baja la basal efectiva y sube el valor del ISF); un ratio por encima del 100 % significa que eres más resistente (por eso sube la basal y baja el valor del ISF).
- Por defecto, este ratio se mantiene entre 0,7 (70 %, más sensible) y 1,2 (120 %, más resistente), para que unos datos poco habituales no alejen demasiado tu dosificación de tu **Perfil**. Estos límites se pueden ajustar en los ajustes avanzados de la detección de sensibilidad.
- Autosens y [Autotune](../AdvancedOptions/Autotune.md) tratan el mismo problema en escalas de tiempo diferentes: Autosens ajusta tu dosificación *en vivo* minuto a minuto según las últimas 8–24 h, mientras que Autotune reescribe poco a poco tu *Perfil* según semanas de historial. Usar los dos es normal y esperado: se complementan, no se duplican.

*Para la explicación técnica completa del algoritmo Autosens, mira la [documentación de Autosens de OpenAPS](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autosens.html).*

(Open-APS-features-super-micro-bolus-smb)=

## Super Micro Bolo (SMB)

**SMB**, forma corta de **Super micro bolus** (súper micro bolo), es una función de OpenAPS que existe desde 2018, dentro del algoritmo Oref1. A diferencia de **AMA**, **SMB** no usa sobre todo tasas basales temporales para controlar la glucosa, sino **pequeños súper micro bolos**. En situaciones en las que **AMA** añadiría 1,0 IU de insulina con una tasa basal temporal, **SMB** administra varios súper micro bolos en pequeños pasos a **intervalos de 5 minutos**, por ejemplo 0,4 IU, 0,3 IU, 0,2 IU y 0,1 IU. Al mismo tiempo (por seguridad), la tasa basal actual se pone a 0 IU/h durante un tiempo para evitar una sobredosis (**«zero-temping»**: basal temporal a cero). Así el sistema puede ajustar la glucosa más rápido que con el aumento de la tasa basal temporal de **AMA**.

Gracias a SMB, en comidas con solo carbohidratos «lentos» puede bastar con indicar al sistema la cantidad de carbohidratos prevista y dejar el resto a **AAPS**. Pero esto puede causar picos más altos después de comer, porque no es posible poner un bolo antes de la comida (prebolo). O puedes poner, si hace falta como prebolo, un **bolo inicial** que cubra **solo una parte** de los carbohidratos (por ejemplo, 2/3 de la cantidad estimada) y dejar que **SMB** administre el resto de la insulina.

![SMB en el gráfico principal](../images/SMBs.png)

Los SMB se muestran en el [gráfico de IOB](#aaps-screens-iob) con triángulos azules. [Mantén pulsado](#aaps-screens-graph-press-and-hold) el gráfico sobre un triángulo para ver cuánta insulina se administró, o usa el [Historial de tratamientos](#aaps-screens-treatments).

Las funciones de **SMB** tienen algunos mecanismos de seguridad:

1. **Dosis máxima de un solo SMB**  
  La dosis máxima de un solo SMB solo puede ser el valor más pequeño de:
  
        * el valor que corresponde a la tasa basal actual (ajustada por Autosens) durante el tiempo configurado en «Minutos máximos de basal para limitar el SMB», por ejemplo la cantidad de basal de los próximos 30 minutos, o
        * la mitad de la insulina necesaria en este momento, o
        * la parte restante de tu valor de maxIOB en los ajustes.
      

2. **Tasas basales temporales bajas**  
  Con **SMB** se activan más a menudo tasas basales temporales bajas («low temps») o tasas basales temporales de 0 U/h («zero-temps»). Esto es así por seguridad y no tiene efectos negativos si el **Perfil** está bien configurado. En el gráfico principal, la curva de IOB (línea fina amarilla) es más útil que el recorrido de las tasas basales temporales.

3. **Comidas no anunciadas**  
  Cálculos adicionales para predecir la evolución de la glucosa, por ejemplo con **UAM** (comidas no anunciadas). Aunque no introduzcas carbohidratos a mano, **UAM** puede detectar de forma automática una subida importante de la glucosa por comidas, adrenalina u otras causas, e intenta corregirla con **SMB**. Para estar en el lado seguro, esto también funciona al revés y puede detener el SMB antes si se produce una caída inesperadamente rápida en la glucosa. Es por eso que UAM siempre debe estar activo en SMB.

SMB no decide por sí mismo que hace falta insulina: usa las mismas predicciones combinadas de glucosa (glucosa final, basal temporal a cero, COB, UAM) descritas en [cómo AAPS convierte las predicciones en una decisión de dosis](#aaps-screens-how-predictions-become-a-dosing-decision). SMB y la basal temporal a cero son solo las dos herramientas que AAPS usa para aplicar esa decisión.

**Debes haber empezado el [objetivo 9](#objectives-objective9) para usar SMB.**

Mira también la [documentación de oref1/SMB de OpenAPS](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/oref1.html#understanding-super-micro-bolus-smb) para la explicación técnica completa, o la [información de Tim sobre SMB](https://www.diabettech.com/artificial-pancreas/understanding-smb-and-oref1/), un texto de la comunidad.

Los ajustes de OpenAPS SMB se describen más abajo.

(Open-APS-features-max-u-h-a-temp-basal-can-be-set-to)=

### Tasa basal máxima

Este ajuste de seguridad fija la tasa basal temporal máxima que puede administrar la bomba de insulina. También se conoce como **max-basal**.

El valor se mide en unidades por hora (U/h). Se recomienda poner un valor razonable. Una buena recomendación para este parámetro es:

**MAX-BASAL = TASA BASAL MÁS ALTA x 4**

Por ejemplo, si la tasa basal más alta de tu perfil es 0,5 U/h, puedes multiplicarla por 4 y obtener un valor de 2 U/h.

**AAPS** limita este valor con un «límite estricto» según [Ajustes > Seguridad > Edad del paciente](#preferences-patient-type). Los límites estrictos son:

- Menor de edad: 2
- Adolescente: 5
- Adulto: 10
- Adulto resistente a la insulina: 12
- Embarazada: 25

*Mira también la [tabla de límites fijos](#Open-APS-features-overview-of-hard-coded-limits).*

(Open-APS-features-maximum-total-iob-openaps-cant-go-over)=

### IOB total máxima que OpenAPS no puede superar

Este valor fija la **insulina activa** máxima (IOB de basal y de bolo) que **AAPS** no superará mientras funciona en lazo cerrado. También se conoce como **maxIOB**.

Si la IOB actual (por ejemplo, después de un bolo de comida) está por encima del valor definido, el lazo deja de administrar insulina hasta que la IOB baje del límite.

Un buen punto de partida para este parámetro es:

      maxIOB = bolo de comida medio + 3x basal diaria máxima
    

Ten cuidado y paciencia al ajustar tu **max-IOB**. Es diferente para cada persona y también puede depender de la dosis diaria total media (TDD).

**AAPS** limita este valor con un «límite estricto» según [Ajustes > Seguridad > Edad del paciente](#preferences-patient-type). Los límites estrictos son:

- Menor de edad: 7
- Adolescente: 13
- Adulto: 22
- Adulto resistente a la insulina: 30
- Embarazada: 70

*Mira también la [tabla de límites fijos](#Open-APS-features-overview-of-hard-coded-limits).*

Nota: Cuando usas **SMB**, el **max-IOB** se calcula de otra forma que en AMA. En **AMA**, maxIOB es un parámetro de seguridad para la **IOB** basal, mientras que en modo SMB también incluye la IOB de bolo.

### Usar sensibilidad dinámica

Esta es la función [DynamicISF](../DailyLifeWithAaps/DynamicISF.md). Al activarla, aparecen nuevos ajustes. Los ajustes se explican en la página [DynamicISF](#dyn-isf-preferences).

### Usar Autosens

Esta es la función [Autosens](#Open-APS-features-autosens). Si usas DynamicISF, no puedes usar Autosens, porque son dos algoritmos diferentes que cambian la misma variable (la sensibilidad).

Autosens analiza las desviaciones de la glucosa (positivas/negativas/neutras). Intenta averiguar cuánta sensibilidad o resistencia a la insulina tienes según estas desviaciones, y ajusta la tasa basal y el ISF según ellas.

Al activarla, aparecen nuevos ajustes.

#### La sensibilidad eleva el objetivo

Si esta opción está activada, la detección de sensibilidad (Autosens) puede subir el objetivo cuando detecta sensibilidad (por debajo del 100 %). En este caso, tu objetivo sube según el porcentaje de la sensibilidad detectada.

Si el objetivo cambia por la detección de sensibilidad, se muestra con fondo verde en tu pantalla principal.

![Objetivo modificado por Autosens](../images/Home2020_DynamicTargetAdjustment.png)

Este ajuste está disponible cuando «Usar sensibilidad dinámica» o «Usar Autosens» está activado.

#### La resistencia baja el objetivo

Si esta opción está activada, la detección de sensibilidad (Autosens) puede bajar el objetivo cuando detecta resistencia (por encima del 100 %). En este caso, tu objetivo baja según el porcentaje de la resistencia detectada.

Este ajuste está disponible cuando «Usar sensibilidad dinámica» o «Usar Autosens» está activado.

### Habilitar SMB

Activa esta opción para usar la función SMB. Si está desactivada, no se administrarán **SMB**.

Al activarla, aparecen nuevos ajustes.

(Open-APS-features-enable-smb-with-high-temp-targets)=

#### Habilitar SMB con objetivo temporal elevado

Si este ajuste está activado, se seguirán administrando **SMB** aunque el usuario haya elegido un **Objetivo temporal** elevado (definido como 100 mg/dl o 5,6 mmol/l o más, sin importar el objetivo del **Perfil**). Ten cuidado al activarlo: los **SMB** pueden volverse demasiado agresivos si tus ajustes no están bien afinados o si tu **Perfil** cambia a menudo (por ejemplo, en menores).

Si este ajuste está desactivado, un **Objetivo temporal** elevado desactiva los **SMB**. Por ejemplo, si esta opción está desactivada, los **SMB** se pueden desactivar poniendo un **Objetivo temporal** de 100 mg/dl o 5,6 mmol/l o más. Esta opción también desactiva los **SMB**, sin importar qué otra condición intente activar SMB, salvo un **Objetivo temporal** bajo como **Comiendo Pronto** (o cualquier **Objetivo temporal** de 98 mg/dl o 5,4 mmol/l o menos), que todavía puede administrar **SMB** para llevar la **glucosa** hacia el objetivo.

Este ajuste no activa los **SMB** por sí solo. Con un objetivo temporal elevado, solo se administra un **SMB** si otro de los ajustes de abajo (por ejemplo **Habilitar SMB siempre** o **Habilitar SMB con COB**) también lo permite.

(Open-APS-features-enable-smb-always)=

#### Habilitar SMB siempre

Si este ajuste está activado, SMB está siempre activo (sin depender de COB, objetivos temporales o bolos). Si este ajuste está activado, los demás ajustes de activación de abajo no tienen efecto. Pero si **Habilitar SMB con objetivo temporal elevado** está desactivado y se pone un objetivo temporal elevado, los SMB se desactivan.

Este ajuste solo está disponible si **AAPS** detecta que usas una [fuente de glucosa fiable](#GettingStarted-TrustedBGSource) con filtrado avanzado. FreeStyle Libre 1 no se considera una fuente fiable, porque si el sensor falla puede repetir datos de glucosa antiguos sin fin.

Unos datos con ruido podrían hacer creer a **AAPS** que la glucosa sube muy rápido, y así se administrarían SMB innecesarios. Para más información sobre el ruido y el suavizado de datos, mira [aquí](../CompatibleCgms/SmoothingBloodGlucoseData.md).

#### Habilitar SMB con COB

Si este ajuste está activado, SMB está activo cuando los COB son mayores que 0.

Este ajuste no se ve si «Habilitar SMB siempre» está activado.

#### Habilitar SMB con objetivo temporal bajo

Si este ajuste está activado, SMB está activo cuando hay un objetivo temporal (comiendo pronto, actividad, hipoglucemia, personalizado). Si este ajuste está activado pero **Habilitar SMB con objetivo temporal elevado** está desactivado, SMB estará activo con un objetivo temporal bajo (98 mg/dl o 5,4 mmol/l o menos), pero desactivado con un objetivo temporal elevado.

Este ajuste no se ve si «Habilitar SMB siempre» está activado.

#### Habilitar SMB después de comer

Si está activado, SMB está activo durante 6 h después de anunciar carbohidratos, aunque los COB hayan llegado a 0.

Por seguridad, este ajuste solo está disponible si **AAPS** detecta que usas una fuente de glucosa fiable. No se ve si «Habilitar SMB siempre» está activado.

Este ajuste solo está disponible si **AAPS** detecta que usas una [fuente de glucosa fiable,](#GettingStarted-TrustedBGSource) con filtrado avanzado. FreeStyle Libre 1 no se considera una fuente fiable, porque si el sensor falla puede repetir datos de glucosa antiguos sin fin.

Unos datos con ruido podrían hacer creer a **AAPS** que la glucosa sube muy rápido, y así se administrarían SMB innecesarios. Para más información sobre el ruido y el suavizado de datos, mira [aquí](../CompatibleCgms/SmoothingBloodGlucoseData.md).  
Este ajuste no se ve si «Habilitar SMB siempre» está activado.

#### Intervalo de SMB

Esta función limita la frecuencia de los SMB. Este valor fija el tiempo mínimo entre dos SMB. Ten en cuenta que el lazo se ejecuta cada vez que llega un valor de glucosa (normalmente cada 5 minutos). Resta 2 minutos para dar al lazo tiempo extra para terminar. Por ejemplo, si quieres un SMB en cada ejecución del lazo, pon 3 minutos.

Valor predeterminado: 3 min.

(Open-APS-features-max-minutes-of-basal-to-limit-smb-to)=

#### Minutos máximos de basal para limitar el SMB

Este es un ajuste de seguridad importante. Este valor fija cuánto SMB se puede administrar según la cantidad de insulina basal en un tiempo dado, cuando está cubierta por COB.

Un valor más alto permite que SMB sea más agresivo. Empieza con el valor por defecto de 30 minutos. Con algo de experiencia, sube el valor en pasos de 15 minutos y observa los efectos durante varias comidas.

Se recomienda no poner un valor mayor de 90 minutos, porque el algoritmo podría llegar a no poder compensar una bajada de glucosa con una basal de 0 U/h («zero-temp»). También deberías configurar alarmas, sobre todo si todavía estás probando ajustes nuevos, para que te avisen mucho antes de una hipoglucemia.

Valor predeterminado: 30 min.

#### Minutos máximos de basal para limitar los SMB ante UAM

Este ajuste permite ajustar la fuerza de SMB durante UAM, cuando ya no quedan carbohidratos.

Valor por defecto: el mismo que **Minutos máximos de basal para limitar el SMB**.

Este ajuste solo se ve si «Habilitar SMB» y «Habilitar UAM» están activados.

(enable-uam)=

### Habilitar UAM

Con esta opción habilitada, el algoritmo SMB puede reconocer las comidas no anunciadas. Esto ayuda si olvidas indicar tus carbohidratos a **AAPS**, si calculas mal tus carbohidratos y la cantidad introducida es incorrecta, o si una comida con mucha grasa y proteína dura más de lo esperado. Sin ningún registro de carbohidratos, UAM puede reconocer una subida rápida de la glucosa causada por carbohidratos, adrenalina, etc., e intenta corregirla con SMB. También funciona al revés: si la glucosa baja rápido, puede detener los SMB antes.

**Por eso, UAM siempre debe estar activado cuando usas SMB.**

(key-aaps-features-minimal-carbs-required-for-suggestion)=

### Umbral de carbohidratos requeridos

Cantidad mínima de gramos de carbohidratos para mostrar una alerta de sugerencia de carbohidratos. Se te sugerirá comer carbohidratos adicionales cuando el algoritmo de referencia detecte que hacen falta. En este caso recibirás una notificación que puedes posponer 5, 15 o 30 minutos.

Las notificaciones de carbohidratos requeridos se pueden enviar a Nightscout si quieres. En ese caso, se mostrará y se difundirá un aviso.

En cualquier caso, los carbohidratos necesarios se muestran en la sección COB de tu pantalla principal.

![Carbohidratos necesarios en la pantalla principal](../images/main/main_screen_carbs_required.png)

### Ajustes avanzados

Para la referencia completa de parámetros (también los ajustes que no se explican aquí), mira la [documentación de OpenAPS sobre preferencias y ajustes de seguridad](https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/preferences-and-safety-settings.html).

**Usar siempre el delta promedio corto en lugar de los datos simples** Si activas esta función, **AAPS** usa el delta promedio corto de la glucosa de los últimos 15 minutos, que normalmente es la media de los tres últimos valores. Esto ayuda a **AAPS** a ser más estable con fuentes de datos con ruido, como xDrip y Libre.

**Multiplicador de seguridad diaria máxima** Este es un límite de seguridad importante. El valor predeterminado (que es poco probable que sea necesario ajustar) es 3. Esto significa que **AAPS** nunca podrá poner una tasa basal temporal mayor que 3 veces la tasa basal horaria más alta programada en la bomba y/o el perfil. Ejemplo: si tu tasa basal más alta es 1,0 U/h y el multiplicador de seguridad diaria máxima es 3, **AAPS** puede poner una tasa basal temporal máxima de 3,0 U/h (= 3 x 1,0 U/h).

Valor por defecto: 3 (no lo cambies salvo que de verdad lo necesites y sepas lo que haces)

**Multiplicador de seguridad basal actual** Este es otro límite de seguridad importante. El valor predeterminado (que también es poco probable que necesite ajustar) es 4. Esto significa que **AAPS** nunca podrá poner una tasa basal temporal mayor que 4 veces la tasa basal horaria actual programada en la bomba y/o el perfil.

Valor por defecto: 4 (no lo cambies salvo que de verdad lo necesites y sepas lo que haces)

* * *

(Open-APS-features-auto-isf)=

## Auto ISF

**Auto ISF** es un algoritmo **experimental** para usuarios avanzados. Se basa en OpenAPS SMB y añade reglas que hacen el factor de sensibilidad a la insulina (ISF) más fuerte o más débil según cómo se comporta tu glucosa.

Es una función de desarrollo: solo se puede activar en una [compilación dev](../AdvancedOptions/DevBranch.md) con el **Modo de ingeniería** activado. En una versión normal (release) queda siempre desactivado y por eso no aparece en **Configuración → APS**. Completar los [Objetivos](../SettingUpAaps/CompletingTheObjectives.md) no lo desbloquea.

Después de elegirlo, sus **Ajustes** contienen los ajustes de OpenAPS SMB más un grupo **Ajustes de AutoISF**:

- **Habilitar AutoISF**: activa los ajustes del ISF. Sin él, el algoritmo funciona como OpenAPS SMB.
- **AutoISF mínimo** y **AutoISF máximo**: cuánto puede debilitarse y fortalecerse el ISF, igual que con los límites de Autosens. Con el valor por defecto 1,0, el efecto está desactivado.
- **Pesos**: cada uno controla una regla, y el valor por defecto 0,0 desactiva la regla. 
  - mientras la glucosa **se acelera**, el ISF se fortalece (más insulina);
  - mientras la glucosa **se frena**, el ISF se debilita (menos insulina);
  - mientras la glucosa está **por debajo del objetivo**, el ISF se debilita;
  - mientras la glucosa está **por encima del objetivo**, el ISF se fortalece;
  - un peso **posprandial** y un peso de **duración** actúan después de las comidas y cuando la glucosa se mantiene alta mucho tiempo.
- **Ratio de suministro de SMB** (con un mínimo, un máximo y un rango de glucosa): qué parte de la insulina necesaria se puede administrar como SMB.
- **Extensión de rango máximo de SMB**: por qué factor se puede superar el límite normal del tamaño de SMB ([minutos máximos de basal](#Open-APS-features-max-minutes-of-basal-to-limit-smb-to), normalmente 120 minutos). El valor por defecto 1 no cambia nada; se puede llegar hasta 5. Sube este valor experimental poco a poco y con cuidado.
- **Porcentaje de umbral de IOB**: el porcentaje de max IOB por encima del cual se desactivan los SMB.

    {admonition} Solo para usuarios con experiencia
    :class: danger
    Con sus valores por defecto, Auto ISF no cambia nada. Cada valor que subes hace a **AAPS** más agresivo. Cambia un solo valor cada vez, en pasos pequeños, y observa el resultado durante varios días. Ten muchísimo cuidado con un **AutoISF máximo** por encima de 2,5.

(Open-APS-features-advanced-meal-assist-ama)=

## Asistente de comida avanzada (AMA)

AMA, forma corta de «advanced meal assist» (asistente avanzado de comidas), es una función de OpenAPS de 2017 (oref0). OpenAPS Advanced Meal Assist (AMA) permite al sistema subir la basal temporal más rápido después de un bolo de comida, si introduces los carbohidratos de forma fiable.

Puedes encontrar más información en la [documentación de OpenAPS](https://newer-docs.readthedocs.io/en/latest/docs/walkthrough/phase-4/advanced-features.html#advanced-meal-assist-or-ama).

### Tasa basal máxima (OpenAPS "max-basal")

Este ajuste de seguridad impide que **AAPS** pueda dar una tasa basal peligrosamente alta, y limita la tasa basal temporal a x U/h. Se recomienda poner un valor razonable. Una buena recomendación es tomar la tasa basal más alta de tu perfil y multiplicarla por 4, y como mínimo por 3. Por ejemplo, si la tasa basal más alta de tu perfil es 1,0 U/h, puedes multiplicarla por 4 para obtener un valor de 4 U/h y poner 4 como tu parámetro de seguridad.

No puedes elegir cualquier valor: por seguridad hay un «límite estricto», que depende de la edad del paciente. El «límite estricto» de maxIOB es más bajo en AMA que en SMB. Para los niños, el valor es el más bajo mientras que para los adultos resistentes a la insulina, es el más grande.

Los parámetros fijos en **AAPS** son:

- Menor de edad: 2
- Adolescente: 5
- Adulto: 10
- Adulto resistente a la insulina: 12
- Embarazada: 25

*Mira también la [tabla de límites fijos](#Open-APS-features-overview-of-hard-coded-limits).*

### IOB basal máxima que OpenAPS puede administrar \[U\] (OpenAPS "max-iob")

Este parámetro limita la IOB basal máxima con la que **AAPS** todavía funciona. Si la IOB es más alta, deja de administrar insulina basal adicional hasta que la IOB basal esté por debajo del límite.

El valor por defecto es 2, pero deberías subir este parámetro poco a poco para ver cuánto te afecta y qué valor te va mejor. Es diferente para distintas personas y también depende de la dosis diaria total (TDD). Por razones de seguridad, hay un límite, que depende de la edad del paciente. El «límite estricto» de maxIOB es más bajo en AMA que en SMB.

- Menor de edad: 3
- Adolescente: 5
- Adulto: 7
- Adulto resistente a la insulina: 12
- Embarazada: 25

*Mira también la [tabla de límites fijos](#Open-APS-features-overview-of-hard-coded-limits).*

### Usar Autosens (AMA)

Aquí puedes elegir si quieres usar o no la [detección de sensibilidad](../DailyLifeWithAaps/SensitivityDetectionAndCob.md) Autosens.

### Ajustar objetivos con Autosens

Si tienes esta opción activada, Autosens también puede ajustar los objetivos (además de la basal y el ISF). Así **AAPS** puede funcionar de forma más o menos «agresiva». Así es posible alcanzar antes el objetivo real.

### Ajustes avanzados

- ¡Normalmente no tienes que cambiar los ajustes de este diálogo!
- Si aun así quieres cambiarlos, asegúrate de entender lo que haces: mira la referencia completa de parámetros en la [documentación de OpenAPS sobre preferencias y ajustes de seguridad](https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/preferences-and-safety-settings.html).

**Usar siempre el delta promedio corto en lugar de los datos simples** Si activas esta función, **AAPS** usa el delta promedio corto de la glucosa de los últimos 15 minutos, que normalmente es la media de los tres últimos valores. Esto ayuda a **AAPS** a funcionar de forma más estable con fuentes de datos con ruido, como xDrip y Libre.

**Multiplicador de seguridad diaria máxima** Este es un límite de seguridad importante. El valor predeterminado (que es poco probable que sea necesario ajustar) es 3. Esto significa que **AAPS** nunca podrá poner una tasa basal temporal mayor que 3 veces la tasa basal horaria más alta programada en la bomba. Ejemplo: si tu tasa basal más alta es 1,0 U/h y el multiplicador de seguridad diaria máxima es 3, **AAPS** puede poner una tasa basal temporal máxima de 3,0 U/h (= 3 x 1,0 U/h).

Valor por defecto: 3 (no lo cambies salvo que de verdad lo necesites y sepas lo que haces)

**Multiplicador de seguridad basal actual** Este es otro límite de seguridad importante. El valor predeterminado (que también es poco probable que necesite ajustar) es 4. Esto significa que **AAPS** nunca podrá poner una tasa basal temporal mayor que 4 veces la tasa basal horaria actual programada en la bomba.

Valor por defecto: 4 (no lo cambies salvo que de verdad lo necesites y sepas lo que haces)

**Divisor de DIA para la espera del bolo** La función «espera del bolo» (bolus snooze) actúa después de un bolo de comida. **AAPS** no pone tasas basales temporales bajas después de una comida durante el tiempo del DIA dividido por el parámetro de «espera del bolo». El valor predeterminado es 2. Eso significa que, con un DIA de 5 h, la «espera del bolo» dura 5 h : 2 = 2,5 h.

Valor predeterminado: 2

* * *

(Open-APS-features-overview-of-hard-coded-limits)=

## Tabla de límites fijos

|            | Menor de edad | Adolescente | Adulto | Adulto resistente a la insulina | Embarazada |
| ---------- | ------------- | ----------- | ------ | ------------------------------- | ---------- |
| MAXBOLUS   | 5             | 10          | 17     | 25                              | 60         |
| MINDIA     | 5             | 5           | 5      | 5                               | 5          |
| MAXDIA     | 9             | 9           | 9      | 9                               | 10         |
| MINIC      | 2             | 2           | 2      | 2                               | 0,3        |
| MAXIC      | 100           | 100         | 100    | 100                             | 100        |
| MAXIOB_AMA | 3             | 5           | 7      | 12                              | 25         |
| MAXIOB_SMB | 7             | 13          | 22     | 30                              | 70         |
| MAXBASAL   | 2             | 5           | 10     | 12                              | 25         |