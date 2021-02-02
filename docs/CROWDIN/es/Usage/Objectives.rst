Objetivos
**************************************************

AndroidAPS tiene una serie de Objetivos que deben completarse para guiarlo a través de las características y configuraciones de lazo cerrado de manera segura.  Estos, aseguran que ha configurado correctamente todo lo detallado en las secciones anteriores, y que comprende lo que está haciendo su sistema y por qué, de modo que pueda confiar en él.

Si estás **actualizando teléfonos** entonces puedes `exportar tus ajustes <../Usage/ExportImportSettings.html>`_ para mantener tu progreso a través de los objetivos. No solo se guardará su progreso a través de los objetivos, sino también su configuración de seguridad, como el máximo bolo, etc.  Si no exporta e importa su configuración, deberá volver a comenzar los objetivos desde el principio.  Es una buena idea hacer `copia de seguridad de tus ajustes <../Usage/ExportImportSettings.html>`_ frecuentemente sólo por si acaso.

If you want to go back in objectives see `explanation below <../Usage/Objectives.html#go-back-in-objectives>`_.
 
Objetivo 1: Establecimiento de la visualización y la supervisión, análisis de las basales y las tasas
====================================================================================================
* Seleccione la fuente correcta de glucosa en sangre para su configuración.  Ver `BG Source <../Configuration/BG-Source.html>`_ para más información.
* Seleccione la bomba correcta en ConfigBuilder (seleccione Virtual Pump si utiliza un modelo de bomba sin el controlador AndroidAPS para bucles) para asegurarse de que el estado de la bomba se puede comunicar con AndroidAPS.  
* Si utiliza la bomba DanaR asegúrese de haber seguido las instrucciones `DanaR Insulin Bump <../Configuration/DanaR-Insulin-Pump.html>`_ para asegurar el enlace entre la bomba y AndroidAPS.
* Siga las instrucciones en la página `Nightscout <../Installing-AndroidAPS/Nightscout.html>`_ para asegurar que Nightscout pueda recibir y mostrar estos datos.
* Note that URL in NSClient must be **WITHOUT /api/v1/** at the end - see `NSClient settings in Preferences <../Configuration/Preferences.html#nsclient>`__.

*Es posible que tengas que esperar a que llegue la próxima lectura de glucosa en sangre para que AndroidAPS la reconozca.*

Objetivo 2: Aprender a controlar AndroidAPS
==================================================
* Llevar a cabo varias acciones en AndroidAPS como se describe en este objetivo.
* Haga clic en el texto naranja "Aún no completado" para acceder a los tareas.
* Se proporcionarán enlaces para guiarle en caso de que aún no esté familiarizado con una acción específica.

   .. imagen:: ../images/Objective2_V2_5.png
     :alt: Captura de pantalla de objetivo 2

Objetivo 3: Demuestra tus conocimientos
==================================================
* Pasar un examen de múltiples opciones probando su conocimiento de AndroidAPS.
* Haga clic en el texto naranja "No completado todavía" para acceder a la página con las opciones de preguntas y respuestas.

   .. image:: ../images/Objective3_V2_5.png
     :alt: Captura de pantalla de objetivo 3

* Se proporcionarán enlaces para guiarle en caso de que no esté seguro de las respuestas correctas todavía.
* The questions for objective 3 have been completely rewritten by native speakers as of AAPS 2.8. The new ones cover the same basic topics plus a few new ones.
* These new questions will lead to some not answered questions even though you have successfully completed objective 3 in previous versions.
* Unanswered questions will affect you only if you start a new objective. In other words: If you have already completed all objectives you can wait and answer the new questions later without loosing AAPS functions.

Objetivo 4: Iniciar en un lazo abierto
==================================================
* Seleccione Abrir lazo desde Preferencias, o pulsando y manteniendo pulsado el botón de Lazo en la parte superior izquierda de la pantalla de inicio.
* Work through the `Preferences <../Configuration/Preferences.html>`__ to set up for you.
* Promulgar manualmente al menos 20 de las sugerencias de la tasa basal temporal durante un período de 7 días; póngalos en su bomba y confirme en AndroidAPS que los ha aceptado.  Asegúrese de que estos datos se muestran en AndroidAPS y Nightscout.
* Activar `objetivos temporales <../Usage/temptarget.html>`_ si es necesario. Utilice los objetivos temporales de hipoglucemia para evitar que el sistema se corrija demasiado fuerte debido a un aumento de la glucosa en sangre tras una hipoglucemia. 

Reducir el número de notificaciones
--------------------------------------------------
* Para reducir el número de decisiones que se tomarán mientras se encuentra en Lazo abierto se establece un rango de objetivo de alcance amplio como 90-150 mg/dl o 5,0-8,5 mmol/l.
* Es posible que incluso desee ampliar el límite superior (o inhabilitar el Lazo Abierto) en la noche. 
* En Preferencias, puede establecer un porcentaje mínimo para la sugerencia de cambio de tasa basal.

   .. image:: ../images/OpenLoop_MinimalRequestChange2.png
     :alt: Open Loop minimal request change
     
* Además, no hace falta que actúe cada 5 minutos en todas las sugerencias...

Objetivo 5: Comprensión de su lazo abierto, incluidas sus recomendaciones basales temporales
====================================================================================================
* Start to understand the thinking behind the temp basal recommendations by looking at the `determine basal logic <https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/Understand-determine-basal.html>`_ and both the `forecast line in AndroidAPS homescreen <../Getting-Started/Screenshots.html#prediction-lines>`_/Nightscout and the summary of outputs from the calculations in your OpenAPS tab.
 
Usted querrá establecer su objetivo más alto de lo normal hasta que esté seguro en los cálculos y los ajustes.  El sistema permite

* un objetivo bajo es un mínimo de 4 mmol (72 mg/dl) o máximo de 10 mmol (180 mg/dl) 
* un objetivo alto puede ser un mínimo de 5 mmol (90 mg/dl) y un máximo de 15 mmol (225 mg/dl)
* un objetivo temporal como un solo valor puede estar en cualquier lugar en el rango de 4 mmol a 15 mmol (72 mg/dl a 225 mg/dl)

El objetivo es el valor en el que se basan los cálculos, y no es el mismo que al que apuntamos para mantener la glucosa dentro del rango.  Si su objetivo es muy amplio (digamos, 3 o más mmol [50 mg/dl o más] de ancho), a menudo encontrarás poca acción de AAPS. Esto se debe a que eventualmente se prevé que la glucosa en sangre esté en algún lugar de esa amplia gama y, por lo tanto, no se sugieran muchas variaciones de basales temporales. 

You may want to experiment with adjusting your targets to be a closer together range (say, 1 or less mmol [20 mg/dl or less] wide) and observe how the behavior of your system changes as a result.  

You can view a wider range (green lines) on the graph for the values you aim to keep your blood glucose within by entering different values in `Preferences <../Configuration/Preferences.html>`__ > Range for Visualisation.
 
.. image:: ../images/sign_stop.png
  :alt: Señal de parada

Parar aquí si usted está lazo abierto con una bomba virtual - no haga clic en Comprobar al final de este objetivo.
------------------------------------------------------------------------------------------------------------------------------------------------------

.. image:: ../images/blank.png
  :alt: en blanco

Objetivo 6: Empezando a cerrar el lazo con Baja Glucosa Suspender
====================================================================================================
.. image:: ../images/sign_warning.png
  :alt: Señal de advertencia
  
El lazo cerrado no corregirá los valores de bg alto en el objetivo 6, ya que se limita a la suspensión por baja glucosa. ¡Los valores altos de BG tienen que ser corregidos manualmente por usted!
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
* Select Closed Loop either from `Preferences <../Configuration/Preferences.html>`__ or by pressing and holding the Open Loop button in the top left of the home screen.
* Establezca el rango de destino un poco más alto de lo que normalmente pretende, sólo para estar seguros.
* Vea cómo las basales temporales están activas al visualizar el texto basal azul en la pantalla de inicio o en la representación basal azul en el gráfico de pantalla.
* Asegúrese de que sus ajustes han soportado AndroidAPS para evitar tener que tratar una glucosa baja durante un período de 5 días.  Si sigue teniendo episodios frecuentes o graves de glucosa baja, considere la posibilidad de ajustar las proporciones de DIA, basal, ISF y tasa de carbohidratos.
* No tienes que cambiar tu configuración. Durante el objetivo 6, el valor de maxIOB se establece internamente en cero automáticamente. Esta alteración temporal se invertirá cuando se mueva al objetivo 7.
* The system will override your maxIOB settings to zero, which means if blood glucose is dropping it can reduce basal for you, but if blood glucose is rising then it will only increase basal if the basal IOB is negative (from a previous Low Glucose Suspend), otherwise basal rates will remain the same as your selected profile.  

   .. image:: ../images/Objective6_negIOB.png
     :alt: Example negative IOB

* If your basal IOB is negative (see screenshot above) a TBR > 100% can be issued also in objective 6.
* Puede experimentar temporalmente picos después de las hipos tratadas sin la posibilidad de aumentar basal en el rebote.

Objetivo 7: Ajustar el lazo cerrado, elevando el IOB máximo por encima de 0 y reduciendo gradualmente los objetivos de BG
====================================================================================================
* Aumente su 'Máximo Total IOB OpenAPS no puede pasar' (en OpenAPS llamado 'max-iob') por encima de 0 durante un período de 1 día, la recomendación por defecto es "promedio bolos de comidas + 3x max basal diaria" (para el algoritmo SMB) o "3x max basal diaria" (para el algoritmo AMA más antiguo), pero debería trabajar lentamente hasta que sepa que los ajustes funcionan para usted (max basal diaria = el valor máximo por hora en cualquier segmento de tiempo del día).

  Esta recomendación debe considerarse como un punto de partida. Si se establece en el 3x y se están viendo movimientos que le empuja a cambios fuertes y rápidos, a continuación, baje ese número. Si eres muy resistente, levanta un poco a la vez.

   .. image:: ../images/MaxDailyBasal2.png
     :alt: max basal diaria

* Una vez que este seguro de cuánta IOB se adapta a su lazo de patrones, a continuación, reduzca sus objetivos al nivel deseado.


Objetivo 8: ajustar las basales y proporciones si es necesario, y luego habilitar el autosensado
====================================================================================================
* You can use `autotune <https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autotune.html>`_ as a one off to check your basals remain accurate or do a traditional basal test.
* Enable `autosens <../Usage/Open-APS-features.html>`_ over a period of 7 days and watch the white line on the homescreen graph show how your sensitivity to insulin may be rising or falling as a result of exercise or hormones etc. and keep an eye in the OpenAPS report tab how AndroidAPS is adjusting the basals and/or targets accordingly.

*No olvide registrar su lazo en `este formulario <http://bit.ly/nowlooping>`_ registrando AndroidAPS como su tipo de software de bucle DIY, si aún no lo has hecho.*


Objective 9: Try additional features for daytime use and gain confidence in your closed loop system
====================================================================================================
* Before AAPS version 2.7 meal assist (MA) was the basic algorithm for AAPS and completing objective 8 was necessary to activate `advanced meal assist (AMA) <../Usage/Open-APS-features.html#advanced-meal-assist-ama>`_.
* As `advanced meal assist (AMA) <../Usage/Open-APS-features.html#advanced-meal-assist-ama>`_ is the standard algorithm from AAPS version 2.7 onwards use the following 28 days to try features you haven't used yet and get more confident with you closed loop system.


Objetivo 10: Habilitación adicional oref1 características para uso durante el día, tales como super micro bolo (SMB)
====================================================================================================
* Debe leer el capítulo `SMB en este wiki <../Usage/Open-APS-features.html#super-micro-bolus-smb>`_ y `capítulo oref1 in openAPSdocs <https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/oref1.html>`_ para entender cómo funciona SMB, especialmente cuál es la idea detrás de cero-temporal.
* A continuación, usted debe `subir maxIOB <../Usage/Open-APS-features.html#maximum-total-iob-openaps-cant-go-over-openaps-max-iob>`_ para tener los SMBs trabajando bien. maxIOB ahora incluye todo IOB, no sólo la basal añadida. That is, if given a bolus of 8 U for a meal and maxIOB is 7 U, no SMBs will be delivered until IOB drops below 7 U. A good start is maxIOB = average mealbolus + 3x max daily basal (max daily basal = the maximum hourly value in any time segment of the day - see `objective 7 <../Usage/Objectives.html#objective-7-tuning-the-closed-loop-raising-max-iob-above-0-and-gradually-lowering-bg-targets>`_ for an illustration)
* El valor predeterminado de min_5m_carbimpact en los valores de absorción ha cambiado de 3 a 8 al ir de AMA a SMB. If you are upgrading from AMA to SMB, you have to change it manually.


Objective 11: Automation
====================================================================================================
* You have to start objective 11 to be able to use `Automation <../Usage/Automation.html>`_.
* Make sure you have completed all objectives including exam `<../Usage/Objectives.html#objective-3-prove-your-knowledge>`_.
* Completing previous objectives will not effect other objectives you have already finished. You will keep all finished objectives!


Go back in objectives
====================================================================================================
If you want to go back in objectives for whatever reason you can do so by clicking at "clear finished".

.. image:: ../images/Objective_ClearFinished.png
  :alt: Go back in objectives
