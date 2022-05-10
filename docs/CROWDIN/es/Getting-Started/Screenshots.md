# Pantallas de AndroidAPS

## Pantalla de inicio

![Pantalla de inicio V2.7](../images/Home2020_Homescreen.png)

Esta es la primera pantalla que encontrarás cuando abras AndroidAPS y contiene la mayor parte de la información que necesitarás en tu día a día.

### Sección A - Pestañas

* Navegar entre los distintos módulos de AndroidAPS.
* También puedes cambiar de pantalla deslizando hacia la izquierda o la derecha.
* Las pestañas que se muestran pueden ser seleccionadas desde la [Tabla de configuraciones](../Configuration/Config-Builder#tab-or-hamburger-menu).

### Sección B - Perfil & objetivo

#### Perfil actual

![Duración restante del cambio de perfil](../images/Home2020_ProfileSwitch.png)

* El perfil actual se muestra en la barra izquierda.
* Para ver los detalles del perfil, realiza una pulsación corta sobre la barra de perfil.
* Una pulsación larga, permite [realizar un cambio de perfil](../Usage/Profiles#profile-switch).
* Si en el cambio de perfil se estableció un "Tiempo del cambio", ese tiempo se mostrará en minutos entre paréntesis.

#### Objetivo

![Duración restante objetivo temporal](../images/Home2020_TT.png)

* El objetivo actual de glucosa en sangre se muestra en la barra derecha.
* Una pulsación corta o larga sobre la barra de objetivo, permite establecer un [objetivo temporal](../Usage/temptarget.md).
* Cuando se establece un objetivo temporal, la barra se vuelve amarilla y el tiempo restante del objetivo temporal se muestra entre paréntesis.

#### Visualización de ajuste del objetivo dinámico (Autosens)

![Visualización del ajuste de objetivo dinámico](../images/Home2020_DynamicTargetAdjustment.png)

* AAPS puede ajustar dinámicamente tu objetivo en función de la sensibilidad si estás utilizando el algoritmo SMB.
* Habilitar una o ambas de las [siguientes opciones](../Configuration/Preferences#openaps-smb-settings) 
   * "Sensibilidad aumenta el objetivo" y/o 
   * "Resistencia baja el objetivo" 
* Si AAPS detecta resistencia o sensibilidad, el valor del objetivo cambiará del establecido en el perfil. 
* Cuando autosens modifique el objetivo de glucosa de forma dinámica, el fondo del objetivo se mostrará verde.

### Sección C - Glucosa (BG) & estado del lazo

#### Glucosa en sangre actual

* La última lectura de glucosa en sangre de tu MCG se muestra en el lado izquierdo.
* El color del valor de glucosa en sangre mostrado, refleja el valor del[ rango ](../Configuration/Preferences#range-for-visualization) definido: 
   * Verde = En rango
   * Rojo = Por debajo del rango
   * Amarillo = Por encima del rango
* El bloque gris central, muestra los minutos desde la última lectura, así como los cambios (delta) desde la última lectura y desde los últimos 15 y 40 minutos.

#### Estado del lazo

![Estado del lazo](../images/Home2020_LoopStatus.png)

* Un nuevo icono muestra el estado del lazo:
   
   * Círculo verde = Lazo cerrado funcionando
   * Círculo verde con línea punteada = [Suspensión por glucosa baja (LGS)](../Usage/Objectives#objective-6-starting-to-close-the-loop-with-low-glucose-suspend)
   * Círculo rojo = Lazo desactivado (no funciona de forma permanente)
   * Círculo amarillo = Lazo suspendido (pausado temporalmente, aunque la insulina basal se suministra) - el tiempo restante se muestra debajo del icono
   * Círculo gris = Bomba desconectada (No se suministra ninguna dosis de insulina temporalmente) - el tiempo restante se muestra debajo del icono
   * Círculo naranja = Superbolo en ejecución - el tiempo restante se muestra debajo del icono
   * Círculo azul con línea punteada = Lazo abierto

* Una pulsación corta o larga sobre el icono del lazo, abre las opciones para cambiar el modo del lazo (cerrado, suspensión por glucosa baja, abierto o desactivado), suspender/reanudar lazo o desconectar/reconectar bomba.
   
   * Si se realiza una pulsación corta sobre el icono de Lazo, es necesaria una confirmación después de seleccionar la opción deseada.
   
   ![Menú de estado de bucle](../images/Home2020_Loop_Dialog.png)

#### Señal de advertencia de glucosa

Desde la versión de 3.0 de AndroidAPS, puede aparecer una señal de advertencia debajo de la lectura de glucosa de la pantalla principal.

*Nota*: Se tienen en cuenta hasta 30 horas para los cálculos de AAPS. Así que incluso después de solucionar el problema de origen, pueden pasar hasta 30 horas aproximadamente hasta que el triángulo amarillo desaparezca, después que ocurriera el último intervalo irregular.

Para eliminarlo inmediatamente, es necesario eliminar manualmente algunas entradas en la pestaña Dexcom (BYODA)/xDrip+.

Sin embargo, cuando hay muchos duplicados, podrías ser más fácil:

* [Exportar ajustes](../Usage/ExportImportSettings.rst) desde el menú de mantenimiento,
* Restablecer las bases de datos, desde el menú de mantenimiento
* [Importar ajustes](../Usage/ExportImportSettings.rst) desde el menú de mantenimiento

##### Señad de advertencia roja: Datos de glucosa duplicados

La señal de advertencia roja, indica que estás recibiendo datos de glucosa duplicados, lo que provoca que el lazo funciene correctamente. Por lo tanto, el lazo se desactivará hasta que se el problema se resuelva.

![Triángulo de adverntencia de glucosa en rojo](../images/bg_warn_red.png)

Es necesario que averigues por qué estás obteniendo datos de glucosa duplicados:

* ¿Tienes habilitadodo el puente Dexcom en tu página de Nightscout? Deshabilita el puente de dexcom desde la página de Heroku (o cualquier otro proveedor de alojamiento), edita la variable "ENABLE" y elimina la palabra "bridge" de allí. (Para Heroku, [los pasos detallados se pueden encontrar aquí](https://nightscout.github.io/troubleshoot/troublehoot/#heroku-settings).)
* ¿Estás cargando los datos de glucosa a Nightscout desde varias fuentes? Si estás usando la aplicación de Dexcom (BYODA), habilita la subida desde AAPS, pero no la habilites en xDrip+, si lo estás usando.
* ¿Tienes algún seguidor que recibe los datos de glucosa y que también esté subiendo los datos a Nightscout?
* Último recurso: En AAPS, ve a la configuración de NSClient, selecciona la configuración de sincronización y desactiva la opción "Recibir/Rellenar datos del MCG".

##### Señal de advertencia amarilla

* La señal de advertencia amarilla indica que tus datos de glucosa llegan en intervalos de tiempo irregulares o que faltan algunos datos de glucosa.
   
   ![Triángulo de adverntencia de glucosa en amarillo](../images/bg_warn_yellow.png)

* Normalmente no hay que tomar ninguna acción. El lazo cerrado puede continuar funcionando.

* Como un cambio de sensor interrumpe el flujo constante de lecturas de glucosa, una señal de advertencia amarilla después de un cambio de sensor puede ser normal, por lo que no hay nada por lo que preocuparse.
* Nota especial para usuarios de sensores Libre:
   
   * Cada sensor Libre se desplaza un minuto o dos cada hora, lo que significa que nunca se obtiene un intervalo de lecturas de glucosa regular.
   * Las lecturas con saltos también interrumpen el flujo continuo de lecturas de datos.
   * Debido a esto, la señal de advertencia amarilla siempre "estará activa" para los usuarios de sensores FreeStyle Libre. 

### Sección D - IOB, COB, BR y AS

![Sección D](../images/Home2020_TBR.png)

* Jeringa: insulina a bordo (IOB) - cantidad de insulina activa dentro del cuerpo
   
   * La insulina a bordo de la imagen sería cero si la basal estándar estuviera en funcionamiento y no hubiera ninguna insulina restante de bolos previos. 
   * El IOB puede ser negativo si recientemente han habido períodos de reducción basal.
   * Pulsa el icono para ver la división de los bolos y de la insulina basal.

* Grano: [carbohidratos a bordo (COB)](../Usage/COB-calculation.rst) - carbohidratos que se han comido previamente y aún no se han absorbido -> el icono parpadea si se necesitan carbohidratos adicionales

* Línea morada: tasa basal: cambios en el icono que reflejan cambios temporales en la tasa basal (plano al 100%) 
   * Pulsa sobre el icono para ver la tasa basal base y los detalles de cualquier basal temporal (incluida la duración restante)
* Flechas hacia arriba & abajo: indican el estado actual de [autosens](../Usage/Open-APS-features#autosens) (habilitado o deshabilitado) y el valor se muestra debajo del icono.

#### Carbohidratos requeridos

![Carbohidratos requeridos](../images/Home2020_CarbsRequired.png)

* La sugerencia de carbohidratos se produce cuando el algoritmo de referencia detecta que van a ser necesarios.
* Esto ocurre cuando el algoritmo oref cree que no puede rescatarte con una basal temporal al 0% y serán necesarios carbohidratos para solucionarlo.
* Las notificaciones de carbohidratos son mucho más sofisticadas que las del asistentede bolo (calculadora). Es posible que se muestre una sugerencia de carbohidratos mientras que en el asistente de bolo no se muestran los carbohidratos faltantes.
* Las notificaciones de carbohidratos requeridos se pueden enviar a Nightscout si queremos, en cuyo caso se mostrará y se transmitirá.

### Sección E - Luces de estado

![Sección E](../images/Home2020_StatusLights.png)

* Las luces de estado muestran una advertencia visual para: 
   * Edad de la cánula
   * Edad de la insulina (días de uso del reservorio, si se utiliza)
   * Nivel del reservorio/cartucho (unidades)
   * Edad del sensor
   * Edad y nivel de la batería/pila (%)
* Cuando se supera el umbral de advertencia, los valores se muestran en amarillo.
* Cuando se supera el umbral crítico, los valores se muestran en rojo.
* La configuración puede cambiarse en las [preferencias](../Configuration/Preferences#status-lights).

### Sección F - Gráfico principal

![Sección F](../images/Home2020_MainGraph.png)

* El gráfico muestra la glucosa en sangre (BG), tal y como se lee del monitor continuo de glucosa (MCG). 
* Aquí se muestran las notas que se añaden desde la pestaña de acciones, las mediciones de glucosa capilar, la entrada de carbohidratos, así como los cambios de perfil. 
* Pulsaciones largas sobre el gráfico, cambian la escala del mismo. Se pueden seleccionar escalas de: 6, 12, 18 0 24 horas.
* El área verde muestra tu rango objetivo. Puede ser configurado en las [preferencias](../Configuration/Preferences#range-for-visualization).
* Los triángulos azules muestran [SMB](../Usage/Open-APS-features#super-micro-bolus-smb) - si están habilitados en las [preferencias](../Configuration/Preferences#openaps-smb-settings).
* Información opcional:
   
   * Predicciones
   * Basales
   * Actividad - curva de actividad de la insulina

#### Activar información opcional

* Pulsa sobre el triángulo del lado derecho del gráfico principal para seleccionar qué información se mostrará en el gráfico principal.
* Para el gráfico principal solo están disponibles las cuatro opciones de arriba, las que se muestran encima de la línea "\---\---- Gráfico 1 \---\----".
   
   ![Configuración del gráfico principal](../images/Home2020_MainGraphSetting.png)

#### Líneas de predicción

* **Naranja** línea: [COB](../Usage/COB-calculation.rst) (color que se utiliza generalmente para representar a los COB y los hidratos de carbono)
   
   La línea de predicción muestra donde irá la glucosa (no a dónde irá el propio COB) en función de la configuración actual de la bomba y suponiendo que las desviaciones debidas a la absorción de carbohidratos se mantienen constantes. Esta línea sólo aparece si se conocen los carbohidratos (COB).

* **Azul oscuro** línea: IOB (color que se utiliza generalmente para representar la IOB y la insulina)
   
   La línea de predicción sólo muestra lo que ocurriría bajo la influencia de la insulina. Por ejemplo, si puso un poco de insulina y luego no comió ningún carbohidrato.

* **Azul claro** línea: cero-temp (predicción de la glucosa si se establecería una tasa basal temporal al 0%)
   
   La línea de predicción muestra cómo cambiaría la línea de trayectoria de la IOB si la bomba detuviera toda la administración de insulina (0% TBR).

* **Amarillo oscuro** línea: [UAM](../Configuration/Sensitivity-detection-and-COB#sensitivity-oref1) (comidas no anunciadas)
   
   Las comidas no anunciadas significan que se detecta un aumento significativo en los niveles de glucosa, debido a las comidas, la adrenalina u otras influencias. La línea de predicción es similar a la línea NARANJA COB, pero asume que las desviaciones se recortarán a un ritmo constante (extendiendo la tasa actual de reducción).

Por lo general, la curva de glucosa real terminará en medio de estas líneas, o más cerca de la que hace las predicciones que más se acerquen a la situación real.

#### Basales

* Una línea **azul continua** muestra la administración basal de tu bomba, y refleja la administración real a lo largo del tiempo.
* La línea **azul punteada** es lo que sería la tasa basal si no hubiera ajustes basales tmporales (TBRs).
* Durante el tiempo en los que se proporciona una tasa basal estándar, el área bajo la curva se muestra en azul oscuro.
* Cuando la tasa basal se ajusta (aumenta o disminuye) temporalmente, el área bajo la curva se muestra en azul claro.

#### Actividad

* La línea **amarilla fina** muestra la actividad de la insulina. 
* Se basa en la caída esperada de la glucosa en sangre por la insulina en tu cuerpo, si no hubieran otros factores (como carbohidratos) presentes.

### Sección G - Gráficos adicionales

* Se pueden activar hasta cuatro gráficos adicionales debajo del gráfico principal.
* Para abrir la configuración para añadir gráficos adicionales, pulsa sobre el triángulo del lado derecho del [gráfico principal](../Getting-Started/Screenshots#section-f-main-graph) y desplázate hacia abajo.

![Configuración de gráficos adicionales](../images/Home2020_AdditionalGraphSetting.png)

* Para agregar un gráfico adicional, marque la casilla a la izquierda del nombre (es decir, \---\---- Gráfico 1 \---\----).

#### Insulina absoluta

* Insulina activa, incluyendo bolos **y basal**.

#### Insulina a bordo (IOB)

* Muestra la insulina que tienes "a bordo" (la insulina activa que tiene tu cuerpo). Esto incluye la insulina de bolos y de basales temporales (**pero quedan excluidas las tasas basales establecidas en tu perfil**).
* Si no hubieran [SMBs](../Usage/Open-APS-features#super-micro-bolus-smb), ni bolos, ni tiempo por debajo de rango (TBR) durante la duración de la insulina activa (DIA), el valor sería cero.
* La IOB puede ser negativa, si no queda ningún resto de bolo previo y tenemos una basal temporal a cero o baja durante mucho tiempo.
* La disminución depende de tu valor de [DIA y de la configuración de tu perfil](../Configuration/Config-Builder#local-profile). 

#### Carbohidratos activos (COB)

* Muestra los carbohidratos que tienes "a bordo" (los activos, que aún no han sido absorvidos en tu cuerpo). 
* Su disminución depende de las desviaciones que el algoritmo detecta. 
* Si se detecta una absorción de carbohidratos más alta de lo esperado, se administrará más insulina, lo que aumentará la IOB (más o menos, dependiendo de la configuración de seguridad). 

#### Desviaciones

* **GRIS**: las barras muestran la desviación debida a los carbohidratos. 
* **VERDE**: las barras muestran que la glucosa en sangre es más alta de lo que el algoritmo esperaba que fuera. Las barras verdes se utilizan para aumentar la resistencia en [Autosens](../Usage/Open-APS-features#autosens).
* **ROJO**: las barras muestran que la glucosa en sangre es inferior a la esperada por el algoritmo. Las barras rojas se utilizan para aumentar la sensibilidad en [Autosens](../Usage/Open-APS-features#autosens).
* **AMARILLO**: las barras muestran la desviación debida a las comidas no anunciadas (UAM).
* **NEGRO**: las barras muestran pequeñas desviaciones que no se tienen en cuenta para la sensibilidad.

#### Sensibilidad

* Muestra la sensibilidad que [Autosens](../Usage/Open-APS-features#autosens) ha detectado. 
* La sensibilidad es el cálculo de la sensibilidad a la insulina como resultado del ejercicio, las hormonas, etc.

#### Actividad

* Muestra la actividad de la insulina, calculada por tu perfil de insulina (no derivada de la IOB). 
* El valor es más alto cuando se está más cerca del pico de acción máximo de la insulina.
* Esto se traduce en un valor negativo cuando la IOB está disminuyendo. 

#### Pendiente de desviación

* Valor interno usado por el algortimo.

### Sección H - Botones

![Botones de la página principal](../images/Home2020_Buttons.png)

* Los botones de Insulina, Carbohidratos y Calculadora siempre se muestran.
   
   * Si se pierde la conexión con la bomba, el botón de insulina no se muestra.

* Se pueden configurar otros botones en las [Preferencias](../Configuration/Preferences#buttons).

#### Insulina

![Botón de insulina](../images/Home2020_ButtonInsulin.png)

* Permite administrar una cantidad de insulina sin usar el [Asistente de bolo (Calculadora)](#bolus-wizard).
* Marcar la primera casilla permite iniciar automáticamente tu [Objetivo Temporal Comiendo Pronto](../Configuration/Preferences#default-temp-targets).</0>
* Si no quieres administrar el bolo con la bomba, pero quieres registrar una cantidad de insulina en la aplicación (p. ej. insulina administrada a boli), marca la casilla correspondiente.

#### Carbohidratos [g]

![Botón de carbohidratos](../images/Home2020_ButtonCarbs.png)

* Permite registrar carbohidratos sin bolo.
* Se pueden establecer algunos [objetivos temporales preestablecidos](../Configuration/Preferences#default-temp-targets) marcando la casilla correspondiente (Actividad, Comiendo Pronto o Hipo).
* Retardo: ¿Cuándo has comido o comerás los carbohidratos? (en minutos).
* Duración: Para usarlo con los eCarbs ["carbohidratos extendidos"](../Usage/Extended-Carbs.rst)
* Puedes usar los botones rápidos para aumentar la cantidad de carbohidratos.
* Las notas se pueden subir a Nightscout, dependiendo de tu configuración de [NSClient](../Configuration/Preferences#nsclient).

#### Calculadora

* Revisa la sección del "Asistente de bolo" [a continuación](#bolus-wizard)

#### Calibraciones

* Envía una calibración a xDrip+ o abre la pantalla de calibración de Dexcom (BYODA).
* Debe ser activado previamente en las [Preferencias](../Configuration/Preferences#buttons).

#### MCG

* Abre xDrip+ o BYODA.
* Pulsar el botón atrás del teléfono, vuelve a AAPS.
* Debe ser activado previamente en las [Preferencias](../Configuration/Preferences#buttons).

#### Asistente Rápido

* Permite añadir una cantidad de carbohidratos y establecer los cálculos básicos.
* Los detalles se configuran en las [Preferencias](../Configuration/Preferences#quick-wizard).

## Asistente de bolo (Calculadora)

![Asistente de bolo](../images/Home2020_BolusWizard_v2.png)

Aquí es donde debes acceder para poner un bolo para una comida. Este es el sitio donde normalmente se hace.

### Sección I

* El campo de glucosa (BG) normalmente estará relleno con la última lectura de glucosa de nuestro MCG. Si no dispones de ningún MCG o no está funcionando, el campo aparecerá en blanco. 
* En el campo "Carbohidratos" debes añadir la cantidad de carbohidratos estimada de la comida, sobre la que vas a recibir el bolo. 
* El campo "Corrección" se utiliza para modificar la dosis de insulina final, si queremos hacerlo por algún motivo.
* El campo "Tiempo de absorción" es para la administración previa de bolos,. Podemos indicarle al sistema que habrá un retraso desde que ponemos el bolo de la comida, hasta que lleguen los carbohidratos (tiempo de espera). Se puede especificar un número negativo, si es estamos poniendo un bolo para unos carbohidratos que ya hemos comido previamente.

#### Recordatorio de comida

* Cuando configuramos carbohidratos en el futuro, podemos seleccionar la casilla de la alarma (ésta se marca automáticamente si cambiamos el tiempo de absorción al futuro), para que nos recuerde el momento en el que vamos a comer los carbohidratos que anunciamos previamente en AndroidAPS.
   
   ![Asistente de bolo con recordatorio de comida](../images/Home2021_BolusWizard_EatingReminder.png)

### Sección J

* La casilla de "Superbolo" añade al bolo de comida la insulina basal de las dos horas siguientes al bolo y configura una TBR a cero durante dos horas, para recuperar la insulina extra adelantada en el bolo. Esta opción sólo aparece cuando marcamos "Activar [superbolo](../Configuration/Preferences#superbolus) en asistente" dentro de los "Ajustes avanzados" de las [Preferencias de inicio](../Configuration/Preferences#overview).
* La idea es adelantar un extra de insulina antes y tratar de reducir los picos de algunas comidas.
* Para conocer más detalles, visita la página web: [diabetesnet.com](https://www.diabetesnet.com/diabetes-technology/blue-skying/super-bolus/).

### Sección K

* Muestra el bolo calculado. 
* Si la cantidad de insulina a bordo (IOB) es superior al bolo calculado, entonces sólo se mostrará la cantidad de carbohidratos que son necesarios.
* Las notas se pueden subir a Nightscout, dependiendo de tu configuración de [NSClient](../Configuration/Preferences#nsclient).

### Sección L

* Detalles de los cálculos del asistente de bolo.
* Puedes desmarcar las casillas que no quieras incluir en los cálculos, aunque por lo general no es algo habitual.
* Por motivos de seguridad, la casilla **OT** debe marcarse manualmente, si queremos que el asistente de bolo realice los cálculos en base al objetivo temporal existente.

#### Combinaciones de COB e IOB y su significado

* Por motivos de seguridad, la casilla IOB no se puede desmarcar cuando la casilla COB está marcada, ya que de esta forma, AAPS no tiene en cuenta la insulina administrada previamente, y corremos el riesgo de poner demasiada insulina.
* Si se marcan las casillas COB e IOB, se tienen en cuenta en los cálculos toda la insulina administrada mediante TBR o SMB, así como todos los carbohidratos que aún no han sido absorbidos ni cubiertos con insulina.
* Si se marca la casilla de IOB sin la de COB, AAPS tiene en cuenta la insulina ya entregada, pero no añadirá más insulina para los carbohidratos que aún no han sido absorbidos. Esto se traduce en que nos aparecerán los "carbohidratos faltantes".
* Si queremos administrar un bolo para una **comida adicional** poco después de un bolo de comida (p. ej. un postre adicional), puede ser útil **desmarcar todas las casillas**. De esta manera, solo se añaden los nuevos carbohidratos, ya que la comida principal no necesariamente está absorbida, por lo que la IOB no coincidirá con con precisión con los COB, poco después de un bolo de comida.

#### Detección de COB incorrectos

![Absorción lenta de carbohidratos](../images/Calculator_SlowCarbAbsorption.png)

* Si ves el aviso de advertencia anterior después de usar el asistente de bolo, AndroidAPS ha detectado que el valor de COB calculado puede ser incorrecto. 
* Por lo tanto, si quieres volver a administrar un bolo después de una comida previa con COB activo, ¡debes de tener mucho cuidado para evitar posibles sobredosis de insulina! 
* Para obtener más detalles, consulta las sugerencias en la [página de cálculo de COB](../Usage/COB-calculation#detection-of-wrong-cob-values).

## Pestaña de Acciones

![Pestaña de acciones](../images/Home2021_Action.png)

### Sección M - Acciones

* El botón [Cambio de perfil](../Usage/Profiles#profile-switch) es un método alternativo a pulsar sobre el [perfil activo](../Getting-Started/Screenshots#section-b-profile-target) de la pantalla principal.
* El botón [Objetivo temporal](../Usage/temptarget#temp-targets) es un método alternativo a pulsar sobre el [objetivo actual](../Getting-Started/Screenshots#section-b-profile-target) de la pantalla principal.
* Botón iniciar o cancelar una tasa basal temporal. Hay que tener en cuenta que el botón cambia de "Basal temporal" a "Cancelar x%" cuando se establece una tasa basal temporal.
* Aunque los [bolos extendidos](../Usage/Extended-Carbs#extended boluses) no funcionan realmente en un entorno de lazo cerrado, algunas personas pedían una opción para usar bolos extendidos de todos modos.
   
   * Esta opción solo está disponible para las bombas de insulina Dana RS y Accu-Chek Insight. 
   * El lazo cerrado se detendrá automáticamente y cambiará a modo de lazo abierto, durante el tiempo que dure el bolo extendido.
   * Asegúrate de leer todos los [detalles](../Usage/Extended-Carbs#extended boluses) antes de usar esta opción.

### Sección N - Portal de cuidados

* Muestra la siguiente información:
   
   * Edad del sensor y nivel (porcentaje de batería)
   * Edad de la insulina y nivel (unidades disponibles)
   * Edad de la cánula
   * Edad de la batería de la bomba y nivel (porcentaje de la batería)

* Si estamos usando el tema de [Baja resolución](../Configuration/Preferences#skin), se mostrará menos información.

#### Nivel del sensor (batería)

* Necesita una versión de xDrip+ Nightly del 10 de Diciembre de 2020 or más reciente.
* Sólo funciona con MCG con transmisor adicional como MiaoMiao 2. (Técnicamente, el sensor tiene que enviar la información del nivel del Miao Miao a xDrip+).
* Los umbrales se pueden cambiar en las [Preferencias](../Configuration/Preferences#status-lights).
* Si el nivel de batería del sensor es el mismo que el nivel de batería del teléfono, es probable que la versión de xDrip+ sea demasiado antigua y sea necesario que la actualices.
   
   ![Nivel de batería del sensor igual que el del teléfono](../images/Home2021_ActionSensorBat.png)

### Sección O - Portal de cuidados

* La medición de glucosa en sangre, el cebado/llenado de la cánula, la inserción del sensor y el cambio de batería de la bomba son la base de los datos que se muestran en la [Sección N](#careportal-section-n).
* La opción de Cebar/Llenar permite registrar el cambio de lugar de la cánula y el cambio del cartucho de insulina.
* La "Sección O" refleja el portal de cuidados de Nightscout. De esta manera, Ejercicio, Aviso y Pregunta representan formas especiales de notas.

### Sección P - Herramientas

#### Historial

* Premite acceder a datos históricos de AAPS.

#### TTD

* Total Dosis Diaria (TDD) = Bolos + Basales por día
* Algunos médicos, especialmente para nuevos usuarios de bombas de insulina, usan una relación de bolo/basal del 50:50. 
* De esta forma, el ratio se calcula como TDD / 2 * TBB (Total nivel basal = suma de la tasas basales de 24 horas). 
* Otros prefieren un rango entre el 32% y el 37% del TDD para TBB. 
* Estas reglas son generales y tienen una validez real limitada. Nota: ¡Tu diabetes puede variar!

![Examinar historial + TDD](../images/Home2021_Action_HB_TDD.png)

## Perfil de Insulina

![Perfil de Insulina](../images/Screenshot_insulin_profile.png)

* Muestra el perfil de actividad de la insulina que has elegido en la [Tabla de configuraciones](../Configuration/Config-Builder#insulin). 
* La línea MORADA muestra la cantidad de insulina que va quedando después de ser entregada y cómo va disminuyendo con el paso del tiempo. La línea AZUL cómo de activa es en cada momento.
* Una de las cosas más importantes a tener en cuenta es que la caida de la curva es lenta y prolongada en el tiempo y hay que tener en cuenta las posibles colas. 
* Si has estado acostumbrado a usar bombas en manual, probablemente estés acostumbrado a suponer que la insulina decae en unas 3,5 horas. 
* Sin embargo, cuando se utiliza un lazo cerrado, es mejor usar colas más largas (configurando más alto el valor de DIA), ya que los cálculos son mucho más precisos y estas pequeñas cantidades se van sumando cuando se realizan los cálculos recursivos en el algoritmo de AndroidAPS.

Para conocer más detalles de los diferentes tipos de insulina, sus perfiles de actividad y por qué todo esto es tan importante, puedes leer un artículo aquí, sobre como [Comprendiendo las nuevas curvas IOB basadas en curvas de actividad exponencial](https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/understanding-insulin-on-board-calculations.html#understanding-the-new-iob-curves-based-on-exponential-activity-curves)

También puedes leer un excelente artículo al respecto aquí: [Por qué nos equivocamos regularmente en los tiempos de duración de la acción de la insulina (DIA) que usamos y por qué es tan importante...](https://www.diabettech.com/insulin/why-we-are-regularly-wrong-in-the-duration-of-insulin-action-dia-times-we-use-and-why-it-matters/)

Y más en: [Curvas de Insulina Exponencial + Fiasp](https://seemycgm.com/2017/10/21/exponential-insulin-curves-fiasp/)

## Estado de la bomba de insulina

![Estado de la bomba de insulina](../images/Screenshot_PumpStatus.png)

* La información del estado de la bomba es diferente en cada caso. La información mostrada depende del modelo de bomba que utilicemos.
* Revisar la página de [bombas de insulina](../Hardware/pumps.md) para conocer los detalles.

## Portal de cuidados (Care Portal)

El portal de cuidados replicó algunas de las funciones disponibles en nuestra página de Nightscout, debajo del símbolo "+". Ésto nos permite agregar notas a los registros.

### Revisión del cálculo de carbohidratos

![Revisar cálculos de carbohidratos en la pestaña de tratamientos](../images/Screenshots_TreatCalc.png)

* Si has utilizado el [Asistente de bolo](../Getting-Started/Screenshots#bolus-wizard) para calcular la dosis de insulina, es posible revisar el cálculo más adelante, desde la pestaña de tratamientos.
* Sólo hay que pulsar sobre el enlace verde "Cálculo". Dependiendo de la bomba que utilicemos, la insulina y los carbohidratos se pueden mostrar en una única línea en los tratamientos.

### Corrección de carbohidratos

![Tratamiento en 1 o 2 líneas](../images/Treatment_1or2_lines.png)

La pestaña de tratamientos se puede utilizar para corregir entradas de carbohidratos erróneas (p. ej. los carbohidratos sobreestimados o subestimados).

1. Comprueba y recuerda los COB y la IOB actuales de la pantalla de inicio.
2. Dependiendo de la bomba, en la pestaña de tratamientos, los carbohidratos pueden mostrarse junto con la insulina en una línea o como una entrada separada (p. ej. con Dana RS).
3. Elimina la entrada con la cantidad de carbohidratos errónea.
4. Asegúrate de que los carbohidratos se han eliminado correctamente comprobando los COB activos, accediendo de nuevo a la pantalla de inicio.
5. Haz lo mismo con la IOB si sólo hay una línea en la pestaña de tratamientos que incluye los carbohidratos e insulina.
   
   → Si los carbohidratos no se eliminan según lo previsto y añades carbohidratos adicionales como se explica en el punto (6.), los COB serán demasiado altos, lo que podría conducir a una administración de insulina demasiado alta.

6. Añade la cantidad correcta de carbohidratos mediante el botón de "Carbohidratos" de la pantalla de inicio y asegúrate de establecer la hora correcta del evento.

7. Si solo hay una línea en la pestaña de tratamientos que incluye los carbohidratos y la insulina, debes añadir también la cantidad de insulina. Asegúrate de configurar correctamente la hora del evento y verifica la IOB en la pantalla de inicio después de confirmar la nueva entrada.

## Loop, AMA o SMB

* Estas pestañas muestran los detalles sobre los cálculos de los algoritmos y porqué AAPS actúa como lo hace.
* Los cálculos se actualizan cada vez que el sistema recibe una nueva lectura de nuestro MCG.
* Para conocer más detalles, revisa la sección [ APS en la página de configuraciones](../Configuration/Config-Builder#aps).

## Perfil

![Perfil](../images/Screenshots_Profile.png)

* El perfil contine información personal sobre nuestra diabetes, como:
   
   * DIA (Duración de la insulina activa)
   * IC or I:C: Ratio de carbohidatos a Insulina
   * ISF: Factor de sensibilidad a la insulina
   * Tasa basal
   * Objetivo: Nivel de glucosa en sangre que quieres que AAPS alcance.

* Desde la versión 3.0 sólo se pueden usar [perfiles locales](../Configuration/Config-Builder#local-profile). El perfil local puede ser editado desde tu teléfono móvil y sincronizado a tu página de Nightscout.

## Tratamiento

Historial de los siguientes tratamientos:

* Carbohidratos y bolos: con opción a [eliminar registros](../Getting-Started/Screenshots#carb-correction) para corregir el historial.
* [Bolo extendido](../Usage/Extended-Carbs#extended-bolus-and-switch-to-open-loop-dana-and-insight-pump-only)
* Tasa basal temporal
* [Objetivo temporal](../Usage/temptarget.md)
* [Cambio de perfil](../Usage/Profiles.md)
* [Portal de cuidados](../Usage/CPbefore26#careportal-discontinued): Notas añadidas mediante la pestaña de "Acciones" y mediante las notas de los cuadros de diálogo.

## Origen de glucosa - xDrip+, Dexcom (BYODA),...

![Pestaña Origen BG - aquí xDrip](../images/Screenshots_BGSource.png)

* Dependiendo de la configuración establecidad en "Origen de Glucosa", el nombre de la pestaña será diferente.
* Muestra el historial de lecturas del MCG y posibilita la opción de eliminar lecturas en caso de fallos (p. ej. bajada por compresión).

## NSClient

![NSClient](../images/Screenshots_NSClient.png)

* Muestra el estado de la conexión con nuestra página de Nightscout.
* La configuración se establece en las [Preferencias](../Configuration/Preferences#nsclient). Puedes abrir la sección correspondiente pulsando sobre el engranaje de la parte superior derecha de la pantalla. 
* Para acceder a la resolución de problemas, accede a la siguiente [página](../Usage/Troubleshooting-NSClient.md).