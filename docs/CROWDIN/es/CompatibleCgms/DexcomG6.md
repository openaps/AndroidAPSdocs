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
- You can also use xDrip as a companion app of the official Dexcom app, but you might experience delays in BG readings. To read the Dexcom app notifications without xDrip, as a trusted data source, use the [Notification Reader](#DexcomG6-notification-reader).
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
-   After a short time BYODA should pick up the transmitter signal.

### Ajustes para AAPS

-   Selecciona **Dexcom (BYODA)** en [**Configuración → Fuente de glucosa**](#Config-Builder-bg-source).

-   Si no recibes ningún valor, selecciona cualquier otra fuente de datos y luego vuelve a seleccionar **Dexcom (BYODA)** para que se pidan los permisos que establecen la conexión entre AAPS y la transmisión de BYODA.

### Ajustes para xDrip

-   Selecciona '640G/Eversense' como fuente de datos.
-   Para recibir valores, hay que ejecutar el comando 'start sensor' en xDrip. Esto no afecta a tu sensor actual, controlado por Build Your Own Dexcom App.

(DexcomG6-notification-reader)=
## If using G6 or ONE with the Notification Reader

The official Dexcom G6 or ONE app stays connected to the transmitter. **AAPS** reads the glucose value directly from the notification of the Dexcom app, without any other app in between.

```{admonition} Trusted data source
:class: note
Readings from the Dexcom G6 and ONE apps are a [trusted BG data source](#GettingStarted-TrustedBGSource): SMBs can be allowed all the time.
```

Compared to BYODA or xDrip, the Notification Reader has limits:

- **No trend arrow** and **no backfill**: readings missed while the phone was off or out of range are lost.
- Each reading gets the time the notification appeared, not the exact time of the sensor reading.
- Only values between 40 and 405 mg/dL (2.2 and 22.5 mmol/L) are read. "LOW" and "HIGH" are not read.

### Set up the Dexcom app

-   Keep the Dexcom app installed and connected to the transmitter.
-   Make sure the Dexcom app shows the current glucose value in its notification. Sus notificaciones deben seguir visibles: no las silencies ni las ocultes.
-   Use the same glucose units (mg/dL or mmol/L) in the Dexcom app as in **AAPS**. Otherwise **AAPS** cannot read the value.

### Configuración en AAPS

-   Select **Notification Reader** in [**Configuration → BG Source**](#Config-Builder-bg-source) and confirm the switch.

    ![BG Source: Notification Reader selected](../images/NotificationReader_BgSource.png)

-   Back on the main screen, **AAPS** shows **Permissions Required**. Next to **Notification Access**, tap **Grant**.

    ![Permissions Required: Notification Access](../images/NotificationReader_Permissions.png)

-   Android opens its notification access list (its name depends on your Android version, for example *Notification read, reply & control*). Select **AAPS**, turn on **Allow notification access** and confirm with **Allow**.

    ![Android asks to allow notification access for AAPS](../images/NotificationReader_AllowDialog.png)

    Android warns that **AAPS** could read all your notifications. **AAPS** only reads the notifications of supported CGM apps and ignores all others.

    ![Notification access allowed for AAPS](../images/NotificationReader_AccessOn.png)

-   If **Allow notification access** is greyed out (*Controlled by Restricted Setting*), Android blocks it because **AAPS** was not installed from the Play Store. Open the **AAPS** app info (long press the **AAPS** icon > **App info**), tap the three dots menu at the top right and select **Allow restricted settings**. Después vuelve a la pantalla de acceso a notificaciones y permítelo.
-   Readings appear in **AAPS** when the Dexcom app shows a new value.

```{warning}
If the Dexcom app notification shows more than one glucose number, or none, **AAPS** skips that notification.
```


(DexcomG6-troubleshooting-g6)=
## Solución de problemas del G6 y ONE

### Solución de problemas específica del Dexcom G6/ONE

-   Baja hasta **Troubleshooting** (solución de problemas) [aquí](https://navid200.github.io/xDrip/docs/Dexcom_page.html).

### Solución general de problemas

La solución general de problemas de los MCG está [aquí](#general-cgm-troubleshooting).

### Nuevo transmisor con sensor en ejecución

Si cambias el transmisor durante una sesión de sensor en curso, puedes intentar quitar el transmisor sin dañar el soporte del sensor. Hay un vídeo [aquí](https://navid200.github.io/xDrip/docs/Remove-transmitter.html). Si eliges [esta solución](https://youtu.be/tx-kTsrkNUM), ten cuidado de no [dañar los contactos del sensor](https://navid200.github.io/xDrip/docs/Petroleum-jelly-in-Dexcom-G6-Sensor.html) con la tira.
