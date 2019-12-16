Freestyle libre 2
**************************************************

El sistema Freestyle Libre 2 puede reportar automáticamente niveles peligrosos de glucosa en sangre. El Sensor Libre2 envía el nivel de azúcar en sangre actual a un receptor (lector o smartphone) cada minuto. El receptor activa una alarma si es necesario. Con una aplicación LibreLink auto-modificada, puede recibir continuamente su nivel de azúcar en la sangre en su smartphone. Como los envían directamente a través de Bluetooth a tu teléfono, no necesitarás comprar un adaptador Bluetooth como MiaoMiao o Blucon nunca más. 

Paso 1: Construye tu propia Librelink-App parcheada
==================================================

Por razones legales, el llamado parche tiene que ser hecho por usted mismo. Utilizar motores de búsqueda para encontrar los enlaces correspondientes.

La aplicación patchada tiene que ser instalada en lugar de la aplicación original. El siguiente sensor que se inicia con ella transmitirá sus valores al smartphone.

Importante: Primero instale y desinstale la aplicación original en un smartphone con capacidad NFC. NFC tiene que estar habilitado. Esto no suma consumo a la batería. A continuación, instale la aplicación parcheada. Se puede identificar mediante la notificación de autorización en primer plano. 

.. image:: ../images/fsl2pic1.jpg
  :alt: LibreLink Servicio en segundo plano

Esto mejora significativamente la estabilidad de la conexión en comparación con la aplicación original. Asegúrese de que NFC esté activado, habilite el permiso de memoria y de ubicación para la aplicación, habilite la hora automática y el huso horario y establezca al menos una alarma en la aplicación de parche. 

Ahora inicie el sensor de Libre2 con la aplicación patchada, simplemente escaneando el sensor. Siga las instrucciones. El sensor recuerda el dispositivo con el que se inició. Sólo este dispositivo puede recibir alarmas en el futuro.

Ajustes obligatorios para el inicio del sensor con éxito: 

* NFC habilitado / BT habilitado
* permiso de memoria habilitado 
* ubicación habilitada
* configuración automática de hora y zona horaria
* establecer al menos una alarma en la aplicación parchada

.. image:: ../images/fsl2pic2.jpg
  :alt: LibreLink permisos de memoria y ubicación
  
.. imagen:: ../images/fsl2pic3.jpg
  :alt: Android ajustes de ubicación
  
.. image:: ../images/fsl2pic4a.jpg
  :alt: hora y zona horaria automática
  
.. imagen:: ../images/fsl2pic4.jpg
  :alt: LibreLink configuración de alarma
  
La primera configuración de la conexión para el sensor es fundamental. La aplicación LibreLink intenta establecer una conexión inalámbrica al sensor cada 30 segundos. Si faltan uno o más valores obligatorios, hay que establecerlos. No tienes límite de tiempo para hacer eso. El sensor está constantemente intentando configurar la conexión. Incluso después de algunas horas. Sea paciente y trate de hacer diferentes ajustes antes incluso de pensar en cambiar el sensor.

Siempre que veas una marca de exclamación roja ("!") en la esquina superior izquierda de la pantalla de inicio LibreLinks, es porque no hay ninguna conexión. Sólo cuando la marca de exclamación se ha ido, la conexión se establece y los valores de azúcar en la sangre se envían al smartphone. Esto debería ocurrir después de un máximo de 5 minutos.

.. imagen:: ../images/fsl2pic5.jpg
  :alt: LibreLink no hay conexión
  
Si la marca de exclamación permanece o se obtiene un mensaje de error, esto puede tener varias razones:

- El servicio de ubicación de Android no está disponible - por favor actívalo en la configuración del sistema
- la hora y zona horaria automáticas no están configuradas - por favor cambie la configuración en consecuencia
- activar alarmas - al menos una de las tres alarmas debe activarse en LibreLink
- El Bluetooth está apagado, por favor enciendalo

Reiniciar el teléfono puede ayudar, es posible que tenga que hacerlo varias veces. Tan pronto como se establezca la conexión, desaparece la marca de exclamación roja y se toma el paso más importante. El sensor y el teléfono están ahora conectados, cada minuto se transmite un valor de azúcar en la sangre.

.. imagen:: ../images/fsl2pic6.jpg
  :alt: Conexión LibreLink establecida
  
Ahora los ajustes de smartphone se pueden cambiar nuevamente si es necesario, p.ej. si desea ahorrar energía. El servicio de ubicación se puede desactivar, el volumen puede establecerse en cero o las alarmas se pueden desactivar de nuevo. Los niveles de azúcar de sangre se transfieren de todos modos.

Al iniciar el siguiente sensor, no obstante, todos los valores deben volver a establecerse!

Puede utilizar un segundo smartphone con capacidad de NFC con la aplicación de LibreLink original para el escaneo a través de NFC. El lector original NO se puede utilizar más, no se puede conectar en paralelo! El segundo teléfono puede subir los valores de azúcar en la sangre a la Nube Abbott (LibreView). LibreView puede generar informes para el DiaDoc. Hay muchos padres que necesitan absolutamente esto. 

