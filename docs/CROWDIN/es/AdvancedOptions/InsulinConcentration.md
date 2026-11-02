(Insulin-Concentration)=
# Concentración de insulina

```{warning}
Todas las bombas comerciales están diseñadas para usarse **SOLO** con insulina U100. Usar otra concentración de insulina en una bomba puede ser peligroso. Aunque cada vez más usuarios usan AAPS con otras concentraciones, la conversión siempre hay que gestionarla y a menudo lleva a errores (¡incluso en usuarios con mucha experiencia!).
```

## Recordatorio de lo básico sobre la insulina

Este capítulo explica los conceptos esenciales de la medida y la administración de insulina.

### La unidad de insulina: una medida de acción

La insulina se mide en **Unidades Internacionales (UI)**, que miden su actividad biológica (su capacidad de bajar la glucosa en sangre), no solo su masa física.

- **Definición:** 1 UI corresponde a la actividad de una cantidad concreta de insulina, estandarizada en **aproximadamente 0,04167 mg**.
- **Punto clave:** una «unidad» significa el mismo efecto biológico en todos los tipos de insulina, lo que garantiza una dosificación coherente.

### Concentraciones de insulina

La insulina existe en diferentes concentraciones, definidas por el número de unidades por mililitro (ml).

- **U100:** el estándar mundial, contiene **100 UI/ml**.
- **U200-U500:** insulinas más concentradas (p. ej., la U200 tiene 200 UI/ml) para inyectar volúmenes más pequeños.
- **U40/U50:** concentraciones históricas, menos frecuentes (40 UI/ml y 50 UI/ml). **La U40 necesita jeringas específicas para U40.**
- **Dilución manual:** una práctica clínica para crear insulina muy diluida (p. ej., U50, U10) para casos poco frecuentes, como el uso en recién nacidos o una sensibilidad extrema. Esto requiere una preparación muy cuidadosa en farmacia.

```{admonition} Critical Warning
:class: danger
Usar una concentración con un dispositivo que no corresponde es extremadamente peligroso y puede causar una sobredosis o una infradosis grave. **Comprueba siempre tres veces que la concentración de la insulina corresponde a las especificaciones de la jeringa, la pluma o la bomba.**
```

## When is a non-standard concentration used?

Aunque las bombas de insulina están diseñadas para insulina U100, algunas situaciones médicas concretas requieren concentraciones no estándar. Estos casos requieren una precaución extrema y una gestión muy cuidadosa.

### Caso de uso 1: insulina diluida para dosis muy bajas

- **Situación:** tratar la diabetes tipo 1 en bebés y niños muy pequeños.
- **Problema:** sus necesidades de insulina son tan bajas que la dosis mínima que puede administrar la bomba (p. ej., 0,05 U) puede ser todavía demasiado grande. Esto dificulta un control glucémico preciso y da un riesgo alto de hipoglucemia.
- **Solución:** usar insulina muy diluida (p. ej., U10, que tiene 10 UI/ml).
- **Efecto:** aumenta el volumen de líquido administrado por cada unidad de insulina. Al hacer que los «paquetes» de insulina tengan más volumen pero menos concentración, se pueden hacer ajustes mucho más finos y dosificar con más precisión con los ajustes actuales de la bomba.

```{admonition} Critical Safety Note on Dilution
:class: danger
La dilución de insulina es un procedimiento de alto riesgo que nunca se debe intentar en casa sin formación específica y supervisión médica. La debe hacer un profesional sanitario o un cuidador formado, con un diluyente estéril diseñado específicamente para ese tipo de insulina. **Nunca uses agua del grifo, suero salino ni ningún otro líquido**, porque pueden desactivar la insulina, cambiar su acción e introducir contaminantes peligrosos.
```

### Caso de uso 2: insulina concentrada para necesidades altas de insulina o una resistencia a la insulina importante

- **Situación:** tratar a adultos o adolescentes con una resistencia a la insulina importante, o a personas que sienten dolor local por los aditivos de la insulina estándar.
- **Problema:**
  1. **Necesidades altas:** unas necesidades diarias de insulina muy altas pueden superar el bolo máximo o los límites diarios de administración de la bomba.
  1. **Dolor:** los conservantes de la insulina pueden causar escozor o irritación durante la infusión.
