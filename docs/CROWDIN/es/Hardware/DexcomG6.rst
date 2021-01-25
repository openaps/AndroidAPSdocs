Dexcom G6
**************************************************
Lo básico primero
==================================================

* Siga la higiene general de la CGM y establezca la recomendación del sensor ` Aquí <../Hardware/GeneralCGMRecommendation.html>`_.
* Para los transmisores G6 fabricados después del final del otoño de 2018, asegúrese de utilizar una de las ` última versión nightly de xDrip+ <https://github.com/NightscoutFoundation/xDrip/releases>`_. Dichos transmisores tienen un nuevo firmware y la última versión estable de xDrip+ (2019/01/10) no puede tratar con él.

Consejos generales para el bucle con G6
==================================================

Lo que está claro es que el uso del G6 es tal vez un poco más complejo que lo que se sugiere en primer lugar. Para utilizar de manera segura, hay un par de puntos a tener en cuenta: 

* Si estás usando los datos nativos con el código de calibración en xDrip+ o Spike, lo más seguro es no permitir reinicios preventivos del sensor.
* Si debe usar reinicio preventivo, a continuación, asegúrese de insertar una hora del día donde puede observar el cambio y calibrar si es necesario. 
* Si está reiniciando sensores, o bien haga esto sin la calibración de fábrica para obtener resultados más seguros en los días 11 y 12, o asegúrate de que estás listo para calibrar y vigilar la variación.
* La preabsorción del G6 con calibración de fábrica es probable que dé variaciones en los resultados. Si haces preconfiguración, entonces para obtener los mejores resultados, probablemente necesitarás calibrar el sensor.
* Si no estás observando los cambios que pueden estar teniendo lugar, puede ser mejor volver al modo no calibrado en fábrica y usar el sistema como un G5.

Para obtener más información acerca de los detalles y las razones de estas recomendaciones, lea `el artículo completo <http://www.diabettech.com/artificial-pancreas/diy-looping-and-cgm/>`_ publicado por Tim Street en `www.diabettech.com<http://www.diabettech.com>`_.

Si se utiliza G6 con xdrip+
==================================================
* El transmisor Dexcom G6 puede conectarse simultáneamente al receptor Dexcom (o alternativamente a la bomba t:slim) y a una aplicación en tu teléfono.
* Para usar xDrip+ como receptor, desinstala primero la aplicación Dexcom. **No se puede conectar la aplicación xDrip+ y Dexcom con el transmisor al mismo tiempo!**
* If you need Clarity and want to profit from xDrip+ alarms use the `patched Dexcom app <../Hardware/DexcomG6.html#if-using-g6-with-patched-dexcom-app>`_ with local broadcast to xDrip+.
* Si todavía no se ha configurado, descargue `xdrip <https://github.com/NightscoutFoundation/xDrip>`_ y siga las instrucciones de nightscout (`G5 <http://www.nightscout.info/wiki/welcome/nightscout-with-xdrip-and-dexcom-share-wireless/xdrip-with-g5-support>`_).
* Select xDrip+ in ConfigBuilder (setting in AndroidAPS).
* Ajuste los valores en xDrip+ según la página de valores de `xDrip+ <../Configuration/xdrip.html>`_
* Si AAPS no recibe los valores de BG cuando el teléfono está en el modo de avión, utilice ` Identificar receptor ', como se describe en la página' xDrip+ settings <../Configuration/xdrip.html>`_.

Si utiliza G6 con la aplicación Dexcom parcheada
==================================================
* Descargar el apk desde `https://github.com/dexcomapp/dexcomapp <https://github.com/dexcomapp/dexcomapp>`_, y elegir la versión que más se adapte a sus necesidades (mg/dl o mmol/l versión, G6).

   * Carpeta 2.4 para los usuarios de la versión actual, la carpeta 2.3 es sólo para la anticuada AndroidAPS 2.3.
   * Abrir https://play.google.com/store/search?q=dexcom%20g6 en tu ordenador. 
   * Click the link to the Dexcom G6 app on the search results page that is displayed.
   * La región estará visible en el URL.
   
   .. image:: ../images/DexcomG6regionURL.PNG
     :alt: Region en el URL de Dexcom G6