Aviso: La aplicación parcheada no tiene conexión a Internet.

Paso 2: Instalar y configurar la aplicación xDrip+
==================================================

Los valores de azúcar en sangre son recibidos en el smartphone por la aplicación xDrip+. 

* Si aún no se ha configurado, descargue la aplicación xdrip e instale uno de los más recientes de `aqui <https://github.com/NightscoutFoundation/xDrip/releases>`_.
* En xDrip+ seleccione "Libre2 (aplicación parchada)" como origen de datos
* Si es necesario, ingrese "BgReading:d,xdrip libre_receiver:v" en Ajustes menos comunes->Ajustes adicionales de conexión->Etiquetas extras para conexión. Esto registrará mensajes de error adicionales ante problemas.
* En xdrip vaya a Configuración > Interapp Compatibilidad > Datos de Difusión a nivel Local y seleccione ON.
* En xdrip vaya a Configuración > Interapp Compatibilidad > Aceptar Tratamientos y seleccione OFF.
* para permitir que AAPS reciba niveles de azúcar en sangre (versión 2.5.x y posterior) de xdrip por favor establezca `Settings > Interapp Settings > Identify Receiver "info.nightscout.androidaps" <https://androidaps.readthedocs.io/en/latest/EN/Configuration/xdrip.html#identify-receiver>`_
* Si usted quiere ser capaz de utilizar AndroidAPS para calibrar, a continuación, en xdrip vaya a Configuración > Interapp Compatibilidad > Aceptar Calibraciones y seleccione ON.  Puede que también desee revisar las opciones en Ajustes > Ajustes Menos Comunes > Ajustes Avanzados de Calibración.

.. image:: ../images/fsl2pic7.jpg
  :alt: registro de xDrip+ LibreLink
  
.. image:: ../images/fsl2pic7a.jpg
  :alt: xDrip+ registro
  #
Paso 3: Iniciar el sensor
==================================================

En xDrip+ inicie el sensor con "Iniciar Sensor" y "hoy no". 

De hecho, esto no iniciará ningún sensor de Libre2 o interactuará con ellos en ningún caso. Esto es simplemente para indicar xDrip+ que un nuevo sensor está dando niveles de azúcar en la sangre. Si está disponible, introduzca dos valores capilares para la calibración inicial. Ahora los valores de glucosa en sangre deben ser mostrados en xDrip+ cada 5 minutos. Se omiten los valores, por ejemplo. porque estabas demasiado lejos de tu teléfono, no se cargarán los valores.

Paso 4: Configurar AndroidAPS
==================================================
* En AndroidAPS vaya a Config Builder > Fuente de BG y compruebe 'xDrip+' 
* Si AAPS no recibe los valores de BG cuando el teléfono está en el modo de avión, utilice `Identificar receptor', como se describe en la página 'xDrip+ ajustes <../Configuration/xdrip.html#identifiziere-empfanger>`_.

Hasta ahora, usando Libre 2 como fuente BG usted no puede activar 'Habilitar SMB siempre' y 'Habilitar SMB después de los carbohidratos' dentro del algoritmo SMB. Los valores de BG de Libre 2 no son lo suficientemente estables para usarlo de forma segura. Consulte ' Suavizar los datos de glucosa en sangre <../Usage/Smoothing-Blood-Glucose-Data-in-xDrip.html>`_ para más detalles.

Consejos y solución de problemas
==================================================

La conectividad es extraordinariamente buena. Con la excepción de los teléfonos móviles Huawei, todos los teléfonos inteligentes actuales parecen funcionar bien. La reconexión en caso de pérdida de conexión es fenomenal. La conexión se puede romper si el teléfono móvil está en el bolsillo opuesto al sensor o si está al aire libre. Cuando estoy en jardinería, coloco mi teléfono en el lado del sensor de mi cuerpo. En las habitaciones, donde el Bluettooth se propaga por las refecciones, no se deben producir problemas. Si tiene problemas de conectividad, por favor pruebe otro teléfono.

Técnicamente, el valor de azúcar en sangre actual se transmite a xDrip+ cada minuto. Un filtro promedio ponderado calcula un valor suavizado en los últimos 25 minutos. Esto es obligatorio. Las curvas de aspecto liso y el lazo que los resultados son excelentes. Los valores en bruto en los que las alarmas están basados varían un poco más, pero se corresponden a los valores que también muestra el lector. Además, los valores en bruto se pueden visualizar en el gráfico xDrip+ para poder reaccionar en el tiempo a cambios rápidos. Por favor, habilite en Ajustes menos comunes > Ajustes avanzados para Libre2 > "mostrar valores brutos" y "mostrar información de sensor". A continuación, los valores en bruto se visualizan adicionalmente como pequeños puntos blancos y hay disponibles información del sensor adicional en el menú Sistema.

.. imagen:: ../images/fsl2pic8.jpg
  :alt: xDrip+ configuración avanzada Libre 2
  
.. imagen:: ../images/fsl2pic9.jpg
  :alt: xDrip+ pantalla de inicio con datos en bruto
  
