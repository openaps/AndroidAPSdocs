# Recomendaciones generales para MCG

## Higiene del MCG

Uses el sistema MCG que uses, si vas a calibrar con sangre, debes seguir unas reglas muy claras, tanto si usas software MCG DIY como las apps oficiales.

-   Asegúrate de que tus manos y el material estén limpios.
-   Intenta calibrar cuando tengas una serie de puntos con una flecha plana (normalmente bastan 15–30 minutos)
-   Evita calibrar cuando la glucosa está subiendo o bajando.
-   Haz calibraciones «suficientes»: en las apps oficiales, se te pedirá una o dos comprobaciones al día. En los sistemas DIY puede que no se te pida, y debes tener cuidado si sigues sin calibrar.
-   Con sensores que no necesitan o no permiten calibración, comprueba al menos una vez al día tu glucosa real en sangre. AAPS será tan seguro como fiables sean las lecturas de tu sensor.
-   If at all possible, calibrate with some of your readings in a lower range (4-5mmol/L or 72-90mg/dL) and some at a slightly higher level (7-9mmol/L or 126-160mg/dL) as this provides a better range for the point/slope calibration.

## Configurando el sensor (G6)

Al colocar el sensor, se recomienda no presionar el aplicador con demasiada fuerza para evitar el sangrado. Los contactos del sensor no deben entrar en contacto con la sangre.

Después de colocar el sensor, se puede encajar el transmisor en el soporte del sensor. ¡Precaución! Primero encaja el lado cuadrado y después presiona el lado redondo.

(general-cgm-troubleshooting)=
## Solucionando problemas

### Problemas de conexión

La conexión Bluetooth puede ser alterada por otros dispositivos Bluetooth cercanos como, por ejemplo, medidores de glucosa en sangre, auriculares, tabletas o dispositivos de cocina tales como hornos de microondas o placas de cerámica. En este caso, xDrip no muestra ningún valor de glucosa. Cuando se restablece la conexión Bluetooth, se rellenan los datos que faltan (backfill).

### Errores de sensor

Si se producen errores del sensor repetidos, prueba a colocar el sensor en otra zona del cuerpo. Los contactos del sensor no deben entrar en contacto con la sangre.

¡A menudo un «Sensor Error» (error del sensor) se puede corregir bebiendo enseguida y masajeando alrededor del sensor!

### Valores inestables

Puedes probar a cambiar los ajustes de bloqueo de ruido en xDrip (Settings - Inter-App Settings - Noise Blocking), por ejemplo a «Block Very High noise and worse». Consulta también [Suavizado de los datos de glucosa en la sangre](../CompatibleCgms/SmoothingBloodGlucoseData.md).

### Edad de sensor negativa

![Edad del sensor en la fila Sensor del panel de estado ampliado](../images/main/main_status_row_expanded.png)

La edad del sensor se muestra en la fila **Sensor** del panel de estado de la pantalla principal (pulsa la flecha para ampliarlo). A negative age occurs if there is either a double "Sensor Insert" [careportal entry](#aaps-screens-careportal) or a sensor insert with wrong date. Abre **Historial de tratamientos** (menú ☰), selecciona la pestaña **Portal de cuidados** y borra la entrada incorrecta.
