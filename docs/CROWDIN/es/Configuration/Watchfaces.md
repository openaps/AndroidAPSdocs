# AAPS en reloj inteligente Wear OS

Puede instalar la aplicación AndroidAPS en su reloj **basado en Wear OS**. La versión de AAPS para reloj le permite:

* **mostrar datos en su reloj** proporcionando[ esferas personalizadas del reloj](../Configuration/Watchfaces#aaps-watchfaces) o en esferas estándar con complicaciones
* **control de AAPS en el teléfono**: para bolo, establecer un objetivo temporal, etc. 

### Antes de comprar un reloj...

* Algunas características como *complicaciones* requieren que Wear OS versión 2.0 o más reciente funcione
* Google ha renombrado de *Android Wear 1.x* a *Wear OS* a partir de la versión 2.x, de modo que cuando se dice *Android Wear* puede indicar la presencia de versiones mayores a la versión 1.x del sistema
* Si la descripción de los smartwatch indica sólo compatibilidad con *Android* y *iOS* - esto **no** significa que pueda ejecutar *Wear OS* - puede ser también de otro tipo de Proveedor de sistema operativo específico **que no es compatible con la AAPS Wear!**
* Consulte la [lista de teléfonos y relojes probados ](../Getting-Started/Phones#list-of-tested-phones) y [pregunta a la comunidad ](../Where-To-Go-For-Help/Connect-with-other-users.md) si duda de si su reloj será compatible

### Construyendo la versión de AAPS para Wear OS

Para construir la version de AAPS para Wear OS necesitas seleccionar la variante de la build "fullRelease" cuando [Construyes la APK](../Installing-AndroidAPS/Building-APK.md) (o la variante "pumpRelease" que te permitirá controlar la bomba de forma remota sin ejecutar el lazo).

¡Asegúrese de que las versiones de teléfono y de Wear de AAPS están firmadas con las mismas claves!

La variante Wear de APK debe ser instalada en el reloj de la misma manera que instalaremos el APK en el teléfono. Puede requerir la habilitación de *el modo de desarrollador* en el reloj y la carga y la instalación de APK de reloj con: `adb install wear-full-release.apk`

Cuando use la versión de Wear de AAPS, actualícela siempre junto con la versión del teléfono de la aplicación; mantenga sus versiones sincronizadas.

### Configuración en el teléfono

Dentro de AndroidAPS, en la "Tabla de configuraciones" necesitas activar ["habilitar Wear"](../Configuration/Config-Builder#wear).

## Control AAPS desde el reloj

AndroidAPS está diseñado para ser controlado por relojes Android Wear. If you want to bolus etc. from the watch then within "Wear settings" you need to enable "Controls from Watch".

Las siguientes funciones pueden activarse desde el reloj:

* Establecer un objetivo temporal
* Administrar un bolo
* Administrar carbohidratos extendidos (eCarbs)
* utilizar la calculadora del bolos (las variables de cálculo se pueden definir en [configuración ](../Configuration/Config-Builder#wear) en el teléfono)
* comprobar el estado del lazo y la bomba
* mostrar TDD (dosis diaria total = bolos + basal por día)

## Esferas de AAPS

Hay varias pantallas para elegir que incluyen datos como: delta promedio, IOB, dosis basal temporal activa, perfiles basales o gráfico de lecturas del medidor contínuo (CGM).

Asegúrate de que las notificaciones de AndroidAPS no estén bloqueadas en el reloj. Para poder confirmar cada acción (por ejemplo, administrar bolo, fijar objetivo temporal, etc.) recibirás una notificación que tendrás que deslizar y aceptar.

Para ir más rápido al menú de AAPS, haga una doble pulsación en su BG. Con una doble pulsación en la curva de BG, puede cambiar la escala de tiempo..

## Pantallas disponibles

![Pantallas disponibles](../images/Watchface_Types.png)

## Leyenda de esferas AAPSv2

![Leyendas en el reloj con AndroidAPSv2](../images/Watchface_Legend.png)

A - tiempo transcurrido desde el último lazo

B - Lectura de CGM

C - minutos desde la última lectura de CGM

D - cambio en comparación con la anterior lectura de CGM (en mmol o mg/dl)

E - cambio promedio en la lectura de CGM en los últimos 15 minutos

F - batería del teléfono

G - tasa de basal (se muestra en U/h durante la tasa normal y en % durante el TBR)

H - BGI (interacción de glucosa en sangre) -> el grado en que BG "debe" estar aumentando o cayendo sobre la base de la actividad de la insulina sola.

I - carbohidratos (carbohidratos a bordo | carbohidratos estimados en el futuro)

J - insulina a bordo (de bolos | de basal)

## Acceso al menú principal de AAPS

Para acceder al menú principal de AAPS, puede utilizar en las siguientes opciones:

* Pulsar dos veces en el valor de BG
* select AAPS icon in watch applications menu
* tap on AAPS complication (if configured for menu)

## Settings (in wear watch)

To access to the watchface settings, enter AAPS main menu, slide up and select "Settings".

Filled star is for enabled state (**On**), and hollow star icon indicates that setting is disabled (**Off**):

![Settings on/off](../images/Watchface_Settings_On_Off.png)

### AAPS companion parameters

* **Vibrate on Bolus** (default `On`):
* **Units for Actions** (default `mg/dl`): if **On** units for actions is `mg/dl`, if **Off** unit is `mmol/l`. Used when setting a TT from watch.

### Watchface settings

* **Show Date** (default `Off`): note, date is not available on all watchfaces
* **Show IOB** (default `On`): Display or not IOB value (setting for detailed value is in AAPS wear parameters)
* **Show COB** (default `On`): Display or not COB value
* **Show Delta** (default `On`): Display or not the BG variation of the last 5 minutes
* **Show AvgDelta** (default `On`): Display or not the average BG variation of the last 15 minutes
* **Show Phone Battery** (default `On`): Phone battery in %. Red if below 30% .
* **Show Rig Battery** (default `Off`): Rig battery is a synthesis of Phone battery, pump battery and sensor battery (generally the lowest of the 3 values)
* **Show Basal Rate** (default `On`): Display or not current basal rate (in U/h or in % if TBR)
* **Show Loop Status** (default `On`): show how many minutes since last loop run (arrows around value turn red if above 15').
* **Show BG** (default `On`): Display or not last BG value
* **Show Direction Arrow** (default `On`): Display or not BG trend arrow
* **Show Ago** (default `On`): show how many minutes since last reading.
* **Dark** (default `On`): You can switch from black background to white background (except for Cockpit and Steampunk watch face)
* **Highlight Basals** (default `Off`): Improve the visibility of basal rate and temp basals
* **Matching divider** (default `Off`): For AAPS, AAPSv2 and AAPS(Large) watchfaces, show contrast background for divider (**Off**) or match divider with the background color (**On**)
* **Chart Timeframe** (default `3 hours`): you can select in the sub menu the max time frame of your chart between 1 hour and 5 hours.

### User Interface setting

* **Input Design**: with this parameter, you can select the position of "+" and "-" buttons when you enter commands for AAPS (TT, Insulin, Carbs...)

![Input design options](../images/Watchface_InputDesign.png)

### Specific watchface parameters

#### Steampunk watchface

* **Delta Granularity** (default `Medium`)

![Steampunk_gauge](../images/Watchface_Steampunk_Gauge.png)

#### Circle WF

* **Big Numbers** (default `Off`): Increase text size to improve visibility
* **Ring History** (default `Off`): View graphically BG history with gray rings inside the hour's green ring
* **Light Ring History** (default `On`): Ring history more discreet with a darker gray
* **Animations** (default `On`): When enabled, on supported by watch and not in power saving low-res mode, watchface circle will be animated

### Commands settings

* **Wizard in Menu** (default `On`): Allow wizard interface in main menu to input Carbs and set Bolus from watch
* **Prime in Menu** (default `Off`): Allow Prime / Fill action from watch
* **Single Target** (default `On`):
  
  * `On`: you set a single value for TT
  * `Off`: you set Low target and high target for TT

* **Wizard Percentage** (default `Off`): Allow bolus correction from wizard (value entered in percentage before confirmation notification)

## Troubleshooting the wear app:

* On Android Wear 2.0 the watch screen does not install by itself anymore. You need to go into the playstore on the watch (not the same as the phone playstore) and find it in the category apps installed on your phone, from there you can activate it. Also enable auto update. 
* Sometimes it helps to re-sync the apps to the watch as it can be a bit slow to do so itself: Android Wear > Cog icon > Watch name > Resync apps.
* Enable ADB debugging in Developer Options (on watch), connect the watch via USB and start the Wear app once in Android Studio.

## View Nightscout data

If you are using another looping system and want to *view* your looping detail on an Android Wear watch, or want to watch your child's looping, then you can build/download just the NSClient APK. To do this follow the [build APK instructions](../Installing-AndroidAPS/Building-APK.md) selecting the build variant "NSClientRelease". Hay varias pantallas para elegir que incluyen datos como: delta promedio, IOB, dosis basal temporal activa, perfiles basales o gráfico de lecturas del medidor contínuo (CGM).

# Pebble

Pebble users can use the [Urchin watchface](https://github.com/mddub/urchin-cgm) to *view* looping data (if uploaded to Nightscout), but you will not be able to interact with AndroidAPS through the watch. You can choose fields to display such as IOB and currently active temp basal rate and predictions. If open looping you can use [IFTTT](https://ifttt.com/) to create an applet that says if Notification received from AndroidAPS then send either SMS or pushover notification.