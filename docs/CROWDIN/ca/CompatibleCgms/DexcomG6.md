# Dexcom G6 i ONE

## Primer, el més bàsic

-   Seguiu les recomanacions generals d'higiene del CGM i de col·locació del sensor [aquí](../CompatibleCgms/GeneralCGMRecommendation.md).

## Consells generals per fer el llaç amb el G6 i el ONE

- Els transmissors recents es diuen Firefly. Els sensors no es poden reiniciar sense treure el transmissor, i el transmissor no es pot restablir. A més, no generen dades en brut (raw).

- Si reinicieu sensors, assegureu-vos que esteu preparats per calibrar i vigileu les variacions.

- Una inserció prèvia (pre-soak) del G6/ONE amb el calibratge de fàbrica probablement donarà variacions en els resultats. Si feu una inserció prèvia (pre-soak), per tenir els millors resultats probablement haureu de calibrar el sensor.

Llegiu-ne més a l'[article](https://www.diabettech.com/artificial-pancreas/diy-looping-and-cgm/) publicat per Tim Street a [www.diabettech.com](https://www.diabettech.com).

## If using G6 or ONE with xDrip

- If not already set up, download [xDrip](https://github.com/NightscoutFoundation/xDrip) and adjust its settings following the [xDrip settings page](../CompatibleCgms/xDrip.md).
- Seleccioneu xDrip a [**Configurador → Origen glucèmia**](#Config-Builder-bg-source).
- Els transmissors Dexcom G6 i ONE es poden connectar alhora al receptor Dexcom (o bé a la bomba t:slim) i a una aplicació del telèfon.
- When using xDrip as receiver uninstall the Dexcom app first. **You cannot connect xDrip and Dexcom app with the transmitter at the same time!**
- If you need Clarity and want to profit from xDrip alarms use the [BYODA](#DexcomG6-if-using-g6-with-build-your-own-dexcom-app) (only G6) with local broadcast to xDrip.
- You can also use xDrip as a companion app of the official Dexcom app, but you might experience delays in BG readings. To read the Dexcom app notifications without xDrip, as a trusted data source, use the [Notification Reader](#DexcomG6-notification-reader).
- xDrip always uses the transmitter's [native algorithm](https://navid200.github.io/xDrip/docs/Native-Algorithm.html) with current transmitters; there is no reason to disable it. [Preemptive restarts](https://navid200.github.io/xDrip/docs/Preemptive-Restart.html) only function on old transmitters (firmware 1.6.5.25 or earlier), where they are needed to prevent the sensor stopping after 10 days; recent (Firefly) transmitters ignore them. See [Restart a sensor](https://navid200.github.io/xDrip/docs/Restart-G6-sensor.html) before attempting any restart.
- Everything related to the sensor and transmitter themselves is documented on the [xDrip Dexcom page](https://navid200.github.io/xDrip/docs/Dexcom_page.html).

(DexcomG6-if-using-g6-with-build-your-own-dexcom-app)=
## Si feu servir el G6 amb Build Your Own Dexcom App

```{admonition} Old app version
:class: warning
Dexcom BYODA ara és una versió molt antiga de l'aplicació i no es pot actualitzar.
```

-   [Build Your Own Dexcom App](https://docs.google.com/forms/d/e/1FAIpQLScD76G0Y-BlL4tZljaFkjlwuqhT83QlFM5v6ZEfO7gCU98iJQ/viewform?fbzx=2196386787609383750) (BYODA) supports local broadcast to AAPS and/or xDrip

-   Aquesta aplicació us permet fer servir el Dexcom G6 amb qualsevol telèfon intel·ligent Android.
-   Desinstal·leu l'aplicació original de Dexcom o l'aplicació de Dexcom modificada si abans en fèieu servir alguna (**no atureu** el sensor que està en marxa)
-   Instal·leu l'apk descarregat
-   Introduïu el codi del sensor i el número de sèrie del transmissor a l'aplicació modificada.
-   A la configuració del telèfon, aneu a aplicacions > Dexcom G6 > permisos > permisos addicionals i premeu 'Accés a l'aplicació Dexcom' (Access Dexcom app).
-   After a short time BYODA should pick up the transmitter signal.

### Configuració per a AAPS

-   Select **BYODA** in [**Configuration → BG Source**](#Config-Builder-bg-source).

-   If you don't receive any values select any other data source, then re-select **BYODA** to trigger the demand for permissions to establish the connection between AAPS and BYODA-broadcast.

### Settings for xDrip

-   Seleccioneu '640G/Eversense' com a origen de dades.
-   Command 'start sensor' must be performed in xDrip in order to receive values. Això no afecta el sensor actual controlat per Build Your Own Dexcom App.

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
-   Make sure the Dexcom app shows the current glucose value in its notification. Les seves notificacions han de continuar visibles: no les silencieu ni les amagueu.
-   Use the same glucose units (mg/dL or mmol/L) in the Dexcom app as in **AAPS**. Otherwise **AAPS** cannot read the value.

### Configuració a AAPS

-   Select **Notification Reader** in [**Configuration → BG Source**](#Config-Builder-bg-source) and confirm the switch.

    ![BG Source: Notification Reader selected](../images/NotificationReader_BgSource.png)

-   Back on the main screen, **AAPS** shows **Permissions Required**. Next to **Notification Access**, tap **Grant**.

    ![Permissions Required: Notification Access](../images/NotificationReader_Permissions.png)

-   Android opens its notification access list (its name depends on your Android version, for example *Notification read, reply & control*). Select **AAPS**, turn on **Allow notification access** and confirm with **Allow**.

    ![Android asks to allow notification access for AAPS](../images/NotificationReader_AllowDialog.png)

    Android warns that **AAPS** could read all your notifications. **AAPS** only reads the notifications of supported CGM apps and ignores all others.

    ![Notification access allowed for AAPS](../images/NotificationReader_AccessOn.png)

-   If **Allow notification access** is greyed out (*Controlled by Restricted Setting*), Android blocks it because **AAPS** was not installed from the Play Store. Open the **AAPS** app info (long press the **AAPS** icon > **App info**), tap the three dots menu at the top right and select **Allow restricted settings**. Després torneu a la pantalla d'accés a les notificacions i permeteu-lo.
-   Readings appear in **AAPS** when the Dexcom app shows a new value.

```{warning}
If the Dexcom app notification shows more than one glucose number, or none, **AAPS** skips that notification.
```


(DexcomG6-troubleshooting-g6)=
## Resolució de problemes del G6 i el ONE

### Resolució de problemes específica del Dexcom G6/ONE

-   Desplaceu-vos fins a **Troubleshooting** [aquí](https://navid200.github.io/xDrip/docs/Dexcom_page.html).

### Resolució de problemes general

Trobareu la resolució de problemes general dels CGM [aquí](#general-cgm-troubleshooting).

### Transmissor nou amb un sensor en marxa

Si heu de canviar el transmissor durant una sessió de sensor en marxa, podeu provar de treure el transmissor sense fer malbé el suport del sensor. Trobareu un vídeo [aquí](https://navid200.github.io/xDrip/docs/Remove-transmitter.html). Si en canvi trieu [aquesta solució](https://youtu.be/tx-kTsrkNUM), aneu amb compte de no [fer malbé els contactes del sensor](https://navid200.github.io/xDrip/docs/Petroleum-jelly-in-Dexcom-G6-Sensor.html) amb la tira.
