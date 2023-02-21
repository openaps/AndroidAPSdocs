# Pantallas de AndroidAPS

## Pantalla de inicio

![Pantalla de inicio V2.7](../images/Home2020_Homescreen.png)

Esta es la primera pantalla que encontrarás cuando abras AndroidAPS y contiene la mayor parte de la información que necesitarás en tu día a día.

### Sección A - Pestañas

* Navegar entre los distintos módulos de AndroidAPS.
* También puedes cambiar de pantalla deslizando hacia la izquierda o la derecha.
* Displayed tabs can be selected in [config builder](Config-Builder-tab-or-hamburger-menu).

(Screenshots-section-b-profile-target)=

### Sección B - Perfil & objetivo

#### Perfil actual

![Profile switch remaining duration](../images/Home2020_ProfileSwitch.png)

* El perfil actual se muestra en la barra izquierda.
* Para ver los detalles del perfil, realiza una pulsación corta sobre la barra de perfil.
* Long press profile bar to [switch between different profiles](Profiles-profile-switch).
* Si en el cambio de perfil se estableció un "Tiempo del cambio", ese tiempo se mostrará en minutos entre paréntesis.

#### Objetivo

![Temp target remaining duration](../images/Home2020_TT.png)

* El objetivo actual de glucosa en sangre se muestra en la barra derecha.
* Una pulsación corta o larga sobre la barra de objetivo, permite establecer un [objetivo temporal](../Usage/temptarget.md).
* Cuando se establece un objetivo temporal, la barra se vuelve amarilla y el tiempo restante del objetivo temporal se muestra entre paréntesis.

(Screenshots-visualization-of-dynamic-target-adjustment)=

#### Visualización de ajuste del objetivo dinámico (Autosens)

![Visualization of dynamic target adjustment](../images/Home2020_DynamicTargetAdjustment.png)

* AAPS puede ajustar dinámicamente tu objetivo en función de la sensibilidad si estás utilizando el algoritmo SMB.
* Enable either one or both of the [following options](Preferences-openaps-smb-settings) 
   * "Sensibilidad aumenta el objetivo" y/o 
   * "Resistencia baja el objetivo" 
* Si AAPS detecta resistencia o sensibilidad, el valor del objetivo cambiará del establecido en el perfil. 
* Cuando autosens modifique el objetivo de glucosa de forma dinámica, el fondo del objetivo se mostrará verde.

### Sección C - Glucosa (BG) & estado del lazo

#### Glucosa en sangre actual

* La última lectura de glucosa en sangre de tu MCG se muestra en el lado izquierdo.
* Color of the BG value reflects the status to the defined [range](Preferences-range-for-visualization). 
   * Verde = En rango
   * Rojo = Por debajo del rango
   * Amarillo = Por encima del rango
* El bloque gris central, muestra los minutos desde la última lectura, así como los cambios (delta) desde la última lectura y desde los últimos 15 y 40 minutos.

(Screenshots-loop-status)=

#### Estado del lazo

![Estado del lazo](../images/Home2020_LoopStatus.png)

* Un nuevo icono muestra el estado del lazo:
   
   * Círculo verde = Lazo cerrado funcionando
   * green circle with dotted line = [low glucose suspend (LGS)](Objectives-objective-6-starting-to-close-the-loop-with-low-glucose-suspend)
   * Círculo rojo = Lazo desactivado (no funciona de forma permanente)
   * Círculo amarillo = Lazo suspendido (pausado temporalmente, aunque la insulina basal se suministra) - el tiempo restante se muestra debajo del icono
   * Círculo gris = Bomba desconectada (No se suministra ninguna dosis de insulina temporalmente) - el tiempo restante se muestra debajo del icono
   * Círculo naranja = Superbolo en ejecución - el tiempo restante se muestra debajo del icono
   * Círculo azul con línea punteada = Lazo abierto

