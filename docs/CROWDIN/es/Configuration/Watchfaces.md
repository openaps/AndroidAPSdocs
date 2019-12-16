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

## Resolución de problemas de app del reloj:

* En Android Wear 2.0 la pantalla de reloj ya no se instala por sí misma. Necesitas ir a la playstore en el reloj (no es el mismo que el playstore del teléfono) y encontrarla en la categoría de aplicaciones instaladas en su teléfono, desde allí se puede activar. Habilite también la actualización automática. 
* A veces ayuda re-sincronizar las aplicaciones para el reloj, ya que puede ser un poco lento para hacer lo mismo: Android Wear > ícono de la rueda Dentada > Reloj nombre > Sincronizar apps.
* Habilite la depuración de ADB en las opciones de desarrollador (en el reloj), conecte el reloj a través de USB e inicie la aplicación Wear una vez en Android Studio.

## Ver datos de Nightscout

Si estás usando otro sistema de lazo y quieres *ver* el detalle de tu lazo en el reloj Android Wear o quiere ver el bucle de tu hijo, entonces puedes construir/descargar sólo el APK NSClient. Para hacer esto siga las instrucciones de [compilar APK](../Installing-AndroidAPS/Building-APK.md) seleccionando la variante de compilación "NSClientRelease". Hay varias pantallas para elegir que incluyen datos como: delta promedio, IOB, dosis basal temporal activa, perfiles basales o gráfico de lecturas del medidor contínuo (CGM).

# Pebble

Los usuarios de Pebble pueden utilizar la [esfera del reloj Urchin](https://github.com/mddub/urchin-cgm) para *ver* los datos del lazos (si están cargados en nightscout), pero no podrá interactuar con AndroidAPS a través del reloj. Puede elegir campos para mostrar como, por ejemplo, IOB y la basal temporal activa y las predicciones. Si abre el lazo puede utilizar [IFTTT](https://ifttt.com/) para crear un applet que diga si la notificación se recibe de AndroidAPS, entonces envíe una notificación de SMS o pushover.