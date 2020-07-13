# AAPS en reloj inteligente Wear OS

Puede instalar la aplicación AndroidAPS en su reloj **basado en Wear OS**. La versión de AAPS para reloj le permite:

* **muestra datos en el reloj**: proporcionando [pantallas personalizadas](#aaps-watchfaces) o en pantalla estándar con el uso de compilaciones [complicaciones](#complications)
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
* utilizar el calculador de bolos (las variables de cálculo se pueden definir en [configuración ](../Configuration/Config-Builder#wear) en el teléfono)
* Administrar carbohidratos extendidos (eCarbs)
* administrar un bolo (insulina + carbohidratos)
* ajustes del reloj
* estado 
    * comprobar estado de la infusora
    * comprobar estado del lazo
    * comprobar y cambiar perfil, CPP (Perfil en Porcentaje circadiano= turno de tiempo + porcentaje)
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

## Compilaciones

*Compilación* es un término de la relojería tradicional, que se refiere la adición en la pantalla del reloj - de otra pequeña ventana o sub-pantalla (con fecha, día de la semana, fase lunar, etc.). Wear OS 2.0 trae esa metáfora para permitir que los proveedores de datos personalizados, como el tiempo, las notificaciones, los contadores de ejercicios y más cosas, se añadan a cualquier pantalla de observación que soporte compilaciones.

La aplicación AndroidAPS Wear OS soporta Compilaciones desde `2.6`, y permite que cualquier aplicación de terceros que soporte a Compilaciones, se configure para mostrar los datos relacionados con AAPS (BG con la tendencia, IOB, COB, etc.).

Las compilaciones también sirven como **acceso directo** a las funciones de AAPS. Tocándolos puede abrir AAPS menús relacionados y cuadros de diálogo (dependiendo de la compilación del tipo y configuración).

![Compilaciones en Relojes](../images/Watchface_Complications_On_Watchfaces.png)

### Tipos de compilaciones

La aplicación AAPS Wear OS sólo proporciona datos en bruto, de acuerdo con formatos predefinidos. Es responsabilidad de un tercero decidir dónde y cómo hacer las compilaciones, incluyendo su diseño, borde, color y fuente. A partir de muchos tipos de compilación de SO Wear disponibles, AAPS utiliza:

* `TEXTO CORTO` - Contiene dos líneas de texto, de 7 caracteres cada uno, a veces referido como el valor y la etiqueta. Normalmente se representa dentro de un círculo o una píldora pequeña - una por debajo de otra, o lado a lado. Se trata de una compilación n muy limitada en el espacio. AAPS intenta eliminar los caracteres innecesarios para adaptarse redondeando valores, eliminando los ceros iniciales y finales de los valores, etc.
* `TEXTO LARGO` - Contiene dos líneas de texto, acerca de 20 caracteres cada una. Normalmente se representa dentro de un rectángulo o una píldora larga - una debajo de otra. Se utiliza para obtener más detalles y el estado.
* `RANGO DE VALORES` -Utilizado para valores de rango predefinido, como un porcentaje. Contiene el icono, la etiqueta y se representa normalmente como porcentaje de progreso de un círculo.
* `IMAGEN LARGA` -Imagen de fondo personalizada que se puede utilizar (cuando está soportado por la pantalla) como fondo.

### Configuración de compilación

Para añadir complicaciones al reloj, configúrelo pulso largo y haciendo clic en el icono de engranaje de abajo. Dependiendo de la forma en que cada pantalla lo configura, ya sea haciendo clic en los marcadores o introduzca el menú de configuración de la pantalla para las compilaciones. Las compilaciones de AAPS se agrupan bajo la entrada de menú de AAPS.

Cuando se configuran compilaciones en el reloj, Wear OS presentará y filtrará la lista para que puedan caber en el lugar seleccionado de la pantalla. Si no se pueden encontrar compilaciones específicas en la lista, probablemente se debe a su tipo que no se puede utilizar para el lugar asignado.

### Compilaciones proporcionadas por AAPS

AndroidAPS proporciona las siguientes compilaciones:

![AAPS Lista de compilaciones](../images/Watchface_Complications_List.png)

* **BR, CoB & IoB** (`TEXTO CORTO`, abre *Menú*): Muestra *Basal* en la primera línea y *Carbohidratos a Bordo* y *de Insulina a Bordo* en la segunda línea.
* **Blood Glucose** (`SHORT TEXT`, abre *Menu*): Muestra valor de *Glucos en Sangre* y *tendencia* flecha en la primera línea y *tiempo de medición* y *delta BG* en la segunda línea.
* **CoB & IoB** (`TEXTO CORTO`, abre *Menú*): Muestra *Carbohidratos a Bordo* en la primera línea e *Insulina a Bordo* en la segunda línea.
* **CoB Detallada** (`TEXTO CORTO`, abre *Asistente*): Muestra los *Carbohidratos a Bordo* activos en la primera línea y los planificados (futuros, eCarbs) Carbohidrátos en la segunda línea.
* **CoB Icono** (`TEXTO CORTO`, abre *Asistente*): Muestra el valor de los *Carbohidratos a Bordo* con un icono estático.
* **Estado completo** (`LONG TEXT`, abre *Menú*): Muestra la mayoría de los datos a la vez: *Valor de Glucosa en sangre* y *flecha de tendencia*, *delta GS* y *edad de medición* en la primera línea. En la segunda línea *Carbohidratos a Bordo*, *Insulina a Bordo* y *Tasa basal*.
* **Estado Completo (volteado)** (`TEXTO LARGO`, abre *Menú*): Mismos datos que para el estándar *Estado Completo*, pero las líneas están invertidas. Puede ser utilizado en relojes que ignoran una de las dos líneas en `TEXTO LARGO`
* **IoB Detallado** (`SHORT TEXT`, abre *Bolos*): Muestra el total de *Insulina a Bordo* en la primera línea y dividido *IoB* para *Bolos* y *Basal* en la segunda línea.
* **Icono IoB** (`TEXTO CORTO`, abre *Bolo*): Muestra *de Insulina a Bordo* valor con un icono estático.
* **Cargador/Batería del Teléfono** (`VALOR RANGO`, abre *Estado*): Muestra el porcentaje de la batería del teléfono con AAPS, según lo informado por la AAPS. Se visualiza como indicador de porcentaje con un icono de batería que refleja el valor notificado. Puede que no se actualice en tiempo real, pero con otros cambios importantes de datos de AAPS (por lo general: cada ~ 5 minutos con la nueva medición *Glucosa en Sangre*).

Adicionalmente, hay tres compilaciones de `IMAGEN GRANDE` kind: **Fondo Oscuror**, **Fondo Gris** y **Fondo Claro**, que muestran el fondo estático de AAPS.

### Ajustes relacionados con la Compilación

* **Acción de Toque Compilación** (valor predeterminado `Valor predetermiando`): Decide qué diálogo se abre cuando se pulsa la compilación: 
    * *Predeterminado*: acción específica para el tipo de compilación *(ver la lista anterior)*
    * *Menú*: Menú principal de AAPS
    * *Asistente*: asistente de bolos - calculadora de bolos
    * *Bolo*: ingreso directo del valor de bolo
    * *eCarb*: diálogo de configuración de Carbohidratos extendidos
    * *Estado*: submenú de estado
    * *Ninguno*: Deshabilita el pulsado en AAPS compilaciones
* **Unicode en Complications** (valor por omisión `On`): Cuando está `On`, la compilación utilizará caracteres Unicode para símbolos como `Δ` Delta, `formato vertical` o `en formato` Tasa Basal. La representación de los mismos depende de la fuente, y eso puede ser muy específico del reloj. Esta opción permite cambiar los símbolos Unicode `Off` cuando sea necesario - si la fuente utilizada por la pantalla personalizada no soporta esos símbolos - para evitar problemas gráficos.

## Sugerencias de rendimiento y batería

Los relojes de con OS Wear son dispositivos muy limitados en energía. El tamaño del caso de reloj limita la capacidad de la batería incluida. Incluso con los avances recientes tanto en hardware como en software, los relojes de Wear OS todavía requieren una carga diaria.

Si experimenta una duración de batería más corto que un día (desde el atardecer hasta el amanecer), aquí hay algunos consejos para solucionar los problemas.

Las principales áreas que requieren batería son:

* Pantalla activa con una luz de fondo de encendido (LED) o el modo de intensidad máxima (para OLED)
* Renderizado en la pantalla
* Comunicación de radio sobre Bluetooth

Puesto que no podemos comprometer la comunicación (necesitamos datos actualizados) y queremos tener los datos más recientes representados, la mayoría de las optimizaciones se pueden realizar en el área *de tiempo de visualización*:

* Las pantallas de reloj estandars suelen estar mejor optimizadas que las personalizadas, descargadas desde la tienda.
* Es mejor utilizar las pantallas que limitan la cantidad de datos representados en modalidad inactiva / atenuada.
* Tenga en cuenta que al mezclar otras compilaciones, como los widgets meteorológicos de terceros, u otros datos de utilización de orígenes externos.
* Empiece con las pantallas más sencillas. Añada una compilación por vez y observe cómo afecta a la duración de la batería.
* Intente utilizar el tema **Oscuro** para la pantalla de AAPS y [**Divisor de Coincidencias**](#watchface-settings). En los dispositivos OLED, esto limitará la cantidad de píxeles encendidos y limitará el agotamiento.
* Compruebe lo que funciona mejor en su reloj: AAPS en pantallas estándars o relojes con AAPS y pantallas con compilaciones.
* Observar durante unos días, con diferentes perfiles de actividad. La mayoría de los relojes activan la pantalla al mirar, mover y otros disparadores relacionados con el uso.
* Compruebe los valores del sistema global que afectan al rendimiento: notificaciones, tiempo de espera de visualización retroiluminación/activo, cuando se activa el GPS.
* Consulte la [lista de teléfonos y relojes probados ](../Getting-Started/Phones#list-of-tested-phones) y [pregunta a la comunidad ](../Where-To-Go-For-Help/Connect-with-other-users.md) si duda de si su reloj será compatible.
* **No podemos garantizar que los datos visualizados en la pantalla o que la compilación estén actualizados**. Al final, depende de Wear OS decidir cuándo actualizar una superposición o una compilación. Incluso cuando la aplicación de AAPS solicita actualizaciones, el sistema puede decidir posponer o ignorar actualizaciones para conservar la batería. Cuando está en duda y bajo en batería en el reloj - siempre haga doble verificación con la aplicación principal de AAPS en el teléfono.

## Resolución de problemas de app del reloj:

* En Android Wear 2.0 la pantalla de reloj ya no se instala por sí misma. Necesitas ir a la playstore en el reloj (no es el mismo que el playstore del teléfono) y encontrarla en la categoría de aplicaciones instaladas en su teléfono, desde allí se puede activar. Habilite también la actualización automática. 
* A veces ayuda re-sincronizar las aplicaciones para el reloj, ya que puede ser un poco lento para hacer lo mismo: Android Wear > ícono de la rueda Dentada > Reloj nombre > Sincronizar apps.
* Habilite la depuración de ADB en las opciones de desarrollador (en el reloj), conecte el reloj a través de USB e inicie la aplicación Wear una vez en Android Studio.
* Si la compilación no actualiza los datos - compruebe primero si reloj con AAPS esta funcionando.

## Ver datos de Nightscout

Si estás usando otro sistema de lazo y quieres *ver* el detalle de tu lazo en el reloj Android Wear o quiere ver el lazo de tu hijo, entonces puedes construir/descargar sólo el APK NSClient. Para hacer esto siga las instrucciones de [compilar APK](../Installing-AndroidAPS/Building-APK.md) seleccionando la variante de compilación "NSClientRelease". Hay varias pantallas para elegir que incluyen datos como: delta promedio, IOB, dosis basal temporal activa, perfiles basales o gráfico de lecturas del medidor contínuo (CGM).

# Pebble

Los usuarios de Pebble pueden utilizar la [esfera del reloj Urchin](https://github.com/mddub/urchin-cgm) para *ver* los datos del lazos (si están cargados en nightscout), pero no podrá interactuar con AndroidAPS a través del reloj. Puede elegir campos para mostrar como, por ejemplo, IOB y la frecuencia de basal temporal activa y las predicciones. Si abre el lazo puede utilizar [IFTTT](https://ifttt.com/) para crear un applet que diga si la notificación se recibe de AndroidAPS, entonces envíe una notificación de SMS o pushover.