El tiempo de trabajo del sensor se fija en 14 días. Las 12 horas adicionales de Libre1 ya no existen. xDrip+ muestra información adicional de los sensores después de habilitar Ajustes Avanzados para Libre2 > "mostrar Información de Sensores" en el menú del sistema, como el tiempo de arranque. El tiempo restante del sensor también se puede ver en la aplicación Parcheada LibreLink. Tanto en la pantalla principal como en el tiempo restante de la pantalla como en la hora de inicio del sensor en el menú de tres puntos->Ayuda->Registro de eventos en "Nuevo sensor encontrado".

.. image:: ../images/fsl2pic10.jpg
  :alt: Libre 2 hora de inicio
  
En conjunto, es uno de los sistemas de MCG más pequeños del mercado. Pequeño, sin transmisor adicional y en su mayoría los valores son muy precisos sin fluctuaciones. Después de aproximadamente 12 horas de funcionamiento en fase con desviaciones de hasta 30 mg/dL, las desviaciones son típicamente menores que 10 mg/dl. Los mejores resultados se obtiene en el ante brazo posición trasera, otros puntos de inserción vaya con precaución! No hay necesidad de establecer un nuevo sensor un día antes para que se ajuste. Eso alteraría el mecanismo de nivelación interna.

Parece que hay malos sensores de vez en cuando, que están muy lejos de los valores de la sangre. Se queda así. Estos deben ser sustituidos inmediatamente.

Si el sensor se mueve un poco en la piel o se levanta de alguna manera esto puede causar malos resultados. El filamento que se encuentra en el tejido es un poco tirado fuera del tejido y medirá diferentes resultados entonces. Lo mas probable es que veas los saltos de valores en xDrip+. O que la diferencia con los valores de glucosa en sangre cambian. Por favor, reemplace el sensor de inmediato! Los resultados son inexactos.

Un intercambio de sensores tiene lugar al vuelo: ponga el nuevo sensor poco antes de su activación. Tan pronto como xDrip+ no recibe más datos del viejo sensor, inicie el nuevo sensor con la aplicación parcheada. Después de una hora, los valores nuevos deben aparecer automáticamente en xDrip+. 

Si no es así, compruebe la configuración del teléfono y continúe con el primer inicio. Usted no tiene límite de tiempo. Trate de encontrar los ajustes correctos. No es necesario sustituir inmediatamente el sensor antes de intentar combinaciones diferentes. Los sensores son robustos e intentan establecer de forma permanente una conexión. Por favor, toma tu tiempo. En la mayoría de los casos cambió accidentalmente una configuración que ahora causa problemas. 

Una vez que tenga éxito, por favor seleccione "Parada de Sensor" y "Borrar calibración solamente" en xDrip. Esto le indica a xDrip+ que un nuevo sensor está enviando los niveles de azúcar en la sangre y las calibraciones antiguas ya no son válidas y por lo tanto tienen que ser eliminadas. No se realiza ninguna interacción real con el sensor de Libre2 aquí! No es necesario que inicie el sensor en xDrip.

.. image:: ../images/fsl2pic11.jpg
  :alt: xDrip+ falta datos al cambiar el sensor de Libre 2
  
Puede calibrar la Libre2 con un desplazamiento de más/menos 20 mg/dL (interceptar), pero sin pendiente. Para estar en el lado seguro, calibre cada 24 - 48 horas. Los valores son precisos hasta el final del sensor y no varían como los del Libre1. Sin embargo, si el sensor está completamente apagado, esto no va a cambiar. A continuación, el sensor debe ser sustituido inmediatamente.

Los sensores Libre2 contienen comprobaciones de plausibilidad para detectar valores de sensor incorrectos. Tan pronto como el sensor se mueva en el brazo o se levante ligeramente, los valores pueden empezar a fluctuar. A continuación, el sensor Libre2 se cerrará por razones de seguridad. Desafortunadamente, cuando se escanea con la aplicación, se realizan comprobaciones adicionales. La aplicación puede desactivar el sensor a pesar de que el sensor está bien. Actualmente, la prueba interna es demasiado estricta. He dejado de escanear por completo y no he tenido un fracaso desde entonces.

En otros `husos horarios <../Usage/Timezone-traveling.html>` _ hay dos estrategias para el bucle: o bien 

1. dejar el tiempo del smartphone sin cambios y cambiar el perfil basal (smartphone en modalidad de vuelo) o 
2. borrar el historial de la bomba y cambiar la hora del smartphone a la hora local. 

Método 1. es genial siempre y cuando usted no tiene que establecer un nuevo Libre2 sensor en el sitio. En caso de duda, seleccione el método 2., especialmente si el viaje toma más tiempo. Si establece un nuevo sensor, se debe establecer el huso horario automático, por lo tanto, el método 1. sería perturbado. Por favor, compruebe antes, si está en otro lugar, porque puede caer en problemas rapidamente.

Además de la aplicación parcheaa, el nuevo transmisor Droplet o (pronto disponible) el nuevo algoritmo OOP de xDrip+ se puede utilizar para recibir valores de azúcar en sangre. El MM2 y el blucon NO funcionan hasta ahora.