* Una pulsación corta o larga sobre el icono del lazo, abre las opciones para cambiar el modo del lazo (cerrado, suspensión por glucosa baja, abierto o desactivado), suspender/reanudar lazo o desconectar/reconectar bomba.
   
   * Si se realiza una pulsación corta sobre el icono de Lazo, es necesaria una confirmación después de seleccionar la opción deseada.
   
   ![Menú de estado de bucle](../images/Home2020_Loop_Dialog.png)

(Screenshots-bg-warning-sign)=

#### Señal de advertencia de glucosa

Desde la versión de AndroidAPS 3.0, puede aparecer una señal de advertencia debajo de la lectura de glucosa de la pantalla principal.

*Note*: Up to 30h hours are taken into accord for AAPS calculations. So even after you solved the origin problem, it can take about 30 hours for the yellow triangle to disappear after the last irregular interval occurred.

To remove it immediately you need to manually delete a couple of entries from the Dexcom/xDrip+ tab.

However, when there are a lot of duplicates, it might be easier to

* [backup your settings](../Usage/ExportImportSettings.md),
* Restablecer las bases de datos, desde el menú de mantenimiento
* [import your settings](../Usage/ExportImportSettings.md) again

##### Señad de advertencia roja: Datos de glucosa duplicados

The red warning sign is signaling you to get active immediately: You are receiving duplicate BG data, which does avoid the loop to do its work right. Therefore your loop will be disabled until it is resolved.

![Triángulo de adverntencia de glucosa en rojo](../images/bg_warn_red.png)

You need to find out why you get duplicate BGs:

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

![Section D](../images/Home2020_TBR.png)

* Jeringa: insulina a bordo (IOB) - cantidad de insulina activa dentro del cuerpo
   
   * La insulina a bordo de la imagen sería cero si la basal estándar estuviera en funcionamiento y no hubiera ninguna insulina restante de bolos previos. 
   * El IOB puede ser negativo si recientemente han habido períodos de reducción basal.
   * Pulsa el icono para ver la división de los bolos y de la insulina basal.

* Grain: [carbs on board (COB)](../Usage/COB-calculation.md) - yet unabsorbed carbs you have eaten before -> icon pulses if carbs are required

* Línea morada: tasa basal: cambios en el icono que reflejan cambios temporales en la tasa basal (plano al 100%) 
   * Pulsa sobre el icono para ver la tasa basal base y los detalles de cualquier basal temporal (incluida la duración restante)
* Arrows up & down: indicating actual [autosens](Open-APS-features-autosens) status (enabled or disabled) and value is shown below icon

#### Carbohidratos requeridos

![Carbohidratos requeridos](../images/Home2020_CarbsRequired.png)

* La sugerencia de carbohidratos se produce cuando el algoritmo de referencia detecta que van a ser necesarios.
* Esto ocurre cuando el algoritmo oref cree que no puede rescatarte con una basal temporal al 0% y serán necesarios carbohidratos para solucionarlo.
* Las notificaciones de carbohidratos son mucho más sofisticadas que las del asistentede bolo (calculadora). Es posible que se muestre una sugerencia de carbohidratos mientras que en el asistente de bolo no se muestran los carbohidratos faltantes.
* Las notificaciones de carbohidratos requeridos se pueden enviar a Nightscout si queremos, en cuyo caso se mostrará y se transmitirá.

### Sección E - Luces de estado

![Section E](../images/Home2020_StatusLights.png)

* Las luces de estado muestran una advertencia visual para: 
   * Edad de la cánula
   * Edad de la insulina (días de uso del reservorio, si se utiliza)
   * Nivel del reservorio/cartucho (unidades)
   * Edad del sensor
   * Edad y nivel de la batería/pila (%)
* Cuando se supera el umbral de advertencia, los valores se muestran en amarillo.
* Cuando se supera el umbral crítico, los valores se muestran en rojo.
* Settings can be made in [preferences](Preferences-status-lights).

(Screenshots-section-f-main-graph)=

### Sección F - Gráfico principal

![Section F](../images/Home2020_MainGraph.png)

