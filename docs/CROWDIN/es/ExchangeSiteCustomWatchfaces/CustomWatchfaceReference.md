# Documento de referencia de las esferas personalizadas

Esta página es para quienes diseñan nuevas esferas. Contiene todas las palabras clave y funciones disponibles para crear o animar una nueva esfera.

- Las nuevas funciones y claves disponibles en Custom Watchface V2 (Wear apk 3.3.0 o posterior) se describen [aquí](#cwf-reference-new-v2-features)

## Formato de las esferas personalizadas

Custom Watchface es un formato abierto diseñado para AAPS y asociado a la nueva esfera "AAPS (Custom)" disponible en el reloj.

El archivo de la esfera es un simple archivo zip, pero para que se reconozca como archivo de esfera, el archivo zip debe contener los siguientes archivos:

- Un archivo de imagen llamado CustomWatchface (puede ser un mapa de bits `CustomWatchface.jpg`, `CustomWatchface.png` o un vector `CustomWatchface.svg`). Este archivo es el pequeño icono que se usa para elegir la esfera cuando pulsas el botón «Cargar esfera», y también la imagen que se ve en el complemento Wear de AAPS.
- Un archivo llamado `CustomWatchface.json` (ver [Estructura JSON](#cwf-reference-json-structure) más abajo). Este segundo archivo es el archivo principal. Tiene toda la información necesaria para diseñar la esfera. Este archivo json debe ser válido (es probablemente el punto más difícil cuando editas este archivo a mano con un editor de texto, porque basta con una coma de menos o de más para romper el formato json). Este archivo JSON también debe incluir un bloque `"metadata"` con una clave `"name"` que no esté vacía. Este será el nombre de tu esfera personalizada (ver [Ajustes de metadata](#cwf-reference-metadata-settings) más abajo)
- el tamaño de este zip debe ser lo más pequeño posible (menos de unos 500 kb). Si este archivo es demasiado grande, se bloqueará y no se enviará al reloj.

El archivo zip también puede contener algunos archivos de recursos adicionales:

- Nombres de archivo fijos para las imágenes que se usan en las vistas estándar de la esfera (como `Background`, `CoverChart`... ver [Lista de archivos de recursos con nombre fijo](#cwf-reference-list-of-hardcoded-resource-files) más abajo). Todos estos archivos pueden estar en formato `jpg`, `png` o `svg`. pero para la mayoría tendrás que usar `png` o `svg`, que admiten transparencia (los jpg ocupan menos que los png, pero no tienen transparencia). Ten en cuenta que la mejor calidad con el menor tamaño se consigue en general con archivos svg (formato vectorial).
- Archivos de recursos adicionales con nombre libre. Estos archivos adicionales pueden ser archivos de imagen o archivos de fuente (para las fuentes se aceptan los formatos `ttf` y `otf`). Ten en cuenta que, para estos archivos adicionales, el `filename` (sin extensión) se usa como keyValue en el archivo JSON para indicar dónde o cuándo se deben usar estos archivos.
  - los archivos de imagen se usan a menudo como fondo de vistas de texto o para animaciones dinámicas (como el nivel de batería del 0 % al 100 %)
  - los archivos de fuente te permiten usar fuentes propias en tu esfera

(cwf-reference-json-structure)=

## Estructura JSON

Los archivos JSON se pueden editar con el editor de texto Notepad (o notepad++) (mejor notepad++, que reconoce JSON y usa colores)

- contiene claves de texto `"string_key":` y valores de clave, que pueden ser textos como `"key value"`, números enteros, booleanos como `true` o `false`, o bloques de datos.
- cada valor se separa con una coma `,`
- Un bloque de datos empieza con `{`  y termina con `}`
- el archivo json es un único bloque, así que empieza con  `{`  y termina con `}`. Dentro de este archivo, todos los bloques internos están asociados a una `"key"` que debe ser única dentro del bloque
- Para que el archivo json sea más fácil de leer, en general tiene sangría (cada clave nueva está en una línea nueva y cada bloque nuevo se desplaza 4 espacios a la derecha)

(cwf-reference-metadata-settings)=

### Ajustes de metadata

Este bloque es el primero del archivo json y es obligatorio. Contiene toda la información de esta esfera, como el nombre, el autor, la fecha de creación o de actualización, la versión del autor o la versión del complemento.

A continuación tienes un ejemplo de bloque metadata:

```text
"metadata": {
    "name": "Default Watchface",
    "author": "myName",
    "created_at": "07\/10\/2023",
    "author_version": "1.0",
    "cwf_version": "1.0",
    "comment": "Default watchface, you can click on EXPORT WATCHFACE button to generate a template"
},
```

Ten en cuenta que la `/` usada en la fecha es un carácter especial. Para que el archivo json la reconozca bien, tienes que poner antes un carácter de «escape» `\`

En algunos archivos json puedes ver una clave adicional `"filename"`. Esta clave se crea o se actualiza automáticamente cuando la esfera personalizada se carga en AAPS (se usa para mostrar al usuario el nombre del archivo zip en la carpeta exports), así que puedes quitar esta clave del bloque metadata.

(cwf-reference-general-parameter-settings)=

### Ajustes de parámetros generales

Después del primer bloque con metadata, fijarás algunos parámetros generales (ver [Lista de parámetros generales](#cwf-reference-list-of-general-parameters) más abajo). Esto te permite fijar los colores del gráfico (carbohidratos, bolo, valores de glucosa...) y también los colores por defecto para valores en rango, hiper o hipo (colores por defecto del valor de glucosa y de las flechas)

A continuación tienes un ejemplo de parámetros generales

```text
"highColor": "#FFFF00",
"midColor": "#00FF00",
"lowColor": "#FF0000",
"lowBatColor": "#E53935",
"carbColor": "#FB8C00",
"basalBackgroundColor": "#0000FF",
"basalCenterColor": "#64B5F6",
"gridColor": "#FFFFFF",
"pointSize": 2,
"enableSecond": true,
```
(cwf-reference-imageview-settings)=

### Ajustes de ImageView

Las imágenes personalizadas se ajustan usando el nombre de archivo correcto para cada ImageView del diseño (Layout) de la esfera personalizada. El bloque json solo sirve para definir la posición, el tamaño, si la vista es visible o no y, si quieres, ajustar el color:

A continuación tienes un ejemplo de bloque de imagen para second_hand (en este caso no hay ninguna imagen en el archivo zip, así que se usará la imagen por defecto de la aguja de los segundos, pero con un color personalizado).

```text
"second_hand": {
    "width": 400,
    "height": 400,
    "topmargin": 0,
    "leftmargin": 0,
    "visibility": "visible",
    "color": "#BC906A"
}
```
Para que second_hand tenga el color de glucosa por defecto (lowRange, midRange o highRange), solo tienes que cambiar la última línea con el keyValue `bgColor`

```json
    "color": "bgColor"
```

(cwf-reference-textview-settings)=

### Ajustes de TextView

TextView have more available parameters compare to ImageView: you can tune rotation (integer value in degrees), textsize (integer value in pixel), gravity (to define if text value will be centered (default value), or aligned left or right), set the font, fontStyle and fontColor, and also background color of the TextView

```text
"basalRate": {
    "width": 91,
    "height": 32,
    "topmargin": 133,
    "leftmargin": 249,
    "rotation": 0,
    "visibility": "visible",
    "textsize": 23,
    "gravity": "center",
    "font": "default",
    "fontStyle": "bold",
    "fontColor": "#BDBDBD"
},
```
Ten en cuenta que, si no quieres usar una vista en tu esfera, pon la clave `"visibility"` en `"gone"`, pero pon también el tamaño y la posición fuera del área visible, así:

```text
"second": {
    "width": 0,
    "height": 0,
    "topmargin": 0,
    "leftmargin": 0,
    "rotation": 0,
    "visibility": "gone",
    "textsize": 46,
    "gravity": "center",
    "font": "default",
    "fontStyle": "bold",
    "fontColor": "#BDBDBD"
},
```
Si el tamaño y la posición están dentro del área visible, puedes ver un «destello» del valor oculto cuando se actualiza la esfera.

Si quieres personalizar la imagen de fondo de una vista de texto, puedes usar la clave `"background":` y poner como keyValue el nombre de archivo de una imagen incluida en el archivo zip. También puedes cambiar solo el color de fondo con la clave `"color:"`.

```json
"background": "fileName"
```

También tienes 4 textViews especiales (llamadas freetext1 a freetext4) que tienen un parámetro propio `"textvalue":`, que puedes usar, por ejemplo, para poner una etiqueta

(cwf-reference-chartview-settings)=

### Ajustes de ChartView

La vista de gráfico (Chart view) es una vista muy especial que puede compartir algunos parámetros con ImageView o con TextView...

Los ajustes estándar de esta vista son muy sencillos:

```text
"chart": {
    "width": 400,
    "height": 170,
    "topmargin": 230,
    "leftmargin": 0,
    "visibility": "visible"
},
```
Los 2 parámetros adicionales que puedes incluir en la vista Chart son un color de fondo (por defecto es transparente), con la clave `"color"`, o una imagen de fondo, con la clave `"background"`.

(cwf-reference-how-to-build-watchface)=

## Cómo crear y diseñar tu primera esfera

### Herramientas necesarias

- Editor de texto: te aconsejo usar NotePad++ (o similar). Es un editor de texto sencillo, pero tiene la ventaja de mostrar el texto con colores, así es más fácil encontrar errores. sirve cualquier editor de texto sencillo. Ya que el objetivo es ajustar la información del json.
- Editor de imágenes (mapa de bits y/o vectorial)
  - Si usas mapas de bits
    - El editor de imágenes debe admitir transparencia (necesaria para todas las imágenes que están sobre el fondo) y el formato png (si usas imágenes de mapa de bits)
    - La imagen de fondo puede estar en formato jpg (ocupa menos que png)
    - El editor de imágenes debe permitirte medir en píxeles los objetos gráficos (puede ser un simple cuadrado) (top, left, width, height)
    - El editor de imágenes debe poder mostrarte los colores con el código RRGGBB en hexadecimal
    - El editor de imágenes debe poder cambiar el tamaño de la imagen a 400px x 400px (es muy importante trabajar con esta resolución)
  - Si usas vectores
    - La imagen vectorial se debe exportar en formato svg

### Obtén una plantilla para no empezar desde cero

Para diseñar tu primera esfera, lo mejor es empezar con la esfera por defecto (así tienes la última versión con todas las vistas disponibles en el orden correcto)

- Puedes obtener el archivo zip pulsando el botón «Exportar plantilla» en el complemento Wear. El archivo zip estará en la carpeta AAPS/exports
- Ten en cuenta que necesitas un reloj conectado a AAPS para ver los botones de la esfera personalizada (además, el reloj también es necesario para comprobar, probar y ajustar tu esfera personalizada)

La esfera por defecto es muy sencilla y el archivo zip solo contiene los 2 archivos:

- CustomWatchface.png (imagen de la esfera por defecto para elegir la esfera)
- CustomWatchface.json

### Organiza tus archivos en el ordenador

The easiest way to work is to have phone connected to the computer, and work with two specific folders:

- un explorador abierto en una carpeta con todos los archivos (json, imágenes de mapa de bits, imágenes vectoriales, fuentes) y el archivo CustomWatchface.zip
- otro explorador (o el árbol de carpetas ajustado) abierto en la carpeta Teléfono/AAPS/exports

Así es muy fácil trabajar: cada vez que cambias el archivo json con un editor de texto o una imagen con un editor de imágenes (mapa de bits o vectorial), solo tienes que:

1. guardar los cambios en cada aplicación
2. arrastrar y soltar todos los archivos dentro del archivo CustomWatchface.zip
3. arrastrar y soltar CustomWatchface.zip en la carpeta AAPS/exports del teléfono
4. enviar CustomWatchface al reloj para comprobar el resultado

### Empezar a personalizar la esfera

Primero tienes que definir un nombre para la esfera (necesario para elegirla fácilmente al probarla) y empezar a ajustar las claves de metadata al principio del archivo json

Después tienes que decidir qué información quieres mostrar, es decir, qué vistas deben estar visibles u ocultas.

- ¿vas a mostrar los segundos o no?
- ¿quieres diseñar un reloj analógico o un reloj digital (o ambos...)?

Ahora puedes empezar a cambiar el archivo json, poniendo la clave `"visibility":` de cada vista en `"visible"` o `"gone"` (según si quieres mantener la vista o no)

You can also start to tune approximately top, left margin and width height values to start organizing the watchface (these values will be tuned later using image editor)

Nota: todo se diseña dentro de un **rectángulo de 400px x 400px**. Así que todo se coloca con coordenadas absolutas dentro de este tamaño.

Cuando diseñes tu primera esfera, debes saber que todo está organizado en capas, desde el fondo hasta arriba. Por eso cada vista (ImageView o TextView) puede tapar algo que esté detrás...



![Capas de CustomWatchface](../images/CustomWatchface_1.jpg)



En el archivo json todas las vistas están ordenadas desde el fondo hasta arriba (esto te ayuda a recordar qué está detrás de qué...)

Si diseñas o ajustas tu primera esfera personalizada, empieza por cosas sencillas: cambia la visibilidad de algunas vistas, incluye una imagen de fondo propia sin cambiar el archivo json...

### Manejar los colores

En el archivo json tienes varias claves para indicar colores: `"color"`, `"fontColor"` para las vistas, pero también `"highColor"`, `"midColor"`, `"lowColor"`, ... (ver [Lista de parámetros generales](#cwf-reference-list-of-general-parameters))

Los colores se indican con un texto que empieza con `#` seguido de los valores RRGGBB (rojo, verde, azul) en formato hexadecimal:

- `"#FFFFFF"` es blanco, `"#000000"` es negro, `"#FF0000"` es rojo...

También puedes añadir 2 valores más para la capa alfa e indicar un nivel de transparencia (AARRGGBB):

- `"#00000000"` es totalmente transparente y `"#FF000000"` es totalmente opaco (así que  `"#FF000000"` equivale a  `"#000000"`)

También puedes usar el valor especial `"bgColor"` para usar automáticamente `"highColor"`, `"midColor"` o `"lowColor"`, indicados en los parámetros generales, según el valor de glucosa:

- `"fontColor": "bgColor",` fija automáticamente el color de la fuente de la vista según el valor de glucosa
- Ten en cuenta que las vistas `sgv` (valor de glucosa) y `direction` (flecha de tendencia) aplican automáticamente los colores de glucosa fijados en los parámetros generales (si quieres otros colores para estas 2 vistas, tendrás que usar la función avanzada [dynData](#cwf-reference-dyndata-feature) con un color de un solo paso...)

Para más información sobre las ImageViews y la clave `"color":`, mira el capítulo [Ajustar el color de la imagen](#cwf-reference-tune-image-color) más abajo.

### Incluir imágenes con nombre fijo

la forma más fácil de empezar a ajustar tu esfera es incluir en el archivo zip algunas imágenes con nombres concretos (ver [Lista de archivos de recursos con nombre fijo](#cwf-reference-list-of-hardcoded-resource-files))

- La imagen debe estar en formato `.jpg`, `.png` o `.svg`. pero ten cuidado: jpg no admite transparencia, así que solo se debe usar en la capa de fondo. Para todas las capas intermedias (cover_chart, cover_plate, agujas) usa imágenes `.png` o `.svg`

- Si tienes un editor de imágenes vectoriales (por ejemplo, Illustrator), usa preferiblemente este formato: genera archivos de texto pequeños con extensión `.svg` y la mejor calidad.
- Debes tener cuidado de usar el nombre de archivo exacto (incluidas mayúsculas y minúsculas)

Ahora, si quieres una imagen de fondo propia, solo tienes que incluir en el archivo zip un archivo llamado `Background.jpg` (sin cambiar nada más). ¡Envía el archivo zip al reloj y comprueba el resultado!

Si quieres personalizar hour_hand, minute_hand o second_hand para un reloj analógico, solo tienes que incluir `HourHand.png` (o `HourHand.svg`), `MinuteHand.png` y `SecondHand.png`.

- estas imágenes giran automáticamente alrededor del centro de la imagen, así que las imágenes deben estar en la posición 00:00:00 (y para un reloj analógico de «pantalla completa», usa un tamaño de 400 x 400 px colocado en top 0, left 0)

También puedes ver en la [Lista de archivos de recursos con nombre fijo](#cwf-reference-list-of-hardcoded-resource-files) que para cada vista de imagen hay dos nombres de archivo fijos adicionales, `High` y `Low` (por ejemplo, puedes incluir en el archivo zip otras imágenes llamadas `BackgroundHigh.jpg` y `BackgroundLow.jpg`). entonces la imagen cambiará automáticamente según tu nivel de glucosa (en rango, Hiper o Hipo). Mira la esfera AIMICO como ejemplo.

(cwf-reference-tune-image-color)=

### Ajustar el color de la imagen

La clave `"color"` se puede usar para ajustar el color de la imagen por defecto:

- aplicada a la vista background, fija el color de fondo (negro por defecto)
- aplicada a cover_plate (esfera simple) o a las agujas, cambia el color de la imagen por defecto (blanco) por el color indicado (incluido `"bgColor"`)

Cuando aplicas la clave `"color"` a una imagen de mapa de bits (`.jpg` o `.png`), el color produce un efecto interesante en la saturación del color. Así seguirás reconociendo tu mapa de bits.

Por último, en los archivos de imagen `.svg` la clave `"color"` no tiene efecto: el color de los archivos vectoriales es fijo dentro de la imagen. Si quieres cambiar los colores, tendrás que incluir varios archivos `svg` y usar la función avanzada [dynData](#cwf-reference-dyndata-feature) para cambiarlos

### Usar fuentes adicionales para las TextViews

El apk de Wear ya incluye varias fuentes por defecto (ver las claves de fuente en el capítulo [Valores de clave](#cwf-reference-key-values)). Pero si quieres usar fuentes adicionales que no están disponibles por defecto, puedes incluirlas en el archivo zip:

- los 2 formatos de fuente aceptados son archivos `.ttf` y `.otf`
- si incluyes una fuente propia en el archivo zip, por ejemplo un archivo llamado `myCustomFont.ttf`, tienes que usar el nombre del archivo para usarla en el archivo json para una TextView:

```
"font": "myCustomFont",
```

Recuerda que algunas fuentes son archivos grandes (y el tamaño máximo del archivo zip es limitado). Así que, si solo usas muy pocos caracteres (números, `.`, `,`), puedes usar herramientas gratuitas para quitar los caracteres que no usas (por ejemplo, [aquí](https://products.aspose.app/font/generator/ttf-to-ttf)) y así reducir el tamaño de la fuente.

(cwf-reference-advanced-features)=

## Funciones avanzadas

(cwf-reference-preference-feature)=

### Función Preferences

CustomWatchface puede ajustar automáticamente algunas preferencias del reloj para que la esfera se vea correctamente (si el usuario lo autoriza en las preferencias de Wear).

Pero esta función se debe usar con cuidado. Las preferencias son comunes para todas las demás esferas. Por eso hay varias reglas que debes respetar con esta función:

- nunca fijes preferencias de vistas ocultas
- intenta mostrar el mayor número posible de vistas
- puedes hacer algunas vistas más anchas de lo necesario:
  - TBR se puede mostrar como porcentaje (poco ancho), pero también como valor absoluto (mucho más ancho)
  - delta o delta promedio con información detallada puede ser ancho
  - lo mismo para iob2: esta vista puede mostrar la IOB total, pero si se elige la IOB detallada, el texto puede ser muy largo

Si aun así necesitas algunos ajustes muy concretos para que la esfera se vea bien (en el ejemplo de abajo, si no hay espacio suficiente para la IOB detallada, puedes «forzar» este parámetro de tu reloj a `false`), puedes incluir en el bloque metadata una restricción de ajustes como esta

```text
"metadata": {
    "name": "Default Watchface",
    "author": "myName",
    "created_at": "07\/10\/2023",
    "author_version": "1.0",
    "cwf_version": "1.0",
    "comment": "Default watchface, you can click on EXPORT WATCHFACE button to generate a template",
    "key_show_detailed_iob": false
},
```

Si el usuario autoriza a la esfera personalizada a cambiar los parámetros del reloj (ajuste en el complemento Wear), «Mostrar IOB detallada» se pondrá en «desactivado» y quedará bloqueado así (no se puede cambiar este parámetro hasta que se quite la autorización en los parámetros del complemento Wear o se elija otra esfera)

- Ten en cuenta que, cuando el usuario elige una esfera, puede ver el número de «parámetros necesarios» durante la selección

En el ejemplo de abajo, la esfera Gota tiene un parámetro necesario. Si no hay autorización, el número se muestra en blanco. Si hay autorización, este parámetro se fija y se bloquea en el reloj (en este caso el número se muestra en naranja)

![Parámetros necesarios](../images/CustomWatchface_2.jpg)



(cwf-reference-twinview-feature)=

### Función TwinView

Las vistas gemelas (twin views) permiten ajustar de forma sencilla la posición de una vista según las vistas que estén visibles. No es tan potente como un diseño hecho solo con LinearLayout, pero resuelve muchos casos comunes.

En el ejemplo de abajo puedes ver la esfera AAPS (Cockpit) con todas las vistas visibles en los ajustes, y la misma esfera con «Mostrar batería del dispositivo (RileyLink o similar)» desactivado y «Mostrar delta promedio» desactivado

![Vistas gemelas](../images/CustomWatchface_3.jpg)

Puedes ver que, cuando una de las vistas gemelas está oculta, la otra se desplaza para quedar centrada

en este ejemplo puedes ver que en el bloque `"uploader_battery"` se añade la clave `"twinView":` para indicar la vista `"rig_battery"`, y en el bloque `"rig_battery"` la clave `"twinView":` indica `"uploader_battery"` como gemela. Después, la clave adicional `"leftOffsetTwinHidden":` indica el número de píxeles que se desplaza la vista cuando la gemela está oculta.

Para calcular este número, puedes ver que la diferencia entre el leftMargin de las dos vistas gemelas es de 50 píxeles, así que el desplazamiento para quedar centrado es la mitad, en una dirección o en la otra.

Si las vistas gemelas están colocadas en vertical, debes usar la clave `"topOffsetTwinHidden":`

```text
"uploader_battery": {
    "width": 49,
    "height": 30,
    "topmargin": 354,
    "leftmargin": 150,
    "rotation": 0,
    "visibility": "visible",
    "textsize": 23,
    "gravity": "center",
    "font": "roboto_condensed_bold",
    "fontStyle": "bold",
    "fontColor": "#FFFFFF",
    "twinView": "rig_battery",
    "leftOffsetTwinHidden": 25
},
"rig_battery": {
    "width": 49,
    "height": 30,
    "topmargin": 354,
    "leftmargin": 200,
    "rotation": 0,
    "visibility": "visible",
    "textsize": 23,
    "gravity": "center",
    "font": "roboto_condensed_bold",
    "fontStyle": "bold",
    "fontColor": "#FFFFFF",
    "twinView": "uploader_battery",
    "leftOffsetTwinHidden": -25
},
```
(cwf-reference-dyndata-feature)=

### Función DynData

DynData es la función más potente si quieres incluir alguna animación en tu esfera según algunos valores internos (como el valor de glucosa, el nivel de glucosa, el delta, el % de batería... ver la lista de datos disponibles [aquí](#cwf-reference-dyndata-key-values))

Para explicar esta función, voy a usar como ejemplo la esfera AAPS (SteamPunk):

![CustomWatchface_4](../images/CustomWatchface_4.png)

En esta esfera tendremos que manejar el [giro del valor de glucosa](#cwf-reference-background-management) (de 30 grados a 330 grados) a la derecha, el [rango dinámico de avg_delta](#cwf-reference-avg-delta-management) (escala de 5 mgdl, 10 mgdl o 20 mgdl según el valor), el [giro de la aguja](#cwf-reference-dynamic-rotation-management), que debe ir sincronizado con la escala, y también las distintas capas de las vistas...

Para poder manejar esta esfera, aquí tienes todas las imágenes incluidas en el archivo zip:

Nota: para que se vea la transparencia, todas estas imágenes están sobre un fondo amarillo y rodeadas por un cuadrado rojo

![Imágenes de Steampunk](../images/CustomWatchface_5.jpg)

- En la primera fila, Background.jpg y CoverPlate.png se asignan automáticamente a su vista (nombres de archivo por defecto de las vistas), y steampunk_pointer.png se maneja con dynData
- En la segunda fila ves las 3 escalas del rango dinámico para avg_delta, que también se manejan con dynData
- En la tercera fila, chartBackground.jpg se enlaza a mano en la vista chart, y los archivos HourHand.png y MinuteHand.png se asignan automáticamente a sus vistas

(cwf-reference-background-management)=

#### Manejo del fondo

Primero, para la imagen del valor de glucosa no hay otra opción: solo puede estar en la capa de fondo (si no, estaría delante de la vista del gráfico y el gráfico no se vería). Así que tendremos que asignar el valor de glucosa al fondo y después girar la imagen de fondo según el valor de glucosa.

En el bloque `"background"` incluiremos 2 claves específicas para hacer este giro:

```text
"background": {
    "width": 400,
    "height": 400,
    "topmargin": 0,
    "leftmargin": 0,
    "dynData": "rotateSgv",
    "rotationOffset": true,
    "visibility": "visible"
},
```
La clave `"dynData":` indica qué bloque se usa para definir la animación (valor, rango, conversión...). Aquí este bloque se llama "rotateSgv" (elige un nombre claro cuando uses esta función),

`"rotationOffset": true,` indica que la animación según el valor debe ser un giro. (otras claves disponibles son `"leftOffset"` y `"topOffset"`, si quieres crear un deslizador)

Ahora vamos al final del archivo, después de la última vista:

```text
"second_hand": {
    "width": 120,
    "height": 120,
    "topmargin": 140,
    "leftmargin": 140,
    "visibility": "gone"
},
"dynData": {
    "rotateSgv": {
        "valueKey": "sgv",
        "minData": 30,
        "maxData": 330
    },
```
Puedes ver que, después de la última vista (`"second_hand"`), hemos añadido un nuevo bloque `"dynData": { ... }` que contiene todas las animaciones:

El bloque indicado en la vista `"background"` se llama `"rotateSgv"`: ¡es el primer bloque que encontrarás en `"dynData"`!

Este bloque es sencillo: tiene una primera clave llamada `"valueKey":` que indica qué valor se debe usar. en este caso `"sgv"` es un «keyValue» que indica el valor de glucosa (en la mayoría de los casos el keyValue tiene el mismo nombre que la vista que muestra esta información).

Para el valor de glucosa, el dato mínimo por defecto es 39 mgdl y el dato máximo es 400 mgdl (ver en [Valores de clave DynData](#cwf-reference-dyndata-key-values), más abajo, todos los keyValues disponibles y sus valores min/max data).

En el bloque `"rotateSgv"` las dos claves adicionales (`"minData":` y `"maxData":`) se usan para fijar el dato mínimo y máximo en 30 y 330. Con estos valores mínimo y máximo podemos usar directamente el valor del dato (sin ninguna conversión) para girar el fondo en grados. En este caso, todos los valores de glucosa por encima de 330 mgdl se limitan a 330, el límite superior de la imagen.

#### Manejo del gráfico

El fondo del gráfico es transparente por defecto. Para ocultar la escala de glucosa de la imagen de fondo, necesitamos una imagen de fondo propia para el gráfico (esta imagen incluye las sombras generales de la esfera Steampunk). El enlace al archivo chartBackground.jpg se hace con la clave `"background":`

¡Por supuesto, el tamaño y la posición de la vista deben ser exactos al píxel!

```text
"chart": {
    "width": 216,
    "height": 107,
    "topmargin": 280,
    "leftmargin": 80,
    "visibility": "visible",
    "background": "chartBackground"
},
```
(cwf-reference-avg-delta-management)=

#### Manejo del delta promedio

Para manejar el rango dinámico del delta promedio, usaremos las cuatro vistas freetext. freetext1 se usa para manejar la imagen de la escala, y freetext2 a freetext4 se usan para manejar el giro de la aguja según la escala.

**freetext1**

Como ya se ha explicado, las vistas freetext están delante del gráfico y delante del fondo. Por eso incluimos zonas transparentes para ver estas imágenes (lado derecho y parte de abajo de la imagen)

Ten en cuenta que la parte de abajo que se quitó de estas imágenes se usó como fondo del gráfico, para que todo encaje perfectamente.

```text
"freetext1": {
    "width": 400,
    "height": 400,
    "topmargin": 0,
    "leftmargin": 0,
    "rotation": 0,
    "visibility": "visible",
    "dynData": "avgDeltaBackground"
},
```
Para esta vista incluimos el enlace a otro bloque `"dynData"` llamado `avgDeltaBackground`. Este bloque maneja la escala de avgDelta según el valor de avgDelta.

```text
"avgDeltaBackground": {
    "valueKey": "avg_delta",
    "minData": -20,
    "maxData": 20,
    "invalidImage": "steampunk_gauge_mgdl_5",
    "image1": "steampunk_gauge_mgdl_20",
    "image2": "steampunk_gauge_mgdl_20",
    "image3": "steampunk_gauge_mgdl_10",
    "image4": "steampunk_gauge_mgdl_5",
    "image5": "steampunk_gauge_mgdl_5",
    "image6": "steampunk_gauge_mgdl_10",
    "image7": "steampunk_gauge_mgdl_20",
    "image8": "steampunk_gauge_mgdl_20"
},
```
- `"valueKey":` hace el enlace con el valor `"avg_delta"`
- min y max Data también limitan el rango al valor máximo disponible en esta esfera (de -20 mgdl a 20 mgdl). Si usas mmol, recuerda que en AAPS todos los valores internos están siempre en mgdl.

Ahora veremos cómo manejar una imagen de fondo dinámica según el valor.

`"invalidImage":` es la clave que indica qué imagen se muestra cuando el dato no es válido (o falta). Aquí hacemos el enlace con una imagen adicional del archivo zip con la escala de 5 mgdl

Después usaremos una serie de imágenes, de `"image1":` a `"image8":`. El número de imágenes que pongas define el número de pasos entre `minData` y `maxData`.

- `image1` indica la imagen que se muestra cuando avg_delta es igual o cercano a `minData`, y la imagen con el número más alto (aquí `image8`) indica la imagen que se muestra cuando avg_delta es igual o cercano a `maxData`
- entre -20 mgdl y 20 mgdl el rango total es de 40 mgdl; dividido entre 8 (número de imágenes), tenemos 8 pasos de 5 mgdl
- Ahora podemos asignar las imágenes de fondo según el valor de avg_delta, empezando por los valores más bajos: entre -20 y -15, y también entre -15 y -10, usaremos `steampunk_gauge_mgdl_20` para la escala; después, entre -10 y -5, `steampunk_gauge_mgdl_10`, y así hasta +15 y +20, donde usaremos de nuevo la imagen de fondo `steampunk_gauge_mgdl_20`

(cwf-reference-dynamic-rotation-management)=

**freetext2 a freetext4**

For these views we will combine dynamic images and rotation feature explained before:

```text
"freetext2": {
    "width": 276,
    "height": 276,
    "topmargin": 64,
    "leftmargin": 64,
    "rotation": 0,
    "visibility": "visible",
    "dynData": "avgDelta5",
    "rotationOffset": true
},
"freetext3": {
    "width": 276,
    "height": 276,
    "topmargin": 64,
    "leftmargin": 64,
    "rotation": 0,
    "visibility": "visible",
    "dynData": "avgDelta10",
    "rotationOffset": true
},
"freetext4": {
    "width": 276,
    "height": 276,
    "topmargin": 64,
    "leftmargin": 64,
    "rotation": 0,
    "visibility": "visible",
    "dynData": "avgDelta20",
    "rotationOffset": true
},
```
Aquí cada vista corresponde a una escala concreta (así que está enlazada a un bloque dynData propio). También puedes ver que la clave `"rotationOffset":` está activada en estas 3 vistas. Ahora veamos el primer bloque dynData:

```text
"avgDelta5": {
    "valueKey": "avg_delta",
    "minData": -20,
    "maxData": 20,
    "rotationOffset": {
        "minValue": -120,
        "maxValue": 120
    },
    "invalidImage": "null",
    "image1": "null",
    "image2": "null",
    "image3": "null",
    "image4": "steampunk_pointer",
    "image5": "steampunk_pointer",
    "image6": "null",
    "image7": "null",
    "image8": "null"
},
```
Aquí, aunque el rango dinámico solo se use entre -5 y +5 de avg_delta, es importante mantener el rango total de -20 a +20 mgdl para que la aguja vaya sincronizada con el fondo cuando cambia la escala. Por eso mantenemos el mismo rango total que en `avgDeltaBackground`  y el mismo número de pasos (8 imágenes).

Puedes ver que `"invalidImage"` y varias `"imagexx"` tienen el valor de clave `"null"` (podría ser cualquier texto que no exista como nombre de archivo en el archivo zip). Cuando no se encuentra un nombre de archivo, la imagen de fondo de la vista es transparente. Así, este ajuste hace que la aguja solo sea visible en el paso 4 y el paso 5 (delta promedio entre -5 mgdl y +5 mgdl) y que no sea visible fuera de este rango.

Ahora vemos un nuevo bloque `"rotationOffset":` que contiene dos claves: `"minValue":` y `"maxValue":`. Estos valores se usan para convertir los datos internos (en mgdl) en el ángulo de giro que queremos.

- La esfera Steampunk está diseñada para que la aguja gire como máximo de -30 grados a 30 grados. Así que, según la escala (aquí de -5 mgdl a 5 mgdl), queremos tener 30 grados para estos valores. Como `minData` y `maxData` son 4 veces mayores, los minValues y maxValues correspondientes son 4 * 30 grados, es decir, -120 y +120 grados. Pero para todos los giros por encima o por debajo de +-30 grados la aguja estará oculta (no hay imagen visible), y la aguja solo será visible para valores entre -5 y +5 mgdl... Que es exactamente lo que queremos aquí.

Los otros bloques dynData se definen de la misma forma para ajustar `"avgDelta10"` y `"avgDelta20"`

#### vista loop

en la esfera Steampunk las flechas verdes y rojas del lazo (para el estado) están desactivadas. Esto también se maneja con un bloque dynData propio asociado a la vista loop.

```text
    "loopArrows": {
        "invalidImage": "greyArrows",
        "image1": "greenArrows",
        "image2": "redArrows"
    }
```
Como este bloque solo lo llama la vista loop, y los datos por defecto de esta vista son la información del lazo, la clave `"valueKey":` es opcional.

Los valores por defecto de `minData` y `maxData` para el lazo son 0 min y 28 min. Así, con dos imágenes, todos los valores por debajo de 14 min se muestran con el fondo `image1` y todos los valores por encima de 14 min se muestran con `image2`. 14 min es exactamente el umbral para pasar de flecha verde a flecha roja.

En este ejemplo, los archivos `greyArrows`, `greenArrows` y `redArrows` no están en el archivo zip, así que estas flechas simplemente desaparecen (invisibles). Pero puedes usar este bloque «tal cual» si quieres ajustar las flechas de estado con imágenes de fondo propias.

#### vistas rig_battery y uploader_battery

Para terminar el resumen de la función dynData, veremos cómo se maneja la batería. La idea es personalizar el color del texto según el nivel de batería (de 0 a 100 %)

```text
"uploader_battery": {
    "width": 60,
    "height": 28,
    "topmargin": 100,
    "leftmargin": 170,
    "rotation": 0,
    "visibility": "visible",
    "textsize": 20,
    "gravity": "center",
    "font": "default",
    "fontStyle": "bold",
    "fontColor": "#00000000",
    "dynData": "batteryIcons",
    "twinView": "rig_battery",
    "topOffsetTwinHidden": -13
},
"rig_battery": {
    "width": 60,
    "height": 28,
    "topmargin": 74,
    "leftmargin": 170,
    "rotation": 0,
    "visibility": "visible",
    "textsize": 20,
    "gravity": "center",
    "font": "default",
    "fontStyle": "bold",
    "fontColor": "#00000000",
    "dynData": "batteryIcons",
    "twinView": "uploader_battery",
    "topOffsetTwinHidden": 13
},
```
Aquí puedes ver que estas dos vistas comparten el mismo bloque `dynData` llamado `batteryIcons`. Esto es posible porque, por defecto, los datos asociados son los de la vista (así, sin indicar una clave `"valueKey":` en el bloque `batteryIcons`, se aplica con los datos de `uploader_battery` o de `rig_battery` según la vista).

Ten en cuenta que estas dos vistas también usan la función TwinView, explicada [aquí](#cwf-reference-twinview-feature).

Ahora veamos el bloque dynData:

```text
"batteryIcons": {
    "invalidFontColor": "#00000000",
    "fontColor1": "#A00000",
    "fontColor2": "#000000",
    "fontColor3": "#000000",
    "fontColor4": "#000000",
    "fontColor5": "#000000"        
},
```
Aquí usamos exactamente la misma lógica que para la imagen de fondo dinámica, pero con claves propias (`"invalidFontColor"` y `"fontColor1"` a `"fontColor5"` para indicar 5 pasos del 20 % cada uno).

- `"fontColor1"` (rojo oscuro) se usa para todos los valores por debajo del 20 %, y el blanco para todos los valores por encima de este umbral.
- Si quieres bajar el umbral a «por debajo del 10 %», solo tienes que añadir 5 claves más, de `"fontColor6"` a `"fontColor10"`. También puedes ajustar cada color si quieres un cambio progresivo de verde a amarillo, naranja y rojo...

(cwf-reference-dynpref-feature)=

### Función DynPref

Antes de leer este capítulo, tienes que entender cómo funciona [dynData](#cwf-reference-dyndata-feature), porque DynPref es un uso avanzado de DynData: ahora podrás ajustar cada bloque DynData según las preferencias fijadas por el usuario:

Para explicar la función DynPref, usaremos dos ejemplos:

- la esfera Steampunk (uso sencillo para tener en la misma esfera la versión mgdl y la versión mmol; la esfera cambia automáticamente según la unidad elegida en AAPS).
- la esfera AAPS V2 combina varias preferencias para manejar el color del texto y el fondo según las preferencias de tema oscuro y de separador (match divider).

#### Uso sencillo de dynPref en la esfera Steampunk

Within Steampunk, we have two sets of images according to units: `background` image that will have BG scale and will turn according to BG value. y `freeText1`, que contiene la escala dinámica según el valor de avgDelta. Para tener una sola esfera que muestre automáticamente las unidades correctas, debemos elegir la imagen según la unidad elegida.

Para hacerlo, sustituimos la clave `dynData` por una clave `dynPref` en el bloque de la vista:

```text
 "background": {
    "width": 400,
    "height": 400,
    "topmargin": 0,
    "leftmargin": 0,
    "dynPref": "rotateSgv",
    "rotationOffset": true,
    "visibility": "visible"
},
```
El uso de las claves `dynPref` es muy parecido al de las claves `dynData` explicadas en el capítulo anterior

Ahora veamos el final del archivo json, después del bloque `dynData`:

```text
"dynData": {
    ...
},
"dynPref": {
    "rotateSgv": {
        "prefKey": "key_units",
        "true": {
            "valueKey": "sgv",
            "minData": 30,
            "maxData": 330,
            "invalidImage": "Background_mgdl",
            "image1": "Background_mgdl"
        },
        "false": {
            "valueKey": "sgv",
            "minData": 30,
            "maxData": 330,
            "invalidImage": "Background_mmol",
            "image1": "Background_mmol"
        }
    },
    ...
}
```
Puedes ver que la clave dynpref indicada en el bloque de la vista `background` (`"dynPref": "rotateSgv"`) existe en el bloque json `dynPref` incluido al final del archivo json:

Este bloque debe contener una clave `"prefKey"` que indica qué preferencia se debe usar. En este ejemplo la clave `"key_units"` está enlazada a las unidades elegidas en AAPS en el teléfono. El valor es `"true"` si la unidad elegida es mgdl y `"false"` si la unidad elegida es mmol.

Después encontrarás dos bloques json con el formato «dynData», que se usan según la preferencia elegida

Ten en cuenta que el nombre de archivo «fijo» de la imagen Background se sustituye ahora por una imagen dinámica que es la misma sea cual sea el valor de glucosa (archivo `Background_mgdl.png` si key_units es "true", `Background_mmol.png` si key_units es false). También incluimos una clave `"invalidImage"` para tener siempre una imagen de fondo, aunque no se hayan recibido datos del teléfono.

#### Combinar varias preferencias en dynPref con AAPS V2

Casi siempre, cuando fijas una preferencia, no buscas un «comportamiento dinámico», sino solo el resultado según lo que eliges. Pero en dynPref se considera una función dinámica...

- mientras que en `dynData` indicas un bloque completo de parámetros (con imágenes, fontColor, Color, ...), con `dynPref` puedes combinar cada parámetro según una preferencia concreta.
- Aquí veremos cómo la preferencia de separador (match divider) se combina con la preferencia de tema oscuro para mostrar, cuando está activada (true), texto blanco sobre fondo negro en una esfera oscura (parámetro de tema oscuro true) o texto negro sobre fondo blanco en una esfera clara (tema oscuro false)...

Primero veamos el principio del archivo json:

```text
"dynPrefColor": "prefColorDark",
"pointSize": 2,
"enableSecond": false,
"background": {
    "width": 400,
    "height": 400,
    "topmargin": 0,
    "leftmargin": 0,
    "visibility": "visible",
    "dynPref": "dark"
},
```
`"dynPrefColor": "prefColorDark"` indica el bloque dynPref de todos los colores por defecto fuera de las vistas. Estos colores se ajustan según el parámetro de tema oscuro en `"prefColorDark"`:

Y al final, en el bloque `dynPref`, tendrás un bloque dynPref específico para los colores por defecto:

```text
"prefColorDark": {
    "prefKey": "key_dark",
    "true": {
        "highColor": "#FFFF00",
        "midColor": "#00FF00",
        "lowColor": "#FF0000",
        "lowBatColor": "#E53935",
        "carbColor": "#FB8C00",
        "basalBackgroundColor": "#0000FF",
        "basalCenterColor": "#64B5F6",
        "gridColor": "#FFFFFF"
    },
    "false": {
        "highColor": "#A0A000",
        "midColor": "#00A000",
        "lowColor": "#A00000",
        "lowBatColor": "#E53935",
        "carbColor": "#D07C00",
        "basalBackgroundColor": "#0000A0",
        "basalCenterColor": "#64B5F6",
        "gridColor": "#303030"
    }
}
```
La diferencia entre este bloque dynPref y los otros bloques dynPref normales usados para las vistas es que aquí no hay un bloque dynData para cada valor del parámetro `"key_dark"`, sino solo la lista de colores principales (`highColor`, `midColor` , ...)

Ahora veamos los elementos incluidos en la «franja del separador» (divider banner) (en el ejemplo de abajo, la vista `"basalRate"` enlazada a la vista dynPref `"matchDivider"`):

```text
"basalRate": {
    "width": 90,
    "height": 32,
    "topmargin": 127,
    "leftmargin": 242,
    "rotation": 0,
    ...
    "leftOffsetTwinHidden": 33,
    "dynPref": "matchDivider"
},
```
Después, en el bloque dynPref, puedes ver que el parámetro Match divider (clave `key_match_divider`) incluye los 2 bloques "true" y "false". Pero estos dos bloques solo sirven para indicar que la vista usa el bloque dinámico "dark" (es decir, exactamente el mismo color de fondo y de texto que las demás vistas fuera de la franja) o el bloque dinámico "white", que pone los colores contrarios para el fondo y el texto...

```text
"matchDivider": {
    "prefKey": "key_match_divider",
    "true": {
        "dynPref": "dark"
    },
    "false": {
        "dynPref": "white"
    }
},
"dark": {
    "prefKey": "key_dark",
    "true": {
        "color1": "#000000",
        "fontColor1": "#FFFFFF"
    },
    "false": {
        "color1": "#FFFFFF",
        "fontColor1": "#000000"
    }
},
```
Ten en cuenta que aquí estás dentro de un bloque «dynData». Por eso, para definir un color o un fontColor, usas un dynData (no indicado aquí) y un solo paso (se usan `"color1"` y `'fontColor1'`)

- para todos los parámetros que no sean `image`, el «valor no válido» por defecto (si no se indica con la clave `"invalidColor"` o `"invalidFontColor"`) será `"color1"` y `"fontColor1"`.



Después veremos un tercer ejemplo con las vistas de iob (`iob1` y `iob2`), donde usaremos un texto más pequeño para la IOB detallada y un texto más grande para la IOB total:

```text
"iob1": {
    "width": 125,
    "height": 33,
    "topmargin": 168,
    "leftmargin": 275,
    "rotation": 0,
    "visibility": "visible",
    "textsize": 19,
    ...
    "dynPref": "prefIob1"
},
"iob2": {
    "width": 125,
    "height": 33,
    "topmargin": 196,
    "leftmargin": 275,
    "rotation": 0,
    "visibility": "visible",
    "textsize": 24,
    ...
    "leftOffsetTwinHidden": -10,
    "dynPref": "prefIob2"
},
```
En los ajustes por defecto de la vista verás el tamaño del texto (19 en `iob1` y 24 en `iob2`) y los dos bloques `dynPref` distintos que ajustan el tamaño del texto (según el parámetro de IOB detallada) y los colores (según el parámetro de tema oscuro)

```text
"prefIob1": {
    "prefKey": "key_show_detailed_iob",
    "true": {
        "dynPref": "dark",
        "textsize1": 24
    },
    "false": {
        "dynPref": "dark"
    }
},
"prefIob2": {
    "prefKey": "key_show_detailed_iob",
    "true": {
        "dynPref": "dark",
        "textsize1": 19
    },
    "false": {
        "dynPref": "dark"
    }
},
```
Aquí puedes ver que, según el parámetro de IOB detallada (clave `"key_show_detailed_iob"`), cuando es "true" el tamaño del texto (textsize) se fija en un valor mayor que el valor por defecto (24 en lugar de 19). Esto se hace con la función de «pasos» de textsize, con un solo valor, es decir, un solo paso... (ten en cuenta que, para todos los parámetros que no sean imágenes, si invalidTextSize no está definido, se usa textsize1 para los datos no válidos)

Then "dark" dynPref block will be used to set color and fontColor

En este ejemplo, el bloque dynData que se usa para la vista iob1 si la IOB detallada está activada y el tema oscuro está activado es:

```text
{
    "color1": "#000000",
    "fontColor1": "#FFFFFF",
    "textsize1": 24
},
```

So the text will be in white on black background and the size 24 will replace default size of 19 set into the view

El bloque dynData que se usa para la misma vista iob1 si la IOB detallada está desactivada y el tema oscuro está desactivado es:

```text
{
    "color1": "#FFFFFF",
    "fontColor1": "#000000"
},
```

Ahora el texto será negro sobre fondo blanco, con un tamaño de 19

#### Consejos y trucos para dynPref

- Puedes combinar tantas preferencias como quieras, pero ten cuidado: el número de bloques que hay que describir puede crecer muy rápido (de forma exponencial). Si encadenas 3 parámetros y quieres definir todas las situaciones, tendrás que describir 8 bloques, aunque cada parámetro tenga solo 2 valores...
- Ten cuidado de no crear un «bucle infinito» (por ejemplo, si el bloque dynpref1 se completa con el bloque dynpref2, que a su vez se completa con el bloque dynpref1...). En este caso los bloques dynpref se considerarán no válidos...
- Do not forget to include the numeric index after the key (when you use for example `"textsize"`key within a view, you will have to use `"textsize1"`within the dynPref  value block, because it's a "dynData" format, so linked to value with a single step in this case)
- Solo se debe fijar una clave `"valueKey"` por vista. Así que, si el bloque `dynData` final se construye a partir de varios bloques `dynPref`, no incluyas varias `"valueKey"`  (ni sus `"minData"`, `"maxData"`, ...)

(cwf-reference-new-v2-features)=

### Nuevas funciones de CustomWatchface V2 (AAPS V3.3.0 o posterior)

Ten en cuenta que las esferas que usan estas nuevas funciones o vistas necesitan el último apk de Wear compilado desde la versión 3.3.0 de AAPS.

If you use a zip "v2" with a watch that includes CustomWatchface V1, you will have missing information or wrong content into the watchface.

CustomWatchface V2 incluye estas nuevas funciones:

- [Nueva vista Status](#cwf-reference-new-status-feature)
- [Nueva vista TempTarget](#cwf-reference-new-temp-target-feature)
- [Nueva vista de nivel del reservorio](#cwf-reference-new-reservoir-level-feature)
- [Nueva función de formato](#cwf-reference-new-formating-feature)
- [Mostrar datos externos para seguidores](#cwf-reference-show-external-datas) (hasta 3 conjuntos de datos en una sola esfera, para AAPS, AAPSCLIENT y AAPSCLIENT2)

(cwf-reference-new-status-feature)=

#### Nueva vista Status

La clave de esta vista es `"status"` y su bloque se incluye automáticamente en la plantilla exportada desde el apk de Wear «Custom Watchface V2» (compilado desde la versión 3.3.0 de AAPS o posterior)

Esta vista ya existía en las antiguas esferas AAPS (NoChart), AAPS (BigChart) y AAPS (Large) y contiene un texto (creado en el apk de Wear).

These previous watchfaces have been removed and replaced by 3 new custom watchfaces in AAPS 3.3.0.

- la información mínima es el valor de IOB (siempre visible, sea cual sea el parámetro de IOB en el reloj)
- después tienes los valores de IOB detallada (BolusIOB|BasalIOB), si están activados en las preferencias
- y el valor de BGI (también si está activado en las preferencias)

Esta vista `"status"` está asociada a la clave `"key_show_loop_status"` (en dynPref) para manejar su visibilidad.

En V1 esta vista se podía manejar con las vistas existentes `"iob1"`, `"iob2"` y `"bgi"`, pero hacían falta ajustes dynPref complejos para manejar el espacio de cada información según los distintos ajustes elegidos en el reloj.

(cwf-reference-new-temp-target-feature)=

#### Nueva vista TempTarget

La clave de esta vista es `"tempTarget"` y su bloque se incluye automáticamente en la plantilla exportada desde el apk de Wear «Custom Watchface V2» (compilado desde la versión 3.3.0 de AAPS o posterior).

Muestra en la esfera:

- El objetivo del perfil (un solo valor u objetivos mín-máx) (color por defecto: blanco)
- El objetivo ajustado por el lazo (color por defecto: verde)
- El objetivo temporal fijado por el usuario (color por defecto: amarillo)

Esta vista `"tempTarget"` está asociada a la clave `"key_show_temp_target"` (en dynPref) para manejar su visibilidad.

La clave DynData (asociada a la información de color) es `"tempTarget"` (clave DynData por defecto asociada a la vista TempTarget)

El valor DynData es:

- 0 (objetivo del perfil),
- 1 (objetivo del lazo) o
- 2 (objetivo temporal del usuario)

Ten en cuenta que esta vista también está disponible para datos externos (ver [más abajo](#cwf-reference-show-external-datas)) con las claves `"tempTarget_Ext1"` y  `"tempTarget_Ext2"` (vista y DynData)

(cwf-reference-new-reservoir-level-feature)=

#### Nueva vista de nivel del reservorio

La clave de esta vista es `"reservoir"` y su bloque se incluye automáticamente en la plantilla exportada desde el apk de Wear «Custom Watchface V2» (compilado desde la versión 3.3.0 de AAPS o posterior).

Esta vista muestra el nivel del reservorio (en `U`) en color blanco por defecto, amarillo en el nivel de advertencia y rojo en el nivel urgente

Esta vista `"reservoir"` está asociada a la clave `"key_show_reservoir_level"` (en dynPref) para manejar su visibilidad.

Las claves DynData asociadas al nivel del reservorio son:

-  `"reservoir"`  (clave DynData por defecto asociada a la vista de nivel del reservorio), asociada al nivel de insulina en `U`
  - El valor mínimo es 0,0 U
  - El valor máximo es 500,0 U
-  `"reservoirLevel"`
  - 0 (nivel normal, color blanco por defecto)
  - 1 (nivel de advertencia, color amarillo por defecto)
  - 2 (nivel urgente, color rojo por defecto)

Ten en cuenta que esta vista también está disponible para datos externos (ver [más abajo](#cwf-reference-show-external-datas)) con las claves `"reservoir_Ext1"`, `"reservoir_Ext2"`, `"reservoirLevel_Ext1"` y  `"reservoirLevel_Ext2"` (vista y DynData).

(cwf-reference-new-formating-feature)=

#### Nueva función de formato para DynData o DynPref

Ahora puedes aplicar un formato propio a los valores brutos que recibe el reloj y que aparecen en la [tabla de valores de clave dyndata](#cwf-reference-dyndata-key-values) más abajo.

Para explicar cómo funciona esta función, tomemos como ejemplo la esfera AAPS (Large) y veamos el resultado según el valor de «tiempo desde» y según si la nueva vista «status» está visible o no:

![AAPS (Large)](../images/CustomWatchface_6.jpg)

- En la primera captura, a la izquierda, la vista status está visible (con IOB, IOB detallada y BGI), así que solo 1/3 de la línea está disponible para mostrar timestamp (información muy compacta con `1'`, y para la batería del teléfono (uploader) `U: 55%`)
- En la segunda captura la vista `status` se ha ocultado en los parámetros del reloj, así que hay mucho espacio para mostrar la etiqueta completa de timestamp y de la batería del teléfono (`1 minute ago` y `Uploader : 55%`)
- En la tercera captura, a la derecha, tienes exactamente los mismos ajustes en el reloj, pero ahora timestamp ha cambiado y es mayor que «1». ahora la esfera personalizada puede mostrar la etiqueta actualizada con el plural correcto (`2 minutes ago`)

No voy a explicar aquí cómo se manejan todas las vistas del archivo zip (posición de cada vista según los distintos ajustes). Solo me centraré en cómo se manejan la función de formato y el valor dinámico asociado en la esfera AAPS (Large).



**Esta función necesita un «bloque dinámico»** (puede ser un bloque `dynData` o un bloque `dynPref`)

- En la esfera AAPS (Large) queríamos ajustar el formato según los parámetros (formato corto o largo según la visibilidad de la vista `status`), así que usamos un bloque `dynPref` para ello.

Primero empecemos por las vistas:

```text
"uploader_battery": {
    "width": 200,
    "height": 50,
    "topmargin": 175,
    "leftmargin": 0,
    "rotation": 0,
    "visibility": "visible",
    "textsize": 25,
    "gravity": "center",
    "font": "roboto_condensed_light",
    "fontStyle": "normal",
    "dynPref": "uploader",
    "dynValue": false,
    "fontColor": "#BDBDBD"
},

"timestamp": {
    "width": 200,
    "height": 50,
    "topmargin": 175,
    "leftmargin": 0,
    "rotation": 0,
    "visibility": "visible",
    "textsize": 25,
    "gravity": "center",
    "font": "roboto_condensed_light",
    "fontStyle": "normal",
    "dynPref": "timestamp",
    "dynValue": false,
    "fontColor": "#FFFFFF"
},
```
aquí la clave más importante es `"dynValue"`: esta clave activa el manejo dinámico del valor bruto. el booleano que la sigue (true o false) indica si el valor se debe «convertir o no»

- `false`: el valor bruto se usa tal cual, sin ningún límite ni conversión
- `true`: el valor bruto se convierte (con las claves `minData` y `maxData` del bloque dynData y con `minValue` y `maxValue` definidos en dynData)

En esta esfera los valores brutos se usan sin ninguna conversión, así que en las dos vistas la clave `"dynValue"` está en `false`.



Ahora veamos el bloque `"uploader"` definido en `"dynPref"`:

```text
"uploader": {
    "prefKey": "key_show_loop_status",
    "true": {
        "dynPref": "uploader_true_ago",
        "invalidTextvalue": "U: --",
        "textvalue1": "U: %.0f%%"
    },
    "false": {
        "dynPref": "uploader_false_ago",
        "invalidTextvalue": "Uploader: --",
        "textvalue1": "Uploader: %.0f%%"
    }
},
```
Por defecto la vista `"uploader_battery"` está enlazada a `"uploader_battery"` , así que no hace falta añadir una línea explícita con

`"valueKey": "uploader_battery"` (valor mínimo 0, valor máximo 100; el valor bruto es el porcentaje de batería del teléfono)

El texto de formato está en la clave `"textvalue1"` (las claves `"textvalue1"`, `"textvalue2"`, etc. están enlazadas a la clave `"textvalue"`, que se puede incluir en el bloque `view`)

- La clave `"textvalue"`  se puede usar con información de formato dentro del bloque de la vista (en este caso el formato es fijo, sean cuales sean el valor o los ajustes)
- If you want to modify formatting information according to settings or values, then all dynData feature can be applied, and the dedicated keys are `"invalidTextValue"` key (without "formatting information" because value is not valid) and `"textvalue1"`, `"textvalue2"`... (and as many values that you want to manage steps between minData and maxData)
- las claves `"dynPref"` adicionales se usan para definir otros bloques para cambiar la posición y el color según las vistas visibles y los ajustes de tema oscuro y matchDivider

Sobre el texto de formato, la sintaxis es la siguiente: `%[flags][width][.precision]f`

- `%` es el principio de un formato y `f` es el final; se debe usar para convertir valores Double.
  - Ten en cuenta que, si quieres usar el carácter `%` en tu texto, tendrás que escribir `%%` para indicar que no es un formato, sino el carácter de porcentaje.
- `[flag]` es opcional; sobre todo puede ser `+`, si siempre quieres un signo delante del número, o `(`, si quieres los valores negativos entre paréntesis
- `[width]`  es opcional; define el número mínimo de caracteres que se escriben
- `[.precision]` define el número de cifras después del separador decimal.
  - Ten en cuenta que los valores son de tipo Double, así que es buena idea fijar siempre una precisión (para evitar muchos caracteres después del separador decimal por la precisión de kotlin)

Así, en el ejemplo de arriba, `%.0f` muestra el valor Double como un número entero



Ahora veamos el bloque dynPref de timestamp para manejar el plural:

```text
"timestamp": {
    "prefKey": "key_show_loop_status",
    "true": {
        "dynPref": "timestamp_true_uploader",
        "invalidTextvalue": "U: --",
        "textvalue1": "%.0f'"
    },
    "false": {
        "dynPref": "timestamp_false_uploader",
        "minData": 0,
        "maxData": 3,
        "invalidTextvalue": "-- minute ago",
        "textvalue1": "%.0f minute ago",
        "textvalue2": "%.0f minutes ago"
    }
},
```
- aquí, si la vista `status` está visible (es decir, la clave  `"key_show_loop_status"` es `true`), se usa un solo formato (`"textvalue1"`), con `'`  como «unidad»
- si la vista `status` está oculta, se usan 2 formatos distintos: uno para 0 o 1, en singular, y otro para valores de 2 o más, en plural
  - `"minData"` y `"maxData"` se usan para definir el rango y asegurar que el cambio de singular a plural se hace entre los valores 1 y 2
  - Ten en cuenta que `"maxData"` (entero) se ha fijado en 3 y no en 2, porque los datos Double que maneja el sistema no son enteros. Así, un valor un poco por encima o un poco por debajo de 1 podría mostrarse en singular o en plural, aunque después de redondear a entero el valor sea 1.

- En la vista `timestamp` es importante poner la clave `"dynValue"` en `false`; si no, por el formato (singular/plural), todos los valores por encima de 3 se limitarán a `3 minutes ago` por la conversión con `maxData`...



**Comentario adicional sobre la función de formato**

- recuerda que los únicos valores dinámicos disponibles son los que aparecen [aquí](#cwf-reference-dyndata-key-values)
- Todos los valores de `BG` están en mgdl. Si quieres usar la función de formato para mostrar los valores en mmol, tendrás que hacer tú la conversión de mgdl a mmol. Dentro de un bloque `dynData` o `dynPref`, la clave que da nombre al bloque que contiene `"minValue"` y `"maxValue"` para la conversión del valor se debe llamar `"dynValue": { ...  }`. (ver [Claves DynData](#cwf-reference-dyndata-keys))
- Si en una vista quieres usar un texto de formato fijo, con la clave `"textvalue"` para definir el formato y la clave `"dynValue"` para usar el valor dinámico, también tendrás que usar un bloque `"dynData"` o `"dynPref"` (aunque esté vacío) para poder usar la función de formato.
- `"textvalue1"`, `"textvalue2"` hasta textvalue*n* se pueden usar sin la función de formato para sustituir cada paso del valor double por una etiqueta de texto propia (por ejemplo, con el valor de clave `"day_name"` y siete pasos para definir nombres propios de los días de la semana, ... )

- Para ver la documentación completa, consulta [Class Formatter](https://docs.oracle.com/javase/8/docs/api/java/util/Formatter.html)

(cwf-reference-show-external-datas)=

#### Mostrar datos externos para seguidores

Ahora Custom Watchface puede mostrar en la misma esfera hasta 3 conjuntos de datos: AAPS, AAPSCLIENT y AAPSCLIENT2

Para usar esta función, necesitas:

- tener instaladas en el teléfono al menos 2 de estas 3 apps (AAPS, AAPSCLIENT, AAPSCLIENT2)
- activar la transmisión de datos (Broadcast data) en AAPSCLIENT y/o AAPSCLIENT2 para enviar los datos a la app principal que se sincroniza con CustomWatchface (AAPS o AAPSCLIENT)
- Usar una CustomWatchface que tenga vistas con claves que incluyen `_Ext1` o `_Ext2` (ver [Referencia de Key y KeyValue](#cwf-reference-key-and-keyvalue-reference) más abajo)

Ten en cuenta que, si la app principal del teléfono es AAPSCLIENT y la app secundaria que transmite los datos es AAPSCLIENT2, tendrás que activar el parámetro `Switch external data in watchface` («Cambiar datos externos en la esfera del reloj») en los parámetros de la esfera personalizada, si usas una esfera con vistas estándar y vistas adicionales Ext1 (Ext1 está enlazado a AAPSCLIENT y Ext2 está enlazado a AAPSCLIENT2)

Additionally three new views (`"patient_name"` , `"patient_name_Ext1"`  and `"patient_name_Ext2"` *) have been added to be able to automatically include patient name (set within AAPS preferences) within watchface (see example below)

![CustomWatchface_7](../images/CustomWatchface_7.png)

(cwf-reference-key-and-keyvalue-reference)=

## Referencia de Key y KeyValue

(cwf-reference-list-of-metadata-keys)=

### Lista de claves de metadata

(cwf-reference-list-of-standard-metadata-keys)=

#### Lista de claves de metadata de información estándar

| Clave              | Comentario                                                                                                                          |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------------------- |
| `"name"`           | Nombre de la esfera personalizada                                                                                                   |
| `"author"`         | Nombre o seudónimo del autor o los autores                                                                                          |
| `"created_at"`     | Fecha de creación (o de actualización). Ten cuidado: `/` es un carácter especial, así que, si lo usas en la fecha, pon `\` delante |
| `"cwf_version"`    | Complemento de esfera compatible con el diseño de tu esfera                                                                         |
| `"author_version"` | Aquí el autor puede indicar la versión de su esfera                                                                                 |
| `"comment"`        | Texto libre para dar información o indicar limitaciones de esta esfera                                                              |

(cwf-reference-preference-keys)=

#### Claves de preferencias

| Clave                         | Valor por defecto y comentario                                                                                                                                                                                                                                                                       |
| ----------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `"key_show_detailed_iob"`     | true bloquea los datos de IOB detallada en la vista `iob2`; entonces `iob1` (si está visible y no la sustituye un icono) muestra la IOB total.<br />false bloquea la IOB total en la vista `iob2`. se puede usar si el ancho de `iob2` es demasiado pequeño para mostrar bien la IOB detallada |
| `"key_show_detailed_delta"`   | false (solo si el diseño no admite el ancho del delta detallado en las vistas `delta` y `avg_delta`)                                                                                                                                                                                                 |
| `"key_show_bgi"`              | true si tu diseño necesita la información `bgi`                                                                                                                                                                                                                                                      |
| `"key_show_iob"`              | true si tu diseño necesita las vistas `iob1` o `iob2`                                                                                                                                                                                                                                                |
| `"key_show_cob"`              | true si tu diseño necesita las vistas `cob1` o `cob2`                                                                                                                                                                                                                                                |
| `"key_show_delta"`            | true si tu diseño necesita la información `delta`                                                                                                                                                                                                                                                    |
| `"key_show_avg_delta"`        | true si tu diseño necesita la información `avg_delta`                                                                                                                                                                                                                                                |
| `"key_show_temp_target"`      | true si tu diseño necesita la información `tempTarget`                                                                                                                                                                                                                                               |
| `"key_show_reservoir_level"`  | true si tu diseño necesita la información `reservoir`                                                                                                                                                                                                                                                |
| `"key_show_uploader_battery"` | true si tu diseño necesita la información `uploader_battery` (batería del teléfono)                                                                                                                                                                                                                  |
| `"key_show_rig_battery"`      | true si tu diseño necesita la información `rig_battery`                                                                                                                                                                                                                                              |
| `"key_show_temp_basal"`       | true si tu diseño necesita la información `basalRate`                                                                                                                                                                                                                                                |
| `"key_show_direction"`        | true si tu diseño necesita la información `direction` (flechas de tendencia de la glucosa)                                                                                                                                                                                                           |
| `"key_show_ago"`              | true si tu diseño necesita la información `timestamp` (minutos desde la última glucosa recibida)                                                                                                                                                                                                     |
| `"key_show_bg"`               | true si tu diseño necesita la información `sgv` (valor de glucosa)                                                                                                                                                                                                                                   |
| `"key_show_loop_status"`      | true si tu diseño necesita la información `loop` (estado del lazo y tiempo desde la última ejecución)                                                                                                                                                                                                |
| `"key_show_week_number"`      | true si tu diseño necesita la información `week_number`                                                                                                                                                                                                                                              |
| `"key_show_date"`             | true si tu diseño necesita la información `Date`, `Month` o `Day of the week`                                                                                                                                                                                                                        |

#### Claves internas

| Clave                 | Comentario                                                                                                                                                                                    |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `"filename"`          | Esta clave se crea (o se actualiza) automáticamente cuando se carga la esfera y contiene el nombre del archivo zip local en la carpeta exports                                                |
| `"cwf_authorization"` | esta clave se crea (cuando se carga la esfera) y se actualiza cada vez que cambia la preferencia de autorización en los ajustes de Wear. Se usa para sincronizar la autorización con el reloj |

(cwf-reference-list-of-general-parameters)=

### Lista de parámetros generales

| Clave                    | Comentario                                                                                                                                                                                                                                      |
| ------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `"highColor"`            | `"#FFFF00"`(amarillo por defecto): color del valor de glucosa, de las flechas de tendencia y de la glucosa en el gráfico si la glucosa está por encima del límite superior (Hiper)                                                              |
| `"midColor"`             | `"#00FF00"`(verde por defecto): color del valor de glucosa, de las flechas de tendencia y de la glucosa en el gráfico si la glucosa está en rango                                                                                               |
| `"lowColor"`             | `"#FF0000"`(rojo por defecto): color del valor de glucosa, de las flechas de tendencia y de la glucosa en el gráfico si la glucosa está por debajo del límite inferior (Hipo)                                                                   |
| `"lowBatColor"`          | `"#E53935"`(default Dark Red): Color of `uploader_battery` when value is low (below 30%)                                                                                                                                                        |
| `"carbColor"`            | `"#FB8C00"`(naranja por defecto): color de los puntos de carbohidratos en el gráfico                                                                                                                                                            |
| `"basalBackgroundColor"` | `"#0000FF"`(azul oscuro por defecto): color de la curva de TBR en el gráfico                                                                                                                                                                    |
| `"basalCenterColor"`     | `"#64B5F6"`(azul claro por defecto): color de los puntos de bolo o SMB en el gráfico                                                                                                                                                            |
| `"gridColor"`            | `"#FFFFFF"`(blanco por defecto): color de las líneas y del texto de la escala en el gráfico                                                                                                                                                     |
| `"pointSize"`            | 2 (por defecto): tamaño de los puntos en el gráfico (1 para puntos pequeños, 2 para puntos grandes)                                                                                                                                             |
| `"enableSecond"`         | false (por defecto): indica si la esfera muestra los segundos o no en las vistas `time`, `second` o `second_hand`. es importante que la visibilidad de las vistas coincida con este ajuste general, que permite actualizar la hora cada segundo |
| `"dayNameFormat"`        | "E" (default): from "E" to "EEEE" specify dayname format (number, short name, full name)                                                                                                                                                        |
| `"monthFormat"`          | "MMM" (por defecto): de "M" a "MMMM" indica el formato del mes (número, nombre corto, nombre completo)                                                                                                                                          |

(cwf-reference-list-of-hardcoded-resource-files)=

### Lista de archivos de recursos con nombre fijo

En la mayoría de las imágenes, los sufijos High y Low permiten ajustar la imagen según el nivel de glucosa (en rango, Hiper o Hipo)

| Nombres de archivo                                              | Comentario                                                                                                                                                                                                      |
| --------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| CustomWatchface                                                 | Imagen que se muestra al elegir la esfera y en el complemento Wear                                                                                                                                              |
| Background,<br />BackgroundHigh,<br />BackgroundLow | ninguna (negro por defecto): imagen de fondo. el fondo siempre está visible y su color por defecto es negro si no hay imagen. El color se puede cambiar para que encaje con el diseño de la esfera              |
| CoverChart,<br />CoverChartHigh,<br />CoverChartLow | ninguna (por defecto): imagen delante del gráfico (debe tener transparencia para ver el gráfico de detrás). Se puede usar para limitar los bordes del gráfico                                                   |
| CoverPlate,<br />CoverPlateHigh,<br />CoverPlateLow | esfera simple (por defecto): imagen delante de todos los valores de texto. la transparencia es obligatoria para ver todos los valores que están detrás                                                          |
| HourHand,<br />HourHandHigh,<br />HourHandLow       | hour_hand (por defecto): imagen de la aguja de las horas. se incluye una imagen por defecto, que se puede colorear para que encaje con un diseño analógico. Nota: el eje de giro es el centro de la imagen      |
| MinuteHand,<br />MinuteHandHigh,<br />MinuteHandLow | minute_hand (por defecto): imagen de la aguja de los minutos. se incluye una imagen por defecto, que se puede colorear para que encaje con un diseño analógico. Nota: el eje de giro es el centro de la imagen  |
| SecondHand,<br />SecondHandHigh,<br />SecondHandLow | second_hand (por defecto): imagen de la aguja de los segundos. se incluye una imagen por defecto, que se puede colorear para que encaje con un diseño analógico. Nota: el eje de giro es el centro de la imagen |
| ArrowNone                                                       | ?? (por defecto): imagen que se muestra cuando no hay una flecha válida.                                                                                                                                        |
| ArrowDoubleUp                                                   | ↑↑ (por defecto): imagen de flecha doble hacia arriba                                                                                                                                                           |
| ArrowSingleUp                                                   | ↑ (por defecto): imagen de flecha simple hacia arriba                                                                                                                                                           |
| Arrow45Up                                                       | ↗ (por defecto): imagen de flecha a 45 grados hacia arriba                                                                                                                                                      |
| ArrowFlat                                                       | → (por defecto): imagen de flecha plana                                                                                                                                                                         |
| Arrow45Down                                                     | ↘ (por defecto): imagen de flecha a 45 grados hacia abajo                                                                                                                                                       |
| ArrowSingleDown                                                 | ↓ (por defecto): imagen de flecha simple hacia abajo                                                                                                                                                            |
| ArrowDoubleDown                                                 | ↓↓ (por defecto): imagen de flecha doble hacia abajo                                                                                                                                                            |

Para cada uno de los nombres de archivo de arriba, la extensión puede ser `.jpg`, `.png` o `.svg`. Pero ten cuidado: `.jpg` no admite transparencia (así que la mayoría de los archivos deben ser .png o .svg para no tapar las vistas que están detrás...)

(cwf-reference-list-of-view-keys)=

### Lista de claves de vistas

Esta lista está ordenada desde el fondo hasta el primer plano. Es muy importante conocer este orden cuando organizas tu esfera, porque algunas imágenes o textos pueden quedar tapados por otras imágenes.

Nota: todas las claves que terminan en `_Ext1` o `_Ext2` son nuevas y están pensadas para esferas con varios usuarios.

| Clave                                                                                  | Tipo de vista             | Datos asociados                                                                                                                             | Clave DynData                                                                                                                                    |
| -------------------------------------------------------------------------------------- | ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `"background"`                                                                         | Vista de imagen           |                                                                                                                                             |                                                                                                                                                  |
| `"chart"`                                                                              | Vista de gráfico especial | Curvas del gráfico                                                                                                                          |                                                                                                                                                  |
| `"cover_chart"`                                                                        | Vista de imagen           |                                                                                                                                             |                                                                                                                                                  |
| `"freetext1"`                                                                          | Vista de texto            |                                                                                                                                             |                                                                                                                                                  |
| `"freetext2"`                                                                          | Vista de texto            |                                                                                                                                             |                                                                                                                                                  |
| `"freetext3"`                                                                          | Vista de texto            |                                                                                                                                             |                                                                                                                                                  |
| `"freetext4"`                                                                          | Vista de texto            |                                                                                                                                             |                                                                                                                                                  |
| `"patient_name"` *<br/>`"patient_name_Ext1"` *<br/>`"patient_name_Ext2"` * | Vista de texto            | Nombre del paciente                                                                                                                         |                                                                                                                                                  |
| `"iob1"`<br/>`"iob1_Ext1"` *<br/>`"iob1_Ext2"` *                           | Vista de texto            | Etiqueta IOB o IOB total                                                                                                                    |                                                                                                                                                  |
| `"iob2"`<br/>`"iob2_Ext1"` *<br/>`"iob2_Ext2"` *                           | Vista de texto            | IOB total o IOB detallada                                                                                                                   |                                                                                                                                                  |
| `"cob1"`<br/>`"cob1_Ext1"` *<br/>`"cob1_Ext2"` *                           | Vista de texto            | Etiqueta de carbohidratos                                                                                                                   |                                                                                                                                                  |
| `"cob2"`<br/>`"cob2_Ext1"` *<br/>`"cob2_Ext2"` *                           | Vista de texto            | Valor de COB                                                                                                                                |                                                                                                                                                  |
| `"delta"`<br/>`"delta_Ext1"` *<br/>`"delta_Ext2"` *                        | Vista de texto            | Delta corto (5 min)                                                                                                                         | delta<br/>delta_Ext1<br/>delta_Ext2                                                                                                  |
| `"avg_delta"`<br/>`"avg_delta_Ext1"` *<br/>`"avg_delta_Ext2"` *            | Vista de texto            | Delta promedio (15 min)                                                                                                                     | avg_delta<br/>avg_delta_Ext1<br/>avg_delta_Ext2                                                                                  |
| `"tempTarget"`*<br/>`"tempTarget_Ext1"` *<br/>`"tempTarget_Ext2"` *        | Vista de texto            | Objetivo de glucosa (un solo valor u objetivos mín - máx)                                                                                   | tempTarget<br/>tempTarget_Ext1<br/>tempTarget_Ext2                                                                                   |
| `"reservoir"`*<br/>`"reservoir_Ext1"` *<br/>`"reservoir_Ext2"` *           | Vista de texto            | Nivel de reservorio                                                                                                                         | reservoir<br/>reservoirLevel<br/>reservoir_Ext1<br/>reservoirLevel_Ext1<br/>reservoir_Ext2<br/>reservoirLevel_Ext2 |
| `"uploader_battery"`                                                                   | Vista de texto            | nivel de batería del teléfono (%)                                                                                                           | uploader_battery                                                                                                                                 |
| `"rig_battery"`<br/>`"rig_battery_Ext1"` *<br/>`"rig_battery_Ext2"` *      | Vista de texto            | nivel de batería del dispositivo (rig) (%)                                                                                                  | rig_battery<br/>rig_battery_Ext1<br/>rig_battery_Ext2                                                                            |
| `"basalRate"`<br/>`"basalRate_Ext1"` *<br/>`"basalRate_Ext2"` *            | Vista de texto            | % o valor absoluto                                                                                                                          |                                                                                                                                                  |
| `"bgi"`<br/>`"bgi_Ext1"` *<br/>`"bgi_Ext2"` *                              | Vista de texto            | mgdl/(5 min) o mmol/(5 min)                                                                                                                 |                                                                                                                                                  |
| `"status"` *<br/>`"status_Ext1"` *<br/>`"status_Ext2"` *                   | Vista de texto            | Resumen de IOB (sea cual sea el ajuste de IOB en el reloj), IOB detallada (según el ajuste en el reloj) y BGI (según el ajuste en el reloj) |                                                                                                                                                  |
| `"time"`                                                                               | Vista de texto            | HH:MM o HH:MM:SS                                                                                                                            |                                                                                                                                                  |
| `"hour"`                                                                               | Vista de texto            | HH                                                                                                                                          |                                                                                                                                                  |
| `"minute"`                                                                             | Vista de texto            | MM                                                                                                                                          |                                                                                                                                                  |
| `"second"`                                                                             | Vista de texto            | SS                                                                                                                                          |                                                                                                                                                  |
| `"timePeriod"`                                                                         | Vista de texto            | AM o PM                                                                                                                                     |                                                                                                                                                  |
| `"day_name"`                                                                           | Vista de texto            | nombre del día (ver dayNameFormat)                                                                                                          | day_name                                                                                                                                         |
| `"day"`                                                                                | Vista de texto            | DD fecha                                                                                                                                    | day                                                                                                                                              |
| `"week_number"`                                                                        | Vista de texto            | (WW) número de semana                                                                                                                       | week_number                                                                                                                                      |
| `"month"`                                                                              | Vista de texto            | nombre del mes (ver monthFormat)                                                                                                            |                                                                                                                                                  |
| `"loop"`<br/>`"loop_Ext1"` *<br/>`"loop_Ext2"` *                           | Vista de texto            | minutos desde la última ejecución y estado (flechas de color en el fondo); las flechas de color se pueden ajustar con DynData               | loop                                                                                                                                             |
| `"direction"`<br/>`"direction_Ext1"` *<br/>`"direction_Ext2"` *            | Vista de imagen           | TrendArrows                                                                                                                                 | direction                                                                                                                                        |
| `"timestamp"`<br/>`"timestamp_Ext1"` *<br/>`"timestamp_Ext2"` *            | Vista de texto            | entero (minutos desde)                                                                                                                      | timestamp                                                                                                                                        |
| `"sgv"`<br/>`"sgv_Ext1"` *<br/>`"sgv_Ext2"` *                              | Vista de texto            | valor sgv (mgdl o mmol)                                                                                                                     | sgv<br />sgvLevel<br/>sgv_Ext1<br />sgvLevel_Ext1<br/>sgv_Ext2<br />sgvLevel_Ext2                                  |
| `"cover_plate"`                                                                        | Vista de imagen           |                                                                                                                                             |                                                                                                                                                  |
| `"hour_hand"`                                                                          | Vista de imagen           |                                                                                                                                             |                                                                                                                                                  |
| `"minute_hand"`                                                                        | Vista de imagen           |                                                                                                                                             |                                                                                                                                                  |
| `"second_hand"`                                                                        | Vista de imagen           |                                                                                                                                             |                                                                                                                                                  |

**Vista añadida en Custom Watchface V2.0 o posterior (disponible en el apk de Wear de AAPS 3.3.0 o posterior)*

(cwf-reference-list-of-json-keys)=

### Lista de claves Json

(cwf-reference-common-keys)=

#### Claves comunes

 que se pueden usar en todos los tipos de vista (vista de texto, vista de imagen, vista de gráfico)

| Clave                    | tipo    | comentario / valor                                                                                                                                                                                |
| ------------------------ | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `"width"`                | int     | ancho de la vista en píxeles                                                                                                                                                                      |
| `"height"`               | int     | alto de la vista en píxeles                                                                                                                                                                       |
| `"topmargin"`            | int     | margen superior en píxeles                                                                                                                                                                        |
| `"leftmargin"`           | int     | margen izquierdo en píxeles                                                                                                                                                                       |
| `"rotation"`             | int     | ángulo de giro en grados                                                                                                                                                                          |
| `"visibility"`           | string  | ver la tabla de valores de clave                                                                                                                                                                  |
| `"dynData"`              | string  | nombre del bloque que indica los datos dinámicos que se enlazan y la animación asociada (colores, imagen, desplazamiento, giro)<br />`"dynData": "customName",` (ver abajo)                 |
| `"leftOffset"`           | boolean | incluye esta clave con el valor true para activar el desplazamiento horizontal (valor positivo o negativo) según el valor de dynData                                                              |
| `"topOffset"`            | boolean | incluye esta clave con el valor true para activar el desplazamiento vertical (valor positivo o negativo) según el valor de dynData                                                                |
| `"rotationOffset"`       | boolean | incluye esta clave con el valor true para activar el giro (valor positivo o negativo) según el valor de dynData                                                                                   |
| `"twinView"`             | string  | clave de la otra vista (en general, la otra vista también incluye el parámetro twinView con la clave de esta vista)                                                                               |
| `"topOffsetTwinHidden"`  | int     | número de píxeles para desplazar la vista en vertical si la vista gemela está oculta (valor positivo o negativo)<br />topOffsetTwinHidden = (topOffset twinView - topOffset thisView)/2     |
| `"leftOffsetTwinHidden"` | int     | número de píxeles para desplazar la vista en horizontal si la vista gemela está oculta (valor positivo o negativo)<br />leftOffsetTwinHidden= (leftOffset twinView - leftOffset thisView)/2 |
| `"dynPref"`              | string  | nombre del bloque que indica la preferencia dinámica que se enlaza y la animación asociada (colores, imagen, desplazamiento, giro)<br />`"dynPref": "customName",` (ver abajo)              |

(cwf-reference-textview-keys)=

#### Claves de TextView

| Clave          | tipo    | comment                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| -------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `"textsize"`   | int     | tamaño de la fuente en píxeles (recuerda que la fuente puede tener margen arriba y abajo, así que el tamaño real del texto suele ser menor que el número de píxeles indicado). Ten en cuenta que el tamaño debe ser menor que el alto de la vista para que no se corte                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| `"gravity"`    | string  | ver la tabla de valores de clave                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| `"font"`       | string  | ver la tabla de valores de clave para las fuentes disponibles.<br />También puede ser el nombre de archivo (sin extensión) de una fuente incluida en el archivo zip                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| `"fontStyle"`  | string  | ver la tabla de valores de clave                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| `"fontColor"`  | string  | Maneja el color de la fuente<br />`"#RRGGBB"`: código de color en formato RGB, en hexadecimal; #FF0000 es rojo<br />`"#AARRGGBB"`: AA es la información alfa (transparencia); 00 es transparente, FF es opaco<br />`"bgColor"`: el keyValue bgColor es una forma fácil de usar highColor, midColor o lowColor según el valor de glucosa                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| `"allCaps"`    | boolean | true si quieres el texto en mayúsculas (sobre todo para el nombre del día o del mes)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `"background"` | string  | `resource_filename`: puedes incluir una imagen de recurso como fondo de la vista de texto (el archivo se ajusta al alto y al ancho de la vista de texto, pero mantiene la proporción de la imagen). el valor de texto estará delante de la imagen de fondo.<br />- Ten en cuenta que esta clave también se puede usar en la vista `chart` para poner un fondo propio al gráfico, delante de la imagen de fondo                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `"color"`      | string  | Maneja el color del fondo de la vista o ajusta el color de la imagen (solo mapas de bits)<br />`"#RRGGBB"`: código de color en formato RGB, en hexadecimal; #FF0000 es rojo<br />`"#AARRGGBB"`: AA es la información alfa (transparencia); 00 es transparente, FF es opaco<br />`"bgColor"`: el keyValue bgColor es una forma fácil de usar highColor, midColor o lowColor según el valor de glucosa<br />- En las imágenes incluidas por defecto (agujas, esfera) el color se aplica directamente; en las imágenes de mapa de bits (jpg o png) se aplica un filtro de degradado de saturación<br />- En svg este parámetro no tiene efecto (el color de los archivos svg no se puede cambiar)<br />- Ten en cuenta que esta clave también se puede usar en la vista `chart` para poner un fondo propio al gráfico, delante de la imagen de fondo |
| `"textvalue"`  | string  | Clave propia de las 4 vistas de texto libre del diseño (de freetext1 a freetext4). Te permite fijar el texto que se muestra (puede ser una etiqueta, o solo `:` si quieres añadir un separador entre la vista de la hora y la vista de los minutos...)  
Desde el complemento Custom Watchface v2 (AAPS 3.3), textvalue se puede usar para incluir un texto de formato en las demás textViews (se usa con la clave `dynValue` y con `dynData` o `dynPref`). por ejemplo                                                                                                                                                                                                                                                                                                                                                                                                               |
| `"dynValue"`*  | boolean | true si quieres incluir el valor bruto en (double). Útil con la clave `textvalue` si quieres un formato propio para mostrar el valor                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |

**Clave añadida en Custom Watchface V2.0 o posterior (disponible en el apk de Wear de AAPS 3.3.0 o posterior)*

(cwf-reference-imageview-keys)=

#### Claves de ImageView

| Clave     | tipo   | comment                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `"color"` | string | Maneja el color del fondo de la vista o ajusta el color de la imagen (solo mapas de bits)<br />`"#RRGGBB"`: código de color en formato RGB, en hexadecimal; #FF0000 es rojo<br />`"#AARRGGBB"`: AA es la información alfa (transparencia); 00 es transparente, FF es opaco<br />`"bgColor"`: el keyValue bgColor es una forma fácil de usar highColor, midColor o lowColor según el valor de glucosa<br />- En las imágenes incluidas por defecto (agujas, esfera) el color se aplica directamente; en las imágenes de mapa de bits (jpg o png) se aplica un filtro de degradado de saturación<br />- En svg este parámetro no tiene efecto (el color de los archivos svg no se puede cambiar)<br />- Ten en cuenta que esta clave también se puede usar en la vista `chart` para poner un fondo propio al gráfico, delante de la imagen de fondo |

(cwf-reference-chartview-keys)=

#### Claves de ChartView

| Clave          | tipo   | comment                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| -------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `"color"`      | string | Maneja el color del fondo de la vista o ajusta el color de la imagen (solo mapas de bits)<br />`"#RRGGBB"`: código de color en formato RGB, en hexadecimal; #FF0000 es rojo<br />`"#AARRGGBB"`: AA es la información alfa (transparencia); 00 es transparente, FF es opaco<br />`"bgColor"`: el keyValue bgColor es una forma fácil de usar highColor, midColor o lowColor según el valor de glucosa<br />- En las imágenes incluidas por defecto (agujas, esfera) el color se aplica directamente; en las imágenes de mapa de bits (jpg o png) se aplica un filtro de degradado de saturación<br />- En svg este parámetro no tiene efecto (el color de los archivos svg no se puede cambiar)<br />- Ten en cuenta que esta clave también se puede usar en la vista `chart` para poner un fondo propio al gráfico, delante de la imagen de fondo |
| `"background"` | string | `resource_filename`: puedes incluir una imagen de recurso como fondo de la vista de texto (el archivo se ajusta al alto y al ancho de la vista de texto, pero mantiene la proporción de la imagen). el valor de texto estará delante de la imagen de fondo.<br />- Ten en cuenta que esta clave también se puede usar en la vista `chart` para poner un fondo propio al gráfico, delante de la imagen de fondo                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |

(cwf-reference-key-values)=

### Valores de clave

| Valor de clave               | clave      | comment                                                                                          |
| ---------------------------- | ---------- | ------------------------------------------------------------------------------------------------ |
| `"gone"`                     | visibility | vista oculta                                                                                     |
| `"visible"`                  | visibility | vista visible en la esfera (pero la visibilidad se puede activar o desactivar en los parámetros) |
| `"center"`                   | gravity    | el texto está centrado en vertical y en horizontal en la vista                                   |
| `"left"`                     | gravity    | el texto está centrado en vertical pero alineado a la izquierda en la vista                      |
| `"right"`                    | gravity    | el texto está centrado en vertical pero alineado a la derecha en la vista                        |
| `"sans_serif"`               | font       |                                                                                                  |
| `"default"`                  | font       |                                                                                                  |
| `"default_bold"`             | font       |                                                                                                  |
| `"monospace"`                | font       |                                                                                                  |
| `"serif"`                    | font       |                                                                                                  |
| `"roboto_condensed_bold"`    | font       |                                                                                                  |
| `"roboto_condensed_light"`   | font       |                                                                                                  |
| `"roboto_condensed_regular"` | font       |                                                                                                  |
| `"roboto_slab_light"`        | font       |                                                                                                  |
| `"normal"`                   | fontStyle  |                                                                                                  |
| `"bold"`                     | fontStyle  |                                                                                                  |
| `"bold_italic"`              | fontStyle  |                                                                                                  |
| `"italic"`                   | fontStyle  |                                                                                                  |

(cwf-reference-dyndata-keys)=

### Claves DynData

| Clave                     | tipo   | comment                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ------------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `"dynData"`               | bloque | define el bloque que contiene todos los bloques de datos dinámicos que usan las vistas. en general, después de la última vista.<br />Todas las claves definidas en este bloque se usan como valor de clave en el bloque de la vista:<br />`"dynData": { dynData blocks }`<br />y cada bloque se define con un nombre propio y varias claves dentro:<br />`"customName": { one dynData block }`                                                                                        |
| `"valueKey"`              | string | nombre de los datos dinámicos que se usan (en general, igual que la clave de la vista asociada).<br />Si no existe, por defecto se usan los valores de la vista que usa este bloque. <br />por ejemplo, puedes definir un bloque para personalizar el porcentaje del nivel de batería sin indicar valueKey, y después usar el mismo bloque para personalizar uploader_battery y rig_battery                                                                                                     |
| `"minData"`               | int    | indica el valor mínimo que se tiene en cuenta para los datos de AAPS: por ejemplo, si el valor es sgv (internamente en mgdl) y minData es 50, todos los valores de glucosa por debajo de 50 mgdl se ponen en 50.<br />- Ten en cuenta que minData y maxData se usan para calcular los valores dinámicos (en píxeles o en grados).                                                                                                                                                                       |
| `"maxData"`               | int    | indica el valor máximo que se tiene en cuenta para los datos de AAPS: por ejemplo, si el valor es sgv (internamente en mgdl) y maxData es 330, todos los valores de glucosa por encima de 330 mgdl se ponen en 330.                                                                                                                                                                                                                                                                                           |
| `"leftOffset"`            | bloque | Specify the horizontal shift of the view according to min and max values in pixels.<br />- It includes `minValue` key, `maxValue` key and `invalidValue` key (optional)<br />- If data is below or equal minData, then the view will be shifted to minValue pixels, and if data is above or equal to maxData, then the view will be shifted to maxValue pixels<br />Note that to apply this shift, `leftOffset` should be set to true within the view                                       |
| `"topOffset"`             | bloque | Specify the vertical shift of the view according to min and max values in pixels.<br />- It includes `minValue` key, `maxValue` key and `invalidValue` key (optional)<br />- If data is below or equal minData, then the view will be shifted to minValue pixels, and if data is above or equal to maxData, then the view will be shifted to maxValue pixels<br />Note that to apply this shift topOffset should be set to true within the view                                             |
| `"rotationOffset"`        | bloque | Specify the rotation angle in degrees of the view according to min and max values.<br />- It includes `minValue` key, `maxValue` Key and `invalidValue` key (optional)<br />- If data is below or equal `minData`, then the view will rotate by `minValue` degrees, and if data is above or equal to `maxData`, then the view will rotate by `maxValue` degrees<br />Note that to apply this rotation, `rotationOffset` should be set to true within the view                               |
| `"dynValue"`*             | bloque | Specify the dynValue conversion from min and max range to min and max values.<br />- It includes `minValue` key, `maxValue` Key and `invalidValue` key (optional)<br />- If data is below or equal `minData`, then the dynValue sent will be minValue (converted to double) , and if data is above or equal to `maxData`, then the dynValue calculated will be maxValue (converted to double)<br />Note that to apply this conversion, `dynValue` key should be set to true within the view |
| `"minValue"`              | int    | valor que se aplica a la vista (clave válida solo dentro de un bloque leftOffset, topOffset o rotationOffset)                                                                                                                                                                                                                                                                                                                                                                                                 |
| `"maxValue"`              | int    | valor que se aplica a la vista (clave válida solo dentro de un bloque leftOffset, topOffset o rotationOffset)                                                                                                                                                                                                                                                                                                                                                                                                 |
| `"invalidValue"`          | int    | valor que se aplica a la vista si el dato no es válido (clave válida solo dentro de un bloque leftOffset, topOffset o rotationOffset)                                                                                                                                                                                                                                                                                                                                                                         |
| `"invalidImage"`          | string | `resource_filename` que se usa para la ImageView o para el fondo de la TextView si el dato no es válido                                                                                                                                                                                                                                                                                                                                                                                                       |
| image*1_to_n*           | string | `resource_filename` de la imagen que se usa en cada paso entre minData (o cerca de minData), con `"image1"`, y maxData (o cerca de maxData), con image*n*<br />Si, por ejemplo, pones 5 imágenes (de image1 a image5), el rango entre minData y maxData se divide en 5 pasos y se muestra la imagen que corresponde al valor del dato                                                                                                                                                                   |
| `"invalidFontColor"`      | string | Maneja los pasos de fontColor si el dato no es válido<br />`"#RRGGBB"` o `"#AARRGGBB"`: color que se usa si se recibe un dato no válido (puede ser transparente si AA=00)                                                                                                                                                                                                                                                                                                                               |
| fontColor*1_to_n*       | string | Maneja los pasos de fontColor<br />`"#RRGGBB"` o `"#AARRGGBB"`: color que se usa en cada paso entre minData (o cerca de minData), con `"fontColor1"`, y maxData (o cerca de maxData), con fontColor*n*                                                                                                                                                                                                                                                                                                  |
| `"invalidColor"`          | string | Maneja los pasos del color de fondo o del color de la imagen si el dato no es válido<br />`"#RRGGBB"` o `"#AARRGGBB"`: color que se usa si se recibe un dato no válido (puede ser transparente si AA=00)                                                                                                                                                                                                                                                                                                |
| color*1_to_n*           | string | Maneja los pasos del color de fondo o del color de la imagen<br />`"#RRGGBB"` o `"#AARRGGBB"`: color que se usa en cada paso entre minData (o cerca de minData), con `"color1"`, y maxData (o cerca de maxData), con color*n*                                                                                                                                                                                                                                                                           |
| `"invalidTextSize"`       | int    | Maneja los pasos de tamaño de texto si el dato no es válido                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| textsize*1_to_n*        | int    | Maneja el tamaño de texto que se usa en cada paso entre minData (o cerca de minData), con `"textsize1"`, y maxData (o cerca de maxData), con textsize*n*                                                                                                                                                                                                                                                                                                                                                      |
| `"invalidLeftOffset"`     | int    | Maneja los pasos de leftOffset si el dato no es válido                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| leftOffset*1_to_n*      | int    | Maneja el leftOffset que se usa en cada paso entre minData (o cerca de minData), con `"leftOffset1"`, y maxData (o cerca de maxData), con leftOffset*n*<br />Nota: se puede usar con dynPref para desplazar una vista cuando otra está oculta...                                                                                                                                                                                                                                                        |
| `"invalidTopOffset"`      | int    | Maneja los pasos de topOffset si el dato no es válido                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| topOffset*1_to_n*       | int    | Maneja el topOffset que se usa en cada paso entre minData (o cerca de minData), con topOffset1, y maxData (o cerca de maxData), con topOffset*n*<br />Nota: se puede usar con dynPref para desplazar una vista cuando otra está oculta...                                                                                                                                                                                                                                                               |
| `"invalidRotationOffset"` | int    | Maneja los pasos de rotationOffset si el dato no es válido                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| rotationOffset*1_to_n*  | int    | Maneja el rotationOffset que se usa en cada paso entre minData (o cerca de minData), con rotationOffset1, y maxData (o cerca de maxData), con rotationOffset*n*                                                                                                                                                                                                                                                                                                                                               |
| `"invalidTextvalue"`*     | string | Maneja textvalue si el dato no es válido                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| textvalue*1_to_n* *     | string | Maneja el textvalue que se usa en cada paso entre minData (o cerca de minData), con textvalue1, y maxData (o cerca de maxData), con textvalue*n*<br />Nota: puede incluir un texto de formato si `"dynValue"` está en true en la vista                                                                                                                                                                                                                                                                  |

**Clave añadida en Custom Watchface V2.0 o posterior (disponible en el apk de Wear de AAPS 3.3.0 o posterior)*

(cwf-reference-dyndata-key-values)=

### Valores de clave DynData

| Valor de clave                                                                              | clave    | comment                                                                                                                                                                                                                                                                                                                     |
| ------------------------------------------------------------------------------------------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `"sgv"`<br/>`"sgv_Ext1"` *<br>`"sgv_Ext2"` *                                    | valueKey | minData por defecto = 39 mgdl<br />maxData por defecto = 400 mgdl<br />- Ten en cuenta que el maxData real depende de tu sensor y que los valores internos siempre están en mgdl                                                                                                                                |
| `"sgvLevel"`<br/>`"sgvLevel_Ext1"` *<br/>`"sgvLevel_Ext2"` *                    | valueKey | minData por defecto = -1 (Hipo)<br />maxData por defecto = 1 (Hiper)<br />si la glucosa está en rango = 0                                                                                                                                                                                                       |
| `"direction"`<br/>`"direction_Ext1"` *<br/>`"direction_Ext2"` *                 | valueKey | default minData = 1 (double Down)<br />default maxData = 7 (double Up)<br />flat arrow data = 4<br />Error or missing data = 0                                                                                                                                                                            |
| `"delta"`<br/>`"delta_Ext1"` *<br/>`"delta_Ext2"` *                             | valueKey | minData por defecto = -25 mgdl<br />maxData por defecto = 25 mgdl<br />- Ten en cuenta que los valores reales min y maxData pueden ser mayores, y que los valores internos siempre están en mgdl                                                                                                                |
| `"avg_delta"`<br/>`"avg_delta_Ext1"` *<br/>`"avg_delta_Ext2"` *                 | valueKey | minData por defecto = -25 mgdl<br />maxData por defecto = 25 mgdl<br />- Ten en cuenta que los valores reales min y maxData pueden ser mayores, y que los valores internos siempre están en mgdl                                                                                                                |
| `"tempTarget"`*<br/>`"tempTarget_Ext1"` *<br/>`"tempTarget_Ext2"` *             | valueKey | default minData = 0 (Profile Target)<br />default maxData = 2 (Temp Target)<br />Target is adjusted by the loop = 1<br/>Default or missing information = 0                                                                                                                                                |
| `"reservoir"`*<br/>`"reservoir_Ext1"` *<br/>`"reservoir_Ext2"` *                | valueKey | minData por defecto = 0 U<br />maxData por defecto = 500 U                                                                                                                                                                                                                                                            |
| `"reservoirLevel"`*<br/>`"reservoirLevel_Ext1"` *<br/>`"reservoirLevel_Ext2"` * | valueKey | minData por defecto = 0 (color normal)<br/>maxData por defecto = 2 (color urgente)<br/>Color de advertencia = 1                                                                                                                                                                                                 |
| `"uploader_battery"`                                                                        | valueKey | minData por defecto = 0 %<br />maxData por defecto = 100 %                                                                                                                                                                                                                                                            |
| `"rig_battery"`<br/>`"rig_battery_Ext1"` *<br/>`"rig_battery_Ext2"` *           | valueKey | minData por defecto = 0 %<br />maxData por defecto = 100 %                                                                                                                                                                                                                                                            |
| `"timestamp"`<br/>`"timestamp_Ext1"` *<br/>`"timestamp_Ext2"` *                 | valueKey | minData por defecto = 0 min<br />maxData por defecto = 60 min                                                                                                                                                                                                                                                         |
| `"loop"`<br/>`"loop_Ext1"` *<br/>`"loop_Ext2"` *                                | valueKey | minData por defecto = 0 min<br />maxData por defecto = 28 min<br />- Ten en cuenta que las flechas de estado son verdes por debajo de 14 min y rojas por encima de 14 min, así que, si pones 2 imágenes, puedes sustituir el fondo de estado por tus propias imágenes con los valores min y maxData por defecto |
| `"day"`                                                                                     | valueKey | minData por defecto = 1<br />maxData por defecto = 31                                                                                                                                                                                                                                                                 |
| `"day_name"`                                                                                | valueKey | minData por defecto = 1<br />maxData por defecto = 7                                                                                                                                                                                                                                                                  |
| `"month"`                                                                                   | valueKey | minData por defecto = 1<br />maxData por defecto = 12                                                                                                                                                                                                                                                                 |
| `"week_number"`                                                                             | valueKey | minData por defecto = 1<br />maxData por defecto = 53                                                                                                                                                                                                                                                                 |

**Clave añadida en Custom Watchface V2.0 o posterior (disponible en el apk de Wear de AAPS 3.3.0 o posterior)*

(cwf-reference-dynpref-keys)=

### Claves DynPref

| Clave            | tipo   | comment                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ---------------- | ------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `"dynPref"`      | bloque | define el bloque que contiene todos los bloques de preferencias dinámicas que usan las vistas. En general, después de la última vista o después del bloque dynData.<br />Todas las claves definidas en este bloque se usan como valor de clave en el bloque de la vista:<br />`"dynPref": { dynPref blocks }`<br />y cada bloque se define con un nombre propio y varias claves dentro:<br />`"customName": { one dynPref block }`                                                                                                                                          |
| `"dynPref"`      | string | *Dentro del bloque de una vista*<br />nombre del bloque dynPref dinámico que se usa (en general, igual que la clave de la vista asociada o que la preferencia asociada).                                                                                                                                                                                                                                                                                                                                                                                                                      |
| `"dynPref"`      | string | *Dentro de un bloque dynData parcial incluido en un bloque dynPref*<br />nombre del bloque dynPref dinámico que se usa para completar el bloque dynData. Esto te permite ajustar un bloque dynData según varias preferencias                                                                                                                                                                                                                                                                                                                                                                  |
| `"dynPrefColor"` | string | esta clave es propia del bloque principal con todos los colores principales (highColor, midColor, lowColor, colores del gráfico...). la usarás si quieres ajustar los colores principales según las preferencias                                                                                                                                                                                                                                                                                                                                                                                    |
| `"prefKey"`      | string | indica el valor de la clave de preferencia que se usa para obtener las preferencias del usuario (ver [Valores de PrefKey](#cwf-reference-prefkey-values) más abajo). Esta clave se debe usar dentro de un bloque `dynPref`.<br />Después, según la clave de preferencia, el bloque `dynPref` debe contener tantas claves como valores tenga prefKey.<br />Ten en cuenta que la mayoría de las preferencias son «booleanas», así que en el bloque dynPref deberías encontrar estos dos bloques dynData: <br />`"true": { dynData Block },`<br />`"false": { dynData Block }` |
| `"true"`         | bloque | la mayoría de las preferencias fijan un booleano `"true"` o `"false"`. Indicas el bloque dynData que se usa si la preferencia elegida por el usuario es true.<br />Ten en cuenta que, si el bloque también contiene una clave `"dynPref":`, el bloque dynData se une con el otro bloque. Esto te permite ajustar, por ejemplo, el color según una preferencia y el tamaño del texto según otra preferencia                                                                                                                                                                                    |
| `"false"`        | bloque | la mayoría de las preferencias fijan un booleano `"true"` o `"false"`. Indicas el bloque dynData que se usa si la preferencia elegida por el usuario es false.<br />Ten en cuenta que, si el bloque también contiene una clave `"dynPref":`, el bloque dynData se une con el otro bloque. Esto te permite ajustar, por ejemplo, el color según una preferencia y el tamaño del texto según otra preferencia                                                                                                                                                                                   |

(cwf-reference-prefkey-values)=

### Valores de PrefKey

Todas las claves del capítulo [Claves de preferencias](#cwf-reference-preference-keys) de arriba se pueden usar para ajustar los parámetros de las vistas

También puedes usar estas claves adicionales de abajo, incluidas en los parámetros propios de AAPS (Custom):

| Clave                 | tipo    | comment                                                                                                                                                                                                                                                                                                                                                                                             |
| --------------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `"key_units"`         | boolean | *true*: si la unidad elegida en AAPS es mgdl<br />*false*: si la unidad elegida en AAPS es mmol                                                                                                                                                                                                                                                                                               |
| `"key_dark"`          | boolean | *true*: para usar un fondo oscuro<br />*false*: para usar un fondo claro<br />Nota: este parámetro se usa a menudo en las esferas AAPS anteriores (AAPS, AAPS V2...)                                                                                                                                                                                                                    |
| `"key_match_divider"` | boolean | *true*: separador incluido en AAPS, las esferas AAPS v2 no serán visibles<br />*false*: separador incluido en AAPS, las esferas AAPS v2 serán visibles<br />Nota: este ajuste se combina a menudo con la preferencia de tema oscuro (usando la clave `dynPref` en el bloque `dynData`) para poner el color del texto (y del fondo) igual o contrario al del parámetro de tema oscuro... |
