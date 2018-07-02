# Trucos para uso básico de Accu Check Combo

## Cómo garantizar operaciones sin problemas

*	Siempre **lleve el teléfono con usted**, déjelo junto a su cama por la noche.
*	Siempre asegúrese de que la batería de la bomba esté lo más llena posible. Consulte la sección de la batería para conocer la batería.
*	Lo mejor es **no tocar la aplicación ruffy** mientras el sistema se está ejecutando. Si la aplicación se inicia nuevamente, la conexión a la bomba puede interrumpirse. Una vez que la bomba está conectada a ruffy, no hay necesidad de volver a conectar. Incluso después de reiniciar el teléfono, la conexión se restablece automáticamente. Si es posible, mueva la aplicación a una pantalla no utilizada o en una carpeta en su teléfono inteligente para que no la abra accidentalmente.
*	Si involuntariamente abre la aplicación ruffy durante el lazo cerrado, lo mejor es reiniciar el teléfono de inmediato.
*	Siempre que sea posible, solo opere la bomba a través de la aplicación AndroidAPS. Para facilitar esto, active el bloqueo de teclas en la bomba bajo **AJUSTES DE BOMBA / BLOQUEO DE TECLA /ON**. Solo cuando cambie la batería o el cartucho, es necesario usar las teclas de la bomba. 
![Keylock](https://github.com/T-o-b-i-a-s/ComboLooping/blob/master/resources/keylock.png?raw=true)

## La bomba no está accesible. ¿Qué hacer?

### Activar la alarma de bomba inalcanzable

* En AndroidAPS, vaya a Configuración / Alarmas locales y active la alarma cuando la bomba no esté disponible y configure la bomba como límite no alcanzable [Min] en 31 minutos.
* Esto le dará tiempo suficiente para no activar la alarma al salir de la habitación mientras el teléfono está sobre la mesa, pero le informa si no se puede alcanzar la bomba por un tiempo que exceda la duración de una frecuencia basal temporal.
Restablecer la accesibilidad de la bomba

### Restaurar la accesibilidad a la bomba
Cuando AndroidAPS informa una alarma de **bomba inalcanzable**, primero suelte el candado y **presione cualquier tecla en la bomba** (por ejemplo, el botón "hacia abajo"). Tan pronto como la pantalla de la bomba se haya apagado, presione **ACTUALIZAR** en la pestaña Combo en AndroidAPS. En general, la comunicación funciona nuevamente.
Si eso no ayuda, reinicie su teléfono inteligente. Después del reinicio, AndroidAPS y ruffy se reactivarán y se establecerá una nueva conexión con la bomba.
Las pruebas con diferentes teléfonos inteligentes han demostrado que ciertos teléfonos inteligentes disparan el error de "bomba inalcanzable" más a menudo que otros. AAPS Phones enumera teléfonos inteligentes probados con éxito.

## Causas y consecuencias de frecuentes errores de comunicación

* En teléfonos con **poca memoria** (o configuraciones agresivas de ahorro de energía), AndroidAPS a menudo se apaga. Usted puede saber por el hecho de que los botones Bolus y Calculator en la pantalla de inicio no se muestran al abrir AAPS porque el sistema se está inicializando. Esto puede disparar "alarmas de bomba inalcanzable" al inicio. En el campo **Última conexión** de la pestaña Combo, puede verificar cuándo AndroidAPS se comunicó por última vez con la bomba.

![Bomba inalcanzable](https://raw.githubusercontent.com/T-o-b-i-a-s/ComboLooping/master/resources/Pump_Unreachable.png)
![No hay conexión con la bomba](https://raw.githubusercontent.com/T-o-b-i-a-s/ComboLooping/master/resources/No_connection_to_pump.png)


* Este error puede drenar la batería de la bomba más rápido porque el perfil basal se lee desde la bomba cuando se reinicia la aplicación.
* También aumenta la probabilidad de causar el error que hace que la bomba rechace todas las conexiones entrantes hasta que se presione un botón de la bomba.

## La cancelación de la tasa basal temporal falla

Ocasionalmente, AndroidAPS no puede cancelar automáticamente una alerta **TBR CANCELADA**. Luego debe presionar **ACTUALIZAR** en la **pestaña Combo** de AndroidAPS o se confirmará la alarma en la bomba.

## Consideraciones sobre la batería

### Cambiar la batería

* Después de una alarma de **batería baja**, la batería debe cambiarse lo antes posible para tener siempre la energía suficiente para una comunicación Bluetooth confiable con el teléfono inteligente, incluso si el teléfono está a una distancia más amplia de la bomba.
* Incluso después de una alarma de batería baja, la batería puede usarse durante un tiempo significativo. Sin embargo, se recomienda llevar siempre consigo una batería nueva después de sonar la alarma de "batería baja".
* Para hacer esto, presione prolongadamente **Closed Loop** en la pantalla principal y seleccione **Suspender loop por 1 h**.
* Espere a que la bomba se comunique con la bomba y el logotipo de bluetooth en la bomba se haya desvanecido.

![Bluetooth enabled](https://github.com/T-o-b-i-a-s/ComboLooping/blob/master/resources/Compo.png?raw=true)

* Suelte el bloqueo de la llave en la bomba, ponga la bomba en el modo de parada, confirme una tasa basal temporal posiblemente cancelada y cambie la batería.
* Luego vuelva a poner la bomba en el modo de ejecución seleccione **Reanudar** al presionar prolongadamente  **Suspendido** en la pantalla principal.
* AndroidAPS volverá a establecer una tasa basal temporal necesaria con la llegada del próximo valor de azúcar en la sangre.

### Tipo de batería y causas de la duración corta de la batería

Como la comunicación intensiva con Bluetooth consume mucha energía, solo use **baterías de alta calidad** como Energizer Ultimate Lithium, la "fuente de alimentación" del "gran" paquete de servicio Accu-Chek, o si opta por una batería recargable, use Eneloop baterías.
Los rangos para el tiempo de vida típico de los diferentes tipos de batería son los siguientes:

![Energizer](https://github.com/T-o-b-i-a-s/ComboLooping/blob/master/resources/energizer-l91aa---image.jpg?raw=true)
![onepower](https://github.com/T-o-b-i-a-s/ComboLooping/blob/master/resources/PowerOne.png?raw=true)

* **Energizer Ultimate Lithium**: de 4 a 7 semanas
* **Power One Alkaline (Varta)** del paquete de servicio: 2 a 4 semanas
* **Pilas recargables Eneloop (BK-3MCCE)**: de 1 a 3 semanas

Si la duración de la batería es significativamente más corta que los rangos indicados anteriormente, verifique las siguientes causas posibles:

* La última versión (marzo de 2018) de la aplicación [Ruffy](https://github.com/MilosKozak/ruffy) mejoró significativamente la vida útil de la batería de la bomba. Asegúrese de estar en esa versión si tiene problemas con una vida útil corta de la batería.
* Hay algunas variantes de la tapa de la batería de la bomba Combo, que cortocircuitan parcialmente las baterías y las drenan rápidamente. Las tapas sin este problema pueden ser reconocidas por los contactos dorados de metal.
* Si el reloj de la bomba no "sobrevive" a un corto cambio de batería, es probable que el condensador esté roto, lo que mantiene el reloj en funcionamiento durante un breve corte de energía. En este caso, solo un reemplazo de la bomba por parte de Roche ayudará, lo cual no es un problema durante el período de garantía.
* El hardware y el software del teléfono inteligente (sistema operativo Android y pila de bluetooth) también afectan la vida útil de la batería de la bomba, aunque aún no se conocen por completo los factores exactos. Si tiene la oportunidad, pruebe con otro teléfono inteligente y compare la vida útil de la batería.

## Cambios en el horario de verano

* Actualmente, el controlador combinado no es compatible con el ajuste automático del tiempo de la bomba.
* Durante la noche del cambio de horario de verano, la hora del teléfono inteligente se actualiza, pero el tiempo de la bomba no cambia. Esto genera una alarma debido a los tiempos de desviación entre los sistemas a las 3 a. M.
* Si no quiere que lo despierten por la noche, **desactive el cambio de horario de verano automático en el teléfono móvil** la noche antes del cambio de hora y ajuste las horas manualmente a la mañana siguiente.

## Bolo extendido, bolo de múltiples ondas

El algoritmo OpenAPS no es compatible con un bolus extendido paralelo o bolo de múltiples ondas. Pero un tratamiento similar se puede lograr con las siguientes alternativas:

* Antes de comer, en la pestaña **Acciones** en AndroidAPS se establece como un objetivo de **Eating soon** con glucosa objetivo 80 durante varias horas. La duración debe basarse en el intervalo que elegiría para un bolo extendido.
* Luego use el CALCULADOR para ingresar los carbohidratos completos de la comida, pero no aplique directamente los valores sugeridos por la calculadora de bolo. Si se va a administrar un bolo de tipo onda múltiple, ingrese la porción de carbohidratos como un bolo. Dependiendo de la comida, el algoritmo ahora tiene que entregar una tasa basal temporaria muy alta para contrarrestar el aumento de azúcar en la sangre. Aquí, la limitación de seguridad de la tasa basal (IE máximo / h, IOB basal máxima) debe experimentarse con mucho cuidado y, si es necesario, cambiarse temporalmente.

![Objetivo temporal](https://raw.githubusercontent.com/T-o-b-i-a-s/ComboLooping/master/resources/Temporary_Target.png)

* Alternativamente, en la pestaña Acciones en AndoidAPS, se puede realizar un **cambio de perfil** con la duración del bolo diferido y un porcentaje mayor. No hay necesidad de otro perfil (por ejemplo, en Nightscout). El porcentaje correcto se puede calcular a partir de la tasa basal promedio durante el período seleccionado y la cantidad de insulina necesaria. Por lo tanto, un bolo extendido deseado de 4 UI durante 4 horas a una tasa basal de 0,5 UI / h requeriría una tasa basal temporal de 300%.

![basal temporal](https://raw.githubusercontent.com/T-o-b-i-a-s/ComboLooping/master/resources/Profile_Switch.png)

* Si tiene la tentación de utilizar simplemente el bolus extendido o de múltiples ondas directamente en la bomba, AndroidAPS lo penalizará con la desactivación del circuito cerrado durante las próximas seis horas para asegurarse de que no se calcule el exceso de dosificación de insulina.

![Disabled loop after multiwave bolus](https://raw.githubusercontent.com/T-o-b-i-a-s/ComboLooping/master/resources/Multiwave_Bolus.png)

## Alarmas en la entrega del bolo

* Si AndroidAPS detecta que un identificador idéntico se ha entregado correctamente en el mismo minuto, se evitará la administración del bolo con un número idéntico de unidades de insulina. Si realmente desea inyectar el mismo inuslin dos veces en sucesión corta, solo espere dos minutos más y luego administre el bolo nuevamente. Si el puño en bolo ha sido interceptado o no se ha entregado por otros motivos, puede volver a enviar el bolus inmediatamente desde AAPS 2.0.
* El trasfondo es un mecanismo de seguridad que lee el historial del bolo de la bomba antes del envío de un nuevo bolo para calcular correctamente la insulina a bordo (IOB), incluso cuando un bolo se administra directamente desde la bomba. Aquí las entradas indistinguibles deben ser prevenidas.

![Doble bolo](https://raw.githubusercontent.com/T-o-b-i-a-s/ComboLooping/f9c56c930dc564c1649cd8e3764e077ffc02c5ef/resources/Doppelbolus.png)

* Este mecanismo también es responsable de una segunda causa del error: si durante el uso del calculador de bolo se administra otro bolo a través de la bomba y de ese modo cambia el historial del bolo, la base del cálculo del bolo es incorrecta y el bolo se cancela.

![Bolo cancelado](https://raw.githubusercontent.com/T-o-b-i-a-s/ComboLooping/f9c56c930dc564c1649cd8e3764e077ffc02c5ef/resources/History_changed.png)

