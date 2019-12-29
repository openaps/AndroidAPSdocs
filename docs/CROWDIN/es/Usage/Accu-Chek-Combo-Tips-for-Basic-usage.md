# Consejos para uso básico de Combo AccuChek

## Cómo garantizar las operaciones sin problemas

* Siempre **lleva el smartphone con usted**, déjelo junto a su cama por la noche.
* Asegúrate siempre de que la batería de la bomba esté lo más cargada posible. Consulte la sección de la batería de las tips con respecto a la batería.
* Es mejor que **no toque la aplicación ruffy** mientras el sistema se está ejecutando. Si la aplicación se inicia de nuevo, la conexión a la bomba se puede interrumpir. Una vez que la bomba está conectada a ruffy, no hay necesidad de volver a conectarse. Incluso después de un reinicio del teléfono, la conexión se reestablece automáticamente. Si es posible, mueva la aplicación a una pantalla no utilizada o en una carpeta en el smartphone para que no la abra accidentalmente.
* Si involuntariamente abres la aplicación ruffy durante el lazo, es mejor reiniciar el smartphone inmediatamente.
* Siempre que sea posible, sólo opera la bomba a través de la aplicación AndroidAPS. Para facilitar esto, active el bloqueo de clave en la bomba bajo **PUMP SETTINGS/CLAVE LOCK/ON**. Únicamente cuando se cambia la batería o el cartucho, es necesario utilizar las teclas de la bomba. ![Tecla de bloqueo](https://github.com/T-o-b-i-a-s/ComboLooping/blob/master/resources/keylock.png?raw=true)

## Bomba no alcanzable. ¿Qué hacer?

### Activar alarma de bomba inalcanzable

* En AndroidAPS, vaya a **Settings/Local Alarms** y active **alarm when pump is unreachable** and set **pump not reachable limit [Min]** to **31** minutos. 
* Esto le dará tiempo suficiente para no activar la alarma al salir de la habitación mientras su teléfono está a la izquierda en el escritorio, pero le informa si la bomba no puede ser alcanzado por un tiempo que exceda de la duración de un temporal basal.

### Restaure la posibilidad de alcance de la bomba

* Cuando AndroidAPS informa **bomba inalcanzable** alarma, primero libera la cerradura y **presione cualquier tecla en la bomba** (por ejemplo, el botón "abajo"). Tan pronto como se haya apagado la pantalla de la bomba, pulse **UPDATE** en la pestaña **Combo** en AndroidAPS. Por lo general, la comunicación funciona de nuevo.
* Si eso no ayuda, reinicie el smartphone. Después del reinicio, se reactivarán AndroidAPS y ruffy y se establecerá una nueva conexión con la bomba.
* Las pruebas con diferentes teléfonos inteligentes han demostrado que algunos teléfonos inteligentes activan el error "bomba inalcanzable" con más frecuencia que otros. [AAPS Phones](https://docs.google.com/spreadsheets/d/1gZAsN6f0gv6tkgy9EBsYl0BQNhna0RDqA9QGycAqCQc/edit#gid=698881435) lista de los smartphones probados con éxito. 

### Causas raíz y consecuencias de los errores de comunicación frecuentes

* En los teléfonos con **baja memoria** (o **ajustes agresivos de ahorro de energía**), AndroidAPS a menudo se cierra. Puede saber por el hecho de que los botones Bolos y Calculadora en la pantalla de inicio no se muestran al abrir AAPS porque el sistema está inicializando. Esto puede desencadenar "alarmas de bomba inalcanzable" durante el arranque. En el campo **Last Connection** de la pestaña Combo, puede comprobar cuando AndroidAPS se comunicó por última vez con la bomba. 

![Bomba no alcanzable](https://raw.githubusercontent.com/T-o-b-i-a-s/ComboLooping/master/resources/Pump_Unreachable.png) ![No hay conexión con la bomba](https://raw.githubusercontent.com/T-o-b-i-a-s/ComboLooping/master/resources/No_connection_to_pump.png)

* Este error puede drenar la batería de la bomba más rápido porque el perfil basal se lee de la bomba cuando se reinicia la aplicación.
* También aumenta la probabilidad de provocar el error que hace que la bomba rechace todas las conexiones entrantes hasta que se pulsa un botón en la bomba. 

## La cancelación de la tasa basal temporal

* Ocasionalmente, AndroidAPS no puede cancelar automáticamente una alerta **TBR CANCELED**. Entonces tiene que pulsar **UPDATE** en la pestaña AndroidAPS **Combo** o la alarma en la bomba se confirmará.

## Consideraciones sobre la batería de la bomba

### Cambiar pila

* Después de una alarma de **batería baja,** la batería debe cambiarse tan pronto como sea posible para tener siempre suficiente energía para una comunicación Bluetooth fiable con el smartphone, incluso si el teléfono está a una distancia más amplia de la bomba.
* Incluso después de una alarma **batería baja**, la batería podría ser utilizado para una cantidad significativa de tiempo. Sin embargo, se recomienda tener siempre una batería fresca con usted después de un aviso de alarma de "batería baja".
* Para ello, pulse la tecla **Closed Loop** en la pantalla principal y seleccione **Suspend loop for 1h**. 
* Espere a que la bomba se comunique con el smartphone y que el logo de Bluetooth en la bomba se halla desvanecido.

![Bluetooth habilitado](https://github.com/T-o-b-i-a-s/ComboLooping/blob/master/resources/Compo.png?raw=true)

* Suelte la tecla de bloqueo en la bomba, coloque la bomba en el modo de parada, confirmar una posible cancelación de basal temporal, y cambiar la batería.
* A continuación, vuelva a colocar la bomba en el modo de ejecución, seleccione **Reanudar** con una presión-larga en **Suspendido** en la pantalla principal.
* AndroidAPS volverá a establecer una tasa basal temporal necesaria con la llegada del próximo valor de glucosa en la sangre. 

### Tipos de batería y la causa de la corta vida de las mismas

* Como la comunicación Bluetooth intensiva consume mucha energía, sólo usa **baterías de alta calidad** como Energizer Ultimate Lithium, el "power one" del paquete de servicio "grande" Accu-Chek, o si vas a tener una batería recargable, usa baterías Eneloop. 

![Energizer](https://github.com/T-o-b-i-a-s/ComboLooping/blob/master/resources/energizer-l91aa---image.jpg?raw=true) ![OnePower](https://github.com/T-o-b-i-a-s/ComboLooping/blob/master/resources/PowerOne.png?raw=true)

Los rangos para el tiempo de vida típico de los diferentes tipos de batería son los siguientes:

* **Energizer Ultimate Lithium**: de 4 a 7 semanas
* **Power One Alkaline** (Varta) del envase de servcie: 2 a 4 semanas
* **Eneloop rechargable** baterías (BK-3MCCE): de 1 a 3 semanas

Si la duración de la batería es claramente inferior a los rangos indicados más arriba, por favor compruebe las siguientes causas posibles:

* La última versión (marzo de 2018) de la [ruffy App](https://github.com/MilosKozak/ruffy) mejoró significativamente la duración de la batería de la bomba. Asegúrate de que estás en esa versión si tienes problemas con una vida corta de batería.
* Hay algunas variantes de la tapa de la batería de tornillos de la bomba Combo, que parcialmente cortocircuita las baterías y las drena rápidamente. Las tapas sin este problema pueden ser reconocidas por los contactos de metal dorado.
* Si el reloj de la bomba no "sobrevive" a un cambio de batería corto, es probable que el capacitor esté roto, lo que mantiene el reloj en funcionamiento durante un breve corte de energía. En este caso, sólo una sustitución de la bomba por parte de Roche ayudará, lo cual no es un problema durante el período de garantía. 
* El hardware y el software del teléfono inteligente (sistema operativo Android y pila de bluetooth) también impactan la duración de la batería de la bomba, a pesar de que los factores exactos aún no se conocen completamente. Si tiene la oportunidad, pruebe otro smartphone y compare los tiempos de vida de la batería.

## Cambios en el horario de verano

* Actualmente, el controlador de combo no soporta el ajuste automático de la hora de la bomba.
* Durante la noche de un cambio horario de horario de verano, se actualiza el tiempo del smartphone, pero el tiempo de la bomba permanece sin cambios. Esto da lugar a una alarma debido a la desviación de tiempo entre los sistemas a las 3 am.
* Si no desea ser despertado por la noche, **desactive el cambio automático de horario de verano en el teléfono móvil** por la noche antes del cambio de tiempo y ajuste las horas manualmente a la mañana siguiente.

## Bolos extendidos, bolo Multionda

El algoritmo OpenAPS no soporta un bolo extendido en paralelo o en bolo Multionda. Sin embargo, un tratamiento similar se puede lograr mediante la alternativa siguiente:

* Aporta los carbohidratos, pero no el bolo para ellos. El algoritmo de lazo reaccionará de forma más agresiva. Si es necesario, utilice **eCarbs** (carbohidratos ampliados).

* Si se siente tentado a utilizar el bolo extendido o de multionda directamente en la bomba, AndroidAPS le penalizará desactivando el lazo cerrado durante las próximas seis horas para asegurarse de que no se calcula ningún exceso de dosis de insulina.

![Lazo deshabilitado después del bolo Multionda](https://raw.githubusercontent.com/T-o-b-i-a-s/ComboLooping/master/resources/Multiwave_Bolus.png)

## Alarmas en la entrega en bolo

* Si AndroidAPS detecta que un bolo idéntico ha sido entregado con éxito en el mismo minuto, la entrega en bolo se evitará con idéntico número de unidades de insulina. Si realmente quieres llegar a la misma insulina dos veces en una breve sucesión, sólo espera dos minutos más y luego reentrega el bolo de nuevo. Si el primer bolo se ha interrumpido o no se ha entregado por otras razones, puede volver a enviar inmediatamente el bolo desde AAPS 2.0.
* El segundo plano es un mecanismo de seguridad que lee la historia del bolo de la bomba antes de enviar un bolo nuevo para calcular correctamente la insulina a bordo (IOB), incluso cuando un bolo se entrega directamente desde la bomba. Las entradas indistinguibles deben evitarse.

![Doble bolo](https://raw.githubusercontent.com/T-o-b-i-a-s/ComboLooping/f9c56c930dc564c1649cd8e3764e077ffc02c5ef/resources/Doppelbolus.png)

* Este mecanismo también es responsable de una segunda causa del error: Si durante el uso de la calculadora en bolo se entrega otro bolo a través de la bomba y, por lo tanto, cambia la historia del bolo, la base del cálculo del bolo es errónea y el bolo es abortado. 

![Bolo cancelado](https://raw.githubusercontent.com/T-o-b-i-a-s/ComboLooping/f9c56c930dc564c1649cd8e3764e077ffc02c5ef/resources/History_changed.png)