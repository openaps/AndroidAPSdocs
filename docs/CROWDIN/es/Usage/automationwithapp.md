# Automatización con la aplicación Automate de Android de terceros

**Este artículo se ha escrito antes de AndroidAPS versión 2.5. Hay un plugin de automatización [en AndroidAPS](./Automation.rst) mismo con AndroidAPS versión 2.5. Para algunos, esto puede ser todavía útil, pero sólo debe ser utilizado por usuarios avanzados.**

As AndroidAPS is a hybrid closed loop system, some user interaction is necessary though (e.g. tell the loop that you are walking, eating soon, lying on the sofa...). Las entradas de usuario manual frecuentes se pueden automatizar a través de herramientas externas como Automate o IFTTT para ampliar las funcionalidades recientes de AndroidAPS.

## Aplicación Automate de Android

La aplicación gratuita de Android™ Automate le permite automatizar varias tareas en el smartphone. Cree sus automatizaciones con diagramas de flujo, haga que su dispositivo cambie automáticamente la configuración como Bluetooth, Wi-Fi, NFC o realice acciones como enviar SMS, correo electrónico, en función de su ubicación, la hora del día, o cualquier otro "evento desencadenante". Puede automatizar casi todo lo que esté en su dispositivo, Automatizar incluso los plugins de soporte realizados para Tareas y Localización.

Usando esta herramienta puedes crear fácilmente flujos de trabajo para tratar tu diabetes en base a varias condiciones de acuerdo con el principio de 'si esto... y esto... no esto..., entonces hacer eso... y esto...'. Hay miles de posibilidades que puedes configurar.

Hasta ahora, es **necesario enlazar a través de Perfil de Nightscout**, ya que Automate ejecuta los comandos a través de HTTP-request directamente en su sitio web de nightscout que posteriormente sincroniza con tu app AndroidAPS.

**La comunicación fuera de línea (comunicación directa entre la aplicación Automate y AndroidAPS) no está soportada todavía**, pero es técnicamente posible. Tal vez haya una solución en el futuro. Si ha averiguado una forma de hacerlo, añádelo a esta documentación o póngase en contacto con un desarrollador.

### Requisitos básicos

#### Automate aplicación

Descargar Android Automate en Google Play Store o en <https://llamalab.com/automate/> e instalarlo en tu smartphone en el que se ejecuta AndroidAPS.

Ir a smartphone ajustes del sistema > Aplicaciones > Automate > Toque en el engranaje en la parte superior derecha de la pantalla > de Verificación "Ejecutar en el arranque del sistema'. De este modo se ejecutarán automáticamente los flujos de trabajo en el arranque del sistema.

![Automatizar la solicitud HTTP](../images/automate-app2.png)

#### AndroidAPS

En AndroidAPS NSClient, pulse sobre el engranaje en la parte superior derecha de la pantalla y vaya a la configuración de la Conexión > Desmarcar la casilla "Utilizar la conexión WiFi solo" y "Sólo si la carga' ya que el sistema automatizado sólo funciona cuando AndroidAPS tiene una conexión con nightscout.

![Preferencias de conexión de Nightscout](../images/automate-aaps1.jpg)

En AndroidAPS NSClient, pulse sobre el engranaje en la parte superior derecha de la pantalla y vaya a Configuración Avanzada > Desmarcar la casilla " NS solo cargar (dosable sync)' y 'No subir a NS'

![Preferencias de descarga de Nightscout](../images/automate-aaps2.jpg)

### Ejemplos de flujo de trabajo

#### Ejemplo 1: Si se detecta la actividad (por ejemplo, caminar o correr), establezcer un TT alto. Y si la actividad termina, entonces espere 20 minutos y luego cancele la TT

Este flujo de trabajo se escucha en el teléfono inteligente con los sensores (podómetro, sensor de gravedad...) que detectan la actividad por el comportamiento. Si hay actividad reciente como caminar, correr o montar una bicicleta, Automate establecerá un destino de alto nivel de temporal especificado por el usuario para el tiempo especificado por el usuario. Si la actividad termina, el smartphone lo detectará, esperará 20 minutos y, a continuación, establecerá el objetivo en el valor de perfil normal.

