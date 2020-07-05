Seguimiento remoto
**************************************************

.. imagen:: ../images/KidsMonitoring.png
  Tema: Supervisión de los niños
  
AndroidAPS ofrece varias opciones para el monitorización remota de los parámetros de niños y también permite enviar comandos remotos. Por supuesto, también puedes usar la monitorización remota para seguir los datos de tu pareja o amigo.

Funciones
==================================================
La bomba de insulina de un niño es controlado por el teléfono móvil del niño usando AndroidAPS.
* Los padres pueden seguir de forma remota todos los datos relevantes, tales como los niveles de glucosa, carbohidratos a bordo, insulina a bordo, etc. utilizando la aplicación ** NSClient * * en su teléfono. Settings must be the same in AndroidAPS and NSClient.
* Parents can be alarmed by using **xDrip+ app in follower mode** on their phone.
* Control remoto de AndroidAPS mediante el uso de comandos SMS <../Children/SMS-Commands.html>`_.
* Cambio de perfil remoto y objetivos temporales a través de la aplicación NSClient.

Herramientas y aplicaciones para monitorización remota
--------------------------------------------------
* `Nightscout <http://www.nightscout.info/>`_ en el navegador web (principalmente para visualización de datos)
* Aplicación NSClient
*	Dexcom seguidor si está usando la aplicación original Dexcom (sólo valores BG)
*	`xDrip+ <../Configuration/xdrip.html>`_ in follower mode (mainly BG values and **alarms**)
* `Spike <https://spike-app.com/>` _ en iPhone (principalmente valores de BG y ** alarmas**)

Puntos a considerar
==================================================
* Establecer los `factores de tratamiento correctos <../Getting-Started/FAQ.html#how-to-begin>`_ (tasa basal, DIA, ISF...) es difícil para los niños, especialmente cuando las hormonas de crecimiento están involucradas. 
* Settings must be the same in AndroidAPS and NSClient.
* Consider time gap between master and follower due to time for up- and download as well as the fact that AAPS master phone will only upload after loop run.
* Por lo tanto, tómese su tiempo para establecer los parámetros correctamente y probarlos en la vida real con su niño junto a usted, antes de comenzar el control y tratamiento remoto. Las vacaciones escolares pueden ser un buen momento para ello.
* Cuál es su plan de emergencia cuando el control remoto no funciona (por ejemplo, problemas de conectividad). problemas de red)?
* La monitorización y el tratamiento a distancia pueden ser realmente útiles en la guardería y colegio. Pero asegúrate de que los profesores y educadores estén al tanto del plan de tratamiento de tu hijo. Ejemplos de planes de atención se pueden encontrar en los archivos de la sección de AndroidAPS usuarios <https://www.facebook.com/groups/AndroidAPSUsers/files/>`_ en Facebook.
