# Tu perfil de AAPS

Tu **Perfil de AAPS** es un conjunto de cuatro parámetros clave que definen cómo debe administrar **AAPS** la insulina según tus niveles de glucosa del sensor. Estos son los parámetros principales sobre los que funciona **AAPS**. A medida que avances en los **Objetivos**, desbloquearás más parámetros que puedes cambiar (como los ajustes de SMB), pero el buen funcionamiento de estas funciones depende de que tu **Perfil** básico sea correcto. El **Perfil** incluye:
* [objetivos de glucosa](#profile-glucose-targets),
* [tasas basales](#your-aaps-profile-basal-rates) (BR),
* [factores de sensibilidad a la insulina](#your-aaps-profile-insulin-sensitivity-factor) (ISF) y
* [ratios insulina-carbohidratos](#your-aaps-profile-insulin-to-carbs-ratio) (IC o ICR).

```{admonition} Where did DIA go?
:class: note
La **duración de la acción de la insulina (DIA)** ya no forma parte de tu **Perfil**. Ahora se configura para cada insulina: mira [Administrar → Configuración de insulina](#Config-Builder-insulin-dia).
```

Como parte del manejo de **AAPS**, debes revisar y comprobar continuamente la exactitud de los ajustes de tu **Perfil**. Se recomienda revisar los ajustes en el orden en que se presentan aquí. Intenta que un ajuste sea correcto antes de cambiar otro. Avanza en pasos pequeños en lugar de hacer cambios grandes de una vez. No olvides activar el nuevo perfil después de cada cambio. [Haz copias de seguridad de los ajustes de tu **Perfil**](#YourAapsProfile_Profile-backup) con regularidad exportando tus ajustes.

Los ajustes de tu **Perfil** se influyen entre sí: puedes tener ajustes «incorrectos» que funcionan bien juntos en ciertas situaciones, pero no en otras. Por ejemplo, si una basal demasiado alta coincide con una **CR** demasiado alta. Esto significa que debes revisar cada ajuste por separado y comprobar que funcionan bien juntos en muchas situaciones distintas.

Puedes usar [Autotune](https://autotuneweb.azurewebsites.net/) como orientación, aunque no debes seguirlo a ciegas: puede que no funcione bien para ti o en todas las situaciones.

```{admonition} Your diabetes may vary
:class: note
Los **Perfiles** varían mucho de una persona a otra.

En las tasas basales (BR), los factores de sensibilidad a la insulina (ISF) y las ratios insulina-carbohidratos (IC o ICR), los valores absolutos y las tendencias de las necesidades de insulina varían mucho de una persona a otra. Dependen de tu biología, sexo, edad, forma física, etc., y también de factores a corto plazo, como una enfermedad o el ejercicio reciente. Para saber más sobre esto, el libro [“Bright Spots and Landmines”](https://diatribe.org/bright-spots-and-landmines/) de Adam Brown es una lectura excelente.

```

Los cuatro últimos parámetros (objetivos de glucosa, tasas basales, factores de sensibilidad a la insulina y ratios insulina-carbohidratos) pueden tener valores distintos a lo largo de 24 horas, con cambios cada hora si hace falta.

![Cambio de la basal cada hora](../images/MaxDailyBasal2.png)

Abajo se muestran capturas de pantalla de **AAPS** de un perfil de _ejemplo_. Ten en cuenta que este perfil de ejemplo tiene muchos puntos horarios. Cuando empiezas con **AAPS**, lo normal es que tu perfil sea mucho más sencillo.

![Ejemplo de perfil activo](../images/Profile-Example-Active.png)

(profile-glucose-targets)=
## Objetivos de glucosa

### Descripción

Tu **objetivo de glucosa** es un valor central y todos los cálculos de **AAPS** se basan en él. Es distinto del rango objetivo, en el que normalmente intentas mantener tus valores de glucosa. El objetivo se usa en los cálculos de **AAPS**: si **AAPS** predice que tu **glucosa** quedará fuera del rango objetivo, actuará para devolverte a ese rango.

Los objetivos se pueden definir dentro de estos límites:

|        | Objetivo _Bajo_       | Objetivo _Alto_         |
| ------ | --------------------- | ----------------------- |
| Mínimo | 4,4 mmol/l o 80 mg/dl | 5 mmol/l o 90 mg/dl     |
| Máximo | 10 mmol/l o 180 mg/dl | 11,1 mmol/l o 200 mg/dl |

### Impacto

Si el objetivo de tu **Perfil** es muy amplio (por ejemplo, 3 mmol/l o más [50 mg/dl o más] de ancho), a menudo verás que **AAPS** actúa poco. Esto se debe a que se predice que la **glucosa** estará en algún punto de ese rango amplio, y por eso es poco probable que **AAPS** ponga basales temporales.

### Cómo configurarlo

La **figura de abajo** muestra un ejemplo de cómo se puede configurar el objetivo en un perfil de **AAPS**.

![Objetivo](../images/Profile_Target.png)

Los objetivos de **glucosa** se configuran según tus preferencias y necesidades personales. Por ejemplo, si te preocupan las hipoglucemias por la noche, puedes poner el objetivo un poco más alto, en 117 mg/dl (6,5 mmol/l), de 21:00 a 7:00. Si quieres asegurarte de tener bastante insulina activa (IOB) por la mañana antes del bolo del desayuno, puedes poner un objetivo más bajo de 81 mg/dl (4,5 mmol/l) de 7:00 a 8:00.

En [Lazo abierto](#KeyAapsFeatures-OpenLoop), sobre todo mientras avanzas por [los primeros objetivos](../SettingUpAaps/CompletingTheObjectives.md), usar un rango objetivo amplio puede ser una buena opción mientras aprendes cómo se comporta **AAPS** y ajustas tu **Perfil**.<br/> En [Lazo cerrado](#KeyAapsFeatures-ClosedLoop) (a partir del **[Objetivo 6](#objectives-objective6)**), se recomienda reducir el rango hasta tener un solo objetivo para cada hora del día (objetivo _Bajo_ = objetivo _Alto_), para que **AAPS** reaccione rápido a los cambios de **glucosa**.

(your-aaps-profile-basal-rates)=

## Tasas basales

### Descripción

Tu tasa basal de insulina (unidades/hora) aporta la insulina de fondo y mantiene estables tus niveles de glucosa cuando no comes ni haces ejercicio.

La bomba de insulina administra pequeñas cantidades de insulina de acción rápida cada pocos minutos, para evitar que el hígado libere demasiada glucosa y para llevar la glucosa a las células del cuerpo. La insulina basal suele ser entre el 40 y el 50 % de tu dosis diaria total (TDD), según tu alimentación, y normalmente sigue un ritmo circadiano, con un pico y un valle en las necesidades de insulina a lo largo de 24 horas. Para más información, el capítulo 6 de [«Think like a Pancreas»](https://amzn.eu/d/iVU0RGe) de Gary Scheiner es muy útil.

La mayoría de los educadores en diabetes tipo 1 (¡y de las personas con diabetes tipo 1!) están de acuerdo en que debes ajustar bien tus tasas basales antes de intentar optimizar tu ISF y tu ICR.

### Impacto

Con unas tasas basales correctas te despiertas en rango y puedes saltarte comidas, o comer antes o después durante el día, sin subidas ni bajadas.

Una tasa basal demasiado alta puede provocar glucosas bajas. Y al revés.

**AAPS** toma la tasa basal por defecto como línea base. Si la tasa basal es demasiado alta, una «basal temporal a cero» contará como una IOB negativa mayor de lo que debería. Esto hará que **AAPS** dé después más correcciones de las que debería para llevar finalmente la IOB a cero.

Así, una tasa basal demasiado alta provocará **glucosas** bajas con la tasa por defecto, pero también algunas horas después, cuando **AAPS** corrige hacia el objetivo.

Al contrario, una tasa basal demasiado baja puede provocar glucosas altas y que no se consiga bajar los niveles hasta el objetivo.

### Cómo configurarlo

La **figura de abajo** muestra un ejemplo de cómo se pueden configurar las tasas basales en un perfil de **AAPS**.

![Tasas basales](../images/Profile_BasalRates.png)

Ajustar bien tus tasas basales se hace por prueba y error, y debe hacerse junto con tu equipo de diabetes.

Hay métodos de prueba de basales que normalmente consisten en observar tus tasas basales y tus necesidades de insulina durante un ayuno <u>intermitente</u> a lo largo de 24 horas. Aunque tienes que probar tus tasas basales durante todo el día, no se recomienda ayunar 24 h seguidas. Esto se debe a que el cuerpo activa mecanismos, como las hormonas, para compensar. Una forma recomendada es ayunar 8 horas en 3 días distintos.

El método recomendado es suspender el lazo (por seguridad, puedes poner AAPS en [**LGS**](#KeyAapsFeatures-LGS) para evitar bajadas, como se hace para conseguir el [Objetivo 6](#objectives-objective6)). Así se vuelve a tu tasa basal de fondo por defecto. Observa cómo cambia tu **glucosa**: si baja, la tasa basal es demasiado alta. Y al revés.<br/> Otro método (puede ser más difícil) es mantener el lazo funcionando y ver cómo cambia la **IOB**. Si la **IOB** es negativa, tu tasa basal es demasiado alta. Y al revés. Ten en cuenta que este método depende del **ISF** para corregir la **glucosa**, y por eso necesita que las demás variables estén bastante bien configuradas para funcionar.<br/> Otra forma de ajustar tus tasas basales es observar lo que hace el lazo durante la noche, cuando ya no quedan carbohidratos activos (COB). Este método es especialmente útil para niños, cuando ayunar es difícil o las necesidades de insulina cambian a menudo. [El Dr. Saleh Adi de Tidepool](https://www.youtube.com/watch?v=-fpWnGRhLSo) explica formas útiles de analizar las curvas de glucosa nocturnas para optimizar tus tasas basales.

Mira [aquí](../GettingHelp/ProfileTuning.md) cómo ajustar tu perfil basal analizando los patrones en lazo cerrado.

Cuando actúes según el resultado de tu prueba de basales, haz los cambios en el **Perfil** de 1 a 2 horas (según tu tipo de insulina) antes de la subida o la bajada. Repite la prueba las veces que haga falta hasta que estés satisfecho con los ajustes de tus **tasas basales**.

(your-aaps-profile-basal-not-compatible)=
#### Mensaje: «La tasa basal no es compatible con la bomba actual»

Cada bomba tiene límites: una tasa basal mínima y una máxima que puede administrar y, en algunas bombas (por ejemplo Dana, Accu-Chek Combo, Medtronic y Diaconn G8), tasas basales que solo pueden cambiar en horas en punto. **AAPS** comprueba tu perfil con la bomba que usas, **después** de aplicar el porcentaje que eliges.

Si una tasa basal está fuera de estos límites, la pantalla **Activar** muestra este mensaje y el botón **Activar** se queda en gris:

![Pantalla Activar con el mensaje "La tasa basal no es compatible con la bomba actual"](../images/v4/Profiles/profile_activate_pump_incompatible.png)

Por ejemplo, con una tasa basal de 0,10 U/h por la noche y un porcentaje de perfil del 35 %, **AAPS** tendría que administrar 0,035 U/h. Esto es menos de lo que puede administrar una bomba Dana (0,04 U/h).

Para solucionarlo, puedes:

* elegir otro porcentaje: uno **más alto** si una tasa basal queda demasiado baja, uno **más bajo** si una tasa basal queda demasiado alta, o
* [editar el perfil](#your-aaps-profile-create-and-edit-profiles) y cambiar la tasa basal.

El editor de perfiles solo te deja empezar tasas basales en horas en punto. Una tasa basal que empieza, por ejemplo, a las 06:30 solo puede venir de un perfil antiguo, por ejemplo después de cambiar a una bomba que no lo admite.

(your-aaps-profile-insulin-sensitivity-factor)=

## Factor de sensibilidad a la insulina (ISF)

### Descripción

El factor de sensibilidad a la insulina (a veces llamado factor de corrección) indica cuánto baja tu nivel de glucosa con 1 unidad de insulina.

**En unidades mg/dl:** Si tienes un **ISF** de 40, cada unidad de insulina bajará tu glucosa unos 40 mg/dl (por ejemplo, tu glucosa bajará de 140 mg/dl a 100 mg/dl).

**En unidades mmol/l:** Si tienes un **ISF** de 1,5, cada unidad de insulina bajará tu glucosa unos 1,5 mmol/l (por ejemplo, de 8 mmol/l a 6,5 mmol/l).

Con estos ejemplos puedes ver que cuanto _menor_ es el valor del **ISF**, menos sensible eres a la insulina. Así, si bajas tu ISF de 40 a 35 (mg/dl) o de 1,5 a 1,3 (mmol/l), a esto se le suele llamar hacer más fuerte tu **ISF**. Por el contrario, subir el valor del **ISF** de 40 a 45 (mg/dl) o de 1,5 a 1,8 (mmol/l) es hacer más débil tu **ISF**.

### Impacto

A **lower / stronger ISF** (e.g. 40 instead of 50) means insulin drops your **BG** less per unit. Esto lleva a una corrección más agresiva / más fuerte del lazo, con **más insulina**. Si tu **ISF** es demasiado fuerte (valor pequeño), puede provocar una **glucosa** baja.

A **higher / weaker ISF** (e.g. 45 instead of 35) means insulin drops your **BG** more per unit. Esto lleva a una corrección menos agresiva / más débil del lazo, con **menos insulina**. Si tu **ISF** es demasiado débil (valor grande), puede provocar una **glucosa** alta.

**Ejemplo:**
* La **glucosa** es 190 mg/dl (10,5 mmol/l) y el objetivo es 100 mg/dl (5,6 mmol/l).
* Por tanto, quieres una corrección de `190 - 100 = 90 mg/dL` o `10.5 - 5.6 = 4.9 mmol/L`
* Si `ISF = 30` -> `90 / 30 = 3` o `ISF = 1.63` -> `4.9 / 1.63 = 3`: 3 unidades de insulina
* Si `ISF = 45` -> `90 / 45 = 2` o `ISF = 2.45` -> `4.9 / 2.45 = 2`: 2 unidades de insulina

Un **ISF** demasiado bajo (y por eso más agresivo, algo frecuente) puede provocar «sobrecorrecciones», porque **AAPS** calcula que necesitas más insulina para corregir una **glucosa** alta de la que realmente hace falta. Esto puede provocar niveles de glucosa en «montaña rusa» (sobre todo en ayunas), como se ve en la imagen de abajo. En esta situación, se debe aumentar el valor del **ISF** para que **AAPS** sea menos agresivo. Así **AAPS** dará dosis de corrección más pequeñas y evitará corregir de más una **glucosa** alta, lo que terminaría en una **glucosa** baja.

![ISF demasiado bajo](../images/isf.jpg)

Al contrario, un **ISF** demasiado alto puede provocar correcciones insuficientes, y tu **glucosa** se queda por encima del objetivo; esto se nota sobre todo por la noche.

### Cómo configurarlo

Mira la **figura de abajo** para ver un ejemplo de cómo se pueden configurar los valores de ISF en un perfil de **AAPS**.

![ISF del perfil](../images/Profile_ISF.png)

Un punto de partida sencillo para calcular tu ISF de día es usar tu dosis diaria total (TDD) con la regla del 1700 (94). Hay más detalles en el capítulo 7 de [«Think like a Pancreas»](https://amzn.eu/d/iVU0RGe) de Gary Scheiner.

| 1700 (si mides en mg/dl) o 94 (mmol/l) / TDD = ISF aproximado.<br/><br/>Ejemplo: TDD = 40 U<br/>ISF aproximado (mg/dl) = 1700/40 = 43<br/>ISF aproximado (mmol/l) = 94/40 = 2,4 |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|                                                                                                                                                                                                         |

Si tus basales son correctas, puedes probarlo suspendiendo el lazo, comprobando que la **IOB** es cero y tomando unas pastillas de glucosa para llegar a un nivel «alto» estable.

Después, ponte una cantidad estimada de insulina (según el 1/ISF actual) para llegar a tu glucosa objetivo.

Ten cuidado, porque este valor se configura muy a menudo demasiado bajo. Demasiado bajo significa que 1 U bajará la glucosa más rápido de lo esperado.

(your-aaps-profile-insulin-to-carbs-ratio)=

## Ratio insulina-carbohidratos (ICR)

### Descripción

La **ICR** mide cuántos gramos de carbohidratos cubre una unidad de insulina.

Algunas personas también usan **I:C** como abreviatura en lugar de **ICR**, o hablan de ratio de carbohidratos: **CR**.

Por ejemplo, una ratio insulina-carbohidratos de 1 a 10 (1:10) significa que te pones 1 U de insulina por cada 10 gramos de carbohidratos que comes. Una comida de 25 g de carbohidratos necesitaría 2,5 U de insulina.

Si tu **ICR** es más débil (valor más alto), por ejemplo 1:20, solo necesitarías 0,5 U de insulina para cubrir 10 g de carbohidratos. Una comida de 25 g de carbohidratos necesitaría 25/20 = 1,25 U de insulina.

Es normal tener **ICR** distintas en distintas horas del día, por los niveles de hormonas y la actividad física. Muchas personas tienen su **ICR** más baja / más fuerte a la hora del desayuno, porque suelen ser más resistentes a la insulina. Así, por ejemplo, la **ICR** de un usuario adulto podría ser 1:8 en el desayuno, 1:10 en la comida y 1:10 en la cena. Pero estos patrones no son iguales para todos: algunas personas son más resistentes a la insulina a la hora de la cena y necesitan entonces una **ICR** más fuerte / más pequeña.

> **NOTA:**
> 
> En algunos países Europeos raciones o unidades pan fueron utilizadas para la determinación de la cantidad de insulina que se necesita para la comida. Al principio, 1 unidad de pan equivalía a 12 g de carbohidratos; más tarde, algunos lo cambiaron a 10 g de carbohidratos.
> 
> En este modelo, la cantidad de carbohidratos se fijó y la cantidad de insulina era variable. ("¿Cuánta insulina se necesita para cubrir una sola unidad de pan?")
> 
> Con la **ICR**, la cantidad de insulina es fija y la cantidad de carbohidratos es variable. ("¿Cuántos gr de carbohidratos pueden estar cubiertos por una sola unidad de insulina?")
> 
> Ejemplo:
> 
> Factor de unidad de pan (UP = 12 g de carbohidratos): 2,4 U/UP -> Necesitas 2,4 unidades de insulina cuando comes una unidad de pan.
> 
> **ICR** correspondiente: 12g / 2,4 U = 5,0 g/U -> Con una unidad de insulina se pueden cubrir 5,0 g de carbohidratos.
> 
> Factor UP 2,4 U / 12g   ===>   IC = 12g / 2,4 U = 5,0 g/U
> 
> Conversion tables are available online, e.g. [here](https://www.mylife-diabetescare.com/files/media/03_Documents/11_Software/FAS/SOF_FAS_App_KI-Verha%CC%88ltnis_MSTR-DE-AT-CH.pdf).

### Impacto

Una **ICR más baja / más fuerte** significa menos comida por unidad, es decir, recibes más insulina para una cantidad fija de carbohidratos. También se puede llamar «más agresiva». Si tu IC es demasiado fuerte, recibes demasiada insulina, y esto puede provocar **glucosas** bajas.

Una **ICR más alta / más débil** = más comida por unidad, es decir, recibes menos insulina para una cantidad fija de carbohidratos. También se puede llamar «menos agresiva». Si tu IC es demasiado débil, recibes menos insulina de la que necesitas, y esto puede provocar **glucosas** altas.

### Cómo configurarlo

La **figura de abajo** muestra un ejemplo de la **ICR** de un usuario y cómo se puede configurar en un **Perfil de AAPS**. Al introducir estos valores, se introduce la parte final de la ratio: así, una ratio insulina-carbohidratos de 1:3,5 se introduce simplemente como «3,5».

![ICR del perfil](../images/Profile_ICR.png)

Si después de digerir una comida y de que la **IOB** vuelva a cero, tu **glucosa** sigue más alta que antes de comer, probablemente tu **ICR** es demasiado débil (_es decir_, el número es demasiado alto y debes bajarlo poco a poco). Al contrario, si tu **glucosa** está más baja que antes de comer, la **ICR** es demasiado fuerte (_es decir_, el número es demasiado pequeño y debes subirlo poco a poco).

Si tus tasas basales son correctas, puedes probarlo así: comprueba que la **IOB** es cero y que estás en rango, come una cantidad exacta y conocida de carbohidratos y ponte una cantidad estimada de insulina según tu ratio insulina-carbohidratos actual. Lo mejor es comer alimentos que comes normalmente a esa hora del día y contar sus carbohidratos con precisión.

## Preguntas frecuentes sobre el perfil

```{contents} Common questions related to the Profile
:depth: 1
:local: true
```

### Por qué es importante configurar bien tu perfil

**¿Por qué debo intentar que los ajustes de mi perfil sean correctos? ¿No puede el lazo encargarse de ello?**

Un lazo cerrado híbrido _puede_ intentar ajustar la administración de insulina para reducir el mal control de la glucosa que provocan unos valores incorrectos del **Perfil**. Puede hacerlo, por ejemplo, suspendiendo la administración de insulina si vas a tener una hipoglucemia. Sin embargo, puedes conseguir un control de la glucosa mucho mejor si los ajustes de tu **Perfil** ya están lo más cerca posible de lo que necesita tu cuerpo. Esta es una de las razones por las que **AAPS** usa objetivos por etapas para pasar de la bomba en lazo abierto al lazo cerrado híbrido. Además, habrá momentos en los que tengas que abrir el lazo (calentamiento del sensor, fallo del sensor, _etc._), a veces en mitad de la noche, y querrás tener los ajustes correctos para estas situaciones.

Si empiezas con **AAPS** después de usar otro sistema de bomba en lazo abierto o cerrado, ya tendrás una idea razonable de qué valores usar para las tasas basales (**BR**), los factores de sensibilidad a la insulina (**ISF**) y las ratios insulina-carbohidratos (**ICR**).

Si pasas de las inyecciones (MDI) a **AAPS**, es buena idea leer primero cómo hacer el cambio de MDI a bomba, y planificar y hacer el cambio con cuidado junto con tu equipo de diabetes. [«Pumping insulin»](https://amzn.eu/d/iaCsFa2) de John Walsh y Ruth Roberts y [«Think like a Pancreas»](https://amzn.eu/d/iVU0RGe) de Gary Scheiner son muy útiles.

### ¿Qué provoca picos altos después de comer en lazo cerrado?
En primer lugar, revisa tu tasa basal y haz una prueba de basal sin carbohidratos. Si es correcta y tu **glucosa** baja hasta tu objetivo después de que los carbohidratos se hayan absorbido del todo, prueba a poner en **AAPS** un objetivo temporal «comida pronto» un tiempo antes de comer, o piensa con tu endocrino un tiempo de prebolo adecuado. <br/> Si tu **glucosa** está demasiado alta después de comer y sigue demasiado alta cuando los carbohidratos se han absorbido del todo, piensa con tu endocrino en bajar tu **ICR**. Si tu **glucosa** está demasiado alta mientras hay **COB** y demasiado baja cuando los carbohidratos se han absorbido del todo, piensa con tu endocrino en subir tu **ICR** y en un tiempo de prebolo adecuado.

### Me quedo alto y el lazo no me baja
Las posibles razones por las que **AAPS** no da suficiente insulina son:
* El **ISF** no es lo bastante fuerte
* Puede que la tasa basal no sea lo bastante fuerte
* Puede que actúe un ajuste de seguridad, como **maxIOB**. O que el **SMB** esté desactivado en ese momento, según tus ajustes.
* Se ha configurado una automatización que ha anulado a **AAPS**.

Mira también [Ajustar el perfil de AAPS](../GettingHelp/ProfileTuning.md).

### Tengo IOB negativa, ¿es un problema?
Una **IOB** negativa significa que la cantidad absoluta de insulina (basal + bolo) en tu cuerpo es menor que la basal. Hará que **AAPS** envíe más insulina en cuanto la **glucosa** empiece a subir, porque considera que falta insulina, y esto puede provocar una **glucosa** baja más tarde.

Estas son algunas razones por las que puedes tener IOB negativa, y qué hacer:
* una basal demasiado fuerte: ajusta tu **Perfil**
* demasiado bolo en la comida anterior: ajusta tu **Perfil** o comprueba si te pones el bolo en el momento correcto.
* DIA demasiado corta para tu tipo de insulina, lo que provoca acumulación de insulina: ajústala en [Administrar → Configuración de insulina](#Config-Builder-insulin-dia)
* actividad física: la próxima vez, piensa en usar un [porcentaje de perfil](../DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md) más bajo durante la actividad, para tener en cuenta el aumento de sensibilidad.

## Administrar tus perfiles

```{contents} Operations that you can perform on your **Profiles** in **AAPS**
:depth: 1
:local: true
```
(your-aaps-profile-create-and-edit-profiles)=
### Crear y editar perfiles

En **AAPS** v4, tus perfiles están en la pantalla **Administrar** (navegación inferior) → **Perfil**, como un carrusel de tarjetas que puedes deslizar, con una barra de acciones (**➕ Añadir**, **✏️ Editar**, **⧉ Duplicar**, **🗑️ Borrar**, **▶ Activar**). Para administrar y activar un perfil, mira [Administrar y activar perfiles](#ProfileSwitch-manage-v4). ¿Vienes de **AAPS** v3, donde los perfiles tenían su propia pestaña? Mira [Qué cambió en AAPS v4](#v4changes-manage).

Al tocar **✏️ Editar** se abre el editor. Pon el **nombre** y las **unidades** del perfil y luego rellena los cuatro horarios con las pestañas:

- **IC**: ratio insulina-carbohidratos (g/U)
- **ISF**: factor de sensibilidad a la insulina
- **BAS**: tasas basales
- **OBJ**: rango objetivo

![El editor de perfiles: pestañas IC / ISF / BAS / OBJ](../images/setup-wizard/Wizard-Profile-IC.png)

Cada horario es una lista de **bloques de tiempo**: añade un bloque, pon su hora de inicio y su valor, y luego pulsa **Guardar**.

Si haces cambios en tu **Perfil**, asegúrate de editar el **Perfil** correcto: la tarjeta del perfil en uso está marcada como **ACTIVO**, pero la tarjeta seleccionada en pantalla puede ser otra.

(your-aaps-profile-profile-from-scratch-for-a-kid)=
### Crear desde cero un perfil para un niño

El [Ayudante de perfil](#aaps-screens-profile-helper) (menú ☰ → **Ayudante de perfil**) puede ayudarte a crear un perfil para un niño (hasta 18 años).

**Nota importante:**

**El Ayudante de perfil sirve para ayudarte a encontrar el perfil inicial de tu hijo o hija. Aunque se basa en datos de dos hospitales distintos, ¡habla siempre con tu equipo médico antes de usar un perfil nuevo!**

El Ayudante de perfil ofrece datos de dos hospitales infantiles distintos para encontrar el perfil inicial de tu hijo o hija, hasta los 18 años.

![Ayudante de perfil niños 1](../images/ProfileHelperKids1.png)

1. Asegúrate de estar en la pestaña **Perfil 1**.
2. En **Tipo de perfil**, asegúrate de tener seleccionado «Perfil predeterminado».
3. Ajusta el «Perfil predeterminado» (basado en los datos del hospital) introduciendo la edad del niño y el «Total TDD» **o** el peso.
4. Cambia a la pestaña **Perfil 2**.
5. Pulsa **Tipo de perfil** y selecciona «Perfil DPV por defecto».
6. Ajusta el «Perfil DPV por defecto» (basado en los datos de otro hospital) introduciendo la edad del niño, el «Total TDD» y el porcentaje de basal. Ten en cuenta que los datos DPV solo dan **tasas basales**, por eso IC e ISF se muestran a cero en este perfil.
7. Open the **Comparison** tab. Se mostrará la comparación de los dos perfiles ajustados (mira la captura de pantalla de abajo).
8. Si quieres empezar a ajustar tu perfil a partir de una de estas propuestas, usa el botón **Duplicar** de debajo de la comparación.

![Ayudante de perfil niños 2](../images/ProfileHelperKids2.png)

### Cambiar de perfil

Mira [Cambio de perfil y porcentaje del perfil](../DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md).

(your-aaps-profile-clone-profile-switch)=
### Duplicar un cambio de perfil en un perfil nuevo

![Cambio de perfil](../images/TreatmentsView4.png)

El [Historial de tratamientos](#aaps-screens-treatments) muestra todos los **Cambios de perfil** anteriores. En la pestaña **Cambio de perfil**, puedes usar un **Cambio de perfil** anterior como base para crear un **Perfil** nuevo. En este caso, el desplazamiento horario y el porcentaje se aplicarán al nuevo perfil local. Usa el botón **Duplicar** que aparece en la línea **2**.

Ahora puedes ir a la [pantalla Perfil](#your-aaps-profile-create-and-edit-profiles) (**Administrar → Perfil**) para editar el perfil recién creado.

(YourAapsProfile_Profile-backup)=
### Copia de seguridad del perfil

Como son un ajuste central de tu sistema de lazo, tus **Perfiles** son muy importantes y no quieres perderlos.

* Tus **Perfiles** se guardan en la base de datos de **AAPS**.
* Cuando **NSClientV3** está configurado (mira [Sincronización](#SetupWizard-synchronization-with-the-reporting-server-and-more)), tus **Perfiles** también se suben a Nightscout automáticamente.
* También forman parte de los [ajustes exportados](../Maintenance/ExportImportSettings.md). Por eso, asegúrate de tener una copia de seguridad en un lugar seguro.

### Editar perfiles desde Nightscout

Si está activado, **AAPS** puede recibir los cambios de **Perfil** hechos directamente en Nightscout. El ajuste se llama «**Recibir perfiles almacenados desde NS**» y forma parte de las opciones de **Aceptación de datos de Nightscout** (aceptar datos de Nightscout está desactivado por defecto; mira el [paso Control de clientes del Asistente de configuración](../SettingUpAaps/SetupWizard.md)). Puedes encontrarlo rápido con la **barra de búsqueda** de la pantalla principal. Mientras el control de clientes está activado, el ajuste está oculto y **AAPS** no acepta cambios de perfil desde Nightscout ([Modo reforzado](#client-master-control-hardened-mode)). En su lugar, edita el perfil en un cliente emparejado, o cárgalo una vez con **Sincronización completa**.

Esto puede ser útil antes de hacer cambios grandes en un **Perfil** más completo. Se pueden introducir más fácilmente desde la interfaz web, _p. ej._ para copiar a mano datos de una hoja de cálculo.

Pero para hacerlo es importante duplicar todo el **registro de la base de datos**, que contiene varios perfiles, en el editor de Nightscout (flecha azul en la captura de pantalla de abajo). Los nuevos registros de la base de datos llevan entonces la fecha actual. Después de guardar, el **Perfil** cambiado o nuevo se puede activar en **AAPS** con un [cambio de perfil](../DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md) normal.

![Duplicar registros de la base de datos](../images/Nightscout_Profile_Editor.PNG)

(your-aaps-profile-compare-profiles)=
### Comparar dos perfiles

También puedes usar el [Ayudante de perfil](#aaps-screens-profile-helper) (menú ☰ → **Ayudante de perfil**) para comparar dos perfiles o cambios de perfil distintos (el porcentaje de uno de tus perfiles usado antes en un [cambio de perfil](../DailyLifeWithAaps/ProfileSwitch-ProfilePercentage.md)).

![Ayudante de perfil 1](../images/ProfileHelper1.png)

1. Asegúrate de estar en la pestaña **Perfil 1**.
2. En **Tipo de perfil**, selecciona «Perfil disponible» para elegir entre todos los **Perfiles** guardados.
3. Elige el **Perfil** desde el que quieres comparar.
4. Cambia a la pestaña **Perfil 2**.
5. En **Tipo de perfil**, selecciona «Cambio de perfil» para elegir en el historial de todos tus **Cambios de perfil**.
6. Elige el **Cambio de perfil** con el que quieres comparar.
7. Open the **Comparison** tab. Se mostrará la comparación de los dos perfiles (mira la captura de pantalla de abajo).

![Ayudante de perfil 2](../images/ProfileHelper2.png)
