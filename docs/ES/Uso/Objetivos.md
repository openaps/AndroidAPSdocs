# Objetivos

AndroidAPS tiene una serie de Objetivos que deben completarse para guiarlo a través de las características y configuraciones de lazo cerrado de manera segura. Estos, aseguran que ha configurado correctamente todo lo detallado en las secciones anteriores, y que comprende lo que está haciendo su sistema y por qué, de modo que pueda confiar en él. 
Si está actualizando teléfonos, puede exportar su configuración para mantener su progreso con los objetivos; 
* en los tres puntos en la esquina superior derecha, seleccione Exportar configuración, le dirá a qué carpeta ha exportado el archivo.
* En su nuevo teléfono copie el archivo a esa ubicación y luego seleccione Importar configuración. No solo se guardará su progreso a través de los objetivos, sino también su configuración de seguridad, como el máximo bolo, etc. 
* Si no exporta e importa su configuración, deberá volver a comenzar los objetivos desde el principio. 
* Es una buena idea hacer una copia de seguridad de su configuración con frecuencia, para guardar su progreso.

## Objetivo 1

Configurar la visualización y la monitorización, analizar los valores basales y las ratios.

* Seleccione la fuente correcta de glucosa en sangre para su configuración. Ver [Fuente de datos de glucemia](https://github.com/Lillycgm/AndroidAPSdocs/blob/master/docs/ES/Configuracion/Fuente%20de%20datos%20Glucemia.md) para más información.
* Seleccione la bomba correcta en ConfigBuilder (seleccione Virtual Pump si está utilizando un modelo de bomba sin controlador AndroidAPS para lazo abierto) para garantizar que el estado de su bomba pueda comunicarse con AndroidAPS. Si usa la bomba DanaR, asegúrese de haber seguido las instrucciones de la bomba de insulina [DanaR](https://github.com/MilosKozak/AndroidAPS/wiki/DanaR-Insulin-Pump) para garantizar el vínculo entre la bomba y el sistema AndroidAPS.
* Siga las instrucciones en la página de [Nightscout](https://github.com/Lillycgm/AndroidAPSdocs/blob/master/docs/ES/Instalando%20AndroidAPS/Nightscout.md) para asegurarse de que Nightscout pueda recibir y mostrar esta información.
 <br><br>_Es posible que deba esperar a que llegue la próxima lectura de glucosa antes que AndroidAPS la reconozca._

## Objetivo 2

Comenzar en un lazo abierto.

* Seleccione lazo abierto en Preferencias, o presionando y manteniendo presionado el botón Loop en la esquina superior izquierda de la pantalla de inicio.
* Navegue a través de las Preferencias para configurarlo para ti.
* Introducir manualmente al menos 20 de las sugerencias para la basal temporal durante un período de 7 días; introdúzcalos en su bomba y confirme en AndroidAPS que los ha aceptado. Asegúrese de que esta información se muestre en AndroidAPS y Nightscout.

## Objetivo 3

Comprender su ciclo abierto, incluidas sus recomendaciones basales temp.

Comience a comprender el pensamiento detrás de las recomendaciones basales temporales al observar la [lógica basal de determinación](https://openaps.readthedocs.io/en/latest/docs/While%20You%20Wait%20For%20Gear/Understand-determine-basal.html) y la línea de pronóstico en la pantalla de inicio de AndroidAPS / Nightscout y el resumen de resultados de los cálculos en su pestaña de OpenAPS.

 <br><br>_Deberá establecer su objetivo más alto de lo normal hasta que tenga confianza en los cálculos y la configuración. El sistema permite que un objetivo bajo sea como mínimo 4 o máximo de 10, y un objetivo alto como mínimo de 5 y máximo de 15. Un objetivo temporal como valor único puede ser cualquierar dentro del rango de 4 a 15. El objetivo es el valor en el que se basan los cálculos, y no el mismo en el que intenta mantener sus valores de glucosa en sangre. Si su objetivo es muy amplio (por ejemplo, 3 o más mmol de ancho), con frecuencia encontrará que debido a que se predice que la glucosa en sangre estará en algún lugar dentro de ese amplio rango, no se sugieren muchas tasas basales temporales fluctuantes. Es posible que desee experimentar ajustando sus objetivos para que estén más cerca (por ejemplo, 1 o menos mmol de ancho) y observe cómo el comportamiento de su sistema cambia como resultado. Puede ver un rango más amplio (líneas verdes) en el gráfico de los valores que desea mantener dentro de su glucosa sanguínea al poner diferentes valores en Preferencias> Rango para visualización._
<br><br>_Deténgase aquí si tiene lazo abierto con una bomba virtual: no haga clic en Verificar al final de este objetivo._

## Objetivo 4

Comenzar a cerrar el lazo con baja suspensión de glucosa.

Seleccione Closed Loop desde Preferencias, o presionando y manteniendo presionado el botón Abrir lazo en la parte superior izquierda de la pantalla de inicio.
Establezca su rango objetivo un poco más alto de lo que normalmente busca, solo por seguridad.
Observe cómo los valores basales temporales están activas al ver el texto basal azul en la pantalla de inicio o la línea basal azul render en el gráfico de la pantalla de inicio.
Asegúrese de que su configuración haya sido compatible con AndroidAPS para evitar tener que tratar un nivel bajo de glucosa en un período de 5 días. Si todavía tiene episodios frecuentes o graves de baja glucosa, considere la posibilidad de afinar su DIA, basal, ISF y ratios de carbohidratos.
 <br><br>_El sistema anulará la configuración de maxIOB a cero, lo que significa que si la glucosa en sangre disminuye, puede reducir el nivel basal, pero si la glucosa en sangre está subiendo, entonces solo aumentará basal si el IOB es negativo (a partir de un bajo nivel previo de suspensión de glucosa). de lo contrario, las tasas basales seguirán siendo las mismas que su perfil seleccionado. Es posible que experimente picos temporalmente después de hypos tratados sin la capacidad de aumentar basal en el rebote._

## Objetivo 5

Ajustar el lazo cerrado, elevar la IOB máxima por encima de 0 y disminuir gradualmente los objetivos de BG.

* Aumente su maxIOB por encima de 0 durante un 1 día, se recomienda por defecto que sea 2 días, pero debe trabajar lentamente hasta que sepa que su configuración funciona para usted.
* Una vez haya afinado cuánta IOB se adapta a sus patrones de lazo, reduzca sus objetivos al nivel deseado.

## Objetivo 6

Ajustar los valores basales y ratios si es necesario, y luego habilitar el autosens.

* Puede usar [autotune](https://openaps.readthedocs.io/en/latest/docs/Customize-Iterate/autotune.html) como única para verificar que sus basales sigan siendo precisos, o hacer una prueba basal tradicional.
* Habilite [auto-sens](https://github.com/MilosKozak/AndroidAPS/wiki/Open-APS-features) durante un período de 7 días y observe cómo la línea blanca en el gráfico de la pantalla de inicio muestra cómo puede aumentar o disminuir su sensibilidad a la insulina como resultado del ejercicio u hormonas, etc., Observe la pestaña del informe de OpenAPS cómo AndroidAPS está ajustando los basales y / o objetivos en consecuencia.
 <br><br>_No olvide registrar su lazo en [este formulario](http://bit.ly/nowlooping), registrando AndroidAPS como su tipo de software de lazo cerrado DIY, si aún no lo ha hecho._

## Objetivo 7

Habilitar funciones adicionales para el uso diurno, como asistencia avanzada para la comida.

* Ahora que ya se siente seguro con funcionamiento de AndroidAPS y los ajustes que mejor reflejan su diabetes, puede, durante un período de 14 días, probar funciones adicionales que automaticen aún más el trabajo para usted.