- **Solución:** usar una insulina más concentrada, como la U200 (200 UI/ml).
- **Efecto:** se administra la dosis de insulina necesaria en la mitad de volumen. El usuario tiene que ajustar los valores internos de la bomba (p. ej., reducir a la mitad las basales y los bolos) para compensar la concentración doble, de modo que se administre el número correcto de unidades. Esto también reduce el volumen de líquido, que puede ser irritante, administrado bajo la piel.

## ¿Cómo gestionar la concentración de insulina con AAPS (AAPS 3 y anteriores)?

Usar insulina que no es U100 en un lazo de AAPS requiere una configuración muy cuidadosa para que los cálculos del software correspondan a la insulina que realmente se administra. Un método habitual es «Usar un perfil modificado».

### Usar un perfil modificado

Este método consiste en engañar a AAPS para que crea que las necesidades de insulina del paciente son más bajas de lo que son, para compensar que la bomba administra una insulina más concentrada que aquella para la que está diseñada. El caso de uso de abajo es para insulina U200 puesta en una bomba diseñada para U100.

- **El problema principal:** una bomba diseñada para U100 está calibrada para administrar **10 µl** por **1 unidad**. Si la llenas con U200 (1 unidad de U200 corresponde a **5 µl** de insulina), cuando seleccionas **1 unidad** en la bomba, esta administra **10 µl** de insulina, pero ese volumen contiene ahora **2 unidades de insulina U200**. Esto lleva a una sobredosis del 100 %.
- **La solución del «cambio de perfil al 50 %»:** Para corregirlo, todo el perfil de terapia del paciente se escala dentro de AAPS para que sea «el doble de débil».
  1. El usuario crea un nuevo perfil a partir de su perfil estándar para U100, con la función «Cambio de perfil al **50 %**».
  1. Esto crea un nuevo perfil en el que:
     - Las **basales** se reducen a la mitad.
     - La **ratio insulina-carbohidratos (IC)** se duplica (p. ej., 1:10 g pasa a ser 1:20 g).
     - El **factor de sensibilidad a la insulina (ISF)** se duplica (p. ej., «1 unidad baja la glucosa 50 mg/dl (2,8 mmol/l)» pasa a ser «1 unidad la baja 100 mg/dl (5,6 mmol/l)»).
- **El resultado corregido:** AAPS cree ahora que el paciente solo necesita la mitad de la insulina. Cuando calcula y ordena un bolo de **1 unidad**, la bomba (diseñada para U100 pero llena con U200) administra los **10 µl**, que contienen **2 unidades reales de insulina U200**. Como AAPS calculó esta dosis con un perfil «a media potencia», administrar estas **2 unidades reales** es la dosis correcta y deseada. Los cálculos «a media potencia» del lazo encajan con la administración «a doble potencia» de la bomba.

