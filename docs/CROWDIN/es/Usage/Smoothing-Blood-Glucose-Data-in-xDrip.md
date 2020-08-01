# Suavizado de los datos de glucosa en la sangre

Si los datos de BG son variables/ruidosos, la AAPS puede inyectar incorrectamente la insulina lo que resulta en BG altos o bajos. Por esta razón, es importante inhabilitar el lazo hasta que se resuelva el problema. Dependiendo de su MCG, estos problemas pueden deberse a la configuración de los mismos o a problemas de sensor/sitio. You may need to replace your CGM sensor to resolve this. Algunas características como 'Habilitar SMB siempre' y 'Habilitar SMB después de carbohidratos' sólo se pueden utilizar con una fuente BG con buen filtrado.

## Aplicación de DexcomG5 (parcheada)

Cuando se utiliza Dexcom G5 App (parcheado), los datos de BG son fluidos y consistentes. No hay restricciones en el uso de SMB.

## xDrip+ con Dexcom G5

Smooth enough data is only delivered if you use xDrip+ G5 'OB1 collector in native mode'.

## xDrip+ con Freestyle Libre

Cuando se utiliza xDrip+ como fuente de datos para los valores del Freestyle Libre hasta ahora no se puede activar "Habilitar SMB siempre' y 'permitir las SMB después de hidratos de carbono" dentro de las SMB debido a que los valores de BG no son lo suficientemente suaves. Excepto esto, hay un par de cosas que se pueden hacer para ayudar a reducir el ruido en los datos.

**Suave Ruido Del Sensor.** En xDrip+ Ajustes > xDrip+ Configuración de la Pantalla asegúrese de que el Suavizado de Ruido del Sensor está activado. Esto intenta aplicar suavizado a los datos ruidosos.

**Suavizado de Ruido Del Sensor (Ultrasensible).** Si usted todavía está viendo datos ruidosos en xDrip+ puede aplicar un más agresivo suavizado mediante el ajuste de Suavizado de Ruido del Sensor (Ultrasensible). Esto intentará aplicar suavizado incluso en niveles muy bajos de ruido detectado. Para ello, en primer lugar [habilite el modo de ingeniería en xDrip+](https://github.com/MilosKozak/AndroidAPS/wiki/Enabling-Engineering-Mode-in-xDrip). A continuación, vaya a Configuración > xDrip+ Configuración de la Pantalla y activar Suavizado de Ruido del Sensor (Ultrasensible).