* El gráfico muestra la glucosa en sangre (BG), tal y como se lee del monitor continuo de glucosa (MCG). 
* Aquí se muestran las notas que se añaden desde la pestaña de acciones, las mediciones de glucosa capilar, la entrada de carbohidratos, así como los cambios de perfil. 
* Pulsaciones largas sobre el gráfico, cambian la escala del mismo. Se pueden seleccionar escalas de: 6, 12, 18 0 24 horas.
* El área verde muestra tu rango objetivo. It can be configured in [preferences](Preferences-range-for-visualization).
* Blue triangles show [SMB](Open-APS-features-super-micro-bolus-smb) - if enabled in [preferences](Preferences-openaps-smb-settings).
* Información opcional:
   
   * Predicciones
   * Basales
   * Actividad - curva de actividad de la insulina

#### Activar información opcional

* Pulsa sobre el triángulo del lado derecho del gráfico principal para seleccionar qué información se mostrará en el gráfico principal.
* Para el gráfico principal solo están disponibles las cuatro opciones de arriba, las que se muestran encima de la línea "\---\---- Gráfico 1 \---\----".
   
   ![Configuración del gráfico principal](../images/Home2020_MainGraphSetting.png)

(Screenshots-prediction-lines)=

#### Líneas de predicción

* **Orange** line: [COB](../Usage/COB-calculation.md) (colour is used generally to represent COB and carbs)
   
   La línea de predicción muestra donde irá la glucosa (no a dónde irá el propio COB) en función de la configuración actual de la bomba y suponiendo que las desviaciones debidas a la absorción de carbohidratos se mantienen constantes. Esta línea sólo aparece si se conocen los carbohidratos (COB).

* **Azul oscuro** línea: IOB (color que se utiliza generalmente para representar la IOB y la insulina)
   
   La línea de predicción sólo muestra lo que ocurriría bajo la influencia de la insulina. Por ejemplo, si puso un poco de insulina y luego no comió ningún carbohidrato.

* **Azul claro** línea: cero-temp (predicción de la glucosa si se establecería una tasa basal temporal al 0%)
   
   La línea de predicción muestra cómo cambiaría la línea de trayectoria de la IOB si la bomba detuviera toda la administración de insulina (0% TBR).
   
   *This line appears only when the [SMB](Preferences-advanced-meal-assist-ama-or-super-micro-bolus-smb) algorithm is used.*

* **Dark yellow** line: [UAM](Sensitivity-detection-and-COB-sensitivity-oref1) (un-announced meals)
   
   Las comidas no anunciadas significan que se detecta un aumento significativo en los niveles de glucosa, debido a las comidas, la adrenalina u otras influencias. La línea de predicción es similar a la línea NARANJA COB, pero asume que las desviaciones se recortarán a un ritmo constante (extendiendo la tasa actual de reducción).
   
   *This line appears only when the [SMB](Preferences-advanced-meal-assist-ama-or-super-micro-bolus-smb) algorithm is used.*

* **Dark orange** line: aCOB (accelerated carbohydrate absorption)
   
   Similar to COB, but assuming a static 10 mg/dL/5m (-0.555 mmol/l/5m) carb absorption rate. Deprecated and of limited usefulness.
   
   *This line appears only when the older [AMA](Preferences-advanced-meal-assist-ama-or-super-micro-bolus-smb) algorithm is used.*

Usually your real glucose curve ends up in the middle of these lines, or close to the one which makes assumptions that closest resemble your situation.

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
* To open settings for additional graphs click the triangle on the right side of the [main graph](Screenshots-section-f-main-graph) and scroll down.

![Additional graph settings](../images/Home2020_AdditionalGraphSetting.png)

* Para agregar un gráfico adicional, marque la casilla a la izquierda del nombre (es decir, \---\---- Gráfico 1 \---\----).

#### Insulina absoluta

* Insulina activa, incluyendo bolos **y basal**.

#### Insulina a bordo (IOB)

