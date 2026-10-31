# Dexcom G6 y ONE

## Lo básico primero

-   Sigue las recomendaciones generales de higiene del MCG y de colocación del sensor [aquí](../CompatibleCgms/GeneralCGMRecommendation.md).

## Consejos generales para hacer lazo con G6 y ONE

- Los transmisores recientes se llaman Firefly. Los sensores no se pueden reiniciar sin quitar el transmisor, y el transmisor no se puede restablecer. Además, no generan datos sin procesar (raw).

- Si reinicias sensores, prepárate para calibrar y vigila las variaciones.

- La inserción previa (pre-soak) del G6/ONE con calibración de fábrica probablemente dará variaciones en los resultados. Si haces una inserción previa (pre-soak), para obtener los mejores resultados probablemente tendrás que calibrar el sensor.

Lee más en el [artículo](https://www.diabettech.com/artificial-pancreas/diy-looping-and-cgm/) publicado por Tim Street en [www.diabettech.com](https://www.diabettech.com).

## Si usas el G6 o el ONE con xDrip

- Si todavía no lo tienes, descarga [xDrip](https://github.com/NightscoutFoundation/xDrip) y configúralo según la [página de ajustes de xDrip](../CompatibleCgms/xDrip.md).
- Selecciona xDrip en [**Configuración → Fuente de glucosa**](#Config-Builder-bg-source).
- Los transmisores Dexcom G6 y ONE pueden estar conectados a la vez al receptor Dexcom (o a la bomba t:slim) y a una app en tu teléfono.
- Si usas xDrip como receptor, desinstala primero la app de Dexcom. **¡No puedes conectar xDrip y la app de Dexcom con el transmisor al mismo tiempo!**
- Si necesitas Clarity y quieres usar las alarmas de xDrip, usa [BYODA](#DexcomG6-if-using-g6-with-build-your-own-dexcom-app) (solo G6) con transmisión local (local broadcast) a xDrip.
- También puedes usar xDrip como app complementaria de la app oficial de Dexcom, pero puede haber retrasos en los valores de glucosa.
- Con los transmisores actuales, xDrip siempre usa el [algoritmo nativo](https://navid200.github.io/xDrip/docs/Native-Algorithm.html) del transmisor; no hay motivo para desactivarlo. Los [reinicios preventivos](https://navid200.github.io/xDrip/docs/Preemptive-Restart.html) solo funcionan en transmisores antiguos (firmware 1.6.5.25 o anterior), donde son necesarios para evitar que el sensor se detenga a los 10 días; los transmisores recientes (Firefly) los ignoran. Consulta [Reiniciar un sensor](https://navid200.github.io/xDrip/docs/Restart-G6-sensor.html) antes de intentar cualquier reinicio.
- Todo lo relacionado con el propio sensor y el transmisor está documentado en la [página de Dexcom de xDrip](https://navid200.github.io/xDrip/docs/Dexcom_page.html).

(DexcomG6-if-using-g6-with-build-your-own-dexcom-app)=
## Si usas el G6 con Build Your Own Dexcom App

```{admonition} Old app version
:class: warning
Dexcom BYODA es ahora una versión muy antigua de la app y no se puede actualizar.
```

-   [Build Your Own Dexcom App](https://docs.google.com/forms/d/e/1FAIpQLScD76G0Y-BlL4tZljaFkjlwuqhT83QlFM5v6ZEfO7gCU98iJQ/viewform?fbzx=2196386787609383750) (BYODA) permite la transmisión local a AAPS y/o xDrip

-   Esta app te permite usar tu Dexcom G6 con cualquier teléfono Android.
-   Desinstala la app original de Dexcom o la app de Dexcom parcheada si usabas una de ellas antes (**no detengas** el sensor que está en uso)
-   Instala el apk descargado
-   Introduce el código del sensor y el número de serie del transmisor en la app parcheada.
-   En los ajustes del teléfono, ve a apps > Dexcom G6 > permisos > permisos adicionales y pulsa 'Access Dexcom app'.
-   Después de poco tiempo, BYODA debería recibir la señal del transmisor.

### Ajustes para AAPS

-   Selecciona **Dexcom (BYODA)** en [**Configuración → Fuente de glucosa**](#Config-Builder-bg-source).

-   Si no recibes ningún valor, selecciona cualquier otra fuente de datos y luego vuelve a seleccionar **Dexcom (BYODA)** para que se pidan los permisos que establecen la conexión entre AAPS y la transmisión de BYODA.

### Ajustes para xDrip

-   Selecciona '640G/Eversense' como fuente de datos.
-   Para recibir valores, hay que ejecutar el comando 'start sensor' en xDrip. Esto no afecta a tu sensor actual, controlado por Build Your Own Dexcom App.


(DexcomG6-troubleshooting-g6)=
## Solución de problemas del G6 y ONE

### Solución de problemas específica del Dexcom G6/ONE

-   Baja hasta **Troubleshooting** (solución de problemas) [aquí](https://navid200.github.io/xDrip/docs/Dexcom_page.html).

### Solución general de problemas

La solución general de problemas de los MCG está [aquí](#general-cgm-troubleshooting).

### Nuevo transmisor con sensor en ejecución

Si cambias el transmisor durante una sesión de sensor en curso, puedes intentar quitar el transmisor sin dañar el soporte del sensor. Hay un vídeo [aquí](https://navid200.github.io/xDrip/docs/Remove-transmitter.html). Si eliges [esta solución](https://youtu.be/tx-kTsrkNUM), ten cuidado de no [dañar los contactos del sensor](https://navid200.github.io/xDrip/docs/Petroleum-jelly-in-Dexcom-G6-Sensor.html) con la tira.
