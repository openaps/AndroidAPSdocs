# Automatización con la aplicación Automate de Android de terceros

**This article has been written before AndroidAPS version 2.5. There is an [automation plugin in AndroidAPS](./Automation.rst) itself with AndroidAPS version 2.5. For some, this here might be still useful, but should only be used by advanced users.**

As AndroidAPS is a hybrid closed loop system, some user interaction is necessary though (e.g. tell the loop that you are walking, eating soon, lying on the sofa...). Frequent manual user inputs can be automated via external tools like Automate or IFTTT to extend the recent AndroidAPS functionality.

## Aplicación Automate de Android

La aplicación gratuita de Android™ Automate le permite automatizar varias tareas en el smartphone. Create your automations with flowscharts, make your device automatically change settings like Bluetooth, Wi-Fi, NFC or perform actions like sending SMS, e-mail, based on your location, the time of day, or any other “event trigger”. Puede automatizar casi todo lo que esté en su dispositivo, Automatizar incluso los plugins de soporte realizados para Tareas y Localización.

Usando esta herramienta puedes crear fácilmente flujos de trabajo para tratar tu diabetes en base a varias condiciones de acuerdo con el principio de 'si esto... y esto... no esto..., entonces hacer eso... y esto...'. Hay miles de posibilidades que puedes configurar.

Hasta ahora, es **necesario enlazar a través de Perfil de Nightscout**, ya que Automate ejecuta los comandos a través de HTTP-request directamente en su sitio web de nightscout que posteriormente sincroniza con tu app AndroidAPS.

**La comunicación fuera de línea (comunicación directa entre la aplicación Automate y AndroidAPS) no está soportada todavía**, pero es técnicamente posible. Tal vez haya una solución en el futuro. Si ha averiguado una forma de hacerlo, añádelo a esta documentación o póngase en contacto con un desarrollador.

### Requisitos básicos

#### Automate aplicación

Descargar Android Automate en Google Play Store o en <https://llamalab.com/automate/> e instalarlo en tu smartphone en el que se ejecuta AndroidAPS.

Ir a smartphone ajustes del sistema > Aplicaciones > Automate > Toque en el engranaje en la parte superior derecha de la pantalla > de Verificación "Ejecutar en el arranque del sistema'. De este modo se ejecutarán automáticamente los flujos de trabajo en el arranque del sistema.

![Automatizar la solicitud HTTP](../images/automate-app2.png)

#### AndroidAPS

In AndroidAPS NSClient, tap on the gear at the upper right screen and go to Connection settings > Uncheck 'Use WiFi connection only' and 'Only if charging' as the automated treating does only work when AndroidAPS has an actual nightscout connection.

![Preferencias de conexión de Nightscout](../images/automate-aaps1.jpg)

In AndroidAPS NSClient, tap on the gear at the upper right screen and go to Advanced Settings > Uncheck 'NS upload only (dosable sync)' and 'No upload to NS'

![Preferencias de descarga de Nightscout](../images/automate-aaps2.jpg)

### Ejemplos de flujo de trabajo

#### Ejemplo 1: Si se detecta la actividad (por ejemplo, caminar o correr), establezcer un TT alto. Y si la actividad termina, entonces espere 20 minutos y luego cancele la TT

This workflow will listen to the smartphone sensors (pedometer, gravity sensor...) that detect the activity behavior. If there is recent activity like walking, running or riding a bycicle present, then Automate will set a user specified high temprorary target for the user specified time. If activity ends, your smartphone will detect this, wait for 20 minutes and then set the target back to normal profile value.

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
* secreto: Tu hash API SHA1. NO es tu clave de api! You can convert your API key to SHA1 format at <http://www.sha1-online.com/>

Save: Tap on 'Done' and on the hook

Start sling: Tap on Play button

#### Example 2: If xDrip+ alerts a BG high alarm, then set a low TT for ... minutes.

This workflow will listen to the xDrip+ notification channel. If there is triggered a user specified xDrip+ high BG alert, then Automate will set a user specified low temprorary target for the user specified time. After time, another possibly alert will extend the duration of the low TT.

##### xDrip+

First, you must add a BG high alert in xDrip+ as follows:

![xDrip+ alert settings](../images/automate-xdrip1.png)

Alert name: (Pay attention on it!) This name is essential for fireing the trigger. It should be unmistakeable and not similar to other alert names. Example: '180alarm' should not exist next to '80alarm'.

Threshold: BG value that should fire the high alert.

Default Snooze: Insert the duration you are planning to set for your low TT here, as the alert will come up again and maybe extend the duration of the low TT.

![xDrip+ alert settings](../images/automate-xdrip2.png)

##### Automate

Secondly, download the Automate script <https://llamalab.com/automate/community/flows/27809>.

Editar comando pulsando en el lápiz de edición > Flowchart

![Automatizar comandos](../images/automate-app3.png)

Personalice el flujo de trabajo según sus deseos como se indica a continuación:

Within the 'Notification posted?' trigger, you have to set the 'TITLE' to the name of your xDrip+ alert that should fire the trigger and add a * variable before and after that name.

![Automatizar comandos](../images/automate-app7.png)

![Automatizar comandos](../images/automate-app4.png)

La URL de la solicitud: Es su NS-URL con final /api/v1/tratamientos.json (por ejemplo, https://my-cgm.herokuapp.com/api/v1/treatments.json)

Contenido de la solicitud:

* targetTop / targetBottom: The low TT value (top and bottom should be the same value)
* duration: The duration of the low TT (after time it will fallback to regular profile target). It is recommended that you use the same duration as in xDrip+ alert 'Standard snooze'
* secreto: Tu hash API SHA1. NO es tu clave de api! You can convert your API key to SHA1 format at <http://www.sha1-online.com/>

Save: Tap on 'Done' and on the hook

Start sling: Tap on Play button

#### Example 3: To be added by you!!!

Please add further workflows by uploading .flo file to Automate community (under the keyword 'Nightscout') and describe it here by doing [Pull Request on AndroidAPSdocs repository](../make-a-PR.md).

## If this, then that (IFTTT)

Feel free to add a Howto by PR...