* Muestra la insulina que tienes "a bordo" (la insulina activa que tiene tu cuerpo). Esto incluye la insulina de bolos y de basales temporales (**pero quedan excluidas las tasas basales establecidas en tu perfil**).
* If there were no [SMBs](Open-APS-features-super-micro-bolus-smb), no boluses and no TBR during DIA time this would be zero.
* La IOB puede ser negativa, si no queda ningún resto de bolo previo y tenemos una basal temporal a cero o baja durante mucho tiempo.
* Decaying depends on your [DIA and insulin profile settings](Config-Builder-local-profile). 

#### Carbohidratos activos (COB)

* Muestra los carbohidratos que tienes "a bordo" (los activos, que aún no han sido absorvidos en tu cuerpo). 
* Su disminución depende de las desviaciones que el algoritmo detecta. 
* Si se detecta una absorción de carbohidratos más alta de lo esperado, se administrará más insulina, lo que aumentará la IOB (más o menos, dependiendo de la configuración de seguridad). 

#### Desviaciones

* **GRIS**: las barras muestran la desviación debida a los carbohidratos. 
* **VERDE**: las barras muestran que la glucosa en sangre es más alta de lo que el algoritmo esperaba que fuera. Green bars are used to increase resistance in [Autosens](Open-APS-features-autosens).
* **ROJO**: las barras muestran que la glucosa en sangre es inferior a la esperada por el algoritmo. Red bars are used to increase sensitivity in [Autosens](Open-APS-features-autosens).
* **AMARILLO**: las barras muestran la desviación debida a las comidas no anunciadas (UAM).
* **NEGRO**: las barras muestran pequeñas desviaciones que no se tienen en cuenta para la sensibilidad.

#### Sensibilidad

* Shows the sensitivity that [Autosens](Open-APS-features-autosens) has detected. 
* La sensibilidad es el cálculo de la sensibilidad a la insulina como resultado del ejercicio, las hormonas, etc.

#### Actividad

* Muestra la actividad de la insulina, calculada por tu perfil de insulina (no derivada de la IOB). 
* El valor es más alto cuando se está más cerca del pico de acción máximo de la insulina.
* Esto se traduce en un valor negativo cuando la IOB está disminuyendo. 

#### Pendiente de desviación

* Valor interno usado por el algortimo.

### Sección H - Botones

![Homescreen buttons](../images/Home2020_Buttons.png)

* Los botones de Insulina, Carbohidratos y Calculadora siempre se muestran.
   
   * Si se pierde la conexión con la bomba, el botón de insulina no se muestra.

* Other Buttons have to be setup in [preferences]Preferences-buttons).

#### Insulina

![Insulin button](../images/Home2020_ButtonInsulin.png)

* To give a certain amount of insulin without using [bolus calculator](Screenshots-bolus-wizard).
* By checking the box you can automatically start your [eating soon temp target](Preferences-default-temp-targets).
* Si no quieres administrar el bolo con la bomba, pero quieres registrar una cantidad de insulina en la aplicación (p. ej. insulina administrada a boli), marca la casilla correspondiente.

#### Carbohidratos [g]

![Carbs button](../images/Home2020_ButtonCarbs.png)

* Permite registrar carbohidratos sin bolo.
* Certain [pre-set temporary targets](Preferences-default-temp-targets) can be set directly by checking the box.
* Retardo: ¿Cuándo has comido o comerás los carbohidratos? (en minutos).
* Duration: To be used for ["extended carbs"](../Usage/Extended-Carbs.md)
* Puedes usar los botones rápidos para aumentar la cantidad de carbohidratos.
* Notes will be uploaded to Nightscout - depending on your settings for [NS client](Preferences-nsclient).

#### Calculadora

* See Bolus Wizard [section below](Screenshots-bolus-wizard)

#### Calibraciones

* Envía una calibración a xDrip+ o abre la pantalla de calibración de Dexcom (BYODA).
* Must be activated in [preferences](Preferences-buttons).

#### MCG

* Abre xDrip+ o BYODA.
* Pulsar el botón atrás del teléfono, vuelve a AAPS.
* Must be activated in [preferences](Preferences-buttons).

#### Asistente Rápido

* Permite añadir una cantidad de carbohidratos y establecer los cálculos básicos.
* Details are setup in [preferences](Preferences-quick-wizard).