Descargue el script Automate [https://llamalab.com/automate/community/flows/ 27808](https://llamalab.com/automate/community/flows/27808).

Editar comando pulsando en el lápiz de edición > Flowchart

![Automatizar comandos](../images/automate-app3.png)

Personalice el flujo de trabajo según sus deseos como se indica a continuación:

![Automatizar comandos](../images/automate-app6.png)

1. = Establecer TT alto
2. = Volver a la meta normal 20 minutos después del final de la acitividad

1 ![Automatizar comandos](../images/automate-app1.png)

2 ![Automatizar comandos](../images/automate-app5.png)

La URL de la solicitud: Es su NS-URL con final /api/v1/tratamientos.json (por ejemplo, https://my-cgm.herokuapp.com/api/v1/treatments.json)

Contenido de la solicitud:

* objetivoAlto/objetivoBajo: el valor de TT alto (superior e inferior debe ser el mismo valor)
* duración: la duración del TT alto (después de que se repliegue a un objetivo de perfil regular a menos que la actividad se activa). 
* secreto: Tu hash API SHA1. NO es tu clave de api! Puede convertir la clave de API al formato SHA1 en <http://www.sha1-online.com/>

Guardar: Pulse en 'Hecho' y en el enganche

Inicio de comando: pulse en el botón Play

#### Ejemplo 2: Si xDrip+ da una alarma BG alta, entonces se establece un bajo TT para ... minutos.

Este flujo de trabajo escuchará el canal de notificación xDrip+. Si se desencadena una alerta por alta BG especificada por el usuario en xDrip+ Automate establecerá un objetivo de bajo nivel temporal especificado por el usuario para el tiempo especificado por el usuario. Después del tiempo, otra posibilidad es alertar para prolongar la duración del TT bajo.

##### xDrip+

En primer lugar, debe añadir una alerta máxima de BG en xDrip+ como se indica a continuación:

![valores de alerta de xDrip+](../images/automate-xdrip1.png)

Nombre de alerta: (Presta atención en él!) Este nombre es esencial para activar el disparador. Debe ser inconfundible y no similar a otros nombres de alertas. Ejemplo: '180alarm' no debe existir junto a '80alarm'.

Umbral: Valor de BG que debe activar la alerta máxima.

Tiempo de espera predefinido: Inserte la duración que planea establecer para su TT baja aquí, ya que la alerta volverá a aparecer y tal vez prorrogue la duración de la baja TT.

![valores de alerta de xDrip+](../images/automate-xdrip2.png)

##### Automate

En segundo lugar, descargue el script Automate [https://llamalab.com/automate/community/flows/ 27809](https://llamalab.com/automate/community/flows/27809).

Editar comando pulsando en el lápiz de edición > Flowchart

![Automatizar comandos](../images/automate-app3.png)

Personalice el flujo de trabajo según sus deseos como se indica a continuación:

Within the 'Notification posted?' trigger, you have to set the 'TITLE' to the name of your xDrip+ alert that should fire the trigger and add a * variable before and after that name.

![Automatizar comandos](../images/automate-app7.png)

![Automatizar comandos](../images/automate-app4.png)

La URL de la solicitud: Es su NS-URL con final /api/v1/tratamientos.json (por ejemplo, https://my-cgm.herokuapp.com/api/v1/treatments.json)

Contenido de la solicitud:

* objetivoAlto / objetivoBajo: el valor bajo de TT (superior e inferior debe ser el mismo valor)
* duración: la duración del TT bajo (después de que se repliegue a un objetivo de perfil regular a menos que la actividad se activa). Se recomienda que utilice la misma duración que en la alerta xDrip+ 'Tiempo de espera predefinido'
* secreto: Tu hash API SHA1. NO es tu clave de api! Puede convertir la clave de API al formato SHA1 en <http://www.sha1-online.com/>

Guardar: Pulse en 'Hecho' y en el enganche

Inicio de comando: pulse en el botón Play

#### Ejemplo 3: Para ser añadido por ti!!!

Por favor agregue más flujos de trabajo subiendo .flo archivos para automatizar en la comunidad (bajo la palabra clave 'Nightscout') y describirlo aquí haciendo [Pull Request en el repositorio AndroidAPSdocs](../make-a-PR.md).

## Si esto, entonces eso (IFTTT)

Siéntase libre de añadir un cómo por PR...