```{admonition} Critical Risks and Common Errors
:class: caution

Este método introduce riesgos importantes, porque crea una diferencia permanente entre los datos de la app y la realidad física.

**El error principal: la discrepancia del «bolo externo»**

El error más habitual ocurre al administrar y registrar insulina **fuera** del sistema AAPS-bomba.

- **La situación:** AAPS, con el perfil modificado, calcula un bolo de **5 unidades** para una comida. El usuario se lo inyecta con una pluma U200.
- **El doble error:**
  1. **Elección de dosis incorrecta:** el usuario piensa «AAPS calcula 5 unidades» y, por usar una pluma U200, espera administrar **5 unidades reales de U200** sin ninguna conversión. Pero, como el perfil está reducido a la mitad, el cuerpo en realidad necesita **10 unidades reales**. Esto es una **infradosis del 50 %**, que puede causar hiperglucemia.
  1. **Cálculo incorrecto de la insulina activa (IOB) (IOB sobrestimada):** cuando el usuario registra este bolo externo en AAPS, anota **5 unidades**. Esto es incorrecto. Como el perfil de AAPS es para U200, **1 unidad en AAPS equivale a 2 unidades reales**. Por lo tanto, las 5 unidades reales administradas con la pluma se deberían registrar en la app como **2,5 unidades**. Al registrar 5 unidades, el usuario sobrestima la IOB en un 100 %. AAPS cree ahora que hay 5 «unidades concentradas» activas (equivalentes a 10 unidades reales), cuando solo hay 5 unidades reales activas. Esto puede hacer que el lazo reduzca la insulina basal o los bolos futuros, lo que empeora el riesgo de hiperglucemia causado por la infradosis inicial.

**Otros riesgos:**

- **Datos e informes engañosos:** todos los datos de AAPS o Nightscout, incluidos la IOB, la dosis total diaria (TDD) y los informes históricos, están en «unidades concentradas». Esto da una imagen distorsionada al usuario y a su equipo médico. Un médico que revisa un informe puede ver una TDD de 30 unidades y no darse cuenta de que el paciente recibió en realidad 60 unidades reales, lo que lleva a valoraciones incorrectas de la terapia.
- **Modelo mental alterado:** tras un uso prolongado, el usuario empieza a «pensar» con los valores reducidos a la mitad de la app. Asume que su ISF es 100 mg/dl (5,6 mmol/l) o su basal 0,5 U/h, y olvida que son valores «concentrados». Esto crea una dependencia peligrosa del sistema y una pérdida de contacto con sus necesidades reales de insulina, lo que es crítico para la seguridad si falla la bomba o hay problemas con la app.

**Conclusión:** este método requiere una vigilancia absoluta y obliga al usuario a convertir constantemente entre un «mundo concentrado» en la app y el mundo físico. Cualquier administración externa de insulina o revisión de datos rompe este modelo mental y supone un riesgo grave. Cambia de raíz el significado de cada número del sistema.
```

## Usar el parámetro de concentración (nueva función en AAPS 4.0)

Para reducir los riesgos de usar un perfil modificado, una nueva función gestiona la concentración de insulina directamente en AAPS. Esta función hace las conversiones automáticamente, de modo que la aplicación principal siempre trabaja en **Unidades Internacionales (UI) reales**.

### Cómo funciona: conversión automática

El principio básico es una separación clara entre la lógica de la app y la comunicación con la bomba:

- **AAPS usa Unidades Internacionales:** la base de datos principal de AAPS, los algoritmos, los informes y los registros **siempre usan UI reales**. Esto significa que tu IOB, tu TDD y tus ajustes de terapia (basal, ISF, IC) muestran las unidades biológicas reales de insulina.
- **El controlador de la bomba usa unidades concentradas:** todos los valores enviados al controlador de la bomba o recibidos de él se convierten automáticamente a «unidades concentradas» dentro del controlador, según la concentración seleccionada.
  - **Ejemplo con U200:** cuando el usuario pide un **bolo de 1 unidad**, el controlador de la bomba recibe **0,5 CU (unidades concentradas)** antes de enviarlo a la bomba. La bomba (configurada para U100) administra entonces **5 µl**, que contienen **1 UI de insulina U200**.

### Ventajas y riesgos que quedan

**Ventajas:**

- Ya no hace falta un perfil modificado ni hay errores de conversión mental asociados.
- Los usuarios siempre pueden «pensar» en UI reales.
- Para un bolo externo con pluma, solo tienes que seleccionar en la pluma la cantidad de insulina deseada (sea cual sea la pluma y la concentración de insulina). No hace falta ninguna conversión, porque las plumas U100 y U200 siempre usan UI para seleccionar las unidades.
- Todos los informes y datos de AAPS (TDD, IOB) están en UI reales, lo que da claridad al usuario y a su equipo médico.
- Elimina el riesgo de calcular mal los bolos externos, porque se registran en UI reales.

**Riesgos que quedan:**