(Screenshots-bolus-wizard)=

## Asistente de bolo (Calculadora)

![Bolus wizard](../images/Home2020_BolusWizard_v2.png)

When you want to make a meal bolus this is where you will normally make it from.

### Sección I

* El campo de glucosa (BG) normalmente estará relleno con la última lectura de glucosa de nuestro MCG. Si no dispones de ningún MCG o no está funcionando, el campo aparecerá en blanco. 
* En el campo "Carbohidratos" debes añadir la cantidad de carbohidratos estimada de la comida, sobre la que vas a recibir el bolo. 
* El campo "Corrección" se utiliza para modificar la dosis de insulina final, si queremos hacerlo por algún motivo.
* El campo "Tiempo de absorción" es para la administración previa de bolos,. Podemos indicarle al sistema que habrá un retraso desde que ponemos el bolo de la comida, hasta que lleguen los carbohidratos (tiempo de espera). Se puede especificar un número negativo, si es estamos poniendo un bolo para unos carbohidratos que ya hemos comido previamente.

(Screenshots-eating-reminder)=

#### Recordatorio de comida

* Cuando configuramos carbohidratos en el futuro, podemos seleccionar la casilla de la alarma (ésta se marca automáticamente si cambiamos el tiempo de absorción al futuro), para que nos recuerde el momento en el que vamos a comer los carbohidratos que anunciamos previamente en AndroidAPS.
   
   ![Asistente de bolo con recordatorio de comida](../images/Home2021_BolusWizard_EatingReminder.png)

### Sección J

