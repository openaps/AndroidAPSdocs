# Trucos y consejos

El principio fundamental del lazo cerrado es que la tasa basal y los ratios insuliana-carbohidratos es precisa. Todas las recomendaciones asumen que se satisfacen sus necesidades basales y que cualquier picos o valles que esté viendo son el resultado de otros factores que, por lo tanto, requieren ajustes inesperados (ejercicio, estrés, etc.). Los ajustes que el lazo cerrado puede hacer por motivos de seguridad, han sido limitados (ver la tasa basal temporal máxima permitida en el Diseño en los [doc de referencia de OpenAPS](https://openaps.org/reference-design/)), lo que significa que no quiere desperdiciar la dosis permitida al corregir un basal subyacente incorrecto. Si, por ejemplo, con frecuencia tiene poca experiencia al acercarse una comida, es probable que sus necesidades basales se ajusten. Puede usar [autotune](http://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autotune.html#phase-c-running-autotune-for-suggested-adjustments-without-an-openaps-rig) para ajustar los valores basales y / o ISF, y también si es necesario cambiar la ratio insulina-carbohidratos. O puede probar y establecer su basal a la [antigua usanza](http://integrateddiabetes.com/basal-testing/).

## Prácticas de lazo cerrado

*	Si no desea que sus preferencias se cambien fácilmente, puede proteger con contraseña el menú de preferencias seleccionando en el menú de preferencias "contraseña para configuración" escribiendo la contraseña que elija. La próxima vez que vaya al menú de preferencias, le pedirá esa contraseña antes de seguir adelante. Si luego desea eliminar la opción de contraseña, vaya a "contraseña de configuración" y elimine el texto.


*	Si planeas usar la aplicación de Android Wear para poner un bolo o cambiar la configuración, entonces debes asegurarte de que las notificaciones de AndroidAPS no estén bloqueadas. La confirmación de la acción se produce mediante notificación.

*	Si quita la bomba para ducharse/bañarse/nadar/deporte, etc., mantenga presionado el texto "Abrir lazo"/"lazo cerrado" en la página principal y seleccione "desconectar para ..." las horas que planifique desconectarse. Esto establecerá tu basal a cero para ese período de tiempo. El tiempo mínimo de desconexión se debe a la longitud mínima de TBR que se puede configurar en la bomba, por lo que, si desea desconectarse por un período de tiempo más corto o desea conectar su bomba antes de lo esperado, mantenga presionada la tecla "Suspendido (X minutos) " y seleccione " Reanudar ". Su IOB será la correcta para los cálculos a su regreso a la bomba.

*	Por seguridad, las recomendaciones hechas se basan, no una lectura de MCG, sino el delta promedio. Por lo tanto, si omite algunas lecturas, es posible que tarde un tiempo en recuperar datos antes de que AndroidAPS inicie de nuevo el lazo.

*	Hay varios blogs con buenos consejos para ayudarlo a comprender los aspectos prácticos del lazo cerrado:
     * [Fine-tuning Settings](http://seemycgm.com/2017/10/29/fine-tuning-settings/) See my CGM
     * [Why DIA matters](http://seemycgm.com/2017/08/09/why-dia-matters/) See my CGM
     * [Limiting meal spikes](https://diyps.org/2016/07/11/picture-this-how-to-do-eating-soon-mode/) #DIYPS
     * [Hormones and autosens See myCGM](http://seemycgm.com/2017/06/06/hormones-2/) See my CGM

## Baterías

El lazo cerrado puede reducir la batería de la bomba más rápido que el uso normal porque el sistema interactúa a través de bluetooth mucho más de lo que lo hace un usuario sin lazo. Lo mejor es cambiar la batería al 25% ya que la comunicación se convierte en un desafío. Puede establecer alarmas de advertencia para la batería de la bomba mediante el uso de la variable PUMP_WARN_BATT_P en su sitio de Nightscout. Los trucos para aumentar la duración de la batería incluyen:
*	reduzca el tiempo que la pantalla LCD permanece encendida (dentro del menú de configuración de la bomba)
*	reducir el tiempo de la luz de fondo (dentro del menú de configuración de la bomba)
*	seleccione las configuraciones de notificación a un pitido en lugar de vibrar (dentro del menú de configuración de la bomba)
*	solo presione los botones de la bomba para volver a cargar, use AndroidAPS para ver todo el historial, el nivel de la batería y el volumen del reservorio.
*	La aplicación AndroidAPS a menudo se puede cerrar para ahorrar energía o liberar RAM en algunos teléfonos. Cuando AndroidAPS se reinicia en cada inicio, establece una conexión Bluetooth con la bomba y vuelve a leer la tasa basal actual y el historial de bolos lo que consume batería. Para ver si esto está sucediendo, vaya a Preferencias> NSClient y habilite 'Iniciar aplicación de inicio de sesión en NS'. Nightscout recibirá un evento en cada reinicio de AndroidAPS, lo que facilita el seguimiento del problema. Para evitar que esto suceda, incluya en la lista la aplicación AndroidAPS en la configuración de la batería del teléfono para evitar que el monitor de alimentación de la aplicación la cierre.
*	Limpie los terminales de la batería con una toallita con alcohol para asegurar que no quede cera / grasa de fabricación.
*	para las bombas DanaR / RS, el procedimiento de arranque genera una gran corriente en la batería para romper la película de pasivación (evita la pérdida de energía durante el almacenamiento), pero no siempre funciona para romperla al 100%. Retire o reinserte la batería 2-3 veces hasta que muestre el 100% en la pantalla, o use la llave de la batería para cortocircuitar brevemente la batería antes de la inserción aplicándola a ambos terminales por una fracción de segundo.
*	vea también más consejos para tipos particulares de batería para usar con la bomba Combo [aquí (enlace en inglés)](https://github.com/MilosKozak/AndroidAPS/wiki/Accu-Chek-Combo:-Tipps-for-Basic-usage#battery-type-and-causes-of-short-battery-life) 

## Cambio de reservorios y cánulas

El cambio de reservorio no puede realizarse a través de AndroidAPS, sino que debe llevarse a cabo como antes directamente a través de la bomba.
*	Mantenga pulsado "Abrir lazo" / "Cerrar lazo" en la pestaña Inicio de AndroidAAPS y seleccione "Suspender lazo durante 1 h"
*	Desconecte la bomba y cambie el reservorio según las instrucciones de la bomba.
*	Una vez que se vuelva a conectar a la bomba, continúe el ciclo presionando durante un tiempo 'Suspendido (X m)'.

El cambio de cánula no usa la función "cebar el sistema de infusión" de la bomba, sino que llena el conjunto de infusión y / o la cánula con un bolo que no aparece en el historial del bolo. Esto significa que no interrumpe una tasa basal temporal actualmente en ejecución. En la pestaña Acciones (Actuar), use el botón PRIME/FILL para configurar la cantidad de insulina necesaria para llenar el conjunto de infusión e iniciar el cebado. Si la cantidad no es suficiente, repita el llenado. Puede establecer los botones de cantidad predeterminados en Preferencias> Otro> Cantidad de insulina estándar de llenado / cebado. Consulte el folleto de instrucciones en su caja de cánulas para saber cuántas unidades deben cebar según la longitud de la aguja y la longitud del tubo.

Otros consejos y trucos se pueden encontrar en el [grupo Facebook](https://www.facebook.com/groups/1900195340201874/)
