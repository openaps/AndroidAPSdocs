Seguimiento remoto
**************************************************

.. imagen:: ../images/KidsMonitoring.png
  :alt: Monitoring children
  
AndroidAPS ofrece varias opciones para el monitorización remota de los parámetros de niños y también permite enviar comandos remotos. Por supuesto, también puedes usar la monitorización remota para seguir los datos de tu pareja o amigo.

Funciones
==================================================
La bomba de insulina de un niño es controlado por el teléfono móvil del niño usando AndroidAPS.
* Los padres pueden seguir de forma remota todos los datos relevantes, tales como los niveles de glucosa, carbohidratos a bordo, insulina a bordo, etc. using **NSClient app** on their phone. Settings must be the same in AndroidAPS and NSClient app.
* Los padres pueden visualizar las alarmas usando la aplicación **xDrip en modo seguidor** en su teléfono.
* Remote control of AndroidAPS using `SMS Commands <../Children/SMS-Commands.html>`_ secured by two-factor authentication.
* Remote control through NSClient app is only recommended if your synchronization is working well (ie. you don’t see unwanted data changes like self modification of TT, TBR etc) see `release notes for Version 2.8.1.1 <https://androidaps.readthedocs.io/en/latest/EN/Installing-AndroidAPS/Releasenotes.html#important-hints>`_ for further details.

Herramientas y aplicaciones para monitorización remota
==================================================
* `Nightscout <http://www.nightscout.info/>`_ en el navegador web (principalmente para visualización de datos)
*	NSClient app is a stripped down version of AAPS capable of following somebody, making profile switches, setting TTs and entering carbs. There are 2 apps:  `NSClient & NSClient2 to download <https://github.com/nightscout/AndroidAPS/releases/>`_. The only difference is the app name. This way you can install the app twice on the same phone, to be able to follow 2 different persons/nightscouts with it.
*	Dexcom seguidor si está usando la aplicación original Dexcom (sólo valores BG)
*	`xDrip+ <../Configuration/xdrip.html>`_ in follower mode (mainly BG values and **alarms**)
*	`Sugarmate <https://sugarmate.io/>`_ o `Spike <https://spike-app.com/>`_ en iOS (principalmente valores de glucosa en sangre y **alarmas**)

Puntos a considerar
==================================================
* Establecer los `factores de tratamiento correctos <../Getting-Started/FAQ.html#how-to-begin>`_ (tasa basal, DIA, ISF...) es difícil para los niños, especialmente cuando las hormonas de crecimiento están involucradas. 
* Settings must be the same in AndroidAPS and NSClient app.
* Considere la diferencia de tiempo entre el maestro y el seguidor debido al tiempo de subida y descarga, así como el hecho de que el teléfono maestro de AAPS sólo subirá después de la ejecución del bucle.
* Por lo tanto, tómese su tiempo para establecer los parámetros correctamente y probarlos en la vida real con su niño junto a usted, antes de comenzar el control y tratamiento remoto. Las vacaciones escolares pueden ser un buen momento para ello.
* Cuál es su plan de emergencia cuando el control remoto no funciona (por ejemplo, problemas de conectividad). problemas de red)?
* La monitorización y el tratamiento a distancia pueden ser realmente útiles en la guardería y colegio. Pero asegúrate de que los profesores y educadores estén al tanto del plan de tratamiento de tu hijo. Ejemplos de planes de atención se pueden encontrar en los archivos de la sección de AndroidAPS usuarios <https://www.facebook.com/groups/AndroidAPSUsers/files/>`_ en Facebook.