* La casilla de "Superbolo" añade al bolo de comida la insulina basal de las dos horas siguientes al bolo y configura una TBR a cero durante dos horas, para recuperar la insulina extra adelantada en el bolo. The option only shows when "Enable [superbolus](Preferences-superbolus) in wizard" is set in the [preferences overview](Preferences-overview).
* La idea es adelantar un extra de insulina antes y tratar de reducir los picos de algunas comidas.
* Para conocer más detalles, visita la página web: [diabetesnet.com](https://www.diabetesnet.com/diabetes-technology/blue-skying/super-bolus/).

### Sección K

* Muestra el bolo calculado. 
* Si la cantidad de insulina a bordo (IOB) es superior al bolo calculado, entonces sólo se mostrará la cantidad de carbohidratos que son necesarios.
* Notes will be uploaded to Nightscout - depending on your settings for [NS client](Preferences-nsclient).

### Sección L

* Detalles de los cálculos del asistente de bolo.
* Puedes desmarcar las casillas que no quieras incluir en los cálculos, aunque por lo general no es algo habitual.
* Por motivos de seguridad, la casilla **OT** debe marcarse manualmente, si queremos que el asistente de bolo realice los cálculos en base al objetivo temporal existente.

#### Combinaciones de COB e IOB y su significado

* Por motivos de seguridad, la casilla IOB no se puede desmarcar cuando la casilla COB está marcada, ya que de esta forma, AAPS no tiene en cuenta la insulina administrada previamente, y corremos el riesgo de poner demasiada insulina.
* Si se marcan las casillas COB e IOB, se tienen en cuenta en los cálculos toda la insulina administrada mediante TBR o SMB, así como todos los carbohidratos que aún no han sido absorbidos ni cubiertos con insulina.
* Si se marca la casilla de IOB sin la de COB, AAPS tiene en cuenta la insulina ya entregada, pero no añadirá más insulina para los carbohidratos que aún no han sido absorbidos. Esto se traduce en que nos aparecerán los "carbohidratos faltantes".
* Si queremos administrar un bolo para una **comida adicional** poco después de un bolo de comida (p. ej. un postre adicional), puede ser útil **desmarcar todas las casillas**. De esta manera, solo se añaden los nuevos carbohidratos, ya que la comida principal no necesariamente está absorbida, por lo que la IOB no coincidirá con con precisión con los COB, poco después de un bolo de comida.

(Screenshots-wrong-cob-detection)=

#### Detección de COB incorrectos

![Slow carb absorption](../images/Calculator_SlowCarbAbsorption.png)

* Si ves el aviso de advertencia anterior después de usar el asistente de bolo, AndroidAPS ha detectado que el valor de COB calculado puede ser incorrecto. 
* Por lo tanto, si quieres volver a administrar un bolo después de una comida previa con COB activo, ¡debes de tener mucho cuidado para evitar posibles sobredosis de insulina! 
* For details see the hints on [COB calculation page](COB-calculation-detection-of-wrong-cob-values).

(Screenshots-action-tab)=

## Pestaña de Acciones

![Actions tab](../images/Home2021_Action.png)

### Sección M - Acciones

* Button [profile switch](Profiles-profile-switch) as an alternative to pressing the [current profile](Screenshots-section-b-profile-target) on homescreen.
* Button [temporary target](temptarget-temp-targets) as an alternative to pressing the [current target](Screenshots-section-b-profile-target) on homescreen.
* Botón iniciar o cancelar una tasa basal temporal. Hay que tener en cuenta que el botón cambia de "Basal temporal" a "Cancelar x%" cuando se establece una tasa basal temporal.
* Even though [extended boluses](Extended-Carbs-extended-bolus-and-why-they-wont-work-in-closed-loop-environment) do not really work in a closed loop environment some people were asking for an option to use extended bolus anyway.
   
   * Esta opción solo está disponible para las bombas de insulina Dana RS y Accu-Chek Insight. 
   * El lazo cerrado se detendrá automáticamente y cambiará a modo de lazo abierto, durante el tiempo que dure el bolo extendido.
   * Make sure to read the [details](../Usage/Extended-Carbs.md) before using this option.

(Screenshots-careportal-section-n)=

### Sección N - Portal de cuidados

* Muestra la siguiente información:
   
   * Edad del sensor y nivel (porcentaje de batería)
   * Edad de la insulina y nivel (unidades disponibles)
   * Edad de la cánula
   * Edad de la batería de la bomba y nivel (porcentaje de la batería)

* Less information will be shown if [low resolution skin](Preferences-skin) is used.

(Screenshots-sensor-level-battery)=

#### Nivel del sensor (batería)

* Necesita una versión de xDrip+ Nightly del 10 de Diciembre de 2020 or más reciente.
* Sólo funciona con MCG con transmisor adicional como MiaoMiao 2. (Técnicamente, el sensor tiene que enviar la información del nivel del Miao Miao a xDrip+).
* Thresholds can be set in [preferences](Preferences-status-lights).
* Si el nivel de batería del sensor es el mismo que el nivel de batería del teléfono, es probable que la versión de xDrip+ sea demasiado antigua y sea necesario que la actualices.
   
   ![Nivel de batería del sensor igual que el del teléfono](../images/Home2021_ActionSensorBat.png)

### Sección O - Portal de cuidados

* BG check, prime/fill, sensor insert and pump battery change are the base for the data displayed in [section N](Screenshots-careportal-section-n).
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

![Histroy browser + TDD](../images/Home2021_Action_HB_TDD.png)

(Screenshots-insulin-profile))=

## Perfil de Insulina

![Perfil de Insulina](../images/Screenshot_insulin_profile.png)

* This shows the activity profile of the insulin you have chosen in [config builder](Config-Builder-insulin). 
* La línea MORADA muestra la cantidad de insulina que va quedando después de ser entregada y cómo va disminuyendo con el paso del tiempo. La línea AZUL cómo de activa es en cada momento.
* Una de las cosas más importantes a tener en cuenta es que la caida de la curva es lenta y prolongada en el tiempo y hay que tener en cuenta las posibles colas. 
* Si has estado acostumbrado a usar bombas en manual, probablemente estés acostumbrado a suponer que la insulina decae en unas 3,5 horas. 
* Sin embargo, cuando se utiliza un lazo cerrado, es mejor usar colas más largas (configurando más alto el valor de DIA), ya que los cálculos son mucho más precisos y estas pequeñas cantidades se van sumando cuando se realizan los cálculos recursivos en el algoritmo de AndroidAPS.

