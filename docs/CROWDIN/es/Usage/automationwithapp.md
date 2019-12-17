# Automatización con la aplicación Automate de Android de terceros

**This article has been written before AndroidAPS version 2.5. There is an [automation plugin in AndroidAPS](./Automation.rst) itself with AndroidAPS version 2.5. For some, this here might be still useful, but should only be used by advanced users.**

As AndroidAPS is a hybrid closed loop system, some user interaction is necessary though (e.g. tell the loop that you are walking, eating soon, lying on the sofa...). Frequent manual user inputs can be automated via external tools like Automate or IFTTT to extend the recent AndroidAPS functionality.

## Aplicación Automate de Android

La aplicación gratuita de Android™ Automate le permite automatizar varias tareas en el smartphone. Create your automations with flowscharts, make your device automatically change settings like Bluetooth, Wi-Fi, NFC or perform actions like sending SMS, e-mail, based on your location, the time of day, or any other “event trigger”. Puede automatizar casi todo lo que esté en su dispositivo, Automatizar incluso los plugins de soporte realizados para Tareas y Localización.

Usando esta herramienta puedes crear fácilmente flujos de trabajo para tratar tu diabetes en base a varias condiciones de acuerdo con el principio de 'si esto... y esto... no esto..., entonces hacer eso... y esto...'. Hay miles de posibilidades que puedes configurar.

Until now it is **necessary to loop via Nightscout Profile**, as Automate executes the commands via HTTP-request directly in your nightscout website that subsequently syncs it to your AndroidAPS app.

**La comunicación fuera de línea (comunicación directa entre la aplicación Automate y AndroidAPS) no está soportada todavía**, pero es técnicamente posible. Tal vez haya una solución en el futuro. Si ha averiguado una forma de hacerlo, añádelo a esta documentación o póngase en contacto con un desarrollador.

### Requisitos básicos

#### Automate aplicación

Download Android Automate in Google Play Store or at <https://llamalab.com/automate/> and install it on your smartphone where AndroidAPS runs.

Go to smartphone system settings > Apps > Automate > Tap on the gear on the upper right of the screen > Check 'Run on system startup'. This will automatically run your workflows on system startup.

![Automate HTTP request](../images/automate-app2.png)

#### AndroidAPS

In AndroidAPS NSClient, tap on the gear at the upper right screen and go to Connection settings > Uncheck 'Use WiFi connection only' and 'Only if charging' as the automated treating does only work when AndroidAPS has an actual nightscout connection.

![Nightscout connection preferences](../images/automate-aaps1.jpg)

In AndroidAPS NSClient, tap on the gear at the upper right screen and go to Advanced Settings > Uncheck 'NS upload only (dosable sync)' and 'No upload to NS'

![Nightscout download preferences](../images/automate-aaps2.jpg)

### Workflow examples

#### Example 1: If activity (e.g. walking or running) is detected, then set a high TT. And if activity ends, then wait 20 minutes and then cancel TT

This workflow will listen to the smartphone sensors (pedometer, gravity sensor...) that detect the activity behavior. If there is recent activity like walking, running or riding a bycicle present, then Automate will set a user specified high temprorary target for the user specified time. If activity ends, your smartphone will detect this, wait for 20 minutes and then set the target back to normal profile value.

Download the Automate script <https://llamalab.com/automate/community/flows/27808>.

Edit the sling by tapping on the edit pencil > Flowchart

![Automate sling](../images/automate-app3.png)

Customize the workflow according to your wishes as follows:

![Automate sling](../images/automate-app6.png)

1. = Set high TT
2. = Go back to normal target 20 minutes after the end of acitivity

1 ![Automate sling](../images/automate-app1.png)

2 ![Automate sling](../images/automate-app5.png)

Request URL: Your NS-URL with ending /api/v1/treatments.json (e.g. https://my-cgm.herokuapp.com/api/v1/treatments.json)

Request content:

* targetTop / targetBottom: The high TT value (top and bottom should be the same value)
* duration: The duration of the high TT (after time it will fallback to regular profile target unless activity goes on). 
* secret: Your API SHA1 hash. It is NOT your api key! You can convert your API key to SHA1 format at <http://www.sha1-online.com/>

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

Edit the sling by tapping on the edit pencil > Flowchart

![Automate sling](../images/automate-app3.png)

Customize the workflow according to your wishes as follows:

Within the 'Notification posted?' trigger, you have to set the 'TITLE' to the name of your xDrip+ alert that should fire the trigger and add a * variable before and after that name.

![Automate sling](../images/automate-app7.png)

![Automate sling](../images/automate-app4.png)

Request URL: Your NS-URL with ending /api/v1/treatments.json (e.g. https://my-cgm.herokuapp.com/api/v1/treatments.json)

Request content:

* targetTop / targetBottom: The low TT value (top and bottom should be the same value)
* duration: The duration of the low TT (after time it will fallback to regular profile target). It is recommended that you use the same duration as in xDrip+ alert 'Standard snooze'
* secret: Your API SHA1 hash. It is NOT your api key! You can convert your API key to SHA1 format at <http://www.sha1-online.com/>

Save: Tap on 'Done' and on the hook

Start sling: Tap on Play button

#### Example 3: To be added by you!!!

Please add further workflows by uploading .flo file to Automate community (under the keyword 'Nightscout') and describe it here by doing [Pull Request on AndroidAPSdocs repository](../make-a-PR.md).

## If this, then that (IFTTT)

Feel free to add a Howto by PR...