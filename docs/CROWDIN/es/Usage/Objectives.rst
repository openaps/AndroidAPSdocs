Objetivos
**************************************************

AndroidAPS tiene una serie de Objetivos que deben completarse para guiarlo a través de las características y configuraciones de lazo cerrado de manera segura.  Estos, aseguran que ha configurado correctamente todo lo detallado en las secciones anteriores, y que comprende lo que está haciendo su sistema y por qué, de modo que pueda confiar en él.

Si estás **actualizando teléfonos** entonces puedes `exportar tus ajustes <../Usage/ExportImportSettings.html>`_ para mantener tu progreso a través de los objetivos. No solo se guardará su progreso a través de los objetivos, sino también su configuración de seguridad, como el máximo bolo, etc.  Si no exporta e importa su configuración, deberá volver a comenzar los objetivos desde el principio.  Es una buena idea hacer `copia de seguridad de tus ajustes <../Usage/ExportImportSettings.html>`_ frecuentemente sólo por si acaso.
 
Objetivo 1: Establecimiento de la visualización y la supervisión, análisis de las basales y las tasas
====================================================================================================
* Seleccione la fuente correcta de glucosa en sangre para su configuración.  Ver `BG Source <../Configuration/BG-Source.html>`_ para más información.
* Select the right Pump in ConfigBuilder (select Virtual Pump if you are using a pump model with no AndroidAPS driver for looping) to ensure your pump status can communicate with AndroidAPS.  
* Si utiliza la bomba DanaR asegúrese de haber seguido las instrucciones `DanaR Insulin Bump <../Configuration/DanaR-Insulin-Pump.html>`_ para asegurar el enlace entre la bomba y AndroidAPS.
* Siga las instrucciones en la página `Nightscout <../Installing-AndroidAPS/Nightscout.html>`_ para asegurar que Nightscout pueda recibir y mostrar estos datos.
* Tenga en cuenta que la URL en NSClient debe ser **SIN /api/v1/** al final - vea `NSClient settings in Preferences <../Configuration/Preferences.html#ns-client>`_.

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

   .. imagen:: ../images/Objective3_V2_5.png
     :alt: Captura de pantalla de objetivo 3

* Se proporcionarán enlaces para guiarle en caso de que no esté seguro de las respuestas correctas todavía.
* Sólo si se ha cerrado un lazo con otro sistema (es decir, OpenAPS, iOS Loop) antes y puede probar esto (es decir,. al menos 3 meses de datos del lazo en Nightscout), puede enviar un correo electrónico a ` objectives@androidaps.org <mailto:objectives@androidaps.org>`_ con su dirección de NS y su código de petición para eludir el resto de los objetivos.

Objetivo 4: Iniciar en un lazo abierto
==================================================
* Seleccione Abrir lazo desde Preferencias, o pulsando y manteniendo pulsado el botón de Lazo en la parte superior izquierda de la pantalla de inicio.
* Trabaje a través de `Preferencias <../Configuration/Preferences.html>`_ para configurarlo para usted.
* Promulgar manualmente al menos 20 de las sugerencias de la tasa basal temporal durante un período de 7 días; póngalos en su bomba y confirme en AndroidAPS que los ha aceptado.  Asegúrese de que estos datos se muestran en AndroidAPS y Nightscout.
* Activar `objetivos temporales <../Usage/temptarget.html>`_ si es necesario. Use hypo temp targets to prevent that the system will correct too strong because of a raising blood glucose after a hypo. 

Reducir el número de notificaciones
--------------------------------------------------
* Para reducir el número de decisiones que se tomarán mientras se encuentra en Lazo abierto se establece un rango de objetivo de alcance amplio como 90-150 mg/dl o 5,0-8,5 mmol/l. * Es posible que incluso desee ampliar el límite superior (o inhabilitar el Lazo Abierto) en la noche. 
* En Preferencias, puede establecer un porcentaje mínimo para la sugerencia de cambio de tasa basal.

   .. imagen:: ../images/OpenLoop_MinimalRequestChange2.png
     :alt: Lazo Abierto pedido mínimo para cambio
     
* Además, no hace falta que actúe cada 5 minutos en todas las sugerencias...

Objetivo 5: Comprensión de su lazo abierto, incluidas sus recomendaciones basales temporales
====================================================================================================
* Start to understand the thinking behind the temp basal recommendations by looking at the `determine basal logic <https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/Understand-determine-basal.html>`_ and both the `forecast line in AndroidAPS homescreen <../Getting-Started/Screenshots.html#section-e>`_/Nightscout and the summary of outputs from the calculations in your OpenAPS tab.
 
Usted querrá establecer su objetivo más alto de lo normal hasta que esté seguro en los cálculos y los ajustes.  El sistema permite

* un objetivo bajo es un mínimo de 4 mmol (72 mg/dl) o máximo de 10 mmol (180 mg/dl) 
* un objetivo alto puede ser un mínimo de 5 mmol (90 mg/dl) y un máximo de 15 mmol (225 mg/dl)
* a temporary target as a single value can be anywhere in the range of 4 mmol to 15 mmol (72 mg/dl to 225 mg/dl)

The target is the value that calculations are based on, and not the same as where you aim to keep your blood glucose values within.  If your target is very wide (say, 3 or more mmol [50 mg/dl or more] wide), you will often find little AAPS action. This is because blood glucose is eventually predicted to be somewhere in that wide range and therefore not many fluctuating temporary basal rates are suggested. 

Es posible que desee experimentar con el ajuste de los destinos para que sea un rango más estrecho (digamos, 1 o menos mmol [20 mg/dl o menos] de ancho), y observe cómo cambia el comportamiento del sistema como resultado.  

Puede ver un rango más amplio (líneas verdes) en el gráfico para los valores que tiene como objetivo mantener su nivel de glucosa en sangre entrando valores diferentes en `Preferencias <../Configuration/Preferences.html>`_ > Rango para la visualización.
 
.. imagen:: ../images/sign_stop.png
  :alt: Señal de parada

Parar aquí si usted está lazo abierto con una bomba virtual - no haga clic en Comprobar al final de este objetivo.
------------------------------------------------------------------------------------------------------------------------------------------------------

.. imagen:: ../images/blank.png
  :alt: en blanco

Objetivo 6: Empezando a cerrar el lazo con Baja Glucosa Suspender
====================================================================================================
.. imagen:: ../images/sign_warning.png
  :alt: Señal de advertencia
  
El lazo cerrado no corregirá los valores de bg alto en el objetivo 6, ya que se limita a la suspensión por baja glucosa. ¡Los valores altos de BG tienen que ser corregidos manualmente por usted!
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

* Seleccionar lazo cerrado desde `Preferencias <../Configuration/Preferences.html>`_ o pulsando y manteniendo pulsado el botón Abrir Lazo en la parte superior izquierda de la pantalla de inicio.
* Establezca el rango de destino un poco más alto de lo que normalmente pretende, sólo para estar seguros.
* Watch  how temporary basals are active by viewing the blue basal text on the homescreen or the blue basal render on the homescreen graph.
* Asegúrese de que sus ajustes han soportado AndroidAPS para evitar tener que tratar una glucosa baja durante un período de 5 días.  If you are still having frequent or severe low glucose episodes then consider refining your DIA, basal, ISF and carb ratios.
* No tienes que cambiar tu configuración. Durante el objetivo 6, el valor de maxIOB se establece internamente en cero automáticamente. Esta alteración temporal se invertirá cuando se mueva al objetivo 7.

*The system will override your maxIOB settings to zero, which means if blood glucose is dropping it can reduce basal for you, but if blood glucose is rising then it will only increase basal if the IOB is negative (from a previous Low Glucose Suspend), otherwise basal rates will remain the same as your selected profile.  Puede experimentar temporalmente picos después de los hipos tratados sin la posibilidad de aumentar basal en el rebote.*

Objective 7: Tuning the closed loop, raising max IOB above 0 and gradually lowering BG targets
====================================================================================================
* Raise your 'Maximum total IOB OpenAPS can’t go over' (in OpenAPS called 'max-iob') above 0 over a period of 1 day, the default recommendation is "average mealbolus + 3x max daily basal"(for SMB algorithm) or "3x max daily basal" (for older AMA algorithm) but you should slowly work up to this until you know your settings work for you (max daily basal = the maximum hourly value in any time segment of the day).

  Esta recomendación debe considerarse como un punto de partida. Si se establece en el 3x y se están viendo movimientos que le empuja a cambios fuertes y rápidos, a continuación, baje ese número. Si eres muy resistente, levanta un poco a la vez.

   .. imagen:: ../images/MaxDailyBasal2.png
     :alt: max basal diaria

* Una vez que este seguro de cuánta IOB se adapta a su lazo de patrones, a continuación, reduzca sus objetivos al nivel deseado.


Objetivo 8: ajustar las basales y proporciones si es necesario, y luego habilitar el autosensado
====================================================================================================
* You can use `autotune <https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autotune.html>`_ as a one off to check your basals remain accurate, or do a traditional basal test.
* Habilite `autosens <../Usage/Open-APS-features.html>`_ durante un periodo de 7 días y vea la línea blanca en el gráfico de pantalla muestra cómo su sensibilidad a la insulina puede estar aumentando o cayendo como resultado del ejercicio o de las hormonas, etc, y manteniendo un ojo en la pestaña de informe OpenAPS cómo AndroidAPS está ajustando las basales y/o los objetivos en consecuencia.

*No olvide registrar su lazo en `este formulario <http://bit.ly/nowlooping>`_ registrando AndroidAPS como su tipo de software de bucle DIY, si aún no lo has hecho.*


Objetivo 9: Habilitación de funciones adicionales de oref0 para el uso horario, como por ejemplo la ayuda para comidas avanzadas (AMA)
====================================================================================================
* Ahora usted debe sentirse seguro con cómo AndroidAPS funciona y cuáles son los ajustes que reflejan su diabetes mejor
* Then over a period of 28 days you can try additional features that automate even more of the work for you such as the `advanced meal assist <../Usage/Open-APS-features.html#advanced-meal-assist-ama>`_


Objective 10: Enabling additional oref1 features for daytime use, such as super micro bolus (SMB)
====================================================================================================
* You must read the `SMB chapter in this wiki <../Usage/Open-APS-features.html#super-micro-bolus-smb>`_ and `chapter oref1 in openAPSdocs <https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/oref1.html>`_ to understand how SMB works, especially what's the idea behind zero-temping.
* A continuación, usted debe `subir maxIOB <../Usage/Open-APS-features.html#maximum-total-iob-openaps-cant-go-over-openaps-max-iob>`_ para tener los SMBs trabajando bien. maxIOB ahora incluye todo IOB, no sólo la basal añadida. That is, if given a bolus of 8 U for a meal and maxIOB is 7 U, no SMBs will be delivered until IOB drops below 7 U. A good start is maxIOB = average mealbolus + 3x max daily basal (max daily basal = the maximum hourly value in any time segment of the day - see `objective 7 <../Usage/Objectives.html#objective-7-tuning-the-closed-loop-raising-max-iob-above-0-and-gradually-lowering-bg-targets>`_ for an illustration)
* El valor predeterminado de min_5m_carbimpact en los valores de absorción ha cambiado de 3 a 8 al ir de AMA a SMB. Si está actualizando desde AMA a SMB, tiene que cambiarlo manualmente