- **Transición del modelo mental:** los usuarios que dejan el método del «perfil modificado» tienen que volver a cambiar a su perfil real correcto (es decir, el doble de fuerte si vienen de U200) y necesitan tiempo para ajustar su **modelo mental**. Después de acostumbrarse a los valores «concentrados» en la app, tienen que volver a aprender a confiar en los **valores reales en UI, sin ocultar**, que se muestran en todas partes. Este periodo de adaptación tiene un riesgo de malinterpretación.
- **Bolo manual en la bomba:** usar la función de bolo de la propia bomba (sin pasar por AAPS) produce una sobredosis del 100 %, porque la bomba administra insulina U200 con cálculos de volumen para U100.
- **Advertencia general:** usar concentraciones no estándar sigue siendo un procedimiento avanzado con riesgos y no se recomienda oficialmente.

```{admonition} Never use the pump's own interface (tube pump users) to deliver a bolus manually
:class: danger
Pega en tu bomba una nota permanente **«Insulina U200»** como recordatorio, ¡para no olvidarlo nunca!
```

### Visualización en la interfaz de usuario

Para dar claridad, la interfaz de usuario muestra unidades reales y unidades concentradas donde es útil. Ten en cuenta que la interfaz de usuario no cambia si la insulina actual es U100.

**Ejemplos de visualización:**

- **Diálogo de progreso del bolo:**
  - El diálogo Progreso del bolo forma parte de la aplicación principal de AAPS, así que solo muestra la información en UI (coherente con lo que seleccionó el usuario): **`2.50 U / 10.00 U delivered`**
- **Interfaz del controlador de la bomba (estado actual):**
  - En la vista general de la bomba, la cantidad administrada se muestra en las dos unidades; por ejemplo, si está seleccionada `U200`: **`Last Bolus: 10 U (5 CU) (10')`**

**Ten en cuenta:** las dos unidades (U y CU) solo se ven en la vista general principal de la bomba. Según tu bomba, puede haber otras pantallas en las que solo se muestran las unidades concentradas. Los datos históricos dentro de los controladores de bomba normalmente siguen en «unidades concentradas».

### Activar la función

Por los riesgos de seguridad que conlleva, este parámetro no está activado por defecto. Para activarlo, completa el Objetivo 3 y activa **Soporte para concentración de insulina** en Configuración general.

### Crear una nueva insulina con otra concentración

Para crear una insulina con otra concentración, abre primero **Administrar → Configuración de insulina**.

- Pulsa el icono «+» en la parte inferior de la pantalla.
- Selecciona la nueva concentración deseada en el menú desplegable (hay U10, U20, U50, U100 y U200).
  - Las concentraciones diluidas como U10, U20 o U50 son para niños con basales muy bajas.
  - La U200 es más bien para adultos con necesidades altas de insulina.

  ![El menú desplegable de concentración en Configuración de insulina](../images/v4/Insulin/insulin_concentration_dropdown.png)

- Ajusta el tiempo del pico y la duración de la acción de insulina (DIA) y, si quieres, personaliza el apodo de la insulina.
- Usa el botón de guardar arriba a la derecha de la pantalla.

En este paso la insulina ya está creada, pero no se puede seleccionar directamente desde **Configuración de insulina**.

### Cambiar la concentración de U100 a Uxxx (AAPS 4)

```{admonition} Switching concentration is only allowed during a reservoir or patch/pod change
:class: warning
Por seguridad, AAPS solo registra un cambio de concentración durante un cambio de reservorio o un cambio de parche/pod.
```

Si empiezas con insulina U100, todo tu perfil, tus datos históricos y tus informes están en el estándar de Unidades Internacionales, así que el cambio es muy «fácil»:

- Con una bomba de parche/pod, hay un paso específico al cambiar la bomba para seleccionar la insulina que pones en ella.
- Con una bomba con tubo, pulsa el botón Cebar/Llenar (para el cambio de insulina) en la pantalla principal (vista ampliada de la barra de estado) y luego pulsa el botón «Cambiar».

1. Selecciona la concentración deseada en el menú desplegable (p. ej., `U200`).
1. Luego selecciona abajo la insulina correcta. Hasta que confirmes, el texto sobre su nombre dice **Se activará** (en lugar de **Activo actualmente**).

   ![Una insulina elegida pero todavía sin confirmar: Se activará](../images/v4/Insulin/insulin_will_be_activated.png)

