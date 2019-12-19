# AAPS en reloj inteligente Wear OS

Puede instalar la aplicación AndroidAPS en su reloj **basado en Wear OS**. La versión de AAPS para reloj le permite:

* **display data on your watch**: by providing [custom watchfaces](#aaps-watchfaces) or in standard watchfaces with use of [complications](#complications)
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

AndroidAPS está diseñado para ser controlado por relojes Android Wear. Si desea bolo etc. desde el reloj entonces dentro de "Configuración de Reloj" que necesitas para activar "Controles desde el Reloj".

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
* seleccione el icono de AAPS en el menú de aplicaciones
* pulsación en complicación de AAPS (si se ha configurado para el menú)

## Configuración (desde el smartwatch)

Para acceder a la configuración de la pantalla, ingrese al menú principal de AAPS, deslice y seleccione "Ajustes".

La estrella rellena muestra el estado habilitado (**On**), y el icono de estrella hueca indica que el valor está inhabilitado (**Off**):

![Configuración on/off](../images/Watchface_Settings_On_Off.png)

### Parametros de la aplicación AAPS para smartwatch

* **Vibrar en Bolo** (predeterminado `On`):
* **Unidades para Acciones** (valor por omisión `mg/dl`): si **On** unidades para acciones es `mg/dl`, si **Off** unidad es `mmol/l`. Estas unidades se utilizan cuando se fijan obetivos temporales (TT) desde el reloj.

### Parámetros de la pantalla

* **Mostrar Fecha** (predeterminado `Off`): nota, la fecha no está disponible en todas las pantallas
* **Mostrar IOB** (predeterminado `On`): Visualizar o no el valor de IOB (ajustes para el mismo está en los parámetros del reloj de AAPS)
* **Mostrar COB** (predeterminado `On`): la Visualización o no del valor COB
* **Mostrar Delta** (predeterminado `On`): Mostrar o no la variación de BG de los últimos 5 minutos
* **Show AvgDelta** (predeterminado `On`): Visualizar o no la variación media de BG de los últimos 15 minutos
* **Mostrar batería del teléfono** (predetermiando `On`): Batería de teléfono en%. (en rojo si es inferior al 30%)
* **Mostrar batería Rig** (predetermiando `Off`): La batería Rig es una síntesis de la batería de teléfono, la batería de la bomba y la batería del sensor (generalmente la más baja de los 3 valores)
* **Mostrar Tasa Basal** (predeterminado `On`): Mostrar o no la tasa basal actual (en U/h o en % si TBR)
* **Mostrar estado del Lazo** (predeterminado `On`): mostrar cuántos minutos transcurrió desde la última ejecución del lazo (las flechas alrededor del valor se vuelven rojas si por encima de 15 ').
* **Mostrar BG** (predeterminado `On`): Mostrar o no el último valor de BG
* **Mostrar Flecha de Dirección** (predeterminado `On`): Visualizar o no flecha de tendencia de BG
* **Mostrar Hace** (predeterminado `On`): mostrar cuantos minutos pasaron desde la última lectura.
* **Oscuro** (predeterminado `On`): Puede conmutar de fondo negro a fondo blanco (excepto para la pantalla de reloj Cockpit y Steampunk)
* **Resaltar Basales** (predeterminado `Off`): Mejorar la visibilidad de la tasa basal y temporales basales
* **Divisor de coincidencia** (predeterminado `Off`): Para pantallas de relojes AAPS, AAPSv2 y AAPS(Grande), mostrar el contraste de fondo para el divisor (**Off**) o coincidir con el divisor con el color de fondo (**On**)
* **Escala de tiempos en Gráficos** (valor por omisión `3 horas`): puede seleccionar en el submenú el intervalo de tiempo máximo de su gráfico entre 1 y 5 horas.

### Parámetros de la interfaz de usuario

* **Diseño de Entrada**: con este parámetro, puede seleccionar la posición de "+" y "-" botones cuando introduzca los comandos para AAPS (TT, la Insulina, los Carbohidratos...)

![Opciones del diseño de entrada de datos](../images/Watchface_InputDesign.png)

### Parámetros específicos de las esferas

#### Pantalla "Steampunk"

* **Granularidad Delta** (valor predeterminado `Medio`)

![Calibre_steampunk](../images/Watchface_Steampunk_Gauge.png)

#### Pantalla "Círculo"

* **Números Grandes** (predeterminado `Off`): Aumente el tamaño del texto para mejorar la visibilidad
* **Historial Anillos** (predeterminado `Off`): Ver la historia gráfica de BG con anillos grises dentro del anillo verde de la hora
* **Historial Anillos Livianos** (predeterminado `On`): Historial con Anillos de forma más discreta, con un gris más oscuro
* **Animaciones ** (predeterminado `on `): Cuando está habilitado, en el soporte del reloj y no está en modo de ahorro de energía, el círculo de la esfera será animado

### Parámetros para las acciones

* **Asistente en el Menú** (predeterminado `On`): se permite la interfaz del asistente en el menú principal para la entrada de Carbohidratos y Bolos
* **Llenado en el Menú** (predeterminado `Off`): Permitir acción de Prime / Llenado desde el reloj
* **Objetivo simple** (predeterminado `On`):
  
  * `On`: únicamente se indica un valor para un objetivo temporal (TT)
  * `off`: deberás establecer un objetivo bajo y un objetivo alto para TT

* **Asistente Porcentaje** (por defecto `Off`): permite bolos de corrección del asistente (valor introducido en porcentaje antes de la notificación de confirmación)

## Complications

*Complication* is a term from traditional watchmaking, where it describes addition to the main watchface - as another small window or sub-dial (with date, day of the week, moon phase, etc.). Wear OS 2.0 brings that metaphor to allow custom data providers, like weather, notifications, fitness counters and more - to be added to any watchfaces that support complications.

AndroidAPS Wear OS app supports complications since build `2.6`, and allow any third party watchface that supports complications to be configured to display AAPS related data (BG with the trend, IOB, COB, etc.).

Complications also serve as **shortcut** to AAPS functions. By tapping them you can open AAPS related menus and dialogs (depending on complication type and configuration).

![Complications_On_Watchfaces](../images/Watchface_Complications_On_Watchfaces.png)

### Complication Types

AAPS Wear OS app provides only raw data, according to predefined formats. It is up to third-party watchface to decide where and how to render complications, including its layout, border, color, and font. From many Wear OS complication types available, AAPS uses:

* `SHORT TEXT` - Contains two lines of text, 7 characters each, sometimes referred to as value and label. Normalmente se representa dentro de un círculo o una píldora pequeña - una por debajo de otra, o lado a lado. It is a very space-limited complication. AAPS intenta eliminar los caracteres innecesarios para adaptarse redondeando valores, eliminando los ceros iniciales y finales de los valores, etc.
* `TEXTO LARGO` - Contiene dos líneas de texto, acerca de 20 caracteres cada una. Normalmente se representa dentro de un rectángulo o una píldora larga - una debajo de otra. Se utiliza para obtener más detalles y el estado.
* `RANGO DE VALORES` -Utilizado para valores de rango predefinido, como un porcentaje. Contiene el icono, la etiqueta y se representa normalmente como porcentaje de progreso de un círculo.
* `IMAGEN LARGA` -Imagen de fondo personalizada que se puede utilizar (cuando está soportado por la pantalla) como fondo.

### Complication Setup

To add complication to watchface, configure it by long press and clicking the gear icon below. Depending on how specific watchface configures them - either click on placeholders or enter the watchface setup menu for complications. AAPS complications are grouped under the AAPS menu entry.

When configuring complications on watchface, Wear OS will present and filter the list of complications that can be fit into selected complication place on watchface. If specific complications cannot be found on the list, it is probably due to its type that cannot be used for the given place.

### Complications provided by AAPS

AndroidAPS provides following complications:

![AAPS_Complications_List](../images/Watchface_Complications_List.png)

* **BR, CoB & IoB** (`TEXTO CORTO`, abre *Menú*): Muestra *Basal* en la primera línea y *Carbohidratos a Bordo* y *de Insulina a Bordo* en la segunda línea.
* **Blood Glucose** (`SHORT TEXT`, abre *Menu*): Muestra valor de *Glucos en Sangre* y *tendencia* flecha en la primera línea y *tiempo de medición* y *delta BG* en la segunda línea.
* **CoB & IoB** (`TEXTO CORTO`, abre *Menú*): Muestra *Carbohidratos a Bordo* en la primera línea e *Insulina a Bordo* en la segunda línea.
* **CoB Detallada** (`TEXTO CORTO`, abre *Asistente*): Muestra los *Carbohidratos a Bordo* activos en la primera línea y los planificados (futuros, eCarbs) Carbohidrátos en la segunda línea.
* **CoB Icono** (`TEXTO CORTO`, abre *Asistente*): Muestra el valor de los *Carbohidratos a Bordo* con un icono estático.
* **Full Status** (`LONG TEXT`, opens *Menu*): Shows most of the data at once: *Blood Glucose* value and *trend* arrow, *BG delta* and *measurement age* on the first line. On the second line *Carbs on Board*, *Insulin on Board* and *Basal Rate*.
* **Full Status (flipped)** (`LONG TEXT`, opens *Menu*): Same data as for standard *Full Status*, but lines are flipped. Can be used in watchfaces which ignores one of two lines in `LONG TEXT`
* **IoB Detailed** (`SHORT TEXT`, opens *Bolus*): Displays total *Insulin on Board* on the first line and split of *IoB* for *Bolus* and *Basal* part on the second line.
* **IoB Icon** (`SHORT TEXT`, opens *Bolus*): Displays *Insulin on Board* value with a static icon.
* **Uploader/Phone Battery** (`RANGED VALUE`, opens *Status*): Displays battery percentage of AAPS phone (uploader), as reported by AAPS. Displayed as percentage gauge with a battery icon that reflects reported value. It may be not updated in real-time, but when other important AAPS data changes (usually: every ~5 minutes with new *Blood Glucose* measurement).

Additionally, there are three complications of `LARGE IMAGE` kind: **Dark Wallpaper**, **Gray Wallpaper** and **Light Wallpaper**, displaying static AAPS wallpaper.

### Complication related settings

* **Complication Tap Action** (default `Default`): Decides which dialog is opened when user taps complication: 
  * *Default*: action specific to complication type *(see list above)*
  * *Menu*: AAPS main menu
  * *Wizard*: bolus wizard - bolus calculator
  * *Bolus*: direct bolus value entry
  * *eCarb*: eCarb configuration dialog
  * *Status*: status sub-menu
  * *None*: Disables tap action on AAPS complications
* **Unicode in Complications** (default `On`): When `On`, the complication will use Unicode characters for symbols like `Δ` Delta, `⁞` vertical dot separator or `⎍` Basal Rate symbol. Rendering of them depends on the font, and that can be very watchface-specific. This option allows switching Unicode symbols `Off` when needed - if the font used by custom watchface does not support those symbols - to avoid graphical glitches.

## Performance and battery life tips

Wear OS watches are very power-constrained devices. The size of the watch case limits the capacity of the included battery. Even with recent advancements both on hardware and software side, Wear OS watches still require daily charging.

If an experienced battery span is shorter than a day (from dusk to dawn), here are some tips to troubleshoot the issues.

Main battery-demanding areas are:

* Active display with a backlight on (for LED) or in full intensity mode (for OLED)
* Rendering on screen
* Radio communication over Bluetooth

Since we cannot compromise on communication (we need up-to-date data) and want to have the most recent data rendered, most of the optimizations can be done in *display time* area:

* Stock watchfaces are usually better optimized than custom one, downloaded from the store.
* It is better to use watchfaces that limit the amount of rendered data in inactive / dimmed mode.
* Be aware when mixing other Complications, like third party weather widgets, or other - utilizing data from external sources.
* Start with simpler watchfaces. Add one complication at the time and observe how they affect battery life.
* Try to use **Dark** theme for AAPS watchfaces, and **Matching divider**. On OLED devices it will limit the amount of pixels lit and limit burnout.
* Check what performs better on your watch: AAPS stock watchfaces or other watchfaces with AAPS Complications.
* Observe over a few days, with different activity profiles. Most watches activate the display on glancing, movement and other usage-related triggers.
* Check your global system settings that affect performance: notifications, backlight/active display timeout, when GPS is activated.
* Check [list of tested phones and watches](../Getting-Started/Phones#list-of-tested-phones) and [ask community](../Where-To-Go-For-Help/Connect-with-other-users.md) for other users experiences and reported battery lifetime.
* **We cannot guarantee that data displayed on watchface or complication is up-to-date**. In the end, it is up to Wear OS to decide when to update a watchface or a complication. Even when the AAPS app requests update, the System may decide to postpone or ignore updates to conserve battery. When in doubt and low on battery on watch - always double-check with main AAPS app on phone.

## Troubleshooting the wear app:

* On Android Wear 2.0 the watch screen does not install by itself anymore. You need to go into the playstore on the watch (not the same as the phone playstore) and find it in the category apps installed on your phone, from there you can activate it. Also enable auto update. 
* Sometimes it helps to re-sync the apps to the watch as it can be a bit slow to do so itself: Android Wear > Cog icon > Watch name > Resync apps.
* Enable ADB debugging in Developer Options (on watch), connect the watch via USB and start the Wear app once in Android Studio.
* If Complications does not update data - check first if AAPS watchfaces work at all.

## View Nightscout data

Si estás usando otro sistema de lazo y quieres *ver* el detalle de tu lazo en el reloj Android Wear o quiere ver el lazo de tu hijo, entonces puedes construir/descargar sólo el APK NSClient. Para hacer esto siga las instrucciones de [compilar APK](../Installing-AndroidAPS/Building-APK.md) seleccionando la variante de compilación "NSClientRelease". Hay varias pantallas para elegir que incluyen datos como: delta promedio, IOB, dosis basal temporal activa, perfiles basales o gráfico de lecturas del medidor contínuo (CGM).

# Pebble

Los usuarios de Pebble pueden utilizar la [esfera del reloj Urchin](https://github.com/mddub/urchin-cgm) para *ver* los datos del lazos (si están cargados en nightscout), pero no podrá interactuar con AndroidAPS a través del reloj. You can choose fields to display such as IOB and currently active temp basal rate and predictions. If open looping you can use [IFTTT](https://ifttt.com/) to create an applet that says if Notification received from AndroidAPS then send either SMS or pushover notification.