* Uninstall the original Dexcom app.
* Instalar el apk descargado
* Enter sensor code and transmitter serial no. in patched app.
* After short time patched app should pick-up transmitter signal. (If not you will have to stop sensor and start new one.)
* Seleccione la aplicación Dexcom (parchada) en ConfigBuilder (seteos en AndroidAPS).
* If you want to use xDrip+ alarms via local broadcast: in xDrip+ hamburger menu > settings > hardware data source > 640G /EverSense.
* There is no local broadcast from patched Dexcom app directly to xDrip+. Broadcast has to go through AAPS as described above.

If using G6 with Build Your Own Dexcom App
==================================================
* As of December 2020 `Build Your Own Dexcom App <https://docs.google.com/forms/d/e/1FAIpQLScD76G0Y-BlL4tZljaFkjlwuqhT83QlFM5v6ZEfO7gCU98iJQ/viewform?fbzx=2196386787609383750&fbclid=IwAR2aL8Cps1s6W8apUVK-gOqgGpA-McMPJj9Y8emf_P0-_gAsmJs6QwAY-o0>`_ (BYODA)also supports local broadcast to AAPS and/or xDrip+ (not for G5 sensors!)
* This app lets you use your Dexcom G6 with any Android smartphone.
* Uninstall the original Dexcom app or patched Dexcom app if you used one of those previously.
* Instalar el apk descargado
* Enter sensor code and transmitter serial no. in patched app.
* In phone settings go to apps > Dexcom G6 > permissions > additional permissions and press 'Access Dexcom app'.
* After short time patched app should pick-up transmitter signal. (If not you will have to stop sensor and start new one.)

Settings for AndroidAPS
--------------------------------------------------
* Select 'Dexcom App (patched)' in config builder.
* If you don't recieve any values select any other data source, then re-select 'Dexcom App (patched)' to trigger the demand for permissions to establish the connection between AAPS and BYODA-broadcast.

Settings for xDrip+
--------------------------------------------------
* Select '640G/Eversense' as data source.
* Command 'start sensor' must be performed in xDrip+ in order to receive values. This will not affect your current sensor controlled by Build Your Own Dexcom App.
   
Resolución de problemas G6
==================================================
Resolución de problemas específica de Dexcom G6
--------------------------------------------------
* Transmisores con número de serie comenzando con 80 o 81 necesitan, al menos, la última versión estable xDrip de Mayo de 2019 o una versión más reciente.
* Transmisores con número de serie a partir de 8G necesita al menos la versión nightly a partir del 25 de julio de 2019 o más reciente.
* La aplicación xDrip + y Dexcom no se puede conectar con el transmisor a la vez.
* Espere por lo menos 15 min. entre la detención y el inicio de un sensor.
* No retroceder el tiempo del momento de la inserción. Responde a la pregunta: "¿Lo insertaste hoy?" siempre con "Sí, hoy".
* No permitir reiniciar "sensores", mientras se establece un sensor
* No inicie un nuevo sensor antes de que se muestre la información siguiente en la página de estado clásica-> G5/G6 estado-> PhoneServiceState:

  * Transmisor con número de serie que empieza por 80 o 81: "Obtiene datos hh:mm" (por ejemplo, "Obtiene datos. "Obtiene datos 19:04")
  * Transmisor de serie empezando con 8G o 8H: "Obengo la glucosa hh:mm" (es decir, "Obtuviste la glucosa 19:04") o "No hay datos hh:mm" (por ejemplo. "Obtenidos ahora en bruto 19:04")

.. image:: ../images/xDrip_Dexcom_PhoneServiceState.png
  :alt: xDrip PhoneServiceState

Resolver problemas generales
--------------------------------------------------
General Troubleshoothing for CGMs can be found `here <./GeneralCGMRecommendation.html#troubleshooting>`_.

Nuevo transmisor con sensor en ejecución
--------------------------------------------------
Si usted cambia de transmisor durante una sesión con sensor en funcionamiento trate de remover el transmisor sin dañar la montura del sensor. Se puede encontrar un vídeo en 'https: //youtu.be/AAhBVsc6NZo <https://youtu.be/AAhBVsc6NZo>`_.