1. **Importante:** el cambio de concentración solo se registra en AAPS después de que el cambio de perfil se aplique a la bomba.
   - Este paso es obligatorio para todas las bombas de parche/pod.
   - Con bombas con tubo, espera a que el cambio de perfil se aplique a la bomba, o hazlo en **Administrar → Perfil** o en **Configuración de insulina**.

¡Eso es todo!

Si al cambiar la insulina hay un **Cambio de perfil** temporal (con duración) en curso, la nueva insulina también se asigna al perfil que vuelve cuando termina el cambio temporal. La insulina antigua no vuelve.

### Cambiar la concentración para usuarios con insulina U200 asociada a un perfil al 50 % (AAPS 4)

Si empiezas con U200 que ya usas en la bomba, pero asociada a un perfil al 50 %, tienes que hacer pasos adicionales en comparación con el cambio estándar desde insulina U100.

Recuerda que lo más difícil probablemente no será gestionar el cambio correctamente en AAPS, sino volver a entrenar tu cerebro para pensar en «UI» en lugar de «CU». Todos los valores habituales de los bolos (desayuno, comida, cena...) serán el doble de altos, y lo mismo pasa con tus TDD, basales, etc. Tienes que tener mucho cuidado de no cometer errores durante las primeras semanas, hasta que vuelvas a «pensar» en Unidades Internacionales.

- Primero, prepara un nuevo perfil con todos los valores en Unidades Internacionales:
  - Haz un cambio de perfil temporal al 200 % de tu perfil estándar actual.
  - Abre el menú (☰) → **Tratamientos**, ve a la pestaña **Cambio de perfil** y duplica el nuevo perfil al 200 % (consulta [Duplicar un cambio de perfil](#your-aaps-profile-clone-profile-switch)).
  - Vuelve a tu perfil estándar hasta el siguiente cambio de reservorio o de parche.
  - Ve a **Administrar → Perfil** y cambia el nombre de este nuevo perfil por uno claro (será tu futuro perfil asociado a la insulina U200 configurada en AAPS 4).
- Si usas la función ISF Dinámico (DynISF), tienes que desactivarla durante al menos una semana:
  - Todo tu historial registrado en AAPS o Nightscout está en las unidades incorrectas (CU), la mitad del valor real en Unidades Internacionales. Espera al menos una semana con la insulina U200 en uso antes de volver a activarla.
- Ya puedes cambiar la insulina (con una nueva U200 definida en **Configuración de insulina**) en el siguiente cambio de insulina o cambio de pod.
- Cuando la nueva insulina U200 esté aplicada correctamente, no olvides aplicar el nuevo perfil estándar que preparaste en el primer paso.

## ¿Cómo gestionar los bolos externos con diferentes plumas?

### Con insulina U200 asociada a un perfil al 50 % (AAPS 3)

Recuerda que todas las graduaciones de las plumas están en Unidades Internacionales, así que, sea cual sea la pluma (U100, U200), si usas una pluma para un bolo externo tienes que hacer la conversión en los dos sentidos:

- De AAPS a la pluma: si la calculadora propone un bolo, o si tienes en mente una cantidad concreta, multiplica por 2 la cantidad que seleccionas en la pluma, en comparación con el mismo bolo administrado desde AAPS.
- De la pluma a AAPS: si seleccionaste una cantidad en la pluma para un bolo externo, divide esta cantidad entre 2 para registrar la cantidad correcta en AAPS (botón Insulina, bolo externo) y obtener el cálculo correcto de la IOB en CU (unidades concentradas).

### Con insulina U200 usando la gestión de concentración incluida en AAPS 4

Todo es mucho más sencillo con la gestión interna de la concentración en AAPS: solo selecciona la cantidad deseada en la pluma (sea cual sea la pluma y la insulina correspondiente) y regístrala en AAPS.

- En el botón Insulina, si seleccionas un bolo externo, puedes elegir cualquier tipo de insulina definido en **Configuración de insulina** (sobre todo U100 y U200 para plumas). Así obtienes un cálculo de IOB muy preciso, aunque el pico/DIA de la insulina de la pluma sea muy diferente del pico/DIA de la insulina de la bomba.