For a more detailed discussion of the different types of insulin, their activity profiles and why all this matters you can read an article here on [Understanding the New IOB Curves Based on Exponential Activity Curves](https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/understanding-insulin-on-board-calculations.html#understanding-the-new-iob-curves-based-on-exponential-activity-curves)

And you can read an excellent blog article about it here: [Why we are regularly wrong in the duration of insulin action (DIA) times we use, and why it matters…](https://www.diabettech.com/insulin/why-we-are-regularly-wrong-in-the-duration-of-insulin-action-dia-times-we-use-and-why-it-matters/)

And even more at: [Exponential Insulin Curves + Fiasp](https://seemycgm.com/2017/10/21/exponential-insulin-curves-fiasp/)

## Estado de la bomba de insulina

![Estado de la bomba de insulina](../images/Screenshot_PumpStatus.png)

* La información del estado de la bomba es diferente en cada caso. La información mostrada depende del modelo de bomba que utilicemos.
* Revisar la página de [bombas de insulina](../Hardware/pumps.md) para conocer los detalles.

## Portal de cuidados (Care Portal)

Careportal replicated the functions you will find on your Nightscout screen under the “+” symbol which allows you to add notes to your records.

### Revisión del cálculo de carbohidratos

![Review carb calculation on t tab](../images/Screenshots_TreatCalc.png)

* If you have used the [Bolus Wizard](Screenshots-bolus-wizard) to calculate insulin dosage you can review this calculation later on ts tab.
* Sólo hay que pulsar sobre el enlace verde "Cálculo". (Depending on pump used insulin and carbs can also be shown in one single line in ts.)

(Screenshots-carb-correction)=

### Corrección de carbohidratos

![Treatment in 1 or 2 lines](../images/Treatment_1or2_lines.png)

Treatment tab can be used to correct faulty carb entries (i.e. you over- or underestimated carbs).

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
* For more details see [APS section on config builder page](Config-Builder-aps).

## Perfil

![Perfil](../images/Screenshots_Profile.png)

* El perfil contine información personal sobre nuestra diabetes, como:
   
   * DIA (Duración de la insulina activa)
   * IC or I:C: Ratio de carbohidatos a Insulina
   * ISF: Factor de sensibilidad a la insulina
   * Tasa basal
   * Objetivo: Nivel de glucosa en sangre que quieres que AAPS alcance.

* As of version 3.0 only [local profile](Config-Builder-local-profile) is possible. El perfil local puede ser editado desde tu teléfono móvil y sincronizado a tu página de Nightscout.

(Screenshots-treatment)=

## Tratamiento

History of the following treatments:

* Bolus & carbs -> option to [remove entries](Screenshots-carb-correction) to correct history
* [Bolo extendido](Extended-Carbs-extended-bolus-and-switch-to-open-loop-dana-and-insight-pump-only)
* Tasa basal temporal
* [Objetivo temporal](../Usage/temptarget.md)
* [Cambio de perfil](../Usage/Profiles.md)
* [Careportal](CPbefore26-careportal-discontinued) - notes entered through action tab and notes in dialogues

## Origen de glucosa - xDrip+, Dexcom (BYODA),...

![BG Source tab - here xDrip](../images/Screenshots_BGSource.png)

* Dependiendo de la configuración establecidad en "Origen de Glucosa", el nombre de la pestaña será diferente.
* Muestra el historial de lecturas del MCG y posibilita la opción de eliminar lecturas en caso de fallos (p. ej. bajada por compresión).

## NSClient

![NSClient](../images/Screenshots_NSClient.png)

* Muestra el estado de la conexión con nuestra página de Nightscout.
* Settings are made in [preferences](Preferences-nsclient). Puedes abrir la sección correspondiente pulsando sobre el engranaje de la parte superior derecha de la pantalla. 
* Para acceder a la resolución de problemas, accede a la siguiente [página](../Usage/Troubleshooting-NSClient.md).